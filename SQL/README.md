# SQL Problems
## Q1
![image](https://user-images.githubusercontent.com/76544061/115945401-a7587880-a489-11eb-9188-f8e23b2af96e.png)
From Zybook

### SQL)
select sub.Employee, Employee.FirstName as Manager from(
   select e1.FirstName as Employee, e1.ManagerID from Employee as e1 inner join Employee as e2 on e1.ManagerID = e2.ID
)sub inner join Employee on sub.ManagerID = Employee.ID order by sub.Employee; 

### Results
![image](https://user-images.githubusercontent.com/76544061/115945432-d242cc80-a489-11eb-9252-57f34e2aa5af.png)
![image](https://user-images.githubusercontent.com/76544061/115945438-d7a01700-a489-11eb-86e1-bdfa65ffa202.png)

## Q2
![image](https://user-images.githubusercontent.com/76544061/115945497-1f26a300-a48a-11eb-9481-1bdc2995da38.png)
From Zybook

### SQL
select Movie.Title, Movie.Year, Rating.Description from Movie left outer join Rating on Movie.Ratingcode = Rating.code;

### Results
![image](https://user-images.githubusercontent.com/76544061/115945538-41202580-a48a-11eb-94d6-4c461210780e.png)
![image](https://user-images.githubusercontent.com/76544061/115945546-454c4300-a48a-11eb-9d44-3147177b9a31.png)
 
## Q3
<img width="990" alt="Screen Shot 2021-04-24 at 3 49 37 PM" src="https://user-images.githubusercontent.com/76544061/115971128-b46e7980-a514-11eb-9916-48ce3f394485.png">
From Zybook 

### SQL
Select sub.LessonDateTime ,HorseId, sub.FirstName, sub.LastName from (
   select HorseID, Student.FirstName, Student.LastName, LessonDateTime from LessonSchedule 
   inner join Student on LessonSchedule.StudentID = Student.ID
)sub inner join Horse on sub.HorseID = Horse.ID order by sub.LessonDateTime, HorseID;

### Results
<img width="405" alt="Screen Shot 2021-04-24 at 3 50 48 PM" src="https://user-images.githubusercontent.com/76544061/115971170-dbc54680-a514-11eb-963a-c2feaa7fb7e6.png">

## Q4
<img width="949" alt="Screen Shot 2021-04-24 at 4 34 55 PM" src="https://user-images.githubusercontent.com/76544061/115972223-0ca87a00-a51b-11eb-904e-7b35dede2ec1.png">
From Zybook

### SQL
Select LessonSchedule.LessonDateTime,Student.FirstName, Student.LastName, Horse.RegisteredName from LessonSchedule 
inner join Horse on LessonSchedule.HorseId = Horse.ID
left outer join Student on LessonSchedule.StudentId = Student.ID
where LessonDateTime >= "2020-02-01 00:00:00" and LessonDateTime < "2020-02-02 00:00:00"
order by LessonSchedule.LessonDateTime, Horse.RegisteredName asc

### Results
<img width="405" alt="Screen Shot 2021-04-24 at 4 36 08 PM" src="https://user-images.githubusercontent.com/76544061/115972243-3661a100-a51b-11eb-9eeb-776a22226a2f.png">
