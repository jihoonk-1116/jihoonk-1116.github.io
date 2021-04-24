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
