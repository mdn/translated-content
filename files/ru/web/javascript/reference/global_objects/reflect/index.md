---
title: Reflect
slug: Web/JavaScript/Reference/Global_Objects/Reflect
---

{{JSRef}}

**Reflect** - это встроенный объект, который предоставляет методы для перехватываемых JavaScript операций. Эти методы аналогичны методам [proxy handler](/ru/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler). `Reflect` - это не функциональный, а простой объект, он не является сконструированным.

## Описание

В отличие от большинства глобальных объектов, `Reflect` - это не конструктор. Вы не можете использовать его с [`оператором new`](/ru/docs/Web/JavaScript/Reference/Operators/new) или вызывать `Reflect,` как функцию. Все свойства и методы объекта `Reflect` являются статическими (так же, как и у объекта {{jsxref("Math")}}).

## Методы

Объект `Reflect` обеспечивает работу статических функций, называющиеся так же, как [методы proxy handler](/ru/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler). Некоторые из этих методов - те же, что и соответствующие им методы класса {{jsxref("Object")}}.

- {{jsxref("Reflect.apply()")}}
  - : Вызывает целевую функцию с аргументами, переданными в параметре `args`. Смотрите также {{jsxref("Function.prototype.apply()")}}.
- {{jsxref("Reflect.construct()")}}
  - : Оператор [`new`](/ru/docs/Web/JavaScript/Reference/Operators/new) как функция. Аналогично `new target(...args)`. Также предоставляет возможность определить другой прототип.
- {{jsxref("Reflect.defineProperty()")}}
  - : Похож на {{jsxref("Object.defineProperty()")}}. Возвращает {{jsxref("Boolean")}}.
- {{jsxref("Reflect.deleteProperty()")}}
  - : Оператор [`delete`](/ru/docs/Web/JavaScript/Reference/Operators/delete) как функция. Аналогично `delete target[name]`.
- {{jsxref("Reflect.enumerate()")}}
  - : Похож на цикл [`for...in`](/ru/docs/Web/JavaScript/Reference/Statements/for...in). Возвращает итератор с собственными перечисляемыми и наследуемыми свойствами целевого объекта.
- {{jsxref("Reflect.get()")}}
  - : Функция, которая возвращает значение свойств.
- {{jsxref("Reflect.getOwnPropertyDescriptor()")}}
  - : Аналогично {{jsxref("Object.getOwnPropertyDescriptor()")}}. Возвращает дескриптор указанного свойства если присутствует в объекте, иначе {{jsxref("undefined")}}.
- {{jsxref("Reflect.getPrototypeOf()")}}
  - : Аналогично {{jsxref("Object.getPrototypeOf()")}}.
- {{jsxref("Reflect.has()")}}
  - : Оператор [`in`](/ru/docs/Web/JavaScript/Reference/Operators/in) как функция. Возвращает значение {{jsxref("Boolean")}} в зависимости от факта наличия собственного или наследованного свойства.
- {{jsxref("Reflect.isExtensible()")}}
  - : Аналогично {{jsxref("Object.isExtensible()")}}.
- {{jsxref("Reflect.ownKeys()")}}
  - : Возвращает массив строк с именами собственных (не наследованных) свойств.
- {{jsxref("Reflect.preventExtensions()")}}
  - : Аналогично {{jsxref("Object.preventExtensions()")}}. Возвращает {{jsxref("Boolean")}}.
- {{jsxref("Reflect.set()")}}
  - : Функция, присваивающая значения свойствам. Возвращает {{jsxref("Boolean")}} значение `true` при успешном выполнении.
- {{jsxref("Reflect.setPrototypeOf()")}}
  - : Функция, присваивающая прототип целевому объекту.

## Примеры

### Проверка наличия конкретных свойств у объекта

```js
const duck = {
  name: "Maurice",
  color: "white",
  greeting: function () {
    console.log(`Quaaaack! My name is ${this.name}`);
  },
};

Reflect.has(duck, "color");
// true
Reflect.has(duck, "haircut");
// false
```

### Возврат собственных ключей объекта

```js
Reflect.ownKeys(duck);
// [ "name", "color", "greeting" ]
```

### Добавление нового свойства в объект

```js
Reflect.set(duck, "eyes", "black");
// вернётся "true" если вызов успешен
// объект "duck" теперь содержит свойство "eyes" со значением "black"
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Глобальный объект {{jsxref("Proxy")}}.
- Объект {{jsxref("Proxy.handler", "handler")}}.
