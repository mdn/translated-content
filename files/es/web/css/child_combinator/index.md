---
title: Selectores de hijo
slug: Web/CSS/Child_combinator
---

{{CSSRef("Selectors")}}

El combinador `>` separa a dos selectores y busca solo a los elementos que coindicen con el segundo selector y que son hijos **directos** del primero. EN contraste, cuando se combinan dos selectores con el [selector de descendiente](/es/docs/Web/CSS/Descendant_selectors), la expresión busca elementos que coinciden con el segundo selector y que tienen algun ancestro que coindice con el primero, sin importar el nivel de separación que tengan dentro del DOM.

## Sintaxis

```
selector1 > selector2 { style properties }
```

## Ejemplo

```css
span {
  background-color: white;
}
div > span {
  background-color: DodgerBlue;
}
```

```html
<div>
  <span
    >Span #1, dentro del div.
    <span>Span #2, dentro del span que está en el div.</span>
  </span>
</div>
<span>Span #3, no está dentro del div.</span>
```

{{EmbedLiveSample("Ejemplo", 200, 100)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
