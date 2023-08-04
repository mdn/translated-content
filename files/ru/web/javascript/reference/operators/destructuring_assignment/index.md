---
title: Деструктурирующее присваивание
slug: Web/JavaScript/Reference/Operators/Destructuring_assignment
---

Синтаксис **деструктурирующего присваивания** в выражениях JavaScript позволяет извлекать данные из массивов или объектов при помощи синтаксиса, подобного объявлению массива или литералов в объекте.

## Синтаксис

```js
var a, b, rest;
[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2

[a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3, 4, 5]

({ a, b } = { a: 1, b: 2 });
console.log(a); // 1
console.log(b); // 2

({ a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 });
console.log(a); // 1
console.log(b); // 2
console.log(rest); // { c:3, d:4 }
```

## Описание

Выражения объявления объектов или массивов предоставляют простой способ создания пакета однородных данных. При создании такого пакета вы получаете возможность использовать его любым доступным образом. Также вы можете возвращать его в функциях.

Одной из ключевых возможностей использования деструктурирующего присваивания является чтение структуры данных одним оператором, хотя помимо этого вы можете найти множество других применений в приведённых ниже примерах.

Данная возможность подобна таковой, присутствующей в языках Perl и Python.

## Разбор массивов

### Простой пример

```js
var foo = ["one", "two", "three"];

// без деструктурирования
var one = foo[0];
var two = foo[1];
var three = foo[2];

// с деструктурированием
var [one, two, three] = foo;
```

### Обмен значений переменных

После выполнения фрагмента кода, значение _b_ будет 1, _a_ будет 3. Без деструктурирующего присваивания, для обмена значений требуется дополнительная временная переменная (или что-то наподобие [XOR-обмена](http://en.wikipedia.org/wiki/XOR_swap)).

```js
var a = 1;
var b = 3;

[a, b] = [b, a];
```

### Возврат нескольких значений

Благодаря деструктурирующему присваиванию, функции могут возвращать несколько значений. Хотя всегда можно было возвращать массивы в функциях, оно предоставляет гибкость:

```js
function f() {
  return [1, 2];
}
```

Как вы видите, возвращаемые результаты имеют вид массива, значения которого заключены в квадратные скобки. Вы можете возвращать неограниченное количество результатов таким образом. В следующем примере, `f()` возвращает `[1, 2]` как результат:

```js
var a, b;
[a, b] = f();
console.log("A is " + a + " B is " + b);
```

Оператор `[a, b] = f()` присваивает результаты функции переменным в квадратных скобках: _a_ будет присвоено 1, _b_ будет присвоено 2.

Вы также можете использовать результат функции в виде массива:

```js
var a = f();
console.log("A is " + a);
```

В данном случае _a_ будет массивом с элементами 1 и 2.

### Игнорирование некоторых значений

Вы также можете проигнорировать не нужные значения:

```js
function f() {
  return [1, 2, 3];
}

var [a, , b] = f();
console.log("A is " + a + " B is " + b);
```

После выполнения кода, a будет 1, b будет 3. Значение 2 игнорируется. Таким же образом вы можете игнорировать любые (или все) значения. Например:

```js
[, ,] = f();
```

### Получение значений из результата регулярного выражения

Когда метод [`exec()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) регулярного выражения находит совпадение, он возвращает массив, содержащий первый совпадающий фрагмент строки и далее группы, определённые в регулярном выражении. Деструктурирующее присваивание упрощает получение данных из этих групп, игнорируя первый фрагмент:

```js
var url = "https://developer.mozilla.org/en-US/Web/JavaScript";

var parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
var [, protocol, fullhost, fullpath] = parsedURL;

console.log(protocol); // выведет "https"
```

## Разбор объектов

### Простой пример

```js
var o = { p: 42, q: true };
var { p, q } = o;

console.log(p); // 42
console.log(q); // true

// Объявление новых переменных
var { p: foo, q: bar } = o;

console.log(foo); // 42
console.log(bar); // true
```

### Загрузка модулей

Деструктурирующее присваивание помогает загружать специфичные наборы модулей, как в [Add-on SDK](/en-US/Add-ons/SDK):

```js
const { Loader, main } = require("toolkit/loader");
```

### Вложенный объект и разбор массива

```js
var metadata = {
  title: "Scratchpad",
  translations: [
    {
      locale: "de",
      localization_tags: [],
      last_edit: "2014-04-14T08:43:37",
      url: "/de/docs/Tools/Scratchpad",
      title: "JavaScript-Umgebung",
    },
  ],
  url: "/ru/docs/Tools/Scratchpad",
};

var {
  title: englishTitle,
  translations: [{ title: localeTitle }],
} = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle); // "JavaScript-Umgebung"
```

### Деструктурирование во время обхода

```js
var people = [
  {
    name: "Mike Smith",
    family: {
      mother: "Jane Smith",
      father: "Harry Smith",
      sister: "Samantha Smith",
    },
    age: 35,
  },
  {
    name: "Tom Jones",
    family: {
      mother: "Norah Jones",
      father: "Richard Jones",
      brother: "Howard Jones",
    },
    age: 25,
  },
];

for (var {
  name: n,
  family: { father: f },
} of people) {
  console.log("Name: " + n + ", Father: " + f);
}

// "Name: Mike Smith, Father: Harry Smith"
// "Name: Tom Jones, Father: Richard Jones"
```

### Получение полей объекта-параметра функции

```js
function userId({ id }) {
  return id;
}

function whois({ displayName, fullName: { firstName: name } }) {
  console.log(displayName + " is " + name);
}

var user = {
  id: 42,
  displayName: "jdoe",
  fullName: {
    firstName: "John",
    lastName: "Doe",
  },
};

console.log("userId: " + userId(user)); // "userId: 42"
whois(user); // "jdoe is John"
```

В приведённом примере извлекаются поля `id`, `displayName` и `firstName` из объекта пользователь.

### Деструктурирование вычисляемых имён свойств

Вычисляемые имена свойств, например, [литералы объектов](/ru/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names), могут использоваться при деструктурирующем присваивании:

```js
let key = "z";
let { [key]: foo } = { z: "bar" };

console.log(foo); // "bar"
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
