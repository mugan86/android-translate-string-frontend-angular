# Android Strings translate frontend page with communicate with API PHP in server side

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Install NodeJS

https://nodejs.org/en/

## Required to install all dependencies to work with AngularJS command

`npm install -g grunt-cli bower yo generator-karma generator-angular`

## Instructions to use this repository project

### Clone repo: 

`https://github.com/mugan86/android-translate-string-frontend-angular.git`

##Install dependencies

`npm install && bower install`

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

¿Why don´t ignore gitignore specific files and directories?

* git rm -r --cached .
* git add .
* git commit -m ".gitignore is now working"

##Resources use to generate SQL data to add in our localhost.

* Original xml file: strings.xml (In english language).
* SQL to translations apps and apps translate texts create with https://github.com/mugan86/android-strings-translator-importer-exporter/blob/master/src/main/java/imported/ImportXMLToSQL.java class. 
* Add original XML file inside src/main/resources and execute. 
* After execute create SQL file with all necessary data (for default reference repository in translations-en/translations.sql)