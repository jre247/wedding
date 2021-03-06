# wedding

Jenna and Jason's wedding website

------------------------------------------------------------------------------------------------

Windows Install Instructions:

1) Download PostgresSQL for Windows and install
2) run this command to set up where Postgres SQL Data is saved:
		initdb.exe <directory for postgres data>
3) run this command:
		cd "C:\Program Files\PostgreSQL\9.5\bin"
4) run this command:
		pg_ctl -D "C:\PostgresData" -l logfile start
5) you should see a message saying the server has started
6) open postgres admin
7) open new query window in postgres admin
8) run this script in this query window to give privileges to tables to user jevans:
		GRANT ALL PRIVILEGES ON TABLE content TO jevans;
		GRANT USAGE, SELECT ON SEQUENCE content_id_seq TO jevans;
		GRANT ALL PRIVILEGES ON TABLE wedding_user TO jevans;
		GRANT USAGE, SELECT ON SEQUENCE wedding_user_id_seq TO jevans
		*note: everytime you rerun seed.sql you'll have to rerun these privileges queries*

------------------------------------------------------------------------------------------------

Mac OSX install instructions:

1) Open terminal window, run "gulp"
2) Open second terminal window, run "npm run watch"
3) run brew install postgresql to download postgresql
	note: run the following command if homebrew is not installed:
		ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
	note: if getting the error "pg_config command not found" then trying running this command, but make sure you have the correct location for PostgresSQL:
		export PATH=/Library/PostgreSQL/9.3/bin:$PATH
4) open application postgresql and run the following command to connect to wedding database if you need to run any queries:
	"\connect wedding"

------------------------------------------------------------------------------------------------

Windows Instructions for Opening Postgres:

1) Run SQL Shell (Psql)
2) press enter except for database (type wedding), username (type jevans), and password (type [fill-in-actual-password])

------------------------------------------------------------------------------------------------

Run the following script in psql to create the database and necessary tables:

CREATE USER jevans WITH PASSWORD [fill-in-actual-password];
CREATE DATABASE Wedding;
GRANT ALL PRIVILEGES ON DATABASE Wedding to jevans;

6) run seed.sql in postgres to create tables, data, etc.
	-you can find seed.sql in the root directory of the project

------------------------------------------------------------------------------------------------

Deploy Instructions:

Visit this website to get instructions on this:
https://dashboard.heroku.com/apps/jasonandjenna/deploy/heroku-git


------------------------------------------------------------------------------------------------

Heroku Database Access Instructions:

Visit this website to get instuctions on this:
https://devcenter.heroku.com/articles/heroku-postgresql#pg-psql

---------------------------------------------------------------------------------------------------------------

Note: reference this article for concepts used in this app:
http://sahatyalkabov.com/create-a-character-voting-app-using-react-nodejs-mongodb-and-socketio/
