---
title: in
slug: Web/JavaScript/Reference/Operators/in
l10n:
  sourceCommit: 13b2fe46243beed6dc29f5d3defa716abe79c1f9
---

{{jsSidebar("Operators")}}

Оператор `in` возвращает `true`, если свойство содержится в указанном объекте или в его цепочке прототипов.

Оператор `in` не может быть использован для поиска значений в других видах коллекций. Чтобы проверить, существует ли определённое значение в массиве, можно использовать {{jsxref("Array.prototype.includes()")}}. А у наборов есть метод {{jsxref("Set.prototype.has()")}}.

{{EmbedInteractiveExample("pages/js/expressions-inoperator.html")}}

## Синтаксис

```js-nolint
prop in object
#prop in object
```

### Параметры

- `prop`

  - : Строковое или символьное значение, представляющее название свойства (несимвольные значения будут [преобразованы в строки](/ru/docs/Web/JavaScript/Reference/Global_Objects/String#приведение_к_строке)). Также может быть [именем приватного свойства](/ru/docs/Web/JavaScript/Reference/Classes/Private_properties).

- `object`
  - : Объект, для которого будет производится проверка, содержит ли он (или его цепочка прототипов) свойство с указанным именем (`prop`).

### Исключения

- {{jsxref("TypeError")}}:
  - : Возникает, если `object` не является объектом (например, является примитивом).

## Описание

Оператор `in` проверяет, существует ли указанное свойство в объекте или его цепочке прототипов. Для проверки наличия только собственных свойств следует использовать {{jsxref("Object.hasOwn()")}}.

Свойство может существовать в объекте, но иметь значение `undefined`. Поэтому `x in obj` не то же самое, что `obj.x !== undefined`. Для того, чтобы оператор `in` возвращал значение `false`, используйте оператор [`delete`](/ru/docs/Web/JavaScript/Reference/Operators/delete) вместо присваивания свойству значения `undefined`.

Также можно использовать оператор `in`, чтобы проверить, существует ли в объекте [приватное поле класса или метод](/ru/docs/Web/JavaScript/Reference/Classes/Private_properties). Оператор `in` возвращает `true`, если свойство определено и `false` в противном случае. Такая проверка называется _бренд-чек_, потому что `in` возвращает `true` только в том случае, когда объект был создан с помощью конструктора класса и имеет доступ к приватным свойствам.

В этом случае используется особый синтаксис: левая сторона оператора `in` является идентификатором свойства, а не выражением, но без кавычек (иначе это будет свойством с типом строка, а не приватным свойством).

Поскольку обращение к приватным свойствам объекта не связанного с текущим классом приводит к появлению {{jsxref("TypeError")}} вместо возвращения `undefined`, то оператор `in` позволяет сократить запись такой проверки:

```js
class C {
  #x;
  static isC(obj) {
    try {
      obj.#x;
      return true;
    } catch {
      return false;
    }
  }
}
```

До более короткой:

```js
class C {
  #x;
  static isC(obj) {
    return #x in obj;
  }
}
```

Оператор `in` также позволяет избежать необходимости обрабатывать ошибки доступа к несуществующим приватным свойствам.

Однако, оператор `in` по-прежнему требует предварительно объявлять приватные свойства заранее в окружающем классе, иначе будет выброшена ошибка {{jsxref("SyntaxError")}} ("Private field '#x' must be declared in an enclosing class") такая же, как и когда вы пытаетесь получить доступ к необъявленному приватному свойству.

```js-nolint example-bad
class C {
  foo() {
    #x in this;
  }
}

new C().foo(); // SyntaxError: Private field '#x' must be declared in an enclosing class
```

## Примеры

### Обычное использование

В примере ниже показаны некоторые способы использования оператора `in`.

```js
// Массивы
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
0 in trees; // true
3 in trees; // true
6 in trees; // false
"bay" in trees; // false (необходимо указать индекс элемента в массиве, а не значение)
"length" in trees; // true (length является свойством Array)
Symbol.iterator in trees; // true

// Уже существующие объекты
"PI" in Math; // true

// Пользовательские объекты
const mycar = { make: "Honda", model: "Accord", year: 1998 };
"make" in mycar; // true
"model" in mycar; // true
```

Необходимо указать объект справа от оператора `in`. Например, можно указать строку, созданную с помощью конструктора `String`, но нельзя использовать строковый литерал.

```js
const color1 = new String("green");
"length" in color1; // true

const color2 = "coral";
// сгенерирует ошибку (color2 не является объектом String)
"length" in color2;
```

### Использование оператора `in` с неопределёнными или с уже удалёнными свойствами

Если удалить свойство при помощи оператора [`delete`](/ru/docs/Web/JavaScript/Reference/Operators/delete), то оператор `in` возвратит `false` для этого свойства.

```js
const mycar = { make: "Honda", model: "Accord", year: 1998 };
delete mycar.make;
"make" in mycar; // false

const trees = ["redwood", "bay", "cedar", "oak", "maple"];
delete trees[3];
3 in trees; // false
```

Если задать свойству значение {{jsxref("undefined")}}, а не удалять его, то для этого свойства оператор `in` вернёт значение `true`.

```js
const mycar = { make: "Honda", model: "Accord", year: 1998 };
mycar.make = undefined;
"make" in mycar; // true
```

```js
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
trees[3] = undefined;
3 in trees; // true
```

Оператор `in` вернёт `false` для [пустых слотов в массиве](/ru/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays), несмотря на то, что прямой доступ к свойству вернёт `undefined`.

```js
const empties = new Array(3);
empties[2]; // undefined
2 in empties; // false
```

Чтобы избежать подобного, следует заполнять новый массив непустыми значениями и не записывать значения по индексам, превышающим длину массива.

```js
const empties = new Array(3).fill(undefined);
2 in empties; // true
```

### Наследуемые свойства

Оператор `in` возвратит `true` для свойств, которые унаследованы по цепочке прототипов. Это может быть нежелательно при использовании объектов для хранения произвольных пар ключ-значение.

```js example-bad
const ages = { alice: 18, bob: 27 };

function hasPerson(name) {
  return name in ages;
}

hasPerson("hasOwnProperty"); // true
```

Можно использовать {{jsxref("Object.hasOwn()")}}, чтобы проверить, существует ли в объекте данный ключ.

```js
const ages = { alice: 18, bob: 27 };

function hasPerson(name) {
  return Object.hasOwn(ages, name);
}

hasPerson("hasOwnProperty"); // false
```

Также можно использовать [объект с прототипом null](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) или {{jsxref("Map")}}, чтобы избежать других ошибок.

```js example-good
const ages = new Map([
  ["alice", 18],
  ["bob", 27],
]);

function hasPerson(name) {
  return ages.has(name);
}

hasPerson("hasOwnProperty"); // false
```

### Использование оператора `in` для реализации _бренд-чека_

Фрагмент кода ниже демонстрирует статическую функцию, которая проверяет, был ли объект создан конструктором класса `Person`, и следовательно безопасно ли использовать методы этого класса.

```js
class Person {
  #age;
  constructor(age) {
    this.#age = age;
  }
  static isPerson(o) {
    return #age in o;
  }
  ageDifference(other) {
    return this.#age - other.#age;
  }
}

const p1 = new Person(20);
const p2 = new Person(30);
console.log(p1.ageDifference(p2)); // -10
console.log(Person.isPerson(p1)); // true

if (Person.isPerson(p1) && Person.isPerson(p2)) {
  console.log(p1.ageDifference(p2)); // -10
}
```

Это помогает предотвратить следующую ошибку:

```js
const p2 = {};

p1.ageDifference(p2); // TypeError: Cannot read private member #age from an object whose class did not declare it
```

Без оператора `in` пришлось бы использовать блок `try...catch`, чтобы проверить, есть ли в объекте приватное свойство.

Также это можно реализовать с помощью метода класса [`@@hasInstance`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance), и в дальнейшем использовать оператор [`instanceof`](/ru/docs/Web/JavaScript/Reference/Operators/instanceof) для выполнения такой же проверки (которая по умолчанию проверяет только наличие `Person.prototype` в цепочке прототипов объекта).

```js
class Person {
  #age;
  constructor(age) {
    this.#age = age;
  }
  static [Symbol.hasInstance](o) {
    // Проверяем `this` для предотвращения ложно-положительных
    // результатов при вызове `instanceof SubclassOfPerson`
    return this === Person && #age in o;
  }
  ageDifference(other) {
    return this.#age - other.#age;
  }
}

const p1 = new Person(20);
const p2 = new Person(30);

if (p1 instanceof Person && p2 instanceof Person) {
  console.log(p1.ageDifference(p2)); // -10
}
```

Дополнительные примеры есть в разделе «[Приватные свойства](/ru/docs/Web/JavaScript/Reference/Classes/Private_properties)» и в [руководстве по классам](/ru/docs/Web/JavaScript/Guide/Using_classes#private_fields).

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [`for...in`](/ru/docs/Web/JavaScript/Reference/Statements/for...in)
- [`delete`](/ru/docs/Web/JavaScript/Reference/Operators/delete)
- {{jsxref("Object.hasOwn()")}}
- {{jsxref("Reflect.has()")}}
- [Перечисляемость и владение свойствами](/ru/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
