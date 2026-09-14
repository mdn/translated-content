---
title: Carácter de escape
slug: Glossary/Escape_character
---

{{GlossarySidebar}}

Un **carácter de escape** es un {{Glossary("character", "carácter")}} que hace que uno o más de los caracteres que le siguen se interpreten de forma diferente. Esto forma una **secuencia de escape**, que a menudo se usa para representar un carácter que tiene un significado alternativo cuando se imprime literalmente, como el carácter de comilla en un literal de cadena. Las secuencias de escape también pueden tener otros usos, especialmente en las [expresiones regulares](/en-US/docs/Web/JavaScript/Reference/Regular_expressions#escape_sequences).

- En las [expresiones regulares](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape), los [literales de cadena](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals) y los [identificadores](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) de JavaScript, podemos usar la barra invertida (`\`) para escapar caracteres como `\'`, `\"`, `\u0026`, etc.
- En los identificadores CSS, podemos usar la barra invertida (`\`) para escapar caracteres como `\\`, `\n`, `\26`, etc. Consulta [caracteres de escape](/en-US/docs/Web/CSS/Reference/Values/ident#escaping_characters) para más información.
- En el contenido de texto HTML y en los valores de los atributos, podemos usar {{Glossary("character reference", "referencias de caracteres")}} como `&lt;`, `&#60;` o `&#x3C;`.
- En las {{Glossary("URL", "URLs")}}, podemos usar el signo de porcentaje (`%`) para escapar caracteres como `%20`, `%3C`, `%3E`, etc.

## Saber más

- Términos relacionados del glosario:
  - {{Glossary("character", "Carácter")}}
  - {{Glossary("character reference", "Referencia de carácter")}}
  - {{Glossary("code point", "Punto de código")}}
- [Escape character](https://es.wikipedia.org/wiki/Secuencia_de_escape) en Wikipedia
- [Escape sequence](https://en.wikipedia.org/wiki/Escape_sequence) en Wikipedia
