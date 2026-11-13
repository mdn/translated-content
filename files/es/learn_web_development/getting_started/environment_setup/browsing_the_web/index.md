---
title: Navegar por la web
slug: Learn_web_development/Getting_started/Environment_setup/Browsing_the_web
l10n:
  sourceCommit: 03e93e0948768ea78474e77a53795698ebca5836
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Installing_software", "Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup")}}

A estas alturas del módulo, ya deberías tener varios navegadores web modernos instalados en tu computadora o en otros dispositivos disponibles. Este artículo profundiza en el uso de los navegadores: veremos cómo funciona un navegador web, la diferencia entre algunas de las cosas cotidianas con las que vas a interactuar y cómo buscar información.

> [!NOTE]
> Si no tienes instalado ningún navegador aparte de los que venían de serie con tus dispositivos, instala algunos más. Consulta [Navegadores web modernos](/es/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software#navegadores_web_modernos) para obtener más información.

Como cualquier área de conocimiento, la web viene con mucha jerga y terminología técnica. No te preocupes: no te vamos a abrumar con todo desde el principio (si tienes curiosidad, puedes consultar el [glosario](/es/docs/Glossary)). Sin embargo, hay algunos términos básicos que tienes que entender desde el principio, porque oirás estas expresiones todo el tiempo. A continuación presentamos algunos términos importantes.

<table>
  <tbody>
    <tr>
      <th scope="row">Requisitos previos:</th>
      <td>
        Familiaridad básica con el sistema operativo de tu computadora.
      </td>
    </tr>
    <tr>
      <th scope="row">Resultados de aprendizaje:</th>
      <td>
        <ul>
          <li>La diferencia entre un navegador web, un sitio web y un motor de búsqueda.</li>
          <li>Cómo funciona un navegador web a nivel básico.</li>
          <li>Buscar información.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## La diferencia entre página web, sitio web, servidor web y motor de búsqueda

Empezaremos describiendo varios conceptos relacionados con la web: páginas web, sitios web, servidores web y motores de búsqueda. Quienes llegan nuevos a la web suelen confundir estos términos o usarlos de forma incorrecta. ¡Asegurémonos de que sepas qué significa cada uno! Empecemos con algunas definiciones:

- **Página web**
  - : Un documento que se puede mostrar en un {{Glossary("browser", "navegador")}} web. A menudo también se les llama simplemente «páginas». Estos documentos se escriben en el lenguaje {{Glossary("HTML")}} (que veremos con más detalle más adelante).
- **Sitio web**
  - : Una colección de páginas web agrupadas en un único recurso, con enlaces que las conectan entre sí. A menudo se le llama «sitio».
- **Servidor web**
  - : Una computadora que aloja un sitio web en internet.
- **Servicio web**
  - : Un software que responde a solicitudes a través de internet para realizar una función o proporcionar datos. Un servicio web suele estar respaldado por un servidor web y puede ofrecer páginas web con las que interactúan los usuarios. Muchos sitios web también son servicios web, aunque algunos sitios web (como MDN) solo tienen contenido estático. Ejemplos de servicios web serían algo que cambia el tamaño de las imágenes, que da el pronóstico del tiempo o que gestiona el inicio de sesión de los usuarios.
- **Motor de búsqueda**
  - : Un servicio web que te ayuda a encontrar otras páginas web, como Google, Bing, Yahoo o DuckDuckGo. Normalmente se accede a los motores de búsqueda a través de un navegador web (por ejemplo, puedes hacer búsquedas directamente en la barra de direcciones de Firefox, Chrome, etc.) o a través de una página web (por ejemplo, [bing.com](https://www.bing.com/) o [duckduckgo.com](https://duckduckgo.com/)).

Veamos una analogía: una biblioteca pública. Esto es lo que harías normalmente al visitar una biblioteca:

1. Buscar un índice de búsqueda y buscar el título del libro que quieres.
2. Anotar el número de catálogo del libro.
3. Ir a la sección concreta que contiene el libro, encontrar el número de catálogo correcto y tomar el libro.

Comparemos una biblioteca pública con la web:

- La biblioteca es como un servidor web. Tiene varias secciones, igual que un servidor web aloja varios sitios web.
- Las distintas secciones de la biblioteca (ciencias, matemáticas, historia, etc.) son como sitios web. Cada sección es como un sitio web único (no hay dos secciones con los mismos libros).
- Los libros de cada sección son como páginas web. Un sitio web puede tener varias páginas web; por ejemplo, la sección de Ciencias (el sitio web) tendrá libros sobre el calor, el sonido, la termodinámica, la biología humana, etc.
- El índice de búsqueda es como el motor de búsqueda. Cada libro tiene su propia ubicación única en la biblioteca (no puede haber dos libros en el mismo lugar), que se indica con el número de catálogo.

Ahora dediquemos un momento a ver cada término con un poco más de detalle.

### Página web

Una **página web** es un documento sencillo que un navegador puede mostrar. Una página web puede incrustar distintos tipos de recursos, como:

- _Información de estilo_: controla el aspecto de la página.
- _Scripts_: añaden interactividad a la página.
- _Multimedia_: imágenes, sonidos y videos.

> [!NOTE]
> Los navegadores también pueden mostrar otros documentos, como archivos {{Glossary("PDF")}}, y otros recursos, como imágenes o videos, pero el término **página web** se refiere específicamente a los documentos HTML.

Cada página web se encuentra en una ubicación única (una dirección web, también llamada [URL](/es/docs/Glossary/URL)). Para acceder a una página, basta con escribir su dirección en la barra de direcciones del navegador:

![Ejemplo de la dirección de una página web en la barra de direcciones del navegador](web-page.jpg)

Prueba ahora a cargar uno de tus sitios web favoritos en un navegador, teniendo en cuenta lo que hemos dicho antes. ¿Escribiste la dirección web tú mismo o la encontraste con un motor de búsqueda?

### Sitio web

Un _sitio web_ es una colección de páginas web enlazadas (junto con sus recursos asociados) que comparten un [nombre de dominio](/es/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) único. Cada página web de un sitio web ofrece enlaces explícitos (casi siempre en forma de fragmentos de texto en los que se puede hacer clic) que permiten al usuario pasar de una página del sitio web a otra.

Cuando cargas tu sitio web favorito en un navegador, normalmente se muestra primero la página web principal del sitio, o _página de inicio_ (a veces llamada simplemente «inicio»):

![Ejemplo del nombre de dominio de un sitio web en la barra de direcciones del navegador](web-site.jpg)

Prueba a hacer clic en algunos elementos del menú o en algunos enlaces para ver distintas páginas de tu sitio web favorito. Fíjate en cómo cambia la dirección web que se muestra al pasar de una página a otra.

> [!NOTE]
> También es posible tener una [_aplicación de una sola página_](/es/docs/Glossary/SPA): un sitio web que consiste en una única página web que se actualiza dinámicamente con contenido nuevo cuando hace falta. En ese caso, la dirección web podría no cambiar al ver distintas páginas.

### Servidor web

Un _servidor web_ es una computadora que aloja uno o más _sitios web_. «Alojar» significa que todas las _páginas web_ y sus archivos asociados están disponibles en esa computadora. El _servidor web_ envía los archivos de las páginas web que aloja al navegador de un usuario cuando este intenta cargarlas.

No confundas los _sitios web_ con los _servidores web_. Por ejemplo, si oyes a alguien decir «Mi sitio web no responde», probablemente significa que el _servidor web_ no responde y, por lo tanto, el _sitio web_ no está disponible.

Y, lo que es más importante, como un servidor web puede alojar varios sitios web, el término _servidor web_ ya no se usa para designar un sitio web, porque podría causar confusión. Si alguien dice «Mi servidor web no responde», puede que haya varios sitios web o aplicaciones alojados en ese servidor web que no estén disponibles.

### Motor de búsqueda

Es habitual que la gente confunda los motores de búsqueda con los sitios web. Un motor de búsqueda es un tipo especial de servicio web que ayuda a los usuarios a encontrar las páginas web que les interesan, así como tipos concretos de contenido, como imágenes, videos o noticias.

Todos los motores de búsqueda suelen tener su propio sitio web, que se puede usar para acceder al servicio web subyacente. Hay muchísimos: [Google](https://www.google.com/), [Bing](https://www.bing.com/), [Yandex](https://yandex.com/), [DuckDuckGo](https://duckduckgo.com/) y muchos más. Algunos son genéricos y otros se especializan en ciertos temas.

Muchos principiantes en la web confunden los motores de búsqueda con los navegadores. Dejémoslo claro:

- Un _navegador_ es un programa que obtiene y muestra páginas web.
- Un _motor de búsqueda_ es un servicio web (y, normalmente, un sitio web) que ayuda a la gente a encontrar páginas web de otros sitios web.

La confusión surge porque, la primera vez que alguien abre un navegador, este suele mostrar la página de inicio de un motor de búsqueda o un cuadro de búsqueda que permite buscar un término con ese motor. La mayoría de los navegadores también permiten usar un motor de búsqueda escribiendo los términos de búsqueda directamente en la barra de direcciones del navegador.

Todo esto tiene sentido, porque lo primero que suele querer hacer la gente con un navegador es encontrar una página web que mostrar. No confundas el software (el navegador) con el servicio (el motor de búsqueda).

Este es un ejemplo de Firefox que muestra un cuadro de búsqueda de Google como página de inicio predeterminada:

![Ejemplo de Firefox Nightly que muestra una página personalizada de Google como página predeterminada](search-engine.jpg)

Prueba a usar un motor de búsqueda para encontrar información sobre un tema que te interese:

1. Ve a la página de inicio de un motor de búsqueda e introduce un término de búsqueda.
2. Introduce un término de búsqueda en la barra de direcciones del navegador.

## Cómo funciona la web: lo básico

En muchas partes del mundo, la web se ha convertido en una herramienta tan esencial en nuestra vida cotidiana como los cubiertos, las bicicletas y los coches, o los cepillos de dientes. Si te parece exagerado, ¡piensa en cuántas veces al día usas un sitio web o una aplicación del teléfono! Aunque no escribas una dirección web en un navegador para acceder a contenido o servicios, lo más probable es que la aplicación que estás usando emplee tecnología web entre bastidores para obtener los datos que te muestra.

Cuando accedes a la web, ocurren bastantes cosas entre tu primera interacción (por ejemplo, escribir una dirección web (URL) en un navegador y pulsar <kbd>Intro</kbd>/<kbd>Return</kbd>) y el momento en que se te muestra el resultado de tu acción (por ejemplo, cuando aparece el sitio web en tu navegador):

1. El navegador web solicita el recurso al que quieres acceder (por ejemplo, una página web, algunos datos, o una imagen o un video) al servidor web en el que está almacenado. Estas solicitudes (y las respuestas resultantes) se hacen con una tecnología llamada [HTTP](/es/docs/Glossary/HTTP) (protocolo de transferencia de hipertexto), que usa un lenguaje de verbos (como **GET**) para describir lo que debe ocurrir.
2. Si la solicitud tiene éxito, el servidor web devuelve al navegador una respuesta HTTP que contiene el recurso solicitado.
3. En algunos casos, el recurso solicitado generará a su vez más solicitudes HTTP, que darán lugar a más respuestas. Por ejemplo:
   1. Cuando se carga un sitio web, primero se solicita el archivo HTML principal de la página de inicio del sitio.
   2. Cuando el navegador recibe ese archivo, empieza a analizarlo y probablemente encontrará instrucciones para hacer más solicitudes. Como vimos antes, pueden ser de archivos que hay que incrustar, como imágenes, información de estilo, scripts, etc.
4. Cuando se han solicitado todos los recursos, el navegador web los analiza y los representa según sea necesario, antes de mostrar el resultado al usuario.

Esta descripción de cómo funciona la web está muy simplificada, pero es todo lo que necesitas saber por ahora. Un poco más adelante, en nuestro módulo [Estándares web](/es/docs/Learn_web_development/Getting_started/Web_standards), encontrarás una explicación más detallada de cómo un navegador web solicita y representa las páginas web.

## Buscar información

Como desarrollador web, pasarás mucho tiempo buscando información, desde una sintaxis que no recuerdas hasta soluciones a problemas concretos. Por eso conviene aprender a buscar en la web de forma eficaz.

Si conoces un sitio web especializado en el tema que estás aprendiendo, a menudo es buena idea empezar por ahí.

Por ejemplo, si buscas información general sobre una característica concreta de una tecnología web, deberías escribir el nombre de esa característica en el cuadro de búsqueda de MDN. Por ejemplo, prueba a escribir `modelo de caja`, `fetch()` o `elemento video` en el cuadro de búsqueda y mira qué aparece. Si no encuentras la información que necesitas, amplía la búsqueda: prueba tu término en un motor de búsqueda.

Si buscas la solución a un problema concreto, como `cómo imprimir la sucesión de Fibonacci con JavaScript` o `cómo calcular si un número es primo con JavaScript`, conviene buscar en un sitio web como [Stack Overflow](https://stackoverflow.com/), una comunidad dedicada a responder problemas de programación. De nuevo, prueba con un motor de búsqueda general si un sitio concreto no te da una respuesta útil.

Antes de seguir, prueba a buscar algunos temas sobre los que te gustaría aprender. Prueba con búsquedas más y menos específicas, y con distintos términos relacionados, para ver qué funciona mejor. Consulta nuestros [consejos de búsqueda](#consejos_de_búsqueda) para ver más cosas que probar.

### Usar la IA

Los resultados de búsqueda generados por IA son una forma muy popular de recibir información. Básicamente, ofrecen una búsqueda con superpoderes: hacen muchas búsquedas en segundo plano antes de reunir los resultados en una única respuesta fácil de digerir. Las opciones habituales son [ChatGPT](https://chatgpt.com/), [Google Gemini](https://gemini.google.com/app) y [Microsoft Copilot](https://copilot.microsoft.com/), a las que se accede directamente en formato de chat o mediante sistemas de ayuda o automatización con IA integrados en las aplicaciones.

Cuando aprendes a programar, los chats de IA pueden ser útiles de varias formas:

- Hacer búsquedas convencionales, como los ejemplos anteriores.
- Encontrar errores en un bloque de código. Si te estás frustrando porque tu código no funciona, puedes pegarlo en un chat de IA, precedido de una pregunta como `¿Dónde está el error en este código?`
- Generar una versión optimizada de un bloque de código concreto. Puede ser útil cuando has escrito un bloque de código que funciona, pero quieres averiguar cómo podría hacerse de forma más eficiente, o de una forma más robusta que resuelva más casos de uso.
- Dar consejos sobre cómo hacer algo. Por ejemplo, si no solo quieres saber dónde está el error en un bloque de código, sino que quieres consejo sobre qué estrategia usar para depurarlo.

Prueba a hacer algunas búsquedas con un par de herramientas de IA.

### Una advertencia

La IA puede hacer tantas cosas que quizá empieces a preguntarte por qué necesitas aprender a programar.

¡Pero espera! Esto es importante: **sigues necesitando entender a grandes rasgos lo que intentas hacer, qué hace el código y dónde hay que usar cada fragmento de código**. Si no lo entiendes, no serás de mucha ayuda a la hora de resolver problemas reales. Esto significa que sigues necesitando aprender a programar. La IA puede ser una herramienta muy útil para encontrar respuestas más rápido, pero si escribes en un chat de IA cada pregunta que te hacen, no entenderás cómo funciona nada.

Además:

- Las herramientas de IA presentan sus respuestas con un tono seguro y autoritario, pero a menudo pueden ser engañosas o directamente incorrectas. Algunos de sus errores pueden ser muy sutiles. No tienen inteligencia innata propia: básicamente son herramientas avanzadas de reconocimiento de patrones. Las herramientas de IA elaboran sus respuestas a partir de otras fuentes, así que absorben tanto información incorrecta como correcta. Incluso dos fuentes correctas pueden combinarse para crear una respuesta incorrecta.
- Puede que la información más reciente no esté disponible, o que las respuestas se inclinen hacia documentación más antigua y extendida, así que preguntar «cómo hacer X en JS» podría darte indicaciones obsoletas.

Por eso tienes que comprobar con cuidado las respuestas que te dan, y no confiar en todo sin cuestionarlo.

**Mientras aprendes, dedica tiempo a intentar resolver el problema por tu cuenta antes de buscar una respuesta, ya uses la IA o un motor de búsqueda convencional. Te convertirá en mejor desarrollador.**

### Consejos de búsqueda

- Deberías incluir el lenguaje que usas en el término de búsqueda, como en los ejemplos anteriores. Si solo escribieras `cómo imprimir la sucesión de Fibonacci`, probablemente obtendrías varias soluciones en Python, C++, Java, Ruby u otros lenguajes, ¡algo poco útil cuando intentas aprender JavaScript!
- Cuando encuentres una respuesta útil, guárdala en marcadores o haz una copia en algún sitio para poder encontrarla de nuevo más adelante. Te sorprenderá cuántas veces te topas con el mismo problema.
- Si tu código devuelve un mensaje de error concreto, prueba a introducir el error en un motor de búsqueda o en un chat de IA. Probablemente otras personas ya se hayan enfrentado al mismo error y hayan publicado soluciones en algún lugar.
- Si es posible, quédate con sitios recomendados como MDN y [Stack Overflow](https://stackoverflow.com/).
- Hay muchas técnicas de búsqueda avanzada que puedes usar en los motores de búsqueda y que te darán mejores resultados que escribir un término de búsqueda sin más. Un término de búsqueda simple como `hormiga pez queso` devolverá resultados que contengan cualquier combinación de esas palabras. Sin embargo, la mayoría de los motores de búsqueda admiten variaciones de los siguientes patrones de sintaxis:
  - Escribir `"hormiga pez queso"` (con las comillas) solo devolverá resultados que contengan esa frase exacta.
  - `hormiga queso -pez` devolverá resultados que contengan `hormiga` o `queso`, o ambas, pero no `pez`.
  - `hormiga OR queso` solo devolverá resultados con uno de los dos términos, no con ambos. En nuestras pruebas, este solo pareció funcionar bien en Google.
  - `intitle:queso` solo devolverá resultados que tengan «queso» en el título principal de la página.

  > [!NOTE]
  > Hay muchas otras técnicas que puedes usar en los distintos motores de búsqueda. Prueba a ver cuáles más encuentras; algunos recursos útiles son [Refine Google Searches](https://support.google.com/websearch/answer/2466433?hl=en), [How to use advanced syntax on DuckDuckGo Search](https://duckduckgo.com/duckduckgo-help-pages/results/syntax) y [Microsoft: Advanced search options](https://support.microsoft.com/en-us/bing/advanced-search-options).

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Installing_software", "Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup")}}
