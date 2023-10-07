---
title: NodeList
slug: Web/API/NodeList
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

- `item (index)`
  - : Возвращает элемент из списка по его индексу или `null`, если индекс выходит за границы допустимого диапазона. В качестве альтернативы этого метода может быть использован `nodeList[index]`, возвращающий `undefined` при недопустимом `index.`
- `entries()`
  - : Возвращает {{jsxref("Iteration_protocols","iterator")}}, позволяя перебрать все пары ключ/значение, содержащиеся в объекте.
- `forEach()`
  - : Выполняет указанную функцию один раз для каждого элемента `NodeList`
- `keys()`
  - : Возвращает {{jsxref("Iteration_protocols","iterator")}}, позволяя перебрать все ключи каждой пары ключ/значение, содержащейся в объекте.
- `values()`
  - : Возвращает {{jsxref("Iteration_protocols","iterator")}}, позволяя перебрать все значения каждой пары ключ/значение, содержащейся в объекте.

## Описание

### Динамическая коллекция

В определённых случаях `NodeList` может являться _динамической коллекцией_. Это означает, что любые изменения в DOM тут же отражаются на коллекции. Примером подобной коллекции является {{domxref("Node.childNodes")}}:

```js
const parent = document.getElementById("parent");
const childNodes = parent.childNodes;
console.log(childNodes.length); // пусть равно "2"
parent.appendChild(document.createElement("div")); // добавляем новый div
console.log(childNodes.length); // выведет "3"
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

`NodeList.prototype` содержит методы `forEach`, `item`, но никак не остальные методы `Array.prototype`, поэтому они и не могут быть использованы с `NodeLists`.

## Пример

Элементы в `NodeList`, можно обработать следующим образом:

```js
for (let i = 0; i < myNodeList.length; i++) {
  const item = myNodeList[i];
}
```

Не следует использовать конструкции [`for...in`](/ru/docs/JavaScript/Reference/Statements/for...in) для перечисления элементов списка. Эти способы также перечислят и свойства `length` и `item`, что приведёт к логическим ошибкам в случае, если скрипт ожидает только объекты {{domxref("node")}}. Также `for..in` может перечислять свойства в любом порядке.

Циклы [`for...of`](/ru/docs/JavaScript/Reference/Statements/for...of) корректно перечисляют все объекты внутри `NodeList` :

```js
const list = document.querySelectorAll("input[type=checkbox]");
for (const item of list) {
  item.checked = true;
}
```

## Конвертирование `NodeList` в `Array`

Иногда удобнее работать с содержимым `NodeList`, используя методы `Array`. Ниже приведены способы преобразования `NodeList` к `Array`:

```js
const list = document.querySelectorAll("div"); // возвращает NodeList
const array1 = Array.from(list); // преобразует NodeList в Array
const array2 = [...list]; // преобразует NodeList в Array
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
