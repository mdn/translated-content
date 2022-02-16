---
title: Window.captureEvents()
slug: Web/API/Window/captureEvents
tags:
  - API
  - Gecko
  - HTML DOM
  - Méthode
  - Non-standard
translation_of: Web/API/Window/captureEvents
---
{{ ApiRef() }} {{deprecated_header(1.9)}} {{Non-standard_header}}

La méthode **`Window.captureEvents()`** enregistre la fenêtre pour capturer tous les événements du type spécifié.

## Syntaxe

    window.captureEvents(eventType)

`eventType` est une combinaison des valeurs suivantes: `Event.ABORT`, `Event.BLUR`, `Event.CLICK`, `Event.CHANGE`, `Event.DBLCLICK`, `Event.DRAGDDROP`, `Event.ERROR`, `Event.FOCUS`, `Event.KEYDOWN`, `Event.KEYPRESS`, `Event.KEYUP`, `Event.LOAD`, `Event.MOUSEDOWN`, `Event.MOUSEMOVE`, `Event.MOUSEOUT`, `Event.MOUSEOVER`, `Event.MOUSEUP`, `Event.MOVE`, `Event.RESET`, `Event.RESIZE`, `Event.SELECT`, `Event.SUBMIT`, `Event.UNLOAD`.

## Exemple

```html
<!DOCTYPE html>
<html lang="fr">
<head>
<!-- ... -->
<script>
function reg() {
  window.captureEvents(Event.CLICK);
  window.onclick = page_click;
}

function page_click() {
  alert('événement de clic sur la page détecté!');
}
</script>
</head>

<body onload="reg();">
<p>cliquez n'importe où sur cette page.</p>
</body>
</html>
```

## Notes

Les événements déclenchés dans le DOM par l'activité de l'utilisateur (tels que cliquer sur des boutons ou déplacer le focus loin du document actuel) passent généralement par la [`window`](/en-US/docs/Web/API/Window) de haut niveau et les objets de` `[`document`](/en-US/docs/Web/API/document) avant d'arriver à l'objet qui a déclenché l'événement.

Lorsque vous appelez la méthode `captureEvents()` sur [`window`](/en-US/docs/Web/API/Window), événements du type que vous spécifier (par exemple, `Event.CLICK`) ne passe plus par les objets "inférieurs" de la hiérarchie. Pour que les événements "bouillonnent" comme ils le font normalement, vous devez appeler` `[`window.releaseEvents()`](/en-US/docs/Web/API/window.releaseEvents) ({{deprecated_inline}}) sur la fenêtre pour l'empêcher de piéger les événements.

Notez que vous pouvez transmettre une liste d'événements à cette méthode en utilisant la syntaxe suivante : `window.captureEvents(Event.KEYPRESS | Event.KEYDOWN | Event.KEYUP)`.

## Spécification

Cela ne fait partie d'aucune spécification.
