---
title: Type coercion
slug: Glossary/Type_coercion
tags:
  - Beginner
  - Glossary
  - JavaScript
  - Type coercion
  - Начинающим
  - приведение типа
translation_of: Glossary/Type_coercion
original_slug: Глоссарий/Type_coercion
---
Приведение типов (type coercion) - это автоматическое или неявное преобразование значений из одного типа данных в другой (например, строки в число). _{{Glossary('Type conversion', 'Преобразование типа')}}_ похоже на _приведение типа_, потому что они оба преобразуют значения из одного типа данных в другой с одним ключевым различием — _приведение типа_ является неявным, тогда как преобразование типа может быть неявным или явным.

## Примеры

```js
const value1 = '5';
const value2 = 9;
let sum = value1 + value2;

console.log(sum);
```

В приведённом выше примере JavaScript _приводит_ число `9` в строку, а затем объединяет два значения вместе, в результате получается строка `59`. JavaScript имел выбор между строкой или числом и решил использовать строку.

Компилятор мог привести строку `5` к числу и вернуть сумму `14`, но он этого не сделал. Чтобы получить этот результат, вам нужно явно преобразовать строку `5` в число, используя метод {{jsxref("Global_Objects/Number", "Number()")}}:

```js
sum = Number(value1) + value2;
```

<section id="Quick_links"><ol><li><a href="/ru/docs/Glossary">Глоссарий</a><ol><li>{{Glossary("Type")}}</li><li>{{Glossary("Type conversion")}}</li></ol></li><li>Статьи Википедии<ol><li>{{Interwiki("wikipedia", "Type conversion")}}</li></ol></li></ol></section>
