---
title: Object.freeze()
slug: Web/JavaScript/Reference/Global_Objects/Object/freeze
---

{{JSRef("Global_Objects", "Object")}}

Метод **`Object.freeze()`** замораживает объект: это значит, что он предотвращает добавление новых свойств к объекту, удаление старых свойств из объекта и изменение существующих свойств или значения их атрибутов перечисляемости, настраиваемости и записываемости. В сущности, объект становится эффективно неизменным. Метод возвращает замороженный объект.

## Синтаксис

```
Object.freeze(obj)
```

### Параметры

- `obj`
  - : Объект для заморозки.

### Возвращаемое значение

Замороженный объект

## Описание

К замороженному объекту нельзя добавить никаких свойств, так же как и удалить свойства из замороженного объекта. Любые попытки сделать это потерпят неудачу, либо молча, либо выбросив исключение {{jsxref("Global_Objects/TypeError", "TypeError")}} (как правило, но не обязательно, это происходит в {{jsxref("Functions_and_function_scope/Strict_mode", "строгом режиме", "", 1)}}).

Значения свойств-данных не могут быть изменены. Свойства-доступы (геттеры и сеттеры) работают как положено (и всё ещё создают иллюзию, что вы изменили значение). Обратите внимание, что значения, являющиеся объектами, всё ещё могут быть изменены, если только они так же не были заморожены.

## Примеры

```js
var obj = {
  prop: function () {},
  foo: "bar",
};

// Можно добавлять новые свойства, существующие свойства можно изменять или удалять
obj.foo = "baz";
obj.lumpy = "woof";
delete obj.prop;

// Оба объекта эквивалентны, а также возвращаемый объект будет заморожен.
// Необязательно сохранять возвращаемый объект при заморозке оригинала.
var o = Object.freeze(obj);

o === obj; // true
Object.isFrozen(obj); // === true;

// Теперь все изменения будут заканчиваться с ошибкой
obj.foo = "quux"; // тихо ничего не делает
obj.quaxxor = "the friendly duck"; // тихо не добавляет свойство

// ...а в строгом режиме такие попытки вызовут выброс исключения TypeError
function fail() {
  "use strict";
  obj.foo = "sparky"; // выбросит TypeError
  delete obj.quaxxor; // выбросит TypeError
  obj.sparky = "arf"; // выбросит TypeError
}

fail();

// Попытки внести изменения через метод Object.defineProperty также выбросят исключение
Object.defineProperty(obj, "ohai", { value: 17 }); // выбросит TypeError
Object.defineProperty(obj, "foo", { value: "eit" }); // выбросит TypeError
```

Следующий пример показывает, что значения-объекты в замороженном объекте могут быть изменены (заморозка неглубокая).

```js
obj = {
  internal: {},
};

Object.freeze(obj);
obj.internal.a = "значениеA";

obj.internal.a; // 'значениеA'

// Чтобы сделать объект obj полностью неизменяемым, замораживаем каждый объект в объекте obj.
// Для этого воспользуемся этой функцией.
function deepFreeze(obj) {
  // Получаем имена свойств из объекта obj
  var propNames = Object.getOwnPropertyNames(obj);

  // Замораживаем свойства для заморозки самого объекта
  propNames.forEach(function (name) {
    var prop = obj[name];

    // Заморозка свойства prop, если оно объект
    if (typeof prop == "object" && prop !== null) deepFreeze(prop);
  });

  // Заморозить сам объект obj (ничего не произойдёт, если он уже заморожен)
  return Object.freeze(obj);
}

obj2 = {
  internal: {},
};

deepFreeze(obj2);
obj2.internal.a = "другоеЗначение";
obj2.internal.a; // undefined
```

## Примечания

В ES5 если аргумент метода не является объектом (является примитивным значением), будет выброшено исключение {{jsxref("Global_Objects/TypeError", "TypeError")}}. В ES2015 такой аргумент будет рассматриваться, как простой замороженный объект и метод его просто вернёт.

```js
> Object.freeze(1)
TypeError: 1 is not an object // код ES5

> Object.freeze(1)
1                             // код ES2015
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Object.isFrozen()")}}
- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Object.seal()")}}
- {{jsxref("Object.isSealed()")}}
