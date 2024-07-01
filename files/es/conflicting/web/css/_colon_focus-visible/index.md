---
title: ":-moz-focusring"
slug: conflicting/Web/CSS/:focus-visible
original_slug: Web/CSS/:-moz-focusring
---

{{Non-standard_header}}{{CSSRef}}

## Resumen

La [pseudo-clase](/es/docs/Web/CSS/Pseudo-classes) [CSS](/es/docs/Web/CSS) `:-moz-focusring` es similar a la pseudo-clase {{cssxref(":focus")}} , pero sólo selecciona un elemento si éste tiene el foco y el agente de usuario (user-agent) tiene habilitado el mostrar el anillo (borde) alrededor del elemento que actualmente tiene el foco. Si `:-moz-focusring` selecciona un elemento entonces `:focus` también lo selecciona pero esto no se da igual al revés, depende, como se ha dicho anteriormente, de la configuración del agente de usuario. Que un agente de usuario tenga el dibujo del anillo de foco habilitado depende de cosas como la configuración del sistema operativo así que el comportamiento preciso de esta propiedad puede variar de una plataforma a otra dependiendiendo de la configuración de la misma o de la configuración del usuario.

## Síntaxis

```
:-moz-focusring
```

## Ejemplo

Para especificar la apariencia de un elemento cuando recibe el foco se puede usar este psuedo-selector de la siguiente manera:

```css
mybutton:-moz-focusring {
  outline: 2px dotted;
}
```

## Especificaciones

Esta propiedad todavía no está definida en ninguna especificación, aunque fue [debatida en el grupo de trabajo](https://lists.w3.org/Archives/Public/www-style/2015Sep/0226.html) y se [decidió añadirla a los selectores 4 o 5](https://lists.w3.org/Archives/Public/www-style/2015Oct/0012.html).

## Compatibilidad con navegadores

{{Compat}}

## Ver además

- [Error 418521 en Firefox](https://bugzil.la/418521)
