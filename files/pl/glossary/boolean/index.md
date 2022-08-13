---
title: Boolean
slug: Glossary/Boolean
tags:
  - Boolean
  - CodingScripting
  - Glossary
  - JavaScript
  - Programming Languages
  - data types
translation_of: Glossary/Boolean
---
**Boolean** jest typem danych, który może przyjmować jedynie dwie wartośći - `true`, lub `false`, czyli prawda i fałsz.W JavaScripcie naprzykład używa się ich by zadecydować, które części kodu wykonać ([instrukcje if](/pl/docs/Web/JavaScript/Reference/Statements/if...else)) lub powtórzyć ([pętle typu for](/pl/docs/Web/JavaScript/Reference/Statements/for))

Pseudokod obrazujący koncept.

```js
/* JavaScript if statement */
if (boolean conditional) {
   // ten kod się wykona jeśli warunek jest prawdziy
}

if (boolean conditional) {
  console.log("warunek jest prawdziwy");
} else {
  console.log("warunek jest fałszywy");
}


/* JavaScript for loop */
for (control variable; boolean conditional; counter) {
  // kod się wykonuje dopóki warunek jest prawdziwy
}

for (var i=0; i < 4; i++) {
  console.log("Ten kod wykona się 4 razy - dla i = 0,1,2,3");
}
```

Nazwa pochodzi od angielskiego matematyka {{interwiki("wikipedia", "George Boole")}}, który był pionierem logiki matematycznej.

## Learn more

### General knowledge

- {{Interwiki("wikipedia", "Boolean data type", "Boolean")}} on Wikipedia

### Technical reference

- The JavaScript global object: {{jsxref("Boolean")}}
- [JavaScript data types and data structures](/pl/docs/Web/JavaScript/Data_structures)
