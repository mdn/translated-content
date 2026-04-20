---
title: Cómo investigar una tecnología
slug: MDN/Writing_guidelines/Howto/Research_technology
l10n:
  sourceCommit: bdb97b3e01499ce52f02caa3f51d6dd245a48782
---

{{MDNSidebar}}

Este artículo le brinda información útil sobre cómo abordar la documentación de tecnologías.

## Realizar el trabajo preparatorio

Antes de comenzar a documentar o actualizar algo en MDN Web Docs, hay algunas cosas que debe preparar y planificar antes de comenzar a escribir.

Se supone que antes de leer esta guía tiene un conocimiento razonable de:

- Tecnologías web como HTML, CSS y JavaScript.
- Lectura de especificaciones de tecnología web. Las verá mucho a medida que documente las API.

Todo lo demás se puede aprender en el camino.

### Consultar los recursos

Los recursos útiles para redactar cualquier documentación incluyen:

1. Las [Guías prácticas](/es/docs/MDN/Writing_guidelines/Howto) para MDN Web Docs: ya está aquí, pero es bueno navegar por todos los artículos y familiarizarse con nuestro estilo de escritura, los diferentes tipos de páginas y qué secciones se incluyen en ellas, y las diferentes formas en que incluimos diferentes partes de la página (como especificaciones y compatibilidad con navegadores).
2. La última especificación: diferentes organismos de estandarización crean especificaciones para tecnologías que están documentadas en MDN Web Docs. Por ejemplo, [TC39](https://tc39.es/) para JavaScript, la [WHATWG](https://whatwg.org/) para HTML, y la [W3C](https://www.w3.org/) para CSS, XML y algunas API web.
   Las especificaciones están vinculadas desde páginas de referencia en MDN Web Docs (consulte la sección "Especificaciones"). Alternativamente, normalmente puede hacer una búsqueda en la web. Trabaje siempre con las especificaciones más recientes y actualizadas.
3. Los últimos navegadores web modernos: estos deberían ser compilaciones experimentales/alfa como [Firefox Nightly](https://www.mozilla.org/es/firefox/channel/desktop/), [Chrome Canary](https://www.google.com/intl/es/chrome/canary/) o [Safari Technology Preview](https://webkit.org/downloads/) que tienen más probabilidades de admitir las funciones que está documentando.
   Esto es especialmente pertinente si está documentando una función que es "próxima".
4. Demostraciones/publicaciones de blog/otra información: encuentre tanta información como pueda. Si está actualizando una tecnología porque ha cambiado, asegúrese de que los recursos que está utilizando para aprender no estén desactualizados. Por eso los dos primeros puntos anteriores son importantes.

También puede ser aconsejable intentar encontrar a alguien que le ayude a responder sus preguntas. Pueden ser los autores de las especificaciones o los ingenieros que implementan las funciones del navegador.

### Leer especificaciones

Esto puede parecer un poco extraño al principio, pero cuanto más lo hace, más se acostumbra. Aquí hay algunos buenos enlaces que le ayudarán a empezar:

- [Cómo leer las especificaciones del W3C](https://alistapart.com/article/readspec/) por J. David Eisenberg en A List Apart
- [Comprensión de las especificaciones CSS](https://www.w3.org/Style/CSS/read) del w3c
- [Cómo leer las especificaciones web, Parte I – O: WebVR, ¿cómo funciona?](https://surma.dev/things/reading-specs/) explica específicamente la lectura de las especificaciones WebVR, pero es una excelente introducción a la lectura de las especificaciones de la API web.
- [Cómo leer las especificaciones web Parte IIa – O: Símbolos ECMAScript](https://surma.dev/things/reading-specs-2/) la segunda parte del enlace anterior contiene información sobre cómo comprender la especificación ECMAScript que describe el lenguaje JavaScript

Además, tenemos la guía [Información contenida en un archivo WebIDL](/es/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file), que puede ser de gran ayuda a la hora de leer las especificaciones de la API Web.

## Explorar la característica

Volverá a escribir ejemplos de código o crear demostraciones muchas veces durante el proceso de documentación de una tecnología, pero es muy útil comenzar dedicando tiempo a familiarizarse con cómo funciona la tecnología. Este es un ejercicio realmente valioso porque le brinda una buena comprensión de cuáles son los casos de uso (_por qué_ una desarrolladora usaría esta tecnología) y ayuda a crear algunos ejemplos de código al mismo tiempo.

> [!NOTE]
> Si la especificación se actualizó recientemente de modo que, digamos, un método ahora se define de manera diferente, pero el método anterior aún funciona en los navegadores, a menudo tendrá que documentar ambos en el mismo lugar para que los métodos antiguos y nuevos estén cubiertos.
> Si necesita ayuda, consulte las demostraciones que haya encontrado o pregunte a un contacto de ingeniería.

## Crear la lista de páginas para escribir o actualizar

Las diferentes páginas que necesita escribir desde cero o actualizar varían según la tecnología sobre la que esté escribiendo. Consulte los [tipos de páginas](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types) y la sección correspondiente a la tecnología que está documentando. Lo más probable es que también necesite actualizar la documentación existente, así que busque en MDN Web Docs páginas relacionadas con lo que está escribiendo.

### Barras laterales

Es posible que también sea necesario definir o actualizar la barra lateral de las páginas que escribe. Para saber si esto es necesario y cómo hacerlo, consulte la [guía de barras laterales](/es/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars).

### Ejemplos de código

Algunos de los ejemplos de código para MDN Web Docs se guardan en repositorios separados. Los más notables son los ejemplos interactivos que aparecen en la sección "Pruébalo" en las páginas de referencia y el código de demostración más grande necesario para las guías. Si necesita agregar o modificar uno de estos repositorios, es una buena idea anotarlo en su lista.

El artículo [Ejemplos de código](/es/docs/MDN/Writing_guidelines/Page_structures/Code_examples) describe los diferentes tipos de ejemplos de código que utilizamos en MDN Web Docs.

### Ejemplo

Digamos que está documentando una nueva API web, su lista inicial de secciones a documentar se verá así:

1. Página de descripción general
2. Páginas de interfaz
3. Páginas de constructor
4. Páginas de métodos
5. Páginas de propiedades
6. Páginas de eventos
7. Páginas de conceptos/guía
8. Ejemplos de código
9. Barras laterales

Luego puede ampliarla con más detalles, agregando cada interfaz y sus miembros. Por ejemplo, si estuviera documentando la API de Web Audio, su lista podría verse más parecida a esta:

- Web_Audio_API
- AudioContext
  - AudioContext.currentTime
  - AudioContext.destination
  - AudioContext.listener
  - ...
  - AudioContext.createBuffer()
  - AudioContext.createBufferSource()
  - ...

- AudioNode
  - AudioNode.context
  - AudioNode.numberOfInputs
  - AudioNode.numberOfOutputs
  - ...
  - AudioNode.connect(Param)
  - ...

- AudioParam
- Events (update list)
  - start
  - end
  - …

## Abrir un issue

Es una buena idea en este punto abrir un [issue](https://github.com/mdn/content/issues) de seguimiento en el repositorio `mdn/content` con las páginas enumeradas como una lista de tareas pendientes (casilla de verificación). Esto le permite no solo a usted, sino a otras personas que trabajan en la documentación realizar un seguimiento público del estado. También puede vincular sus solicitudes de extracción a este issue para brindarles a todos más contexto.

## Crear las páginas

Ahora cree las páginas que necesita. Para crear una nueva página, consulte las instrucciones en nuestra guía [cómo crear, mover, eliminar y editar páginas](/es/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting). Consulte nuestra guía [Tipos de páginas](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types) para ver plantillas de páginas que pueden resultarle útiles.
