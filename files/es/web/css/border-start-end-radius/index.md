---
title: border-start-end-radius
slug: Web/CSS/border-start-end-radius
---

{{CSSRef}}{{SeeCompatTable}}

La propiedad de [CSS](/es/docs/Web/CSS) **`border-start-end-radius`** define al radio del borde lógico de un elemento, que se asigna al radio de borde físico dependiendo del modo de escritura, la direccionalidad y la orientación del texto del elemento. Esto corresponde a las propiedades {{cssxref("writing-mode")}}, {{cssxref("direction")}}, and {{cssxref("text-orientation")}}.

```css
/* <length> values */
/* With one value the corner will be a circle */
border-start-end-radius: 10px;
border-start-end-radius: 1em;

/* With two values the corner will be an ellipse */
border-start-end-radius: 1em 2em;

/* Global values */
border-start-end-radius: inherit;
border-start-end-radius: initial;
border-start-end-radius: unset;
```

Por ejemplo, en un modo de escritura `horizontal-tb`, esta propiedad corresponde a la propiedad {{CSSxRef("border-bottom-left-radius")}}.

## Sintaxis

### Valores

- `<length-percentage>`
  - : Indica el tamaño del radio del círculo o los ejes semi mayor y semi menor de la elipse. Como longitud absoluta, se puede expresar en cualquier unidad permitida por el tipo de datos CSS {{cssxref ("&lt;length&gt;")}}. Los porcentajes para el eje horizontal se refieren al ancho de la caja, los porcentajes para el eje vertical se refieren a la altura de la caja. Los valores negativos no son válidos.

### Sintaxis formal

{{CSSSyntax}}

## Ejemplo

### Contenido HTML

```html
<div>
  <p class="exampleText">Example</p>
</div>
```

### Contenido CSS

```css
div {
  background-color: rebeccapurple;
  width: 120px;
  height: 120px;
  border-start-end-radius: 10px;
}

.exampleText {
  writing-mode: vertical-rl;
  padding: 10px;
  background-color: #fff;
  border-start-end-radius: 10px;
}
```

{{EmbedLiveSample("Ejemplo", 140, 140)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Mira también

- La propiedad física asignada: {{CSSxRef("border-bottom-left-radius")}}
- {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
