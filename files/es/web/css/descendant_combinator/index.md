---
title: Los selectores descendientes
slug: Web/CSS/Descendant_combinator
---

{{ CSSRef() }}

## Sumario

El `␣` combinador (que se supone que representan un espacio, o mejor dicho uno o más espacios en blanco) combina dos selectores tales que el selector combinado incluye sólo los elementos que coinciden con el segundo selector para los que hay un elemento ancestro que coincide con el primer selector. Los selectores descendientes son similares a [selectores hijos](/en/CSS/Child_selectors) , pero que no requieren que la relación entre los elementos coincidentes ser estrictamente entre padres e hijos.

## Sintaxis

```
selector1 selector2 { propiedades de estilos }
```

## Ejemplo

```css
span {
  background-color: white;
}
div span {
  background-color: DodgerBlue;
}
```

```html
<div>
  <span
    >Span 1.
    <span>Span 2.</span>
  </span>
</div>
<span>Span 3.</span>
```

{{ EmbedLiveSample('Example', '', '', '') }}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también
