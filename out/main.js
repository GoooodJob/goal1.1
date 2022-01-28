"use strict";
var Student_1 = require("./Student");
/**
 * 学校类，学校里有学生，可以让学生们进行自我介绍
 * @author agua
 */
var School = (function () {
    /**
     * 构造函数，初始化所有学生
     */
    function School() {
        //私有的学生列表属性
        this.students = [];
        this.createStudent('小明', 10);
        this.createStudent('小红', 11);
        this.createStudent('小刘', 13);
    }
    /**
     * 创建一个学生
     * @param name 学生姓名
     * @param age 学生年龄
     */
    School.prototype.createStudent = function (name, age) {
        var student = new Student_1.Student(name, age);
        this.students.push(student);
    };
    /**
     * 全校进行自我介绍
     */
    School.prototype.introduce = function () {
        console.log('大家好，请学生们自我介绍！');
        this.students.forEach(function (student) {
            student.introduce();
        });
    };
    return School;
}());
exports.School = School;
//创建一个学校
var school = new School();
//让学校的学生进行自我介绍
school.introduce();
//# sourceMappingURL=main.js.map