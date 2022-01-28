
import { Student } from "./Student";

/**
 * 学校类，学校里有学生，可以让学生们进行自我介绍
 * @author agua
 */
export class School {
	//私有的学生列表属性
	private students:Student[] = [];
	/**
	 * 构造函数，初始化所有学生
	 */
	constructor() {
		this.createStudent('小明',10);
		this.createStudent('小红',11);
		this.createStudent('小刘',13);
	}

	/**
	 * 创建一个学生
	 * @param name 学生姓名
	 * @param age 学生年龄
	 */
	private createStudent(name:string,age:number):void{
		let student:Student = new Student(name,age);
		this.students.push(student);
	}

	/**
	 * 全校进行自我介绍
	 */
	public introduce():void{
		console.log('大家好，请学生们自我介绍！');
		this.students.forEach(student=>{
			student.introduce();
		});
	} 
}

//创建一个学校
var school = new School();
//让学校的学生进行自我介绍
school.introduce();