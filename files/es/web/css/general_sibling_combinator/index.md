---
title: Selectores de hermanos generales
slug: Web/CSS/General_sibling_combinator
---

{{CSSRef("Selectors")}}

## Resumen

El combinador `~` separa dos selectores y selecciona el segundo elemento sólo si está precedido por el primero y ambos comparten un padre común.

## Sintaxis

```
elemento ~ elemento { estilos }
```

## Ejemplo

```css
p ~ span {
  color: red;
}
```

```html
<span>Este span no es rojo.</span>
<p>Aquí hay un párrafo.</p>
<code>Aquí hay algo de código.</code>
<span
  >Aquí hay un span. Es rojo porque va precedido de un párrafo y ambos comparten
  el mismo padre.</span
>
```

{{ EmbedLiveSample('Example', 320, 150) }}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Selectores de hermanos adyacentes](/es/docs/Web/CSS/Adjacent_sibling_selectors)
