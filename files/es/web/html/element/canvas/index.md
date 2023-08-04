---
title: canvas
slug: Web/HTML/Element/canvas
---

El elemento HTML _canvas_ (\<canvas>) se puede utilizar para dibujar gráficos a través de secuencias de comandos (por lo general [JavaScript](/en/JavaScript) ). Por ejemplo, puede usarse para dibujar gráficos, hacer composiciones de fotos o incluso realizar animaciones.

Las aplicaciones de Mozilla adquirieron la compatibilidad con `<canvas>` a partir de Gecko 1.8 (es decir, [Firefox 1.5](/en/Firefox_1.5_for_developers) ). El elemento fue originalmente introducido por Apple en el OS X [Dashboard](http://www.apple.com/macosx/features/dashboard/) y Safari. Internet Explorer, antes de la versión 9.0 beta, no admite de forma nativa `<canvas>` , pero una página puede de hecho añadir la compatibilidad mediante la inclusión de un script del proyecto [Explorer Canvas](http://excanvas.sourceforge.net/) de Google. Opera 9 también es compatible con `<canvas>` .

Para más artículos sobre canvas, consulta la [página del tema canvas](/es/HTML/Canvas) .

## Contexto de uso

| Contenido permitido            | Transparente, ya sea [contenido estático](/en/HTML/Content_categories#phrasing_content) o [contenido dinámico](/en/HTML/Content_categories#flow_content) . |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Omisión de etiquetas           | Ninguna, deben estar presentes tanto las etiquetas de inicio como las de cierre                                                                            |
| Elementos primarios permitidos | Cualquier elemento que acepte contenido dinámico o cualquier otro elemento que acepte contenido estático .                                                 |
| Documento normativo            | [HTML 5, sección 4.8.10](http://www.w3.org/TR/html5/the-canvas-element.html#the-canvas-element)                                                            |

## Atributos

- `width`
  - : La anchura del espacio de coordenadas en píxeles CSS. El valor predeterminado es 300.
- `height`
  - : La altura del espacio de coordenadas en píxeles CSS. El valor predeterminado es 150.

> **Nota:** el tamaño del lienzo mostrado se puede cambiar con una hoja de estilo. La imagen se escala durante la representación para adaptarse al tamaño que se le ha aplicado estilo .

## Interfaz DOM

- [HTMLCanvasElement](/en/DOM/HTMLCanvasElement)

## Ejemplo

```html
<canvas id="canvas" width="300" height="300">
  Tu navegador no admite el elemento &lt;canvas&gt;.
</canvas>
```

## Sobre Accesibilidad

El elemento [`<canvas>`](/es/docs/Web/HTML/Element/canvas) es simplemente un bitman que no provee ninguna información adicional sobre los elementos que tiene dibujados. El contenido de la etiqueta `canvas` no se muestra a los lectores de pantalla como otras etiquetas semánticas. Como regla general, deberías evitar utilizar canvas en un sitio accesible.

Para mejorar la accesibilidad de la etiquetas puedes leer los siguientes artículos (en inglés):

- [MDN Hit regions and accessability](/es/docs/Web/API/Canvas_API/Tutorial/Hit_regions_and_accessibility)
- [Canvas accessibility use cases](https://www.w3.org/WAI/PF/HTML/wiki/Canvas_Accessibility_Use_Cases)
- [Canvas element accessibility issues](https://www.w3.org/html/wg/wiki/AddedElementCanvas)
- [HTML5 Canvas Accessibility in Firefox 13 – by Steve Faulkner](http://www.paciellogroup.com/blog/2012/06/html5-canvas-accessibility-in-firefox-13/)
- [Best practices for interactive canvas elements](https://html.spec.whatwg.org/multipage/scripting.html#best-practices)

## Consulta también

- [Tema sobre canvas](/es/HTML/Canvas)
