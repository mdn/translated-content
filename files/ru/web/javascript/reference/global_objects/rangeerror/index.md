---
title: RangeError
slug: Web/JavaScript/Reference/Global_Objects/RangeError
l10n:
  sourceCommit: d19dc31570f62196a5837be38bd0b11c45e67b05
---

{{JSRef}}

Объект **`RangeError`** представляет ошибку, возникающую, когда значение не входит в множество или диапазон допустимых значений.

## Описание

`RangeError` возникает при попытке передать в качестве аргумента функции значение, которое не входит в диапазон допустимых значений.

Это может происходить в разных случаях:

- при передаче значения, которое не является одной из допустимых строк, в {{jsxref("String.prototype.normalize()")}},
- при попытке создать массив недопустимой длины с помощью конструктора {{jsxref("Array")}},
- при передаче недопустимых значений в такие методы, как {{jsxref("Number.prototype.toExponential()")}}, {{jsxref("Number.prototype.toFixed()")}} или {{jsxref("Number.prototype.toPrecision()")}}.

`RangeError` является {{Glossary("serializable object", "сериализуемым объектом")}}, поэтому он может быть клонирован с помощью {{domxref("structuredClone()")}} или передан между [воркерами](/ru/docs/Web/API/Worker) с использованием {{domxref("Worker/postMessage()", "postMessage()")}}.

`RangeError` является подклассом {{jsxref("Error")}}.

## Конструктор

- {{jsxref("RangeError/RangeError", "RangeError()")}}
  - : Создаёт новый объект `RangeError`.

## Свойства экземпляра

_Также наследует свойства экземпляра своего родителя {{jsxref("Error")}}_.

Эти свойства определены в `RangeError.prototype` и есть у всех экземпляров `RangeError`.

- {{jsxref("Object/constructor", "RangeError.prototype.constructor")}}
  - : Функция-конструктор, создающая экземпляр объекта. Для экземпляров `RangeError` начальным значением является конструктор {{jsxref("RangeError/RangeError", "RangeError")}}.
- {{jsxref("Error/name", "RangeError.prototype.name")}}
  - : Представляет название типа ошибки. Начальным значением `RangeError.prototype.name` является `"RangeError"`.

## Методы экземпляра

_Наследует методы экземпляра своего родителя {{jsxref("Error")}}_.

## Примеры

### Использование `RangeError` для цифровых значений

```js
function check(n) {
  if (!(n >= -500 && n <= 500)) {
    throw new RangeError("Аргумент должен быть в диапазоне между -500 и 500.");
  }
}

try {
  check(2000);
} catch (error) {
  if (error instanceof RangeError) {
    // Обработка ошибки
  }
}
```

### Использование `RangeError` для нецифровых значений

```js
function check(value) {
  if (!["яблоко", "банан", "морковь"].includes(value)) {
    throw new RangeError(
      'Аргумент должен иметь значение "яблоко", "банан" или "морковь".',
    );
  }
}

try {
  check("капуста");
} catch (error) {
  if (error instanceof RangeError) {
    // Обработка ошибки
  }
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Error")}}
- {{jsxref("Array")}}
- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
- {{jsxref("String.prototype.normalize()")}}
