---
title: "HTML: Crear el contenido"
short-title: Crear el contenido
slug: Learn_web_development/Getting_started/Your_first_website/Creating_the_content
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like", "Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website")}}

HTML (**H**yper**T**ext **M**arkup **L**anguage, lenguaje de marcado de hipertexto) es el código que se usa para estructurar una página web y su contenido. Este artículo ofrece una comprensión básica de HTML y de su funcionamiento, y te muestra cómo crear el contenido básico de tu primer sitio web.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Familiaridad básica con el sistema operativo de tu computadora, el software básico que usarás para crear un sitio web y los sistemas de archivos.
      </td>
    </tr>
    <tr>
      <th scope="row">Resultados del aprendizaje:</th>
      <td>
        <ul>
          <li>El propósito y la función de HTML.</li>
          <li>Las partes básicas de la sintaxis de HTML: etiquetas de apertura y de cierre, elementos, atributos, head y body.</li>
          <li>Elementos HTML comunes, como párrafos, encabezados, imágenes, listas y enlaces.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Entonces, ¿qué es HTML?

HTML es un _lenguaje de marcado_ formado por una serie de **{{Glossary("element", "elementos")}}** que se usan para envolver (o encerrar) el contenido de texto, con el fin de definir su estructura y hacer que se comporte de cierta manera.

Veamos un ejemplo: al mostrarse en una página web, el siguiente contenido aparecerá todo en la misma línea, porque no tiene ningún tipo de estructura:

```plain
Instrucciones para la vida:
Comer
Dormir
Repetir
```

Si envolvemos este contenido con los siguientes elementos HTML, podemos convertir esa única línea en un párrafo ({{htmlelement("p")}}) y tres viñetas ({{htmlelement("li")}}):

```html live-sample___basic-html
<p>Instrucciones para la vida:</p>

<ul>
  <li>Comer</li>
  <li>Dormir</li>
  <li>Repetir</li>
</ul>
```

Este HTML se muestra así en un navegador web:

{{EmbedLiveSample("basic-html", "100%", "140px")}}

Además de estructurar texto, HTML tiene muchos otros usos: hacer que un texto o una imagen enlacen a otras páginas web, incrustar imágenes o videos, crear tablas de datos, etc.

> [!NOTE]
> [HTML tags](https://scrimba.com/frontend-path-c0j/~0g?via=mdn) de Scrimba <sup>[_socio de aprendizaje de MDN_](/es/docs/MDN/Writing_guidelines/Learning_content#enlaces_externos_o_embebidos)</sup> es una lección interactiva para practicar los conceptos básicos de HTML, incluidos los encabezados.

## Crear tu primer documento HTML

Veamos cómo se combinan los distintos elementos para formar una página HTML. En esta sección, crearás un archivo HTML básico y verás de qué partes se compone.

1. Dentro de tu carpeta `web-projects`, crea otra carpeta nueva llamada `first-website`.
2. Dentro de `first-website`, crea un archivo nuevo llamado `index.html` e inserta en él el siguiente código, exactamente como se muestra:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Mi página de prueba</title>
  </head>
  <body>
    <img src="" alt="Mi imagen de prueba" />
  </body>
</html>
```

Aquí tenemos lo siguiente:

- `<!doctype html>`: el [doctype](/es/docs/Glossary/Doctype) es un preámbulo obligatorio. Hace mucho tiempo, cuando HTML era joven (hacia 1991/92), los doctypes servían como enlaces a un conjunto de reglas que la página HTML debía seguir para considerarse HTML correcto, lo que podía implicar la comprobación automática de errores y otras cosas útiles. Sin embargo, hoy en día no hacen mucho y básicamente solo se necesitan para asegurarse de que el documento se comporte correctamente. Por ahora, eso es todo lo que necesitas saber.
- `<html></html>`: el elemento {{htmlelement("html")}} envuelve todo el contenido de la página y a veces se le llama **elemento raíz**. También incluye el [atributo](/es/docs/Glossary/Attribute) `lang`, que establece el idioma principal del documento.
- `<head></head>`: el elemento {{htmlelement("head")}} actúa como contenedor de todo lo que quieres incluir en la página HTML que _no_ es el contenido que muestras a quienes visitan tu página. Esto incluye cosas como las {{Glossary("keyword", "palabras clave")}} y la descripción de la página que quieres que aparezcan en los resultados de búsqueda, el {{glossary("CSS")}} para dar estilo al contenido, las declaraciones del conjunto de caracteres, etc.
- `<meta charset="utf-8">`: este elemento establece que el documento debe usar el conjunto de caracteres [UTF-8](/es/docs/Glossary/UTF-8), que incluye la mayoría de los caracteres de la gran mayoría de los idiomas escritos. Básicamente, así puede manejar cualquier contenido de texto que le pongas. No hay ningún motivo para no establecerlo, y puede ayudar a evitar algunos problemas más adelante.
- `<meta name="viewport" content="width=device-width">`: este [elemento viewport](/es/docs/Web/CSS/Guides/CSSOM_view/Viewport_concepts#mobile_viewports) garantiza que la página se muestre con el ancho del viewport del navegador, lo que evita que los navegadores móviles muestren las páginas más anchas que el viewport y luego las reduzcan.
- `<title></title>`: el elemento {{htmlelement("title")}} establece el título de tu página, que es el que aparece en la pestaña del navegador donde se carga la página. También se usa para describir la página cuando la guardas en marcadores o favoritos.
- `<body></body>`: el elemento {{htmlelement("body")}} contiene _todo_ el contenido que quieres mostrar a los usuarios cuando visitan tu página, ya sea texto, imágenes, videos, juegos, pistas de audio reproducibles o cualquier otra cosa. Por ahora solo contiene un elemento `<img>`, pero más adelante agregaremos más contenido.

> [!NOTE]
> La mayoría de los elementos HTML constan de una **etiqueta de apertura** (por ejemplo, `<body>`), seguida del contenido del elemento y de una **etiqueta de cierre** (por ejemplo, `</body>`). Algunos elementos HTML también tienen **atributos**, que contienen ajustes o información adicional sobre el elemento; fíjate, por ejemplo, en `charset`, `name` y `src` en nuestro código de ejemplo.

## Incrustar imágenes

Centremos ahora la atención en el elemento {{htmlelement("img")}}:

```html
<img src="" alt="Mi imagen de prueba" />
```

Este elemento incrusta una imagen en nuestra página, en la posición en la que aparece. Lo hace mediante el atributo `src` (source, fuente), que contiene la ruta al archivo de imagen que queremos incrustar.

También hemos incluido un atributo `alt` (alternativo). En el [atributo `alt`](/es/docs/Web/HTML/Reference/Elements/img#creación_de_descripciones_alternativas_significativas) especificas un texto descriptivo para los usuarios que no pueden ver la imagen, posiblemente por los siguientes motivos:

1. Tienen una discapacidad visual. Los usuarios con una discapacidad visual importante suelen usar herramientas llamadas lectores de pantalla, que les leen en voz alta el texto alternativo.
2. Algo salió mal y la imagen no se muestra. Si el atributo `src` no contiene una ruta válida a una imagen, se muestra en su lugar el texto alternativo:

   ![Las palabras: my test image](alt-text-example.png)

El texto alternativo que escribas debe darle a quien lo lee suficiente información para hacerse una buena idea de lo que transmite la imagen. En este ejemplo, nuestro texto actual, «Mi imagen de prueba», no es bueno, porque no transmite información descriptiva sobre la imagen. Una alternativa mucho mejor para nuestro logotipo de Firefox sería «El logotipo de Firefox: un zorro en llamas que rodea la Tierra».

> [!NOTE]
> Los elementos como `<img>` no tienen contenido ni etiqueta de cierre, por lo que se llaman elementos **vacíos** (o **{{glossary("void element", "void")}}**). A veces se escriben con una **barra final** al final de su única etiqueta (`<img />`), pero es opcional.

Ahora hagamos que se muestre tu imagen.

1. Dentro de la carpeta `first-website`, crea una carpeta nueva llamada `images` y coloca en ella la imagen que elegiste en el artículo anterior.
2. En el valor del atributo `src` de la etiqueta `<img>`, escribe la ruta a tu imagen. Está dentro de una carpeta llamada `images`, que está en el mismo directorio que tu archivo `index.html`, así que la ruta será `images/` más el nombre de tu imagen. Por ejemplo, si tu imagen se llama `firefox-icon.png`, el atributo `src` quedaría así: `src="images/firefox-icon.png"`.
3. Reemplaza el valor del atributo `alt` (`Mi imagen de prueba`) por un texto que describa mejor tu imagen.
4. Abre tu archivo `index.html` en un navegador web. Deberías ver tu imagen. Si no es así, compara tu elemento `<img>` con nuestro código; asegúrate de que no le falte nada de la sintaxis, como las comillas. Comprueba que el nombre del archivo de imagen sea correcto.

Si la imagen es muy grande y no cabe en la pantalla, no te preocupes. Solucionaremos este problema en el próximo artículo.

> [!NOTE]
> Descubre más sobre cómo usar el atributo `alt` en las imágenes en distintas situaciones en nuestro [tutorial de multimedia accesible](/es/docs/Learn_web_development/Core/Accessibility/Multimedia) y en [An alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/).

## Marcar texto

En esta sección verás algunos elementos HTML esenciales que usarás para marcar texto.

> [!NOTE]
> [The basics of semantic HTML](https://scrimba.com/the-frontend-developer-career-path-c0j/~0xid?via=mdn) de Scrimba <sup>[_socio de aprendizaje de MDN_](/es/docs/MDN/Writing_guidelines/Learning_content#enlaces_externos_o_embebidos)</sup> es una lección interactiva que ofrece una descripción útil de HTML, con especial énfasis en por qué es importante su aspecto _semántico_.

### Encabezados

Los elementos de encabezado te permiten indicar que ciertas partes de tu contenido son encabezados o subencabezados. Del mismo modo que un libro tiene un título principal, títulos de capítulos y subtítulos, un documento HTML también puede tenerlos. HTML tiene 6 niveles de encabezado, {{htmlelement("Heading_Elements", "&lt;h1&gt;–&lt;h6&gt;")}}, aunque normalmente solo usarás de 3 a 4 como máximo:

```html
<!-- 4 niveles de encabezado: -->
<h1>Mi título principal</h1>
<h2>Mi encabezado de nivel superior</h2>
<h3>Mi subencabezado</h3>
<h4>Mi sub-subencabezado</h4>
```

> [!NOTE]
> Todo lo que está en HTML entre `<!--` y `-->` es un **comentario HTML**. El navegador ignora los comentarios al mostrar el código. Es decir, no son visibles en la página, solo en el código. Los comentarios HTML sirven para agregar notas sobre tu código o tu lógica, que pueden ser útiles para otras personas que trabajen en el mismo código, o para ti, si vuelves a él al cabo de 6 meses y no recuerdas lo que hiciste.

Agrega el título de tu página a la página HTML justo encima de tu elemento {{htmlelement("img")}}, dentro de las etiquetas `<h1> ... </h1>`. Guarda el archivo y ábrelo en un navegador para ver el resultado.

### Párrafos

Los elementos de párrafo {{htmlelement("p")}} sirven para contener párrafos de texto; los usarás a menudo al marcar contenido de texto normal:

```html
<p>Este es un único párrafo</p>
```

Agrega el texto de ejemplo del artículo anterior en uno o varios párrafos, justo debajo de tu elemento {{htmlelement("img")}}. Guárdalo y mira tu página en un navegador.

### Listas

Gran parte del contenido de la web son listas, y HTML tiene elementos especiales para ellas. El marcado de una lista siempre consta de al menos 2 elementos. Los tipos de lista más comunes son las listas ordenadas y las no ordenadas:

1. Las **listas no ordenadas** son para listas en las que el orden de los elementos no importa, como una lista de la compra. Se envuelven en un elemento {{htmlelement("ul")}}.
2. Las **listas ordenadas** son para listas en las que el orden de los elementos sí importa, como los pasos de una receta de cocina. Se envuelven en un elemento {{htmlelement("ol")}}.

Cada elemento de la lista se coloca dentro de un elemento {{htmlelement("li")}} (elemento de lista).

Por ejemplo, si quisiéramos convertir en una lista parte del siguiente fragmento de párrafo:

```html
<p>
  En Mozilla, somos una comunidad global de tecnólogos, pensadores y creadores
  que trabajan juntos…
</p>
```

Podríamos modificar el marcado así:

```html
<p>En Mozilla, somos una comunidad global de</p>

<ul>
  <li>tecnólogos</li>
  <li>pensadores</li>
  <li>creadores</li>
</ul>

<p>que trabajan juntos…</p>
```

Prueba a agregar una lista ordenada o no ordenada a tu página de ejemplo y mira el resultado en un navegador.

## Crear enlaces

Los enlaces son muy importantes: ¡son lo que hace que la web sea una red! Para agregar un enlace, tenemos que usar un elemento {{htmlelement("a")}}; «a» es la abreviatura de «anchor» (ancla). Para convertir en enlace un texto de tu párrafo, sigue estos pasos:

1. Elige un texto. Nosotros elegimos el texto «Manifiesto de Mozilla».
2. Envuelve el texto en un elemento {{htmlelement("a")}}, como se muestra a continuación:

   ```html
   <a>Manifiesto de Mozilla</a>
   ```

3. Dale al elemento {{htmlelement("a")}} un atributo `href`, como se muestra a continuación:

   ```html
   <a href="">Manifiesto de Mozilla</a>
   ```

4. Rellena el valor de este atributo con la dirección web a la que quieres que apunte el enlace:

   ```html
   <a href="https://www.mozilla.org/en-US/about/manifesto/">
     Manifiesto de Mozilla
   </a>
   ```

Puedes obtener resultados inesperados si omites la parte `https://` o `http://`, llamada _protocolo_, al principio de la dirección web. Después de crear un enlace, haz clic en él para asegurarte de que te lleva adonde querías.

> [!NOTE]
> Al principio, `href` puede parecer un nombre de atributo bastante extraño. Significa _**h**ypertext **ref**erence_ (referencia de hipertexto).

Agrega ahora un enlace a tu página, si todavía no lo hiciste.

## Conclusión

Si seguiste todas las instrucciones de este artículo, deberías terminar con una página como la de abajo (también puedes [verla aquí](https://mdn.github.io/beginner-html-site/)):

![Captura de pantalla de una página web que muestra un logotipo de Firefox, un encabezado que dice Mozilla is cool y dos párrafos de texto de relleno](finished-test-page-small.png)

Si te atascas, siempre puedes comparar tu trabajo con nuestro [código de ejemplo terminado](https://github.com/mdn/beginner-html-site/blob/main/index.html) en GitHub.

Aquí solo hemos arañado la superficie de HTML. Más adelante en el curso aprenderás mucho más en nuestro módulo principal [Estructurar contenido con HTML](/es/docs/Learn_web_development/Core/Structuring_content).

## Véase también

- [Learn HTML and CSS](https://scrimba.com/learn-html-and-css-c0p?via=mdn), Scrimba <sup>[_socio de aprendizaje de MDN_](/es/docs/MDN/Writing_guidelines/Learning_content#enlaces_externos_o_embebidos)</sup>
  - : El curso _Learn HTML and CSS_ de [Scrimba](https://scrimba.com?via=mdn) te enseña HTML y CSS mediante la creación y publicación de cinco proyectos geniales, con lecciones y desafíos interactivos y divertidos impartidos por profesores expertos.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like", "Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website")}}
