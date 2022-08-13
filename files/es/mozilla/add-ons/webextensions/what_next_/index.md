---
title: What next?
slug: Mozilla/Add-ons/WebExtensions/What_next_
translation_of: Mozilla/Add-ons/WebExtensions/What_next_
---
<div>{{AddonSidebar}}</div>

<p>Ahora estarás listo para comenzar a convertir tus idea para una extensión de navegador en realidad. Antes de comenzar ese viaje, vale la pena ser consciente de algunas cosas que ayudarán a que sea más sencillo.</p>

<h2 id="Tu_ambiente_de_desarrollo">Tu ambiente de desarrollo</h2>

<p>No necesitas ninguna herramienta de desarrollo ni entorno de creación en especial a la hora de crear extensiones de navegador: es completamente posible crear grandes extensiones de navegador solo con un editor de texto. Sin embargo, puede ser que tu hayas estado desarrollando para la web y ya poseas un conjunto de herramientas y un entorno que desees reutilizar. Si este es el caso, necesitarás estar al tanto de un par de cosas.</p>

<p>Si utilizas herramientas de minificación u ofuscación para obtener tu código final, deberás proporcionar tu código fuente al <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/What_next_#The_review_process">proceso de revisión de AMO</a>. Además, las herramientas que uses (aquellas para los procesos de minificación, ofuscación y creación) deberán ser de código abierto (u ofrecer un uso gratuito ilimitado) y estar disponibles para ejecutarse en la computadora del revisor (Windows, Mac o Linux). Desafortunadamente, nuestros revisores no pueden trabajar con herramientas comerciales o basadas en la web.</p>

<p><a href="/en-US/Add-ons/Source_Code_Submission#About_build_tools">Aprenda más sobre las herramientas de construcción</a></p>

<h2 id="Bibliotecas_de_Terceros">Bibliotecas de Terceros</h2>

<p>Las bibliotecas de terceros son una excelente manera de agregar características complejas o funcionalidades a su extensiones para navegador rápidamente. Cuando envía una extensión al <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/What_next_#The_review_process">proceso de revisión de AMO</a>, el proceso también considerará las bibliotecas de terceros utilizadas. Para simplificar la revisión, asegúrese de descargar siempre bibliotecas de terceros desde su sitio web oficial o repositorio, y si la biblioteca está minimizada, proporcione un enlace al código fuente. Tenga en cuenta que las bibliotecas de terceros no se pueden modificar de ninguna manera.</p>

<p><a href="/en-US/Add-ons/Source_Code_Submission">Aprenda más sobre el envío de código fuente </a></p>

<h2 id="Acuerdo_de_Distribución_para_Complementos_de_Firefox">Acuerdo de Distribución para Complementos de Firefox</h2>

<p>Las extensiones del navegador deben estar firmadas para instalarse en la versión de lanzamiento o en las versiones beta de Firefox. La firma se realiza en addons.mozilla.org (AMO) y está sujeta a los términos y condiciones del Acuerdo de Distribución de Complementos de Firefox. El objetivo del acuerdo es garantizar que los usuarios de Firefox tengan acceso a complementos de calidad bien soportados que mejoren la experiencia de Firefox.</p>

<p><a href="/Add-ons/AMO/Policy/Agreement">Lea el Acuerdo</a></p>

<p><a href="/en-US/Add-ons/WebExtensions/Distribution">Aprenda más sobre la firma</a></p>

<h2 id="Proceso_de_revisión">Proceso de revisión</h2>

<p>Cuando se envíe una extensión del navegador para su firma, estará sujeta a revisión automática. También podría estar sujeto a una revisión manual, cuando la revisión automática determine que se necesita una revisión manual. La extensión de su navegador no se firmará hasta que haya pasado la revisión automática y puede revocarse su firma si no pasa la revisión manual. El proceso de revisión sigue un estricto conjunto de pautas, por lo que es fácil verificar y evitar cualquier posible problema de revisión.</p>

<p><a href="/en-US/Add-ons/AMO/Policy/Reviews">Echa un vistazo a las políticas y directrices de revisión</a></p>

<h2 id="Entensiones_de_navegador_destacadas_AMO">Entensiones de navegador destacadas AMO</h2>

<p>Si eliges enlistar tu extensión de navegador en AMO, tu extensión podría aparecer en el sitio web de AMO, en el administrador de complementos del navegador Firefox, o en cualquier otro lugar en un sitio web de Mozilla. Hemos compilado una lista de pautas sobre cómo se seleccionan las extensiones para presentarlas; al seguir estas pautas, le da a su extensión la mejor oportunidad de ser presentada.</p>

<p><a href="/en-US/Add-ons/AMO/Policy/Featured">Aprenda más sobre como destacar sus complementos</a></p>

<h2 id="Continua_tu_experiencia_de_aprendizaje">Continua tu experiencia de aprendizaje</h2>

<p>Ahora que sabe lo que sigue, es hora de profundizar en más detalles sobre el desarrollo de extensiones de navegador. En las siguientes secciones, descubrirás:</p>

<ul>
 <li>Más sobre los conceptos fundamentales detrás de las extensiones del navegador, comenzando con detalles sobre cómo <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/Using_the_JavaScript_APIs">usar las API de JavaScript</a>.</li>
 <li>Una guía de los <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface">componentes de interfaz de usuario</a> disponibles para las extensiones de su navegador.</li>
 <li>Una recopilación de guías prácticas sobre cómo lograr tareas clave en sus extensiones o hacer uso de las API de JavaScript.</li>
 <li>Información sobre cómo portar otras extensiones de navegador a Firefox.</li>
 <li>Detalles sobre los flujos de trabajo específicos de Firefox que puede utilizar para desarrollar extensiones de navegador.</li>
 <li>Una completa guía de referencia sobre las API de JavaScript.</li>
 <li>Una completa guía de referencia sobre Manifest keys.</li>
</ul>
