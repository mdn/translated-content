---
title: Content Security Policy (CSP)
slug: Web/HTTP/CSP
---

{{HTTPSidebar}}

**Política de Seguridad del Contenido** o ( {{Glossary("CSP")}} ) - del inglés **_Content Security Policy_** - es una capa de seguridad adicional que ayuda a prevenir y mitigar algunos tipos de ataque, incluyendo Cross Site Scripting ( {{Glossary("XSS")}} ) y ataques de inyección de datos. Estos ataques son usados con diversos propósitos, desde robar información hasta desfiguración de sitios o distribución de malware .

CSP está diseñado para ser completamente retrocompatible (excepto la versión 2 de CSP, donde hay algunas menciones explícitas de inconsistencia en la retrocompatibilidad; más detalles [aquí](https://www.w3.org/TR/CSP2) sección 1.1). Los navegadores que no lo soportan siguen funcionando con los servidores que lo implementan y viceversa: los navegadores que no soportan CSP simplemente lo ignoran, funcionando como siempre y delegando a la política mismo-origen para contenido web. Si el sitio web no ofrece la cabecera CSP, los navegadores igualmente usan la política estándar [mismo-origen](/es/docs/Web/Security/Same-origin_policy).

Para habilitar CSP, necesitas configurar tu servidor web para que devuelva la cabecera HTTP {{HTTPHeader("Content-Security-Policy")}} (en ocasiones verás menciones de la cabecera `X-Content-Security-Policy`, pero se trata de una versión antigua y no necesitas especificarla más).

Alternativamente, el elemento {{HTMLElement("meta")}} puede ser usado para configurar una política, por ejemplo: `<meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src https://*; child-src 'none';">`

## Amenazas

### Mitigando el cross site scripting

El principal objetivo del CSP es mitigar y reportar ataques XSS. Los ataques XSS se aprovechan de la confianza del navegador en el contenido que recibe del servidor. El navegador de la víctima ejecutará los scripts maliciosos porque confía en la fuente del contenido, aun cuando dicho contenido no provenga de donde se supone.

CSP hace posible que los administradores de servidores reduzcan o eliminen las posibilidades de ocurrencia de XSS mediante la especificación de dominios que el navegador considerará como fuentes válidas de scripts ejecutables. Un navegador compatible con CSP solo ejecutará scripts de los archivos fuentes especificados en esa lista blanca de dominios, ignorando completamente cualquier otro script (incluyendo los scripts inline y los atributos de HTML de manejo de eventos).

Como medida extrema de protección, los sitios que nunca requieran ejecutar scripts, pueden optar por rechazar globalmente la ejecución de scripts.

### Mitigando los ataques de análisis de paquetes (packet sniffing attacks)

Además de restringir los dominios desde los cuales se puede cargar el contenido, el servidor puede especificar qué protocolos se pueden usar; por ejemplo (e idealmente, desde un punto de vista de seguridad), un servidor puede especificar que todo el contenido debe cargarse utilizando HTTPS. Una estrategia completa de seguridad en la transmisión de datos incluye no solo aplicar HTTPS para la transferencia de datos, sino también marcar todas las cookies con el indicador de seguridad y proporcionar redirecciones automáticas desde las páginas HTTP a sus homólogas HTTPS. Los sitios también pueden usar la cabecera HTTP {{HTTPHeader ("Strict-Transport-Security")}} para garantizar que los navegadores se conecten a ellos solo a través de un canal cifrado.

## Utilizando CSP

La configuración de la Política de Seguridad del Contenido (CSP), consiste en agregar a una página web la cabecera HTTP {{HTTPHeader("Content-Security-Policy")}}, y darle valores para controlar los recursos que el agente de usuario puede cargar para esa página. Por ejemplo, una página que carga y muestra imágenes podría permitir imágenes desde cualquier lugar, pero pudiera restringir una acción de formulario a una ruta específica. Una Política de Seguridad de Contenido adecuadamente diseñada ayuda a proteger una página contra un ataque de scripts entre sitios. Este artículo explica cómo construir dichas cabeceras correctamente y proporciona ejemplos.

### Especificando una política

Para especificar una política, se puede utilizar la cabecera HTTP {{HTTPHeader("Content-Security-Policy")}} de la siguiente manera:

```
Content-Security-Policy: política
```

La _política_ es una cadena de caracteres que contiene las directivas que describen una determinada Política de Seguridad de Contenido.

### Describiendo una política

Una política se describe utilizando una serie de directivas de políticas, cada una de las cuales describe la política para un determinado tipo de recurso o área de política. Una política debe incluir una directiva de políticas {{CSP ("default-src")}}, que es una alternativa para otros tipos de recursos cuando no tienen políticas propias (para obtener una lista completa, consulte la descripción de la directiva {{CSP("default-src")}} ). Una política debe incluir una directiva {{CSP ("default-src")}} o {{CSP ("script-src")}} para evitar la ejecución de scripts en línea, así como bloquear el uso de `eval()`. Una política debe incluir una directiva {{CSP ("default-src")}} o {{CSP ("style-src")}} para restringir la aplicación de estilos en línea desde un elemento {{HTMLElement ("style")}}} o un atributo `style`.

## Ejemplos: Casos de usos frecuentes

Esta sección proporciona ejemplos de algunos escenarios frecuentes de políticas de seguridad.

### Ejemplo 1

Un administrador del sitio web desea que todo el contenido provenga del mismo origen que el del sitio (esto excluye subdominios).

```
Content-Security-Policy: default-src 'self'
```

### Ejemplo 2

El administrador de un sitio web desea permitir el contenido de un dominio de confianza y todos sus subdominios (no tiene que ser el mismo dominio en el que está configurado el CSP).

```
Content-Security-Policy: default-src 'self' *.trusted.com
```

### Ejemplo 3

El administrador de un sitio web desea permitir que los usuarios de una aplicación web incluyan imágenes de cualquier origen en su propio contenido, pero restringen los medios de audio o video a proveedores de confianza, y todas las secuencias de comandos solo a un servidor específico que aloja un código de confianza.

```
Content-Security-Policy: default-src 'self'; img-src *; media-src media1.com media2.com; script-src userscripts.example.com
```

Aquí, de forma predeterminada, el contenido solo se permite desde el origen del documento, con las siguientes excepciones:

- Las imágenes pueden cargarse desde cualquier lugar (tenga en cuenta el comodín "\*").
- Los archivos de medios solo están permitidos desde media1.com y media2.com (y no desde los subdominios de esos sitios).
- El script ejecutable solo está permitido desde userscripts.example.com.

### Ejemplo 4

En administrador de un sitio web de banca en línea quiere asegurarse de que todo su contenido se cargue mediante SSL, para evitar que los atacantes puedan espiar las solicitudes.

```
Content-Security-Policy: default-src https://onlinebanking.jumbobank.com
```

El servidor solo permite el acceso a documentos que se cargan específicamente a través de HTTPS a través del único origen onlinebanking.jumbobank.com.

### Ejemplo 5

El administrador de un sitio de correo web desea permitir HTML en el correo electrónico, así como imágenes cargadas desde cualquier lugar, pero no JavaScript u otro contenido potencialmente peligroso.

```
Content-Security-Policy: default-src 'self' *.mailsite.com; img-src *
```

Tenga en cuenta que este ejemplo no especifica un {{CSP ("script-src")}} ; con el CSP de ejemplo, este sitio utiliza la configuración especificada por la directiva {{CSP ("default-src")}} , lo que significa que los scripts solo se pueden cargar desde el servidor de origen.

## Comprobando una política

Para facilitar la implementación, CSP se puede implementar en modo de solo informe. La política no se aplica, pero cualquier violación se informa a un URI proporcionado. Además, se puede usar una cabecera de solo informe para probar una futura revisión de una política sin implementarla realmente.

Se puede usar la cabecera HTTP {{HTTPHeader ("Content-Security-Policy-Report-Only")}} para especificar una política de la siguiente manera:

```
Content-Security-Policy-Report-Only: policy
```

Si la cabecera {{HTTPHeader ("Content-Security-Policy-Report-Only")}} y la cabecera {{HTTPHeader ("Content-Security-Policy")}} están presentes en la misma respuesta, ambas políticas se cumplen. La política especificada en la cabecera `Content-Security-Policy` se aplica, mientras que la política `Content-Security-Policy-Report-Only` genera informes pero no se aplica.

## Habilitación de informes

Por defecto, los informes de violación no son enviados. Para habilitar los informes de violación, debe especificar la directiva de políticas {{CSP ("report-uri")}} , proporcionando al menos un URI al que entregar los informes:

```
Content-Security-Policy: default-src 'self'; report-uri http://reportcollector.example.com/collector.cgi
```

Luego se debe configurar el servidor para recibir los informes; se pueden almacenar o procesar de la manera que considere apropiada.

## Sintáxis del informe de violación

El informe es un objeto JSON que contiene los datos siguientes:

- `blocked-uri`
  - : El URI del recurso bloqueado por la Política de Seguridad de Contenido. Si el URI bloqueado es de un origen diferente al del **document-uri**, el URI bloqueado se trunca para contener solo el esquema, el host y el puerto.

<!---->

- `disposition`
  - : Toma el valor `"enforce"` o `"reporting"` dependiendo de si se utiliza la cabecera {{HTTPHeader("Content-Security-Policy-Report-Only")}} o `Content-Security-Policy`.
- `document-uri`
  - : El URI del documento donde ocurrió la violación.
- `effective-directive`
  - : La directiva cuya aplicación causó la violación.
- `original-policy`
  - : La política original especificada por la cabecera HTTP `Content-Security-Policy`.
- `referrer`
  - : El referente del documento en el que ocurrió la violación.
- `script-sample`
  - : Los primeros 40 caracteres del script inline, el controlador de eventos o el estilo que causó la violación.
- `status-code`
  - : El código de estado HTTP del recurso en el que se creó una instancia del objeto global.
- `violated-directive`
  - : El nombre de la sección de política que fue violada.

## Ejemplo de informe de violación

Consideremos una página ubicada en <http://example.com/signup.html> que tiene las siguiente política: rechazar todo, excepto las hojas de estilo provenientes de <cdn.example.com>.

```
Content-Security-Policy: default-src 'none'; style-src cdn.example.com; report-uri /_/csp-reports
```

El código HTML de `signup.html` es el siguiente:

```html
<!doctype html>
<html>
  <head>
    <title>Sign Up</title>
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    ... Content ...
  </body>
</html>
```

¿Puedes ver el error? Las hojas de estilo solo se pueden cargar desde <cdn.example.com>, pero el sitio web intenta cargar una desde su propio origen (<http://example.com>). Un navegador capaz de aplicar el CSP enviará el siguiente informe de violación mediante una solicitud POST a <http://example.com/_/csp-reports>, cuando se visite el documento:

```
{
  "csp-report": {
    "document-uri": "http://example.com/signup.html",
    "referrer": "",
    "blocked-uri": "http://example.com/css/style.css",
    "violated-directive": "style-src cdn.example.com",
    "original-policy": "default-src 'none'; style-src cdn.example.com; report-uri /_/csp-reports"
  }
}
```

Como se puede ver, el informe incluye la ruta completa al recurso infractor en `blocked-uri`. Este no es siempre el caso. Por ejemplo, cuando `signup.html` intente cargar el CSS desde <http://anothercdn.example.com/stylesheet.css>, el navegador no incluiría la ruta completa, sino solo el origen (<http://anothercdn.example.com>). La especificación CSP da una explicación de este extraño comportamiento. En resumen, esto se hace para evitar la pérdida de información confidencial sobre recursos de origen cruzado.

## Compatibilidad del navegador

{{Compat}}

Existe una incompatibilidad específica en algunas versiones del navegador web Safari, por lo que si se establece una cabecera de Política de Seguridad de Contenido, pero no una cabecera de Same Origin, el navegador bloqueará el contenido alojado de forma autónoma y el contenido externo, e informará incorrectamente de que esto es debido a que la Política de Seguridad del Contenido no permite el contenido.

## Vea también

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
- [Content Security in WebExtensions](/es/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [Display security and privacy policies In Firefox Developer Tools](/es/docs/Tools/GCLI/Display_security_and_privacy_policies)
