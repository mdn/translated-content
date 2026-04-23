---
title: "Document : méthode elementFromPoint()"
short-title: elementFromPoint()
slug: Web/API/Document/elementFromPoint
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{APIRef("DOM")}}

La méthode **`elementFromPoint()`** de l'interface {{DOMxRef("Document")}} retourne l'élément {{DOMxRef("Element")}} le plus haut situé aux coordonnées définies (relativement à la zone d'affichage).

Si l'élément au point défini appartient à un autre document (par exemple, le document d'un {{HTMLElement("iframe")}}), l'élément parent de ce document est retourné (l'élément `<iframe>` lui-même). Si l'élément au point donné est un contenu anonyme ou généré par XBL, comme les barres de défilement d'une zone de texte, alors le premier ancêtre non anonyme (par exemple, la zone de texte) est retourné.

Les éléments avec {{CSSxRef("pointer-events")}} défini à `none` seront ignorés, et l'élément situé en dessous sera retourné.

Si la méthode est exécutée sur un autre document (comme le sous-document d'un `<iframe>`), les coordonnées sont relatives au document où la méthode est appelée.

Si le point défini est en dehors des bornes visibles du document ou si l'une des coordonnées est négative, le résultat est `null`.

Si vous devez trouver la position exacte à l'intérieur de l'élément, utilisez {{DOMxRef("Document.caretPositionFromPoint()")}}.

## Syntaxe

```js-nolint
elementFromPoint(x, y)
```

### Paramètres

- `x`
  - : La coordonnée horizontale d'un point, relative au bord gauche de la {{Glossary("viewport", "zone d'affichage")}} actuelle.
- `y`
  - : La coordonnée verticale d'un point, relative au bord haut de la zone d'affichage actuelle.

### Valeur de retour

L'objet {{DOMxRef("Element")}} de plus haut niveau situé aux coordonnées définies.

## Exemples

Dans cet exemple, on crée deux boutons qui permettent de définir la couleur du texte du paragraphe situé aux coordonnées `(2, 2)`.

### HTML

```html
<p id="para1">Un texte ici</p>
<button>blue</button>
<button>red</button>
```

Le HTML fournit le paragraphe dont la couleur sera modifiée ainsi que deux boutons&nbsp;: l'un pour changer la couleur en bleu, et l'autre pour changer la couleur en rouge.

### JavaScript

```js
function changerCouleur(nouvelleCouleur) {
  const elem = document.elementFromPoint(2, 2);
  elem.style.color = nouvelleCouleur;
}

document.querySelectorAll("button").forEach((bouton) => {
  bouton.addEventListener("click", (event) => {
    changerCouleur(event.target.textContent.toLowerCase());
  });
});
```

La méthode `changerCouleur()` obtient l'élément situé au point défini, puis définit la propriété {{CSSxRef("color")}} de premier plan de cet élément sur la couleur définie par le paramètre `nouvelleCouleur`.

### Résultat

{{EmbedLiveSample("Exemples", 400, 120)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Document.elementsFromPoint()")}}
