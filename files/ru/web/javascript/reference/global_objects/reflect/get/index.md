---
title: Reflect.get()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/get
---

{{JSRef}}

Статический метод **`Reflect.get()`** работает также, словно если бы мы получали свойство объекта (`target[propertyKey]`) с помощью функции.

{{EmbedInteractiveExample("pages/js/reflect-get.html")}}

## Синтаксис

```
Reflect.get(target, propertyKey[, receiver])
```

### Параметры

- `target`
  - : Объект, к свойству которого идёт обращение.
- `propertyKey`
  - : Название свойства, значение которого необходимо получить.
- receiver {{optional_inline}}
  - : Значение, которое получит переменная `this` при вызове геттера.

### Возвращаемое значение

Значение свойства `propertyKey`.

### Исключения

{{jsxref("TypeError")}}, если `target` не {{jsxref("Object")}}.

## Описание

Метод `Reflect.get` позволяет получить значение свойства некоторого объекта. Он похож на обычный доступ к значению свойства объекта [значению свойства объекта](/ru/docs/Web/JavaScript/Reference/Operators/Property_Accessors), только с синтаксисом функции.

## Примеры

### Использование `Reflect.get()`

```js
// Объект
var obj = { x: 1, y: 2 };
Reflect.get(obj, "x"); // 1

// Массив
Reflect.get(["ноль", "один"], 1); // "один"

// Proxy, перехватывающий get
var x = { p: 1 };
var obj = new Proxy(x, {
  get(t, k, r) {
    return k + "bar";
  },
});
Reflect.get(obj, "foo"); // "foobar"
```

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Reflect")}}
- [Property accessors](/ru/docs/Web/JavaScript/Reference/Operators/Property_Accessors)
