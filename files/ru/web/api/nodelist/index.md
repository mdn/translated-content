---
title: NodeList
slug: Web/API/NodeList
tags:
  - API
  - DOM
  - Interface
  - NodeList
translation_of: Web/API/NodeList
---
{{APIRef("DOM")}}

Объект **NodeList** — это коллекция узлов, возвращаемая такими методами, как {{domxref("Node.childNodes")}} и {{domxref("document.querySelectorAll")}}.

> **Примечание:** Несмотря на то, что `NodeList` не является массивом ( `Array` ), его вполне возможно перебрать при помощи метода forEach(). NodeList также можно конвертировать в `Array` при помощи {{jsxref("Array.from()")}}
>
> Однако некоторые старые браузеры на данный момент все ещё не поддерживают `NodeList.forEach()` или `Array.from()`. Данные ограничения можно обойти, используя {{jsxref("Array.forEach()", "Array.prototype.forEach()")}} ( больше информации на этой странице ).

## Свойства

- `length`
  - : Количество элементов в NodeList.

## Методы

- `item ( idx )`
  - : Возвращает элемент из списка по его индексу или `null`, если индекс выходит за границы допустимого диапазона. Может быть использован как альтернатива `nodeList[idx]`, возвращающему `undefined` при недопустимом `idx.`
- `entries()`
  - : Возвращает {{jsxref("Iteration_protocols","iterator")}}, позволяя перебрать все пары ключ/значение, содержащиеся в объекте.
- `forEach()`
  - : Выполняет указанную функцию один раз для каждого элемента `NodeList`
- keys()
  - : Возвращает {{jsxref("Iteration_protocols","iterator")}}, позволяя перебрать все ключи каждой пары ключ/значение, содержащейся в объекте.
- `values()`
  - : Возвращает {{jsxref("Iteration_protocols","iterator")}}, позволяя перебрать все значения каждой пары ключ/значение, содержащейся в объекте.

## Описание

### Динамическая коллекция

В определённых случаях `NodeList` может являться _динамической коллекцией_. Это означает, что любые изменения в DOM тут же отражаются на коллекции. Примером подобной коллекции является {{domxref("Node.childNodes")}}:

```js
var parent = document.getElementById('parent');
var child_nodes = parent.childNodes;
console.log(child_nodes.length); // пусть равно "2"
parent.appendChild(document.createElement('div'));
console.log(child_nodes.length); // выведет "3"
```

В других случаях `NodeList` является _статической коллекцией_. Это означает, что любые изменения в DOM не отражаются на его содержании. К примеру, {{domxref("document.querySelectorAll")}} возвращает статический `NodeList`.

Данное деление необходимо иметь в виду при выборе способа обхода элементов `NodeList`, а также сохранении длины списка в переменную.

### Отличия `NodeList` от `Array`

`NodeList` используется подобно массивам, и потому может возникнуть закономерное желание использовать в нём методы, предоставляемые `Array.prototype`. Однако `NodeList` не реализует методы, подобные таковым у `Array`.

В JavaScript существует механизм наследования, основанный на прототипах, применяемый как к встроенным («native») (таким как `Array`), так и «host»-объектам, предоставляемым средой исполнения (таким как `NodeList`) . Экземпляры класса `Array` получают свои методы (к примеру, `forEach` и `map`) из следующей цепочки наследования:

`myArray --> Array.prototype --> Object.prototype --> null` (Цепочка прототипов объекта может быть получена рекурсивным вызовом Object.getPrototypeOf)

`forEach`, `map`, ровно как и все остальные свойства принадлежат `Array.prototype`.

Цепочка же прототипов `NodeList` выглядит следующим образом:

`myNodeList --> NodeList.prototype --> Object.prototype --> null`

`NodeList.prototype` содержит метод `item`, но никак не остальные методы `Array.prototype`, поэтому они и не могут быть использованы с `NodeLists`.

#### Обходные пути

Один из способов решения данной проблемы — это копирование методов из `Array.prototype` в `NodeList.prototype`. Однако необходимо отдавать себе отчёт в том, что [расширение объектов DOM опасно, особенно в старых версиях Internet Explorer (6, 7, 8)](http://perfectionkills.com/whats-wrong-with-extending-the-dom/).

```js
var arrayMethods = Object.getOwnPropertyNames( Array.prototype );

arrayMethods.forEach( attachArrayMethodsToNodeList );

function attachArrayMethodsToNodeList(methodName)
{
  if(methodName !== "length") {
    NodeList.prototype[methodName] = Array.prototype[methodName];
  }
};

var divs = document.getElementsByTagName( 'div' );
var firstDiv = divs[ 0 ];

firstDiv.childNodes.forEach(function( divChild ){
  divChild.parentNode.style.color = '#0F0';
});
```

Другой подход — расширение непосредственно объектов DOM:

```js
var forEach = Array.prototype.forEach;

var divs = document.getElementsByTagName( 'div' );
var firstDiv = divs[ 0 ];

forEach.call(firstDiv.childNodes, function( divChild ){
  divChild.parentNode.style.color = '#0F0';
});
```

> **Примечание:** Стоит отметить, что передача объектов среды (такого как `NodeList`) через `this` native-методу (такому как `forEach`) гарантированно работает не во всех браузерах и точно не работает в некоторых.

## Пример

Элементы в `NodeList`, можно обработать следующим образом:

```js
for (var i = 0; i < myNodeList.length; ++i) {
  var item = myNodeList[i];  // Вызов myNodeList.item(i) необязателен в JavaScript
}
```

Не следует использовать конструкции [`for...in`](/en-US/docs/JavaScript/Reference/Statements/for...in) или [`for each...in`](/en-US/docs/JavaScript/Reference/Statements/for_each...in) для перечисления элементов списка. Эти способы также перечислят и свойства `length` и `item`, что приведёт к логическим ошибкам в случае, если скрипт ожидает только объекты {{domxref("node")}}. Также `for..in` может перечислять свойства в любом порядке.

Циклы [`for...of`](/en-US/docs/JavaScript/Reference/Statements/for...of) корректно перечисляют все объекты внутри `NodeList` в браузерах, в которых поддерживается `for...of` (например, Firefox 13 или выше):

```js
var list = document.querySelectorAll( 'input[type=checkbox]' );
for (var item of list) {
  item.checked = true;
}
```

## Конвертирование `NodeList` в `Array`

Иногда удобнее работать с содержимым `NodeList`, используя методы `Array`. Ниже приведена техника преобразования `NodeList` к `Array`:

```js
var div_list = document.querySelectorAll('div'); // returns NodeList
var div_array = Array.prototype.slice.call(div_list); // преобразует NodeList в Array
```

## Спецификация

- [DOM Level 3](http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-536297177)
