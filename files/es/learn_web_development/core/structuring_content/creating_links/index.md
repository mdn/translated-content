---
title: Crear enlaces
slug: Learn_web_development/Core/Structuring_content/Creating_links
l10n:
  sourceCommit: 0d59135676db5a372b4dd692f0686e6bdfc13b51
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_documents", "Learn_web_development/Core/Structuring_content/Test_your_skills/Links", "Learn_web_development/Core/Structuring_content")}}

Los enlaces (también llamados hipervínculos) son muy importantes: son lo que hace que la web sea _una red_.
Este artículo muestra la sintaxis necesaria para crear un enlace y explica las buenas prácticas para los enlaces.

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
          <li>Entender por qué los enlaces son la característica fundamental de la web. Sin enlaces no hay web.</li>
          <li>El atributo <code>href</code>.</li>
          <li>Las rutas absolutas y relativas, y cuándo usarlas.</li>
          <li>La sintaxis de las rutas en detalle: barras, punto simple y doble punto.</li>
          <li>Los estados de los enlaces y por qué son importantes: <code>:hover</code>, <code>:focus</code>, <code>:visited</code> y <code>:active</code>.</li>
          <li>Los enlaces en línea y de bloque.</li>
          <li>Entender las ventajas de escribir un buen texto de enlace, como una mejor accesibilidad para quienes usan lectores de pantalla y posibles efectos positivos en el SEO.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## ¿Qué es un hipervínculo?

Los hipervínculos son elementos de un documento HTML que, al hacer clic en ellos o activarlos de otra forma, hacen que el navegador vaya a otros documentos o recursos, a veces a partes concretas de un documento.
Los hipervínculos son una de las innovaciones más apasionantes que ofrece la web.
Han formado parte de la web desde el principio, y son lo que hace que la web sea _una red_.
Cada recurso de la web tiene una dirección, conocida como {{glossary("URL")}} (Uniform Resource Locator, localizador uniforme de recursos), a la que apuntan los hipervínculos.

> [!NOTE]
> Una URL puede apuntar a archivos HTML, archivos de texto, imágenes, documentos de texto, archivos de video y audio, o cualquier otra cosa que exista en la web.
> Si el navegador web no sabe cómo mostrar o manejar el archivo, te preguntará si quieres abrirlo (en cuyo caso la tarea de abrirlo o manejarlo pasa a una aplicación nativa adecuada del dispositivo) o descargarlo (en cuyo caso puedes intentar ocuparte de él más tarde).

Por ejemplo, la página de inicio de la BBC contiene muchos enlaces que apuntan no solo a muchas noticias, sino también a distintas áreas del sitio (funciones de navegación), a páginas de inicio de sesión y registro (herramientas de usuario), etc.

![Portada de bbc.co.uk, con muchas noticias y un menú de navegación](updated-bbc-website.png)

## Anatomía de un enlace

Un enlace básico se crea envolviendo el texto u otro contenido dentro de un elemento {{htmlelement("a")}} y usando el atributo [`href`](/es/docs/Web/HTML/Reference/Elements/a#href), también llamado **referencia de hipertexto** o **destino**, que contiene la dirección web.

```html
<p>
  Estoy creando un enlace a
  <a href="https://www.mozilla.org/en-US/">la página de inicio de Mozilla</a>.
</p>
```

Esto nos da el siguiente resultado:

Estoy creando un enlace a [la página de inicio de Mozilla](https://www.mozilla.org/en-US/).

> [!NOTE]
> El scrim [Anchor tags](https://scrimba.com/learn-html-and-css-c0p/~0a?via=mdn) de Scrimba <sup>[_socio de aprendizaje de MDN_](/es/docs/MDN/Writing_guidelines/Learning_content#enlaces_externos_o_embebidos)</sup> ofrece una demostración interactiva de cómo crear enlaces con HTML, además de un desafío para que crees tus propios enlaces.

### Enlaces de bloque

Como se mencionó antes, casi cualquier contenido se puede convertir en un enlace, incluso los {{Glossary("Block/CSS", "elementos de bloque")}}.
Si quieres convertir un elemento de encabezado en un enlace, envuélvelo en un elemento de ancla (`<a>`), como se muestra en el siguiente fragmento de código:

```html
<a href="https://developer.mozilla.org/en-US/">
  <h1>MDN Web Docs</h1>
</a>
<p>
  Documentando las tecnologías web, como CSS, HTML y JavaScript, desde 2005.
</p>
```

Esto convierte el encabezado en un enlace:
{{EmbedLiveSample('enlaces_de_bloque', '100%', 150)}}

### Enlaces con imágenes

Para convertir una imagen en un enlace, envuelve el elemento {{htmlelement("img")}} con un elemento {{htmlelement("a")}}. El ejemplo de abajo usa una ruta relativa para hacer referencia a un archivo de imagen SVG almacenado localmente.

```css hidden
img {
  height: 100px;
  width: 150px;
  border: 1px solid gray;
}
```

```html
<a href="https://developer.mozilla.org/en-US/">
  <img src="mdn_logo.svg" alt="MDN Web Docs" />
</a>
```

Esto convierte el logotipo de MDN en un enlace:
{{EmbedLiveSample('enlaces_con_imágenes', '100%', 150)}}

> [!NOTE]
> En un artículo posterior aprenderás más sobre el uso de imágenes en la web.

### Añadir información de asistencia con el atributo `title`

Quizá también quieras añadir un atributo `title` a tus enlaces.
El título contiene información adicional sobre el enlace, como qué tipo de información contiene la página o cosas que hay que tener en cuenta en el sitio web.

```html
<p>
  Estoy creando un enlace a
  <a
    href="https://www.mozilla.org/en-US/"
    title="El mejor lugar para encontrar más información sobre la misión de Mozilla y cómo contribuir">
    la página de inicio de Mozilla</a
  >.
</p>
```

Esto nos da el siguiente resultado, y al pasar el puntero por encima del enlace se muestra el título como información emergente:

{{EmbedLiveSample('añadir_información_de_asistencia_con_el_atributo_title', '100%', 150)}}

> [!NOTE]
> El título de un enlace solo se muestra al pasar el puntero del ratón por encima, lo que significa que a quienes navegan por las páginas web con el teclado o con pantallas táctiles les costará acceder a esa información.
> Si la información del título es realmente importante para la usabilidad de la página, deberías presentarla de una forma accesible para todos los usuarios, por ejemplo, poniéndola en el texto normal.

### Crear tus propios enlaces de ejemplo

Bien, ¡ahora te toca a ti!

1. Haz clic en **"Play"** en el bloque de código de abajo para editar el ejemplo en el MDN Playground, o haz una copia de nuestra [plantilla inicial](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) y copia en ella el código de abajo.
2. Enlaza los textos «Ardilla roja» y «Ardilla gris oriental» a páginas de Wikipedia que describan esas especies. Da a cada enlace un atributo `title` con el nombre científico de la especie.
3. Enlaza el texto «página de Wikipedia» a la página principal de Wikipedia sobre las ardillas.

Si cometes un error, puedes borrar tu trabajo usando el botón _Reset_ en el MDN Playground. Si te quedas realmente atascado, puedes ver la solución debajo del bloque de código.

```html live-sample___links-1
<h1>Ardillas</h1>

<p>
  Se suele pensar en las ardillas como mamíferos arborícolas, pero su familia va
  mucho más allá e incluye roedores que viven en el suelo, como las ardillas
  listadas y los perritos de las praderas, y las ardillas voladoras.
</p>

<p>Dos de las especies de ardillas más comunes y conocidas son:</p>

<ul>
  <li>Ardilla roja</li>
  <li>Ardilla gris oriental</li>
</ul>

<p>
  Para tener un buen punto de partida sobre las ardillas, consulta su página de
  Wikipedia.
</p>
```

{{ EmbedLiveSample('links-1', "100%", 280) }}

<details>
<summary>Haz clic aquí para mostrar la solución</summary>

Tu HTML terminado debería verse así:

```html
<h1>Ardillas</h1>

<p>
  Se suele pensar en las ardillas como mamíferos arborícolas, pero su familia va
  mucho más allá e incluye roedores que viven en el suelo, como las ardillas
  listadas y los perritos de las praderas, y las ardillas voladoras.
</p>

<p>Dos de las especies de ardillas más comunes y conocidas son:</p>

<ul>
  <li>
    <a
      href="https://es.wikipedia.org/wiki/Sciurus_vulgaris"
      title="Sciurus vulgaris">
      Ardilla roja
    </a>
  </li>
  <li>
    <a
      href="https://es.wikipedia.org/wiki/Sciurus_carolinensis"
      title="Sciurus carolinensis">
      Ardilla gris oriental
    </a>
  </li>
</ul>

<p>
  Para tener un buen punto de partida sobre las ardillas, consulta su
  <a href="https://es.wikipedia.org/wiki/Sciuridae">página de Wikipedia</a>.
</p>
```

</details>

## Primer acercamiento a URLs y rutas

Los destinos de los enlaces son URL. Una URL, o localizador uniforme de recursos, es una cadena de texto que define dónde se encuentra algo en la web. Por ejemplo, la página de inicio de Mozilla en inglés se encuentra en `https://www.mozilla.org/en-US/`.

Un [servidor web](/es/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server) recibe solicitudes de URL y responde con el recurso correspondiente. La mayoría de los recursos se almacenan como archivos en el sistema de archivos del servidor, así que las URL de esos recursos suelen parecerse a rutas de archivo.

> [!NOTE]
> Las rutas de archivo y las URL no son lo mismo, pero por ahora hablaremos de ellas como si lo fueran para facilitar la comprensión. Hablaremos más sobre las diferencias en la sección [Cómo se traducen las URL en rutas de archivo](#cómo_se_traducen_las_url_en_rutas_de_archivo).

Veamos un ejemplo de estructura de directorios de un servidor:

![Una estructura de directorios sencilla. El directorio padre se llama creating-hyperlinks y contiene dos archivos llamados index.html y contacts.html, y dos directorios llamados projects y pdfs, que contienen un archivo index.html y un archivo project-brief.pdf, respectivamente](simple-directory.png)

La **raíz** de esta estructura de directorios se llama `creating-hyperlinks`. Al trabajar en local con un sitio web, tendrás un directorio que contiene todo el sitio. Dentro de la **raíz** tenemos un archivo `index.html` y un `contacts.html`. En un sitio web real, `index.html` sería nuestra página de inicio o página de destino (una página web que sirve como punto de entrada a un sitio web o a una sección concreta de un sitio web).

También hay dos directorios dentro de la raíz: `pdfs` y `projects`. Cada uno contiene un solo archivo: un PDF (`project-brief.pdf`) y un archivo `index.html`, respectivamente. Ten en cuenta que puedes tener varios archivos `index.html` en un proyecto, siempre que estén en ubicaciones distintas del sistema de archivos. El segundo `index.html` quizá sería la página de destino principal para la información relacionada con el proyecto.

Veamos algunos ejemplos de enlaces entre distintos archivos de esta estructura de directorios para mostrar los distintos tipos de rutas.

### Mismo directorio

Si quieres incluir un hipervínculo dentro del `index.html` de nivel superior que apunte a `contacts.html`, puedes especificar como ruta solo el nombre del archivo al que quieres enlazar, porque está en el mismo directorio que el archivo actual. La URL que usarías es `contacts.html`:

```html
<p>
  ¿Quieres contactar con un miembro del equipo? Encuentra los datos en nuestra
  <a href="contacts.html">página de contactos</a>.
</p>
```

También puedes empezar la ruta a un archivo del mismo directorio con un punto seguido de una barra: `./`. El siguiente ejemplo equivale al anterior, pero algunas personas prefieren incluir `./` de todos modos porque les parece más claro:

```html
<p>
  ¿Quieres contactar con un miembro del equipo? Encuentra los datos en nuestra
  <a href="./contacts.html">página de contactos</a>.
</p>
```

> [!NOTE]
> Hay algunos casos en los que incluir `./` en la ruta marca la diferencia, por ejemplo, al especificar rutas para importar [módulos de JavaScript](/es/docs/Web/JavaScript/Guide/Modules), pero no tienes que preocuparte por esto en los enlaces de HTML y CSS estáticos.

### Bajar a subdirectorios

Si quieres incluir un hipervínculo dentro del `index.html` de nivel superior que apunte a `projects/index.html`, tienes que bajar al directorio `projects` antes de indicar el archivo al que quieres enlazar. Para ello, especificas el nombre del directorio, después una barra y después el nombre del archivo. La URL que puedes usar es `projects/index.html`:

```html
<p>Visita la <a href="projects/index.html">página del proyecto</a>.</p>
```

### Subir a directorios padre

Si quieres incluir un hipervínculo dentro de `projects/index.html` que apunte a `pdfs/project-brief.pdf`, tienes que subir un nivel de directorio y después volver a bajar al directorio `pdfs`. Para subir un directorio se usan dos puntos (`..`), así que la URL es `../pdfs/project-brief.pdf`:

```html
<p>Enlace al <a href="../pdfs/project-brief.pdf">resumen del proyecto</a>.</p>
```

> [!NOTE]
> Si hace falta, puedes combinar varias de estas características en rutas complejas, por ejemplo: `../../../complex/path/to/my/file.html`.

### Enlazar en relación con el directorio raíz

Las URL anteriores funcionan, pero ten en cuenta que, si mueves el archivo que enlaza o el archivo enlazado a otra ubicación, romperás el enlace.

Si quieres crear un enlace a una ubicación concreta que no se rompa si mueves el archivo que enlaza, puedes hacerlo poniendo una sola barra al principio de la ruta: esto indica que la ruta empieza en el directorio raíz del sitio. Por ejemplo, el enlace anterior dentro de `projects/index.html` se podría reescribir así:

```html
<p>Enlace al <a href="/pdfs/project-brief.pdf">resumen del proyecto</a>.</p>
```

Ahora la ruta siempre empezará en el directorio raíz (`creating-hyperlinks`), irá al directorio `pdfs` y encontrará el archivo `project-brief.pdf`. Seguirá funcionando si mueves el archivo que enlaza a otra ubicación, por ejemplo, `a/b/c/d/e/index.html`.

Si mueves el archivo enlazado `project-brief.pdf` a otra ubicación, seguirás rompiendo el enlace.

Dos términos con los que te encontrarás en la web son **ruta absoluta** y **ruta relativa**.

- Ruta absoluta: apunta a una ubicación definida por su posición absoluta en tu sitio (o en otro lugar de la web). Por ejemplo, puedes crear un enlace absoluto que siempre apunte a la misma ubicación respecto al directorio raíz del sitio usando la barra al principio de la ruta, como vimos antes: `/pdfs/project-brief.pdf`.
- Ruta relativa: apunta a una ubicación _relativa_ al archivo desde el que enlazas. En nuestro ejemplo anterior, usamos `projects/index.html` para crear un enlace relativo entre el archivo actual y un archivo llamado `index.html` que está dentro de un subdirectorio `projects`. Si movieras el archivo actual a otra ubicación, la ruta seguiría siendo relativa a ese archivo, pero apuntaría a otra ubicación absoluta.

Estos términos no siempre se usan de forma coherente. Por ejemplo, `/pdfs/project-brief.pdf` es absoluta respecto a la ubicación del archivo actual, pero relativa al [nombre de dominio](/es/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name). Una URL que incluye el nombre de dominio completo, como `https://example.com/pdfs/project-brief.pdf`, es absoluta respecto a toda la web.

### Enlazar con URL completas

Puedes especificar una URL completa como ruta, que siempre apuntará a la misma ubicación de la web, se use donde se use. Por ejemplo:

```html
<a href="https://www.example.com/projects/">proyectos</a>
```

Este enlace siempre llevará a `https://www.example.com/projects/`, aunque tu sitio se mueva a otro dominio.

### Enlaces internos y externos

Cuando un enlace apunta a un recurso de _tu_ sitio, se llama **enlace interno**. Cuando un enlace apunta a un recurso de un sitio _distinto_, se llama **enlace externo**.

Al especificar un enlace externo, siempre tienes que incluir la URL completa como ruta, por ejemplo:

```html
<a href="https://www.some-other-site.com">proyectos</a>
```

No puedes hacer referencia a una ubicación de otro sitio con una ruta como `/pdfs/project-brief.pdf` o `projects/index.html`, porque ambas son relativas a una ubicación de tu propio sitio, y el navegador necesita el nombre de dominio del sitio web para poder encontrarla.

Al especificar un enlace interno, puedes usar una ruta relativa o absoluta, o una URL completa. En nuestro ejemplo, estos enlaces son equivalentes:

```html
<a href="https://www.example.com/projects/">proyectos</a>

<a href="projects">proyectos</a>
```

Te recomendamos la segunda opción, sin el nombre de dominio completo, por portabilidad. Como dijimos antes, si especificas `https://www.example.com/projects/`, siempre enlazará a `https://www.example.com/projects/`. Si después mueves tu sitio web a otro dominio, por ejemplo `another-example.com`, tendrás que cambiar todos los enlaces con URL completas. Si especificas rutas como `/projects`, seguirán funcionando, porque siguen siendo relativas a la estructura de directorios.

### Fragmentos de documento

Es posible enlazar a una parte concreta de un documento HTML, llamada **fragmento de documento**, en lugar de solo al principio del documento.
Los elementos del documento con un atributo [`id`](/es/docs/Web/HTML/Reference/Global_attributes/id) crean automáticamente un fragmento de documento al que se puede enlazar.

El caso de uso más habitual es enlazar a un encabezado concreto, que se ve así:

```html
<h2 id="mailing_address">Dirección postal</h2>
```

Para enlazar a ese `id` concreto, lo incluyes al final de la ruta, precedido de una almohadilla (`#`), por ejemplo:

```html
<p>
  ¿Quieres escribirnos una carta? Usa nuestra
  <a href="contacts.html#mailing_address">dirección postal</a>.
</p>
```

Incluso puedes usar la referencia al fragmento de documento por sí sola para enlazar a _otra parte del documento actual_:

```html
<p>
  La <a href="#mailing_address">dirección postal de la empresa</a> está al final
  de esta página.
</p>
```

### Cómo se traducen las URL en rutas de archivo

Todos los destinos de enlace que hemos visto hasta ahora son _URL_, que procesa un servidor web para encontrar el recurso correspondiente.
**Ningún contenido web puede ver directamente el sistema de archivos del servidor.**

El ejemplo de servidor que hemos visto hasta ahora crea un [sitio web estático](/es/docs/Glossary/SSG).
El servidor simplemente toma la parte [pathname](/es/docs/Web/API/URL/pathname) de la URL y busca directamente el archivo correspondiente en su sistema de archivos.

> [!NOTE]
> Muchos servidores generan el contenido de una URL al vuelo en lugar de obtenerlo de un archivo estático. Si usas un [framework web](/es/docs/Learn_web_development/Core/Frameworks_libraries), el directorio de tu código fuente también puede ser muy distinto de lo que se despliega en el servidor. Cuando trabajes con tu propio sitio web, tienes que entender tus herramientas de compilación y la configuración de tu servidor para saber cómo se asignan las URL a tus archivos fuente.

Si iniciamos un servidor web (consulta [¿Cómo configurar un servidor de pruebas local?](/es/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server)) usando como raíz el directorio de nuestro sitio de ejemplo, y el {{glossary("domain name", "nombre de dominio")}} del sitio web es `example.com`, nuestro archivo `pdfs/project-brief.pdf` estaría disponible en `https://www.example.com/pdfs/project-brief.pdf`.

Todos los enlaces se resuelven en relación con la URL del documento actual, así que:

- En todas las páginas del dominio `https://example.com`, un enlace a `/pdfs/project-brief.pdf` siempre crea un enlace a `https://www.example.com/pdfs/project-brief.pdf`, cuyo pathname es `/pdfs/project-brief.pdf`. El servidor busca el directorio `pdfs` en el directorio raíz y después busca el archivo `project-brief.pdf` dentro de ese directorio.
- Un enlace a `projects/index.html` crearía un enlace a `https://www.example.com/projects/index.html`, pero solo si se incluye en un archivo dentro del directorio raíz, como el archivo `index.html` de nivel superior o `contacts.html`. Si lo incluyeras, por ejemplo, dentro de un archivo HTML en `pdfs/index.html`, enlazaría a `https://www.example.com/pdfs/projects/index.html`, cuyo pathname es `/pdfs/projects/index.html`, que no existe, así que acabarías con un enlace roto.

#### La página `index.html` predeterminada

Al hacer referencia a un archivo `index.html`, normalmente no hace falta incluir `index.html` en la URL o la ruta, porque los servidores web buscan una página de destino predeterminada llamada `index.html` cuando no se especifica un nombre de archivo.

Volviendo a nuestro ejemplo de la ruta `projects/index.html`, podríamos escribir la ruta simplemente como `projects`, y esto crearía un enlace a `https://www.example.com/projects/index.html`. Al navegar a la página, podríamos escribir la URL como `https://www.example.com/projects/` y nos seguiría llevando al lugar correcto.

> [!NOTE]
> La barra final (`/`) al final de la URL es importante. Con ella, un enlace relativo a `contacts.html` dentro de `projects/index.html` se resolvería como `https://www.example.com/projects/contacts.html` (que está en el mismo directorio). Sin ella, la URL se trataría como un archivo, y el enlace relativo se resolvería como `https://www.example.com/contacts.html` (que está un directorio más arriba).
>
> [Los distintos servidores web manejan de forma distinta una URL como `https://www.example.com/projects`](https://github.com/slorber/trailing-slash-guide): algunos redirigen automáticamente a la URL con barra final, mientras que otros sirven el mismo `index.html` sin redirigir. Este último comportamiento puede romper los enlaces relativos.

## Buenas prácticas para los enlaces

Hay algunas buenas prácticas que seguir al escribir enlaces. Veámoslas ahora.

### Redacción clara del enlace

Es fácil poner enlaces en tu página, pero no basta. Tenemos que hacer que nuestros enlaces sean _accesibles_ para todos los lectores, sea cual sea su contexto y las herramientas que prefieran. Por ejemplo:

- A quienes usan lectores de pantalla les gusta saltar de enlace en enlace por la página y leer los enlaces fuera de contexto.
- Los motores de búsqueda usan el texto de los enlaces para indexar los archivos de destino, así que conviene incluir palabras clave en el texto del enlace para describir de forma eficaz a qué se enlaza.
- Los lectores visuales recorren la página por encima en lugar de leer cada palabra, y su vista se dirige a los elementos de la página que destacan, como los enlaces. Les resultará útil un texto de enlace descriptivo.

Veamos un ejemplo concreto:

Texto de enlace **bueno**: [Descargar Firefox](https://www.firefox.com/en-US/?redirect_source=firefox-com)

```html example-good
<p><a href="https://www.firefox.com/en-US/">Descargar Firefox</a></p>
```

<!-- markdownlint-disable descriptive-link-text -->

Texto de enlace **malo**: [Pulsa aquí](https://www.firefox.com/en-US/) para obtener Firefox

```html example-bad
<p>
  <a href="https://www.firefox.com/en-US/">Pulsa aquí</a> para obtener Firefox
</p>
```

<!-- markdownlint-enable descriptive-link-text -->

Otros consejos:

- No repitas la URL como parte del texto del enlace: las URL quedan feas, y suenan aún peor cuando un lector de pantalla las lee letra por letra.
- No digas «enlace» o «enlaza a» en el texto del enlace: solo es ruido. Los lectores de pantalla ya indican que hay un enlace.
  Los usuarios visuales también sabrán que hay un enlace, porque los enlaces suelen tener otro color y estar subrayados (en general, no conviene romper esta convención, porque los usuarios están acostumbrados a ella).
- Haz que el texto del enlace sea lo más corto posible: es útil porque los lectores de pantalla tienen que interpretar todo el texto del enlace.
- Reduce al mínimo los casos en los que varias copias del mismo texto enlazan a sitios distintos.
  Esto puede causar problemas a quienes usan lectores de pantalla si hay una lista de enlaces fuera de contexto etiquetados como «haz clic aquí», «haz clic aquí», «haz clic aquí».

### Enlazar a recursos que no son HTML: deja indicaciones claras

Al enlazar a un recurso que no se abrirá en la página actual como una «navegación normal», deberías añadir en el texto del enlace una indicación clara de lo que va a pasar. Por ejemplo, si se va a descargar o reproducir en streaming un recurso, o si el enlace va a abrir una ventana emergente o tener algún otro efecto potencialmente inesperado, debería indicarse en el texto. Es importante para los usuarios con conexiones de poco ancho de banda, que quizá quieran evitar descargar recursos de varios megabytes. También ayuda a que quienes usan lectores de pantalla sepan qué esperar, porque de otro modo podrían no darse cuenta de lo que está pasando.

Veamos algunos ejemplos para ver qué tipo de texto se puede usar aquí:

```html
<p>
  <a href="/large-report.pdf" download>
    Descargar el informe de ventas (PDF, 10 MB)
  </a>
</p>

<p>
  <a href="https://www.example.com/video-stream/" target="_blank">
    Ver el video (se abre en otra pestaña, calidad HD)
  </a>
</p>
```

### Usa el atributo download al enlazar una descarga

Cuando enlazas a un recurso que se va a descargar en lugar de abrirse en el navegador, puedes usar el atributo `download` para proporcionar un nombre de archivo predeterminado al guardarlo. Este es un ejemplo con un enlace de descarga a la última versión de Firefox para Windows:

```html
<a
  href="https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=en-US"
  download="firefox-latest-64bit-installer.exe">
  Descargar el último Firefox para Windows (64 bits) (inglés, EE. UU.)
</a>
```

### Cuándo abrir los enlaces en una pestaña nueva

De forma predeterminada, los enlaces se abren en la misma pestaña que la página en la que están, lo que permite al usuario volver a la página anterior con el botón «Atrás» del navegador. Sin embargo, muchos sitios (incluido MDN) eligen abrir ciertos enlaces, sobre todo los externos, en una pestaña nueva. Para ello se establece el atributo [`target`](/es/docs/Web/HTML/Reference/Elements/a#target) en `"_blank"`.

```html
Firefox lo desarrolla la
<a href="https://www.mozilla.org/en-US/" target="_blank">Fundación Mozilla</a>.
```

Abrir o no los enlaces en una pestaña nueva debería ser una decisión consciente, basada en consideraciones de diseño de la experiencia de usuario. Estas son algunas cosas que hay que pensar:

- Abrir los enlaces en una pestaña nueva presenta los dos documentos a la vez, lo que resulta útil para una navegación «en paralelo». En cambio, los enlaces que se abren en la misma pestaña son más bien una continuación de la página actual.
- Abrir los enlaces en una pestaña nueva puede desorientar a los usuarios acostumbrados a usar el botón «Atrás».
- Aunque los enlaces se abran de forma predeterminada en la misma pestaña, los usuarios pueden elegir abrirlos en una pestaña nueva con atajos de teclado u opciones del menú contextual. En cambio, los enlaces que se abren en una pestaña nueva son difíciles de abrir en la misma pestaña.
- A quienes usan lectores de pantalla les pueden confundir los enlaces que se abren en una pestaña nueva, porque quizá no se den cuenta de que se ha abierto y pierdan el contexto de dónde estaban en la página.

Un enfoque habitual es abrir los enlaces externos en pestañas nuevas y los internos en la misma pestaña.
Algunos diseñadores prefieren abrir todos los enlaces en la misma pestaña.
Si abres los enlaces en pestañas nuevas, se recomienda dar alguna pista sobre ellos, como un icono junto al texto del enlace.

## Crear un menú de navegación

En este ejercicio, nos gustaría que enlazaras algunas páginas entre sí con un menú de navegación para crear un sitio web de varias páginas. Es una forma habitual de crear un sitio web: se usa la misma estructura en todas las páginas, incluido el mismo menú de navegación, así que al hacer clic en los enlaces da la impresión de que te quedas en el mismo sitio y se muestra contenido distinto.

Tendrás que hacer copias locales de las cuatro páginas siguientes, todas en el mismo directorio. Para ver la lista completa de archivos, consulta el directorio [navigation-menu-start](https://github.com/mdn/learning-area/tree/main/html/introduction-to-html/navigation-menu-start):

- [index.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/index.html)
- [projects.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/projects.html)
- [pictures.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/pictures.html)
- [social.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/social.html)

Deberías:

1. Añadir en una de las páginas, en el lugar indicado, una lista no ordenada con los nombres de las páginas a las que hay que enlazar.
   Un menú de navegación suele ser simplemente una lista de enlaces, así que semánticamente es correcto.
2. Convertir cada nombre de página en un enlace a esa página.
3. Copiar el menú de navegación en cada página.
4. En cada página, quitar solo el enlace a esa misma página: es confuso e innecesario que una página incluya un enlace a sí misma.
   Además, la falta de un enlace sirve como buen recordatorio visual de en qué página estás.

El ejemplo terminado debería verse parecido a la siguiente página:

![Un ejemplo de un menú de navegación HTML sencillo, con los elementos home, pictures, projects y social](navigation-example.png)

> [!NOTE]
> Si te quedas atascado o no estás seguro de haberlo hecho bien, puedes consultar el directorio [navigation-menu-marked-up](https://github.com/mdn/learning-area/tree/main/html/introduction-to-html/navigation-menu-marked-up) para ver la respuesta correcta.

## Enlace a correo electrónico

Es posible crear enlaces o botones que, al hacer clic en ellos, abran un nuevo mensaje de correo electrónico saliente en lugar de enlazar a un recurso o una página.
Para ello se usa el elemento {{HTMLElement("a")}} y el esquema de URL `mailto:`.

En su forma más básica y habitual, un enlace `mailto:` indica la dirección de correo electrónico del destinatario. Por ejemplo:

```html
<a href="mailto:nowhere@mozilla.org">Enviar un correo a nadie</a>
```

Esto da como resultado un enlace con este aspecto: [Enviar un correo a nadie](mailto:nowhere@mozilla.org).

De hecho, la dirección de correo electrónico es opcional. Si la omites y tu [`href`](/es/docs/Web/HTML/Reference/Elements/a#href) es «mailto:», el cliente de correo del usuario abrirá una ventana de correo saliente nuevo sin dirección de destino.
Suele ser útil para los enlaces de «Compartir», en los que los usuarios pueden hacer clic para enviar un correo a la dirección que elijan.

### Especificar detalles

Además de la dirección de correo electrónico, puedes proporcionar otra información. De hecho, puedes añadir cualquier campo de cabecera de correo estándar a la URL `mailto` que proporciones.
Los más usados son «subject» (asunto), «cc» y «body» (cuerpo; que no es un verdadero campo de cabecera, pero te permite especificar un mensaje corto para el nuevo correo).
Cada campo y su valor se especifican como un término de consulta.

Este es un ejemplo que incluye cc, bcc, asunto y cuerpo:

```html
<a
  href="mailto:nowhere@mozilla.org?cc=name2@rapidtables.com&bcc=name3@rapidtables.com&subject=El%20asunto%20del%20correo&body=El%20cuerpo%20del%20correo">
  Enviar un correo con cc, bcc, asunto y cuerpo
</a>
```

> [!NOTE]
> Los valores de cada campo tienen que estar codificados como URL, con los caracteres no imprimibles (caracteres invisibles como tabulaciones, retornos de carro y saltos de página) y los espacios {{Glossary("Percent-encoding", "codificados por porcentaje")}}.
> Fíjate también en el uso del signo de interrogación (`?`) para separar la URL principal de los valores de los campos, y del ampersand (&) para separar cada campo en la URL `mailto:`.
> Es la notación estándar de consulta de las URL.
> Lee sobre [el método GET](/es/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data#el_método_get) para entender para qué se usa más habitualmente la notación de consulta de las URL.

Estos son algunos otros ejemplos de URL `mailto`:

- <mailto:>
- <mailto:nowhere@mozilla.org>
- <mailto:nowhere@mozilla.org,nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org&subject=This%20is%20the%20subject>

## Resumen

¡Eso es todo sobre los enlaces, al menos por ahora! Volverás a los enlaces más adelante en el curso, cuando empieces a ver cómo darles estilo. A continuación, te daremos algunas pruebas que puedes usar para comprobar si has entendido y retenido la información que te hemos dado sobre los enlaces.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_documents", "Learn_web_development/Core/Structuring_content/Test_your_skills/Links", "Learn_web_development/Core/Structuring_content")}}
