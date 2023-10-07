---
title: Number.POSITIVE_INFINITY
slug: Web/JavaScript/Reference/Global_Objects/Number/POSITIVE_INFINITY
---

{{JSRef("Global_Objects", "Number")}}

## Сводка

Свойство **`Number.POSITIVE_INFINITY`** представляет значение положительной бесконечности.

Вам не нужно создавать объект {{jsxref("Global_Objects/Number", "Number")}} для доступа к этому статическому свойству (используйте `Number.POSITIVE_INFINITY`).

{{js_property_attributes(0, 0, 0)}}

## Описание

Значение `Number.POSITIVE_INFINITY` является тем же самым значением, что содержит свойство {{jsxref("Global_Objects/Infinity", "Infinity")}} глобального объекта.

Это значение ведёт себя несколько иначе, нежели математическая бесконечность:

- Любое положительное значение, включая `POSITIVE_INFINITY`, умноженное на `POSITIVE_INFINITY` даёт `POSITIVE_INFINITY`.
- Любое отрицательное значение, включая {{jsxref("Number.NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}}, умноженное на `POSITIVE_INFINITY` даёт {{jsxref("Number.NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}}.
- Ноль, умноженный на `POSITIVE_INFINITY`, даёт {{jsxref("Global_Objects/NaN", "NaN")}}.
- {{jsxref("Global_Objects/NaN", "NaN")}}, умноженный на `POSITIVE_INFINITY`, даёт {{jsxref("Global_Objects/NaN", "NaN")}}.
- `POSITIVE_INFINITY`, делённое на любое отрицательное значение, исключая {{jsxref("Number.NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}}, даёт {{jsxref("Number.NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}}.
- `POSITIVE_INFINITY`, делённое на любое положительное значение, исключая `POSITIVE_INFINITY`, даёт `POSITIVE_INFINITY`.
- `POSITIVE_INFINITY`, делённое на {{jsxref("Number.NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}} или `POSITIVE_INFINITY`, даёт {{jsxref("Global_Objects/NaN", "NaN")}}.
- Любое число, делённое на `POSITIVE_INFINITY`, даёт ноль.

Вы можете использовать свойство `Number.POSITIVE_INFINITY` для проверки на ошибки и возвращать конечное число в случае успеха. Однако, обратите внимание, что в этом случае более уместным было бы использование функции {{jsxref("Global_Objects/isFinite", "isFinite")}}.

## Примеры

### Пример: использование `POSITIVE_INFINITY`

В следующем примере переменной `bigNumber` присваивается значение, большее максимального. Когда выполняется инструкция {{jsxref("Statements/if...else", "if")}}, переменная `bigNumber` имеет значение `Infinity`, так что перед продолжением вычислений она устанавливается в более приемлемое значение.

```js
var bigNumber = Number.MAX_VALUE * 2;

if (bigNumber == Number.POSITIVE_INFINITY) {
  bigNumber = returnFinite();
}
```

## Спецификации

| Спецификация                                                                     | Статус             | Комментарии                                            |
| -------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------ |
| ECMAScript 1-е издание.                                                          | Стандарт           | Изначальное определение. Реализована в JavaScript 1.1. |
| {{SpecName('ES5.1', '#sec-15.7.3.6', 'Number.POSITIVE_INFINITY')}}               | {{Spec2('ES5.1')}} |                                                        |
| {{SpecName('ES6', '#sec-number.positive_infinity', 'Number.POSITIVE_INFINITY')}} | {{Spec2('ES6')}}   |                                                        |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Number.NEGATIVE_INFINITY")}}
- {{jsxref("Number.isFinite()")}}
- {{jsxref("Global_Objects/Infinity", "Infinity")}}
- {{jsxref("Global_Objects/isFinite", "isFinite()")}}
