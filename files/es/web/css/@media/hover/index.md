---
title: hover
slug: Web/CSS/@media/hover
tags:
  - '@media'
  - CSS
  - Consulta de medios
  - Media Queires
  - Referencia
  - característica de medios
  - media feature
translation_of: Web/CSS/@media/hover
---
{{cssref}}

La [característica de medios CSS](/es/docs/CSS) **`hover`**, puede se utilizada para probar si el mecanismo de entrada primario de un usuario puede flotar sobre los elementos.

## Sintaxis

La característica hover es especificada como un valor de palabra clave elegida de la siguiente lista.

- `none`
  - : El mecanismo de entrada primario no puede flotar o no puede convenientemente flotar (es decir, algunos dispositivos mobiles emulan la flotación cuando el usuario presiona inconvenientemente por bastante rato la pantalla), o no hay mecanismo de puntero primario.
- `hover`
  - : El mecanismo de entrada primario puede convenientemente flotar sobre los elementos.

## Ejemplo

### HTML

```html
<a href="#">Try hovering over me!</a>
```

### CSS

```css
@media (hover: hover) {
  a:hover {
    background: yellow;
  }
}
```

### Resultado

{{EmbedLiveSample("Example")}}

## Especificaciones

| Especificación                                                           | Estado                                   | Comentario          |
| ------------------------------------------------------------------------ | ---------------------------------------- | ------------------- |
| {{SpecName('CSS4 Media Queries', '#hover', 'hover')}} | {{Spec2('CSS4 Media Queries')}} | Definición inicial. |

## Compatibilidad de los navegadores

{{Compat("css.at-rules.media.hover")}}
