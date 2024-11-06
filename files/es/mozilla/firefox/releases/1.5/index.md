---
title: Firefox 1.5 para Desarrolladores
slug: Mozilla/Firefox/Releases/1.5
---

{{FirefoxSidebar}}

### Firefox 1.5

Se ha lanzado Firefox 1.5 y ya se puede descargar **[descarga](https://www.mozilla.com/firefox/)**. Este programa esta basado en el motor de [Gecko](/es/Gecko) 1.8, esta nueva versión del navegador mejora su ya magnífico soporte a los estándares web y proporciona nuevas capacidades que hacen posible una nueva generación de aplicaciones web. Algunas de las nuevas características de Firefox 1.5 son: soporte de CSS2 y CSS3 mejorado, APIs para programar gráficos en 2D por medio de `<canvas>`, o gráficos vectoriales con [SVG](/es/SVG) 1.1, [XForms](/es/XForms) y eventos XML, así como muchas mejoras en DHTML, JavaScript y DOM.

**Firefox 1.5** ya puede descargarse en el siguiente link: - <https://www.mozilla.com/firefox/>

### Herramientas para desarrolladores

Firefox 1.5 dispone de diversas herramientas y extensiones de gran utilidad para los desarrolladores.

- [DOM Inspector](/es/DOM_Inspector), una herramienta que permite a los desarrolladores inspeccionar y modificar documentos sin tener que editar el documento directamente. DOM Inspector está disponible como una opción en la Instalación personalizada de Firefox 1.5 bajo Herramientas para desarrolladores.
- Consola JavaScript, una herramienta para escribir y testear código JavaScript a la vez que sirve para ver los errores JavaScript y de CSS en una página.
- Ver código fuente de la página, con sombreado de código y opciones de búsqueda.
- [Extensiones para el navegador](https://addons.mozilla.org/extensions/showlist.php?application=firefox&category=Developer%20Tools) incluyendo [Web Developer toolbar](<es/Web_Developer_Firefox_Extension_(external)>), [Live HTTP Headers](<es/Live_HTTP_Headers_(external)>), [HTML Validator](<es/HTML_Validator_(external)>) y muchas más.

**Nota:** Algunas extensiones no soportan actualmente Firefox 1.5, y serán automáticamente desactivadas.

### Descripción

Algunas de las nuevas características en Firefox 1.5:

#### Desarrolladores de sitios web y aplicaciones

- [Introducción a SVG en HTML](/es/SVG_en_HTML_Introducci%c3%b3n)
  - : Aprenda cómo usar SVG en sus páginas XHTML y a manipular imágenes con JavaScript y CSS de forma similar a como haría un script para XHTML. Vea también [SVG en Firefox 1.5](/es/SVG_en_Firefox_1.5) para saber más sobre el estado y los problemas de la implementación de SVG en Firefox 1.5.

<!---->

- [Dibujar gráficos con Canvas](/es/Dibujar_gr%c3%a1ficos_con_Canvas)
  - : Aprenda acerca de la nueva etiqueta `<canvas>` y cómo dibujar gráficos y otros objetos en Firefox.

<!---->

- [Columnas con CSS-3](/es/Columnas_con_CSS-3)
  - : Aprenda sobre el soporte a la disposición automática de texto en multi-columnas según lo propuesto en CSS3.

<!---->

- [El cache de Firefox 1.5](/es/El_cache_de_Firefox_1.5)
  - : Aprenda acerca de `bfcache` y cómo aumenta la velocidad de la navegación en páginas ya visitadas.

#### XUL y Desarrolladores de Extensión

- [Creando una extensión](/es/Creando_una_extensi%c3%b3n)
  - : Este tutorial te llevará a través de los pasos necesarios para construir una extensión para Firefox muy básica. Ver también [otro tutorial en la base de conocimiento MozillaZine](https://kb.mozillazine.org/Getting_started_with_extension_development), el cual demuestra las nuevas características del Administrador de Extensión en 1.5, que hace la creación de una nueva extensión incluso mas fácil.

<!---->

- [XPCNativeWrapper](/es/XPCNativeWrapper)
  - : `XPCNativeWrapper` es una forma de envolver un objeto cuyo [acceso es seguro desde un código privilegiado](/es/Safely_accessing_content_DOM_from_chrome). Puede ser usado en todas las versiones de Firefox, a pesar que su funcionamiento ha cambiado con la versión 1.5 (Gecko 1.8).

<!---->

- [Preferencias del Sistema](/es/Preferencias_del_Sistema)
  - : Aprenda acerca de los nuevos widgets, que te permiten crear ventanas de Opciones mas fácilmente y usando menos código JavaScript.

<!---->

- [Caracteres Internacionales en XUL JavaScript](/es/Caracteres_Internacionales_en_XUL_JavaScript)
  - : Ahora los archivos XUL JavaScript pueden contener caracteres no-ASCII.

<!---->

- [Cambios en el API tree](/es/Cambios_en_el_API_tree)
  - : Las interfaces para acceder a los elementos `<tree>` han cambiado.

<!---->

- [Cambios en XUL en Firefox 1.5](/es/Cambios_en_XUL_en_Firefox_1.5)
  - : Un resumen de los cambios en Xul. Vea también [Adaptando las aplicaciones XUL a Firefox 1.5](/es/Adaptando_las_aplicaciones_XUL_a_Firefox_1.5).

<dl><dt>Cambios referentes a la red</dt><dd></dd></dl>

- Certificate prompts can now be overridden on a per-channel basis. This works by setting an interface requestor as an [nsIChannel](/es/NsIChannel)'s notificationCallbacks and giving out an interface for [nsIBadCertListener](/es/NsIBadCertListener).
- nsIWebBrowserPersist's listeners can now implement [nsIInterfaceRequestor](/es/NsIInterfaceRequestor)::GetInterface and will get an opportunity to provide all interfaces that channels might ask for, including [nsIProgressEventSink](/es/NsIProgressEventSink) (not too useful, redundant with [nsIWebProgressListener](/es/NsIWebProgressListener)). Useful interfaces here include [nsIChannelEventSink](/es/NsIChannelEventSink) and [nsIBadCertListener](/es/NsIBadCertListener).
- Extensions or other necko consumers, including XMLHttpRequest, can set a Cookie header explicitly, and necko will not replace it. Stored cookies will be merged with the explicitly set header, in a way that the explicit header will override the stored cookies

### Nuevas características para el usuario final

#### Experiencia de usuario

- **Navegación más rápida** con un rendimiento mejorado usando los botones de vuelta atrás y adelante.
- **Reordenación de las pestañas del navegador al pulsar y soltar.**
- **Answers.com ha sido añadida a la lista de buscadores** para permitir búsquedas en su diccionario.
- **Mejoras en la usabilidad** incluyendo descripciones en la páginas erróneas, opciones del menú rediseñadas, RSS discovery, y "Modo Seguro".
- **Mejor soporte para la accesibilidad** incluyendo accesibilidad para DHTML.
- **Ayudante para notificar sitios webs rotos** para reportar los sitio web que no estan funcionando con Firefox.
- **Mejor soporte para Mac OS X** (10.2 y posterior) incluyendo la migración del perfil desde Safari e Internet Explorer para Mac.

#### Seguridad y privacidad

- **Actualización automática** para racionalizar to streamline product upgrades. Notification of an update is more prominent, and updates to Firefox may now be half a megabyte or smaller. Updating extensions has also improved.
- **Bloqueo de ventanas emergentes mejorado.**
- **Limpieza de datos privados** proporciona un modo fácil y cómodo de eliminar nuestros datos personales desde un menú o con atajos de teclado.

### Soporte a los estándares Web

Firefox es lider de la industria en el soporte a los estandares Web con constantes implementaciones multiplataforma para:

- Lenguaje para el Formato de HiperTextos ([HTML](/es/HTML)) y lenguaje extensible de marcado de hipertexto ([XHTML](/es/XHTML)): [HTML 4.01](https://www.w3.org/TR/html401/) y [XHTML 1.0/1.1](https://www.w3.org/TR/xhtml1/)
- Hojas de Estilo en Cascada ([CSS](/es/CSS)): [CSS Level 1](https://www.w3.org/TR/REC-CSS1), [CSS Level 2](https://www.w3.org/TR/REC-CSS2) y partes de [CSS Level 3](https://www.w3.org/Style/CSS/current-work.html)
- Modelo de Objetos de Documento ([DOM](/es/DOM)): [DOM Level 1](https://www.w3.org/TR/2000/WD-DOM-Level-1-20000929/), [DOM Level 2](https://www.w3.org/DOM/DOMTR#dom2) and parts of [DOM Level 3](https://www.w3.org/DOM/DOMTR#dom3)
- Mathematical Markup Language: [MathML Version 2.0](https://www.w3.org/Math/)
- Lenguaje Extensible de Marcas ([XML](/es/XML)): [XML 1.0](https://www.w3.org/TR/REC-xml), [Namespaces in XML](https://www.w3.org/TR/REC-xml-names/), [Associating Style Sheets with XML Documents 1.0](https://www.w3.org/TR/xml-stylesheet/), [Fragment Identifier for XML](https://lists.w3.org/Archives/Public/www-xml-linking-comments/2001AprJun/att-0074/01-NOTE-FIXptr-20010425.htm)
- XSL Transformations ([XSLT](/es/XSLT)): [XSLT 1.0](https://www.w3.org/TR/xslt)
- XML Path Language ([XPath](/es/XPath)): [XPath 1.0](https://www.w3.org/TR/xpath)
- Resource Description Framework ([RDF](/es/RDF)): [RDF](https://www.w3.org/RDF/)
- Simple Object Access Protocol (SOAP): [SOAP 1.1](https://www.w3.org/TR/SOAP/)
- [JavaScript](/es/JavaScript) 1.6, based on [ECMA-262](/es/ECMA-262), revision 3: [ECMA-262](https://www.ecma-international.org/publications/standards/Ecma-262.htm)

Firefox 1.5 soporta: los siguientes protocolos para transporte de datos (HTTP, FTP, SSL, TLS, y otros), caracteres multilingües (Unicode), múltiples formatos gráficos (GIF, JPEG, PNG, SVG, y otros) y la última versión del lenguaje para scripts más popular del mundo, [JavaScript 1.6](/es/Novedades_en_JavaScript_1.6).

### Cambios desde Firefox 1.0

Muchos cambios han sido introducido en Firefox desde su lanzamiento el 9 de noviembre de 2004. Firefox ha sido mejorado con muchas nuevas características y correciones de bugs. Las release-notes de Deer Park y Firefox son unas excelentes fuentes la información sobre los cambios en cada lanzamiento de Firefox.

- [What's new in Firefox 1.5 (comprehensive)](https://www.squarefree.com/burningedge/releases/1.5-comprehensive.html)
- [What's new in Firefox 1.5 RC 3](https://www.squarefree.com/burningedge/releases/1.5rc3.html)
- [What's new in Firefox 1.5 RC 2](https://www.squarefree.com/burningedge/releases/1.5rc2.html)
- [What's new in Firefox 1.5 RC 1](https://www.squarefree.com/burningedge/releases/1.5rc1.html)
- [What's new in Firefox 1.5 Beta 2](https://www.squarefree.com/burningedge/releases/1.5b2.html)
- [What's new in Firefox 1.5 Beta 1](https://www.squarefree.com/burningedge/releases/1.5b1.html)
- [What's new in Deer Park Alpha 2](https://www.squarefree.com/burningedge/releases/1.5a2.html)
- [What's new in Deer Park Alpha 1](https://www.squarefree.com/burningedge/releases/1.5a1.html)
