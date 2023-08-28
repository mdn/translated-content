---
title: "Warning: String.x is deprecated; use String.prototype.x instead"
slug: conflicting/Web/JavaScript/Reference/Deprecated_and_obsolete_features_3720fcfc8cf309ee8f3b5f3474dc9e12
original_slug: Web/JavaScript/Reference/Errors/Deprecated_String_generics
---

{{jsSidebar("Errors")}}Поддержка строковых обобщённых методов прекращена с версии Firefox 68. Более старые версии предупреждают об использовании данных методов следующим образом:

## Сообщение

```
Warning: String.charAt            is deprecated; use String.prototype.charAt            instead
Warning: String.charCodeAt        is deprecated; use String.prototype.charCodeAt        instead
Warning: String.concat            is deprecated; use String.prototype.concat            instead
Warning: String.contains          is deprecated; use String.prototype.contains          instead
Warning: String.endsWith          is deprecated; use String.prototype.endsWith          instead
Warning: String.includes          is deprecated; use String.prototype.includes          instead
Warning: String.indexOf           is deprecated; use String.prototype.indexOf           instead
Warning: String.lastIndexOf       is deprecated; use String.prototype.lastIndexOf       instead
Warning: String.localeCompare     is deprecated; use String.prototype.localeCompare     instead
Warning: String.match             is deprecated; use String.prototype.match             instead
Warning: String.normalize         is deprecated; use String.prototype.normalize         instead
Warning: String.replace           is deprecated; use String.prototype.replace           instead
Warning: String.search            is deprecated; use String.prototype.search            instead
Warning: String.slice             is deprecated; use String.prototype.slice             instead
Warning: String.split             is deprecated; use String.prototype.split             instead
Warning: String.startsWith        is deprecated; use String.prototype.startsWith        instead
Warning: String.substr            is deprecated; use String.prototype.substr            instead
Warning: String.substring         is deprecated; use String.prototype.substring         instead
Warning: String.toLocaleLowerCase is deprecated; use String.prototype.toLocaleLowerCase instead
Warning: String.toLocaleUpperCase is deprecated; use String.prototype.toLocaleUpperCase instead
Warning: String.toLowerCase       is deprecated; use String.prototype.toLowerCase       instead
Warning: String.toUpperCase       is deprecated; use String.prototype.toUpperCase       instead
Warning: String.trim              is deprecated; use String.prototype.trim              instead
Warning: String.trimLeft          is deprecated; use String.prototype.trimLeft          instead
Warning: String.trimRight         is deprecated; use String.prototype.trimRight         instead
```

## Тип ошибки

Предупреждение. Исполнение кода JavaScript не будет остановлено.

## Что пошло не так?

Нестандартные обобщённые методы {{jsxref("String")}} являются устаревшими, поддержка в Firefox прекращена, начиная с версии 68. Строковые обобщённые методы предоставляют возможность применять методы экземпляров `String` к любым объектам.

## Примеры

### Устаревший синтаксис

```js example-bad
var num = 15;
String.replace(num, /5/, '2');
```

### Стандартный синтаксис

```js example-good
var num = 15;
String(num).replace(/5/, '2');
```

## Прослойка

Ниже приведён код прослойки, с помощью которой можно добавить поддержку обобщённых методов String в другие браузеры:

```js
/*globals define*/
// Предполагаем, что все требуемые методы экземпляров String уже присутствуют
// (если нет, для них так же можно использовать полифилы)
(function() {
  'use strict';

  var i,
    // Мы могли построить массив методов следующим образом, однако метод
    //   getOwnPropertyNames() нельзя реализовать на JavaScript:
    // Object.getOwnPropertyNames(String).filter(function(methodName) {
    //   return typeof String[methodName] === 'function';
    // });
    methods = [
      'contains', 'substring', 'toLowerCase', 'toUpperCase', 'charAt',
      'charCodeAt', 'indexOf', 'lastIndexOf', 'startsWith', 'endsWith',
      'trim', 'trimLeft', 'trimRight', 'toLocaleLowerCase', 'normalize',
      'toLocaleUpperCase', 'localeCompare', 'match', 'search', 'slice',
      'replace', 'split', 'substr', 'concat', 'localeCompare'
    ],
    methodCount = methods.length,
    assignStringGeneric = function(methodName) {
      var method = String.prototype[methodName];
      String[methodName] = function(arg1) {
        return method.apply(arg1, Array.prototype.slice.call(arguments, 1));
      };
    };

  for (i = 0; i < methodCount; i++) {
    assignStringGeneric(methods[i]);
  }
}());
```

## Смотрите также

- {{jsxref("String")}}
