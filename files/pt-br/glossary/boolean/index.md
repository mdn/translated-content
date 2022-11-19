---
title: Booleano
slug: Glossary/Boolean
original_slug: Glossario/Booleano
---

Um **booleano**, em ciência da computação, é um tipo de dado lógico que pode ter apenas um de dois valores possíveis: `true` ou `false`. Por exemplo, em JavaScript, condicionais booleanas são usadas para decidir quais trechos do código serão executados ou repetidas.

### Exemplos

Veremos nos exemplos a seguir, o uso de um `boolean` em javascript, em diferentes contextos

#### Usando condicionais if

```js
"use strict"

let bool = true

if (bool) {
   // codigo a executar se o booleano for TRUE
}

if (bool) {
  console.log("booleano é verdadeiro");
} else {
  console.log("booleano é falso");
}
```

#### Laços for

```js

/* JavaScript for loop */
for (variavel de controle; condicao booleana; contador) {
  // codigo a se repetir se o booleano for TRUE
}

for (let i = 0; i < 4; i++) {
  console.log("codigo a executar se a condicao for verdadeira, ou seja até 'i' atingir o valor de 4 ");
}
```

#### Operar ternário 

```js
let bool = true

let result = bool ? "Sou um boolean" : "Não sou um boolean"

```

## Veja mais

### Referências externas

- [Boolean on Wikipedia](http://en.wikipedia.org/wiki/Boolean_data_type) (em inglês)
- [Booleano na Wikipedia](https://pt.wikipedia.org/wiki/Booliano)

### Referência

- O objeto global JavaScript: {{jsxref("Boolean")}}
