---
title: SyntaxError
slug: Web/JavaScript/Reference/Global_Objects/SyntaxError
l10n:
  sourceCommit: 6558de67a347fee30c303da8a0b262a9270a6885
---

{{JSRef}}

Объект **`SyntaxError`** представляет ошибку, возникающую при попытке интерпретировать синтаксически неправильный код. Это происходит, когда движок JavaScript при синтаксическом анализе кода обнаруживает токены или порядок токенов, не соответствующие синтаксису языка.

`SyntaxError` является {{Glossary("serializable object", "сериализуемым объектом")}}, поэтому он может быть клонирован с помощью {{domxref("structuredClone()")}} или передан между [воркерами](/ru/docs/Web/API/Worker) с использованием {{domxref("Worker/postMessage()", "postMessage()")}}.

`SyntaxError` является подклассом {{jsxref("Error")}}.

## Конструктор

- {{jsxref("SyntaxError/SyntaxError", "SyntaxError()")}}
  - : Создаёт новый объект `SyntaxError`.

## Свойства экземпляра

_Также наследует свойства своего родителя {{jsxref("Error")}}_.

Эти свойства определены в `SyntaxError.prototype` и есть у всех экземпляров `SyntaxError`.

- {{jsxref("Object/constructor", "SyntaxError.prototype.constructor")}}
  - : Функция-конструктор, создающая экземпляр объекта. Для экземпляров `SyntaxError` начальным значением является конструктор {{jsxref("SyntaxError/SyntaxError", "SyntaxError")}}.
- {{jsxref("Error/name", "SyntaxError.prototype.name")}}
  - : Представляет название типа ошибки. Начальным значением `SyntaxError.prototype.name` является `"SyntaxError"`.

## Методы экземпляра

_Наследует методы своего родителя {{jsxref("Error")}}_.

## Примеры

### Перехват `SyntaxError`

```js
try {
  eval("hoo bar");
} catch (e) {
  console.log(e instanceof SyntaxError); // true
  console.log(e.message);
  console.log(e.name); // "SyntaxError"
  console.log(e.stack); // Стек ошибок
}
```

### Создание `SyntaxError`

```js
try {
  throw new SyntaxError("Привет");
} catch (e) {
  console.log(e instanceof SyntaxError); // true
  console.log(e.message); // "Привет"
  console.log(e.name); // "SyntaxError"
  console.log(e.stack); // Стек ошибок
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Error")}}
