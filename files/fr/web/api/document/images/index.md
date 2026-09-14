---
title: "Document : propriété images"
short-title: images
slug: Web/API/Document/images
l10n:
  sourceCommit: 0af9a589170f1535622062de89bbf73507580b8f
---

{{APIRef("DOM")}}

La propriété en lecture seule **`images`** de l'interface {{DOMxRef("Document")}} retourne une [collection](/fr/docs/Web/API/HTMLCollection) des [images](/fr/docs/Web/API/HTMLImageElement) dans le document HTML courant.

## Valeur

Une collection ({{DOMxRef("HTMLCollection")}}) fournissant une liste dynamique de toutes les images contenues dans le document courant.
Chaque entrée de la collection est un {{DOMxRef("HTMLImageElement")}} représentant un élément image unique.

## Notes d'utilisation

Vous pouvez utiliser soit la notation de tableau JavaScript, soit la méthode {{DOMxRef("HTMLCollection.item", "item()")}} sur la collection retournée pour accéder aux éléments de la collection.
Les deux exemples suivants sont équivalents&nbsp;:

```js
firstImage = imageCollection.item(0);

firstImage = imageCollection[0];
```

## Exemples

Cet exemple parcourt la liste des images et trouve celles nommées `"banner.gif"`.

```js
for (const image of document.images) {
  if (image.src === "banner.gif") {
    console.log("Bannière trouvée");
  }
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
