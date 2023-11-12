---
title: scroll-behavior
slug: Web/CSS/scroll-behavior
---

{{ CSSRef }}

La propiedad CSS **`scroll-behavior`** especifica el comportamiento del desplazamiento para un elemento con desplazamiento, cuando éste se produce debido a la navegación o a APIs CSSOM. Otros desplazamientos, p.ej. aquellos realizados por el usuario, no se ven afectados por esta propiedad. Cuando esta propiedad está especificada en el elemento raíz, se aplica al viewport.

Esta propiedad puede ser ignorada por los agentes de usuario.

```css
/* Keyword values */
scroll-behavior: auto;
scroll-behavior: smooth;

/* Global values */
scroll-behavior: inherit;
scroll-behavior: initial;
scroll-behavior: unset;
```

{{cssinfo}}

## Sintaxis

Valores

- `auto`
  - : La caja de desplazamiento realiza el desplazamiento instantáneamente.
- `smooth`
  - : La caja se desplaza suavemente, utilizando una función de tiempo definida por el agente de usuario (user-agent) sobre un período de tiempo también definido por éste. Los agentes de usuario seguirán las convenciones de su propia plataforma, en caso de que existan.

### Sintaxis formal

{{csssyntax}}

## Example

### HTML

```html
<nav>
  <a href="#page-1">1</a>
  <a href="#page-2">2</a>
  <a href="#page-3">3</a>
</nav>
<scroll-container>
  <scroll-page id="page-1">1</scroll-page>
  <scroll-page id="page-2">2</scroll-page>
  <scroll-page id="page-3">3</scroll-page>
</scroll-container>
```

### CSS

```css
a {
  display: inline-block;
  width: 50px;
  text-decoration: none;
}
nav,
scroll-container {
  display: block;
  margin: 0 auto;
  text-align: center;
}
nav {
  width: 339px;
  padding: 5px;
  border: 1px solid black;
}
scroll-container {
  display: block;
  width: 350px;
  height: 200px;
  overflow-y: scroll;
  scroll-behavior: smooth;
}
scroll-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 5em;
}
```

### Output

{{ EmbedLiveSample('Example', "100%", 250) }}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
