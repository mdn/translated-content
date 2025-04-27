---
title: Object.defineProperty()
slug: Web/JavaScript/Reference/Global_Objects/Object/defineProperty
---

{{JSRef}}

## Сводка

Статический метод **`Object.defineProperty()`** определяет новое или изменяет существующее свойство объекта и возвращает этот объект.

{{InteractiveExample("JavaScript Demo: Object.defineProperty()")}}

```js interactive-example
const object1 = {};

Object.defineProperty(object1, "property1", {
  value: 42,
  writable: false,
});

object1.property1 = 77;
// Throws an error in strict mode

console.log(object1.property1);
// Expected output: 42
```

## Синтаксис

```js-nolint
Object.defineProperty(obj, prop, descriptor)
```

### Параметры

- `obj`
  - : Объект, на котором определяется свойство.
- `prop`
  - : Строка или {{jsxref("Symbol")}} с ключом определяемого или изменяемого свойства.
- `descriptor`
  - : Дескриптор определяемого или изменяемого свойства.

## Описание

Этот метод позволяет точно добавлять или изменять свойства объекта. Обычное добавление свойств через присваивание создаёт свойства, которые можно увидеть через перечисление свойств (с помощью цикла {{jsxref("Statements/for...in", "for...in")}} или метода {{jsxref("Object.keys")}}), чьи значения могут быть изменены и которые могут быть {{jsxref("Operators/delete", "удалены", "", 1)}}. Этот же метод позволяет настроить эти дополнительные детали свойства.

Дескрипторы свойств, присутствующие в объектах, бывают двух основных типов: дескрипторы данных и дескрипторы доступа. **Дескриптор данных** — это свойство, имеющее значение, которое может быть (а может и не быть) записываемым. **Дескриптор доступа** — это свойство, описываемое парой функций — геттером и сеттером. Дескриптор может быть только чем-то одним из этих двух типов; он не может быть одновременно обоими.

И дескриптор данных, и дескриптор доступа являются объектами. Они обладают следующими обязательными ключами:

- `configurable`
  - : Равен `true` только в том случае, если тип этого дескриптора свойства может быть изменён и если свойство может быть удалено из содержащего его объекта.
    **Значение по умолчанию установлено в `false`.**
- `enumerable`
  - : Равен `true` только в том случае, если это свойство можно увидеть через перечисление свойств содержащего его объекта.
    **Значение по умолчанию установлено в `false`.**

Дескриптор данных также может содержать следующие дополнительные ключи:

- `value`
  - : Значение, ассоциированное со свойством. Может быть любым допустимым значением JavaScript (числом, объектом, функцией и т.д.).
    **Значение по умолчанию установлено в {{jsxref("Global_Objects/undefined", "undefined")}}.**
- `writable`
  - : Равен `true` только в том случае, если значение, ассоциированное со свойством, может быть изменено с помощью {{jsxref("Operators/Assignment_Operators", "оператора присваивания", "", 1)}}.
    **Значение по умолчанию установлено в `false`.**

Дескриптор доступа также может содержать следующие дополнительные ключи:

- `get`
  - : Функция, используемая как геттер свойства, либо {{jsxref("Global_Objects/undefined", "undefined")}}, если свойство не имеет геттера. Возвращаемое значение функции будет использоваться как значение свойства.
    **Значение по умолчанию установлено в {{jsxref("Global_Objects/undefined", "undefined")}}.**
- `set`
  - : Функция, используемая как сеттер свойства, либо {{jsxref("Global_Objects/undefined", "undefined")}}, если свойство не имеет сеттера. Функция принимает единственным аргументом новое значение, присваиваемое свойству.
    **Значение по умолчанию установлено в {{jsxref("Global_Objects/undefined", "undefined")}}.**

Имейте в виду, что эти ключи не обязательно должны принадлежать самому дескриптору свойства, если они унаследованы, они так же будут приниматься во внимание. Для сохранения этих ключей по умолчанию неизменными, вы можете заранее заморозить {{jsxref("Object.prototype")}}, явно определив все ключи, либо установить свойство [`Object.prototype.__proto__`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) в {{jsxref("Operators/null", "null")}}.

```js
// Использование __proto__
Object.defineProperty(obj, "key", {
  __proto__: null, // нет унаследованных свойств
  value: "static", // по умолчанию
  // не перечисляется,
  // не настраивается и
  // не перезаписывается
});

// Явное определение свойства
Object.defineProperty(obj, "key", {
  enumerable: false,
  configurable: false,
  writable: false,
  value: "static",
});

// Переиспользование одного и того же объекта
function withValue(value) {
  var d =
    withValue.d ||
    (withValue.d = {
      enumerable: false,
      writable: false,
      configurable: false,
      value: null,
    });
  d.value = value;
  return d;
}
// ... и ...
Object.defineProperty(obj, "key", withValue("static"));

// Если доступен метод freeze, предотвращаем добавление свойств
// value, get, set, enumerable, writable и configurable
// к прототипу Object
(Object.freeze || Object)(Object.prototype);
```

## Примеры

### Пример: создание свойства

Если указанное свойство не существует в объекте, метод `Object.defineProperty()` создаст новое свойство по переданному описанию. Поля в дескрипторе могут быть опущены, в этом случае их значения будут значениями по умолчанию. Все логические поля будут по умолчанию установлены в `false`. Поля `value`, `get` и `set` по умолчанию будут установлены в {{jsxref("Global_Objects/undefined", "undefined")}}. Свойство, определённое без атрибутов `get`/`set`/`value`/`writable` называется «общим», а дескриптор данных — «типовым».

```js
var o = {}; // Создаём новый объект

// Пример добавления свойства к объекту через defineProperty()
// с дескриптором данных
Object.defineProperty(o, "a", {
  value: 37,
  writable: true,
  enumerable: true,
  configurable: true,
});
// Свойство 'a' существует в объекте o и имеет значение, равное 37

// Пример добавления свойства к объекту через defineProperty()
// с дескриптором доступа
var bValue = 38;
Object.defineProperty(o, "b", {
  get: function () {
    return bValue;
  },
  set: function (newValue) {
    bValue = newValue;
  },
  enumerable: true,
  configurable: true,
});
o.b; // 38
// Свойство 'b' существует в объекте o и имеет значение, равное 38
// Значение свойства o.b теперь идентично значению bValue до тех пор,
// пока свойство o.b не будет переопределено

// Вы не можете смешать два этих подхода:
Object.defineProperty(o, "conflict", {
  value: 0x9f91102,
  get: function () {
    return 0xdeadbeef;
  },
});
// Выкинет исключение TypeError: свойство value применимо только в
// дескрипторах данных, свойство get применимо только в дескрипторах
// доступа
```

### Пример: изменение свойства

Если свойство уже существует, метод `Object.defineProperty()` попытается изменить свойство в соответствии со значениями в дескрипторе и текущим состоянием объекта.

Если у старого дескриптора атрибут `configurable` был установлен в `false`, то свойство является _ненастраиваемым_. Нельзя изменять атрибуты ненастраиваемых свойств, а также нельзя изменять тип дескриптора. Для свойств данных с `writable: true` можно изменять значение и изменять атрибут `writable` с `true` на `false`. При попытке изменить ненастраиваемые атрибуты свойств возникает ошибка {{jsxref("TypeError")}}. Исключения составляют атрибуты `value` и `writable` (если это разрешено) и если новое значение совпадает с исходным значением свойства данных.

Если свойство является настраиваемым, то установка атрибуту значения `undefined` равно его удалению. Например, если `o.k` это свойство доступа, то вызов `Object.defineProperty(o, "k", { set: undefined })` удалит сеттер, оставив у `k` только геттер, то есть сделает его доступным только для чтения. Если атрибут отсутствует в новом дескрипторе, то берётся значение атрибута из старого дескриптора (то есть не происходит неявного переопределения на `undefined`). Можно переключаться между разными типами дескрипторов (свойства данных или доступа). Например, если новый дескриптор — это дескриптор данных (с `value` или `writable`), то атрибуты `get` и `set` оригинального дескриптора будут удалены.

#### Атрибут `writable`

Если атрибут `writable` свойства установлен в `false`, свойство становится «незаписываемым». Ему невозможно будет присвоить новое значение.

```js
var o = {}; // Создаём новый объект

Object.defineProperty(o, "a", {
  value: 37,
  writable: false,
});

console.log(o.a); // Выведет 37
o.a = 25; // Исключение не будет выброшено (будет выброшено только в
// строгом режиме, даже если значение будет тем же самым)
console.log(o.a); // Выведет 37. Присваивание не сработало.
```

Как видно в этом примере, попытка записи в незаписываемое свойство его не изменило, но и исключение так же не было выброшено.

#### Атрибут `enumerable`

Атрибут `enumerable` свойства определяет, просматривается ли свойство в цикле {{jsxref("Statements/for...in", "for...in")}} и методом {{jsxref("Object.keys()")}} или нет.

```js
var o = {};
Object.defineProperty(o, "a", { value: 1, enumerable: true });
Object.defineProperty(o, "b", { value: 2, enumerable: false });
// Атрибут enumerable по умолчанию установлен в false
Object.defineProperty(o, "c", { value: 3 });

o.d = 4; // При создании свойства путём присваивания, атрибут enumerable
// по умолчанию устанавливается в true

for (var i in o) {
  console.log(i);
}
// Выведет 'a' и 'd' (порядок вывода не определён)

Object.keys(o); // ['a', 'd']

o.propertyIsEnumerable("a"); // true
o.propertyIsEnumerable("b"); // false
o.propertyIsEnumerable("c"); // false
```

#### Атрибут `configurable`

Атрибут `configurable` одновременно контролирует, может ли свойство быть удалено из объекта и могут ли быть изменены его атрибуты (кроме контроля изменения атрибута `writable`).

```js
var o = {};
Object.defineProperty(o, "a", {
  get: function () {
    return 1;
  },
  configurable: false,
});

Object.defineProperty(o, "a", { configurable: true }); // Выкинет TypeError
Object.defineProperty(o, "a", { enumerable: true }); // Выкинет TypeError
Object.defineProperty(o, "a", { set: function () {} }); // Выкинет TypeError (ранее свойство set дескриптора не было определено)
Object.defineProperty(o, "a", {
  get: function () {
    return 1;
  },
}); // Выкинет TypeError (даже несмотря на то, что get делает то же, что и раньше)
Object.defineProperty(o, "a", { value: 12 }); // Выкинет TypeError

console.log(o.a); // Выведет 1
delete o.a; // Ничего не произойдёт
console.log(o.a); // Выведет 1
```

Если бы атрибут `configurable` объекта `o.a` был установлен в `true`, никакие ошибки не были бы выброшены и в конце свойство было бы удалено.

### Пример: добавление свойств и значений по умолчанию

Важно понимать, как устанавливаются значения по умолчанию атрибутам свойств. Часто существует разница между простым назначением значения посредством точечной нотации и использованием метода `Object.defineProperty()`, что и показывает пример ниже.

```js
var o = {};

o.a = 1;
// Эквивалентно записи:
Object.defineProperty(o, "a", {
  value: 1,
  writable: true,
  configurable: true,
  enumerable: true,
});

// С другой стороны,
Object.defineProperty(o, "a", { value: 1 });
// эквивалентно записи:
Object.defineProperty(o, "a", {
  value: 1,
  writable: false,
  configurable: false,
  enumerable: false,
});
```

### Пример: пользовательские сеттеры и геттеры

Пример ниже показывает, как реализовать самоархивирующийся объект. При установке свойства `temperature` в массив `archive` попадает запись журнала.

```js
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

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Перечисляемость и собственность свойств](/ru/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.defineProperties()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- {{jsxref("Functions/get", "get")}}
- {{jsxref("Functions/set", "set")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Reflect.defineProperty()")}}
