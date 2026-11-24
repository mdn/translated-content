---
title: Compresión Brotli
slug: Glossary/Brotli_compression
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Brotli** es un algoritmo de compresión sin pérdida de propósito general.
Comprime los datos combinando una variante moderna de la [codificación Lempel-Ziv](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (el algoritmo LZ77), la [codificación de Huffman](https://rosettacode.org/wiki/Huffman_coding) y el modelado de contexto de segundo orden. Así logra una relación de compresión comparable a la de los mejores métodos de compresión de propósito general disponibles en la actualidad.

Brotli ofrece mejores relaciones de compresión que {{glossary("GZip_compression", "gzip")}} y velocidades comparables a las de [deflate](https://en.wikipedia.org/wiki/Deflate).
Sin embargo, la compresión con Brotli es más lenta que la de gzip, por lo que gzip puede ser una mejor opción al comprimir contenido que no se puede almacenar en {{glossary("Cache", "caché")}}.

Brotli es compatible con la mayoría de los navegadores modernos, pero quizá quieras tener en cuenta una alternativa de respaldo.

## Véase también

- Términos relacionados del glosario:
  - {{glossary("Lossless compression", "Compresión sin pérdida")}}
  - {{glossary("Lossy compression", "Compresión con pérdida")}}
  - {{Glossary("Gzip compression", "Compresión gzip")}}
  - {{Glossary("Zstandard compression", "Compresión Zstandard")}}
- [brotli.org](https://brotli.org/)
- [Repositorio de Brotli en GitHub](https://github.com/google/brotli)
- [RFC 7932: Brotli Compressed Data Format](https://datatracker.ietf.org/doc/html/rfc7932)
- [Brotli](https://en.wikipedia.org/wiki/Brotli) en Wikipedia
- [Brotli en Caniuse](https://caniuse.com/#feat=brotli)
