---
title: "HTMLElement : évènement load"
short-title: load
slug: Web/API/HTMLElement/load_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("HTML DOM")}}

L'évènement **`load`** de l'interface {{DOMxRef("HTMLElement")}} est déclenché pour les éléments contenant une ressource lorsque celle‑ci a été chargée avec succès. Actuellement, la liste des éléments HTML pris en charge sont&nbsp;: {{HTMLElement("body")}}, {{HTMLElement("embed")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}}, {{HTMLElement("link")}}, {{HTMLElement("object")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}} et {{HTMLElement("track")}}.

> [!NOTE]
> L'évènement `load` sur {{DOMxRef("HTMLBodyElement#event_handlers", "HTMLBodyElement")}} est en réalité un alias pour l'évènement {{DOMxRef("Window/load_event", "window.onload")}}. Ainsi, l'évènement `load` ne sera déclenché sur l'élément `<body>` qu'une fois que toutes les ressources du document auront été chargées ou auront échoué. Cependant, pour plus de clarté, il est recommandé d'attacher le gestionnaire d'évènement directement à l'objet `window` plutôt qu'à `HTMLBodyElement`.

Cet évènement n'est pas annulable et ne se propage pas.

## Syntaxe

On utilisera le nom de l'évènement dans des méthodes telles que {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou on définira une propriété gestionnaire d'évènements.

```js-nolint
addEventListener("load", (event) => { })

onload = (event) => { }
```

## Type d'évènement

Un objet générique {{DOMxRef("Event")}}.

## Exemples

Cet exemple affiche un message à l'écran chaque fois que l'élément HTML {{HTMLElement("img")}} charge sa ressource avec succès.

### HTML

```html
<img
  id="image"
  src="/shared-assets/images/examples/favicon144.png"
  alt="Logo MDN"
  width="72" />
<div><button>Recharger</button></div>
```

### JavaScript

```js
const image = document.getElementById("image");
image.onload = () => {
  document.body.appendChild(document.createElement("div")).textContent =
    "Chargée !";
};

document.querySelector("button").addEventListener("click", reload);

function reload() {
  image.src = "/shared-assets/images/examples/favicon144.png";
}
```

### Résultat

{{EmbedLiveSample("Exemples", "100%", 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Évènements associés&nbsp;:
  - L'évènement {{DOMxRef("Window/load_event", "load")}} de Window
  - L'évènement {{DOMxRef("Window/error_event", "error")}} de Window
