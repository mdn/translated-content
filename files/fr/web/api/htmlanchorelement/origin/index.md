---
title: "HTMLAnchorElement : propriété origin"
short-title: origin
slug: Web/API/HTMLAnchorElement/origin
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`origin`** de l'interface {{domxref("HTMLAnchorElement")}} retourne une chaîne de caractères contenant la sérialisation Unicode de l'origine du `href` de l'élément HTML `<a>`.

La structure exacte varie selon le type d'URL&nbsp;:

- Pour les URL utilisant les schémas `ftp:`, `http:`, `https:`, `ws:` et `wss:`, il s'agit d'un {{domxref("HTMLAnchorElement.protocol", "protocol")}} suivi de `//`, puis de l'hôte {{domxref("HTMLAnchorElement.host", "host")}}. Comme pour `host`, le {{domxref("HTMLAnchorElement.port", "port")}} n'est inclus que s'il n'est pas la valeur par défaut pour le protocole.
- Pour les URL utilisant le schéma `file:`, la valeur dépend du navigateur.
- Pour les URL utilisant le schéma `blob:`, il s'agit de l'origine de l'URL suivant `blob:`, mais uniquement si cette URL utilise le schéma `http:`, `https:` ou `file:`. Par exemple, `blob:https://mozilla.org` aura pour origine `https://mozilla.org`.

Dans tous les autres cas, la chaîne de caractères `"null"` est retournée.

Voir {{domxref("URL.origin")}} pour plus d'informations.

## Valeur

Une chaîne de caractères.

## Exemples

```js
// Un élément <a id="myAnchor" href="https://developer.mozilla.org/fr/HTMLAnchorElement"> est dans le document
const anchor = document.getElementById("myAnchor");
anchor.origin; // retourne 'https://developer.mozilla.org'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{domxref("HTMLAnchorElement")}} à laquelle elle appartient.
