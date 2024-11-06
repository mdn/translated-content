---
title: TypeError
slug: Web/JavaScript/Reference/Global_Objects/TypeError
l10n:
  sourceCommit: 6558de67a347fee30c303da8a0b262a9270a6885
---

{{JSRef}}

Объект **`TypeError`** представляет ошибку, возникающую, когда операцию невозможно выполнить, обычно (но не обязательно), когда значение не относится к ожидаемому типу.

`TypeError` может возникнуть в следующих случаях:

- операнд или аргумент, переданный в функцию несовместим с типом, который ожидает оператор или функция;
- при попытке изменить значение, которое не может быть изменено;
- при попытке использовать значение неподходящим способом.

`TypeError` является {{Glossary("serializable object", "сериализуемым объектом")}}, поэтому он может быть клонирован с помощью {{domxref("structuredClone()")}} или передан между [воркерами](/ru/docs/Web/API/Worker) с использованием {{domxref("Worker/postMessage()", "postMessage()")}}.

`TypeError` является подклассом {{jsxref("Error")}}.

## Конструктор

- {{jsxref("TypeError/TypeError", "TypeError()")}}
  - : Создаёт новый объект `TypeError`.

## Свойства экземпляра

_Также наследует свойства своего родителя {{jsxref("Error")}}_.

Эти свойства определены в `TypeError.prototype` и есть у всех экземпляров `TypeError`.

- {{jsxref("Object/constructor", "TypeError.prototype.constructor")}}
  - : Функция-конструктор, создающая экземпляр объекта. Для экземпляров `TypeError` начальным значением является конструктор {{jsxref("TypeError/TypeError", "TypeError")}}.
- {{jsxref("Error/name", "TypeError.prototype.name")}}
  - : Представляет название типа ошибки. Начальным значением `TypeError.prototype.name` является `"TypeError"`.

## Методы экземпляра

_Наследует методы своего родителя {{jsxref("Error")}}_.

## Примеры

### Перехват `TypeError`

```js
try {
  null.f();
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message); // "null has no properties"
  console.log(e.name); // "TypeError"
  console.log(e.stack); // Стек ошибок
}
```

### Создание `TypeError`

```js
try {
  throw new TypeError("Привет");
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message); // "Привет"
  console.log(e.name); // "TypeError"
  console.log(e.stack); // Стек ошибок
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Error")}}
