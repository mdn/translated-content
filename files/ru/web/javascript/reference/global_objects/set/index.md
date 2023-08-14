---
title: Set
slug: Web/JavaScript/Reference/Global_Objects/Set
---

{{JSRef}}

Объект **`Set`** позволяет хранить уникальные значения любого типа, будь то {{Glossary("Primitive", "примитивы")}} или ссылки на объекты.

## Описание

Объекты "Set" - это коллекция значений. Значение в `Set` **может встречаться только один раз**; оно уникально в коллекции. Вы можете перебирать элементы набора в порядке вставки. Порядок _вставки_ соответствует порядку, в котором каждый элемент был успешно вставлен в коллекцию методом [`add()`](/ru-RU/docs/Web/JavaScript/Reference/Global_Objects/Set/add) (то есть, когда был вызван `add()`, в наборе ещё не было такого элемента).

Спецификация требует реализации наборов, "которые в среднем обеспечивают время доступа, сублинейное количеству элементов в коллекции". Следовательно, он может быть представлен внутренне в виде хэш-таблицы (с поиском O(1)), дерева поиска (с поиском O(log(N))) или любой другой структуры данных, при условии, что сложность выше, чем O(N).

### Сравнение значений

При добавлении нового элемента в Set происходит проверка, добавлялся ли такой элемент ранее. Эта проверка использует специальный алгоритм сравнения значений [SameValueZero](/ru/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value-zero_equality). (Раньше использовался алгоритм [SameValue](/ru/docs/Web/JavaScript/Equality_comparisons_and_sameness#спецификации_для_равенства_строгого_равенства_и_равенства_одинаковых_величин), в котором значения `0` и `-0` считаются разными. Смотрите браузерную поддержку ниже). Это означает, что {{jsxref("NaN")}} считается равным `NaN` (не смотря на то что `NaN !== NaN`), а все другие значения считаются равными в соответствии с семантикой оператора `===`.

### Производительность

Метод [`has`](/ru-RU/docs/Web/JavaScript/Reference/Global_Objects/Set/has) проверяет наличие значения в `Set` используя алгоритм, который в среднем работает быстрее поэлементного перебора добавленных ранее элементов. В частности этот алгоритм работает быстрее чем метод [`Array.prototype.includes`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/includes на массиве, который хранит столько же элементов сколько сравниваемый объект `Set`.

## Конструктор

- {{jsxref("Set/Set", "Set()")}}
  - : Создаёт новый объект `Set`.

## Статические свойства

- {{jsxref("Set.@@species", "get Set[@@species]")}}
  - : Функция-конструктор, которая используется для создания производных объектов.

## Свойства экземпляра

- `Set.prototype[@@toStringTag]`
  - : Начальное значение [`@@toStringTag`](/ru-RU/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) свойства - строка `"Set"`. Это значение используется в {{jsxref("Object.prototype.toString()")}}.
- {{jsxref("Set.prototype.size")}}
  - : Возвращает количество значений в объекте `Set`.

## Методы экземпляра

- {{jsxref("Set.prototype.add()")}}
  - : Вставляет новый элемент с указанным значением в объект `Set`, если в `Set` ещё нет элемента с таким же значением.
- {{jsxref("Set.prototype.clear()")}}
  - : Удаляет все значения из объекта `Set`.
- {{jsxref("Set.prototype.delete()")}}
  - : Удаляет элемент, связанный с переданным значением, и возвращает логическое значение, подтверждающее, был ли элемент успешно удалён или нет. `Set.prototype.has(value)` впоследствии вернет `false`.
- {{jsxref("Set.prototype.has()")}}
  - : Возвращает логическое значение, утверждающее, присутствует ли элемент с заданным значением в объекте `Set` или нет.
- {{jsxref("Set.prototype.@@iterator()", "Set.prototype[@@iterator]()")}}
  - : Возвращает новый объект итератора, который выдает **значения** для каждого элемента в объекте `Set` в порядке вставки.
- {{jsxref("Set.prototype.values()")}}
  - : Возвращает новый объект итератора, который выдает **значения** для каждого элемента в объекте `Set` в порядке вставки.
- {{jsxref("Set.prototype.keys()")}}
  - : Аналог {{jsxref("Set.prototype.values()")}}.
- {{jsxref("Set.prototype.entries()")}}

  - : Возвращает новый объект итератора, который содержит **массив `[value, value]`** для каждого элемента в объекте `Set` в порядке вставки.

  Этот метод похож на соответствующий метод объекта {{jsxref("Map")}}, но в случае `Set` ключ (_key_) каждой записи совпадает с её значением (_value_).

- {{jsxref("Set.prototype.forEach()")}}
  - : Вызывает `callbackFn` один раз для каждого значения, присутствующего в объекте `Set` в порядке вставки. Если указан параметр `thisArg`, он будет использоваться в качестве значения `this` для каждого вызова `callbackFn`.

## Примеры

### Использование объекта Set

```js
const mySet1 = new Set();

mySet1.add(1); // Set(1) { 1 }
mySet1.add(5); // Set(2) { 1, 5 }
mySet1.add(5); // Set(2) { 1, 5 }
mySet1.add("текст"); // Set(3) { 1, 5, 'текст' }
const o = { a: 1, b: 2 };
mySet1.add(o);

mySet1.add({ a: 1, b: 2 }); // o ссылается на другой объект, так что это нормально

mySet1.has(1); // true
mySet1.has(3); // false, поскольку 3 не был добавлен в набор
mySet1.has(5); // true
mySet1.has(Math.sqrt(25)); // true
mySet1.has("Текст".toLowerCase()); // true
mySet1.has(o); // true

mySet1.size; // 5

mySet1.delete(5); // удаляет элемент 5 из set
mySet1.has(5); // false, 5 был удалён

mySet1.size; // 4, поскольку мы удалили одно значение

mySet1.add(5); // Set(5) { 1, "текст", {...}, {...}, 5 } - ранее удаленный элемент будет добавлен как новый элемент, он не сохранит свое первоначальное положение до удаления

console.log(mySet1); // Set(5) { 1, "текст", {…}, {…}, 5 }
```

### Итерация по объекту Set

Итерация наборов проходит по элементам в порядке вставки.

```js
for (const item of mySet1) {
  console.log(item);
}
// 1, "текст", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }, 5

for (const item of mySet1.keys()) {
  console.log(item);
}
// 1, "текст", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }, 5

for (const item of mySet1.values()) {
  console.log(item);
}
// 1, "текст", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }, 5

// ключ и значение здесь одинаковы
for (const [key, value] of mySet1.entries()) {
  console.log(key);
}
// 1, "текст", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }, 5

// Преобразуем объект Set в объект Array с помощью Array.from
const myArr = Array.from(mySet1); // [1, "текст", {"a": 1, "b": 2}, {"a": 1, "b": 2}, 5]

// следующее также будет работать, если запустить его в HTML-документе
mySet1.add(document.body);
mySet1.has(document.querySelector("body")); // true

// преобразование между Set и Array
const mySet2 = new Set([1, 2, 3, 4]);
console.log(mySet2.size); // 4
console.log([...mySet2]); // [1, 2, 3, 4]

// пересечение можно представить следующим образом
const intersection = new Set([...mySet1].filter((x) => mySet2.has(x)));

// разность можно представить следующим образом
const difference = new Set([...mySet1].filter((x) => !mySet2.has(x)));

// итерироваться можно с помощью forEach()
mySet2.forEach((value) => {
  console.log(value);
});
// 1
// 2
// 3
// 4
```

### Реализация базовых операций Set

```js
function isSuperset(set, subset) {
  for (const elem of subset) {
    if (!set.has(elem)) {
      return false;
    }
  }
  return true;
}

function union(setA, setB) {
  const _union = new Set(setA);
  for (const elem of setB) {
    _union.add(elem);
  }
  return _union;
}

function intersection(setA, setB) {
  const _intersection = new Set();
  for (const elem of setB) {
    if (setA.has(elem)) {
      _intersection.add(elem);
    }
  }
  return _intersection;
}

function symmetricDifference(setA, setB) {
  const _difference = new Set(setA);
  for (const elem of setB) {
    if (_difference.has(elem)) {
      _difference.delete(elem);
    } else {
      _difference.add(elem);
    }
  }
  return _difference;
}

function difference(setA, setB) {
  const _difference = new Set(setA);
  for (const elem of setB) {
    _difference.delete(elem);
  }
  return _difference;
}

// Примеры
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 3]);
const setC = new Set([3, 4, 5, 6]);

isSuperset(setA, setB); // true
union(setA, setC); // Set {1, 2, 3, 4, 5, 6}
intersection(setA, setC); // Set {3, 4}
symmetricDifference(setA, setC); // Set {1, 2, 5, 6}
difference(setA, setC); // Set {1, 2}
```

### Связь с объектами массива

```js
const myArray = ["value1", "value2", "value3"];

// Используйте обычный конструктор Set для преобразования массива в набор
const mySet = new Set(myArray);

mySet.has("value1"); // true

// Используйте синтаксис spread для преобразования набора в массив.
console.log([...mySet]); // Покажет вам точно такой же массив, как и myArray
```

### Удаление повторяющиеся элементов из массива

```js
const numbers = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5];

console.log([...new Set(numbers)]);

// [2, 3, 4, 5, 6, 7, 32]
```

### Связь со строками

```js
const text = "Индия";

const mySet = new Set(text); // Set(5) {'И', 'н', 'д', 'и', 'я'}
mySet.size; // 5

// чувствительный к регистру и пропускает дубликаты
new Set("Слово"); // Set(5) { "С", "л", "о", "в", "о"}
new Set("Слово"); // Set(4) { "С", "л", "о", "в"} // "о" встречается дважды в слове, но в объекте будет только одна
```

### Используйте Set для обеспечения уникальности списка значений

```js
const array = Array.from(document.querySelectorAll("[id]")).map((e) => e.id);

const set = new Set(array);
console.assert(set.size === array.length);
```

## Спецификации

{{Specifications}}

## Браузерная поддержка

{{Compat}}

## Смотрите также

- [Полифил `Set` в `core-js`](https://github.com/zloirock/core-js#set)
- [map](/ru-RU/docs/Web/JavaScript/Reference/Global_Objects/Map)
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}
