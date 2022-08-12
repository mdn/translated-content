---
title: UTF-8
slug: Glossary/UTF-8
tags:
  - ASCII
  - Caracter
  - Caractères
  - Codificación
  - CodingScripting
  - Glosario
  - HTML
  - JavaScript
  - Utf-8
translation_of: Glossary/UTF-8
---
UTF-8 (UCS Transformation Format 8) es la {{Glossary("Character encoding", "Codificación de caracteres")}} más común en la red. El número de bytes que representan un carácter pueden ser desde uno hasta cuatro. UTF-8 es retrocompatible con {{Glossary("ASCII")}} y puede representar cualquier carácter Unicode estandar.

Los primeros 128 carácteres UTF-8 se ajustan a los 128 primeros carácteres ASCII, lo cual significa que los textos escritos en ASCII son válidos en UTF-8. El resto de caracteres usan de dos a cuatro bytes. Cada byte reserva unos bits para albergar información sobre la codificación. Como los caracteres que no son ASCII necesitan más de un byte cuando son almacenados, corren el riesgo de corromperse si estos bytes son separados y no se vuelven a juntar.

## Aprende más

### Conocimientos generales

- {{Interwiki("wikipedia", "UTF-8")}} en Wikipedia
- [PF sobre UTF-8 en el sitio web de Unicode](http://www.unicode.org/faq/utf_bom.html#UTF8)
