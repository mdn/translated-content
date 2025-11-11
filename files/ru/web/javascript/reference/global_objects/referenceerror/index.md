---
title: ReferenceError
slug: Web/JavaScript/Reference/Global_Objects/ReferenceError
l10n:
  sourceCommit: 6558de67a347fee30c303da8a0b262a9270a6885
---

{{JSRef}}

Объект **`ReferenceError`** представляет ошибку, возникающую при обращении к переменной, которая не существует (или не была инициализирована) в текущей области видимости.

`ReferenceError` является {{Glossary("serializable object", "сериализуемым объектом")}}, поэтому он может быть клонирован с помощью {{domxref("structuredClone()")}} или передан между [воркерами](/ru/docs/Web/API/Worker) с использованием {{domxref("Worker/postMessage()", "postMessage()")}}.

`RangeReferenceErrorError` является подклассом {{jsxref("Error")}}.

## Конструктор

- {{jsxref("ReferenceError/ReferenceError", "ReferenceError()")}}
  - : Создаёт новый объект `ReferenceError`.

## Свойства экземпляра

_Также наследует свойства экземпляра своего родителя {{jsxref("Error")}}_.

Эти свойства определены в `ReferenceError.prototype` и есть у всех экземпляров `ReferenceError`.

- {{jsxref("Object/constructor", "ReferenceError.prototype.constructor")}}
  - : Функция-конструктор, создающая экземпляр объекта. Для экземпляров `ReferenceError` начальным значением является конструктор {{jsxref("ReferenceError/ReferenceError", "ReferenceError")}}.
- {{jsxref("Error/name", "ReferenceError.prototype.name")}}
  - : Представляет название типа ошибки. Начальным значением `ReferenceError.prototype.name` является `"ReferenceError"`.

## Методы экземпляра

_Наследует методы экземпляра своего родителя {{jsxref("Error")}}_.

## Примеры

### Перехват `ReferenceError`

```js
try {
  let a = undefinedVariable;
} catch (e) {
  console.log(e instanceof ReferenceError); // true
  console.log(e.message); // "undefinedVariable is not defined"
  console.log(e.name); // "ReferenceError"
  console.log(e.stack); // Стек ошибок
}
```

### Создание `ReferenceError`

```js
try {
  throw new ReferenceError("Привет");
} catch (e) {
  console.log(e instanceof ReferenceError); // true
  console.log(e.message); // "Привет"
  console.log(e.name); // "ReferenceError"
  console.log(e.stack); // Стек ошибок
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Error")}}
