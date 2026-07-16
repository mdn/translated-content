---
title: "Document : évènement scrollsnapchanging"
short-title: scrollsnapchanging
slug: Web/API/Document/scrollsnapchanging_event
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef}}{{SeeCompatTable}}

L'évènement **`scrollsnapchanging`** de l'interface {{DOMxRef("Document")}} est déclenché sur le [conteneur de défilement](/fr/docs/Glossary/Scroll_container) lorsque le navigateur détermine qu'une nouvelle cible d'accrochage de défilement est en attente, c'est-à-dire qu'elle sera sélectionnée lorsque le geste de défilement en cours prendra fin.

Cet évènement fonctionne de la même manière que l'évènement [`scrollsnapchanging`](/fr/docs/Web/API/Element/scrollsnapchanging_event) de l'interface {{DOMxRef("Element")}}, à la différence que l'ensemble du document HTML doit être défini comme le conteneur d'accrochage de défilement (c'est-à-dire que {{CSSxRef("scroll-snap-type")}} est défini sur l'élément {{HTMLElement("html")}}).

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènements.

```js-nolint
addEventListener("scrollsnapchanging", (event) => { })

onscrollsnapchanging = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("SnapEvent")}}, qui hérite du type générique {{DOMxRef("Event")}}.

## Exemples

### Utilisation simple

Supposons que nous ayons un élément HTML {{HTMLElement("main")}} contenant un contenu important qui provoque son défilement&nbsp;:

```html
<main>
  <!-- Contenu important -->
</main>
```

L'élément `<main>` peut être transformé en conteneur de défilement à l'aide d'une combinaison de propriétés CSS, par exemple&nbsp;:

```css
main {
  width: 250px;
  height: 450px;
  overflow: scroll;
}
```

Nous pouvons ensuite mettre en place un comportement d'accrochage de défilement sur le contenu défilant en définissant la propriété {{CSSxRef("scroll-snap-type")}} sur l'élément {{HTMLElement("html")}}&nbsp;:

```css
html {
  scroll-snap-type: block mandatory;
}
```

Le fragment de code JavaScript suivant provoquera le déclenchement de l'évènement `scrollsnapchanging` sur le document HTML lorsqu'un enfant de l'élément `<main>` devient une cible d'accrochage en attente. Dans la fonction de gestion, nous appliquons une classe `pending` à l'enfant référencé par la propriété {{DOMxRef("SnapEvent.snapTargetBlock", "snapTargetBlock")}}, ce qui peut permettre de le mettre en forme différemment lorsque l'évènement se déclenche.

```js
document.addEventListener("scrollsnapchanging", (event) => {
  // supprimer les classes "pending" précédemment appliquées
  const pendingElems = document.querySelectorAll(".pending");
  pendingElems.forEach((elem) => {
    elem.classList.remove("pending");
  });

  // Appliquer la classe "pending" à la cible d'accrochage en attente
  event.snapTargetBlock.classList.add("pending");
});
```

Au début de la fonction, nous sélectionnons tous les éléments qui avaient précédemment la classe `pending` et nous la supprimons, afin que seule la cible d'accrochage en attente la plus récente soit mise en forme.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'évènement {{DOMxRef("Document/scrollsnapchange_event", "scrollsnapchange")}}
- L'évènement {{DOMxRef("Document/scrollend_event", "scrollend")}}
- L'interface {{DOMxRef("SnapEvent")}}
- La propriété CSS {{CSSxRef("scroll-snap-type")}}
- [Le module d'accrochage de défilement CSS](/fr/docs/Web/CSS/Guides/Scroll_snap)
- [Utiliser les évènements d'accrochage au défilement](/fr/docs/Web/CSS/Guides/Scroll_snap/Using_scroll_snap_events)
- [Les évènements d'accrochage au défilement <sup>(angl.)</sup>](https://developer.chrome.com/blog/scroll-snap-events) sur developer.chrome.com (2024)
