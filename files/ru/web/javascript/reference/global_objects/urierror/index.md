---
title: URIError
slug: Web/JavaScript/Reference/Global_Objects/URIError
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Объект **`URIError`** представляет ошибку, возникающую при неправильном использовании глобальных функций обработки URI.

`URIError` является {{Glossary("serializable object", "сериализуемым объектом")}}, поэтому он может быть клонирован с помощью {{domxref("structuredClone()")}} или передан между [воркерами](/ru/docs/Web/API/Worker) с использованием {{domxref("Worker/postMessage()", "postMessage()")}}.

`URIError` является подклассом {{jsxref("Error")}}.

## Конструктор

- {{jsxref("URIError/URIError", "URIError()")}}
  - : Создаёт новый объект `URIError`.

## Свойства экземпляра

_Также наследует свойства своего родителя {{jsxref("Error")}}_.

Эти свойства определены в `URIError.prototype` и есть у всех экземпляров `URIError`.

- {{jsxref("Object/constructor", "URIError.prototype.constructor")}}
  - : Функция-конструктор, создающая экземпляр объекта. Для экземпляров `URIError` начальным значением является конструктор {{jsxref("URIError/URIError", "URIError")}}.
- {{jsxref("Error/name", "URIError.prototype.name")}}
  - : Представляет название типа ошибки. Начальным значением `URIError.prototype.name` является `"URIError"`.

## Методы экземпляра

_Наследует методы своего родителя {{jsxref("Error")}}_.

## Примеры

### Перехват `URIError`

```js
try {
  decodeURIComponent("%");
} catch (e) {
  console.log(e instanceof URIError); // true
  console.log(e.message); // "malformed URI sequence"
  console.log(e.name); // "URIError"
  console.log(e.stack); // Стек ошибок
}
```

### Создание `URIError`

```js
try {
  throw new URIError("Привет");
} catch (e) {
  console.log(e instanceof URIError); // true
  console.log(e.message); // "Привет"
  console.log(e.name); // "URIError"
  console.log(e.stack); // Стек ошибок
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Error")}}
- {{jsxref("decodeURI()")}}
- {{jsxref("decodeURIComponent()")}}
- {{jsxref("encodeURI()")}}
- {{jsxref("encodeURIComponent()")}}
