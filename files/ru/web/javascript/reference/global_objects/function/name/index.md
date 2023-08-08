---
title: Function.name
slug: Web/JavaScript/Reference/Global_Objects/Function/name
---

{{JSRef}}

Read-only свойство **`name`** глобального объекта {{jsxref("Function")}} и его [экземпляров](/ru/docs/Web/JavaScript/Reference/Global_Objects/Function#Function_instances) содержит название функции созданное во время определения функции или присваивания ссылки на функцию переменной, свойству, аргументу и т. п. Для анонимных функций это свойство может иметь значение `"anonymous"` или пустую строку `""`.

{{EmbedInteractiveExample("pages/js/function-name.html")}}

Интерактивные примеры размещены в GitHub репозитории. Если вы хотите добавить свои примеры, то клонируйте <https://github.com/mdn/interactive-examples> и пришлите пул реквест.

{{js_property_attributes(0,0,1)}}

> **Примечание:** Заметьте, что в нестандартном, pre-ES2015 релизе `configurable` свойство было `false`

## Примеры

### Имя объявленной функции

Свойство `name` возвращает имя функции, либо пустую строку для анонимных функций:

```js
function doSomething() {}

alert(doSomething.name); // выведет "doSomething"
```

### Имя функции-конструктора

Функции, созданные синтаксисом `new Function(...)` или просто `Function(...)` создают {{jsxref("Function")}} и имеют name "anonymous":

```js
new Function().name; // "anonymous"
```

### Предполагаемые имена функций

Переменные и методы могут предположить название анонимной функции из её синтаксической позиции (new in ECMAScript 2015).

```js
var f = function () {};
var object = {
  someMethod: function () {},
};

console.log(f.name); // "f"
console.log(object.someMethod.name); // "someMethod"
```

Вы можете определить функцию с именем в {{jsxref("Operators/Function", "function expression", "", 1)}}:

```js
var object = {
  someMethod: function object_someMethod() {},
};
console.log(object.someMethod.name); // выведет "object_someMethod"

try {
  object_someMethod;
} catch (e) {
  console.log(e);
}
// ReferenceError: object_someMethod is not defined
```

Вы не можете изменить имя функции, это свойство только для чтения:

```js
var object = {
  // анонимная функция
  someMethod: function () {},
};

object.someMethod.name = "otherMethod";
alert(object.someMethod.name); //someMethod
```

Для изменения name можно использовать {{jsxref("Object.defineProperty()")}}.

### Сокращённые имена методов

```js
var o = {
  foo() {},
};
o.foo.name; // "foo";
```

### Имена функций после привязки

{{jsxref("Function.bind()")}} производит функцию, получающую имя "bound и название самой функции.

```js
function foo() {}
foo.bind({}).name; // "bound foo"
```

### Имена функций для getters и setters

Когда используются [`get`](/ru/docs/Web/JavaScript/Reference/Functions/get) и [set](/ru/docs/Web/JavaScript/Reference/Functions/set), "get" и "set" появятся в имени функции.

```
let o = {
  get foo(){},
  set foo(x){}
};

var descriptor = Object.getOwnPropertyDescriptor(o, "foo");
descriptor.get.name; // "get foo"
descriptor.set.name; // "set foo";
```

### Имена функций-классов

Можно использовать `obj.constructor.name` чтобы проверить "class" объекта (читайте предупреждение ниже):

```
function Foo() {}  // ES2015 Syntax: class Foo {}

var fooInstance = new Foo();
console.log(fooInstance.constructor.name); // logs "Foo"
```

> **Предупреждение:** Интерпретатор объявит встроенное `Function.name` свойство только если функция не имеет своего собственного свойства _name_ (см. [9.2.11 of the ECMAScript2015 Language Specification](https://www.ecma-international.org/ecma-262/6.0/#sec-setfunctionname)). Однако, в ES2015 статичные методы перезаписывают OwnProperty конструкторов класса-функции (ECMAScript2015, [14.5.14.21.b](https://www.ecma-international.org/ecma-262/6.0/#sec-runtime-semantics-classdefinitionevaluation) + [12.2.6.9](https://www.ecma-international.org/ecma-262/6.0/#sec-object-initializer-runtime-semantics-propertydefinitionevaluation)).

Таким образом, нельзя получить доступ к `name` любого класса со статичным свойством `name():`

```js
class Foo {
  constructor() {}
  static name() {}
}
```

Со `static name()` методом `Foo.name` больше не содержит название класса, но отсылает к функции `name()`. Приведённое выше определение класса в ES2015 будет вести себя в Chrome и Firefox как в ES5:

```
function Foo() {}
Object.defineProperty(Foo, 'name', { writable: true });
Foo.name = function() {};
```

Пытаясь получить доступ к `fooInstance` с помощью `fooInstance.constructor.name` не даст название класса, но выведет метод `name()`. Пример:

```
let fooInstance = new Foo();
console.log(fooInstance.constructor.name); // logs function name()
```

Из ES5 syntax примера также видно, что в Chrome или Firefox статичное определение `Foo.name` становится _записываемым (writable)_. Встроенное определение в отсутствии кастомного статичного метода*доступно только для чтения*:

```
Foo.name = 'Hello';
console.log(Foo.name); // logs "Hello" if class Foo has a static name() property but "Foo" if not.
```

Следовательно не ожидайте, что `Function.name` свойство будет всегда содержать имя класса.

### Имена функций-символов

Если у {{jsxref("Symbol")}} объявляется имя, то название метода - это имя квадратных скобках.

```js
let sym1 = Symbol("foo");
let sym2 = Symbol();
let o = {
  [sym1]: function () {},
  [sym2]: function () {},
};

o[sym1].name; // "[foo]"
o[sym2].name; // ""
```

## JavaScript минифицированный

> **Предупреждение:** Будьте осторожны, используя `Function.name` и изменения source кода с помощью JavaScript compressors (minifiers) или обфускаторов. Эти инструменты часто используются, как встроенные в JavaScript build pipeline, чтобы сократить размер билда перед деплоем в production. Такие трансформации часто изменяют имена функций.

Такой source code:

```
function Foo() {};
let foo = new Foo();

if (foo.constructor.name === 'Foo') {
  console.log("'foo' is an instance of 'Foo'");
} else {
  console.log('Oops!');
}
```

может быть сжат в:

```
function a() {};
let b = new a();
if (b.constructor.name === 'Foo') {
  console.log("'foo' is an instance of 'Foo'");
} else {
  console.log('Oops!');
}
```

В несжатой версии код выполняется ожидаемо `"'foo' is an instance of 'Foo'"`. В то время, как в сжатой версии он ведёт себя иначе. Если вы полагаетесь на `Function.name`, как в примере, то убедитесь, что pipeline не меняет код или не ожидайте от функции определённого имени.

| Спецификация                             | Статус           | Комментарии              |
| ---------------------------------------- | ---------------- | ------------------------ |
| {{SpecName('ES6', '#sec-name', 'name')}} | {{Spec2('ES6')}} | Изначальное определение. |

## Совместимость с браузерами

{{Compat}}
