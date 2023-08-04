---
title: Uso de Fetch
slug: Web/API/Fetch_API/Using_Fetch
---

{{DefaultAPISidebar("Fetch API")}}{{ SeeCompatTable }}

La [API Fetch](/es/docs/Web/API/Fetch_API) proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, tales como peticiones y respuestas. También provee un método global {{domxref("GlobalFetch.fetch","fetch()")}} que proporciona una forma fácil y lógica de obtener recursos de forma asíncrona por la red.

Este tipo de funcionalidad se conseguía previamente haciendo uso de {{domxref("XMLHttpRequest")}}. Fetch proporciona una alternativa mejor que puede ser empleada fácilmente por otras tecnologías como {{domxref("ServiceWorker_API", "Service Workers")}}. Fetch también aporta un único lugar lógico en el que definir otros conceptos relacionados con HTTP como CORS y extensiones para HTTP.

La especificación fetch difiere de `JQuery.ajax()` en dos formas principales:

- El objeto Promise devuelto desde `fetch()` **no será rechazado con un estado de error HTTP** incluso si la respuesta es un error HTTP 404 o 500. En cambio, este se resolverá normalmente (con un estado `ok` configurado a false), y este solo sera rechazado ante un fallo de red o si algo impidió completar la solicitud.
- Por defecto, `fetch` no enviará ni recibirá cookies del servidor, resultando en peticiones no autenticadas si el sitio permite mantentener una sesión de usuario (para mandar cookies, _credentials_ de la opción [init](/es/docs/Web/API/fetch#Parameters) deberan ser configuradas). Desde [el 25 de agosto de 2017](https://github.com/whatwg/fetch/pull/585). La especificación cambió la politica por defecto de las credenciales a `same-origin`. Firefox cambió desde la versión 61.0b13.

Una petición básica de `fetch` es realmente simple de realizar. Eche un vistazo al siguente código:

```
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
```

Aquí estamos recuperando un archivo JSON a través de red e imprimiendo en la consola. El uso de `fetch()` más simple toma un argumento (la ruta del recurso que quieres obtener) y devuelve un objeto Promise conteniendo la respuesta, un objeto {{domxref("Response")}}.

Esto es, por supuesto, una respuesta HTTP no el archivo JSON. Para extraer el contenido en el cuerpo del JSON desde la respuesta, usamos el método {{domxref("Body.json","json()")}} (definido en el [mixin](https://es.wikipedia.org/wiki/Mixin) de {{domxref("Body")}}, el cual está implementado por los objetos {{domxref("Request")}} y {{domxref("Response")}}).

> **Nota:** El mixin de `Body` tambien tiene metodos parecidos para extraer otros tipos de contenido del cuerpo. Vease [Body](#body) para más información.

Las peticiones de Fetch son controladas por la directiva de `connect-src` de [Content Security Policy](/es/docs/Security/CSP/CSP_policy_directives) en vez de la directiva de los recursos que se han devuelto.

### Suministrando opciones de petición

El método `fetch()` puede aceptar opcionalmente un segundo parámetro, un objeto `init` que permite controlar un numero de diferentes ajustes:

Vea {{domxref("GlobalFetch.fetch","fetch()")}}, para ver todas las opciones disponibles y más detalles.

```
// Ejemplo implementando el metodo POST:
async function postData(url = '', data = {}) {
  // Opciones por defecto estan marcadas con un *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData('https://example.com/answer', { answer: 42 })
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
  });
```

Tenga en cuenta que `mode: "no-cors"` solo permite un conjunto limitado de encabezados en la solicitud:

- `Accept`
- `Accept-Language`
- `Content-Language`
- `Content-Type` with a value of `application/x-www-form-urlencoded`, `multipart/form-data`, or `text/plain`

### Comprobando que la petición es satisfactoria

Una petición promise {{domxref("GlobalFetch.fetch","fetch()")}} será rechazada con {{jsxref("TypeError")}} cuando se encuentre un error de red, aunque esto normalmente significa problemas de permisos o similares — por ejemplo, un 404 no constituye un error de red. Una forma precisa de comprobar que la petición `fetch()` es satisfactoria pasa por comprobar si la promesa ha sido resuelta, además de comprobar que la propiedad {{domxref("Response.ok")}} tiene el valor `true` que indica que el estado de la petición HTTP es OK (código 200-299). El código sería algo así:

```js
fetch("flores.jpg")
  .then(function (response) {
    if (response.ok) {
      response.blob().then(function (miBlob) {
        var objectURL = URL.createObjectURL(miBlob);
        miImagen.src = objectURL;
      });
    } else {
      console.log("Respuesta de red OK pero respuesta HTTP no OK");
    }
  })
  .catch(function (error) {
    console.log("Hubo un problema con la petición Fetch:" + error.message);
  });
```

### Proporcionando tu propio objeto Request

En lugar de pasar la ruta al recurso que deseas solicitar a la llamada del método `fetch()`, puedes crear un objeto de petición utilizando el constructor {{domxref("Request.Request","Request()")}}, y pasarlo como un argumento del método `fetch()`:

```js
var myHeaders = new Headers();

var myInit = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
};

var myRequest = new Request("flowers.jpg", myInit);

fetch(myRequest)
  .then(function (response) {
    return response.blob();
  })
  .then(function (myBlob) {
    var objectURL = URL.createObjectURL(myBlob);
    myImage.src = objectURL;
  });
```

`Request()` acepta exactamente los mismos parámetros que el método `fetch()`. Puedes incluso pasar un objeto de petición existente para crear una copia del mismo:

```js
var anotherRequest = new Request(myRequest, myInit);
```

Esto es muy útil ya que el cuerpo de las solicitudes y respuestas son de un sólo uso. Haciendo una copia como esta te permite utilizar la petición/respuesta de nuevo, y al mismo tiempo, si lo deseas, modificar las opciones de `init`. La copia debe estar hecha antes de la lectura del \<body>, y leyendo el \<body> en la copia, se marcará como leido en la petición original.

> **Nota:** Existe también un método {{domxref("Request.clone","clone()")}} que crea una copia. Este tiene una semántica ligeramente distinta al otro método de copia — el primero fallará si el cuerpo de la petición anterior ya ha sido leído (lo mismo para copiar una respuesta), mientras que `clone()` no.

### Enviar una petición con credenciales incluido

Para producir que los navegadores envien una petición con las credenciales incluidas, incluso para una llamada de origen cruzado, añadimos `credentials: 'include'` en el el objeto `init` que se pasa al método `fetch()`.

```js
fetch("https://example.com", {
  credentials: "include",
});
```

Si solo quieres enviar la credenciales si la URL de la petición está en el mismo origen desde donde se llamada el script, añade `credentials: 'same-origin'`.

```js
// El script fué llamado desde el origen 'https://example.com'

fetch("https://example.com", {
  credentials: "same-origin",
});
```

Sin embargo para asegurarte que el navegador no incluye las credenciales en la petición, usa `credentials: 'omit'`.

```js
fetch("https://example.com", {
  credentials: "omit",
});
```

### Enviando datos JSON

Usa {{domxref("GlobalFetch.fetch","fetch()")}} para enviar una petición POST con datos codificados en JSON .

```js
var url = "https://example.com/profile";
var data = { username: "example" };

fetch(url, {
  method: "POST", // or 'PUT'
  body: JSON.stringify(data), // data can be `string` or {object}!
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .catch((error) => console.error("Error:", error))
  .then((response) => console.log("Success:", response));
```

### Enviando un archivo

Los archivos pueden ser subido mediante el HTML de un elemento input `<input type="file" />`, {{domxref("FormData.FormData","FormData()")}} y {{domxref("GlobalFetch.fetch","fetch()")}}.

```js
var formData = new FormData();
var fileField = document.querySelector("input[type='file']");

formData.append("username", "abc123");
formData.append("avatar", fileField.files[0]);

fetch("https://example.com/profile/avatar", {
  method: "PUT",
  body: formData,
})
  .then((response) => response.json())
  .catch((error) => console.error("Error:", error))
  .then((response) => console.log("Success:", response));
```

## Cabeceras

La interfaz {{domxref("Headers")}} te permite crear tus propios objetos de headers mediante el constructor {{domxref("Headers.Headers","Headers()")}}. Un objeto headers es un simple multi-mapa de nombres y valores:

```js
var content = "Hello World";
var myHeaders = new Headers();
myHeaders.append("Content-Type", "text/plain");
myHeaders.append("Content-Length", content.length.toString());
myHeaders.append("X-Custom-Header", "ProcessThisImmediately");
```

Lo mismo se puede lograr pasando un "array de arrays" o un objeto literal al constructor:

```js
myHeaders = new Headers({
  "Content-Type": "text/plain",
  "Content-Length": content.length.toString(),
  "X-Custom-Header": "ProcessThisImmediately",
});
```

Los contenidos pueden ser consultados o recuperados:

```js
console.log(myHeaders.has("Content-Type")); // true
console.log(myHeaders.has("Set-Cookie")); // false
myHeaders.set("Content-Type", "text/html");
myHeaders.append("X-Custom-Header", "AnotherValue");

console.log(myHeaders.get("Content-Length")); // 11
console.log(myHeaders.getAll("X-Custom-Header")); // ["ProcessThisImmediately", "AnotherValue"]

myHeaders.delete("X-Custom-Header");
console.log(myHeaders.getAll("X-Custom-Header")); // [ ]
```

Algunas de estas operaciones solo serán utiles en {{domxref("ServiceWorker_API","ServiceWorkers")}}, pero estas disponen de una mejor API para manipular `headers`.

Todos los métodosde de `headers` lanzan un `TypeError` si un nombre de cabecera no es un nombre de cabecera HTTP válido. Las operaciones de mutación lanzarán un `TypeError` si hay un guarda inmutable (ver más abajo). Si no, fallan silenciosamente. Por ejemplo:

```js
var myResponse = Response.error();
try {
  myResponse.headers.set("Origin", "http://mybank.com");
} catch (e) {
  console.log("Cannot pretend to be a bank!");
}
```

Un buen caso de uso para `headers` es comprobar cuando el tipo de contenido es correcto antes de que se procese:

```js
fetch(myRequest).then(function (response) {
  var contentType = response.headers.get("content-type");
  if (contentType && contentType.indexOf("application/json") !== -1) {
    return response.json().then(function (json) {
      // process your JSON further
    });
  } else {
    console.log("Oops, we haven't got JSON!");
  }
});
```

### Guarda (Guard)

Desde que las cabeceras pueden ser enviadas en peticiones y recibidas en respuestas, y tienen limitaciones sobre que información puede y debería ser mutable, los objeto headers tienen una propierdad de guarda. Este no está expuesto a la Web, pero puede afectar a que operaciones de mutación son permitidas sobre el objeto headers.

Los valores posibles de guarda (guard) son:

- `none`: valor por defecto.
- `request`: Guarda para el objeto headers obtenido de la petición ({{domxref("Request.headers")}}).
- `request-no-cors`: Guarda para un objeto headers obtenido desde una petición creada con {{domxref("Request.mode")}} a `no-cors`.
- `response`: Guarda para una cabecera obetenida desde un respuesta ({{domxref("Response.headers")}}).
- `immutable`: Mayormente utilizado para ServiceWorkers, produce un objeto headers de solo lectura.

> **Nota:** No se debería añadir o establecer una petición a un objeto headers _guardado_ con la cabecera `Content-Length`. De igual manera, insertar `Set-Cookie` en la respuesta de la cabecera no esta permitido: ServiceWorkers no estan autorizados a establecer cookies a través de respuestas sintéticas.

## Objetos Response

Cómo has visto anteriormente, las instancias de {{domxref("Response")}} son devueltas cuando `fetch()` es resuelto.

Las propiedades de response que usarás son:

- {{domxref("Response.status")}} — Entero (por defecto con valor 200) que contiene el código de estado de las respuesta.
- {{domxref("Response.statusText")}} — Cadena (con valor por defecto "OK"), el cual corresponde al mensaje del estado de código HTTP.
- {{domxref("Response.ok")}} — Visto en uso anteriormente, es una clave para comprobar que el estado está dentro del rango 200-299 (ambos incluidos). Este devuelve un valor {{domxref("Boolean")}}, siendo `true` si lo anterior se cumple y `false` en otro caso.

Estos pueden también creados programáticamente a través de JavaScript, pero esto solamente es realmete útil en {{domxref("ServiceWorker_API", "ServiceWorkers")}}, cuando pones un objeto response personalizado a una respuesta recibida usando un método {{domxref("FetchEvent.respondWith","respondWith()")}}:

```js
var myBody = new Blob();

addEventListener("fetch", function (event) {
  event.respondWith(
    new Response(myBody, {
      headers: { "Content-Type": "text/plain" },
    }),
  );
});
```

El constructor {{domxref("Response.Response","Response()")}} toma dos argurmentos opcionales, un cuerpo para la respuesta y un objeto init (similar al que acepta {{domxref("Request.Request","Request()")}}).

> **Nota:** El método estático {{domxref("Response.error","error()")}} simplemente devuelve un error en la respuesta. De igual manera que {{domxref("Response.redirect","redirect()")}} devuelve una respuesta que resulta en un redirección a una URL especificada. Estos son solo relevantes tambien a ServiceWorkers.

## Body

Tanto las peticiones como las respuestas pueden contener datos body. Body es una instancia de cualquiera de los siguientes tipos:

- {{domxref("ArrayBuffer")}}
- {{domxref("ArrayBufferView")}} (Uint8Array y amigos)
- {{domxref("Blob")}}/File
- string
- {{domxref("URLSearchParams")}}
- {{domxref("FormData")}}

El mixin de {{domxref("Body")}} define los siguientes metodos para extraer un body (implementado por {{domxref("Request")}} and {{domxref("Response")}}). Todas ellas devuelven una promesa que es eventualmente resuelta con el contenido actual.

- {{domxref("Body.arrayBuffer","arrayBuffer()")}}
- {{domxref("Body.blob","blob()")}}
- {{domxref("Body.json","json()")}}
- {{domxref("Body.text","text()")}}
- {{domxref("Body.formData","formData()")}}

Este hace uso de los datos no texttuales mucho mas facil que si fuera con XHR.

Las peticiones body pueden ser establecidas pasando el parametro body:

```js
var form = new FormData(document.getElementById("login-form"));
fetch("/login", {
  method: "POST",
  body: form,
});
```

Tanto peticiones y respuestas (y por extensión la function `fetch()`), intentaran inteligentemente determinar el tipo de contenido. Una petición tambien establecerá automáticamente la propiedad `Context-Type` de la cabecera si no es ha establecido una.

## Detectar característica

Puedes comprobar si el navegador soporta la API de Fetch comprobando la existencia de {{domxref("Headers")}}, {{domxref("Request")}}, {{domxref("Response")}} o {{domxref("GlobalFetch.fetch","fetch()")}} sobre el ámbito de {{domxref("Window")}} o {{domxref("Worker")}}. Por ejemplo:

```js
if (self.fetch) {
  // run my fetch request here
} else {
  // do something with XMLHttpRequest?
}
```

## Polyfill

Para utilizar `fetch()` en un explorador no soportado, hay disponible un [Fetch Polyfill](https://github.com/github/fetch) que recrea la funcionalidad para navegadores no soportados.

## Vea también

- [ServiceWorker API](/es/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/es/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/es/docs/Web/HTTP)
- [Fetch polyfill](https://github.com/github/fetch)
- [Fetch examples on Github](https://github.com/mdn/fetch-examples/)
