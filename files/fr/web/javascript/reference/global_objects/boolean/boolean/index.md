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
const bPasDeParam = new Boolean();
const bZero = new Boolean(0);
const bNull = new Boolean(null);
const bChaineVide = new Boolean('');
const bFalse = new Boolean(false);
```

### Créer des objets `Boolean` avec une valeur initiale à `true`

```js
const bTrue = new Boolean(true);
const bChaineTrue = new Boolean('true');
const bChaineFalse = new Boolean('false');
const bSuLin = new Boolean('Su Lin');
const bArrayProto = new Boolean([]);
const bObjProto = new Boolean({});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La page du glossaire sur les booléens](/fr/docs/Glossary/Boolean)
