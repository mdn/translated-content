---
title: "HTMLAnchorElement : propriété protocol"
short-title: protocol
slug: Web/API/HTMLAnchorElement/protocol
l10n:
  sourceCommit: 82acf2a065dc00a1bd0cbf5e73de696e1bedee91
---

{{ApiRef("HTML DOM")}}

La propriété **`protocol`** de l'interface {{domxref("HTMLAnchorElement")}} est une chaîne de caractères contenant le protocole (ou schéma) du `href` de l'élément HTML `<a>`, y compris le caractère `":"` final.

Cette propriété peut être modifiée pour changer le protocole de l'URL. Un `":"` est ajouté à la chaîne fournie si elle ne se termine pas déjà ainsi. Le schéma fourni doit être compatible avec le reste de l'URL pour être considéré comme valide.

Voir {{domxref("URL.protocol")}} pour plus d'informations.

## Valeur

Une chaîne de caractères.

## Exemples

### Obtenir le protocole d'un lien d'ancre

```js
// Un élément <a id="myAnchor" href="https://developer.mozilla.org/fr/HTMLAnchorElement"> est dans le document
const anchor = document.getElementById("myAnchor");
anchor.protocol; // retourne 'https:'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{domxref("HTMLAnchorElement")}} à laquelle elle appartient.
