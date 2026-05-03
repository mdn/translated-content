---
title: Secciones de sintaxis
slug: MDN/Writing_guidelines/Page_structures/Syntax_sections
l10n:
  sourceCommit: 14acf1aa7885157debdf1b6111f4bd10c064ec60
---

La sección de sintaxis de una página de referencia de MDN contiene un bloque de sintaxis que define la sintaxis exacta que tiene una característica (por ejemplo, ¿qué parámetros puede aceptar?, ¿cuáles son opcionales?). Este artículo explica cómo escribir bloques de sintaxis para los artículos de referencia.

## Sintaxis de la referencia de la API

Las secciones de sintaxis para las páginas de referencia de la API se escriben manualmente, y pueden diferir ligeramente basándose en la característica que se está documentando.
La sección comienza con un encabezado (típicamente un encabezado de nivel dos `##`) llamado "Sintaxis", y debe incluirse en la parte superior de la página de referencia (justo debajo del material introductorio).
Debajo del encabezado, hay un bloque de código que muestra la sintaxis exacta de la característica, delimitado utilizando la clase de bloque de código ` ```[lenguaje de marcado] `.

El siguiente ejemplo muestra el código Markdown para una sección de sintaxis típica (para una función de JavaScript):

````md
## Sintaxis

```js-nolint
slice()
slice(start)
slice(start, end)
```
````

> [!NOTE]
> El lenguaje de marcado utilizado en este caso es `js-nolint`, donde `js` indica que se debe utilizar el resaltado de sintaxis de JavaScript.
> Para las secciones de sintaxis de JavaScript también se requiere `-nolint` porque la sección de sintaxis deliberadamente no es "exactamente" JavaScript y no queremos que el linter lo "arregle" (Se omiten los valores de retorno y los puntos y coma al final de línea).

### Reglas generales de estilo

Algunas reglas a seguir en términos de marcado dentro del bloque de sintaxis:

- **No** termines una línea con punto y coma `;`. Las secciones de sintaxis no están destinadas a mostrar código ejecutable. Por lo tanto, no tiene sentido mostrar puntos y comas.
- **No** utilices \<code> dentro del bloque de sintaxis (ni dentro de ningún bloque de ejemplo de código en MDN). No solo es inútil, sino que nuestro marcado no lo admite, y no se renderizará de la manera que deseas si lo incluyes.
- Especifica únicamente la función y los argumentos. A continuación se muestran ejemplos "corregidos"

```js-nolint
querySelector(selector)
// responseStr = element.querySelector(selector)

new IntersectionObserver(callback, options)
// const observer = new IntersectionObserver(callback, options)
```

### Constructores y métodos

#### Bloque de sintaxis

Comienza con un bloque de sintaxis, como este (de la página del constructor {{DOMxRef("IntersectionObserver.IntersectionObserver", "IntersectionObserver()")}}):

```js-nolint
new IntersectionObserver(callback, options)
```

o este (de {{DOMxRef("Document.hasStorageAccess()")}}):

```js-nolint
hasStorageAccess()
```

Cuando el método es estático, por ejemplo {{DOMxRef("URL/createObjectURL_static", "URL.createObjectURL()")}}, proporciona también su interfaz:

```js-nolint
URL.createObjectURL(object)
```

##### Múltiples líneas/Parámetros opcionales

Los métodos que pueden utilizarse de muchas maneras diferentes deben expandirse en múltiples líneas, mostrando todas las variaciones posibles.

Cada opción debe estar en su propia línea, omitiendo tanto los comentarios por opción como la asignación. Por ejemplo, {{jsxref("Array.prototype.slice()")}} tiene dos parámetros opcionales, y se documentaría como se muestra a continuación:

```js-nolint
slice()
slice(begin)
slice(begin, end)
```

De manera similar, para {{DOMxRef("CanvasRenderingContext2D.drawImage")}}:

```js-nolint
drawImage(image, dx, dy)
drawImage(image, dx, dy, dWidth, dHeight)
drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
```

De manera similar para el constructor {{jsxref("Date")}}:

```js-nolint
new Date()
new Date(value)
new Date(dateString)
new Date(year, monthIndex)
new Date(year, monthIndex, day)
new Date(year, monthIndex, day, hours)
new Date(year, monthIndex, day, hours, minutes)
new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)
```

##### Sintaxis formal

La notación de sintaxis formal (utilizando [BNF](https://es.wikipedia.org/wiki/Forma_de_Backus-Naur)) no debe utilizarse en la sección de Sintaxis — en su lugar, utiliza el formato expandido de múltiples líneas [descrito anteriormente](#múltiples_líneasparámetros_opcionales).

Si bien la notación formal proporciona un mecanismo conciso para describir una sintaxis compleja, no es familiar para muchos desarrolladores y puede entrar en _conflicto_ con la sintaxis válida para lenguajes de programación particulares. Por ejemplo, `[ ]` indica tanto un "parámetro opcional" como un {{jsxref("Array")}} en JavaScript. Puedes ver esto en la sintaxis formal para {{jsxref("Array.prototype.slice()")}} a continuación:

```js-nolint
arr.slice([begin[, end]])
```

Para casos específicos donde se considere beneficioso, se puede declarar una sección separada de **Sintaxis formal** utilizando la notación formal.

##### Bloques de sintaxis concisos

El objetivo es hacer que el bloque de sintaxis sea una definición lo más pura y clara posible de la sintaxis de la característica — no incluyas ninguna sintaxis irrelevante. Por ejemplo, puedes ver esta forma de sintaxis utilizada para describir promesas en muchos lugares del sitio:

```js-nolint
caches.match(request, options).then((response) => {
  // Haz algo con la respuesta
})
```

Pero esta versión es mucho más concisa, y no incluye la llamada superflua al método {{JSxRef("Promise.prototype.then()")}}:

```js-nolint
match(request, options)
```

##### Bloques de sintaxis para callbacks

Para los métodos que aceptan una función callback, muestra el callback como un parámetro, no como una función flecha o una expresión `function`.

```js-nolint
filter(callbackFn)
filter(callbackFn, thisArg)
```

Luego, en la sección "Parámetros", enumera los parámetros de la función callback y lo que se espera que devuelva.

```md
- `callbackFn`
  - : Una función a ejecutar para cada elemento del array. Debe devolver un valor [truthy](/es/docs/Glossary/Truthy) para mantener el elemento en el array resultante, y un valor [falsy](/es/docs/Glossary/Falsy) en caso contrario. La función se invoca con los siguientes argumentos:
    - `element`
      - : El elemento actual que se está procesando en el array.
    - `index`
      - : El índice del elemento actual que se está procesando en el array.
    - `array`
      - : El array sobre el que se llamó a `filter()`.
```

##### Sintaxis para un número arbitrario de parámetros

Para los métodos que aceptan un número arbitrario de parámetros, el bloque de sintaxis se escribe de esta manera:

```js-nolint
unshift()
unshift(element1)
unshift(element1, element2)
unshift(element1, element2, /* …, */ elementN)
```

Es preferible comenzar la numeración desde el 1, lo que permite escribir descripciones como "`unshift` añade N elementos al inicio del array", así como "el primer elemento" (en lugar de "el elemento cero").

Ten en cuenta que el caso de no pasar parámetros rest siempre se incluye, incluso cuando no tiene mucho sentido. Luego, en la sección "Parámetros", escribe esto:

```md
- `element1`, …, `elementN`
  - : Los elementos a añadir al inicio del array.
```

Añade `\{{optional_inline}}` aquí cuando pasar cero parámetros rest tenga sentido.

Otro ejemplo con algunos parámetros posicionales antes del parámetro rest:

```js-nolint
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2)
splice(start, deleteCount, item1, item2, /* …, */ itemN)
```

#### Sección de Parámetros

A continuación, incluye una subsección «Parámetros», la cual explica en qué consiste cada parámetro mediante una lista de descripción. Los parámetros que son objetos con múltiples miembros pueden incluir una lista de descripción anidada que, a su vez, incluya una explicación de cada miembro. Los parámetros opcionales deben marcarse con una llamada a la macro \\{{optional_inline}} junto a su nombre en el término de la descripción.

El nombre de cada parámetro en la lista debe estar contenido en la notación de código de markdown `` ` ` ``.

> [!NOTE]
> Incluso si la característica no toma ningún parámetro, debes incluir una sección "Parámetros", con el contenido "Ninguno".

#### Sección de Valor de retorno

A continuación, incluye una subsección "Valor de retorno", que explica cuál es el valor de retorno del constructor o método. Consulta los enlaces anteriores como ejemplos.

Si no hay valor de retorno, utiliza el siguiente texto:

Ninguno (\\{{jsxref("undefined")}}).

#### Sección de Excepciones

Por último, incluye una subsección "Excepciones", que explica qué excepciones se pueden lanzar si se encuentra un problema al invocar el constructor/método. Esto podría deberse a que el nombre de un parámetro está mal escrito o se le ha dado un valor del tipo de datos incorrecto, porque hay un problema con el entorno en el que se invoca (por ejemplo, intentar ejecutar una característica exclusiva de contextos seguros en un contexto no seguro), o por alguna otra razón.

Determinar qué excepciones lanza un método puede requerir una lectura detallada de la especificación. Revisar la explicación paso a paso de la especificación sobre cómo funciona una característica proporcionará, por lo general, una lista sólida de las excepciones y las situaciones que provocan su lanzamiento.

Los nombres de las excepciones y sus explicaciones deben incluirse en una lista de descripciones.

> [!NOTE]
> Si no se pueden generar excepciones en la característica, no es necesario que incluyas una sección "Excepciones", pero puedes incluirla si lo deseas con el contenido "Ninguna".

### Propiedades

#### Sección de Valor

Las propiedades no contienen una sección de sintaxis. En su lugar, añade una sección "Valor" que contenga una explicación del valor de la propiedad. Describe su tipo de datos y cuál es su propósito.

#### Sección de Excepciones

Si acceder a la propiedad puede lanzar una excepción, incluye una subsección "Excepciones" explicando cada excepción; esta debe configurarse exactamente igual a la descrita para los métodos y constructores anteriormente.

## Sintaxis de la referencia de JavaScript

Las páginas de referencia de objetos incorporados de JavaScript siguen las mismas reglas básicas que las páginas de referencia de la API; por ejemplo, para métodos y propiedades. Hay algunas diferencias que podrías observar:

- Para los objetos incorporados con un solo constructor, la sintaxis del constructor a menudo se incluye en la página de inicio del objeto. Consulta {{JSxRef("Date")}} por ejemplo. Notarás que los métodos estáticos (aquellos que existen en el propio objeto `Date`) se enumeran bajo "Métodos", mientras que los métodos de instancia se enumeran bajo "Métodos de Date.prototype".
- También notarás que, para los métodos que no tienen parámetros o excepciones, es muy probable que estas subsecciones se omitan por completo en las páginas de referencia de JavaScript. Consulta {{JSxRef("Date.getDate()")}} y {{JSxRef("Date.now()")}} para ver ejemplos.

## Sintaxis de la referencia de CSS

### Propiedades

Las páginas de referencia de las propiedades CSS incluyen una sección "Sintaxis", que solía encontrarse en la parte superior de la página, pero cada vez es más común encontrarla debajo de una sección que contiene un bloque de código mostrando el uso típico de la característica, más un ejemplo en vivo para ilustrar lo que hace (consulta {{CSSxRef("animation")}} como ejemplo).

> [!NOTE]
> Se hace esto porque la sintaxis formal de CSS es compleja, no la utilizan muchos de los lectores de MDN, y resulta intimidante para los principiantes. La sintaxis real y los ejemplos son más útiles para la mayoría de las personas.

Dentro de la sección de sintaxis encontrarás los siguientes contenidos.

#### Texto de explicación opcional

Algunas propiedades CSS se explican por sí mismas y realmente no necesitan una explicación adicional (por ejemplo {{CSSxRef("color")}}). Otras, por otro lado, son más complejas y necesitan una explicación sobre el orden de la sintaxis, la inclusión de múltiples valores, etc. (consulta {{CSSxRef("animation")}}). En tales casos, puedes incluir una explicación adicional antes de cualquiera de las subsecciones.

#### Sección de Valores

A continuación, debes incluir una sección "Valores" — esta contiene una lista de descripciones explicando los tipos de valor CSS que componen el valor de la propiedad. Cada tipo de valor debe estar envuelto en corchetes angulares y enlazado a la página de referencia de MDN que cubre ese tipo de valor si existe una página para él. Por ejemplo, consulta la referencia de la propiedad {{CSSxRef("border")}} — esta hace referencia a tres tipos de valores, de los cuales solo uno está enlazado ({{CSSxRef("&lt;color&gt;")}}).

#### Sintaxis formal

La última sección, "Sintaxis formal", se genera automáticamente utilizando la macro `\{{CSSSyntax}}`. Esta macro obtiene datos de las especificaciones CSS utilizando el [paquete npm @webref/css](https://www.npmjs.com/package/@webref/css). Para incluir la sintaxis formal en tu documento:

1. Añade un encabezado como: `## Sintaxis formal`.
2. Coloca la macro `\{{CSSSyntax}}` directamente debajo de este encabezado.

### Selectores

La sección de "Sintaxis" de las páginas de referencia de los selectores es mucho más simple que la de las páginas de propiedades. Contiene un bloque estilizado usando el estilo "Syntax Box", que muestra la sintaxis básica del selector, ya sea que se trate solo de una palabra clave simple (por ejemplo, {{CSSxRef(":hover")}}), o un valor de función más complejo que toma un parámetro (por ejemplo, {{CSSxRef(":not", ":not()")}}). A veces, el parámetro se explica en una entrada adicional dentro del bloque de sintaxis (consulta {{CSSxRef(":nth-last-of-type", ":nth-last-of-type()")}} para ver un ejemplo).

Este bloque se genera automáticamente a partir de los datos incluidos en el directorio CSS del [repositorio de datos de MDN](https://github.com/mdn/data). Solo necesitas incluir una llamada a la macro `CSSSyntax` debajo del título, y este se encargará del resto.

La única complicación surge de asegurarse de que los datos que necesitas están presentes. El archivo [selectors.json](https://github.com/mdn/data/blob/main/css/selectors.json) necesita contener una entrada para el selector que estás documentando.

Para hacer esto, necesitas crear un fork del [repositorio de datos de MDN](https://github.com/mdn/data), clonar tu fork localmente, realizar los cambios en una rama nueva y luego enviar un Pull Request al repositorio original. Puedes [encontrar más detalles sobre cómo usar Git aquí](/es/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).

## Sintaxis de la referencia de HTML

Las páginas de referencia de HTML no tienen secciones de "Sintaxis" — la sintaxis es siempre simplemente el nombre del elemento rodeado de corchetes angulares, por lo que no es necesaria. Lo principal que necesitas saber sobre los elementos HTML es qué atributos toman y cuáles pueden ser sus valores, y esto se cubre en una sección separada de "Atributos". Consulta {{htmlelement("ol")}} y {{htmlelement("video")}} para ver ejemplos.

## Sintaxis de la referencia de HTTP

Toda la sintaxis de la referencia de HTTP se crea manualmente y difiere dependiendo de qué tipo de característica HTTP estés documentando.

### Cabeceras HTTP/Content-Security-Policy

La sintaxis de las cabeceras HTTP (y Content-Security-Policy) se documenta en dos secciones separadas en la página — "Sintaxis" y "Directivas".

#### Sección de Sintaxis

La sección "Sintaxis" muestra cómo se verá la sintaxis de una cabecera, utilizando un bloque de sintaxis estilizado con el estilo "Syntax Box", incluyendo la sintaxis formal para mostrar exactamente qué directivas pueden incluirse en el valor, en qué orden, etc. Por ejemplo, el bloque de sintaxis de la cabecera {{HTTPHeader("If-None-Match")}} se ve así:

```http
If-None-Match: <etag_value>
If-None-Match: <etag_value>, <etag_value>, …
If-None-Match: *
```

Algunas cabeceras tendrán sintaxis separadas para las directivas de petición, directivas de respuesta y sintaxis de extensión. Si están disponibles, estas deben incluirse en bloques de sintaxis separados, cada una bajo su propia subsección. Consulta {{HTTPHeader("Cache-Control")}} para ver un ejemplo.

#### Sección de Directivas

La sección "Directivas" contiene una lista de descripciones con los nombres y descripciones de todas las directivas que pueden aparecer dentro de la sintaxis.

### Métodos de petición HTTP

La sintaxis de los métodos de petición es muy sencilla, ya que solo contiene un bloque de sintaxis estilizado usando el estilo "Syntax Box" que muestra cómo está estructurada la sintaxis del método. La sintaxis para el [método GET](/es/docs/Web/HTTP/Reference/Methods/GET) se ve así:

```http
GET /index.html
```

### Códigos de estado de respuesta HTTP

De nuevo, la sintaxis para los códigos de estado de respuesta HTTP es realmente sencilla — un bloque de sintaxis que incluye el código y el nombre. Por ejemplo:

```http
404 Not Found
```

## Sintaxis de la referencia de SVG

### Elementos SVG

Las secciones de sintaxis de los elementos SVG no existen — al igual que las secciones de sintaxis de los elementos HTML. Cada página de referencia de un elemento SVG solo incluye una lista de los atributos que se pueden aplicar a ese elemento. Consulta {{SVGElement("feTile")}} como ejemplo.

### Atributos SVG

Las páginas de referencia de los atributos SVG tampoco incluyen secciones de sintaxis.

## Véase también

- [Markdown en MDN](/es/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks)
