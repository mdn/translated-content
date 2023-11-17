---
title: Trabajando con JSON
slug: Learn/JavaScript/Objects/JSON
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Objects/Inheritance", "Learn/JavaScript/Objects/Object_building_practice", "Learn/JavaScript/Objects")}}

JavaScript Object Notation (JSON) es un formato basado en texto estándar para representar datos estructurados en la sintaxis de objetos de JavaScript. Es comúnmente utilizado para transmitir datos en aplicaciones web (por ejemplo: enviar algunos datos desde el servidor al cliente, así estos datos pueden ser mostrados en páginas web, o vice versa). Se enfrentará a menudo con él, así que este artículo le entrega todo lo que necesita saber para trabajar con JSON utilizando JavaScript, incluyendo el análisis JSON para acceder a los datos en su interior, y cómo crear JSON.

| Prerrequisitos: | Alfabetismo computacional básico, una comprensión básica de HTML y CSS, familiaridad con los temas básicos de JavaScript (vea [First steps](/es/docs/Learn/JavaScript/First_steps) y [Building blocks](/es/docs/Learn/JavaScript/Building_blocks)) y OOJS básico (vea [Introduction to objects](/es/docs/Learn/JavaScript/Object-oriented/Introduction)). |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Objetivo:       | Entender cómo trabajar con datos almacenados en JSON, y crear objetos JSON propios.                                                                                                                                                                                                                                                                       |

## ¿Qué es realmente JSON?

{{glossary("JSON")}} es un formato de datos basado en texto que sigue la sintaxis de objeto de JavaScript, popularizado por [Douglas Crockford](https://en.wikipedia.org/wiki/Douglas_Crockford). Aunque es muy parecido a la sintaxis de objeto literal de JavaScript, puede ser utilizado independientemente de JavaScript, y muchos entornos de programación poseen la capacidad de leer (convertir; _parsear_) y generar JSON.

Los JSON son cadenas - útiles cuando se quiere transmitir datos a través de una red. Debe ser convertido a un objeto nativo de JavaScript cuando se requiera acceder a sus datos. Ésto no es un problema, dado que JavaScript posee un objeto global [JSON](/es/docs/Web/JavaScript/Reference/Global_Objects/JSON) que tiene los métodos disponibles para convertir entre ellos.

> **Nota:** Convertir una cadena a un objeto nativo se denomina _parsing_, mientras que convertir un objeto nativo a una cadena para que pueda ser transferido a través de la red se denomina _stringification_.

Un objeto JSON puede ser almacenado en su propio archivo, que es básicamente sólo un archivo de texto con una extension `.json`, y una {{glossary("MIME type")}} de `application/json`.

### Estructura del JSON

Como se describió previamente, un JSON es una cadena cuyo formato recuerda al de los objetos literales JavaScript. Es posible incluir los mismos tipos de datos básicos dentro de un JSON que en un objeto estándar de JavaScript - cadenas, números, arreglos, booleanos, y otros literales de objeto. Esto permite construir una jerarquía de datos, como ésta:

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

Si se carga este objeto en un programa de JavaScript, convertido (_parseado_) en una variable llamada `superHeroes` por ejemplo, se podría acceder a los datos que contiene utilizando la misma notación de punto/corchete que se revisó en el artículo [JavaScript object basics](/es/docs/Learn/JavaScript/Objects/Basics). Por ejemplo:

```js
superHeroes.homeTown;
superHeroes["active"];
```

Para acceder a los datos que se encuentran más abajo en la jerarquía, simplemente se debe concatenar los nombres de las propiedades y los índices de arreglo requeridos. Por ejemplo, para acceder al tercer superpoder del segundo héroe registrado en la lista de miembros, se debería hacer esto:

```js
superHeroes["members"][1]["powers"][2];
```

1. Primero el nombre de la variable — `superHeroes`.
2. Dentro de esta variable para acceder a la propiedad `members` utilizamos `["members"]`.
3. `members` contiene un arreglo poblado por objetos. Para acceder al segundo objeto dentro de este arreglo se utiliza `[1]`.
4. Dentro de este objeto, para acceder a la propiedad `powers` utilizamos `["powers"]`.
5. Dentro de la propiedad `powers` existe un arreglo que contiene los superpoderes del héroe seleccionado. Para acceder al tercer superpoder se utiliza `[2]`.

> **Nota:** El JSON previamente visto se encuentra disponible dentro de una variable en el ejemplo [JSONTest.html](http://mdn.github.io/learning-area/javascript/oojs/json/JSONTest.html) (vea el [código fuente](https://github.com/mdn/learning-area/blob/master/javascript/oojs/json/JSONTest.html)). Intente cargarlo y luego acceder a los datos contenidos en la variable por medio de la consola JavaScript de su navegador.

### Arreglos como JSON

Anteriormente se mencionó que el texto JSON básicamente se parece a un objeto JavaScript, y esto es en gran parte cierto. La razón de esto es que un arreglo es también un JSON válido, por ejemplo:

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

Éste es un JSON perfectamente válido. Para acceder a esta version convertida se debe comenzar con un índice de arreglo, por ejemplo `[0]["powers"][0]`.

### Otras notas

- JSON es sólo un formato de datos — contiene sólo propiedades, no métodos.
- JSON requiere usar comillas dobles para las cadenas y los nombres de propiedades. Las comillas simples no son válidas.
- Una coma o dos puntos mal ubicados pueden producir que un archivo JSON no funcione. Se debe ser cuidadoso para validar cualquier dato que se quiera utilizar (aunque los JSON generados por computador tienen menos probabilidades de tener errores, mientras el programa generador trabaje adecuadamente). Es posible validar JSON utilizando una aplicación como [JSONLint](http://jsonlint.com/).
- JSON puede tomar la forma de cualquier tipo de datos que sea válido para ser incluido en un JSON, no sólo arreglos u objetos. Así, por ejemplo, una cadena o un número único podrían ser objetos JSON válidos.
- A diferencia del código JavaScript en que las propiedades del objeto pueden no estar entre comillas, en JSON, sólo las cadenas entre comillas pueden ser utilizadas como propiedades.

## Aprendizaje activo: Trabajando a través de un ejemplo de JSON

A continuación se muestra un ejemplo de cómo podemos utilizar algunos datos JSON en un sitio web.

### Para comenzar

Haga una copia local de los archivos [heroes.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/json/heroes.html) y [style.css](https://github.com/mdn/learning-area/blob/master/javascript/oojs/json/style.css). El último contiene un CSS simple para dar estilo a la página, mientras el primero contiene un HTML muy sencillo:

```html
<header></header>

<section></section>
```

Además de un elemento {{HTMLElement("script")}} que contiene el código JavaScript que se escribirá en este ejercicio. En este momento sólo contiene dos líneas, que hacen referencia a los elementos {{HTMLElement("header")}} y {{HTMLElement("section")}} y los almacena en variables:

```js
const header = document.querySelector("header");
const section = document.querySelector("section");
```

Los datos JSON se encuentran disponibles en GitHub en el siguiente enlace: <https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json>.

Los datos se cargarán en esta página y se desplegarán a través de la manipulación del DOM de esta forma:

![](json-superheroes.png)

### Obteniendo el JSON

Para obtener el JSON se utilizará un API llamado {{domxref("XMLHttpRequest")}} (a menudo llamado **XHR**). Éste en un objeto JavaScript muy útil que permite realizar solicitudes de red para recuperar recursos desde un servidor vía JavaScript (por ejemplo: imágenes, texto, JSON, incluso código HTML), con lo que es posible actualizar pequeñas secciones de contenido sin tener que volver a cargar la página entera. Con ello se obtienen páginas web más interactivas, pero está fuera del alcance de este artículo entrar en detalle.

1. Para empezar, se debe almacenar la URL del JSON que se quiere recuperar en una variable. Agregue lo siguiente al final del código JavaScript:

   ```js
   const requestURL =
     "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
   ```

2. Para crear una solicitud, se necesita crear una nueva instancia de objeto de solicitud desde el constructor `XMLHttpRequest`, utilizando la palabra clave `new`. Agregue lo siguiente a continuación de la última línea:

   ```js
   const request = new XMLHttpRequest();
   ```

3. Ahora es necesario abrir una nueva solicitud utilizando el método [`open()`](/es/docs/Web/API/XMLHttpRequest/open). Agregue la siguiente línea:

   ```js
   request.open("GET", requestURL);
   ```

   Esto requiere al menos dos parámetros — Existen otros parámetros opcionales disponibles. Sólo se requieren los dos obligatorios para este ejemplo:

   - El método HTTP a usar cuando se hace una solicitud en red. En este caso `GET` es adecuado, dado que sólo se estan recuperando algunos datos simples.
   - La URL a la que se realiza la solicitud — esta es la URL del archivo que se almacenó antes.

4. Luego, agregue las siguientes dos lineas — establecemos el [`responseType`](/es/docs/Web/API/XMLHttpRequest/responseType) a JSON, de esta forma ese XHR sabe que el servidor estará retornando JSON y que esto debería ser convertido en segundo plano en un objeto JavaScript. Entonces se envía la solicitud con el método [`send()`](/es/docs/Web/API/XMLHttpRequest/send):

   ```js
   request.responseType = "json";
   request.send();
   ```

5. La última parte de esta sección comprende la espera por la respuesta a retornar desde el servidor y luego, manejarla. Agregue el siguiente código bajo el código previo:

   ```js
   request.onload = function () {
     const superHeroes = request.response;
     populateHeader(superHeroes);
     showHeroes(superHeroes);
   };
   ```

En este punto se está almacenando la respuesta a la solicitud (disponible en la propiedad [`response`](/es/docs/Web/API/XMLHttpRequest/response)) en una variable llamada `superHeroes`; esta variable ahora contendrá el objeto JavaScript basado en el JSON. Luego se pasa el objeto como argumento a dos funciones — la primera llenará el `<header>` con los datos correctos, mientras la segunda creará una tarjeta de información para cada héroe en el equipo y la insertará en `<section>`.

Se ha contenido el código en un manejador de eventos que se activa cuando se dispara el evento de carga (ver [`onload`](/es/docs/Web/API/XMLHttpRequestEventTarget/onload)) — esto es porque el evento de carga se dispara cuando la respuesta ha sido retornada de forma exitosa; de esta manera se garantiza que `request.response` estará disponible cuando se intente hacer algo con ella.

### Poblando el encabezado

Se han obtenido los datos desde el JSON y convertidos en un objeto de JavaScript. Ahora, se utilizarán estos datos escribiendo las dos funciones que fueron referenciadas previamente. Antes que todo, agregue la siguiente definición de función a continuación del código previo:

```js
function populateHeader(jsonObj) {
  const myH1 = document.createElement("h1");
  myH1.textContent = jsonObj["squadName"];
  header.appendChild(myH1);

  const myPara = document.createElement("p");
  myPara.textContent =
    "Hometown: " + jsonObj["homeTown"] + " // Formed: " + jsonObj["formed"];
  header.appendChild(myPara);
}
```

Se ha llamado al parámetro `jsonObj`, para recordar que este es un objeto JavaScript originado desde un JSON. Primero se crea un elemento {{HTMLElement("h1")}} con [`createElement()`](/es/docs/Web/API/Document/createElement), se asigna su [`textContent`](/es/docs/Web/API/Node/textContent) igual a la propiedad `squadName` del objeto, luego se agrega al encabezado utilizando[`appendChild()`](/es/docs/Web/API/Node/appendChild). A continuación se realiza una operación muy parecida en un párrafo: se crea, se asigna su contenido de texto y se agrega al encabezado. La única diferencia es que su texto se asigna a una cadena concatenada que contiene las propiedades `homeTown` y `formed` del objeto.

### Creación de las tarjetas de información del héroe

Luego, agregue la siguiente función al final del código, que crea y muestra las tarjetas de los superhéroes:

```js
function showHeroes(jsonObj) {
  const heroes = jsonObj["members"];

  for (var i = 0; i < heroes.length; i++) {
    const myArticle = document.createElement("article");
    const myH2 = document.createElement("h2");
    const myPara1 = document.createElement("p");
    const myPara2 = document.createElement("p");
    const myPara3 = document.createElement("p");
    const myList = document.createElement("ul");

    myH2.textContent = heroes[i].name;
    myPara1.textContent = "Secret identity: " + heroes[i].secretIdentity;
    myPara2.textContent = "Age: " + heroes[i].age;
    myPara3.textContent = "Superpowers:";

    const superPowers = heroes[i].powers;
    for (var j = 0; j < superPowers.length; j++) {
      const listItem = document.createElement("li");
      listItem.textContent = superPowers[j];
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

Para empezar, se almacena la propiedad `members` del objeto JavaScript en una nueva variable. Este arreglo contiene múltiples objetos que contienen la información para cada héroe.

A continuación, se utiliza un ciclo [for](/es/docs/Learn/JavaScript/Building_blocks/Looping_code#The_standard_for_loop) para recorrer cada objeto en el arreglo. Para cada uno:

1. Se crean varios elementos nuevos: un `<article>`, un `<h2>`, tres `<p>`s, y una `<ul>`.
2. Se asigna al `<h2>` para que muestre el `name` del héroe.
3. Se completan los tres párrafos con su `secretIdentity`, `age`, y una línea que diga "Superpowers:" para introducir la información de la lista.
4. Se almacena la propiedad `powers` en otra variable nueva llamada `superPowers` — que contiene un arreglo que lista los superpoderes del héroe actual.
5. Para recorrer los superpoderes del héroe, se utiliza otro ciclo `for` — para cada uno se crea un elemento `<li>`, se asigna el superpoder a él y luego se pone el `listItem` dentro del elemento `<ul>` (`myList`) utilizando `appendChild()`.
6. Lo último es agregar los `<h2>`, `<p>`s, y `<ul>` dentro del `<article>` (`myArticle`), luego se agrega `<article>` dentro de `<section>`. El orden en que las cosas son agregadas es importante, dado que este es el orden en el que aparecerán dentro del HTML.

> **Nota:** Si tiene problemas en lograr que el ejemplo funcione, intente con el código fuente [heroes-finished.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/json/heroes-finished.html) (vea también [running live](http://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished.html).)

> **Nota:** Si encuentra dificultades en seguir la notacion de punto/corchete que se utiliza para acceder a los objetos de JavaScript, puede ser útil tener el archivo [superheroes.json](http://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json) abierto en otra pestaña o en su editor de texto, y revisarlo mientras observa el código JavaScript. También puede referirse al artículo [JavaScript object basics](/es/docs/Learn/JavaScript/Objects/Basics) para mayor información sobre la notación de punto y corchete.

## Conversiones entre objetos y texto

El ejemplo anterior era simple en términos de acceder al objeto JavaScript, porque se programó la solicitud XHR para convertir el JSON de respuesta directamente en un objeto de JavaScript utilizando:

```js
request.responseType = "json";
```

En algunas ocasiones, se recibirá una cadena JSON sin procesar, y será necesario convertirla en un objeto. Y cuando sea necesario enviar un objeto Javascript a través de la red, será necesario convertirlo a un JSON (una cadena) antes de ser enviado. Afortunadamente, estos dos problemas son muy comunes en el desarrollo web por lo que un objeto JSON integrado está disponible en los navegadores, que contiene los siguientes dos métodos:

- [`parse()`](/es/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse): Acepta una cadena JSON como parámetro, y devuelve el objeto JavaScript correspondiente.
- [`stringify()`](/es/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify): Acepta un objeto como parámetro, y devuelve la forma de cadena JSON equivalente.

El primer método se puede observar en el ejemplo [heroes-finished-json-parse.html](http://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished-json-parse.html) (vea el [código fuente](https://github.com/mdn/learning-area/blob/master/javascript/oojs/json/heroes-finished-json-parse.html)) — que realiza exactamente lo mismo que el ejemplo que se construyó previamente, excepto porque se determinó que el XHR devolviera el texto JSON sin procesar, luego se utiliza `parse()` para convertirlo en un objeto JavaScript. El extracto del código es el siguiente:

```js
request.open("GET", requestURL);
request.responseType = "text"; // recibimos una cadena de tipo "string"
request.send();

request.onload = function () {
  const superHeroesText = request.response; // cogemos la cadena de response
  const superHeroes = JSON.parse(superHeroesText); // la convertimos a objeto
  populateHeader(superHeroes);
  showHeroes(superHeroes);
};
```

Como es de suponer, `stringify()` trabaja de la forma opuesta. Intente ingresar las siguientes líneas en la consola de JavaScript de su navegador para verlo en acción:

```js
const myJSON = { name: "Chris", age: "38" };
myJSON;
const myString = JSON.stringify(myJSON);
myString;
```

En este caso, se ha creado un objeto JavaScript, luego se comprueba lo que contiene, y entonces se convierte en una cadena JSON utilizando `stringify()` — guardando el valor retornado en una variable nueva — y comprobándolo nuevamente.

## Resumen

En este artículo se ha entregado una guía simple para utilizar JSON en sus programas, incluyendo cómo crear y leer JSON, y cómo acceder a los datos almacenados en él. En el artículo siguiente se verá JavaScript orientado a objetos.

## Vea también

- [JSON object reference page](/es/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [XMLHttpRequest object reference page](/es/docs/Web/API/XMLHttpRequest)
- [Using XMLHttpRequest](/es/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
- [HTTP request methods](/es/docs/Web/HTTP/Methods)
- [Official JSON web site with link to ECMA standard](http://json.org)

{{PreviousMenuNext("Learn/JavaScript/Objects/Inheritance", "Learn/JavaScript/Objects/Object_building_practice", "Learn/JavaScript/Objects")}}
