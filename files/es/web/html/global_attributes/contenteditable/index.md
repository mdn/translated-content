---
title: contenteditable
slug: Web/HTML/Global_attributes/contenteditable
---

> **Nota:** {{HTMLSidebar("Global_attributes")}}

El [atributo global](/es/docs/Web/HTML/Atributos_Globales) **contenteditable** es un atributo enumerado que indica si el elemento debe de ser editable por el usuario . Si es así, el explorador modifca su widget para permitir la edición . El atributo debe de tener alguno de los siguientes valores :

- `true` o una string vacia , que indica que el elemento debe de ser editable .
- `false` , que indica que el elemento no debe ser editable.

Si este atributo no se establece , el valor de default es _heredado_ de su elemento padre .

Este es un atributo enumerado y no uno _booleano ._ Esto significa que el uso explicito de uno de los valores `true` , `false` o la cadena vacía es obligatorio y que una código como `<label contenteditable>Example Label</label>` no esta permitido . El uso correcto es `<label contenteditable="true">Example Label</label>`.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [atributos globales](/es/docs/Web/HTML/Atributos_Globales)
- {{domxref("HTMLElement.contentEditable")}} and {{domxref("HTMLElement.isContentEditable")}}
