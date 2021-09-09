---
title: Truthy
slug: Glossary/Truthy
tags:
  - Glossary
  - JavaScript
  - truthy
  - Глоссарий
translation_of: Glossary/Truthy
original_slug: Глоссарий/Truthy
---
В {{Glossary("JavaScript")}}, **истинное** значение - это значение, которое считается `true`, когда встречается в контексте {{Glossary("Boolean")}}. Все значения истинные, если они не определены как {{Glossary("Falsy", "falsy")}} (кроме `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, и `NaN`).

{{Glossary("JavaScript")}} использует {{Glossary("Type_coercion", "приведение типов")}} в Boolean контекстах.

Примеры истинных значений в JavaScript (которые будут приведены к true в булевых выражениях, и таким образом выполниться блок if):

```js
if (true)
if ({})
if ([])
if (42)
if ("0")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)
```

## Смотрите также

- {{Glossary("Falsy")}}
- {{Glossary("Type_Conversion", "Coercion")}}
- {{Glossary("Boolean")}}

{{QuickLinksWithSubpages("/en-US/docs/Glossary")}}
