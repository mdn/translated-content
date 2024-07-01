---
title: border-top-color
slug: Web/CSS/border-top-color
---

{{CSSRef}}

La propiedad CSS **`border-top-color`** establece el color superior de un elemento {{cssxref("border")}}. Tenga en cuenta que en la mayoria de los casos las propiedades abreviadas {{cssxref("border-color")}} o {{cssxref("border-top")}} son mas convenientes y preferidas.

```css
/*valores <color> */
border-top-color: red;
border-top-color: #ffbb00;
border-top-color: rgb(255, 0, 0);
border-top-color: hsla(100%, 50%, 25%, 0.75);
border-top-color: currentColor;
border-top-color: transparent;

/* Valores globales */
border-top-color: inherit;
border-top-color: initial;
border-top-color: unset;
```

{{cssinfo}}

## Sintaxis

La propiedad `border-top-color` es especificada con un valor unico.

### Valores

- {{cssxref("&lt;color&gt;")}}
  - : El color superior del borde

### Sintaxis Formal

{{csssyntax}}

## Ejemplos

### Un div simple con un borde

#### HTML

```html
<div class="mybox">
  <p>
    Esta es una caja con un border alrededor. Tenga en cuenta que un border de
    la caja es <span class="redtext">Rojo</span>.
  </p>
</div>
```

#### CSS

```css
.mybox {
  border: solid 0.3em gold;
  border-top-color: red;
  width: auto;
}

.redtext {
  color: red;
}
```

#### Resultado

{{EmbedLiveSample('A_simple_div_with_a_border')}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver tambien

- Las propiedades abreviadas de CSS relacionadas con los bordes : {{Cssxref("border")}}, {{Cssxref("border-top")}}, y {{Cssxref("border-color")}}.
- Las propiedades abrevadas de CSS relacionadas con el color para los bordes: {{Cssxref("border-right-color")}}, {{Cssxref("border-bottom-color")}}, y {{Cssxref("border-left-color")}}.
- Las otras propiedades CSS relaciones con los bordes que se aplican al mismo borde : {{cssxref("border-top-style")}} y {{cssxref("border-top-width")}}.
