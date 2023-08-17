---
title: Math.LOG10E
slug: Web/JavaScript/Reference/Global_Objects/Math/LOG10E
---

{{JSRef("Global_Objects", "Math")}}

## Сводка

Свойство **`Math.LOG10E`** представляет десятичный логарифм из e, приблизительно равный 0,434:

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.LOG10E</mi></mstyle><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>10</mn></msub><mo stretchy="false">(</mo><mi>e</mi><mo stretchy="false">)</mo><mo>≈</mo><mn>0,434</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.LOG10E}} = \log_10(e) \approx 0,434</annotation></semantics></math>

{{js_property_attributes(0, 0, 0)}}

## Описание

Поскольку свойство `LOG10E` является статическим свойством объекта `Math`, вы всегда должны использовать его как `Math.LOG10E`, а не пытаться создавать экземпляр объекта `Math` и получать свойство от него (поскольку объект `Math` не является конструктором).

## Примеры

### Пример: использование свойства `Math.LOG10E`

Следующая функция возвращает десятичный логарифм из e:

```js
function getLog10e() {
  return Math.LOG10E;
}

getLog10e(); // 0.4342944819032518
```

## Спецификации

| Спецификация                                           | Статус             | Комментарии                                            |
| ------------------------------------------------------ | ------------------ | ------------------------------------------------------ |
| ECMAScript 1-е издание.                                | Стандарт           | Изначальное определение. Реализована в JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.8.1.5', 'Math.LOG10E')}}  | {{Spec2('ES5.1')}} |                                                        |
| {{SpecName('ES6', '#sec-math.log10e', 'Math.LOG10E')}} | {{Spec2('ES6')}}   |                                                        |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}} {{experimental_inline}}
