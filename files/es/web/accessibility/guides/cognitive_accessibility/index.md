---
title: Accesibilidad cognitiva
slug: Web/Accessibility/Guides/Cognitive_accessibility
l10n:
  sourceCommit: 7ba6358a0ff684cc67c60b76d6d972722bbf0d18
---

La accesibilidad cognitiva abarca las consideraciones de accesibilidad para personas con discapacidades cognitivas y dificultades del aprendizaje. Este documento presenta las bases de la accesibilidad cognitiva y explica cómo mejorar la accesibilidad web para personas con diferencias cognitivas y del aprendizaje.

La discapacidad cognitiva hace referencia a una amplia gama de discapacidades, desde personas con discapacidad intelectual que pueden tener las capacidades más limitadas, hasta problemas relacionados con la edad que afectan al pensamiento y la memoria. Este abanico incluye a personas que conviven con condiciones de salud mental, como la depresión y la esquizofrenia. También engloba a personas con dificultades del aprendizaje, como la dislexia y el trastorno por déficit de atención e hiperactividad (TDAH).

Aunque existe una gran diversidad dentro de los criterios clínicos sobre las condiciones cognitivas, las personas que las presentan comparten una serie de dificultades comunes en su día a día. Estas dificultades incluyen problemas para comprender el contenido, recordar cómo completar ciertas tareas, y confusión causada por diseños de páginas web inconsistentes o poco familiares. En este documento nos centramos en las medidas que los desarrolladores deben adoptar para mejorar la accesibilidad cognitiva de sus sitios web y aplicaciones.

## Descripción general

Las discapacidades cognitivas e intelectuales abarcan un amplio espectro y pueden manifestarse de forma puntual, temporal o permanente. Por ejemplo, la demencia y el Alzheimer son condiciones cognitivas permanentes que suelen evolucionar con el tiempo. Otras condiciones permanentes incluyen la afasia, las dificultades relacionadas con el habla y el lenguaje, el autismo, el TDA/TDAH, la dislexia y la discalculia.

Un ejemplo de condición cognitiva temporal puede darse en personas bajo los efectos del alcohol u otras sustancias como las drogas. También pueden influir otras circunstancias, como la depresión, el duelo por la pérdida de un ser querido o sentirse triste momentáneamente por un tuit o un vídeo que acaba de ver en línea. Otro ejemplo puede ser la falta de sueño.

Puede parecer un desafío abrumador abordar la amplia variedad de diferencias cognitivas, especialmente cuando las soluciones para dos personas diferentes pueden ser contradictorias. Una forma de afrontar esta complejidad es centrarse en las habilidades cognitivas. Estas incluyen:

- La atención.
- La memoria.
- La velocidad de procesamiento.
- La gestión del tiempo.
- La comprensión de letras y lenguaje.
- El dominio de números, símbolos y conceptos matemáticos.
- La comprensión de la información y la toma de decisiones.

Un enfoque sólido para ofrecer soluciones accesibles a personas con diferencias cognitivas incluye:

- Presentar el contenido de más de una manera, por ejemplo mediante texto, audio o vídeo.
- Utilizar contenido fácil de comprender, redactado bajo los estándares de un lenguaje claro y sencillo.
- Centrar la atención en el contenido importante.
- Reducir las distracciones, así como el contenido innecesario o la publicidad intrusiva.
- Mantener una estructura y una navegación consistentes en todo el sitio web.
- Incorporar elementos familiares y reconocibles, como enlaces subrayados que sean azules cuando no se han visitado y morados cuando ya se han visitado.
- Dividir los procesos en pasos lógicos y esenciales con indicadores de progreso.
- Hacer que la autenticación en el sitio web sea lo más sencilla posible sin comprometer la seguridad.
- Y por último, hacer que los formularios sean fáciles de completar, por ejemplo, con mensajes de error claros y opciones de recuperación de errores.

## Pautas WCAG

Las WCAG (Pautas de Accesibilidad para el Contenido Web) incluyen varias directrices para mejorar la accesibilidad cognitiva. Estas pautas están publicadas por la Iniciativa de Accesibilidad Web (WAI) del Consorcio de la World Wide Web (W3C), la organización internacional principal de los estándares para Internet. Este grupo también es responsable de las [pautas de Aplicaciones de Internet Enriquecidas y Accesibles (ARIA) (Inglés)](/es/docs/Web/Accessibility/ARIA/Guides).

Las WCAG se guían por cuatro principios: los sitios web deben ser Perceptibles, Operables, Comprensibles y Robustos. Con este fin, se definen 17 pautas específicas, de las cuales seis son especialmente relevantes para la accesibilidad cognitiva.

Todas las siguientes pautas no ayudan solo a las personas con discapacidad cognitiva. Por ejemplo, poder ampliar el tiempo de expiración en una aplicación que requiere un código de autenticación enviado al dispositivo móvil por mensaje de texto ayuda en situaciones como las siguientes:

- Personas con ansiedad o dificultades de atención.
- Personas que tienen una memoria a corto plazo reducida o que no pueden realizar varias tareas a la vez.
- Personas con menos competencias digitales o menos familiarizadas con la tecnología.
- Personas con una conexión de red inestable.
- Personas con discapacidad funcional.

## Adaptabilidad

[Pauta 1.3 (Inglés)](https://www.w3.org/WAI/WCAG22/Understanding/adaptable) establece que "el contenido debe ser **adaptable**". Esto implica crear contenidos que puedan presentarse de diferentes formas sin perder información ni estructura. Por ejemplo, proporcionando diseños {{glossary('responsive web design', 'responsive')}}, con una estructura de una sola columna para dispositivos móviles.

Para lograr este objetivo, toda la información, incluyendo la estructura y las relaciones que se transmiten a través de la presentación visual, debe estar disponible en un formato que pueda ser percibido por cualquier usuario. Por ejemplo, la información debería poder leerse en voz alta mediante un lector de pantalla. Asegurar que el software sea capaz de comprender el contenido es una manera excelente de garantizar que este pueda presentarse en formatos alternativos.

## Tiempo

Es importante permitir que las personas dispongan del tiempo que necesiten para completar las tareas. La [Pauta 2.2 (Inglés)](https://www.w3.org/WAI/WCAG22/Understanding/enough-time.html) establece que se debe "proporcionar a los usuarios **tiempo** suficiente para leer y usar el contenido".

Un límite de tiempo es cualquier proceso automático que se activa tras un periodo determinado, como el cierre de sesión tras 30 minutos de inactividad o disponer de solo 15 minutos para hacer una compra. Las personas con dificultades cognitivas pueden necesitar más tiempo para leer la información o para realizar acciones como rellenar los formularios.

Entre las diferentes soluciones destacan ofrecer opciones para ampliar el tiempo disponible o, directamente, eliminar cualquier tipo de restricción temporal.

### Temporizadores

Las opciones para adaptar los límites de tiempo incluyen:

- Permitir que el usuario desactive el límite de tiempo o lo amplíe hasta un mínimo de 10 veces la duración original antes de que el tiempo se agote.
- Alertar al usuario y ofrecerle un margen de al menos 20 segundos para extender la duración del límite por un factor de 10 mediante una acción sencilla, como pulsar la barra espaciadora.

Proporcionar una opción que permita a los usuarios habilitar un límite de tiempo de sesión más largo o incluso eliminarlo por completo. Algunos ejemplos de contenidos con límite de tiempo incluyen formularios, ejercicios de lectura cronometrados y materiales de formación. Si el límite de tiempo es **superior a 20 horas**, no es necesario aplicar estas adaptaciones.

### Movimiento, parpadeo y desplazamiento

Es importante evitar distracciones para los usuarios, especialmente para aquellas personas con discapacidades cognitivas.

Si la información que se mueve, parpadea, se desplaza automáticamente o se actualiza automáticamente, se inicia por sí sola, dura más de cinco segundos y se muestra al mismo tiempo que otro contenido, el usuario debe poder pausarla, detenerla, ocultarla o controlar su comportamiento, salvo que forme parte de una funcionalidad esencial. "Esencial" significa que eliminar el movimiento, parpadeo, desplazamiento o la actualización automática de la información cambiaría de forma fundamental el significado del contenido y/o su funcionalidad, y que dicha información o funcionalidad no puede lograrse de otra manera que cumpla con los requisitos. Esto incluye los GIF animados, si la animación dura más de 5 segundos.

Criterios adicionales de temporización a tener en cuenta:

- Personas con limitaciones cognitivas o del lenguaje pueden necesitar más tiempo para leer y comprender la información. Para mejorar la usabilidad, elimina cualquier límite de tiempo. También se debe evitar el contenido cronometrado, salvo en casos de medios sincronizados no interactivos y eventos en tiempo real.
- Personas con trastornos de déficit de atención deben poder concentrarse en el contenido sin distracciones. El usuario debe poder posponer o suprimir interrupciones, excepto en situaciones que requieran alertar al usuario sobre una emergencia. Esto facilita el acceso a personas con discapacidades cognitivas al permitirles centrarse en el propósito principal del contenido. Proporciona al usuario una forma de solicitar actualizaciones de contenido en lugar de realizarlas automáticamente. Además, permite que las alertas no esenciales sean opcionales.
- Garantizar que las personas puedan continuar una actividad sin pérdida de datos después de volver a autenticarse tras una sesión expirada, por ejemplo, guardando el estado de un cuestionario. Asegúrate de guardar los datos de manera que puedan modificarse después de que el usuario vuelva a autenticarse. Antes de la reautenticación, codifica los datos como ocultos o cifrados.
- Proporcionar advertencias sobre inactividad que puedan resultar en pérdida de datos. Cuando se utilice un tiempo límite, se debe informar a las personas exactamente cuánto tiempo provocará que la sesión expire y se pierdan los datos. La excepción es cuando los datos se conservan durante más de 20 horas sin que se realice ninguna acción.

## Navegación

[La Pauta 2.4 (Inglés)](https://www.w3.org/WAI/WCAG22/Understanding/navigable) establece: "proporcionar maneras de ayudar a los usuarios a navegar, encontrar contenido y determinar dónde se encuentran", y ofrece 10 pautas destinadas a garantizar que el sitio sea navegable y que el contenido pueda encontrarse fácilmente.

### Incluir un `<title>`

Asegúrate de incluir un {{HTMLElement('title')}} en el documento, ya que los títulos proporcionan una descripción rápida y fácil de consultar sobre el propósito principal de la página. Las personas con discapacidades cognitivas, memoria a corto plazo limitada o dificultades de lectura se benefician de poder identificar así la finalidad del contenido.

### Encabezados y etiquetas

Incluye encabezados claros y descriptivos para que los usuarios puedan encontrar fácilmente la información y comprender las relaciones entre las distintas secciones del contenido. Las etiquetas descriptivas ayudan a los usuarios a identificar componentes específicos dentro del contenido. Las personas que leen despacio y aquellas con memoria a corto plazo limitada se benefician cuando los títulos de sección permiten predecir qué contiene cada una.

### Encabezados de sección

Los encabezados ayudan a definir la organización general del contenido de la página. Facilitan la navegación por las distintas secciones y proporcionan un mecanismo que favorece la comprensión. Algunos ejemplos de encabezados incluyen capítulos, secciones y subsecciones del contenido, entre otros.

Los encabezados son ayudas de navegación más evidentes, especialmente en comparación con otros métodos para identificar secciones de contenido en una página (bordes, espacios en blanco, divisores, etc.).

### Múltiples maneras de encontrar contenido

Dependiendo de la persona, se puede preferir un método u otro para encontrar la información, por lo que es importante ofrecer varias formas de localizar el contenido en tu sitio.

Proporcionar más de una vía de navegación en tu sitio puede ayudar a las personas a encontrar la información de forma más rápida. Algunos usuarios pueden preferir un índice, un mapa del sitio o una función de búsqueda en lugar de leer y recorrer varias páginas para localizar lo que necesitan. Otros pueden preferir explorar el sitio de forma secuencial, avanzando de una página a otra para comprender mejor la estructura, el contenido y los conceptos del sitio.

### Posibilidad de omitir bloques de contenido

Proporciona un mecanismo, como un [enlace de salto (Inglés)](/es/docs/Web/HTML/Reference/Elements/a#skip_links), para omitir bloques de contenido que se repiten en varias páginas web.

### El orden de enfoque debe tener sentido

El orden de enfoque de los elementos interactivos debe tener sentido. Para lograrlo, el orden del DOM debe coincidir con el orden visual, que a su vez debe coincidir con el orden de tabulación. Si el orden de tabulación salta de un lugar a otro, especialmente de una forma que no coincide con el orden visual al navegar con el teclado, los usuarios pueden desorientarse.

### Los elementos enfocados deben mostrarse visiblemente enfocados

Cuando un usuario navega utilizando el teclado, la interfaz debe dejar claro qué elemento tiene el foco en ese momento. No alteres ni elimines el estilo predeterminado de {{cssxref(":focus")}} del navegador, a menos que lo reemplaces por uno que haga el foco aún más evidente.

### El texto de los enlaces debe transmitir significado

El texto de un enlace debe comunicar de forma clara y concisa a qué página se dirigirá el usuario si decide pulsar sobre el. Un texto de enlace mal formulado puede confundir sobre su propósito o destino.

Algunas tecnologías de asistencia permiten a los usuarios navegar mediante listas que contienen todos los enlaces presentes en la página. En ese contexto, los enlaces se muestran sin el contenido que los rodea, lo que hace aún más importante que el texto del enlace sea comprensible por sí mismo. Un ejemplo de mala experiencia es una página llena de enlaces cuyo texto dice "Haz clic aquí". Sin indicar adónde lleva ese "aquí", el propósito del enlace queda poco claro.

Para los lectores de pantalla, es fundamental que el texto enlazado describa el propósito de cada enlace. Si has añadido contenido adicional para lectores de pantalla y ese contenido resulta demasiado extenso o potencialmente confuso para usuarios videntes, considera recortarlo visualmente para ocultarlo a quienes no utilizan tecnologías de asistencia.

### La ubicación actual debe estar disponible

Los usuarios deben poder orientarse de forma autónoma dentro de un sitio o aplicación. Esto es especialmente importante y útil para las personas con menor capacidad de atención, que pueden confundirse al seguir una larga serie de pasos de navegación.

Todos los usuarios se benefician de disponer de información sobre dónde se encuentran dentro de la jerarquía del sitio, especialmente en sitios o aplicaciones con grandes cantidades de contenido o muchas subsecciones. Las [migas de pan](/es/docs/Glossary/Breadcrumb), los [mapas del sitio (Inglés)](/es/docs/Glossary/Site_map) y marcar la página actual en la navegación como "actual" son técnicas que ayudan a comunicar la ubicación actual.

## Legibilidad

La [Pauta 3.1](https://www.w3.org/WAI/WCAG22/Understanding/readable) establece: "hacer que el contenido textual sea legible y comprensible". Para algunas personas, puede resultar difícil deducir el significado de una palabra o frase a partir del contexto, especialmente cuando se utiliza de una forma poco habitual o con un significado especializado.

Para estos usuarios, la capacidad de leer y comprender puede depender de la disponibilidad de definiciones específicas o de las formas desarrolladas de siglas y abreviaturas. Algunas personas pueden tener grandes dificultades para reconocer palabras escritas, aunque pueden comprender documentos muy complejos cuando el texto se les lee en voz alta o cuando los procesos e ideas clave se representan visualmente.

### Declarar el idioma de la página y de cualquier contenido que no esté en ese idioma principal

El idioma de cada página debe declararse mediante el atributo [`lang`](/es/docs/Web/HTML/Reference/Global_attributes/lang) en el elemento {{HTMLElement('html')}}. Vuelve a incluir el atributo lang en cualquier fragmento de texto que esté en un idioma distinto al idioma principal del documento.

El uso adecuado de `lang` permite que algunos lectores de pantalla anuncien el texto correctamente al convertirlo en voz sintética. También ayuda a las personas que utilizan software de texto a voz.

### Definir palabras inusuales y usos no habituales del lenguaje

Algunas discapacidades dificultan la comprensión de usos no literales del lenguaje, como modismos, expresiones coloquiales o jerga especializada. Las personas que no son hablantes nativas del idioma también pueden tener dificultades con estos términos. Si una palabra o frase tiene un significado particular, proporciona una definición, ya sea integrada en el texto, enlazada, incluida en un glosario o mediante un diccionario en línea. Si una palabra o frase se utiliza con más de un significado, define cada uno de ellos.

### Definir abreviaturas

Las abreviaturas pueden resultar confusas para las personas que:

- Tienen dificultades para descifrar palabras.
- Tienen memoria limitada.
- Tienen dificultades para usar el contexto como apoyo para la comprensión.
- Dependen de magnificadores de pantalla (que a menudo reducen las pistas contextuales).

Proporciona la forma desarrollada de la abreviatura la primera vez que aparezca, seguida de la abreviatura dentro de un elemento {{HTMLElement('abbr')}}. Si una abreviatura no tiene forma expandida, o corresponde a una palabra que no está en el idioma principal del documento (como ocurre con términos en latín), explica su significado. También considera usar [ruby text (Inglés)](/es/docs/Web/HTML/Reference/Elements/ruby) para indicar la pronunciación de siglas o acrónimos.

### Nivel de lectura

El contenido debe estar redactado de la forma más clara posible. Una buena regla general es hacerlo lo suficientemente simple como para que pueda entenderse en la primera lectura. Algunos métodos para lograrlo incluyen:

- Usar palabras cortas y sencillas.
- Escribir oraciones breves.
- Utilizar voz activa en tiempo presente.
- Emplear gramática y ortografía correctas.

Para las personas con discapacidades cognitivas, puede ser útil proporcionar un resumen del texto (a veces llamado TL;DR, "demasiado largo; no leído") redactado en un nivel de lectura bajo. Otra técnica consiste en añadir elementos visuales que ayuden a explicar ideas, eventos y procesos.

Existen herramientas que pueden evaluar el nivel de lectura de tu contenido. Por ejemplo, este documento tiene un nivel medio equivalente a un grado 11. Esto significa que debería ser fácilmente comprensible para una persona hablante nativa de español de entre 16 y 17 años. Algunas herramientas incluso pueden ofrecer sugerencias para simplificarlo.

### Pronunciación

Existen varias técnicas que pueden ayudar a las personas a aprender cómo se pronuncian las palabras:

- Proporcionar la pronunciación justo después de la palabra.
- Enlazar a una lista de pronunciaciones.
- Incluir un glosario con pronunciación.
- Usar el elemento {{HTMLElement('ruby')}} para mostrar cómo se pronuncia una palabra.

Ofrecer orientación sobre la pronunciación ayuda a muchos tipos de usuarios, incluidos quienes prefieren leer en voz alta, las personas que no son hablantes nativas del idioma y quienes no están familiarizados con el significado de un término en un contexto determinado.

Otra solución consiste en usar glifos o marcas diacríticas para ilustrar la pronunciación. Sin embargo, si se utiliza esta técnica, debe existir un mecanismo para desactivarla. Además, es útil enlazar a una guía que explique las marcas utilizadas, ya que su significado puede no ser evidente.

## Predictibilidad

La [Pauta 3.2 (Inglés)](https://www.w3.org/WAI/WCAG22/Understanding/predictable) de las WCAG establece: "hacer que las páginas web se presenten y funcionen de manera predecible". Este es un principio fundamental del diseño de experiencia de usuario. La coherencia es especialmente importante para las personas con dificultades cognitivas. Esto incluye mantener consistencia en la estructura de la página y en el comportamiento predecible de los componentes interactivos.

### Usar la activación, no el foco, para cambiar el contexto

Un cambio de contexto debe producirse de manera intencional. Por este motivo, cuando una característica de la interfaz recibe [el foco (Inglés)](/es/docs/Web/API/HTMLElement/focus), no debe desencadenar acciones visibles para el usuario. En su lugar, el usuario debe activar la característica para provocar el cambio.

### Cambiar una configuración solo tras una acción activa del usuario

El funcionamiento de los controles de formulario y la introducción de datos debe producir un comportamiento predecible. Los cambios de contexto pueden confundir a las personas con discapacidades cognitivas y, por lo tanto, solo deberían producirse cuando sea evidente que dicho cambio ocurrirá como respuesta a la acción del usuario.

El cambio de estado debe requerir una acción intencional por parte del usuario. Ejemplos de ello son marcar una casilla, introducir datos o cambiar la opción de un menú desplegable. Asegúrate también de proporcionar un botón de envío para iniciar el cambio de contexto y describe lo que ocurrirá antes de que se produzca.

### Mantener la navegación coherente en todo el sitio

Mantén el orden de navegación coherente entre las distintas páginas. Por ejemplo, si tienes una barra de navegación en varias páginas, asegúrate de que sea uniforme en todo el sitio, con los mismos enlaces en la misma ubicación. Esto no se aplica solo a la navegación: presenta todos los componentes repetidos en el mismo orden relativo cada vez que aparezcan.

### Proporcionar etiquetado coherente

Las funciones idénticas deben tener etiquetas similares cada vez que se utilicen. Mantener la coherencia en las etiquetas de los botones, el texto alternativo de los iconos y la iconografía para interacciones similares, incluso en distintas secciones del sitio, ayuda a todos los usuarios.

### Sé coherente y predecible, y sigue las normas

Aunque la iconografía sin etiquetas no es el método más eficaz para transmitir información, mantener un uso coherente de los iconos (y, si están etiquetados, del texto de sus etiquetas) ayuda a las personas a entender qué representa cada icono. Del mismo modo, no modifiques comportamientos por defecto como el botón de retroceso del navegador. Si necesitas redirigir a un usuario, informa de ello con antelación.

## Asistencia en la introducción de datos

La [Pauta 3.3](https://www.w3.org/WAI/WCAG22/Understanding/input-assistance.html) ayuda a garantizar una introducción de datos precisa y establece: "ayudar a los usuarios a evitar y corregir errores". Aunque todas las personas cometen errores, algunas tienen más probabilidades de cometerlos, menos probabilidades de detectarlos o más dificultades para corregirlos una vez que ocurren.

Las pautas de asistencia en la introducción de datos buscan reducir la probabilidad de que los usuarios, especialmente aquellos con discapacidades, cometan errores y, si los cometen, aumentar la probabilidad de que vean y comprendan el mensaje de error y puedan corregirlo con éxito.

### Transmitir la detección automática de errores

Los usuarios deben ser alertados del error e informados de qué está mal. Si existe detección de errores en el lado del cliente, sigue estas pautas para que el error sea lo más efectivo posible al comunicarse al usuario:

- El error debe describirse mediante texto.
- Asegúrate de que el mensaje de error sea lo más específico posible.
- Proporciona texto que identifique los campos obligatorios incompletos y descripciones si el valor introducido no es válido.
- Si el error impidió el envío del formulario, mueve el foco al error. Si hay varios errores, proporciona un resumen con enlaces a cada campo relacionado.
- Incluye texto además de iconos, imágenes, colores, etc... Algunas personas tienen dificultades para interpretar iconos u otras señales visuales.
- Otras personas pueden tener dificultades para comprender solo el texto. Para ellas, también proporciona iconos, colores u otras pistas visuales.
- Proporciona también retroalimentación cuando el formulario se envía correctamente.

### Proporcionar instrucciones para la introducción de datos

Comienza el formulario con instrucciones que expliquen cómo utilizarlo. Incluye etiquetas o instrucciones cuando los usuarios necesiten introducir información, utilizando los elementos {{HTMLElement('label')}}, {{HTMLElement('fieldset')}} y {{HTMLElement('legend')}} para hacerlo.

Las etiquetas deben ser descriptivas y colocarse cerca del campo al que se refieren. Cuando se requiera un formato específico para la entrada, proporciona un ejemplo con el formato correcto. Además, considera realizar validación en el servidor para ayudar a dar formato a los datos introducidos y facilitar la experiencia del usuario.

Si un control del formulario es obligatorio, indícalo tanto visualmente como [mediante código](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required). Si un control del formulario cambia el contexto, describe lo que ocurrirá de una manera que el usuario pueda entender antes de que provoque ese cambio.

### Sugerencias de error

Proporciona sugerencias de entrada al usuario si se detecta automáticamente un error y se conocen posibles correcciones (a menos que hacerlo comprometa la seguridad o el propósito del contenido).

### Prevenir catástrofes

Para envíos que puedan causar, o derivar en, consecuencias legales, financieras u otras consecuencias significativas, asegúrate de que los envíos puedan revisarse, confirmarse y/o revertirse.

Los datos introducidos por el usuario deben comprobarse en busca de errores antes del envío, y el usuario debe tener la oportunidad de corregirlos. El usuario debe poder revisar, confirmar y corregir la información antes del envío final. Además, incluye una casilla de confirmación además del botón de envío.

Si un envío provoca una transacción legal o financiera, proporciona un plazo claro durante el cual el usuario pueda modificar o cancelar la solicitud.

### Proporcionar ayuda

Debe ofrecerse ayuda contextual cuando sea necesaria. Si un formulario requiere introducir texto, proporciona instrucciones que describan su propósito y el tipo de información que se debe introducir. Incluye corrección ortográfica y sugerencias para entradas de texto extensas, así como enlaces a material de ayuda y soporte. Si se espera un formato específico para los datos introducidos, proporciona un ejemplo.

## Notas

Las prácticas anteriores son buenas prácticas de diseño. Benefician a todas las personas.

- Muchas personas con discapacidades cognitivas también tienen discapacidades físicas. Los sitios web deben cumplir con las [Pautas de Accesibilidad para el Contenido Web](https://www.w3.org/WAI/standards-guidelines/wcag/es) del W3C.
- El [Grupo de Trabajo sobre Discapacidades Cognitivas y de Aprendizaje (Inglés)](https://www.w3.org/WAI/GL/task-forces/coga/) del W3C produce pautas de accesibilidad web para personas con discapacidades cognitivas.
- WebAIM cuenta con una [página dedicada a la discapacidad cognitivas (Inglés)](https://webaim.org/articles/cognitive/) con información y recursos relevantes.
- Los Centros para el Control y la Prevención de Enfermedades de Estados Unidos (CDC) estiman que, desde 2018, 1 de cada 4 ciudadanos estadounidenses tiene alguna discapacidad, y entre ellos, [la discapacidad cognitiva es la más común entre la población joven (Inglés)](https://archive.cdc.gov/www_cdc_gov/media/releases/2018/p0816-disability.html).
- En Estados Unidos, el término "intellectual disabilities" solía denominarse "mental retardation". En el Reino Unido, "intellectual disabilities" se conoce comúnmente como "learning disabilities" o "learning difficulties".

## Véase también

- [Guía de accesibilidad (Inglés)](https://extensionworkshop.com/documentation/develop/build-an-accessible-extension/)
- [Qué es la accesibilidad.](/es/docs/Learn_web_development/Core/Accessibility/What_is_accessibility)
- [Accesibilidad para trastornos convulsivos (Inglés)](/es/docs/Web/Accessibility/Guides/Seizure_disorders)
- [Comprender las pautas WCAG](/es/docs/Web/Accessibility/Guides/Understanding_WCAG)
- [Descripción general de accesibilidad](/es/docs/Learn_web_development/Core/Accessibility)
- [Pautas de Accesibilidad para el Contenido Web](https://www.w3.org/WAI/standards-guidelines/wcag/es), incluyendo las [pautas de accesibilidad cognitiva](#wcag_guidelines)
- [Grupo de Trabajo del W3C sobre Discapacidades Cognitivas y de Aprendizaje (Inglés)](https://www.w3.org/WAI/GL/task-forces/coga/)
- [Información de WebAIM sobre discapacidades cognitivas (Inglés)](https://webaim.org/articles/cognitive/)
- [Información de los CDC sobre discapacidades (Inglés)](https://www.cdc.gov/disability-and-health/)
