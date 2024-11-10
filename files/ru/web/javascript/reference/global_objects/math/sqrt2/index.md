---
title: Math.SQRT2
slug: Web/JavaScript/Reference/Global_Objects/Math/SQRT2
---

{{JSRef}}

## Сводка

Свойство **`Math.SQRT2`** представляет квадратный корень из 2, приблизительно равный 1,414:

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.SQRT2</mi></mstyle><mo>=</mo><msqrt><mn>2</mn></msqrt><mo>≈</mo><mn>1,414</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.SQRT2}} = \sqrt{2} \approx 1,414</annotation></semantics></math>

{{js_property_attributes(0, 0, 0)}}

## Описание

Поскольку свойство `SQRT2` является статическим свойством объекта `Math`, вы всегда должны использовать его как `Math.SQRT2`, а не пытаться создавать экземпляр объекта `Math` и получать свойство от него (поскольку объект `Math` не является конструктором).

## Примеры

### Пример: использование свойства `Math.SQRT2`

Следующая функция возвращает квадратный корень из двух:

```js
function getRoot2() {
  return Math.SQRT2;
}

getRoot2(); // 1.4142135623730951
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Math.pow()")}}
- {{jsxref("Math.sqrt()")}}
