const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');
const {app} = require('./../server');
var {Todo} = require('./../models/todo');


const todos = [{
    _id : new ObjectID(),
    text :"yao hello man"
},{
    _id : new ObjectID(),
    text : "wassap my boy"
}];

beforeEach((done) =>{
    Todo.remove().then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
});

describe('POST /todos',()=>{
    it('Should create new todo',(done) =>{
        var text = 'test text';
        request(app)
            .post('/todos')
            .send({text})
            .expect(200)
            .expect((res) =>{
                expect(res.body.text).toBe(text);
            })
            .end((err,res) =>{
                if (err){
                    return done(err);
                }
                Todo.find({text}).then((todos) =>{
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
                    done();
                }).catch((e) => done(e));
            })

    });
    it('Should not create todo',() =>{
        request(app)
            .post('/todos')
            .send({})
            .expect(400)
            .end((err,res) =>{
                if (err){
                    return done(err);
                }
                Todo.find().then((todos) =>{
                    expect(todos.length).toBe(2);
                    done();
                }).catch((err) => done(err));
            })
    });
});
describe('GET /todos', () =>{
    it ('should get all todos',(done) =>{
        request(app)
            .get('/todos')
            .expect(200)
            .expect((res) =>{
                expect(res.body.todos.length).toBe(2);
            })
            .end(done);
    });
});

describe('GET /todos/:id',() =>{
    it('Should return the todos doc',(done) =>{
        request(app)
            .get(`/todos/${todos[0]._id.toHexString()}`)
            .expect(200)
            .expect((res) =>{
                expect(res.body.todo.text).toBe(todos[0].text);
            })
            .end(done);

    });

});