---
title: UTF-8
slug: Glossary/UTF-8
---

UTF-8 (UCS Transformation Format 8) é a [codificação de caracteres](/pt-BR/docs/Glossario/character_encoding) mais comum da World Wide Web. Cada caractere é representado por um a quatro bytes. UTF-8 é compatível com versões anteriores do [ASCII](/pt-BR/docs/Glossario/ASCII) e pode representar qualquer caractere Unicode padrão.

Os primeiros 128 caracteres UTF-8 correspondem exatamente aos primeiros 128 caracteres ASCII (numerados de 0 a 127), o que significa que o texto ASCII existente já é UTF-8 válido. Todos os outros caracteres usam dois a quatro bytes. Cada byte tem alguns bits reservados para fins de codificação. Como caracteres não ASCII requerem mais de um byte para armazenamento, eles correm o risco de serem corrompidos se os bytes forem separados e não forem recombinados.

## Leia mais

### Conhecimento Geral

- [UTF-8](https://pt.wikipedia.org/wiki/UTF-8) no Wikipedia
- [Perguntas frequentes sobre o UTF-8 no site Unicode](http://www.unicode.org/faq/utf_bom.html#UTF8)
