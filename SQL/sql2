# Q1

### SQL
insert into Horse (RegisteredName, Breed, Height, BirthDate) value('Babe','Quarter Horse',15.3,'2015-02-10');
insert into Horse (RegisteredName, Breed, Height, BirthDate) value('Independence','Holsteiner',16.0,'2011-03-13');
insert into Horse (RegisteredName, Breed, Height, BirthDate) value('Ellie','Saddlebred',15.0,'2016-12-22');
insert into Horse (Breed, Height, BirthDate) value('Egyptian Arab',14.9,'2019-10-12');

### Result

# Q2

### SQL
update Horse set height = 15.6 where ID = 2;
Update Horse set RegisteredName = 'Lady Luck' where ID =4;
Update Horse set BirthDate = '2015-05-01' where ID=4;
Update Horse set Breed = NULL where BirthDate >= '2016-12-22';

# Q3

### SQL
Delete From Horse where ID = 5;
Delete From Horse where Breed = 'Holsteiner' or Breed = 'Paint';
Delete From Horse where BirthDate <= '2013-03-13';

# Q4

### SQL
Select registeredname, Height, BirthDate from Horse
where height between 15.0 and 16.0
or BirthDate >= '2020-01-01';

# Q5 

### SQL
Select registeredname, height from Horse
where height > (select AVG(height) from Horse)
order by height;
