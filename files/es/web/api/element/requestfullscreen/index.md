---
title: Element.requestFullscreen()
slug: Web/API/Element/requestFullScreen
tags:
  - Pantalla completa
translation_of: Web/API/Element/requestFullScreen
---
{{APIRef("DOM")}}{{seeCompatTable}}

Asynchronously requests that the element be made full-screen.

## Syntax

    element.mozRequestFullScreen();

## Notas

No esta garantizado que el elemento se cambie a modo pantalla completa. Si la autorización para entrar a modo pantalla completa es permitida, el documento obtendrá un evento "mozfullscreenchange" para hacerle saber que esta en modo pantalla completa en ese momento. Si la autorización es denegada, el documento obtiene un evento "mozfullscreenerror".

Ve a [Using full-screen mode](/es/docs/Web/Guide/API/DOM/Using_full_screen_mode) para mas detalles y ejemplos.

## Especificaciones

| Specification                                                                                                            | Status                           | Comment            |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------ |
| {{SpecName("Fullscreen", "#dom-element-requestfullscreen", "Element.requestFullScreen()")}} | {{Spec2("Fullscreen")}} | Initial definition |

## Compatibilidad con navegadores

{{Compat("api.Element.requestFullscreen")}}

## Mira también

- [Using full-screen mode](/es/docs/Web/Guide/API/DOM/Using_full_screen_mode)
- {{domxref("document.mozCancelFullScreen()")}}
- {{domxref("document.mozFullScreen")}}
- {{domxref("document.mozFullScreenElement")}}
- {{domxref("document.mozFullScreenEnabled")}}
- {{cssxref(":-moz-full-screen")}}
- {{HTMLAttrXRef("allowfullscreen", "iframe")}}
