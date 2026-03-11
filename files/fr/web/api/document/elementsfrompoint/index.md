---
title: "Document : méthode elementsFromPoint()"
short-title: elementsFromPoint()
slug: Web/API/Document/elementsFromPoint
l10n:
  sourceCommit: b21df53ffbb066cfb9347d7f0e5aebb792ed73e5
---

{{APIRef("DOM")}}

La méthode **`elementsFromPoint()`** de l'interface {{DOMxRef("Document")}} retourne un tableau de tous les éléments aux coordonnées définies (relativement à la zone d'affichage).
Les éléments sont ordonnés du plus haut au plus bas dans la zone d'affichage.

Elle fonctionne de manière similaire à la méthode {{DOMxRef("Document.elementFromPoint", "elementFromPoint()")}}.

## Syntaxe

```js-nolint
elementsFromPoint(x, y)
```

### Paramètres

- `x`
  - : La coordonnée horizontale d'un point.
- `y`
  - : La coordonnée verticale d'un point.

### Valeur de retour

Un tableau d'objets {{DOMxRef('Element')}} représentant les éléments situés aux coordonnées définies, ordonnés du plus haut au plus bas dans la zone d'affichage.

## Exemples

### HTML

```html
<div>
  <p>Du texte</p>
</div>
<p>Éléments au point 30, 20&nbsp;:</p>
<div id="output"></div>
```

### JavaScript

```js
let output = document.getElementById("output");
if (document.elementsFromPoint) {
  let elements = document.elementsFromPoint(30, 20);
  elements.forEach((elt, i) => {
    output.textContent += elt.localName;
    if (i < elements.length - 1) {
      output.textContent += " < ";
    }
  });
} else {
  output.innerHTML = `<span style="color: red">
  Votre navigateur ne prend pas en charge
  <code>document.elementsFromPoint()</code>
</span>
`;
}
```

### Résultat

{{EmbedLiveSample("Exemples", 420, 160)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Document.elementFromPoint()")}}
