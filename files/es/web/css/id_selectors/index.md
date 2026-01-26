---
title: Selectores de ID
slug: Web/CSS/ID_selectors
---

En un documento HTML, los **selectores de ID** de CSS buscan un elemento basado en el contenido del atributo [`ID`](/es/docs/Web/HTML/Reference/Global_attributes#id). El atributo `ID` del elemento seleccionado debe coincidir exactamente con el valor dado en el selector.

```css
/* El elemento con id="demo" */
#demo {
  border: red 2px solid;
}
```

## Sintaxis

```
#id_value { style properties }
```

Nótese que esto es equivalente al siguiente {{Cssxref("Attribute_selectors", "attribute selector")}}:

```
[id=id_value] { style properties }
```

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

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
