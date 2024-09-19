create database if not exists url_shorter;
use url_shorter;
create table if not exists urls (
	id char(6) primary key,
    url varchar(255) not null,
    visits int default 0
    );
