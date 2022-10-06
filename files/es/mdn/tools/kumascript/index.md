---
title: KumaScript
slug: MDN/Tools/KumaScript
tags:
  - Guide
  - Guía
  - Kuma
  - KumaScript
  - MDN Meta
  - NeedsContent
  - Site-wide
---

{{MDNSidebar}}

En la plataforma [Yari](/es/docs/MDN/Yari) que impulsa MDN, todavía tenemos disponible un sistema de plantilla/macro heredado llamado [KumaScript](https://github.com/mdn/yari/tree/main/kumascript) para automatizar ciertos aspectos del contenido. Esperamos dejar de usarlo algún día, pero hasta entonces, MDN seguirá confiando en él. Este artículo proporciona información básica sobre el uso de KumaScript.

### ¿Qué es KumaScript?

- Una forma de reutilizar y localizar el contenido que aparece repetidamente entre documentos (por ejemplo, etiquetas de compatibilidad, navegación por secciones, pancartas de advertencia).
- Una forma de crear documentos a partir de contenido extraído de otros documentos.
- Una forma de obtener e incluir contenido de otros sitios web y servicios (p. ej., Bugzilla).

### Qué no es KumaScript

KumaScript:

- **No** admite scripts interactivos del tipo que puede aceptar envío de formularios.
- **No** tiene acceso a una base de datos, archivos o cualquier otra forma de almacenar información de forma persistente.
- **No** admite personalización del sitio basada en el usuario conectado actualmente.
- **No** tiene acceso a la información del usuario, solo al contenido y metadatos de la página MDN que se está viendo.

## Conceptos básicos

KumaScript se usa en MDN a través de [plantillas de JavaScript integradas](https://github.com/mde/ejs). Estas plantillas pueden ser invocadas en el contenido del documento por cualquier autor de MDN, mediante el uso de macros.

Un script en KumaScript es una _plantilla_, y cada plantilla es un archivo en el [directorio de macros](https://github.com/mdn/yari/tree/main/kumascript/macros) del repositorio `mdn/yari` en GitHub. Una plantilla de muestra se podría ver así:

```js
<% for (let i = 0; i < $0; i++) { %>
  Hello #<%= i %>
<% } %>
```

La invocación de una plantilla se realiza con una _macro_, que se puede utilizar en cualquier parte del contenido de cualquier página. Invocar la plantilla anterior se vería así (siempre que se haya guardado en el directorio de macros con un nombre de archivo de `hello.ejs`):

```plain
\{{hello(3)}}
```

La salida de la macro se vería así:

```
Hello #0
Hello #1
Hello #2
```

### Sintaxis de macros

La sintaxis de las macros toma la siguiente forma general:

```plain
\{{templateName("arg0", "arg1", /* …, */ "argN")}}
```

La sintaxis de las macros sigue estas **reglas**:

- Las macros comienzan y terminan con los caracteres `\{{ y \}}`.
- La primera parte de la macro es el nombre de una plantilla. El valor en minúsculas de este nombre debe coincidir con el valor en minúsculas de uno de los nombres de archivo en el directorio de macros.
- Una plantilla puede aceptar parámetros, y esta lista de parámetros comienza y termina con paréntesis.
- Todos los parámetros no numéricos deben ir entre comillas. Los números se pueden dejar sin comillas.

#### Usar JSON como parámetro de macro

Como función semiexperimental (no se garantiza que funcione), puedes proporcionar un objeto JSON para el primer y único parámetro, así:

```plain
\{{templateName({ "Alpha": "one", "Beta": ["a", "b", "c"], "Foo": "https:\/\/mozilla.org\/" })}}
```

Los datos de esta macro están disponibles en el código de la plantilla como un objeto en el argumento `$0` (por ejemplo, `$0.Alpha`, `$0.Beta`, `$0.Foo`). Esto también te permite expresar estructuras de datos complejas en parámetros macro que son difíciles o imposibles de hacer con una simple lista de parámetros.

Ten en cuenta que este estilo de parámetro es muy exigente: se debe adherir exactamente a la [sintaxis JSON](https://json.org/), que tiene algunos requisitos sobre caracteres de escape que son fáciles de perder (por ejemplo, todas las barras diagonales se escapan). En caso de duda, [intenta ejecutar tu JSON a través de un validador](https://jsonlint.com/).

#### Cómo escribir "\\{{" en el texto

Debido a que la secuencia de caracteres "`\{{`" se usa para indicar el inicio de una macro, esto puede ser problemático si en realidad solo deseas usar "`\{{`" y "`\}\}`" en una página. Probablemente producirá mensajes `DocumentParsingError`.

En este caso, puedes escapar la primera llave con una barra invertida, así: `\\{{`.

### Sintaxis de la plantilla

Cada plantilla de KumaScript es un archivo en [el directorio de macros](https://github.com/mdn/yari/tree/main/kumascript/macros) del repositorio `mdn/yari` en GitHub. Creas y editas estos archivos como lo harías con los archivos de cualquier proyecto de código abierto en GitHub.

Las plantillas de KumaScript son procesadas por un [motor de plantillas JavaScript incorporado](https://ejs.co) con algunas reglas simples:

- Dentro de una plantilla, los parámetros pasados ​​desde la macro están disponibles como variables `$0`, `$1`, `$2`, etc. La lista completa de parámetros también está disponible en una plantilla como la variable `arguments`.
- La mayor parte del texto se trata como salida y se incluye en el flujo de salida.
- Las variables y expresiones de JavaScript se pueden insertar en el flujo de salida con estos bloques:

  - `<%= expr %>` — el valor de una expresión de JavaScript se escapa para HTML antes de incluirse en la salida (por ejemplo, caracteres como `<` y `>` se convierten en `&lt;` y `&gt;`) .
  - `<%- expr %>` — el valor de una expresión JavaScript se incluye en la salida sin ningún tipo de escape. (Utiliza esto si deseas crear marcas dinámicamente o usar los resultados de otra plantilla que puede incluir marcas).
  - Es un error incluir punto y coma dentro de estos bloques.

- Cualquier cosa dentro de un bloque `<% %>` se interpreta como JavaScript. Este puede incluir bucles, condicionales, etc.
- Nada dentro de un bloque `<% %>` puede contribuir al flujo de salida. Pero puedes pasar del modo JS al modo de salida usando `<% %>`, por ejemplo:

  ```js
  <% for (let i = 0; i < $0; i++) { %>
    Hello #<%= i %>
  <% } %>
  ```

  Observa cómo el código JavaScript está contenido en `<% … %>`, y la salida ocurre en el espacio entre `%> … <%`. El bucle `for` en JS puede comenzar con un bloque `<% %>`, pasar al modo de salida y terminar en un segundo bloque JS `<% %>`.

- Para obtener más detalles sobre la sintaxis de EJS, [consulta la documentación del módulo anterior](https://ejs.co).

## Características avanzadas

Más allá de lo básico, el sistema KumaScript ofrece algunas funciones avanzadas.

### Variables de entorno

Cuando el wiki hace una llamada al servicio KumaScript, transmite algún contexto en el documento actual que KumaScript pone a disposición de las plantillas como variables:

- `env.path`
  - : La ruta al documento MDN actual
- `env.url`
  - : La URL completa del documento MDN actual
- `env.id`
  - : Una ID breve y única para el documento MDN actual
- `env.files`
  - : Un arreglo de los archivos adjuntos al documento MDN actual; cada objeto en el arreglo es como se describe en [Objetos File](#file_objects) más adelante
- `env.review_tags`
  - : Un arreglo de etiquetas de revisión en el artículo ("technical", "editorial", etc.)
- `env.locale`
  - : La configuración regional del documento MDN actual
- `env.title`
  - : El título del documento MDN actual
- `env.slug`
  - : El slug de la URL del documento MDN actual
- `env.tags`
  - : Un arreglo con la lista de nombres de etiquetas para el documento MDN actual
- `env.modified`
  - : Última marca de tiempo en que se modificó el documento MDN actual
- `env.cache_control`
  - : Cabecera `Cache-Control` enviada en la solicitud del documento MDN actual, útil para decidir si se invalidan las cachés

#### Objetos File

Cada objeto `file` tiene los siguientes campos:

- `title`
  - : El título del archivo adjunto
- `description`
  - : Una descripción textual de la revisión actual del archivo
- `filename`
  - : El nombre del archivo
- `size`
  - : El tamaño del archivo en bytes
- `author`
  - : El nombre de usuario de la persona que cargó el archivo
- `mime`
  - : El tipo MIME del archivo
- `url`
  - : La URL en la que se puede encontrar el archivo

#### Trabajar con listas de etiquetas

Las variables `env.tags` y `env.review_tags` devuelven arreglos de etiquetas. Puedes trabajar con estos de muchas maneras, por supuesto, pero aquí hay un par de sugerencias.

##### Buscar si se ha establecido una etiqueta específica

Puedes mirar para saber si existe una etiqueta específica en una página con algo como esto:

```js
if (env.tags.indexOf("tag") !== −1) {
  // La página tiene la etiqueta "tag"
}
```

##### Iterar sobre todas las etiquetas en una página

También puedes iterar sobre todas las etiquetas en una página, así:

```js
env.tag.forEach(function (tag) {
  // haz lo que tengas que hacer, como:
  if (tag.indexOf("a") === 0) {
    // esta etiqueta comienza con "a" - ¡wauhoo!
  }
});
```

### API y módulos

KumaScript ofrece algunos métodos integrados y APIs para macros de KumaScript. Las macros también pueden usar `module.exports` para exportar nuevos métodos API.

#### Métodos incorporados

Es probable que esta documentación mantenida manualmente quede desactualizada con el código. Con eso en mente, siempre puedes consultar el estado más reciente de las APIs integradas en la [fuente de KumaScript](https://github.com/mdn/yari/tree/main/kumascript/src/api). Pero aquí hay una selección de métodos útiles expuestos a plantillas:

- `md5(string)`
  - : Devuelve un resumen hexadecimal MD5 de la cadena dada.
- `template("name", ["arg0", "arg1", …, "argN"])`

  - : Ejecuta y devuelve el resultado de la plantilla nombrada con la lista de parámetros dada.

    Ejemplo: `<%- template("warning", ["foo", "bar", "baz"]) %>`.

    Ejemplo usando la macro `DOMxRef`: `<%- template("DOMxRef", ["Event.bubbles", "bubbles"]) %>`.

    Esta es una función JavaScript. Entonces, si uno de los parámetros es una variable `arg` como `$2`, no lo pongas entre comillas. Debe ser así: `<%- template("warning", [$1, $2, "baz"]) %>`. Si necesitas llamar a otra plantilla desde dentro de un bloque de código, no uses `<%` … `%>`. Ejemplo: `myvar = "<li>" + template("LXRSearch", ["ident", "i", $1]) + "</li>";`

- `require(name)`
  - : Carga otra plantilla como módulo; cualquier salida es ignorada. Se devuelve cualquier cosa asignada a `module.exports` en la plantilla. Usada en plantillas así: `<% const my_module = require('MyModule'); %>`.
- `cacheFn(key, timeout, function_to_cache)`
  - : Utilizando la clave dada y la entrada de caché, almacena en caché los resultados de la función dada. Respeta el valor de `env.cache_control` para invalidar la caché en `no-cache`, que puede ser enviada por un usuario conectado presionando "Mayús+Recargar".
- `request`
  - : Accede a [`request/request`](https://github.com/request/request), una biblioteca para realizar solicitudes HTTP. El uso de este módulo en las plantillas de KumaScript aún no es muy amigable, por lo que es posible que desees incluir el uso en las APIs del módulo para simplificar las cosas.
- `log.debug(string)`
  - : Genera un mensaje de depuración en el registro del script en la página (es decir, el cuadro rojo grande que generalmente muestra errores).

#### Módulos API incorporados

Hay un conjunto de APIs integradas que se cargan automáticamente y están disponibles para cada plantilla mediante el script del entorno, además de proporcionar algunas funciones del antiguo sistema DekiScript heredado en el que se basó MDN hace muchos años.

Estos se utilizan para compartir variables y métodos comunes entre plantillas:

- `kuma.*` - [Kuma](https://github.com/mdn/yari/blob/main/kumascript/src/api/kuma.js)
- `MDN.*` - [MDN:Common](https://github.com/mdn/yari/blob/main/kumascript/src/api/mdn.js)
- `page.*` - [DekiScript:Page](https://github.com/mdn/yari/blob/main/kumascript/src/api/page.js)
- `string.*` - [DekiScript:String](https://github.com/mdn/yari/blob/main/kumascript/src/api/string.js)
- `web.*` - [DekiScript:Web](https://github.com/mdn/yari/blob/main/kumascript/src/api/web.js)
- `wiki.*` - [DekiScript:Wiki](https://github.com/mdn/yari/blob/main/kumascript/src/api/wiki.js)

Otras APIs disponibles incluyen:

- `kuma.inspect(object)`
  - : Renderiza cualquier objeto JS como una cadena, útil para usar con `log.debug()`. Consulta también: [node.js `util.inspect()`](https://nodejs.org/api/util.html#util_util_inspect_object_options).
- `kuma.htmlEscape(string)`
  - : Escapa los caracteres `&, <, >, "` a `&amp, &lt;, &gt;, &quot;`, respectivamente.
- `kuma.url`
  -: Consulta también: [node.js `url` module](https://nodejs.org/api/url.html).
- `kuma.fetchFeed(url)`
  - : Obtiene una fuente RSS y la procesa a un objeto JS.

#### Crear módulos

Con el método `require()` incorporado, puedes cargar una plantilla como un módulo para compartir variables y métodos comunes entre plantillas. Un módulo se puede definir en una plantilla con algo como esto:

```js
<%
module.exports = {
    add(a, b) {
        return a + b;
    }
}
%>
```

Suponiendo que esta plantilla se guardó en el directorio de macros como `MathLib.ejs`, la podrías usar en otra plantilla así:

```js
<%
const math_lib = require("MathLib");
%>
El resultado de 2 + 2 = <%= math_lib.add(2, 2) %>
```

Y, la salida de esta plantilla sería:

```
El resultado de 2 + 2 = 4
```

## Consejos y avisos

### Depuración

Un consejo útil al depurar. Puedes usar el método `log.debug()` para generar texto en el área de mensajes de scripts en la parte superior de la página que ejecuta tu plantilla. Ten en cuenta que te debes asegurar de eliminarlos cuando termines de depurar, ya que son visibles para todos los usuarios. Para usarlo, solo haz algo como esto:

```js
<%- log.debug("Aquí va algo de texto"); %>
```

Por supuesto, puedes crear salida más compleja utilizando código desde scripts si es útil.

### Almacenamiento en caché

Las plantillas de KumaScript se almacenan en caché para mejorar el rendimiento. En su mayor parte, esto funciona muy bien para ofrecer contenido que no cambia muy a menudo. Pero, como usuario que has iniciado sesión, tienes dos opciones para forzar la regeneración de una página, en caso de que observes problemas con los scripts:

- Pulsa Actualizar en tu navegador. Esto hace que KumaScript invalide su caché para el contenido de la página actual emitiendo una solicitud con un encabezado `Cache-Control: max-age=0`.
- Presiona "Mayús+Recargar" en tu navegador. Esto hace que KumaScript invalide la caché para la página actual, así como para cualquier plantilla o contenido utilizado por la página actual al emitir una solicitud con un encabezado `Cache-Control: no-cache`.

## Trucos

Esta sección enumerará ejemplos de patrones comunes para plantillas utilizadas en MDN, incluidas muestras de plantillas de DekiScript heredadas y sus nuevos equivalentes de KumaScript.

### Forzar la recarga de las plantillas utilizadas en una página

lVale la pena repetirlo: para obligar a que las plantillas utilizadas en una página se vuelvan a cargar después de editarlas, presiona "Mayús+Recargar". Al usar Recargar por sí solo hará que el contenido de la página se regenere, pero usando plantillas en caché y contenido incluido. Se necesita "Mayús+Recargar" para invalidar cachés más allá del contenido de la página en sí.

### Recuperar de "Error desconocido"

A veces, verás un mensaje de script como este cuando cargues una página:

```plain
El servicio Kumascript falló inesperadamente: <clase 'httplib.BadStatusLine'>
```

Probablemente se trate de un error temporal del servicio KumaScript. Si actualizas la página, el error puede desaparecer. Si eso no funciona, intenta con "Mayús+Recargar". Si después de algunos intentos, el error persiste: [presenta un error en IT](https://bugzilla.mozilla.org/enter_bug.cgi?product=mozilla.org&format=itrequest) para que Mozilla Developer Network solicite una investigación.

### Macros `wiki.languages()` rotas

En algunas páginas, verás un error de script como este:

```plain
Error de sintaxis en la línea 436, columna 461: Se esperaba un objeto JSON válido como parámetro de la macro anterior pero...
```

Si editas la página, probablemente verás una macro como esta en la parte inferior de la página:

```plain
\{{ wiki.languages({ "zh-tw": "zh_tw/Core_JavaScript_1.5_教學/JavaScript_概要", … }) }}
```

Para solucionar el problema, simplemente elimina la macro. O bien, reemplaza las llaves a cada lado con comentarios HTML `<!-- -->` para conservar la información, así:

```html
<!-- wiki.languages({ "zh-tw": "zh_tw/Core_JavaScript_1.5_教學/JavaScript_概要", ... }) -->
```

Debido a que Kuma admite la localización de manera diferente, estas macros ya no son necesarias. Sin embargo, se han dejado intactas en caso de que necesitemos revisar las relaciones entre las páginas localizadas. Desafortunadamente, parece que la migración no ha logrado convertir algunas de ellas satisfactoriamente.

### Buscar el idioma de la página actual

En KumaScript, la configuración regional del documento actual se expone como una variable de entorno:

```js
const lang = env.locale;
```

La variable `env.locale` debe ser confiable y estar definida para cada documento.

### Lectura del contenido de un archivo adjunto a la página

Puedes leer el contenido de un archivo adjunto usando la función `mdn.getFileContent()`, así:

```js
<%
  let contents = mdn.getFileContent(fileUrl);
  // hacer cosas con el contenido...
%>
```

o

```js
<%- mdn.getFileContent(fileObject); %>
```

En otras palabras, puedes especificar la URL del archivo para leer o como un objeto `file`. Se puede acceder a los objetos `file` de una página a través del arreglo `env.files`. Entonces, por ejemplo, para incrustar el contenido del primer archivo adjunto al artículo, puedes hacer esto:

```js
<%- mdn.getFileContent(env.files[0]); %>
```

> **Nota:** Probablemente no quieras intentar incrustar el contenido de un archivo que no sea de texto de esta manera, ya que el contenido sin procesar se inyectaría como texto. Esto está destinado a permitirte acceder al contenido de los archivos de texto adjuntos.

Si no se encuentra el archivo, se devuelve una cadena vacía. Actualmente no hay forma de saber la diferencia entre un archivo vacío y uno inexistente. Pero si estás poniendo archivos vacíos en la wiki, lo estás haciendo mal.

### Localización del contenido de la plantilla

Las plantillas no se traducen como las páginas wiki, sino que se puede usar una sola plantilla para cualquier número de lugares.

Las plantillas se pueden localizar usando el método `mdn.localString()`, que toma un objeto que contiene un mapeo de locales a cadenas. Por ejemplo:

```js
<%
const text = mdn.localString({
  "en-US": "Hello world!",
  "es": "¡Hola mundo!",
  // ...
});
%>
```

Cada configuración regional también puede tomar un objeto que contenga una asignación de claves a cadenas, para más de una cadena. Por ejemplo:

```js
<%
const text = mdn.localStringMap({
  'en-US': {
    'Complete_beginners_start_here': 'Complete beginners start here!',
    'Getting_started_with_the_web': 'Getting started with the web',
  },
  'de': {
    'Complete_beginners_start_here': 'Anfänger starten hier!',
    'Getting_started_with_the_web': 'Lernen Sie das Internet kennen',
  },
  'fr': {
    'Complete_beginners_start_here': 'Bienvenue aux débutants !',
    'Getting_started_with_the_web': 'Commencer avec le Web',
  },
  // ...
});
%>
```

La función `mdn.localString()` cargará automáticamente cadenas para la configuración regional apropiada. Si falta una cadena para una configuración regional, se recurrirá a `en-US` para esa cadena. Por ejemplo:

```js
<%
const s_title = mdn.localString({
  "en-US": "Firefox for Developers",
  "de": "Firefox für Entwickler",
  "es": "Firefox para desarrolladores"
});

const body = mdn.localString({
  "en-US": {
    "hello": "Hello!",
    "goodbye": "Goodbye!",
  },
  "de": {
    "hello": "Hallo!",
    "goodbye": "Auf Wiedersehen!",
  },
  "es": {
    "hello": "¡Hola!"
  }
});
%>
<%= s_title %> / <%= body['hello'] %> / <%= body['goodbye'] %>
```

Renderizará, para `de`:

```
Firefox für Entwickler / Hallo! / Auf Wiedersehen!
```

...y para `es`:

```
Firefox para desarrolladores / ¡Hola! / Goodbye!
```

...y para `en-US` / `ko`:

```
Firefox for Developers / Hello! / Goodbye!
```
