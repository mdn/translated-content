---
title: Truthy
slug: Glossary/Truthy
---

En {{Glossary("JavaScript")}}, un **valor verdadero** es un valor que se considera `true/verdadero` cuando es evaluado en un contexto {{Glossary("Booleano")}}. Todos los valores son verdaderos a menos que se definan como {{Glossary("Falso", "falso")}} (es decir, excepto `false`, `0`, `""`, `null`, `undefined`, y `NaN`).

{{Glossary("JavaScript")}} usa {{Glossary("Type_Conversion", "coerción")}} en los contextos Booleanos.

Ejemplos de valores _verdaderos_ en JavaScript (los cuales se traducirán a verdaderos y por lo tanto ejecutarán el bloque condicional `if`):

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

## Ver también

- {{Glossary("Falsy")}}
- {{Glossary("Type_Conversion", "Coercion")}}
- {{Glossary("Boolean")}}

{{QuickLinksWithSubpages("/es/docs/Glossary")}}
