---
title: ¿Qué son los hipervínculos?
slug: Learn/Common_questions/Web_mechanics/What_are_hyperlinks
---

En este artículo, repasaremos qué son los hipervínculos y por qué son importantes.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Debes saber
        <a href="/es/Learn/How_the_Internet_works">como funciona internet</a>.
        Y estar familiarizado con<a
          href="/es/docs/Learn/page_vs_site_vs_server_vs_search_engine"
        >
          la diferencia entre una página web, un sitio web, un servidor web y un
          buscador</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>Conozca los enlaces en la web y por qué son importantes.</td>
    </tr>
  </tbody>
</table>

## Resumen

Los hipervínculos, generalmente llamados enlaces, son un concepto fundamental detrás de la Web. Para explicar qué son los enlaces, debemos retroceder a los conceptos básicos de la arquitectura web.

En 1989, Tim Berners-Lee, el inventor de la Web, habló de los tres pilares en los que se basa la Web:

1. {{Glossary("URL")}}, un sistema de direcciones que realiza un seguimiento de los documentos web
2. {{Glossary("HTTP")}}, un protocolo de transferencia para encontrar documentos cuando se les da su URL
3. {{Glossary("HTML")}}, un formato de documento que permite hipervínculos incrustados

Como puede ver en los tres pilares, todo en la Web gira en torno a los documentos y cómo acceder a ellos. El propósito original de la Web era proporcionar una manera fácil de alcanzar, leer y navegar a través de documentos de texto. Desde entonces, la Web ha evolucionado para proporcionar acceso a imágenes, videos y datos binarios, pero estas mejoras apenas han cambiado los tres pilares.

Antes de la Web, era bastante difícil acceder a los documentos y pasar de uno a otro. Al ser legibles por humanos, las URL ya facilitaron las cosas, pero es difícil escribir una URL larga cada vez que desee acceder a un documento. Aquí es donde los hipervínculos revolucionaron todo. Los enlaces pueden correlacionar cualquier cadena de texto con una URL, de modo que el usuario pueda alcanzar instantáneamente el documento de destino activando el enlace.

Los enlaces se destacan del texto circundante al estar subrayados y en texto azul. Toque o haga clic en un enlace para activarlo, o si usa un teclado, presione Tab hasta que el enlace esté enfocado y presione Entrar o la barra espaciadora.

![Ejemplo de visualización básica y efecto de un enlace en una página web](link-1.png)

Los enlaces son el avance que hizo que la Web fuera tan útil y exitosa. En el resto de este artículo, discutimos los diversos tipos de enlaces y su importancia para el diseño web moderno.

## Profundizando

Como dijimos, un enlace es una cadena de texto vinculada a una URL, y usamos enlaces para permitir saltar fácilmente de un documento a otro. Dicho esto, hay algunos matices que vale la pena considerar:

### Tipos de enlaces

- Enlace interno
  - : Un enlace entre dos páginas web, donde ambas páginas pertenecen al mismo sitio web, se denomina enlace interno. Sin enlaces internos, no existe un sitio web (a menos, por supuesto, que sea un sitio web de una página).
- Enlace externo
  - : Un enlace desde su página web a la página web de otra persona. Sin enlaces externos, no hay Web, ya que la Web es una red de páginas web. Utilice enlaces externos para proporcionar información además del contenido disponible a través de su página web.
- Enlaces entrantes
  - : Un enlace desde la página web de otra persona a su sitio. Es lo contrario de un enlace externo. Tenga en cuenta que no tiene que volver a vincular cuando alguien vincula a su sitio.

Cuando esté creando un sitio web, concéntrese en los enlaces internos, ya que estos hacen que su sitio sea utilizable. Encuentre un buen equilibrio entre tener demasiados enlaces y muy pocos. Hablaremos sobre el diseño de la navegación del sitio web en otro artículo, pero como regla general, cada vez que agregue una nueva página web, asegúrese de que al menos una de sus otras páginas enlaza con esa nueva página. Por otro lado, si su sitio tiene más de aproximadamente diez páginas, es contraproducente vincular a cada página desde cualquier otra página.

Cuando comienzas, no tienes que preocuparte tanto por los enlaces externos y entrantes, pero son muy importantes si quieres que los motores de búsqueda encuentren tu sitio (ver más abajo para más detalles).

### Anclas

La mayoría de los enlaces vinculan dos páginas web. Las anclas unen dos secciones de un documento. Cuando sigue un enlace que apunta a un ancla, su navegador salta a otra parte del documento actual en lugar de cargar un nuevo documento. Sin embargo, crea y utiliza anclajes de la misma manera que otros enlaces.

![Ejemplo de visualización básica y efecto de un ancla en una página web](link-2.png)

### Enlaces y motores de búsqueda

Los enlaces son importantes tanto para los usuarios como para los motores de búsqueda. Cada vez que los motores de búsqueda rastrean una página web, indexan el sitio web siguiendo los enlaces disponibles en la página web. Los motores de búsqueda no solo siguen enlaces para descubrir las distintas páginas del sitio web, sino que también usan el texto visible del enlace para determinar qué consultas de búsqueda son apropiadas para llegar a la página web de destino.

Los enlaces influyen en la facilidad con que un motor de búsqueda se vinculará a su sitio. El problema es que es difícil medir las actividades de los motores de búsqueda. Las empresas, naturalmente, quieren que sus sitios tengan un alto ranking en los resultados de búsqueda. Sabemos lo siguiente acerca de cómo los motores de búsqueda determinan el rango de un sitio:

- El texto visible de un enlace influye en qué consultas de búsqueda encontrarán una URL determinada.
- Cuantos más enlaces entrantes pueda presumir una página web, más alto se ubica en los resultados de búsqueda.
- _Los enlaces externos influyen en el ranking de búsqueda de las páginas web de origen y destino, pero no está claro cuánto._

[SEO](http://en.wikipedia.org/wiki/Search_engine_optimization) (optimización de motores de búsqueda) es el estudio de cómo hacer que los sitios web tengan un alto ranking en los resultados de búsqueda. Mejorar el uso de enlaces de un sitio web es una técnica útil de SEO.

## Próximos pasos

Ahora querrás configurar algunas páginas web con enlaces.

- Para obtener más antecedentes teóricos, aprenda sobre [URLs y su estructura](/es/docs/Learn/Common_questions/What_is_a_URL), dado que todo enlace apunta a una URL.
- ¿Quieres algo un poco más práctico? El artículo [Creación de hipervínculos](/es/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks) de nuestro módulo [Introducción a HTML](/es/docs/Learn/HTML/Introduction_to_HTML) explica cómo implementar enlaces en detalle.
