const { Problem } = require("../models/Problem")

Problem.find({}).remove(() => {
    let problem1 = Problem.create({
        paragraph: 'this is purely a test one'}
    ).then(para1 => {
        para1.push(problem1)
    }).catch(err => {
        callback(err, null)
    })

    let problem2 = Problem.create({
    paragraph: 'this is the second test that we are doing'
    }).then(para2 => {
        para2.push(problem2)
    }).catch(err => {
        callback(err,null)
    })

    let problem3 = Problem.create({
    paragraph: 'this is the third test that we are doing'
    }).then(para3 => {
        para3.push(problem3)
    }).catch(err => {
        callback(err,null);
})
})