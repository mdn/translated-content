---
title: HTMLLabelElement
slug: Web/API/HTMLLabelElement
tags:
  - API
  - HTML DOM
  - HTMLLabeledElement
  - Interface
  - Referencia
translation_of: Web/API/HTMLLabelElement
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
  - : Este es un contenedor de caracteres que contiene el ID del control etiquetado, esto es lo que refleja el atributo {{htmlattrxref("for", "label")}}

## Métodos

_No hay metodos específicos, hereda los metodos de los elelemtos padres, {{domxref("HTMLElement")}}._

## Especificaciones

| Especificación                                                                                           | Estatus                          | Comentario                                                                                                                                 |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('HTML WHATWG', "#htmllabelelement", "HTMLLabelElement")}}             | {{Spec2('HTML WHATWG')}} |                                                                                                                                            |
| {{SpecName('HTML5 W3C', "forms.html#the-label-element", "HTMLLabelElement")}} | {{Spec2('HTML5 W3C')}}     | La propiedad `accessKey` ahora está definida en: {{domxref("HTMLElement")}}. La siguiente propiedad ha sido agregada: `control`. |
| {{SpecName('DOM2 HTML', 'html.html#ID-13691394', 'HTMLLabelElement')}}             | {{Spec2('DOM2 HTML')}}     | Sin cambios desde: {{SpecName("DOM1")}}.                                                                                           |
| {{SpecName('DOM1', 'level-one-html.html#ID-13691394', 'HTMLLabelElement')}}     | {{Spec2('DOM1')}}         | definición inicial                                                                                                                         |

## Compatibilidad de Navegador Web

{{Compat("api.HTMLLabelElement")}}

## Ver también

- Elementos HTML implementando esta interfaz: {{HTMLElement("label")}}
- {{HTMLElement("form")}}
- {{domxref("HTMLFormElement")}}
