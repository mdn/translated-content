---
title: Truthy
slug: Glossary/Truthy
translation_of: Glossary/Truthy
original_slug: Glossaire/Truthy
---
En [JavaScript](/fr/docs/Glossary/JavaScript), on dit en anglais qu'une valeur est **<i lang="en">truthy</i>** lorsqu'elle est considérée comme vraie (`true`) quand elle est évaluée dans un contexte [booléen](/fr/docs/Glossary/Boolean). Toutes les valeurs sont <i lang="en">truthy</i> sauf si elles sont définies comme [<i lang="en">falsy</i>](/fr/docs/Glossary/Falsy) (c'est-à-dire, sauf pour `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined` et `NaN`).

[JavaScript](/fr/docs/Glossary/JavaScript) utilise la [contrainte de type](/fr/docs/Glossary/Type_coercion) dans un contexte booléen.

Exemples de valeurs <i lang="en">truthy</i> en JavaScript (qui seront converties en `true` dans un contexte booléen, ce qui exécutera le bloc `if`)&nbsp;:

```js
if (true)
if ({})
if ([])
if (42)
if ("0")
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)
```

### L'opérateur ET logique, &&

Si la première valeur est <i lang="en">truthy</i>, [l'opérateur ET logique](/fr/docs/Web/JavaScript/Reference/Operators/Logical_AND) renvoie le deuxième opérande&nbsp;:

```js
true && "chien"
// renvoie "chien"

[] && "chien"
// renvoie "chien"
```

## Voir aussi

- [`Falsy`](/fr/docs/Glossary/Falsy)
- [Contrainte de type](/fr/docs/Glossary/Type_coercion)
- [Booléen](/fr/docs/Glossary/Boolean)
