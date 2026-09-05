---
title: "`<link>` elemento de enlace a recurso externo HTML"
short-title: <link>
slug: Web/HTML/Reference/Elements/link
l10n:
  sourceCommit: fc7c0c6df803d5ce26e7b2a72725a7d021ed0694
---

El elemento **`<link>`** de [HTML](/es/docs/Web/HTML) especifica las relaciones entre el documento actual y un recurso externo.
Este elemento se usa más comúnmente para enlazar a {{Glossary("CSS", "hojas de estilo")}}, pero también se usa para establecer íconos del sitio (tanto íconos estilo "favicon" como íconos para la pantalla de inicio y apps en dispositivos móviles), entre otras cosas.

{{InteractiveExample("HTML Demo: &lt;link&gt;", "tabbed-shorter")}}

```html interactive-example
<link href="/shared-assets/misc/link-element-example.css" rel="stylesheet" />

<p>This text will be red as defined in the external stylesheet.</p>
<p style="color: blue">
  The <code>style</code> attribute can override it, though.
</p>
```

Para enlazar una hoja de estilos externa, incluye un elemento `<link>` dentro de tu {{HTMLElement("head")}} de esta forma:

```html
<link href="main.css" rel="stylesheet" />
```

Este ejemplo indica la ruta de la hoja de estilos mediante un atributo `href` y un atributo [`rel`](/es/docs/Web/HTML/Reference/Attributes/rel) con valor `stylesheet`. `rel` significa "relationship" (relación), y es una de las características clave del elemento `<link>`: el valor indica cómo se relaciona el elemento enlazado con el documento que lo contiene.

Existen otros tipos comunes que encontrarás con frecuencia. Por ejemplo, un enlace al favicon del sitio:

```html
<link rel="icon" href="favicon.ico" />
```

Hay otros valores de `rel` para íconos, usados principalmente para indicar tipos de íconos especiales en distintas plataformas móviles, por ejemplo:

```html
<link
  rel="apple-touch-icon"
  sizes="114x114"
  href="apple-icon-114.png"
  type="image/png" />
```

El atributo `sizes` indica el tamaño del ícono, mientras que `type` contiene el tipo MIME del recurso enlazado.
Estos datos ofrecen pistas útiles para que el navegador elija el ícono más apropiado disponible.

También puedes indicar un tipo de medio o una consulta dentro de un atributo `media`; este recurso solo se cargará si la condición del medio es verdadera. Por ejemplo:

```html
<link href="print.css" rel="stylesheet" media="print" />
<link href="mobile.css" rel="stylesheet" media="screen and (width <= 600px)" />
```

También se han añadido al elemento `<link>` algunas funciones interesantes de rendimiento y seguridad. Toma este ejemplo:

```html
<link
  rel="preload"
  href="myFont.woff2"
  as="font"
  type="font/woff2"
  crossorigin="anonymous" />
```

Un valor `preload` en `rel` indica que el navegador debe precargar este recurso (consulta [`rel="preload"`](/es/docs/Web/HTML/Reference/Attributes/rel/preload) para más detalles), mientras que el atributo `as` indica la clase específica de contenido que se está obteniendo.
El atributo `crossorigin` indica si el recurso debe obtenerse con una solicitud {{Glossary("CORS")}}.

Otras notas de uso:

- Un elemento `<link>` puede aparecer tanto en {{HTMLElement("head")}} como en {{HTMLElement("body")}}, dependiendo de si tiene un [tipo de enlace](https://html.spec.whatwg.org/multipage/links.html#body-ok) que sea **body-ok**.
  Por ejemplo, el tipo de enlace `stylesheet` es body-ok, por lo que `<link rel="stylesheet">` está permitido dentro de body.
  Sin embargo, esto no es una buena práctica; tiene más sentido separar tus elementos `<link>` del contenido del cuerpo, colocándolos en `<head>`.
- Cuando usas `<link>` para establecer un favicon en un sitio, y tu sitio usa una Política de Seguridad de Contenido (CSP) para reforzar su seguridad, esa política también se aplica al favicon.
  Si tienes problemas con la carga del favicon, verifica que la [directiva `img-src`](/es/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/img-src) del encabezado {{HTTPHeader("Content-Security-Policy")}} no esté bloqueando el acceso a él.
- Las especificaciones HTML y XHTML definen manejadores de eventos para el elemento `<link>`, pero no está claro cómo se usarían.
- En XHTML 1.0, los {{glossary("void element", "elementos vacíos")}} como `<link>` requieren una barra de cierre: `<link />`.
- WebTV admite el uso del valor `next` en `rel` para precargar la siguiente página en una serie de documentos.

## Atributos

Este elemento incluye los [atributos globales](/es/docs/Web/HTML/Reference/Global_attributes).

- `as`
  - : Este atributo es obligatorio cuando se ha establecido [`rel="preload"`](/es/docs/Web/HTML/Reference/Attributes/rel/preload) en el elemento `<link>`, opcional cuando se ha establecido [`rel="modulepreload"`](/es/docs/Web/HTML/Reference/Attributes/rel/modulepreload), y en cualquier otro caso no debería usarse.
    Especifica el tipo de contenido que carga el `<link>`, lo cual es necesario para la coincidencia de solicitudes, la aplicación correcta de la [política de seguridad de contenido](/es/docs/Web/HTTP/Guides/CSP) y el establecimiento correcto de la cabecera de solicitud {{HTTPHeader("Accept")}}.

    Además, `rel="preload"` usa este valor como señal para la priorización de solicitudes.
    La siguiente tabla enumera los valores válidos para este atributo y los elementos o recursos a los que se aplican.

    <table class="standard-table">
      <thead>
        <tr>
          <th scope="col">Valor de <code>as</code></th>
          <th scope="col">Valor de <code>rel</code></th>
          <th scope="col">Se aplica a</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>audioworklet</td>
          <td>modulepreload</td>
          <td>Módulos <a href="/es/docs/Web/API/AudioWorklet">AudioWorklet</a></td>
        </tr>
        <tr>
          <td>fetch</td>
          <td>preload</td>
          <td>
            <p>fetch, XHR</p>
            <div class="notecard note">
              <p>
                <strong>Nota:</strong> Este valor también requiere que
                <code>&#x3C;link></code> contenga el atributo crossorigin; consulta <a href="/es/docs/Web/HTML/Reference/Attributes/rel/preload">peticiones fetch habilitadas para CORS</a>.
              </p>
            </div>
          </td>
        </tr>
        <tr>
          <td>font</td>
          <td>preload</td>
          <td>
            <p>CSS @font-face</p>
            <div class="notecard note">
              <p>
                <strong>Nota:</strong> Este valor también requiere que
                <code>&#x3C;link></code> contenga el atributo crossorigin; consulta <a href="/es/docs/Web/HTML/Reference/Attributes/rel/preload">peticiones fetch habilitadas para CORS</a>.
              </p>
            </div>
          </td>
        </tr>
        <tr>
          <td>image</td>
          <td>preload</td>
          <td>
            Elementos <code>&#x3C;img></code> y <code>&#x3C;picture></code> con
            atributos srcset o imageset, elementos SVG <code>&#x3C;image></code>,
            reglas CSS <code>*-image</code>
          </td>
        </tr>
        <tr>
          <td>json</td>
          <td>modulepreload</td>
          <td>
            Archivo JSON suplementario
          </td>
        </tr>
        <tr>
          <td>paintworklet</td>
          <td>modulepreload</td>
          <td>Módulos <a href="/es/docs/Web/API/PaintWorkletGlobalScope">PaintWorklet</a></td>
        </tr>
        <tr>
          <td>script</td>
          <td>preload o modulepreload</td>
          <td>
            Elementos <code>&#x3C;script></code>, Worker <code>importScripts</code>, y destinos <code>modulepreload</code>.
          </td>
        </tr>
        <tr>
          <td>serviceworker</td>
          <td>modulepreload</td>
          <td>Módulos <a href="/es/docs/Web/API/ServiceWorker">ServiceWorker</a></td>
        </tr>
        <tr>
          <td>sharedworker</td>
          <td>modulepreload</td>
          <td><a href="/es/docs/Web/API/SharedWorker">SharedWorker</a></td>
        </tr>
        <tr>
          <td>style</td>
          <td>preload o modulepreload</td>
          <td>
            Elementos <code>&#x3C;link rel=stylesheet></code>, <code>@import</code>
            de CSS y destinos <code>modulepreload</code>.
          </td>
        </tr>
        <tr>
          <td>text</td>
          <td>modulepreload</td>
          <td>Archivo de texto plano suplementario</td>
        </tr>
        <tr>
          <td>track</td>
          <td>preload</td>
          <td>Elementos <code>&#x3C;track></code> (<a href="/es/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format">WebVTT</a>, tipo MIME <code>text/vtt</code>)</td>
        </tr>
        <tr>
          <td>worker</td>
          <td>modulepreload</td>
          <td>Módulos <a href="/es/docs/Web/API/Worker">Worker</a></td>
        </tr>
      </tbody>
    </table>

- `blocking`
  - : Este atributo indica explícitamente que ciertas operaciones deben bloquearse hasta que se cumplan condiciones específicas. Solo debe usarse cuando el atributo `rel` contiene las palabras clave `expect` o `stylesheet`. Con [`rel="expect"`](/es/docs/Web/HTML/Reference/Attributes/rel#expect), indica que las operaciones deben bloquearse hasta que se haya analizado un nodo DOM específico. Con [`rel="stylesheet"`](/es/docs/Web/HTML/Reference/Attributes/rel#stylesheet), indica que las operaciones deben bloquearse hasta que una hoja de estilos externa y sus subrecursos críticos hayan sido obtenidos y aplicados al documento. Las operaciones que deben bloquearse deben ser una lista de tokens de bloqueo separados por espacios, enumerados a continuación. Actualmente solo hay un token:
    - `render`: Se bloquea el renderizado del contenido en pantalla.

    > [!NOTE]
    > Solo los elementos `link` en el `<head>` del documento pueden bloquear el renderizado. Por defecto, un elemento `link` con `rel="stylesheet"` en el `<head>` bloquea el renderizado cuando el navegador lo encuentra durante el análisis. Si ese elemento `link` se agrega dinámicamente mediante script, debes además establecer `blocking = "render"` para que bloquee el renderizado.

- [`crossorigin`](/es/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Este atributo [enumerado](/es/docs/Glossary/Enumerated) indica si debe usarse {{Glossary("CORS")}} al obtener el recurso.
    Las [imágenes con CORS habilitado](/es/docs/Web/HTML/How_to/CORS_enabled_image) pueden reutilizarse en el elemento {{HTMLElement("canvas")}} sin ser _contaminadas_.
    Los valores permitidos son:
    - `anonymous`
      - : Se realiza una solicitud de origen cruzado (es decir, con una cabecera HTTP {{HTTPHeader("Origin")}}), pero no se envía ninguna credencial (es decir, ninguna cookie, certificado X.509 ni autenticación básica HTTP).
        Si el servidor no otorga credenciales al sitio de origen (al no establecer la cabecera HTTP {{HTTPHeader("Access-Control-Allow-Origin")}}), el recurso quedará contaminado y su uso restringido.
    - `use-credentials`
      - : Se realiza una solicitud de origen cruzado (es decir, con una cabecera HTTP `Origin`) junto con el envío de una credencial (es decir, se envía una cookie, un certificado y/o se realiza autenticación básica HTTP).
        Si el servidor no otorga credenciales al sitio de origen (mediante la cabecera HTTP {{HTTPHeader("Access-Control-Allow-Credentials")}}), el recurso quedará _contaminado_ y su uso restringido.

    Si el atributo no está presente, el recurso se obtiene sin una solicitud {{Glossary("CORS")}} (es decir, sin enviar la cabecera HTTP `Origin`), impidiendo su uso no contaminado. Si el valor no es válido, se maneja como si se hubiera usado la palabra clave enumerada **anonymous**.
    Consulta [atributos de configuración CORS](/es/docs/Web/HTML/Reference/Attributes/crossorigin) para más información.

- `disabled`
  - : Solo para `rel="stylesheet"`, el atributo booleano `disabled` indica si la hoja de estilos descrita debe cargarse y aplicarse al documento.
    Si `disabled` se especifica en el HTML al cargarse, la hoja de estilos no se cargará durante la carga de la página.
    En su lugar, se cargará bajo demanda, cuando el atributo `disabled` se cambie a `false` o se elimine.

    Establecer la propiedad `disabled` en el DOM hace que la hoja de estilos se elimine de la lista {{domxref("Document.styleSheets")}} del documento.

- [`fetchpriority`](/es/docs/Web/HTML/Reference/Attributes/fetchpriority)
  - : Ofrece una pista sobre la prioridad relativa a utilizar al obtener un recurso de un tipo en particular. Valores permitidos:
    - `high`
      - : Obtiene el recurso con una prioridad alta en relación con otros recursos del mismo tipo.
    - `low`
      - : Obtiene el recurso con una prioridad baja en relación con otros recursos del mismo tipo.
    - `auto`
      - : No establece ninguna preferencia sobre la prioridad de obtención.
        Es el valor predeterminado.
        Se usa si no se establece ningún valor o si el valor establecido no es válido.
- `href`
  - : Este atributo especifica la {{glossary("URL")}} del recurso enlazado. Una URL puede ser absoluta o relativa.
- `hreflang`
  - : Este atributo indica el idioma del recurso enlazado.
    Es puramente informativo.
    Los valores deben ser {{glossary("BCP 47 language tag", "etiquetas de idioma BCP 47")}} válidos.
    Usa este atributo solo si el atributo [`href`](/es/docs/Web/HTML/Reference/Elements/a#href) está presente.
- `imagesizes`
  - : Solo para `rel="preload"` y `as="image"`, el atributo `imagesizes` tiene una sintaxis y semántica similares al atributo [`sizes`](/es/docs/Web/HTML/Reference/Elements/img#sizes), que indica precargar el recurso adecuado usado por un elemento `img` con los valores correspondientes de sus atributos `srcset` y `sizes`.
- `imagesrcset`
  - : Solo para `rel="preload"` y `as="image"`, el atributo `imagesrcset` tiene una sintaxis y semántica similares al atributo [`srcset`](/es/docs/Web/HTML/Reference/Elements/img#srcset), que indica precargar el recurso adecuado usado por un elemento `img` con los valores correspondientes de sus atributos `srcset` y `sizes`.
- [`integrity`](/es/docs/Web/HTML/Reference/Attributes/integrity)
  - : Este atributo contiene uno o más {{glossary("hash function", "hashes")}} del recurso. Se usa para garantizar que el contenido del recurso sea el que el desarrollador espera, y que no haya sido reemplazado por una copia maliciosa en un [ataque a la cadena de suministro](/es/docs/Web/Security/Attacks/Supply_chain_attacks). El atributo solo debe especificarse cuando el atributo `rel` está establecido en `stylesheet`, `preload` o `modulepreload`.
    Consulta [Integridad de subrecursos](/es/docs/Web/Security/Defenses/Subresource_Integrity).
- `media`
  - : Este atributo especifica el medio al que se aplica el recurso enlazado. Su valor debe ser un tipo de medio o una [media query](/es/docs/Web/CSS/Guides/Media_queries).
    Este atributo resulta útil principalmente al enlazar hojas de estilo externas: permite que el agente de usuario elija la más adecuada para el dispositivo en el que se ejecuta.

- `referrerpolicy`
  - : Una cadena que indica qué referrer usar al obtener el recurso. Para explicaciones y ejemplos detallados de cada política, consulta la documentación de la cabecera {{HTTPHeader("Referrer-Policy")}}.
    - `no-referrer` significa que no se enviará la cabecera {{HTTPHeader("Referer")}}.
    - `no-referrer-when-downgrade` significa que no se enviará la cabecera {{HTTPHeader("Referer")}} al navegar hacia un origen sin TLS (HTTPS).
      Este es el comportamiento predeterminado del agente de usuario, si no se especifica ninguna otra política.
    - `origin` significa que el referrer será el origen de la página, que es aproximadamente el esquema, el host y el puerto.
    - `origin-when-cross-origin` significa que al navegar a otros orígenes se limitará al esquema, el host y el puerto, mientras que la navegación dentro del mismo origen incluirá la ruta del referrer.
    - `same-origin` significa que el referrer (origen, ruta y cadena de consulta) se envía en solicitudes del mismo origen, pero no se envía ningún referrer en solicitudes de origen cruzado.
    - `strict-origin` significa que solo se envía el origen cuando el nivel de seguridad del protocolo se mantiene igual (HTTPS→HTTPS). No se envía ningún referrer a destinos menos seguros (HTTPS→HTTP). Esto es importante para páginas HTTPS porque evita filtrar información del referrer a orígenes inseguros.
    - `strict-origin-when-cross-origin` significa que se envía el referrer completo en solicitudes del mismo origen. En solicitudes de origen cruzado, solo se envía el origen cuando el protocolo se mantiene igual (HTTPS→HTTPS), y no se envía ningún referrer al degradarse a HTTP. Este es el valor predeterminado, que equilibra la funcionalidad con la privacidad y la seguridad en sitios HTTPS.
    - `unsafe-url` significa que el referrer incluirá el origen y la ruta (pero no el fragmento, la contraseña ni el nombre de usuario).
      Este caso es inseguro porque puede filtrar orígenes y rutas de recursos protegidos por TLS hacia orígenes inseguros.

- [`rel`](/es/docs/Web/HTML/Reference/Attributes/rel)
  - : Este atributo nombra una relación del documento enlazado con el documento actual. El atributo debe ser una lista separada por espacios de [valores de tipo de enlace](/es/docs/Web/HTML/Reference/Attributes/rel).
- `sizes`
  - : Este atributo define los tamaños de los íconos para medios visuales contenidos en el recurso.
    Solo debe estar presente si [`rel`](#rel) contiene un valor `icon` o un tipo no estándar como el `apple-touch-icon` de Apple.
    Puede tener los siguientes valores:
    - `any`, que significa que el ícono puede escalarse a cualquier tamaño porque está en un formato vectorial, como `image/svg+xml`.
    - una lista de tamaños separados por espacios en blanco, cada uno con el formato `<ancho en píxeles>x<alto en píxeles>` o `<ancho en píxeles>X<alto en píxeles>`. Cada uno de estos tamaños debe estar contenido en el recurso.

    > [!NOTE]
    > La mayoría de los formatos de ícono solo pueden almacenar un único ícono; por lo tanto, en la mayoría de los casos, el atributo [`sizes`](#sizes) contiene una sola entrada.
    > El formato ICO de Microsoft y el formato ICNS de Apple pueden almacenar varios tamaños de ícono en un solo archivo. ICO tiene mejor compatibilidad entre navegadores, así que deberías usar este formato si te preocupa la compatibilidad multinavegador.

- `title`
  - : El atributo `title` tiene una semántica especial en el elemento `<link>`.
    Cuando se usa en `<link rel="stylesheet">`, define una [hoja de estilos predeterminada o alternativa](/es/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet).
- `type`
  - : Este atributo se usa para definir el tipo del contenido enlazado.
    El valor del atributo debe ser un tipo MIME, como **text/html**, **text/css**, etc.
    El uso común de este atributo es definir el tipo de la hoja de estilos referenciada (como **text/css**), pero dado que CSS es el único lenguaje de hojas de estilo usado en la web, no solo es posible omitir el atributo `type`, sino que ahora es la práctica recomendada.
    También se usa en los tipos de enlace `rel="preload"`, para asegurarse de que el navegador solo descargue tipos de archivo compatibles.

### Atributos no estándar

- `target` {{Deprecated_Inline}}
  - : Define el nombre del marco o ventana que tiene la relación de enlace definida, o que mostrará el renderizado de cualquier recurso enlazado.

### Atributos en desuso

- `charset` {{deprecated_inline}}
  - : Este atributo define la codificación de caracteres del recurso enlazado.
    El valor es una lista de conjuntos de caracteres delimitada por espacios y/o comas, según se define en {{rfc(2045)}}.
    El valor predeterminado es `iso-8859-1`.

    > [!NOTE]
    > Para producir el mismo efecto que este atributo obsoleto, usa la cabecera HTTP {{HTTPHeader("Content-Type")}} en el recurso enlazado.

- `rev` {{deprecated_inline}}
  - : El valor de este atributo muestra la relación del documento actual con el documento enlazado, tal como se define en el atributo [`href`](#href).
    Por lo tanto, el atributo define la relación inversa en comparación con el valor del atributo `rel`.
    Los [valores de tipo de enlace](/es/docs/Web/HTML/Reference/Attributes/rel) para este atributo son similares a los valores posibles de [`rel`](#rel).

    > [!NOTE]
    > En lugar de `rev`, debes usar el atributo [`rel`](#rel) con el [valor de tipo de enlace](/es/docs/Web/HTML/Reference/Attributes/rel) opuesto.
    > Por ejemplo, para establecer el enlace inverso de `made`, especifica `author`. Además, este atributo no significa "revision" y no debe usarse con un número de versión, aunque muchos sitios lo usan incorrectamente de esta forma.

## Ejemplos

### Incluir una hoja de estilos

Para incluir una hoja de estilos en una página, usa la siguiente sintaxis:

```html
<link href="style.css" rel="stylesheet" />
```

### Proporcionar hojas de estilo alternativas

También puedes especificar [hojas de estilo alternativas](/es/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet).

El usuario puede elegir qué hoja de estilos usar seleccionándola en el menú **Ver > Estilo de página**.
Esto le da a los usuarios una forma de ver varias versiones de una misma página.

```html
<link href="default.css" rel="stylesheet" title="Default Style" />
<link href="fancy.css" rel="alternate stylesheet" title="Fancy" />
<link href="basic.css" rel="alternate stylesheet" title="Basic" />
```

### Proporcionar íconos para diferentes contextos de uso

Puedes incluir enlaces a varios íconos en la misma página, y el navegador elegirá cuál funciona mejor para su contexto particular usando los valores de `rel` y `sizes` como pistas.

```html
<!-- iPad Pro con pantalla Retina de alta resolución: -->
<link
  rel="apple-touch-icon"
  sizes="167x167"
  href="/apple-touch-icon-167x167.png" />
<!-- iPhone con resolución 3x: -->
<link
  rel="apple-touch-icon"
  sizes="180x180"
  href="/apple-touch-icon-180x180.png" />
<!-- iPad sin Retina, iPad mini, etc.: -->
<link
  rel="apple-touch-icon"
  sizes="152x152"
  href="/apple-touch-icon-152x152.png" />
<!-- iPhone con resolución 2x y otros dispositivos: -->
<link rel="apple-touch-icon" href="/apple-touch-icon-120x120.png" />
<!-- favicon básico -->
<link rel="icon" href="/favicon.ico" />
```

Para más información sobre qué `sizes` elegir para los íconos de Apple, consulta la [documentación de Apple sobre configuración de aplicaciones web](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4) y las [pautas de interfaz humana de Apple](https://developer.apple.com/design/human-interface-guidelines/app-icons#App-icon-sizes) referenciadas. Por lo general, basta con proporcionar una imagen grande, como 192x192, y dejar que el navegador la escale según se necesite, pero es posible que quieras ofrecer imágenes con distintos niveles de detalle para diferentes tamaños, como recomiendan las pautas de diseño de Apple. Proporcionar íconos más pequeños para resoluciones bajas también ahorra ancho de banda.

Puede que ni siquiera sea necesario incluir elementos `<link>`. Por ejemplo, los navegadores solicitan automáticamente `/favicon.ico` desde la raíz de un sitio, y Apple también solicita automáticamente `/apple-touch-icon-[tamaño].png`, `/apple-touch-icon.png`, etc. Sin embargo, proporcionar enlaces explícitos te protege frente a cambios en estas convenciones.

### Carga condicional de recursos con media queries

Puedes indicar un tipo de medio o una consulta dentro de un atributo `media`;
este recurso solo se cargará si la condición del medio es verdadera. Por ejemplo:

```html
<link href="print.css" rel="stylesheet" media="print" />
<link href="mobile.css" rel="stylesheet" media="all" />
<link href="desktop.css" rel="stylesheet" media="screen and (width >= 600px)" />
<link
  href="highres.css"
  rel="stylesheet"
  media="screen and (resolution >= 300dpi)" />
```

### Eventos de carga de hojas de estilo

Puedes determinar cuándo se ha cargado una hoja de estilos observando que se dispare un evento `load` en ella; de forma similar, puedes detectar si ocurrió un error al procesar una hoja de estilos observando el evento `error`:

```html
<link rel="stylesheet" href="mystylesheet.css" id="my-stylesheet" />
```

```js
const stylesheet = document.getElementById("my-stylesheet");

stylesheet.onload = () => {
  // Hacer algo interesante; la hoja de estilos ha sido cargada
};

stylesheet.onerror = () => {
  console.log("¡Ocurrió un error al cargar la hoja de estilos!");
};
```

> [!NOTE]
> El evento `load` se dispara una vez que la hoja de estilos y todo su contenido importado se ha cargado y procesado, e inmediatamente antes de que los estilos comiencen a aplicarse al contenido.

### Ejemplos de precarga

Puedes encontrar varios ejemplos de `<link rel="preload">` en [Precarga de contenido con `rel="preload"`](/es/docs/Web/HTML/Reference/Attributes/rel/preload).

### Bloquear el renderizado hasta obtener un recurso

Puedes incluir el token `render` dentro de un atributo `blocking`;
el renderizado de la página se bloqueará hasta que el recurso y sus subrecursos críticos se obtengan y apliquen al documento. Por ejemplo:

```html
<link blocking="render" rel="stylesheet" href="example.css" crossorigin />
```

## Resumen técnico

<table class="properties">
  <tbody>
    <tr>
      <th>
        <a href="/es/docs/Web/HTML/Guides/Content_categories">Categorías de contenido</a>
      </th>
      <td>
        Contenido en metadatos.
        Si <code><a href="/es/docs/Web/HTML/Reference/Global_attributes/itemprop">itemprop</a></code> está presente:
        <a href="/es/docs/Web/HTML/Guides/Content_categories#flujo_de_contenido">Flujo de contenido</a> y
        <a href="/es/docs/Web/HTML/Guides/Content_categories#contenido_de_redacción">Contenido de redacción</a>.
      </td>
    </tr>
    <tr>
      <th>Contenido permitido</th>
      <td>Ninguno; es un {{Glossary("void element", "elemento vacío")}}.</td>
    </tr>
    <tr>
      <th>Omisión de etiqueta</th>
      <td>Debe tener etiqueta de apertura y no debe tener etiqueta de cierre.</td>
    </tr>
    <tr>
      <th>Elementos padre permitidos</th>
      <td>
        Cualquier elemento que acepte elementos de metadatos.
        Si <a href="/es/docs/Web/HTML/Reference/Global_attributes/itemprop">itemprop</a> está presente: cualquier elemento que acepte
        <a href="/es/docs/Web/HTML/Guides/Content_categories#contenido_de_redacción">Contenido de redacción</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Rol ARIA implícito</th>
      <td><a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/link_role"><code>link</code></a> con atributo <code>href</code></td>
    </tr>
    <tr>
      <th scope="row">Roles ARIA permitidos</th>
      <td>No se permite ningún <code>role</code></td>
    </tr>
    <tr>
      <th>Interfaz DOM</th>
      <td>{{DOMxRef("HTMLLinkElement")}}</td>
    </tr>
  </tbody>
</table>

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- Cabecera HTTP {{HTTPHeader("Link")}}
- Cabecera HTTP {{HTTPHeader("Referrer-Policy")}}
