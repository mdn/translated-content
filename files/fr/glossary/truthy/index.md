---
title: Truthy (Valeurs de type vraies)
slug: Glossary/Truthy
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

En {{Glossary("JavaScript")}}, une valeur est **équivalente à vrai** (<i lang="en">truthy</i> en anglais) lorsqu'elle est considérée comme vraie (`true`) quand elle est évaluée dans un contexte {{Glossary("Boolean", "booléen")}}. Toutes les valeurs sont équivalente à vrai sauf si elles sont définies comme {{Glossary("Falsy", "équivalente à faux")}} (<i lang="en">falsy</i> en anglais). Autrement dit, toutes les valeurs sont _équivalentes à vrai_ sauf `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN` et {{DOMxRef("document.all")}}.

{{Glossary("JavaScript")}} utilise la {{Glossary("Type_Coercion", "contrainte de type")}} dans un contexte booléen.

Exemples de valeurs équivalente à vrai en JavaScript (qui seront converties en `true` dans un contexte booléen, ce qui exécutera le bloc `if`)&nbsp;:

```js
if (true);
if ({});
if ([]);
if (42);
if ("0");
if ("false");
if (new Date());
if (-42);
if (12n);
if (3.14);
if (-3.14);
if (Infinity);
if (-Infinity);
```

Si la première valeur est équivalente à vrai, [l'opérateur ET logique](/fr/docs/Web/JavaScript/Reference/Operators/Logical_AND) retourné le deuxième opérande&nbsp;:

```js
true && "chien"
// retourné "chien"

[] && "chien"
// retourné "chien"
```

## Voir aussi

- Termes associés du glossaire&nbsp;:
  - {{Glossary("Falsy", "Falsy (valeurs de type fausses)")}}
  - {{Glossary("Type_Coercion", "Contrainte de type")}}
  - {{Glossary("Boolean", "Booléen")}}
- [Contrainte booléenne](/fr/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion)
