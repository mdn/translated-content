---
title: ":focus-within"
slug: Web/CSS/:focus-within
---

{{CSSRef}}

La [pseudo-clase](/es/docs/Web/CSS/Pseudo-classes) [CSS](/es/docs/Web/CSS) **`:focus-within`** representa un elemento que ha recibido el foco o que _contiene_ un elemento que ha recibido el foco. En otras palabras, representa un elemento que en sí coincide con la pseudoclase {{cssxref(":focus")}} o tiene descendientes que coincidan con `:focus`. (Esto incluye descendientes en [shadow DOM](/es/docs/Web/Web_Components/Shadow_DOM))

```css
/* Selecciona un <div> cuando uno de sus descendientes recibe el foco*/
div:focus-within {
  background: cyan;
}
```

Este selector es útil, por tomar un ejemplo común, para resaltar un contenedor {{HTMLElement("form")}} completo cuando el usuario enfoca sobre uno de sus elementos {{HTMLElement("input")}}.

## Sintaxis

{{CSSSyntax}}

## Ejemplos

En este ejemplo, el formulario recibirá estilos de color especiales cuando cualquiera de las entradas de texto reciba el foco.

### HTML

```html
<p>Intenta escribir en este formulario.</p>

<form>
  <label for="given_name">Nombre:</label>
  <input id="given_name" type="text" />
  <br />
  <label for="family_name">Apellido:</label>
  <input id="family_name" type="text" />
</form>
```

### CSS

```css
form {
  border: 1px solid;
  color: gray;
  padding: 4px;
}

form:focus-within {
  background: #ff8;
  color: black;
}

input {
  margin: 4px;
}
```

### Resultado

{{EmbedLiveSample("Ejemplos", 500, 150)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{cssxref(":focus")}}
- {{CSSxRef(":focus-visible")}} {{Experimental_Inline}}
- [Grab your user's attention with the focus-within selector](https://dev.to/vtrpldn/grab-your-user-s-attention-with-the-focus-within-css-selector-4d4)
