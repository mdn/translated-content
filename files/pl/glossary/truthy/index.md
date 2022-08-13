---
title: Prawda (ang. truthy)
slug: Glossary/Truthy
tags:
  - JavaScript
  - Słownik
translation_of: Glossary/Truthy
---
W {{Glossary("JavaScript")}}, **prawda** jest wartością uważaną za prawdziwą, w  kontekście {{Glossary("Wyrażenie logiczne", "wyrażenia logicznego")}}, reprezentowaną przez wartość wbudowaną `true`. Z definicji, **prawdziwe są wszystkie wartości, z wyjątkiem tych, które są zdefiniowane jako  {{Glossary("Nieprawda", "nieprawdziwe")}}** (czyli `false`, `0`, `""`, `null`, `undefined` i `NaN`).

{{Glossary("JavaScript")}} używa {{Glossary("Type_Conversion", "konwersji typów")}} w kontekście logicznym.

Przykładami wartości *prawdziwych* w JavaScript (które będą przetłumaczone na wbudowaną wartość `true` i wykonane w bloku `if`) są:

```js
if (true)
if ({})
if ([])
if (42)
if ("foo")
if (new Date())
if (-42)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)
```

## Zobacza też

- {{Glossary("Nieprawda")}}
- {{Glossary("Type_Conversion", "Konwersja typów")}}
- {{Glossary("Wyrażenie logiczne")}}
