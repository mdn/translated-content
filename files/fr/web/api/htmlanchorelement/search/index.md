---
title: "HTMLAnchorElement : propriété search"
short-title: search
slug: Web/API/HTMLAnchorElement/search
l10n:
  sourceCommit: 1eabc08d295e60d7d8eab6bce858d2fb0833be2b
---

{{ApiRef("HTML DOM")}}

La propriété **`search`** de l'interface {{domxref("HTMLAnchorElement")}} est une chaîne de recherche, aussi appelée _chaîne de requête_ (<i lang="en">query string</i> en anglais), qui est une chaîne contenant `"?"` suivie des paramètres du `href` de l'élément `<a>`.
Si l'URL ne possède pas de chaîne de requête, cette propriété contient une chaîne vide (`""`).

Cette propriété peut être définie pour modifier la chaîne de requête de l'URL. Lors de l'affectation, un préfixe `"?"` unique est ajouté à la valeur fournie, si ce n'est pas déjà le cas. Lui attribuer `""` supprime la chaîne de requête.

La requête est {{Glossary("Percent-encoding", "encodée en pourcentage")}} lors de l'écriture, mais n'est pas décodée lors de la lecture.

Les navigateurs modernes proposent [`URLSearchParams`](/fr/docs/Web/API/URLSearchParams/get#exemples) et [`URL.searchParams`](/fr/docs/Web/API/URL/searchParams#getexemples) pour faciliter l'extraction des paramètres de la chaîne de requête.

Voir {{domxref("URL.search")}} pour plus d'informations.

## Valeur

Une chaîne de caractères.

## Exemples

### Récupérer la chaîne de recherche depuis un lien d'ancre

```js
// Un élément <a id="myAnchor" href="/fr/docs/HTMLAnchorElement?q=123"> est présent dans le document
const anchor = document.getElementById("myAnchor");
anchor.search; // retourne '?q=123'
```

### Analyse avancée avec `URLSearchParams`

On peut aussi utiliser [`URLSearchParams`](/fr/docs/Web/API/URLSearchParams/get#exemples)&nbsp;:

```js
let params = new URLSearchParams(queryString);
let q = parseInt(params.get("q"), 10); // retourne le nombre 123
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{domxref("HTMLAnchorElement")}} à laquelle cette propriété appartient.
