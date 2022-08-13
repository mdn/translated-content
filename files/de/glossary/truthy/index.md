---
title: Truthy
slug: Glossary/Truthy
translation_of: Glossary/Truthy
---
In {{Glossary("JavaScript")}} gilt ein Wert als **truthy**, wenn er in einem {{Glossary("Boolean")}} Kontext evaluiert `true` ergibt. Alle Werte werden als truthy angesehen, solange sie nicht {{Glossary("Falsy", "falsy")}}, also `false`, `0`, `""`, `null`, `undefined` oder `NaN` sind.

JavaScript benutzt {{Glossary("Type_conversion", "Typ-Konversation")}} in Booleschen Kontexten.

## Beispiele

All diese if-statements werden ausgeführt.

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

## Siehe auch

- {{Glossary("Falsy")}}
- {{Glossary("Type_Conversion", "Coercion")}}
- {{Glossary("Boolean")}}
