---
title: <option>
slug: Web/HTML/Element/option
---

{{HTMLSidebar}}

En un formulario Web , el **elemento** **HTML `<option>`** se usa para representar un item dentro de un {{HTMLElement("select")}}, un {{HTMLElement("optgroup")}} o un elemento HTML5 {{HTMLElement("datalist")}} .

| [Contenido de las categorías](/es/docs/Web/HTML/Content_categories) | Ninguna                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Contenido permitido                                                 | Texto con, eventualmente, caracteres especiales (como `&eacute;`).                                                                                                                                                                                 |
| Omisión de etiqueta                                                 | La etiqueta de inicio es obligatoria. La etiqueta de finalización es opcional siempre que el elemento esté inmediatamente seguido por otro elemento `<option>` , por un {{HTMLElement("optgroup")}}, o si el elemento padre no tiene más contenido |
| Elementos padre permitidos                                          | {{HTMLElement("select")}}, o {{HTMLElement("optgroup")}} o un elemento {{HTMLElement("datalist")}} element.                                                                                                                                        |
| Interfaz DOM                                                        | {{domxref("HTMLOptionElement")}}                                                                                                                                                                                                                   |

## Atributos

Este elemento posee los [atributos globales](/es/docs/Web/HTML/Global_attributes).

- `disabled`
  - : Si está establecido el elemento no se puede seleccionar. A menudo los navegadores ponen en gris el elemento y de esa manera no recibirá ningún evento de navegación como clicks de ratón o eventos relacionados con la obtención del foco. Si este atributo no está definido el elemento puede ser aún deshabilitado si uno de sus ancestros es un elemento {{HTMLElement("optgroup")}} deshabilitado.
- `label`
  - : Este atributo es el texto para la etiqueta que determina el significado de la opción. Si el atributo **`label`** no está definidio su valor será el texto del contenido del elemento
    > **Nota:** El atributo **label** está diseñado para contener una etiqueta corta que se usará típicamente en un menú jerárquico. El **`atributo value`** describe una etiqueta más larga para ser usada, por ejemplo, cerca de un radio button
- `selected`
  - : Si está presente, este atributo booleano indica si esta opción es la inicialmente seleccionada. Si el elemento `<option>` es descendiente de un elemento {{HTMLElement("select")}} cuyo atributo [`multiple`](/es/docs/Web/HTML/Element/select#multiple) no esté definidio únicamente un sólo `<option>` de este elemento {{HTMLElement("select")}} puede tener este atributo **selected** attribute.
- `value`
  - : El contenido de este atributo representa el valor que será enviado al enviar el formulario si una determinada opción está seleccionada. Si se omite el atributo el valor se tomará del texto del contenido del elemento option.

## Ejemplos

Ver los ejemplos {{HTMLElement("select")}}.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- Otros elementos relacionados con formularios: {{HTMLElement("form")}}, {{HTMLElement("legend")}}, {{HTMLElement("label")}}, {{HTMLElement("button")}}, {{HTMLElement("select")}}, {{HTMLElement("datalist")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("textarea")}}, {{HTMLElement("keygen")}}, {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}} and {{HTMLElement("meter")}}.
