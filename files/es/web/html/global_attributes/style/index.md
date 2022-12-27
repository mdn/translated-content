---
title: style
slug: Web/HTML/Global_attributes/style
tags:
  - Atributos globales
  - HTML
  - Referencia
translation_of: Web/HTML/Global_attributes/style
original_slug: Web/HTML/Atributos_Globales/style
---
{{HTMLSidebar("Global_attributes")}}

El [atributo global](/es/docs/Web/HTML/Atributos_Globales) **style** contiene declaraciones de estilo [CSS](/es/docs/Web/CSS) a ser aplicados a un elemento . Notar que es recomandado para los estilos ser definidos en archivo o archivos separados . Este atributo y el elemento {{ HTMLElement("style") }} tienen principalmente el propósito de permitir el estilizamiento rápido , por ejemplo para propósitos de pruebas .

**Nota de uso :** Este atributo no debe de ser usado para comunicar información semántica . Incluso si todo el estilo es removido , una página debería mantenerse semánticamente correcta . Típicamente no debe de ser usado para ocultar información irrelevante ; esto debe de hacerse usando el atributo [hidden](/es/docs/Web/HTML/Global_attributes/style$translate?tolocale=es#attr-hidden) .

## Especificaciones

| Especificación                                                                               | Estatus                          | Comentario                                                                                                                                                                                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "dom.html#the-style-attribute", "style")}} | {{Spec2('HTML WHATWG')}} | Sin cambio desde el último snapshot, {{SpecName('HTML5.1')}}                                                                                                                                                                                                                                                                                             |
| {{SpecName('HTML5.1', "dom.html#the-style-attribute", "style")}}         | {{Spec2('HTML5.1')}}     | Snapshot de {{SpecName('HTML WHATWG')}}, sin cambio desde {{SpecName('HTML5 W3C')}}                                                                                                                                                                                                                                                               |
| {{SpecName('HTML5 W3C', "dom.html#the-style-attribute", "style")}}     | {{Spec2('HTML5 W3C')}}     | Snapshot de {{SpecName('HTML WHATWG')}}. Desde {{SpecName("HTML4.01")}}, es ahora un verdadero atributo global .                                                                                                                                                                                                                                 |
| {{SpecName('HTML4.01', 'present/styles.html#h-14.2.2', 'style')}}     | {{Spec2('HTML4.01')}}     | Soportado en todos los elementos menos en {{HTMLElement("base")}}, {{HTMLElement("basefont")}}, {{HTMLElement("head")}}, {{HTMLElement("html")}}, {{HTMLElement("meta")}}, {{HTMLElement("param")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}}, y {{HTMLElement("title")}}. |
| {{ SpecName("CSS3 Style", "", "") }}                                             | {{Spec2("CSS3 Style")}} | Define el contenido del atributo **style** .                                                                                                                                                                                                                                                                                                                      |

## Compatibilidad en exploradores

{{Compat("html.global_attributes.style")}}

## Ver también

- [atributos globales.](/es/docs/Web/HTML/Atributos_Globales)
