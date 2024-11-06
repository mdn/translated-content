---
title: Uso del modelo de objetos del documento
slug: Web/API/Document_Object_Model/Using_the_Document_Object_Model
---

{{DefaultAPISidebar("DOM")}}

El _Modelo de Objetos del Documento_ (DOM, por sus siglas en inglés) es una API para manipular árboles DOM de documentos HTML y XML (entre otros documentos en forma de árbol). Esta API está en la raíz de la descripción de una página y sirve como base para la creación de aplicaciones en la web.

## ¿Qué es un árbol DOM?

Un **árbol DOM** es una [estructura de árbol](https://en.wikipedia.org/wiki/Tree_structure) cuyos nodos representan el contenido de un documento HTML o XML. Cada documento HTML o XML tiene una representación de árbol DOM. Por ejemplo, considere el siguiente documento:

```html
<html lang="en">
  <head>
    <title>My Document</title>
  </head>
  <body>
    <h1>Header</h1>
    <p>Paragraph</p>
  </body>
</html>
```

Tiene un árbol DOM que se ve así:

![El DOM como una representación en forma de árbol de un documento que tiene una raíz y elementos de nodo que contienen contenido](using_the_w3c_dom_level_1_core-doctree.jpg)

Aunque el árbol anterior es similar al árbol DOM del documento anterior, no es idéntico, ya que [el árbol DOM real conserva los espacios en blanco](/es/docs/Web/API/Document_Object_Model/Whitespace).

Cuando un navegador web analiza un documento HTML, crea un árbol DOM y luego lo usa para mostrar el documento.

## ¿Qué hace la API de documentos?

La API de documentos, también llamada a veces API DOM, le permite modificar un árbol DOM _de la forma que desee_. Le permite crear cualquier documento HTML o XML desde cero o cambiar cualquier contenido de un documento HTML o XML determinado. Los autores de páginas web pueden editar el DOM de un documento usando JavaScript para acceder a la propiedad `document` del objeto global. Este objeto `document` implementa la interfaz {{domxref("Document")}}.

## Un ejemplo sencillo

Supongamos que el autor quiere cambiar el encabezado del documento anterior y escribir dos párrafos en lugar de uno. El siguiente script haría el trabajo:

### HTML

```html
<html lang="en">
  <head>
    <title>My Document</title>
  </head>
  <body>
    <input type="button" value="Cambiar este documento." onclick="change()" />
    <h2>Header</h2>
    <p>Paragraph</p>
  </body>
</html>
```

### JavaScript

```js
function change() {
  // document.getElementsByTagName("h2") devuelve un NodeList de los elementos
  // <h2> en el documento, el primero es el numero 0:
  const header = document.getElementsByTagName("h2").item(0);

  // El primer hijo del encabezado es un nodo de texto:
  header.firstChild.data = "Un documento dinámico";

  // Ahora el encabezado es "Un documento dinámico".

  // Accede al primer párrafo
  const para = document.getElementsByTagName("p").item(0);
  para.firstChild.data = "Este es el primer párrafo.";

  // Crear un nuevo nodo Texto para el segundo párrafo
  const newText = document.createTextNode("Éste es el segundo párrafo.");

  // Crea un nuevo elemento para que sea el segundo párrafo.
  const newElement = document.createElement("p");

  // Poner el texto en el párrafo.
  newElement.appendChild(newText);

  // Coloque el párrafo al final del documento agregándolo al cuerpo
  // (que es el padre de para)
  para.parentNode.appendChild(newElement);
}
```

{{ EmbedLiveSample('Un_ejemplo_sencillo', 800, 300) }}

## ¿Cómo puedo aprender más?

Ahora que está familiarizado con los conceptos básicos del DOM, es posible que desee obtener más información sobre las características fundamentales de la API de Document leyendo [cómo recorrer una tabla HTML con interfaces JavaScript y DOM](/es/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces).

## Véase también

- El [Modelo de objetos del documento](/es/docs/Web/API/Document_Object_Model) (DOM).
