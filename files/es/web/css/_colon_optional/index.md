---
title: ":optional"
slug: Web/CSS/:optional
---

{{ CSSRef }}

La [pseudo-clase](/es/docs/Web/CSS/Pseudo-classes) **`:optional`** de [CSS](/es/docs/Web/CSS) representa cualquier elemento {{HTMLElement("input")}}, {{HTMLElement("select")}}, o {{HTMLElement("textarea")}} que no tenga el atributo [`required`](/es/docs/Web/HTML/Element/input#required) establecido en él.

```css
/* Selecciona cualquier opción <input> */
input:optional {
  border: 1px dashed black;
}
```

Esta pseudo-clase es útil para diseñar campos que no son necesarios para enviar un formulario.

> **Nota:** La pseudo-clase {{cssxref(":required")}} selecciona los campos de formulario _requeridos_.

## Sintaxis

{{csssyntax}}

## Ejemplos

Ver {{cssxref(":invalid")}} para un ejemplo.

## Problemas de accesibilidad

Si un [formulario](/es/docs/Web/HTML/Element/form) contiene {{htmlelement("input")}}s opcionales, las entradas requeridas deben indicarse utilizando el atributo [`required`](/es/docs/Web/HTML/Element/input#required). Esto se asegurará de que las personas que navegan con la ayuda de la tecnología de asistencia, como un lector de pantalla, puedan comprender qué entradas necesitan contenido válido para garantizar el envío exitoso del formulario.

Las entradas requeridas también deben indicarse visualmente, utilizando un tratamiento que no dependa únicamente del color para transmitir el significado. Por lo general, se utilizan textos descriptivos y/o un icono.

- [MDN Understanding WCAG, Guideline 3.3 explanations](/es/docs/Web/Accessibility/Understanding_WCAG/Understandable#Guideline_3.3_%E2%80%94_Input_Assistance_Help_users_avoid_and_correct_mistakes)
- [Understanding Success Criterion 3.3.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html)

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- Otras pseudo-clases relacionadas con la validación: {{ cssxref(":required") }}, {{ cssxref(":invalid") }}, {{ cssxref(":valid") }}
- [Validación de datos de formulario](/es/docs/Learn/HTML/Forms/Form_validation)
