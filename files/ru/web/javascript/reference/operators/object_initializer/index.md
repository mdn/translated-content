---
title: Инициализация объектов
slug: Web/JavaScript/Reference/Operators/Object_initializer
---

{{JsSidebar("Операторы")}}

Объекты могут быть инициализированы с помощью [`new Object()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object), `Object.create()` или _литеральной_ (_инициирующей_) нотации. Инициализатор объекта это разделённый запятыми список ноль или более пар имён свойств и ассоциируемых с ними значений, заключённых в фигурные скобки (`{}`).

## Синтаксис

```js
var o = {};
var o = { a: "foo", b: 42, c: {} };

var a = "foo",
  b = 42,
  c = {};
var o = { a: a, b: b, c: c };

var o = {
  property: function ([parameters]) {},
  get property() {},
  set property(value) {},
};
```

### Новая нотация в ECMAScript 2015

Пожалуйста, просмотрите таблицу поддержки этих нотаций. В неподдерживаемом окружении, эти нотации приведут к синтаксической ошибке.

```js
// Сокращение имён свойств (ES2015)
var a = "foo",
  b = 42,
  c = {};
var o = { a, b, c };

// Сокращение имён методов (ES2015)
var o = {
  property([parameters]) {},
};

// Вычисление имён свойств (ES2015)
var prop = "foo";
var o = {
  [prop]: "hey",
  ["b" + "ar"]: "there",
};
```

## Описание

Инициализатор объекта это выражение, которое описывает инициализацию {{jsxref("Object")}}. Объекты состоят из _свойств_, которые используются для описания объекта. Значения свойств объектов могут содержать как {{Glossary("примитивные")}} типы данных, так и другие объекты.

### Создание объектов

Пустой объект без свойств может быть создан следующим образом:

```js
var object = {};
```

Однако, преимущество _литеральной_ или _инициирующей_ нотации это возможность быстро создавать объекты со свойствами внутри фигурных скобок. Создаётся простой список пар `ключ: значение`, разделённых запятой. Следующий код создаёт объект с тремя парами значений и ключи это `"foo"`, `"age"` и `"baz"`. Значения этих ключей строка `"bar"`, число `42` и другой объект.

```js
var object = {
  foo: "bar",
  age: 42,
  baz: { myProp: 12 },
};
```

### Доступность свойств

После того, как создали объект, вы, вероятно, захотите прочитать или изменить его. Свойства объектов могут быть получены при помощи точечной нотации или квадратных скобок. Смотрите [property accessors](/ru/docs/Web/JavaScript/Reference/Operators/Property_Accessors) для детальной информации.

```js
object.foo; // "bar"
object["age"]; // 42

object.foo = "baz";
```

### Определение свойств

Мы уже рассмотрели, как объявить свойства, используя синтаксис инициализации. Зачастую, в коде появляются свойства, которые вы захотите поместить в объект. Вы увидите следующий код:

```js
var a = "foo",
  b = 42,
  c = {};

var o = {
  a: a,
  b: b,
  c: c,
};
```

С ECMAScript 2015 появилась короткая нотация, способная достичь того же:

```js
var a = "foo",
  b = 42,
  c = {};

// Сокращение имён свойств (ES2015)
var o = { a, b, c };

// Иначе говоря,
console.log(o.a === { a }.a); // true
```

#### Повторение имён свойств

Когда используются одинаковые имена свойств, второе свойство перезапишет первое.

```js
var a = { x: 1, x: 2 };
console.log(a); // {x: 2}
```

В строгом режиме ECMAScript 5, повторение имён свойств будет воспринято как {{jsxref("SyntaxError")}}. С введением вычисляемых имён свойств и появлением возможности создавать дубликаты во время выполнения кода, ECMAScript 2015 убрал это ограничение.

```js
function haveES2015DuplicatePropertySemantics() {
  "use strict";
  try {
    ({ prop: 1, prop: 2 });

    // Не будет ошибки, повторение имён доступно в строгом режиме
    return true;
  } catch (e) {
    // Будет ошибка, дубликаты запрещены в строгом режиме
    return false;
  }
}
```

### Описание методов

Свойство объекта также может ссылаться на [function](/ru/docs/Web/JavaScript/Reference/Functions), [getter](/ru/docs/Web/JavaScript/Reference/Functions/get) или [setter](/ru/docs/Web/JavaScript/Reference/Functions/set).

```js
var o = {
  property: function ([parameters]) {},
  get property() {},
  set property(value) {},
};
```

В ECMAScript 2015, доступна короткая нотация, поэтому слово "function" более не обязательно.

```js
// Сокращение имён методов (ES2015)
var o = {
  property([parameters]) {},
  *generator() {},
};
```

В ECMAScript 2015 есть способ кратко объявить свойства, чьими значениями являются генераторы функций:

```js
var o = {
  *generator() {
    ...........
  }
};
```

Что эквивалентно следующей ES5-подобной нотации (но отметьте, что ECMAScript 5 не содержит генераторов):

```js
var o = {
  generator: function* () {
    ...........
  }
};
```

Для большей информации и примеров смотри [method definitions](/ru/docs/Web/JavaScript/Reference/Functions/Method_definitions).

### Вычисляемые имена свойств

Начиная с ECMAScript 2015, синтаксис объявления объектов также поддерживает вычисляемые имена свойств. Это позволяет добавлять в скобки `[]` выражение, которое будет вычислено, как имя свойства. Это похоже на скобочную нотацию синтаксиса [property accessor](/ru/docs/Web/JavaScript/Reference/Operators/Property_Accessors), которую вы, вероятно, уже использовали, чтобы прочитать и задать свойство. Теперь можно использовать аналогичный способ с литеральными объектами:

```js
// Вычисляемое имя свойства (ES2015)
var i = 0;
var a = {
  ["foo" + ++i]: i,
  ["foo" + ++i]: i,
  ["foo" + ++i]: i,
};

console.log(a.foo1); // 1
console.log(a.foo2); // 2
console.log(a.foo3); // 3

var param = "size";
var config = {
  [param]: 12,
  ["mobile" + param.charAt(0).toUpperCase() + param.slice(1)]: 4,
};

console.log(config); // {size: 12, mobileSize: 4}
```

### Spread-свойства

[Rest/Spread свойство ECMAScript](https://github.com/tc39/proposal-object-rest-spread) предлагает (stage 3) добавлять [spread](/ru/docs/Web/JavaScript/Reference/Operators/Spread_operator) свойства в литеральную нотацию. Оно копирует собственные перечисляемые свойства из представленного объекта в новый.

Поверхностное копирование (исключая prototype) или слияние объектов теперь возможно с помощью более короткого синтаксиса, чем {{jsxref("Object.assign()")}}.

```js
var obj1 = { foo: "bar", x: 42 };
var obj2 = { foo: "baz", y: 13 };

var clonedObj = { ...obj1 };
// Объект { foo: "bar", x: 42 }

var mergedObj = { ...obj1, ...obj2 };
// Объект { foo: "baz", x: 42, y: 13 }
```

Заметьте, что {{jsxref("Object.assign()")}} вызывает [setters](/ru/docs/Web/JavaScript/Reference/Functions/set), тогда как оператор spread нет.

### Изменение Prototype

Объявление свойства в виде `__proto__: value` или `"__proto__": value` не создаст свойства с именем `__proto__`. Вместо этого, если предоставляемое значение объект или [`null`](/ru/docs/Web/JavaScript/Reference/Global_Objects/null), оно заменит `[[Prototype]]` создаваемого объекта на это значение. (Если значение не объект или null, объект не изменится.)

```js
var obj1 = {};
assert(Object.getPrototypeOf(obj1) === Object.prototype);

var obj2 = { __proto__: null };
assert(Object.getPrototypeOf(obj2) === null);

var protoObj = {};
var obj3 = { __proto__: protoObj };
assert(Object.getPrototypeOf(obj3) === protoObj);

var obj4 = { __proto__: "not an object or null" };
assert(Object.getPrototypeOf(obj4) === Object.prototype);
assert(!obj4.hasOwnProperty("__proto__"));
```

Только одно изменение prototype разрешено через литеральное объявление объекта: несколько изменений prototype вызовут синтаксическую ошибку.

Объявление свойства не через "двоеточие" не изменит значения prototype: это описание будет выглядеть идентично такому же объявлению свойства с использованием любого другого имени.

```js
var __proto__ = "variable";

var obj1 = { __proto__ };
assert(Object.getPrototypeOf(obj1) === Object.prototype);
assert(obj1.hasOwnProperty("__proto__"));
assert(obj1.__proto__ === "variable");

var obj2 = {
  __proto__() {
    return "hello";
  },
};
assert(obj2.__proto__() === "hello");

var obj3 = { ["__prot" + "o__"]: 17 };
assert(obj3.__proto__ === 17);
```

## Литеральная нотация vs JSON

Литеральная нотация не то же самое, что и **J**ava**S**cript **O**bject **N**otation ([JSON](/ru/docs/Glossary/JSON)). Хотя они и выглядят аналогично, существует разница между ними:

- JSON позволяет объявление свойств _только_ с помощью синтаксиса `"property": value`. Имя свойства должно быть заключено в двойные кавычки и объявление не может быть сокращено.
- В JSON значения могут быть только строками, числами, массивами, `true`, `false`, `null` или другими (JSON) объектами.
- Значения-функции (смотри "Методы" выше) не могут быть присвоены свойствам в JSON.
- Объект вида {{jsxref("Date")}} будет строкой после {{jsxref("JSON.parse()")}}.
- {{jsxref("JSON.parse()")}} отклонит вычисляемые имена свойств и вернёт ошибку.

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## See also

- [Property accessors](/ru/docs/Web/JavaScript/Reference/Operators/Property_Accessors)
- [`get`](/ru/docs/Web/JavaScript/Reference/Functions/get) / [`set`](/ru/docs/Web/JavaScript/Reference/Functions/set)
- [Method definitions](/ru/docs/Web/JavaScript/Reference/Functions/Method_definitions)
- [Lexical grammar](/ru/docs/Web/JavaScript/Reference/Lexical_grammar)
