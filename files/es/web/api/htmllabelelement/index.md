---
title: HTMLLabelElement
slug: Web/API/HTMLLabelElement
---

{{ APIRef("HTML DOM") }}

La interfaz **`HTMLLabelElement`** proporciona acceso a propiedades especificas de los elementos {{HTMLElement("label")}}. A su vez, hereda métodos y propiedades de la interfaz base {{domxref("HTMLElement")}}.

{{InheritanceDiagram(600,120)}}

## Propiedades

_Heredando propiedades de los elementos padres {{domxref("HTMLElement")}}._

- {{domxref("HTMLLabelElement.control")}} {{ReadOnlyInline}}
  - : Es un {{domxref("HTMLElement")}} representando el control a la cual cada etiqueta esta asociado.
- {{domxref("HTMLLabelElement.form")}} {{ReadOnlyInline}}
  - : Es un objeto {{domxref("HTMLFormElement")}} representado el formulario al cual el control etiquetado está asociado, arrojando el valor `null`, si no hay asociado ningun control o si ese control no está asociado con un formulario. En otras palabras, esto es un atajo para: `HTMLLabelElement.control.form`.
- {{domxref("HTMLLabelElement.htmlFor")}}
  - : Este es un contenedor de caracteres que contiene el ID del control etiquetado, esto es lo que refleja el atributo [`for`](/es/docs/Web/HTML/Reference/Elements/label#for)

## Métodos

_No hay metodos específicos, hereda los metodos de los elelemtos padres, {{domxref("HTMLElement")}}._

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- Elementos HTML implementando esta interfaz: {{HTMLElement("label")}}
- {{HTMLElement("form")}}
- {{domxref("HTMLFormElement")}}
