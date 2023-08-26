---
title: Desarrollo Web Móvil
slug: Web/Guide/Mobile
---

Esta página proporciona una visión general de algunas de las principales técnicas necesarias para diseñar sitios web que funcionen bien en dispositivos móviles. Si está buscando información sobre el proyecto Firefox OS de Mozilla, consulte la página de [Firefox OS](/en/Mozilla/Firefox_OS). O podría estar interesado en detalles sobre [Firefox para Android](/en/Mozilla/Firefox_for_Android).

Hemos organizado esta documentación en dos secciones, [diseñando para dispositivos móviles](#DisenandoParaDispositivosMoviles) y [desarrollo para diferentes navegadores](#DesarrolloParaDiferentesNavegadores). Vea también la guía a la [amigabilidad móvil](/es/docs/Web_Development/Mobile/Mobile-friendliness) para desarrolladores web de Jason Grlicky.

## Diseñando para dispositivos móviles

Los dispositivos móviles tienen características de hardware bastante diferentes comparados con los ordenadores de escritorio/sobremesa o portátiles. Obviamente sus pantallas son usualmente más pequeñas, pero además habitualmente también cambian automáticamente su orientación, entre retrato o paisaje, según el usuario rota el dispositivo. Por lo general tienen pantallas táctiles para la entrada de datos por parte del usuario. APIs como la geolocalización o la orientación, o bien no son soportadas en ordenadores de escritorio o son mucho menos útiles, y estas APIs ofrecen a los usuarios móviles nuevas formas de interactuar con su sitio web.

### Trabajando con pantallas pequeñas

[Diseño web adaptable](/es/docs/Desarrollo_Web/Web_adaptable) es un término para un conjunto de técnicas que permiten a su sitio web adaptar su diseño según el entorno de visualización — lo más evidente, el tamaño y orientación de la pantalla — cambie. Incluye técnicas como:

- diseño CSS fluido, para hacer que la página se adapte sin problemas según cambie el tamaño de la ventana del navegador y
- el uso de [media queries](/es/docs/CSS/Media_queries) para incluir condicionalmente reglas CSS adecuadas para el [ancho](/es/docs/CSS/Media_queries#width) y [alto](/es/docs/CSS/Media_queries#height) de la pantalla.

La [etiqueta meta viewport](/es/docs/M%C3%B3vil/Viewport_meta_tag) ordena al navegador que muestre su sitio web a la escala adecuada para el dispositivo del usuario.

### Trabajando con pantallas táctiles

Para usar una pantalla táctil necesitará trabajar con eventos [DOM Touch](/es/docs/DOM/Touch_events). No tendrá la posibilidad de usar la pseudo-clase [CSS :hover](/es/docs/Web/CSS/%3Ahover) y tendrá que diseñar elementos interactivos como botones para respetar el hecho de que los dedos son más gordos que el puntero del ratón. Vea este artículo sobre [diseñar para pantallas táctiles](http://www.whatcreative.co.uk/blog/tips/designing-for-touch-screen/).

Puede usar el _media query_ [-moz-touch-enabled](/es/docs/CSS/Media_queries#-moz-touch-enabled) para cargar una CSS diferente en un dispositivo con pantalla táctil.

### Optimizando imágenes

Para ayudar a los usuarios cuyos dispositivos tienen un bajo o caro ancho de banda, puede optimizar las imágenes cargando sólo aquellas apropiadas para el tamaño y resolución del dispositivo. Es algo que se hace en la CSS consultando la [altura](/es/docs/CSS/Media_queries#height) de pantalla, [anchura](/es/docs/CSS/Media_queries#width) y [proporción de píxeles](/es/docs/CSS/Media_queries#-moz-device-pixel-ratio).

También puede hacer uso de propiedades CSS para implementar efectos visuales como [gradientes](/es/docs/CSS/Using_CSS_gradients) y [sombras](/es/docs/Web/CSS/box-shadow) sin utilizar imágenes para ello.

### APIs móviles

Finalmente, puede aprovechar las nuevas posibilidades ofrecidas por los dispositivos móviles, como la [orientación](/es/docs/Web/API/Detecting_device_orientation) y la [geolocalización](/es/docs/WebAPI/Using_geolocation).

## Desarrollo para diferentes navegadores

### Escribir código para diferentes navegadores (cross-browser)

Para crear sitios web que funcionen aceptablemente en diferentes navegadores móviles:

- Intente evitar características específicas de un navegador, como las propiedades CSS prefijadas por el proveedor (_vendor-prefixed_).
- Si necesita utilizar estas características, compruebe si otros navegadores implementan sus propias versiones e inclúyalas igualmente.
- Para navegadores que no soportan estas características, ofrezca una alternativa aceptable.

Por ejemplo, si establece un gradiente como fondo para cierto texto usando una propiedad prefijada por el proveedor (_vendor-prefixed_) como `-webkit-linear-gradient`, es mejor incluir las otras versiones prefijadas de la propiedad [linear-gradient](/es/docs/Web/CSS/linear-gradient) (gradiente linear). Si no lo hace, asegúrese al menos de que el fondo por defecto contrasta con el texto. Así, la página será al menos usable en un navegador al que no esté dirigida su regla `linear-gradient`.

Vea esta [lista de propiedades específicas para Gecko](/es/docs/Web/CSS/Referencia_CSS/Extensiones_CSS_Mozilla), esta lista de [propiedades específicas para WebKit](/en/CSS/CSS_Reference/Webkit_Extensions) y la [tabla de propiedades específicas de proveedores (_vendor-specific_)](http://peter.sh/experiments/vendor-prefixed-css-property-overview/) de Peter Beverloo.

Usar herramientas como [CSS Lint](http://csslint.net/) puede ayudar a encontrar problemas como este en el código y preprocesadores como [SASS](http://sass-lang.com/) y [LESS](http://lesscss.org/) pueden ser de ayuda para crear código compatible con diferentes navegadores.

### Precaución al husmear el agente de usuario (user agent)

Es preferible para los sitios web usar las técnicas enumeradas anteriormente con el objetivo de detectar características específicas del dispositivo, como el tamaño de pantalla y las pantallas táctiles, y adaptarse a ellas adecuadamente. Pero a veces esto no es práctico y los sitios web recurren a analizar la cadena de agente de usuario del navegador (_user agent_) para intentar distinguir entre ordenadores de escritorio, tabletas y teléfonos, y servir diferente contenido a cada tipo de dispositivo.

Si hace esto, asegúrese de que su algoritmo es correcto y no está sirviendo el tipo equivocado de contenido a un dispositivo porque no entiende la cadena de un agente de usuario particular. Vea esta [guía para usar la cadena de agente de usuario para determinar el tipo de dispositivo](/en/Browser_detection_using_the_user_agent#Mobile.2C_Tablet_or_Desktop).

### Probar en múltiples navegadores

Compruebe su sitio web en múltiples navegadores. Esto significa probarlo en múltiples plataformas — al menos iOS y Android.

- Pruebe Safari móvil en iPhone usando el [simulador iOS](https://developer.apple.com/devcenter/ios/index.action).
- Pruebe Opera y Firefox utilizando el [Android SDK](https://developer.android.com/studio#command-tools). Vea estas instrucciones adicionales para [ejecutar Firefox para Android usando el emulador de Android](https://wiki.mozilla.org/Mobile/Fennec/Android/Emulator).
