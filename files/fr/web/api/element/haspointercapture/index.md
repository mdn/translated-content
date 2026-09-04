---
title: "Element : méthode hasPointerCapture()"
short-title: hasPointerCapture()
slug: Web/API/Element/hasPointerCapture
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{APIRef("DOM")}}

La méthode **`hasPointerCapture()`** de l'interface {{DOMxRef("Element")}} vérifie si l'élément sur lequel elle est invoquée a la [capture du pointeur](/fr/docs/Web/API/Pointer_events#capture_du_pointeur) pour le pointeur identifié par l'ID de pointeur donné.

## Syntaxe

```js-nolint
hasPointerCapture(pointerId)
```

### Paramètres

- `pointerId`
  - : Le {{DOMxRef("PointerEvent.pointerId", "pointerId")}} d'un objet {{DOMxRef("PointerEvent")}}.

### Valeur de retour

Un booléen — `true` si l'élément a la capture du pointeur pour le pointeur identifié par l'ID de pointeur donné, `false` sinon.

## Exemples

```html
<div id="cible">Touchez cet élément avec un pointeur.</div>
```

```js
const el = document.getElementById("cible");
el.addEventListener("pointerdown", (ev) => {
  // L'élément 'cible' reçoit/capture les évènements suivants
  el.setPointerCapture(ev.pointerId);

  // …

  // Vérifie si l'élément a toujours la capture du pointeur
  const pointerCap = el.hasPointerCapture(ev.pointerId);
  if (pointerCap) {
    // Nous avons toujours la capture du pointeur
  } else {
    // Oups, nous avons perdu la capture du pointeur !
  }
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Element.setPointerCapture()")}}
- La méthode {{DOMxRef("Element.releasePointerCapture()")}}
- {{DOMxRef("Pointer_events","Les évènements de pointeur", "", 1)}}
