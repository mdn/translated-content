---
title: Math.E
slug: Web/JavaScript/Reference/Global_Objects/Math/E
---

{{JSRef}}

## Сводка

Свойство **`Math.E`** представляет основание натурального логарифма, e, приблизительно равное 2,718.

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.E</mi></mstyle><mo>=</mo><mi>e</mi><mo>≈</mo><mn>2,718</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.E}} = e \approx 2,718</annotation></semantics></math>

{{js_property_attributes(0, 0, 0)}}

## Описание

Поскольку свойство `E` является статическим свойством объекта `Math`, вы всегда должны использовать его как `Math.E`, а не пытаться создавать экземпляр объекта `Math` и получать свойство от него (поскольку объект `Math` не является конструктором).

## Примеры

### Пример: использование свойства `Math.E`

Следующая функция возвращает e:

```js
function getNapier() {
  return Math.E;
}

getNapier(); // 2.718281828459045
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log1p()")}} {{experimental_inline}}
