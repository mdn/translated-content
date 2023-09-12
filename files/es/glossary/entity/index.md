---
title: Entidad
slug: Glossary/Entity
---

Una **entidad** {{glossary("HTML")}} es un conjunto de caracteres ("string") que comienza con un ampersand (`&`) y termina con un punto y coma (`;`) . Las entidades son utilizadas frecuentemente para imprimir en pantalla caracteres reservados (aquellos que serían interpretados como HTML por el navegador) o invisibles (cómo tabulaciones). También pueden usarse para representar caracteres que no existan en algunos teclados, por ejemplo caracterés con tilde o diéresis.

> **Nota:** Muchos caracteres tienen entidades con nombres fáciles de recordar, como las vocales con tilde (`á`) es `&aacute;`, (`é`) es `&eacute;` y así sucesivamente. Otro ejempo es el simbolo de copyright, (`©`) representado por la entidad `&copy;`. Al lidiar con entidades menos representativas de los caracteres que representan, es de gran ayuda utilizar una [tabla de referencia](https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references) o un [decodificador](https://mothereff.in/html-entities).

## Caracteres Reservados

Algunos caracteres son reservados para uso en HTML, es decir que no pueden utilizarse sin que el navegador los interprete como parte del código HTML. Por ejemplo, al utilizar el simbolo para "menor a" (`<`), el navegador interpretara cualquier texto que siga como parte de una [etiqueta](/es/docs/Glossary/Tag).

Para utilizar estos caracteres como texto, deben reemplazarse por la entidad que les corresponda, a saber:

| Caracter | Entitdad | Nota                                                                                        |
| -------- | -------- | ------------------------------------------------------------------------------------------- |
| &        | `&amp;`  | Interpretado como el comienzo de una entidad HTML.                                          |
| <        | `&lt;`   | Interpretado como la apertura de una [etiqueta](/es/docs/Glossary/Tag).                     |
| >        | `&gt;`   | Interpretado como el cierre de una [etiqueta](/es/docs/Glossary/Tag).                       |
| "        | `&quot;` | Interpretado como apertura o cierre del valor de un [atributo](/es/docs/Glossary/Atributo). |

## Aprende más

### Referencia técnica

- [Lista oficial de entidades HTML \[en-US\]](https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references)
