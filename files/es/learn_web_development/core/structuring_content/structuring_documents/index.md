---
title: Estructurar documentos
slug: Learn_web_development/Core/Structuring_content/Structuring_documents
l10n:
  sourceCommit: 2066cc916dfdcbb782340bf0ce562b230e947cba
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Marking_up_a_letter", "Learn_web_development/Core/Structuring_content/Creating_links", "Learn_web_development/Core/Structuring_content")}}

Además de definir partes individuales de tu página (como «un párrafo» o «una imagen»), {{glossary("HTML")}} también cuenta con varios elementos de bloque que se usan para definir áreas de tu sitio web, como «el encabezado», «el menú de navegación» o «la columna de contenido principal». Este artículo explica cómo planificar la estructura básica de un sitio web y cómo escribir el HTML que representa esa estructura.

<table>
  <tbody>
    <tr>
      <th scope="row">Requisitos previos:</th>
      <td>
        Familiaridad básica con HTML, como se explica en
        <a href="/es/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Sintaxis básica de HTML</a
        >. La semántica a nivel de texto, como los <a href="/es/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
          >encabezados y párrafos</a
        > y las <a href="/es/docs/Learn_web_development/Core/Structuring_content/Lists"
          >listas</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Resultados de aprendizaje:</th>
      <td>
        <ul>
          <li>Los elementos estructurales semánticos habituales de HTML, por ejemplo, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code> y <code>&lt;footer&gt;</code>, y cómo usarlos correctamente.</li>
          <li>La necesidad de usar elementos semánticos en los lugares adecuados, en lugar de usar simplemente elementos <code>&lt;div&gt;</code> siempre que hace falta un contenedor de bloque, y sus ventajas (como una mejor accesibilidad).</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Secciones básicas de un documento

Las páginas web pueden ser, y serán, bastante distintas entre sí, pero todas suelen compartir componentes estándar parecidos, a menos que la página muestre un video o un juego a pantalla completa, forme parte de algún tipo de proyecto artístico o simplemente esté mal estructurada:

- encabezado:
  - : Normalmente es una franja grande en la parte superior con un encabezado grande, un logotipo y quizá un eslogan. Suele ser igual en todas las páginas de un sitio web.
- barra de navegación:
  - : Enlaces a las secciones principales del sitio; normalmente se representan con botones de menú, enlaces o pestañas. Al igual que el encabezado, este contenido suele mantenerse igual en todas las páginas web: una navegación incoherente en tu sitio web solo conseguirá confundir y frustrar a los usuarios. Muchos diseñadores web consideran la barra de navegación parte del encabezado en lugar de un componente independiente, pero no es obligatorio; de hecho, algunos sostienen que tenerlos separados es mejor para la [accesibilidad](/es/docs/Learn_web_development/Core/Accessibility), porque los lectores de pantalla pueden leer mejor los dos elementos si están separados.
- contenido principal:
  - : Un área grande en el centro que contiene la mayor parte del contenido exclusivo de una página web determinada; por ejemplo, el video que quieres ver, la noticia principal que estás leyendo, el mapa que quieres consultar o los titulares de las noticias. ¡Es la parte del sitio web que sin duda cambiará de una página a otra!
- barra lateral:
  - : Información periférica, enlaces, citas, anuncios, etc. Normalmente está relacionada con lo que hay en el contenido principal (por ejemplo, en la página de una noticia, la barra lateral podría contener la biografía del autor o enlaces a artículos relacionados), pero también hay casos en los que encontrarás elementos recurrentes, como un sistema de navegación secundario.
- pie de página:
  - : Una franja en la parte inferior de la página que suele contener la letra pequeña, los avisos de derechos de autor o la información de contacto. Es un lugar para poner información común (como en el encabezado), pero normalmente esa información no es crucial o es secundaria para el propio sitio web. A veces el pie de página también se usa con fines de {{Glossary("SEO")}}, ofreciendo enlaces para acceder rápidamente al contenido popular.

Un «sitio web típico» podría estructurarse más o menos así:

![Un ejemplo de estructura de sitio web sencillo con un encabezado principal, un menú de navegación, contenido principal, una barra lateral y un pie de página.](sample-website.png)

> [!NOTE]
> La imagen anterior ilustra las secciones principales de un documento, que puedes definir con HTML. Sin embargo, el _aspecto_ de la página que se muestra aquí (incluidos el diseño, los colores y las fuentes) se consigue aplicando [CSS](/es/docs/Learn_web_development/Core/Styling_basics) al HTML.

## HTML para estructurar el contenido

El ejemplo anterior no es bonito, pero sirve perfectamente para ilustrar el diseño típico de un sitio web. Algunos sitios web tienen más columnas y otros son mucho más complejos, pero te haces una idea. Con el CSS adecuado, podrías usar prácticamente cualquier elemento para envolver las distintas secciones y conseguir el aspecto que quisieras, pero, como vimos antes, tenemos que respetar la semántica y **usar el elemento adecuado para cada tarea**.

Esto se debe a que lo visual no lo cuenta todo. Usamos el color y el tamaño de fuente para atraer la atención de los usuarios videntes hacia las partes más útiles del contenido, como el menú de navegación y los enlaces relacionados, pero ¿qué pasa, por ejemplo, con las personas con discapacidad visual, para quienes conceptos como «rosa» y «fuente grande» quizá no sean muy útiles?

> [!NOTE]
> [Aproximadamente el 8 % de los hombres y el 0,5 % de las mujeres](https://www.color-blindness.com/) tienen daltonismo; o, dicho de otro modo, aproximadamente 1 de cada 12 hombres y 1 de cada 200 mujeres. Las personas ciegas y con discapacidad visual representan aproximadamente entre el 4 y el 5 % de la población mundial (en 2015 había [940 millones de personas con algún grado de pérdida de visión](https://es.wikipedia.org/wiki/Discapacidad_visual), mientras que la población total era de [unos 7500 millones](https://es.wikipedia.org/wiki/Población_mundial)).

En tu código HTML, puedes marcar las secciones de contenido según su _funcionalidad_: puedes usar elementos que representen sin ambigüedad las secciones de contenido descritas antes, y las tecnologías de asistencia, como los lectores de pantalla, pueden reconocer esos elementos y ayudar con tareas como «encontrar la navegación principal» o «encontrar el contenido principal». Como mencionamos antes en el curso, hay varias [consecuencias de no usar la estructura de elementos y la semántica adecuadas para cada tarea](/es/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs#¿por_qué_necesitamos_estructura).

Para implementar este marcado semántico, HTML ofrece etiquetas específicas que puedes usar para representar esas secciones, por ejemplo:

- **encabezado:** {{htmlelement("header")}}.
- **barra de navegación:** {{htmlelement("nav")}}.
- **contenido principal:** {{htmlelement("main")}}, con varias subsecciones de contenido representadas por elementos {{HTMLElement("article")}}, {{htmlelement("section")}} y {{htmlelement("div")}}.
- **barra lateral:** {{htmlelement("aside")}}; a menudo se coloca dentro de {{htmlelement("main")}}.
- **pie de página:** {{htmlelement("footer")}}.

### Explorar el código de nuestro ejemplo

El ejemplo anterior se representa con el siguiente código (también puedes [encontrar el código en nuestro repositorio de GitHub](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/document_and_website_structure/index.html) y [ver el ejemplo en vivo](https://mdn.github.io/learning-area/html/introduction-to-html/document_and_website_structure/)). Nos gustaría que revisaras el listado de abajo para ver qué partes forman cada sección del resultado visual.

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />

    <title>Título de mi página</title>
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Sonsie+One"
      rel="stylesheet" />
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <!-- El encabezado principal que se usa en todas las páginas de nuestro sitio web -->

    <header>
      <h1>Encabezado</h1>
    </header>

    <nav>
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Nuestro equipo</a></li>
        <li><a href="#">Proyectos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>

      <!-- Un formulario de búsqueda: otra forma habitual no lineal
           de navegar por un sitio. -->

      <form>
        <input type="search" name="q" placeholder="Término de búsqueda" />
        <input type="submit" value="¡Ir!" />
      </form>
    </nav>

    <!-- El contenido principal de nuestra página -->
    <main>
      <!-- Un artículo -->
      <article>
        <h2>Encabezado del artículo</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Donec a diam
          lectus. Set sit amet ipsum mauris. Maecenas congue ligula as quam
          viverra nec consectetur ant hendrerit. Donec et mollis dolor. Praesent
          et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt
          congue enim, ut porta lorem lacinia consectetur.
        </p>

        <section>
          <h3>Subsección</h3>

          <p>
            Donec ut librero sed accu vehicula ultricies a non tortor. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Aenean ut
            gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id
            dolor.
          </p>

          <p>
            Pelientesque auctor nisi id magna consequat sagittis. Curabitur
            dapibus, enim sit amet elit pharetra tincidunt feugiat nist
            imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed
            odio eros.
          </p>
        </section>

        <section>
          <h3>Otra subsección</h3>

          <p>
            Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum
            soclis natoque penatibus et manis dis parturient montes, nascetur
            ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at
            sem facilisis semper ac in est.
          </p>

          <p>
            Vivamus fermentum semper porta. Nunc diam velit, adipscing ut
            tristique vitae sagittis vel odio. Maecenas convallis ullamcorper
            ultricied. Curabitur ornare, ligula semper consectetur sagittis,
            nisi diam iaculis velit, is fringille sem nunc vet mi.
          </p>
        </section>
      </article>

      <!-- el contenido de aside también puede anidarse dentro del contenido principal -->
      <aside>
        <h2>Relacionado</h2>

        <ul>
          <li><a href="#">Ay, cómo me gusta estar junto a la playa</a></li>
          <li><a href="#">Ay, cómo me gusta estar junto al mar</a></li>
          <li><a href="#">Aunque en el norte de Inglaterra</a></li>
          <li><a href="#">Nunca deja de llover</a></li>
          <li><a href="#">En fin…</a></li>
        </ul>
      </aside>
    </main>

    <!-- El pie de página que se usa en todas las páginas de nuestro sitio web -->

    <footer>
      <p>©Copyright 2050 de nadie. Todos los derechos invertidos.</p>
    </footer>
  </body>
</html>
```

Tómate un tiempo para revisar el código y entenderlo; los comentarios del código también deberían ayudarte. En este artículo no te pedimos mucho más, porque la clave para entender el diseño de un documento es escribir una estructura HTML sólida y después maquetarla con CSS. Esperaremos a que empieces a estudiar el diseño con CSS como parte del tema de CSS.

## Los elementos de diseño de HTML con más detalle

Conviene entender en detalle el significado general de todos los elementos de sección de HTML; es algo en lo que trabajarás poco a poco a medida que ganes experiencia en el desarrollo web. Puedes encontrar muchos detalles en nuestra [referencia de elementos HTML](/es/docs/Web/HTML/Reference/Elements). Por ahora, estas son las definiciones principales que deberías intentar entender:

- {{HTMLElement('main')}} es para el contenido _exclusivo de esta página._ Usa `<main>` solo _una vez_ por página, y ponlo directamente dentro de {{HTMLElement('body')}}. Lo ideal es que no esté anidado dentro de otros elementos.
- {{HTMLElement('article')}} encierra un bloque de contenido relacionado que tiene sentido por sí solo, sin el resto de la página (por ejemplo, una entrada de blog).
- {{HTMLElement('section')}} es parecido a `<article>`, pero sirve más bien para agrupar una sola parte de la página que constituye una única funcionalidad (como un minimapa o un conjunto de titulares y resúmenes de artículos) o un tema. Se considera una buena práctica empezar cada sección con un [encabezado](/es/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs); ten en cuenta también que puedes dividir los `<article>` en distintos `<section>`, o los `<section>` en distintos `<article>`, según el contexto.
- {{HTMLElement('aside')}} contiene contenido que no está directamente relacionado con el contenido principal, pero que puede aportar información adicional relacionada indirectamente con él (entradas de glosario, biografía del autor, enlaces relacionados, etc.).
- {{HTMLElement('header')}} representa un grupo de contenido introductorio. Si es hijo de {{HTMLElement('body')}}, define el encabezado global de una página web, pero si es hijo de un {{HTMLElement('article')}} o un {{HTMLElement('section')}}, define un encabezado específico para esa sección (procura no confundirlo con los [títulos y encabezados](/es/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#añadir_un_título)).
- {{HTMLElement('nav')}} contiene la funcionalidad de navegación principal de la página. Los enlaces secundarios, etc., no irían en la navegación.
- {{HTMLElement('footer')}} representa un grupo de contenido final de una página.

Puedes hacer clic en cada uno de los elementos anteriores para leer el artículo correspondiente de la sección «Referencia de elementos HTML», que ofrece más detalles sobre cada uno.

### Envoltorios no semánticos

A veces te encontrarás en una situación en la que no encuentras un elemento semántico ideal para agrupar algunos elementos o envolver algún contenido. A veces quizá solo quieras agrupar un conjunto de elementos para modificarlos todos como una sola entidad con algo de {{glossary("CSS")}} o {{glossary("JavaScript")}}. Para casos como estos, HTML ofrece los elementos {{HTMLElement("div")}} y {{HTMLElement("span")}}. Preferiblemente, deberías usarlos con un atributo [`class`](/es/docs/Web/HTML/Reference/Global_attributes/class) adecuado, que les dé algún tipo de etiqueta para poder seleccionarlos fácilmente.

{{HTMLElement("span")}} es un elemento en línea no semántico, que solo deberías usar si no se te ocurre un elemento de texto semántico mejor para envolver tu contenido, o si no quieres añadirle ningún significado concreto. Por ejemplo:

```html
<p>
  El rey volvió borracho a su habitación a la 01:00; la cerveza no le ayudó en
  nada mientras cruzaba la puerta dando tumbos.
  <span class="editor-note">
    [Nota del editor: en este punto de la obra, las luces deben estar bajas].
  </span>
</p>
```

En este caso, la nota del editor solo pretende dar una indicación adicional al director de la obra; no debe tener un significado semántico adicional. Para los usuarios videntes, quizá se usaría CSS para separar un poco la nota del texto principal.

{{HTMLElement("div")}} es un elemento de bloque no semántico, que solo deberías usar si no se te ocurre un elemento de bloque semántico mejor, o si no quieres añadirle ningún significado concreto. Por ejemplo, imagina un widget de carrito de la compra que pudieras abrir en cualquier momento mientras navegas por un sitio de comercio electrónico:

```html-nolint
<div class="shopping-cart">
  <h2>Carrito de la compra</h2>
  <ul>
    <li>
      <p>
        <a href=""><strong>Pendientes de plata</strong></a>: $99.95.
      </p>
      <img src="../products/3333-0985/thumb.png" alt="Pendientes de plata" />
    </li>
    <li>…</li>
  </ul>
  <p>Coste total: $237.89</p>
</div>
```

En realidad no es un `<aside>`, porque no está necesariamente relacionado con el contenido principal de la página (quieres que se pueda ver desde cualquier lugar). Tampoco justifica especialmente usar un `<section>`, porque no forma parte del contenido principal de la página. Así que en este caso un `<div>` está bien. Hemos incluido un encabezado como señal para ayudar a los usuarios de lectores de pantalla a encontrarlo.

> [!WARNING]
> Los `div` son tan cómodos de usar que es fácil abusar de ellos. Como no tienen valor semántico, solo llenan de ruido tu código HTML. Procura usarlos solo cuando no haya una solución semántica mejor e intenta reducir su uso al mínimo; si no, te costará actualizar y mantener tus documentos.

> [!NOTE]
> El tutorial interactivo [Semantic HTML](https://scrimba.com/learn-accessible-web-design-c031/~0b?via=mdn) de Scrimba <sup>[_socio de aprendizaje de MDN_](/es/docs/MDN/Writing_guidelines/Learning_content#enlaces_externos_o_embebidos)</sup> ofrece un repaso útil del marcado semántico y de por qué deberías usarlo, además de un desafío que pone a prueba tu capacidad para mejorar un código HTML con elementos semánticos.

### Saltos de línea y reglas horizontales

Dos elementos que usarás de vez en cuando y que te conviene conocer son {{htmlelement("br")}} y {{htmlelement("hr")}}.

#### \<br>: el elemento de salto de línea

`<br>` crea un salto de línea en un párrafo; es la única forma de forzar una estructura rígida cuando quieres una serie de líneas cortas fijas, como en una dirección postal o un poema. Por ejemplo:

```html
<p>
  Hubo una vez un hombre llamado O'Dell<br />
  al que le encantaba escribir HTML<br />
  pero su estructura era mala y su semántica, triste<br />
  y su marcado no se leía muy bien.
</p>
```

Sin los elementos `<br>`, el párrafo se mostraría en una sola línea larga (como dijimos antes en el curso, [HTML ignora la mayor parte de los espacios en blanco](/es/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#espacios_en_blanco_en_html)); con los elementos `<br>` en el código, el marcado se ve así:

{{EmbedLiveSample('br_el_elemento_de_salto_de_línea', '100%', 150)}}

#### \<hr>: el elemento de cambio temático

Los elementos `<hr>` crean una regla horizontal en el documento que indica un cambio temático en el texto (como un cambio de tema o de escena). Visualmente, solo parece una línea horizontal. Por ejemplo:

```html
<p>
  Los netherbeasts merodeadores acorralaron a Ron. Asustado, pero decidido a
  proteger a sus amigos, levantó su varita y se preparó para la batalla, con la
  esperanza de que su llamada de socorro hubiera llegado a su destino.
</p>
<hr />
<p>
  Mientras tanto, Harry estaba sentado en casa, mirando su liquidación de
  derechos de autor y pensando en cuándo saldría la próxima serie derivada,
  cuando una carta de socorro encantada entró volando por la ventana y cayó en
  su regazo. La leyó aturdido y suspiró: «mejor vuelvo al trabajo», pensó.
</p>
```

Se vería así:

{{EmbedLiveSample('hr_el_elemento_de_cambio_temático', '100%', '185px')}}

## Estructurar un sitio web básico

El siguiente paso después de planificar la estructura de una sola página web es planificar la estructura de todo un sitio web de varias páginas, incluido cómo deben organizarse y enlazarse entre sí para ofrecer la mejor experiencia de usuario posible. Esto se llama {{glossary("Information architecture", "arquitectura de la información")}}.

En un sitio web grande y complejo, este proceso puede requerir mucha planificación, pero para un sitio web básico con unas pocas páginas puede ser un ejercicio rápido y divertido.

El proceso podría ser así:

1. Tendrás algunos elementos comunes a la mayoría de las páginas (si no a todas), como el menú de navegación y el contenido del pie de página. Si tu sitio es de una empresa, por ejemplo, conviene tener tu información de contacto disponible en el pie de página de cada página. Anota lo que quieres que sea común a todas las páginas. Por ejemplo:
   - Encabezado:
     - Título y logotipo
     - Selector de idioma del sitio
   - Menú de navegación
   - Pie de página:
     - Aviso de derechos de autor
     - Enlace a los términos y condiciones, los datos de contacto y la política de accesibilidad

2. A continuación, dibuja un boceto aproximado de cómo quieres que sea la estructura de cada página (podría parecerse a nuestro sitio web sencillo de antes). Anota qué va a ser cada bloque.![Un diagrama sencillo de la estructura de un sitio de ejemplo, con un encabezado, un área de contenido principal, dos barras laterales opcionales y un pie de página](/shared-assets/images/diagrams/learn/structuring-documents/site-structure.svg)
3. Ahora, haz una lluvia de ideas con todo el resto del contenido (el que no es común a todas las páginas) que quieres tener en tu sitio web. Por ejemplo:
   - Vuelos
   - Alojamiento
   - Transporte
   - Qué hacer
   - Ofertas especiales
   - Paquetes vacacionales populares, por ejemplo, sol de invierno, esquí
   - Resultados de búsqueda
   - Opiniones
   - Requisitos de visado y entrada
   - Moneda
   - Idiomas y cultura
   - Comprar vacaciones

4. A continuación, intenta ordenar todos estos elementos de contenido en grupos, para hacerte una idea de qué partes podrían ir juntas en distintas páginas. Es muy parecido a una técnica llamada {{glossary("Card sorting", "clasificación de tarjetas")}}.
   - Búsqueda
     - Vuelos
     - Alojamiento
     - Transporte
     - Qué hacer
   - Ofertas especiales
     - Vacaciones populares
     - Sol de invierno
     - Esquí
   - Resultados de búsqueda
     - Opiniones
     - Información específica de cada país
       - Requisitos de visado y entrada
       - Moneda
       - Idiomas y cultura
   - Comprar vacaciones

5. Ahora intenta esbozar un mapa del sitio aproximado: dibuja una caja por cada página de tu sitio y traza líneas para mostrar el flujo de trabajo típico entre las páginas. La página de inicio probablemente estará arriba o en el centro, y enlazará con la mayoría de las demás, si no con todas. La mayoría de las páginas de un sitio pequeño deberían estar disponibles desde la navegación principal, aunque hay excepciones. Quizá también quieras incluir notas sobre cómo podrían presentarse las cosas.![Un mapa del sitio que muestra la página de inicio, la página de un país, los resultados de búsqueda, la página de ofertas y el flujo de pago y compra](/shared-assets/images/diagrams/learn/structuring-documents/site-map.svg)

Prueba a hacer el ejercicio anterior con un sitio web creado por ti. ¿Sobre qué te gustaría hacer un sitio? Como objetivo opcional, usa los conocimientos de HTML que has adquirido hasta ahora para crear algunas de las páginas del sitio. Puedes usar nuestra [plantilla HTML básica](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) como punto de partida.

## Resumen

A estas alturas, deberías tener una idea más clara de cómo estructurar una página o un sitio web. En el siguiente artículo de este módulo veremos cómo crear hipervínculos, una de las características fundamentales de la web.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Marking_up_a_letter", "Learn_web_development/Core/Structuring_content/Creating_links", "Learn_web_development/Core/Structuring_content")}}
