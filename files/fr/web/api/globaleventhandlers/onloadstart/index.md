---
title: GlobalEventHandlers.onloadstart
slug: Web/API/GlobalEventHandlers/onloadstart
tags:
  - API
  - DOM
  - Gestionnaires d'évènements
  - Propriétés
  - évènements
translation_of: Web/API/GlobalEventHandlers/onloadstart
---
{{ApiRef}}

La propriété **`onloadstart`** du "mixin" {{domxref("GlobalEventHandlers")}} est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque l'évènement {{event("loadstart")}} est déclenché (quand la progression est commencée sur le chargement d'une ressource).

## Syntaxe

    img.onloadstart = funcRef;

### Valeur

`funcRef` est la fonction du gestionnaire à appeler lorsque l'évènement `loadstart` de la ressource est déclenché.

## Exemples

### Contenu HTML

```html
<img src="myImage.jpg">
```

### Contenu JavaScript

```js
// 'loadstart' est lancé le premier, puis 'load', puis 'loadend'

image.addEventListener('load', function(e) {
  console.log('Image loaded');
});

image.addEventListener('loadstart', function(e) {
  console.log('Image load started');
});

image.addEventListener('loadend', function(e) {
  console.log('Image load finished');
});
```

## Spécifications

| Spécification                                                                                                | Statut                           | Commentaire          |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------------------- |
| {{SpecName("HTML WHATWG", "webappapis.html#handler-onloadstart", "onloadstart")}} | {{Spec2("HTML WHATWG")}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.GlobalEventHandlers.onloadstart")}}
