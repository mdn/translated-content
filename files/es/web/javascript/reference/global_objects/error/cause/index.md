---
title: "Error: cause"
slug: Web/JavaScript/Reference/Global_Objects/Error/cause
l10n:
  sourceCommit: 6a0f9553932823cd0c4dcf695d4b4813474964fb
---

{{JSRef}}

Los datos de la propiedad **`cause`** de una instancia de {{jsxref("Error")}} indica la causa original del error específico.

Se utiliza cuando se captura y se relanza un error con un mensaje de error más específico ó útil para seguir teniendo acceso al error original.

## Valor

El valor que se pasó al constructor del [`Error()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Error/Error) en el argumento `options.cause`. Puede no estar presente.

{{js_property_attributes(1, 0, 1)}}

## Descripción

El valor de `cause` puede ser de cualquiér tipo. No debe suponer que el error que capturó tiene un `Error` como su `cause`, de la misma manera que no puede estar seguro que la variable enlazada en la instrucción `catch` sea un error tampoco. El siguiente ejemplo "Proporcionar datos estructurados como la causa del error" muestra un caso donde se proporciona deliberadamente un error como causa.

## Ejemplos

### Relanzando un error con una causa

A veces es útil para detectar un error y volver a lanzarlo con un nuevo mensaje.
En este caso debería pasar el error original al constructor para el nuevo `Error`, como se muestra.

```js
try {
  connectToDatabase();
} catch (err) {
  throw new Error("Falló la conexión a la base de datos.", { cause: err });
}
```

Para un ejemplo mas detallado vea [Error > Diferenciar entre errores similares](/es/docs/Web/JavaScript/Reference/Global_Objects/Error#differentiate_between_similar_errors).

### Proporcionar datos estructurados como la causa del error

Los mensajes de error escritos para consumo humano pueden ser inapropiados para el análisis de la máquina — dado que están sujetos a cambios de redacción o puntuación que pueden romper cualquier análisis existente escrito para consumirlos. Así que, cuando lanza un error de una función, como una alternativa a un mensaje de error legible por humanos, puede proporcionar la causa como datos estructurados, para el análisis de la máquina.

```js
function makeRSA(p, q) {
  if (!Number.isInteger(p) || !Number.isInteger(q)) {
    throw new Error(
      "La generación de claves RSA requiere entradas de tipo entero.",
      {
        cause: { code: "NonInteger", values: [p, q] },
      },
    );
  }
  if (!areCoprime(p, q)) {
    throw new Error(
      "La generación de claves RSA requiere dos enteros coprimos.",
      {
        cause: { code: "NonCoprime", values: [p, q] },
      },
    );
  }
  // algoritmo rsa...
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{jsxref("Error.prototype.message")}}
- {{jsxref("Error.prototype.toString()")}}
