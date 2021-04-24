# SQL
## 1.
![image](https://user-images.githubusercontent.com/76544061/115945401-a7587880-a489-11eb-9188-f8e23b2af96e.png)

### SQL)
select sub.Employee, Employee.FirstName as Manager from(
   select e1.FirstName as Employee, e1.ManagerID from Employee as e1 inner join Employee as e2 on e1.ManagerID = e2.ID
)sub inner join Employee on sub.ManagerID = Employee.ID order by sub.Employee; 

### Results
![image](https://user-images.githubusercontent.com/76544061/115945432-d242cc80-a489-11eb-9252-57f34e2aa5af.png)
![image](https://user-images.githubusercontent.com/76544061/115945438-d7a01700-a489-11eb-86e1-bdfa65ffa202.png)
