---
title: "HTMLAnchorElement : méthode toString()"
short-title: toString()
slug: Web/API/HTMLAnchorElement/toString
l10n:
  sourceCommit: b829b2fae917b5b931011ddeb6a0d1b2d2b81c54
---

{{ApiRef("URL API")}}

La méthode **`toString()`** de l'interface {{domxref("HTMLAnchorElement")}} est une {{Glossary("stringifier", "méthode de conversion en chaîne de caractères")}} qui
retourne une chaîne de caractères contenant l'URL complète. Il s'agit d'une version en lecture seule de {{domxref("HTMLAnchorElement.href")}}.

## Syntaxe

```js-nolint
toString()
```

### Paramètres

Aucun.

### Valeur de retour

Une chaîne de caractères contenant l'URL complète de l'élément.

## Exemples

### Appeler toString sur un élément d'ancre

```js
// Un élément <a id="myAnchor" href="/fr/docs/HTMLAnchorElement"> est présent dans le document
const anchor = document.getElementById("myAnchor");
anchor.toString(); // retourne 'https://developer.mozilla.org/fr/docs/HTMLAnchorElement'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{domxref("HTMLAnchorElement")}} à laquelle cette méthode appartient.
