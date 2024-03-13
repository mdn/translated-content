---
title: DataView
slug: Web/JavaScript/Reference/Global_Objects/DataView
l10n:
  sourceCommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

{{JSRef}}

Представление **`DataView`** предоставляет низко-уровневый интерфейс для чтения и записи различных числовых типов в бинарном {{jsxref("ArrayBuffer")}}, независимо от [порядка байтов](/ru/docs/Glossary/Endianness) платформы.

## Описание

### Порядок байтов

Многобайтовые числовые форматы представляются в памяти по-разному в зависимости от архитектуры машины (смотрите {{Glossary("Endianness")}} для объяснения). Методы доступа `DataView` предоставляют явный способ обращения к данным вне зависимости от порядка байтов платформы.

```js
const littleEndian = (() => {
  const buffer = new ArrayBuffer(2);
  new DataView(buffer).setInt16(0, 256, true /* littleEndian */);

  // Int16Array использует порядок байтов платформы.
  return new Int16Array(buffer)[0] === 256;
})();

console.log(littleEndian); // true или false
```

### 64-битные целые числа

Некоторые браузеры не поддерживают {{jsxref("DataView.prototype.setBigInt64()")}} и {{jsxref("DataView.prototype.setBigUint64()")}}. Поэтому для использования 64-битных операций, которые будут работать в любом браузере, можно реализовать собственную функцию `getUint64()` для получения значений с точностью до {{jsxref("Number.MAX_SAFE_INTEGER")}}, чего достаточно в большинстве случаев.

```js
function getUint64(dataview, byteOffset, littleEndian) {
  // разбиваем 64-битное число на две 32-битных (по 4 байта) части
  const left = dataview.getUint32(byteOffset, littleEndian);
  const right = dataview.getUint32(byteOffset + 4, littleEndian);

  // объединяем два 32-битных значения
  const combined = littleEndian
    ? left + 2 ** 32 * right
    : 2 ** 32 * left + right;

  if (!Number.isSafeInteger(combined))
    console.warn(
      combined,
      "превышает MAX_SAFE_INTEGER. Точность может быть потеряна",
    );

  return combined;
}
```

В случае если вам всё же нужен полный 64-битный диапазон, можно создать {{jsxref("BigInt")}}. Хотя работа со встроенными значениями BigInt намного быстрее, чем с эквивалентами из самостоятельных реализаций, использование значений BigInt всегда будет намного медленнее, чем 32-битных целых чисел, из-за характера их переменного размера в JavaScript.

```js
const BigInt = window.BigInt,
  bigThirtyTwo = BigInt(32),
  bigZero = BigInt(0);
function getUint64BigInt(dataview, byteOffset, littleEndian) {
  // разбиваем 64-битное число на две 32-битных (по 4 байта) части
  const left = BigInt(dataview.getUint32(byteOffset | 0, !!littleEndian) >>> 0);
  const right = BigInt(
    dataview.getUint32(((byteOffset | 0) + 4) | 0, !!littleEndian) >>> 0,
  );

  // объединяем два 32-битных значения и возвращаем
  return littleEndian
    ? (right << bigThirtyTwo) | left
    : (left << bigThirtyTwo) | right;
}
```

## Конструктор

- {{jsxref("DataView/DataView", "DataView()")}}
  - : Создаёт новый объект `DataView`.

## Свойства экземпляра

Эти свойства определены в `DataView.prototype` и есть у всех экземпляров `DataView`.

- {{jsxref("DataView.prototype.buffer")}}
  - : {{jsxref("ArrayBuffer")}}, связанный с представлением. Устанавливается в момент создания и **доступно только для чтения**.
- {{jsxref("DataView.prototype.byteLength")}}
  - : Размер представления в байтах. Устанавливается в момент создания и **доступно только для чтения**.
- {{jsxref("DataView.prototype.byteOffset")}}
  - : Смещение представления в байтах от начала его {{jsxref("ArrayBuffer")}}. Устанавливается в момент создания и **доступно только для чтения**.
- {{jsxref("Object/constructor", "DataView.prototype.constructor")}}
  - : Функция-конструктор, создающая экземпляр объекта. Для экземпляров `DataView` начальным значением является конструктор {{jsxref("DataView/DataView", "DataView")}}.
- `DataView.prototype[@@toStringTag]`
  - : Начальным значением свойства [`@@toStringTag`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) является строка `"DataView"`. Это свойство используется в {{jsxref("Object.prototype.toString()")}}.

## Методы экземпляра

- {{jsxref("DataView.prototype.getBigInt64()")}}
  - : Читает 8 байтов начиная с указанного смещения этого `DataView` и интерпретирует их как 64-битное знаковое целое число.
- {{jsxref("DataView.prototype.getBigUint64()")}}
  - : Читает 8 байтов начиная с указанного смещения этого `DataView` и интерпретирует их как 64-битное беззнаковое целое число.
- {{jsxref("DataView.prototype.getFloat32()")}}
  - : Читает 4 байта начиная с указанного смещения этого `DataView` и интерпретирует их как 32-битное число с плавающей точкой.
- {{jsxref("DataView.prototype.getFloat64()")}}
  - : Читает 8 байтов начиная с указанного смещения этого `DataView` и интерпретирует их как 64-битное число с плавающей точкой.
- {{jsxref("DataView.prototype.getInt16()")}}
  - : Читает 2 байта начиная с указанного смещения этого `DataView` и интерпретирует их как 16-битное знаковое целое число.
- {{jsxref("DataView.prototype.getInt32()")}}
  - : Читает 4 байта начиная с указанного смещения этого `DataView` и интерпретирует их как 32-битное знаковое целое число.
- {{jsxref("DataView.prototype.getInt8()")}}
  - : Читает 1 байт начиная с указанного смещения этого `DataView` и интерпретирует его как 8-битное знаковое целое число.
- {{jsxref("DataView.prototype.getUint16()")}}
  - : Читает 2 байта начиная с указанного смещения этого `DataView` и интерпретирует их как 16-битное беззнаковое целое число.
- {{jsxref("DataView.prototype.getUint32()")}}
  - : Читает 4 байта начиная с указанного смещения этого `DataView` и интерпретирует их как 32-битное беззнаковое целое число.
- {{jsxref("DataView.prototype.getUint8()")}}
  - : Читает 1 байт начиная с указанного смещения этого `DataView` и интерпретирует его как 8-битное беззнаковое целое число.
- {{jsxref("DataView.prototype.setBigInt64()")}}
  - : Принимает BigInt и сохраняет его как 64-битное знаковое целое число в 8 байтах начиная с указанного смещения этого `DataView`.
- {{jsxref("DataView.prototype.setBigUint64()")}}
  - : Принимает BigInt и сохраняет его как 64-битное беззнаковое целое число в 8 байтах начиная с указанного смещения этого `DataView`.
- {{jsxref("DataView.prototype.setFloat32()")}}
  - : Принимает число и сохраняет его как 32-битное число с плавающей точкой в 4 байтах начиная с указанного смещения этого `DataView`.
- {{jsxref("DataView.prototype.setFloat64()")}}
  - : Принимает число и сохраняет его как 64-битное число с плавающей точкой в 8 байтах начиная с указанного смещения этого `DataView`.
- {{jsxref("DataView.prototype.setInt16()")}}
  - : Принимает число и сохраняет его как 16-битное знаковое целое число в 2 байтах по указанному смещению этого `DataView`.
- {{jsxref("DataView.prototype.setInt32()")}}
  - : Принимает число и сохраняет его как 32-битное знаковое целое число в 4 байтах по указанному смещению этого `DataView`.
- {{jsxref("DataView.prototype.setInt8()")}}
  - : Принимает число и сохраняет его как 8-битное знаковое целое число в байте по указанному смещению этого `DataView`.
- {{jsxref("DataView.prototype.setUint16()")}}
  - : Принимает число и сохраняет его как 16-битное беззнаковое целое число в 2 байтах по указанному смещению этого `DataView`.
- {{jsxref("DataView.prototype.setUint32()")}}
  - : Принимает число и сохраняет его как 32-битное беззнаковое целое число в 4 байтах по указанному смещению этого `DataView`.
- {{jsxref("DataView.prototype.setUint8()")}}
  - : Принимает число и сохраняет его как 8-битное беззнаковое целое число в байте по указанному смещению этого `DataView`.

## Примеры

### Использование DataView

```js
const buffer = new ArrayBuffer(16);
const view = new DataView(buffer, 0);

view.setInt16(1, 42);
view.getInt16(1); // 42
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Полифил `DataView` в `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
