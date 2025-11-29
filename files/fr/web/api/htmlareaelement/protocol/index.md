---
title: "HTMLAreaElement : propriété protocol"
short-title: protocol
slug: Web/API/HTMLAreaElement/protocol
l10n:
  sourceCommit: 82acf2a065dc00a1bd0cbf5e73de696e1bedee91
---

{{APIRef("HTML DOM")}}

La propriété **`protocol`** de l'interface {{DOMxRef("HTMLAreaElement")}} est une chaîne de caractères contenant le protocole ou le schéma du `href` de l'élément `<area>`, y compris les deux-points finaux `":"`.

Cette propriété peut être définie pour modifier le protocole de l'URL. Un `":"` est ajouté à la chaîne fournie si elle ne se termine pas déjà par ce caractère. Le schéma fourni doit être compatible avec le reste de l'URL pour être considéré comme valide.

Voir {{DOMxRef("URL.protocol")}} pour plus d'informations.

## Valeur

Une chaîne de caractères.

## Exemples

### Obtenir le protocole d'un lien `area`

```js
// Un élément <area id="myArea" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLAreaElement"> est dans le document
const area = document.getElementById("myArea");
area.protocol; // retourne 'https:'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLAreaElement")}} à laquelle elle appartient.
