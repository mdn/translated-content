---
title: ¿Cuál es la diferencia entre la página web, el sitio web, el servidor web y el motor de búsqueda?
slug: Learn/Common_questions/Web_mechanics/Pages_sites_servers_and_search_engines
---

En este artículo se describen varios conceptos referidos a la web: Páginas web, sitios web, servidores web, y motores de búsqueda. Estos términos con frecuencia son confundidos por recién llegados a la web, o son incorrectamente usados. ¡Vamos a aprender qué significa cada uno!

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Debes saber
        <a href="/es/docs/Learn/Common_questions/How_does_the_Internet_work"
          >¿Cómo funciona internet?</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Aprender la diferencia entre página web, un sitio web, un servidor web,
        y un motor de búsqueda.
      </td>
    </tr>
  </tbody>
</table>

## Resumen

Como cualquier área de conocimiento, la web viene con un montón de jerga. No te preocupes, no te abrumaremos con todo esto (tenemos un glosario por si tienes curiosidad). Sin embargo, hay unos términos básicos que necesitas entender al principio, ya que escucharás estas expresiones todo el tiempo mientras lees. A veces es fácil de confundir estos términos, puesto que hacen referencia a funcionalidades relacionadas pero diferentes. De hecho, a veces veras estos términos mal utilizados en las noticias y en otros lugares ¡por lo que llegar a mezclarlos es entendible!

Cubriremos estos términos y tecnologías con más detalle mientras exploramos más, pero estas definiciones rápidas serán un gran comienzo para ti:

- Página web
  - : Un documento que se puede mostrar en un navegador web como Firefox, Google Chrome, Microsoft Internet Explorer o Edge, o Safary de Apple. A menudo se las denomina simplemente "páginas".
- Sitio web
  - : Es una colección de páginas web agrupadas y que normalmente se conectan entre sí de varias maneras. A menudo llamados simplemente "sitios".
- Servidor web
  - : Una computadora que aloja un sitio web en Internet.
- Motores de búsqueda
  - : Un servicio web que sirve para encontrar páginas web; es el caso de Google, Bing, Yahoo o DuckDuckGo. Normalmente se accede a los motores de búsqueda a través de un navegador web (por ejemplo, se pueden realizar búsquedas en motores de búsqueda directamente en la barra de direcciones de Firefox, Chrome, etc.) o a través de una página web (por ejemplo, <https://www.bing.com> o <https://duckduckgo.com>).

Veamos una analogía simple: una biblioteca pública. Esto es lo que generalmente harías al visitar una biblioteca:

1. Buscar en un índice de busqueda el título del libro que quieres.
2. Tomar nota del número de catálogo del libro.
3. Ir a la sección particular que contiene el libro, buscar el número de catálogo del libro y obtener el libro.

Vamos a comparar la biblioteca con un servidor web:

- La biblioteca es como un servidor web. Tiene varias secciones, en lo que es similar a un servidor web que aloja varios sitios web.
- Las diferentes secciones (ciencias, matemáticas, historia, etc.) en la biblioteca son como sitios web. Cada sección es como un sitio web único (dos secciones no contienen los mismos libros).
- Los libros en cada sección son como páginas web. Un sitio web puede tener varias páginas web, por ejemplo, la sección de Ciencias (el sitio web) tendrá libros sobre calor, sonido, termodinámica, estadísticas, etc. (las páginas web). Cada una de las páginas web puede ser encontrada en una ubicación única (URL).
- El índice de búsqueda es como el motor de búsqueda. Cada libro tiene su propia ubicación única en la biblioteca (dos libros no se pueden mantener en el mismo lugar) que se especifica mediante el número de catálogo.

_No esta disponible aprendizaje activo aun. [Por favor, considere la posibilidad de contribuir](/es/docs/MDN/Getting_started)._

## Profundizando

Entonces, vamos a profundizar en cómo estos cuatro términos serán relacionados y por qué a veces se confunden entre sí.

### Página web

Una **página web** es un simple documento que puede ser mostrado por un {{Glossary("browser")}}. Estos documentos están escritos en lenguaje {{Glossary("HTML")}} (el que veremos en más detalle en [otros artículos](/es/docs/Web/HTML)). Una página web puede incluir una variedad de diferentes tipos de recursos, tales como:

- _información de estilos_ — para controlar la apariencia de una página
- _scripts_ — que agrega interactividad a la página
- _medios_ — imágenes, sonidos, y vídeos.

> **Nota:** Los buscadores pueden mostrar distintos tipos de documentos, como archivos {{Glossary("PDF")}} o imágenes. Pero el término **página web** específicamente hace referencia a documentos HTML. Para los demás, usaremos sólo el termino **document**(documento).

Todas las páginas web disponibles en la red son accesibles mediante una dirección única. Para acceder a una página, simplemente escribe su direcciones en la barra de búsqueda de tu navegador:

![Example of a web page address in the browser address bar](web-page.jpg)

Un _sitio web_ es una colección de páginas web vinculadas (más sus recursos asociados) que comparten un único nombre de dominio. Cada página web de un sitio web determinado proporciona enlaces explícitos —habitualmente en forma de porciones del texto en que se puede hacer clic— que permiten al usuario moverse de una página del sitio a otra.

Para acceder a un sitio web, escribe su nombre de dominio en la barra de direcciones de tu buscador, y él te mostrará la página principal del sitio web, o _homepage_ (informalmente denominada "el home"):

![Example of a web site domain name in the browser address bar](web-site.jpg)

_Página web_ y _sitio web_ son especialmente fáciles de confundir cuando un _sitio_ contiene una única _página web_ Tales sitios son denominados _sitios de una sola página._

### Servidor web

Un _servidor web_ es una computadora que aloja uno o mas _sitios web_. "Alojar" (_hosting_) significa que todas las _páginas web_ y sus archivos soportes están disponibles en esa computadora. El _servidor web_ enviará cualquier _página web_ del _sitio web_ que aloja, al navegador de cualquier usuario, por cada solicitud del usuario.

No confundir _sito web_ y _servidor web_. Por ejemplo, la expresión "Mi sitio web no responde", en realidad significa que el _servidor web_ no responde y, por lo tanto, el _sitio web_ no está disponible. Más importante aún, dado que un servidor web puede alojar varios sitios web, la expresión _servidor web_ nunca se utiliza para designar un sitio web, pues podría causar una gran confusión. En nuestro ejemplo anterior, si dijéramos: "Mi servidor web no responde", significaría que múltiples sitios web alojados en ese servidor web no están disponibles.

### Buscador

Los buscadores son una fuente común de confusión en la web. Un buscador es un tipo especial de sitio web que ayuda a los usuarios a encontrar páginas web de otros sitios web.

Hay muchos por ahí: [Google](https://www.google.com/), [Bing](https://www.bing.com/), [Yandex](https://www.yandex.com/), [DuckDuckGo](https://duckduckgo.com/),y muchos mas. Algunos son genéricos, otros están especializados en ciertos temas. Utilice los que prefiera.

Muchos principiantes en la web confunden motores de búsqueda con navegadores. Aclaremos esto: Un _**navegador**_ es una pieza de software que obtiene y muestra páginas web; un **_buscador_** es un sitio web que ayuda a las personas a encontrar páginas web alojadas en otros sitios web. La confusión surge porque la primera vez que alguien inicia un navegador, el navegador muestra la página principal de un motor de búsqueda. Esto tiene sentido, porque, obviamente, lo primero que quieres hacer con un navegador es encontrar una página web para mostrar. No confundas la infraestructura (el navegador) con el servicio (el buscador). La distinción te ayudará un poco, pero incluso algunos profesionales hablan imprecisamente, así que no te sientas angustiado por eso.

Aquí hay una instancia de Firefox que muestra un cuadro de búsqueda de Google como su página de inicio predeterminada:

![Example of Firefox nightly displaying a custom Google page as default](search-engine.jpg)

## Próximos pasos

- Profundizar más: [Qué es un servidor Web](/es/docs/Learn/What_is_a_web_server)
- Vea cómo las páginas web están enlazadas en un sitio web: [Entendiendo los enlaces en la web](/es/docs/Learn/Understanding_links_on_the_web)
