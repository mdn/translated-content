---
title: ":-moz-ui-invalid"
slug: Web/CSS/:user-invalid
---

{{Non-standard_header}}{{CSSRef}}

## Resumen

La [pseudo-clase](/es/docs/Web/CSS/Pseudo-classes) CSS `:-moz-ui-invalid` representa cualquier elemento de los formularios que, en determinadas circunstancias, tiene [restricciones de validación](/es/docs/Web/Guide/HTML/Forms_in_HTML#Constraint_Validation) y no es válido. Esta pseudo-clase se aplica siguiendo la siguiente reglas::

- Si el control no tiene el foco y el valor no es válido se aplica la pseudo-clase.
- Si el control tiene el foco y el valor era válido (incluyendo si es un elemento vacío) cuando obtuvo el foco, no se aplica la pseudo-clase.
- Si el control tiene el foco y el valor no era válido cuando obtuvo el foco, se recalcula la validez del valor con cada pulsación de teclado.
- Si el elemento es obligatorio (requerido) sólo se aplican las reglas anteriores si el usuario ha cambiado el valor o ha intentando enviar los datos del formulario (hacer un "sbumit").

El resultado es que si el control era válido cuando el usuario empezó a interactuar con él sólo se cambia el estilo de validación cuando el usuario cambia el foco hacia otro elemento. Sin embargo, si el usuario está corrigiendo un valor señalado anteriormente como no válido, el control muestra inmediatamente cuando el valor pasa a ser válido. A los elementos del formulario obligatorios se les aplica la pseudo-clase sólo si el usuario los cambia o si intenta enviar los datos del formulario (hacer "submit").

Por defecto Gecko aplica un estilo que crear un brillo rojo "glow" (usando la propiedad{{Cssxref("box-shadow")}} ) alrededor de los elemento a los que se les aplica esta pseudo-clase. Ver la pseudo-clase {{Cssxref(":invalid")}} para poder observar un ejemplo que muestra como evitar este estilo por defecto.

## Especificaciones

No es parte de ninguna especificación.

## Compatibilidad con navegadores

{{Compat}}

## Ver además

- {{cssxref(":valid")}}
- {{cssxref(":invalid")}}
- {{cssxref(":required")}}
- {{cssxref(":optional")}}
- {{cssxref(":-moz-ui-valid")}}
