---
title: lang
slug: Web/HTML/Global_attributes/lang
tags:
  - Atributos globales
  - HTML
  - Referencia
translation_of: Web/HTML/Global_attributes/lang
original_slug: Web/HTML/Atributos_Globales/lang
---
{{HTMLSidebar("Global_attributes")}}

El [atributo global](/es/docs/Web/HTML/Atributos_Globales) **lang** participa en la definición del lenguaje del elemento , el lenguaje en que están escritos los elementos no editables o el lenguaje en el cual los elementos editables deberían de estar escritos . La etiqueta contiene un valor sencillo de entrada en el formato que define el documento [tags para identificar lenguajes](http://www.ietf.org/rfc/bcp/bcp47.txt) (BCP47) de la IETF . Si el contenido de la etiqueta es la _cadena vacía_ , el lenguaje se establece como _desconocido_ , si el contenido de la etiqueta no es válido respecto al documento BCP47 , se establece como _inválido ._

Incluso si el atributo **lang** está establecido , puede que no se tome en cuenta , ya que el atributo **xml:lang** tiene prioridad . Leer el algoritmo para determinar el lenguaje de el contenido de un elemento para ver como es determinado el lenguaje en todos los casos.

Para la pseudo clase { cssxref(":lang") }} de CSS, dos nombres invalidos de lenguaje son diferentes si sus nombres son diferentes .

## Especificaciones

| Especificación                                                                                               | Estatus                          | Comentario                                                                                                                                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "dom.html#the-lang-and-xml:lang-attributes", "lang")}} | {{Spec2('HTML WHATWG')}} | Sin cambio desde el último snapshot, {{SpecName('HTML5.1')}}                                                                                                                                                                                                                                                                                     |
| {{SpecName('HTML5.1', "dom.html#the-lang-and-xml:lang-attributes", "lang")}}         | {{Spec2('HTML5.1')}}     | Snapshot de {{SpecName('HTML WHATWG')}}, sin cambio desde {{SpecName('HTML5 W3C')}}                                                                                                                                                                                                                                                       |
| {{SpecName('HTML5 W3C', "dom.html#the-lang-and-xml:lang-attributes", "lang")}}     | {{Spec2('HTML5 W3C')}}     | Snapshot de {{SpecName('HTML WHATWG')}}, comportandose con **xml:lang** y el algoritmo de determinación del lenguaje . También es un verdadero atributo global .                                                                                                                                                                                 |
| {{SpecName('HTML4.01', 'struct/dirlang.html#h-8.1', 'lang')}}                             | {{Spec2('HTML4.01')}}     | Soportado en todos los elementos menos en {HTMLElement("applet")}}, {{HTMLElement("base")}}, {{HTMLElement("basefont")}}, {{HTMLElement("br")}}, {{HTMLElement("frame")}}, {{HTMLElement("frameset")}}, {{HTMLElement("iframe")}}, {{HTMLElement("param")}}, y {{HTMLElement("script")}}. |

## Compatibilidad en exploradores

{{Compat("html.global_attributes.lang")}}

## Ver también

- [atributos globales](/es/docs/Web/HTML/Atributos_Globales)
