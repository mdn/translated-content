---
title: Headers
slug: Web/API/Headers
l10n:
  sourceCommit: 2b554506d84d016d3ddf612c593bd8315833c64d
---

{{APIRef("Fetch API")}}

La interfaz **`Headers`** de la [API Fetch](/es/docs/Web/API/Fetch_API) te permite realizar varias acciones en las [cabeceras de solicitud y respuesta HTTP](/es/docs/Web/HTTP/Reference/Headers). Estas acciones incluyen recuperar, establecer, agregar y eliminar cabeceras de la lista de cabeceras de la solicitud.

Un objeto `Headers` tiene una lista de cabeceras asociada, que inicialmente está vacía y consta de cero o más pares de nombre y valor. Puedes agregar a esto utilizando métodos como `{{domxref("Headers.append","append()")}}` (ver [Ejemplos](#ejemplos).) En todos los métodos de esta interfaz, los nombres de las cabeceras se comparan mediante secuencias de bytes sin distinción de mayúsculas y minúsculas.

Por razones de seguridad, algunas cabeceras solo pueden ser controlados por el agente de usuario. Estas cabeceras incluyen los `{{Glossary("Forbidden_header_name", "nombres de cabeceras prohibidos")}}` y `{{Glossary("Forbidden_response_header_name", "nombres de cabeceras de respuesta prohibidos")}}`.

Un objeto `Headers` también tiene un guardián asociado, que toma un valor de `immutable`, `request`, `request-no-cors`, `response` o `none`. Esto afecta si los métodos `{{domxref("Headers.set","set()")}}`, `{{domxref("Headers.delete","delete()")}}` y `{{domxref("Headers.append","append()")}}` mutarán la cabecera. Para obtener más información, consulta `{{Glossary("Guard")}}`.

Puedes recuperar un objeto `Headers` a través de las propiedades `{{domxref("Request.headers")}}` y `{{domxref("Response.headers")}}`, y crear un nuevo objeto `Headers` usando el constructor `{{domxref("Headers.Headers", "Headers()")}}`.

Un objeto que implementa `Headers` se puede usar directamente en una estructura `{{jsxref("Statements/for...of", "for...of")}}`, en lugar de `{{domxref('Headers.entries()', 'entries()')}}`: `for (const p of myHeaders)` es equivalente a `for (const p of myHeaders.entries())`.

> [!NOTE]
> Puedes obtener más información sobre las cabeceras disponibles leyendo nuestra referencia de [cabeceras HTTP](/es/docs/Web/HTTP/Reference/Headers).

{{AvailableInWorkers}}

## Constructor

- {{domxref("Headers.Headers()", "Headers()")}}
  - : Crea un nuevo objeto `Headers`.

## Métodos de instancia

- `{{domxref("Headers.append()")}}`
  - : Añade un nuevo valor a una cabecera existente dentro de un objeto `Headers`, o agrega la cabecera si aún no existe.
- `{{domxref("Headers.delete()")}}`
  - : Elimina una cabecera de un objeto `Headers`.
- `{{domxref("Headers.entries()")}}`
  - : Devuelve un {{jsxref("Iteration_protocols", "iterator")}} que permite recorrer todos los pares de clave/valor contenidos en este objeto.
- `{{domxref("Headers.forEach()")}}`
  - : Ejecuta una función proporcionada una vez por cada par de clave/valor en este objeto `Headers`.
- `{{domxref("Headers.get()")}}`
  - : Devuelve una secuencia de {{jsxref("String")}} con todos los valores de una cabecera dentro de un objeto `Headers` con un nombre dado.
- `{{domxref("Headers.getSetCookie()")}}`
  - : Devuelve un array que contiene los valores de todas las cabeceras {{httpheader("Set-Cookie")}} asociados con una respuesta.
- `{{domxref("Headers.has()")}}`
  - : Devuelve un booleano indicando si un objeto `Headers` contiene cierta cabecera.
- `{{domxref("Headers.keys()")}}`
  - : Devuelve un {{jsxref("Iteration_protocols", "iterator")}} que permite recorrer todas las claves de los pares de clave/valor contenidos en este objeto.
- `{{domxref("Headers.set()")}}`
  - : Establece un nuevo valor para una cabecera existente dentro de un objeto `Headers`, o agrega la cabecera si aún no existe.
- `{{domxref("Headers.values()")}}`
  - : Devuelve un {{jsxref("Iteration_protocols", "iterator")}} que permite recorrer todos los valores de los pares de clave/valor contenidos en este objeto.

> [!NOTE]
> Para ser claro, la diferencia entre `{{domxref("Headers.set()")}}` y `{{domxref("Headers.append()")}}` es que si la cabecera especificada ya existe y acepta múltiples valores, `{{domxref("Headers.set()")}}` sobrescribirá el valor existente con el nuevo, mientras que `{{domxref("Headers.append()")}}` añadirá el nuevo valor al final del conjunto de valores. Consulta sus páginas dedicadas para ver ejemplos de código.

> [!NOTE]
> Todos los métodos de `Headers` lanzarán un {{jsxref("TypeError")}} si intentas pasar una referencia a un nombre que no es un [nombre de cabecera HTTP válido](https://fetch.spec.whatwg.org/#concept-header-name). Las operaciones de mutación lanzarán un `TypeError` si la cabecera tiene un {{Glossary("Guard")}} inmutable. En cualquier otro caso de fallo, fallarán silenciosamente.

> [!NOTE]
> Cuando se iteran los valores de las cabeceras, se ordenan automáticamente en orden lexicográfico, y los valores de nombres de cabeceras duplicadas se combinan.

## Ejemplos

En el siguiente fragmento, creamos una nueva cabecera utilizando el constructor `Headers()`, añadimos una nueva cabecera utilizando `append()`, y luego recuperamos ese valor de cabecera utilizando `get()`:

```js
const myHeaders = new Headers();

myHeaders.append("Content-Type", "text/xml");
myHeaders.get("Content-Type"); // debería devolver 'text/xml'
```

Se puede lograr lo mismo pasando un arreglo de arreglos o un objeto literal al constructor:

```js
let myHeaders = new Headers({
  "Content-Type": "text/xml",
});

// o, utilizando un arreglo de arreglos:
myHeaders = new Headers([["Content-Type", "text/xml"]]);

myHeaders.get("Content-Type"); // debería devolver 'text/xml'
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [API de ServiceWorker](/es/docs/Web/API/Service_Worker_API)
- [Control de Acceso HTTP (CORS)](/es/docs/Web/HTTP/Guides/CORS)
- [HTTP](/es/docs/Web/HTTP)
