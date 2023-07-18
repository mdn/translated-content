---
title: Estados y propiedades de ARIA
slug: Web/Accessibility/ARIA/Attributes
l10n:
  sourceCommit: f6d04a43eadf5ab26a3488942dfb318b58234eb5
---

Esta página enumera las páginas de referencia que cubren todos los atributos de <abbr>WAI-ARIA</abbr> discutidos en MDN.

Los atributos <abbr>ARIA</abbr> permiten modificar los estados y las propiedades de un elemento tal como se define en el árbol d

> **Nota:** ARIA solo modifica el árbol de accesibilidad, modificando cómo la tecnología de asistencia presenta el contenido a sus usuarios. ARIA no cambia nada sobre la función o el comportamiento de un elemento. Cuando no use elementos HTML semánticos para su propósito previsto y funcionalidad predeterminada, debe usar JavaScript para administrar el comportamiento, el enfoque y los estados ARIA.

## Tipos de atributos ARIA

Hay 4 categorías de estados y propiedades ARIA:

1. ### Atributos de widgets

   - [`aria-autocomplete`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete)
   - [`aria-checked`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-checked)
   - [`aria-disabled`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-disabled)
   - [`aria-errormessage`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-errormessage)
   - [`aria-expanded`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
   - [`aria-haspopup`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup)
   - [`aria-hidden`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)
   - [`aria-invalid`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-invalid)
   - [`aria-label`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-label)
   - [`aria-level`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-level)
   - [`aria-modal`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-modal)
   - [`aria-multiline`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-multiline)
   - [`aria-multiselectable`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable)
   - [`aria-orientation`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)
   - [`aria-placeholder`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-placeholder)
   - [`aria-pressed`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-pressed)
   - [`aria-readonly`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-readonly)
   - [`aria-required`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-required)
   - [`aria-selected`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-selected)
   - [`aria-sort`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-sort)
   - [`aria-valuemax`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)
   - [`aria-valuemin`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin)
   - [`aria-valuenow`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow)
   - [`aria-valuetext`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)

2. ### Atributos de región en vivo

   - [`aria-busy`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-busy)
   - [`aria-live`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-live)
   - [`aria-relevant`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-relevant)
   - [`aria-atomic`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-atomic)

3. ### Atributos de arrastrar y soltar

   - [`aria-dropeffect`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-dropeffect)
   - [`aria-grabbed`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-grabbed)

4. ### Atributos de relación

   - [`aria-activedescendant`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant)
   - [`aria-colcount`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-colcount)
   - [`aria-colindex`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-colindex)
   - [`aria-colspan`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-colspan)
   - [`aria-controls`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-controls)
   - [`aria-describedby`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)
   - [`aria-description`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-description)
   - [`aria-details`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-details)
   - [`aria-errormessage`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-errormessage)
   - [`aria-flowto`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-flowto)
   - [`aria-labelledby`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
   - [`aria-owns`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-owns)
   - [`aria-posinset`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-posinset)
   - [`aria-rowcount`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount)
   - [`aria-rowindex`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex)
   - [`aria-rowspan`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan)
   - [`aria-setsize`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-setsize)

## Atributos ARIA globales

Algunos estados y propiedades se aplican a todos los elementos HTML independientemente de si se aplica una función ARIA. Estos se definen como atributos "Globales". Los estados y propiedades globales son compatibles con todos los roles y elementos de marcado base.

Muchos de los atributos anteriores son globales, lo que significa que se pueden incluir en cualquier elemento a menos que se deshabilite específicamente:

- [`aria-atomic`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-atomic)
- [`aria-busy`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-busy)
- [`aria-controls`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-controls)
- [`aria-current`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-current)
- [`aria-describedby`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)
- [`aria-description`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-description)
- [`aria-details`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-details)
- [`aria-disabled`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-disabled)
- [`aria-dropeffect`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-dropeffect)
- [`aria-errormessage`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-errormessage)
- [`aria-flowto`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-flowto)
- [`aria-grabbed`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-grabbed)
- [`aria-haspopup`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup)
- [`aria-hidden`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)
- [`aria-invalid`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-invalid)
- [`aria-keyshortcuts`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-keyshortcuts)
- [`aria-label`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-label)
- [`aria-labelledby`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
- [`aria-live`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-live)
- [`aria-owns`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-owns)
- [`aria-relevant`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-relevant)
- [`aria-roledescription`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription)

Por "deshabilitar específicamente" se refiere a que, todos los atributos anteriores son globales excepto las propiedades `aria-label` y `aria-labelledby`, que no están permitidas en elementos con rol [`presentation`](/es/docs/Web/Accessibility/ARIA/Roles/presentation_role) ni su sinónimo el rol [`none`](/es/docs/Web/Accessibility/ARIA/Roles/none_role).

## Estados y propiedades definidas en MDN

Las siguientes son las páginas de referencia que cubren los estados y propiedades de <abbr>WAI-ARIA</abbr> discutidos en <abbr>MDN</abbr>.

{{SubpagesWithSummaries}}

## Véase también

- [Uso de ARIA: funciones, estados y propiedades](/es/docs/Web/Accessibility/ARIA/ARIA_Techniques)

<section id="Quick_links">

1. [**Atributos <abbr>WAI-ARIA</abbr>**](/es/docs/Web/Accessibility/ARIA/Attributes)

   {{ListSubpagesForSidebar("/es/docs/Web/Accessibility/ARIA/Attributes")}}

</section>
