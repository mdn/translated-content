---
title: ":invalid"
slug: Web/CSS/:invalid
---

{{CSSRef}}

La [pseudo-clase](/es/docs/Web/CSS/Pseudo-classes) **`:invalid`** de [CSS](/es/docs/Web/CSS) representa cualquier elemento {{HTMLElement("input")}} u otro elemento {{HTMLElement("form")}} cuyos contenidos no se puedan [validar](/es/docs/Web/Guide/HTML/HTML5/Constraint_validation).

```css
/* Selecciona cualquier <input> no válido */
input:invalid {
  background-color: pink;
}
```

Esta pseudo-clase es útil para resaltar errores de campo para el usuario.

## Sintaxis

{{csssyntax}}

## Ejemplo

Este ejemplo presenta una forma simple que colorea los elementos en verde cuando son validos y en rojo cuando no lo son.

### HTML

```html
<form>
  <label for="url_input">Ingresa una URL:</label>
  <input type="url" id="url_input" />
  <br />
  <br />
  <label for="email_input"
    >Introduzca una dirección de correo electrónico:</label
  >
  <input type="email" id="email_input" required />
</form>
```

### CSS

```css
input:invalid {
  background-color: #ffdddd;
}

form:invalid {
  border: 5px solid #ffdddd;
}

input:valid {
  background-color: #ddffdd;
}

form:valid {
  border: 5px solid #ddffdd;
}

input:required {
  border-color: #800000;
  border-width: 3px;
}

input:required:invalid {
  border-color: #c00000;
}
```

### Resultado

{{EmbedLiveSample('Ejemplo', 600, 150)}}

## Problemas de accesibilidad

El color rojo se usa comúnmente para indicar una entrada no válida. Las personas que tienen ciertos tipos de daltonismo no podrán determinar el estado de la entrada a menos que vaya acompañado de un indicador adicional que no dependa del color para transmitir el significado. Normalmente, se utilizan texto descriptivo y / o un icono.

- [MDN Comprensión de las WCAG, explicaciones de la Guía 1.4](/es/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Comprender el Criterio de Conformidad 1.4.1 | W3C Comprender WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html)

## Notas

### Radio buttons

Si alguno de los radio buttons en un grupo es `required`, la pseudo-clase `:invalid` se aplica a todos ellos si no se selecciona ninguno de los botones del grupo. (Los radio buttons agrupados comparten el mismo valor para su atributo `name`).

### Gecko por defecto

Por defecto, Gecko no aplica un estilo a la pseudo-clase `:invalid`. Sin embargo, sí aplica un estilo (un "resplandor" rojo que usa la propiedad {{Cssxref("box-shadow")}}) a la pseudoclase {{cssxref(":-moz-ui-invalid")}}, que se aplica en un subconjunto de casos para: `:invalid`.

Puede inhabilitar el brillo con el siguiente CSS o anularlo por completo para modificar la apariencia de los campos no válidos:

```css
:invalid {
  box-shadow: none;
}

:-moz-submit-invalid {
  box-shadow: none;
}

:-moz-ui-invalid {
  box-shadow: none;
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- Otras pseudo-clases relacionadas con la validación: {{ cssxref(":required") }}, {{ cssxref(":optional") }}, {{ cssxref(":valid") }}
- Pseudo-clases relacionadas de Mozilla: {{cssxref(":-moz-ui-invalid")}}, {{cssxref(":-moz-submit-invalid")}}
- [Validación de datos de formulario](/es/docs/Learn/HTML/Forms/Form_validation)
