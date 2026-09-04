---
title: ::cue
slug: Web/CSS/Reference/Selectors/::cue
original_slug: Web/CSS/::cue
---

El [pseudo-elemento](/es/docs/Web/CSS/Reference/Selectors/Pseudo-elements) [CSS](/es/docs/Web/CSS) **`::cue`** señala las pistas de texto [WebVTT](/es/docs/Web/API/WebVTT_API) dentro del elemento seleccionado. Esto puede ser usado para [estilizar subtítulos y otras pistas de texto](/es/docs/Web/API/WebVTT_API#Estilizando_anotaciones_WebVTT) multimedia con pistas de texto.

```css
::cue {
  color: yellow;
  font-weight: bold;
}
```

Las propiedades son aplicadas al cojunto completo de anotaciones como si fuesen una unidad. La única excepción es que `background` y sus versiones largas se aplican a cada pista de texto individualmente para evitar crear cajas y oscurecer inesperadamente grandes partes de los archivos multimedia.

## Sintaxis

{{CSSSyntax}}

## Propiedades permitidas

Las reglas cuyos selectores incluyen este elemento solo pueden usar las siguientes propiedades CSS:

- [`background`](/es/docs/Web/CSS/Reference/Properties/background)
- [`background-attachment`](/es/docs/Web/CSS/Reference/Properties/background-attachment)
- [`background-clip`](/es/docs/Web/CSS/Reference/Properties/background-clip)
- [`background-color`](/es/docs/Web/CSS/Reference/Properties/background-color)
- [`background-image`](/es/docs/Web/CSS/Reference/Properties/background-image)
- [`background-origin`](/es/docs/Web/CSS/Reference/Properties/background-origin)
- [`background-position`](/es/docs/Web/CSS/Reference/Properties/background-position)
- [`background-repeat`](/es/docs/Web/CSS/Reference/Properties/background-repeat)
- [`background-size`](/es/docs/Web/CSS/Reference/Properties/background-size)
- [`color`](/es/docs/Web/CSS/Reference/Properties/color)
- [`font`](/es/docs/Web/CSS/Reference/Properties/font)
- [`font-family`](/es/docs/Web/CSS/Reference/Properties/font-family)
- [`font-size`](/es/docs/Web/CSS/Reference/Properties/font-size)
- [`font-stretch`](/es/docs/Web/CSS/font-stretch)
- [`font-style`](/es/docs/Web/CSS/Reference/Properties/font-style)
- [`font-variant`](/es/docs/Web/CSS/Reference/Properties/font-variant)
- [`font-weight`](/es/docs/Web/CSS/Reference/Properties/font-weight)
- [`line-height`](/es/docs/Web/CSS/Reference/Properties/line-height)
- [`opacity`](/es/docs/Web/CSS/Reference/Properties/opacity)
- [`outline`](/es/docs/Web/CSS/Reference/Properties/outline)
- [`outline-color`](/es/docs/Web/CSS/Reference/Properties/outline-color)
- [`outline-style`](/es/docs/Web/CSS/Reference/Properties/outline-style)
- [`outline-width`](/es/docs/Web/CSS/Reference/Properties/outline-width)
- [`ruby-position`](/es/docs/Web/CSS/ruby-position)
- [`text-combine-upright`](/es/docs/Web/CSS/text-combine-upright)
- [`text-decoration`](/es/docs/Web/CSS/Reference/Properties/text-decoration)
- [`text-decoration-color`](/es/docs/Web/CSS/Reference/Properties/text-decoration-color)
- [`text-decoration-line`](/es/docs/Web/CSS/Reference/Properties/text-decoration-line)
- [`text-decoration-style`](/es/docs/Web/CSS/Reference/Properties/text-decoration-style)
- [`text-decoration-thickness`](/es/docs/Web/CSS/text-decoration-thickness)
- [`text-shadow`](/es/docs/Web/CSS/Reference/Properties/text-shadow)
- [`visibility`](/es/docs/Web/CSS/Reference/Properties/visibility)
- [`white-space`](/es/docs/Web/CSS/Reference/Properties/white-space)

## Ejemplos

### Estilizando las anotaciones WebVTT como blanco sobre negro

El siguiente CSS ajusta el estilo de las anotaciones para que el texto sea blanco y el fondo sea una caja negro translúcido.

```css
::cue {
  color: #fff;
  background-color: rgba(0, 0, 0, 0.6);
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Formato de pistas de texto para la web (WebVTT)](/es/docs/Web/API/WebVTT_API)
- {{HTMLElement("track")}}, {{HTMLElement("video")}}
