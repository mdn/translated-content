---
title: "HTMLAnchorElement : propriété href"
short-title: href
slug: Web/API/HTMLAnchorElement/href
l10n:
  sourceCommit: 1d75851e2915508d4680e8a744c0b2b85736a588
---

{{APIRef("HTML DOM")}}

La propriété **`href`** de l'interface {{DOMxRef("HTMLAnchorElement")}} est un {{Glossary("stringifier", "convertisseur en chaîne")}} qui retourne une chaîne de caractères contenant l'URL complète et permet de modifier la valeur de l'attribut `href` d'un élément correspondant (ou une chaîne de caractères vide si `href` n'est pas défini). La définition de cette propriété met à jour l'attribut `href` de l'élément avec la valeur fournie.

## Valeur

Une chaîne de caractères.

- Si l'attribut `href` est absent, la valeur est une chaîne de caractères vide (`""`).
- Si l'attribut `href` est présent mais n'est pas une URL relative ou absolue valide, la valeur est celle de l'attribut telle quelle.
- Si l'attribut `href` est présent et est une URL relative ou absolue valide, la valeur est l'URL absolue, résolue par rapport à l'URL de base du document. La chaîne de caractères vide (`""`) est considérée comme une URL relative valide, résolue par rapport à l'URL de base du document.

## Exemples

Un élément `<a>` nouvellement créé n'a pas d'attribut `href`, donc sa propriété `href` retourne une chaîne de caractères vide.

```js
const ancre = document.createElement("a");
console.log(ancre.href); // ""
```

Si l'attribut est défini sur une chaîne de caractères vide, la propriété retourne l'URL de base du document, car la chaîne de caractères vide est une URL relative valide.

```js
ancre.href = "";
console.log(ancre.href); // "https://developer.mozilla.org/fr/docs/Web/API/HTMLAnchorElement/href"
```

Si l'attribut est défini sur une URL relative, la propriété retourne l'URL absolue résolue par rapport à l'URL de base du document.

```js
ancre.href = "../../..";
console.log(ancre.href); // "https://developer.mozilla.org/fr/docs/"
```

Notez que la valeur de l'attribut reste telle quelle, sans résolution.

```js
console.log(ancre.getAttribute("href")); // "../../.."
```

Si l'attribut est défini sur une URL absolue, la propriété retourne cette URL absolue telle quelle.

```js
ancre.href = "https://exemple.com/chemin";
console.log(ancre.href); // "https://exemple.com/chemin"
```

Si l'attribut est défini sur une URL invalide, la propriété retourne la valeur de l'attribut telle quelle.

```js
ancre.href = "https://";
console.log(ancre.href); // "https://"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLAnchorElement")}} à laquelle elle appartient.
