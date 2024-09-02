---
title: Pilares de los Formularios HTML
slug: Learn/Forms
l10n:
  sourceCommit: b76266228bd0900aa1256902c7858971156a58c9
---

{{LearnSidebar}}

Este módulo provee una serie de articulos que te ayudarán a dominar los conocimientos imprecendibles de los formularios web. Los formularios HTML son una poderosa herramienta para interactuar con usuarios — comunmente son usados para obtener información de los usuarios, o permitirles controlar la interfaz de usuario. Sin embargo, por razones historicas y técnicas, no siempre es obvio como usarlos a su máximo potencial. En los articulos listados a continuación, vamos a cubrir todos los aspectos imprecendibles de los formularios Web incluyendo el marcado de su estructura HTML, esilizado de los controles, validación de los datos, y entrega de los datos al servidor.

## Prerrequisitos

Antes de comenzar este módulo, deberías al menos completar nuestra [Introducción a HTML](/es/docs/Learn/HTML/Introduction_to_HTML). Hasta este punto, deberías ser capaz de comprender fácilmente las [Guías Introductorias](#guías_introductorias), y también ser capaz de usar nuestra guía de [Controles de formulario originales](/es/docs/Learn/Forms/Basic_native_form_controls).

Sin embargo para dominar los formularios, se require mas que conocimiento en HTML — también necesitas aprender algunas técnicas específicas para estlizar los controles del formulario, y es necesario un poco de conocimiento de scripting para manejar cosas como, validaciǫn y creación de controles personalizados. Por lo tanto, antes de que revises las secciones listadas a continuación, te recomendamos que primero vayas y aprendas un poco acerca de [CSS](/es/docs/Learn/CSS) y [JavaScript](/es/docs/Learn/JavaScript).

Lo antes mencionado es un buen indicador de porque pusimos los formularios web en su propio módulo independiente, en lugar de intentar mezclar pedazos de información dentro de areas como HTML, CSS y JavaScript — los elementos de formulario son más complejos que la mayoría de los elemento de HTML, y también requieren de una cercana relación con técnicas de CSS y JavaScript para obtener los mejor de ellos.

> [!NOTE]
> Si estas trabajando en una computadora/tableta/otro dispósitivo, donde no tienes la habilidad de crear tus propios archivos, podrías probar (la mayoría) del código de ejemplo en un sitio de programación en línea como [JSBin](https://jsbin.com/) o [Glitch](https://glitch.com/).

## Guías Introductorias

- [Mi primer formulario HTML](/es/docs/Learn/Forms/Your_first_form)
  - : El primer articulo de nuestra serie, te provee la experiencia de crear por primera vez un formulario HTML, incluyendo diseñar un formulario sencillo, hacer una implementación usando los elementos HTML adecuados, agregar un estilizado simple a través de CSS, y como se envian los datos al servidor.
- [Como estructurar un formulario HTML](/es/docs/Learn/Forms/How_to_structure_a_web_form)
  - : Con los conceptos básicos fuera de nuestro camino, podemos ver más a detalle los elementos usados para proveer estructura y significado a diferentes partes del formulario.

## Diferentes tipos de controles de formulario

- [Controles de formulario originales](/es/docs/Learn/Forms/Basic_native_form_controls)
  - : Iniciamos esta seccion, viendo a detalle los tipos {{htmlelement("input")}} originales de HTML, revisando que opciones hay disponibles para recabar los diferentes tipos de datos.
- [Tipos de _input_ de HTML5](/es/docs/Learn/Forms/HTML5_input_types)
  - : Aquí continuamos adentrandonos en el elemento `<input>`, revisando los tipos adicionales de _input_ proporcionados cuando HTML5 fué publicado, junto a los múltiples controles de interfaz de usuario y mejoras en la colección de datos. Adicionalmente, revisaremos el elemento {{htmlelement('output')}}.
- [Otros controles de formulario HTML](/es/docs/Learn/Forms/Other_form_controls)
  - : En seguida revisamos, todos los controles de formulario no-`<input>` y las herramientas asociadas, tales como {{htmlelement('select')}}, {{htmlelement('textarea')}}, {{htmlelement('meter')}}, y {{htmlelement('progress')}}.

## Guías de estilizado de formularios

- [Estilizando formularios HTML](/es/docs/Learn/Forms/Styling_web_forms)
  - : This article provides an introduction to styling forms with CSS, including all the basics you might need to know for basic styling tasks.
- [Estilizado avanzado de formularios HTML](/es/docs/Learn/Forms/Advanced_form_styling)
  - : Here we look at some more advanced form styling techniques that need to be used when trying to deal with some of the more difficult-to-style form elements.
- [UI pseudo-classes](/es/docs/Learn/Forms/UI_pseudo-classes)
  - : An introduction to the UI pseudo-classes enabling HTML form controls to be targeted based on their current state.

## Validando y entregando los datos del formulario

- [Validación del lado del cliente](/es/docs/Learn/Forms/Form_validation)
  - : Sending data is not enough — we also need to make sure that the data users enter into forms is in the correct format to process it successfully, and that it won't break our applications. We also want to help our users to fill out our forms correctly and not get frustrated when trying to use our apps. Form validation helps us achieve these goals — this article tells you what you need to know.
- [Enviando los datos del formulario HTML](/es/docs/Learn/Forms/Sending_and_retrieving_form_data)
  - : This article looks at what happens when a user submits a form — where does the data go, and how do we handle it when it gets there? We also look at some of the security concerns associated with sending form data.

## Articulos avanzados

The following articles aren't essential to the learning pathway, but they'll prove interesting and useful when you've mastered the above techniques and want to know more.

- [Como crear controles de formulario HTML personalizados](/es/docs/Learn/Forms/How_to_build_custom_form_controls)
  - : You'll come across some cases where the native form widgets just don't provide what you need, e.g. because of styling or functionality. In such cases, you may need to build your own form widget out of raw HTML. This article explains how you'd do this and the considerations you need to be aware of when doing so, with a practical case study.
- [Enviando formularios HTML a través de JavaScript](/es/docs/Learn/Forms/Sending_forms_through_JavaScript)
  - : This article looks at ways to use a form to assemble an HTTP request and send it via custom JavaScript, rather than standard form submission. It also looks at why you'd want to do this, and the implications of doing so. (Véase también [Usando objetos FormData](/es/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects).)
- [Tabla de compatibilidad de propiedades de CSS para controles de formularios HTML](/es/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
  - : This last article provides a handy reference allowing you to look up what CSS properties are compatible with what form elements.

## Véase también

- [Referencia de formularios HTML](/es/docs/Web/HTML/Element#formularios)
- [Referencia de tipos <input>](/es/docs/Web/HTML/Element/input)
- [Referencia de atributos HTML](/es/docs/Web/HTML/Attributes)
- [Controles y entradas de usuario](/es/docs/Learn/Forms/User_input_methods)
