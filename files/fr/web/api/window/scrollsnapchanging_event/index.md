---
title: "Window : évènement scrollsnapchanging"
short-title: scrollsnapchanging
slug: Web/API/Window/scrollsnapchanging_event
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef}}{{SeeCompatTable}}

L'évènement **`scrollsnapchanging`** de l'interface {{DOMxRef("Window")}} est déclenché sur la `window` lorsque le navigateur détermine qu'une nouvelle cible d'alignement de défilement est en attente, c'est-à-dire qu'elle est sélectionnée lorsque le geste de défilement en cours se termine.

Cet évènement fonctionne de la même manière que l'évènement [`scrollsnapchanging`](/fr/docs/Web/API/Element/scrollsnapchanging_event) de l'interface {{DOMxRef("Element")}}, sauf que le document HTML global doit être défini comme conteneur de défilement avec alignement (c'est-à-dire que la propriété {{CSSxRef("scroll-snap-type")}} est définie sur l'élément {{HTMLElement("html")}}).

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

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

Le bout de code JavaScript suivant provoque le déclenchement de l'évènement `scrollsnapchanging` sur le document HTML lorsqu'un enfant de l'élément `<main>` devient une nouvelle cible d'alignement en attente. Dans la fonction de gestionnaire, nous définissons une classe `pending` sur l'enfant référencé par la propriété {{DOMxRef("SnapEvent.snapTargetBlock", "snapTargetBlock")}}, qui peut être utilisée pour le mettre en forme afin qu'il semble être en attente lorsque l'évènement se déclenche.

```js
window.addEventListener("scrollsnapchanging", (event) => {
  // supprimer les classes « pending » précédemment définies
  const pendingElems = document.querySelectorAll(".pending");
  pendingElems.forEach((elem) => {
    elem.classList.remove("pending");
  });

  // Définir la classe de la cible d'alignement en attente actuelle sur « pending »
  event.snapTargetBlock.classList.add("pending");
});
```

Au début de la fonction, nous sélectionnons tous les éléments qui ont précédemment la classe `pending` appliquée et la supprimons, de sorte que seule la cible de défilement en attente la plus récente soit mise en forme.

## Spécifications

{{Specifications}}

## CCompatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'évènement {{DOMxRef("Window/scrollsnapchange_event", "scrollsnapchange")}}
- L'évènement {{DOMxRef("Document/scrollend_event", "scrollend")}}
- L'interface {{DOMxRef("SnapEvent")}}
- La propriété CSS {{CSSxRef("scroll-snap-type")}}
- Le module [d'alignement de défilement CSS](/fr/docs/Web/CSS/Guides/Scroll_snap)
- [Utiliser les évènements de défilement avec alignement](/fr/docs/Web/CSS/Guides/Scroll_snap/Using_scroll_snap_events)
- [Évènements de défilement avec alignement <sup>(angl.)</sup>](https://developer.chrome.com/blog/scroll-snap-events) sur developer.chrome.com (2024)
