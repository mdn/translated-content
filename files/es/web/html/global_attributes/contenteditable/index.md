---
title: contenteditable
slug: Web/HTML/Global_attributes/contenteditable
tags:
  - Atributos globales
  - HTM
  - Referencia
translation_of: Web/HTML/Global_attributes/contenteditable
original_slug: Web/HTML/Atributos_Globales/contenteditable
---
> **Nota:** {{HTMLSidebar("Global_attributes")}}

El [atributo global](/es/docs/Web/HTML/Atributos_Globales) **contenteditable** es un atributo enumerado que indica si el elemento debe de ser editable por el usuario . Si es así, el explorador modifca su widget para permitir la edición . El atributo debe de tener alguno de los siguientes valores :

- `true` o una string vacia , que indica que el elemento debe de ser editable .
- `false` , que indica que el elemento no debe ser editable.

Si este atributo no se establece , el valor de default es _heredado_ de su elemento padre .

Este es un atributo enumerado y no uno _booleano ._ Esto significa que el uso explicito de uno de los valores `true` , `false` o la cadena vacía es obligatorio y que una código como `<label contenteditable>Example Label</label>` no esta permitido . El uso correcto es `<label contenteditable="true">Example Label</label>`.

## Especificaciones

| Especificación                                                                                                   | Estatus                          | Comentario                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "editing.html#attr-contenteditable", "contenteditable")}} | {{Spec2('HTML WHATWG')}} | Sin cambio desde el último snapshot, {{SpecName('HTML5.1')}}                               |
| {{SpecName('HTML5.1', "editing.html#attr-contenteditable", "contenteditable")}}         | {{Spec2('HTML5.1')}}     | Snapshot de {{SpecName('HTML WHATWG')}}, sin cambio desde {{SpecName('HTML5 W3C')}} |
| {{SpecName('HTML5 W3C', "editing.html#attr-contenteditable", "contenteditable")}}     | {{Spec2('HTML5 W3C')}}     | Snapshot de {{SpecName('HTML WHATWG')}}, definición inicial.                               |

## Compatiblidad en exploradores

{{Compat("html.global_attributes.contenteditable")}}

## Ver también

- [atributos globales](/es/docs/Web/HTML/Atributos_Globales)
- {{domxref("HTMLElement.contentEditable")}} and {{domxref("HTMLElement.isContentEditable")}}
