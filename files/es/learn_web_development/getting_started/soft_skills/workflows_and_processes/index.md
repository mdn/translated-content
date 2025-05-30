---
title: Flujos de trabajo y procesos
slug: Learn_web_development/Getting_started/Soft_skills/Workflows_and_processes
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Soft_skills/Collaboration_and_teamwork", "Learn_web_development/Getting_started/Soft_skills/Finding_a_job", "Learn_web_development/Getting_started/Soft_skills")}}

Un aspecto importante de los proyectos técnicos que los principiantes a menudo pasan por alto es una idea de la perspectiva general. Podrían aprender una herramienta o un lenguaje individual, pero desconocer todas las bibliotecas, herramientas, sistemas y roles laborales que se combinan para entregar una aplicación web completa. Las siguientes secciones cubren diferentes aspectos de la perspectiva general a un alto nivel.

<table>
  <tbody>
    <tr>
      <th scope="row">Requisitos previos:</th>
      <td>
        N/A
      </td>
    </tr>
    <tr>
      <th scope="row">Resultados del aprendizaje:</th>
      <td>
        <ul>
          <li>Combinaciones típicas de tecnología en proyectos web.</li>
          <li>Roles laborales típicos en un equipo de desarrollo web.</li>
          <li>Fases típicas de proyectos técnicos y dónde participan los diferentes roles laborales.</li>
          <li>Procesos comunes de gestión del trabajo, como ágil y cascada.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Combinaciones típicas de tecnología

Al crear un sitio web, utilizarás una combinación de diferentes tecnologías, comúnmente conocida como **tech stack** (conjunto de tecnologías). A medida que los sitios web se hacen más grandes y complejos, también lo hace el conjunto de tecnologías. Podría comenzar de forma sencilla cuando estás creando una demostración y solo tú y algunos colegas la verán. Sin embargo, el conjunto de tecnologías de un sitio web de producción aparentemente simple podría ser más compleja de lo que piensas cuando consideras que necesita:

- Cargarse rápidamente (este es el propósito del [rendimiento](/es/docs/Learn_web_development/Extensions/Performance/why_web_performance)).
- Manejar una gran cantidad de usuarios simultáneamente (debe **escalar**).
- Estar bien diseñado, para que los usuarios puedan acceder fácilmente a la información y los servicios que contiene.
- Ser fácil de trabajar y mantener para un equipo.

A un nivel muy alto, el conjunto de tecnologías de una aplicación web podría verse así:

```plain
Front-end (Interfaz)
HTML, CSS, JavaScript
|
Back-end (Servidor)
Node.js, .NET, PHP, Python o algún otro lenguaje del lado del servidor
|
Base de datos
MySQL, Postgres, MongoDB o alguna otra base de datos
|
Servidor web
El tuyo propio, construido alrededor de un producto de servidor como Apache, o un servicio como Netlify
```

> [!NOTE]
> A menudo verás acrónimos que se refieren a conjuntos de tecnologías populares, como [MEAN](https://www.mongodb.com/resources/languages/mean-stack) (MongoDB, Express, Angular, Node) o [LAMP](<https://en.wikipedia.org/wiki/LAMP_(software_bundle)>) (Linux, Apache, MySQL, PHP o Python).

En MDN, nos preocupamos principalmente por la parte de la interfaz, pero incluso eso se puede dividir en muchas piezas diferentes. Tomemos la interfaz por ejemplo:

- Probablemente utilizarás un framework de JavaScript (como [React](/es/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started)) para definir los componentes que se combinan para crear la interfaz de usuario.
- El framework probablemente utilizará algún tipo de lenguaje de plantillas (como [Mustache](https://mustache.github.io/)) para definir la estructura HTML, pero también proporcionará funcionalidad para incluir dinámicamente contenido variable.
- Incluirás información para dar estilo a tu contenido a través de CSS de una manera que sea compatible con el framework. Esto podría escribirse en CSS puro, o en un framework de CSS (como [Tailwind](https://tailwindcss.com/)) o un preprocesador (como [Sass](https://sass-lang.com/)).
- Un proyecto de JavaScript debe incluir pruebas, para asegurarse de que cualquier nueva adición de código no rompa su funcionalidad. Las pruebas generalmente se implementan utilizando un framework de pruebas (como [Jest](https://jestjs.io/)).
- Los sitios web más grandes utilizarán una herramienta de empaquetado/construcción (como [Parcel](https://parceljs.org/)) para mejorar el rendimiento al mantener bajos los tamaños de los archivos, eliminar los componentes no utilizados del código de producción, etc.
- Y así sucesivamente.

> [!NOTE]
> A menudo escucharás que los sitios web y las aplicaciones se construyen utilizando **patrones arquitectónicos** específicos. Por ejemplo, [modelo-vista-controlador (MVC)](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) es un patrón que muchos frameworks de JavaScript siguen, mientras que [publicar-subscribir (pub/sub)](https://dev.to/willvelida/the-publisher-subscriber-pattern-pubsub-messaging-10in) se utiliza comúnmente en aplicaciones de mensajería. No es especialmente importante que entiendas estos patrones en detalle, pero cierta familiaridad puede ser útil al tratar de entender un nuevo framework o herramienta.

También habrá herramientas involucradas fuera del conjunto de tecnologías real en sí para ayudarte a administrarla o crear activos para el sitio web, tales como:

- Herramientas de planificación para ayudarte a planificar lo que vas a hacer a lo largo del curso del proyecto a un alto nivel (como [Miro](https://miro.com/)).
- Sistemas de control de versiones (VCS). Probablemente utilizarás un VCS basado en [git](https://git-scm.com/), como [GitHub](https://github.com/).
- Paquetes de diseño gráfico/de interfaz (como [Figma](https://www.figma.com/) o [Canva](https://www.canva.com/)).
- Herramientas de gestión de proyectos como [Trello](https://trello.com/) o [Asana](https://asana.com/).

Bien, eso es mucho para asimilar. Nuestro consejo es **¡no te asustes!** El objetivo de este artículo no es preocuparte haciéndote pensar que de repente tienes 10 veces más cosas que aprender que antes. La idea es simplemente hacerte consciente de la perspectiva general en términos de proyectos de sitios web, y darte una familiaridad básica con algunos de los términos que podrías encontrar.

Eventualmente, desarrollarás algún conocimiento de varias de las herramientas y tecnologías anteriores, pero no serás un experto en todas ellas, ni tendrás que serlo — para eso están los equipos. Por el momento, estás haciendo absolutamente lo correcto al aprender las habilidades básicas como HTML, CSS y JavaScript. Más herramientas, y especializaciones, vendrán más adelante en tu carrera.

## Roles laborales

En un equipo de desarrollo web, hay muchos roles laborales diferentes involucrados; es útil entender lo que implica cada uno:

- **Gerente de producto**
  - : Responsable de todo el sitio web desde una perspectiva de producto — ¿cómo está funcionando el producto en el mercado, en comparación con sus competidores? ¿Cuáles son sus fortalezas y debilidades? ¿Qué nuevas características está pidiendo el público objetivo y cuáles son las de mayor prioridad? ¿Cuáles son los principales criterios de éxito del sitio web y cómo ayudaron las nuevas características recientes a cumplir con esos criterios? El gerente de producto recopilará datos y escribirá informes para ayudar al equipo a comprender qué tan efectivo es su trabajo y priorizar el trabajo futuro.
- **Gerente de proyecto**
  - : Responsable de organizar el trabajo que el equipo necesita hacer. El gerente de proyecto creará un plan de proyecto con tareas priorizadas y fechas de vencimiento, asignará personal para realizar cada tarea, realizará reuniones de control periódicas para ver si se están cumpliendo los objetivos de progreso y para sacar a la superficie cualquier problema, y ajustará el plan según sea necesario.
- **Diseñador de experiencia de usuario (UX)**
  - : Responsable de comprender las necesidades del público objetivo del producto y de diseñar el flujo de trabajo/experiencia del producto para que esas necesidades del público se satisfagan de la manera más efectiva. Las preguntas típicas de UX son "¿a dónde deberíamos dirigir al usuario primero cuando llega a nuestra página de inicio?" y "¿cómo podemos hacer que registrarse para una cuenta sea lo más fácil e intuitivo posible?". Este trabajo a menudo se combina con la investigación y las pruebas de usuarios para comprender mejor al público objetivo, y la creación de esquemas del proyecto para comunicar ideas. El diseñador de UX es uno de los principales consumidores de los informes del gerente de producto.
- **Diseñador gráfico**
  - : Responsable del trabajo de diseño visual en el proyecto del sitio web. Los diseñadores gráficos son responsables de una variedad de disciplinas como la tipografía, la elección de esquemas de color, la creación de iconos y otros activos gráficos y la creación de maquetas de sitios web basadas en los esquemas del proyecto del diseñador de UX.
- **Desarrollador de interfaz (front-end)**
  - : ¡Esto es (probablemente) lo que estás tratando de ser si estás leyendo esto! Los desarrolladores front-end utilizan HTML, CSS y JavaScript para crear la parte visual del sitio web con la que interactúan los usuarios, dando vida a las maquetas visuales y de comportamiento creadas por los diseñadores de UX y gráficos.
- **Desarrollador del lado del servidor (back-end)**
  - : Responsable de las partes no visuales del sitio web. Escriben código que se ejecutará del lado del servidor para solicitar datos internos, generar páginas HTML a partir de plantillas y procesar datos externos enviados por los usuarios. También se encargan de la configuración del servidor web, mantener el sitio seguro, etc.
- **Desarrollador full-stack**
  - : Se encarga de las tareas de desarrollo de interfaz y de desarrollo del lado del servidor.
- **Ingeniero de control de calidad (QA)**
  - : Responsable de probar las nuevas características para asegurarse de que funcionen correctamente y de informar de los errores, comunicándose con los desarrolladores para ayudarles a priorizar las correcciones necesarias.
- **Especialista en contenido/redactor técnico**
  - : Responsable de asegurarse de que el contenido textual del sitio web funcione tan bien como sea posible para el público objetivo. Esto incluye la estructura de la información y cómo se navega, las etiquetas de texto de la interfaz de usuario, las publicaciones del blog, el texto de marketing y la documentación del producto.

### Roles laborales menos comunes

Otros roles laborales menos comunes incluyen:

- **Investigador de usuarios**
  - : Los equipos más grandes a menudo tendrán un investigador dedicado para hacer la investigación y las pruebas de los usuarios.
- **Especialista en optimización de motores de búsqueda (SEO)**
  - : Analiza el contenido y la estructura del sitio web y realiza cambios que harán que el sitio web sea más visible en los resultados relevantes de los motores de búsqueda. Consulta {{glossary("SEO")}} para obtener más información.

## Fases del proyecto técnico

Un proyecto técnico típico podría ocurrir así:

1. El gerente de producto identifica un nuevo conjunto de requisitos del usuario para el sitio web.
2. Lo discuten con el equipo y se decide que estos requisitos pueden cumplirse añadiendo una nueva característica al sitio web.
3. El gerente de proyecto discute con el equipo cuáles son los elementos de trabajo individuales necesarios para crear la nueva característica y crea un [proceso de trabajo para gestionarlos](#work_management_processes).
4. El diseñador de UX diseña un flujo de trabajo para la nueva característica que describe cómo debe funcionar y un esquema para proporcionar una idea de dónde podría encajar en el sitio.
5. El diseñador gráfico diseña una maqueta que muestra cómo se verá la característica en el sitio web, junto con las fuentes y la paleta de colores elegidas.
6. El especialista en contenido escribe el texto de la interfaz de usuario requerido por la característica y la documentación requerida para soportarla.
7. El desarrollador _back-end_ crea los sistemas necesarios para almacenar y manejar de forma segura los datos que alimentan la característica.
8. El desarrollador de interfaces crea la característica interactiva basándose en las maquetas del diseñador gráfico y la conecta al servidor para que recupere los datos que necesita.
9. El ingeniero de QA prueba a fondo la nueva característica y escribe un informe detallado sobre los problemas que encuentra en ella.
10. Los desarrolladores corrigen los errores que se consideran lo suficientemente graves como para bloquear el lanzamiento de la característica.
11. Una vez que los errores (de bloqueo) se corrigen y el proyecto se aprueba, la característica se puede poner en marcha en el sitio web.

Esta es una vista simplificada — existirán otras fases en torno a la implementación de la característica en sí, y las fases no se completarán necesariamente en el orden mostrado, pero esto te da una idea de lo que está involucrado.

## Procesos de gestión del trabajo

El gerente de proyecto utilizará algún tipo de proceso para gestionar el proyecto del sitio web, supervisando el progreso de los diferentes elementos de trabajo, asegurándose de que se hagan en el orden correcto y a tiempo, etc. Los dos tipos principales de procesos son:

- **Cascada**
  - : Se refiere a la ejecución de un proyecto en fases claras y fijas, donde cada una depende de la anterior, y no se anticipan demasiados cambios en los requisitos. Generalmente se entrega un solo resultado grande al final del proyecto. La gestión del equipo tiende a ser más burocrática, con menos autonomía.
    - Los proyectos de cascada tienden a estar mejor especificados al principio y tienen menos alcance (añadir requisitos a mitad del proyecto). Además, las versiones de productos más grandes y menos frecuentes son más fáciles de manejar en términos de planificación de lanzamiento, mercadotecnia, entrega de formación y documentación, etc.
    - Sin embargo, la cascada tiende a ser menos flexible y los cambios ocurren mucho más lentamente. Esperar varios meses por una corrección de errores puede ser frustrante.
- **Ágil**
  - : Se refiere a la ejecución de un proyecto de forma más flexible, donde varias fases pueden progresar simultáneamente y se tienden a entregar varios resultados más pequeños en varios hitos diferentes a lo largo del proyecto. Se esperan cambios en los requisitos y pueden gestionarse cambiando las prioridades según sea necesario. Los equipos son generalmente más autónomos.
    - Los proyectos ágiles son flexibles y pueden adaptarse más fácilmente a los cambios en los requisitos. También puede ser agradable tener lanzamientos más frecuentes — los errores se corrigen más rápidamente, la innovación ocurre más a menudo y siempre hay algo de qué hablar para el equipo de mercadotecnia. Los equipos ágiles a menudo hablan de mejora continua.
    - Sin embargo, hay más riesgo de alcance y de que se pasen los plazos, los proyectos a menudo nunca se sienten verdaderamente terminados, y hay más de un ritmo y presión constantes para entregar.

> [!NOTE]
> Los equipos de desarrollo web a menudo prefieren trabajar con un proceso ágil, ya que el desarrollo de software es por su propia naturaleza propenso a cambios (a veces rápidos) en los requisitos debido a nuevos errores, comentarios de los usuarios, estrategia de la empresa, etc.

### Scrum y Kanban

Hay un tipo específico de metodología ágil llamada **Scrum**, que tiene un conjunto fijo de reglas sobre cómo se ejecuta un proyecto. Por ejemplo:

- La persona a cargo del Scrum se llama Scrum master. Este suele ser solo el gerente de proyecto con un nombre diferente.
- El trabajo a realizar se divide en ciclos, llamados **sprints**, que suelen durar dos semanas.
- Antes de cada sprint, se discuten los posibles elementos de trabajo nuevos y, si se aceptan en el sprint, se colocan en una lista de tareas pendientes.
- Los elementos de trabajo se toman de la lista de tareas pendientes y se mueven a través de diferentes fases hacia la finalización, como "en curso" y "en revisión".
- El scrum master realiza cortas **reuniones diarias de pie** donde todos hablan sobre el progreso que han hecho y cualquier problema que puedan tener, para que los problemas se detecten a tiempo.
- Al final de cada sprint, el scrum master realiza una reunión retrospectiva para revisar lo que fue bien, lo que no fue tan bien y qué lecciones se pueden aprender antes del próximo sprint.

Otro tipo de metodología ágil se llama **Kanban**, que tiene menos reglas que Scrum, no usa sprints y tiende a centrarse más en los aspectos de mejora continua de ágil. Kanban es particularmente útil para gestionar procesos continuos que no tienen un final definido claro, como los incidentes de soporte al cliente.

### Tableros de Kanban

Herramientas como [Trello](https://trello.com/) y [Asana](https://asana.com/) proporcionan visualizaciones que muestran el estado de los diferentes elementos de trabajo en un proyecto. Por lo general, se les llama **tableros de Kanban**, aunque se pueden utilizar para gestionar diferentes tipos de procesos, no solo Kanban. Los tableros de Kanban constan de diferentes columnas, que pueden representar diferentes estados de trabajo en un proyecto scrum ("lista de tareas", "por hacer", "en curso", etc.), diferentes tipos de trabajo ("investigación", "diseño", "desarrollo", etc.) o cualquier otra cosa que sea útil para tu proyecto.

[GitHub Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects) proporciona otra buena opción de herramienta, y es de uso gratuito — solo tienes que registrarte para obtener una cuenta de GitHub.

> [!CALLOUT]
>
> **Pruébalo**
>
> Debes leer sobre los procesos anteriores y practicar el seguimiento de algunos de tus proyectos personales o laborales utilizando un tablero de Kanban. No te preocupes por utilizar una metodología Scrum compleja; Kanban básico está bien por el momento. Incluso si estás haciendo algo en solitario, puede ser genial practicar el flujo de trabajo de:
>
> 1. Crear tareas.
> 2. Decidir cuán grandes son o cuánto tiempo tomarán.
> 3. Priorizar las tareas.
> 4. Ponerlas en orden con fechas de vencimiento.
> 5. Comenzar a trabajar en diferentes tareas.
> 6. Establecer sus estados ("en curso", "bloqueado", "hecho", etc.) a medida que avanza el trabajo.
>
> Haz un seguimiento del progreso de un proyecto completo desde el principio hasta el final — pruébalo con tu propio sitio web o con un proyecto paralelo de algún tipo. Además, intenta [contribuir a uno o dos proyectos de código abierto](/es/docs/Learn_web_development/Getting_started/Soft_skills/Collaboration_and_teamwork#participate_in_open_source); muchos de ellos utilizarán un proceso para rastrear su trabajo similar a lo que hemos descrito anteriormente.

## Véase también

- [¿Qué es un conjunto de tecnologías y cómo funcionan?](https://www.mongodb.com/resources/basics/technology-stack), mongodb.com
- [Estructura del equipo de desarrollo de sitios web: roles y procesos](https://www.truemark.dev/blog/web-development-team-structure-role-process/), truemark.dev (2017)
- [Ágil vs. Cascada](https://www.productplan.com/learn/agile-vs-waterfall/), ProductPlan
- [¿Qué es Scrum?](https://www.scrum.org/learning-series/what-is-scrum/), scrum.org

{{PreviousMenuNext("Learn_web_development/Getting_started/Soft_skills/Collaboration_and_teamwork", "Learn_web_development/Getting_started/Soft_skills/Finding_a_job", "Learn_web_development/Getting_started/Soft_skills")}}
