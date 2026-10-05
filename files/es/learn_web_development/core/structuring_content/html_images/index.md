---
title: Imágenes HTML
short-title: Imágenes
slug: Learn_web_development/Core/Structuring_content/HTML_images
l10n:
  sourceCommit: 2066cc916dfdcbb782340bf0ce562b230e947cba
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content/Test_your_skills/Images", "Learn_web_development/Core/Structuring_content")}}

Al principio, la web solo era texto y resultaba bastante aburrida. Afortunadamente, no pasó mucho tiempo antes de que se añadiera la capacidad de incrustar imágenes (y otros tipos de contenido más interesantes) dentro de las páginas web. En este artículo veremos en detalle cómo usar el elemento {{htmlelement("img")}}, incluyendo lo básico, cómo anotarlo con pies de imagen usando {{htmlelement("figure")}}, y cómo se relaciona con las imágenes de fondo de {{glossary("CSS")}}.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Familiaridad básica con HTML, como se explica en
        <a href="/es/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Sintaxis básica de HTML</a
        >. Semántica a nivel de texto como
        <a href="/es/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
          >encabezados y párrafos</a
        > y <a href="/es/docs/Learn_web_development/Core/Structuring_content/Lists"
          >listas</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Resultados de aprendizaje:</th>
      <td>
        <ul>
          <li>El término "elemento reemplazado": ¿qué significa?</li>
          <li>Sintaxis básica de la etiqueta <code>&lt;img&gt;</code></li>
          <li>Usar <code>src</code> para apuntar a un recurso.</li>
          <li>Usar <code>width</code> y <code>height</code>, por ejemplo, para evitar actualizaciones bruscas y desagradables de la interfaz una vez que una imagen ha terminado de cargarse y se muestra.</li>
          <li>Optimizar los recursos multimedia para la web: mantener el tamaño de los archivos pequeño.</li>
          <li>Comprender las licencias de los recursos multimedia: los distintos tipos de licencia, cómo cumplirlas, y cómo buscar archivos multimedia con la licencia adecuada para usarlos en proyectos.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## ¿Cómo ponemos una imagen en una página web?

Para poner una imagen en una página web, usamos el elemento {{htmlelement("img")}}. Se trata de un {{Glossary("void element", "elemento vacío")}} (es decir, no puede tener contenido secundario ni etiqueta de cierre) que requiere dos atributos para ser útil: `src` y `alt`. El atributo `src` contiene una URL que apunta a la imagen que quieres incrustar en la página. Al igual que con el atributo `href` de los elementos {{htmlelement("a")}}, el atributo `src` puede ser una URL relativa o una URL absoluta. Sin un atributo `src`, un elemento `img` no tiene ninguna imagen que cargar.

El [atributo `alt` se describe más abajo](#texto_alternativo).

> [!NOTE]
> Deberías leer [Primer acercamiento a URLs y rutas](/es/docs/Learn_web_development/Core/Structuring_content/Creating_links#primer_acercamiento_a_urls_y_rutas) para refrescar tu memoria sobre las URL relativas y absolutas antes de continuar.

Por ejemplo, si tu imagen se llama `dinosaur.jpg`, y está en el mismo directorio que tu página HTML, podrías incrustar la imagen así:

```html
<img src="dinosaur.jpg" alt="Dinosaurio" />
```

Si la imagen estuviera en un subdirectorio `images`, dentro del mismo directorio que la página HTML, entonces la incrustarías así:

```html
<img src="images/dinosaur.jpg" alt="Dinosaurio" />
```

Y así sucesivamente.

> [!NOTE]
> Los motores de búsqueda también leen los nombres de archivo de las imágenes y los tienen en cuenta para el SEO. Por lo tanto, deberías darle a tu imagen un nombre de archivo descriptivo; `dinosaur.jpg` es mejor que `img835.png`.

También podrías incrustar la imagen usando su URL absoluta, por ejemplo:

```html
<img src="https://www.example.com/images/dinosaur.jpg" alt="Dinosaurio" />
```

Sin embargo, no se recomienda enlazar mediante URL absolutas. Deberías alojar las imágenes que quieres usar en tu propio sitio, lo que en configuraciones simples significa mantener las imágenes de tu sitio web en el mismo servidor que tu HTML. Además, en términos de mantenimiento es más eficiente usar URL relativas que absolutas (cuando muevas tu sitio a un dominio diferente, no tendrás que actualizar todas tus URL para incluir el nuevo dominio). En configuraciones más avanzadas, podrías usar una [CDN (red de distribución de contenidos)](/es/docs/Glossary/CDN) para entregar tus imágenes.

Si no creaste las imágenes, debes asegurarte de tener permiso para usarlas conforme a las condiciones de la licencia bajo la que se publicaron (consulta [Recursos multimedia y licencias](#recursos_multimedia_y_licencias) más abajo para más información).

> [!WARNING]
> _Nunca_ apuntes el atributo `src` a una imagen alojada en el sitio web de otra persona _sin permiso_. Esto se llama "hotlinking". Se considera poco ético, ya que otra persona estaría pagando los costos de ancho de banda por entregar la imagen cada vez que alguien visita tu página. Además, te deja sin ningún control sobre la imagen, que podría eliminarse o reemplazarse por algo bochornoso.

El fragmento de código anterior, ya sea con la URL absoluta o la relativa, nos dará el siguiente resultado:

![Una imagen básica de un dinosaurio, incrustada en un navegador, con el texto "Imágenes en HTML" escrito encima](basic-image.png)

> [!NOTE]
> Los elementos como {{htmlelement("img")}} y {{htmlelement("video")}} a veces se denominan **elementos reemplazados**. Esto se debe a que el contenido y el tamaño del elemento se definen mediante un recurso externo (como un archivo de imagen o video), no por el contenido del propio elemento. Puedes leer más sobre ellos en {{Glossary("replaced elements", "elementos reemplazados")}}.

### Texto alternativo

El siguiente atributo que veremos es `alt`. Su valor debe ser una descripción textual de la imagen, para usarse en situaciones en las que la imagen no se pueda ver/mostrar o tarde mucho en renderizarse debido a una conexión a internet lenta. Por ejemplo, nuestro código anterior podría modificarse así:

```html
<img
  src="images/dinosaur.jpg"
  alt="La cabeza y el torso de un esqueleto de dinosaurio;
          tiene una cabeza grande con dientes largos y afilados" />
```

La forma más fácil de probar tu texto `alt` es escribir mal el nombre de archivo a propósito. Si, por ejemplo, el nombre de nuestra imagen se escribiera `dinosooooor.jpg`, el navegador no mostraría la imagen y, en su lugar, mostraría el texto alternativo:

![El título Imágenes en HTML, pero esta vez la imagen del dinosaurio no se muestra, y el texto alternativo ocupa su lugar.](alt-text.png)

Entonces, ¿por qué verías o necesitarías alguna vez el texto alternativo? Puede resultar útil por varias razones:

- El usuario tiene una discapacidad visual y utiliza un [lector de pantalla](https://es.wikipedia.org/wiki/Lector_de_pantalla) para que se le lea el contenido de la web. De hecho, disponer de texto alternativo para describir las imágenes es útil para la mayoría de los usuarios.
- Como se describió anteriormente, el nombre del archivo o de la ruta podría estar mal escrito.
- El navegador no admite el tipo de imagen. Algunas personas todavía usan navegadores de solo texto, como [Lynx](<https://es.wikipedia.org/wiki/Lynx_(navegador)>), que muestra el texto alternativo de las imágenes.
- Es posible que quieras proporcionar texto para que lo utilicen los motores de búsqueda; por ejemplo, los motores de búsqueda pueden hacer coincidir el texto alternativo con las consultas de búsqueda.
- Los usuarios han desactivado las imágenes para reducir el volumen de transferencia de datos y las distracciones. Esto es especialmente común en teléfonos móviles, y en países donde el ancho de banda es limitado o costoso.

¿Qué deberías escribir exactamente dentro de tu atributo `alt`? Depende de _por qué_ la imagen está ahí en primer lugar. En otras palabras, qué pierdes si tu imagen no aparece:

- **Decoración.** Deberías usar [imágenes de fondo CSS](#imágenes_de_fondo_css) para las imágenes decorativas, pero si debes usar HTML, añade un `alt=""` en blanco. Si la imagen no forma parte del contenido, un lector de pantalla no debería perder tiempo leyéndola.
- **Contenido.** Si tu imagen proporciona información significativa, incluye la misma información en un texto `alt` _breve_, o mejor aún, en el texto principal que todos pueden ver. No escribas texto `alt` redundante. ¿No sería molesto para un usuario vidente que todos los párrafos estuvieran escritos dos veces en el contenido principal? Si la imagen ya está descrita adecuadamente en el cuerpo del texto principal, simplemente puedes usar `alt=""`.
- **Enlace.** Si pones una imagen dentro de etiquetas {{htmlelement("a")}} para convertir la imagen en un enlace, aún debes proporcionar [texto de enlace accesible](/es/docs/Learn_web_development/Core/Structuring_content/Creating_links#redacción_clara_del_enlace). En esos casos puedes escribirlo dentro del propio elemento `<a>`, o dentro del atributo `alt` de la imagen, lo que funcione mejor en tu caso.
- **Texto.** No deberías poner tu texto dentro de imágenes. Si tu encabezado principal necesita, por ejemplo, una sombra paralela, [usa CSS](/es/docs/Web/CSS/Reference/Properties/text-shadow) para ello en lugar de poner el texto en una imagen. Sin embargo, si _de verdad no puedes evitarlo_, deberías proporcionar el texto dentro del atributo `alt`.

En esencia, la clave es ofrecer una experiencia utilizable, incluso cuando las imágenes no se puedan ver. Esto garantiza que ningún usuario se pierda parte del contenido. Prueba a desactivar las imágenes en tu navegador y observa cómo se ve todo. Pronto te darás cuenta de lo útil que es el texto alternativo cuando la imagen no se puede ver.

> [!NOTE]
> Consulta nuestra guía de [Alternativas de texto](/es/docs/Learn_web_development/Core/Accessibility/HTML#alternativas_de_texto) y [un árbol de decisión para el atributo alt](https://www.w3.org/WAI/tutorials/images/decision-tree/) para aprender a usar el atributo `alt` en imágenes en distintas situaciones.

> [!NOTE]
> [Etiquetas HTML](https://scrimba.com/html-css-crash-course-c02l/~0d?via=mdn) <sup>[_socio de aprendizaje de MDN_](/es/docs/MDN/Writing_guidelines/Learning_content#enlaces_externos_o_embebidos)</sup>, de Scrimba, es una lección interactiva que proporciona información sobre imágenes, y pequeños desafíos.

### Anchura y altura

Puedes usar los atributos [`width`](/es/docs/Web/HTML/Reference/Elements/img#width) y [`height`](/es/docs/Web/HTML/Reference/Elements/img#height) para especificar el ancho y el alto de tu imagen. Se indican como números enteros sin unidad, y representan el ancho y el alto de la imagen en píxeles.

Puedes averiguar el ancho y el alto de tu imagen de varias maneras. Por ejemplo, en Mac puedes usar <kbd>Cmd</kbd> + <kbd>I</kbd> para obtener la información de la imagen. Volviendo a nuestro ejemplo, podríamos hacer esto:

```html
<img
  src="images/dinosaur.jpg"
  alt="La cabeza y el torso de un esqueleto de dinosaurio;
          tiene una cabeza grande con dientes largos y afilados"
  width="400"
  height="341" />
```

Hay una muy buena razón para hacer esto. El HTML de tu página y la imagen son recursos separados, que el navegador obtiene mediante solicitudes HTTP(S) independientes. En cuanto el navegador recibe el HTML, empieza a mostrárselo al usuario. Si las imágenes todavía no se han recibido (y esto suele ser el caso, ya que el tamaño de los archivos de imagen suele ser mucho mayor que el de los archivos HTML), el navegador solo renderizará el HTML, y actualizará la página con la imagen en cuanto la reciba.

Por ejemplo, supongamos que tenemos algo de texto después de la imagen:

```html
<h1>Imágenes en HTML</h1>

<img
  src="dinosaur.jpg"
  alt="La cabeza y el torso de un esqueleto de dinosaurio; tiene una cabeza grande con dientes largos y afilados"
  title="Exposición de un T-Rex en el museo de la Universidad de Manchester." />
<blockquote>
  <p>
    Pero allá abajo ahora estaría oscuro, y no sería el hermoso acuario
    iluminado que ella imaginaba durante las horas de luz, arremolinándose con
    bancos de animales diminutos y delicados que flotaban y danzaban lentamente
    siguiendo sus propias corrientes serenas, creando el aspecto de una pintura
    viva. Eso estaba mal, de todos modos. El océano era diferente de un acuario,
    que era un entorno artificial. El océano era un mundo. Y un mundo no es
    arte. Dorothy pensó en los seres vivos que se movían en ese mundo: grandes,
    despiadados y hambrientos. Como nosotros aquí arriba.
  </p>
  <footer>- Rachel Ingalls, <cite>Mrs. Caliban</cite></footer>
</blockquote>
```

En cuanto el navegador descarga el HTML, comenzará a mostrar la página.

Una vez que la imagen se carga, el navegador la añade a la página. Como la imagen ocupa espacio, el navegador tiene que desplazar el texto hacia abajo en la página, para encajar la imagen por encima de él:

![Comparación de la disposición de la página mientras el navegador la está cargando y cuando ha terminado, cuando no se especifica ningún tamaño para la imagen.](no-size.png)

Desplazar el texto de esta manera resulta extremadamente molesto para los usuarios, sobre todo si ya han empezado a leerlo, y además hace que el navegador vuelva a renderizar la página, lo cual es malo para el rendimiento.

Si especificas el tamaño real de la imagen en tu HTML usando los atributos `width` y `height`, el navegador sabrá cuánto espacio reservar para la imagen antes de que se haya descargado.

Esto significa que, cuando la imagen se haya descargado, el navegador no tendrá que desplazar el contenido circundante.

![Comparación de la disposición de la página mientras el navegador la está cargando y cuando ha terminado, cuando se especifica el tamaño de la imagen.](size.png)

Para un excelente artículo sobre la historia de esta característica, consulta [Setting height and width on images is important again](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/).

Ten en cuenta que si no hay contenido debajo de la imagen, volver a renderizar no supone un problema, porque cambiar el tamaño de la imagen no hará que otros elementos se desplacen. En ese caso, puedes establecer solo el `width` de la imagen. Si estableces un `width` pero no un `height`, el `height` toma por defecto el valor `auto`, lo que significa que se establece en un valor que mantiene la [relación de aspecto](/es/docs/Glossary/Aspect_ratio) de la imagen.

#### Cambiar el tamaño de las imágenes

Aunque, como hemos dicho, es una buena práctica especificar el tamaño _real_ de tus imágenes usando atributos HTML, no deberías usarlos para _cambiar el tamaño_ de las imágenes.

Si estableces un tamaño de imagen demasiado grande, acabarás con imágenes que se ven granuladas, borrosas, o demasiado pequeñas, y desperdiciando ancho de banda al descargar una imagen que no se ajusta a las necesidades del usuario. La imagen también podría acabar viéndose distorsionada, si no mantienes la {{Glossary("aspect ratio", "relación de aspecto")}} correcta. Deberías usar un editor de imágenes para poner tu imagen en el tamaño correcto antes de colocarla en tu página web.

Si necesitas alterar el tamaño de una imagen, deberías usar [CSS](/es/docs/Learn_web_development/Core/Styling_basics) en su lugar.

### Títulos de imagen

Al igual que [con los enlaces](/es/docs/Learn_web_development/Core/Structuring_content/Creating_links#añadir_información_de_asistencia_con_el_atributo_title), también puedes añadir atributos `title` a las imágenes, para proporcionar información de apoyo adicional si es necesario. En nuestro ejemplo, podríamos hacer esto:

```html
<img
  src="images/dinosaur.jpg"
  alt="La cabeza y el torso de un esqueleto de dinosaurio;
          tiene una cabeza grande con dientes largos y afilados"
  width="400"
  height="341"
  title="Exposición de un T-Rex en el museo de la Universidad de Manchester." />
```

Esto nos da una información sobre herramientas al pasar el ratón por encima, igual que los títulos de los enlaces:

![La imagen del dinosaurio, con una información sobre herramientas encima que dice A T-Rex on display at the Manchester University Museum](image-with-title.png)

Sin embargo, esto no se recomienda: `title` tiene varios problemas de accesibilidad, principalmente porque el soporte de los lectores de pantalla es muy impredecible y la mayoría de los navegadores no lo muestran a menos que pases el ratón por encima (por lo que, por ejemplo, los usuarios de teclado no tienen acceso a él). Si te interesa saber más sobre esto, lee [The Trials and Tribulations of the Title Attribute](https://www.24a11y.com/2017/the-trials-and-tribulations-of-the-title-attribute/) de Scott O'Hara.

Es mejor incluir ese tipo de información de apoyo en el texto principal del artículo, en lugar de adjuntarla a la imagen.

### Práctica de incrustación de imágenes

¡Ahora te toca jugar a ti! Esta tarea te llevará a incrustar una imagen.

1. Haz clic en **"Reproducir"** en el bloque de código de abajo para editar el ejemplo en el MDN Playground.
2. Edita el elemento {{htmlelement("img")}} existente para que incruste la imagen `dinosaur_small.jpg`.
3. Añade un atributo `alt` a la imagen. Puedes comprobar que el texto alternativo funciona escribiendo mal temporalmente el nombre del archivo de la imagen.
4. Establece el `width` y el `height` correctos de la imagen (pista: tiene `200px` de ancho y `171px` de alto), y luego experimenta con otros valores para ver cuál es el efecto.
5. Establece un `title` en la imagen.

Si cometes un error, puedes borrar tu trabajo usando el botón _Reset_ en el MDN Playground. Si te quedas realmente atascado, puedes ver la solución debajo del bloque de código.

```html live-sample___images-1
<img />
```

{{ EmbedLiveSample('images-1', "100%", 60) }}

<details>
<summary>Haz clic aquí para mostrar la solución</summary>

Tu HTML terminado debería verse algo así:

```html
<img
  src="dinosaur_small.jpg"
  alt="La cabeza y el torso de un esqueleto de dinosaurio; tiene una cabeza grande con dientes largos y afilados"
  width="200"
  height="171"
  title="Exposición de un T-Rex en el museo de la Universidad de Manchester." />
```

</details>

## Recursos multimedia y licencias

Las imágenes (y otros tipos de recursos multimedia) que encuentras en la web se publican bajo distintos tipos de licencia. Antes de usar una imagen en un sitio que estés construyendo, asegúrate de que te pertenece, tienes permiso para usarla, o cumples con las condiciones de licencia de su propietario.

### Entender los tipos de licencia

Veamos algunas categorías comunes de licencias que probablemente encuentres en la web.

#### Todos los derechos reservados

Quienes crean obras originales, como canciones, libros o software, a menudo publican su trabajo bajo protección de derechos de autor cerrada. Esto significa que, por defecto, ellos (o su editorial) tienen derechos exclusivos para usar (por ejemplo, mostrar o distribuir) su obra. Si quieres usar imágenes con derechos de autor bajo una licencia de _todos los derechos reservados_, necesitas hacer una de las siguientes cosas:

- Obtener permiso explícito y por escrito del titular de los derechos de autor.
- Pagar una tarifa de licencia para usarlas. Puede ser una tarifa única para uso ilimitado ("libre de regalías" o _royalty-free_), o puede ser "gestionada por derechos" (_rights-managed_), en cuyo caso podrías tener que pagar tarifas específicas por uso según el intervalo de tiempo, la región geográfica, la industria o el tipo de medio, etc.
- Limitar tus usos a aquellos que se considerarían [uso justo](https://fairuse.stanford.edu/overview/fair-use/what-is-fair-use/) (_fair use_) o [trato justo](https://copyrightservice.co.uk/copyright/p27_work_of_others) (_fair dealing_) en tu jurisdicción.

Los autores no están obligados a incluir un aviso de derechos de autor o términos de licencia junto con su obra. Los derechos de autor existen automáticamente sobre una obra original de autoría en cuanto se crea en un medio tangible. Así que, si encuentras una imagen en línea y no hay avisos de derechos de autor ni términos de licencia, lo más seguro es asumir que está protegida por derechos de autor con todos los derechos reservados.

#### Permisiva

Si la imagen se publica bajo una licencia permisiva, como [MIT](https://mit-license.org/), [BSD](https://opensource.org/license/BSD-3-clause), o una licencia [Creative Commons (CC)](https://creativecommons.org/chooser/) adecuada, no necesitas pagar una tarifa de licencia ni pedir permiso para usarla. Aun así, hay varias condiciones de licencia que deberás cumplir, que varían según la licencia.

Por ejemplo, podrías tener que:

- Proporcionar un enlace a la fuente original de la imagen y dar crédito a su creador.
- Indicar si se le hicieron cambios.
- Compartir cualquier obra derivada creada usando la imagen bajo la misma licencia que la original.
- No compartir ninguna obra derivada en absoluto.
- No usar la imagen en ningún trabajo comercial.
- Incluir una copia de la licencia junto con cualquier publicación que use la imagen.

Deberías consultar la licencia aplicable para conocer los términos específicos que deberás seguir.

> [!NOTE]
> Es posible que te encuentres con el término "copyleft" en el contexto de las licencias permisivas. Las licencias copyleft (como la [Licencia Pública General de GNU (GPL)](https://www.gnu.org/licenses/gpl-3.0.en.html) o las licencias Creative Commons "Compartir Igual") estipulan que las obras derivadas deben publicarse bajo la misma licencia que la original.

Las licencias copyleft son destacadas en el mundo del software. La idea básica es que un nuevo proyecto construido con el código de un proyecto con licencia copyleft (esto se conoce como un "fork" del software original) también deberá licenciarse bajo la misma licencia copyleft. Esto garantiza que el código fuente del nuevo proyecto también estará disponible para que otros lo estudien y modifiquen. Ten en cuenta que, en general, las licencias redactadas para software, como la GPL, no se consideran buenas licencias para obras que no son software, ya que no se redactaron pensando en obras de ese tipo.

Explora los enlaces proporcionados anteriormente en esta sección para leer sobre los distintos tipos de licencia y las clases de condiciones que especifican.

#### Dominio público/CC0

Las obras publicadas en el dominio público a veces se denominan "sin derechos reservados": no se les aplican derechos de autor, y pueden usarse sin permiso y sin tener que cumplir ninguna condición de licencia. Una obra puede terminar en el dominio público por varios medios, como la expiración de los derechos de autor, o la renuncia específica a esos derechos.

Una de las formas más efectivas de colocar una obra en el dominio público es licenciarla bajo [CC0](https://wiki.creativecommons.org/wiki/CC0), una licencia Creative Commons específica que proporciona una herramienta legal clara e inequívoca para este propósito.

Cuando uses imágenes de dominio público, obtén una prueba de que la imagen está en el dominio público y conserva esa prueba en tus registros. Por ejemplo, toma una captura de pantalla de la fuente original con el estado de la licencia mostrado claramente, y considera añadir una página a tu sitio web con una lista de las imágenes adquiridas junto con sus requisitos de licencia.

### Buscar imágenes con licencia permisiva

Puedes encontrar imágenes con licencia permisiva para tus proyectos usando un motor de búsqueda de imágenes o directamente en repositorios de imágenes.

Busca imágenes usando una descripción de la imagen que buscas junto con términos de licencia relevantes. Por ejemplo, cuando busques "dinosaurio amarillo", añade "imágenes de dominio público", "biblioteca de imágenes de dominio público", "imágenes con licencia abierta", o términos similares a la consulta de búsqueda.

Algunos motores de búsqueda tienen herramientas para ayudarte a encontrar imágenes con licencias permisivas. Por ejemplo, al usar Google, ve a la pestaña "Imágenes" para buscar imágenes, y luego haz clic en "Herramientas". Hay un menú desplegable "Derechos de uso" en la barra de herramientas resultante, donde puedes elegir buscar específicamente imágenes bajo licencias Creative Commons.

Los sitios de repositorios de imágenes, como [Flickr](https://flickr.com/), [ShutterStock](https://www.shutterstock.com/), y [Pixabay](https://pixabay.com/), tienen opciones de búsqueda que te permiten buscar solo imágenes con licencia permisiva. Algunos sitios distribuyen exclusivamente imágenes e íconos con licencia permisiva, como [Picryl](https://picryl.com/) y [The Noun Project](https://thenounproject.com/).

Cumplir con la licencia bajo la que se ha publicado la imagen consiste en encontrar los detalles de la licencia, leer la página de la licencia o de instrucciones proporcionada por la fuente, y luego seguir esas instrucciones. Los repositorios de imágenes de buena reputación dejan sus condiciones de licencia claras y fáciles de encontrar.

## Anotar imágenes con figuras y pies de figura

Hablando de leyendas, hay varias formas en las que podrías añadir una leyenda a tu imagen. Por ejemplo, no habría nada que te impidiera hacer esto:

```html
<div class="figure">
  <img
    src="images/dinosaur.jpg"
    alt="La cabeza y el torso de un esqueleto de dinosaurio;
            tiene una cabeza grande con dientes largos y afilados"
    width="400"
    height="341" />

  <p>Exposición de un T-Rex en el museo de la Universidad de Manchester.</p>
</div>
```

Esto está bien. Contiene el contenido que necesitas, y se puede diseñar fácilmente con CSS. Pero hay un problema aquí: no hay nada que vincule semánticamente la imagen con su leyenda, lo que puede causar problemas para los lectores de pantalla. Por ejemplo, cuando tienes 50 imágenes y leyendas, ¿qué leyenda corresponde a qué imagen?

Una solución mejor es usar los elementos HTML {{htmlelement("figure")}} y {{htmlelement("figcaption")}}. Estos se crearon exactamente para este propósito: proporcionar un contenedor semántico para las figuras, y vincular claramente la figura con la leyenda. Nuestro ejemplo anterior podría reescribirse así:

```html
<figure>
  <img
    src="images/dinosaur.jpg"
    alt="La cabeza y el torso de un esqueleto de dinosaurio;
            tiene una cabeza grande con dientes largos y afilados"
    width="400"
    height="341" />

  <figcaption>
    Exposición de un T-Rex en el museo de la Universidad de Manchester.
  </figcaption>
</figure>
```

El elemento {{htmlelement("figcaption")}} le indica a los navegadores, y a la tecnología de asistencia, que la leyenda describe el resto del contenido del elemento {{htmlelement("figure")}}.

> [!NOTE]
> Desde el punto de vista de la accesibilidad, las leyendas y el texto [`alt`](/es/docs/Web/HTML/Reference/Elements/img#alt) cumplen funciones distintas. Las leyendas benefician incluso a las personas que pueden ver la imagen, mientras que el texto [`alt`](/es/docs/Web/HTML/Reference/Elements/img#alt) proporciona la misma funcionalidad que una imagen ausente. Por lo tanto, las leyendas y el texto `alt` no deberían decir simplemente lo mismo, porque ambos aparecen cuando la imagen desaparece. Prueba a desactivar las imágenes en tu navegador y observa cómo se ve.

Una figura no tiene por qué ser una imagen. Es una unidad de contenido independiente que:

- Expresa tu significado de forma compacta y fácil de comprender.
- Podría ubicarse en varios lugares dentro del flujo lineal de la página.
- Proporciona información esencial que da apoyo al texto principal.

Una figura podría ser varias imágenes, un fragmento de código, audio, video, ecuaciones, una tabla, o alguna otra cosa.

### Crear una figura

En esta tarea, nos gustaría que tomaras el código terminado de la tarea anterior como punto de partida, y lo convirtieras en una figura:

1. Haz clic en **"Reproducir"** en el bloque de código de abajo para editar el ejemplo en el MDN Playground.
2. Envuelve el elemento `<img>` en un elemento {{htmlelement("figure")}}.
3. Copia el texto del atributo `title`, colócalo dentro de un elemento {{htmlelement("figcaption")}} debajo del elemento `<img>`, y luego elimina el atributo `title`.

Si cometes un error, puedes borrar tu trabajo usando el botón _Reset_ en el MDN Playground. Si te quedas realmente atascado, puedes ver la solución debajo del bloque de código.

```html live-sample___images-2
<img
  src="dinosaur_small.jpg"
  alt="La cabeza y el torso de un esqueleto de dinosaurio; tiene una cabeza grande con dientes largos y afilados"
  width="200"
  height="171"
  title="Exposición de un T-Rex en el museo de la Universidad de Manchester." />
```

{{ EmbedLiveSample('images-2', "100%", 200) }}

<details>
<summary>Haz clic aquí para mostrar la solución</summary>

Tu HTML terminado debería verse así:

```html
<figure>
  <img
    src="dinosaur_small.jpg"
    alt="La cabeza y el torso de un esqueleto de dinosaurio; tiene una cabeza grande con dientes largos y afilados"
    width="200"
    height="171" />
  <figcaption>
    Exposición de un T-Rex en el museo de la Universidad de Manchester
  </figcaption>
</figure>
```

</details>

## Imágenes de fondo CSS

También puedes usar CSS para incrustar imágenes en páginas web (y JavaScript, pero eso es otra historia completamente distinta). La propiedad CSS {{cssxref("background-image")}}, y las demás propiedades `background-*`, se usan para controlar la colocación de la imagen de fondo. Por ejemplo, para colocar una imagen de fondo en cada párrafo de una página, podrías hacer esto:

```css
p {
  background-image: url("images/dinosaur.jpg");
}
```

La imagen incrustada resultante es, podría decirse, más fácil de posicionar y controlar que las imágenes HTML. Entonces, ¿por qué molestarse con imágenes HTML? Como se sugirió antes, las imágenes de fondo CSS son solo para decoración. Si simplemente quieres añadir algo bonito a tu página para mejorar lo visual, esto está bien. Sin embargo, este tipo de imágenes no tienen ningún significado semántico. No pueden tener equivalentes de texto, son invisibles para los lectores de pantalla, etcétera. ¡Aquí es donde brillan las imágenes HTML!

En resumen: si una imagen tiene significado en términos de tu contenido, deberías usar una imagen HTML. Si una imagen es puramente decorativa, deberías usar imágenes de fondo CSS (las cubriremos en detalle más adelante en los módulos Core).

## Resumen

Eso es todo por ahora. Hemos cubierto en detalle las imágenes y las leyendas.

En el próximo artículo, te daremos algunas pruebas que podrás usar para comprobar qué tan bien has entendido y retenido la información que te hemos proporcionado sobre las imágenes HTML.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content/Test_your_skills/Images", "Learn_web_development/Core/Structuring_content")}}
