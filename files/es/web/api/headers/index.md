---
title: Headers
slug: Web/API/Headers
---

{{APIRef("Fetch API")}}

La interfaz **`Headers`** de la [Fetch API](/es/docs/Web/API/Fetch_API) te permite realizar varias acciones en los [encabezados de solicitud y respuesta HTTP](/es/docs/Web/HTTP/Headers). Estas acciones incluyen recuperar, establecer, agregar y eliminar encabezados de la lista de encabezados de la solicitud.

Un objeto `Headers` tiene una lista de encabezados asociada, que inicialmente está vacía y consta de cero o más pares de nombre y valor. Puedes agregar a esto utilizando métodos como `{{domxref("Headers.append","append()")}}` (ver [Ejemplos](#ejemplos).) En todos los métodos de esta interfaz, los nombres de los encabezados se comparan mediante secuencias de bytes sin distinción de mayúsculas y minúsculas.

Por razones de seguridad, algunos encabezados solo pueden ser controlados por el agente de usuario. Estos encabezados incluyen los `{{Glossary("Forbidden_header_name", "nombres de encabezados prohibidos")}}` y `{{Glossary("Forbidden_response_header_name", "nombres de encabezados de respuesta prohibidos")}}`.

Un objeto `Headers` también tiene un guardián asociado, que toma un valor de `immutable`, `request`, `request-no-cors`, `response` o `none`. Esto afecta si los métodos `{{domxref("Headers.set","set()")}}`, `{{domxref("Headers.delete","delete()")}}` y `{{domxref("Headers.append","append()")}}` mutarán el encabezado. Para obtener más información, consulta `{{Glossary("Guard")}}`.

Puedes recuperar un objeto `Headers` a través de las propiedades `{{domxref("Request.headers")}}` y `{{domxref("Response.headers")}}`, y crear un nuevo objeto `Headers` usando el constructor `{{domxref("Headers.Headers", "Headers()")}}`.

Un objeto que implementa `Headers` se puede usar directamente en una estructura `{{jsxref("Statements/for...of", "for...of")}}`, en lugar de `{{domxref('Headers.entries()', 'entries()')}}`: `for (const p de myHeaders)` es equivalente a `for (const p de myHeaders.entries())`.

> **Nota:** puedes obtener más información sobre los encabezados disponibles leyendo nuestra referencia de [encabezados HTTP](/es/docs/Web/HTTP/Headers).

{{AvailableInWorkers}}

## Constructor

- {{domxref("Headers.Headers()", "Headers()")}}
- : Crea un nuevo objeto `Headers`.

## Métodos de instancia

- `{{domxref("Headers.append()")}}`
  - : Añade un nuevo valor a un encabezado existente dentro de un objeto `Headers`, o agrega el encabezado si aún no existe.
- `{{domxref("Headers.delete()")}}`
  - : Elimina un encabezado de un objeto `Headers`.
- `{{domxref("Headers.entries()")}}`
  - : Devuelve un {{jsxref("Iteration_protocols", "iterator")}} que permite recorrer todos los pares de clave/valor contenidos en este objeto.
- `{{domxref("Headers.forEach()")}}`
  - : Ejecuta una función proporcionada una vez por cada par de clave/valor en este objeto `Headers`.
- `{{domxref("Headers.get()")}}`
  - : Devuelve una secuencia de {{jsxref("String")}} con todos los valores de un encabezado dentro de un objeto `Headers` con un nombre dado.
- `{{domxref("Headers.getSetCookie()")}}`
  - : Devuelve un array que contiene los valores de todos los encabezados {{httpheader("Set-Cookie")}} asociados con una respuesta.
- `{{domxref("Headers.has()")}}`
  - : Devuelve un booleano indicando si un objeto `Headers` contiene cierto encabezado.
- `{{domxref("Headers.keys()")}}`
  - : Devuelve un {{jsxref("Iteration_protocols", "iterator")}} que permite recorrer todas las claves de los pares de clave/valor contenidos en este objeto.
- `{{domxref("Headers.set()")}}`
  - : Establece un nuevo valor para un encabezado existente dentro de un objeto `Headers`, o agrega el encabezado si aún no existe.
- `{{domxref("Headers.values()")}}`
  - : Devuelve un {{jsxref("Iteration_protocols", "iterator")}} que permite recorrer todos los valores de los pares de clave/valor contenidos en este objeto.

> **Nota:** Para ser claro, la diferencia entre `{{domxref("Headers.set()")}}` y `{{domxref("Headers.append()")}}` es que si el encabezado especificado ya existe y acepta múltiples valores, `{{domxref("Headers.set()")}}` sobrescribirá el valor existente con el nuevo, mientras que `{{domxref("Headers.append()")}}` añadirá el nuevo valor al final del conjunto de valores. Consulta sus páginas dedicadas para ver ejemplos de código.

> **Nota:** Todos los métodos de `Headers` lanzarán un {{jsxref("TypeError")}} si intentas pasar una referencia a un nombre que no es un [nombre de encabezado HTTP válido](https://fetch.spec.whatwg.org/#concept-header-name). Las operaciones de mutación lanzarán un `TypeError` si el encabezado tiene un {{Glossary("Guard")}} inmutable. En cualquier otro caso de fallo, fallarán silenciosamente.

> **Nota:** Cuando se iteran los valores de los encabezados, se ordenan automáticamente en orden lexicográfico, y los valores de nombres de encabezados duplicados se combinan.

## Ejemplos

En el siguiente fragmento, creamos un nuevo encabezado utilizando el constructor `Headers()`, añadimos un nuevo encabezado utilizando `append()`, y luego recuperamos ese valor de encabezado utilizando `get()`:

```js
const myHeaders = new Headers();

myHeaders.append("Content-Type", "text/xml");
myHeaders.get("Content-Type"); // debería devolver 'text/xml'
```

The same can be achieved by passing an array of arrays or an object literal to the constructor:

```js
let myHeaders = new Headers({
  "Content-Type": "text/xml",
});

// o, utilizando un array de arrays:
myHeaders = new Headers([["Content-Type", "text/xml"]]);

myHeaders.get("Content-Type"); // debería devolver 'text/xml'
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [ServiceWorker API](/es/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/es/docs/Web/HTTP/CORS)
- [HTTP](/es/docs/Web/HTTP)
