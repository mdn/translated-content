---
title: Window.captureEvents()
slug: Web/API/Window/captureEvents
---

{{ ApiRef() }} {{deprecated_header(1.9)}} {{Non-standard_header}}

La méthode **`Window.captureEvents()`** enregistre la fenêtre pour capturer tous les événements du type spécifié.

## Syntaxe

```js
window.captureEvents(eventType);
```

`eventType` est une combinaison des valeurs suivantes: `Event.ABORT`, `Event.BLUR`, `Event.CLICK`, `Event.CHANGE`, `Event.DBLCLICK`, `Event.DRAGDDROP`, `Event.ERROR`, `Event.FOCUS`, `Event.KEYDOWN`, `Event.KEYPRESS`, `Event.KEYUP`, `Event.LOAD`, `Event.MOUSEDOWN`, `Event.MOUSEMOVE`, `Event.MOUSEOUT`, `Event.MOUSEOVER`, `Event.MOUSEUP`, `Event.MOVE`, `Event.RESET`, `Event.RESIZE`, `Event.SELECT`, `Event.SUBMIT`, `Event.UNLOAD`.

## Exemple

```html
<!doctype html>
<html lang="fr">
  <head>
    <!-- ... -->
    <script>
      function reg() {
        window.captureEvents(Event.CLICK);
        window.onclick = page_click;
      }

      function page_click() {
        alert("événement de clic sur la page détecté!");
      }
    </script>
  </head>

  <body onload="reg();">
    <p>cliquez n'importe où sur cette page.</p>
  </body>
</html>
```

## Notes

Les évènements déclenchés dans le DOM par l'activité de l'utilisatrice ou l'utilisateur (tels que cliquer sur des boutons ou déplacer le focus loin du document actuel) passent généralement par la [`window`](/fr/docs/Web/API/Window) de haut niveau et les objets de [`document`](/fr/docs/Web/API/Document) avant d'arriver à l'objet qui a déclenché l'évènement.

Lorsque vous appelez la méthode `captureEvents()` sur [`window`](/fr/docs/Web/API/Window), les évènements du type que vous spécifiez (par exemple, `Event.CLICK`) ne passent plus par les objets «&nbsp;inférieurs&nbsp;» de la hiérarchie. Pour que les évènements «&nbsp;bouillonnent&nbsp;» comme ils le font normalement, vous devez appeler [`window.releaseEvents()`](/fr/docs/Web/API/Window/releaseEvents) ({{deprecated_inline}}) sur la fenêtre pour l'empêcher de piéger les évènements.

Notez que vous pouvez transmettre une liste d'événements à cette méthode en utilisant la syntaxe suivante : `window.captureEvents(Event.KEYPRESS | Event.KEYDOWN | Event.KEYUP)`.

## Spécification

Cela ne fait partie d'aucune spécification.
