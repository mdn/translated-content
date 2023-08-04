---
title: Document.caretRangeFromPoint()
slug: Web/API/Document/caretRangeFromPoint
---

{{APIRef("DOM")}}{{Non-standard_header}}

La méthode **`caretRangeFromPoint()`**, rattachée à l'interface [`Document`](/fr/docs/Web/API/Document), renvoie un objet [`Range`](/fr/docs/Web/API/Range) correspondant au fragment de document situé aux coordonnées indiquées.

## Syntaxe

```js
caretRangeFromPoint(x, y);
```

### Paramètres

- `x`
  - : L'abscisse de la position ciblée au sein de la zone d'affichage (<i lang="en">viewport</i>) actuelle.
- `y`
  - : L'ordonnée de la position ciblée au sein de la zone d'affichage (<i lang="en">viewport</i>) actuelle.

### Valeur de retour

La valeur de retour peut être&nbsp;:

- Un objet [`Range`](/fr/docs/Web/API/Range)
- Ou `null`, si `x` ou `y` sont négatifs, situés en dehors de la zone d'affichage ou s'il n'y a pas de nœud texte correspondant.

## Exemples

Cliquez n'importe où dans le paragraphe **Démo** ci-après pour ajouter un saut de ligne à l'endroit du clic. Le code utilisé est décrit après.

### Démo

{{EmbedLiveSample('')}}

Le code qui suit commence par vérifier la prise en charge de `document.caretRangeFromPoint`. Si le navigateur ne prend pas en charge cette méthode, le code vérifie si [`document.caretPositionFromPoint`](/fr/docs/Web/API/Document/caretPositionFromPoint) est disponible et l'utilise le cas échéant.

### JavaScript

```js
function insertBreakAtPoint(e) {
  let range;
  let textNode;
  let offset;

  if (document.caretRangeFromPoint) {
    range = document.caretRangeFromPoint(e.clientX, e.clientY);
    textNode = range.startContainer;
    offset = range.startOffset;
  } else if (document.caretPositionFromPoint) {
    range = document.caretPositionFromPoint(e.clientX, e.clientY);
    textNode = range.offsetNode;
    offset = range.offset;
  } else {
    document.body.textContent =
      "[Ce navigateur ne supporte ni" +
      " document.caretRangeFromPoint" +
      " ni document.caretPositionFromPoint.]";
    return;
  }
  // On opère uniquement sur le texte
  if (textNode && textNode.nodeType == 3) {
    let replacement = textNode.splitText(offset);
    let br = document.createElement("br");
    textNode.parentNode.insertBefore(br, replacement);
  }
}

let paragraphs = document.getElementsByTagName("p");
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].addEventListener("click", insertBreakAtPoint, false);
}
```

### HTML

```html
<p>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
  voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
  kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</p>
```

## Compatibilité des navigateurs

{{Compat}}
