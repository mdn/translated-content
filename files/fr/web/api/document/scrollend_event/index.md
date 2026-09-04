---
title: "Document : évènement scrollend"
short-title: scrollend
slug: Web/API/Document/scrollend_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("CSSOM view API")}}

L'évènement **`scrollend`** de l'interface {{DOMxRef("Document")}} se déclenche lorsque la vue du document a terminé son défilement.
Le défilement est considéré comme terminé lorsque la position de défilement n'a plus de mises à jour en attente et que l'utilisateur·ice a terminé son geste.

Les mises à jour de la position de défilement incluent le défilement à la molette de souris, fluide ou instantané, le défilement au clavier, les évènements d'accrochage du défilement, ou d'autres API et gestes qui provoquent une mise à jour de la position de défilement.
Les gestes utilisateur·ice·s comme le glissement tactile ou le défilement au pavé tactile ne sont terminés que lorsque les pointeurs ou les touches ont été relâchés.
Si la position de défilement n'a pas changé, aucun évènement de fin de défilement n'est déclenché.

Pour détecter lorsque le défilement à l'intérieur d'un élément est terminé, voir l'évènement {{DOMxRef("Element/scrollend_event", "scrollend")}} de `Element`.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènements.

```js-nolint
addEventListener("scrollend", (event) => { })

onscrollend = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("Event")}} générique.

## Exemples

### Utiliser l'évènement `scrollend` de Document avec un écouteur d'évènements

L'exemple suivant montre comment utiliser l'évènement `scrollend` avec un écouteur d'évènements pour détecter lorsque l'utilisateur·ice a arrêté de faire défiler le document.
Dans l'exemple, il y a du contenu dans le cadre intégrée qui est plus grand et plus large que le cadre intégré elle-même, donc le défilement à l'intérieur de le cadre intégré dans les deux directions est possible.
Lorsque l'utilisateur·ice arrête de faire défiler, l'évènement `scrollend` se déclenche&nbsp;:

```css hidden
* {
  margin: 10px;
}

.box-wrapper {
  width: 900px;
  border: 4px dotted;
}

.box {
  height: 100px;
  width: 100px;
  display: block;
  border: 4px dotted;
  border-radius: 10px;
}

#output {
  text-align: center;
  font-size: 1.2em;
  position: sticky;
  bottom: 0;
}
```

```html
<div class="box-wrapper">
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
</div>
<p id="output">En attente des événements de défilement...</p>
```

```js
const output = document.querySelector("p#output");

document.addEventListener("scroll", (event) => {
  output.textContent = "Événement de défilement du document déclenché !";
});

document.addEventListener("scrollend", (event) => {
  output.textContent = "Événement de fin de défilement du document déclenché !";
});
```

{{EmbedLiveSample("Utiliser l'évènement `scrollend` de Document avec un écouteur d'évènements", "100%", 200)}}

### Utiliser la propriété de gestionnaire d'évènements `onscrollend`

L'exemple suivant montre comment utiliser la propriété de gestionnaire d'évènements `scrollend` pour détecter lorsque l'utilisateur·ice a arrêté de faire défiler le document.
Dans l'exemple, il y a du contenu dans le cadre intégrée qui est plus grand et plus large que le cadre intégré elle-même, donc le défilement à l'intérieur de le cadre intégré dans les deux directions est possible.
Cela s'appuie sur le premier exemple, mais utilise `document.onscrollend` au lieu d'un écouteur d'évènements&nbsp;:

```css hidden
* {
  margin: 10px;
}

.box-wrapper {
  width: 900px;
  border: 4px dotted;
}

.box {
  height: 100px;
  width: 100px;
  display: block;
  border: 4px dotted;
  border-radius: 10px;
}

#output {
  text-align: center;
  font-size: 1.2em;
  position: sticky;
  bottom: 0;
}
```

```html
<div class="box-wrapper">
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
</div>
<p id="output">En attente des événements de défilement...</p>
```

```js
document.onscroll = (event) => {
  output.textContent = "Événement de défilement du document déclenché !";
};

document.onscrollend = (event) => {
  output.textContent = "Événement de fin de défilement du document déclenché !";
};
```

{{EmbedLiveSample("Utiliser la propriété de gestionnaire d'évènements `onscrollend`", "100%", 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'évènement {{DOMxRef("Document.scroll_event", "scroll")}}
- L'évènement {{DOMxRef("Element.scrollend_event", "scrollend")}}
- L'évènement {{DOMxRef("Element.scroll_event", "scroll")}}
