---
title: Pilares de los formularios web
slug: Learn_web_development/Extensions/Forms
original_slug: Learn/Forms
l10n:
  sourceCommit: b76266228bd0900aa1256902c7858971156a58c9
---

{{LearnSidebar}}

Este módulo provee una serie de artículos que te ayudarán a dominar los conocimientos imprecendibles de los formularios web. Los formularios web son una poderosa herramienta para interactuar con usuarios — comunmente son usados para obtener información de los usuarios, o permitirles controlar la interfaz de usuario. Sin embargo, por razones históricas y técnicas, no siempre es obvio como usarlos a su máximo potencial. En los artículos listados a continuación, vamos a cubrir todos los aspectos imprecendibles de los formularios web incluyendo el marcado de su estructura HTML, esilizado de los controles, validación de los datos, y entrega de los datos al servidor.

## Prerrequisitos

Antes de comenzar este módulo, deberías al menos completar nuestra [Introducción a HTML](/es/docs/Learn/HTML/Introduction_to_HTML). Hasta este punto, deberías ser capaz de comprender fácilmente las [Guías Introductorias](#guías_introductorias), y también ser capaz de usar nuestra guía de [Controles de formulario nativos básicos](/es/docs/Learn/Forms/Basic_native_form_controls).

Sin embargo para dominar los formularios, se require mas que conocimiento en HTML — también necesitas aprender algunas técnicas específicas para estlizar los controles del formulario, y es necesario un poco de conocimiento de _scripting_ para manejar cosas como, validación y creación de controles personalizados. Por lo tanto, antes de que revises las secciones listadas a continuación, te recomendamos que primero vayas y aprendas un poco acerca de [CSS](/es/docs/Learn/CSS) y [JavaScript](/es/docs/Learn/JavaScript).

Lo antes mencionado es un buen indicador de porque pusimos los formularios web en su propio módulo independiente, en lugar de intentar mezclar pedazos de información dentro de areas como HTML, CSS y JavaScript — los elementos de formulario son más complejos que la mayoría de los elemento de HTML, y también requieren de una cercana relación con técnicas de CSS y JavaScript para obtener lo mejor de ellos.

> [!NOTE]
> Si estas trabajando en una computadora/tableta/otro dispósitivo, donde no tienes la habilidad de crear tus propios archivos, podrías probar (la mayoría) del código de ejemplo en un sitio de programación en línea como [JSBin](https://jsbin.com/) o [Glitch](https://glitch.com/).

## Guías Introductorias

- [Tu primer formulario](/es/docs/Learn/Forms/Your_first_form)
  - : El primer artículo de nuestra serie, te provee la experiencia de crear por primera vez un formulario web, incluyendo diseñar un formulario sencillo, hacer una implementación usando los elementos HTML adecuados, agregar un estilizado simple a través de CSS, y como se envian los datos al servidor.
- [Como estructurar un formulario web](/es/docs/Learn/Forms/How_to_structure_a_web_form)
  - : Con los conceptos básicos fuera de nuestro camino, podemos ver más a detalle los elementos usados para proveer estructura y significado a diferentes partes del formulario.

## Diferentes tipos de controles de formulario

- [Controles de formulario nativos básicos](/es/docs/Learn/Forms/Basic_native_form_controls)
  - : Iniciamos esta sección, viendo a detalle los tipos {{htmlelement("input")}} originales de HTML, revisando que opciones hay disponibles para recabar los diferentes tipos de datos.
- [Tipos de _input_ de HTML5](/es/docs/Learn/Forms/HTML5_input_types)
  - : Aquí continuamos adentrandonos en el elemento `<input>`, revisando los tipos adicionales de _input_ proporcionados cuando HTML5 fué publicado, junto a los múltiples controles de interfaz de usuario y mejoras en la colección de datos. Adicionalmente, revisaremos el elemento {{htmlelement('output')}}.
- [Otros controles de formulario HTML](/es/docs/Learn/Forms/Other_form_controls)
  - : En seguida revisamos todos los controles de formulario no-`<input>` y las herramientas asociadas a ellos, tales como {{htmlelement('select')}}, {{htmlelement('textarea')}}, {{htmlelement('meter')}}, y {{htmlelement('progress')}}.

## Guías de estilizado de formularios

- [Estilizando formularios web](/es/docs/Learn/Forms/Styling_web_forms)
  - : Este artículo proporciona una introducción a como estilizar formularios con CSS, incluyendo todos los fundamentos que puede que necesites saber para tareas básicas de estilizado.
- [Estilizado avanzado de formularios](/es/docs/Learn/Forms/Advanced_form_styling)
  - : Aquí revisamos algunas técnicas más avanzadas que necesitan usarse cuando se trata de trabajar con algunos de los elementos de los formularios más difíciles de estilizar.
- [UI pseudo-classes](/es/docs/Learn/Forms/UI_pseudo-classes)
  - : Una introducción a las pseudo clases UI que habilitan los controles de formularios HTML para ser elegidos como objetivo basado en su estado actual.

## Validando y entregando los datos del formulario

- [Validación del lado del cliente](/es/docs/Learn/Forms/Form_validation)
  - : Enviar información no es suficiente — también necesitamos asegurarnos que la información que los usuarios registran en los formularios está en el formato correcto para ser procesada exitosamente, y que no romperá nuestras aplicaciones. También queremos ayudar a nuestros usuarios a llenar correctamente nuestos formularios y no frustrarse intentando usar nuestras aplicaciones. La validación de formularios nos ayuda a alcanzar estas metas — este artículo te muestra los que necesitas saber al respecto.
- [Enviando los datos del formulario](/es/docs/Learn/Forms/Sending_and_retrieving_form_data)
  - : Este artículo revisa que es lo que sucede cuando un usuario envia un formulario — ¿a dónde va la información?, y ¿cómo la manejamos una vez que llega ahí? También revisamos algunas de las preocupaciones de seguridad asociadas a enviar información de formularios.

## Artículos avanzados

Los siguientes artículos, no son escenciales para el aprendizaje, pero pueden resultar interesantes y útiles cuando has dominado las técnicas antes presentadas y deseas saber más.

- [Como crear controles de formulario personalizados](/es/docs/Learn/Forms/How_to_build_custom_form_controls)
  - : Te encontras con algunos casos donde los _widgets_ nativos de los formularios, simplemente no proveen lo que necesitas p.ej debido a estilos o funcionalidad. En esos casos, quizás necesitarás construir tu propio _widget_ con HTML puro. Este artículo explica como podrías hacerlo, y las concideraciones de las que debes estar conciente al hacerlo, con un caso de estudio práctico.
- [Enviando formularios a través de JavaScript](/es/docs/Learn/Forms/Sending_forms_through_JavaScript)
  - : Este artículo revisa las maneras de usar un formulario para formar una solocitud HTTP y enviarla a través de JavaScript personalizado, en vez de hacerlo a través de envio de formulaio estándar. También revisa el porque querrías hacer esto, y las implacaciones de hacerlo. (Véase también [Usando objetos FormData](/es/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects).)
- [Tabla de compatibilidad de propiedades de CSS para controles de formularios](/es/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
  - : Por último, este artículo provee una referencia práctica revisar que propiedades CSS son compatibles con que elements de formulario.

## Véase también

- [Referencia de elementos de formularios HTML](/es/docs/Web/HTML/Element#formularios)
- [Referencia de tipos \<input>](/es/docs/Web/HTML/Element/input)
- [Referencia de atributos HTML](/es/docs/Web/HTML/Attributes)
- [Controles y métodos de entradas de usuario](/es/docs/Learn/Forms/User_input_methods)
