let StudentList =  [
	{ 
		name: "Aldis",
		surname: 'Petersons' ,
		id: 0
	},

	{ 
		name: "Guntis", 
		surname: 'Petersons' ,
		id: 1
	}
]

//IF GLOBAL VARIABLE IS NOT ISSET CREATE IT WITH STUDENT LIST
//OTHERWISE ASSIGN DATA FROM GLOBAL STORAGE
var AllStudentList = '';
if(window.localStorage.getItem('students')){
		AllStudentList = window.localStorage.getItem('students');
} else {
		var StringifiedStudentList = JSON.stringify(StudentList);
		window.localStorage.setItem('students', StringifiedStudentList);
		AllStudentList = window.localStorage.getItem('students');
}
var ReturnStudentList = JSON.parse(AllStudentList);

export default ReturnStudentList