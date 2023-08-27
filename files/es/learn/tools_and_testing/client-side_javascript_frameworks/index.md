---
title: Entendiendo los frameworks de JavaScript del lado del cliente
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks
---

{{LearnSidebar}}

Los frameworks de JavaScript son una parte esencial del desarrollo web front-end moderno, los cuales proveen a los desarrolladores herramientas probadas y testeadas para la creación de aplicaciones web interactivas y escalables. Muchas empresas modernas utilizan frameworks como parte estándar de sus herramientas, por lo que muchos trabajos de desarrollo front-end en la actualidad requieren experiencia en frameworks.

Como aspirante a desarrollador front-end, puede resultar difícil saber por dónde empezar cuando se trata de aprender sobre frameworks; hay muchos frameworks diferentes para elegir, nuevas opciones surgen todo el tiempo. En su mayoría funcionan de forma similar, pero hacen algunas cosas de manera diferente, y hay algunas cosas específicas con las que se debe tener cuidado a la hora de usar frameworks.

En esta serie de artículos, tenemos como objetivo brindarte un punto de partida cómodo que te sirva de ayuda para comenzar a aprender sobre frameworks. Nuestra intención no es enseñarte, de manera exhaustiva, todo lo que se necesita saber sobre React/ReactDOM, o Vue, o algún otro framework en específico; la documetación de los equipos de los frameworks (entre otros recursos) ya cumplen esta función. En su lugar, queremos brindarte respaldo y responder primero a preguntas más fundamentales como:

- ¿Por qué debería hacer uso de un framework? ¿Qué problemas me resuelven estos?
- ¿Qué preguntar a la hora de escoger un framework? ¿En verdad necesito usar un framework?
- ¿Qué características tienen los frameworks? ¿Cómo funcionan en general y cómo se diferencian las maneras en que los frameworks implementan estas características?
- ¿Cómo se relacionan con JavaScript "puro" o HTML?

Después de esto, proveeremos algunos tutoriales que cubren los aspectos básicos de algunos de los diferentes frameworks que existen, de manera que puedas tener el contexto y la familiaridad suficientes para poder empezar a profundizar por tu propia cuenta. Queremos que avances y aprendas sobre los frameworks de manera pragmática, de forma tal que se tengan presente las buenas prácticas esenciales de la plataforma web, como lo es la accesibilidad.

**[Empieza ahora con "Introducción a los frameworks del lado del cliente"](/es/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction)**

## Prerrequisitos

Antes de intentar aprender sobre los frameworks del lado del cliente, es recomendable que conozcamos los conceptos básicos de los principales lenguajes de la web: [HTML](/es/docs/Learn/HTML), [CSS](/es/docs/Learn/CSS), y —especialmente— [JavaScript](/es/docs/Learn/JavaScript).

Como resultado, tu código será más consistente y profesional, por lo que podrás solucionar problemas con mayor confianza si comprende las características fundamentales de la plataforma web sobre las que se basan los frameworks.

## Guías introductorias

- [1. Introducción a los frameworks del lado del cliente](/es/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction)
  - : Comenzamos nuestro estudio sobre los frameworks con una descripción general del área, repasando un poco de historia sobre JavaScript y los frameworks, por qué estos existen, y qué nos brindan; por donde empezar al momento de escoger un framework por aprender y qué alternativas existen a los frameworks del lado del cliente.
- [2. Características principales de los frameworks](/es/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features)
  - : Cada framework destacado de JavaScript tiene un enfoque diferente para actualizar el DOM, manejar los eventos del navegador, y brindarte una experiencia de desarrollo satisfactoria. En este artículo, exploraremos las características principales de "los cuatro grandes" frameworks, observando cómo estos tienden a operar desde un nivel alto, al igual que las diferencias entre ellos.

## Tutoriales de React

> **Nota:** Los tutoriales de React se probaron por última vez en mayo de 2020, con React/ReactDOM 16.13.1 y create-react-app 3.4.1.Si necesitas comparar tu código con nuestra versión, puedes encontrar una versión terminada de la muestra del código de la aplicación React en nuestro [repositorio todo-react](https://github.com/mdn/todo-react). Para una versión en vivo, consulta <https://mdn.github.io/todo-react-build/>.

- [1. Primeros pasos en React](/es/docs/Learn/Herramientas_y_pruebas/Lado-del-cliente_JavaScript_frameworks/React_getting_started)
  - : En este artículo conoceremos React. Descubriremos algunos detalles sobre su trasfondo y casos de uso, configuraremos una cadena básica de herramientas para React en nuestra computadora local, crearemos y jugaremos con una aplicación inicial sencilla, mientras aprendemos —durante el proceso— un poco acerca de cómo funciona React.
- [2. Comenzando con nuestra lista de tareas de React](/es/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning)
  - : Digamos que se nos ha encomendado la tarea de crear una prueba de concepto (Proof of Concept — PoC) en React: una aplicación que permita a los usuarios agregar, editar y eliminar tareas en las que se quiera trabajar, pero que también permita marcar las tareas como completadas sin eliminarlas. Este artículo te guiará en la organización de la estructura y los estilos básicos del componente App, de manera que esté listo para la definición e interactividad de componentes individuales, los cuales agregaremos más adelante.
- [3. Basando nuestra aplicación React en componentes](/es/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components)
  - : Hasta este momento, nuestra aplicación no hace gran cosa. Antes de que podamos hacerla funcionar, tenemos que dividirla en componentes descriptivos y manejables. React no tiene reglas estrictas para lo que, se considera o no, un componente, ¡eso depende de ti! En este artículo, te mostraremos una forma raznoable de dividir nuestra aplicación en componentes.
- [4. Interactividad en React: eventos y estado](/es/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state)
  - : Habiendo elaborado nuestro plan de componentes, es hora de comenzar a actualizar nuestra aplicación, para que pase de ser una interfaz de usuario completamente estática a una que nos permita, realmente, interactuar y cambiar las cosas. Es eso mismo lo que haremos en este artículo, profundizando en los eventos y el estado a medida que avancemos.
- [5. Interactividad en React: edición, filtrado, renderizado condicional](/es/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering)
  - : A medida que nos acercamos al final de nuestro viaje en React (al menos por ahora), agregaremos los toques finales a las áreas principales de funcionalidad en nuestra aplicación de lista de tareas. Esto incluye permitir la edición de tareas existentes y el filtrado de la lista de tareas entre todas las tareas, las completadas, y las incompletas. A lo largo del capítulo, veremos la renderización condicional de la interfaz de usuario.
- [6. Accesibilidad en React](/es/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility)
  - : En el artículo final de nuestro tutorial, nos enfocaremos en la accesibilidad (broma intencional), incluyendo la gestión del enfoque en React, la cual puede mejorar la usabilidad y reducir la confusión para usuarios que navegan tanto, a través de lectores de pantalla, como solo del teclado.
- [7. Recursos sobre React](/es/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources)
  - : En nuestro artículo final, te brindamos una lista de recursos sobre React, los cuales podrás utilizar para avanzar más en tu aprendizaje.

## Tutoriales de Ember

> **Nota:** Los tutoriales de Ember se probaron por última vez en mayo de 2020, con Ember/Ember CLI versión 3.18.0.Si necesitas comparar tu código con nuestra versión, puedes encontrar una versión terminada de la muestra del código de la aplicación Ember en nuestro [repositorio ember-todomvc-tutorial](https://github.com/NullVoxPopuli/ember-todomvc-tutorial/tree/master/steps/00-finished-todomvc/todomvc). Para una versión en vivo, consulta <https://nullvoxpopuli.github.io/ember-todomvc-tutorial/> (esto también incluye algunas características adicionales que no se cubren en este tutorial).

- [1. Primeros pasos en Ember](/es/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started)
  - : En nuestro primer artículo de Ember veremos cómo funciona Ember y para qué resulta útil, instalaremos la cadena de herramientas de Ember de manera local, crearemos una aplicación de muestra, y luego realizaremos una configuración inicial para prepararla para el desarrollo.
- [2. Estructura de una aplicación Ember y cómo se basa en componentes](/es/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_structure_componentization)
  - : En este artículo, continuaremos planificando la estructura de nuestra aplicación Ember TodoMVC, agregando el HTML necesario y luego dividiendo esa estructura HTML en componentes.
- [3. Interactividad de Ember: eventos, clases, y estado](/es/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_interactivity_events_state)
  - : En este punto, comenzaremos a agregar un poco de interactividad a nuestra aplicación, dándole la capacidad de agregar y mostrar nuevos elementos de tareas por hacer. A medida que avanzamos, veremos el uso de eventos en Ember, la creación de clases de componentes para contener código JavaScript que controle las funciones interactivas, y la configuración de un servicio para hacer seguimiento del estado de los datos de nuestra aplicación.
- [4. Interactividad de Ember: funcionalidad del footer, renderizado condicional](/es/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_conditional_footer)
  - : Ahora es momento de comenzar a abordar la funcionalidad del footer en nuestra aplicación. Aquí haremos que el contador de tareas pendientes se actualice de manera que muestre el número correcto de tareas pendientes por completar, y aplicaremos correctamente los estilos a las tareas completadas (es decir, aquellos donde la casilla de verificación ha sido marcada). También conectaremos nuestro botón "Borrar completados". A lo largo del capítulo, aprenderemos sobre el uso de la renderización condicional en nuestras plantillas.
- [5. Enrutamiento en Ember](/es/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_routing)
  - : En este artículo aprendemos sobre enrutamiento o el filtrado basado en URL, como a veces se lo denomina. Lo usaremos para proporcionar una URL única para cada una de las tres vistas de tareas: "Todas", "Activas" y "Completadas".
- [6. Recursos sobre y solución de problemas](/es/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources)
  - : En nuestro artículo final sobre Ember, te proporcionamos una lista de recursos que puedes utilizar para avanzar más en tu aprendizaje, además de información útil para la solución problemas y otra información.

## Tutoriales de Vue

> **Nota:** Los tutoriales de Vue se probaron por última vez en mayo de 2020, con Vue 2.6.11.Si necesitas comparar tu código con nuestra versión, puedes encontrar una versión terminada de la muestra del código de la aplicación Vue en nuestro [repositorio todo-vue](https://github.com/mdn/todo-vue). Para una verisón en vivo, consulta <https://mdn.github.io/todo-vue/dist/>.

- [1. Primeros pasos en Vue](/es/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started)
  - : A continuación, presentamos Vue, el tercero de nuestros frameworks. En este artículo, veremos un poco sobre el origen de Vue, aprenderemos cómo instalarlo y crear un nuevo proyecto, estudiaremos la estructura de alto nivel de todo el proyecto y de un componente individual, veremos cómo ejecutar el proyecto localmente y prepararlo para comenzar a construir nuestro ejemplo.
- [2. Creando nuestro primer componente de Vue](/es/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component)
  - : Ahora es momento de profundizar en Vue y crear nuestro propio componente personalizado: comenzaremos creando un componente para representar cada elemento en la lista de tareas. Durante el artículo, aprenderemos sobre algunos conceptos importantes, como llamar a componentes dentro de otros componentes, pasarles datos a través de props y guardar el estado de los datos.
- [3. Renderizando una lista de componentes de Vue](/es/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists)
  - : En este punto, tenemos un componente completamente funcional; ahora estamos listos para agregar varios componentes `ToDoItem` a nuestra aplicación. En este artículo, veremos cómo agregar un conjunto de datos de elementos de tareas a nuestro componente `App.vue`, el cual luego repasaremos en bucle, mostrando dentro de los componentes de `ToDoItem` mediante el uso de la directiva `v-for`.
- [4. Agregar una nueva forma de tareas pendientes: eventos, métodos y modelos de Vue](/es/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_methods_events_models)
  - : Ahora tenemos datos de muestra listos y un ciclo que toma cada bit de datos y lo renderiza dentro de un `ToDoItem` en nuestra aplicación. Lo que realmente necesitamos a continuación es la capacidad de permitirle a nuestros usuarios que introuduzcan sus propios elementos de tareas pendientes en la aplicación, y para ello, necesitaremos un `<input>` de texto, un evento para efectuar una vez se envíen los datos, un método por accionar al momento del envío para agregar los datos y volver a renderizar la lista, y un modelo para controlar los datos. Esto es lo que cubriremos en este artículo.
- [5. Agregando estilos a los componentes de Vue con CSS](/es/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling)
  - : Por fin ha llegado el momento de hacer que nuestra aplicación luzca un poco mejor. En este artículo, exploraremos las diferentes formas de agregar estilos a los componentes de Vue con CSS.
- [6. Usando propiedades calculadas de Vue](/es/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties)
  - : En este artículo, agregaremos un contador que muestre el número de tareas completadas, utilizando una función de Vue llamada propiedades calculadas. Estos funcionan de manera similar a los métodos, pero solo se vuelven a ejecutar cuando cambia una de sus dependencias.
- [7. Renderización condicional en Vue: editando tareas existentes](/es/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering)
  - : Ahora es momento de agregar una de las principales piezas de la funcionalidad que aún nos falta: la capacidad de editar tareas existentes. Para hacer esto, aprovecharemos las capacidades de renderizado condicional de Vue, es decir, `v-if` y `v-else`, los cuales nos permiten alternar entre la vista de una tarea existente y una vista de edición donde podremos actualizar las etiquetas de las tareas. También veremos cómo agregar funcionalidad para eliminar tareas.
- [8. Gestión de enfoque con Vue refs](/es/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_refs_focus_management)
  - : Ya estamos cerca de terminar con Vue. La última funcionalidad a considerar es la gestión del enfoque, o dicho de otra manera, cómo podemos mejorar la accesibilidad de nuestra aplicación desde el teclado. Veremos el uso de Vue refs para manejar esto, una característica avanzada que nos permite tener acceso directo a los nodos DOM subyacentes debajo del DOM virtual, o acceso directo desde un componente a la estructura DOM interna de un componente interno.
- [9. Recursos sobre Vue](/es/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources)
  - : Ahora, completaremos nuestro estudio de Vue brindándote una lista de recursos que podrás utilizar para avanzar en tu aprendizaje, además de algunos otros consejos útiles.

## ¿Cuales frameworks hemos escogido?

Hacemos pública nuestra serie inicial de artículos con guías enfocadas en tres de los principales frameworks que existen: React/ReactDOM, Ember, y Vue. Esto se debe a varias un razones:

- Son opciones populares que estarán disponibles por un largo tiempo. Al igual que con cualquier otra herramienta de software, es bueno apegarse a opciones que son desarrolladas de manera activa, lo que indica que, probablemente, no serán descontinuadas dentro de poco, lo que las convierte en complementos atractivos para mostrar como habilidades a la hora de buscar un trabajo.
- Tienen comunidades sólidas y una buena documentación. Es muy importante poder obtener ayuda al aprender un tema complejo, especialmente cuando recién se está comenzando.
- No contamos con los recursos para cubrir todos los frameworks modernos. Una lista así resultaría muy difícil de mantener actualizada, ya que todo el tiempo están surgiendo nuevos frameworks.
- Como principiante, tratar de escoger en qué concentrarte entre la gran cantidad de opciones disponibles es un gran problema. Por lo tanto, resulta útil mantener una lista corta.

Queremos decir esto desde un principio: **no** hemos escogido los frameworks en los que nos estamos enfocando porque pensamos que son los mejores o porque los respaldamos de alguna manera. Simplemente, consideramos que obtienen una puntuación alta de acuerdo a los criterios anteriores.

Ten en cuenta que esperábamos poder incluir más frameworks en la publicación inicial, pero que decidimos publicar el contenido y agregar, más adelante, otras guías, en lugar de retrasarlo más. Si tu framework favorito no se encuentra listado en este contenido y te gustaría ayudar a cambiar esto, ¡no dudes en discutirlo con nosotros! Puedes contactarnos a través de [Matrix](https://wiki.mozilla.org/Matrix), o [Discourse](https://discourse.mozilla.org/c/mdn), o enviarnos un correo electrónico a la [lista mdn-admins](mailto:mdn-admins@mozilla.org).
