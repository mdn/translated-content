---
title: outline-width
slug: Web/CSS/outline-width
tags:
  - Contorno CSS
  - Propiedad CSS
translation_of: Web/CSS/outline-width
---
{{CSSRef}}

## Resumen

La propiedad CSS **`outline-width`** es usada para establecer el grosor del contorno de un elemento. Un contorno es una línea que se dibuja al rededor de los elementos, fuera de los límites del borde, para resaltar al elemento:

{{cssinfo}}

## Sintaxis

```css
/* Valores clave */
outline-width: thin;
outline-width: medium;
outline-width: thick;

/* Valores <length> */
outline-width: 1px;
outline-width: 0.1em;

/* Valores globales */
outline-width: inherit;
```

### Valores

- `thin`
  - : Depende del Agente Usuario. Generalmente **1px** en navegadores de escritorio como Firefox.
- `medium`
  - : Depende del Agente Usuario. Generalmente **3px** en navegadores de escritorio como Firefox.
- `thick`
  - : Depende del Agente Usuario. Generalmente **5px** en navegadores de escritorio como Firefox.
- `<length>`
  - : Ver valores {{cssxref("&lt;length&gt;")}}.

### Sintaxis formal

{{csssyntax}}

## Ejemplos

### Contenido HTML

```html
<span id="thin">thin</span>
<span id="medium">medium</span>
<span id="thick">thick</span>
<span id="twopixels">2px</span>
<span id="oneex">1ex</span>
<span id="twoem">2em</span>
```

### Contenido CSS

```css
span {
  outline-style: solid;
  display: inline-block;
  margin: 20px;
}

#thin {
  outline-width: thin;
}

#medium {
  outline-width: medium;
}

#thick {
  outline-width: thick;
}

#twopixels {
  outline-width: 2px;
}

#oneex {
  outline-width: 1ex;
}

#twoem {
  outline-width: 2em;
}
```

{{EmbedLiveSample('Examples', '100%', '80')}}

## Especificaciones

| Especificación                                                                                   | Estado                                   | Comentarios                                                  |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------- | ------------------------------------------------------------ |
| {{SpecName('CSS3 Basic UI', '#outline-width', 'outline-width')}}             | {{Spec2('CSS3 Basic UI')}}     | Sin cambios                                                  |
| {{SpecName('CSS3 Transitions', '#animatable-css', 'outline-width')}}     | {{Spec2('CSS3 Transitions')}} | Define `outline-width` como propiedad que puede ser animada. |
| {{SpecName('CSS2.1', 'ui.html#propdef-outline-width', 'outline-width')}} | {{Spec2('CSS2.1')}}                 | Definición inicial                                           |

## Compatibilidad de navegadores

{{Compat("css.properties.outline-width")}}
