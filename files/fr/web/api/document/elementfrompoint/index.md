---
title: Document.elementFromPoint()
slug: Web/API/Document/elementFromPoint
---

{{APIRef("DOM")}}

La méthode **`elementFromPoint()`**, rattachée à l'interface [`Document`](/fr/docs/Web/API/Document), renvoie un objet [`Element`](/fr/docs/Web/API/Element) correspondant à l'élément de plus haut niveau situé aux coordonnées indiquées en arguments (relativement à la zone d'affichage (<i lang="en">viewport</i>)).

Si l'élément placé au point indiqué appartient à un autre document (par exemple le document situé dans un élément [`<iframe>`](/fr/docs/Web/HTML/Element/iframe)), c'est l'élément parent (par exemple l'élément `<iframe>` même) qui est renvoyé. Si l'élément situé au point indiqué est du contenu anonyme (par exemple les barres de défilement d'une boîte de texte), c'est le premier élément ancêtre non anonyme (par exemple la boîte de texte) qui est renvoyée.

Les éléments pour lesquels [`pointer-events`](/fr/docs/Web/CSS/pointer-events) vaut `none` seront ignorés et ce sera l'élément situé en dessous sera renvoyé.

Si la méthode est exécutée sur un autre document (par exemple dans le sous-document chargé dans un élément `<iframe>`), les coordonnées seront relatives au document où la méthode est appelée.

Si le point indiqué est situé en dehors des limites visibles du document ou que l'une des coordonnées est négative, le résultat fourni par la méthode sera `null`.

Pour connaître la position précise à l'intérieur de l'élément, on utilisera la méthode [`Document.caretPositionFromPoint()`](/fr/docs/Web/API/Document/caretPositionFromPoint).

## Syntaxe

```js
elementFromPoint(x, y);
```

### Paramètres

- `x`
  - : L'abscisse du point relativement au bord gauche de la zone d'affichage ([<i lang="en">viewport</i>](/fr/docs/Glossary/Viewport)) courante.
- `y`
  - : L'ordonnée du point relativement au bord haut de la zone d'affichage courante.

### Valeur de retour

L'élément (l'objet [`Element`](/fr/docs/Web/API/Element)) de plus haut niveau situé aux coordonnées indiquées.

## Exemples

Dans cet exemple, on crée deux boutons qui permettent de définir la couleur du texte du paragraphe situé aux coordonnées `(2, 2)`.

### JavaScript

```js
function changeColor(nouvelleCouleur) {
  elem = document.elementFromPoint(2, 2);
  elem.style.color = nouvelleCouleur;
}
```

La méthode `changeColor()` récupère l'élément situé au point indiqué puis modifie la valeur de la propriété [`color`](/fr/docs/Web/CSS/color) avec la nouvelle couleur passée en argument.

### HTML

```html
<p id="para1">Un texte ici</p>
<button onclick="changeColor('blue');">Bleu</button>
<button onclick="changeColor('red');">Rouge</button>
```

Ce fragment HTML fournit le paragraphe dont la couleur sera modifiée ainsi que deux boutons pour changer la couleur (un pour le bleu et l'autre pour le rouge).

### Résultat

{{EmbedLiveSample('', 400, 120)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Document.elementsFromPoint()`](/fr/docs/Web/API/Document/elementsFromPoint)
