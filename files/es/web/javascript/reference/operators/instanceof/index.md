---
title: instanceof
slug: Web/JavaScript/Reference/Operators/instanceof
---

{{jsSidebar("Operators")}}

## Resumen

El operador **`instanceof`** verifica si un objeto en su cadena de prototipos contiene la propiedad `prototype` de un constructor.

## Sintaxis

```
objeto instanceof constructor
```

### Parámetros

- `objeto`

  - : Objeto a verificar.

- `constructor`
  - : Función contra la que se hará la verificación.

## Descripción

Utilice `instanceof` cuando necesite confirmar el tipo de un objeto en tiempo de ejecución. Por ejemplo, cuando controle excepciones, puede recurrir a diferentes códigos de manipulación de excepciones dependiendo del tipo de excepción tomada.

Debe especificar un objeto en el lado derecho del operador `instanceof`. Por ejemplo, puede especificar una cadena creada con el constructor `String`, pero no puede especificar un literal de cadena.

```js
color1 = new String("verde");
color1 instanceof String; // devuelve verdadero (true)
color2 = "coral";
color2 instanceof String; // devuelve falso (color2 no es un objeto String)
```

### Ejemplos

También vea los ejemplos de {{jsxref("Sentencias/throw", "throw")}}.

#### Ejemplo: Determinando si `elDia` es un objeto `Date`

El siguiente código utiliza `instanceof` para determinar si `elDia` es un objeto `Date`. Debido a que `elDia` es un objeto `Date`, las instrucciones de la sentencia if se ejecutan.

```js
elDia = new Date(1995, 12, 17);
if (elDia instanceof Date) {
  // instrucciones a ejecutar
}
```

#### Ejemplo: Demostrando que `String` y `Date` son del tipo `Object`

El siguiente código utiliza `instanceof` para demostrar que los objetos `String` y `Date` son también del tipo `Object` (éstos se derivan de `Object`).

```js
miCadena = new String();
miFecha = new Date();

miCadena instanceof String; // devuelve true
miCadena instanceof Object; // devuelve true
miCadena instanceof Date; // devuelve false

miFecha instanceof Date; // devuelve true
miFecha instanceof Object; // devuelve true
miFecha instanceof String; // devuelve false
```

#### Ejemplo: Demostrando que `miCoche` es del tipo `Coche` y del tipo `Object`

El siguiente código crea un objeto del tipo `Coche` y una instancia de ese tipo de objeto, `miCoche`. El operador `instanceof` demuestra que el objeto `miCoche` es del tipo `Coche` y del tipo `Object`.

```js
function Coche(fabricante, modelo, ejercicio) {
  this.fabricante = fabricante;
  this.modelo = modelo;
  this.ejercicio = ejercicio;
}
miCoche = new Coche("Honda", "Accord", 1998);
a = miCoche instanceof Coche; // devuelve verdadero (true)
b = miCoche instanceof Object; // devuelve verdadero (true)
```
