/**
 * 学生类，初始化的时候需要设置名字和年龄，这个学生可以自我介绍。
 * @author agua
 */
export class Student{
	//姓名私有属性
	private name:string;
	//年龄私有属性
	private age:number;
	/**
	 * 构造函数
	 * @param name 姓名
	 * @param age 年龄
	 */
	constructor(name:string,age:number){
		this.name = name;
		this.age = age;
	}

	/**
	 * 自我介绍
	 */
	public introduce():void{
		console.log(`Hello, my name is ${this.name}, I'm ${this.age} years old.`);
	}
}