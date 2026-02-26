---
title: "HTMLElement : évènement error"
short-title: error
slug: Web/API/HTMLElement/error_event
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

{{APIRef("HTML DOM")}}

L'évènement `error` de l'interface {{DOMxRef("HTMLElement")}} est déclenché sur un élément lorsqu'une ressource n'a pas pu être chargée ou ne peut pas être utilisée. Par exemple, si un script rencontre une erreur d'exécution ou si une image est introuvable ou invalide.

Cet évènement n'est pas annulable et ne se propage pas.

## Syntaxe

On utilisera le nom de l'évènement dans des méthodes telles que {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou on définira une propriété gestionnaire d'évènements.

```js-nolint
addEventListener("error", (event) => { })

onerror = (event) => { }
```

## Type d'évènement

L'objet évènement est une instance de l'objet {{DOMxRef("UIEvent")}} s'il a été généré à partir d'un élément d'interface utilisateur, ou une instance de l'objet {{DOMxRef("Event")}} à la place.

{{InheritanceDiagram("UIEvent")}}

## Exemples

### Exemple interactif

#### HTML

```html
<div class="controls">
  <button id="img-error" type="button">Générer une erreur d'image</button>
  <img src="bad-image.jpg" class="bad-img" alt="Je n'existe pas" />
</div>

<div class="event-log">
  <label>Journal d'évènements :</label>
  <textarea
    readonly
    class="event-log-contents"
    rows="8"
    cols="30"
    id="eventLog"></textarea>
</div>
```

```css hidden
body {
  display: grid;
  grid-template-areas: "control log";
}

.controls {
  grid-area: control;
  display: flex;
  align-items: center;
  justify-content: center;
}

.event-log {
  grid-area: log;
}

.event-log-contents {
  resize: none;
}

label,
button {
  display: block;
}

button {
  height: 2rem;
  margin: 0.5rem;
}

img {
  width: 0;
  height: 0;
}
```

#### JavaScript

```js
const log = document.querySelector(".event-log-contents");

const badImg = document.querySelector(".bad-img");
badImg.addEventListener("error", (event) => {
  log.textContent = log.textContent + `${event.type}: Chargement de l'image\n`;
  console.log(event);
});

const imgError = document.querySelector("#img-error");
imgError.addEventListener("click", () => {
  badImg.setAttribute("src", "i-dont-exist");
});
```

#### Résultat

{{EmbedLiveSample('Exemple interactif', '100%', 150)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Évènements associés&nbsp;:
  - L'évènement {{DOMxRef("Window/error_event", "error")}} de Window
  - L'évènement {{DOMxRef("HTMLElement/load_event", "load")}} de HTMLElement
