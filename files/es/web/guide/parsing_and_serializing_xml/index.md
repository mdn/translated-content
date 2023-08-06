---
title: Convertir código a cadena de texto (serializing) y visceversa (parsing) a un  XML
slug: Web/Guide/Parsing_and_serializing_XML
---

La plataforma web proveé Los siguientes objetos para hacer parsing (convertir una cadena de texto a código) y serializing (visceversa) a un XML:

- [XMLSerializer](/en/XMLSerializer) para convertir a tipo string el arbol del DOM
- [XPath](/en/XPath) para apuntar a diferentes partes de un documento **[XML](/en/XML) ( sin seguir la sintaxis XML) y convertirlas a string.**
- [DOMParser](/en/DOM/DOMParser) para convertir a XML desde un tipo string (texto) **dentro del árbol del DOM**
- [XMLHttpRequest](/en/nsIXMLHttpRequest) para convertit recursos URL direccionables **en arboles del DOM**

## Parte 1: Como crear un documento XML

Usar una de la siguientes opciones para crear un documento XML (el cual es una instancia de `Document`).

### Codificando textos al árbol del DOM

```js
var miTexto = '<a id="a"><b id="b">Hey!</b></a>';
var codigo = new DOMParser();
var oDOM = codigo.parseFromString(miTexto, "text/xml");
// Imprimir el nombre del elemento raiz o un mensaje de error
dump(
  oDOM.documentElement.nodeName == "parsererror"
    ? "error mientras se codificaba"
    : oDOM.documentElement.nodeName,
);
```

### Creando un documento XML empezando desde un árbol de Objetos JavaScript (JXON)

Por favor vea JXON[algoritmos](/en/JXON#Reverse_Algorithms)de reversa.

### Codificando rexursos de URL direccionables en árboles del DOM

#### Usando XMLHttpRequest

Aquí hay un código de ejemplo que lee y codifica un archivo XML con URL direccionable en un árbol del DOM:

```js
var xhr = new XMLHttpRequest();
xhr.onload = function () {
  dump(xhr.responseXML.documentElement.nodeName);
};
xhr.onerror = function () {
  dump("Error mientras se tomaba el XML.");
};
xhr.open("GET", "example.xml");
xhr.responseType = "document";
xhr.send();
```

`xhr.responseXML` es una instancia de {{domxref("Document")}}.

## Parte 2: Como serializar el contenido de un documento XML

Use the following approaches to serialize the contents of the XML document you created in Part 1.

### Serializing DOM trees to strings

First, create a DOM tree as described in [How to Create a DOM tree](/en/How_to_create_a_DOM_tree). Alternatively, use a DOM tree obtained from {{ domxref("XMLHttpRequest") }}.

Now, let's serialize `doc` — the DOM tree — to a string:

```js
var oSerializer = new XMLSerializer();
var sXML = oSerializer.serializeToString(doc);
```

The `new XMLSerializer()` constructor is not available from within a JS XPCOM component (or a [JS module](/en/JavaScript_code_modules)). Instead, write:

```js
var oSerializer = Components.classes[
  "@mozilla.org/xmlextras/xmlserializer;1"
].createInstance(Components.interfaces.nsIDOMSerializer);
var sXML = oSerializer.serializeToString(doc);
```

#### "Pretty" serialization of DOM trees to strings

You can [pretty print](http://en.wikipedia.org/wiki/Pretty-print) a DOM tree using [`XMLSerializer`](/en/XMLSerializer) and [E4X](/en/E4X). First, create a DOM tree as described in the [How to Create a DOM tree](/en/How_to_create_a_DOM_tree) article. Alternatively, use a DOM tree obtained from {{ domxref("XMLHttpRequest") }}. The `doc` variable contains the DOM tree.

```js
var oSerializer = new XMLSerializer();
var sPrettyXML = XML(oSerializer.serializeToString(doc)).toXMLString();
```

Indents consist of two spaces. To write a more efficient version or customize the indent string, use {{ domxref("treeWalker") }}.

> **Nota:** When using the E4X `toXMLString` method, your **CDATA elements will be lost**, and only the containing text will remain. So if you have CDATA elements in your XML, using the preceding method might not be useful.

```xml
<content><![CDATA[This is the content]]></content>
```

Becomes

```xml
<content>This is the content</content>
```

### Serializing DOM trees to Javascript Object trees (JXON)

[JXON](/en/JXON) (lossless **J**avaScript **X**ML **O**bject **N**otation) is a way to represent JavaScript Objects using XML. To address only parts of an XML document, use [XPath](/en/XPath) instead of converting the whole document into JSON! Otherwise, read the [article about JXON](/en/JXON).

### Serializing DOM trees to files

First, create a DOM tree as described in the [How to Create a DOM tree](/en/How_to_create_a_DOM_tree) article. If you already have a DOM tree from using {{ domxref("XMLHttpRequest") }}, skip to the end of this section.

Now, let's serialize `doc`, the DOM tree, to a file. For more information about files, see [about using files in Mozilla](/en/Code_snippets/File_I//O)):

```js
var oFOStream = Components.classes[
  "@mozilla.org/network/file-output-stream;1"
].createInstance(Components.interfaces.nsIFileOutputStream);
var oFile = Components.classes["@mozilla.org/file/directory_service;1"]
  .getService(Components.interfaces.nsIProperties)
  .get("ProfD", Components.interfaces.nsILocalFile); // get profile folder
oFile.append("extensions"); // extensions sub-directory
oFile.append("{5872365E-67D1-4AFD-9480-FD293BEBD20D}"); // GUID of your extension
oFile.append("myXMLFile.xml"); // filename
oFOStream.init(oFile, 0x02 | 0x08 | 0x20, 0664, 0); // write, create, truncate
new XMLSerializer().serializeToStream(doc, oFOStream, ""); // rememeber, doc is the DOM tree
oFOStream.close();
```

### Serializing XMLHttpRequest objects to files

If you already have a DOM tree from using {{ domxref("XMLHttpRequest") }}, use the same code as above but replace `serializer.serializeToStream(doc, oFOStream, "")` with `serializer.serializeToStream(xmlHttpRequest.responseXML.documentElement, oFOStream, "")` where `xmlHttpRequest` is an instance of `XMLHttpRequest`.

Note that this first parses the XML retrieved from the server, and then re-serializes it into a stream. Depending on your needs, you could just save the `xmlHttpRequest.responseText` directly.

### Serializing HTML documents

If the DOM you have is an HTML document, you can serialize it simply using

```js
var serialized = document.documentElement.innerHTML;
```

## See also

- [XPath](/en/XPath)
- [XMLHttpRequest](/en/nsIXMLHttpRequest)
- [JXO](/en/JXON)
