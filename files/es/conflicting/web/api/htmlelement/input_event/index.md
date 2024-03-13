---
title: GlobalEventHandlers.oninput
slug: conflicting/Web/API/HTMLElement/input_event
original_slug: Web/API/GlobalEventHandlers/oninput
---

{{ ApiRef("HTML DOM") }}

Un controlador de eventos para el evento input en la ventana. El evento input es llamado cuando el valor de un elemento {{ HTMLElement("input") }} ha cambiado.

Este evento se propaga. Si está soportado en la ventana, también estará soportado en elementos {{ HTMLElement("input") }}.

## Ejemplo

```html
<script>

window.addEventListener('input', function (e) {
 console.log("Evento keyup detectado! proveniente de este elemento:", e.target);
}, false);

</script>

<input placeholder="Tipee aquí y vea la consola.">
```

## Vea también

- [Un laberinto de navegadores HTML5, soporte para oninput](http://blog.danielfriesen.name/2010/02/16/html5-browser-maze-oninput-support/)
- [Corrigiendo oninput en IE con html5Widgets](http://www.useragentman.com/blog/2011/05/12/fixing-oninput-in-ie9-using-html5widgets/) incluye cobertura para IE6-8
- Mathias Bynens sugiere [enlazando a input y keydown](http://mathiasbynens.be/notes/oninput)
- [evento oninput | dottoro](http://help.dottoro.com/ljhxklln.php) posee notas acerca de bugs en IE9
