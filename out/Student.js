"use strict";
/**
 * 学生类，初始化的时候需要设置名字和年龄，这个学生可以自我介绍。
 * @author agua
 */
var Student = (function () {
    /**
     * 构造函数
     * @param name 姓名
     * @param age 年龄
     */
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    /**
     * 自我介绍
     */
    Student.prototype.introduce = function () {
        console.log("Hello, my name is " + this.name + ", I'm " + this.age + " years old.");
    };
    return Student;
}());
exports.Student = Student;
//# sourceMappingURL=Student.js.map