function get_student_info(student) {
    return 'Hello' + student.hi + ',' + 
    ' ' + 'my name is' + ' ' + student.name + ',' + 
    ' ' + ' I am 19 years old,' + 
    ' ' + 'and my favorite programming language is' + ' ' + student.favorit_programming_language + '.'
}




const student = {
    hi: "👋",
    name: 'Abdul Rashid',
    age: '19 years old',
    favorit_programming_language: 'python'
}

console.log(get_student_info(student))