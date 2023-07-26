---
title: ":required"
slug: Web/CSS/:required
---

{{ CSSRef }}

La [pseudo-clase](/es/docs/Web/CSS/Pseudo-classes) **`:required`** de [CSS](/es/docs/Web/CSS) representa cualquier elemento {{HTMLElement("input")}}, {{HTMLElement("select")}}, o {{HTMLElement("textarea")}} que tenga el atributo [`required`](/es/docs/Web/HTML/Element/input#required) establecido en él.

```css
/* Selecciona cualquier <input> requerido */
input:required {
  border: 1px dashed red;
}
```

Esta pseudo-clase es útil para resaltar campos que deben tener datos válidos antes de que se pueda enviar un formulario.

> **Nota:** La pseudoclase {{cssxref(":optional")}} selecciona campos de formulario _opcionales_.

## Sintaxis

{{csssyntax}}

## Ejemplos

Ver {{cssxref(":invalid")}} para un ejemplo.

## Problemas de accesibilidad

Obligatoriamente los {{htmlelement("input")}} deben tener el atributo [`required`](/es/docs/Web/HTML/Element/input#required) aplicado a ellos. Esto asegurará que las personas que navegan con la ayuda de tecnología de asistencia, como un lector de pantalla, puedan comprender qué entradas necesitan contenido válido para garantizar un envío exitoso.

Si el formulario también contiene entradas opcionales, las entradas requeridas deben indicarse visualmente utilizando un tratamiento que no dependa únicamente del color para transmitir el significado. Normalmente, se utilizan texto descriptivo y / o un icono.

- [MDN Comprender las WCAG, explicaciones de la Guía 3.3](/es/docs/Web/Accessibility/Understanding_WCAG/Understandable#Guideline_3.3_%E2%80%94_Input_Assistance_Help_users_avoid_and_correct_mistakes)
- [Comprender el Criterio de Conformidad 3.3.2 | W3C Comprender WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html)

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- Otras pseudo-clases relacionadas con la validación: {{ cssxref(":optional") }}, {{ cssxref(":invalid") }}, {{ cssxref(":valid") }}
- [Validación de datos de formulario](/es/docs/Learn/HTML/Forms/Form_validation)
