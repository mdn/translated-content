---
title: Introducción a las APIs web
slug: Learn/JavaScript/Client-side_web_APIs/Introduction
---

{{LearnSidebar}}{{NextMenu("Learn/JavaScript/Client-side_web_APIs/Manipulating_documents", "Learn/JavaScript/Client-side_web_APIs")}}

En primer lugar empezaremos echando un vistazo a las APIS desde un nivel superior — ¿qué son, cómo funcionan, cómo usarlas en el código, y cómo están estructuradas?. También echaremos un vistazo a cuáles son los principales tipos de APIs, y para qué se usan.

| Pre requisitos: | Conocimientos básicos de informática, principios básicos de [HTML](/es/docs/Learn/HTML), [CSS](/es/docs/Learn/CSS) y JavaScript (ver [primeros pasos](/es/docs/Learn/JavaScript/First_steps), [bloques de construcción](/es/docs/Learn/JavaScript/Building_blocks), [objetos JavaScript](/es/docs/Learn/JavaScript/Objects)). |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Objetivo:       | Familiarizarse con las APIs, saber qué pueden hacer y cómo usarlas en tu código.                                                                                                                                                                                                                                              |

## ¿Qué son las APIs?

Las Interfaces de Programacion de Aplicaciones (APIs por sus siglas en inglés) son construcciones disponibles en los lenguajes de programación que permiten a los desarrolladores crear funcionalidades complejas de una manera simple. Estas abstraen el código más complejo para proveer una sintaxis más fácil de usar en su lugar.

Como ejemplo, piensa en el suministro de electricidad de tu casa, apartamento, o cualquier otro edificio. Si quieres usar un electrodoméstico, simplemente lo conectas en un enchufe y funciona. No intentas conectarlo directamente a la fuente de alimentación — hacerlo sería muy ineficiente y, si no eres electricista, dificil y peligroso.

![](plug-socket.png)

_Fuente de la imagen: [Overloaded plug socket](https://www.flickr.com/photos/easy-pics/9518184890/in/photostream/lightbox/) por [The Clear Communication People](https://www.flickr.com/photos/easy-pics/), en Flickr._

De la misma manera, si quisieras programar gráficos 3D, sería mucho más facil hacerlo usando una API escrita en un lenguaje de alto nivel como JavaScript o Python, en lugar de intentar escribir código de bajo nivel (por ejemplo: C o C++) que controle directamente la GPU del equipo u otras funciones gráficas.

> **Nota:** Consulta también la [entrada API en el glosario](/es/docs/Glossary/API) para una descripción más detallada.

### APIs en JavaScript del lado cliente

JavaScript del lado cliente, particularmente, tiene muchas APIs disponibles — estas no son parte del lenguaje en sí, sino que están construidas sobre el núcleo de este lenguaje de programación, proporcionándote superpoderes adicionales para usar en tu código. Por lo general, se dividen en dos categorías:

- **Las APIs de navegador** están integradas en tu navegador web y pueden exponer datos del navegador y del entorno informático circundante y hacer cosas complejas y útiles con él. Por ejemplo, la API de Geolocalización proporciona algunas construcciones simples de JavaScript para obtener datos de ubicación con los que, por ejemplo, trazar tu ubicación en un mapa de Google. Realmente, el navegador está haciendo uso de códigos de bajo nivel complejos en segundo plano (por ejemplo, C++) para comunicarse con el hardware GPS del dispositivo (o lo que esté disponible para determinar los datos de posición), recuperar datos de posición y devolverlos al entorno del navegador para su uso en tu código. Pero una vez más, la API se encarga de abstraer esta complejidad.
- **Las APIs de terceros** no están incluídas por defecto en el navegador, y por lo general es necesario obtener el código e información desde algún lugar de la Web. Por ejemplo, [la API de Twitter](https://dev.twitter.com/overview/documentation) permite hacer cosas como mostrar tus últimos tweets en un sitio web. Proporciona un conjunto especial de construcciones que puedes usar para consultar el servicio de Twitter y devolver información específica.

![](browser.png)

### Relacion entre JavaScript, APIs, y otras herramientas de JavaScript

Anteriormente hablamos sobre qué son las APIs de JavaScript del lado cliente y cómo se relacionan con este lenguaje. Recapitulemos ahora para dejarlo claro, y veamos también dónde encajan otras herramientas de JavaScript:

- JavaScript — Un lenguaje de scripts de alto nivel incorporado en los navegadores que permite implementar interactividad en páginas web / apps. Ten en cuenta que JavaScript también está disponible en otros entornos de programación, como [Node](/es/docs/Learn/Server-side/Express_Nodejs/Introduction).
- APIs de navegador — Construcciones integradas en el navegador creadas con el lenguaje JavaScript y que permiten implementar funcionalidad mucho más fácilmente.
- APIs de terceros — Construcciones integradas en plataformas de terceros (por ejemplo Twitter, Facebook) que permiten usar algunas de las funcionalidades de esa plataforma en tus páginas web (como por ejemplo mostrar tus últimos Tweets en tu página web).
- Librerías JavaScript — Por lo general uno o más archivos JavaScript que contienen [funciones personalizadas](/es/docs/Learn/JavaScript/Building_blocks/Functions#Custom_functions) que puedes añadir a tu página web para acelerar o habilitar la escritura de funcionalidades comunes. Por ejemplo jQuery, Mootools y React.
- Frameworks JavaScript — El siguiente paso a las librerías, los frameworks JavaScript (como Angular y Ember) suelen ser paquetes de HTML, CSS, JavaScript y otras tecnologías que se instalan y luego se usan para escribir una aplicación web completa desde cero. La diferencia clave entre una librería y un framework es la "Inversión del control". Cuando se llama a un método desde una librería, el desarrollador tiene el control. Con un framework el control se invierte: el framework llama al código del desarrollador.

## ¿Qué pueden hacer las APIs?

Hay una gran cantidad de APIs disponibles en los navegadores modernos que te permiten hacer una gran variedad de cosas en tu código. Puedes verlo echando un vistazo al [índice de APIs de MDN](/es/docs/Web/API).

### APIs de navegador más comunes

En particular, las categorías más comunes de APIs de navegador más usadas (y que trataremos con mayor detalle en este módulo) son:

- **APIs para manipular documentos** cargados en el navegador. El ejemplo más obvio es la [API DOM (Document Object Model)](/es/docs/Web/API/Document_Object_Model), que permite manipular HTML y CSS — crear, eliminar y modificar HTML, aplicar estilos dinámicos a una página, etc. Cada vez que se muestra una ventana emergente en una página, o un nuevo contenido, por ejemplo, es el DOM en acción. Más información sobre este tipo de APIs en [Manipulando documentos](/es/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents).
- **APIs que obtienen datos del servidor,** comunmente usadas para actualizar pequeñas secciones de una página web. Este aparente pequeño detalle tiene un gran impacto en el performance y en el comportamiento de los sitios. — Sí solo necesitas actualizar un Stock de artículos o una lista de tiendas disponibles, al utilizar APIs para obtener datos desde el servidor lo lograrás sin tener que volver a cargar toda la página o aplicación logrando que estas tengan una sensación de rapidez y agilidad. Las APIs hacen esto posible gracias a que incluyen [`XMLHttpRequest`](/es/docs/Web/API/XMLHttpRequest) y la [Fetch API](/es/docs/Web/API/Fetch_API). Tambièn puede encontrar el termino Ajax que describe esta técnica. Más información sobre este tipo de APIs en [Fetching data from the server](/es/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data).
- **Las APIs para dibujar y manipular graficos** ya son soportadas por la mayoría de navegadores. Las más populares son [Canvas](/es/docs/Web/API/Canvas_API) y [WebGL](/es/docs/Web/API/WebGL_API), que permiten actualizar la información de cada uno de los píxeles contenidos en un {{htmlelement("canvas")}} HTML, para crear escenas 2D y 3D. Por ejemplo, se pueden dibujar formas como rectángulos o círculos, importar una imagen en el canvas y aplicarle filtros como sepia o escala de grises usando la API de Canvas, o crear una escena compleja 3D con iluminación y texturas usando WebGL. Estas APIs, a menudo se combinan con apis para crear bucles de animación (como {{domxref("window.requestAnimationFrame()")}}) y otras veces para hacer que se actualicen constantemente escenas de dibujos animados o videojuegos.
- **[APIS de audio y vídeo](/es/Apps/Fundamentals/Audio_and_video_delivery)** como {{domxref("HTMLMediaElement")}}, la [Web Audio API](/es/docs/Web/API/Web_Audio_API), y [WebRTC](/es/docs/Web/API/WebRTC_API) te permitirán hacer cosas realmente interesantes con elementos multimedia: crear una interfaz personalizada para los controles de reproducción de audio y vídeo, mostrar pistas de texto con subtítulos junto con el vídeo, capturar vídeo de la cámara web para ser manipulado en un canvas (ver más arriba) o mostrado en el ordenador de otra persona en una videoconferencia, añadir efectos a las pistas de audio (como ganancia, distorsión, retardo, etc).
- **Las APIs de dispositivos** son básicamente APIs para manipular y recuperar información de dispositivos modernos de hardware de forma que sean útiles para aplicaciones web. Ya hemos hablado de la API de geolocalización, que accede a la información de ubicación del dispositivo, de forma que te pueda localizar en un mapa. Otros ejemplos incluyen indicar al usuario de que una actulización útil está disponible en una aplicación web mediante notificaciones de sistema (ver [Notifications API](/es/docs/Web/API/Notifications_API)) o la vibración de hardware (ver [Vibration API](/es/docs/Web/API/Vibration_API)).
- Las **APIS de almacenamiento en el lado del cliente** se están popularizando en los navegadores. La habilidad de almacenar información en el lado del cliente es muy útil para hacer aplicaciones que salven su estado entre carga de páginas, e incluso trabajar cuando el dispositivo está fuera de línea. Hay varias opciones disponibles, por ejemplo el almacenamiento en pares de clave/valor con [Web Storage API](/es/docs/Web/API/Web_Storage_API), y una forma más compleja de almacenar datos tabulados mediante la [IndexedDB API](/es/docs/Web/API/IndexedDB_API).

### APIs populares de terceros

Existe una gran variedad de APIs de terceros, algunas de las más populares de las que querrás hacer uso en algún momento son:

- La [API de Twitter](https://dev.twitter.com/overview/documentation), que te permite hacer cosas como mostrar tus ultimos tweets en tu sitio web.
- La [API de Google Maps](https://developers.google.com/maps/) permite hacer todo tipo de cosas con mapas en tus páginas web (incluso hace funcionar Google Maps). Actualmente, existe todo un conjunto de apis que te permiten realizar una gran variedad de tareas, como se puede ver en [Google Maps API Picker](https://developers.google.com/maps/documentation/api-picker).
- El [conjunto de APIs de Facebook](https://developers.facebook.com/docs/) te permite usar partes del ecosistema de facebook para mejorar tu aplicación, por ejemplo aportando la posiblidad de identificación mediante el login de Facebook, aceptar pagos en la aplicación, desplegar campañas de anuncios para un target concreto, etc.
- La [YouTube API](https://developers.google.com/youtube/), te permite integrar videos de Youtube en tu sitio, buscar en Youtube, construir listas de reproducción y más.
- La [Twilio API](https://www.twilio.com/), provee de un framework para crear la funcionalidad de llamadas y videollamadas en tus aplicaciones, enviar SMS o MMS y más.

> **Nota:** puedes encontrar información de una gran cantidad de APIs de terceros en el [Programmable Web API directory](http://www.programmableweb.com/category/all/apis).

## ¿Cómo funcionan las APIs?

Las distintas APIs de JavaScript funcionan de forma ligeramente diferente, pero generalmente tienen características similares y una forma parecida en cómo trabajan.

### Están basadas en objetos

Las APIs interactúan con tu código usando uno o más [Objetos JavaScript,](/es/docs/Learn/JavaScript/Objects) que sirven como contenedores para los datos que usa la API (contenidos en las propiedades del objeto), y la funcionalidad que la API provee (contenida en los métodos del objeto).

> **Nota:** si no estás familiarizado en cómo trabajar con objetos, deberías volver atrás y revisar el módulo de [objetos JavaScript](/es/docs/Learn/JavaScript/Objects)antes de seguir.

Volvamos al ejemplo de la API de Geolocalización, que es una API muy simple que consiste en unos pocos objetos sencillos:

- {{domxref("Geolocation")}}, que contiene tres métodos para controlar la recuperación de los datos geográficos.
- {{domxref("Position")}}, que representa la posición de un dispositivo en un momento dado — esto contiene un objeto {{domxref("Coordinates")}} que contiene la información de la posición actual, además de una marca de tiempo con el momento exacto.
- {{domxref("Coordinates")}}, que contiene una gran cantidad de datos útiles sobre la posición del dispositivo, incluyendo latitud y longitud, altitud, velocidad, dirección de movimiento y más.

¿Cómo interactúan estos objetos? Si miras a nuestro ejemplo [maps-example.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/introduction/maps-example.html) ([ver también en vivo](http://mdn.github.io/learning-area/javascript/apis/introduction/maps-example.html)), encontrarás el siguiente código:

```js
navigator.geolocation.getCurrentPosition(function (position) {
  var latlng = new google.maps.LatLng(
    position.coords.latitude,
    position.coords.longitude,
  );
  var myOptions = {
    zoom: 8,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.TERRAIN,
    disableDefaultUI: true,
  };
  var map = new google.maps.Map(
    document.querySelector("#map_canvas"),
    myOptions,
  );
});
```

> **Nota:** cuando cargues por primera vez el ejemplo de arriba, se te mostrará un mensaje preguntando si deseas compartir tu localización con esta aplicación (ver la sección [They have additional security mechanisms where appropriate](#they_have_additional_security_mechanisms_where_appropriate) que se encuentra más adelante en este artículo). Deberás estar de acuerdo con esto para poder ver tu localización en el mapa. Si aún así sigues sin ver tu localización, tal vez debas establecer los permisos manualmente; lo puedes hacer de varias formas dependiendo del navegador que estés usando; por ejemplo en Firefox debes ir a > _Tools_ > _Page Info_ > _Permissions_, y cambiar la configuración para _Share Location_; en Chrome ve a _Settings_ > _Privacy_ > _Show advanced settings_ > _Content settings_ y cambia las opciones para _Location_.

Primero queremos usar el método {{domxref("Geolocation.getCurrentPosition()")}} para retornar la posición actuali de nuestro dispositivo. El objeto {{domxref("Geolocation")}} del navegador es accedido llamando a la propiedad {{domxref("Navigator.geolocation")}}, así que comenzaremos haciendo:

```js
navigator.geolocation.getCurrentPosition(function(position) { ... });
```

Lo que es equivalente a hacer algo como:

```js
var myGeo = navigator.geolocation;
myGeo.getCurrentPosition(function(position) { ... });
```

Pero podemos usar la sintaxis con punto para concatener nuestros accesos a propiedades/métodos reduciendo el número de líneas que tenemos que escribir.

El método {{domxref("Geolocation.getCurrentPosition()")}} solamente tiene un parámetroobligatorio, que es una función anónima que se ejecutará cuando se recupere correctamente la ubicación del dispositivo. Esta función tiene un parámetro, que contiene un objeto {{domxref("Position")}} con la representación de los datos de la posición actual.

> **Nota:** una función que es tomada por otra función como argumento es conocida con el nombre de [callback function](/es/docs/Glossary/Callback_function).

Este patrón de invocar una función solamente cuando una operación ha sido completada es muy común en las APIs de Javascript — asegurando que una operación ha sido completada antes de intentar usar los datos que retorna en otra operación. Estas operaciones se llaman **[operaciones asíncronas](/es/docs/Glossary/Asynchronous)**. Puesto que obtener la posición actual del dispositivo recae en un componente externo (el GPS del dispositivo u otro hardware de geolocalización), no podemos asegurar que se haga a tiempo para usar inmediatamente los datos. Por tanto, algo así no funcionará:

```js example-bad
var position = navigator.geolocation.getCurrentPosition();
var myLatitude = position.coords.latitude;
```

Si la primera línea no ha retornado todavía su resultado, la segunda línea lanzará un error puesto que los datos de posición no estarán disponibles. Por esa razón, las APIs que tienen operaciones asíncronas se diseñan para usar {{glossary("callback function")}}s, o el sistema más moderno de [Promises](/es/docs/Web/JavaScript/Reference/Global_Objects/Promise), que se ha introducido en ECMAScript 6 y se está usando mucho en las APIs más nuevas.

Vamos a combinar la API de geolocalización con una API de terceros — la API de Google Maps — que se usa para dibujar la localización retornada por `getCurrentPosition()` en un mapa de Google. Haremos disponible esta API en nuestra página vinculándonos a ella — encontrarás esta línea en el HTML:

```html
<script
  type="text/javascript"
  src="https://maps.google.com/maps/api/js?key=AIzaSyDDuGt0E5IEGkcE6ZfrKfUtE9Ko_de66pA"></script>
```

Para usar la API, primero creamos una instancia del objeto `LatLng` usando el constructor `google.maps.LatLng()`, que toma los valores de nuestra {{domxref("Coordinates.latitude")}} y {{domxref("Coordinates.longitude")}} geolocalizada como parámetros:

```js
var latlng = new google.maps.LatLng(
  position.coords.latitude,
  position.coords.longitude,
);
```

Este objeto quedará establecido como el valor de la propiedad `center` de un objeto de opciones que hemos llamado `myOptions`. Entonces crearemos una instancia de objeto para representar nuestro mapa llamando al constructor de `google.maps.Map()`, pasándole sus dos parámetros — una referencia al elemento {{htmlelement("div")}} donde queremos presentar el mapa (con ID `map_canvas`), y el objeto de opciones que acabamos de definir.

```js
var myOptions = {
  zoom: 8,
  center: latlng,
  mapTypeId: google.maps.MapTypeId.TERRAIN,
  disableDefaultUI: true,
};

var map = new google.maps.Map(document.querySelector("#map_canvas"), myOptions);
```

Una vez hecho, veremos dibujado nuestro mapa.

Este último bloque de código muestra dos patrones habituales que veremos en muchas APIs. Primero, los objetos de las APIs habitualmente disponen de constructores, que son invocados para crear instancias de esos objetos que que habitualmente usaremos en nuestros programas. Segundo, los objetos de las APIs a menudo ofrecen múltiples opciones que pueden ser adaptadas para obtener exactamente lo que queremos en nuestro programa. Los constructores de las APIs habitualmente aceptan un objeto de opciones como parámetro, que es donde se deben establecer dichas opciones.

> **Nota:** no te preocupes si no entiendes todos los detalles de este ejemplo inmediantamente. Los repasaremos usando APIs de terceros con más detalle en un artículo futuro.

### Tienen puntos de acceso reconocibles

Cuando uses una API, debes estar seguro que conoces dónde están los puntos de acceso para ella. En la API de Geolocalización esto es bastante sencillo — es la propiedad {{domxref("Navigator.geolocation")}}, que retorna el objeto del navegador {{domxref("Geolocation")}} que contiene todos los métodos útiles de geolocalización disponibles en su interior.

La API del Modelo de Objetos del Navegador (DOM) tiene un punto de acceso todavía más simple — sus características las podemos encontrar colgando del objeto {{domxref("Document")}}, o una instancia de un elemento HTML que queremos modificar de alguna forma, por ejemplo:

```js
var em = document.createElement("em"); // crear un nuevo elemento em
var para = document.querySelector("p"); // referencia a un elemento p existente
em.textContent = "Hello there!"; // dar al em algo de contenido textual
para.appendChild(em); // ubicar el em dentro del párrafo
```

Otras APIs tienen puntos de acceso ligeramente más complejos, que a menudo implican crear un contexto específico para escribir el código de la API. Por ejemplo, el objeto de contexto de la API Canvas se crea obteniendo una referencia al elemento {{htmlelement("canvas")}} en el que quieres dibujar, y a continuación invocando su método {{domxref("HTMLCanvasElement.getContext()")}}:

```js
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
```

Cualquier cosa que queramos hacerle al canvas, se conseguirá llamando a las propiedades y métodos del objeto de contexto (que es una instancia de {{domxref("CanvasRenderingContext2D")}}), por ejemplo:

```js
Ball.prototype.draw = function () {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};
```

> **Nota:** puedes ver este código en acción en nuetro [bouncing balls demo](https://github.com/mdn/learning-area/blob/master/javascript/apis/introduction/bouncing-balls.html) (y también verlo [funcionando](http://mdn.github.io/learning-area/javascript/apis/introduction/bouncing-balls.html)).

### Usan eventos para manejar cambios en su estado

Ya hemos discutido anteriormente los eventos en este curso, en nuestro artículo de [Introducción a los eventos](/es/docs/Learn/JavaScript/Building_blocks/Events) — este artículo detalla qué son los eventos del lado del cliente y cómo se usan en el código. Si no estás familiarizado en cómo se trabaja con la API de eventos del lado del cliente, deberías ir a consultar este artículo antes de continuar.

Algunas APIs web no contienen eventos, pero algunas otras sí contienen un buen número de ellos. Las propiedades para manejarlos, que nos permiten ejecutar funciones cuando los eventos se producen, generalmente se listan en nuestro material de referencia en secciones de "Manejadores de Eventos" separadas. Como ejemplo simple, instancias del objeto [`XMLHttpRequest`](/es/docs/Web/API/XMLHttpRequest) (cada uno representa una petición HTTP al servidor para recuperar un nuevo recurso de algún tipo) tienen un número de eventos disponibles, por ejemplo el evento `load` que es disparado cuando una respuesta ha sido retornada satisfactoriamente conteniendo el recurso solicitado, y ahora está disponible.

El siguiente código aporta un ejemplo simple de cómo se debe usar esto:

```js
var requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = function () {
  var superHeroes = request.response;
  populateHeader(superHeroes);
  showHeroes(superHeroes);
};
```

> **Nota:** puedes ver este código en acción en nuestro ejemplo [ajax.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/introduction/ajax.html) ([verlo en vivo](http://mdn.github.io/learning-area/javascript/apis/introduction/ajax.html)).

Las primeras cinco líneas especifican la licalización del recurso que queremos recuperar, se crea una nueva instancia del objeto con la petición usando el constructor `XMLHttpRequest()`, se abre una petición HTTP `GET` para recuperar el recurso especificado, se indica que la respuesta debería ser enviada en formato JSON, y finalmente se envía la petición.

El manejador `onload` especifica entonces qué hacer con la respuesta. Ya sabemos que la respuesta será retornada satisfactoriamente y estará disponible tras producirse el evento load (a menos que haya sucedido un error), así que salvamos la respuesta que contiene el código JSON retornado en la variable `superHeroes`, luego lo pasamos a dos funciones diferentes para un procesado posterior.

### Tienen mecanismos adicionales de seguridad donde sea necesario

Las características de las WebAPI están sujetas a las mismas consideraciones de seguridad que JavaScript y otras tecnologías web (por ejemplo [same-origin policy](/es/docs/Web/Security/Same-origin_policy)), pero a veces tienen mecanismos adicionales de seguridad. Por ejemplo, algunas de las WebAPIs más modernas solamente funcionan en páginas servidas mediante HTTPS debido a que transmiten información potencialmente sensible (algunos ejemplos son [Service Workers](/es/docs/Web/API/Service_Worker_API) y [Push](/es/docs/Web/API/Push_API)).

Además, algunas WebAPIs solicitarán permiso al usuario para ser activadas cuando se produzcan las llamadas desde el código. Como ejemplo, habrás observado un cuadro de diálogo como éste al probar nuestro ejemplo anterior de [Geolocalización](/es/docs/Web/API/Geolocation):

![](location-permission.png)

La [Notifications API](/es/docs/Web/API/Notifications_API) solicita los permisos de una forma parecida:

![](notification-permission.png)

Estos diálogos solicitando permiso se muestran al usuario por motivos de seguridad — si no estuvieran, los sitios podrían rastrear la localización sin que el usuario lo supiera o bombardearlo con un montón de notificaciones molestas.

## Resumen

En este punto, deberías tener ya una buena idea de los que son las APIs, cómo trabajan y qué puedes hacer con ellas en tu código JavaScript. Seguramente estarás con ganas de comenzar a hacer cosas divertidas con algunas APIs específicas, así que ¡vamos allá! A continuación veremos cómo manipular documentos con el Modelo de Objetos del Documento (DOM).

{{NextMenu("Learn/JavaScript/Client-side_web_APIs/Manipulating_documents", "Learn/JavaScript/Client-side_web_APIs")}}
