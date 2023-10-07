---
title: Math.SQRT1_2
slug: Web/JavaScript/Reference/Global_Objects/Math/SQRT1_2
---

{{JSRef("Global_Objects", "Math")}}

## Сводка

Свойство **`Math.SQRT1_2`** представляет квадратный корень из 1/2, приблизительно равный 0,707:

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.SQRT1_2</mi></mstyle><mo>=</mo><msqrt><mfrac><mn>1</mn><mn>2</mn></mfrac></msqrt><mo>=</mo><mfrac><mn>1</mn><msqrt><mn>2</mn></msqrt></mfrac><mo>≈</mo><mn>0,707</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.SQRT1_2}} = \sqrt{\frac{1}{2}} = \frac{1}{\sqrt{2}} \approx 0,707</annotation></semantics></math>

{{js_property_attributes(0, 0, 0)}}

## Описание

Поскольку свойство `SQRT1_2` является статическим свойством объекта `Math`, вы всегда должны использовать его как `Math.SQRT1_2`, а не пытаться создавать экземпляр объекта `Math` и получать свойство от него (поскольку объект `Math` не является конструктором).

## Примеры

### Пример: использование свойства `Math.SQRT1_2`

Следующая функция возвращает единицу, делённую на квадратный корень из двух:

```js
function getRoot1_2() {
  return Math.SQRT1_2;
}

getRoot1_2(); // 0.7071067811865476
```

## Спецификации

| Спецификация                                             | Статус             | Комментарии                                            |
| -------------------------------------------------------- | ------------------ | ------------------------------------------------------ |
| ECMAScript 1-е издание.                                  | Стандарт           | Изначальное определение. Реализована в JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.8.1.7', 'Math.SQRT1_2')}}   | {{Spec2('ES5.1')}} |                                                        |
| {{SpecName('ES6', '#sec-math.sqrt1_2', 'Math.SQRT1_2')}} | {{Spec2('ES6')}}   |                                                        |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Math.pow()")}}
- {{jsxref("Math.sqrt()")}}
