---
title: "Element : évènement scrollend"
short-title: scrollend
slug: Web/API/Element/scrollend_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("CSSOM view API")}}

L'évènement **`scrollend`** se déclenche lorsque le défilement d'un élément est terminé.
Le défilement est considéré comme terminé lorsque la position de défilement n'a plus de mises à jour en attente et que l'utilisateur·ice a terminé son geste.

Les mises à jour de la position de défilement incluent le défilement à la molette de souris, au clavier, les évènements de scroll-snap ou d'autres API et gestes qui provoquent la mise à jour de la position de défilement.
Les gestes de l'utilisateur·ice, comme le panoramique tactile ou le défilement sur pavé tactile, ne sont pas terminés tant que les pointeurs ou les touches n'ont pas été relâchés.
Si la position de défilement n'a pas changé, aucun évènement `scrollend` n'est déclenché.

Pour savoir quand le défilement à l'intérieur d'un Document est terminé, voir l'évènement {{DOMxRef("Document/scrollend_event", "scrollend")}} de `Document`.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("scrollend", (event) => { })

onscrollend = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("Event")}} générique.

## Exemples

### Utiliser `scrollend` avec un écouteur d'évènement

L'exemple suivant montre comment utiliser l'évènement `scrollend` pour détecter lorsque l'utilisateur·ice a cessé de faire défiler&nbsp;:

```css hidden
#boite-defilante {
  height: 100px;
  width: 100px;
  float: left;
  overflow: scroll;
  outline: 4px dotted;
  margin: 4px;
}

#titre-boite-defilante {
  position: fixed;
  top: 5px;
  left: 5px;
  transform: translateX(0);
}

#element-large {
  height: 200px;
  width: 200px;
}

#sortie {
  text-align: center;
}
```

```html
<div id="boite-defilante">
  <p id="titre-boite-defilante">Faites défiler&nbsp;!</p>
  <p id="element-large"></p>
</div>
<p id="sortie">En attente des évènements de défilement...</p>
```

```js
const element = document.querySelector("div#boite-defilante");
const sortie = document.querySelector("p#sortie");

element.addEventListener("scroll", (event) => {
  sortie.textContent =
    "évènement de défilement déclenché, en attente de scrollend...";
});

element.addEventListener("scrollend", (event) => {
  sortie.textContent = "évènement scrollend déclenché !";
});
```

{{EmbedLiveSample("Utiliser `scrollend` avec un écouteur d'évènement", "100%", 130)}}

### Utiliser la propriété de gestionnaire d'évènement `onscrollend`

L'exemple suivant montre comment utiliser la propriété de gestionnaire d'évènement `onscrollend` pour détecter lorsque l'utilisateur·ice a cessé de faire défiler&nbsp;:

```css hidden
#boite-defilante {
  height: 100px;
  width: 100px;
  float: left;
  overflow: scroll;
  outline: 4px dotted;
  margin: 4px;
}

#titre-boite-defilante {
  position: fixed;
  top: 5px;
  left: 5px;
  transform: translateX(0);
}

#element-large {
  height: 200px;
  width: 200px;
}

#sortie {
  text-align: center;
}
```

```html
<div id="boite-defilante">
  <p id="titre-boite-defilante">Faites défiler&nbsp;!</p>
  <p id="element-large"></p>
</div>
<p id="sortie">En attente des évènements de défilement...</p>
```

```js
const element = document.querySelector("div#boite-defilante");
const sortie = document.querySelector("p#sortie");

element.onscroll = (event) => {
  sortie.textContent =
    "évènement de défilement déclenché, en attente de scrollend...";
};

element.onscrollend = (event) => {
  sortie.textContent = "évènement scrollend déclenché !";
};
```

{{EmbedLiveSample("Utiliser la propriété de gestionnaire d'évènement `onscrollend`", "100%", 130)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'évènement `scroll` de l'interface Element](/fr/docs/Web/API/Element/scroll_event)
- [L'évènement `scrollend` de l'interface Document](/fr/docs/Web/API/Document/scrollend_event)
- [L'évènement `scroll` de l'interface Document](/fr/docs/Web/API/Document/scroll_event)
