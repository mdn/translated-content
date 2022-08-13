---
title: Selectores de tipo
slug: Web/CSS/Type_selectors
tags:
  - CSS
  - Principiante
  - Referencia CSS
  - Selectores
translation_of: Web/CSS/Type_selectors
---
{{CSSRef}}El selector de tipo CSS selecciona elementos por nombre de nodo. En otras palabras, selecciona todos los elementos del tipo dado dentro de un documento.

```css
/* Todos los elementos <a> */
a {
  color: red;
}
```

## Sintaxis

    element { style properties }

## Ejemplo

### CSS

```css
span {
  background-color: skyblue;
}
```

### HTML

```html
<span>Aquí hay un elemento 'span' con algo de texto.</span>
<p>Aquí hay un elemento 'p' con algo de texto.</p>
<span>Aquí hay un elemento 'span' con más texto.</span>
```

### Resultado

{{EmbedLiveSample('Ejemplo', 200, 150)}}

## Especificaciones

| Especificación                                                                                           | Estado                               | Comentarios         |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------- |
| {{SpecName('CSS4 Selectors', '#type-selectors', 'Type (tag name) selector')}} | {{Spec2('CSS4 Selectors')}} | Ningún cambio.      |
| {{SpecName('CSS3 Selectors', '#type-selectors', 'type selectors')}}                 | {{Spec2('CSS3 Selectors')}} | Ningún cambio.      |
| {{SpecName('CSS2.1', 'selector.html#type-selectors', 'type selectors')}}         | {{Spec2('CSS2.1')}}             |                     |
| {{SpecName('CSS1', '#basic-concepts', 'type selectors')}}                             | {{Spec2('CSS1')}}             | Definición inicial. |

## Compatibilidad con navegadores

{{Compat("css.selectors.type")}}
