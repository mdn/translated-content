---
title: Selectores de ID
slug: Web/CSS/ID_selectors
tags:
  - CSS
  - Referencia
  - Referencia CSS
  - Selectores
translation_of: Web/CSS/ID_selectors
---
{{CSSRef}}

En un documento HTML, los **selectores de ID** de CSS buscan un elemento basado en el contenido del atributo {{htmlattrxref("ID")}}. El atributo `ID` del elemento seleccionado debe coincidir exactamente con el valor dado en el selector.

```css
/* El elemento con id="demo" */
#demo {
  border: red 2px solid;
}
```

## Sintaxis

    #id_value { style properties }

Nótese que esto es equivalente al siguiente {{Cssxref("Attribute_selectors", "attribute selector")}}:

    [id=id_value] { style properties }

## Ejemplo

### CSS

```css
#identified {
  background-color: skyblue;
}
```

### HTML

```html
<div id="identified">¡Este div tiene un ID especial!</div>
<div>Este solo es un div regular.</div>
```

### Resultado

{{EmbedLiveSample("Ejemplo", '100%', 50)}}

## Especificaciones

| Especificación                                                                               | Estado                               | Comentarios         |
| -------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------- |
| {{SpecName("CSS4 Selectors", "#id-selectors", "ID selectors")}}         | {{Spec2("CSS4 Selectors")}} |                     |
| {{SpecName("CSS3 Selectors", "#id-selectors", "ID selectors")}}         | {{Spec2("CSS3 Selectors")}} |                     |
| {{SpecName("CSS2.1", "selector.html#id-selectors", "ID selectors")}} | {{Spec2("CSS2.1")}}             |                     |
| {{SpecName("CSS1", "#id-as-selector", "ID selectors")}}                     | {{Spec2("CSS1")}}             | Definición Inicial. |

## Compatibilidad con navegadores

{{Compat("css.selectors.id")}}
