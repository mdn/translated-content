---
title: 'Null'
slug: Glossary/Null
tags:
  - CodingScripting
  - Glossary
translation_of: Glossary/Null
original_slug: Глоссарий/Null
---
В информатике, значение **`null`** представляет ссылку, которая указывает, обычно намеренно, на несуществующий или некорректный {{glossary("object")}} или адрес. Смысл null-ссылки различается от языка к языку.

В {{Glossary("JavaScript")}}, null <span class="st">– </span>это значение, специально обозначенное как {{Glossary("Primitive", "примитив")}}, так как по поведению это в самом деле видимый примитив. Но при этом от `null` унаследованы все остальные Объекты, поэтому, несмотря на то, что null возвращает примитивное значение, его тип это объект:

```js
typeof null === 'object'
```

## Узнать больше

### Общая информация

- {{Interwiki("wikipedia", "Null pointer")}} на Википедии

### Техническая информация

- [Типы данных JavaScript и структуры данных](/en-US/docs/Web/JavaScript/Data_structures)
- Глобальный объект в JavaScript: {{jsxref("null")}}
