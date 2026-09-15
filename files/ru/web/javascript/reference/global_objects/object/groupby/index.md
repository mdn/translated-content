---
title: Object.groupBy()
short-title: groupBy()
slug: Web/JavaScript/Reference/Global_Objects/Object/groupBy
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

> [!NOTE]
> В некоторых версиях некоторых браузеров этот метод был реализован как метод `Array.prototype.group()`. Из-за проблем с веб-совместимостью теперь он реализован как статический метод. Подробности смотрите в [таблице совместимости с браузерами](#совместимость_с_браузерами).

Статический метод **`Object.groupBy()`** группирует элементы переданного итерируемого объекта в соответствии со строковыми значениями, возвращаемыми переданной функцией обратного вызова. Возвращаемый объект содержит отдельное свойство для каждой группы — массив с элементами этой группы.

Этот метод следует использовать, когда имена групп могут быть представлены строками. Если элементы нужно группировать по ключу, который является произвольным значением, используйте {{jsxref("Map.groupBy()")}}.

{{InteractiveExample("JavaScript Demo: Object.groupBy()", "taller")}}

```js interactive-example
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 9 },
  { name: "bananas", type: "fruit", quantity: 5 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 12 },
  { name: "fish", type: "meat", quantity: 22 },
];

const result = Object.groupBy(inventory, ({ quantity }) =>
  quantity < 6 ? "restock" : "sufficient",
);
console.log(result.restock);
// [{ name: "bananas", type: "fruit", quantity: 5 }]
```

## Синтаксис

```js-nolint
Object.groupBy(items, callbackFn)
```

### Параметры

- `items`
  - : [Итерируемый объект](/ru/docs/Web/JavaScript/Reference/Iteration_protocols#протокол_итерируемый) (например, {{jsxref("Array")}}), элементы которого будут сгруппированы.
- `callbackFn`
  - : Функция, которая будет вызвана для каждого элемента итерируемого объекта. Она должна возвращать значение, приводимое к ключу свойства (строке или [символу](/ru/docs/Web/JavaScript/Reference/Global_Objects/Symbol)), которое указывает группу текущего элемента. Функция вызывается со следующими аргументами:
    - `element`
      - : Текущий обрабатываемый элемент.
    - `index`
      - : Индекс текущего обрабатываемого элемента.

### Возвращаемое значение

Объект [с прототипом `null`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object), содержащий свойства для всех групп, каждому из которых присвоен массив с элементами соответствующей группы.

## Описание

`Object.groupBy()` вызывает переданную функцию `callbackFn` один раз для каждого элемента итерируемого объекта. Функция обратного вызова должна возвращать строку или символ (значения других типов [приводятся к строкам](/ru/docs/Web/JavaScript/Reference/Global_Objects/String)), указывающие группу соответствующего элемента. Значения, возвращаемые `callbackFn`, используются как ключи объекта, возвращаемого `Object.groupBy()`. Каждому ключу соответствует массив, содержащий все элементы, для которых функция обратного вызова вернула одно и то же значение.

Элементы в возвращаемом объекте и в исходном итерируемом объекте — одни и те же (не {{Glossary("deep copy", "глубокие копии")}}). Изменение внутренней структуры элементов отразится и на исходном итерируемом объекте, и на возвращаемом объекте.

## Примеры

### Использование Object.groupBy()

Сначала определим массив объектов, представляющих запасы различных продуктов. У каждого продукта есть тип (`type`) и количество (`quantity`).

```js
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];
```

Код ниже группирует элементы по значению их свойства `type`.

```js
const result = Object.groupBy(inventory, ({ type }) => type);

/* Результат:
{
  vegetables: [
    { name: 'asparagus', type: 'vegetables', quantity: 5 },
  ],
  fruit: [
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "cherries", type: "fruit", quantity: 5 }
  ],
  meat: [
    { name: "goat", type: "meat", quantity: 23 },
    { name: "fish", type: "meat", quantity: 22 }
  ]
}
*/
```

Стрелочная функция при каждом вызове просто возвращает значение `type` очередного элемента массива. Обратите внимание, что аргумент функции `{ type }` — это простейший пример [синтаксиса деструктуризации объектов для аргументов функций](/ru/docs/Web/JavaScript/Reference/Operators/Destructuring#получение_полей_объекта-параметра_функции). Он извлекает свойство `type` из объекта, переданного в качестве параметра, и присваивает его переменной `type` в теле функции. Это очень лаконичный способ получить доступ к нужным значениям элементов внутри функции.

Также можно создавать группы на основе значений одного или нескольких свойств элементов. Ниже очень похожий пример, который распределяет элементы по группам `ok` или `restock` в зависимости от значения поля `quantity`.

```js
function myCallback({ quantity }) {
  return quantity > 5 ? "ok" : "restock";
}

const result2 = Object.groupBy(inventory, myCallback);

/* Результат:
{
  restock: [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "cherries", type: "fruit", quantity: 5 }
  ],
  ok: [
    { name: "goat", type: "meat", quantity: 23 },
    { name: "fish", type: "meat", quantity: 22 }
  ]
}
*/
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Полифил `Object.groupBy` в `core-js`](https://github.com/zloirock/core-js#array-grouping)
- [Полифил `Object.groupBy` от es-shims](https://www.npmjs.com/package/object.groupby)
- Руководство «[Индексированные коллекции](/ru/docs/Web/JavaScript/Guide/Indexed_collections)»
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Object.fromEntries()")}}
- {{jsxref("Map.groupBy()")}}
