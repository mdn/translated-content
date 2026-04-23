---
title: "HTMLImageElement : propriété loading"
short-title: loading
slug: Web/API/HTMLImageElement/loading
l10n:
  sourceCommit: 1f00512e3c9a20b5bb927db529bb5d639e346d96
---

{{APIRef("HTML DOM")}}

La propriété **`loading`** de l'interface {{DOMxRef("HTMLImageElement")}} est une chaîne de caractères qui fournit une indication à l'{{Glossary("user agent", "agent utilisateur")}} sur la façon de gérer le chargement de l'image actuellement en dehors de la {{Glossary("visual viewport", "zone d'affichage visuelle")}} de la fenêtre. Ceci aide à optimiser le chargement du contenu du document en reportant le chargement de l'image jusqu'à ce qu'elle soit censée être nécessaire, plutôt qu'immédiatement lors du chargement initial de la page. Elle reflète l'attribut de contenu [`loading`](/fr/docs/Web/HTML/Reference/Elements/img#loading) de l'élément `<img>`.

## Valeur

Une chaîne de caractères dont la valeur est `eager` ou `lazy`. Pour leurs significations, voir la référence HTML [`<img>`](/fr/docs/Web/HTML/Reference/Elements/img#loading).

## Exemples

La fonction `addImageToList()` ci-dessous ajoute une miniature photo à une liste d'éléments, en utilisant le chargement différé pour éviter de charger l'image depuis le réseau tant qu'elle n'est pas réellement nécessaire.

```js
function addImageToList(url) {
  const list = document.querySelector("div.photo-list");

  let newItem = document.createElement("div");
  newItem.className = "photo-item";

  let newImg = document.createElement("img");
  newImg.loading = "lazy";
  newImg.width = 320;
  newImg.height = 240;
  newImg.src = url;

  newItem.appendChild(newImg);
  list.appendChild(newItem);
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("img")}}
- [Performances web](/fr/docs/Learn_web_development/Extensions/Performance) dans la zone d'apprentissage MDN
- [Le chargement différé](/fr/docs/Web/Performance/Guides/Lazy_loading) dans le guide des performances web MDN
