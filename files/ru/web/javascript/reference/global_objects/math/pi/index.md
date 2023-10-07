---
title: Math.PI
slug: Web/JavaScript/Reference/Global_Objects/Math/PI
---

{{JSRef("Global_Objects", "Math")}}

## Сводка

Свойство **`Math.PI`** представляет отношение длины окружности круга к его диаметру, приблизительно равное 3,14159:

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.PI</mi></mstyle><mo>=</mo><mi>π</mi><mo>≈</mo><mn>3,14159</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.PI}} = \pi \approx 3,14159</annotation></semantics></math>

{{js_property_attributes(0, 0, 0)}}

## Описание

Поскольку свойство `PI` является статическим свойством объекта `Math`, вы всегда должны использовать его как `Math.PI`, а не пытаться создавать экземпляр объекта `Math` и получать свойство от него (поскольку объект `Math` не является конструктором).

## Примеры

### Пример: использование свойства `Math.PI`

Следующая функция использует значение `Math.PI` для вычисления длины окружности по известному радиусу круга.

```js
function calculateCircumference(radius) {
  return 2 * Math.PI * radius;
}

calculateCircumference(1); // 6.283185307179586
```

## Спецификации

| Спецификация                                      | Статус             | Комментарии                                            |
| ------------------------------------------------- | ------------------ | ------------------------------------------------------ |
| ECMAScript 1-е издание.                           | Стандарт           | Изначальное определение. Реализована в JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.8.1.6', 'Math.PI')}} | {{Spec2('ES5.1')}} |                                                        |
| {{SpecName('ES6', '#sec-math.pi', 'Math.PI')}}    | {{Spec2('ES6')}}   |                                                        |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Global_Objects/Math", "Math")}}
