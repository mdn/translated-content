---
title: Política Same-origin
slug: Web/Security/Same-origin_policy
---

La política same-origin (mismo-origen) restringe cómo un documento o script cargado desde un origen puede interactuar con un recurso de otro origen. Es un mecanismo de seguridad crítico para aislar documentos potencialmente maliciosos.

## Definición de origen

Dos páginas tienen el _mismo origen_ si el {{Glossary("protocol","protocolo")}}, {{Glossary("port","puerto")}} (si es especificado) y {{Glossary("host","anfitrión")}} son los mismos para ambas páginas. Verá esto a veces referido como la "tupla esquema/anfitrión/puerto" (donde una "tupla" es un conjunto de componentes que juntos forman un todo).

La siguiente tabla muestra ejemplos de comparaciones de origenes para la URL `http://store.company.com/dir/page.html`:

| URL                                               | Resultado    | Razón                |
| ------------------------------------------------- | ------------ | -------------------- |
| `http://store.company.com/dir2/other.html`        | Mismo origen | Solo la ruta difiere |
| `http://store.company.com/dir/inner/another.html` | Mismo origen | Solo la ruta difiere |
| `https://store.company.com/secure.html`           | Fallo        | Diferente protocolo  |
| `http://store.company.com:81/dir/etc.html`        | Fallo        | Diferente puerto     |
| `http://news.company.com/dir/other.html`          | Fallo        | Diferente host       |

Ver también [definición de origen para `file:` URLs](/es/docs/Same-origin_policy_for_file:_URIs), puesto que su comparación es más complicada.

### Orígenes heredados

Los scripts ejecutados desde páginas con una URL `about:blank` o `javascript:` heredan el origen del documento que contiene esa URL, puesto que esos tipos de URLs no contienen información sobre un servidor de origen.

> **Nota:** Por ejemplo, `about:blank` a menudo se usa como URL de nuevas ventanas popup en las que el script padre escribe contenido (por ejemplo mediante el mecanismo {{domxref("Window.open()")}}). Si este popup además contiene JavaScript, ese escript heredará el mismo origen que el script que lo ha creado.

> **Advertencia:** `data:` URLs obtienen un nuevo, vacío, contexto de seguridad.

### Excepciones en Internet Explorer

Internet Explorer tiene dos excepciones mayores en lo que se refiere a la política same-origin

- Zonas de Confianza: si ambos dominios pertenecen a una zona de alta confianza e.g, dominios corporativos, entonces las limitaciones del mismo origen no son aplicadas.
- Puerto: IE no incluye puerto en los componentes de Same Origin, por lo tanto <http://company.com:81/index.html> y <http://company.com/index.html> se consideran del mismo origen y no se aplican restricciones.

Estas excepciones no son estándar y no están soportadas en otro navegador pero son útiles cuando se desarrolla una app para Windows RT (o) basada en IE.

## Cambiando el origen

Una página puede cambiar su propio origen con algunas limitaciones. Un script puede asignar el valor de {{domxref("document.domain")}} al dominio actual o a un superdominio del dominio actual. Si se asigna a un superdominio del dominio actual, el dominio más corto es usado para las posteriores comprobaciones de origen. Por ejemplo, sea un script en `http://store.company.com/dir/other.html` que ejecuta lo siguiente:

```
document.domain = "company.com";
```

Tras su ejecución, la página puede pasar la comprobación de origen con `http://company.com/dir/page.html` (asumiendo que `http://company.com/dir/page.html` asigna su `document.domain` a "`company.com`" para indicar que desea hacerlo - ver {{domxref("document.domain")}} para más información). Sin embargo, `company.com` **no** podría asignar `document.domain` a `othercompany.com` ya que no es un superdominio de `company.com`.

El número de puerto es guardado de forma separada por el navegador. Cualquier llamada al setter, incluyendo `document.domain = document.domain` causa que el número del puerto sea sobrescrito con `null`. Por lo tanto **no se puede** hacer que `company.com:8080` hable con `company.com` solo asignando `document.domain = "company.com"` en el primero. Tiene que ser asignado en ambos para que los números de puerto sean `null`.

> **Nota:** Cuando se use `document.domain` para permitir a un subdominio acceder a su padre de forma segura, necesitas asignar `document.domain` al mismo valor tanto en el padre como en el subdominio. Esto es necesario incluso si solo se asigna el dominio padre a su valor original. Un fallo al hacer esto puede resultar en errores de permisos.

## Acceso de red de origen cruzado

La política de mismo origen controla las interacciones entre dos orígenes diferentes, como cuando se usa {{domxref("XMLHttpRequest")}} o un elemento {{htmlelement("img")}}. Estas interacciones habitualmente se ubican en tres categorías:

- Las escrituras Cross-origin normalmente se permiten. Como ejemplo tenemos los enlaces, redirecciones y envíos de formulario. Algunas peticiones HTTP raramente usadas requieren [preflight](/es/docs/HTTP/Access_control_CORS#Preflighted_requests).
- La integración Cross-origin (_embedding)_ normalmente se permite. Los ejemplos se listan debajo.
- Las lecturas Cross-origin habitualmente no se permiten, pero el acceso de lectura es a menudo filtrado mediante integración. Por ejemplo, puedes leer el ancho y el alto de una imagen integrada, las acciones de un script integrado, o la [disponibilidad de un recurso integrado](https://bugzilla.mozilla.org/show_bug.cgi?id=629094).

Aquí hay algunos ejemplos de recursos que pueden ser orígen cruzado incrustado:

- JavaScript con `<script src="..."></script>`. Los mensajes de error para errores de sintaxis están solo disponibles para scripts de mismo origen.
- CSS con `<link rel="stylesheet" href="...">`. Debido a las [reglas de sintaxis relajadas](http://scarybeastsecurity.blogspot.dk/2009/12/generic-cross-browser-cross-domain.html) de CSS, un CSS de origen cruzado requiere de una cabecera `Content-Type` correcta. Las restricciones varían según el navegador: [IE](http://msdn.microsoft.com/en-us/library/ie/gg622939%28v=vs.85%29.aspx), [Firefox](http://www.mozilla.org/security/announce/2010/mfsa2010-46.html), [Chrome](http://code.google.com/p/chromium/issues/detail?id=9877), [Safari](http://support.apple.com/kb/HT4070) (bajar hasta CVE-2010-0051) y [Opera](http://www.opera.com/support/kb/view/943/).
- Imágeness con {{htmlelement("img")}}. Los formatos de imagen soportados incluyen PNG, JPEG, GIF, BMP, SVG, ...
- Archivos multimedia con {{htmlelement("video")}} y {{htmlelement("audio")}}.
- Plug-ins con [`<object>`](/es/docs/HTML/Element/object), [`<embed>`](/es/docs/HTML/Element/embed) y [`<applet>`](/es/docs/HTML/Element/applet).
- Fuentes con [`@font-face`](/es/docs/CSS/@font-face). Algunos buscadores permiten fuentes de orígen cruzado, otros requieren fuentes de mismo orígen.
- Cualquiera con [`<frame>`](/es/docs/HTML/Element/frame) and [`<iframe>`](/es/docs/HTML/Element/iframe). Un sitio puede usar la cabecera [`X-Frame-Options`](/es/docs/HTTP/X-Frame-Options) para prevenir este tipo de interacción de orígen cruzado.

### Cómo permitir el acceso de origen cruzado

Usa [CORS](/es/docs/HTTP/Access_control_CORS) para permitir el acceso de origen cruzado.

### Cómo bloquear el acceso de origen cruzado

- Para prevenir escrituras de orígen cruzado, comprobar un token imposible de adivinar en la petición, conocido como token [Cross-Site Request Forgery (CSRF)](https://www.owasp.org/index.php/Cross-Site_Request_Forgery_%28CSRF%29). Debes prevenir lecturas de orígen cruzado de páginas que conozcan este token.
- Para prevenir lecturas de origen cruzado de un recurso, asegurar que no es incrustable. Frecuentemente es necesario prevenir incrustaciones debido a que al incrustar un recurso siempre se filtra alguna información sobre él.
- Para prevenir incrustaciones de origen cruzado, asegurar que tu recurso no puede ser interpretado como uno de los formatos incrustables de arriba. El navegador no respeta el `Content-Type` en muchos casos. Por ejemplo, si señalas una etiqueta `<script>` en un documento HTML, el navegador tratará de interpretar el HTML como JavaScript. Cuando tu recurso no es un punto de entrada a tu sitio, puedes usar también un token CSRF para prevenir el incrustamiento.

## Acceso script API de Origen Cruzado

Las APIs de JavaScript APIs tales como [`iframe.contentWindow`](/es/docs/DOM/HTMLIFrameElement), {{domxref("window.parent")}}, {{domxref("window.open")}} y {{domxref("window.opener")}} permiten a los documentos referenciarse directamente entre ellos. Cuando dos documentos no tienen el mismo origen, estas referencias proveen un acceso muy limitado a los objetos [`Window`](/es/docs/Web/API/Window) y [`Location`](/es/docs/Web/API/Location), como se describe en las siguientes dos secciones.

Para una mayor comunicación entre documentos de origenes diferentes, usar {{domxref("window.postMessage")}}.

### Window

Especificación: <http://www.whatwg.org/specs/web-apps/current-work/multipage/browsers.html#security-window>.

Los siguientes accesos de origen-cruzado a las propiedades de `Window` están permitidos:

| Métodos                           |
| --------------------------------- |
| {{domxref("window.blur")}}        |
| {{domxref("window.close")}}       |
| {{domxref("window.focus")}}       |
| {{domxref("window.postMessage")}} |

| Atributos                      |               |
| ------------------------------ | ------------- |
| {{domxref("window.closed")}}   | Solo lectura. |
| {{domxref("window.frames")}}   | Solo lectura. |
| {{domxref("window.length")}}   | Read only.    |
| {{domxref("window.location")}} | Solo lectura. |
| {{domxref("window.opener")}}   | Solo lectura. |
| {{domxref("window.parent")}}   | Solo lectura. |
| {{domxref("window.self")}}     | Solo lectura. |
| {{domxref("window.top")}}      | Solo lectura. |
| {{domxref("window.window")}}   | Solo lectura. |

Algunos navegadores permiten el acceso a más propiedades de las que permite la especificación.

### Location

Especificación: <http://www.whatwg.org/specs/web-apps/current-work/multipage/browsers.html#security-location>.

Los siguientes accesos de origen cruzado a las propiedades de `Location` están permitidos:

| Métodos                         |
| ------------------------------- |
| {{domxref("location.replace")}} |

| Atributos                    |                 |
| ---------------------------- | --------------- |
| {{domxref("URLUtils.href")}} | Solo escritura. |

Algunos navegadores permiten el acceso a más propiedades de las que permite la especificación.

## Acceso de almacenamiento de datos de origen cruzado

El acceso a datos almacenados en el navegador tales como [localStorage](/es/docs/Web/Guide/API/DOM/Storage) y [IndexedDB](/es/docs/IndexedDB) son separados por origen. Cada origen obtiene su propio almacenamiento separado, y JavaScript en un origen no puede leer desde o escribir al almacenamiento perteneciente a otro origen.

Las cookies usan una definición separada de orígenes. Una página puede asignar una cookie para su propio dominio o cualquier dominio padre, siempre que el dominio padre no sea un sufijo público. Firefox y Chrome usan la [Lista de Sufijos Públicos](http://publicsuffix.org/) para determinar si un dominio es un sufijo público. Internet Explorer usa su propio método interno para determinar si un dominio es un sufijo públicio. El navegador hará disponible una cookie para el dominio dado incluyendo cualquier subdominio, no importa qué protocolo (HTTP/HTTPS) o puerto sea usado. Cuando asignas una cookie, puedes limitar su disponibilidad usando los flags Domain, Path, Secure y Http-Only. Cuando lees una cookie, no puedes ver desde dónde fue asignada. Incluso si sólo usas conexiones HTTPS, cualquier cookie que veas puede haber sido asignada usando una conexión insegura.

## Ver también

- [Política](http://www.w3.org/Security/wiki/Same_Origin_Policy)
- [Same-Origin para file: URIs](/es/docs/Same-origin_policy_for_file:_URIs)
- [Política Same-Origin en W3C](http://www.w3.org/Security/wiki/Same_Origin_Policy)

## Información de Documento Original

- Autor(es): Jesse Ruderman

{{QuickLinksWithSubpages("/es/docs/Web/Security")}}
