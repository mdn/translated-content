---
title: "Document : évènement scroll"
short-title: scroll
slug: Web/API/Document/scroll_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("CSSOM view API")}}

L'évènement **`scroll`** de l'interface {{DOMxRef("Document")}} est déclenché lorsque la vue du document a été défilée.
Pour détecter lorsque le défilement est terminé, voir l'évènement {{DOMxRef("Document/scrollend_event", "scrollend")}} de `Document`.
Pour le défilement des éléments, voir l'évènement {{DOMxRef("Element/scroll_event", "scroll")}} de `Element`.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènements.

```js-nolint
addEventListener("scroll", (event) => { })

onscroll = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("Event")}} générique.

## Exemples

### Limiter la fréquence de l'évènement de défilement

Comme les évènements `scroll` peuvent se déclencher à un rythme élevé, le gestionnaire d'évènements ne doit pas exécuter des opérations coûteuses en calcul, telles que des modifications du DOM. Si vous remarquez un {{Glossary("jank", "ralentissement")}} lors d'un défilement rapide, vous devriez envisager de {{Glossary("throttle", "limiter la fréquence")}} l'évènement.

Notez que vous pouvez rencontrer du code qui limite la fréquence du gestionnaire d'évènements `scroll` en utilisant {{DOMxRef("Window.requestAnimationFrame()", "requestAnimationFrame()")}}. Cela est _inutile_ car les rappels d'image d'animation sont déclenchés à la même fréquence que les gestionnaires d'évènements `scroll`. À la place, vous devez mesurer le délai vous-même, par exemple en utilisant {{DOMxRef("Window.setTimeout", "setTimeout()")}}.

```js
let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
  // Faire quelque chose avec la position de défilement
}

document.addEventListener("scroll", (event) => {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    // Limiter la fréquence de l'évènement pour "faire quelque chose" toutes les 20ms
    setTimeout(() => {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    }, 20);

    ticking = true;
  }
});
```

De plus, vous pouvez envisager d'utiliser {{DOMxRef("IntersectionObserver")}} à la place, ce qui permet une écoute basée sur des seuils.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'évènement {{DOMxRef("Document.scrollend_event", "scrollend")}}
- L'évènement {{DOMxRef("Element.scroll_event", "scroll")}}
- L'évènement {{DOMxRef("Element.scrollend_event", "scrollend")}}
