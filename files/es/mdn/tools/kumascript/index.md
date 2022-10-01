---
title: Introducción a KumaScript
slug: MDN/Tools/KumaScript
translation_of: MDN/Tools/KumaScript
original_slug: MDN/Tools/Introduction_to_KumaScript
---
{{MDNSidebar}}

## Vistazo general

En el verano de 2012, MDN cambió a una nueva plataforma wiki llamada [Kuma](https://wiki.mozilla.org/MDN/Kuma). Esta reemplaza el lenguaje de plantilla [DekiScript](http://developer.mindtouch.com/en/docs/DekiScript) con un nuevo sistema llamado [KumaScript](https://github.com/mozilla/kumascript). KumaScript se alimenta de JavaScript del lado del servidor, usando [Node.js](http://nodejs.org/). Este artículo provee informaciónde cómo usar KumaScript y cómo actualizar scripts migrados parcialmente desde MindTouch.

Para detalles y preguntas frecuentes sobre KumaScript, mira el [KumaScript Fireside Chat](https://vreplay.mozilla.com/replay/showRecordDetails.html?sortBy=date&viewCount=1&currentPage=1&groupBy=combo&roomFilter=&usernameFilter=&searchFilter=&usernameFullFilter=&myManager=-1&adminManager=0&webCast=0&command=&recId=1082&auxMessage=&auxMessage1=&lang=en&langChanged=&tenantFilter=&securityTab=) del equipo de desarrolladores MDN.

¿Qué es KumaScript?

- Una forma de reutilizar y localizar contenido que aparece repetidamente entre los documentos (por ejemplo, rótulos de compatibilidad, navegación de secciones, carteles de advertencia).
- Una manera de construir documentos sacados de otros documentos.
- Una manera de buscar e incluir contenido de otros sitios web y servicios (por ejemplo, Bugzilla).

### ¿Qué no es KumaScript?

- KumaScript no soporta scripts interactivos del tipo que pueden aceptar las incripciones por formulario.
- KumaScript no tiene acceso a bases de datos, archivos, ni a cualquier otra forma de guardar información persistentemente.
- KumaScript no soporta la personalización basada en el usuario que tiene la sesión abierta.
- KumaScript no tiene acceso a información de usuario, sólo al contenido y a los metadatos de una wiki que se esté visualizando.

## Aspectos básicos

KumaScript funciona permitiendo a _wiki de confianza_ escribir [plantillas JavaScript ensambladas](https://github.com/visionmedia/ejs). Estas plantillas pueden ser invocadas en el contenido del documento por cualquier editor _wiki_ mediante el uso de [macros](/es/docs/KumaTests/hello_test?raw=1).

Una [plantilla](/es/docs/Template:hello) se vé así:

```ejs
<% for (var i = 0; i < $0; i++) { %>
Hello #<%= i %>
<% } %>
```

Una [macro](/es/docs/KumaTests/hello_test?raw=1) se vé así:

`\{{ hello("3") }}`

El [resultado de una macro](/es/docs/KumaTests/hello_test) sale así:

```
Hello #0
Hello #1
Hello #2
```

### Sintaxis de una macro

Las plantillas KumaScript se invocan en el contenido del documento con macros, como esta:

```
\{{ templateName("arg0", "arg1", ..., "argN") }}
```

La sintaxis de una Macro se compone de estas reglas:

- Las Macros comienzan y terminan con los caracteres `\{\{` y `\}\}`.
- La primera parte de la macro es el nombre de la plantilla. Esta corresponde a una wiki en `/en-US/docs/Template:{name}`. Editar y crear estas páginas requiere un permiso especial que los administradores pueden otorgar a editores de confianza.
- Una plantilla puede aceptar parámetros, y esta lista de parámetroa comienza y termina con paréntesis.
- En una plantilla, los parámetros ingresados están disponibles dentro de la macro como las variables `$0`, `$1`, `$2`, y así sucesivamente.
- Todos los parámetros no numéricos deber ir entre comillas. Los números pueden quedar sin ellas.
- La lista completa de parámetros también está disponible en una plantilla como la variable `arguments`.

#### Usando JSON parámetro de macro

Hay una característica semi-experimental disponible para las macros. Puedes proveerlas de un objeto JSON como primero y único parámetro, así:

```
\{{ templateName({ "Alpha":"one", "Beta":["a","b","c"], "Foo":"http:\/\/mozilla.org\/" }) }}
```

Los datos de esta macro estarán disponibles en un código de plantilla como un objeto en el argumento `$0` (por ejemplo, `$0.Alpha`, `$0.Beta`, `$0.Foo`). Esto también te permite expresar estructuras de datos complejos en los parámetros de macro que son difíciles o imposibles de hacer con una simple lista de parámetros.

Nota que el estilo de este parámetro es muy complejo. Se debe adherir exactamente a la [sintaxis JSON](http://json.org/), que tiene algunas exigencias escurridizas que son fáciles de pasar por alto (por ejemplo, todas las barras (/) llevan escapes). Cuando haya dudas, [intenta ejecutar tu JSON con un validador](http://jsonlint.com/).

#### Cómo escribir "\\{\\{"

Como la secuencia de caracteres "`\{\{`" se usa para indicar el comienzo de una macro, puede ser un problema si justo quieres usar "`\{\{`" and "`\}\}`" como texto de una página. Probablemente dará un mensaje de error `DocumentParsingError`.

En este caso, puedes escapar la primer llave con una barra invertida, así: `\\{{`

### Sintaxis de la plantilla

Las plantillas KumaScript son procesadas por un [motor de plantillas JavaScript ensamblado](https://github.com/visionmedia/ejs) con estas simples reglas:

- La mayoría del texto es tratado como salida e incluido en el flujo de salida.
- Las expresiones y variables JavaScript pueden insertarse en el flujo de salida con estos bloques:

  - `<%= expr %>` — el valor de la expresión JavaScript es escapado por el HTML antes de incluirse en la salida (por ejemplo, caracteres como `<` y `>` se convierten en `&lt;` y `&gt;`).
  - `<%- expr %>` — el valor de una expresión JavaScript es incluído en la salida pero sin escape. (usa esto si quieres construir etiquetas HTML o usar los resultados de otra plantilla que puedan incluir etiquetas HTML.)
  - Es un error incluir punto y coma dentro de los bloques.

- Cualquier cosa dentro de un bloque `<% %>` se interpreta como JavaScript. Esto puede incluir bucles, condiciones, etc.
- No hay nada dentro de un bloque `<% %>` que pueda contribuir al flujo de salida. Pero puedes hacer la transición desde el modo JS al modo de salida usando `<% %>` — Por ejemplo:

  ```js
  <% for (var i = 0; i < $0; i++) { %>
  Hello #<%= i %>
  <% } %>
  ```

  Nota como el JS está contenido entre `<% ... %>`, y la salida va en el espacio entre `%> ... <%`. El bucle _for_ en JS puede comenzar en un bloque `<% %>` , luego el flujo de salida, y terminar en un segundo bloque JS `<% %>`.

- For more details on EJS syntax, [check out the upstream module documentation](https://github.com/visionmedia/ejs).

## Características avanzadas

Más allá de los aspectos básicos, el sistema KumaScript ofrece algunas características avanzadas.

### Variables de entorno

Cuando la wiki hace una llamada al servicio KumaScript, [pasa por una part del contexto del documento actual](https://github.com/mozilla/kuma/blob/master/apps/wiki/kumascript.py#L130) que KumaScript pone a disposición de las plantillas como variables:

- `env.path`
  - : La ruta del documento wiki actual
- `env.url`
  - : La URL completa del documento wiki actual
- `env.id`
  - : Un ID único corto para el documento wiki actual
- `env.files`
  - debajo
- `env.review_tags`
  - : Un arreglo con las etiquetas de revisión del artículo ("technical", "editorial", etc.)
- `env.locale`
  - : El sitio del documento wiki actual
- `env.title`
  - : El título del documento wiki actual
- `env.slug`
  - : Una URL amigable del documento wiki actual
- `env.tags`
  - : Una lista de nombers de etiquetas para el documento wiki actual
- `env.modified`
  - : El último timestamp modificado para el documento wiki actual
- `env.cache_control`
  - : `El encabezado Cache-Control` henviado en la solicitud para el documento wiki actual, útil para decidir si invalidar los caches

#### Objetos de archivos

Cada objeto de archivo tiene los siguientes campos:

- `title`
  - : El título del archivo adjunto
- `description`
  - : Una descripción textual de la revisión actual del archivo
- `filename`
  - : El nombre del archivo
- `size`
  - : El tamaños del archivo en bytes
- `author`
  - : El nombre de usuario de la persona que subió el archivo
- `mime`
  - : El tipo MIME del archivo
- `url`
  - : La URL en la que se puede encontrar el archivo

#### Trabajando con listas

Las variables `env.tags` y `env.review_tags` devuelven colecciones de etiqutas. Puedes trabajar con estas de varias maneras, por supuesto, pero aquí se dan un par de sugerencias.

##### Buscar si se colocó una etiqueta específica

Se puede buscar si una etiqueta específica existe en una página, así:

```js
if (env.tags.indexOf("tag") != −1) {
  // The page has the tag "tag"
}
```

##### Iterar (recorrer) todas las etiquetas de la página

Se pueden recorrer todas las etiquetas de la página, así:

```js
env.tag.forEach(function(tag) {
  // haz cualquier cosa que necesites, tal como:
  if (tag.indexOf("a") == 0) {
    // esta etiqueta empieza con "a" - woohoo!
  }
});
```

### APIs y Módulos

KumaScript ofrece algunas APIs de utilidad incorporadas, como también la capacidad para definir nuevas APIs en módulos editables como documentos wiki.

#### Métodos incorporados

Es probable que esta documentación mantenida manualmente quede desactualizada con respecto al código. Teniendo en cuanta eso, [siempre puedes verificar el último estado de las APIs incorporadas en la fuente de KumaScript](https://github.com/mozilla/kumascript/blob/master/lib/kumascript/api.js#L208). Pero hay una selección de métodos útiles expuestos a plantillas:

- `md5(string)`
  - : Devuelve un resumen de hexadecimal MD5 de determinada cadena.
- `template("name", ["arg0", "arg1", ..., "argN"])`
  - : Ejecuta y devuelve el resultado de las plantillas mencionadas con la lista de parámetros provistos.
  - : Utilizado en plantillas así: `<%- template("warning", ["foo", "bar", "baz"]) %>`.
  - : Esta es una función JavaScript. Así que, si uno de los parámetroses una variable arg como $2, no lo pongas entre comillas. Así: `<%- template("warning", [$1, $2, "baz"]) %>`. Si necesitas llamar otra plantilla desde el interior de un bloque e código, no uses `<%` ... `%>`. Ejemplo: `myvar = "<li>" + template("LXRSearch", ["ident", "i", $1]) + "</li>";`
- `require(name)`
  - : Carga otra plantilla como un módulo. Cualquier resultadu es ignorado. Devuelce cualquier cosa asignada a `module.exports` en la plantilla.
  - : Utilizado en plantillas así: `<% var my_module = require('MyModule'); %>`.
- `cacheFn(key, timeout, function_to_cache)`
  - : Usando la key y duración de entrada de caché proporcionadas, cachea los resultados de la función proporcionada. Prioriza el valor de `env.cache_control` para invalidar el cache en `no-cache`, que puede ser enviado por un usuario logueado que tipee shift-refresh.
- `request`
  - : Acceso al [`mikeal/request`](https://github.com/mikeal/request), una librería para hacer consultas HTTP. Usar este módulo en las plantillas KumaScriptno es muy amigable, así que quizá desees envolver uso en APIs de módulo que simplifiquen las cosas.

#### Módulos de API incorporados

Sólo hay una API incorporada por el momento, en el espacio de nombres `kuma`:

- `kuma.htmlEscape(string)`
  - Escapa los caracteres `&, <, >, "` a `&amp, &lt;, &gt;, &quot;`, respectivamente.
- `kuma.include(path)`

  - : Incluye contenido de la página en la ruta proporcionada. Cacheo pesado.

- `kuma.pageExists(path)`
  - : Indica si existe la página en la ruta proporcionada. Cacheo pesado.

#### Creando módulos

Usando el mátodo incorporado `require()`, puedes cargar una plantilla como módulo para compartir variables y métodos comunes entre plantillas. Un módulo puede definirse como una plantilla de la siguiente manera:

```js
<%
module.exports = {
    add: function (a, b) {
        return a + b;
    }
}
%>
```

Asumiendo que esta plantilla está guardada como `/en-US/docs/Template:MathLib`, puedes utilizarla en otra plantilla, así:

```js
<%
var math_lib = require("MathLib");
%>
El resultado de 2 + 2 = <%= math_lib.add(2, 2) %>
```

Y, el resultado de esta plantilla será:

```
el resultado de 2 + 2 = 4
```

#### Módulos cargados automáticamente

Hay un grupo de módulos editables como plantillas wiki que se cargan automáticamente y quedan disponibles para cada plantilla. Este grupo está definido en el archivo de configuración para el servicio KumaScript. Cualquier cambio a este requiere un bug IT para editar la configuración y el reinicio del servicio.

Para la mayor parte, estos intentos de proveer sustitutos para stand-ins for legacy DekiScript features to ease template migration. But, going forward, these can be used to share common variables and methods between templates:

- `mdn.*` - [Template:MDN:Common](/es/docs/Template:MDN:Common)
- `Culture.*` - [Template:DekiScript:Culture](/es/docs/Template:DekiScript:Culture)
- `Date.*` - [Template:DekiScript:Date](/es/docs/Template:DekiScript:Date)
- `Json.*` - [Template:DekiScript:Json](/es/docs/Template:DekiScript:Json)
- `List.*` - [Template:DekiScript:List](/es/docs/Template:DekiScript:List)
- `Map.*` - [Template:DekiScript:Map](/es/docs/Template:DekiScript:Map)
- `Meta.*` - [Template:DekiScript:Meta](/es/docs/Template:DekiScript:Meta)
- `Num.*` - [Template:DekiScript:Num](/es/docs/Template:DekiScript:Num)
- `Page.*` - [Template:DekiScript:Page](/es/docs/Template:DekiScript:Page)
- `String.*` - [Template:DekiScript:String](/es/docs/Template:DekiScript:String)
- `Uri.*` - [Template:DekiScript:Uri](/es/docs/Template:DekiScript:Uri)
- `Web.*` - [Template:DekiScript:Web](/es/docs/Template:DekiScript:Web)
- `Wiki.*` - [Template:DekiScript:Wiki](/es/docs/Template:DekiScript:Wiki)
- `Xml.*` - [Template:DekiScript:Xml](/es/docs/Template:DekiScript:Xml)

The best way to see the current state and offerings of these modules is to [take a look at their source directly](/es/docs/tag/dekiscript).

**Note:** You might notice that the DekiScript modules use a built-in method named `buildAPI()`, like so:

```js
<% module.exports = buildAPI({
    StartsWith: function (str, sub_str) {
        return (''+str).indexOf(sub_str) === 0;
    }
}); %>
```

The reason for this is because DekiScript is case-insensitive when it comes to references to API methods, whereas JavaScript is strict about uppercase and lowercase in references. So, `buildAPI()` is a hack to try to cover common case variations in DekiScript calls found in legacy templates.

With that in mind, please do not use `buildAPI()` in new modules.

## Tips and caveats

### Debugging

A useful tip when debugging. You can use the `log.debug()` method to output text to the scripting messages area at the top of the page that's running your template. Note that you need to be really sure to remove these when you're done debugging, as they're visible to all users! To use it, just do something like this:

```js
<%- log.debug("Some text goes here"); %>
```

You can, of course, create more complex output using script code if it's helpful.

### Limitations of content migration from MindTouch

When we make the move to Kuma, we will migrate content from the old MindTouch-based wiki to the new Kuma-based one. This script will do some basic work to attempt to convert scripts. But, there are many common code patterns that migration can't fix.

So, this means that we'll need human intervention to carry template scripts over the rest of the way to being functional.

To find templates in need of review and repair, [/en...eview/template](/es/docs/needs-review/template).

To find examples of templates that have already been repaired, [/en...s/tag/ks-fixed](/es/docs/tag/ks-fixed).

Check the [template usage stats bug](https://bugzilla.mozilla.org/show_bug.cgi?id=714804) file attachments to help prioritize templates to fix. If you know your way around `gzip` and `grep`, [this attachment](https://bugzilla.mozilla.org/attachment.cgi?id=591545) (a 1.5MB tab-delimited file listing template/document pairs) can help tell you what templates are used on which pages.

As you repair templates, please uncheck the "Template" review checkbox and add the tag "ks-fixed", which will keep the above lists accurate.

You can also find templates in need of repair by simply browsing through wiki content and spotting where content looks garbled with code or otherwise incorrect. Editing the page should show you the name of a macro that's in need of help. You may also see scripting errors on pages, which should offer editing links to the templates causing issues.

### Changing Locale Identifiers

The identifiers for various locales have changed from MindTouch to Kuma:

- `en` -> `en-US`
- `cn` -> `zh-CN`
- `zh_cn` -> `zh-CN`
- `zh_tw` -> `zh-TW`
- `pt` -> `pt-PT`

This list should not change in the future, assuming we've not missed any. These locale identifier changes become significant in legacy DekiWIki templates.

### URL pattern changes

The URL pattern for all wiki documents has changed:

- `/{locale}/{slug}` -> `/{locale}/docs/{slug}`

So, for example:

- `/en/JavaScript` -> `/en-US/docs/JavaScript`
- `/de/JavaScript` -> `/de/docs/JavaScript`
- `/ja/JavaScript` -> `/ja/docs/JavaScript`

To avoid breaking links, there is an attempt to automatically redirect requests to the legacy-style URLs to new-style URLs. But, efforts should be made to change links to the new-style URLs whenever possible.

### Differences from DekiScript

It's useful to note a few changes from templates in DekiScript, in case you encounter these in migrated content:

- No more `<span class="script">`
- No more `template.` nor `wiki.template` prefixing
- No more `template({name}[, arguments])` syntax
- Arguments must be quoted - e.g., `bug(123456)` becomes `bug("123456")` - unless you are calling the template from within another template, and the argument is one of the passed-in args like `$1` in this example: `template("LXRSearch", ["ident", "i", $1])`.

### Caching

KumaScript templates are heavily cached to improve performance. For the most part, this works great to serve up content that doesn't change very often. But, as a logged in user, you have two options to force a page to be regenerated, in case you notice issues with scripting:

- Hit Refresh in your browser. This causes KumaScript to invalidate its cache for the content on the current page by issuing a request with a `Cache-Control: max-age=0` header.
- Hit Shift-Refresh in your browser. This causes KumaScript to invalidate cache for the current page, as well as for any templates or content used by the current page by issuing a request with a `Cache-Control: no-cache` header.

## Cookbook

This section will list examples of common patterns for templates used on MDN, including samples of legacy DekiScript templates and their new KumaScript equivalents.

### Force templates used on a page to be reloaded

It bears repeating: To force templates used on a page to be reloaded after editing, hit Shift-Reload. Just using Reload by itself will cause the page contents to be regenerated, but using cached templates and included content. A Shift-Reload is necessary to invalidate caches beyond just the content of the page itself.

### Recovering from "Unknown Error"

Sometimes, you'll see a scripting message like this when you load a page:

```
Kumascript service failed unexpectedly: <class 'httplib.BadStatusLine'>
```

This is probably a temporary failure of the KumaScript service. If you Refresh the page, the error may disappear. If that doesn't work, try a Shift-Refresh. If, after a few tries, the error persists - [file an IT bug](https://bugzilla.mozilla.org/enter_bug.cgi?product=mozilla.org&format=itrequest) for Mozilla Developer Network to ask for an investigation.

### Broken wiki.languages() macros

On some pages, you'll see a scripting error like this:

```
Syntax error at line 436, column 461: Expected valid JSON object as the parameter of the preceding macro but...
```

If you edit the page, you'll probably see a macro like this at the bottom of the page:

```
\{{ wiki.languages({ "zh-tw": "zh_tw/Core_JavaScript_1.5_教學/JavaScript_概要", ... }) }}
```

To fix the problem, just delete the macro. Or, replace the curly braces on either side with HTML comments `<!-- -->` to preserve the information, like so:

```html
<!-- wiki.languages({ "zh-tw": "zh_tw/Core_JavaScript_1.5_教學/JavaScript_概要", ... }) -->
```

Because Kuma supports localization differently, these macros aren't actually needed any more. But, they've been left intact in case we need to revisit the relationships between localized pages. Unfortunately, it seems like migration has failed to convert some of them properly.

### Unconverted inline script blocks

Occasionally, you'll find some text like this at the bottom of a page, or even somewhere in the middle:

```js
ottoPreviousNext("JSGChapters");
wiki.languages({
  "fr": "fr/Guide_JavaScript_1.5/Expressions_rationnelles",
  "ja": "ja/Core_JavaScript_1.5_Guide/Regular_Expressions"
});
```

This is a script block that didn't get converted to a KumaScript macro during migration. It happens, unfortunately. If you switch to HTML source editing mode, you'll see this, a `<pre class="script">` element:

```html
<pre class="script" style="font-size: 16px;">
ottoPreviousNext(&quot;JSGChapters&quot;);
wiki.languages({
  &quot;fr&quot;: &quot;fr/Guide_JavaScript_1.5/Expressions_rationnelles&quot;,
 &nbsp;&quot;ja&quot;: &quot;ja/Core_JavaScript_1.5_Guide/Regular_Expressions&quot;
});
</pre>
```

This is an inline script - previously allowed by DekiScript, no longer supported by KumaScript.

For this particular example, common to the JavaScript Guide, you can fix it by removing the wiki.languages part (see [previous section](#Broken_wiki.languages_macros)) and change the ottoPreviousNext() into a macro like so:

```
\{{ ottoPreviousNext("JSGChapters") }}
```

If you see a block of code that's more complex than the above, you will need to create a new template, move the code there, and replace the code in its previous spot with a macro calling the new template.

### Finding the Current Page's Language

In KumaScript, the locale of the current document is exposed as an environment variable:

```js
var lang = env.locale;
```

In legacy DekiScript templates, coming up with the locale was a bit harder. You'll see chunks of code like this:

```js
/* accepts as input one required parameter: MathML element to create an xref to */
var u = uri.parts(Page.uri);
var lang = string.tolower(u.path[0]);
if (string.contains(lang, "project") || string.contains(lang, "Project")) {
  lang = string.substr(lang, 8);
}
/* fall back to page.language on a user page */
else if (string.StartsWith(lang, "user:")) {
  lang = page.language;
}
```

Please replace code like the above with the new KumaScript example. The `env.locale` variable should be reliable and defined for every document.

### Reading the contents of a page attachment

You can read the contents of an attached file by using the `mdn.getFileContent()` function, like this:

```js
<%
  var contents = mdn.getFileContent(fileUrl);
  ... do stuff with the contents ...
%>
```

or

```js
<%- mdn.getFileContent(fileObject) %>
```

In other words, you may specify either the URL of the file to read or as a file object. The file objects for a page can be accessed through the array `env.files`. So, for example, to embed the contents of the first file attached to the article, you can do this:

```js
<%- mdn.getFileContent(env.files[0]) %>
```

> **Nota:** You probably don't want to try to embed the contents of a non-text file this way, as the raw contents would be injected as text. This is meant to let you access the contents of text attachments.

If the file isn't found, an empty string is returned. There is currently no way to tell the difference between an empty file and a nonexistent one. But if you're putting empty files on the wiki, you're doing it wrong.

### Localizing template content

Templates cannot be translated like other wiki pages. KumaScript only looks for templates in the en-US locale (i.e., `/en-US/docs/Template:{name}`), and does not look for templates that have been translated to another locale (i.e., `/fr/docs/Template:{name}`).

So the main way to output content tailored to the current document locale is to pivot on the value of `env.locale`. There are many ways to do this, but a few patterns are common in the conversion of legacy DekiScript templates:

#### If/else blocks in KumaScript

The KumaScript equivalent of this can be achieved with simple if/else blocks, like so:

```js
<% if ("fr" == env.locale) { %>
<%- template("CSSRef") %> « <a title="Référence_CSS/Extensions_Mozilla" href="/fr/docs/Référence_CSS/Extensions_Mozilla">Référence CSS:Extensions Mozilla</a>
<% } else if ("ja" == env.locale) { %>
<%- template("CSSRef") %> « <a title="CSS_Reference/Mozilla_Extensions" href="/ja/docs/CSS_Reference/Mozilla_Extensions">CSS リファレンス:Mozilla 拡張仕様</a>
<% } else if ("pl" == env.locale) { %>
<%- template("CSSRef") %> « <a title="Dokumentacja_CSS/Rozszerzenia_Mozilli" href="/pl/docs/Dokumentacja_CSS/Rozszerzenia_Mozilli">Dokumentacja CSS:Rozszerzenia Mozilli</a>
<% } else if ("de" == env.locale) { %>
<%- template("CSSRef") %> « <a title="CSS_Referenz/Mozilla_CSS_Erweiterungen" href="/de/docs/CSS_Referenz/Mozilla_CSS_Erweiterungen">CSS Referenz: Mozilla Erweiterungen</a>
<% } else { %>
<%- template("CSSRef") %> « <a title="CSS_Reference/Mozilla_Extensions" href="/en-US/docs/CSS_Reference/Mozilla_Extensions">CSS Reference:Mozilla Extensions</a>
<% } %>
```

##### Legacy DekiScript

A similar way this was done in DekiScript was using `<span>`'s with `lang="{locale}"` attributes, like so:

```html
<p><span lang="*" class="lang lang-*"><span class="script">CSSRef()</span> « <a title="en/CSS_Reference/Mozilla_Extensions" href="/en/CSS_Reference/Mozilla_Extensions">CSS Reference:Mozilla Extensions</a></span>
<span lang="en" class="lang lang-en"><span class="script">CSSRef()</span> « <a title="en/CSS_Reference/Mozilla_Extensions" href="/en/CSS_Reference/Mozilla_Extensions">CSS Reference:Mozilla Extensions</a>
<span lang="fr" class="lang lang-fr"><span class="script">CSSRef()</span> « <a title="fr/Référence_CSS/Extensions_Mozilla" href="/fr/Référence_CSS/Extensions_Mozilla">Référence CSS:Extensions Mozilla</a></span>
<span lang="ja" class="lang lang-ja"><span class="script">CSSRef()</span> « <a title="ja/CSS_Reference/Mozilla_Extensions" href="/ja/CSS_Reference/Mozilla_Extensions">CSS リファレンス:Mozilla 拡張仕様</a></span>
<span lang="pl" class="lang lang-pl"> <span class="script">CSSRef()</span> « <a title="pl/Dokumentacja_CSS/Rozszerzenia_Mozilli" href="/pl/Dokumentacja_CSS/Rozszerzenia_Mozilli">Dokumentacja CSS:Rozszerzenia Mozilli</a></span>
<span lang="de" class="lang lang-de"><span class="script">CSSRef()</span> « <a title="de/CSS_Referenz/Mozilla_CSS_Erweiterungen" href="/de/CSS_Referenz/Mozilla_CSS_Erweiterungen">CSS Referenz: Mozilla Erweiterungen</a></span></span></p>
```

This is no longer supported. If you encounter templates built using the legacy DekiScript approach, revise them to use the new KumaScript pattern.

Depending on what text editor you use, you may be able to copy and paste from the browser-based editor and attack this pattern with a series of search/replace regexes to get you most of the way there.

#### String variables and switch

Rather than switch between full chunks of markup, you can define a set of strings, switch them based on locale, and then use them to fill in placeholders in a single chunk of markup:

```js
<%
var s_title = 'Firefox for Developers';
switch (env.locale) {
    case 'de':
        s_title = "Firefox für Entwickler";
        break;
    case 'fr':
        s_title = "Firefox pour les développeurs";
        break;
    case 'es':
        s_title = "Firefox para desarrolladores";
        break;
};
%>
<span class="title"><%= s_title %></span>
```

You'll see examples of this in legacy DekiScript templates. For the most part, this pattern should work as-is, but you may need to adjust the expected values of locales (e.g., `en`, `cn`, `pt` become `en-US`, `zh-CN`, `pt-PT` respectively).

#### Use `mdn.localString()`

A recent addition to the `Template:MDN:Common` module is `mdn.localString()`, used like this:

```js
<%
var s_title = mdn.localString({
  "en-US": "Firefox for Developers",
  "de": "Firefox für Entwickler",
  "es": "Firefox para desarrolladores"
});
%>
<span class="title"><%= s_title %></span>
```

This is more concise than the switch statement, and may be a better choice where a single string is concerned. However, if many strings need to be translated (e.g., as in [CSSRef](/es/docs/Template:CSSRef)), a switch statement might help keep all the strings grouped by locale and more easily translated that way.

When the object does not have the appropriate locale, the value of "en-US" is used as the initial value.

#### Before and after examples

Carriage returns added here and there for clarity.

```html
<p><span class="lang lang-en" lang="en">DOM Level 0. Not part of any standard. </span>
<span class="lang lang-es" lang="es">DOM Nivel 0. No es parte de ninguna norma. </span>
<span class="lang lang-*" lang="*">DOM Level 0. Not part of any standard. </span>
<span class="lang lang-fr" lang="fr">DOM Level 0. Ne fait partie d'aucune spécification. </span>
<span class="lang lang-ja" lang="ja">DOM Level 0。どの標準にも属しません。 </span>
<span class="lang lang-pl" lang="pl">DOM Level 0. Nie jest częścią żadnego standardu. </span>
<span class="lang lang-zh-cn" lang="zh-cn">DOM Level 0 不属于任何标准.</span></p>
 
// After: Kumascript version
<% if ("fr" == env.locale) { %>
<p>DOM Level 0. Ne fait partie d'aucune spécification.</p>
<% } else if ("ja" == env.locale) { %>
<p>DOM Level 0。どの標準にも属しません。 </p>
<% } else if ("pl" == env.locale) { %>
<p>DOM Level 0. Nie jest częścią żadnego standardu.</p>
<% } else if ("es" == env.locale) { %>
<p>DOM Nivel 0. No es parte de ninguna norma.</p>
<% } else if ("zh-CN" == env.locale) { %>
<p>DOM Level 0 不属于任何标准.</p>
<% } else { %>
<p>DOM Level 0. Not part of any standard.</p>
<% } %>
```

```js
// From ReleaseChannelInfo() template
// Before:
web.html("<p>Firefox " + $0 + ", based on Gecko " + $1 + ", will ship in " + $2 + ". This article provides information about the changes in this release that will affect developers. Nightly builds of what will become Firefox " + $0 + " are " + web.link(url, "currently available") + " on the " + string.ToUpperFirst($3) + " channel.</p>");
```

```js
// After:
<p>Firefox <%= $0 %>, based on Gecko <%= $1 %>, will ship in <%= $2 %>. This
 article provides information about the changes in this release that will
 affect developers. Nightly builds of what will become Firefox <%= $0 %>
 are <%- web.link(url, "currently available")%>  on the
 <%= string.ToUpperFirst($3) %> channel.</p>
```

```js
// Before: old Dekiscript snippet
if ($1 && string.length($1)) {
  optionsText = optionsText + "<li>" + LXRSearch("ident", "i", $1) + "</li>";
}
```

```js
// After: new Kumascript. Quote parameters to template() unless it is an arg variable (like $1).
if ($1 && string.length($1)) {
  optionsText = optionsText + "<li>" + template("LXRSearch", ["ident", "i", $1]) + "</li>";
}

// Note that template() within <% ... %> outputs nothing directly. If you want to call another
// template and display its output, use <%= %> or <%- %> like this:
<%- template("LXRSearch", ["ident", "i", $1]) %>
```

## See also

- [Getting started with Kuma](/es/docs/Project:Getting_started_with_Kuma)
- [KumaScript reference](/es/docs/Project:KumaScript_reference)
- [Kuma wiki](https://wiki.mozilla.org/MDN/Kuma)
