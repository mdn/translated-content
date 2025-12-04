---
title: "HTMLCollection : méthode item()"
short-title: item()
slug: Web/API/HTMLCollection/item
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("HTML DOM")}}

La méthode `item()` de l'interface {{DOMxRef("HTMLCollection")}} retourne l'élément situé à la position définie dans la collection.

> [!NOTE]
> Parce que le contenu d'une `HTMLCollection` est dynamique, les modifications du DOM sous-jacent peuvent modifier la position des éléments individuels dans la collection, de sorte que la valeur de l'index ne restera pas nécessairement constante pour un même élément.

## Syntaxe

```js-nolint
item(index)
```

### Paramètres

- `index`
  - : La position de l'objet {{DOMxRef("Element")}} à retourner.
    Les éléments apparaissent dans une `HTMLCollection` dans le même ordre qu'ils apparaissent dans la source du document.

### Valeur de retour

L'objet {{DOMxRef("Element")}} à la position définie, ou `null` si `index` est inférieur à zéro ou supérieur ou égal à la valeur de la propriété `length`.

## Notes d'utilisation

La méthode `item()` retourne un élément numéroté d'une `HTMLCollection`. En JavaScript, il est plus simple de traiter la `HTMLCollection` comme un tableau et d'y accéder avec la notation crochets. Voir [l'exemple](#exemples) ci‑dessous.

## Exemples

```js
const images = document.images; // Ceci est une HTMLCollection.
const img0 = images.item(0); // Vous pouvez utiliser la méthode item comme ceci
const img1 = images[1]; // Mais cette notation est plus simple et plus commune
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("NodeList.item()")}}
