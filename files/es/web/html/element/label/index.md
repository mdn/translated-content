---
title: <label>
slug: Web/HTML/Element/label
---

## Resumen

El **Elemento HTML `<label>`** representa una etiqueta para un elemento en una interfaz de usuario. Este puede estar asociado con un control ya sea mediante la utilizacion del atributo for, o ubicando el control dentro del elemento label. Tal control es llamado "el control etiquetado" del elemento label.

- _[Categorias](/es/docs/Web/HTML/Content_categories)_ [Contenido de flujo](/es/docs/Web/HTML/Content_categories#Flow_content), [contenido de fraseo](/es/docs/Web/HTML/Content_categories#Phrasing_content), [contenido interactivo](/es/docs/Web/HTML/Content_categories#Interactive_content), [elemento de formulario asociado](/es/docs/Web/HTML/Content_categories#Form-associated_content), contenido palpable.
- _Contenido permitido_ [Contenido de fraseo](/es/docs/Web/HTML/Content_categories#Phrasing_content), pero no otros componentes `label` ni otros elementos etiquetables a parte del de control ya etiquetado.
- _Omision del Tag_ {{no_tag_omission}}
- _Elementos padre permitidos_ Cualquier elemento que acepte el [contenido de fraseo](/es/docs/Web/HTML/Content_categories#Phrasing_content).
- _DOM interface_ {{domxref("HTMLLabelElement")}}

## Atributos

Este elemento incluye los [atributos globales](/es/docs/Web/HTML/Global_attributes).

- `accesskey`
  - : Una tecla de atajo para acceder a este elemento desde el teclado.
- `for`

  - : El ID del elemento de formulario etiquetable relacionado en el mismo documento que el elemento label. El primer elemento en el documento con tal ID que coincida con el dispuesto en el atributo for será el control etiquetado para este elemento.

    > **Nota:** Un elemento label puede contener ambos; El atributo for y el elemento de control anidado, siempre y cuando el atributo for apunte al mismo elemento.

- `form`
  - : El formulario con el cual el label está asociado (su formulario dueño). El valor de este atributo debe ser un ID del elemento {{HTMLElement("form")}} en el mismo documento. Si este atributo no es especificado, este elemento `<label>` deberia ser descendiente de un elemento {{HTMLElement("form")}}. Este atributo permite ubicar el elemento label en cualquier lugar dentro del documento y no solo como descendiente de su respectivo formulario.

## Ejemplos

```html
<!-- Un simple ejemplo de un label con el atributo for -->
<label for="Name">Click me</label>
<input type="text" id="Name" name="Name" />

<!-- Aun mas simple -->
<label>Click me <input type="text" id="Name" name="Name" /></label>
```

{{EmbedLiveSample}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## See also

- Other form-related elements: {{HTMLElement("form")}}, {{HTMLElement("button")}}, {{HTMLElement("datalist")}}, {{HTMLElement("legend")}}, {{HTMLElement("select")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("option")}}, {{HTMLElement("textarea")}}, {{HTMLElement("keygen")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}} and {{HTMLElement("meter")}}.

{{HTMLSidebar}}
