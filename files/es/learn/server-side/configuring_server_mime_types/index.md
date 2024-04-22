---
title: Configurar correctamente los tipos MIME del servidor
slug: Learn/Server-side/Configuring_server_MIME_types
---

### Introduccion

Por omisión, muchos servidores web estan configurados para reportar un tipo MIME de `texto/plano` ó `aplicacion/de fuente de octeto` para tipos de contenidos desconocidos. A medida son desarrollados nuevos tipos de contenidos, los administradores de red pueden equivocarse al añadirlos a la configuración del servidor web, y esta es la principal causa de problemas para usuarios de navegadores basados en Gecko, el cual respeta los tipos MIME tal y como son reportados por los servidores y las aplicaciones web.

### ¿Que son los tipos de MIME?

Los tipos de MIME describen el tipo de medio del contenido, sea del correo electrónico o el utilizado en los servidores o aplicaciones web, y tiene como proposito ayudar a guiar al navegador web acerca de como ha de ser procesado y mostrado el contenido. Ejemplos de tipos de MIME son:

- `texto/html` para páginas web normales
- `texto/plano` para texto común
- `Aplicacion/de fuente octeto` que significa "descarga este archivo"
- `Aplicacion/x-java-applet` para uso de applets de Java
- `Aplicacion/pdf` para documentos de Adobe® PDF.

### Información Técnica

MIME está actualmente definida en RFCs [2045](http://www.isi.edu/in-notes/rfc2045.txt), [2046](http://www.isi.edu/in-notes/rfc2046.txt), [2047](http://www.isi.edu/in-notes/rfc2047.txt), [2048](http://www.isi.edu/in-notes/rfc2048.txt), y [2049](http://www.isi.edu/in-notes/rfc2049.txt) y los valores registrados para los tipos MIME estan disponibles en [IANA | MIME Media Types](http://www.iana.org/assignments/media-types/index.html). La [HTTP specification](http://www.w3.org/Protocols/HTTP/1.1/spec.html) define un superconjunto de MIME el cual es utilizado para describir los tipos de medios usados en la red.

### ¿Por qué son importantes los tipos correctos de MIME?

Si el servidor de red o la aplicación informan un tipo incorrecto de MIME para el contenido, un navegador de red no tiene forma de saberlo, _de acuerdo a la especificación HTTP_, más si tenemos en cuenta que el autor especificó el contenido para ser procesado y mostrado en una forma diferente que la impuesta por el tipo MIME informado.

Otros navegadores de red, tal como el Microsoft® Internet Explorer, intentan determinar el tipo adecuado de MIME en servidores mal configurados, _[suponiendo](http://support.microsoft.com/default.aspx?sd=msdn&scid=kb;en-us;293336)_ el tipo adecuado de MIME que debería ser. Esto protege a muchos administradores de red de sus propios errores, pues el Internet Explorer continúa procesando el contenido aunque, por ejemplo, una imagen haya sido informada como texto plano.

### ¿Por qué los navegadores no deberían suponer tipos MIME?

A parte de la violación de la especificación HTTP, es una mala estrategia para los navegadores suponer tipos MIME por las siguientes razones:

#### Pérdida del control

Si el navegador ignora el tipo MIME reportado, los administradores de red y los autores dejarán de tener el control sobre cómo sus contenidos serán procesados.

Por ejemplo, un sitio de red orientado para desarrolladores de red puede enviar determinados ejemplos de documentos HTML como enteros `text/html` ó como `text/plain` para lograr documentos con enteros procesados y motrados como HTML ó como código fuente. Si el navegador supone el tipo MIME, esta posibilidad dejará de estar disponible para el autor.

#### Seguridad

Algunos tipos de contenidos, tales como programas ejecutables, son inherentemente inseguros. Por este motivo, esos tipos MIME son generalmente restringidos en términos de qué acciones tomará el navegador de red al recibirlos. Por ejemplo, un programa ejecutable no debería ser ejecutado en la computadora de un usuario, y en su lugar debería aparecer un cuadro de diálogo **para preguntar al usuario** si desea descargar el archivo.

La suposición de tipos MIME ha llevado a fallas de seguridad en Internet Explorer, debido a autores maliciosos que reportaban el tipo MIME de un archivo peligroso como si fuera uno seguro, evitando así el cuadro de diálogo de descarga normal. El Internet Explorer suponía entonces que se trataba de un programa ejecutable y los corría en la computadora del usuario.

### Cómo determinar el tipo MIME enviado a un servidor

En Firefox, cargar el archivo y usar Herramientas | Información de página. Puede también usar [Rex Swain's HTTP Viewer](http://www.rexswain.com/httpview.html) ó [Live HTTP Headers](http://livehttpheaders.mozdev.org/) para ver los encabezados completos y contenido de cualquier archivo enviado desde un servidor de red.

De acuerdo a los estándares, una `meta` etiqueta que brinda el tipo MIME tal como `<meta http-equiv="Content-Type" content="text/html">` debería ser ignorado si hay una `Content-Type` línea en el encabezado. En vez de buscar esta línea en la fuente HTML, use las técnicas anteriores para determinar el tipo MIME enviado por un servidor.

### Cómo determinar el tipo correcto de MIME para su contenido

Hay ciertos pasos los cuales pueden llevar a derminar el correcto tipo de valor MIME a ser usado para su contenido.

1. Si su contenido fue creado usando la aplicación de software del vendedor, lea la documentación del vendedor para ver qué tipos MIME debería n ser informados para los diferentes tipos de medios.
2. Mire en el [IANA | Registro de Tipos de medios MIME](http://www.iana.org/assignments/media-types/index.html) que contiene todos los tipos MIME registrados.
3. Si el tipo de medio es mostrado usando un plug-in en Netscape Gecko, instale el plug-in y luego mire en Ayuda->Acerca en le Menú Plug-in para ver qué tipos MIME están asociados con el tipo de medio.
4. Buscar la extensión del archivo en [FILExt](http://filext.com/) para ver qué tipos MIME están asociados con esa expresión.

### Cómo configurar su servidor para enviar los tipos MIME correctos

- Si está usando un servidor de red Apache, simplemente copie esto [sample .htaccess file](/es/Sample_.htaccess_file) en el directorio que contiene los archivos que quiere enviar con los tipos correctos MIME. Si tiene un subdirectorio entero de archivos, sólo ubique el archivo en el directorio principal; No necesita ubicarlo en cada subdirectorio.
- Si usa Microsoft IIS, vea [este artículo](http://www.microsoft.com/technet/prodtechnol/windows2000serv/technologies/iis/maintain/featusability/mimeiis.mspx) en Microsoft TechNet.
- Si utiliza un servidor script para generar contenido, puede generalmente agregar una línea cerca del principio de su script. Puede servir contenido otro que HTML desde Perl, PHP, ASP, ó Java — sólo cambie el tipo MIME adecuado.

  - Para Perl CGI, debería tener la línea `print "Content-Type: text/html\n\n";` antes que cualquier otras líneas de salida. Si utiliza el módulo CGI, puede utilizar la línea `print $cgi->header('text/html');` en lugar de, donde `$cgi` es su referencia para la instancia CGI.
  - Para PHP, debería tener la línea `header('Content-Type: text/html');` antes que cualquier otras líneas de salida.
  - Para ASP, debería tener la línea `response.ContentType = "text/html";` antes que cualquier otras líneas de salida.
  - Para un servlet Java, debería tener la línea `response.setContentType("text/html");` al principio de su `doGet` ó `doPost` método, donde `response` es una referencia a `HttpServletResponse`.

### Enlaces Relacionados

- [Tipo MIME incorrecto en archivos CSS](/es/Tipo_MIME_incorrecto_en_archivos_CSS)
- [IANA | MIME Media Types](http://www.iana.org/assignments/media-types/index.html)
- [Hypertext Transfer Protocol — HTTP/1.0](http://www.w3.org/Protocols/HTTP/1.1/spec.html)
- [Microsoft - 293336 - INFO: WebCast: MIME Type Handling in Microsoft Internet Explorer](http://support.microsoft.com/default.aspx?sd=msdn&scid=kb;en-us;293336)
- [Microsoft - Appendix A: MIME Type Detection in Internet Explorer](http://msdn.microsoft.com/workshop/networking/moniker/overview/appendix_a.asp)
- [Microsoft - Security Update, March 29, 2001](http://www.microsoft.com/windows/ie/downloads/critical/q290108/)
- [Microsoft - Security Update, December 13, 2001](http://www.microsoft.com/windows/ie/downloads/critical/Q313675/)
