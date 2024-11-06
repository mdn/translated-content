---
title: Window.opener
slug: Web/API/Window/opener
---

{{APIRef}}

## Resumen

Devuelve una referencia de, la ventana que abrió la ventana actuál.

## Sintaxis

```js
objRef = window.opener;
```

## Ejemplo

```js
if (window.opener != indexWin) {
  referToTop(window.opener);
}
```

## Notas

Cuando una ventana es abierta desde otra utilizando "Window\.open()", esta, mantiene una referencia a la primera mediante "window\.opener". Si la ventana actuál no fué abierta, el metodo retorna NULL.

El navegador de Windows Phone no soporta window\.opener. Tampoco es soportado en Internet Explorer si la ventana nueva se encuentra en una zona de seguridad distinta.
