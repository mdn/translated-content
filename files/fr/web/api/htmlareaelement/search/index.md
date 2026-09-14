---
title: "HTMLAreaElement : propriété search"
short-title: search
slug: Web/API/HTMLAreaElement/search
l10n:
  sourceCommit: 1eabc08d295e60d7d8eab6bce858d2fb0833be2b
---

{{APIRef("HTML DOM")}}

La propriété **`search`** de l'interface {{DOMxRef("HTMLAreaElement")}} est une chaîne de recherche, aussi appelée _chaîne de requête_, qui est une chaîne de caractères contenant un `"?"` suivi des paramètres du `href` de l'élément `<area>`. Si l'URL ne possède pas de chaîne de recherche, cette propriété contient une chaîne vide, `""`.

Cette propriété peut être définie pour modifier la chaîne de requête de l'URL. Lors de l'écriture, un préfixe `"?"` est ajouté à la valeur fournie si elle n'est pas déjà présente. La définir à `""` supprime la chaîne de requête.

La requête est {{Glossary("Percent-encoding", "encodée en pourcentage")}} lors de l'écriture, mais n'est pas décodée lors de la lecture.

Les navigateurs modernes proposent [`URLSearchParams`](/fr/docs/Web/API/URLSearchParams/get#exemples) et [`URL.searchParams`](/fr/docs/Web/API/URL/searchParams#exemples) pour faciliter l'extraction des paramètres de la chaîne de requête.

Voir {{DOMxRef("URL.search")}} pour plus d'informations.

## Valeur

Une chaîne de caractères.

## Exemples

### Obtenir la chaîne de recherche depuis un lien `area`

```js
// Un élément <area id="myArea" href="/fr/docs/Web/API/HTMLAreaElement?q=123"> est dans le document
const area = document.getElementById("myArea");
area.search; // retourne '?q=123'
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

- L'interface {{DOMxRef("HTMLAreaElement")}} à laquelle elle appartient.
