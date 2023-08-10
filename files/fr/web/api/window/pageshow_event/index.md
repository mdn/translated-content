---
title: pageshow
slug: Web/API/Window/pageshow_event
---

L'évènement `pageshow` est émis lorsqu'une entrée dans un historique de session est atteinte (cela comprend les boutons précédent / suivant ainsi que l'affichage initial de la page après l'évènement `onload`).

## Informations générales

- Spécification
  - : [HTML5](http://www.whatwg.org/specs/web-apps/current-work/multipage/history.html#event-pageshow)
- Interface
  - : [PageTransitionEvent](/fr/docs/Web/API/PageTransitionEvent)
- Bouillonne
  - : Non
- Annulable
  - : Non
- Cible
  - : Document (dispatché sur Window)
- Action par défaut
  - : Aucune

## Propriétés

| Propriété                       | Type                       | Description                                               |
| ------------------------------- | -------------------------- | --------------------------------------------------------- |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | La cible de l'évènement (la plus haute dans l'arbre DOM). |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}   | Le type d'évènement.                                      |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}      | Si l'évènement bouillonne en temps normal ou non.         |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}      | Si l'évènement est annulable ou non.                      |
| `persisted` {{readonlyInline}}  | {{jsxref("boolean")}}      | Si l'entrée est chargée depuis le cache ou non.           |

## Exemples

L'exemple suivant va afficher dans la console des informations sur l'évènement `pageshow`, qui est émis à l'utilisation des boutons précédent / suivant, et pas uniquement après `onload`&nbsp;:

```js
window.addEventListener("pageshow", function (event) {
  console.log("pageshow:");
  console.log(event);
});
```

Bien que ce ne soit pas la meilleure pratique, vous pouvez également ajouter l'évènement comme un attribut sur la balise `<body>`, de la même manière que `onload`&nbsp;:

```html
<body onload="myonload()" onpageshow="mypageshowcode()"></body>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("Window.pagehide_event", "pagehide")}}
