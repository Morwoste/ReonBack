const db = require("../db/database.js");

exports.createTable = (req, res) => {
const query = 'CREATE TABLE todolist(id int AUTO_INCREMENT, title VARCHAR(255), text VARCHAR(255), checked BOOLEAN DEFAULT(0), PRIMARY KEY(id))';
    db.query(query, (err, result) => {
        if (err) throw err;
        return res.status(201).json("Таблица создана");
    });
}

exports.createList = (req, res) => {
    const query = "INSERT INTO todolist SET ?";
    const { title, text } = req.body;

    db.query(query, { title, text }, (err, result) => {
        if (err) return res.json(err);
        return res.status(200).json(result);
    });
}

exports.showTodos = (req, res) => {
    const query = "SELECT * FROM todolist";

    db.query(query, (err, result) => {
        if (err) return res.json(err);
        return res.status(200).json(result);
    });
};

exports.searchTodo = (req, res) => {
    const text = req.body.text
    const query = `SELECT * FROM todolist WHERE title LIKE '%${text}%'`;

    db.query(query, (err, result) => {
        if (err) return res.json(err);
        return res.status(200).json(result);
    });
}

exports.checkTodo = (req, res) => {
    const { checked } = req.body;
    const id  = req.query.id;
    const query = `UPDATE todolist SET ? where id=${id}`;

    db.query(query, { checked }, (err, result) => {
        if (err) return res.json(err);
        return res.status(200).json(result);
    });
}

exports.updateTodo = (req, res) => {
    const { title, text } = req.body;
    const id  = req.query.id;
    const query = `UPDATE todolist SET ? where id=${id}`;

    db.query(query, { title, text }, (err, result) => {
        if (err) return res.json(err);
        return res.status(200).json(result);
    });
}

exports.deleteTodo = (req, res) => {
    const id  = req.query.id;
    const query = `DELETE FROM todolist  WHERE id=${id}`;

    db.query(query, (err, result) => {
        if (err) return res.json(err);
        return res.status(200).json({ data: "Задача удалена" });
    });
}







