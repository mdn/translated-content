---
title: Almacenamiento del lado cliente
slug: Learn/JavaScript/Client-side_web_APIs/Client-side_storage
---

{{LearnSidebar}}

{{PreviousMenu("Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs", "Learn/JavaScript/Client-side_web_APIs")}}

Los navegadores web modernos admiten varias formas para que los sitios web almacenen datos en la computadora del usuario, con el permiso del usuario, y luego los recuperen cuando sea necesario. Esto te permite conservar los datos para el almacenamiento a largo plazo, guardar sitios o documentos para su uso sin conexión, conservar la configuración específica del usuario para tu sitio y más. Este artículo explica los conceptos básicos de cómo funcionan.

| Prerrequisitos: | Conceptos básicos de JavaScript (consulta [primeros pasos](/es/docs/Learn/JavaScript/First_steps), [bloques de construcción](/es/docs/Learn/JavaScript/Building_blocks), [objetos JavaScript](/es/docs/Learn/JavaScript/Objects)), los [conceptos básicos de las APIs de lado del cliente](/es/docs/Learn/JavaScript/Client-side_web_APIs/Introducción) |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Objetivo:       | Aprender a utilizar las APIs de almacenamiento de lado del cliente para almacenar datos de aplicaciones.                                                                                                                                                                                                                                                |

## ¿Almacenamiento de lado del cliente?

En otra parte del área de aprendizaje de MDN, hablamos sobre la diferencia entre [sitios estáticos](/es/docs/Learn/Server-side/First_steps/Client-Server_overview#Sitios_estaticos) y [sitios dinámicos](/es/docs/Learn/Server-side/First_steps/Client-Server_overview#Sitios_dinamicos). La mayoría de los principales sitios web modernos son dinámicos: almacenan datos en el servidor utilizando algún tipo de base de datos (almacenamiento de lado del servidor) y luego ejecutan [de lado del servidor](/es/docs/Learn/Server-side) para recuperar los datos necesarios, insertarlos en plantillas de páginas estáticas y entregar el HTML resultante al cliente para que lo muestre el navegador del usuario.

El almacenamiento de lado del cliente funciona con principios similares, pero tiene diferentes usos. Consiste en una API de JavaScript que te permiten almacenar datos en el cliente (es decir, en la máquina del usuario) y luego recuperarlos cuando sea necesario. Esto tiene muchos usos distintos, como:

- Personalizar las preferencias del sitio (por ejemplo, mostrar la elección de un usuario de artilugios personalizados, combinación de colores o tamaño del tipo de letra).
- Persistencia de la actividad anterior del sitio (por ejemplo, almacenar el contenido de un carrito de compras de una sesión anterior, recordar si un usuario inició sesión anteriormente).
- Guardar datos y activos localmente para que un sitio sea más rápido (y potencialmente menos costoso) de descargar o se pueda usar sin una conexión de red.
- Guardar documentos generados por aplicaciones web localmente para usarlos sin conexión

A menudo, el almacenamiento de lado del cliente y de lado del servidor se utilizan juntos. Por ejemplo, puedes descargar un lote de archivos de música (quizás utilizados por un juego web o una aplicación de reproducción de música), almacenarlos dentro de una base de datos de lado del cliente y reproducirlos según sea necesario. El usuario solo tendría que descargar los archivos de música una vez; en las visitas posteriores, se recuperarían de la base de datos.

> **Nota:** Existen límites en la cantidad de datos que puedes almacenar utilizando las APIs de almacenamiento de lado del cliente (posiblemente tanto por API individual como acumulativamente); el límite exacto varía según el navegador y posiblemente según la configuración del usuario. Consulta [límites de almacenamiento del navegador y criterios de desalojo](/es/docs/Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria) para obtener más información.

### Vieja escuela: cookies

El concepto de almacenamiento de lado del cliente existe desde hace mucho tiempo. Desde los primeros días de la web, los sitios han utilizado _[cookies](/es/docs/Web/HTTP/Cookies)_ para almacenar información y personalizar la experiencia del usuario en los sitios web. Son la forma más antigua de almacenamiento de lado del cliente que se usa comúnmente en la web.

En estos días, existen mecanismos más fáciles disponibles para almacenar datos de lado del cliente, por lo tanto, no te enseñaremos cómo usar las _cookies_ en este artículo. Sin embargo, esto no significa que las _cookies_ sean completamente inútiles en la web moderna; todavía se usan comúnmente para almacenar datos relacionados con la personalización y el estado del usuario, p. ej. ID de sesión y fragmentos de acceso. Para obtener más información sobre las _cookies_, consulta nuestro artículo [Uso de cookies HTTP](/es/docs/Web/HTTP/Cookies).

### Nueva escuela: almacenamiento web e `IndexedDB`

Las características "más fáciles" que mencionamos anteriormente son las siguientes:

- La [API de almacenamiento web](/es/docs/Web/API/Web_Storage_API){ proporciona una sintaxis muy simple para almacenar y recuperar elementos de datos más pequeños que constan de un nombre y un valor correspondiente. Esto es útil cuando solo necesitas almacenar algunos datos simples, como el nombre del usuario, si está conectado, qué color usar para el fondo de la pantalla, etc.
- La [API IndexedDB](/es/docs/Web/API/IndexedDB_API) proporciona al navegador un sistema de base de datos completo para almacenar datos complejos. Esto se puede usar para cosas desde conjuntos completos de registros de clientes, hasta incluso tipos de datos complejos como archivos de audio o video.

Aprenderás más sobre estas APIs a continuación.

### El futuro: API de caché

Algunos navegadores modernos admiten la nueva API {{domxref("Cache")}}. Esta API está diseñada para almacenar respuestas HTTP a solicitudes específicas y es muy útil para hacer cosas como almacenar activos del sitio web sin conexión para que el sitio se pueda usar posteriormente sin una conexión de red. La caché generalmente se usa en combinación con la [API del servicio Worker](/es/docs/Web/API/Service_Worker_API), aunque no necesariamente tiene que ser así.

El uso de caché y el servicio _Workers_ es un tema avanzado, y no lo cubriremos con gran detalle en este artículo, aunque mostraremos un ejemplo simple en la sección [Almacenamiento de activos sin conexión](#almacenamiento_de_activos_sin_conexion) a continuación.

## Almacenamiento de datos simples: almacenamiento web

La [API de almacenamiento web](/es/docs/Web/API/Web_Storage_API) es muy fácil de usar: almacena pares de datos simples de nombre/valor (limitado a cadenas, números, etc.) y recupera estos valores cuando sea necesario.

### Sintaxis básica

Te mostramos como:

1. Primero, ve a nuestra [plantilla en blanco de almacenamiento web](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/web-storage/index.html) en GitHub (abre esto en una nueva pestaña).
2. Abre la consola JavaScript de las herramientas de desarrollo de tu navegador.
3. Todos tus datos de almacenamiento web están contenidos en dos estructuras similares a objetos dentro del navegador: {{domxref("Window.sessionStorage", "sessionStorage")}} y {{domxref("Window.localStorage", "localStorage")}}. El primero conserva los datos mientras el navegador está abierto (los datos se pierden cuando se cierra el navegador) y el segundo conserva los datos incluso después de que el navegador se cierra y luego se vuelve a abrir. Usaremos el segundo en este artículo, ya que generalmente es más útil.

   El método {{domxref("Storage.setItem()")}} te permite guardar un elemento de datos en el almacenamiento; toma dos parámetros: el nombre del elemento y su valor. Intenta escribir esto en tu consola de JavaScript (cambia el valor a tu propio nombre, si lo deseas):

   ```js
   localStorage.setItem("nombre", "Chris");
   ```

4. El método {{domxref("Storage.getItem()")}} toma un parámetro, el nombre de un elemento de datos que deseas recuperar, y devuelve el valor del elemento. Ahora escribe estas líneas en tu consola JavaScript:

   ```js
   let miNombre = localStorage.getItem("nombre");
   miNombre;
   ```

   Al escribir en la segunda línea, deberías ver que la variable `miNombre` ahora contiene el valor del elemento de datos `nombre`.

5. El método {{domxref("Storage.removeItem()")}} toma un parámetro, el nombre de un elemento de datos que desea eliminar, y elimina ese elemento del almacenamiento web. Escribe las siguientes líneas en tu consola JavaScript:

   ```js
   localStorage.removeItem("nombre");
   let miNombre = localStorage.getItem("nombre");
   miNombre;
   ```

   La tercera línea ahora debería devolver `null`: el elemento `nombre` ya no existe en el almacenamiento web.

### ¡Los datos persisten!

Una característica clave del almacenamiento web es que los datos persisten entre las cargas de la página (e incluso cuando el navegador está apagado, en el caso de `localStorage`). Veamos esto en acción.

1. Abre nuestra plantilla en blanco de almacenamiento web nuevamente, ¡pero esta vez en un navegador diferente al que tiene abierto este tutorial!; Esto hará que sea más fácil de manejar.
2. Escribe estas líneas en la consola JavaScript del navegador:

   ```js
   localStorage.setItem("nombre", "Chris");
   let miNombre = localStorage.getItem("nombre");
   miNombre;
   ```

   Deberías ver el nombre del elemento devuelto.

3. Ahora cierre el navegador y ábrelo de nuevo.
4. Ingresa las siguientes líneas nuevamente:

   ```js
   let miNombre = localStorage.getItem("nombre");
   miNombre;
   ```

   Deberías ver que el valor aún está disponible, aunque el navegador se haya cerrado y luego se haya abierto nuevamente.

### Almacenamiento independiente para cada dominio

Hay un almacén de datos separado para cada dominio (cada dirección web separada cargada en el navegador). Verás que si cargas dos sitios web (por ejemplo, google.com y amazon.com) e intentas almacenar un elemento en un sitio web, no estará disponible para el otro sitio web.

Esto tiene sentido: ¿puedes imaginar los problemas de seguridad que surgirían si los sitios web pudieran ver los datos de los demás?

### Un ejemplo más complicado

Apliquemos este conocimiento recién descubierto escribiendo un sencillo ejemplo para darte una idea de cómo se puede usar el almacenamiento web. Nuestro ejemplo te permitirá ingresar un nombre, luego de lo cual la página se actualizará para darte un saludo personalizado. Este estado también persistirá en las recargas de la página/navegador, porque el nombre se guarda en el almacenamiento web.

Puede encontrar el HTML de ejemplo en [personal-greeting.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/client-side-storage/web-storage/personal-greeting.html): contiene un sitio web simple con un encabezado, contenido y pie de página, y un formulario para ingresar tu nombre.

![Ejemplo de almacenamiento](web-storage-demo.png)

Construyamos el ejemplo para que puedas entender cómo funciona.

1. Primero, haz una copia local de nuestro archivo [personal-greeting.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/client-side-storage/web-storage/personal-greeting.html) en un nuevo directorio en tu computadora.
2. A continuación, observa cómo nuestro HTML hace referencia a un archivo JavaScript llamado `index.js` (ve la línea 40). Necesitamos crearlo y escribir nuestro código JavaScript en él. Cree un archivo `index.js` en el mismo directorio que tu archivo HTML.
3. Comenzaremos creando referencias a todas las características HTML que necesitamos manipular en este ejemplo; las crearemos todas como constantes, ya que estas referencias no necesitan cambiar en el ciclo de vida de la aplicación. Agrega las siguientes líneas a tu archivo JavaScript:

   ```js
   // crea las constantes necesarias
   const rememberDiv = document.querySelector(".remember");
   const forgetDiv = document.querySelector(".forget");
   const form = document.querySelector("form");
   const nameInput = document.querySelector("#entername");
   const submitBtn = document.querySelector("#submitname");
   const forgetBtn = document.querySelector("#forgetname");

   const h1 = document.querySelector("h1");
   const personalGreeting = document.querySelector(".personal-greeting");
   ```

4. A continuación, necesitamos incluir un pequeño escucha de eventos para evitar que el formulario se envíe cuando se presiona el botón de envío, ya que este no es el comportamiento que queremos. Agrega este fragmento debajo de tu código anterior:

   ```js
   // Evita que el formulario se envíe cuando se presiona un botón
   form.addEventListener("submit", function (e) {
     e.preventDefault();
   });
   ```

5. Ahora necesitamos agregar un escucha de eventos, cuya función controladora se ejecutará cuando se haga clic en el botón "Saludar". Los comentarios explican en detalle qué hace cada bit, pero en esencia aquí tomamos el nombre que el usuario ingresó en el cuadro de entrada de texto y lo guardamos en el almacenamiento web usando `setItem()`, luego ejecutamos una función llamada `nameDisplayCheck()` que se encargará de actualizar el texto real del sitio web. Agrega esto al final de tu código:

   ```js
   // ejecuta la función cuando se hace clic en el botón 'Saludar'
   submitBtn.addEventListener("click", function () {
     // guarda el nombre ingresado en el almacenamiento web
     localStorage.setItem("name", nameInput.value);
     // ejecuta nameDisplayCheck() para ordenar la visualización del
     // saludo personalizado y actualización de la visualización del formulario
     nameDisplayCheck();
   });
   ```

6. En este punto, también necesitamos un controlador de eventos para ejecutar una función cuando se hace clic en el botón "Olvidar"; esto solo se muestra después de hacer clic en el botón "Saludar" (los dos estados del formulario se alternan hacia adelante y hacia atrás). En esta función, eliminamos el elemento `name` del almacenamiento web usando `removeItem()`, luego ejecutamos nuevamente `nameDisplayCheck()` para actualizar la pantalla. Agrega esto al final:

   ```js
   // ejecuta la función cuando se hace clic en el botón 'Olvidar'
   forgetBtn.addEventListener("click", function () {
     // Elimina el nombre guardado del almacenamiento web
     localStorage.removeItem("nombre");
     // ejecuta nameDisplayCheck() para ordenar la visualización del
     // saludo genérico nuevamente y actualiza la visualización del formulario
     nameDisplayCheck();
   });
   ```

7. Ahora es el momento de definir la propia función `nameDisplayCheck()`. Aquí verificamos si el elemento de nombre se ha guardado en el almacenamiento web utilizando `localStorage.getItem('name')` como prueba condicional. Si se ha guardado, esta llamada se evaluará como `true`; si no, será `false`. Si es `true`, mostramos un saludo personalizado, mostramos la parte "Olvidar" del formulario y ocultamos la parte "Saludar" del formulario. Si es `false`, mostramos un saludo genérico y hacemos lo contrario. Nuevamente, pon el siguiente código en la parte inferior:

   ```js
   // definir la función nameDisplayCheck()
   function nameDisplayCheck() {
     // verifica si el elemento de datos 'name' está guardado en el almacenamiento web
     if (localStorage.getItem("name")) {
       // Si es así, muestra un saludo personalizado
       let name = localStorage.getItem("name");
       h1.textContent = "Bienvenido, " + name;
       personalGreeting.textContent =
         "¡Bienvenido a nuestro sitio web, " +
         name +
         "! Esperamos que te diviertas mientras estés aquí.";
       // ocultar la parte 'recordar' del formulario y mostrar la parte 'olvidar'
       forgetDiv.style.display = "block";
       rememberDiv.style.display = "none";
     } else {
       // si no, muestra un saludo genérico
       h1.textContent = "Bienvenido a nuestro sitio web ";
       personalGreeting.textContent =
         "Bienvenido a nuestro sitio web. Esperamos que se diviertas mientras estés aquí.";
       // ocultar la parte 'olvidar' del formulario y mostrar la parte 'recordar'
       forgetDiv.style.display = "none";
       rememberDiv.style.display = "block";
     }
   }
   ```

8. Por último, pero no menos importante, debemos ejecutar la función `nameDisplayCheck()` cada vez que se carga la página. Si no hacemos esto, el saludo personalizado no persistirá en las recargas de la página. Agrega lo siguiente al final de tu código:

   ```js
   document.body.onload = nameDisplayCheck;
   ```

Tu ejemplo está terminado, ¡bien hecho!; Todo lo que queda ahora es guardar tu código y probar tu página HTML en un navegador. Puedes ver nuestra [versión finalizada en vivo aquí](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/web-storage/personal-greeting.html).

> **Nota:** Hay otro ejemplo un poco más complejo para explorar en [Uso de la API de almacenamiento web](/es/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API).

> **Nota:** En la línea `<script src="index.js" defer></script>` del código fuente de nuestra versión final, el atributo `defer` especifica que el contenido del elemento {{htmlelement("script")}} no se ejecutará hasta que la página haya terminado de cargarse.

## Almacenamiento de datos complejos — `IndexedDB`

La [API IndexedDB](/es/docs/Web/API/IndexedDB_API) (a veces abreviada _IDB_) es un sistema de base de datos completo disponible en el navegador en el que puedes almacenar datos complejos relacionados, tipos de los cuales no se limitan a valores simples como cadenas o números. Puedes almacenar videos, imágenes y casi cualquier otra cosa en una instancia de `IndexedDB`.

Sin embargo, esto tiene un costo: `IndexedDB` es mucho más complejo de usar que la API de almacenamiento web. En esta sección, solo vamos a arañar la superficie de lo que es capaz de hacer, pero te daremos lo suficiente para comenzar.

### Trabajar con un ejemplo de almacenamiento de notas

Aquí, mostraremos un ejemplo que te permite almacenar notas en tu navegador y verlas y eliminarlas cuando lo desees, lo cual te permitirá crearlo tú mismo y explicar las partes más fundamentales del _IDB_ a medida que avanzamos.

La aplicación se parece a esta:

![IDB en acción](idb-demo.png)

Cada nota tiene un título y un cuerpo de texto, cada uno editable individualmente. El código JavaScript que veremos a continuación tiene comentarios detallados para ayudarte a comprender lo que está sucediendo.

### Primeros pasos

1. En primer lugar, haz copias locales de nuestros archivos [`index.html`](https://github.com/mdn/learning-area/blob/master/javascript/apis/client-side-storage/indexeddb/notes/index.html), [`style.css`](https://github.com/mdn/learning-area/blob/master/javascript/apis/client-side-storage/indexeddb/notes/style.css) y [`index-start.js`](https://github.com/mdn/learning-area/blob/master/javascript/apis/client-side-storage/indexeddb/notes/index-start.js) en un nuevo directorio en tu máquina.
2. Échale un vistazo a los archivos. Verás que el HTML es bastante simple: un sitio web con encabezado y pie de página, así como un área de contenido principal que contiene un lugar para mostrar notas y un formulario para ingresar nuevas notas en la base de datos. El CSS proporciona un estilo simple para aclarar lo que está sucediendo. El archivo JavaScript contiene cinco constantes declaradas que contienen referencias al elemento {{htmlelement("ul")}} en el que se mostrarán las notas, el título y el cuerpo de elementos {{htmlelement("input")}}, el {{htmlelement("form")}} en sí mismo, y el {{htmlelement("button")}}.
3. Cambia el nombre de tu archivo JavaScript a `index.js`. Ahora estás listo para comenzar a agregarle código.

### Configuración inicial de la base de datos

Ahora veamos lo que tenemos que hacer en primer lugar, para configurar una base de datos.

1. Debajo de las declaraciones constantes, agrega las siguientes líneas:

   ```js
   // Crea una instancia de un objeto db para que almacenemos la base de datos abierta
   let db;
   ```

   Aquí estamos declarando una variable llamada `db`, que luego se usará para almacenar un objeto que representa nuestra base de datos. Usaremos esto en algunos lugares, por lo que hemos declarado globalmente aquí para facilitar las cosas.

2. A continuación, agrega lo siguiente al final de tu código:

   ```js
   window.onload = function () {};
   ```

   Escribiremos todo nuestro subsiguiente código dentro de esta función controladora de eventos `window.onload`, llamada cuando se activa el evento [`load`](/es/docs/Web/Reference/Events/load) de la ventana, para asegurarnos de que no intentemos usar la funcionalidad `IndexedDB` antes de que la aplicación haya terminado de cargarse por completo (podría fallar si no lo hacemos).

3. Dentro del controlador `window.onload`, agrega lo siguiente:

   ```js
   // Abre nuestra base de datos; se crea si aún no existe
   // (ve onupgradeneeded a continuación)
   let request = window.indexedDB.open("notes_db", 1);
   ```

   Esta línea crea una `solicitud` para abrir la versión `1` de una base de datos llamada `notes_db`. Si esta aún no existe, se creará para ti mediante un código posterior. Verás que este patrón de solicitud se usa con mucha frecuencia en `IndexedDB`. Las operaciones de la base de datos llevan tiempo. No deseas colgar el navegador mientras esperas los resultados, por lo que las operaciones de la base de datos son {{Glossary("asíncronas")}}, lo que significa que en lugar de ocurrir de inmediato, sucederán en algún momento en el futuro, y recibirás una notificación cuando haya terminado.

   Para manejar esto en IndexedDB, crea un objeto de solicitud (que se puede llamar como desees; lo llamamos `request`, por lo que es obvio para qué sirve). Luego, usa controladores de eventos para ejecutar código cuando la solicitud se completa, falla, etc., que verás en uso a continuación.

   > **Nota:** El número de versión es importante. Si deseas actualizar tu base de datos (por ejemplo, cambiando la estructura de la tabla), debes ejecutar tu código nuevamente con un número de versión aumentado, un esquema diferente especificado dentro del controlador `onupgradeneeded` (ve más abajo), etc. No cubriremos la actualización de bases de datos en este sencillo tutorial.

4. Ahora agrega los siguientes controladores de eventos justo debajo de tu adición anterior, nuevamente dentro del controlador `window.onload`:

   ```js
   // un controlador de error significa que la base de datos no se abrió correctamente
   request.onerror = function () {
     console.log("No se pudo abrir la base de datos");
   };

   // controlador onsuccess significa que la base de datos se abrió correctamente
   request.onsuccess = function () {
     console.log("Base de datos abierta con éxito");

     // Almacena el objeto de base de datos abierto en la variable db. Esto se usa mucho a continuación
     db = request.result;

     // Ejecute la función displayData() para mostrar las notas que ya están en la IDB
     displayData();
   };
   ```

   El controlador {{domxref("IDBRequest.onerror", "request.onerror")}} se ejecutará si el sistema dice que la solicitud falló. Esto te permite responder a este problema. En nuestro sencillo ejemplo, simplemente imprimimos un mensaje en la consola de JavaScript.

   El controlador {{domxref("IDBRequest.onsuccess", "request.onsuccess")}} por otro lado se ejecutará si la solicitud regresa con éxito, lo que significa que la base de datos se abrió correctamente. Si este es el caso, un objeto que representa la base de datos abierta pasa a estar disponible en la propiedad {{domxref("IDBRequest.result", "request.result")}}, lo que nos permite manipular la base de datos. Almacenamos esto en la variable `db` que creamos anteriormente para su uso posterior. También ejecutamos una función personalizada llamada `displayData()`, que muestra los datos en la base de datos dentro de {{HTMLElement("ul")}}. Lo ejecutamos ahora para que las notas que ya están en la base de datos se muestren tan pronto como se cargue la página. Verás esto definido más adelante.

5. Finalmente, en esta sección, agregaremos probablemente el controlador de eventos más importante para configurar la base de datos: {{domxref("IDBOpenDBRequest.onupgradeneeded", "request.onupgradeneeded")}}. Este controlador se ejecuta si la base de datos aún no se ha configurado, o si la base de datos se abre con un número de versión mayor que la base de datos almacenada existente (al realizar una actualización). Agrega el siguiente código, debajo de tu controlador anterior:

   ```js
   // Configura las tablas de la base de datos si esto aún no se ha hecho
   request.onupgradeneeded = function (e) {
     // Toma una referencia a la base de datos abierta
     let db = e.target.result;

     // Crea un objectStore para almacenar nuestras notas (básicamente como una sola tabla)
     // incluyendo una clave de incremento automático
     let objectStore = db.createObjectStore("notes_os", {
       keyPath: "id",
       autoIncrement: true,
     });

     // Define qué elementos de datos contendrá el objectStore
     objectStore.createIndex("title", "title", { unique: false });
     objectStore.createIndex("body", "body", { unique: false });

     console.log("Configuración de la base de datos completa");
   };
   ```

   Aquí es donde definimos el esquema (estructura) de nuestra base de datos; es decir, el conjunto de columnas (o campos) que contiene. Aquí primero tomamos una referencia a la base de datos existente de la propiedad `result` del objetivo del evento (`e.target.result`), que es el objeto `request`. Esto es equivalente a la línea `db = request.result;` dentro del controlador `onsuccess`, pero aquí, debemos hacer esto por separado porque el controlador `onupgradeneeded` (si es necesario) se ejecutará antes que el controlador `onsuccess`, lo que significa que el valor `db` no estaría disponible si no hiciéramos esto.

   Luego usamos {{domxref("IDBDatabase.createObjectStore()")}} para crear un nuevo almacén de objetos dentro de nuestra base de datos abierta llamada `notes_os`. Esto es equivalente a una sola tabla en un sistema de base de datos convencional. Le hemos dado el nombre _notas_, y también hemos especificado un campo clave `autoIncrement` llamado `id` — en cada nuevo registro se le dará automáticamente un valor incrementado — el desarrollador no lo hace No es necesario establecer esto explícitamente. Al ser la clave, el campo `id` se utilizará para identificar registros de forma única, como cuando se elimina o muestra un registro.

   También creamos otros dos índices (campos) usando el método {{domxref("IDBObjectStore.createIndex()")}}: `title` (que contendrá un título para cada nota) y `body` (que contendrá el texto del cuerpo de la nota).

Entonces, con este esquema de base de datos simple configurado, cuando comenzamos a agregar registros a la base de datos; cada uno se representará como un objeto siguiendo estas líneas:

```js
{
  title: "Compra leche",
  body: "Necesita leche de vaca y soja",
  id: 8
}
```

### Agregar datos a la base de datos

Ahora veamos cómo podemos agregar registros a la base de datos. Esto se hará mediante el formulario de nuestra página.

Debajo de tu controlador de eventos anterior (pero aún dentro del controlador `window.onload`), agrega la siguiente línea, que configura un controlador `onsubmit` que ejecuta una función llamada `addData()` cuando se envía el formulario (cuando se presiona el {{htmlelement("button")}} de enviar, lo que lleva a un envío exitoso del formulario):

```js
// Crea un controlador onsubmit para que cuando se envíe el formulario se ejecute la función addData()
form.onsubmit = addData;
```

Ahora definamos la función `addData()`. Agrega esto debajo de tu línea anterior:

```js
// Define la función addData()
function addData(e) {
  // evitar el predeterminado: no queremos que el formulario se envíe de la forma convencional
  e.preventDefault();

  // toma los valores ingresados en los campos del formulario y los almacenar en un objeto listo para ser insertado en la base de datos
  let newItem = { title: titleInput.value, body: bodyInput.value };

  // abre una transacción de base de datos de lectura/escritura, lista para agregar los datos
  let transaction = db.transaction(["notes_os"], "readwrite");

  // llama a un almacén de objetos que ya se ha agregado a la base de datos
  let objectStore = transaction.objectStore("notes_os");

  // Hacer una solicitud para agregar nuestro objeto newItem al almacén de objetos
  let request = objectStore.add(newItem);
  request.onsuccess = function () {
    // Limpiar el formulario, listo para agregar la siguiente entrada
    titleInput.value = "";
    bodyInput.value = "";
  };

  // Informa sobre el éxito de la transacción completada, cuando todo esté hecho
  transaction.oncomplete = function () {
    console.log(
      "Transacción completada: modificación de la base de datos finalizada.",
    );

    // actualiza la visualización de datos para mostrar el elemento recién agregado, ejecutando displayData() nuevamente.
    displayData();
  };

  transaction.onerror = function () {
    console.log("Transacción no abierta debido a error");
  };
}
```

Esto es bastante complejo; desglosándolo, podemos:

- Ejecuta {{domxref("Event.preventDefault()")}} en el objeto de evento para detener el envío del formulario de la manera convencional (esto provocaría una actualización de la página y estropearía la experiencia).
- Crea un objeto que represente un registro para ingresar a la base de datos, llenándolo con valores de las entradas del formulario. ten en cuenta que no tenemos que incluir explícitamente un valor de `id`; como explicamos anteriormente, esto se completa automáticamente.
- Abre una transacción `readwrite` contra el almacén de objetos `notes_os` utilizando el método {{domxref("IDBDatabase.transaction()")}}. Este objeto de transacción nos permite acceder al almacén de objetos para que podamos hacerle algo, p. ej. agregar un nuevo registro.
- Accede a la tienda de objetos utilizando el método {{domxref("IDBTransaction.objectStore()")}}, guardando el resultado en la variable `objectStore`.
- Agrega el nuevo registro a la base de datos usando {{domxref("IDBObjectStore.add()")}}. Esto crea un objeto `request`, de la misma manera que hemos visto antes.
- Agrega un grupo de controladores de eventos a `request` y a `transaction` para ejecutar código en puntos críticos del ciclo de vida. Una vez que la solicitud ha tenido éxito, borramos las entradas del formulario y estamos listos para ingresar la siguiente nota. Una vez que la transacción se ha completado, ejecutamos la función `displayData()` nuevamente para actualizar la visualización de notas en la página.

### Visualización de los datos

Ya hemos hecho referencia a `displayData()` dos veces en nuestro código, por lo que probablemente sea mejor definirla. Agrega esto a tu código, debajo de la definición de función anterior:

```js
// Define la función displayData()
function displayData() {
  // Aquí vaciamos el contenido del elemento de la lista cada vez que se actualiza la pantalla
  // Si no hiciste esto, obtendrás duplicados en la lista cada vez que se agregue una nueva nota
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  // Abre el almacén de objetos y luego obtiene un cursor, que recorre todos los
  // diferentes elementos de datos en el almacén
  let objectStore = db.transaction("notes_os").objectStore("notes_os");
  objectStore.openCursor().onsuccess = function (e) {
    // Obtiene una referencia al cursor
    let cursor = e.target.result;

    // Si todavía hay otro elemento de datos para iterar, sigue ejecutando este código
    if (cursor) {
      // Crea un elemento de lista, h3 y p para poner cada elemento de datos dentro al mostrarlo
      // estructura el fragmento HTML y lo anexa dentro de la lista
      const listItem = document.createElement("li");
      const h3 = document.createElement("h3");
      const para = document.createElement("p");

      listItem.appendChild(h3);
      listItem.appendChild(para);
      list.appendChild(listItem);

      // Coloca los datos del cursor dentro de h3 y para
      h3.textContent = cursor.value.title;
      para.textContent = cursor.value.body;

      // Almacena el ID del elemento de datos dentro de un atributo en listItem, para que sepamos
      // a qué elemento corresponde. Esto será útil más adelante cuando queramos eliminar elementos.
      listItem.setAttribute("data-note-id", cursor.value.id);

      // Crea un botón y lo coloca dentro de cada listItem
      const deleteBtn = document.createElement("button");
      listItem.appendChild(deleteBtn);
      deleteBtn.textContent = "Delete";

      // Establece un controlador de eventos para que cuando se hace clic en el botón, el elemento deleteItem()
      // se ejecuta la función
      deleteBtn.onclick = deleteItem;

      // Iterar al siguiente elemento del cursor
      cursor.continue();
    } else {
      // Nuevamente, si el elemento de la lista está vacío, muestra el mensaje 'No hay notas almacenadas'
      if (!list.firstChild) {
        const listItem = document.createElement("li");
        listItem.textContent = "No hay notas almacenadas.";
        list.appendChild(listItem);
      }
      // si no hay más elementos de cursor para iterar, dilo
      console.log("Se muestran todas las notas");
    }
  };
}
```

De nuevo, analicemos esto:

- Primero vaciamos el contenido del elemento {{htmlelement("ul")}}, antes de llenarlo con el contenido actualizado. Si no hiciera esto, terminarías con una enorme lista de contenido duplicado que se agrega con cada actualización.
- A continuación, obtenemos una referencia al almacén de objetos `notes_os` usando {{domxref("IDBDatabase.transaction()")}} y {{domxref("IDBTransaction.objectStore()")}} como hicimos en `addData()`, excepto que aquí los estamos encadenando juntos en una línea.
- El siguiente paso es usar el método {{domxref("IDBObjectStore.openCursor()")}} para abrir una solicitud de un cursor; esta es una construcción que se puede usar para iterar sobre los registros en un almacén de objetos. Encadenamos un controlador `onsuccess` al final de esta línea para que el código sea más conciso: cuando el cursor se devuelve correctamente, se ejecuta el controlador.
- Obtenemos una referencia al propio cursor (un objeto {{domxref("IDBCursor")}}) usando let `cursor = e.target.result`.
- A continuación, verificamos si el cursor contiene un registro del almacén de datos (`if (cursor) {...}`); si es así, creamos un fragmento DOM, lo llenamos con los datos del registro y lo insertamos en la página (dentro del elemento `<ul>`). También incluimos un botón para eliminar que, al hacer clic, eliminará esa nota ejecutando la función `deleteItem()`, que veremos en la siguiente sección.
- Al final del bloque `if`, usamos el método {{domxref("IDBCursor.continue()")}} para hacer avanzar el cursor al siguiente registro en el almacén de datos y ejecutar el contenido de el bloque `if` nuevamente. Si hay otro registro para iterar, esto hace que se inserte en la página, y luego se ejecuta `continue()` nuevamente, y así sucesivamente.
- Cuando no hay más registros sobre los que iterar, `cursor` devolverá `undefined` y, por lo tanto, el bloque `else` se ejecutará en lugar del bloque `if`. Este bloque comprueba si se insertaron notas en el `<ul>`; de lo contrario, inserta un mensaje para indicar que no se almacenó ninguna nota.

### Eliminar una nota

Como se indicó anteriormente, cuando se presiona el botón de eliminación de una nota, la nota se elimina. Esto se logra mediante la función `deleteItem()`, que se ve así:

```js
// Define la función deleteItem()
function deleteItem(e) {
  // recuperamos el nombre de la tarea que queremos eliminar. Necesitamos
  // convertirla en un número antes de intentarla úselo con IDB; Clave del IDB
  // los valores son sensibles al tipo.
  let noteId = Number(e.target.parentNode.getAttribute("data-note-id"));

  // abre una transacción de base de datos y elimina la tarea, encontrándola usando la identificación que obtuvimos arriba
  let transaction = db.transaction(["notes_os"], "readwrite");
  let objectStore = transaction.objectStore("notes_os");
  let request = objectStore.delete(noteId);

  // informa que el elemento de datos ha sido eliminado
  transaction.oncomplete = function () {
    // elimina el padre del botón
    // que es el elemento de la lista, por lo que ya no se muestra
    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    console.log("Nota " + noteId + " eliminada.");

    // Nuevamente, si el elemento de la lista está vacío, muestra el mensaje 'No hay notas almacenadas'
    if (!list.firstChild) {
      let listItem = document.createElement("li");
      listItem.textContent = "No hay notas almacenadas.";
      list.appendChild(listItem);
    }
  };
}
```

- La primera parte de esto podría necesitar algo de explicación: recuperamos el ID del registro que se va a eliminar usando `Number(e.target.parentNode.getAttribute('data-note-id'))` — recuerda que el ID del registro se guardó en un atributo `data-note-id` en el `<li>` cuando se mostró por primera vez. Sin embargo, necesitamos pasar el atributo a través del objeto [`Number()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Number) integrado global ya que es de tipo cadena de datos y, por lo tanto, no sería reconocido por la base de datos, que espera un número.
- Luego obtenemos una referencia al almacén de objetos usando el mismo patrón que hemos visto anteriormente, y usamos el método {{domxref("IDBObjectStore.delete()")}} para eliminar el registro de la base de datos, pasándole el ID.
- Cuando se completa la transacción de la base de datos, eliminamos el `<li>` de la nota del DOM, y nuevamente hacemos la verificación para ver si el `<ul>` ahora está vacío, insertando un nota según corresponda.

¡Eso es todo!; Tu ejemplo debería funcionar ahora.

Si tienes problemas con él, no dudes en [compararlo con nuestro ejemplo en vivo](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/indexeddb/notes/) (consulta el [código fuente](https://github.com/mdn/learning-area/blob/master/javascript/apis/client-side-storage/indexeddb/notes/index.js) también).

### Almacenamiento de datos complejos a través de `IndexedDB`

Como mencionamos anteriormente, `IndexedDB` se puede usar para almacenar más que simples cadenas de texto. Puedes almacenar casi cualquier cosa que desees, incluidos objetos complejos como blobs de imágenes o vídeos. Y no es mucho más difícil de conseguir que cualquier otro tipo de dato.

Para demostrar cómo hacerlo, hemos escrito otro ejemplo llamado [almacenaje de videos con IndexedDB](https://github.com/mdn/learning-area/tree/master/javascript/apis/client-side-storage/indexeddb/video-store) (verlo [en vivo aquí también](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/indexeddb/video-store/)). Cuando ejecutas el ejemplo por primera vez, descarga todos los videos de la red, los almacena en una base de datos `IndexedDB` y luego muestra los videos en la IU dentro de los elementos {{htmlelement("video")}}. La segunda vez que lo ejecutas, encuentra los videos en la base de datos y los obtiene de allí antes de mostrarlos; esto hace que las cargas posteriores sean mucho más rápidas y menos necesitadas de ancho de banda.

Repasemos las partes más interesantes del ejemplo. No lo veremos todo; gran parte es similar al ejemplo anterior y el código está bien comentado.

1. Para este ejemplo simple, hemos almacenado los nombres de los videos para buscarlos en un arreglo de objetos:

   ```js
   const videos = [
     { name: "crystal" },
     { name: "elf" },
     { name: "frog" },
     { name: "monster" },
     { name: "pig" },
     { name: "rabbit" },
   ];
   ```

2. Para empezar, una vez que la base de datos se abre con éxito, ejecutamos una función `init()`. Esto recorre los diferentes nombres de video, tratando de cargar un registro identificado por cada nombre de la base de datos de `videos`.

   Si cada video se encuentra en la base de datos (se verifica fácilmente al ver si `request.result` se evalúa como `true`; si el registro no está presente, será `undefined`), sus archivos de video (almacenados como blobs) y el nombre del video se pasan directamente a la función `displayVideo()` para colocarlos en la interfaz de usuario. De lo contrario, el nombre del video se pasa a la función `fetchVideoFromNetwork()` para ... ¡adivinaste!: recupera el video de la red.

   ```js
   function init() {
     // Recorre los nombres de los videos uno por uno
     for (let i = 0; i < videos.length; i++) {
       // Abre la transacción, obtiene objetos del almacén y get() cada video por nombre
       let objectStore = db.transaction("videos_os").objectStore("videos_os");
       let request = objectStore.get(videos[i].name);
       request.onsuccess = function () {
         // Si el resultado existe en la base de datos (no está indefinido)
         if (request.result) {
           // Toma los videos del IDB y los muestra usando displayVideo()
           console.log("tomando videos del IDB");
           displayVideo(
             request.result.mp4,
             request.result.webm,
             request.result.name,
           );
         } else {
           // Recuperar los videos de la red
           fetchVideoFromNetwork(videos[i]);
         }
       };
     }
   }
   ```

3. El siguiente fragmento se tomó del interior de `fetchVideoFromNetwork()` — aquí obtenemos las versiones MP4 y WebM del video usando dos peticiones {{domxref("fetch()", "fetch()")}}. Luego usamos el método {{domxref("blob()", "Body.blob()")}} para extraer el cuerpo de cada respuesta como un blob, dándonos una representación de objeto de los videos que se pueden almacenar y mostrar más adelante.

   Sin embargo, tenemos un problema aquí: estas dos solicitudes son asíncronas, pero solo queremos intentar mostrar o almacenar el video cuando ambas promesas se hayan cumplido. Afortunadamente, hay un método incorporado que maneja este problema: {{jsxref("Promise.all()")}}. Este toma un argumento, referencias a todas las promesas individuales que deseas verificar para su cumplimiento colocadas en un arreglo, y en sí mismo se basa en promesas.

   Cuando todas esas promesas se han cumplido, la promesa `all()` se cumple con un arreglo que contiene todos los valores de cumplimiento individuales. Dentro del bloque `all()`, puedes ver que luego llamamos a la función `displayVideo()` como lo hicimos antes para mostrar los videos en la interfaz de usuario, luego también llamamos a la función `storeVideo()` para almacenar esos videos dentro de la base de datos.

   ```js
   let mp4Blob = fetch("videos/" + video.name + ".mp4").then((response) =>
     response.blob(),
   );
   let webmBlob = fetch("videos/" + video.name + ".webm").then((response) =>
     response.blob(),
   );

   // Ejecuta el siguiente código solo cuando se hayan cumplido ambas promesas
   Promise.all([mp4Blob, webmBlob]).then(function (values) {
     // muestra el video obtenido de la red con displayVideo()
     displayVideo(values[0], values[1], video.name);
     // lo almacena en el IDB usando storeVideo()
     storeVideo(values[0], values[1], video.name);
   });
   ```

4. Veamos primero `storeVideo()`. Esto es muy similar al patrón que viste en el ejemplo anterior para agregar datos a la base de datos: abrimos una transacción `readwrite` y obtenemos una referencia a nuestro almacén de objetos `videos_os`, creamos un objeto que representa el registro para agregar a la base de datos, luego simplemente lo agrega usando {{domxref("IDBObjectStore.add()")}}.

   ```js
   función storeVideo(mp4Blob, webmBlob, nombre) {
     // Abre transacción, obtiene el almacén de objetos; lo convierte en lectura y escritura para que podamos escribir en el IDB
     let objectStore = db.transaction(['videos_os'], 'readwrite').objectStore('videos_os');
     // Crea un registro para agregar al IDB
     let record = {
       mp4 : mp4Blob,
       webm : webmBlob,
       name : name
     }

     // Agrega el registro al IDB usando add()
     let request = objectStore.add(record);

     ...

   };
   ```

5. Por último, pero no menos importante, tenemos `displayVideo()`, que crea los elementos DOM necesarios para insertar el video en la interfaz de usuario y luego los agrega a la página. Las partes más interesantes de esto son las que se muestran a continuación: para mostrar realmente nuestros blobs de video en un elemento `<video>`, necesitamos crear URL de objeto (URL internas que apuntan a los blobs de video almacenados en la memoria) utilizando el método {{domxref("URL.createObjectURL()")}}. Una vez hecho esto, podemos configurar las URL del objeto para que sean los valores de los atributos `src` de nuestro elemento {{htmlelement("source")}}, y funciona bien.

   ```js
   function displayVideo(mp4Blob, webmBlob, title) {
     // Crea URL del objeto a partir de blobs
     let mp4URL = URL.createObjectURL(mp4Blob);
     let webmURL = URL.createObjectURL(webmBlob);

     ...

     const video = document.createElement('video');
     video.controls = true;
     const source1 = document.createElement('source');
     source1.src = mp4URL;
     source1.type = 'video/mp4';
     const source2 = document.createElement('source');
     source2.src = webmURL;
     source2.type = 'video/webm';

     ...
   }
   ```

## Almacenamiento de activos sin conexión

El ejemplo anterior ya muestra cómo crear una aplicación que almacenará grandes activos en una base de datos `IndexedDB`, evitando la necesidad de descargarlos más de una vez. Esto ya es una gran mejora para la experiencia del usuario, pero todavía falta una cosa: los archivos HTML, CSS y JavaScript principales aún se deben descargar cada vez que se accede al sitio, lo cual significa que no funcionará cuando no haya conexión de red.

![Fuera de línea](ff-offline.png)

Aquí es donde entran el [servicio workers](/es/docs/Web/API/Service_Worker_API) y la [API de caché](/es/docs/Web/API/Cache).

Un servicio _worker_ es un archivo JavaScript que, en pocas palabras, se registra con un origen en particular (sitio web o parte de un sitio web en un determinado dominio) cuando se accede a él mediante un navegador. Cuando se registra, puede controlar las páginas disponibles en ese origen. Para ello, se sienta entre una página cargada y la red e intercepta las solicitudes de red dirigidas a ese origen.

Cuando intercepta una solicitud, puede hacer lo que desees (consulta [ideas de casos de uso](/es/docs/Web/API/Service_Worker_API#Other_use_case_ideas)), pero el ejemplo clásico es guardar las respuestas de la red fuera de línea y luego proporcionarlas en respuesta a una solicitud en lugar de las respuestas de la red. De hecho, te permite hacer que un sitio web funcione completamente fuera de línea.

La API de caché es otro mecanismo de almacenamiento del lado del cliente, con una pequeña diferencia: está diseñada para guardar respuestas HTTP y, por lo tanto, funciona muy bien con el servicio _workers_.

> **Nota:** El servicio _workers_ y la memoria caché ahora son compatibles con la mayoría de los navegadores modernos. Al momento de escribir este artículo, Safari todavía estaba ocupado implementándolo, pero debería estar allí pronto.

### Un ejemplo del servicio worker

Veamos un ejemplo para darte una idea de cómo se vería esto. Hemos creado otra versión del ejemplo del almacén de videos que vimos en la sección anterior; este funciona de manera idéntica, excepto que también guarda HTML, CSS y JavaScript en la API de caché a través de un servicio _worker_, lo que permite que el ejemplo se ejecute sin conexión.

Ve [almacén de videos IndexedDB con servicio worker funcionando en vivo](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/) y también [ve el código fuente](https://github.com/mdn/learning-area/tree/master/javascript/apis/client-side-storage/cache-sw/video-store-offline).

#### Registrar el servicio worker

Lo primero que hay que tener en cuenta es que hay un fragmento adicional de código colocado en el archivo JavaScript principal (consulta [index.js](https://github.com/mdn/learning-area/blob/master/javascript/apis/client-side-storage/cache-sw/video-store-offline/index.js)). Primero hacemos una prueba de detección de características para ver si el miembro `serviceWorker` está disponible en el objeto {{domxref("Navigator")}}. Si esto devuelve `true`, entonces sabemos que al menos se respaldan los conceptos básicos del servicio _workers_. Aquí adentro usamos el método {{domxref("ServiceWorkerContainer.register )")}} para registrar un servicio _worker_ contenido en el archivo `sw.js` contra el origen en el que reside, para que pueda controlar páginas en el mismo directorio que él, o subdirectorios. Cuando se cumple su promesa, el trabajador del servicio se considera registrado.

```js
// Registrar el servicio workers para controlar que el sitio funcione sin conexión

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register(
      "/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js",
    )
    .then(function () {
      console.log("Servicio Worker Registrado");
    });
}
```

> **Nota:** La ruta proporcionada al archivo `sw.js` es relativa al origen del sitio, no al archivo JavaScript que contiene el código. El servicio _worker_ está en `https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js`. El origen es `https://mdn.github.io` y, por lo tanto, la ruta dada debe ser `/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js`. Si quisieras alojar este ejemplo en tu propio servidor, tendrías que cambiarlo consecuentemente. Esto es bastante confuso, pero tiene que funcionar de esta manera por razones de seguridad.

#### Instalación del servicio worker

La próxima vez que se accede a cualquier página bajo el control del servicio _worker_ (por ejemplo, cuando se vuelve a cargar el ejemplo), el servicio _worker_ se instala en esa página, lo cual significa que comenzará a controlarla. Cuando esto ocurre, se dispara un evento `install` contra el servicio _worker_; puedes escribir código dentro del propio servicio _worker_ que responderá a la instalación.

Veamos un ejemplo, en el archivo [sw.js](https://github.com/mdn/learning-area/blob/master/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js) (el servicio _worker_). Verás que el detector de instalación está registrado en `self`. Esta palabra clave `self` es una forma de hacer referencia al alcance global del servicio _worker_ desde el interior del archivo del servicio _worker_.

Dentro del controlador `install` usamos el método {{domxref("ExtendableEvent.waitUntil()")}}, disponible en el objeto `event`, para indicar que el navegador no debe completar la instalación del servicio _worker_ hasta que la promesa interior se haya cumplido con éxito.

Aquí es donde vemos en acción la API de `Cache`. Usamos el método {{domxref("CacheStorage.open()")}} para abrir un nuevo objeto `Cache` en el que se pueden almacenar las respuestas (similar a un almacén de objetos `IndexedDB`). Esta promesa se cumple con un objeto {{domxref("Cache")}} que representa la caché de `video-store`. Luego usamos el método {{domxref("Cache.addAll()")}} para obtener una serie de activos y agregar sus respuestas a la caché.

```js
self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open("video-store").then(function (cache) {
      return cache.addAll([
        "/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/",
        "/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/index.html",
        "/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/index.js",
        "/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/style.css",
      ]);
    }),
  );
});
```

Eso es todo por ahora, instalación terminada.

#### Responder a más solicitudes

Con el servicio _worker_ registrado e instalado en nuestra página HTML, y todos los activos relevantes agregados a nuestra caché, estamos casi listos para comenzar. Solo queda una cosa más por hacer, escribir código para responder a más solicitudes de red.

Esto es lo que hace el segundo bit de código en `sw.js`. Agregamos otro escucha al ámbito global del servicio _worker_, que ejecuta la función del controlador cuando se genera el evento `fetch`. Esto sucede cada vez que el navegador solicita un activo en el directorio en el que está registrado el servicio _worker_.

Dentro del controlador, primero registramos la URL del activo solicitado. Luego proporcionamos una respuesta personalizada a la solicitud, utilizando el método {{domxref("FetchEvent.respondWith()")}}.

Dentro de este bloque usamos {{domxref("CacheStorage.match()")}} para verificar si una solicitud coincidente (es decir, coincide con la URL) se puede encontrar en cualquier caché. Esta promesa se cumple con la respuesta coincidente si se encuentra una coincidencia, o `undefined` si no lo es.

Si se encuentra una coincidencia, simplemente la devolvemos como la respuesta personalizada. De lo contrario, [fetch()](/es/docs/Web/API/fetch) la respuesta de la red y la devolvemos en su lugar.

```js
self.addEventListener("fetch", function (e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    }),
  );
});
```

Y eso es todo para nuestro sencillo servicio _worker_. Hay muchas más cosas que puedes hacer con ellos; para obtener más detalles, consulta el [libro de recetas para el servicio _worker_](https://github.com/mdn/serviceworker-cookbook/). Y gracias a Paul Kinlan por su artículo [Agregar un servicio _worker_ y sin conexión a tu aplicación web](https://developers.google.com/web/fundamentals/codelabs/offline/), que inspiró este sencillo ejemplo.

#### Probando el ejemplo sin conexión

Para probar nuestro [ejemplo de servicio _worker_](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/), deberás cargarlo un par de veces para asegurarte de que esté instalado. Una vez hecho esto, puedes:

- Intenta desconectar tu red/apagar tu _Wifi_.
- Selecciona _Archivo → Trabajar sin conexión_ si estás usando Firefox.
- Ve a _devtools_, luego elige _Aplicación → Servicio worker_, luego marca la casilla de verificación _Sin conexión_ si estás usando Chrome.

Si actualizas tu página de ejemplo nuevamente, deberías ver que se carga bien. Todo se almacena sin conexión: los activos de la página en una caché y los videos en una base de datos `IndexedDB`.

## Resumen

Eso es todo por ahora. Esperamos que hayas encontrado útil nuestro resumen de las tecnologías de almacenamiento de lado del cliente.

## Ve también

- [API de almacenamiento Web](/es/docs/Web/API/Web_Storage_API)
- [API IndexedDB](/es/docs/Web/API/IndexedDB_API)
- [Cookies](/es/docs/Web/HTTP/Cookies)
- [API del servicio worker](/es/docs/Web/API/Service_Worker_API)

{{PreviousMenu("Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs", "Learn/JavaScript/Client-side_web_APIs")}}
