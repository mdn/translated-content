---
title: ":fullscreen"
slug: Web/CSS/:fullscreen
---

{{CSSRef}} {{SeeCompatTable}}

La [pseudo-clase](/es/docs/Web/CSS/Pseudo-classes) **`:fullscreen`** de [CSS](/es/docs/Web/CSS) representa un elemento que se muestra cuando el navegador está en modo de [pantalla completa](/es/docs/Web/API/Fullscreen_API).

```css
/* Selecciona cualquier <div> que se muestre en modo de pantalla completa */
/* Implementado en Firefox, WebKit/Chrome, y Edge/IE usando prefijos;
   Edge también es compatible con la versión sin prefijo */
div:-moz-full-screen {
  background-color: pink;
}

div:-webkit-full-screen {
  background-color: pink;
}

div:fullscreen {
  background-color: pink;
}
```

> **Nota:** La especificación W3C usa la palabra única `:fullscreen`, sin guiones, pero las implementaciones experimentales de WebKit y Gecko usan una variante prefijada con dos palabras separadas por un guión: `:-webkit-full-screen` y `:-moz-full-screen`, respectivamente. Microsoft Edge e Internet Explorer utilizan la convención estándar: `:fullscreen` y `:-ms-fullscreen`, respectivamente.

## Sintaxis

{{csssyntax}}

## Ejemplo

### HTML

```html
<div id="fullscreen">
  <h1>Demostración :fullscreen</h1>
  <p>
    Este texto se pondrá grande y rojo cuando el navegador esté en modo de
    pantalla completa.
  </p>
  <button id="fullscreen-button">Entrar en pantalla completa</button>
</div>
```

```js hidden
var fullscreenButton = document.getElementById("fullscreen-button");
var fullscreenDiv = document.getElementById("fullscreen");
var fullscreenFunc = fullscreenDiv.requestFullscreen;

if (!fullscreenFunc) {
  [
    "mozRequestFullScreen",
    "msRequestFullscreen",
    "webkitRequestFullScreen",
  ].forEach(function (req) {
    fullscreenFunc = fullscreenFunc || fullscreenDiv[req];
  });
}

function enterFullscreen() {
  fullscreenFunc.call(fullscreenDiv);
}

fullscreenButton.addEventListener("click", enterFullscreen);
```

```css hidden
#fullscreen:-moz-full-screen {
  padding: 42px;
  background-color: pink;
  border: 2px solid #f00;
  font-size: 200%;
}
#fullscreen:-webkit-full-screen {
  padding: 42px;
  background-color: pink;
  border: 2px solid #f00;
  font-size: 200%;
}

#fullscreen:-moz-full-screen > h1 {
  color: red;
}
#fullscreen:-webkit-full-screen > h1 {
  color: red;
}

#fullscreen:-moz-full-screen > p {
  color: darkred;
}
#fullscreen:-webkit-full-screen > p {
  color: darkred;
}

#fullscreen:-moz-full-screen > button {
  display: none;
}
#fullscreen:-webkit-full-screen > button {
  display: none;
}
```

### CSS

```css
#fullscreen:fullscreen {
  padding: 42px;
  background-color: pink;
  border: 2px solid #f00;
  font-size: 200%;
}

#fullscreen:fullscreen > h1 {
  color: red;
}

#fullscreen:fullscreen > p {
  color: darkred;
}

#fullscreen:fullscreen > button {
  display: none;
}
```

### Resultado

{{ LiveSampleLink('Ejemplo', "Haga clic aquí para probar este ejemplo.") }}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Usando el modo de pantalla completa](/es/docs/Web/API/Fullscreen_API)
- {{cssxref("::backdrop")}}
- DOM API: {{ domxref("Element.requestFullscreen()") }}, {{ domxref("Document.exitFullscreen()") }}, {{ domxref("Document.fullscreen") }}, {{ domxref("Document.fullscreenElement") }}
- Atributo [`allowfullscreen`](/es/docs/Web/HTML/Element/iframe#allowfullscreen)
