# Student Portal

Student portal API hosted on Vercel.  
[Vercel URL](https://francismax-student-portal.vercel.app/api/students)

## Tools & Frameworks
- Expressjs
- Mongoose ODM
- MongoDB Atlas
- Yup - schema validation

## Usage
- Get all students  
GET URL/api/students

- Get student by studentId  
GET URL/api/students/:studentId

- Create student  
POST URL/api/students  
body = JSON
example.  
```
{
  "name":"francisgthg",
  "studentId":"12345",
  "level":"400",
  "programme":"Comp Sci"
}
```

## References
https://vercel.com/guides/using-express-with-vercel
