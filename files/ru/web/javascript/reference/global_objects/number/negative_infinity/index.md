---
title: Number.NEGATIVE_INFINITY
slug: Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY
---

{{JSRef("Global_Objects", "Number")}}

## Сводка

Свойство **`Number.NEGATIVE_INFINITY`** представляет значение отрицательной бесконечности.

Вам не нужно создавать объект {{jsxref("Global_Objects/Number", "Number")}} для доступа к этому статическому свойству (используйте `Number.NEGATIVE_INFINITY`).

{{js_property_attributes(0, 0, 0)}}

## Описание

Значение `Number.NEGATIVE_INFINITY` является тем же самым по модулю, только отрицательным значением, что содержит свойство {{jsxref("Global_Objects/Infinity", "Infinity")}} глобального объекта.

Это значение ведёт себя несколько иначе, нежели математическая бесконечность:

- Любое положительное значение, включая {{jsxref("Number.POSITIVE_INFINITY", "POSITIVE_INFINITY")}}, умноженное на `NEGATIVE_INFINITY` даёт `NEGATIVE_INFINITY`.
- Любое отрицательное значение, включая `NEGATIVE_INFINITY`, умноженное на `NEGATIVE_INFINITY` даёт {{jsxref("Number.POSITIVE_INFINITY", "POSITIVE_INFINITY")}}.
- Ноль, умноженный на `NEGATIVE_INFINITY`, даёт {{jsxref("Global_Objects/NaN", "NaN")}}.
- {{jsxref("Global_Objects/NaN", "NaN")}}, умноженный на `NEGATIVE_INFINITY`, даёт {{jsxref("Global_Objects/NaN", "NaN")}}.
- `NEGATIVE_INFINITY`, делённое на любое отрицательное значение, исключая `NEGATIVE_INFINITY`, даёт {{jsxref("Number.POSITIVE_INFINITY", "POSITIVE_INFINITY")}}.
- `NEGATIVE_INFINITY`, делённое на любое положительное значение, исключая {{jsxref("Number.POSITIVE_INFINITY", "POSITIVE_INFINITY")}}, даёт `NEGATIVE_INFINITY`.
- `NEGATIVE_INFINITY`, делённое на `NEGATIVE_INFINITY` или {{jsxref("Number.POSITIVE_INFINITY", "POSITIVE_INFINITY")}}, даёт {{jsxref("Global_Objects/NaN", "NaN")}}.
- Любое число, делённое на `NEGATIVE_INFINITY`, даёт ноль.

Вы можете использовать свойство `Number.NEGATIVE_INFINITY` для проверки на ошибки и возвращать конечное число в случае успеха. Однако, обратите внимание, что в этом случае более уместным было бы использование функции {{jsxref("Global_Objects/isFinite", "isFinite")}}.

## Примеры

### Пример: использование `NEGATIVE_INFINITY`

В следующем примере переменной `smallNumber` присваивается значение, меньшее минимального. Когда выполняется инструкция {{jsxref("Statements/if...else", "if")}}, переменная `smallNumber` имеет значение `-Infinity`, так что перед продолжением вычислений она устанавливается в более приемлемое значение.

```js
var smallNumber = -Number.MAX_VALUE * 2;

if (smallNumber == Number.NEGATIVE_INFINITY) {
  smallNumber = returnFinite();
}
```

## Спецификации

| Спецификация                                                                     | Статус             | Комментарии                                            |
| -------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------ |
| ECMAScript 1-е издание.                                                          | Стандарт           | Изначальное определение. Реализована в JavaScript 1.1. |
| {{SpecName('ES5.1', '#sec-15.7.3.5', 'Number.NEGATIVE_INFINITY')}}               | {{Spec2('ES5.1')}} |                                                        |
| {{SpecName('ES6', '#sec-number.negative_infinity', 'Number.NEGATIVE_INFINITY')}} | {{Spec2('ES6')}}   |                                                        |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Number.POSITIVE_INFINITY")}}
- {{jsxref("Number.isFinite()")}}
- {{jsxref("Global_Objects/Infinity", "Infinity")}}
- {{jsxref("Global_Objects/isFinite", "isFinite()")}}
