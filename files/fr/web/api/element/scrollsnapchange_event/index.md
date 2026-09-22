---
title: "Element : évènement scrollsnapchange"
short-title: scrollsnapchange
slug: Web/API/Element/scrollsnapchange_event
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef}}{{SeeCompatTable}}

L'évènement **`scrollsnapchange`** de l'interface {{DOMxRef("Element")}} est déclenché sur le [conteneur de défilement](/fr/docs/Glossary/Scroll_container) à la fin d'une opération de défilement lorsqu'une nouvelle cible d'alignement de défilement a été sélectionnée, juste avant que l'évènement correspondant {{DOMxRef("Element/scrollend_event", "scrollend")}} ne se déclenche.

Une opération de défilement se termine lorsque l'utilisateur·ice a fini·e de faire défiler un conteneur de défilement — par exemple en utilisant un geste tactile ou en faisant glisser le pointeur de la souris sur une barre de défilement — et relâche le geste.

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

L'élément `<main>` peut être transformé en conteneur de défilement qui s'aligne sur ses enfants lorsqu'on le fait défiler en utilisant une combinaison de la propriété CSS {{CSSxRef("scroll-snap-type")}} et d'autres propriétés. Par exemple&nbsp;:

```css
main {
  width: 250px;
  height: 450px;
  overflow: scroll;
  scroll-snap-type: block mandatory;
}
```

Le fragment JavaScript suivant provoque le déclenchement de l'évènement `scrollsnapchange` sur l'élément `<main>` lorsqu'un de ses enfants devient une nouvelle cible d'alignement sélectionnée. Dans la fonction de gestion, nous appliquons une classe `selected` à l'enfant référencé par la propriété {{DOMxRef("SnapEvent.snapTargetBlock")}}, qui peut être utilisée pour la mise en forme afin qu'il semble avoir été sélectionné (par exemple, avec une animation) lorsque l'évènement se déclenche.

```js
const elementDefilable = document.querySelector("main");

elementDefilable.addEventListener("scrollsnapchange", (event) => {
  event.snapTargetBlock.classList.add("selected");
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'évènement {{DOMxRef("Element/scrollsnapchanging_event", "scrollsnapchanging")}}
- L'évènement {{DOMxRef("Document/scrollend_event", "scrollend")}}
- L'interface {{DOMxRef("SnapEvent")}}
- La propriété CSS {{CSSxRef("scroll-snap-type")}}
- Le module [d'alignement au défilement CSS](/fr/docs/Web/CSS/Guides/Scroll_snap)
- [Utiliser les évènements d'alignement au défilement](/fr/docs/Web/CSS/Guides/Scroll_snap/Using_scroll_snap_events)
- [Les évènements d'alignement au défilement <sup>(angl.)</sup>](https://developer.chrome.com/blog/scroll-snap-events) sur developer.chrome.com (2024)
