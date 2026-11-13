---
title: Arreglos
slug: Learn_web_development/Core/Scripting/Arrays
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Strings", "Learn_web_development/Core/Scripting/Test_your_skills/Arrays", "Learn_web_development/Core/Scripting")}}

En esta lección veremos los arreglos — una forma ordenada de almacenar una lista de elementos de datos bajo un único nombre de variable. Aquí vemos por qué esto es útil, para luego explorar cómo crear un [arreglo](/es/docs/Web/JavaScript/Reference/Global_Objects/Array), recuperar, agregar y eliminar elementos almacenados en él, y mucho más.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>Comprender <a href="/es/docs/Learn_web_development/Core/Structuring_content">HTML</a> y los <a href="/es/docs/Learn_web_development/Core/Styling_basics">fundamentos de CSS</a>. Familiaridad con tipos de datos básicos como números y cadenas, como se vio en lecciones anteriores.</td>
    </tr>
    <tr>
      <th scope="row">Resultados de aprendizaje:</th>
      <td>
        <ul>
          <li>Qué es un arreglo — una estructura que contiene una lista de variables.</li>
          <li>La sintaxis de los arreglos — <code>[a, b, c]</code> y la sintaxis de acceso, <code>miArreglo[x]</code>.</li>
          <li>Modificar valores de un arreglo con <code>miArreglo[x] = y</code>.</li>
          <li>Manipulación de arreglos usando propiedades y métodos comunes como <code>length</code>, <code>push()</code>, <code>pop()</code>, <code>join()</code> y <code>split()</code>.</li>
          <li>Métodos de arreglos más avanzados como <code>forEach()</code>, <code>map()</code> y <code>filter()</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## ¿Qué es un arreglo?

Los arreglos se describen generalmente como "objetos tipo lista"; básicamente son objetos individuales que contienen múltiples valores almacenados en una lista. Los objetos de tipo arreglo pueden almacenarse en variables y tratarse de la misma manera que cualquier otro tipo de valor, con la diferencia de que podemos acceder a cada valor dentro de la lista de forma individual, y hacer cosas realmente útiles y eficientes con la lista, como recorrerla y hacer lo mismo con cada valor. Tal vez tengamos una serie de productos y sus precios almacenados en un arreglo, y queramos recorrerlos todos e imprimirlos en una factura, mientras sumamos todos los precios e imprimimos el total al final.

Si no tuviéramos arreglos, tendríamos que almacenar cada elemento en una variable separada, y luego llamar al código que hace la impresión y la suma por separado para cada elemento. Esto sería mucho más largo de escribir, menos eficiente y más propenso a errores. Si tuviéramos 10 elementos para agregar a la factura ya sería bastante molesto, pero ¿qué pasa con 100 elementos, o 1000? Volveremos a este ejemplo más adelante en el artículo.

Como en artículos anteriores, aprendamos los aspectos básicos reales de los arreglos ingresando algunos ejemplos en la [consola de desarrollador del navegador](/es/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools).

> [!NOTE]
> El scrim de Scrimba [Aside: Intro to arrays](https://scrimba.com/the-frontend-developer-career-path-c0j/~06e?via=mdn) <sup>[_socio de aprendizaje de MDN_](/es/docs/MDN/Writing_guidelines/Learning_content#enlaces_externos_o_embebidos)</sup> ofrece una útil introducción interactiva a los arreglos, con recorridos de ejemplos y un desafío para poner a prueba tus conocimientos.

## Creando arreglos

Los arreglos se componen de corchetes y elementos separados por comas.

1. Supongamos que queremos almacenar una lista de compras en un arreglo. Pega el siguiente código en la consola:

   ```js
   const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
   console.log(shopping);
   ```

2. En el ejemplo anterior, cada elemento es una cadena, pero en un arreglo podemos almacenar distintos tipos de datos — cadenas, números, objetos, e incluso otros arreglos. También podemos mezclar tipos de datos dentro de un mismo arreglo — no tenemos que limitarnos a almacenar solo números en un arreglo, y en otro solo cadenas. Por ejemplo:

   ```js
   const sequence = [1, 1, 2, 3, 5, 8, 13];
   const random = ["tree", 795, [0, 1, 2]];
   ```

3. Antes de continuar, crea algunos arreglos de ejemplo.

## Encontrando la longitud de un arreglo

Puedes averiguar la longitud de un arreglo (cuántos elementos contiene) exactamente de la misma manera en que se averigua la longitud (en caracteres) de una cadena — utilizando la propiedad {{jsxref("Array.prototype.length","length")}}. Prueba lo siguiente:

```js
const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping.length); // 5
```

## Accediendo y modificando elementos de un arreglo

Los arreglos son [colecciones indexadas](/es/docs/Web/JavaScript/Guide/Indexed_collections). Los elementos de un arreglo están numerados, comenzando desde cero. Este número se denomina _índice_ del elemento. Así, el primer elemento tiene el índice 0, el segundo tiene el índice 1, y así sucesivamente. Puedes acceder a elementos individuales del arreglo mediante la notación de corchetes, indicando el índice del elemento, de la misma manera en que [accediste a las letras de una cadena](/es/docs/Learn_web_development/Core/Scripting/Useful_string_methods#obtener_un_carácter_específico_de_una_cadena).

1. Ingresa lo siguiente en tu consola:

   ```js
   const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
   console.log(shopping[0]);
   // devuelve "bread"
   ```

2. También puedes modificar un elemento de un arreglo simplemente asignándole un nuevo valor. Prueba esto:

   ```js
   const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
   shopping[0] = "tahini";
   console.log(shopping);
   // shopping ahora devolverá [ "tahini", "milk", "cheese", "hummus", "noodles" ]
   ```

   > [!NOTE]
   > Ya lo dijimos antes, pero solo como recordatorio — ¡JavaScript comienza a indexar los arreglos en cero!

3. Ten en cuenta que un arreglo dentro de otro arreglo se llama arreglo multidimensional. Puedes acceder a un elemento dentro de un arreglo que está a su vez dentro de otro arreglo encadenando dos pares de corchetes. Por ejemplo, para acceder a uno de los elementos dentro del arreglo que es el tercer elemento del arreglo `random` (ver sección anterior), podríamos hacer algo así:

   ```js
   const random = ["tree", 795, [0, 1, 2]];
   random[2][2];
   ```

4. Antes de continuar, intenta hacer algunas modificaciones más a tus ejemplos de arreglos. Juega un poco y observa qué funciona y qué no.

## Encontrando el índice de elementos en un arreglo

Si no conoces el índice de un elemento, puedes usar el método {{jsxref("Array.prototype.indexOf()","indexOf()")}}.
El método `indexOf()` toma un elemento como argumento y devuelve el índice de ese elemento, o `-1` si el elemento no está en el arreglo:

```js
const birds = ["Parrot", "Falcon", "Owl"];
console.log(birds.indexOf("Owl")); //  2
console.log(birds.indexOf("Rabbit")); // -1
```

## Agregando elementos

Para agregar uno o más elementos al final de un arreglo podemos usar {{jsxref("Array.prototype.push()","push()")}}. Ten en cuenta que debes incluir uno o más elementos que quieras agregar al final de tu arreglo.

```js
const cities = ["Manchester", "Liverpool"];
cities.push("Cardiff");
console.log(cities); // [ "Manchester", "Liverpool", "Cardiff" ]
cities.push("Bradford", "Brighton");
console.log(cities); // [ "Manchester", "Liverpool", "Cardiff", "Bradford", "Brighton" ]
```

La nueva longitud del arreglo se devuelve cuando finaliza la llamada al método. Si quisieras almacenar la nueva longitud del arreglo en una variable, podrías hacer algo como esto:

```js
const cities = ["Manchester", "Liverpool"];
const newLength = cities.push("Bristol");
console.log(cities); // [ "Manchester", "Liverpool", "Bristol" ]
console.log(newLength); // 3
```

Para agregar un elemento al inicio del arreglo, usa {{jsxref("Array.prototype.unshift()","unshift()")}}:

```js
const cities = ["Manchester", "Liverpool"];
cities.unshift("Edinburgh");
console.log(cities); // [ "Edinburgh", "Manchester", "Liverpool" ]
```

## Eliminando elementos

Para eliminar el último elemento del arreglo, usa {{jsxref("Array.prototype.pop()","pop()")}}.

```js
const cities = ["Manchester", "Liverpool"];
cities.pop();
console.log(cities); // [ "Manchester" ]
```

El método `pop()` devuelve el elemento que fue eliminado. Para guardar ese elemento en una nueva variable, podrías hacer esto:

```js
const cities = ["Manchester", "Liverpool"];
const removedCity = cities.pop();
console.log(removedCity); // "Liverpool"
```

Para eliminar el primer elemento de un arreglo, usa {{jsxref("Array.prototype.shift()","shift()")}}:

```js
const cities = ["Manchester", "Liverpool"];
cities.shift();
console.log(cities); // [ "Liverpool" ]
```

Si conoces el índice de un elemento, puedes eliminarlo del arreglo usando {{jsxref("Array.prototype.splice()","splice()")}}:

```js
const cities = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
const index = cities.indexOf("Liverpool");
if (index !== -1) {
  cities.splice(index, 1);
}
console.log(cities); // [ "Manchester", "Edinburgh", "Carlisle" ]
```

En esta llamada a `splice()`, el primer argumento indica dónde comenzar a eliminar elementos, y el segundo argumento indica cuántos elementos deben eliminarse. Así, puedes eliminar más de un elemento:

```js
const cities = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
const index = cities.indexOf("Liverpool");
if (index !== -1) {
  cities.splice(index, 2);
}
console.log(cities); // [ "Manchester", "Carlisle" ]
```

## Accediendo a cada elemento

Muy a menudo querrás acceder a todos los elementos de un arreglo. Puedes hacerlo usando la sentencia {{jsxref("Statements/for...of","for...of")}}:

```js
const birds = ["Parrot", "Falcon", "Owl"];

for (const bird of birds) {
  console.log(bird);
}
```

A veces querrás hacer lo mismo con cada elemento de un arreglo, y quedarte con un arreglo que contenga los elementos modificados. Puedes hacerlo usando {{jsxref("Array.prototype.map()","map()")}}. El siguiente código toma un arreglo de números y duplica cada número:

```js
function double(number) {
  return number * 2;
}
const numbers = [5, 2, 7, 6];
const doubled = numbers.map(double);
console.log(doubled); // [ 10, 4, 14, 12 ]
```

Le damos una función a `map()`, y `map()` llama a esa función una vez por cada elemento del arreglo, pasándole el elemento. Luego agrega el valor de retorno de cada llamada a la función a un nuevo arreglo, y finalmente devuelve ese nuevo arreglo.

A veces querrás crear un nuevo arreglo que contenga solo los elementos del arreglo original que cumplan cierta condición. Puedes hacerlo usando {{jsxref("Array.prototype.filter()","filter()")}}. El siguiente código toma un arreglo de cadenas y devuelve un arreglo que contiene solo las cadenas con más de 8 caracteres de longitud:

```js
function isLong(city) {
  return city.length > 8;
}
const cities = ["London", "Liverpool", "Totnes", "Edinburgh"];
const longer = cities.filter(isLong);
console.log(longer); // [ "Liverpool", "Edinburgh" ]
```

Al igual que con `map()`, le damos una función al método `filter()`, y `filter()` llama a esa función por cada elemento del arreglo, pasándole el elemento. Si la función devuelve `true`, el elemento se agrega a un nuevo arreglo. Finalmente, devuelve ese nuevo arreglo.

## Convirtiendo entre cadenas y arreglos

A menudo se te presentarán datos en bruto contenidos en una cadena larga, y es posible que quieras separar los elementos útiles en una forma más conveniente para luego hacer cosas con ellos, como mostrarlos en una tabla de datos. Para hacer esto, podemos usar el método {{jsxref("String.prototype.split()","split()")}}. En su forma más simple, toma un único parámetro, el carácter por el que quieres separar la cadena, y devuelve las subcadenas entre los separadores como elementos de un arreglo.

> [!NOTE]
> Bien, esto es técnicamente un método de cadena, no un método de arreglo, pero lo incluimos junto con los arreglos ya que encaja bien aquí.

1. Juguemos con esto para ver cómo funciona. Primero, crea una cadena en tu consola:

   ```js
   const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
   ```

2. Ahora separémosla en cada coma:

   ```js
   const cities = data.split(",");
   cities;
   ```

3. Finalmente, intenta encontrar la longitud de tu nuevo arreglo, y recuperar algunos elementos de él:

   ```js
   cities.length;
   cities[0]; // el primer elemento del arreglo
   cities[1]; // el segundo elemento del arreglo
   cities[cities.length - 1]; // el último elemento del arreglo
   ```

4. También puedes ir en la dirección opuesta usando el método {{jsxref("Array.prototype.join()","join()")}}. Prueba lo siguiente:

   ```js
   const commaSeparated = cities.join(",");
   commaSeparated;
   ```

5. Otra forma de convertir un arreglo en una cadena es usar el método {{jsxref("Array.prototype.toString()","toString()")}}. `toString()` es posiblemente más simple que `join()`, ya que no toma ningún parámetro, pero es más limitado. Con `join()` puedes especificar diferentes separadores, mientras que `toString()` siempre usa una coma. (Intenta ejecutar el Paso 4 con un carácter distinto de la coma.)

   ```js
   const dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
   dogNames.toString(); // Rocket,Flash,Bella,Slugger
   ```

## Imprimiendo esos productos

Es tu turno. En este ejercicio volverás al ejemplo que describimos anteriormente — imprimir nombres de productos y precios en una factura, para luego sumar los precios e imprimirlos al final. Sigue los pasos a continuación para implementar la lógica necesaria.

1. Haz clic en **"Play"** en el bloque de código de abajo para editar el ejemplo en el MDN Playground.
2. Debajo del comentario `// Part 1` hay varias cadenas, cada una de las cuales contiene un nombre de producto y un precio separados por dos puntos. Nos gustaría que las descomentaras y las conviertas en un arreglo llamado `products`.
3. Debajo del comentario `// Part 2`, inicia un bucle `for...of()` para recorrer todos los elementos del arreglo `products`.
4. Debajo del comentario `// Part 3` queremos que escribas una línea de código que divida el elemento actual del arreglo (`name:price`) en dos elementos separados, uno que contenga el nombre y otro que contenga el precio. Si no estás seguro de cómo hacerlo, consulta el artículo [Métodos de cadenas útiles](/es/docs/Learn_web_development/Core/Scripting/Useful_string_methods) para obtener ayuda, o mejor aún, mira la sección [Convirtiendo entre cadenas y arreglos](#convirtiendo_entre_cadenas_y_arreglos) de este artículo.
5. Como parte de la línea de código anterior, también querrás convertir el precio de una cadena a un número. Si no recuerdas cómo hacerlo, revisa el [primer artículo sobre cadenas](/es/docs/Learn_web_development/Core/Scripting/Strings#números_versus_cadenas).
6. Hay una variable llamada `total` que se crea y se le da el valor `0` al inicio del código. Dentro del bucle (debajo de `// Part 4`) queremos que agregues una línea que sume el precio del elemento actual a ese total en cada iteración del bucle, de modo que al final del código se imprima el total correcto en la factura. Es posible que necesites un [operador de asignación](/es/docs/Learn_web_development/Core/Scripting/Math#operadores_de_asignación) para hacer esto.
7. Queremos que cambies la línea siguiente al comentario `// Part 5` para que la variable `itemText` se iguale a "nombre del elemento actual — $precio del elemento actual", por ejemplo "Shoes — $23.99" en cada caso, de modo que se imprima la información correcta de cada elemento en la factura. Esto es concatenación básica de cadenas, algo que debería resultarte familiar si has seguido el material de aprendizaje hasta ahora.
8. Finalmente, debajo del comentario `// Part 6`, deberás agregar una `}` para marcar el final del bucle `for...of()`.

Si cometes un error, puedes borrar tu trabajo usando el botón _Reset_ del MDN Playground. Si te quedas realmente atascado, puedes ver la solución debajo de la salida en vivo.

```html hidden live-sample___arrays-1
<h2>Salida en vivo</h2>

<div class="output">
  <ul></ul>

  <p></p>
</div>
```

```css hidden live-sample___arrays-1
.output {
  min-height: 100px;
}
```

```js live-sample___arrays-1
const list = document.querySelector(".output ul");
const totalBox = document.querySelector(".output p");
let total = 0;
list.textContent = "";
totalBox.textContent = "";
// Part 1
// "Underpants:6.99",
// "Socks:5.99",
// "T-shirt:14.99",
// "Trousers:31.99",
// "Shoes:23.99",

// Part 2

// Part 3

// Part 4

// Part 5
let itemText = 0;

const listItem = document.createElement("li");
listItem.textContent = itemText;
list.appendChild(listItem);

// Part 6

totalBox.textContent = `Total: $${total.toFixed(2)}`;
```

{{ EmbedLiveSample("arrays-1", "100%", 200) }}

<details>
<summary>Haz clic aquí para ver la solución</summary>

Tu código JavaScript terminado debería verse así:

```js
const list = document.querySelector(".output ul");
const totalBox = document.querySelector(".output p");
let total = 0;
list.textContent = "";
totalBox.textContent = "";

const products = [
  "Underpants:6.99",
  "Socks:5.99",
  "T-shirt:14.99",
  "Trousers:31.99",
  "Shoes:23.99",
];

for (const product of products) {
  const subArray = product.split(":");
  const name = subArray[0];
  const price = Number(subArray[1]);
  total += price;
  const itemText = `${name} — $${price}`;

  const listItem = document.createElement("li");
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = `Total: $${total.toFixed(2)}`;
```

</details>

## Almacenando las últimas 5 búsquedas

Hagamos otro ejercicio, para seguir practicando.

Un buen uso para métodos de arreglo como {{jsxref("Array.prototype.push()","push()")}} y {{jsxref("Array.prototype.pop()","pop()")}} es cuando estás manteniendo un registro de los elementos actualmente activos en una aplicación web. En una escena animada, por ejemplo, podrías tener un arreglo de objetos que representan los gráficos de fondo mostrados actualmente, y quizás solo quieras que se muestren 50 a la vez, por razones de rendimiento o de desorden visual. A medida que se crean y agregan nuevos objetos al arreglo, los más antiguos pueden eliminarse del arreglo para mantener la cantidad deseada.

En este ejemplo mostraremos un uso mucho más simple — aquí te daremos un sitio de búsqueda ficticio, con un cuadro de búsqueda. La idea es que, cuando se ingresan términos en el cuadro de búsqueda, se muestren en la lista los 5 términos de búsqueda anteriores. Cuando la cantidad de términos supera los 5, el último término comienza a eliminarse cada vez que se agrega un nuevo término en la parte superior, de modo que siempre se muestran los 5 términos anteriores.

> [!NOTE]
> En una aplicación de búsqueda real, probablemente podrías hacer clic en los términos de búsqueda anteriores para volver a búsquedas anteriores, ¡y se mostrarían resultados de búsqueda reales! Por ahora lo mantendremos simple.

Para completar el ejemplo, necesitamos que hagas lo siguiente:

1. Haz clic en **"Play"** en el bloque de código de abajo para editar el ejemplo en el MDN Playground.
2. Agrega una línea debajo del comentario `// Part 1` que agregue el valor actual ingresado en el campo de búsqueda al inicio del arreglo. Esto puede recuperarse usando `searchInput.value`.
3. Agrega una línea debajo del comentario `// Part 2` que elimine el valor que se encuentra actualmente al final del arreglo.

Si cometes un error, puedes borrar tu trabajo usando el botón _Reset_ del MDN Playground. Si te quedas realmente atascado, puedes ver la solución debajo de la salida en vivo.

```html hidden live-sample___arrays-2
<div class="output">
  <label for="search-box">Ingresa un término de búsqueda: </label>
  <input id="search-box" type="search" />
  <button>Buscar</button>

  <ul></ul>
</div>
```

```css hidden live-sample___arrays-2
.output {
  margin: 1rem;
}
```

```js live-sample___arrays-2
const list = document.querySelector(".output ul");
const searchInput = document.querySelector(".output input");
const searchBtn = document.querySelector(".output button");

list.textContent = "";

const myHistory = [];
const MAX_HISTORY = 5;

searchBtn.addEventListener("click", () => {
  // solo permitiremos ingresar un término si el campo de búsqueda no está vacío
  if (searchInput.value !== "") {
    // Part 1

    // vaciamos la lista para no mostrar entradas duplicadas.
    // la visualización se regenera cada vez que se ingresa un término de búsqueda.
    list.textContent = "";

    // recorremos el arreglo, y mostramos todos los términos de búsqueda en la lista
    for (const itemText of myHistory) {
      const listItem = document.createElement("li");
      listItem.textContent = itemText;
      list.appendChild(listItem);
    }

    // Si la longitud del arreglo es 5 o más, eliminamos el término de búsqueda más antiguo
    if (myHistory.length >= MAX_HISTORY) {
      // Part 2
    }

    // vaciamos el campo de búsqueda y lo enfocamos, listo para ingresar el siguiente término
    searchInput.value = "";
    searchInput.focus();
  }
});
```

{{ EmbedLiveSample("arrays-2", "100%", 200) }}

<details>
<summary>Haz clic aquí para ver la solución</summary>

Tu código JavaScript terminado debería verse así:

```js
const list = document.querySelector(".output ul");
const searchInput = document.querySelector(".output input");
const searchBtn = document.querySelector(".output button");

list.textContent = "";

const myHistory = [];
const MAX_HISTORY = 5;

searchBtn.addEventListener("click", () => {
  // solo permitiremos ingresar un término si el campo de búsqueda no está vacío
  if (searchInput.value !== "") {
    myHistory.unshift(searchInput.value);

    // vaciamos la lista para no mostrar entradas duplicadas.
    // la visualización se regenera cada vez que se ingresa un término de búsqueda.
    list.textContent = "";

    // recorremos el arreglo, y mostramos todos los términos de búsqueda en la lista
    for (const itemText of myHistory) {
      const listItem = document.createElement("li");
      listItem.textContent = itemText;
      list.appendChild(listItem);
    }

    // Si la longitud del arreglo es 5 o más, eliminamos el término de búsqueda más antiguo
    if (myHistory.length >= MAX_HISTORY) {
      myHistory.pop();
    }

    // vaciamos el campo de búsqueda y lo enfocamos, listo para ingresar el siguiente término
    searchInput.value = "";
    searchInput.focus();
  }
});
```

</details>

## Resumen

Después de leer este artículo, estamos seguros de que estarás de acuerdo en que los arreglos son bastante útiles; los verás aparecer por todas partes en JavaScript, a menudo en conjunto con bucles, para hacer lo mismo con cada elemento de un arreglo. Te enseñaremos todo lo necesario sobre los bucles más adelante en el módulo.

En el próximo artículo te daremos algunas pruebas que podrás usar para comprobar qué tan bien has entendido y retenido la información que te dimos sobre los arreglos.

## Véase también

- {{jsxref("Array")}}
  - : La página de referencia del objeto `Array` ofrece una guía de referencia detallada sobre las funciones tratadas en esta página, y muchas otras funciones de `Array`.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Strings", "Learn_web_development/Core/Scripting/Test_your_skills/Arrays", "Learn_web_development/Core/Scripting")}}
