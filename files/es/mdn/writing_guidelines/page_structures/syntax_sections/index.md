---
title: Secciones de sintaxis
slug: MDN/Writing_guidelines/Page_structures/Syntax_sections
l10n:
  sourceCommit: 14acf1aa7885157debdf1b6111f4bd10c064ec60
---

La sección de sintaxis de una página de referencia de MDN contiene un cuadro de sintaxis que define la sintaxis exacta que tiene una característica (por ejemplo, ¿qué parámetros puede aceptar?, ¿cuáles son opcionales?). Este artículo explica cómo escribir cuadros de sintaxis para artículos de referencia.

## Sintaxis de referencia de API

Las secciones de sintaxis para las páginas de referencia de API se escriben manualmente y pueden diferir ligeramente según la característica que se esté documentando.
La sección comienza con un encabezado (generalmente encabezado de nivel dos `##`) llamado "Sintaxis" y debe incluirse en la parte superior de la página de referencia (justo debajo del material introductorio).
Debajo del encabezado hay un bloque de código que muestra la sintaxis exacta de la característica, delimitado usando la clase de cerca de código ` ```[lenguaje-de-marcado] `.

El siguiente ejemplo muestra el código Markdown para una sección de Sintaxis típica (para una función de JavaScript):

````md
## Sintaxis

```js-nolint
slice()
slice(start)
slice(start, end)
```
````

> [!NOTE]
> El lenguaje de marcado usado en este caso es `js-nolint`, donde `js` indica que se debe usar el resaltado de sintaxis de JavaScript.
> Para las secciones de sintaxis de JavaScript también se requiere `-nolint` porque la sección de sintaxis deliberadamente no es "del todo" JavaScript y no queremos que el linter la "arregle" (se omiten los valores de retorno y los punto y coma al final de la línea).

### Reglas de estilo generales

Algunas reglas a seguir en términos de marcado dentro del bloque de sintaxis:

- No termine una línea con punto y coma `;`. Las secciones de sintaxis no están destinadas a mostrar código ejecutable. Por lo tanto, no tiene sentido mostrar punto y coma.
- No use \<code> dentro del bloque de sintaxis (ni dentro de ningún bloque de muestra de código en MDN). No solo es generalmente inútil, sino que nuestro marcado no lo desea y no se representará de la manera que desea que se vea si lo incluye.
- Solo especifique la función y los argumentos. Ejemplo que muestra ejemplos "corregidos" a continuación

  ```js-nolint
  querySelector(selector)
  // responseStr = element.querySelector(selector)

  new IntersectionObserver(callback, options)
  // const observer = new IntersectionObserver(callback, options)
  ```

### Constructores y métodos

#### Bloque de sintaxis

Comience con un bloque de sintaxis, como este (de la página del constructor {{DOMxRef("IntersectionObserver.IntersectionObserver", "IntersectionObserver()")}}):

```js-nolint
new IntersectionObserver(callback, options)
```

o este (de {{DOMxRef("Document.hasStorageAccess()")}}):

```js-nolint
hasStorageAccess()
```

Cuando el método es estático, por ejemplo {{DOMxRef("URL/createObjectURL_static", "URL.createObjectURL()")}}, entonces proporcione también su interfaz:

```js-nolint
URL.createObjectURL(object)
```

##### Múltiples líneas/Parámetros opcionales

Los métodos que se pueden usar de muchas maneras diferentes deben expandirse en múltiples líneas, mostrando todas las variaciones posibles.

Cada opción debe estar en su propia línea, omitiendo tanto los comentarios por opción como la asignación. Por ejemplo, {{jsxref("Array.prototype.slice()")}} tiene dos parámetros opcionales y se documentaría como se muestra a continuación:

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

La notación de sintaxis formal (usando [BNF](https://es.wikipedia.org/wiki/Backus%E2%80%93Naur_form)) no debe usarse en la sección de Sintaxis; en su lugar, use el formato de múltiples líneas expandido [descrito anteriormente](#múltiples_líneasparámetros_opcionales).

Aunque la notación formal proporciona un mecanismo conciso para describir sintaxis compleja, no es familiar para muchos desarrolladores y puede _conflictuar_ con sintaxis válida para lenguajes de programación particulares. Por ejemplo, `[ ]` indica tanto un "parámetro opcional" como un {{jsxref("Array")}} de JavaScript. Puede ver esto en la sintaxis formal de {{jsxref("Array.prototype.slice()")}} a continuación:

```js-nolint
arr.slice([begin[, end]])
```

Para casos específicos donde se ve beneficioso, puede declararse una sección separada de **Sintaxis formal** usando la notificación formal.

##### Bloques de sintaxis concisos

El objetivo es hacer que el bloque de sintaxis sea tan pura y inequívocamente una definición de la sintaxis de la característica como sea posible: no incluya ninguna sintaxis irrelevante. Por ejemplo, puede ver esta forma de sintaxis usada para describir promesas en muchos lugares del sitio:

```js-nolint
caches.match(request, options).then((response) => {
  // Hacer algo con la respuesta
})
```

Pero esta versión es mucho más concisa y no incluye la llamada al método superfluo {{JSxRef("Promise.prototype.then()")}}:

```js-nolint
match(request, options)
```

##### Bloques de sintaxis de devolución de llamada

Para métodos que aceptan una función de devolución de llamada, muestre la devolución de llamada como un parámetro, no como una función flecha o expresión `function`.

```js-nolint
filter(callbackFn)
filter(callbackFn, thisArg)
```

Luego, en la sección "Parámetros", enumere los parámetros de la función de devolución de llamada y lo que se espera que devuelva.

```md
- `callbackFn`
  - : Una función para ejecutar para cada elemento en el arreglo. Debe devolver un valor [truthy](/es/docs/Glossary/Truthy) para mantener el elemento en el arreglo resultante, y un valor [falsy](/es/docs/Glossary/Falsy) en caso contrario. La función se llama con los siguientes argumentos:
    - `element`
      - : El elemento actual que se está procesando en el arreglo.
    - `index`
      - : El índice del elemento actual que se está procesando en el arreglo.
    - `array`
      - : El arreglo en el que se llamó a `filter()`.
```

##### Sintaxis para número arbitrario de parámetros

Para métodos que aceptan un número arbitrario de parámetros, el bloque de sintaxis se escribe así:

```js-nolint
unshift()
unshift(element1)
unshift(element1, element2)
unshift(element1, element2, /* …, */ elementN)
```

Prefiera comenzar la numeración desde 1, lo que permite escribir una descripción como "`unshift` agrega N elementos al comienzo del arreglo", así como "el primer elemento" (en lugar de "el elemento cero").

Tenga en cuenta que el caso de pasar cero parámetros de resto siempre se incluye, incluso cuando no tiene mucho sentido. Luego, en la sección "Parámetros", escriba esto:

```md
- `element1`, …, `elementN`
  - : Los elementos para agregar al frente del arreglo.
```

Agregue `\{{optional_inline}}` aquí cuando pasar cero parámetros de resto tenga sentido.

Otro ejemplo con algunos parámetros posicionales antes del parámetro de resto:

```js-nolint
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2)
splice(start, deleteCount, item1, item2, /* …, */ itemN)
```

#### Sección de parámetros

A continuación, incluya una subsección "Parámetros", que explica qué debe ser cada parámetro, en una lista de descripción. Los parámetros que son objetos que contienen múltiples miembros pueden incluir una lista de descripción anidada, que en sí misma incluye una explicación de qué debe ser cada miembro. Los parámetros opcionales deben marcarse con una llamada a macro \\{{optional_inline}} junto a su nombre en el término de descripción.

El nombre de cada parámetro en la lista debe estar contenido en notación de cerca de código markdown `` ` ` ``.

> [!NOTE]
> Incluso si la característica no toma ningún parámetro, necesita incluir una sección "Parámetros", con el contenido "Ninguno".

#### Sección de valor de retorno

A continuación, incluya una subsección "Valor de retorno", que explica cuál es el valor de retorno del constructor o método. Consulte los enlaces anteriores como ejemplos.

Si no hay valor de retorno, use el siguiente texto:

Ninguno (\{{jsxref("undefined")}}).

#### Sección de excepciones

Finalmente, incluya una subsección "Excepciones", que explica qué excepciones pueden lanzarse si se encuentra un problema al invocar el constructor/método. Esto puede deberse a que un parámetro se ha escrito incorrectamente o se le ha dado un valor del tipo de dato incorrecto, porque hay un problema con el entorno en el que se está invocando (por ejemplo, intentar ejecutar una característica solo de contexto seguro en un contexto no seguro), o alguna otra razón.

Determinar qué excepciones lanza un método puede requerir un examen exhaustivo de la especificación. Revisar la explicación paso a paso de la especificación de cómo opera una característica generalmente proporcionará una lista sólida de las excepciones y las situaciones que causan que se lancen.

Los nombres de excepciones y las explicaciones deben incluirse en una lista de descripción.

> [!NOTE]
> Si no se pueden lanzar excepciones en la característica, no necesita incluir una sección "Excepciones", pero puede hacerlo si lo desea con el contenido "Ninguno".

### Propiedades

#### Sección de valor

Las propiedades no contienen ninguna sección de sintaxis. En su lugar, agregue una sección "Valor" que contenga una explicación del valor de la propiedad. Describa su tipo de dato y cuál es su propósito.

#### Sección de excepciones

Si el acceso a la propiedad puede lanzar una excepción, incluya una subsección "Excepciones" que explique cada excepción; esto debe configurarse igual que la descrita para métodos y constructores anteriormente.

## Sintaxis de referencia de JavaScript

Las páginas de referencia de objetos integrados de JavaScript siguen las mismas reglas básicas que las páginas de referencia de API; por ejemplo, para métodos y propiedades. Hay algunas diferencias que puede observar:

- Para objetos integrados con un solo constructor, la sintaxis del constructor a menudo se incluye en la página de aterrizaje del objeto. Consulte {{JSxRef("Date")}} como ejemplo. Notará que los métodos estáticos (los que existen en el objeto `Date` mismo) se enumeran en "Métodos", mientras que los métodos de instancia se enumeran en "Métodos de Date.prototype".
- También notará que los métodos que no tienen parámetros/excepciones tienen más probabilidades de que esas subsecciones no se incluyan en las páginas de referencia de JavaScript. Consulte {{JSxRef("Date.getDate()")}} y {{JSxRef("Date.now()")}} como ejemplos.

## Sintaxis de referencia de CSS

### Propiedades

Las páginas de referencia de propiedades CSS incluyen una sección "Sintaxis", que solía encontrarse en la parte superior de la página pero cada vez se encuentra más comúnmente debajo de una sección que contiene un bloque de código que muestra el uso típico de la característica, más un ejemplo en vivo para ilustrar qué hace la característica (consulte {{CSSxRef("animation")}} como ejemplo).

> [!NOTE]
> Hacemos esto porque la sintaxis formal de CSS es compleja, no la usan muchos de los lectores de MDN y es desalentadora para principiantes. La sintaxis real y los ejemplos son más útiles para la mayoría de las personas.

Dentro de la sección de sintaxis encontrará los siguientes contenidos.

#### Texto de explicación opcional

Algunas propiedades CSS se explican por sí mismas y realmente no necesitan explicación adicional (por ejemplo {{CSSxRef("color")}}). Por otro lado, algunas son más complejas y necesitan explicación sobre el orden de la sintaxis, incluyendo múltiples valores, etc. (consulte {{CSSxRef("animation")}}). En tales casos, puede incluir una explicación adicional antes de cualquiera de las subsecciones.

#### Sección de valores

A continuación, debe incluir una sección "Valores"; esto contiene una lista de descripción que explica los tipos de valores CSS que componen el valor de la propiedad. Cada tipo de valor debe estar envuelto en corchetes angulares y vinculado a la página de referencia de MDN que cubre ese tipo de valor si existe una página para él. Por ejemplo, consulte la referencia de propiedad {{CSSxRef("border")}}; esta referencia tres tipos de valor, solo uno de los cuales está vinculado ({{CSSxRef("&lt;color&gt;")}}).

#### Sintaxis formal

La última sección, "Sintaxis formal", se genera automáticamente usando la macro `\{{CSSSyntax}}`. Esta macro obtiene datos de las especificaciones de CSS usando el paquete npm [@webref/css](https://www.npmjs.com/package/@webref/css). Para incluir la sintaxis formal en su documento:

1. Agregue un encabezado como: `## Sintaxis formal`.
2. Coloque la macro `\{{CSSSyntax}}` directamente debajo de este encabezado.

### Selectores

La sección "Sintaxis" de las páginas de referencia de selectores es mucho más simple que la de las páginas de propiedades. Contiene un bloque con el estilo "Cuadro de sintaxis", que muestra la sintaxis básica del selector, ya sea solo una palabra clave simple (por ejemplo, {{CSSxRef(":hover")}}) o un valor de función más complejo que toma un parámetro (por ejemplo, {{CSSxRef(":not", ":not()")}}). A veces el parámetro se explica en una entrada adicional dentro del bloque de sintaxis (consulte {{CSSxRef(":nth-last-of-type", ":nth-last-of-type()")}} para ver un ejemplo).

Este bloque se genera automáticamente desde los datos incluidos en el directorio CSS del [repositorio de datos de MDN](https://github.com/mdn/data). Solo necesita incluir una llamada a macro `CSSSyntax` debajo del título, y se encargará del resto.

La única complicación surge de asegurarse de que los datos que necesita estén presentes. El archivo [selectors.json](https://github.com/mdn/data/blob/main/css/selectors.json) necesita contener una entrada para el selector que está documentando.

Debe hacer esto bifurcando el [repositorio de datos de MDN](https://github.com/mdn/data), clonando su bifurcación localmente, haciendo los cambios en una nueva rama, y luego enviando una solicitud de extracción contra el repositorio ascendente. Puede [encontrar más detalles sobre el uso de Git aquí](/es/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).

## Sintaxis de referencia de HTML

Las páginas de referencia de HTML no tienen secciones de "Sintaxis"; la sintaxis siempre es solo el nombre del elemento rodeado de corchetes angulares, por lo que no se necesita. Lo principal que necesita saber sobre los elementos HTML es qué atributos toman y cuáles pueden ser sus valores, y esto se cubre en una sección separada "Atributos". Consulte {{htmlelement("ol")}} y {{htmlelement("video")}} como ejemplos.

## Sintaxis de referencia de HTTP

La sintaxis de referencia de HTTP se crea manualmente y difiere según el tipo de característica de HTTP que esté documentando.

### Cabeceras HTTP/Content-Security-Policy

La sintaxis de cabeceras HTTP (y Content-Security-Policy) se documenta en dos secciones separadas en la página: "Sintaxis" y "Directivas".

#### Sección de sintaxis

La sección "Sintaxis" muestra cómo será la sintaxis de una cabecera, usando un bloque de sintaxis con el estilo "Cuadro de sintaxis", que incluye sintaxis formal para mostrar exactamente qué directivas pueden incluirse en el valor, en qué orden, etc. Por ejemplo, el bloque de sintaxis de la cabecera {{HTTPHeader("If-None-Match")}} se ve así:

```http
If-None-Match: <etag_value>
If-None-Match: <etag_value>, <etag_value>, …
If-None-Match: *
```

Algunas cabeceras tendrán sintaxis separada de directiva de solicitud, directiva de respuesta y sintaxis de extensión. Si están disponibles, estas deben incluirse en bloques de sintaxis separados, cada uno bajo su propia subsección. Consulte {{HTTPHeader("Cache-Control")}} como ejemplo.

#### Sección de directivas

La sección "Directivas" contiene una lista de descripción que contiene los nombres y descripciones de todas las directivas que pueden aparecer dentro de la sintaxis.

### Métodos de solicitud HTTP

La sintaxis del método de solicitud es realmente simple, solo contiene un bloque de sintaxis con el estilo "Cuadro de sintaxis" que muestra cómo está estructurada la sintaxis del método. La sintaxis del [método GET](/es/docs/Web/HTTP/Reference/Methods/GET) se ve así:

```http
GET /index.html
```

### Códigos de estado de respuesta HTTP

Una vez más, la sintaxis de los códigos de estado de respuesta HTTP es realmente simple: un bloque de sintaxis que incluye el código y el nombre. Por ejemplo:

```http
404 Not Found
```

## Sintaxis de referencia de SVG

### Elementos SVG

Las secciones de sintaxis de elementos SVG son inexistentes, al igual que las secciones de sintaxis de elementos HTML. Cada página de referencia de elemento SVG solo incluye una lista de los atributos que pueden aplicarse a ese elemento. Consulte {{SVGElement("feTile")}} como ejemplo.

### Atributos SVG

Las páginas de referencia de atributos SVG tampoco incluyen secciones de sintaxis.

## Véase también

- [Markdown en MDN](/es/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#bloques_de_código_de_ejemplo)
