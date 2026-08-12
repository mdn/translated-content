---
title: "Element : méthode releasePointerCapture()"
short-title: releasePointerCapture()
slug: Web/API/Element/releasePointerCapture
l10n:
  sourceCommit: 6ba4f3b350be482ba22726f31bbcf8ad3c92a9c6
---

{{APIRef("DOM")}}

La méthode **`releasePointerCapture()`** de l'interface {{DOMxRef("Element")}} relâche (arrête) la [_capture de pointeur_](/fr/docs/Web/API/Pointer_events#pointer_capture) qui avait été précédemment définie pour un _pointer_ spécifique ({{DOMxRef("PointerEvent")}}).

## Syntaxe

```js-nolint
releasePointerCapture(pointerId)
```

### Paramètres

- `pointerId`
  - : Le {{DOMxRef("PointerEvent.pointerId", "pointerId")}} d'un objet {{DOMxRef("PointerEvent")}}.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

- `NotFoundError` {{DOMxRef("DOMException")}}
  - : Levée si `pointerId` ne correspond à aucun pointeur actif.

## Exemples

Cet exemple définit la capture de pointeur sur un {{HTMLElement("div")}} lorsque vous appuyez dessus. Cela vous permet de faire glisser l'élément horizontalement, même lorsque votre pointeur se déplace en dehors de ses limites.

### HTML

```html
<div id="glissiere">Glissez-moi</div>
```

### CSS

```css
div {
  width: 140px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffbbee;
}
```

### JavaScript

```js
const glissiere = document.getElementById("glissiere");

function debuterGlissement(e) {
  glissiere.onpointermove = defiler;
  glissiere.setPointerCapture(e.pointerId);
}

function arreterGlissement(e) {
  glissiere.onpointermove = null;
  glissiere.releasePointerCapture(e.pointerId);
}

function defiler(e) {
  glissiere.style.transform = `translate(${e.clientX - 70}px)`;
}

glissiere.onpointerdown = debuterGlissement;
glissiere.onpointerup = arreterGlissement;
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Element.hasPointerCapture()")}}
- La méthode {{DOMxRef("Element.setPointerCapture()")}}
- [Les évènements du pointeur](/fr/docs/Web/API/Pointer_events)
