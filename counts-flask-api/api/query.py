from flask import Flask, request
from main import app
import db


@app.route('/api/course-links')
def course_links():
    id = request.args.get('id', default = '0', type = int)
    return db.get_course_links(id)

@app.route('/api/courses')
def courses():
    school = request.args.get('school', default = "columbia_college", type = str)
    department = request.args.get('department', default = "none", type = str)

    return db.get_courses(school, department)

@app.route('/api/departments')
def departments():
    school = request.args.get('school', default = "columbia_college", type = str)
    return db.get_departments(school)

