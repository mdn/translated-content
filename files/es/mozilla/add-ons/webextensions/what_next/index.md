---
title: What next?
slug: Mozilla/Add-ons/WebExtensions/What_next
---

{{AddonSidebar}}

Ahora estarás listo para comenzar a convertir tus idea para una extensión de navegador en realidad. Antes de comenzar ese viaje, vale la pena ser consciente de algunas cosas que ayudarán a que sea más sencillo.

## Tu ambiente de desarrollo

No necesitas ninguna herramienta de desarrollo ni entorno de creación en especial a la hora de crear extensiones de navegador: es completamente posible crear grandes extensiones de navegador solo con un editor de texto. Sin embargo, puede ser que tu hayas estado desarrollando para la web y ya poseas un conjunto de herramientas y un entorno que desees reutilizar. Si este es el caso, necesitarás estar al tanto de un par de cosas.

Si utilizas herramientas de minificación u ofuscación para obtener tu código final, deberás proporcionar tu código fuente al [proceso de revisión de AMO](/es/docs/Mozilla/Add-ons/WebExtensions/What_next_#The_review_process). Además, las herramientas que uses (aquellas para los procesos de minificación, ofuscación y creación) deberán ser de código abierto (u ofrecer un uso gratuito ilimitado) y estar disponibles para ejecutarse en la computadora del revisor (Windows, Mac o Linux). Desafortunadamente, nuestros revisores no pueden trabajar con herramientas comerciales o basadas en la web.

[Aprenda más sobre las herramientas de construcción](/es/Add-ons/Source_Code_Submission#About_build_tools)

## Bibliotecas de Terceros

Las bibliotecas de terceros son una excelente manera de agregar características complejas o funcionalidades a su extensiones para navegador rápidamente. Cuando envía una extensión al [proceso de revisión de AMO](/es/docs/Mozilla/Add-ons/WebExtensions/What_next_#The_review_process), el proceso también considerará las bibliotecas de terceros utilizadas. Para simplificar la revisión, asegúrese de descargar siempre bibliotecas de terceros desde su sitio web oficial o repositorio, y si la biblioteca está minimizada, proporcione un enlace al código fuente. Tenga en cuenta que las bibliotecas de terceros no se pueden modificar de ninguna manera.

[Aprenda más sobre el envío de código fuente](/es/Add-ons/Source_Code_Submission)

## Acuerdo de Distribución para Complementos de Firefox

Las extensiones del navegador deben estar firmadas para instalarse en la versión de lanzamiento o en las versiones beta de Firefox. La firma se realiza en addons.mozilla.org (AMO) y está sujeta a los términos y condiciones del Acuerdo de Distribución de Complementos de Firefox. El objetivo del acuerdo es garantizar que los usuarios de Firefox tengan acceso a complementos de calidad bien soportados que mejoren la experiencia de Firefox.

[Lea el Acuerdo](/Add-ons/AMO/Policy/Agreement)

[Aprenda más sobre la firma](/es/Add-ons/WebExtensions/Distribution)

## Proceso de revisión

Cuando se envíe una extensión del navegador para su firma, estará sujeta a revisión automática. También podría estar sujeto a una revisión manual, cuando la revisión automática determine que se necesita una revisión manual. La extensión de su navegador no se firmará hasta que haya pasado la revisión automática y puede revocarse su firma si no pasa la revisión manual. El proceso de revisión sigue un estricto conjunto de pautas, por lo que es fácil verificar y evitar cualquier posible problema de revisión.

[Echa un vistazo a las políticas y directrices de revisión](/es/Add-ons/AMO/Policy/Reviews)

## Entensiones de navegador destacadas AMO

Si eliges enlistar tu extensión de navegador en AMO, tu extensión podría aparecer en el sitio web de AMO, en el administrador de complementos del navegador Firefox, o en cualquier otro lugar en un sitio web de Mozilla. Hemos compilado una lista de pautas sobre cómo se seleccionan las extensiones para presentarlas; al seguir estas pautas, le da a su extensión la mejor oportunidad de ser presentada.

[Aprenda más sobre como destacar sus complementos](/es/Add-ons/AMO/Policy/Featured)

## Continua tu experiencia de aprendizaje

Ahora que sabe lo que sigue, es hora de profundizar en más detalles sobre el desarrollo de extensiones de navegador. En las siguientes secciones, descubrirás:

- Más sobre los conceptos fundamentales detrás de las extensiones del navegador, comenzando con detalles sobre cómo [usar las API de JavaScript](/es/docs/Mozilla/Add-ons/WebExtensions/Using_the_JavaScript_APIs).
- Una guía de los [componentes de interfaz de usuario](/es/docs/Mozilla/Add-ons/WebExtensions/user_interface) disponibles para las extensiones de su navegador.
- Una recopilación de guías prácticas sobre cómo lograr tareas clave en sus extensiones o hacer uso de las API de JavaScript.
- Información sobre cómo portar otras extensiones de navegador a Firefox.
- Detalles sobre los flujos de trabajo específicos de Firefox que puede utilizar para desarrollar extensiones de navegador.
- Una completa guía de referencia sobre las API de JavaScript.
- Una completa guía de referencia sobre Manifest keys.
