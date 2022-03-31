---
title: Document.onfullscreenchange
slug: conflicting/Web/API/Document/fullscreenchange_event
translation_of: Web/API/Document/onfullscreenchange
original_slug: Web/API/Document/onfullscreenchange
---
{{ApiRef("Fullscreen API")}}

La propriété **`Document.onfullscreenchange`** est un gestionnaire d'événement pour l'événement {{event("fullscreenchange")}} qui est lancé lorsque le document entre ou sort du mode plein écran.

## Syntaxe

    targetDocument.onfullscreenchange = fullscreenChangeHandler;

## Exemple

```js
document.onfullscreenchange = function ( event ) {
  console.log("FULL SCREEN CHANGE")
};
document.documentElement.onclick = function () {
  // requestFullscreen() doit être un gestionnaire d'événement, sinon ça échouera
  document.documentElement.requestFullscreen();
}
```

## Specifications

| Specification                                                                                                        | Status                           | Comment             |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{SpecName("Fullscreen", "#handler-document-onfullscreenchange", "onfullscreenchange")}} | {{Spec2("HTML WHATWG")}} | Initial definition. |

## Compatibilité des navigateurs

{{Compat("api.Document.onfullscreenchange")}}

## Voir aussi

- {{event("fullscreenchange")}}
- {{domxref("Document.onfullscreenerror")}}
