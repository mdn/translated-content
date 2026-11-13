---
title: Modelo de Objetos del Documento (DOM)
slug: Web/API/Document_Object_Model
l10n:
  sourceCommit: ca1468a4faabb0d62b0f08a723281a79dd8ceaf5
---

{{DefaultAPISidebar("DOM")}}

El **Modelo de Objetos del Documento** (**DOM**) conecta las páginas web con scripts o lenguajes de programación al representar en memoria la estructura de un documento (como el HTML que define una página web). Por lo general, se asocia con JavaScript, aunque modelar documentos HTML, SVG o XML como objetos no forma parte del núcleo del lenguaje JavaScript.

El DOM representa un documento como un árbol lógico. Cada rama del árbol termina en un nodo, y cada nodo contiene objetos. Los métodos del DOM permiten acceder al árbol de forma programática. Con ellos, puedes cambiar la estructura, el estilo o el contenido del documento.

Los nodos también pueden tener manejadores de eventos asociados. Cuando se dispara un evento, se ejecutan esos manejadores.

## Conceptos y uso

El Modelo de Objetos del Documento (DOM) es una interfaz de programación para documentos web.
Representa la página de modo que los programas puedan cambiar la estructura, el estilo y el contenido del documento.
El DOM representa el documento como nodos y objetos;
de esta forma, los lenguajes de programación pueden interactuar con la página.

Una página web es un documento que puede visualizarse en la ventana del navegador o como código fuente HTML. En ambos casos se trata del mismo documento, pero la representación mediante el Modelo de Objetos del Documento (DOM) permite manipularlo. Al ser una representación de la página web orientada a objetos, se puede modificar con un lenguaje de scripting, como JavaScript.

Por ejemplo, el DOM especifica que el método `querySelectorAll` de este fragmento de código debe devolver una lista con todos los elementos {{HTMLElement("p")}} del documento:

```js
const paragraphs = document.querySelectorAll("p");
// paragraphs[0] es el primer elemento <p>
// paragraphs[1] es el segundo elemento <p>, etc.
alert(paragraphs[0].nodeName);
```

Todas las propiedades, métodos y eventos disponibles para manipular y crear páginas web están organizados en objetos. Por ejemplo, el objeto `document`, que representa el propio documento, y los objetos `table`, que implementan la interfaz DOM {{domxref("HTMLTableElement")}} para acceder a las tablas HTML, son objetos, igual que todos los demás.

El DOM se construye con varias API que funcionan en conjunto.
El núcleo del DOM define las entidades
que describen cualquier documento y los objetos que contiene.
Esta estructura se amplía, según sea necesario, mediante otras API que añaden nuevas características y capacidades al DOM.
Por ejemplo, la [API DOM HTML](/es/docs/Web/API/HTML_DOM_API) añade al núcleo del DOM la capacidad de representar documentos HTML,
mientras que la API SVG añade la capacidad de representar documentos SVG.

### ¿Qué es un árbol DOM?

Un **árbol DOM** es una [estructura de árbol](https://en.wikipedia.org/wiki/Tree_structure) cuyos nodos representan el contenido de un documento HTML o XML. Cada documento HTML o XML tiene una representación en forma de árbol DOM. Por ejemplo, considera el siguiente documento:

```html
<html lang="es">
  <head>
    <title>Mi documento</title>
  </head>
  <body>
    <h1>Encabezado</h1>
    <p>Párrafo</p>
  </body>
</html>
```

Tiene un árbol DOM que se ve así:

![El DOM como representación en forma de árbol de un documento, con un elemento raíz y nodos que contienen el contenido](example-dom-tree.svg)

Aunque el árbol de arriba se parece al árbol DOM del documento anterior, no son idénticos, ya que el árbol DOM real conserva los [espacios en blanco](/es/docs/Web/CSS/Guides/Text/Whitespace).

Cuando un navegador web analiza un documento HTML, construye un árbol DOM y luego lo usa para mostrar el documento.

### DOM y JavaScript

El breve ejemplo anterior, como casi todos los ejemplos, es {{glossary("JavaScript")}}. Es decir, está _escrito_ en JavaScript, pero _usa_ el DOM para acceder al documento y a sus elementos. El DOM no es un lenguaje de programación, pero sin él, el lenguaje JavaScript no tendría ningún modelo ni noción de las páginas web, los documentos HTML, los documentos SVG ni sus componentes. El documento en su conjunto, la cabecera del documento, las tablas, los encabezados de tabla, el texto de las celdas y el resto de los elementos de un documento son partes del Modelo de Objetos del Documento de ese documento. Todos ellos se pueden consultar y manipular mediante el DOM y un lenguaje de scripting como JavaScript.

El DOM no forma parte del lenguaje JavaScript,
sino que es una API web que se usa para crear sitios web.
JavaScript también se puede usar en otros contextos.
Por ejemplo, Node.js ejecuta programas de JavaScript en un equipo,
pero ofrece un conjunto de API distinto,
y la API del DOM no forma parte del núcleo del entorno de ejecución de Node.js.

El DOM se diseñó para ser independiente de cualquier lenguaje de programación específico, lo que permite acceder a la representación estructural del documento a través de una API única y coherente.
Aunque la mayoría de los desarrolladores web solo utilicen el DOM a través de JavaScript, se pueden crear implementaciones del DOM para cualquier lenguaje, como demuestra este ejemplo en Python:

```python
# Ejemplo de DOM en Python
import xml.dom.minidom as m
doc = m.parse(r"C:\Projects\Py\chap1.xml")
doc.nodeName # propiedad DOM del objeto document
p_list = doc.getElementsByTagName("para")
```

Para más información sobre las tecnologías que intervienen al escribir JavaScript para la web, consulta la [Descripción general de las tecnologías de JavaScript](/es/docs/Web/JavaScript/Reference/JavaScript_technologies_overview).

### Acceso al DOM

No necesitas hacer nada especial para empezar a usar el DOM.
Usas la API directamente en JavaScript desde lo que se denomina un _script_, un programa que ejecuta el navegador.

Cuando creas un script, ya sea insertado directamente mediante un elemento `<script>` o incluido en la página web, puedes empezar a usar de inmediato la API de los objetos {{domxref("document")}} o {{domxref("Window", "window")}} para manipular el propio documento o cualquiera de los elementos de la página web (los elementos descendientes del documento). Tu programación con el DOM puede ser tan sencilla como el siguiente ejemplo, que muestra un mensaje en la consola mediante la función {{domxref("console/log_static", "console.log()")}}:

```html
<body onload="console.log('¡Bienvenido a mi página de inicio!');">
  …
</body>
```

Dado que, por lo general, no se recomienda mezclar la estructura de la página (escrita en HTML)
con la manipulación del DOM (escrita en JavaScript),
aquí las partes de JavaScript se agruparán
y se mantendrán separadas del HTML.

Por ejemplo, la siguiente función crea un nuevo elemento {{HTMLElement("Heading_Elements", "h1")}},
le añade texto y,
a continuación, lo incorpora al árbol del documento:

```html
<html lang="es">
  <head> </head>
  <body>
    <script>
      // crea un par de elementos en una página HTML que, por lo demás, está vacía
      const heading = document.createElement("h1");
      const headingText = document.createTextNode("¡Encabezado grande!");
      heading.appendChild(headingText);
      document.body.appendChild(heading);
    </script>
  </body>
</html>
```

## Interfaces DOM

Estas son todas las interfaces que define la especificación del DOM:

- {{DOMxRef("AbortController")}}
- {{DOMxRef("AbortSignal")}}
- {{DOMxRef("AbstractRange")}}
- {{DOMxRef("Attr")}}
- {{DOMxRef("CDATASection")}}
- {{DOMxRef("CharacterData")}}
- {{DOMxRef("Comment")}}
- {{DOMxRef("CustomEvent")}}
- {{DOMxRef("Document")}}
- {{DOMxRef("DocumentFragment")}}
- {{DOMxRef("DocumentType")}}
- {{DOMxRef("DOMError")}} {{Deprecated_Inline}}
- {{DOMxRef("DOMException")}}
- {{DOMxRef("DOMImplementation")}}
- {{DOMxRef("DOMParser")}}
- {{DOMxRef("DOMTokenList")}}
- {{DOMxRef("Element")}}
- {{DOMxRef("Event")}}
- {{DOMxRef("EventTarget")}}
- {{DOMxRef("HTMLCollection")}}
- {{DOMxRef("MutationObserver")}}
- {{DOMxRef("MutationRecord")}}
- {{DOMxRef("NamedNodeMap")}}
- {{DOMxRef("Node")}}
- {{DOMxRef("NodeIterator")}}
- {{DOMxRef("NodeList")}}
- {{DOMxRef("ProcessingInstruction")}}
- {{DOMxRef("QuotaExceededError")}}
- {{DOMxRef("Range")}}
- {{DOMxRef("ShadowRoot")}}
- {{DOMxRef("StaticRange")}}
- {{DOMxRef("Text")}}
- {{DOMxRef("TreeWalker")}}
- {{DOMxRef("XMLDocument")}}
- {{DOMxRef("XPathEvaluator")}}
- {{DOMxRef("XPathExpression")}}
- {{DOMxRef("XPathResult")}}
- {{DOMxRef("XSLTProcessor")}}

Esta guía trata de los objetos y de las _cosas_ concretas que puedes usar para manipular la jerarquía del DOM. Hay muchos puntos en los que entender cómo funcionan puede resultar confuso. Por ejemplo, el objeto que representa el elemento HTML `form` obtiene su propiedad `name` de la interfaz `HTMLFormElement`, pero su propiedad `className` de la interfaz `HTMLElement`. En ambos casos, la propiedad que buscas está en ese objeto form.

Sin embargo, la relación entre los objetos y las interfaces que implementan en el DOM puede resultar confusa, por lo que esta sección intenta explicar brevemente cuáles son las interfaces de la especificación del DOM y cómo se ponen a disposición.

### Interfaces y objetos

Muchos objetos implementan varias interfaces distintas. El objeto `table`, por ejemplo, implementa una interfaz especializada, {{domxref("HTMLTableElement")}}, que incluye métodos como `createCaption` e `insertRow`. Pero, como también es un elemento HTML, `table` implementa la interfaz `Element` descrita en el capítulo de referencia de {{domxref("Element")}} del DOM. Y, por último, dado que un elemento HTML es también, en lo que al DOM respecta, un nodo del árbol de nodos que forma el modelo de objetos de una página HTML o XML, el objeto `table` implementa asimismo la interfaz más básica `Node`, de la cual deriva `Element`.

Cuando obtienes una referencia a un objeto `table`, como en el siguiente ejemplo, usas habitualmente las tres interfaces de forma indistinta sobre el objeto, quizá sin darte cuenta.

```js
const table = document.getElementById("table");
const tableAttrs = table.attributes; // interfaz Node/Element
for (const attr of tableAttrs) {
  // interfaz HTMLTableElement: atributo border
  if (attr.nodeName.toLowerCase() === "border") {
    table.border = "1";
  }
}
// interfaz HTMLTableElement: atributo summary
table.summary = "nota: borde aumentado";
```

### Tipos de datos fundamentales

Esta página intenta describir los distintos objetos y tipos en términos sencillos. Sin embargo, la API maneja varios tipos de datos que conviene conocer.

> [!NOTE]
> Como la gran mayoría del código que usa el DOM se centra en la manipulación de documentos HTML, es habitual referirse a los nodos del DOM como **elementos**, aunque, en sentido estricto, no todos los nodos son elementos.

La siguiente tabla describe brevemente estos tipos de datos.

<table class="standard-table">
  <thead>
    <tr>
      <th>Tipo de datos (interfaz)</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{domxref("Document")}}</td>
      <td>
        Cuando un miembro devuelve un objeto de tipo <code>document</code> (por
        ejemplo, la propiedad <code>ownerDocument</code> de un elemento
        devuelve el <code>document</code> al que pertenece), ese objeto es el
        propio objeto raíz <code>document</code>. El capítulo
        <a href="/es/docs/Web/API/Document">Referencia de <code>document</code> del DOM</a>
        describe el objeto <code>document</code>.
      </td>
    </tr>
    <tr>
      <td>{{domxref("Node")}}</td>
      <td>
        Todos los objetos que hay dentro de un documento son nodos de algún
        tipo. En un documento HTML, un objeto puede ser un nodo de elemento,
        pero también un nodo de texto o un nodo de atributo.
      </td>
    </tr>
    <tr>
      <td>{{domxref("Element")}}</td>
      <td>
        El tipo <code>element</code> se basa en <code>node</code>. Se refiere a
        un elemento, o a un nodo de tipo <code>element</code>, devuelto por un
        miembro de la API del DOM. En lugar de decir, por ejemplo, que el
        método {{domxref("document.createElement()")}} devuelve una referencia
        a un objeto <code>node</code>, simplemente decimos que este método
        devuelve el <code>element</code> que se acaba de crear en el DOM. Los
        objetos <code>element</code> implementan la interfaz
        <code>Element</code> del DOM y también la interfaz <code>Node</code>,
        más básica; ambas se incluyen juntas en esta referencia. En un
        documento HTML, los elementos cuentan además con las características
        de la interfaz {{domxref("HTMLElement")}} de la API DOM HTML y con
        otras interfaces que describen las capacidades de determinados tipos de
        elementos (por ejemplo, {{domxref("HTMLTableElement")}} para los
        elementos {{HTMLElement("table")}}).
      </td>
    </tr>
    <tr>
      <td>{{domxref("Attr")}}</td>
      <td>
        Cuando un miembro devuelve un <code>attribute</code> (por ejemplo, el
        método <code>createAttribute()</code>), se obtiene una referencia a un
        objeto que expone una interfaz especial (aunque pequeña) para
        atributos. Los atributos son nodos en el DOM, igual que los elementos,
        aunque rara vez los usarás como tales.
      </td>
    </tr>
  </tbody>
</table>

También conviene tener en cuenta algunas cuestiones habituales de terminología. Por ejemplo, es común llamar `attribute` a cualquier nodo {{domxref("Attr")}} y `nodeList` a un array de nodos del DOM. Estos y otros términos se presentan y se usan a lo largo de toda la documentación.

Los objetos `document` y `window` son aquellos cuyas interfaces se usan con más frecuencia en la programación con el DOM. En términos sencillos, el objeto `window` representa algo parecido al navegador, y el objeto `document` es la raíz del propio documento. `Element` hereda de la interfaz genérica `Node`, y entre las dos ofrecen muchos de los métodos y propiedades que usas en cada elemento. Estos elementos también pueden tener interfaces específicas para manejar el tipo de datos que contienen, como en el ejemplo del objeto `table` de la sección anterior.

### Interfaces DOM obsoletas

El Modelo de Objetos del Documento se ha simplificado mucho. Para lograrlo, se han eliminado las siguientes interfaces de las distintas especificaciones DOM de nivel 3 o anteriores. Ya no están disponibles para los desarrolladores web.

- `DOMConfiguration`
- `DOMErrorHandler`
- `DOMImplementationList`
- `DOMImplementationRegistry`
- `DOMImplementationSource`
- `DOMLocator`
- `DOMObject`
- `DOMSettableTokenList`
- `DOMUserData`
- `ElementTraversal`
- `Entity`
- `EntityReference`
- `NameList`
- `Notation`
- `TypeInfo`
- `UserDataHandler`

## DOM HTML

Un documento que contiene HTML se describe mediante la interfaz {{DOMxRef("Document")}}, que la especificación de HTML extiende para incluir varias características específicas de HTML. En particular, la interfaz {{domxref("Element")}} se especializa en {{domxref("HTMLElement")}} y en varias subclases, cada una de las cuales representa un elemento concreto (o una familia de elementos estrechamente relacionados).

La API DOM HTML da acceso a diversas características del navegador, como las pestañas y ventanas, los estilos y hojas de estilo CSS, el historial de navegación, etc. Estas interfaces se tratan con más detalle en la documentación de la [API DOM HTML](/es/docs/Web/API/HTML_DOM_API).

## DOM SVG

Del mismo modo, un documento que contiene SVG también se describe mediante la interfaz {{DOMxRef("Document")}}, que la especificación de SVG extiende para incluir varias características específicas de SVG. En particular, la interfaz {{domxref("Element")}} se especializa en {{domxref("SVGElement")}} y en varias subclases, cada una de las cuales representa un elemento o una familia de elementos estrechamente relacionados. Estas interfaces se tratan con más detalle en la documentación de la [API SVG](/es/docs/Web/API/SVG_API).

## Ejemplos

### Establecer el contenido de texto

Este ejemplo usa un elemento {{HTMLElement("div")}} que contiene un {{HTMLElement("textarea")}} y dos elementos {{HTMLElement("button")}}. Cuando el usuario hace clic en el primer botón, se establece un texto en el `<textarea>`. Cuando el usuario hace clic en el segundo botón, se borra el texto. Usamos:

- {{domxref("Document.querySelector()")}} para acceder al `<textarea>` y al botón.
- {{domxref("EventTarget.addEventListener()")}} para detectar los clics de los botones.
- {{domxref("Node.textContent")}} para establecer y borrar el texto.

#### HTML

```html
<div class="container">
  <textarea class="story"></textarea>
  <button id="set-text" type="button">Establecer texto</button>
  <button id="clear-text" type="button">Borrar texto</button>
</div>
```

#### CSS

```css
.container {
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
}

button {
  width: 200px;
}
```

#### JavaScript

```js
const story = document.querySelector(".story");

const setText = document.querySelector("#set-text");
setText.addEventListener("click", () => {
  story.textContent = "Era una noche oscura y tormentosa...";
});

const clearText = document.querySelector("#clear-text");
clearText.addEventListener("click", () => {
  story.textContent = "";
});
```

#### Resultado

{{EmbedLiveSample("Establecer el contenido de texto", "", "150px")}}

### Añadir un elemento hijo

Este ejemplo usa un elemento {{HTMLElement("div")}} que contiene otro {{HTMLElement("div")}} y dos elementos {{HTMLElement("button")}}. Cuando el usuario hace clic en el primer botón, se crea un elemento nuevo y se añade como hijo del `<div>`. Cuando el usuario hace clic en el segundo botón, se elimina el elemento hijo. Usamos:

- {{domxref("Document.querySelector()")}} para acceder al `<div>` y a los botones.
- {{domxref("EventTarget.addEventListener()")}} para detectar los clics de los botones.
- {{domxref("Document.createElement")}} para crear el elemento.
- {{domxref("Node.appendChild()")}} para añadir el hijo.
- {{domxref("Node.removeChild()")}} para eliminar el hijo.

#### HTML

```html
<div class="container">
  <div class="parent">padre</div>
  <button id="add-child" type="button">Añadir un hijo</button>
  <button id="remove-child" type="button">Eliminar el hijo</button>
</div>
```

#### CSS

```css
.container {
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
}

button {
  width: 100px;
}

div.parent {
  border: 1px solid black;
  padding: 5px;
  width: 100px;
  height: 100px;
}

div.child {
  border: 1px solid red;
  margin: 10px;
  padding: 5px;
  width: 80px;
  height: 60px;
  box-sizing: border-box;
}
```

#### JavaScript

```js
const parent = document.querySelector(".parent");

const addChild = document.querySelector("#add-child");
addChild.addEventListener("click", () => {
  // Añade un elemento hijo solo si aún no existe ninguno
  // además del nodo de texto "padre"
  if (parent.childNodes.length > 1) {
    return;
  }
  const child = document.createElement("div");
  child.classList.add("child");
  child.textContent = "hijo";
  parent.appendChild(child);
});

const removeChild = document.querySelector("#remove-child");
removeChild.addEventListener("click", () => {
  const child = document.querySelector(".child");
  parent.removeChild(child);
});
```

#### Resultado

{{EmbedLiveSample("Añadir un elemento hijo", "", "180px")}}

### Lectura y modificación del árbol

Supongamos que queremos cambiar el encabezado del documento de [¿Qué es un árbol DOM?](#¿qué_es_un_árbol_dom) y escribir dos párrafos en lugar de uno. El siguiente script lo conseguiría:

#### HTML

```html
<html lang="es">
  <head>
    <title>Mi documento</title>
  </head>
  <body>
    <input type="button" value="Cambiar este documento." />
    <h2>Encabezado</h2>
    <p>Párrafo</p>
  </body>
</html>
```

#### JavaScript

```js
document.querySelector("input").addEventListener("click", () => {
  // document.getElementsByTagName("h2") devuelve una NodeList con los elementos
  // <h2> del documento, y el primero es el número 0:
  const header = document.getElementsByTagName("h2").item(0);

  // El firstChild del encabezado es un nodo Text:
  header.firstChild.data = "Un documento dinámico";

  // Ahora header es "Un documento dinámico".

  // Accede al primer párrafo
  const para = document.getElementsByTagName("p").item(0);
  para.firstChild.data = "Este es el primer párrafo.";

  // Crea un nuevo nodo Text para el segundo párrafo
  const newText = document.createTextNode("Este es el segundo párrafo.");

  // Crea un nuevo Element que será el segundo párrafo
  const newElement = document.createElement("p");

  // Coloca el texto en el párrafo
  newElement.appendChild(newText);

  // Coloca el párrafo al final del documento añadiéndolo al
  // body (que es el padre de para)
  para.parentNode.appendChild(newElement);
});
```

{{ EmbedLiveSample('lectura_y_modificación_del_árbol', 800, 300) }}

### Crear un árbol

También puedes crear el árbol de [¿Qué es un árbol DOM?](#¿qué_es_un_árbol_dom) completamente en JavaScript.

```js
const root = document.createElement("html");
root.lang = "es";

const head = document.createElement("head");
const title = document.createElement("title");
title.appendChild(document.createTextNode("Mi documento"));
head.appendChild(title);

const body = document.createElement("body");
const header = document.createElement("h1");
header.appendChild(document.createTextNode("Encabezado"));
const paragraph = document.createElement("p");
paragraph.appendChild(document.createTextNode("Párrafo"));
body.appendChild(header);
body.appendChild(paragraph);

root.appendChild(head);
root.appendChild(body);
```

### Propagación de eventos

Este ejemplo muestra, de forma muy sencilla, cómo se disparan y se manejan los eventos en el DOM. Cuando se carga el BODY de este documento HTML, se registra un detector de eventos en la fila superior de la TABLE. El detector de eventos procesa el evento ejecutando la función stopEvent, que cambia el valor de la celda inferior de la tabla.

Sin embargo, stopEvent también llama a un método del objeto de evento, {{domxref("event.stopPropagation")}}, que impide que el evento siga propagándose hacia arriba en el DOM. Ten en cuenta que la propia tabla tiene un manejador de eventos {{domxref("Element.click_event","onclick")}} que debería mostrar un mensaje cuando se hace clic en la tabla. Pero el método stopEvent ha detenido la propagación, así que, una vez actualizados los datos de la tabla, la fase del evento termina de hecho y se muestra un cuadro de alerta para confirmarlo.

```html
<table id="t-daddy">
  <tbody>
    <tr id="tbl1">
      <td id="c1">uno</td>
    </tr>
    <tr>
      <td id="c2">dos</td>
    </tr>
  </tbody>
</table>
```

```css
#t-daddy {
  border: 1px solid red;
}

#c1 {
  background-color: pink;
}
```

```js
function stopEvent(event) {
  const c2 = document.getElementById("c2");
  c2.textContent = "hola";

  // esto debería impedir que t-daddy reciba el clic.
  event.stopPropagation();
  console.log("propagación del evento detenida.");
}

const elem = document.getElementById("tbl1");
elem.addEventListener("click", stopEvent);

document.getElementById("t-daddy").addEventListener("click", () => {
  console.log("clic en t-daddy");
});
```

{{EmbedLiveSample("Propagación de eventos", "", "300")}}

### Mostrar las propiedades del objeto de evento

Este ejemplo usa métodos del DOM para mostrar, en una tabla, todas las propiedades del objeto de evento {{domxref("Element.click_event", "click")}} y sus valores. También muestra una técnica útil: usar un bucle [`for...in`](/es/docs/Web/JavaScript/Reference/Statements/for...in) para recorrer las propiedades de un objeto y obtener sus valores.

Las propiedades de los objetos de evento varían mucho de un navegador a otro. El [WHATWG DOM Standard](https://dom.spec.whatwg.org/) enumera las propiedades estándar, aunque muchos navegadores las han ampliado considerablemente.

Copia el siguiente código en un archivo de texto en blanco y ábrelo en varios navegadores: te sorprenderá la diferencia en el número y los nombres de las propiedades. También puedes añadir algunos elementos a la página y llamar a esta función desde distintos manejadores de eventos.

```html
<h1>Propiedades del objeto de evento del DOM <span id="eventType"></span></h1>
```

```css
table {
  border-collapse: collapse;
  margin-top: 2em;
}
thead {
  font-weight: bold;
}
td {
  padding: 2px 10px;
}

.odd {
  background-color: #efdfef;
}
.even {
  background-color: white;
}
```

```js
function showEventProperties(event) {
  function addCell(row, text) {
    const cell = row.insertCell(-1);
    cell.appendChild(document.createTextNode(text));
  }

  document.getElementById("eventType").textContent = event.type;

  const table = document.createElement("table");
  const thead = table.createTHead();
  let row = thead.insertRow(-1);
  const labelList = ["#", "Propiedad", "Valor"];
  const len = labelList.length;

  for (let i = 0; i < len; i++) {
    addCell(row, labelList[i]);
  }

  const tbody = document.createElement("tbody");
  table.appendChild(tbody);

  for (const p in event) {
    row = tbody.insertRow(-1);
    row.className = row.rowIndex % 2 ? "odd" : "even";
    addCell(row, row.rowIndex);
    addCell(row, p);
    addCell(row, event[p]);
  }

  document.body.appendChild(table);
}

window.addEventListener("click", showEventProperties);
```

{{EmbedLiveSample("Mostrar las propiedades del objeto de evento", "", "300")}}

## Especificaciones

{{Specifications}}

## Véase también

- [Modelo de Objetos de CSS (CSSOM)](/es/docs/Web/API/CSS_Object_Model)
- [API DOM HTML](/es/docs/Web/API/HTML_DOM_API)
- [API SVG](/es/docs/Web/API/SVG_API)
