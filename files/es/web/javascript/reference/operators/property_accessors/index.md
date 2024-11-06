---
title: Miembros
slug: Web/JavaScript/Reference/Operators/Property_accessors
---

{{jsSidebar("Operators")}}

## Resumen

Los operadores de miembros proporcionan acceso a las propiedades y métodos de un objeto.

Un objeto es en realidad un _arreglo asociativo_ (por ejemplo _map_ ,_dictionary_ ,_hash_ ,_lookup table_ ). Las _claves_ en este arreglo son los nombres de las propiedades y los métodos (propiedades que hacen referencia a funciones). Hay dos modos de acceder a estas propiedades: notación por punto y notación por corchete (es decir, operador de subscripción).

Nota: La especificación [ECMAScript](/es/docs/Glossary/ECMAScript) etiqueta estos operadores como "property accessors" en vez de "operadores de miembro" (member operators).

### Notación por punto

```js
get = objeto.propiedad;
objeto.propiedad = set;
```

`propiedad` debe ser un identificador válido de JavaScript, esto es, una secuencia alfanumérica de caracteres, incluyendo también el guión bajo ("`_`") y el signo dolar ("`$`"), que no puede comenzar por un número. Por ejemplo, `objeto.$1` es válido, mientras que `objeto.1` no lo es.

Ejemplo:

```js
document.createElement("pre");
```

Aquí, el método llamado "createElement" se recupera de `document` y se le llama.

### Notación por corchetes

```js
get = objeto[nombre_propiedad];
objeto[nombre_propiedad] = set;
```

`nombre_propiedad` es una cadena. La cadena no tiene que ser un identificador válido; puede tener cualquier valor, por ejemplo "1foo", "!bar!", o incluso " " (un espacio).

Ejemplo:

```js
document["createElement"]("pre");
```

Esto hace exactamente lo mismo que el ejemplo anterior.

### Nombres de propiedades

Los nombres de propiedades deben ser cadenas. Esto significa que no pueden usarse objetos distintos a cadenas como claves en un objeto. Cualquier objeto que no sea una cadena, incluyendo números, se convierte al tipo cadena a través de su método {{jsxref("Object.toString")}}.

Ejemplos:

```js
var objeto = {};
objeto["1"] = "valor";
alert(objeto[1]);
```

Ésto tendrá como resultado "valor", ya que 1 se convertirá por tipo a '1'.

```js
var foo = { propiedad_unica: 1 },
  bar = { propiedad_unica: 2 },
  objeto = {};
objeto[foo] = "valor";
alert(objeto[bar]);
```

Ésto también tiene como resultado "valor", ya que tanto foo como bar se convierten a la misma cadena. En el motor de JavaScript [SpiderMonkey](/es/docs/Mozilla/SpiderMonkey), esta cadena sería `[objeto Object]`.

### Enlace a métodos

Un método no está enlazado al objeto del que es método. Específicamente, `this` no está establecido en un método, es decir, `this` no se refiere necesariamente a un objeto conteniendo el método. `this`, en cambio, se "pasa" mediante la llamada de función.

Vea [enlace a métodos](/es/docs/Web/JavaScript/Referencia/Operadores/this#Funciones_enlazadas).

### Nota sobre `eval`

Los principiantes en JavaScript a menudo tienen el error de usar {{jsxref("eval")}} cuando la notación por corchetes puede usarse a cambio. Por ejemplo, la siguiente sintaxis se ve a menudo en muchos scripts.

```js
x = eval("document.nombre_formulario." + cadenaControlFormulario + ".value");
```

`eval` es lenta y se debería evitar en la medida de lo posible. Es mejor usar la notación por corchetes a cambio:

```js
x = document.nombre_formulario[cadenaControlFormulario].value;
```
