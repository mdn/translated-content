---
title: EventListener
slug: conflicting/Web/API/EventTarget/addEventListener
translation_of: Web/API/EventListener
original_slug: Web/API/EventListener
browser-compat: api.EventListener
---
{{APIRef("DOM Events")}}

L'interface **`EventListener`** représente un objet qui peut gérer un évènement diffusé par un objet [`EventTarget`](/fr/docs/Web/API/EventTarget).

> **Note :** En raison du besoin de compatibilité avec le contenu existant, `EventListener` accepte à la fois une fonction et un objet avec une fonction de propriété `handleEvent`. Ceci est illustré dans l'[exemple](#exemple) ci-dessous.

## Propriétés

_Cette interface n'implémente ni n'hérite d'aucune propriété._

## Méthodes

_Cette interface n'hérite d'aucune méthode._

- [`EventListener.handleEvent()`](/fr/docs/Web/API/EventListener/handleEvent)
  - : Une fonction qui est appelée lorsque se produit un événement du type spécifié.

## Exemple

### HTML

```html
<button id="btn">Cliquez ici !</button>

<p id="funcOutput"></p>
<p id="handleEvtOutput"></p>
```

### JavaScript

```js
const buttonElement = document.getElementById('btn');
const funcOutput = document.getElementById('funcOutput');
const handleEvtOutput = document.getElementById('handleEvtOutput');

// On ajoute un gestionnaire pour l'évènement 'click' en fournissant
// une fonction de rappel (callback).
// Lorsqu'on clique sur l'élément, la sortie "Élément cliqué avec une fonction !"
// apparaîtra dans le paragraphe avec l'identifiant "funcOut".
buttonElement.addEventListener('click', function (event) {
  funcOutput.textContent = 'Élément cliqué avec une fonction !';
});

// À des fins de compatibilité, un objet qui n'est pas une fonction
// mais qui possède une propriété `handleEvent` sera traité comme si
// cette propriété avait été passée comme argument fonctionnel.
// La sortie "Élément cliqué via la propriété handleEvent !"
// apparaîtra simultanément dans le paragraphe avec l'identifiant
// "handleEvtOutput".
buttonElement.addEventListener('click', {
  handleEvent: function (event) {
    handleEvtOutput.textContent = 'Élément cliqué via la propriété handleEvent !';
  }
});
```

### Résultat

{{EmbedLiveSample('Exemple')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

### See also

- [`addEventListener`](/fr/docs/Web/API/EventTarget/addEventListener)
