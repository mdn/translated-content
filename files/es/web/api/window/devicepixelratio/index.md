---
title: Window.devicePixelRatio
slug: Web/API/Window/devicePixelRatio
translation_of: Web/API/Window/devicePixelRatio
---
{{APIRef}}

La propiedad de sólo-lectura `Window.devicePixelRatio` retorna la relación de tamaño (vertical) de un pixel físico en el dispositivo de visualización actual respecto del de un dispositivo de tamaño de pixel independiente (dips).

No hay retrofunciones o eventos a escuchar cuando este valor cambia (por ejemplo, si usted arrastra la ventana entre displays con diferentes densidades de pixels).

## Sintaxis

```js
value = window.devicePixelRatio;
```

## Especificación

| Especificación                                                                                                   | Estado                           | Observaciones      |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------ |
| {{SpecName("CSSOM View", "#dom-window-devicepixelratio", "Window.devicePixelRatio")}} | {{Spec2("CSSOM View")}} | Definición inicial |

## Compatibilidad con navegadores

{{Compat("api.Window.devicePixelRatio")}}

## Ver también

- [consultas de resolución de medio CSS](/es/docs/Web/CSS/@media/resolution)
- PPK hace alguna [iinvestigación en devicePixelRatio](http://www.quirksmode.org/blog/archives/2012/06/devicepixelrati.html)
