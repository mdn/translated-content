---
title: ':required'
slug: Web/CSS/:required
tags:
  - CSS
  - Diseño
  - Pseudo-clase
  - Referencia
  - Web
translation_of: Web/CSS/:required
---
{{ CSSRef }}

La [pseudo-clase](/es/docs/Web/CSS/Pseudo-classes) **`:required`** de [CSS](/es/docs/Web/CSS) representa cualquier elemento {{HTMLElement("input")}}, {{HTMLElement("select")}}, o {{HTMLElement("textarea")}} que tenga el atributo {{ htmlattrxref("required", "input") }} establecido en él.

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

Obligatoriamente los {{htmlelement("input")}} deben tener el atributo {{ htmlattrxref("required", "input") }} aplicado a ellos. Esto asegurará que las personas que navegan con la ayuda de tecnología de asistencia, como un lector de pantalla, puedan comprender qué entradas necesitan contenido válido para garantizar un envío exitoso.

Si el formulario también contiene entradas opcionales, las entradas requeridas deben indicarse visualmente utilizando un tratamiento que no dependa únicamente del color para transmitir el significado. Normalmente, se utilizan texto descriptivo y / o un icono.

- [MDN Comprender las WCAG, explicaciones de la Guía 3.3](/es/docs/Web/Accessibility/Understanding_WCAG/Understandable#Guideline_3.3_%E2%80%94_Input_Assistance_Help_users_avoid_and_correct_mistakes)
- [Comprender el Criterio de Conformidad 3.3.2 | W3C Comprender WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html)

## Especificaciones

| Especificación                                                                               | Estado                                   | Comentarios                                                   |
| -------------------------------------------------------------------------------------------- | ---------------------------------------- | ------------------------------------------------------------- |
| {{ SpecName('HTML WHATWG', '#selector-required', ':required') }}         | {{ Spec2('HTML WHATWG') }}     | Ningún cambio.                                                |
| {{ SpecName('HTML5 W3C', '#selector-required', ':required') }}         | {{ Spec2('HTML5 W3C') }}         | Define la semántica de HTML y la validación de restricciones. |
| {{ SpecName('CSS4 Selectors', '#opt-pseudos', ':required') }}             | {{ Spec2('CSS4 Selectors') }} | Ningún cambio.                                                |
| {{ SpecName('CSS3 Basic UI', '#pseudo-required-value', ':required') }} | {{ Spec2('CSS3 Basic UI') }}     | Define la pseudo-clase, pero no la semántica asociada.        |

## Compatibilidad con navegadores

{{Compat("css.selectors.required")}}

## Ver también

- Otras pseudo-clases relacionadas con la validación: {{ cssxref(":optional") }}, {{ cssxref(":invalid") }}, {{ cssxref(":valid") }}
- [Validación de datos de formulario](/es/docs/Learn/HTML/Forms/Form_validation)
