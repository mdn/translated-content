---
title: "Element : méthode setPointerCapture()"
short-title: setPointerCapture()
slug: Web/API/Element/setPointerCapture
l10n:
  sourceCommit: 6ba4f3b350be482ba22726f31bbcf8ad3c92a9c6
---

{{APIRef("DOM")}}

La méthode **`setPointerCapture()`** de l'interface {{DOMxRef("Element")}} est utilisée pour désigner un élément spécifique comme _cible de capture_ des futurs évènements de pointeur. Les évènements ultérieurs pour le pointeur sont ciblés sur l'élément de capture jusqu'à ce que la capture soit libérée (avec {{DOMxRef("Element.releasePointerCapture()")}} ou l'évènement {{DOMxRef("Element/pointerup_event", "pointerup")}}).

Voir [les évènements de pointeur](/fr/docs/Web/API/Pointer_events#capture_du_pointeur) pour un aperçu et des exemples de fonctionnement de la capture de pointeur.

## Syntaxe

```js-nolint
setPointerCapture(pointerId)
```

### Paramètres

- `pointerId`
  - : Un {{DOMxRef("PointerEvent.pointerId", "pointerId")}} d'un objet {{DOMxRef("PointerEvent")}}.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

- `NotFoundError` {{DOMxRef("DOMException")}}
  - : Levée si `pointerId` ne correspond à aucun pointeur actif.

## Exemples

Cet exemple définit la capture du pointeur sur un {{HTMLElement("div")}} lorsque vous appuyez dessus. Cela vous permet de faire defiler l'élément horizontalement, même lorsque votre pointeur se déplace en dehors de ses limites.

### HTML

```html
<div id="glissiere">GLISSEZ-MOI</div>
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
  touch-action: none;
}
```

### JavaScript

```js
const glissiere = document.getElementById("glissiere");

function demarrerGlissement(e) {
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

glissiere.onpointerdown = demarrerGlissement;
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
- La méthode {{DOMxRef("Element.releasePointerCapture()")}}
- [Les évènements de pointeur](/fr/docs/Web/API/Pointer_events)
