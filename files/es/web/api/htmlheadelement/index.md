---
title: HTMLHeadElement
slug: Web/API/HTMLHeadElement
translation_of: Web/API/HTMLHeadElement
---
{{APIRef("HTML DOM")}}

La interfaz **`HTMLHeadElement`** contiene la información descriptiva, o metadata, para un documento. Este objeto hereda las propiedades y métodos descritos en la interfaz {{domxref("HTMLElement")}}.

{{InheritanceDiagram(600, 120)}}

## Propiedades

_Hereda las propiedades del padre, {{domxref("HTMLElement")}}._

- {{domxref("HTMLHeadElement.profile")}} {{obsolete_inline}}
  - : Es un {{domxref("DOMString")}} que representa las URI de uno o más perfiles de metadatos (separados por espacios en blanco).

## Métodos

_No hay un método especifico; hereda los métodos del padre, {{domxref("HTMLElement")}}._

## Especificaciones

| Especificación                                                                                                       | Estado                           | Comentarios                                         |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------------------- |
| {{SpecName('HTML WHATWG', "#htmlheadelement", "HTMLHeadElement")}}                             | {{Spec2('HTML WHATWG')}} |                                                     |
| {{SpecName('HTML5.1', "document-metadata.html#the-head-element", "HTMLHeadElement")}}     | {{Spec2('HTML5.1')}}     | Sin cambio desde {{SpecName('HTML5 W3C')}}.  |
| {{SpecName('HTML5 W3C', "document-metadata.html#the-head-element", "HTMLHeadElement")}} | {{Spec2('HTML5 W3C')}}     | La siguiente propiedad ha sido removida: `profile`. |
| {{SpecName('DOM2 HTML', 'html.html#ID-77253168', 'HTMLHeadElement')}}                         | {{Spec2('DOM2 HTML')}}     | Sin cambio                                          |
| {{SpecName('DOM1', 'level-one-html.html#ID-77253168', 'HTMLHeadElement')}}                 | {{Spec2('DOM1')}}         | Definición inicial                                  |

## Compatibilidad con Navegadores

{{Compat("api.HTMLHeadElement")}}

## Vea también

- El elemento HTML que implementa esta interfaz: {{HTMLElement("head")}}
