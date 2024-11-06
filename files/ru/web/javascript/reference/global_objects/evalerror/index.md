---
title: EvalError
slug: Web/JavaScript/Reference/Global_Objects/EvalError
l10n:
  sourceCommit: 6558de67a347fee30c303da8a0b262a9270a6885
---

{{JSRef}}

Объект **`EvalError`** представляет ошибку, возникающую в глобальной функции {{jsxref("Global_Objects/eval", "eval()")}}. JavaScript больше не генерирует это исключение, однако объект `EvalError` остается для совместимости.

`EvalError` является {{Glossary("serializable object", "сериализуемым объектом")}}, поэтому он может быть клонирован с помощью {{domxref("structuredClone()")}} или передан между [воркерами](/ru/docs/Web/API/Worker) с использованием {{domxref("Worker/postMessage()", "postMessage()")}}.

`EvalError` является подклассом {{jsxref("Error")}}.

## Конструктор

- {{jsxref("EvalError/EvalError", "EvalError()")}}
  - : Создаёт новый объект `EvalError`.

## Свойства экземпляра

_Также наследует свойства своего родителя {{jsxref("Error")}}_.

Эти свойства определены в `EvalError.prototype` и есть у всех экземпляров `EvalError`.

- {{jsxref("Object/constructor", "EvalError.prototype.constructor")}}
  - : Функция-конструктор, создающая экземпляр объекта. Для экземпляров `EvalError` начальным значением является конструктор {{jsxref("EvalError/EvalError", "EvalError")}}.
- {{jsxref("Error/name", "EvalError.prototype.name")}}
  - : Представляет название типа ошибки. Начальным значением `EvalError.prototype.name` является `"EvalError"`.

## Методы экземпляра

_Наследует методы своего родителя {{jsxref("Error")}}_.

## Примеры

### Создание `EvalError`

```js
try {
  throw new EvalError("Привет");
} catch (e) {
  console.log(e instanceof EvalError); // true
  console.log(e.message); // "Привет"
  console.log(e.name); // "EvalError"
  console.log(e.stack); // Стек ошибок
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Error")}}
- {{jsxref("Global_Objects/eval", "eval()")}}
