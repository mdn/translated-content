---
title: ":focus"
slug: Web/CSS/:focus
---

{{CSSRef}}

La [pseudo-clase](/es/docs/Web/CSS/Pseudo-classes) **`:focus`** [CSS](/es/docs/Web/CSS) representa un elemento (como una entrada de formulario) que ha recibido el foco. Generalmente se activa cuando el usuario hace clic, toca un elemento o lo selecciona con la tecla "Tab" del teclado.

```css
/* Selecciona cualquier <input> cuando se enfoca */
input:focus {
  color: red;
}
```

> **Nota:** Esta pseudo-clase se aplica solo al elemento enfocado en sí mismo. Utilice {{cssxref(":focus-within")}} si desea seleccionar un elemento que contenga un elemento enfocado.

## Sintaxis

{{csssyntax}}

## Ejemplo

### HTML

```html
<input
  class="red-input"
  value="Voy a ser de color rojo cuando enfoque." /><br />
<input class="blue-input" value="Voy a ser de color azul cuando enfoque." />
```

### CSS

```css
.red-input:focus {
  background: yellow;
  color: red;
}

.blue-input:focus {
  background: yellow;
  color: blue;
}
```

### Resultado

{{EmbedLiveSample('Ejemplo')}}

## Sobre Accesibilidad

Asegúrate de que el indicador visual de foco pueda ser notado por personas con baja visión. Esto beneficiará a cualquier persona utilizando una pantalla en un ambiente con mucha luminosidad (por ejemplo, exterior en un día soleado). El estándar de [WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html) requiere que el indicador de foco tenga un contraste de por lo menos 3:1.

- Indicadores de foco accesibles (en inglés): [Give Your Site Some Focus! Tips for Designing Useful and Usable Focus Indicators](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)

### :focus { outline: none; }

Nunca elimines el outline de un foco sin reemplazarlo por otro tipo de indicador que cumpla con las condiciones de contraste.

- Más información (en inglés): [Never remove CSS outlines](https://a11yproject.com/posts/never-remove-css-outlines/)

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{cssxref(":focus-within")}}
