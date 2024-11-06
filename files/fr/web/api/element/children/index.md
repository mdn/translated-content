---
title: Element.children
slug: Web/API/Element/children
---

{{APIRef("DOM")}}

La propriété en lecture seule **`children`** renvoie une collection dynamique [`HTMLCollection`](/fr/docs/Web/API/HTMLCollection) qui contient les [éléments](/fr/docs/Web/API/Element) enfants de l'élément courant (celui sur lequel elle a été appelée).

`Element.children` contient uniquement des nœuds qui sont des éléments. Pour obtenir l'ensemble des enfants, y compris les nœuds qui ne sont pas des éléments comme les textes et les commentaires, il faudra utiliser [`Node.childNodes`](/fr/docs/Web/API/Node/childNodes).

## Valeur

Un objet [`HTMLCollection`](/fr/docs/Web/API/HTMLCollection) qui est une collection dynamique et ordonnée des éléments du DOM qui sont les éléments enfants de l'élément courant. Il est possible d'accéder aux nœuds enfants de la collection en utilisant la méthode [`item()`](/fr/docs/Web/API/HTMLCollection/item) de la collection ou en utilisant la notation avec les crochets (à l'instar de l'accès aux éléments d'un tableau en JavaScript).

Si l'élément n'a pas d'enfant, `children` sera une liste vide avec `length` qui vaut `0`.

## Exemples

```js
const monElement = document.getElementById("toto");
for (let i = 0; i < monElement.children.length; i++) {
  console.log(monElement.children[i].tagName);
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Node.childNodes`](/fr/docs/Web/API/Node/childNodes)
