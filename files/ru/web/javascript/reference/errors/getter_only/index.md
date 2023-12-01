---
title: 'TypeError: setting getter-only property "x"(установка свойства только для геттера "x")'
slug: Web/JavaScript/Reference/Errors/Getter_only
---

{{jsSidebar("Errors")}}

## Сообщения

```
TypeError: назначение свойств только для чтения не допускается в строгом режиме (Edge)
TypeError: установка свойства только для геттера "x" (Firefox)
TypeError: не удаётся установить свойство "prop" из #<Object>, который имеет только геттер (Chrome)
```

## Тип ошибки

{{jsxref("TypeError")}} только в строгом режиме.

## Что пошло не так?

Предпринята попытка задать новое значение свойству, для которого указан только геттер. . Пока это молча будет проигнорировано в non-strict режиме, оно бросит {{jsxref("TypeError")}} в [strict mode](/ru/docs/Web/JavaScript/Reference/Strict_mode).

## Примеры

В приведённом ниже примере показано, как установить getter для свойства. Он не задаёт сеттер, так TypeError выдаётся при попытке установить свойство температуры до 30. Дополнительные сведения см. Также в {{jsxref("Object.defineProperty()")}} странице.

```js example-bad
"use strict";

function Archiver() {
  var temperature = null;
  Object.defineProperty(this, "temperature", {
    get: function () {
      console.log("get!");
      return temperature;
    },
  });
}

var arc = new Archiver();
arc.temperature; // 'get!'

arc.temperature = 30;
// TypeError: setting getter-only property "temperature"
```

Чтобы устранить эту ошибку, необходимо либо удалить строку 16, в которой предпринята попытка задать свойство temperature, либо реализовать для неё сеттер, например, как показано ниже:

```js example-good
"use strict";

function Archiver() {
  var temperature = null;
  var archive = [];

  Object.defineProperty(this, "temperature", {
    get: function () {
      console.log("get!");
      return temperature;
    },
    set: function (value) {
      temperature = value;
      archive.push({ val: temperature });
    },
  });

  this.getArchive = function () {
    return archive;
  };
}

var arc = new Archiver();
arc.temperature; // 'get!'
arc.temperature = 11;
arc.temperature = 13;
arc.getArchive(); // [{ val: 11 }, { val: 13 }]
```

## Смотрите также

- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.defineProperties()")}}
