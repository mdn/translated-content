---
title: "Window : évènement scrollsnapchange"
short-title: scrollsnapchange
slug: Web/API/Window/scrollsnapchange_event
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef}}{{SeeCompatTable}}

L'évènement **`scrollsnapchange`** de l'interface {{DOMxRef("Window")}} est déclenché sur la `window` à la fin d'une opération de défilement lorsqu'une nouvelle cible d'alignement de défilement est sélectionnée.

Cet évènement fonctionne de la même manière que l'évènement [`scrollsnapchange`](/fr/docs/Web/API/Element/scrollsnapchange_event) de l'interface {{DOMxRef("Element")}}, sauf que le document HTML global doit être défini comme conteneur de défilement avec alignement (c'est-à-dire que la propriété {{CSSxRef("scroll-snap-type")}} est définie sur l'élément {{HTMLElement("html")}}).

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("scrollsnapchange", (event) => { })

onscrollsnapchange = (event) => { }
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

L'élément `<main>` peut être transformé en conteneur de défilement en utilisant une combinaison de propriétés CSS, par exemple&nbsp;:

```css
main {
  width: 250px;
  height: 450px;
  overflow: scroll;
}
```

Nous pouvons ensuite implémenter le comportement de défilement avec alignement sur le contenu défilant en définissant la propriété {{CSSxRef("scroll-snap-type")}} sur l'élément {{HTMLElement("html")}}&nbsp;:

```css
html {
  scroll-snap-type: block mandatory;
}
```

Le bout de code JavaScript suivant provoque le déclenchement de l'évènement `scrollsnapchange` sur le document HTML lorsqu'un enfant de l'élément `<main>` devient une nouvelle cible d'alignement sélectionnée. Dans la fonction de gestionnaire, nous définissons une classe `selected` sur l'enfant référencé par le {{DOMxRef("SnapEvent.snapTargetBlock")}}, qui peut être utilisée pour le mettre en forme afin qu'il semble avoir été sélectionné (par exemple, avec une animation) lorsque l'évènement se déclenche.

```js
window.addEventListener("scrollsnapchange", (event) => {
  event.snapTargetBlock.classList.add("selected");
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'évènement {{DOMxRef("Window/scrollsnapchanging_event", "scrollsnapchanging")}}
- L'évènement {{DOMxRef("Document/scrollend_event", "scrollend")}}
- L'interface {{DOMxRef("SnapEvent")}}
- La propriété CSS {{CSSxRef("scroll-snap-type")}}
- Le module [d'alignement de défilement CSS](/fr/docs/Web/CSS/Guides/Scroll_snap)
- [Utiliser les évènements de défilement avec alignement](/fr/docs/Web/CSS/Guides/Scroll_snap/Using_scroll_snap_events)
- [Évènements de défilement avec alignement <sup>(angl.)</sup>](https://developer.chrome.com/blog/scroll-snap-events) sur developer.chrome.com (2024)
