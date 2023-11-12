---
title: Truthy
slug: Glossary/Truthy
---

Em {{Glossary("JavaScript")}}, um valor **truthy** é um valor que se traduz em verdadeiro quando avaliado em um contexto {{Glossary("Booleano")}}. Todos os valores são **truthy** a menos que eles sejam definidos como {{Glossary("Falsy", "falsy")}} (ou seja., exceto para `false`, `0`, `""`, `null`, `undefined`, e `NaN`).

O {{Glossary("JavaScript")}} usa {{Glossary("Type_Conversion", "coerção")}} de tipo em contextos booleanos.

Exemplos de valores _truthy_ em JavaScript (que se traduzirão em true, e então executar o bloco `if`):

```
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

## Veja também

- {{Glossary("Falsy")}}
- {{Glossary("Type_Conversion", "Coercion")}}
- {{Glossary("Boolean")}}
