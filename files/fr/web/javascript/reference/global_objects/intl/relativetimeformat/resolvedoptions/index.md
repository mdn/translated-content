---
title: Intl.RelativeTimeFormat.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/resolvedOptions
---

{{JSRef}}

La méthode **`Intl.RelativeTimeFormat.prototype.resolvedOptions()`** renvoie un nouvel objet dont les propriétés reflètent les options de format et de locale pour les valeurs temporelles relatives, calculées pendant l'initialisation de l'objet {{jsxref("RelativeTimeFormat")}}.

{{EmbedInteractiveExample("pages/js/intl-relativetimeformat-prototype-resolvedoptions.html")}}

## Syntaxe

```js
relativeTimeFormat.resolvedOptions();
```

### Valeur de retour

Un nouvel objet dont les propriétés reflètent les options de locale et de formatage calculées lors de l'initialisation de l'objet {{jsxref("RelativeTimeFormat")}}.

## Description

L'objet renvoyé par cette méthode possèdera les propriétés suivantes :

- `locale`
  - : La balise de langue BCP 47 qui est réellement utilisée. Si des extensions Unicode étaient fournies avec la balise d'origine et sont supportées pour la locale utilisée, les paires de clés-valeurs seront incluses dans `locale`.
- `style`

  - : La longueur du message internationalisé. Les valeurs possibles sont :

    - `"long"` : la valeur par défaut, peu concise (par exemple `in 1 month`)
    - `"short"` : une valeur plus courte (par exemple `in 1 mo.`),
    - `"narrow"` : une valeur encore plus courte (pouvant être ambigüe selon les locales) (par exemple `in 1 mo.`). Les styles `narrow` et `short` peuvent être similaires voire identiques pour certaines locales.

- `numeric`

  - : Le format du message produit. Les valeurs possibles sont :

    - `"always"` : la valeur par défaut (par exemple `1 day ago`),
    - `"auto"` : cette valeur indique qu'il n'est pas nécessaire d'utiliser de valeur numérique dans le message produit (par exemple `yesterday`).

- `numberingSystem`
  - : La valeur demandée pour la clé d'extension Unicode `"nu"` ou la valeur remplie par défaut.

## Exemples

```js
var de = new Intl.RelativeTimeFormat("de-DE");
var usedOptions = de.resolvedOptions();

usedOptions.locale; // "de-DE"
usedOptions.style; // "long"
usedOptions.numeric; // "always"
usedOptions.numberingSystem; // "latn"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("RelativeTimeFormat", "Intl.RelativeTimeFormat")}}
