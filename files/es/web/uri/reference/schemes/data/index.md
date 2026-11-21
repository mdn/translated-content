---
title: "data: URLs"
short-title: "data:"
slug: Web/URI/Reference/Schemes/data
l10n:
  sourceCommit: c8b64fbd9beeee79caa5e3f0e8a47f02033e7c0d
---

Las **URL de datos** (data URLs), es decir, las URL con el esquema `data:` como prefijo, permiten a quienes crean contenido incrustar archivos pequeños directamente en los documentos. Anteriormente se conocían como "URI de datos" (data URIs), hasta que el WHATWG retiró ese nombre.

> [!NOTE]
> Los navegadores modernos tratan las URL de datos como orígenes opacos únicos, en lugar de heredar el origen del objeto de configuración responsable de la navegación.

## Sintaxis

```url
data:[<media-type>][;base64],<data>
```

- `data:`
  - : El esquema de la URL.
- `<media-type>` {{optional_inline}}
  - : El [tipo MIME](/es/docs/Web/HTTP/Guides/MIME_types) que indica el tipo de datos, como `image/jpeg` para un archivo de imagen JPEG. Si se omite, el valor predeterminado es `text/plain;charset=US-ASCII`. Puedes consultar [un análisis completo de la estructura de los tipos MIME](/es/docs/Web/HTTP/Guides/MIME_types) y [una tabla de tipos MIME comunes en la web](/es/docs/Web/HTTP/Guides/MIME_types/Common_types).
- `;base64` {{optional_inline}}
  - : Indica que los datos deben decodificarse desde el formato base64; consulta [la codificación de datos en formato base64](#codificación_de_datos_en_formato_base64).
- `<data>`
  - : Los datos en sí. Si los datos contienen [caracteres definidos como reservados en la RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986#section-2.2), o incluyen espacios, saltos de línea u otros caracteres no imprimibles, esos caracteres deben escribirse con {{Glossary("Percent-encoding", "codificación porcentual")}}. Si los datos son texto, puedes incrustarlo (usando las entidades o las secuencias de escape adecuadas según el tipo del documento que lo contiene). En caso contrario, puedes especificar `base64` para incrustar datos binarios codificados en base64.

Algunos ejemplos:

- `data:,Hello%2C%20World%21`
  - : Los datos text/plain `Hello, World!`. Fíjate en cómo la coma se escribe como `%2C` y el espacio como `%20` con {{Glossary("Percent-encoding", "codificación porcentual")}}.
- `data:text/plain,Hello%2C%20%57%6F%72%6C%64%21`
  - : Los datos `text/plain` `Hello, World!`, en los que los caracteres de `World`, igual que la coma y el espacio, están escritos con codificación porcentual. Es posible aplicar esta codificación a cualquier carácter, aunque no sea necesario. Ten en cuenta que {{jsxref("decodeURIComponent()")}} puede usarse para decodificar todos los caracteres codificados.
- `data:text/plain;base64,SGVsbG8sIFdvcmxkIQ==`
  - : Versión codificada en base64 de lo anterior.
- `data:text/html,%3Ch1%3EHello%2C%20World%21%3C%2Fh1%3E`
  - : Un documento HTML con `<h1>Hello, World!</h1>`.
- `data:text/html,%3Cscript%3Ealert%28%27hi%27%29%3B%3C%2Fscript%3E`
  - : Un documento HTML con `<script>alert('hi');</script>` que ejecuta una alerta de JavaScript. Ten en cuenta que la etiqueta de cierre de script es obligatoria.

## Codificación de datos en formato base64

Base64 es un grupo de esquemas de codificación de binario a texto que representan datos binarios en formato de cadena {{Glossary("ASCII")}} al traducirlos a una representación en base 64. Como solo usa caracteres permitidos por la sintaxis de las URL ("seguros para URL"), es posible codificar datos binarios de forma segura en las URL de datos. Base64 usa los caracteres `+` y `/`, que pueden tener significados especiales en las URL. Como las URL de datos no tienen segmentos de ruta ni parámetros de consulta, esta codificación es segura en este contexto.

### Codificación en JavaScript

Las API web tienen métodos nativos para codificar o decodificar en base64: [Base64](/es/docs/Glossary/Base64).

### Codificación en un sistema Unix

En sistemas Linux y macOS, es posible codificar un archivo o una cadena en base64 usando el comando `base64` desde la línea de comandos (o, como alternativa, mediante la utilidad `uuencode` con el argumento `-m`).

```bash
echo -n hello|base64
# salida en la consola: aGVsbG8=

echo -n hello>a.txt
base64 a.txt
# salida en la consola: aGVsbG8=

base64 a.txt>b.txt
# salida en el archivo b.txt: aGVsbG8=
```

### Codificación en Microsoft Windows

En Windows, se puede usar [Convert.ToBase64String](https://learn.microsoft.com/en-us/dotnet/api/system.convert.tobase64string?view=net-5.0) de PowerShell para hacer la codificación Base64:

```plain
[convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes("hello"))
# salida en la consola: aGVsbG8=
```

Como alternativa, una shell de GNU/Linux (como [WSL](https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux)) ofrece la utilidad `base64`:

```bash
bash$ echo -n hello | base64
# salida en la consola: aGVsbG8=
```

## Problemas comunes

Esta sección describe los problemas que suelen aparecer al crear y usar URL `data`.

```plain
data:text/html,lots of text…<p><span class%3D"bottom">bottom</span>?arg=val</p>
```

Esto representa un recurso HTML cuyo contenido es:

```html
lots of text…
<p><span class="bottom">bottom</span>?arg=val</p>
```

- Sintaxis
  - : El formato de las URL `data` es muy sencillo, pero es fácil olvidar incluir una coma antes del segmento "data" o codificar incorrectamente los datos en formato base64.
- Formato en HTML
  - : Una URL `data` proporciona un archivo dentro de otro, que puede llegar a ser muy ancho en relación con el ancho del documento que lo contiene. Al ser una URL, `data` debería poder formatearse con espacios en blanco (avance de línea, tabulación o espacios), pero surgen problemas prácticos [al usar codificación base64](https://bugzil.la/73026#c12).
- Limitaciones de longitud
  - : Los navegadores no están obligados a admitir una longitud máxima específica para los datos.
    Chromium y Firefox limitan las URL `data` a 512 MB, y Safari (WebKit), a 2048 MB.
    Ten en cuenta que Firefox 97 aumentó el límite de 256 KB a 32 MB, y [Firefox 136 lo incrementó a 512 MB](/es/docs/Mozilla/Firefox/Releases/136).
- Falta de manejo de errores
  - : Los parámetros no válidos en el tipo de medio, o los errores tipográficos al especificar `'base64'`, se ignoran sin que se informe de ningún error.
- Sin compatibilidad con cadenas de consulta, etc.
  - : La parte de datos de una URL de datos es opaca, así que, si se intenta usar una cadena de consulta (parámetros específicos de la página, con la sintaxis `<url>?parameter-data`) con una URL de datos, esa cadena simplemente quedará incluida en los datos que representa la URL.
- Problemas de seguridad
  - : Se han asociado varios problemas de seguridad (por ejemplo, phishing) con las URL de datos y con la navegación a ellas en el nivel superior del navegador. Para mitigar estos problemas, se bloquea la navegación de nivel superior a las URL `data:` en todos los navegadores modernos. Consulta [esta entrada del blog del equipo de seguridad de Mozilla](https://blog.mozilla.org/security/2017/11/27/blocking-top-level-navigations-data-urls-firefox-59/) para más detalles.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{Glossary("Base64")}}
- {{Glossary("Percent-encoding", "Codificación porcentual")}}
- {{domxref("WorkerGlobalScope.atob()", "atob()")}}
- {{domxref("WorkerGlobalScope.btoa()", "btoa()")}}
- CSS {{CSSXref("url_value", "&lt;url&gt;")}}
- {{Glossary("URI")}}
