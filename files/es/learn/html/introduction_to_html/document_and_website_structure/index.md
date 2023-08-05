---
title: Estructura web y documentación
slug: Learn/HTML/Introduction_to_HTML/Document_and_website_structure
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Advanced_text_formatting", "Learn/HTML/Introduction_to_HTML/Debugging_HTML", "Learn/HTML/Introduction_to_HTML")}}

Además de definir partes individuales de tu página (como un párrafo o una imagen), {{Glossary("HTML")}} también dispone de elementos de bloque que se pueden utilizar para estructurar las distintas áreas de tu sito web (tal como el encabezado, el menú de navegación o la parte del contenido principal. En este artículo veras cómo planificar una estructura básica de página web y escribirás el HTML que representa esa estructura.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Estar familiarizado con HTML, cubierto en
        [Empezar con HTML](/es/docs/Learn/HTML/Introduction_to_HTML/Getting_started).
        Aplicación de formato a texto en documentos HTML, según lo expuesto en
        la sección
        [Fundamentos de texto HTML](/es/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals).
        Funcionamiento de los hipervínculos, cubierto en
        [Crear hipervínculos](/es/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks).
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Aprender a estructurar tu documento usando atributos semánticos y
        construir la estructura de una página web sencilla.
      </td>
    </tr>
  </tbody>
</table>

## Partes básicas de un documento

Las páginas web pueden y se deben diferenciar las unas de las otras, pero todas tienden a contener elementos comunes parecidos, a menos que estén destinadas a mostrar un vídeo o un juego a pantalla completa, o que formen parte de un proyecto artístico concreto o, simplemente, que estén mal estructuradas; estos elementos comunes son:

- encabezado:
  - : Normalmente formado por una gran franja que cruza la parte superior de la página con un **gran título**, un logotipo y quizás un lema. Esta parte suele permanecer invariable mientras navegas entre las páginas de un mismo sitio web.
- barra de navegación:
  - : Son los enlaces a las secciones principales del sitio web. Normalmente está formada por un menú con botones, enlaces o pestañas. Al igual que el _encabezado_, este contenido suele permanecer invariable en las diferentes páginas del sitio; tener un menú inconsistente en tu página web conducirá a los usuarios a la confusión y frustración. Muchos diseñadores web consideran que el menú de navegación forma parte del encabezado y que no posee un componente individual, aunque no es necesario que sea así; de hecho, algunos argumentan que tener ambos componentes por separado es mejor por motivos de [accesibilidad](/es/docs/Learn/Accessibility) porque los lectores de pantalla pueden leer mejor ambos elementos si están separados.
- contenido principal:
  - : Es la gran parte central de la página y contiene la mayor parte del contenido particular de una página web concreta; por ejemplo, el video que quieres ver, la narración que quieres leer, el mapa que quieres consultar, los titulares de las noticias, etc. ¡Esta es la parte que definitivamente debe variar mucho de una página a otra de tu sitio web!
- barra lateral:
  - : Suele incluir algún tipo de información adicional, enlaces, citas, publicidad, etc. Normalmente está relacionada con el contenido principal de la página (por ejemplo, en una página de noticias, la barra lateral podría contener la biografía del autor o enlaces a artículos relacionados), pero en otras ocasiones encontraras elementos recurrentes como un menú de navegación secundario.
- pie de página:
  - : Es la parte inferior de la página, que generalmente contiene la letra pequeña, el copyright o la información de contacto. Es el sitio donde se coloca la información común (al igual que en el encabezado), pero esta información no suele ser tan importante o es secundaria con respecto a la página en sí misma. El pie también se suele usar para propósitos {{Glossary("SEO")}}, e incluye enlaces de acceso rápido al contenido más popular.

Una página web «típica» se podría parecer a esta:

![Un ejemplo de estructura de sitio web simple con un encabezado principal, menú de navegación, contenido principal, barra lateral y pie de página.](sample-website.png)

## HTML para dar estructura al contenido

El ejemplo no es muy atractivo, pero puede servir para ilustrar un ejemplo de diseño de una página web típica. Puedes encontrar sitios con más columnas, algunas mucho más complejas, pero esta servirá para hacerte una idea general sobre el tema. Con el CSS adecuado podrás usar muchos más elementos para decorar las distintas secciones y conseguir que queden como deses, pero como se comentó anteriormente, necesitas respetar ciertas normas semánticas, y _utilizar el elemento adecuado para cada tipo de sección_.

La parte visual no lo es todo. Utilizarás diferentes fuentes y colores para llamar la atención de los usuarios sin discapacidad visual de las partes más importantes del contenido, como el menú de navegación y sus enlaces correspondientes, pero ¿qué ocurre con los usuarios con discapacidad visual que no pueden distinguir los colores llamativos o el tamaño grande de las fuentes?

> **Nota:** Los daltónicos representan alrededor del [4% de la población mundial](http://www.color-blindness.com/2006/04/28/colorblind-population/) (aproximadamente 1 de cada 12 hombres y 1 de cada 200 mujeres son daltónicos). Los invidentes y las personas con discapacidad visual representan aproximadamente el 4-5% de la población mundial (en 2012 había [Discapacidad visual](https://es.wikipedia.org/wiki/Discapacidad_visual) 285 millones de personas con alguna de estas características en el mundo, mientras que el total de la población estaba [alrededor de los 7,000 millones](https://es.wikipedia.org/wiki/World_human_population#/media/File:World_population_history.svg).

En tu código HTML puedes crear secciones de contenido basadas en su _funcionalidad_ — puedes usar elementos que representen sin ambigüedad las diferentes secciones de contenido descritas, de forma que las tecnologías de accesibilidad y los lectores de pantalla puedan reconocer esos elementos y asistir en tareas como «encontrar el menú de navegación», o «encontrar el contenido principal». Como se mencionó anteriormente en el curso, hay una serie de [consecuencias por no usar la estructura de elementos y semántica adecuada para hacer el trabajo correctamente](/es/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#Por_qué_necesitamos_estructura).

HTML dispone de etiquetas adecuadas que puedes usar para establecer estas secciones semánticas, por ejemplo:

- **encabezado**: {{HTMLElement("header")}}.
- **menú de navegación** : {{HTMLElement("nav")}}.
- **contenido principal**: {{HTMLElement("main")}}, con varias subsecciones (además de la barra lateral) representadas por los elementos {{HTMLElement("article")}}, {{HTMLElement("section")}}, y {{HTMLElement("div")}}.
- **barra lateral**: {{HTMLElement("aside")}}; a menudo colocada dentro de {{HTMLElement("main")}}.
- **pie de página**: {{HTMLElement("footer")}}.

### Aprendizaje activo: El código del ejemplo anterior

El ejemplo de página web que se muestra arriba se consigue a partir del siguiente código (disponible en el [repositorio Github](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/document_and_website_structure/index.html)). Observa el ejemplo anterior, y a continuación échale un vistazo al código de abajo para identificar las secciones marcadas en el ejemplo.

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />

    <title>El título de mi página</title>
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Sonsie+One"
      rel="stylesheet"
      type="text/css" />
    <link rel="stylesheet" href="style.css" />

    <!-- las tres siguientes líneas son un truco para obtener elementos semánticos de HTML5 que funcionan en versiones de Internet Explorer antiguas -->
    <!--[if lt IE 9]>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script>
    <![endif]-->
  </head>

  <body>
    <!-- Aquí empieza el encabezado principal que se mantendrá en todas las páginas del sitio web -->

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

      <!-- Un formulario de búsqueda es una forma no-lineal de hacer búsquedas en un sitio web. -->

      <form>
        <input type="search" name="q" placeholder="Buscar" />
        <input type="submit" value="¡Vamos!" />
      </form>
    </nav>

    <!-- Aquí está el contenido principal de nuestra página -->
    <main>
      <!-- Contiene un artículo -->
      <article>
        <h2>Título del artículo</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Donec a diam
          lectus. Set sit amet ipsum mauris. Maecenas congue ligula as quam
          viverra nec consectetur ant hendrerit. Donec et mollis dolor. Praesent
          et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt
          congue enim, ut porta lorem lacinia consectetur.
        </p>

        <h3>Subsección</h3>

        <p>
          Donec ut librero sed accu vehicula ultricies a non tortor. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Aenean ut gravida lorem.
          Ut turpis felis, pulvinar a semper sed, adipiscing id dolor.
        </p>

        <p>
          Pelientesque auctor nisi id magna consequat sagittis. Curabitur
          dapibus, enim sit amet elit pharetra tincidunt feugiat nist imperdiet.
          Ut convallis libero in urna ultrices accumsan. Donec sed odio eros.
        </p>

        <h3>Otra subsección</h3>

        <p>
          Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum
          soclis natoque penatibus et manis dis parturient montes, nascetur
          ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem
          facilisis semper ac in est.
        </p>

        <p>
          Vivamus fermentum semper porta. Nunc diam velit, adipscing ut
          tristique vitae sagittis vel odio. Maecenas convallis ullamcorper
          ultricied. Curabitur ornare, ligula semper consectetur sagittis, nisi
          diam iaculis velit, is fringille sem nunc vet mi.
        </p>
      </article>

      <!-- el contenido aparte también se puede anidar dentro del contenido principal -->
      <aside>
        <h2>Relacionado</h2>

        <ul>
          <li><a href="#">Oh, me gusta estar junto al mar</a></li>
          <li><a href="#">Oh, me gusta estar junto al mar</a></li>
          <li><a href="#">Aunque en el norte de Inglaterra</a></li>
          <li><a href="#">Nunca deja de llover</a></li>
          <li><a href="#">Oh, bueno...</a></li>
        </ul>
      </aside>
    </main>

    <!-- Y aquí está nuestro pie de página principal que se utiliza en todas las páginas de nuestro sitio web -->

    <footer>
      <p>©Copyright 2050 de nadie. Todos los derechos revertidos.</p>
    </footer>
  </body>
</html>
```

Tómate tu tiempo para revisar el código y comprenderlo — Los comentarios en el código también te ayudarán a entenderlo. No te pedimos que hagas mucho más en este artículo, porque la clave para entender el diseño del documento es escribir una estructura HTML conocida y posteriormente desarrollar su apariencia con CSS. Estudiaremos el diseño CSS como parte del tema CSS.

## Elementos de diseño HTML en detalle

Es bueno entender el significado global de todos los elementos definitorios de las secciones HTML en detalle; es algo en que trabajarás gradualmente a medida que comiences a tener más experiencia en el desarrollo web. En el enlace [referencia de elementos HTML](/es/docs/Web/HTML/Element) podemos entrar en un gran nivel de detalle. Por el momento, estas son las definiciones principales que deberíamos tratar de entender:

- {{HTMLElement('main')}} encierra el contenido particular a esta página. Utilizaremos `<main>` solamente una vez para cada página y lo situaremos directamente dentro del elemento {{HTMLElement('body')}}. Es mejor que no lo anidemos en otros elementos.
- {{HTMLElement('article')}} encuadra un bloque de contenido que tiene sentido por sí mismo aparte del resto de la página (por ejemplo una entrada en un blog).
- {{HTMLElement('section')}} es parecido al elemento `<article>`, pero se usa más para agrupar cada parte de la página que, por su funcionalidad, constituye una sección en sí misma (por ejemplo un minimapa o un conjunto de titulares y resúmenes). Se considera una buena práctica comenzar cada una de estas secciones con un título de encabezado ([heading](/es/Learn/HTML/Howto/Set_up_a_proper_title_hierarchy)); observa que podemos subdividir artículos (`<article>`) en distintas secciones (`<section>`), o también secciones en distintos artículos, dependiendo del contexto.
- {{HTMLElement('aside')}} incluye contenido que no está directamente relacionado con el contenido principal, pero que puede aportar información adicional relacionada indirectamente con él (resúmenes, biografías del autor, enlaces relacionados, etc.).
- {{HTMLElement('header')}} representa un grupo de contenido introductorio. Si este es «_hijo_» de un elemento {{HTMLElement('body')}}, se convertirá en el **encabezado** principal del sitio web, pero si es hijo de un elemento {{HTMLElement('article')}} o un elemento {{HTMLElement('section')}}, entonces simplemente será el **encabezado** particular de cada sección (por favor, no lo confundas con [títulos y encabezados](/es/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#Añadir_un_título)).
- {{HTMLElement('nav')}} contiene la funcionalidad de navegación principal de la página. Los enlaces secundarios, etc., no entrarán en la navegación.
- {{HTMLElement('footer')}} representa un grupo de contenido al final de una página.

### Envolturas no semánticas

A veces hay situaciones en las que no encuentras un elemento semántico adecuado para agrupar ciertos elementos o englobar cierto contenido. Podrías querer agrupar ciertos elementos para referirte a ellos como una entidad que comparta cierto {{Glossary("CSS")}} o {{Glossary("JavaScript")}}. Para casos como esos, HTML dispone del elemento {{HTMLElement("div")}} y del elemento {{HTMLElement("span")}}. Preferentemente estos elementos se deberán utilizar con sus atributos ([`class`](/es/docs/Web/HTML/Global_attributes#class)), para conferirles algún tipo de etiquetado que permita determinarlos con facilidad.

{{HTMLElement("span")}} es un elemento no-semántico que se utiliza en el interior de una línea. Se utiliza cuando no se nos ocurre el uso de ningún otro elemento semántico de texto en el que incluir el contenido, o si no se desea añadir ningún significado específico. Por ejemplo:

```html
<p>
  El rey volvió ebrio a su habitación alrededor de la 01:00, y sin duda la
  cerveza no le ayudaba cuando cruzó tambaleante la puerta
  <span class="editor-note"
    >[nota del editor: en este instante de la representación, deberían atenuarse
    las luces]</span
  >.
</p>
```

En este caso, la nota del editor solo proporciona información extra para el director de la obra; se supone que estos elementos no incluyen contenido extra importante. Para los usuarios sin discapacidad visual, quizás debamos usar CSS para diferenciar sutilmente estas notas del texto principal.

{{HTMLElement("div")}} es un elemento de bloque no-semántico; lo utilizaras cuando no se te ocurra el uso de otro elemento semántico mejor, o si no deseas añadir ningún significado concreto. Por ejemplo, imagina un carrito de compras que puedes pulsar en cualquier momento durante tu estancia en una tienda virtual:

```html
<div class="shopping-cart">
  <h2>Carrito de compras</h2>
  <ul>
    <li>
      <p>
        <a href=""><strong>Pendientes de plata</strong></a
        >: $99.95.
      </p>
      <img src="../products/3333-0985/" alt="Pendientes de plata" />
    </li>
    <li>...</li>
  </ul>
  <p>Importe total: $237.89</p>
</div>
```

Este no es un elemento lateral (`<aside>`) porque no necesariamente está relacionado con el contenido principal de la página (en realidad quieres que se pueda ver desde cualquier página). Ni siquiera se puede incluir en una sección (`<section>`) porque su contenido no forma parte del contenido principal de la página. Por lo tanto, un elemento `<div>` es el adecuado en este caso. Hemos incluido un **encabezado** para indicar a los lectores de pantalla donde van a encontrarlo.

> **Advertencia:** Los elementos `div` son tan prácticos y simples que es fácil usarlos en exceso. Como no conllevan valor semántico, enmarañan el código HTML. Debemos tener cuidado de usarlos solo cuando no halles una solución mejor y reducir su uso al mínimo, porque de otro modo complicarás el mantenimiento y actualización de los documentos.

### Saltos de línea y líneas horizontales

Dos elementos que debes conocer y utilizarás ocasionalmente son {{HTMLElement("br")}} y {{HTMLElement("hr")}}:

El elemento {{HTMLElement("br")}} genera un salto de línea en un párrafo; es la única manera de representar series de líneas cortas, como una dirección postal o un poema. Por ejemplo:

```html
<p>
  Había una vez un hombre llamado O'Dell<br />
  A quién le encantaba escribir HTML<br />
  Pero su estructura era mala, su semántica era triste<br />
  y su marcado no se interpretó muy bien.
</p>
```

Sin el elemento {{HTMLElement("br")}}, todo el párrafo se habría presentado como una sola línea larga (como ya hemos dicho con anterioridad en este curso, [HTML ignora la mayoría del espacio en blanco](/es/docs/Learn/HTML/Introduction_to_HTML/Getting_started#Los_espacios_en_blanco_en_HTML)); con estos elementos {{HTMLElement("br")}} en el código, las líneas quedan:

{{EmbedLiveSample('line-break-live-sample', '100%', '125px', '', '', 'hide-codepen-jsfiddle')}}

## Ejemplo

Los elementos {{HTMLElement("hr")}} generan una regla horizontal en el documento que denota un cambio en la temática del texto (como un cambio de tema o de escena). Visualmente tiene el aspecto de una línea horizontal. Por ejemplo:

```html
<p>
  Ron fue acorralado en una esquina por las bestias abisales que merodeaban.
  Asustado, pero decidido a proteger a sus amigos, levantó su varita y se
  preparó para la batalla, con la esperanza de que su llamada de socorro hubiera
  llegado a alguien.
</p>
<hr />
<p>
  Mientras tanto, Harry estaba sentado en su casa, mirando su declaración de
  regalías y pensando en cuándo saldría la próxima serie derivada, cuando de
  pronto voló por su ventana una carta de socorro y aterrizó en su regazo. La
  leyó vagamente y suspiró; "Será mejor que vuelva al trabajo entonces",
  reflexionó.
</p>
```

Quedará así:

{{EmbedLiveSample('Ejemplo_en_vivo_línea_horizontal', '100%', '185px', '', '', 'hide-codepen-jsfiddle')}}

## Planificación de una página web sencilla

Una vez has planificado el contenido de una página web sencilla, el paso lógico siguiente es intentar trabajar en el contenido para todo el sitio web, las páginas que necesitas y la forma de disponer las conexiones entre ellas para producir la mejor experiencia de usuario a los visitantes. Esto se conoce con el nombre de ({{Glossary("Arquitectura de la información")}}). Una web grande y compleja necesitará mucha planificación, pero para una web sencilla compuesta por unas cuantas páginas, el proceso puede ser sencillo, ¡y divertido!.

1. Ten en cuenta que habrá varios elementos comunes en muchas (si no en todas las) páginas, tal como el menú de navegación y el contenido del pie de página. Si la web está dedicada a un negocio, por ejemplo, sería una buena idea disponer de la información de contacto en el pie de página en todas las páginas. Anota lo que deseas tener en común en cada página.

   ![las características comunes del sitio de viajes para ir en cada página: título y logotipo, contacto, derechos de autor, términos y condiciones, selección de idioma, política de accesibilidad](common-features.png)

2. A continuación, esboza un esquema sencillo de cuál podría ser la estructura deseada de la apariencia de cada página (podría ser algo tan sencillo como el siguiente dibujo). Anota los bloques principales.

   ![Un diagrama simple de una estructura de sitio de ejemplo, con un encabezado, un área de contenido principal, dos barras laterales opcionales y un pie de página](site-structure.png)

3. Ahora, elabora una lista completa con todo el resto del contenido de tu sitio web que no sea común a todas las páginas.

   ![Una larga lista de todas las funciones que podrías incluir en tu sitio de viajes, desde buscar, hasta ofertas especiales e información específica del país](feature-list.png)

4. A continuación, trata de ordenar todo este contenido por grupos, para hacerte una idea de las partes que podrían ir juntas en las diferentes páginas. Esto es muy similar a una técnica llamada {{Glossary("Clasificación de tarjetas")}}.

   ![Los elementos que deberían aparecer en un sitio de vacaciones ordenados en 5 categorías: Búsqueda, Especiales, Información específica del país, Resultados de búsqueda y Compra cosas](card-sorting.png)

5. Ahora trata de esquematizar un mapa de tu sitio — dibuja un globo para cada página de tu sitio web y dibuja líneas que identifiquen el flujo de datos entre las distintas páginas. La página de inicio normalmente estará ubicada en el centro y enlazará con el resto de páginas; la mayoría de las páginas de una web sencilla estarán enlazadas desde el menú de navegación principal, aunque puede haber excepciones. También puedes incluir notas sobre cómo se pueden presentar las cosas.

   ![Un mapa del sitio que muestra la página de inicio, la página del país, los resultados de búsqueda, la página de ofertas especiales, la página de pago y la página de compra](site-map.png)

### Aprendizaje activo: Creación de un mapa del sitio web

Intenta llevar a cabo el ejercicio anterior para crear tu propia página web. ¿Qué contenido le vas a dar a tu sitio web?

> **Nota:** Guarda este esquema para utilizarlo más adelante.

## ¡Pon a prueba tus habilidades!

Has llegado al final de este artículo, pero ¿puedes recordar la información más importante? Puedes encontrar una evaluación detallada que pruebe estas habilidades al final del módulo; consulta [Estructurar el contenido de una página](/es/docs/Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content). ¡Recuerda leer primero el siguiente artículo de la serie y no solo saltarlo!

## Resumen

En este punto, deberías tener una mejor idea sobre cómo estructurar una página/sitio web. En el último artículo de este módulo, se explica cómo depurar HTML.

## Ve también

- [Uso de secciones y esquemas HTML](/es/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines): Guía avanzada de elementos semánticos HTML5 y el algoritmo de esquema HTML5.

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Advanced_text_formatting", "Learn/HTML/Introduction_to_HTML/Debugging_HTML", "Learn/HTML/Introduction_to_HTML")}}
