---
title: Hacer peticiones de red con JavaScript
short-title: Peticiones de red
slug: Learn_web_development/Core/Scripting/Network_requests
l10n:
  sourceCommit: 952d0a3a076d16f0cf7566040e5cbe059996138d
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Image_gallery","Learn_web_development/Core/Scripting/JSON", "Learn_web_development/Core/Scripting")}}

Otra tarea muy común en los sitios web y las aplicaciones modernas es hacer peticiones de red para obtener elementos de datos específicos desde el servidor y actualizar secciones de una página web sin necesidad de cargar una página completamente nueva. Este detalle, aparentemente menor, ha tenido un enorme impacto en el rendimiento y el comportamiento de los sitios, así que en este artículo explicaremos el concepto y repasaremos las tecnologías que lo hacen posible, en particular la [API Fetch](/es/docs/Web/API/Fetch_API).

<table>
  <tbody>
    <tr>
      <th scope="row">Requisitos previos:</th>
      <td>Conocimientos de <a href="/es/docs/Learn_web_development/Core/Structuring_content">HTML</a> y de los <a href="/es/docs/Learn_web_development/Core/Styling_basics">fundamentos de CSS</a>, y familiaridad con los conceptos básicos de JavaScript vistos en las lecciones anteriores.</td>
    </tr>
    <tr>
      <th scope="row">Resultados de aprendizaje:</th>
      <td>
        <ul>
          <li>Las peticiones de red asíncronas, que son, con diferencia, el caso de uso más común de JavaScript asíncrono en la web.</li>
          <li>Tipos comunes de recursos que se obtienen de la red: JSON, recursos multimedia y datos de API RESTful.</li>
          <li>Cómo usar <code>fetch()</code> para implementar peticiones de red asíncronas.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## ¿Cuál es el problema?

Una página web se compone de una página HTML y, normalmente, de otros archivos, como hojas de estilo, scripts e imágenes. El modelo básico de carga de páginas en la web consiste en que tu navegador hace una o varias peticiones HTTP al servidor para pedirle los archivos necesarios para mostrar la página, y el servidor responde con los archivos solicitados. Si visitas otra página, el navegador pide los archivos nuevos y el servidor responde con ellos.

![Carga de página tradicional](traditional-loading.svg)

Este modelo funciona perfectamente en muchos sitios. Pero piensa en un sitio web que depende mucho de los datos; por ejemplo, el de una biblioteca como la [Vancouver Public Library](https://www.vpl.ca/). Entre otras cosas, podríamos pensar en un sitio como este como una interfaz de usuario para una base de datos: puede permitirte buscar un género de libro específico o mostrarte recomendaciones de libros que podrían gustarte, basándose en los libros que has tomado prestados anteriormente. Cuando haces esto, es necesario actualizar la página con el nuevo conjunto de libros que se mostrarán. Pero fíjate en que la mayor parte del contenido de la página (como el encabezado, la barra lateral y el pie de página) permanece igual.

El problema del modelo tradicional en este caso es que habría que obtener y cargar la página entera, aunque solo necesitemos actualizar una parte. Esto es ineficiente y puede provocar una mala experiencia de usuario.

Por eso, en lugar del modelo tradicional, muchos sitios web usan API de JavaScript para solicitar datos al servidor y actualizar el contenido de la página sin tener que cargarla de nuevo. Así, cuando el usuario busca un nuevo producto, el navegador solo solicita los datos necesarios para actualizar la página; por ejemplo, el conjunto de libros nuevos que mostrar.

![Uso de fetch para actualizar páginas](fetch-update.svg)

La API principal aquí es la [API Fetch](/es/docs/Web/API/Fetch_API). Esta permite que JavaScript que se ejecuta en una página haga una petición [HTTP](/es/docs/Web/HTTP) a un servidor para obtener recursos específicos. Cuando el servidor los proporciona, JavaScript puede usar los datos para actualizar la página, normalmente mediante las [API de manipulación del DOM](/es/docs/Learn_web_development/Core/Scripting/DOM_scripting). Los datos solicitados suelen estar en [JSON](/es/docs/Learn_web_development/Core/Scripting/JSON), un buen formato para transferir datos estructurados, aunque también pueden ser HTML o simplemente texto.

Este es un patrón común en sitios basados en datos como Amazon, YouTube o eBay, entre otros. Con este modelo:

- Las actualizaciones de la página son mucho más rápidas y no tienes que esperar a que se recargue, por lo que el sitio da la sensación de ser más rápido y de responder mejor.
- Se descargan menos datos en cada actualización, lo que significa menos consumo de ancho de banda. Puede que esto no sea un gran problema en una computadora con conexión de banda ancha, pero sí lo es en los dispositivos móviles y en países con acceso limitado a internet de alta velocidad.

> [!NOTE]
> En sus inicios, esta técnica se conocía como JavaScript [asíncrono](/es/docs/Glossary/Asynchronous) y XML ([AJAX](/es/docs/Glossary/AJAX)), porque solía pedir datos XML. Actualmente, esto no suele ser así (lo más común es solicitar JSON), pero el resultado sigue siendo el mismo, y el término "AJAX" se sigue usando a menudo para describir la técnica.

Para acelerar aún más las cosas, algunos sitios también almacenan recursos y datos en la computadora del usuario cuando se solicitan por primera vez, de modo que en las visitas posteriores usan las versiones locales en lugar de descargar copias nuevas cada vez que se carga la página. El contenido solo se vuelve a cargar desde el servidor cuando se ha actualizado.

## La API Fetch

En esta sección repasaremos un par de ejemplos de la API Fetch.

Los ejemplos siguientes tienen cierto nivel de complejidad y muestran cómo usar la API Fetch en algunos contextos del mundo real. Si nunca has usado fetch, quizá te convenga empezar con el tutorial interactivo [First fetch](https://scrimba.com/frontend-path-c0j/~0lu?via=mdn) <sup>[_socio de aprendizaje de MDN_](/es/docs/MDN/Writing_guidelines/Learning_content#enlaces_externos_o_embebidos)</sup> de Scrimba, que ofrece una introducción muy sencilla paso a paso.

### Obtener contenido de texto

En este ejemplo pediremos datos de varios archivos de texto y los usaremos para rellenar un área de contenido.

Esta serie de archivos hará las veces de nuestra base de datos ficticia; en una aplicación real, lo más habitual sería usar un lenguaje del lado del servidor, como PHP, Python o Node, para solicitar los datos a una base de datos. Aquí, sin embargo, queremos simplificar y centrarnos en la parte del lado del cliente.

Para empezar este ejemplo, haz una copia local de [fetch-start.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/fetch-start.html) y de los cuatro archivos de texto ([verse1.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse1.txt), [verse2.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse2.txt), [verse3.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse3.txt) y [verse4.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse4.txt)) en un directorio nuevo en tu computadora. En este ejemplo obtendremos una estrofa distinta del poema (que seguramente reconocerás) cuando se seleccione en el menú desplegable.

Justo dentro del elemento {{htmlelement("script")}}, añade el siguiente código. Este guarda referencias a los elementos {{htmlelement("select")}} y {{htmlelement("pre")}} y añade un detector de eventos al elemento `<select>`, de modo que, cuando se selecciona un valor nuevo, ese valor se pasa como parámetro a la función llamada `updateDisplay()`.

```js
const verseChoose = document.querySelector("select");
const poemDisplay = document.querySelector("pre");

verseChoose.addEventListener("change", () => {
  const verse = verseChoose.value;
  updateDisplay(verse);
});
```

Vamos a definir nuestra función `updateDisplay()`. Primero, pon lo siguiente debajo del bloque de código anterior; esta es la estructura básica de la función.

```js-nolint
function updateDisplay(verse) {

}
```

Empezaremos la función construyendo una URL relativa que apunte al archivo de texto que queremos cargar, ya que la necesitaremos más adelante. El valor del elemento {{htmlelement("select")}} en cada momento coincide con el texto del {{htmlelement("option")}} seleccionado (a menos que indiques un valor distinto en un atributo value), por ejemplo, "Verse 1". El archivo de texto correspondiente al verso es "verse1.txt" y está en el mismo directorio que el archivo HTML, así que basta con el nombre del archivo.

Sin embargo, los servidores web suelen distinguir entre mayúsculas y minúsculas, y el nombre del archivo no tiene ningún espacio. Para convertir "Verse 1" a "verse1.txt" tenemos que convertir la 'V' a minúscula, eliminar el espacio y añadir ".txt" al final. Esto se puede hacer con {{jsxref("String.replace", "replace()")}}, {{jsxref("String.toLowerCase", "toLowerCase()")}} y una [plantilla literal](/es/docs/Web/JavaScript/Reference/Template_literals). Añade las siguientes líneas dentro de la función `updateDisplay()`:

```js
verse = verse.replace(" ", "").toLowerCase();
const url = `${verse}.txt`;
```

Finalmente, estamos listos para usar la API Fetch:

```js
// Llamamos a `fetch()` y le pasamos la URL.
fetch(url)
  // fetch() devuelve una promesa. Cuando recibimos una respuesta del servidor,
  // se llama al manejador `then()` de la promesa con esa respuesta.
  .then((response) => {
    // Nuestro manejador lanza un error si la petición no se ha completado con éxito.
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    // En caso contrario (es decir, si la respuesta es correcta), nuestro manejador obtiene
    // el cuerpo de la respuesta como texto llamando a response.text() y devuelve
    // de inmediato la promesa que devuelve `response.text()`.
    return response.text();
  })
  // Cuando response.text() se completa con éxito, se llama al manejador `then()`
  // con el texto, y lo copiamos en el cuadro `poemDisplay`.
  .then((text) => {
    poemDisplay.textContent = text;
  })
  // Capturamos cualquier error que pueda producirse y mostramos un mensaje
  // en el cuadro `poemDisplay`.
  .catch((error) => {
    poemDisplay.textContent = `No se pudo obtener la estrofa: ${error}`;
  });
```

Hay mucho que analizar aquí.

En primer lugar, el punto de entrada a la API Fetch es una función global llamada {{domxref("Window/fetch", "fetch()")}}, que recibe la URL como parámetro (acepta otro parámetro opcional para configuraciones personalizadas, pero aquí no lo usamos).

A continuación, `fetch()` es una API asíncrona que devuelve una {{jsxref("Promise", "promesa")}}. Si no sabes qué es, lee el módulo sobre [JavaScript asíncrono](/es/docs/Learn_web_development/Extensions/Async_JS) y, en particular, la lección sobre [promesas](/es/docs/Learn_web_development/Extensions/Async_JS/Promises), y luego vuelve aquí. ¡Verás que ese artículo también habla de la API `fetch()`!

Como `fetch()` devuelve una promesa, pasamos una función al método {{jsxref("Promise/then", "then()")}} de la promesa devuelta. Se llamará a este método cuando la petición HTTP haya recibido una respuesta del servidor. En el manejador, comprobamos que la petición se haya completado con éxito y, en caso contrario, lanzamos un error. Si es así, llamamos a {{domxref("Response/text", "response.text()")}} para obtener el cuerpo de la respuesta como texto.

Resulta que `response.text()` _también_ es asíncrono, así que devolvemos la promesa que este método genera y pasamos una función al método `then()` de esta nueva promesa. Se llamará a esta función cuando el texto de la respuesta esté listo, y dentro de ella actualizaremos nuestro bloque `<pre>` con el texto.

Por último, encadenamos al final un manejador {{jsxref("Promise/catch", "catch()")}} para capturar cualquier error lanzado en cualquiera de las funciones asíncronas que hemos llamado o en sus manejadores.

Un problema del ejemplo tal como está es que no mostrará nada del poema al cargarse por primera vez. Para solucionarlo, añade las dos líneas siguientes al final del código (justo encima de la etiqueta de cierre `</script>`) para cargar la estrofa 1 de forma predeterminada y asegurarte de que el elemento {{htmlelement("select")}} muestre siempre el valor correcto:

```js
updateDisplay("Verse 1");
verseChoose.value = "Verse 1";
```

#### Servir tu ejemplo desde un servidor

Los navegadores modernos no ejecutan peticiones HTTP si ejecutas el ejemplo directamente desde un archivo local. Esto se debe a restricciones de seguridad (para saber más sobre seguridad web, lee [Seguridad de sitios web](/es/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security)).

Para evitarlo, tenemos que probar el ejemplo ejecutándolo a través de un servidor web local. Para saber cómo hacerlo, consulta [¿Cómo se configura un servidor de prueba local?](/es/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server).

### The Can Store

En este ejemplo hemos creado un sitio de muestra llamado The Can Store, un supermercado ficticio que solo vende productos enlatados. Puedes ver este [ejemplo en vivo en GitHub](https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/) y [consultar el código fuente](https://github.com/mdn/learning-area/tree/main/javascript/apis/fetching-data/can-store).

![Un sitio de comercio electrónico ficticio que muestra las opciones de búsqueda en la columna de la izquierda y los resultados de la búsqueda de productos en la columna de la derecha.](can-store.png)

De forma predeterminada, el sitio muestra todos los productos, pero puedes usar los controles del formulario de la columna de la izquierda para filtrarlos por categoría, por término de búsqueda o por ambos.

Hay bastante código complejo que se encarga de filtrar los productos por categoría y términos de búsqueda, manipular cadenas para que los datos se muestren correctamente en la interfaz de usuario, etc. No lo explicaremos todo en el artículo, pero encontrarás abundantes comentarios en el código (consulta [can-script.js](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/can-store/can-script.js)).

Sin embargo, sí explicaremos el código que usa Fetch.

El primer bloque que usa Fetch está al principio del código JavaScript:

```js
fetch("products.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    return response.json();
  })
  .then((json) => initialize(json))
  .catch((err) => console.error(`Problema con fetch: ${err.message}`));
```

La función `fetch()` devuelve una promesa. Si esta se completa con éxito, la función del primer bloque `.then()` contiene la respuesta (`response`) devuelta desde la red.

Dentro de esta función:

- comprobamos que el servidor no haya devuelto un error (como [`404 Not Found`](/es/docs/Web/HTTP/Reference/Status/404)). Si lo ha hecho, lanzamos el error.
- llamamos a {{domxref("Response.json","json()")}} sobre la respuesta. Esto obtiene los datos como un [objeto JSON](/es/docs/Learn_web_development/Core/Scripting/JSON). Devolvemos la promesa que genera `response.json()`.

A continuación pasamos una función al método `then()` de la promesa devuelta. Esta función recibirá un objeto con los datos de respuesta en formato JSON, el cual pasamos a la función `initialize()`. Es `initialize()` la que inicia el proceso de mostrar todos los productos en la interfaz de usuario.

Para manejar los errores, encadenamos un bloque `.catch()` al final de la cadena. Este se ejecuta si la promesa falla por algún motivo. Dentro de él incluimos una función que recibe como parámetro un objeto `err`. Este objeto `err` sirve para informar de la naturaleza del error que se ha producido; en este caso lo hacemos con un simple `console.error()`.

Sin embargo, un sitio web completo manejaría este error con más elegancia, mostrando un mensaje en la pantalla del usuario y, tal vez, ofreciendo opciones para solucionar la situación, pero no necesitamos nada más que un simple `console.error()`.

Puedes comprobar por tu cuenta el caso de fallo:

<!-- cSpell:ignore produc -->

1. Crea una copia local de los archivos de ejemplo.
2. Ejecuta el código a través de un servidor web (como se describe más arriba, en [Servir tu ejemplo desde un servidor](#servir_tu_ejemplo_desde_un_servidor)).
3. Modifica la ruta del archivo que se va a obtener por algo como 'produc.json' (asegúrate de que esté mal escrito).
4. Ahora carga el archivo index en tu navegador (mediante `localhost:8000`) y mira la consola para desarrolladores de tu navegador. Verás un mensaje parecido a "Problema con fetch: Error HTTP: 404".

El segundo bloque Fetch se encuentra dentro de la función `fetchBlob()`:

```js
fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    return response.blob();
  })
  .then((blob) => showProduct(blob, product))
  .catch((err) => console.error(`Problema con fetch: ${err.message}`));
```

Funciona casi igual que el anterior, salvo que en lugar de usar {{domxref("Response.json","json()")}} usamos {{domxref("Response.blob","blob()")}}. En este caso queremos devolver la respuesta como un archivo de imagen, y el formato de datos que usamos para ello es [Blob](/es/docs/Web/API/Blob) (el término es una abreviatura de "Binary Large Object" y, básicamente, sirve para representar objetos de gran tamaño similares a archivos, como imágenes o vídeos).

Una vez que hemos recibido correctamente el blob, lo pasamos a la función `showProduct()`, que se encarga de mostrarlo.

## La API XMLHttpRequest

A veces, sobre todo en código antiguo, verás otra API llamada [`XMLHttpRequest`](/es/docs/Web/API/XMLHttpRequest) (a menudo abreviada como "XHR") que se usa para hacer peticiones HTTP. Es anterior a Fetch y fue, en realidad, la primera API ampliamente utilizada para implementar AJAX. Te recomendamos usar Fetch si puedes: es una API más sencilla y ofrece más funcionalidades que `XMLHttpRequest`. No veremos un ejemplo con `XMLHttpRequest`, pero sí te mostraremos cómo sería la versión con `XMLHttpRequest` de nuestra primera petición de The Can Store:

```js
const request = new XMLHttpRequest();

try {
  request.open("GET", "products.json");

  request.responseType = "json";

  request.addEventListener("load", () => initialize(request.response));
  request.addEventListener("error", () => console.error("Error de XHR"));

  request.send();
} catch (error) {
  console.error(`Error de XHR ${request.status}`);
}
```

El proceso tiene cinco etapas:

1. Crea un nuevo objeto `XMLHttpRequest`.
2. Llama a su método [`open()`](/es/docs/Web/API/XMLHttpRequest/open) para inicializarlo.
3. Añade un detector de eventos a su evento [`load`](/es/docs/Web/API/XMLHttpRequestEventTarget/load_event), que se dispara cuando la respuesta se ha completado con éxito. En el detector llamamos a `initialize()` con los datos.
4. Añade un detector de eventos a su evento [`error`](/es/docs/Web/API/XMLHttpRequestEventTarget/error_event), que se dispara cuando la petición encuentra un error.
5. Envía la petición.

También tenemos que envolver todo en el bloque [try...catch](/es/docs/Web/JavaScript/Reference/Statements/try...catch) para manejar cualquier error que lancen `open()` o `send()`.

Esperamos que te parezca que la API Fetch es una mejora respecto a esto. Fíjate, en particular, en cómo tenemos que manejar los errores en dos lugares distintos.

## Resumen

Este artículo muestra cómo empezar a trabajar con Fetch para obtener datos del servidor.

## Véase también

Sin embargo, en este artículo se tratan muchos temas distintos, de los que apenas hemos abordado la superficie. Para profundizar mucho más en ellos, consulta los siguientes artículos:

- [Usar Fetch](/es/docs/Web/API/Fetch_API/Using_Fetch)
- [Promesas](/es/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Trabajar con datos JSON](/es/docs/Learn_web_development/Core/Scripting/JSON)
- [Una descripción general de HTTP](/es/docs/Web/HTTP/Guides/Overview)
- [Programación web del lado del servidor](/es/docs/Learn_web_development/Extensions/Server-side)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Image_gallery","Learn_web_development/Core/Scripting/JSON", "Learn_web_development/Core/Scripting")}}
