---
title: Set
slug: Web/JavaScript/Reference/Global_Objects/Set
tags:
  - ECMAScript6
  - JavaScript
  - set
  - Экспериментальный
translation_of: Web/JavaScript/Reference/Global_Objects/Set
---

{{JSRef("Global_Objects", "Set")}}

## Сводка

Объекты **`Set`** позволяют вам сохранять _уникальные_ значения любого типа, как {{Glossary("Primitive", "примитивы")}}, так и другие типы объектов.

## Синтаксис

```
 new Set([iterable]);
```

### Параметры

- iterable
  - : При передаче [итерируемого объекта](/ru/docs/Web/JavaScript/Reference/Statements/for...of), все его элементы будут добавлены в новый Set. Иначе (или при `null`) новый `Set` будет пуст.

### Возвращает

Новый `Set` объект.

## Описание

Объекты `Set` представляют коллекции значений, по которым вы можете выполнить обход в порядке вставки элементов. Значение элемента в `Set` может присутствовать **только в одном экземпляре**, что обеспечивает его уникальность в коллекции `Set`.

### Сравнение значений

Поскольку каждое значение в `Set` должно быть уникальным, сравнение значений основано на алгоритме "подобное значение": `NaN` равно `NaN` (несмотря на то, что `NaN !== NaN`); все другие значения рассматриваются равными исходя из семантики оператора строго равенства ===. В ранних версиях черновика ECMAScript 6 `-0` и `+0` считались разными (несмотря на то, что `-0 === +0`), это было изменено в последующих версиях и адаптировано в Gecko 29 ({{bug("952870")}}) и [последней ночной сборке Chrome](https://code.google.com/p/v8/issues/detail?id=3069). `NaN` и `undefined` также могут сохраняться в `Set`.

## Свойства

- `Set.length`

  - : Значение свойства `length` всегда равно 0.

    Чтобы узнать количество элементов в `Set`, используйте {{jsxref("Set.prototype.size")}}.

- {{jsxref("Set.@@species", "get Set[@@species]")}}
  - : Функция-конструктор, которая используется для создания производных объектов.
- {{jsxref("Set.prototype")}}
  - : Представляет прототип конструктора `Set`. Позволяет добавлять свойства всем объектам типа `Set`.

## Экземпляры `Set`

Все экземпляры `Set` унаследованы от {{jsxref("Set.prototype")}}.

### Свойства

{{page('ru/Web/JavaScript/Reference/Global_Objects/Set/prototype','Properties')}}

### Методы

{{page('ru/Web/JavaScript/Reference/Global_Objects/Set/prototype','Methods')}}

## Примеры

### Использование объекта `Set`

```js
var mySet = new Set();

mySet.add(1); // Set { 1 }
mySet.add(5); // Set { 1, 5 }
mySet.add(5); // Set { 1, 5 }
mySet.add("some text"); // Set { 1, 5, 'some text' }
var o = {a: 1, b: 2};
mySet.add(o);

mySet.add({a: 1, b: 2}); // переменная o связана с другим объектом, поэтому данная строка также сработает

mySet.has(1); // true
mySet.has(3); // false, 3 не было добавлено в set
mySet.has(5);              // true
mySet.has(Math.sqrt(25));  // true
mySet.has("Some Text".toLowerCase()); // true
mySet.has(o); // true

mySet.size; // 5

mySet.delete(5); // удаляет 5 из set
mySet.has(5);    // false, 5 было удалено

mySet.size; // 4, было удалено одно значение
console.log(mySet); // Set {1, 'some text', Object {a: 1, b: 2}, Object {a: 1, b: 2}}
```

### Обход Set

```js
// обход элементов set
// выведет элементы по порядку: 1, "some text", {"a": 1, "b": 2}
for (let item of mySet) console.log(item);

// выведет элементы по порядку: 1, "some text", {"a": 1, "b": 2}
for (let item of mySet.keys()) console.log(item);

// выведет элементы по порядку: 1, "some text", {"a": 1, "b": 2}
for (let item of mySet.values()) console.log(item);

// выведет элементы по порядку: 1, "some text", {"a": 1, "b": 2}
//(key и value в данном случае одинаковы)
for (let [key, value] of mySet.entries()) console.log(key);

// преобразует Set в Array
var myArr = Array.from(mySet); // [1, "some text", {"a": 1, "b": 2}]

// следующее будет работать при запуске с HTML документом
mySet.add(document.body);
mySet.has(document.querySelector("body")); // true

// преобразования из Array в Set и обратно
mySet2 = new Set([1,2,3,4]);
mySet2.size; // 4
[...mySet2]; // [1,2,3,4]

// пересечение можно представить следующим образом
var intersection = new Set([...set1].filter(x => set2.has(x)));

// разность можно представить следующим образом
var difference = new Set([...set1].filter(x => !set2.has(x)));

// Обход элементов set при помощи forEach
mySet.forEach(function(value) {
  console.log(value);
});

// 1
// 2
// 3
// 4
```

### Реализация простых операций

```js
function isSuperset(set, subset) {
    for (var elem of subset) {
        if (!set.has(elem)) {
            return false;
        }
    }
    return true;
}

function union(setA, setB) {
    var _union = new Set(setA);
    for (var elem of setB) {
        _union.add(elem);
    }
    return _union;
}

function intersection(setA, setB) {
    var _intersection = new Set();
    for (var elem of setB) {
        if (setA.has(elem)) {
            _intersection.add(elem);
        }
    }
    return _intersection;
}

function difference(setA, setB) {
    var _difference = new Set(setA);
    for (var elem of setB) {
        _difference.delete(elem);
    }
    return _difference;
}

// Например
var setA = new Set([1, 2, 3, 4]),
    setB = new Set([2, 3]),
    setC = new Set([3, 4, 5, 6]);

isSuperset(setA, setB);   // => true
union(setA, setC);        // => Set [1, 2, 3, 4, 5, 6]
intersection(setA, setC); // => Set [3, 4]
difference(setA, setC);   // => Set [1, 2]
```

### Взаимоотношения с объектом `Array`

```js
var myArray = ["value1", "value2", "value3"];

// Используйте конструктор Set для преобразования Array в Set
var mySet = new Set(myArray);

mySet.has("value1"); // вернёт true

// Используйте spread оператор для преобразования Set в Array
console.log([...mySet]); // Отобразит тот же массив, что и myArray
```

### Взаимоотношения со `String`

```js
var text = 'India';

var mySet = new Set(text);  // Set ['I', 'n', 'd', 'i', 'a']
mySet.size;  // 5
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Map")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}
