---
title: UTF-8
slug: Glossary/UTF-8
tags:
  - CodingScripting
  - Glossary
  - HTML
  - JavaScript
  - Utf-8
translation_of: Glossary/UTF-8
---
UTF-8 (Format Transformacji UCS 8) to najpopularniejsze {{Glossary("Character encoding", "kodowanie znaków")}} w sieci WWW. Każdy znak jest reprezentowany przez jeden do czterech bajtów. UTF-8 jest wstecznie kompatybilny z {{Glossary("ASCII")}} i może reprezentować dowolny standardowy znak Unicode.

Pierwsze 128 znaków UTF-8 dokładnie odpowiada pierwszym 128 znakom ASCII  (numerowanym 0-127), co oznacza, że istniejący tekst ASCII jest zgodny z UTF-8. Wszystkie pozostałe znaki używają od dwóch do czterech bajtów. Każdy bajt ma kilka bitów zarezerwowanych do celów kodowania. Ponieważ znaki nie-ASCII wymagają do przechowywania więcej niż jednego bajtu, istnieje ryzyko ich uszkodzenia, jeżeli bajty są rozdzielone i nie są ponownie łączone.

## Dowiedz się więcej

### Wiedza ogólna

- [UTF-8](https://pl.wikipedia.org/wiki/UTF-8) na Wikipedii
- [Często zadawane pytania dotyczące UTF-8 na stronie Unicode](http://www.unicode.org/faq/utf_bom.html#UTF8)
