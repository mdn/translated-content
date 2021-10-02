---
title: Window.name
slug: Web/API/Window/name
tags:
  - API
  - HTML DOM
  - Propriété
  - Reference
translation_of: Web/API/Window/name
---
{{APIRef}}

## En bref

Récupère ou définit le nom de la fenêtre.

## Syntaxe

```js
string = window.name;
window.name = string;
```

## Exemple

```js
window.name = "lab_view";
```

## Notes

Les noms de fenêtres sont principalement utilisés pour définir les cibles de liens hypertextes et de formulaires. Les fenêtres n'ont pas besoin d'être nommées.

Les noms de fenêtres ont en outre été utilisés par quelques _frameworks_ pour le support des échanges de messages inter-domaines (par exemple [SessionVars](http://www.thomasfrank.se/sessionvars.html) et [dojox.io.windowName](http://www.sitepen.com/blog/2008/07/22/windowname-transport/) de Dojo) comme une alternative plus sécurisée à JSONP. Toutefois, les applications web modernes manipulant des données sensibles devraient utiliser l'[API postMessage](/fr/docs/Web/API/Window/postMessage) pour les échanges de messages inter-domaines plutôt que s'appuyer sur `window.name`.

## Spécifications

| Specification                                                                                | Status                           | Comment |
| -------------------------------------------------------------------------------------------- | -------------------------------- | ------- |
| {{SpecName('HTML WHATWG', 'browsers.html#dom-name', 'Window.name')}} | {{Spec2('HTML WHATWG')}} |         |
| {{SpecName('HTML5 W3C', 'browsers.html#dom-name', 'Window.name')}}     | {{Spec2('HTML5 W3C')}}     |         |
