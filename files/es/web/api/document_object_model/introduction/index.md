---
title: Introducción
slug: Web/API/Document_Object_Model/Introduction
---

Ésta sección da una breve introducción conceptual del [DOM](/es/DOM): qué es, cómo proporciona la estructura para los documentos [HTML](/es/HTML) y [XML](/es/XML), cómo se accede a él, y cómo esta ["API"](https://es.wikipedia.org/wiki/Interfaz_de_programaci%C3%B3n_de_aplicaciones) presenta la información de referencia y ejemplos.

## ¿Qué es el DOM?

El modelo de objeto de documento (DOM) es una interfaz de programación para los documentos HTML y XML. Facilita una representación estructurada del documento y define de qué manera los programas pueden acceder, al fin de modificar, tanto su estructura, estilo y contenido. El DOM da una representación del documento como un grupo de nodos y objetos estructurados que tienen propiedades y métodos. Esencialmente, conecta las páginas web a scripts o lenguajes de programación.

Una página web es un documento. Éste documento puede exhibirse en la ventana de un navegador o también como código fuente HTML. Pero, en los dos casos, es el mismo documento. El modelo de objeto de documento (DOM) proporciona otras formas de presentar, guardar y manipular este mismo documento. El DOM es una representación completamente orientada al objeto de la página web y puede ser modificado con un lenguaje de script como JavaScript.

El [W3C DOM](http://www.w3.org/DOM/) estándar forma la base del funcionamiento del DOM en muchos navegadores modernos. Varios navegadores ofrecen extensiones más allá del estándar W3C, hay que ir con extremo cuidado al utilizarlas en la web, ya que los documentos pueden ser consultados por navegadores que tienen DOMs diferentes.

Por ejemplo, el DOM de W3C especifica que el método `getElementsByTagName` en el código de abajo debe devolver una lista de todos los elementos `<p>` del documento:

```js
paragraphs = document.getElementsByTagName("p");
// paragraphs[0] es el primer elemento <p>
// paragraphs[1] es el segundo elemento <p>, etc.
alert(paragraphs[0].nodeName);
```

Todas las propiedades, métodos y eventos disponibles para la manipulación y la creación de páginas web está organizado dentro de objetos. Un ejemplo: el objeto `document` representa al documento mismo, el objeto `table` hace funcionar la interfaz especial `HTMLTableElement` del DOM para acceder a tablas HTML, y así sucesivamente. Ésta documentación procura una relación objeto-por-objeto del DOM que funciona con los navegadores basados en Gecko.

## DOM y JavaScript

El ejemplo corto de abajo, como casi todos los ejemplos de esta referencia, es [JavaScript](/es/JavaScript). Es decir, es _escrito_ en JavaScript pero _utiliza_ el DOM para acceder al documento y a sus elementos. El DOM no es un lenguaje de programación pero sin él, el lenguaje JavaScript no tiene ningún modelo o noción de las páginas web, de la páginas XML ni de los elementos con los cuales es usualmente relacionado. Cada elemento -"el documento íntegro, el título, las tablas dentro del documento, los títulos de las tablas, el texto dentro de las celdas de las tablas"- es parte del modelo de objeto del documento para cada documento, así se puede acceder y manipularlos utilizando el DOM y un lenguaje de escritura, como JavaScript.

En el comienzo, JavaScript y el DOM estaban herméticamente enlazados, pero después se desarrollaron como entidades separadas. El contenido de la página es almacenado en DOM y el acceso y la manipulación se hace vía JavaScript, podría representarse aproximadamente así:

API(web o página XML) = DOM + JS(lenguaje de script)

El DOM fue diseñado para ser independiente de cualquier lenguaje de programación particular, hace que la presentación estructural del documento sea disponible desde un simple y consistente API. Aunque en este manual nos centramos exclusivamente en JavaScript, la directrices del DOM pueden construirse para cualquier lenguaje, así lo demuestra el siguiente ejemplo de Python:

```python
# Ejemplo DOM de Python
import xml.dom.minidom as m
doc = m.parse("C:\\Projects\\Py\\chap1.xml");
doc.nodeName # Propiedad DOM del objeto document;
p_list = doc.getElementsByTagName("para");
```

## ¿Cómo se accede al DOM?

No se tiene que hacer nada especial para empezar a utilizar el DOM. Los diferentes navegadores tienen directrices DOM distintas, y éstas directrices tienen diversos grados de conformidad al actual estándar DOM (un tema que se intenta evitar en este manual), pero todos los navegadores web usan el modelo de objeto de documento para hacer accesibles las páginas web al script.

Cuando se crea un script –esté en un elemento `<SCRIPT>` o incluido en una página web por la instrucción de cargar un script– inmediatamente está disponible para usarlo con el API, accediendo así a los elementos [`document`](/es/DOM/document) o [`window`](/es/DOM/window), para manipular el documento mismo o sus diferentes partes, las cuales son los varios elementos de una página web. La programación DOM hace algo tan simple como lo siguiente, lo cual abre un mensaje de alerta usando la función [`alert()`](/es/DOM/window.alert) desde el objeto [`window`](/es/DOM/window), o permite métodos DOM más sofisticados para crear realmente un nuevo contenido, como en el largo ejemplo de más abajo.

```html
<body onload="window.alert('Bienvenido a mi página!');"></body>
```

Aparte del elemento `<script>` en el cual JavaScript es definido, el ejemplo siguiente muestra la función a ejecutar cuando el documento se está cargando (y que el DOM completo es disponible para su uso). Esta función crea un nuevo elemento `H1`, le pone texto y después lo agrega al árbol del documento:

```html
<html>
  <head>
    <script>
      // ejecuta esta función cuando se cargue el documento
      window.onload = function () {
        // crea dinámicamente un par de elementos HTML en una página vacia
        var heading = document.createElement("h1");
        var heading_text = document.createTextNode("el texto que desee");
        heading.appendChild(heading_text);
        document.body.appendChild(heading);
      };
    </script>
  </head>
  <body></body>
</html>
```

## Tipos de datos importantes

Esta parte intenta describir, de la manera más simple posible, los diferentes objetos y tipos. Pero hay que conocer una cantidad de tipos de datos diferentes que son utilizados por el API. Para simplificarlo, los ejemplos de sintaxis en esta API se refieren a nodos como `elements`, a una lista de nodos como `nodeLists` (o simples `elementos`) y a nodos de `atributo` como `attributes`.

La siguiente tabla describe brevemente estos tipos de datos.

<table>
  <tbody>
    <tr>
    <td><code>document</code></td>
    <td>Cuando un miembro devuelve un objeto del tipo <code>document</code> (por ejemplo, la propiedad <strong>ownerDocument</strong> de un elemento devuelve el documento "<code>document</code>" al cual pertenece), este objeto es la raíz del objeto documento en sí mismo. El capítulo <a href="es/DOM/documento">La referencia al documento (<code>document</code>) de DOM</a> lo explica con más detalles.</td>
    </tr>
    <tr>
    <td><code>element</code></td>
    <td><code>element</code> se refiere a un elemento o a un nodo de tipo de elemento "<code>element</code>" devuelto por un miembro del API de DOM. Dicho de otra manera, por ejemplo, el método <code>document.createElement()</code> devuelve un objeto referido a un <code>nodo</code>, lo que significa que este método devuelve el elemento que acaba de ser creado en el DOM. Los objetos <code>element</code> ponen en funcionamiento a la interfaz <code>Element</code> del DOM y también a la interfaz de nodo "<code>Node</code>" más básica, las cuales son incluidas en esta referencia.</td>
    </tr>
    <tr>
    <td><code>nodeList</code></td>
    <td>Una "<code>nodeList</code>" es una serie de elementos, parecido a lo que devuelve el método <code>document.getElementsByTagName()</code>. Se accede a los items de la <code>nodeList</code> de cualquiera de las siguientes dos formas:
      <ul>
      <li>list.item (1)</li>
      <li>lista [1]</li>
      </ul>
      <p>Ambas maneras son equivalentes. En la primera, <strong>item()</strong> es el método del objeto <code>nodeList</code>. En la última se utiliza la típica sintaxis de acceso a listas para llegar al segundo ítem de la lista.</p>
    </td>
    </tr>
    <tr>
    <td><code>attribute</code></td>
    <td>Cuando un atributo ("<code>attribute</code>") es devuelto por un miembro (por ej., por el método <strong>createAttribute()</strong>), es una referencia a un objeto que expone una interfaz particular (aunque limitada) a los atributos. Los atributos son nodos en el DOM igual que los elementos, pero no suelen usarse así.</td>
    </tr>
    <tr>
    <td><code>NamedNodeMap</code></td>
    <td>Un <code>namedNodeMap</code> es una serie, pero los ítems son accesibles tanto por el nombre o por un índice, este último caso es meramente una conveniencia para enumerar ya que no están en ningún orden en particular en la lista. Un <code>NamedNodeMap</code> es un método de ítem() por esa razón, y permite poner o quitar ítems en un <code>NamedNodeMap</code></td>
    </tr>
  </tbody>
</table>

## Interfaces del DOM

Uno de los propósitos de esta guía es minimizar el hablar de interfaces abstractas, heredadas y otros detalles de funcionamiento. Más bien, concentrarse sobre los objetos en el DOM y sobre las actuales _cosas_ que se pueden usar para manipular la jerarquía de DOM. Desde el punto de vista del programador web, es bastante indiferente saber que la representación del objeto del elemento `HTML form` toma la propidedad **name** desde la interfaz `HTMLFormElement` pero que las propiedades `className`se toman desde la propia interfaz `HTMLElement`. En ambos casos, la propiedad está sólo en el objeto `form`.

Pero puede resultar confuso el funcionamiento de la fuerte relación entre objetos e interfaces en el DOM, por eso esta sección intentará hablar un poquito sobre las interfaces actuales en la especificación del DOM y de como se dispone de ellas.

## Interfaces y objetos

En algunos casos un objeto pone en ejecución a una sola interfaz. Pero a menudo un objeto toma prestada una tabla HTML (`table`) desde muchas interfaces diversas. El objeto table, por ejemplo, pone en funcionamiento una [Interfaz especial del elemento table HTML](/es/DOM/tabla), la cual incluye métodos como `createCaption` y `insertRow`. Pero como también es un elemento HTML, table pone en marcha a la interfaz del `Element` descrita en el capítulo [La referencia al elemento del DOM](/es/Referencia_DOM_de_Gecko/elemento). Y finalmente, puesto que un elemento HTML es también, por lo que concierna al DOM, un nodo en el árbol de nodos que hace el modelo de objeto para una página web o XML, el elemento de table hace funcionar la interfaz más básica de `Node`, desde el cual deriva `Element`.

La referencia a un objeto `table`, como en el ejemplo siguiente, utiliza estas interfaces intercambiables sobre el objeto.

```js
var table = document.getElementById("table");
var tableAttrs = table.attributes; // Node/interfaz Element
for (var i = 0; i < tableAttrs.length; i++) {
  // interfaz HTMLTableElement: atributo border
  if (tableAttrs[i].nodeName.toLowerCase() == "border") table.border = "1";
}
// interfaz HTMLTableElement: atributo summary
table.summary = "nota: borde aumentado";
```

## Interfaces esenciales en el DOM

Esta sección lista las interfaces más comúnmente utilizadas en el DOM. La idea no es describir qué hacen estas APIs pero sí dar una idea de las clases de métodos y propiedades que se encuentran con el uso del DOM. Muchos ejemplos de uso común de esta API se encuentran en el capítulo [Ejemplos DOM](/es/Referencia_DOM_de_Gecko/Ejemplos) al final de este manual.

`document` y `window` son objetos cuya interfaces son generalmente muy usadas en la programación de DOM. En término simple, el objeto `window` representa algo como podría ser el navegador, y el objeto `document` es la raíz del documento en sí. `Element` hereda de la interfaz genérica `Node`, y juntos, estas dos interfaces proporcionan muchos métodos y propiedades utilizables sobre los elementos individuales. Éstos elementos pueden igualmente tener interfaces específicas según el tipo de datos representados, como en el ejemplo anterior del objeto `table`. Lo siguiente es una breve lista de los APIS comunes en la web y en las páginas escritas en XML utilizando el DOM.

- `document.getElementById(id)`
- `element.getElementsByTagName(name)`
- `document.createElement(name)`
- `parentNode.appendChild(node)`
- `element.innerHTML`
- `element.style.left`
- `element.setAttribute`
- `element.element.getAttribute`
- `element.addEventListener`
- [`window.content`](/es/DOM/window.content)
- [`window.onload`](/es/DOM/window.onload)
- [`window.dump`](/es/DOM/window.dump)
- [`window.scrollTo`](/es/DOM/window.scrollTo)

## Probando el API del DOM

Ésta parte procura ejemplos para todas las interfaces usadas en el desarrollo web. En algunos casos, los ejemplos son páginas HTML enteras, con el acceso del DOM a un elemento de \<script>, la interfaz necesaria (por ejemplo, botones) para la ejecución del script en un formulario, y también que los elementos HTML sobre los cuales opera el DOM se listen. Según el caso, los ejemplos se pueden copiar y pegar en un documento web para probarlos.

No es el caso donde los ejemplos son muchos más concisos. Para la ejecución de estos ejemplos que sólo demuestran la relación básica entre la interfaz y los elementos HTML, resulta útil tener una página de prueba en la cual las interfaces serán fácilmente accesibles por los scripts. La muy simple página siguiente proporciona en las cabeceras un elemento de script en el cual se pondrán las funciones para testar la interfaz elegida, algunos elementos HTML con atributos que se puedan leer, editar y también manipular, así como la interfaz web necesaria para llamar esas funciones desde el navegador.

Para probar y ver como trabajan en la plataforma del navegador las interfaces del DOM, esta página de prueba o una nueva similar son factibles. El contenido de la función `test()` se puede actualizar según la necesidad, para crear más botones o poner más elementos.

```html
<html>
  <head>
    <title>Pruebas DOM</title>
    <script type="application/javascript">
      function setBodyAttr(attr, value) {
        if (document.body) eval("document.body." + attr + '="' + value + '"');
        else notSupported();
      }
    </script>
  </head>
  <body>
    <div style="margin: .5in; height: 400;">
      <p>
        <b><tt>texto</tt></b>
      </p>
      <form>
        <select
          onChange="setBodyAttr('text',
        this.options[this.selectedIndex].value);">
          <option value="black">negro</option>
          <option value="darkblue">azul oscuro</option>
        </select>
        <p>
          <b><tt>bgColor</tt></b>
        </p>
        <select
          onChange="setBodyAttr('bgColor',
        this.options[this.selectedIndex].value);">
          <option value="white">blanco</option>
          <option value="lightgrey">gris</option>
        </select>
        <p>
          <b><tt>link</tt></b>
        </p>
        <select
          onChange="setBodyAttr('link',
        this.options[this.selectedIndex].value);">
          <option value="blue">azul</option>
          <option value="green">verde</option>
        </select>
        <small>
          <a href="http://www.brownhen.com/dom_api_top.html" id="sample">
            (sample link)</a
          ></small
        ><br />
      </form>
      <form>
        <input type="button" value="version" onclick="ver()" />
      </form>
    </div>
  </body>
</html>
```

La creación de una página de prueba con una paleta de botones, campos de texto u otros elementos HTML, permitirá testar una gran cantidad de interfaces en un mismo documento, por ejemplo una serie de propiedades que afectan a los colores de una página web. Lo siguiente permite hacerse una idea de como pueden agruparse las interfaces para probarlas.

Figura 0.1 Muestra DOM página de prueba

![](dom_ref_introduction_to_the_dom.gif)

En este ejemplo, los menúes desplegables actualizan dinámicamente los aspectos de la página web accesibles al DOM como el color de fondo (`bgColor`), de los hiper-enlaces (`aLink`), y el del texto (`text`). El hecho de diseñar páginas, testar las interfaces que se encuentren a lo largo de la lectura son una parte importante del aprendizaje para una utilización eficaz del DOM.

## Otros enlaces

- [Referencia DOM](/es/docs/Web/API/Document_Object_Model)
- [Introducción al DOM](/es/docs/Web/API/Document_Object_Model/Introduction)
- [Eventos y el DOM](/es/docs/Web/API/Document_Object_Model/Events)
- [Ejemplos](/es/docs/Web/API/Document_Object_Model/Examples)
