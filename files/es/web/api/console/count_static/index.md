---
title: Console.count()
slug: Web/API/console/count_static
---

{{APIRef("Console API")}}

Registra el número de veces que se llama a `count()`. Esta función toma como argumento opcional una `etiqueta`.

{{AvailableInWorkers}}

Si la `etiqueta` es colocada, esta funcion muestra el numeros de veces que `count()` ha sido utilizada con la misma etiqueta.

Si la `etiqueta` es omitida, la funcion registra el numero de veces que `count()` fue llamada en esta línea en particular.

Por ejemplo, en este código:

```js
var user = "";

function greet() {
  console.count();
  return "hi " + user;
}

user = "bob";
greet();
user = "alice";
greet();
greet();
console.count();
```

La salida de la consola va a mostrar algo como esto:

```
"<no label>: 1"
"<no label>: 2"
"<no label>: 3"
"<no label>: 1"
```

Note que al final de la linea de la salida: La llamada separada `count()` en la linea 11 es tratada como un evento independiente.

Si pasamos la variable `user` como `etiqueta` en la primera llamada a `count()` y la cadena "alice" en la segunda llamada:

```js
var user = "";

function greet() {
  console.count(user);
  return "hi " + user;
}

user = "bob";
greet();
user = "alice";
greet();
greet();
console.count("alice");
```

Vamos a ver una salida como esta:

```
"bob: 1"
"alice: 1"
"alice: 2"
"alice: 3"
```

Ahora tenemos diferentes contadores según el valor de la `etiqueta`. Al coincidir la etiqueta "alice" en la línea 11 con el valor de `user` dos veces, no se considera un evento independiente.

## Sintaxis

```
console.count([label]);
```

## Parámetros

- `label`
  - : Una cadena. Si se proporciona, la salida de `count()` indica el número de veces que fue llamada con la etiqueta. Si se omite, la salida de `count()` indica el número de veces que fue llamada en esa misma línea.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
