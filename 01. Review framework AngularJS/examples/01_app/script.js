let header = 'SPA';
let description = 'Framework AngularJS version 1.8';

/*
* AngularJS приложение состоит из одного или нескольких модулей.
*
* angular.module - создание нового angularjs модуля.
* первый параметр - имя модуля для создания или получения
* второй параметр - набор модулей, от которых будет зависить создаваемый модуль
*
* Если параметр указан, то новый массив
* */

let mainModule = angular.module('MainModule', []);

/*
* Контроллер
* В AngularJS переменные которые начинаются с символа $ являются встроенными элементами фрэймворка.
*
* $scope - используется для передачи данных в представление
* mainModule.controller() - метод создающий контроллер
* первый параметр - имя конструктора (<Name>Ctrl соглащение по именованию контроллеров)
* второй параметр - функция контроллера
* */

mainModule.controller('MainController', function ($scope) {
   $scope.header = header;
   $scope.description = description;
});

