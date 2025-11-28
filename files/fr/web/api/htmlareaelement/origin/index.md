---
title: "HTMLAreaElement : propriété origin"
short-title: origin
slug: Web/API/HTMLAreaElement/origin
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`origin`** de l'interface {{DOMxRef("HTMLAreaElement")}} retourne une chaîne de caractères contenant la sérialisation Unicode de l'origine du `href` de l'élément `<area>`.

La structure exacte varie selon le type d'URL&nbsp;:

- Pour les URL utilisant les schémas `ftp:`, `http:`, `https:`, `ws:` et `wss:`, le {{DOMxRef("HTMLAnchorElement.protocol", "protocol")}} suivi de `//`, suivi de l'hôte {{DOMxRef("HTMLAnchorElement.host", "host")}}. Comme pour `host`, le {{DOMxRef("HTMLAnchorElement.port", "port")}} n'est inclus que s'il n'est pas la valeur par défaut du protocole.
- Pour les URL utilisant le schéma `file:`, la valeur dépend du navigateur.
- Pour les URL utilisant le schéma `blob:`, l'origine de l'URL suivant `blob:`, mais uniquement si cette URL utilise le schéma `http:`, `https:` ou `file:`. Par exemple, `blob:https://mozilla.org` aura pour origine `https://mozilla.org`.

Dans tous les autres cas, la chaîne de caractères `"null"` est retournée.

Voir {{DOMxRef("URL.origin")}} pour plus d'informations.

## Valeur

Une chaîne de caractères.

## Exemples

```js
// Un élément <area id="myArea" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLAreaElement"> est dans le document
const area = document.getElementById("myArea");
area.origin; // retourne 'https://developer.mozilla.org'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLAreaElement")}} à laquelle elle appartient.
