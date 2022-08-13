---
title: Desarrollo Web Móvil
slug: Web/Guide/Mobile
tags:
  - Intermedio
  - NecesitaEjemplo
translation_of: Web/Guide/Mobile
original_slug: Web/Guide/Movil
---
<p>Esta página proporciona una visión general de algunas de las principales técnicas necesarias para diseñar sitios web que funcionen bien en dispositivos móviles. Si está buscando información sobre el proyecto Firefox OS de Mozilla, consulte la página de <a href="/en/Mozilla/Firefox_OS" title="Boot to Gecko">Firefox OS</a>. O podría estar interesado en detalles sobre <a href="/en/Mozilla/Firefox_for_Android" title="Firefox for Android">Firefox para Android</a>.</p>

<p>Hemos organizado esta documentación en dos secciones, <a href="#DisenandoParaDispositivosMoviles">diseñando para dispositivos móviles</a> y <a href="#DesarrolloParaDiferentesNavegadores">desarrollo para diferentes navegadores</a>. Vea también la guía a la <a href="/en-US/docs/Web_Development/Mobile/Mobile-friendliness" title="/en-US/docs/Web_Development/Mobile/Mobile-friendliness">amigabilidad móvil</a> para desarrolladores web de Jason Grlicky.</p>

<h2 id="Diseñando_para_dispositivos_móviles"><a id="DisenandoParaDispositivosMoviles" name="DisenandoParaDispositivosMoviles"></a>Diseñando para dispositivos móviles</h2>

<p>Los dispositivos móviles tienen características de hardware bastante diferentes comparados con los ordenadores de escritorio/sobremesa o portátiles. Obviamente sus pantallas son usualmente más pequeñas, pero además habitualmente también cambian automáticamente su orientación, entre retrato o paisaje, según el usuario rota el dispositivo. Por lo general tienen pantallas táctiles para la entrada de datos por parte del usuario. APIs como la geolocalización o la orientación, o bien no son soportadas en ordenadores de escritorio o son mucho menos útiles, y estas APIs ofrecen a los usuarios móviles nuevas formas de interactuar con su sitio web.</p>

<h3 id="Trabajando_con_pantallas_pequeñas">Trabajando con pantallas pequeñas</h3>

<p><a href="https://developer.mozilla.org/es/docs/Desarrollo_Web/Web_adaptable" title="en/Web_Development/Responsive_Web_design">Diseño web adaptable</a> es un término para un conjunto de técnicas que permiten a su sitio web adaptar su diseño según el entorno de visualización — lo más evidente, el tamaño y orientación de la pantalla — cambie. Incluye técnicas como:</p>

<ul>
 <li>diseño CSS fluido, para hacer que la página se adapte sin problemas según cambie el tamaño de la ventana del navegador y</li>
 <li>el uso de <a href="https://developer.mozilla.org/es/docs/CSS/Media_queries" title="en/CSS/Media_queries">media queries</a> para incluir condicionalmente reglas CSS adecuadas para el <a href="https://developer.mozilla.org/es/docs/CSS/Media_queries#width" title="en/CSS/Media_queries#width">ancho</a> y <a href="https://developer.mozilla.org/es/docs/CSS/Media_queries#height" title="en/CSS/Media_queries#height">alto</a> de la pantalla.</li>
</ul>

<p>La <a href="https://developer.mozilla.org/es/docs/M%C3%B3vil/Viewport_meta_tag" title="en/Mobile/Viewport_meta_tag">etiqueta meta viewport</a> ordena al navegador que muestre su sitio web a la escala adecuada para el dispositivo del usuario.</p>

<h3 id="Trabajando_con_pantallas_táctiles">Trabajando con pantallas táctiles</h3>

<p>Para usar una pantalla táctil necesitará trabajar con eventos <a href="https://developer.mozilla.org/es/docs/DOM/Touch_events" title="en/DOM/Touch_events">DOM Touch</a>. No tendrá la posibilidad de usar la pseudo-clase <a href="https://developer.mozilla.org/es/docs/Web/CSS/%3Ahover" title="En/CSS/:hover">CSS :hover</a> y tendrá que diseñar elementos interactivos como botones para respetar el hecho de que los dedos son más gordos que el puntero del ratón. Vea este artículo sobre <a class="external" href="http://www.whatcreative.co.uk/blog/tips/designing-for-touch-screen/">diseñar para pantallas táctiles</a>.</p>

<p>Puede usar el <em>media query</em> <a href="https://developer.mozilla.org/es/docs/CSS/Media_queries#-moz-touch-enabled" title="en/CSS/Media_queries#-moz-touch-enabled">-moz-touch-enabled</a> para cargar una CSS diferente en un dispositivo con pantalla táctil.</p>

<h3 id="Optimizando_imágenes">Optimizando imágenes</h3>

<p>Para ayudar a los usuarios cuyos dispositivos tienen un bajo o caro ancho de banda, puede optimizar las imágenes cargando sólo aquellas apropiadas para el tamaño y resolución del dispositivo. Es algo que se hace en la CSS consultando la <a href="https://developer.mozilla.org/es/docs/CSS/Media_queries#height" title="en/CSS/Media_queries#height">altura</a> de pantalla, <a href="https://developer.mozilla.org/es/docs/CSS/Media_queries#width" title="en/CSS/Media_queries#width">anchura</a> y <a href="https://developer.mozilla.org/es/docs/CSS/Media_queries#-moz-device-pixel-ratio" title="en/CSS/Media_queries#-moz-device-pixel-ratio">proporción de píxeles</a>.</p>

<p>También puede hacer uso de propiedades CSS para implementar efectos visuales como <a href="https://developer.mozilla.org/es/docs/CSS/Using_CSS_gradients" title="en/CSS/Using_CSS_gradients">gradientes</a> y <a href="https://developer.mozilla.org/es/docs/Web/CSS/box-shadow" title="En/CSS/Box-shadow">sombras</a> sin utilizar imágenes para ello.</p>

<h3 id="APIs_móviles">APIs móviles</h3>

<p>Finalmente, puede aprovechar las nuevas posibilidades ofrecidas por los dispositivos móviles, como la <a href="https://developer.mozilla.org/es/docs/Web/API/Detecting_device_orientation" title="en/Detecting_device_orientation">orientación</a> y la <a href="https://developer.mozilla.org/es/docs/WebAPI/Using_geolocation" title="En/Using_geolocation">geolocalización</a>.</p>

<h2 id="Desarrollo_para_diferentes_navegadores"><a id="DesarrolloParaDiferentesNavegadores" name="DesarrolloParaDiferentesNavegadores"></a>Desarrollo para diferentes navegadores</h2>

<h3 id="Escribir_código_para_diferentes_navegadores_(cross-browser)">Escribir código para diferentes navegadores (<em>cross-browser</em>)</h3>

<p>Para crear sitios web que funcionen aceptablemente en diferentes navegadores móviles:</p>

<ul>
 <li>Intente evitar características específicas de un navegador, como las propiedades CSS prefijadas por el proveedor (<em>vendor-prefixed</em>).</li>
 <li>Si necesita utilizar estas características, compruebe si otros navegadores implementan sus propias versiones e inclúyalas igualmente.</li>
 <li>Para navegadores que no soportan estas características, ofrezca una alternativa aceptable.</li>
</ul>

<p>Por ejemplo, si establece un gradiente como fondo para cierto texto usando una propiedad prefijada por el proveedor (<em>vendor-prefixed</em>) como <code>-webkit-linear-gradient</code>, es mejor incluir las otras versiones prefijadas de la propiedad <a href="https://developer.mozilla.org/es/docs/Web/CSS/linear-gradient" title="en/CSS/linear-gradient">linear-gradient</a> (gradiente linear). Si no lo hace, asegúrese al menos de que el fondo por defecto contrasta con el texto. Así, la página será al menos usable en un navegador al que no esté dirigida su regla <code>linear-gradient</code>.</p>

<p>Vea esta <a href="https://developer.mozilla.org/es/docs/Web/CSS/Referencia_CSS/Extensiones_CSS_Mozilla" title="en/CSS/CSS_Reference/Mozilla_Extensions">lista de propiedades específicas para Gecko</a>, esta lista de <a href="/en/CSS/CSS_Reference/Webkit_Extensions" title="en/CSS/CSS_Reference/Webkit_Extensions">propiedades específicas para WebKit</a> y la <a class="external" href="http://peter.sh/experiments/vendor-prefixed-css-property-overview/">tabla de propiedades específicas de proveedores (<em>vendor-specific</em>)</a> de Peter Beverloo.</p>

<p>Usar herramientas como <a class="external" href="http://csslint.net/">CSS Lint</a> puede ayudar a encontrar problemas como este en el código y preprocesadores como <a class="external" href="http://sass-lang.com/">SASS</a> y <a class="external" href="http://lesscss.org/">LESS</a> pueden ser de ayuda para crear código compatible con diferentes navegadores.</p>

<h3 id="Precaución_al_husmear_el_agente_de_usuario_(user_agent)">Precaución al husmear el agente de usuario (<em>user agent</em>)</h3>

<p>Es preferible para los sitios web usar las técnicas enumeradas anteriormente con el objetivo de detectar características específicas del dispositivo, como el tamaño de pantalla y las pantallas táctiles, y adaptarse a ellas adecuadamente. Pero a veces esto no es práctico y los sitios web recurren a analizar la cadena de agente de usuario del navegador (<em>user agent</em>) para intentar distinguir entre ordenadores de escritorio, tabletas y teléfonos, y servir diferente contenido a cada tipo de dispositivo.</p>

<p>Si hace esto, asegúrese de que su algoritmo es correcto y no está sirviendo el tipo equivocado de contenido a un dispositivo porque no entiende la cadena de un agente de usuario particular. Vea esta <a href="/en/Browser_detection_using_the_user_agent#Mobile.2C_Tablet_or_Desktop" title="browser detection using the user agent">guía para usar la cadena de agente de usuario para determinar el tipo de dispositivo</a>.</p>

<h3 id="Probar_en_múltiples_navegadores">Probar en múltiples navegadores</h3>

<p>Compruebe su sitio web en múltiples navegadores. Esto significa probarlo en múltiples plataformas — al menos iOS y Android.</p>

<ul>
 <li>Pruebe Safari móvil en iPhone usando el <a class="link-https" href="https://developer.apple.com/devcenter/ios/index.action">simulador iOS</a>.</li>
 <li>Pruebe Opera y Firefox utilizando el <a class="link-https" href="https://developer.android.com/sdk/index.html">Android SDK</a>. Vea estas instrucciones adicionales para <a class="link-https" href="https://wiki.mozilla.org/Mobile/Fennec/Android/Emulator">ejecutar Firefox para Android usando el emulador de Android</a>.</li>
</ul>
