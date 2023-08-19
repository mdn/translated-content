---
title: RandomSource.getRandomValues()
slug: Web/API/Crypto/getRandomValues
---

{{APIRef("Web Crypto API")}}

Метод **`RandomSource.getRandomValues()`** позволяет вам получать криптографически стойкие числа. Массив, переданный как параметр, заполняется случайными числами (случайными в криптографическом смысле).

Для того, чтобы гарантировать достаточную производительность, реализации используют не настоящий генератор случайных чисел (RNG, en - Random Number Generator), а генератор псевдо-случайных чисел, которому предоставлено начальное зерно (wiki - <https://en.wikipedia.org/wiki/Random_seed>) с достаточной энтропией (<http://cryptography.ru/ref/энтропия>). Реализация генератора псевдо-случайных чисел (PRNG, en - PseudoRandom Number Generator) отличается от других реализаций RNG, но она больше подходит для использования в криптографии. Реализации также требуют использование начального зерна с достаточной энтропией, как источник системно-уровневой энтропии.

## Синтаксис

```
cryptoObj.getRandomValues(typedArray);
```

### Параметры

- `typedArray`
  - : Целочисленный массив {{jsxref("TypedArray")}}, например {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}}, или {{jsxref("Uint32Array")}}. Все элементы массива замещаются случайными числами.

### Исключения

- Исключение `QuotaExceededError` {{domxref("DOMException")}} выбрасывается если запрошенная длина больше чем 65536 байт.

## Пример

```js
/* Предполагается что функция window.crypto.getRandomValues доступна */

var array = new Uint32Array(10);
window.crypto.getRandomValues(array);

console.log("Ваше счастливое число:");
for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{ domxref("Window.crypto") }} чтобы получить объект {{domxref("Crypto")}}.
- {{jsxref("Math.random")}}, не криптографический способ получения случайных чисел.
