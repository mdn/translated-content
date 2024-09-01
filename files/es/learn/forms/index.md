---
title: Pilares de los Formularios HTML
slug: Learn/Forms
l10n:
  sourceCommit: b76266228bd0900aa1256902c7858971156a58c9
---

{{LearnSidebar}}

Este módulo provee una serie de articulos que te ayudarán a dominar los conocimientos imprecendibles de los formularios web. Los formularios HTML son una poderosa herramienta para interactuar con usuarios — comunmente son usados para obtener información de los usuarios, o permitirles controlar la interfaz de usuario. Sin embargo, por razones historicas y técnicas, no siempre es obvio como usarlos a su máximo potencial. En los articulos listados a continuación, vamos a cubrir todos los aspectos imprecendibles de los formularios Web incluyendo el marcado de su estructura HTML, esilizar los controles del formulario, validar los datos del formulario, y enviar los datos al servidor.

## Prerrequisitos

Antes de comenzar este módulo, deberías al menos completar nuestra [Introducción a HTML](/es/docs/Learn/HTML/Introduction_to_HTML). Hasta este punto, deberías ser capaz de comprender fácilmente las [Guías Introductorias](#guías_introductorias), y también ser capaz de usar nuestra guía de [Controles de formulario originales](/es/docs/Learn/Forms/Basic_native_form_controls).

Sin embargo para dominar los formularios, se require mas que conocimiento en HTML — también necesitas aprender algunas técnicas específicas para estlizar los controles del formulario, y es necesario un poco de conocimiento de scripting para manejar cosas como, validaciǫn y creación de controles personalizados. Por lo tanto, antes de que revises las secciones listadas a continuación, te recomendamos que primero vayas y aprendas un poco acerca de [CSS](/es/docs/Learn/CSS) y [JavaScript](/es/docs/Learn/JavaScript).

Lo antes mencionado es un buen indicador de porque pusimos los formularios web en su propio módulo independiente, en lugar de intentar mezclar pedazos de información dentro de areas como HTML, CSS y JavaScript — los elementos de formulario son más complejos que la mayoría de los elemento de HTML, y también requieren de una cercana relación con técnicas de CSS y JavaScript para obtener los mejor de ellos.

> [!NOTE]
> Si estas trabajando en una computadora/tableta/otro dispósitivo, donde no tienes la habilidad de crear tus propios archivos, podrías probar (la mayoría) del código de ejemplo en un sitio de programación en línea como [JSBin](https://jsbin.com/) o [Glitch](https://glitch.com/).

## Guías Introductorias

- [Mi primer formulario HTML](/es/docs/Learn/Forms/Your_first_form)
  - : The first article in our series provides your very first experience of creating a web form, including designing a simple form, implementing it using the right HTML elements, adding some very simple styling via CSS, and how data is sent to a server.
- [Como estructurar un formulario HTML](/es/docs/Learn/Forms/How_to_structure_a_web_form)
  - : With the basics out of the way, we now look in more detail at the elements used to provide structure and meaning to the different parts of a form.

## The different form controls

- [Basic native form controls](/en-US/docs/Learn/Forms/Basic_native_form_controls)
  - : We start off this section by looking at the functionality of the original HTML {{htmlelement("input")}} types in detail, looking at what options are available to collect different types of data.
- [The HTML5 input types](/en-US/docs/Learn/Forms/HTML5_input_types)
  - : Here we continue our deep dive into the `<input>` element, looking at the additional input types provided when HTML5 was released, and the various UI controls and data collection enhancements they provide. Additionally, we look at the {{htmlelement('output')}} element.
- [Other form controls](/en-US/docs/Learn/Forms/Other_form_controls)
  - : Next we take a look at all the non-`<input>` form controls and associated tools, such as {{htmlelement('select')}}, {{htmlelement('textarea')}}, {{htmlelement('meter')}}, and {{htmlelement('progress')}}.

## Form styling guides

- [Styling web forms](/en-US/docs/Learn/Forms/Styling_web_forms)
  - : This article provides an introduction to styling forms with CSS, including all the basics you might need to know for basic styling tasks.
- [Advanced form styling](/en-US/docs/Learn/Forms/Advanced_form_styling)
  - : Here we look at some more advanced form styling techniques that need to be used when trying to deal with some of the more difficult-to-style form elements.
- [UI pseudo-classes](/en-US/docs/Learn/Forms/UI_pseudo-classes)
  - : An introduction to the UI pseudo-classes enabling HTML form controls to be targeted based on their current state.

## Validating and submitting form data

- [Client-side form validation](/en-US/docs/Learn/Forms/Form_validation)
  - : Sending data is not enough — we also need to make sure that the data users enter into forms is in the correct format to process it successfully, and that it won't break our applications. We also want to help our users to fill out our forms correctly and not get frustrated when trying to use our apps. Form validation helps us achieve these goals — this article tells you what you need to know.
- [Sending form data](/en-US/docs/Learn/Forms/Sending_and_retrieving_form_data)
  - : This article looks at what happens when a user submits a form — where does the data go, and how do we handle it when it gets there? We also look at some of the security concerns associated with sending form data.

## Advanced articles

The following articles aren't essential to the learning pathway, but they'll prove interesting and useful when you've mastered the above techniques and want to know more.

- [How to build custom form controls](/en-US/docs/Learn/Forms/How_to_build_custom_form_controls)
  - : You'll come across some cases where the native form widgets just don't provide what you need, e.g. because of styling or functionality. In such cases, you may need to build your own form widget out of raw HTML. This article explains how you'd do this and the considerations you need to be aware of when doing so, with a practical case study.
- [Sending forms through JavaScript](/en-US/docs/Learn/Forms/Sending_forms_through_JavaScript)
  - : This article looks at ways to use a form to assemble an HTTP request and send it via custom JavaScript, rather than standard form submission. It also looks at why you'd want to do this, and the implications of doing so. (See also [Using FormData objects](/en-US/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects).)
- [CSS property compatibility table for form controls](/en-US/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
  - : This last article provides a handy reference allowing you to look up what CSS properties are compatible with what form elements.

## Véase también

- [HTML forms element reference](/es/docs/Web/HTML/Element#forms)
- [HTML \<input> types reference](/es/docs/Web/HTML/Element/input)
- [HTML attribute reference](/es/docs/Web/HTML/Attributes)
- [User input methods and controls](/es/docs/Learn/Forms/User_input_methods)
