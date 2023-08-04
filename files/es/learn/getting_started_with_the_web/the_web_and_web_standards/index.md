---
title: La web y los estándares web
slug: Learn/Getting_started_with_the_web/The_web_and_web_standards
---

{{learnsidebar}}

Este artículo proporciona algunos antecedentes útiles sobre la Web — cómo surgió, qué son las tecnologías web estándar, cómo funcionan juntas, por qué "desarrollador web" es una gran carrera para elegir y qué tipos de mejores prácticas aprenderás a través de este curso.

## Breve historia de la web

Mantendremos esto muy breve, ya que hay muchos artículos (más) detallados de la historia de la web, a los que enlazaremos más adelante (también intenta buscar "historia de la web" en tu motor de búsqueda favorito y ve lo que obtienes, si estás interesado en más detalles).

A fines de la década de 1960, las fuerzas armadas de EE. UU. desarrollaron una red de comunicación llamada {{Glossary("Arpanet")}}. Esta se puede considerar una precursora de la Web, ya que trabajó en la [conmutación de paquetes](https://es.wikipedia.org/wiki/conmutación_de_paquetes) y presentó la primera implementación de la [Familia de protocolos de internet](https://es.wikipedia.org/wiki/Familia_de_protocolos_de_internet) TCP/IP. Estas dos tecnologías forman la base de la infraestructura sobre la que se construye Internet.

En 1980, Tim Berners-Lee (a menudo denominado TimBL) escribió un programa de block de notas llamado ENQUIRE, que presentaba el concepto de enlaces entre diferentes nodos. ¿Te suena familiar?

Avanzó rápidamente hasta 1989, y TimBL escribió [Gestión de la información: una propuesta](https://www.w3.org/History/1989/proposal.html) e hipertexto en el CERN; estas dos publicaciones juntas proporcionaron los antecedentes de cómo funcionaría la web. Recibieron una buena cantidad de interés, suficiente para convencer a los jefes de TimBL de que le permitieran seguir adelante y creara un sistema de hipertexto global.

A finales de 1990, TimBL había creado todo lo necesario para ejecutar la primera versión de la web: [HTTP](/es/docs/Web/HTTP), [HTML](/es/docs/Web/HTML), el primer navegador web, que se llamaba [WorldWideWeb](https://es.wikipedia.org/wiki/WorldWideWeb), un servidor HTTP y algunas páginas web para mirar.

En los años siguientes, la web explotó, se lanzaron varios navegadores, se instalaron miles de servidores web y se crearon millones de páginas web. Bien, este es un muy sencillo resumen de lo que sucedió, pero les prometí un breve resumen.

Un último dato importante para compartir es que en 1994, TimBL fundó el [World Wide Web Consortium](https://es.wikipedia.org/wiki/World_Wide_Web_Consortium) (W3C), una organización que reúne a representantes de muchas empresas de tecnología diferentes para trabajar juntos en la creación de especificaciones de tecnología web. Después de eso, siguieron otras tecnologías como [CSS](/es/docs/Web/CSS) y [JavaScript](/es/docs/Web/JavaScript), y la web comenzó a parecerse más a la web que conocemos hoy.

## Estándares web

**Los estándares web** son las tecnologías que utilizamos para crear sitios web. Estos estándares existen como extensos documentos técnicos llamados _especificaciones_, que detallan exactamente cómo debería funcionar la tecnología. Estos documentos no son muy útiles para aprender a usar las tecnologías que describen (es por eso que tenemos sitios como _MDN Web Docs_), sino que están pensados para que los utilicen los ingenieros de software para implementar esas tecnologías (generalmente en los navegadores web).

Por ejemplo, el [lleno de vida Estándar HTML](https://html.spec.whatwg.org/multipage/) describe exactamente cómo se debe implementar HTML (todos los elementos HTML y sus APIs asociadas y otras tecnologías circundantes).

Los estándares web son creados por organismos de estándares — instituciones que invitan a grupos de personas de diferentes compañías de tecnología a unirse y acordar cómo deberían funcionar las tecnologías de la mejor manera posible para cumplir con todos sus casos de uso. El W3C es el organismo de estándares web más conocido, pero hay otros como [WHATWG](https://whatwg.org/) (que fueron responsables de la modernización del lenguaje HTML), [ECMA](https://www.ecma-international.org/) (que publica el estándar para ECMAScript, en el que se basa JavaScript), [Khronos](https://www.khronos.org/) (que publica tecnologías para gráficos 3D, como WebGL) y otras.

### Estándares "abiertos"

Uno de los aspectos clave de los estándares web, que TimBL y el W3C acordaron desde el principio, es que la web (y las tecnologías web) deben ser libres tanto para contribuir como para usar, y no estar gravadas por patentes/licencias. Por lo tanto, cualquiera puede escribir el código para crear un sitio web de forma gratuita y cualquiera puede contribuir al proceso de creación de estándares, donde se escriben las especificaciones.

Debido a que las tecnologías web se crean abiertamente, en colaboración entre muchas empresas diferentes, significa que ninguna empresa las puede controlar, lo cual es algo realmente bueno. No querrías que una sola empresa decidiera repentinamente poner toda la web detrás de un muro de pago, o lanzar una nueva versión de HTML que todos tienen que comprar para continuar creando sitios web, o peor aún, simplemente decidiendo que ya no están interesados, y simplemente apagarlas.

Esto permite que la web siga siendo un recurso público de libre acceso.

### No rompas la web

Otra frase que escucharás sobre los estándares web abiertos es "no rompas la web" — la idea es que cualquier tecnología web nueva que se introduzca debe ser compatible con versiones anteriores (es decir, los sitios web antiguos seguirán funcionando) y compatibles con versiones posteriores (las tecnologías futuras a su vez serán compatibles con las que tenemos actualmente). A medida que avances en el material de aprendizaje que se presenta aquí, comenzarás a aprender cómo se hace posible esto con un trabajo de diseño e implementación muy inteligente.

## Ser desarrollador web es bueno

La industria web es un mercado muy atractivo para ingresar si estás buscando trabajo. Las cifras publicadas recientemente dicen que actualmente hay alrededor de 19 millones de desarrolladores web en el mundo, y esa cifra se establecerá en más del doble en la próxima década. Y al mismo tiempo, hay una escasez de habilidades en la industria, entonces, ¿qué mejor momento para aprender sobre desarrollo web?

Sin embargo, no todo es diversión y juegos — crear sitios web es una propuesta más complicada de lo que solía ser, y tendrás que dedicar algo de tiempo a estudiar todas las diferentes tecnologías que necesitas usar, todas las técnicas y las mejores prácticas que necesitas conocer y todos los patrones típicos que se te pedirá que implementes. Te tomará unos meses comenzar realmente a involucrarte en él, y luego deberás seguir aprendiendo para que tu conocimiento se mantenga actualizado con todas las nuevas herramientas y funciones que aparecen en la plataforma web, y seguir practicando y perfeccionando tu oficio.

_Lo único constante es el cambio._

¿Esto suena difícil? No te preocupes: nuestro objetivo es brindarte todo lo que necesitas saber para comenzar, y las cosas serán más fáciles. Una vez que aceptes el cambio constante y la incertidumbre de la web, comenzarás a disfrutar. Como parte de la comunidad web, tendrás toda una red de contactos y material útil para ayudarte, y comenzarás a disfrutar de las posibilidades creativas que brinda.

Ahora eres un creativo digital. Disfruta de la experiencia y el potencial de ganarte la vida.

## Descripción de las tecnologías web modernas

Hay una serie de tecnologías que debes aprender si deseas ser un desarrollador web front-end. En esta sección las describiremos brevemente. Para obtener una explicación más detallada de cómo funcionan juntas algunas de ellas, lee nuestro artículo [Cómo funciona la web](/es/docs/Learn/Getting_started_with_the_web/How_the_Web_works).

### Navegadores

Probablemente estés leyendo estas palabras dentro de un navegador web en este mismo momento (a menos que las hayas impreso o estés utilizando tecnología de asistencia, como un lector de pantalla para leerlas). Los navegadores web son los programas de software que la gente usa para consumir la web e incluyen [Firefox](https://www.mozilla.org/es-MX/firefox/), [Chrome](https://www.google.com/intl/es-419/chrome/), [Opera](https://www.opera.com/es), [Safari](https://www.apple.com/mx/safari/) y [Edge](https://www.microsoft.com/es-es/edge).

### HTTP

El Protocolo de transferencia de hipertexto, o [HTTP](/es/docs/Web/HTTP/Basics_of_HTTP), es un protocolo de mensajería que permite a los navegadores web comunicarse con los servidores web (donde se almacenan los sitios web). Una conversación típica es algo así como

```bash
"Hola servidor web. ¿Me puedes dar los archivos que necesito para renderizar bbc.co.uk"?

"Seguro navegador web — aquí los tienes"

[Descarga archivos y renderiza la página web]
```

La sintaxis real de los mensajes HTTP (llamados peticiones y respuestas) no es tan legible para los humanos, pero esto te da una idea básica.

### HTML, CSS y JavaScript

[HTML](/es/docs/Web/HTML), [CSS](/es/docs/Web/CSS) y [JavaScript](/es/docs/Web/JavaScript) son las tres tecnologías principales que utilizarás para crear un sitio web:

- El lenguaje de marcado de hipertexto, o **HTML**, es un lenguaje de marcado que consta de diferentes elementos en los que puedes ajustar (marcar) el contenido para darle significado (semántica) y estructura. El HTML simple se ve así:

  ```html
  <h1>Este es un encabezado de alto nivel</h1>

  <p>Este es un párrafo de texto.</p>

  <img src="cat.jpg" alt="Una imagen de mi gato" />
  ```

  Si adoptamos una analogía de la construcción de casas, HTML sería como los cimientos y las paredes de la casa, que le dan estructura y la mantienen unida.

- Hojas de estilo en cascada (**CSS** por "_Cascading Style Sheets_") es un lenguaje basado en reglas que se utiliza para aplicar estilos a tu HTML, por ejemplo, establecer colores del texto y del fondo, agregar bordes, animar cosas o diseñar una página de cierta manera. Como un sencillo ejemplo, el siguiente código convertirá nuestro párrafo HTML en rojo:

  ```css
  p {
    color: red;
  }
  ```

  En la analogía de la casa, CSS es como la pintura, el papel tapiz, las alfombras y los cuadros que usarías para hacer que la casa se vea bien.

- **JavaScript** es el lenguaje de programación que usamos para agregar interactividad a los sitios web, desde el cambio de estilo dinámico hasta la obtención de actualizaciones desde el servidor, pasando por gráficos complejos en 3D. El siguiente JavaScript simple almacenará en la memoria una referencia a nuestro párrafo y cambiará el texto dentro de él:

  ```js
  let pElem = document.querySelector("p");
  pElem.textContent = "¡Cambiamos el texto!";
  ```

  En la analogía de la casa, JavaScript es como la cocina, el televisor, el microondas o la secadora de pelo — las cosas que le dan a tu casa una útil funcionalidad.

### Herramientas

Una vez que hayas aprendido las tecnologías "sin procesar" que se pueden usar para crear páginas web (como HTML, CSS y JavaScript), pronto comenzarás a encontrar varias herramientas que puedes usar para hacer tu trabajo más fácil y/o más eficiente. Algunos ejemplos incluyen:

- Las [herramientas de desarrollo](/es/docs/Learn/Common_questions/What_are_browser_developer_tools) dentro de los navegadores modernos que se pueden usar para depurar tu código.
- [Herramientas de prueba](/es/docs/Learn/Tools_and_testing/Cross_browser_testing) que puedes usar para ejecutar pruebas y mostrar si tu código se está comportando como lo esperabas.
- Bibliotecas y marcos de desarrollo construidos sobre JavaScript que te permiten crear ciertos tipos de sitios web de manera mucho más rápida y efectiva.
- Las llamadas "Linternas" (`Linters` en inglés), que toman un conjunto de reglas, examinan tu código y resaltan los lugares donde no has seguido las reglas correctamente.
- Minificadores, que eliminan todos los espacios en blanco de tus archivos de código fuente para que sean más pequeños y, por lo tanto, se descarguen del servidor más rápidamente.

### Marcos de desarrollo y lenguajes de lado del servidor

HTML, CSS y JavaScript son lenguajes de la interfaz del usuario ("`front-end`" o del lado del cliente), lo cual significa que los ejecuta el navegador para producir la interfaz del sitio web que los usuarios pueden utilizar.

Hay otra clase de lenguajes llamados lenguajes de la interfaz de admiración ("`back-end`" o de lado del servidor), lo cual significa que se ejecutan en el servidor antes de que el resultado se envíe al navegador para que se muestre. Un uso típico de un lenguaje de lado del servidor es obtener algunos datos de una base de datos y generar algo de HTML para contener los datos, antes de enviar el HTML al navegador para mostrárselo al usuario.

Los lenguajes de lado del servidor de ejemplo incluyen ASP.NET, Python, PHP y NodeJS.

## Mejores prácticas web

Hemos hablado brevemente sobre las tecnologías que utilizarás para crear sitios web. Ahora analicemos las mejores prácticas que debes emplear para asegurarte de que estás utilizando esas tecnologías de la mejor manera posible.

Al hacer desarrollo web, la principal causa de incertidumbre proviene del hecho de que no sabes qué combinación de tecnologías utilizará cada usuario para ver tu sitio web:

- El usuario 1 podría estar mirándolo en un iPhone, con una pantalla pequeña y estrecha.
- El usuario 2 puede estar mirándolo en una computadora portátil con Windows con un monitor de pantalla ancha adjunto.
- El usuario 3 puede ser ciego y usar un lector de pantalla para leerle la página web.
- El usuario 4 podría estar usando una máquina de escritorio realmente antigua que no puede ejecutar navegadores modernos.

Debido a que no sabes exactamente qué usarán tus usuarios, debes diseñar a la defensiva — hacer que tu sitio web sea lo más flexible posible, de modo que todos los usuarios anteriores puedan hacer uso de él, incluso si no todos obtienen la misma experiencia. En resumen, estamos tratando de hacer que la web funcione para todos, tanto como sea posible.

Encontrarás los siguientes conceptos en algún momento de tus estudios.

- **Compatibilidad entre navegadores** — es la práctica de intentar asegurarte de que tu página web funcione en tantos dispositivos como sea posible. Esto incluye el uso de tecnologías compatibles con todos los navegadores, brindando mejores experiencias a los navegadores que pueden manejarlas (mejora progresiva) y/o escribiendo código para que vuelvas a una experiencia más simple pero aún utilizable en navegadores más antiguos (degradación elegante). También implica muchas pruebas para ver si algo falla en ciertos navegadores, y luego más trabajo para corregir esas fallas.
- **Diseño web receptivo** — es la práctica de hacer que tu funcionalidad y diseños sean flexibles para que se puedan adaptar automáticamente a diferentes navegadores. Un ejemplo obvio es un sitio web que se presenta de una forma en un navegador de pantalla ancha en el escritorio, pero que se muestra como un diseño de una sola columna más compacto en los navegadores de teléfonos móviles. Intenta ajustar el ancho de la ventana de tu navegador ahora y ve qué sucede.
- **Rendimiento** — significa hacer que los sitios web se carguen lo más rápido posible, pero también hacerlos intuitivos y fáciles de usar para que los usuarios no se sientan frustrados y vayan a otro lugar.
- **Accesibilidad** — significa hacer que tus sitios web sean utilizables por la mayor cantidad posible de personas (los conceptos relacionados son diversidad e inclusión y diseño inclusivo). Esto incluye a personas con impedimentos visuales, auditivos, cognitivos o físicos. También va más allá de las personas con discapacidad — ¿qué pasa con los jóvenes o los ancianos, las personas de diferentes culturas, las personas que utilizan dispositivos móviles o las personas con conexiones de red lentas o poco fiables?
- **Internacionalización** — significa hacer que los sitios web sean utilizables por personas de diferentes culturas, que hablan diferentes idiomas al tuyo. Hay consideraciones técnicas aquí (como alterar tu diseño para que aún funcione bien para idiomas de derecha a izquierda, o incluso verticales) y humanas (tal como usar un lenguaje simple, sin jerga para que las personas que tienen tu idioma ya que su segundo o tercer idioma es más probable que entienda tu texto).
- **Privacidad y seguridad**. Estos dos conceptos están relacionados pero son diferentes. La privacidad se refiere a permitir que las personas realicen sus negocios de manera privada y no espiarlos o recopilar más datos de los estrictamente necesarios. La seguridad se refiere a la construcción de tu sitio web de una manera segura para que los usuarios malintencionados no puedan robar la información contenida en él o de tus usuarios.

## Ve también

- [Historia de la World Wide Web](https://es.wikipedia.org/wiki/Historia_de_la_World_Wide_Web)
- [¿Cómo funciona la internet?](/es/docs/Learn/Common_questions/How_does_the_Internet_work)
