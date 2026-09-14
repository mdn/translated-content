---
title: "HTMLElement : propriété enterKeyHint"
short-title: enterKeyHint
slug: Web/API/HTMLElement/enterKeyHint
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété énumérée **`enterKeyHint`** de l'interface {{DOMxRef("HTMLElement")}} définit quelle étiquette d'action (ou icône) afficher pour la touche Entrée sur les claviers virtuels. Elle reflète l'attribut HTML universel [`enterkeyhint`](/fr/docs/Web/HTML/Reference/Global_attributes/enterkeyhint) et n'accepte que les valeurs suivantes sous forme de chaîne de caractères&nbsp;:

- `'enter'` indique généralement l'insertion d'une nouvelle ligne.
- `'done'` signifie généralement qu'il n'y a plus rien à saisir et que l'éditeur de méthode d'entrée (IME) sera fermé.
- `'go'` signifie généralement amener l'utilisateur·ice vers la cible du texte saisi.
- `'next'` signifie généralement passer au champ suivant qui acceptera du texte.
- `'previous'` signifie généralement revenir au champ précédent qui acceptera du texte.
- `'search'` signifie généralement afficher les résultats de la recherche du texte saisi.
- `'send'` signifie généralement envoyer le texte à sa destination.

Si aucune valeur `enterKeyHint` n'a été définie ou si une valeur différente de celles autorisées a été définie, la propriété retournera une chaîne vide.

## Exemples

Donner une indication à un clavier virtuel sur la façon d'étiqueter la touche Entrée (cela peut s'afficher comme <kbd>Envoyer</kbd> ou <kbd>Recherche</kbd>, selon le système ou la langue de l'utilisateur·ice).

```js
const send = document.getElementById("sendInput");
const search = document.getElementById("searchInput");

send.enterKeyHint = "send";
search.enterKeyHint = "search";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut HTML universel [`enterkeyhint`](/fr/docs/Web/HTML/Reference/Global_attributes/enterkeyhint)
