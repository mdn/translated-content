---
title: class
slug: Web/HTML/Global_attributes/class
tags:
  - Atributos globales
  - HTML
  - Referencia
translation_of: Web/HTML/Global_attributes/class
original_slug: Web/HTML/Atributos_Globales/class
---
{{HTMLSidebar("Global_attributes")}}
El [atributo global](/es/docs/Web/HTML/Atributos_Globales) **class** es una lista de las clases del elemento separada por espacios . Las clases permiten a CSS y Javascript seleccionar y acceder a elementos específicos a través de los [selectores de clase](/es/docs/Web/CSS/Class_selectors) o funciones como el método {{domxref("document.getElementsByClassName")}} del DOM.

Aunque la especificación no define los requerimientos para el nombre de las clases , se alienta a los desarrolladores web a usar nombres que describan el propósito semántico del elemento, en lugar de la presentación del elemento (e.g., _atributo_ para describir un atributo en lugar de _itálica,_ aunque un elemento de esta clase puesde ser presentado por _itálica_). Los nombres semanticos permanecen lógicos incluso si la presentación de la página cambia .

## Especificaciones

| Especificación                                                                       | Estatus                          | Comment                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------ | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "elements.html#classes", "class")}}     | {{Spec2('HTML WHATWG')}} | Sin cambio desde el último snapshot, {{SpecName('HTML5.1')}}                                                                                                                                                                                                                                                                                         |
| {{SpecName('HTML5.1', "elements.html#classes", "class")}}         | {{Spec2('HTML5.1')}}     | Snapshot de {{SpecName('HTML WHATWG')}}, sin cambio desde {{SpecName('HTML5 W3C')}}                                                                                                                                                                                                                                                           |
| {{SpecName('HTML5 W3C', "elements.html#classes", "class")}}     | {{Spec2('HTML5 W3C')}}     | Snapshot de {{SpecName('HTML WHATWG')}}. Desde {{SpecName('HTML4.01')}}, `class` es ahora un verdadero atributo global .                                                                                                                                                                                                                     |
| {{SpecName('HTML4.01', "struct/global.html#h-7.5.2", "class")}} | {{Spec2('HTML4.01')}}     | Soportado en todos los elementos pero {{HTMLElement("base")}}, {{HTMLElement("basefont")}}, {{HTMLElement("head")}}, {{HTMLElement("html")}}, {{HTMLElement("meta")}}, {{HTMLElement("param")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}}, y {{HTMLElement("title")}}. |

## Compatibilidad en exploradores

{{Compat("html.global_attributes.class")}}

## Ver también

- [atributos globales](/es/docs/Web/HTML/Atributos_Globales)
