---
title: "Element : évènement scroll"
short-title: scroll
slug: Web/API/Element/scroll_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("CSSOM view API")}}

L'évènement **`scroll`** se déclenche lorsqu'un élément a été défilé.
Pour détecter la fin du défilement, consultez l'évènement {{DOMxRef("Element/scrollend_event", "scrollend")}} de `Element`.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("scroll", (event) => { })

onscroll = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("Event")}} générique.

## Exemples

Les exemples suivants montrent comment utiliser l'évènement `scroll` avec un écouteur d'évènements et avec la propriété de gestionnaire d'évènement `onscroll`.
La méthode {{DOMxRef("Window.setTimeout", "setTimeout()")}} est utilisée pour {{Glossary("throttle", "limiter")}} le gestionnaire d'évènements, car les évènements `scroll` peuvent se déclencher à un rythme élevé.
Pour des exemples supplémentaires utilisant {{DOMxRef("Window.requestAnimationFrame()", "requestAnimationFrame()")}}, consultez la page de l'évènement `scroll` de l'interface `Document` {{DOMxRef("Document/scroll_event", "scroll")}}.

### Utiliser `scroll` avec un écouteur d'évènements

L'exemple suivant montre comment utiliser l'évènement `scroll` pour détecter lorsque l'utilisateur·ice fait défiler le contenu d'un élément&nbsp;:

```html
<div id="boite-defilante">
  <p>Défilez-moi&nbsp;!</p>
</div>
<p id="sortie">En attente des évènements de défilement...</p>
```

```css
#boite-defilante {
  overflow: scroll;
  height: 100px;
  width: 100px;
  float: left;
}

#boite-defilante p {
  height: 200px;
  width: 200px;
}

#sortie {
  text-align: center;
}
```

```js
const element = document.querySelector("div#boite-defilante");
const sortie = document.querySelector("p#sortie");

element.addEventListener("scroll", (event) => {
  sortie.textContent = "Évènement de défilement déclenché&nbsp;!";
  setTimeout(() => {
    sortie.textContent = "En attente des évènements de défilement...";
  }, 1000);
});
```

{{EmbedLiveSample("Utiliser `scroll` avec un écouteur d'évènements", "100%", 120)}}

### Utiliser la propriété de gestionnaire d'évènement `onscroll`

L'exemple suivant montre comment utiliser la propriété de gestionnaire d'évènement `onscroll` pour détecter lorsque l'utilisateur·ice fait défiler le contenu d'un élément&nbsp;:

```html
<div id="boite-defilante-2">
  <p>Défilez-moi&nbsp;!</p>
</div>
<p id="sortie-2">En attente des évènements de défilement...</p>
```

```css
#boite-defilante-2 {
  overflow: scroll;
  height: 100px;
  width: 100px;
  float: left;
}

#boite-defilante-2 p {
  height: 200px;
  width: 200px;
}

#sortie-2 {
  text-align: center;
}
```

```js
const element = document.querySelector("div#boite-defilante-2");
const sortie = document.querySelector("p#sortie-2");

element.onscroll = (event) => {
  sortie.textContent = "Évènement de défilement déclenché&nbsp;!";
  setTimeout(() => {
    sortie.textContent = "En attente des évènements de défilement...";
  }, 1000);
};
```

{{EmbedLiveSample("Utiliser la propriété de gestionnaire d'évènement `onscroll`", "100%", 120)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'évènement `scrollend` de l'interface Element](/fr/docs/Web/API/Element/scrollend_event)
- [L'évènement `scroll` de l'interface Document](/fr/docs/Web/API/Document/scroll_event)
- [L'évènement `scrollend` de l'interface Document](/fr/docs/Web/API/Document/scrollend_event)
