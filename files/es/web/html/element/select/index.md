---
title: <select>
slug: Web/HTML/Element/select
---

## Resumen

El elemento select (`<select>`) de HTML representa un control que muestra un menú de opciones. Las opciones contenidas en el menú son representadas por elementos {{HTMLElement("option")}}, los cuales pueden ser agrupados por elementos {{HTMLElement("optgroup")}}. La opcion puede estar preseleccionada por el usuario.

## Contenido

| [Content categories](/es/docs/HTML/Content_categories) | Elementos [flow content](/es/docs/HTML/Content_categories#Flow_content), [phrasing content](/es/docs/HTML/Content_categories#Phrasing_content), [interactive content](/es/docs/HTML/Content_categories#Interactive_content), [listed](/es/docs/HTML/Content_categories#Form_listed), [labelable](/es/docs/HTML/Content_categories#Form_labelable), [resettable](/es/docs/HTML/Content_categories#Form_resettable), y [submittable](/es/docs/HTML/Content_categories#Form_submittable) [form-associated](/es/docs/HTML/Content_categories#Form-associated_). |
| ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Contenido permitido                                    | Uno o mas elementos {{HTMLElement("option")}} o {{HTMLElement("optgroup")}}.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Omisión de etiquetas                                   | Ninguna, ambas etiquetas son obligatorias                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Elementos padre permitidos                             | Cualquier elemento que permita phrasing content.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

## Atributos

Este elemento incluye [global attributes](/es/docs/Web/HTML/Global_attributes).

- `autofocus`
  - : Este atributo permite especificar un formulario de control que debería tener enfoque de entrada cuando se carga la página, a no ser que el usuario lo sobreescriba, por ejemplo, escribiendo un control diferente. Solo un elemento formulario puede tener el elemento de enfoque de entrada por documento, por lo cual es un atributo booleano.
- `disabled`
  - : El atributo booleano especifica que el usuario no puede interactuar con el control. Si este atributo no está especificado, el control hereda los ajustes del campo que lo contiene, por ejemplo del fielset; si no hay elemento contenido con el atributo disabled, entonces el control se considera enable (activado).
- `form`
  - : El elemento formulario al cual el select está asociado (su propietario del formulario). Si este atributo está especificado, su valor deberá ser el ID de un formulario en el mismo documento. Esto te permite situar elementos en cualquier parte del documento, no solo de manera descendiente con respecto a su elemento formulario.
- `multiple`
  - : Este elemento booleano indica que se pueden seleccionar múltiples opciones de la lista. Si no está especificado, solo se podrá seleccionar una opción cada vez.
- `name`
  - : El nombre del elemento de control.
- `required`
  - : Es un elemento boooleano que indica si la opcion puede quedar sin seleccionar o si es requerida.
- `size`
  - : Si el control se presenta como una lista con scroll en caja, este atributo representa el numero de filas que la list tendrá visible la primera vez. Los navegadores no están requeridos a presentar un elemento select como una lista con escroll en caja. El valor por defecto es cero.

> **Nota:** De acuerdo con las especificaciones de HTML5, el tamaño por defecto debe ser 1; sin embargo, en la práctica, esto hace que se rompan algunas páginas webs, y ningun otro navegador actualmente hace esto, así que Mozilla ha optado por continuar usando 0 desde que empezó con Firefox.

## DOM Interface

Este elemento implementa la interfaz `HTMLSelectElement.`

## Ejemplos

```html
<!-- The second value will be selected initially -->
<select name="select">
  <option value="value1">Value 1</option>
  <option value="value2" selected>Value 2</option>
  <option value="value3">Value 3</option>
</select>
```

{{EmbedLiveSample}}

### Notas

El contenido de este elemento es estático y no [editable](/es/docs/HTML/Content_Editable).

El siguiente ejemplo muestra como simular una lista con opciones editables, pero ten cuidado ya que algunos lectores de pantallas y dispositivos de ayuda no lo interpretarán de forma correcta; este ejemplo sería html inválido si usas los elementos correctos:

[This is an example](/files/4563/editable_select.html) de un select editable mediante un {{HTMLElement("fieldset")}} de [radioboxes](/es/docs/HTML/Element/Input) y [textboxes](/es/docs/HTML/Element/Input) (**escrito en CSS puro**, sin JavaScript),

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- Otros elementos relacionados de formularios: {{HTMLElement("form")}}, {{HTMLElement("legend")}}, {{HTMLElement("label")}}, {{HTMLElement("button")}}, {{HTMLElement("option")}}, {{HTMLElement("datalist")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("textarea")}}, {{HTMLElement("keygen")}}, {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}} and {{HTMLElement("meter")}}.

{{HTMLSidebar}}
