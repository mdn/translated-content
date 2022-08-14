---
title: ¿Cómo desactivar el autocompletado del formulario?
slug: Web/Security/Securing_your_site/Turning_off_form_autocompletion
tags:
  - Desarrollo web
  - Seguridad
  - formulários
translation_of: Web/Security/Securing_your_site/Turning_off_form_autocompletion
original_slug: Web/Security/Securing_your_site/desactivar_autocompletado_formulario
---
<p><span class="seoSummary">Este artículo explica como un sitio web puede inhabilitar el autocompletado para los campos del formulario.</span></p>

<p>Por defecto, los navegadores recuerdan información que el usuario envía a través de los campos <code><a href="https://developer.mozilla.org/es/docs/Web/HTML/Elemento/input">input</a></code> en los sitios web. Esto habilita al navegador para ofrecer el autocompletado (P. Ej. Sugiere posibles completaciones para los campos que el usuario ha iniciado escribiendo) o el llenado automático (P. Ej. rellenar previamente ciertos campos al cargar).</p>

<p>Estas caracteristicas pueden ser un problema de privacidad para los usuarios, ya que mientras los navegadores pueden permitir a los usuarios a inhabilitarlas, estos están usualmente habilitados por defecto. Como sea, alguna información enviada en los formularios no es tampoco útil en el futuro (P. Ej. a one-time pin) o contiene cierta información susceptible (P. Ej. un identificador único del gobierno o un código de seguridad de la tarjeta de crédito). Un sitio web podría preferir que el navegador no recuerde los valores de tales campos, incluso si la caracteristica del autocompletado del navegador este habilitada.</p>

<h2 id="Desactivar_autocompletado">Desactivar autocompletado</h2>

<p>Para desactivar el autocompletado en los formularios, un sitio web puede establecer el atributo {{htmlattrxref("autocomplete", "input")}} a "off":</p>

<pre class="brush: html">autocomplete="off"</pre>

<p>Puede hacer esto para un formulario entero o para elementos específicos de tipo "input" dentro del formulario:</p>

<pre class="brush: html">&lt;form method="post" action="/form" autocomplete="off"&gt;
[…]
&lt;/form&gt;</pre>

<pre class="brush: html">&lt;form method="post" action="/form"&gt;
  […]
  &lt;div&gt;
    &lt;label for="cc"&gt;Credit card:&lt;/label&gt;
    &lt;input type="text" id="cc" name="cc" autocomplete="off"&gt;
  &lt;/div&gt;
&lt;/form&gt;</pre>

<p>Estableciendo <code>autocomplete="off"</code> en los campos tiene dos efectos:</p>

<ul>
 <li>Impide que el navegador guarde los datos de los campos para un posterior autocompletado en formularios similares mediante heurísticas que varían según el navegador.</li>
 <li>Evita que el navegador almacene en caché los datos del formulario en el historial de la sesión. Cuando los datos del formulario están almacenados en la caché del historial de la sesión, la información completada por el usuario será visible en caso de que el usuario haya enviado el formulario y haya hecho clic en el botón Atrás para volver a la página original del formulario.</li>
</ul>

<p>En algunos casos, el navegador continuará sugiriendo valores de autocompletado incluso si el atributo autocompletar está desactivado. Este comportamiento inesperado puede resultar bastante confuso para los desarrolladores. El truco para realmente no aplicar el autocompletado es asignar un valor no válido al atributo, por ejemplo:</p>

<pre class="brush: html">autocomplete="nope"
</pre>

<p>Dado que este valor no es válido para el atributo autocompletar, el navegador no tiene forma de reconocerlo y deja de intentar autocompletarlo.</p>

<h2 id="El_atributo_autocompletar_y_los_campos_de_inicio_de_sesión">El atributo autocompletar y los campos de inicio de sesión</h2>

<p>Los navegadores modernos implementan un gestor de contraseñas integrado: cuando el usuario ingresa un nombre de usuario y contraseña para un sitio, el navegador le ofrece recordarlos. Cuando el usuario visita el sitio nuevamente, el navegador completa automáticamente los campos de inicio de sesión con los valores almacenados.</p>

<p>Adicionalmente, el navegador permite al usuario elegir una contraseña maestra que utilizará para cifrar los datos de inicio de sesión almacenados.</p>

<p>Incluso sin una contraseña maestra, el gestor de contraseñas integrado en el navegador generalmente se considera una ganancia para la seguridad. Como los usuarios no tienen que recordar las contraseñas que el navegador almacena para ellos, son capaces de escoger contraseñas más seguras de lo que lo harían.</p>

<p>Por esta razón, muchos navegadores modernos no admiten autocompletar = "off" para los campos de inicio de sesión:</p>

<ul>
 <li>Si un sitio establece autocomplete="off" para un formulario, y este incluye campos de nombre de usuario o contraseña, entonces el navegador seguirá ofreciendo guardar los valores de estos, y si el usuario está de acuerdo, el navegador autocompletará automáticamente estos campos la próxima vez que el usuario visite la página.</li>
 <li>Si un sitio configura autocomplete="off" para los campos de nombre de usuario y contraseña, entonces el navegador seguirá ofreciendo recordar este inicio de sesión, y si el usuario está de acuerdo, el navegador autocompletará automáticamente esos campos la próxima vez que el usuario visite la página.</li>
</ul>

<p>Este es el comportamiento en Firefox (desde la versión 38), Google Chrome (desde la 34) e Internet Explorer (desde la versión 11).</p>

<p>Si un autor desea evitar el autocompletado de los campos de contraseña en las páginas de administración de usuarios donde un usuario puede especificar una nueva contraseña para alguien más que para si mismo, se debe especificar autocomplete="new-password", aunque el soporte para esto no se ha implementado todavía en todos los navegadores.</p>

<h2 id="Uso_del_Plugin_de_jQuery_disableAutoFill">Uso del Plugin de jQuery disableAutoFill</h2>

<p>Este complemento aleatorizará por defecto el nombre del atributo. Se restaurará al nombre del campo original al enviar el formulario. Esto es para evitar el autocompletado automático en todos los navegadores (incluye extensiones de auto-completado de terceros),no solo para Google Chrome. </p>

<p>URL: <a href="https://github.com/terrylinooo/jquery.disableAutoFill">https://terrylinooo.github.io/jquery.disableAutoFill/</a></p>

<p>{{QuickLinksWithSubpages("/en-US/docs/Web/Security")}}</p>

<p> </p>
