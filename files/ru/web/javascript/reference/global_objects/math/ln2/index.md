---
title: Math.LN2
slug: Web/JavaScript/Reference/Global_Objects/Math/LN2
---

{{JSRef}}

## Сводка

Свойство **`Math.LN2`** представляет натуральный логарифм из 2, приблизительно равный 0,693:

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.LN2</mi></mstyle><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo><mo>≈</mo><mn>0,693</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.LN2}} = \ln(2) \approx 0,693</annotation></semantics></math>

{{js_property_attributes(0, 0, 0)}}

## Описание

Поскольку свойство `LN2` является статическим свойством объекта `Math`, вы всегда должны использовать его как `Math.LN2`, а не пытаться создавать экземпляр объекта `Math` и получать свойство от него (поскольку объект `Math` не является конструктором).

## Примеры

### Пример: использование свойства `Math.LN2`

Следующая функция возвращает натуральный логарифм из 2:

```js
function getNatLog2() {
  return Math.LN2;
}

getNatLog2(); // 0.6931471805599453
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log2()")}} {{experimental_inline}}
