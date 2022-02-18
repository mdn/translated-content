---
title: Ложноподобное значение
slug: Glossary/Falsy
tags:
  - CodingScripting
  - Glossary
  - JavaScript
---
**Ложноподобное** (**falsy**) значение — значение, которое становится `false` в {{Glossary("Boolean", "булевом")}} контексте.

{{Glossary("JavaScript")}} использует {{Glossary("Type_Conversion", "преобразование типов")}}, чтобы привести значение к булевому типу, там, где это требуется (например, в {{Glossary("Conditional", "условных конструкциях")}} и {{Glossary("Loop", "циклах")}}.

В следующей таблице приведен полный список ложноподобных значений JavaScript:

| Значение                    | Описание                                                                                                                                                                                                                        |
|-----------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `false`                     | Ключевое слово [`false`](/ru/docs/Web/JavaScript/Reference/Lexical_grammar#future_reserved_keywords_in_older_standards).                                                                                                        |
| `0`                         | Ноль {{jsxref("Number")}} (к нему также относятся `0.0`, `0x0` и т.д.).                                                                                                                                                         |
| `-0`                        | Отрицательный ноль типа {{jsxref("Number")}} (к нему также относятся `-0.0`, `-0x0` и т.д.).                                                                                                                                    |
| `0n`                        | Ноль типа {{jsxref("BigInt")}} (также `0x0n`). Обратите внимание, что не может быть негативного нуля типа {{jsxref("BigInt")}} — отрицательный `0n` равняется `0n`.                                                                                         |
| `""`, `''`, ` `` `          | Значение, содержащее пустую [строку](/ru/docs/Web/JavaScript/Reference/Global_Objects/String) .                                                                                                                                                 |
| {{Glossary("null")}}        | [null](/ru/docs/Web/JavaScript/Reference/Global_Objects/null) — отсутствие какого-либо значения.                                                                                                                                       |
| {{Glossary("undefined")}}   | [undefined](/ru/docs/Web/JavaScript/Reference/Global_Objects/undefined) — примитивное значение.                                                                                                                                  |
| {{Glossary("NaN")}}         | [NaN](/ru/docs/Web/JavaScript/Reference/Global_Objects/NaN) — значение, не являющиеся числом.                                                                                                                                                     |
| {{domxref("document.all")}} | Объекты считаются ложноподобными тогда и только тогда, когда у них есть внутренний слот [\[\[IsHTMLDDA\]\]](https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot). Этот слот есть только в объекте {{domxref("document.all")}}, и его задать через JavaScript. |

## Примеры

Примеры _ложноподобных_ значений в JavaScript (которые в булевых контекстах принудительно приводятся к false и таким образом _минуют_ блок `if`):

```js
if (false)
if (null)
if (undefined)
if (0)
if (-0)
if (0n)
if (NaN)
if ("")
```

### Оператор логического И, &&

Если первый операнд ложноподобен, то он будет возвращён в качестве результата:

```js
false && "dog"
// ↪ false

0 && "dog"
// ↪ 0
```

## Смотрите также

- {{Glossary("Truthy")}}
- {{Glossary("Type_coercion")}}
- {{Glossary("Boolean")}}
