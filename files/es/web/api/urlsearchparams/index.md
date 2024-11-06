---
title: URLSearchParams
slug: Web/API/URLSearchParams
---

{{ApiRef("URL API")}}

La interfaz **`URLSearchParams`** define métodos útiles para trabajar con los parámetros de búsqueda de una URL.

Un objeto implementando `URLSearchParams` puede directamente ser usado en una {{jsxref("Statements/for...of", "for...of")}} estructura, en lugar de {{domxref('URLSearchParams.entries()', 'entries()')}}: `for (var p of mySearchParams)` la cual es equivalente a `for (var p of mySearchParams.entries())`.

## Constructor

- {{domxref("URLSearchParams.URLSearchParams", 'URLSearchParams()')}}
  - : El Constructor returna un objeto de tipo `URLSearchParams`.

## Propiedades

_Esta interfaz no hereda ninguna propiedad._

## Métodos

_Esta interfaz no hereda ningún método._

- {{domxref("URLSearchParams.append()")}}
  - : Agrega el par de llave/valor especificado como un nuevo parámetro de búsqueda.
- {{domxref("URLSearchParams.delete()")}}
  - : Elimina el parámetro de búsqueda especificado, y su valor asociado, de la lista de todos los parámetros de búsqueda.
- {{domxref("URLSearchParams.entries()")}}
  - : Returna un {{jsxref("Iteration_protocols","iterator")}} que permite iterar a traves de todos los pares de llave/valor que contiene el objeto.
- {{domxref("URLSearchParams.get()")}}
  - : Returna el primer valor asociado al parámetro de búsqueda especificado.
- {{domxref("URLSearchParams.getAll()")}}
  - : Returna todas los valores asociados con el parámetro de búsqueda especificado.
- {{domxref("URLSearchParams.has()")}}
  - : Returna un {{jsxref("Boolean")}} que indica si el parametro de búsqueda especificado existe.
- {{domxref("URLSearchParams.keys()")}}
  - : Returna un {{jsxref("Iteration_protocols", "iterator")}} que permite iterar a través de todas las **llaves** de los pares de llave/valor que contiene un objeto.
- {{domxref("URLSearchParams.set()")}}
  - : Establece el valor al parámetro de búsqueda asociado con el valor dado. Si hay varios valores, elimina los demás.
- {{domxref("URLSearchParams.sort()")}}
  - : Organiza todos los pares de llave/valor, si existen, por sus llaves.
- {{domxref("URLSearchParams.toString()")}}
  - : Returna una cadena de texto que contiene un parámetro de consulta adecuado para utilizar en una URL.
- {{domxref("URLSearchParams.values()")}}
  - : Returna un {{jsxref("Iteration_protocols", "iterator")}} que permite iterar a través de todos los **valores** de los pares de llave/valor que contiene un objeto.

## Ejemplo

```js
var paramsString = "q=URLUtils.searchParams&topic=api";
var searchParams = new URLSearchParams(paramsString);

//Itera los parámetros de búsqueda.
for (let p of searchParams) {
  console.log(p);
}

searchParams.has("topic") === true; // true
searchParams.get("topic") === "api"; // true
searchParams.getAll("topic"); // ["api"]
searchParams.get("foo") === null; // true
searchParams.append("topic", "webdev");
searchParams.toString(); // "q=URLUtils.searchParams&topic=api&topic=webdev"
searchParams.set("topic", "More webdev");
searchParams.toString(); // "q=URLUtils.searchParams&topic=More+webdev"
searchParams.delete("topic");
searchParams.toString(); // "q=URLUtils.searchParams"
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea también

- Otras interfaces relacionadas con URL: {{domxref("URL")}}, {{domxref("URLUtils")}}.
- [Google Developers: Fácil manipulación de una URL con URLSearchParams](https://developers.google.com/web/updates/2016/01/urlsearchparams?hl=en)
