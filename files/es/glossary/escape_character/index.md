---
title: Carácter de escape
slug: Glossary/Escape_character
---

{{GlossarySidebar}}

Un **carácter de escape** es un {{glossary("character", "carácter")}} que hace que uno o varios de los caracteres que lo siguen se interpreten de forma diferente. Esto forma una **secuencia de escape**, que se suele utilizar para representar un carácter que tiene un significado alternativo cuando se imprime literalmente, como el carácter de comilla en una cadena literal. Las secuencias de escape también pueden tener otros usos, especialmente en las [expresiones regulares](/en-US/docs/Web/JavaScript/Reference/Regular_expressions#escape_sequences).

- En las [expresiones regulares](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape), los [literales de cadena](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals) y los [identificadores](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) de JavaScript, se puede usar la barra invertida (`\`) para escapar caracteres como `\'`, `\"`, `\u0026`, etc.
- En los identificadores CSS, se puede usar la barra invertida (`\`) para escapar caracteres como `\\`, `\n`, `\26`, etc. Véase [caracteres de escape](/en-US/docs/Web/CSS/Reference/Values/ident#escaping_characters) para más información.
- En el contenido de texto HTML y en los valores de los atributos, se pueden usar {{glossary("character reference", "referencias de caracteres")}} como `&lt;`, `&#60;` o `&#x3C;`.
- En las {{glossary("URL", "URLs")}}, se puede usar el signo de porcentaje (`%`) para escapar caracteres como `%20`, `%3C`, `%3E`, etc.

## Saber más

- Términos del glosario relacionados:
  - {{glossary("Character", "Carácter")}}
  - {{glossary("Character reference", "Referencia de caracteres")}}
  - {{glossary("Code point", "Punto de código")}}
- [Escape character](https://en.wikipedia.org/wiki/Escape_character) en Wikipedia
- [Escape sequence](https://en.wikipedia.org/wiki/Escape_sequence) en Wikipedia
