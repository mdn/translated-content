---
title: Proxy.revocable()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/revocable
---

{{JSRef}}

Метод **`Proxy.revocable()`** используется, чтобы создать отменяемый {{jsxref("Proxy")}} объект.

## Синтаксис

```
Proxy.revocable(target, handler);
```

### Параметры

{{ Page("/docs/Web/JavaScript/Reference/Global_Objects/Proxy", "Parameters") }}

### Возвращаемое значение

Создаётся и возвращается отменяемый `Proxy` объект.

## Описание

Отменяемый `Proxy` - объект со следующими двумя свойствами `{proxy: proxy, revoke: revoke}`.

- `proxy`
  - : Объект `Proxy`, созданный с помощью вызова `new Proxy(target, handler)`.
- `revoke`
  - : Функция, не принимающая аргументов, которая сделает недействительным (выключит) `proxy`.

Если вызовется функция `revoke()`, `proxy` становится неиспользуемым: Любой `proxy`-перехватчик событий объекта будет вызывать исключение {{jsxref("TypeError")}}. Как только `proxy` отменена, она останется отменённой и дальше, и может быть собрана сборщиком мусора. Повторный вызов `revoke()` не будет иметь никакого эффекта.

## Примеры

```js
var revocable = Proxy.revocable(
  {},
  {
    get: function (target, name) {
      return "[[" + name + "]]";
    },
  },
);
var proxy = revocable.proxy;
console.log(proxy.foo); // "[[foo]]"

revocable.revoke();

console.log(proxy.foo); // Вызвано исключение TypeError
proxy.foo = 1; // TypeError снова
delete proxy.foo; // Всё ещё TypeError
typeof proxy; // "object", typeof не вызывает никаких proxy-перехватчиков событий
```

## Спецификации

{{Specifications}}

## Совместимость браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Proxy")}}
