---
title: Логическое НЕ (!)
slug: Web/JavaScript/Reference/Operators/Logical_NOT
tags:
  - JavaScript
  - Language feature
  - Logical Operator
  - Operator
  - Reference
browser-compat: javascript.operators.logical_not
---
{{jsSidebar("Operators")}}

Логический оператор НЕ (`!`) (логическое отрицание) меняет логическое значение операнда с истины в ложь и наоборот. Обычно он используется с {{jsxref("Boolean", "булевыми")}} (логическими) значениями. При использовании с любыми другими значениями, если операнд может быть преобразован в `true`, то вернёт `false`; в противном случае он возвращается `true`.

{{EmbedInteractiveExample("pages/js/expressions-logical-not.html", "shorter")}}

## Синтаксис

```js
!expr
```

## Описание

Возвращает `false`, если операнд может быть преобразован в `true`; в противном случае возвращается `true`.

Если значение может быть преобразовано в `true`, то оно рассматривается как {{Glossary("truthy", "истинноподобное (truthy)")}}. Если же значение может быть преобразовано в `false`, то оно называется {{Glossary("falsy", "ложноподобным (falsy)")}}.

Примеры выражений, которые могут быть преобразованы в `false`:

- `null`;
- `NaN`;
- `0`;
- пустая строка (`""`, `''`, ` `` `);
- `undefined`.

Несмотря на то, что оператор `!` может использоваться с операндами, значения которых не относится к типу Boolean, это всё равно булевый оператор, поскольку его возвращаемое значение всегда можно преобразовать в [булевый примитив](/ru/docs/Web/JavaScript/Data_structures#Boolean_type). Чтобы явно преобразовать возвращаемое значение этого оператора (или вообще любое выражение) в соответствующее значение булевого типа, используйте двойной [оператор НЕ](/ru/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_NOT) или конструктор {{jsxref("Global_Objects/Boolean/Boolean", "Boolean")}}.

## Примеры

### Использование логического НЕ

В следующем коде показаны примеры использования оператора `!` (логическое НЕ).

```js
n1 = !true               // !t вернёт false
n2 = !false              // !f вернёт true
n3 = !''                 // !f вернёт true
n4 = !'Cat'              // !t вернёт false
```

### Двойное НЕ (`!!`)

Можно один за другим использовать пару операторов НЕ, чтобы явным образом принудительно преобразовать любое значение в соответствующий [булевый примитив](/en-US/docs/Web/JavaScript/Data_structures#Boolean_type).
Преобразование основано на "истинноподобности" или "ложноподобности" значения (см. {{Glossary("truthy")}} и {{Glossary("falsy")}})).

Точно такое же преобразование может быть выполнено с помощью функции {{jsxref("Global_Objects/Boolean/Boolean",
  "Boolean")}}.

```js
n1 = !!true                   // !!truthy вернёт true
n2 = !!{}                     // !!truthy вернёт true: любой объект - истинноподобный...
n3 = !!(new Boolean(false))   // ...даже Boolean-объект со значением false из вызова .valueOf()!
n4 = !!false                  // !!falsy вернёт false
n5 = !!""                     // !!falsy вернёт false
n6 = !!Boolean(false)         // !!falsy вернёт false
```

### Конвертация операторов НЕ

Следующая операция с **булевыми значениями**:

```js
!!bCondition
```

всегда эквивалентна:

```js
bCondition
```

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Boolean")}}
- {{Glossary("Truthy")}}
- {{Glossary("Falsy")}}
