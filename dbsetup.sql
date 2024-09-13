create database url_shorter;
use url_shorter;
create table urls (
	id char(6) primary key,
    url varchar(255) not null,
    visits int default 0
    );
-- select * from urls; 