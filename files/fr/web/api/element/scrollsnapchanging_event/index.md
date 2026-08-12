---
title: "Element : évènement scrollsnapchanging"
short-title: scrollsnapchanging
slug: Web/API/Element/scrollsnapchanging_event
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef}}{{SeeCompatTable}}

L'évènement **`scrollsnapchanging`** de l'interface {{DOMxRef("Element")}} est déclenché sur le [conteneur de défilement](/fr/docs/Glossary/Scroll_container) lorsque le navigateur détermine qu'une nouvelle cible d'alignement de défilement est en attente, c'est-à-dire qu'elle est sélectionnée à la fin du geste de défilement en cours.

Plus précisément, cet évènement se déclenche pendant un geste de défilement, chaque fois que l'utilisateur·ice passe sur de nouvelles cibles d'alignement potentielles. Par exemple, l'utilisateur·ice peut faire défiler lentement en faisant glisser son doigt sur un écran tactile, ou maintenir le bouton de la souris enfoncé sur une barre de défilement et déplacer la souris. `scrollsnapchanging` peut donc se déclencher plusieurs fois pour chaque geste de défilement.

Cependant, il ne se déclenche pas sur toutes les cibles d'alignement potentielles pour un geste de défilement qui passe sur plusieurs cibles. Il se déclenche uniquement pour la dernière cible sur laquelle l'alignement peut potentiellement se faire.

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

L'élément `<main>` peut être transformé en conteneur de défilement qui s'aligne sur ses enfants lorsqu'on le fait défiler en utilisant une combinaison de la propriété CSS {{CSSxRef("scroll-snap-type")}} et d'autres propriétés. Par exemple&nbsp;:

```css
main {
  width: 250px;
  height: 450px;
  overflow: scroll;
  scroll-snap-type: block mandatory;
}
```

Le fragment JavaScript suivant provoque le déclenchement de l'évènement `scrollsnapchanging` sur l'élément `<main>` lorsqu'un de ses enfants devient une cible d'alignement en attente. Dans la fonction de gestion, nous appliquons une classe `pending` à l'enfant référencé par la propriété {{DOMxRef("SnapEvent.snapTargetBlock", "snapTargetBlock")}}, qui peut être utilisée pour le mettre en forme différemment lorsque l'évènement se déclenche.

```js
elementDefilable.addEventListener("scrollsnapchanging", (event) => {
  // supprime les classes "pending" précédemment définies
  const elementAttente = document.querySelectorAll(".pending");
  elementAttente.forEach((elem) => {
    elem.classList.remove("pending");
  });

  // Applique la classe "pending" à la cible d'alignement en attente actuelle
  event.snapTargetBlock.classList.add("pending");
});
```

Au début de la fonction, nous sélectionnons tous les éléments qui ont précédemment la classe `pending` appliquée et la supprimons, de sorte que seule la cible d'alignement en attente la plus récente soit mise en forme.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'évènement {{DOMxRef("Element/scrollsnapchange_event", "scrollsnapchange")}}
- L'évènement {{DOMxRef("Document/scrollend_event", "scrollend")}}
- L'interface {{DOMxRef("SnapEvent")}}
- La propriété CSS {{CSSxRef("scroll-snap-type")}}
- Le module [d'alignement au défilement CSS](/fr/docs/Web/CSS/Guides/Scroll_snap)
- [Utiliser les évènements d'alignement au défilement](/fr/docs/Web/CSS/Guides/Scroll_snap/Using_scroll_snap_events)
- [Les évènements d'alignement au défilement <sup>(angl.)</sup>](https://developer.chrome.com/blog/scroll-snap-events) sur developer.chrome.com (2024)
