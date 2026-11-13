---
title: Métodos útiles con cadenas
short-title: Métodos con cadenas
slug: Learn_web_development/Core/Scripting/Useful_string_methods
l10n:
  sourceCommit: 003b6ceec6ecd0a3e36046a8515ab7fbc8dc220d
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting/Test_your_skills/Strings", "Learn_web_development/Core/Scripting")}}

Ahora que hemos analizado los conceptos básicos de las cadenas, subamos un poco el ritmo y empecemos a pensar en las operaciones útiles que podemos realizar con cadenas usando métodos integrados, como encontrar la longitud de una cadena de texto, unir y dividir cadenas, sustituir un carácter de una cadena por otro, y mucho más.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>Comprensión de <a href="/es/docs/Learn_web_development/Core/Structuring_content">HTML</a> y de los <a href="/es/docs/Learn_web_development/Core/Styling_basics">fundamentos de CSS</a>. Conocimiento de <a href="/es/docs/Learn_web_development/Core/Scripting/Strings">los aspectos básicos de las cadenas</a>.</td>
    </tr>
    <tr>
      <th scope="row">Resultados de aprendizaje:</th>
      <td>
          Manipulación de cadenas usando propiedades y métodos comunes integrados en JavaScript.
      </td>
    </tr>
  </tbody>
</table>

## Las cadenas como objetos

La mayoría de los valores se pueden usar como si fueran objetos en JavaScript. Cuando creas una cadena, por ejemplo usando

```js
const string = "Esta es mi cadena";
```

aunque la variable en sí no es un objeto, tiene disponible una gran cantidad de propiedades y métodos, en virtud de poder usarse como un objeto al acceder a sus propiedades. Puedes comprobarlo si vas a la página del objeto {{jsxref("String")}} y revisas la lista que aparece al costado de la página.

**Ahora, antes de que tu cerebro empiece a derretirse, ¡no te preocupes!** Realmente no necesitas conocer la mayoría de estos elementos en las primeras etapas de tu proceso de aprendizaje. Pero hay algunos que probablemente usarás con bastante frecuencia, y son los que veremos aquí.

Vamos a introducir algunos ejemplos en la [consola de desarrollador del navegador](/es/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools).

## Encontrar la longitud de una cadena

Esto es fácil — usa la propiedad {{jsxref("String.prototype.length", "length")}}. Intenta escribir las siguientes líneas:

```js
const browserType = "mozilla";
browserType.length;
```

Esto debería devolver el número 7, porque "mozilla" tiene 7 caracteres. Esto es útil por muchas razones; por ejemplo, es posible que quieras encontrar la longitud de una serie de nombres para poder mostrarlos en orden según su longitud, o hacerle saber a un usuario que el nombre de usuario que ingresó en un campo de formulario es demasiado largo si supera una determinada longitud.

## Obtener un carácter específico de una cadena

En una nota relacionada, puedes devolver cualquier carácter dentro de una cadena usando la **notación de corchetes** — esto significa que agregas corchetes (`[]`) al final del nombre de tu variable. Dentro de los corchetes, incluyes el número del carácter que quieres devolver, así que, por ejemplo, para obtener la primera letra harías esto:

```js
browserType[0];
```

Recuerda: ¡las computadoras cuentan desde 0, no desde 1!

Para obtener el último carácter de _cualquier_ cadena, podríamos usar la siguiente línea, combinando esta técnica con la propiedad `length` que vimos arriba:

```js
browserType[browserType.length - 1];
```

La longitud de la cadena "mozilla" es 7, pero como el conteo comienza en 0, la posición del último carácter es 6; usar `length-1` nos da el último carácter.

## Comprobar si una cadena contiene una subcadena

A veces querrás encontrar si una cadena más pequeña está presente dentro de una más grande (por lo general decimos _si una subcadena está presente dentro de una cadena_). Esto se puede hacer con el método {{jsxref("String.prototype.includes()", "includes()")}}, que recibe un único {{glossary("parameter")}} — la subcadena que quieres buscar.

Devuelve `true` si la cadena contiene la subcadena, y `false` en caso contrario.

```js
const browserType = "mozilla";

if (browserType.includes("zilla")) {
  console.log("¡Se encontró zilla!");
} else {
  console.log("¡No hay zilla aquí!");
}
```

A menudo querrás saber si una cadena empieza o termina con una subcadena en particular. Esta es una necesidad lo suficientemente común como para que existan dos métodos especiales para esto: {{jsxref("String.prototype.startsWith()", "startsWith()")}} y {{jsxref("String.prototype.endsWith()", "endsWith()")}}:

```js
const browserType = "mozilla";

if (browserType.startsWith("zilla")) {
  console.log("¡Empieza con zilla!");
} else {
  console.log("¡NO empieza con zilla!");
}
```

```js
const browserType = "mozilla";

if (browserType.endsWith("zilla")) {
  console.log("¡Termina con zilla!");
} else {
  console.log("¡NO termina con zilla!");
}
```

## Encontrar la posición de una subcadena dentro de una cadena

Puedes encontrar la posición de una subcadena dentro de una cadena más grande usando el método {{jsxref("String.prototype.indexOf()", "indexOf()")}}. Este método recibe dos {{glossary("parameter", "parámetros")}} — la subcadena que quieres buscar, y un parámetro opcional que especifica el punto de inicio de la búsqueda.

Si la cadena contiene la subcadena, `indexOf()` devuelve el índice de la primera aparición de la subcadena. Si la cadena no contiene la subcadena, `indexOf()` devuelve `-1`.

```js
const tagline = "MDN - Resources for developers, by developers";
console.log(tagline.indexOf("developers")); // 20
```

Empezando en `0`, si cuentas el número de caracteres (incluyendo los espacios en blanco) desde el inicio de la cadena, la primera aparición de la subcadena `"developers"` está en el índice `20`.

```js
console.log(tagline.indexOf("x")); // -1
```

Esto, en cambio, devuelve `-1` porque el carácter `x` no está presente en la cadena.

Ahora que ya sabes cómo encontrar la primera aparición de una subcadena, ¿cómo harías para encontrar apariciones posteriores? Puedes hacerlo pasando como segundo parámetro del método un valor mayor que el índice de la aparición anterior.

```js
const firstOccurrence = tagline.indexOf("developers");
const secondOccurrence = tagline.indexOf("developers", firstOccurrence + 1);

console.log(firstOccurrence); // 20
console.log(secondOccurrence); // 35
```

Aquí le estamos diciendo al método que busque la subcadena `"developers"` comenzando en el índice `21` (`firstOccurrence + 1`), y devuelve el índice `35`.

## Extraer una subcadena de una cadena

Puedes extraer una subcadena de una cadena usando el método {{jsxref("String.prototype.slice()", "slice()")}}. Le pasas:

- el índice en el que empezar a extraer
- el índice en el que dejar de extraer. Este es exclusivo, lo que significa que el carácter en ese índice no se incluye en la subcadena extraída.

Por ejemplo:

```js
const browserType = "mozilla";
console.log(browserType.slice(1, 4)); // "ozi"
```

El carácter en el índice `1` es `"o"`, y el carácter en el índice 4 es `"l"`. Entonces extraemos todos los caracteres empezando en `"o"` y terminando justo antes de `"l"`, lo que nos da `"ozi"`.

Si sabes que quieres extraer todos los caracteres restantes de una cadena después de cierto carácter, no necesitas incluir el segundo parámetro. En cambio, solo necesitas incluir la posición del carácter desde donde quieres extraer los caracteres restantes de la cadena. Prueba lo siguiente:

```js
browserType.slice(2); // "zilla"
```

Esto devuelve `"zilla"` — esto es porque la posición del carácter 2 es la letra `"z"`, y como no incluiste un segundo parámetro, la subcadena que se devolvió fue el resto de los caracteres de la cadena.

> [!NOTE]
> `slice()` también tiene otras opciones; estudia la página {{jsxref("String.prototype.slice()", "slice()")}} para ver qué más puedes averiguar.

## Cambiar a mayúsculas o minúsculas

Los métodos de cadena {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}} y {{jsxref("String.prototype.toUpperCase()", "toUpperCase()")}} toman una cadena y convierten todos sus caracteres a minúsculas o mayúsculas, respectivamente. Esto puede ser útil, por ejemplo, si quieres normalizar todos los datos ingresados por el usuario antes de almacenarlos en una base de datos.

Intentemos escribir las siguientes líneas para ver qué sucede:

```js
const radData = "Mi NoMbRe Es MuD";
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());
```

## Actualizar partes de una cadena

Puedes reemplazar una subcadena dentro de una cadena por otra subcadena usando el método {{jsxref("String.prototype.replace()", "replace()")}}.

En este ejemplo, proporcionamos dos parámetros — la cadena que queremos reemplazar, y la cadena por la que queremos reemplazarla:

```js
const browserType = "mozilla";
const updated = browserType.replace("moz", "van");

console.log(updated); // "vanilla"
console.log(browserType); // "mozilla"
```

Ten en cuenta que `replace()`, al igual que muchos métodos de cadena, no modifica la cadena sobre la que se llamó, sino que devuelve una cadena nueva. Si quieres actualizar la variable `browserType` original, tendrías que hacer algo como esto:

```js
let browserType = "mozilla";
browserType = browserType.replace("moz", "van");

console.log(browserType); // "vanilla"
```

Ten en cuenta también que ahora tenemos que declarar `browserType` usando `let`, y no `const`, porque le estamos volviendo a asignar un valor.

Ten presente que `replace()`, en esta forma, solo cambia la primera aparición de la subcadena. Si quieres cambiar todas las apariciones, puedes usar {{jsxref("String.prototype.replaceAll()", "replaceAll()")}}:

```js
let quote = "To be or not to be";
quote = quote.replaceAll("be", "code");

console.log(quote); // "To code or not to code"
```

## Desafíos de aprendizaje

En esta sección, te invitamos a probar suerte escribiendo algo de código de manipulación de cadenas. En cada ejercicio a continuación, tenemos un array de cadenas y un bucle que procesa cada valor del array y lo muestra en una lista con viñetas. No es necesario que comprendas los arrays ni los bucles en este momento — se explicarán en futuros artículos. Todo lo que necesitas hacer en cada caso es escribir el código que mostrará las cadenas en el formato que queremos.

Abre cada ejemplo dentro del MDN Playground usando el botón **"Play"** en la parte superior del ejemplo en vivo, y luego sigue las instrucciones para resolver el problema. Si te atascas, puedes consultar las soluciones debajo del ejemplo en vivo en cada caso.

Puedes usar el botón "Reset" del MDN Playground para restablecer el código si cometes un error y no logras que vuelva a funcionar.

### Filtrado de mensajes de saludo

En el primer ejercicio, empezaremos con algo simple — tenemos un array de mensajes de tarjetas de felicitación, pero queremos filtrarlos para mostrar solo los mensajes navideños. Queremos que completes una prueba condicional dentro de la estructura `if ()`, para comprobar cada cadena e imprimirla en la lista solo si es un mensaje navideño.

Piensa en cómo podrías comprobar si el mensaje en cada caso es un mensaje navideño. ¿Qué cadena está presente en todos esos mensajes, y qué método podrías usar para comprobar si está presente?

```html hidden live-sample___string-methods-1
<ul></ul>
```

```js live-sample___string-methods-1
const list = document.querySelector("ul");
const greetings = [
  "¡Feliz cumpleaños!",
  "Feliz Navidad, mi amor",
  "Una Navidad feliz para toda la familia",
  "Eres todo lo que quiero para Navidad",
  "Que te mejores pronto",
];

for (const greeting of greetings) {
  // Tu prueba condicional debe ir dentro de los paréntesis
  // en la línea de abajo, reemplazando lo que hay actualmente
  if (greeting) {
    const listItem = document.createElement("li");
    listItem.textContent = greeting;
    list.appendChild(listItem);
  }
}
```

{{ EmbedLiveSample("string-methods-1", "100%", 150) }}

<details>
<summary>Haz clic aquí para mostrar la solución</summary>

Tu JavaScript terminado debería verse así:

```js
const list = document.querySelector("ul");
const greetings = [
  "¡Feliz cumpleaños!",
  "Feliz Navidad, mi amor",
  "Una Navidad feliz para toda la familia",
  "Eres todo lo que quiero para Navidad",
  "Que te mejores pronto",
];

for (const greeting of greetings) {
  if (greeting.includes("Navidad")) {
    const listItem = document.createElement("li");
    listItem.textContent = greeting;
    list.appendChild(listItem);
  }
}
```

</details>

### Corregir las mayúsculas

Este ejercicio presenta los nombres de ciudades del Reino Unido, pero las mayúsculas están todas desordenadas. Queremos que las cambies para que estén todas en minúsculas, excepto por una primera letra en mayúscula. Una buena forma de hacerlo es:

1. Convertir toda la cadena contenida en la variable `city` a minúsculas y guardarla en una nueva variable.
2. Tomar la primera letra de la cadena en esta nueva variable y guardarla en otra variable.
3. Usando esta última variable como subcadena, reemplazar la primera letra de la cadena en minúsculas por la primera letra de la cadena en minúsculas convertida a mayúscula. Guardar el resultado de este procedimiento de reemplazo en otra nueva variable.
4. Cambiar el valor de la variable `result` para que sea igual al resultado final, no a `city`.

> [!NOTE]
> Una pista — los parámetros de los métodos de cadena no tienen que ser literales de cadena; también pueden ser variables, o incluso variables con un método invocado sobre ellas.

```html hidden live-sample___string-methods-2
<ul></ul>
```

```js live-sample___string-methods-2
const list = document.querySelector("ul");
const cities = ["lonDon", "ManCHESTer", "BiRmiNGHAM", "liVERpoOL"];

for (const city of cities) {
  // escribe tu código justo aquí debajo

  const result = city;
  const listItem = document.createElement("li");
  listItem.textContent = result;
  list.appendChild(listItem);
}
```

{{ EmbedLiveSample("string-methods-2", "100%", 150) }}

<details>
<summary>Haz clic aquí para mostrar la solución</summary>

Tu JavaScript terminado debería verse así:

```js
const list = document.querySelector("ul");
const cities = ["lonDon", "ManCHESTer", "BiRmiNGHAM", "liVERpoOL"];

for (const city of cities) {
  const lower = city.toLowerCase();
  const firstLetter = lower.slice(0, 1);
  const capitalized = lower.replace(firstLetter, firstLetter.toUpperCase());
  const result = capitalized;
  const listItem = document.createElement("li");
  listItem.textContent = result;
  list.appendChild(listItem);
}
```

</details>

### Crear nuevas cadenas a partir de partes antiguas

En este último ejercicio, el array contiene cadenas con información sobre estaciones de tren del norte de Inglaterra. Las cadenas son elementos de datos que contienen el código de estación de tres letras, seguido de algunos datos legibles por máquina, seguidos de un punto y coma, seguidos del nombre de la estación legible por humanos. Por ejemplo:

```plain
MAN675847583748sjt567654;Manchester Piccadilly
```

Queremos extraer el código y el nombre de la estación, y unirlos en una cadena con la siguiente estructura:

```plain
MAN: Manchester Piccadilly
```

Te recomendamos hacerlo así:

1. Extrae el código de estación de tres letras y guárdalo en una nueva variable.
2. Encuentra el índice de carácter del punto y coma.
3. Extrae el nombre de la estación legible por humanos usando el índice de carácter del punto y coma como punto de referencia, y guárdalo en una nueva variable.
4. Concatena las dos nuevas variables y un literal de cadena para formar la cadena final.
5. Cambia el valor de la variable `result` para que sea igual a la cadena final, no a `station`.

```html hidden live-sample___string-methods-3
<ul></ul>
```

```js live-sample___string-methods-3
const list = document.querySelector("ul");
const stations = [
  "MAN675847583748sjt567654;Manchester Piccadilly",
  "GNF576746573fhdg4737dh4;Greenfield",
  "LIV5hg65hd737456236dch46dg4;Liverpool Lime Street",
  "SYB4f65hf75f736463;Stalybridge",
  "HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield",
];

for (const station of stations) {
  // escribe tu código justo aquí debajo

  const result = station;
  const listItem = document.createElement("li");
  listItem.textContent = result;
  list.appendChild(listItem);
}
```

{{ EmbedLiveSample("string-methods-3", "100%", 150) }}

<details>
<summary>Haz clic aquí para mostrar la solución</summary>

Tu JavaScript terminado debería verse así:

```js
const list = document.querySelector("ul");
const stations = [
  "MAN675847583748sjt567654;Manchester Piccadilly",
  "GNF576746573fhdg4737dh4;Greenfield",
  "LIV5hg65hd737456236dch46dg4;Liverpool Lime Street",
  "SYB4f65hf75f736463;Stalybridge",
  "HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield",
];

for (const station of stations) {
  const code = station.slice(0, 3);
  const semiColonIndex = station.indexOf(";");
  const name = station.slice(semiColonIndex + 1);
  const result = `${code}: ${name}`;
  const listItem = document.createElement("li");
  listItem.textContent = result;
  list.appendChild(listItem);
}
```

</details>

## Resumen

No puedes negar el hecho de que ser capaz de manejar palabras y oraciones en programación es muy importante — especialmente en JavaScript, ya que los sitios web tratan principalmente de comunicarse con las personas. Este artículo te ha dado los conceptos básicos que necesitas saber sobre la manipulación de cadenas por ahora. Esto debería servirte bien a medida que avances hacia temas más complejos en el futuro.

En el próximo artículo, te daremos algunas pruebas que puedes usar para comprobar qué tan bien has comprendido y retenido la información que te hemos dado sobre las cadenas y sus métodos.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting/Test_your_skills/Strings", "Learn_web_development/Core/Scripting")}}
