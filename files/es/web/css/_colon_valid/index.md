---
title: ":valid"
slug: Web/CSS/:valid
---

{{CSSRef}}

La [pseudo-clase](/es/docs/Web/CSS/Pseudo-classes) **`:valid`** de [CSS](/es/docs/Web/CSS) representa cualquier elemento {{HTMLElement("input")}} u otro elemento {{HTMLElement("form")}} cuyo contenido se [valide](/es/docs/Web/Guide/HTML/HTML5/Constraint_validation) satisfactoriamente. Esto permite que los campos válidos adopten fácilmente una apariencia que ayuda al usuario a confirmar que sus datos están formateados correctamente.

```css
/* Selecciona cualquier <input> válido */
input:valid {
  background-color: powderblue;
}
```

Esta pseudo-clase es útil para resaltar los campos correctos para el usuario.

## Sintaxis

{{csssyntax}}

## Ejemplos

Ver {{cssxref(":invalid")}} para un ejemplo.

## Problemas de accesibilidad

El color verde se usa comúnmente para indicar una entrada válida. Las personas que tienen ciertos tipos de daltonismo no podrán determinar el estado de la entrada a menos que vaya acompañado de un indicador adicional que no dependa del color para transmitir el significado. Normalmente, se utilizan texto descriptivo y / o un icono.

- [MDN Comprensión de las WCAG, explicaciones de la Guía 1.4](/es/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Comprender el Criterio de Conformidad 1.4.1 | W3C Comprender WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html)

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- Otras pseudo-clases relacionadas con la validación: {{ cssxref(":required") }}, {{ cssxref(":optional") }}, {{ cssxref(":invalid") }}
- [Validación de datos de formulario](/es/docs/Learn/HTML/Forms/Form_validation)
