---
title: Truthy
slug: Glossary/Truthy
tags:
  - Glossaire
  - JavaScript
  - Programmation
translation_of: Glossary/Truthy
original_slug: Glossaire/Truthy
---
En {{Glossary("JavaScript")}}, une valeur `truthy` est une valeur qui est considérée comme vraie quand elle est évaluée dans un contexte {{Glossary("Boolean","booléen")}} . Toutes les valeurs sont `truthy` sauf si elles sont definies comme {{Glossary("Falsy","falsy")}} (c'est-à-dire, sauf pour `false`, 0, "", `null`, `undefined`, et `NaN`).

{{Glossary("JavaScript")}} utilise la {{Glossary("Type_Conversion", "contrainte")}} de type dans un contexte booléen.

Exemples de valeurs truthy en JavaScript (qui seront considérées comme vraies, ce qui exécutera le bloc if):

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

## Voir aussi 

- {{Glossary("Falsy")}}
- {{Glossary("Type_Conversion", "Contrainte")}}
- {{Glossary("Boolean","Booléen")}}
