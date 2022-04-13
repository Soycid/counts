from flask import Flask, request
from main import app
import db

@app.route('/api/course')
def course():
    school = request.args.get('school', default = "columbia college", type = str)
    department = request.args.get('department', default = "none", type = str)
    id = request.args.get('id', default = 0, type = int)

    return db.get_course(school = school, department = department, id = id)

@app.route('/api/department')
def department():
    school = request.args.get('school', default = "columbia college", type = str)
    return db.get_department(school = school)

