---
title: FormData
slug: Web/API/FormData
---

{{APIRef("XMLHttpRequest")}}

La interfaz **`FormData`** proporciona una manera sencilla de construir un conjunto de parejas clave/valor que representan los campos de un formulario y sus valores, que pueden ser enviados fácilmente con el método {{domxref("XMLHttpRequest.send()")}}. Utiliza el mismo formato que usaría un formulario si el tipo de codificación fuera `"multipart/form-data"`.

También puede pasarse directamente al constructor de {{domxref("URLSearchParams")}} si se quieren generar parámetros de consulta de la misma forma en que lo haría un {{HTMLElement("form")}} si usara un envío `GET` simple.

Un objeto que implementa `FormData` puede usarse directamente en una estructura {{jsxref("Statements/for...of", "for...of")}}, en lugar de {{domxref('FormData.entries()', 'entries()')}}: `for (var p of myFormData)` es equivalente a `for (var p of myFormData.entries())`.

> **Nota:** Esta característica está disponible en [Web Workers](/es/docs/Web/API/Web_Workers_API).

## Constructor

- {{domxref("FormData.FormData","FormData()")}}
  - : Crea un nuevo objeto `FormData`.

## Métodos

- {{domxref("FormData.append()")}}
  - : Agrega un nuevo valor a una clave existente dentro de un objeto `FormData`, o añade la clave si aún no existe.
- {{domxref("FormData.delete()")}}
  - : Elimina una pareja clave/valor de un objeto `FormData`.
- {{domxref("FormData.entries()")}}
  - : Devuelve un {{jsxref("Iteration_protocols","iterator")}} que permite recorrer todas las parejas clave/valor contenidas en este objeto.
- {{domxref("FormData.get()")}}
  - : Devuelve el primer valor asociado con una clave dada en un objeto `FormData`.
- {{domxref("FormData.getAll()")}}
  - : Devuelve un array con todos los valores asociados con una clave dada en un objeto `FormData`.
- {{domxref("FormData.has()")}}
  - : Devuelve un booleano que indica si un objeto `FormData` contiene una clave determinada.
- {{domxref("FormData.keys()")}}
  - : Devuelve un {{jsxref("Iteration_protocols", "iterator")}} que permite recorrer todas las claves de las parejas clave/valor contenidas en este objeto.
- {{domxref("FormData.set()")}}
  - : Establece un nuevo valor para una clave existente dentro de un objeto `FormData`, o agrega la clave/valor si aún no existe.
- {{domxref("FormData.values()")}}
  - : Devuelve un {{jsxref("Iteration_protocols", "iterator")}} que permite recorrer todos los valores contenidos en este objeto.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{domxref("XMLHTTPRequest")}}
- [Utilización de XMLHttpRequest](/en/DOM/XMLHttpRequest/Using_XMLHttpRequest)
- [Usando objetos FormData](/es/docs/Web/Guide/Usando_Objetos_FormData)
- {{HTMLElement("Form")}}
