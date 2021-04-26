# SQL Problems
## Q1
![image](https://user-images.githubusercontent.com/76544061/115945401-a7587880-a489-11eb-9188-f8e23b2af96e.png)
From Zybook

### SQL)
select sub.Employee, Employee.FirstName as Manager from(
   select e1.FirstName as Employee, e1.ManagerID from Employee as e1 inner join Employee as e2 on e1.ManagerID = e2.ID
)sub inner join Employee on sub.ManagerID = Employee.ID order by sub.Employee; 

### Result
![image](https://user-images.githubusercontent.com/76544061/115945432-d242cc80-a489-11eb-9252-57f34e2aa5af.png)
![image](https://user-images.githubusercontent.com/76544061/115945438-d7a01700-a489-11eb-86e1-bdfa65ffa202.png)

## Q2
![image](https://user-images.githubusercontent.com/76544061/115945497-1f26a300-a48a-11eb-9481-1bdc2995da38.png)
From Zybook

### SQL
select Movie.Title, Movie.Year, Rating.Description from Movie left outer join Rating on Movie.Ratingcode = Rating.code;

### Result
![image](https://user-images.githubusercontent.com/76544061/115945538-41202580-a48a-11eb-94d6-4c461210780e.png)
 
## Q3
<img width="600" alt="Screen Shot 2021-04-24 at 3 49 37 PM" src="https://user-images.githubusercontent.com/76544061/115971128-b46e7980-a514-11eb-9916-48ce3f394485.png">
From Zybook 

### SQL
Select sub.LessonDateTime ,HorseId, sub.FirstName, sub.LastName from ( <br> 
   select HorseID, Student.FirstName, Student.LastName, LessonDateTime from LessonSchedule <br>
   inner join Student on LessonSchedule.StudentID = Student.ID <br>
)sub inner join Horse on sub.HorseID = Horse.ID order by sub.LessonDateTime, HorseID;

### Result
<img width="400" alt="Screen Shot 2021-04-24 at 3 50 48 PM" src="https://user-images.githubusercontent.com/76544061/115971170-dbc54680-a514-11eb-963a-c2feaa7fb7e6.png">

## Q4
<img width="600" alt="Screen Shot 2021-04-24 at 4 34 55 PM" src="https://user-images.githubusercontent.com/76544061/115972223-0ca87a00-a51b-11eb-904e-7b35dede2ec1.png">
From Zybook

### SQL
Select LessonSchedule.LessonDateTime,Student.FirstName, Student.LastName, Horse.RegisteredName from LessonSchedule 
inner join Horse on LessonSchedule.HorseId = Horse.ID
left outer join Student on LessonSchedule.StudentId = Student.ID
where LessonDateTime >= "2020-02-01 00:00:00" and LessonDateTime < "2020-02-02 00:00:00"
order by LessonSchedule.LessonDateTime, Horse.RegisteredName asc

### Result
<img width="350" alt="Screen Shot 2021-04-24 at 4 36 08 PM" src="https://user-images.githubusercontent.com/76544061/115972243-3661a100-a51b-11eb-9eeb-776a22226a2f.png">

## Q5
![image](https://user-images.githubusercontent.com/76544061/115979632-046d3080-a555-11eb-9665-aec28518d4b1.png)

### SQL
ALTER TABLE Movie DROP COLUMN Genre;
ALTER TABLE Movie CHANGE COLUMN Year ReleaseYear SMALLINT;
ALTER TABLE Movie ADD Producer VARCHAR(50);

### Result
![image](https://user-images.githubusercontent.com/76544061/115979668-3088b180-a555-11eb-98eb-13300692619e.png)

## Q6
![image](https://user-images.githubusercontent.com/76544061/115979927-c7a23900-a556-11eb-8e47-68160bad27eb.png)

### SQL
CREATE TABLE LessonSchedule (
	HorseID        SMALLINT UNSIGNED NOT NULL,
	StudentID      SMALLINT UNSIGNED,
	LessonDateTime DATETIME NOT NULL,
	PRIMARY KEY(HorseID, LessonDateTime),
   FOREIGN KEY(HorseID) REFERENCES Horse(ID) ON DELETE CASCADE,
   FOREIGN KEY(StudentID) REFERENCES Student(ID) ON DELETE SET NULL
);
### Result
![image](https://user-images.githubusercontent.com/76544061/115979939-e0aaea00-a556-11eb-8732-fc6699321b32.png)

## Q7
![image](https://user-images.githubusercontent.com/76544061/115980722-d2f86300-a55c-11eb-9f1b-ad0562374159.png)

### SQL
CREATE TABLE Horse (
	ID        SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	RegisteredName   VARCHAR(15) NOT NULL,
	Breed VARCHAR(20) ,
	Height DECIMAL(3,1),
	BirthDate DATE,
	CONSTRAINT Height
      CHECK (Height BETWEEN 10.0 and 20.0),
   CONSTRAINT BirthDate
      CHECK (BirthDate >= '2015-01-01'),
   CONSTRAINT Breed
      CHECK (Breed IN ('Egyptian Arab', 'Holsteiner', 'Quarter Horse', 'Paint', 'Saddlebred'))
);

### Result
![image](https://user-images.githubusercontent.com/76544061/115980734-eefc0480-a55c-11eb-92f9-88b0a7f15fcb.png)

### Q8
![image](https://user-images.githubusercontent.com/76544061/116029353-220aca80-a627-11eb-9bbb-fa6d56364eba.png)

### SQL
CREATE TABLE Student (
	ID        SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	FirstName VARCHAR(20) NOT NULL,
	LastName VARCHAR(30)  NOT NULL,
	Street VARCHAR(50)   NOT NULL,
	City  VARCHAR(20) NOT NULL,
	State CHAR(2) NOT NULL DEFAULT 'TX',
	Zip   MEDIUMINT UNSIGNED NOT NULL,
	Phone CHAR(10) NOT NULL,
	Email VARCHAR(30) UNIQUE
);

### Result
![image](https://user-images.githubusercontent.com/76544061/116029399-3f3f9900-a627-11eb-83bf-03a17053029a.png)

