---
title: "Window : évènement resize"
short-title: resize
slug: Web/API/Window/resize_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

L'évènement **`resize`** de l'interface {{DOMxRef("Window")}} se déclenche lorsque la vue du document (fenêtre) a été redimensionnée.

Cet évènement n'est pas annulable et ne se propage pas.

Dans certains navigateurs plus anciens, il était possible d'enregistrer des gestionnaires d'évènements `resize` sur n'importe quel élément HTML. Il est toujours possible de définir des attributs `onresize` ou d'utiliser {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}} pour définir un gestionnaire sur n'importe quel élément. Cependant, les évènements `resize` ne sont déclenchés que sur l'objet {{DOMxRef("Window")}} (c'est-à-dire retourné par {{DOMxRef("document.defaultView")}}). Seuls les gestionnaires enregistrés sur l'objet `window` recevront les évènements `resize`.

Bien que l'évènement `resize` ne se déclenche que pour la fenêtre de nos jours, vous pouvez obtenir des notifications de redimensionnement pour d'autres éléments en utilisant l'API {{DOMxRef("ResizeObserver")}}.

Si l'évènement de redimensionnement est déclenché trop souvent pour votre application, consultez [optimiser window.onresize <sup>(angl.)</sup>](https://bencentra.com/code/2015/02/27/optimizing-window-resize.html) pour contrôler le temps après lequel l'évènement se déclenche.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènements.

```js-nolint
addEventListener("resize", (event) => { })

onresize = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("Event")}} générique.

## Exemples

### Journaliser l'évolution de la taille de la fenêtre

L'exemple suivant affiche la taille de la fenêtre à chaque fois qu'elle est redimensionnée.

#### HTML

```html
<p>
  Redimensionnez la fenêtre pour déclencher l'évènement
  <code>resize</code>.
</p>
<p>Hauteur de la fenêtre&nbsp;: <span id="height"></span></p>
<p>Largeur de la fenêtre&nbsp;: <span id="width"></span></p>
```

#### JavaScript

```js
const sortieHauteur = document.querySelector("#height");
const sortieLargeur = document.querySelector("#width");

function journaliserTailleFenetre() {
  sortieHauteur.textContent = window.innerHeight;
  sortieLargeur.textContent = window.innerWidth;
}

window.onresize = journaliserTailleFenetre;
```

#### Résultat

{{EmbedLiveSample("Journaliser l'évolution de la taille de la fenêtre")}}

> [!NOTE]
> L'exemple ci-dessus est affiché dans un {{HTMLElement("iframe")}}, donc les valeurs de largeur et de hauteur rapportées concernent le `<iframe>`, et non la fenêtre dans laquelle cette page se trouve. En particulier, il sera difficile d'ajuster la taille de la fenêtre pour voir une différence dans la hauteur rapportée.
>
> L'effet est plus facile à voir si vous {{LiveSampleLink("Journaliser l'évolution de la taille de la fenêtre", "affichez l'exemple dans sa propre fenêtre")}}.

### Équivalent `addEventListener`

Vous pouvez configurer le gestionnaire d'évènements en utilisant la méthode {{DOMxRef("EventTarget/addEventListener", "addEventListener()")}}&nbsp;:

```js
window.addEventListener("resize", journaliserTailleFenetre);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
