---
title: RexExp.prototype.global
slug: Web/JavaScript/Reference/Global_Objects/RegExp/global
tags:
  - JavaScript
  - Property
  - Prototype
  - RegExp
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/global
original_slug: Web/JavaScript/Referencje/Obiekty/RegExp/global
---
{{JSRef("Global_Objects", "RegExp")}}

## Podsumowanie

Określa czy z wyrażeniem regularnym została użyta flaga "`g`".

{{js_property_attributes(0, 0, 1)}}

## Opis

`global` jest własnością pojedynczego obiektu wyrażenia regularnego.

Wartość `global` wynosi true, jeśli użyta została flaga "`g`"; w przeciwnym przypadku będzie to wartość `false`. Flaga "`g`" wskazuje, że wyrażenie regularne powinno zostać sprawdzone w stosunku do wszystkich możliwych wyników w łańcuchu znaków.

Tej własności nie można zmieniać bezpośrednio.

## Zobacz także

- {{jsxref("RegExp.lastIndex")}}
- {{jsxref("RegExp.prototype.ignoreCase")}}
- {{jsxref("RegExp.prototype.multiline")}}
- {{jsxref("RegExp.prototype.source")}}
- {{jsxref("RegExp.prototype.sticky")}}
