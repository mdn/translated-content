---
title: EventListener
slug: Web/API/EventListener
tags:
  - API
  - DOM
  - Evènement
  - Interface
  - Écouteurs
translation_of: Web/API/EventListener
---
{{APIRef("DOM Events")}}

L'interface **`EventListener`** représente un objet qui peut gérer un évènement distribué par un objet {{domxref("EventTarget")}}.

> **Note :** En raison du besoin de compatibilité avec le contenu existant, `EventListener` accepte à la fois une fonction et un objet avec une fonction de propriété `handleEvent`. Ceci est illustré dans l'exemple ci-dessous.

## Propriétés

_Cette interface n'implémente ni n'hérite d'aucune propriété._

## Méthodes

_Cette interface n'hérite d'aucune méthode._

- {{domxref("EventListener.handleEvent()")}}
  - : une fonction qui est appelée lorsque se produit un événement du type spécifié.

## Exemple

### HTML

```html
<button id="btn">Click here!</button>
```

### JavaScript



```js
const buttonElement = document.getElementById('btn');

// Ajoute un gestionnaire pour l'évènement 'click' qui fournit une fonction de rappel.
// Chaque fois que l'élément est cliqué, une fenêtre contextuelle avec "Élément clické!"
// apparaîtra.
buttonElement.addEventListener('click', function (event) {
  alert('Element clicked through function!');
});

// Pour la compatibilité, un objet qui n'est pas une fonction avec une propriété `handleEvent` (gestion d'évènement)
// sera traitée exactement comme la fonction elle-même.
buttonElement.addEventListener('click', {
  handleEvent: function (event) {
    alert('Element clicked through handleEvent property!');
  }
});
```

### Résultat

{{EmbedLiveSample('Example')}}

## Spécifications

| Spécification                                                                                    | Statut                           | Commentaire          |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | -------------------- |
| {{SpecName('DOM WHATWG', '#callbackdef-eventlistener', 'EventListener')}} | {{Spec2('DOM WHATWG')}} | Pas de changement.   |
| {{SpecName('DOM2 Events', '#Events-EventListener', 'EventListener')}}     | {{Spec2('DOM2 Events')}} | Définition initiale. |
