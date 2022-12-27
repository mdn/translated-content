---
title: hidden
slug: Web/HTML/Global_attributes/hidden
tags:
  - Atributos globales
  - HTML
  - Referencia
translation_of: Web/HTML/Global_attributes/hidden
original_slug: Web/HTML/Atributos_Globales/hidden
---
{{HTMLSidebar("Global_attributes")}}

El [atributo global](/es/docs/Web/HTML/Atributos_Globales/) **hidden** es un atributo Booleano que indica que el elemento todavía no está , o ya no es relevante . Por ejemplo , puede ser usado para ocultar elelementos de la página que no pueden ser usados hasta que el proceso de login se haya completado . El explorador no dibujará dichos elementos .

Esta atributo no debe de usarse para ocultar contenido que pudera ser legítimamente mostrado . Por ejemplo , no debe de ser usado para ocultar paneles de pestañas o una interfaz con pestañas , ya que esta es una decisión de estilo y otro estilo mostrandolos lo llevaría a una página perfectamente mostrada .

Los elementos ocultos no deben de ser vinculados desde elementos no ocultos y elementos que son descendientes de un elemento oculto todavía activo ; lo que significa que los elementos del script pueden todavía ejecutarse y los elementos de formulario pueden todavía enviarse .

> **Nota:** Cambiando el valor de la propiedad CSS {{cssxref("display")}} de un elemento con el atributo `hidden` sobrecarga el comportamiento . For ejemplo , un elemeneto diseñado `display : flex` será mostrado en la pantalla independientemente de que el atributo `hidden` esté presente .

## Especificaciones

| Especificación                                                                                           | Estatus                          | Comentario                                                             |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ---------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "interaction.html#the-hidden-attribute", "hidden")}} | {{Spec2('HTML WHATWG')}} | Sin cambio desde el último snapshot, {{SpecName('HTML5.1')}}  |
| {{SpecName('HTML WHATWG', "rendering.html#hiddenCSS", "Hidden elements")}}     | {{Spec2('HTML WHATWG')}} | Define el dibujado por default sugerido del atributo hidden usando CSS |
| {{SpecName('HTML5.1', "editing.html#the-hidden-attribute", "hidden")}}             | {{Spec2('HTML5.1')}}     | Snapshot de {{SpecName('HTML WHATWG')}}, definición inicial   |

## Compatibilidad en exploradores

{{Compat("html.global_attributes.hidden")}}

## Ver también

- [atributos globales](/es/docs/Web/HTML/Atributos_Globales/)
