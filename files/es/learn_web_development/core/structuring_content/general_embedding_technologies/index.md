---
title: De object a iframe — tecnologías de incrustación en general
short-title: Tecnologías de incrustación
slug: Learn_web_development/Core/Structuring_content/General_embedding_technologies
l10n:
  sourceCommit: f08b3d623c43e0256072013372ba393b5bd1a5a0
---

Los desarrolladores suelen pensar en incrustar medios como imágenes, video y audio en las páginas web. En este artículo damos un paso al costado, para ver algunos elementos que te permiten incrustar una amplia variedad de tipos de contenido en tus páginas web: los elementos {{htmlelement("iframe")}}, {{htmlelement("embed")}} y {{htmlelement("object")}}. Los `<iframe>` sirven para incrustar otras páginas web, mientras que los otros dos te permiten incrustar recursos externos como archivos PDF.

<table>
  <tbody>
    <tr>
      <th scope="row">Requisitos previos:</th>
      <td>
        <a
          href="/es/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Software básico instalado</a
        >, conocimientos básicos de
        <a
          href="/es/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files"
          >trabajo con archivos</a
        >, familiaridad con los <a href="/es/docs/Learn_web_development/Core/Structuring_content"
          >fundamentos de HTML</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Aprender a incrustar elementos en páginas web usando
        {{htmlelement("object")}}, {{htmlelement("embed")}} y
        {{htmlelement("iframe")}}, como documentos PDF y otras páginas web.
      </td>
    </tr>
  </tbody>
</table>

## Una breve historia de la incrustación

Hace mucho tiempo en la Web, era popular usar **marcos** (frames) para crear sitios web — pequeñas partes de un sitio web almacenadas en páginas HTML individuales. Estos se incrustaban en un documento maestro llamado **conjunto de marcos** (frameset), que te permitía especificar el área de la pantalla que ocupaba cada marco, de forma similar a como se dimensionan las columnas y filas de una tabla. Se consideraban el colmo de la modernidad a mediados y finales de los 90, y había evidencia de que dividir una página web en fragmentos más pequeños de esta manera era mejor para la velocidad de descarga — algo especialmente notable dado lo lentas que eran las conexiones de red en ese entonces. Sin embargo, tenían muchos problemas, que superaban con creces cualquier aspecto positivo a medida que las velocidades de red se hicieron más rápidas, por lo que ya no se ven en uso.

Un poco más tarde (finales de los 90, principios de los 2000), las tecnologías de complementos se volvieron muy populares, como los [Applets de Java](/es/docs/Glossary/Java) y [Flash](/es/docs/Glossary/Adobe_Flash) — estas permitían a los desarrolladores web incrustar contenido enriquecido en las páginas web, como videos y animaciones, que simplemente no estaban disponibles solo con HTML. La incrustación de estas tecnologías se lograba mediante elementos como {{htmlelement("object")}}, y el menos utilizado {{htmlelement("embed")}}, y fueron muy útiles en su momento. Desde entonces han caído en desuso debido a muchos problemas, incluyendo la accesibilidad, la seguridad, el tamaño de archivo y más. Hoy en día, los navegadores principales han dejado de admitir complementos como Flash.

Finalmente, apareció el elemento {{htmlelement("iframe")}} (junto con otras formas de incrustar contenido, como {{htmlelement("canvas")}}, {{htmlelement("video")}}, etc.). Esto proporciona una forma de incrustar un documento web completo dentro de otro, como si fuera un {{htmlelement("img")}} u otro elemento similar, y se usa habitualmente hoy en día.

Con la lección de historia fuera del camino, sigamos adelante y veamos cómo usar algunas de estas tecnologías.

## Jugando con usos clásicos de incrustación

En este artículo vamos a pasar directamente a un ejercicio, para darte de inmediato una idea de para qué sirven las tecnologías de incrustación. El mundo en línea está muy familiarizado con [YouTube](https://www.youtube.com/), pero mucha gente no conoce algunas de las funciones para compartir que tiene disponibles.

1. Primero, abre el [MDN Playground](/es/play).
2. Ahora veremos cómo YouTube nos permite incrustar un video en cualquier página que queramos usando un {{htmlelement("iframe")}}.
   1. Ve a YouTube y busca un video que te guste.
   2. Debajo del video, encontrarás un botón _Compartir_ — selecciónalo para mostrar las opciones para compartir.
   3. Selecciona el botón _Insertar_ y se te dará algo de código `<iframe>` — cópialo.
   4. Pégalo en el panel de _HTML_ del Playground, y observa cuál es el resultado en la salida.
3. Como puntos extra, también podrías intentar incrustar un [mapa de Google](https://www.google.com/maps/) en el Playground:
   1. Ve a Google Maps y busca un mapa que te guste.
   2. Haz clic en el "menú hamburguesa" (tres líneas horizontales) en la parte superior izquierda de la interfaz.
   3. Selecciona la opción _Compartir o incrustar mapa_.
   4. Selecciona la opción _Incrustar un mapa_, que te dará algo de código `<iframe>` — cópialo.
   5. Pégalo en el panel de _HTML_ del Playground, y observa cuál es el resultado en la salida.

Si cometes un error, siempre puedes restablecerlo usando el botón _Reset_ del Playground.

## Los iframes en detalle

Bueno, eso fue fácil y divertido, ¿verdad? Los elementos {{htmlelement("iframe")}} están diseñados para permitirte incrustar otros documentos web dentro del documento actual. Esto es excelente para incorporar en tu sitio web contenido de terceros sobre el que quizás no tengas control directo y que no quieras tener que implementar tú mismo — como videos de proveedores de video en línea, sistemas de comentarios como [Disqus](https://disqus.com/), mapas de proveedores de mapas en línea, banners publicitarios, etc. Incluso los ejemplos editables en vivo que has estado usando a lo largo de este curso están implementados usando `<iframe>`s.

Antes de sumergirte en el uso de elementos `<iframe>`, hay algunas preocupaciones de seguridad de las que debes estar al tanto. Supongamos que quisieras incluir el glosario de MDN en una de tus páginas web usando el elemento {{htmlelement("iframe")}}, podrías intentar algo como el siguiente ejemplo de código. Si agregaras el código de abajo en una de tus páginas, podrías sorprenderte al ver un mensaje de error en lugar de la página del glosario:

```html
<iframe
  src="https://developer.mozilla.org/en-US/docs/Glossary"
  width="100%"
  height="500"
  allowfullscreen
  sandbox>
</iframe>
```

```css
iframe {
  border: none;
}
```

Si observas la consola de tu navegador, verás un mensaje de error como el siguiente:

```plain
Refused to display 'https://developer.mozilla.org/' in a frame because it set 'X-Frame-Options' to 'deny'.
```

La sección de [Seguridad](#preocupaciones_de_seguridad) más abajo entra en más detalle sobre por qué ves este error, pero primero, veamos qué está haciendo nuestro código.

El ejemplo incluye lo mínimo indispensable necesario para usar un `<iframe>`:

- [`border: none`](/es/docs/Web/CSS/Reference/Properties/border)
  - : Si se usa, el `<iframe>` se muestra sin un borde a su alrededor. De lo contrario, por defecto, los navegadores muestran el `<iframe>` con un borde a su alrededor (lo cual generalmente no es deseable).
- [`allowfullscreen`](/es/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen)
  - : Si se establece, el `<iframe>` puede colocarse en modo de pantalla completa usando la [API de Fullscreen](/es/docs/Web/API/Fullscreen_API) (algo fuera del alcance de este artículo).
- [`src`](/es/docs/Web/HTML/Reference/Elements/iframe#src)
  - : Este atributo, al igual que con {{htmlelement("video")}}/{{htmlelement("img")}}, contiene una ruta que apunta a la URL del documento que se va a incrustar.
- [`width`](/es/docs/Web/HTML/Reference/Elements/iframe#width) y [`height`](/es/docs/Web/HTML/Reference/Elements/iframe#height)
  - : Estos atributos especifican el ancho y el alto que quieres que tenga el iframe.
- [`sandbox`](/es/docs/Web/HTML/Reference/Elements/iframe#sandbox)
  - : Este atributo, que funciona en navegadores ligeramente más modernos que el resto de las características de `<iframe>` (por ejemplo, IE 10 y superiores), solicita una configuración de seguridad más estricta; hablaremos más sobre esto en la siguiente sección.

> [!NOTE]
> Para mejorar la velocidad, es una buena idea establecer el atributo `src` del iframe con JavaScript después de que el contenido principal haya terminado de cargarse. Esto hace que tu página sea utilizable antes y disminuye tu tiempo oficial de carga de página (una métrica importante de {{glossary("SEO")}}).

### Preocupaciones de seguridad

Arriba mencionamos las preocupaciones de seguridad — profundicemos un poco más en esto ahora. No esperamos que entiendas todo este contenido perfectamente la primera vez; solo queremos que tomes conciencia de esta preocupación, y darte una referencia a la que volver a medida que ganes más experiencia y empieces a considerar el uso de `<iframe>`s en tus experimentos y trabajos. Además, no hay necesidad de asustarse y dejar de usar `<iframe>`s — solo debes tener cuidado. Sigue leyendo…

Los creadores de navegadores y los desarrolladores web han aprendido de la manera difícil que los iframes son un objetivo común (término oficial: **vector de ataque**) para la gente mala de la Web (a menudo llamados **hackers**, o más precisamente, **crackers**) que buscan modificar maliciosamente tu página web, o engañar a las personas para que hagan algo que no quieren hacer, como revelar información sensible como nombres de usuario y contraseñas. Debido a esto, los ingenieros de especificaciones y los desarrolladores de navegadores han desarrollado varios mecanismos de seguridad para hacer que los `<iframe>`s sean más seguros, y también hay buenas prácticas a considerar — cubriremos algunas de ellas a continuación.

> [!NOTE]
> El [clickjacking](/es/docs/Web/Security/Attacks/Clickjacking) es un tipo de ataque común mediante iframes en el que los hackers incrustan un iframe invisible en tu documento (o incrustan tu documento en su propio sitio web malicioso) y lo usan para capturar las interacciones de los usuarios. Esta es una forma común de engañar a los usuarios o de robar datos sensibles.

Pero primero, un ejemplo rápido — intenta cargar en tu navegador el ejemplo anterior que te mostramos arriba — puedes [encontrarlo en vivo en GitHub](https://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html) ([mira el código fuente](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html) también). En lugar de la página que esperabas, probablemente verás algún tipo de mensaje del estilo "No puedo abrir esta página", y si miras la _Consola_ en las [herramientas de desarrollo del navegador](/es/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools), verás un mensaje que te dice por qué. En Firefox, se te dirá algo como _The loading of "https\://developer.mozilla.org/en-US/docs/Glossary" in a frame is denied by "X-Frame-Options" directive set to "DENY"_ (la carga de "https\://developer.mozilla.org/en-US/docs/Glossary" en un marco es denegada por la directiva "X-Frame-Options" configurada como "DENY"). Esto se debe a que los desarrolladores que construyeron MDN incluyeron una configuración en el servidor que sirve las páginas del sitio para no permitir que se incrusten dentro de `<iframe>`s (mira [Configura las directivas CSP](#configura_las_directivas_csp), más abajo). Esto tiene sentido — no tiene mucho sentido incrustar una página completa de MDN en otras páginas, a menos que quieras hacer algo como incrustarlas en tu sitio y hacerlas pasar por tuyas, o intentar robar datos mediante [clickjacking](/es/docs/Web/Security/Attacks/Clickjacking), que son ambas cosas realmente malas de hacer. Además, si todo el mundo empezara a hacer esto, todo el ancho de banda adicional empezaría a costarle mucho dinero a Mozilla.

#### Solo incrusta cuando sea necesario

A veces tiene sentido incrustar contenido de terceros — como videos de YouTube y mapas — pero puedes ahorrarte muchos dolores de cabeza si solo incrustas contenido de terceros cuando sea completamente necesario. Una buena regla para la seguridad web es: _"Nunca puedes ser demasiado cauteloso. Si tú lo hiciste, revísalo de todos modos. Si alguien más lo hizo, asume que es peligroso hasta que se demuestre lo contrario."_

Además de la seguridad, también debes ser consciente de los problemas de propiedad intelectual. La mayoría del contenido tiene derechos de autor, tanto fuera de línea como en línea, incluso contenido que quizás no esperarías (por ejemplo, la mayoría de las imágenes en [Wikimedia Commons](https://commons.wikimedia.org/wiki/Main_Page)). Nunca muestres contenido en tu página web a menos que te pertenezca o que sus dueños te hayan dado un permiso escrito e inequívoco. Las penalizaciones por infracción de derechos de autor son severas. De nuevo, nunca puedes ser demasiado cauteloso.

Si el contenido tiene licencia, debes obedecer los términos de esa licencia. Por ejemplo, el contenido de MDN está [licenciado bajo CC-BY-SA](/es/docs/MDN/Writing_guidelines/Attrib_copyright_license#documentation). Eso significa que debes [darnos crédito de forma adecuada](https://wiki.creativecommons.org/wiki/Best_practices_for_attribution) cuando cites nuestro contenido, incluso si haces cambios sustanciales.

#### Usa HTTPS

{{Glossary("HTTPS")}} es la versión encriptada de {{Glossary("HTTP")}}. Deberías servir tus sitios web usando HTTPS siempre que sea posible:

1. HTTPS reduce la posibilidad de que el contenido remoto haya sido manipulado en tránsito.
2. HTTPS evita que el contenido incrustado acceda al contenido de tu documento padre, y viceversa.

Habilitar HTTPS en tu sitio requiere instalar un certificado de seguridad especial. Muchos proveedores de hosting ofrecen alojamiento con HTTPS habilitado sin que necesites hacer ninguna configuración por tu cuenta para poner en marcha un certificado. Pero si _sí_ necesitas configurar el soporte de HTTPS para tu sitio por tu cuenta, [Let's Encrypt](https://letsencrypt.org/) proporciona herramientas e instrucciones que puedes usar para crear e instalar automáticamente el certificado necesario — con soporte incorporado para los servidores web más utilizados, incluyendo el servidor web Apache, Nginx y otros. Las herramientas de Let's Encrypt están diseñadas para hacer el proceso lo más sencillo posible, así que realmente no hay una buena razón para evitar usarlas, u otros medios disponibles, para habilitar HTTPS en tu sitio.

> [!NOTE]
> Las [páginas de GitHub](/es/docs/Learn_web_development/Howto/Tools_and_setup/Using_GitHub_pages) permiten que el contenido se sirva mediante HTTPS por defecto.
> Si estás usando un proveedor de hosting diferente, deberías comprobar qué soporte ofrece para servir contenido con HTTPS.

#### Usa siempre el atributo `sandbox`

Quieres darles a los atacantes el menor poder posible para hacer cosas malas en tu sitio web, por lo tanto, deberías darle al contenido incrustado _solo los permisos necesarios para hacer su trabajo._ Por supuesto, esto también se aplica a tu propio contenido. Un contenedor para código donde este se puede usar de manera apropiada — o para pruebas — pero que no puede causar ningún daño al resto de la base de código (ya sea accidental o malicioso) se llama [sandbox](<https://en.wikipedia.org/wiki/Sandbox_(computer_security)>).

El contenido que no está en un sandbox puede ejecutar JavaScript, enviar formularios, activar ventanas emergentes, etc. Por defecto, deberías imponer todas las restricciones disponibles usando el atributo `sandbox` sin parámetros, como se muestra en nuestro ejemplo anterior.

Si es absolutamente necesario, puedes volver a agregar permisos uno por uno (dentro del valor del atributo `sandbox=""`) — mira la entrada de referencia de [`sandbox`](/es/docs/Web/HTML/Reference/Elements/iframe#sandbox) para ver todas las opciones disponibles. Un aspecto importante a tener en cuenta es que _nunca_ debes agregar tanto `allow-scripts` como `allow-same-origin` a tu atributo `sandbox` — en ese caso, el contenido incrustado podría eludir la [política del mismo origen](/es/docs/Glossary/Same-origin_policy) que impide que los sitios ejecuten scripts, y usar JavaScript para desactivar por completo el sandboxing.

> [!NOTE]
> El sandboxing no ofrece ninguna protección si los atacantes pueden engañar a las personas para que visiten contenido malicioso directamente (fuera de un `iframe`). Si existe alguna posibilidad de que cierto contenido sea malicioso (por ejemplo, contenido generado por el usuario), sírvelo desde un {{glossary("domain", "dominio")}} diferente al de tu sitio principal.

#### Configura las directivas CSP

{{Glossary("CSP")}} son las siglas de **[content security policy](/es/docs/Web/HTTP/Guides/CSP)** (política de seguridad de contenido) y proporciona [un conjunto de encabezados HTTP](/es/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) (metadatos que se envían junto con tus páginas web cuando se sirven desde un servidor web) diseñados para mejorar la seguridad de tu documento HTML. Cuando se trata de proteger `<iframe>`s, puedes _[configurar tu servidor para que envíe un encabezado `X-Frame-Options` apropiado](/es/docs/Web/HTTP/Reference/Headers/X-Frame-Options)_. Esto puede evitar que otros sitios web incrusten tu contenido en sus páginas web (lo cual habilitaría el [clickjacking](/es/docs/Web/Security/Attacks/Clickjacking) y toda una serie de otros ataques), que es exactamente lo que han hecho los desarrolladores de MDN, como vimos anteriormente.

> [!NOTE]
> Puedes leer la publicación de Frederik Braun [On the X-Frame-Options Security Header](https://blog.mozilla.org/security/2013/12/12/on-the-x-frame-options-security-header/) para obtener más información de contexto sobre este tema. Obviamente, está algo fuera del alcance de una explicación completa en este artículo.

## Los elementos \<embed> y \<object>

Los elementos {{htmlelement("embed")}} y {{htmlelement("object")}} cumplen una función diferente a la de {{htmlelement("iframe")}} — estos elementos son herramientas de incrustación de propósito general para incrustar contenido externo, como PDFs.

Sin embargo, es poco probable que uses mucho estos elementos. Si necesitas mostrar PDFs, generalmente es mejor enlazarlos, en lugar de incrustarlos en la página.

Históricamente, estos elementos también se han usado para incrustar contenido manejado por {{Glossary("Plugin", "complementos")}} del navegador, como {{Glossary("Adobe Flash")}}, pero esta tecnología ahora es obsoleta y no es compatible con los navegadores modernos.

Si te encuentras necesitando incrustar contenido de un complemento, este es el tipo de información que necesitarás, como mínimo:

<table class="standard-table no-markdown">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">{{htmlelement("embed")}}</th>
      <th scope="col">{{htmlelement("object")}}</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{glossary("URL")}} del contenido incrustado</td>
      <td><a href="/es/docs/Web/HTML/Reference/Elements/embed#src"><code>src</code></a></td>
      <td><a href="/es/docs/Web/HTML/Reference/Elements/object#data"><code>data</code></a></td>
    </tr>
    <tr>
      <td>
        {{glossary("MIME type", "Tipo de medio")}} <em>exacto</em>
        del contenido incrustado
      </td>
      <td><a href="/es/docs/Web/HTML/Reference/Elements/embed#type"><code>type</code></a></td>
      <td><a href="/es/docs/Web/HTML/Reference/Elements/object#type"><code>type</code></a></td>
    </tr>
    <tr>
      <td>
        Alto y ancho (en píxeles CSS) del cuadro controlado por el complemento
      </td>
      <td>
         <a href="/es/docs/Web/HTML/Reference/Elements/embed#height"><code>height</code></a><br /><a href="/es/docs/Web/HTML/Reference/Elements/embed#width"><code>width</code></a>
      </td>
      <td>
         <a href="/es/docs/Web/HTML/Reference/Elements/object#height"><code>height</code></a><br /><a href="/es/docs/Web/HTML/Reference/Elements/object#width"><code>width</code></a>
      </td>
    </tr>
    <tr>
      <td>Contenido HTML independiente como reserva para un recurso no disponible</td>
      <td>No compatible (<code>&#x3C;noembed></code> es obsoleto)</td>
      <td>
        Contenido dentro de las etiquetas de apertura y cierre de
        <code>&#x3C;object></code>
      </td>
    </tr>
  </tbody>
</table>

Veamos un ejemplo de `<object>` que incrusta un PDF en una página (mira el [ejemplo en vivo](https://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/object-pdf.html) y el [código fuente](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/other-embedding-technologies/object-pdf.html)):

```html
<object data="my-pdf.pdf" type="application/pdf" width="800" height="1200">
  <p>
    You don't have a PDF plugin, but you can
    <a href="my-pdf.pdf">download the PDF file. </a>
  </p>
</object>
```

Los PDF fueron un paso necesario entre el papel y lo digital, pero presentan muchos [desafíos de accesibilidad](https://webaim.org/techniques/acrobat/acrobat) y pueden ser difíciles de leer en pantallas pequeñas. Aun así, tienden a ser populares en algunos círculos, pero es mucho mejor enlazarlos para que puedan descargarse o leerse en una página separada, en lugar de incrustarlos en una página web.

## Resumen

El tema de incrustar otro contenido en documentos web puede volverse rápidamente muy complejo, así que en este artículo hemos intentado introducirlo de una manera simple y familiar que te resulte de inmediato relevante, sin dejar de insinuar algunas de las características más avanzadas de las tecnologías involucradas. Para empezar, es poco probable que uses la incrustación para mucho más que incluir contenido de terceros como mapas y videos en tus páginas. Sin embargo, a medida que ganes más experiencia, es probable que empieces a encontrarle más usos.

Hay muchas otras tecnologías que implican incrustar contenido externo además de las que discutimos aquí. Vimos algunas en artículos anteriores, como {{htmlelement("video")}}, {{htmlelement("audio")}} y {{htmlelement("img")}}, pero hay otras por descubrir, como {{htmlelement("canvas")}} para gráficos 2D y 3D generados con JavaScript, y {{SVGElement("svg")}} para incrustar gráficos vectoriales.
