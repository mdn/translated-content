---
title: Desde object hasta iframe - otras tecnologías de incrustación
slug: Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Video_and_audio_content", "Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web", "Learn/HTML/Multimedia_and_embedding")}}

Ahora ya deberías estar acostumbrado a integrar cosas en tus páginas web, incluyendo imágenes, video y audio. En este punto nos gustaría que des algo así como un paso al costado, prestando atención a elementos que te permiten integrar una amplia variedad de tipos de contenido en tus páginas web: los elementos {{htmlelement("iframe")}}, {{htmlelement("embed")}} y {{htmlelement("object")}}. Los `<iframe>`s son para incrustar otras páginas web, y los otros dos te permiten incrustar PDFs, SVG e incluso Flash — una tecnología que está en su camino de despedida, pero la cual seguirás viendo semi-regularmente.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Conocimientos básicos de informática,
        <a
          href="/es/docs/Learn/Getting_started_with_the_web/Instalacion_de_software_basico"
          >software básico instalado</a
        >, conocimientos básicos de
        <a
          href="/es/docs/Learn/Getting_started_with_the_web/Manejando_los_archivos"
          >manejo de archivos</a
        >, familiaridad con los fundamentos de HTML (visto en
        <a href="/es/docs/Learn/HTML/Introduccion_a_HTML/iniciar"
          >Iniciando en HTML</a
        >) y los artículos previos en este modulo.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        To learn how to embed items into web pages using
        {{htmlelement("object")}}, {{htmlelement("embed")}}, and
        {{htmlelement("iframe")}}, like Flash movies and other webpages.
      </td>
    </tr>
  </tbody>
</table>

## Enlace a la sección: Una breve historia de incrustación

Hace mucho tiempo en la Web, era popular usar **marcos (frames)** para crear sitios web, pequeñas partes de un sitio web almacenadas en páginas HTML individuales. Estos estaban incrustados en un documento maestro llamado **conjunto de marcos (frameset)**, que le permitía especificar el área en la pantalla que ocupaba cada cuadro, como el tamaño de las columnas y las filas de una tabla. Estos fueron considerados el colmo del frescor a mediados y finales de los 90, y había evidencia de que tener una página web dividida en trozos más pequeños como este era mejor para velocidades de descarga, especialmente notable con conexiones de red tan lentas en ese momento. Sin embargo, tuvieron muchos problemas, que superaron con creces cualquier aspecto positivo ya que las velocidades de red se hicieron más rápidas, por lo que ya no se ve que se usen.

Poco tiempo después (finales de los 90, principios de 2000), las tecnologías de complementos se volvieron muy populares, como los Applets de Java y Flash . Esto permitió a los desarrolladores web incorporar contenido enriquecido en páginas web como videos y animaciones, que simplemente no estaban disponibles solo a través de HTML. La incrustación de estas tecnologías se logró a través de elementos como `<object>` y el menos utilizado `<embed>` , que fueron muy útiles en ese momento. Desde entonces, pasaron de moda debido a muchos problemas, incluidos el acceso, la seguridad, el tamaño del archivo y entre otros; en la actualidad, la mayoría de los dispositivos móviles ya no son compatibles con estos complementos, y el soporte de escritorio está en camino de desaparecer.

Finalmente, apareció el elemento `<iframe>` (junto con otras formas de incrustación de contenido, como `<canvas>` , `<video>` , etc.). Esto proporciona una forma de insertar un documento web entero dentro de otro, como si fuera un `<img>` u otro elemento similar, y asi es como se usa en la actualidad.

Con la lección de historia fuera del camino, sigamos y veamos cómo usar algunos de estos.

## Aprendizaje activo: usos de incrustación clásicos

En este artículo vamos a ir directamente a una sección de aprendizaje activo, para darle una idea real de la utilidad de las tecnologías de inclusión. El mundo en línea está muy familiarizado con Youtube, pero muchas personas no conocen algunas de las comodidades para compartir que tiene disponibles. Veamos cómo Youtube nos permite insertar un video en cualquier página que nos guste usando un `<iframe>` .

1. Primero, ve a Youtube y encuentra el video que te gusta.
2. Debajo del video, encontrará un botón _Compartir_ : seleccionelo para mostrar las opciones para compartir.
3. Seleccione el botón _Insertar_ y recibirá un código `<iframe>` - copielo.
4. Insértelo en el cuadro de _entrada a_ continuación, y vea cuál es el resultado en la _salida_ .

Para obtener puntos de bonificación, también puede intentar insertar un mapa de Google en el ejemplo:

1. Ve a Google Maps y encuentra un mapa que te guste.
2. Haga clic en el "Menú Hamburger" (tres líneas horizontales) en la esquina superior izquierda de la IU.
3. Seleccione la opción _Compartir o Insertar mapa_ .
4. Seleccione la opción Insertar mapa, que le dará un código `<iframe>` - copielo.
5. Insértelo en el cuadro de _entrada a_ continuación, y vea cuál es el resultado en la _salida_ .

Si comete un error, siempre puede restablecerlo usando el botón _Restablecer_ . Si realmente te quedas atascado, presiona el botón _Mostrar solución_ para ver una respuesta.

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 250px;"></div>

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea
  id="code"
  class="input"
  style="width: 95%;min-height: 100px;"></textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var solution = document.getElementById("solution");
var output = document.querySelector(".output");
var code = textarea.value;
var userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Show solution";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "Show solution") {
    textarea.value = solutionEntry;
    solution.value = "Hide solution";
  } else {
    textarea.value = userEntry;
    solution.value = "Show solution";
  }
  updateCode();
});

var htmlSolution =
  '<iframe width="420" height="315" src="https://www.youtube.com/embed/QH2-TGUlwu4" frameborder="0" allowfullscreen>\n</iframe>\n\n<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37995.65748333395!2d-2.273568166412784!3d53.473310471916975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bae6c05743d3d%3A0xf82fddd1e49fc0a1!2sThe+Lowry!5e0!3m2!1sen!2suk!4v1518171785211" width="600" height="450" frameborder="0" style="border:0" allowfullscreen>\n</iframe>';
var solutionEntry = htmlSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = function (e) {
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  var scrollPos = textarea.scrollTop;
  var caretPos = textarea.selectionStart;

  var front = textarea.value.substring(0, caretPos);
  var back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = function () {
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === "Show solution") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Playable_code', 700, 600, "", "", "hide-codepen-jsfiddle") }}

## Iframes en detalle

Entonces, fue fácil y divertido ¿verdad? Los elementos {{htmlelement("iframe")}} están diseñados para permitirte incrustar documentos web en el documento actual. Esto es excelente para incorporar contenido de terceros en tu sitio web sobre el que no tengas control directo y no quieras tener que implementar tu propia versión — como vídeo de porveedeores de vídeo en línea, sistemas de comentarios como [Disqus](https://disqus.com/), mapas de proveedores de mapas en línea, banners publicitarios, etc. Los ejemplos editables que has estado usando a través de este curso se implementan usando `<iframe>`s.

Hay algunos serios [Security concerns](#security_concerns) a considerar con `<iframe>`s, también se discute a continuación, pero esto no significa que debas dejar de usarlos en tus sitios web — solo requiere un poco de conocimiento y pensar cuidadosamente. Vamos a explorar el código con un poco más de detalle. Supongamos que quieres incluir el glosario de MDN en una de tus páginas web — podrías intentar algo como esto:

```html
<iframe
  src="https://developer.mozilla.org/es/docs/Glossary"
  width="100%"
  height="500"
  frameborder="0"
  allowfullscreen
  sandbox>
  <p>
    <a href="/es/docs/Glossary">
      Fallback link for browsers that don't support iframes
    </a>
  </p>
</iframe>
```

Este ejemplo incluye los elementos básicos necesarios para usar un `<iframe>`:

- [`allowfullscreen`](/es/docs/Web/HTML/Element/iframe#allowfullscreen)
  - : Si está configurado, el `<iframe>` se puede colocar en modo pantalla completa usando el [Full Screen API](/es/docs/Web/API/Fullscreen_API) (El uso del API está fuera del alcance de este artículo.)
- [`frameborder`](/es/docs/Web/HTML/Element/iframe#frameborder)
  - : Si se establece en 1, esto le indica al navegador que dibuje un borde entre este marco y otros marcos, que es el comportamiento predeterminado. 0 elimina el borde. Usar esto ya no es realmente recomendable, ya que el mismo efecto se puede lograr mejor usando[`border`](/es/docs/Web/CSS/border)`: none;` en tu {{Glossary('CSS')}}.
- [`src`](/es/docs/Web/HTML/Element/iframe#src)
  - : Este atributo, como con {{htmlelement("video")}}/{{htmlelement("img")}},contiene una ruta que apunta a la URL del documento que se va a incrustar.
- [`width`](/es/docs/Web/HTML/Element/iframe#width) and [`height`](/es/docs/Web/HTML/Element/iframe#height)
  - : Estos atributos especifican el ancho y la altura (width y height) que quieres que tenga el iframe.
- **Contenido de reserva**
  - : De la misma manera que otros elementos similares [`<video>`](/es/docs/Web/HTML/Element/video), puedes incluir contenido alternativo entre las etiquetas de apertura y cierre `<iframe></iframe>` que aparecerán si el navegador no admite el `<iframe>`. En este caso hemos incluido un enlace a la página. Es poco probable que encuentres algún navegador que no admita `<iframe>`s en estos días.
- [`sandbox`](/es/docs/Web/HTML/Element/iframe#sandbox)
  - : Este atributo, que funciona en navegadores un poco más modernos que el resto de la funciones de `<iframe>` (por ejemplo IE 10 y superior) solicita una mayor configuración de seguridad; bueno, hablaremos más sobre esto en la siguiente sección.

> **Nota:** Para mejorar la velocidad, es una buena idea establecer el atributo `src` de iframes con JavaScript después de que se cargue el contenido principal. Esto hace que tu página pueda utilizarse antes y disminuye el tiempo de carga de tu página principal (an important {{Glossary("SEO")}}.)

### Con respecto a la seguridad

Arriba mencionamos nuestra preocupación por la seguridad — vamos a entrar en esto con un poco más de detalle ahora. No esperamos que comprendas todo este contenido perfectametne a la primera. Solo queremos informarte sobre esta preocupación y proporcionarte una referencia a la que volver a medida que tengas más experiencia y comiences a considerar el uso de `<iframe>`s en tu trabajo y en tus experimentos.además, no es necesario tener miedo y no usar `<iframe>`s — iframes, solo debes tener cuidado. Sigue leyendo...

Los creadores de navegadores y los desarrolladores web han aprendido por las malas que los iframes son un objetivo común (término oficial: **vector de ataque**) para los "malos" de la Web (a menudo denominados **hackers**,o más exactamente, **crackers**) para atacar si están tratando de modificar maliciosamente tu página web, o engañar a las personas para que hagan algo que no quieren hacer, como revelar información confidencial como nombre de usuario o contraseña. Debido a esto, los ingenieros de especificaciones y los desarrolladores de navegadores han desarrollado varios mecanismos para hacer que los `<iframe>`s sean más seguros, y también hay mejores prácticas a considerar — cubriremos algunas de estas a continuación.

> **Nota:** [Clickjacking](https://es.wikipedia.org/wiki/Clickjacking) es un tipo de ataque de iframe común en el que los piratas informáticos incrustan un iframe invisible en tu documento (o incrustan tu documento en su propio sitio web malicioso) y lo utilizan para capturar las interacciones de los ususarios. Esta es una forma común de engañar a los usuarios o robar datos sensibles.

Primero un ejemplo rápido — intenta cargar el ejemplo anterior que mostramos arriba en tu navegador — puedes encontrarlo en [Github](http://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html) (ver el [código fuente](https://github.com/mdn/learning-area/blob/gh-pages/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html) ) Tu no verás nada en tu navegador, pero si miras en la _Consola_ en las [herramientas de desarrollador de tu navegador](/es/docs/Learn/Common_questions/What_are_browser_developer_tools), tú verás un mensaje diciendote porque.En Firefox, te dirá _Load denied by X-Frame-Options: "https://developer.mozilla.org/es/docs/Glossary" does not permit framing_. Esto es porque los desarrolladores que construyeron MDN han incluido una configuración en el servidor que almacena la página web que impide que sean incrustados dentro de `<iframe>`s (ver [Configure CSP directives](#configure_csp_directives), abajo.) Esto tiene sentido— una página completa de MDN no tiene sentido estar incrustada en otras páginas, a menos que tu quieras hacer algo como incrustarlas en tu sitio web y reclamarlas como propias — o intentar robar datos via clickjacking, los cuales ambos son cosas realmente malas. Además de que si todo el mundo comienza a hacerlo, todo el ancho de banda adicional podría costarle mucho dinero a Mozzilla.

#### Solo incrusta cuando sea necesario

Algunas veces tiene sentido embeber contenido de terceros— como vídeos de youtube y mapas — pero puedes ahorrarte muchos dolores de cabeza si tu solo embebes contenido de terceros solo cuando es necesario. Una buena regla de oro para la seguridad web es "Nunca puedes ser demasiado cauteloso. Si lo hizo, verifíquelo de todos modos. Si alguien más lo hizo, asuma que es peligroso hasta que se demuestre lo contrario".

Además de la seguridad, debes ser consciente de los temas de propiedad intelectual. La mayoría del contenido tiene derechos de autor, en línea y fuera de línea, incluso contenido que no te esperas(por ejemplo, la mayoría de las imágenes en [Wikimedia Commons](https://commons.wikimedia.org/wiki/Main_Page)). Nunca muestres en tu pagina contenido a menos que te pertenezca o que el dueño te haya dado por escrito su permiso inequívoco. Las penalidades por derechos de autor son severas. De nuevo, tu nunca puedes ser demasiado cauteloso.

Si el contenido es licenciado, debes obedecer los terminos de la licencia. Por ejemplo, el contenido en MDN es licenciado bajo[CC-BY-SA](/es/docs/MDN/About#Copyrights_and_licenses). Esto significa, que tu debes darnos [credito apropiadamente](https://wiki.creativecommons.org/wiki/Best_practices_for_attribution) cuando tu citas nuestro contenido, aun si tu haces cambios substanciales.

#### Usa HTTPS

{{Glossary("HTTPS")}} es la versión encriptada de {{Glossary("HTTP")}}. Deberias cumplir con tu página web usando HTTPS siempre que sea posible:

1. HTTPS reduce la oportunidad de que contenido remoto haya sido manipulado en el tránsito.
2. HTTPS previene que el contenido embebido acceda al documento padre y viceversa.

Usar HTTPS requiere un certificado de seguridad, el cual puede ser costoso (Aunque [Let's Encrypt](https://letsencrypt.org/) hace las cosas más faciles) — si tu no puedes tener uno, tu debes servir tu documento padre con HTTP. Sin embargo, debido al segundo beneficio de HTTPS expuesto arriba, no importa cual sea el costo tu nunca debes embeber contenido de terceros con HTTP. (En el mejor de los casos, el navegador de tus usuarios les dará una advertencia). Todas las empresas con buena reputación que hacen contenido para embeber via `<iframe>` lo harán disponible via HTTPS — mira la URLs dentro del `<iframe>` atributo `src` cuando tu estes embebiendo contenido desde Google Maps o Youtube, por ejemplo.

> **Nota:** [Github pages](/es/docs/Learn/Common_questions/Using_Github_pages) permite que el contenido sea servido via HTTPS por defecto, asi que es util para hospedar tu contenido. Si estás usando un hosting diferente y no estás seguro, pregunta a tu proveedor de hosting acerca del tema .

#### Siempre usa el atributo `sandbox`

You want to give attackers as little power as you can to do bad things on your website, therefore you should give embedded content _only the permissions needed for doing its job._ Of course, this applies to your own content, too. un contenedor para codigo que puedes usar apropiadamente — o para probar — but can't cause any harm to the rest of the codebase (either accidental or malicious) is called a [sandbox](<https://en.wikipedia.org/wiki/Sandbox_(computer_security)>).

Unsandboxed content can do way too much (executing JavaScript, submitting forms, popup windows, etc.) By default you should impose all available restrictions by using the `sandbox` attribute with no parameters, as shown in our previous example.

If absolutely required, you can add permissions back one by one (inside the `sandbox=""` attribute value) — see the [`sandbox`](/es/docs/Web/HTML/Element/iframe#sandbox) reference entry for all the available options. One important note is that you should _never_ add both `allow-scripts` and `allow-same-origin` to your `sandbox` attribute — in that case the embedded content could bypass the same origin security policy that stops sites from executing scripts, and use JavaScript to turn off sandboxing altogether.

> **Nota:** Sandboxing provides no protection if attackers can fool people into visiting malicious content directly (outside an `iframe`). If there's any chance that certain content may be malicious (e.g., user-generated content), please serve it from a different {{glossary("domain")}} to your main site.

#### Configure CSP directives

{{Glossary("CSP")}} stands for **[content security policy](/es/docs/Web/Security/CSP)**, and provides [a set of HTTP Headers](/es/docs/Web/Security/CSP/CSP_policy_directives) (metadata sent along with your web pages when they are served from a web server) designed to improve the security of your HTML document. When it comes to securing `<iframe>`s, you can _[configure your server to send an appropriate `X-Frame-Options` header.](/es/docs/Web/HTTP/X-Frame-Options)_ This can prevent other websites from embedding your content in their webpages (which would enable [clickjacking](https://es.wikipedia.org/wiki/Clickjacking) and a host of other attacks), which is exactly what the MDN developers have done, as we saw earlier on.

> **Nota:** You can read Frederik Braun's post [On the X-Frame-Options Security Header](https://blog.mozilla.org/security/2013/12/12/on-the-x-frame-options-security-header/) for more background information on this topic. Obviously, it's rather out of scope for a full explanation in this article.

## The \<embed> and \<object> elements

The {{htmlelement("embed")}} and {{htmlelement("object")}} elements serve a different function to {{htmlelement("iframe")}} — these elements are general purpose embedding tools for embedding multiple types of external content, which include plugin technologies like Java Applets and Flash, PDF (which can be shown in a browser with a PDF plugin), and even content like videos, SVG and images!

> **Nota:** A **plugin** is software that provides access to content the browser cannot read natively.

However, you are unlikely to use these elements very much — Applets haven't been used for years, Flash is no longer very popular, due to a number of reasons (see [The case against plugins](#the_case_against_plugins), below), PDFs tend to be be better linked to than embedded, and other content such as images and video have much better, easier elements to handle those. Plugins and these embedding methods are really a legacy technology, and we are mainly mentioning them in case you come across them in certain circumstances like intranets, or enterprise projects.

If you find yourself needing to embed plugin content, this is the kind of information you'll need, at a minimum:

|                                                                            | {{htmlelement("embed")}}                                                                            | {{htmlelement("object")}}                                                                             |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| {{glossary("URL")}} of the embedded content                                | [`src`](/es/docs/Web/HTML/Element/embed#src)                                                        | [`data`](/es/docs/Web/HTML/Element/object#data)                                                       |
| _accurate_ {{glossary("MIME type", 'media type')}} of the embedded content | [`type`](/es/docs/Web/HTML/Element/embed#type)                                                      | [`type`](/es/docs/Web/HTML/Element/object#type)                                                       |
| height and width (in CSS pixels) of the box controlled by the plugin       | [`height`](/es/docs/Web/HTML/Element/embed#height) [`width`](/es/docs/Web/HTML/Element/embed#width) | [`height`](/es/docs/Web/HTML/Element/object#height) [`width`](/es/docs/Web/HTML/Element/object#width) |
| names and values, to feed the plugin as parameters                         | ad hoc attributes with those names and values                                                       | single-tag {{htmlelement("param")}} elements, contained within `<object>`                             |
| independent HTML content as fallback for an unavailable resource           | not supported (`<noembed>` is obsolete)                                                             | contained within `<object>`, after `<param>` elements                                                 |

> **Nota:** `<object>` requires a `data` attribute, a `type` attribute, or both. If you use both, you may also use the [`typemustmatch`](/es/docs/Web/HTML/Element/object#typemustmatch) attribute (only implemented in Firefox, as of this writing). `typemustmatch` keeps the embedded file from running unless the `type` attribute provides the correct media type. `typemustmatch` can therefore confer significant security benefits when you're embedding content from a different {{glossary("origin")}} (it can keep attackers from running arbitrary scripts through the plugin).

Here's an example that uses the {{htmlelement("embed")}} element to embed a Flash movie (see this [live on Github](http://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/embed-flash.html), and [check the source code](https://github.com/mdn/learning-area/blob/gh-pages/html/multimedia-and-embedding/other-embedding-technologies/embed-flash.html) too):

```html
<embed
  src="whoosh.swf"
  quality="medium"
  bgcolor="#ffffff"
  width="550"
  height="400"
  name="whoosh"
  align="middle"
  allowScriptAccess="sameDomain"
  allowFullScreen="false"
  type="application/x-shockwave-flash"
  pluginspage="http://www.macromedia.com/go/getflashplayer" />
```

Pretty horrible, isn't it. The HTML generated by the Adobe Flash tool tended to be even worse, using an `<object>` element with an `<embed>` element embedded in it, to cover all bases (check out an example.) Flash was even used successfully as fallback content for HTML5 video, for a time, but this is increasingly being seen as not necessary.

Now let's look at an `<object>` example that embeds a PDF into a page (see the [live example](http://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/object-pdf.html) and the [source code](https://github.com/mdn/learning-area/blob/gh-pages/html/multimedia-and-embedding/other-embedding-technologies/object-pdf.html)):

```html
<object
  data="mypdf.pdf"
  type="application/pdf"
  width="800"
  height="1200"
  typemustmatch>
  <p>
    You don't have a PDF plugin, but you can
    <a href="myfile.pdf">download the PDF file.</a>
  </p>
</object>
```

PDFs were a necessary stepping stone between paper and digital, but they pose many [accessibility challenges](http://webaim.org/techniques/acrobat/acrobat) and can be hard to read on small screens. They do still tend to be popular in some circles, but it is much better to link to them so they can be downloaded or read on a separate page, rather than embedding them in a webpage.

### The case against plugins

Once upon a time, plugins were indispensable on the Web. Remember the days when you had to install Adobe Flash Player just to watch a movie online? And then you constantly got annoying alerts about updating Flash Player and your Java Runtime Environment. Web technologies have since grown much more robust, and those days are over. For most applications, it's time to stop delivering content that depends on plugins, and start taking advantage of Web technologies instead.

- **Broaden your reach to everyone.** Everyone has a browser, but plugins are increasingly rare, especially among mobile users. Since the Web is largely usable without plugins, people would rather just go to your competitors' websites than install a plugin.
- **Give yourself a break from the [extra accessibility headaches](http://webaim.org/techniques/flash/) that come with Flash and other plugins.**
- **Stay clear of additional security hazards.** Adobe Flash is [notoriously insecure,](http://www.cvedetails.com/product/6761/Adobe-Flash-Player.html?vendor_id=53) even after countless patches. In 2015, Alex Stamos, chief security officer of Facebook, even [requested that Adobe discontinue Flash.](http://www.theverge.com/2015/7/13/8948459/adobe-flash-insecure-says-facebook-cso)

So what should you do? If you need interactivity, HTML and {{glossary("JavaScript")}} can readily get the job done for you with no need for Java applets or outdated ActiveX/BHO technology. Instead of relying on Adobe Flash, you can use [HTML5 video](/es/docs/Learn/HTML/Howto/Add_audio_or_video_content_to_a_webpage) for your media needs, [SVG](/es/docs/Learn/HTML/Howto/Add_vector_image_to_a_webpage) for vector graphics, and [Canvas](/es/docs/Web/API/Canvas_API/Tutorial) for complex images and animations. [Peter Elst was already writing some years ago](https://plus.google.com/+PeterElst/posts/P5t4pFhptvp) that Adobe Flash is rarely the right tool for the job, except for specialized gaming and business applications. As for ActiveX, even Microsoft's {{glossary("Microsoft Edge","Edge")}} browser no longer supports it.

## Summary

The topic of embedding other content in web documents can quickly become very complex, so in this article we've tried to introduce it in a simple, familiar way that will immediately seem relevant, while still hinting at some of the more advanced features of the involved technologies. To start with, you are unlikely to use embedding for much beyond including third party content like maps and videos on your pages. As you become more experienced however, you are likely to start finding more uses for them.

There are many other technologies that involve embedding external content besides the ones we discussed here. We saw some in earlier articles, such as {{htmlelement("video")}}, {{htmlelement("audio")}}, and {{htmlelement("img")}}, but there are others to discover, such as {{htmlelement("canvas")}} for JavaScript-generated 2D and 3D graphics, and {{htmlelement("svg")}} for embedding vector graphics. We'll look at [SVG](/es/docs/Web/SVG) in the next article of the module.

{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Video_and_audio_content", "Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web", "Learn/HTML/Multimedia_and_embedding")}}
