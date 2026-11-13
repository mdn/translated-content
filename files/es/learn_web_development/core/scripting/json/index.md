---
title: Trabajar con JSON
short-title: JSON
slug: Learn_web_development/Core/Scripting/JSON
l10n:
  sourceCommit: 65692fd4d256d5647749b7c7005dcf53d425a533
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Network_requests","Learn_web_development/Core/Scripting/Test_your_skills/JSON", "Learn_web_development/Core/Scripting")}}

JavaScript Object Notation (JSON) es un formato estándar basado en texto para representar datos estructurados, basado en la sintaxis de objetos de JavaScript. Se usa habitualmente para transmitir datos en aplicaciones web (p. ej., enviar datos del servidor al cliente para mostrarlos en una página web, o viceversa). Te lo encontrarás con bastante frecuencia, así que en este artículo te damos todo lo que necesitas para trabajar con JSON usando JavaScript, incluido analizar JSON para acceder a sus datos y crear JSON.

<table>
  <tbody>
    <tr>
      <th scope="row">Requisitos previos:</th>
      <td>Conocer <a href="/es/docs/Learn_web_development/Core/Structuring_content">HTML</a> y los <a href="/es/docs/Learn_web_development/Core/Styling_basics">fundamentos de CSS</a>, y estar familiarizado con los conceptos básicos de JavaScript vistos en las lecciones anteriores.</td>
    </tr>
    <tr>
      <th scope="row">Resultados de aprendizaje:</th>
      <td>
        <ul>
          <li>Qué es JSON: un formato de datos muy utilizado, basado en la sintaxis de objetos de JavaScript.</li>
          <li>Que JSON también puede contener arrays.</li>
          <li>Obtener JSON como objeto de JavaScript mediante los mecanismos disponibles en las API web (por ejemplo, <code>Response.json()</code> en la API Fetch).</li>
          <li>Acceder a los valores de los datos JSON con la notación de corchetes y de punto.</li>
          <li>Convertir entre objetos y texto con <code>JSON.parse()</code> y <code>JSON.stringify()</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## En serio, ¿qué es JSON?

{{glossary("JSON")}} es un formato de datos basado en texto que sigue la sintaxis de objetos de JavaScript.
Representa datos estructurados como una cadena, lo que resulta útil cuando quieres transmitir datos a través de una red.
Aunque se parece mucho a la sintaxis de los literales de objeto de JavaScript, se puede usar con independencia de JavaScript. Muchos entornos de programación pueden leer (analizar) y generar JSON.
En JavaScript, los métodos para analizar y generar JSON los proporciona el objeto [`JSON`](/es/docs/Web/JavaScript/Reference/Global_Objects/JSON).

> [!NOTE]
> Convertir una cadena en un objeto nativo se llama _deserialización_, mientras que convertir un objeto nativo en una cadena para poder transmitirlo por la red se llama _serialización_.

Una cadena JSON puede guardarse en su propio archivo, que básicamente es un archivo de texto con la extensión `.json` y un {{glossary("MIME type", "tipo MIME")}} `application/json`.

### Estructura de JSON

Como se describió antes, JSON es una cadena cuyo formato se parece mucho al formato de los literales de objeto de JavaScript.
A continuación se muestra una cadena JSON válida que representa un objeto.
Fíjate en que también es un literal de objeto de JavaScript válido, solo que con algunas [restricciones de sintaxis](#restricciones_de_sintaxis_de_json) más.

<!-- cSpell:ignore tonne -->

```json
{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}
```

Si cargas este JSON en tu programa de JavaScript como una cadena, puedes analizarlo para convertirlo en un objeto normal y después acceder a sus datos con la misma notación de punto y de corchetes que vimos en el artículo [Conceptos básicos de los objetos de JavaScript](/es/docs/Learn_web_development/Core/Scripting/Object_basics).
Por ejemplo:

```js
superHeroes.homeTown;
superHeroes.members[1].powers[2];
```

1. Primero, tenemos el nombre de la variable: `superHeroes`.
2. Dentro de ella, queremos acceder a la propiedad `members`, así que usamos `.members`.
3. `members` contiene un array lleno de objetos. Queremos acceder al segundo objeto del array, así que usamos `[1]`.
4. Dentro de este objeto, queremos acceder a la propiedad `powers`, así que usamos `.powers`.
5. Dentro de la propiedad `powers` hay un array con los superpoderes del héroe seleccionado. Queremos el tercero, así que usamos `[2]`.

Lo más importante es que trabajar con JSON no tiene nada de especial; una vez que lo has analizado y convertido en un objeto de JavaScript, trabajas con él igual que con un objeto declarado con la misma sintaxis de literal de objeto.

> [!NOTE]
> Hemos puesto el JSON anterior a tu disposición dentro de una variable en nuestro ejemplo [JSONTest.html](https://mdn.github.io/learning-area/javascript/oojs/json/JSONTest.html) (consulta el [código fuente](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/JSONTest.html)).
> Prueba a cargarlo y después acceder a los datos de la variable desde la consola de JavaScript de tu navegador.

### Arrays como JSON

Antes mencionamos que el texto JSON básicamente parece un objeto de JavaScript dentro de una cadena.
También podemos convertir arrays a JSON y desde JSON. El siguiente ejemplo es JSON perfectamente válido:

```json
[
  {
    "name": "Molecule Man",
    "age": 29,
    "secretIdentity": "Dan Jukes",
    "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
  },
  {
    "name": "Madame Uppercut",
    "age": 39,
    "secretIdentity": "Jane Wilson",
    "powers": [
      "Million tonne punch",
      "Damage resistance",
      "Superhuman reflexes"
    ]
  }
]
```

Tienes que acceder a los elementos del array (en su versión analizada) empezando por un índice del array, por ejemplo, `superHeroes[0].powers[0]`.

El JSON también puede contener un único valor primitivo. Por ejemplo, `29`, `"Dan Jukes"` o `true` son JSON válidos.

### Restricciones de sintaxis de JSON

Como se mencionó antes, cualquier JSON es un literal de JavaScript válido (objeto, array, número, etc.). Sin embargo, lo contrario no es cierto: no todos los literales de objeto de JavaScript son JSON válido.

- JSON solo puede contener tipos de datos _serializables_. Esto significa que:
  - En cuanto a los valores primitivos, JSON puede contener literales de cadena, literales numéricos, `true`, `false` y `null`. En particular, no puede contener `undefined`, `NaN` ni `Infinity`.
  - En cuanto a los valores no primitivos, JSON puede contener literales de objeto y arrays, pero no funciones ni ningún otro tipo de objeto, como `Date`, `Set` y `Map`. Los objetos y arrays dentro de JSON también tienen que contener tipos de datos JSON válidos.
- Las cadenas tienen que ir entre comillas dobles, no simples.
- Los números tienen que escribirse en notación decimal.
- Cada propiedad de un objeto tiene que tener la forma `"key": value`. Los nombres de las propiedades tienen que ser literales de cadena entre comillas dobles. No se permite la sintaxis especial de JavaScript, como los métodos, porque los métodos son funciones, y las funciones no son tipos de datos JSON válidos.
- Los objetos y los arrays no pueden contener [comas finales](/es/docs/Web/JavaScript/Reference/Trailing_commas).
- No se permiten comentarios en JSON.

Basta una sola coma o un solo signo de dos puntos mal colocados para que un archivo JSON no sea válido y falle.
Deberías tener cuidado de validar los datos que intentas usar (aunque es menos probable que el JSON generado por computadora contenga errores, siempre que el programa que lo genera funcione correctamente).
Puedes validar JSON con una aplicación como [JSONLint](https://jsonlint.com/) o [JSON-validate](https://www.json-validate.com/)

> [!NOTE]
> Ahora que has leído esta sección, quizá también quieras complementar tu aprendizaje con el tutorial interactivo [JSON review](https://scrimba.com/frontend-path-c0j/~0lt?via=mdn) de Scrimba <sup>[_socio de aprendizaje de MDN_](/es/docs/MDN/Writing_guidelines/Learning_content#enlaces_externos_o_embebidos)</sup>, que ofrece orientación útil sobre la sintaxis básica de JSON y sobre cómo ver los datos JSON de las solicitudes en las herramientas para desarrolladores de tu navegador.

## Trabajar con un ejemplo de JSON

Así que veamos un ejemplo para mostrar cómo podríamos usar datos con formato JSON en un sitio web.

### Primeros pasos

Para empezar, haz copias locales de nuestros archivos [heroes.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes.html) y [style.css](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/style.css).
El segundo contiene algo de CSS sencillo para dar estilo a nuestra página, mientras que el primero contiene un HTML del cuerpo muy sencillo, además de un elemento {{HTMLElement("script")}} que contendrá el código JavaScript que escribiremos en este ejercicio:

```html-nolint
<header>
...
</header>

<section>
...
</section>

<script>
// El JavaScript va aquí
</script>
```

Hemos puesto nuestros datos JSON a tu disposición en nuestro GitHub, en <https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json>.

Vamos a cargar el JSON en nuestro script y a usar algo de manipulación ingeniosa del DOM para mostrarlo, así:

![Imagen de un documento titulado «Super hero squad» (con una fuente elegante) y con el subtítulo «Hometown: Metro City // Formed: 2016». Debajo del encabezado hay tres columnas tituladas «Molecule Man», «Madame Uppercut» y «Eternal Flame», respectivamente. Cada columna muestra el nombre de la identidad secreta del héroe, su edad y sus superpoderes.](json-superheroes.png)

### Función de nivel superior

La función de nivel superior es así:

```js
async function populate() {
  const requestURL =
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const superHeroes = await response.json();

  populateHeader(superHeroes);
  populateHeroes(superHeroes);
}
```

Para obtener el JSON, usamos una API llamada [Fetch](/es/docs/Web/API/Fetch_API).
Esta API nos permite hacer solicitudes de red para obtener recursos de un servidor mediante JavaScript (p. ej., imágenes, texto, JSON e incluso fragmentos de HTML), lo que significa que podemos actualizar pequeñas secciones de contenido sin tener que recargar la página entera.

En nuestra función, las cuatro primeras líneas usan la API Fetch para obtener el JSON del servidor:

- declaramos la variable `requestURL` para guardar la URL de GitHub
- usamos la URL para inicializar un nuevo objeto {{domxref("Request")}}.
- hacemos la solicitud de red con la función {{domxref("Window/fetch", "fetch()")}}, que devuelve un objeto {{domxref("Response")}}
- obtenemos la respuesta como JSON con la función {{domxref("Response/json", "json()")}} del objeto `Response`.

> [!NOTE]
> La API `fetch()` es **asíncrona**. Puedes aprender en detalle sobre las funciones asíncronas en nuestro [módulo de JavaScript asíncrono](/es/docs/Learn_web_development/Extensions/Async_JS), pero por ahora solo diremos que tenemos que añadir la palabra clave {{jsxref("Statements/async_function", "async")}} antes del nombre de la función que usa la API Fetch, y la palabra clave {{jsxref("Operators/await", "await")}} antes de las llamadas a cualquier función asíncrona.

Después de todo eso, la variable `superHeroes` contendrá el objeto de JavaScript basado en el JSON. Después pasamos ese objeto a dos llamadas de función: la primera rellena el `<header>` con los datos correctos, mientras que la segunda crea una tarjeta de información para cada héroe del equipo y la inserta en el `<section>`.

### Rellenar el encabezado

Ahora que hemos obtenido los datos JSON y los hemos convertido en un objeto de JavaScript, vamos a usarlos escribiendo las dos funciones que mencionamos antes. En primer lugar, añade la siguiente definición de función debajo del código anterior:

```js
function populateHeader(obj) {
  const header = document.querySelector("header");
  const myH1 = document.createElement("h1");
  myH1.textContent = obj.squadName;
  header.appendChild(myH1);

  const myPara = document.createElement("p");
  myPara.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
  header.appendChild(myPara);
}
```

Aquí primero creamos un elemento {{HTMLElement("Heading_Elements", "h1")}} con [`createElement()`](/es/docs/Web/API/Document/createElement), establecemos su [`textContent`](/es/docs/Web/API/Node/textContent) igual a la propiedad `squadName` del objeto y después lo añadimos al encabezado con [`appendChild()`](/es/docs/Web/API/Node/appendChild). Después hacemos una operación muy parecida con un párrafo: lo creamos, establecemos su contenido de texto y lo añadimos al encabezado. La única diferencia es que su texto se establece con una [plantilla literal](/es/docs/Web/JavaScript/Reference/Template_literals) que contiene las propiedades `homeTown` y `formed` del objeto.

### Crear las tarjetas de información de los héroes

A continuación, añade la siguiente función al final del código; crea y muestra las tarjetas de los superhéroes:

```js
function populateHeroes(obj) {
  const section = document.querySelector("section");
  const heroes = obj.members;

  for (const hero of heroes) {
    const myArticle = document.createElement("article");
    const myH2 = document.createElement("h2");
    const myPara1 = document.createElement("p");
    const myPara2 = document.createElement("p");
    const myPara3 = document.createElement("p");
    const myList = document.createElement("ul");

    myH2.textContent = hero.name;
    myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
    myPara2.textContent = `Age: ${hero.age}`;
    myPara3.textContent = "Superpowers:";

    const superPowers = hero.powers;
    for (const power of superPowers) {
      const listItem = document.createElement("li");
      listItem.textContent = power;
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}
```

Para empezar, guardamos la propiedad `members` del objeto de JavaScript en una variable nueva. Este array contiene varios objetos con la información de cada héroe.

Después, usamos un [bucle `for...of`](/es/docs/Learn_web_development/Core/Scripting/Loops#el_bucle_for...of) para recorrer cada objeto del array. Para cada uno:

1. Creamos varios elementos nuevos: un `<article>`, un `<h2>`, tres `<p>` y un `<ul>`.
2. Hacemos que el `<h2>` contenga el `name` del héroe actual.
3. Rellenamos los tres párrafos con su `secretIdentity`, su `age` y una línea que dice «Superpowers:» para presentar la información de la lista.
4. Guardamos la propiedad `powers` en otra constante nueva llamada `superPowers`, que contiene un array con los superpoderes del héroe actual.
5. Usamos otro bucle `for...of` para recorrer los superpoderes del héroe actual: para cada uno, creamos un elemento `<li>`, ponemos el superpoder dentro y después ponemos el `listItem` dentro del elemento `<ul>` (`myList`) con `appendChild()`.
6. Lo último que hacemos es añadir el `<h2>`, los `<p>` y el `<ul>` dentro del `<article>` (`myArticle`), y después añadir el `<article>` dentro del `<section>`. El orden en que se añaden las cosas es importante, porque es el orden en que se mostrarán en el HTML.

> [!NOTE]
> Si tienes problemas para que el ejemplo funcione, consulta nuestro código fuente [heroes-finished.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes-finished.html) (también puedes [verlo en funcionamiento](https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished.html)).

> [!NOTE]
> Si te cuesta seguir la notación de punto y de corchetes que usamos para acceder al objeto de JavaScript, puede ayudarte tener el archivo [superheroes.json](https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json) abierto en otra pestaña o en tu editor de texto, y consultarlo mientras miras nuestro JavaScript.
> También deberías volver a nuestro artículo [Conceptos básicos de los objetos de JavaScript](/es/docs/Learn_web_development/Core/Scripting/Object_basics) para obtener más información sobre la notación de punto y de corchetes.

### Llamar a la función de nivel superior

Por último, tenemos que llamar a nuestra función de nivel superior `populate()`:

```js
populate();
```

## Convertir entre objetos y texto

El ejemplo anterior era sencillo en cuanto al acceso al objeto de JavaScript, porque convertimos la respuesta de la red directamente en un objeto de JavaScript con `response.json()`.

Pero a veces no tenemos tanta suerte: a veces recibimos una cadena JSON en bruto y tenemos que convertirla nosotros mismos en un objeto. Y cuando queremos enviar un objeto de JavaScript por la red, tenemos que convertirlo en JSON (una cadena) antes de enviarlo. Por suerte, estos dos problemas son tan habituales en el desarrollo web que los navegadores tienen un objeto [JSON](/es/docs/Web/JavaScript/Reference/Global_Objects/JSON) integrado, que contiene los dos métodos siguientes:

- [`parse()`](/es/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse): acepta una cadena JSON como parámetro y devuelve el objeto de JavaScript correspondiente.
- [`stringify()`](/es/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify): acepta un objeto como parámetro y devuelve la cadena JSON equivalente.

Puedes ver el primero en acción en nuestro ejemplo [heroes-finished-json-parse.html](https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished-json-parse.html) (consulta el [código fuente](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes-finished-json-parse.html)): hace exactamente lo mismo que el ejemplo que construimos antes, salvo que:

- obtenemos la respuesta como texto en lugar de como JSON, llamando al método {{domxref("Response/text", "text()")}} de la respuesta
- después usamos `parse()` para convertir el texto en un objeto de JavaScript.

El fragmento de código clave es este:

```js
async function populate() {
  const requestURL =
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const superHeroesText = await response.text();

  const superHeroes = JSON.parse(superHeroesText);
  populateHeader(superHeroes);
  populateHeroes(superHeroes);
}
```

Como te imaginarás, `stringify()` funciona al revés. Prueba a escribir una a una las siguientes líneas en la consola de JavaScript de tu navegador para verlo en acción:

```js
let myObj = { name: "Chris", age: 38 };
myObj;
let myString = JSON.stringify(myObj);
myString;
```

Aquí creamos un objeto de JavaScript, comprobamos qué contiene, lo convertimos en una cadena JSON con `stringify()` (guardando el valor devuelto en una variable nueva) y después lo volvemos a comprobar.

## Resumen

En esta lección te hemos presentado el uso de JSON en tus programas, incluido cómo crear y analizar JSON, y cómo acceder a los datos que contiene. En el siguiente artículo te daremos algunas pruebas que puedes usar para comprobar si has entendido y retenido toda esta información.

## Véase también

- [Referencia de JSON](/es/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [Descripción general de la API Fetch](/es/docs/Web/API/Fetch_API)
- [Uso de Fetch](/es/docs/Web/API/Fetch_API/Using_Fetch)
- [Métodos de solicitud HTTP](/es/docs/Web/HTTP/Reference/Methods)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Network_requests","Learn_web_development/Core/Scripting/Test_your_skills/JSON", "Learn_web_development/Core/Scripting")}}
