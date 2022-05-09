---
title: Constructeur Boolean()
slug: Web/JavaScript/Reference/Global_Objects/Boolean/Boolean
translation_of: Web/JavaScript/Reference/Global_Objects/Boolean/Boolean
browser-compat: javascript.builtins.Boolean.Boolean
---
{{JSRef}}

Le **constructeur `Boolean()`** permet de créer des objets [`Boolean`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Boolean).

{{EmbedInteractiveExample("pages/js/boolean-constructor.html","shorter")}}

## Syntaxe

```js
new Boolean()
new Boolean(valeur)
```

### Paramètres

- `valeur` {{optional_inline}}
  - : La valeur initiale de l'objet `Boolean`.

## Exemples

### Créer des objets `Boolean` avec une valeur initiale à `false`

```js
let bPasDeParam = new Boolean();
let bZero = new Boolean(0);
let bNull = new Boolean(null);
let bChaineVide = new Boolean('');
let bFalse = new Boolean(false);
```

### Créer des objets `Boolean` avec une valeur initiale à `true`

```js
let bTrue = new Boolean(true);
let bChaineTrue = new Boolean('true');
let bChaineFalse = new Boolean('false');
let bSuLin = new Boolean('Su Lin');
let bArrayProto = new Boolean([]);
let bObjProto = new Boolean({});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La page du glossaire sur les booléens](/fr/docs/Glossary/Boolean)
