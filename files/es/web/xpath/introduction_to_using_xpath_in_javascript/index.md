---
title: Introducción al uso de XPath en Javascript
slug: Web/XPath/Introduction_to_using_XPath_in_JavaScript
---

Este documento describe la interfaz para usar [XPath](/es/docs/Web/XPath) internamente en JavaScript, en extensiones y desde sitios web. Mozilla implementa una gran parte del [DOM 3 XPath](http://www.w3.org/TR/DOM-Level-3-XPath/xpath.html). Esto significa que las expresiones XPath pueden correrse en documentos HTML y XML.

La interfaz principal a usar con XPath es la función [evaluate](/en/DOM/document.evaluate) del objeto [document](/en/DOM/document).

## document.evaluate

Este método evalúa expresiones [XPath](/en/XPath) contra un documento basado en [XML](/en/XML) (incluyendo documentos HTML), y regresa un objeto [`XPathResult`](/en/XPathResult), el cual puede ser un solo nodo o un conjunto de nodos. La documentación existente para este método se encuentra en [document.evaluate](/en/DOM/document.evaluate), pero de momento es más bien escasa para nuestras necesidades; una examinación más abarcativa será dada a continuación.

```js
var xpathResult = document.evaluate(
  xpathExpression,
  contextNode,
  namespaceResolver,
  resultType,
  result,
);
```

### Parámetros

La función [evaluate](/en/DOM/document.evaluate) toma un total de 5 parámetros:

- `xpathExpression`: Una cadena que contiene la expresión XPath a evaluar.
- `contextNode`: Un nodo en el documento contra la `xpathExpression` debe ser evaluada, incluyendo todos los nodos descendientes. El nodo [document](/en/DOM/document) es el usado más comúnmente.
- `namespaceResolver`: Una función que pasará cualquier prefijo de namespace contenido en una `xpathExpression` la cúal regresará una cadena representando al URI del namespace asociado con ese prefijo. Esto activa la conversión entre los prefijos usados en las expresiones XPath y los posiblemente distintos prefijos usados en el documento. La función puede ser:

  - Creada usando el metodo [`createNSResolver`](/en/DOM/document.createNSResolver) de un objeto [`XPathEvaluator`](/en/XPathEvaluator). Deberías usar este virtualmente todo el tiempo.
  - `null`, el cúal puede ser usado para documentos HTML o cuando no son usados prefijos de namespace. Note que, si la expresión XPath contiene un prefijo de namespace, esto resultará en una `DOMException` siendo arrojada con el código `NAMESPACE_ERR`.
  - Una función definida por el usuario. Mira la sección [Usar un Solucionador de Namespace definido por el usuario](#Implementing_a_User_Defined_Namespace_Resolver) en el apéndice para detalles.

- `resultType`: Una [constante](#XPathResult_Defined_Constants) que especifica el tipo del resultado deseado a ser regresado. La constante más comúnmente pasada es `XPathResult.ANY_TYPE` la cúal regresará los resultados de la expresión XPath como el tipo más natural. Hay una sección en el apéndice que contiene una lista completa de las [constantes disponibles](#XPathResult_Defined_Constants). Estas son explicadas debajo, en la sección "[Especificando el tipo de valor regresado](#Specifying_the_Return_Type)".
- `result`: Si un objeto `XPathResult` existente es especificado, sera reusado para regresar el resultado. Especificando `null`, un nuevo objeto `XPathResult` será creado.

### Valor regresado

Regresa `xpathResult`, que es un objeto `XPathResult` del tipo especificado en el parámetro `resultType`. La interfaz `XPathResult` está definida [aquí](/es/docs/Web/API/XPathResult).

### Implementando un Solucionador de Namespace predefinido

Nosotros creamos un solucionador de namespace usando el método `createNSResolver` del objeto [document](/en/DOM/document).

```js
var nsResolver = document.createNSResolver(
  contextNode.ownerDocument == null
    ? contextNode.documentElement
    : contextNode.ownerDocument.documentElement,
);
```

O alternativamente, usar el método `createNSResolver` de un objeto `XPathEvaluator`.

```
var xpEvaluator = new XPathEvaluator();
var nsResolver = xpEvaluator.createNSResolver( contextNode.ownerDocument == null ? contextNode.documentElement : contextNode.ownerDocument.documentElement );
```

Y entonces pasar a `document.evaluate` la variable `nsResolver`, como el parámetro `namespaceResolver`.

Nota: XPath define QNames sin un prefijo sólo al igualar elementos en el namespace null. No hay manera en XPath de tomar el namespace predefinido tal como se aplica a un elemento de referencia regular (e.g., `p[@id='_myid']` for `xmlns='http://www.w3.org/1999/xhtml'`). Para igualar elementos predefinidos en un namespace no-nulo, , se tiene que hacer refencia a un elemento en particular usando una forma como `['namespace-uri()='http://www.w3.org/1999/xhtml' and name()='p' and @id='_myid']` (este enfoque funciona bien para expresiones XPath dinámicas donde el namespace puede ser dessconocido) o usar un nombre de prueba prefijado, y crear un solucionador de namespace mapeando el prefijo al namespace. Lee más sobre como crear un solucionador de namespace definido por el usuario, si deseas tomar el último enfoque.

### Notas

Se adapta cualquier nodo DOM a resolver namespaces, así que una expresión XPath puede ser fácilmente evaluada relativa al contexto del nodo donde este aparece dentro del documento. Este adaptador funciona como el método de DOM Nivel 3 `lookupNamespaceURI` en nodos a resolver el `namespaceURI` desde un prefijo dado, usando la información actual disponible en la jerarquía del nodo en el momento en que lookupNamespaceURI es llamado. También resuelve correctamente el prefijo implícito de XML.

### Especificando el tipo de valor regresado

La variable regresado `xpathResult` desde `document.evaluate` puede estar compuesto de nodos individuales (tipos simples), o una colección de nodos (tipo de conjunto de nodos)

#### Tipos simples

Cuando el tipo de resultado deseado especificado en `resultType` es uno de los siguientes :

- `NUMBER_TYPE` - un doble
- `STRING_TYPE` - una cadena
- `BOOLEAN_TYPE` - un booleano

Obtenemos el valor regresado por la expresión accediendo a las siguientes propiedades, respectivamente, del objeto `XPathResult`.

- `numberValue`
- `stringValue`
- `booleanValue`

##### Ejemplo

El siguiente código usa la expresión XPath [`count(//p)`](/en/XPath/Functions/count) para obtener el número de elementos \<p> en un documento HTML:

```js
var paragraphCount = document.evaluate(
  "count(//p)",
  document,
  null,
  XPathResult.ANY_TYPE,
  null,
);

alert(
  "This document contains " +
    paragraphCount.numberValue +
    " paragraph elements",
);
```

Aunque JavaScript nos permite convertir el número a una cadena para desplegarlo, la interfaz `XPath` no convertirá el resultado numérico si la propiedad `stringValue` es solicitada, así que el siguiente código no funcionará:

```js
var paragraphCount = document.evaluate(
  "count(//p)",
  document,
  null,
  XPathResult.ANY_TYPE,
  null,
);

alert(
  "This document contains " +
    paragraphCount.stringValue +
    " paragraph elements",
);
```

A su vez, regresará una excepción con el código `NS_DOM_TYPE_ERROR`.

#### Tipos de conjuntos de Nodos

El objeto `XPathResult` permite a los conjuntos de nodos ser regresados en 3 diferentes tipos principales:

- [Iteradores](#Iterators)
- [Capturas](#Snapshots)
- [Primeros nodos](#First_Node)

##### Iteradores

Cuando el tipo de resultado especificado en el `resultType` es uno de los siguientes:

- `UNORDERED_NODE_ITERATOR_TYPE`
- `ORDERED_NODE_ITERATOR_TYPE`

El objeto `XPathResult` regresado es un conjunto de nodos de los nodos coincidentes los cuales se comportarán como un iterador, perimitiendo el acceso individual a los nodos mediante el uso de método `iterateNext()` del `XPathResult` .

Una vez que hemos iterado sobre todos los nodos individuales coincidentes, `iterateNext()` regresará `null`.

Es importante señalar que si el documento se ha transformado (el arbol del documento se ha modificado) entre iteraciones

###### Iterator Example

```js
var iterator = document.evaluate(
  "//phoneNumber",
  documentNode,
  null,
  XPathResult.UNORDERED_NODE_ITERATOR_TYPE,
  null,
);

try {
  var thisNode = iterator.iterateNext();

  while (thisNode) {
    alert(thisNode.textContent);
    thisNode = iterator.iterateNext();
  }
} catch (e) {
  dump("Error: Document tree modified during iteration " + e);
}
```

##### Snapshots

When the specified result type in the `resultType` parameter is either:

- `UNORDERED_NODE_SNAPSHOT_TYPE`
- `ORDERED_NODE_SNAPSHOT_TYPE`

The `XPathResult` object returned is a static node-set of matched nodes, which allows us to access each node through the `snapshotItem(itemNumber)` method of the `XPathResult` object, where `itemNumber` is the index of the node to be retrieved. The total number of nodes contained can be accessed through the `snapshotLength` property.

Snapshots do not change with document mutations, so unlike the iterators the snapshot does not become invalid, but it may not correspond to the current document, for example the nodes may have been moved, it might contain nodes that no longer exist, or new nodes could have been added.

###### Snapshot Example

```js
var nodesSnapshot = document.evaluate(
  "//phoneNumber",
  documentNode,
  null,
  XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
  null,
);

for (var i = 0; i < nodesSnapshot.snapshotLength; i++) {
  dump(nodesSnapshot.snapshotItem(i).textContent);
}
```

##### First Node

When the specified result type in the `resultType` parameter is either:

- `ANY_UNORDERED_NODE_TYPE`
- `FIRST_ORDERED_NODE_TYPE`

The `XPathResult` object returned is only the first found node that matched the XPath expression. This can be accessed through the `singleNodeValue` property of the `XPathResult` object. This will be `null` if the node set is empty.

Note that, for the unordered subtype the single node returned might not be the first in document order, but for the ordered subtype you are guaranteed to get the first matched node in the document order.

###### First Node Example

```js
var firstPhoneNumber = document.evaluate(
  "//phoneNumber",
  documentNode,
  null,
  XPathResult.FIRST_ORDERED_NODE_TYPE,
  null,
);

dump(
  "The first phone number found is " +
    firstPhoneNumber.singleNodeValue.textContent,
);
```

#### The ANY_TYPE Constant

When the result type in the `resultType` parameter is specified as `ANY_TYPE`, the `XPathResult` object returned, will be whatever type that naturally results from the evaluation of the expression.

It could be any of the simple types (`NUMBER_TYPE, STRING_TYPE, BOOLEAN_TYPE`), **but**, if the returned result type is a node-set then it will **only** be an `UNORDERED_NODE_ITERATOR_TYPE`.

To determine that type after evaluation, we use the `resultType` property of the `XPathResult` object. The [constant](#XPathResult_Defined_Constants) values of this property are defined in the appendix.

## Examples

### Within an HTML Document

The following code is intended to be placed in any JavaScript fragment within or linked to the HTML document against which the XPath expression is to be evaluated.

To extract all the `<h2>` heading elements in an HTML document using XPath, the `xpathExpression` is simply '`//h2`'. Where, `//` is the Recursive Descent Operator that matches elements with the nodeName `h2` anywhere in the document tree. The full code for this is: link to introductory xpath doc

```js
var headings = document.evaluate(
  "//h2",
  document,
  null,
  XPathResult.ANY_TYPE,
  null,
);
```

Notice that, since HTML does not have namespaces, we have passed `null` for the `namespaceResolver` parameter.

Since we wish to search over the entire document for the headings, we have used the [document](/en/DOM/document) object itself as the `contextNode`.

The result of this expression is an `XPathResult` object. If we wish to know the type of result returned, we may evaluate the `resultType` property of the returned object. In this case, that will evaluate to `4`, an `UNORDERED_NODE_ITERATOR_TYPE`. This is the default return type when the result of the XPath expression is a node set. It provides access to a single node at a time and may not return nodes in a particular order. To access the returned nodes, we use the `iterateNext()` method of the returned object:

```js
var thisHeading = headings.iterateNext();

var alertText = "Level 2 headings in this document are:\n";

while (thisHeading) {
  alertText += thisHeading.textContent + "\n";
  thisHeading = headings.iterateNext();
}
```

Once we iterate to a node, we have access to all the standard DOM interfaces on that node. After iterating through all the `h2` elements returned from our expression, any further calls to `iterateNext()` will return `null`.

### Evaluating against an XML document within an Extension

The following uses an XML document located at chrome://yourextension/content/peopleDB.xml as an example.

```xml
<?xml version="1.0"?>
<people xmlns:xul = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul" >
  <person>
 <name first="george" last="bush" />
 <address street="1600 pennsylvania avenue" city="washington" country="usa"/>
 <phoneNumber>202-456-1111</phoneNumber>
  </person>
  <person>
 <name first="tony" last="blair" />
 <address street="10 downing street" city="london" country="uk"/>
 <phoneNumber>020 7925 0918</phoneNumber>
  </person>
</people>
```

To make the contents of the XML document available within the extension, we create an [`XMLHttpRequest`](/en/XMLHttpRequest) object to load the document synchronously, the variable `xmlDoc` will contain the document as an [`XMLDocument`](/en/XMLDocument) object against which we can use the `evaluate` method

JavaScript used in the extensions xul/js documents.

```js
var req = new XMLHttpRequest();

req.open("GET", "chrome://yourextension/content/peopleDB.xml", false);
req.send(null);

var xmlDoc = req.responseXML;

var nsResolver = xmlDoc.createNSResolver(
  xmlDoc.ownerDocument == null
    ? xmlDoc.documentElement
    : xmlDoc.ownerDocument.documentElement,
);

var personIterator = xmlDoc.evaluate(
  "//person",
  xmlDoc,
  nsResolver,
  XPathResult.ANY_TYPE,
  null,
);
```

### Note

When the XPathResult object is not defined, the constants can be retreived in privileged code using `Components.interfaces.nsIDOMXPathResult.ANY_TYPE` (`CI.nsIDOMXPathResult`). Similarly, an XPathEvaluator can be created using:

```js
Components.classes["@mozilla.org/dom/xpath-evaluator;1"].createInstance(
  Components.interfaces.nsIDOMXPathEvaluator,
);
```

## Appendix

#### Implementing a User Defined Namespace Resolver

This is an example for illustration only. This function will need to take namespace prefixes from the `xpathExpression` and return the URI that corresponds to that prefix. For example, the expression:

```
'//xhtml:td/mathml:math'
```

will select all [MathML](/en/MathML) expressions that are the children of (X)HTML table data cell elements.

In order to associate the '`mathml:`' prefix with the namespace URI '`http://www.w3.org/1998/Math/MathML`' and '`xhtml:`' with the URI '`http://www.w3.org/1999/xhtml`' we provide a function:

```js
function nsResolver(prefix) {
  var ns = {
    xhtml: "http://www.w3.org/1999/xhtml",
    mathml: "http://www.w3.org/1998/Math/MathML",
  };
  return ns[prefix] || null;
}
```

Our call to `document.evaluate` would then looks like:

```js
document.evaluate(
  "//xhtml:td/mathml:math",
  document,
  nsResolver,
  XPathResult.ANY_TYPE,
  null,
);
```

#### Implementing a default namespace for XML documents

As noted in the [Implementing a Default Namespace Resolver](#Implementing_a_Default_Namespace_Resolver) previously, the default resolver does not handle the default namespace for XML documents. For example with this document:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
    <entry />
    <entry />
    <entry />
</feed>
```

`doc.evaluate('//entry', doc, nsResolver, XPathResult.ANY_TYPE, null)` will return an empty set, where `nsResolver` is the resolver returned by `createNSResolver`. Passing a `null` resolver doesn't work any better, either.

One possible workaround is to create a custom resolver that returns the correct default namespace (the Atom namespace in this case). Note that you still have to use some namespace prefix in your XPath expression, so that the resolver function will be able to change it to your required namespace. E.g.:

```js
function resolver() {
  return "http://www.w3.org/2005/Atom";
}
doc.evaluate("//myns:entry", doc, resolver, XPathResult.ANY_TYPE, null);
```

Note that a more complex resolver will be required if the document uses multiple namespaces.

An approach which might work better (and allow namespaces not to be known ahead of time) is described in the next section.

#### Using XPath functions to reference elements with a default namespace

Another approach to match default elements in a non-null namespace (and one which works well for dynamic XPath expressions where the namespaces might not be known), involves referring to a particular element using a form such as `[namespace-uri()='http://www.w3.org/1999/xhtml' and name()='p' and @id='_myid']`. This circumvents the problem of an XPath query not being able to detect the default namespace on a regularly labeled element.

#### Getting specifically namespaced elements and attributes regardless of prefix

If one wishes to provide flexibility in namespaces (as they are intended) by not necessarily requiring a particular prefix to be used when finding a namespaced element or attribute, one must use special techniques.

While one can adapt the approach in the above section to test for namespaced elements regardless of the prefix chosen (using [`local-name()`](/en/XPath/Functions/local-name) in combination with [`namespace-uri()`](/en/XPath/Functions/namespace-uri) instead of [`name()`](/en/XPath/Functions/name)), a more challenging situation occurs, however, if one wishes to grab an element with a particular namespaced attribute in a predicate (given the absence of implementation-independent variables in XPath 1.0).

For example, one might try (incorrectly) to grab an element with a namespaced attribute as follows: `var xpathlink = someElements[local-name(@*)="href" and namespace-uri(@*)='http://www.w3.org/1999/xlink'];`

This could inadvertently grab some elements if one of its attributes existed that had a local name of "`href`", but it was a different attribute which had the targeted (XLink) namespace (instead of [`@href`](/en/XPath/Axes/attribute)).

In order to accurately grab elements with the XLink `@href` attribute (without also being confined to predefined prefixes in a namespace resolver), one could obtain them as follows:

```js
var xpathEls =
  'someElements[@*[local-name() = "href" and namespace-uri() = "http://www.w3.org/1999/xlink"]]'; // Grabs elements with any single attribute that has both the local name 'href' and the XLink namespace
var thislevel = xml.evaluate(xpathEls, xml, null, XPathResult.ANY_TYPE, null);
var thisitemEl = thislevel.iterateNext();
```

#### XPathResult Defined Constants

| Result Type Defined Constant | Value | Description                                                                                                                                                                                      |
| ---------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ANY_TYPE                     | 0     | A result set containing whatever type naturally results from evaluation of the expression. Note that if the result is a node-set then UNORDERED_NODE_ITERATOR_TYPE is always the resulting type. |
| NUMBER_TYPE                  | 1     | A result containing a single number. This is useful for example, in an XPath expression using the `count()` function.                                                                            |
| STRING_TYPE                  | 2     | A result containing a single string.                                                                                                                                                             |
| BOOLEAN_TYPE                 | 3     | A result containing a single boolean value. This is useful for example, in an XPath expression using the `not()` function.                                                                       |
| UNORDERED_NODE_ITERATOR_TYPE | 4     | A result node-set containing all the nodes matching the expression. The nodes may not necessarily be in the same order that they appear in the document.                                         |
| ORDERED_NODE_ITERATOR_TYPE   | 5     | A result node-set containing all the nodes matching the expression. The nodes in the result set are in the same order that they appear in the document.                                          |
| UNORDERED_NODE_SNAPSHOT_TYPE | 6     | A result node-set containing snapshots of all the nodes matching the expression. The nodes may not necessarily be in the same order that they appear in the document.                            |
| ORDERED_NODE_SNAPSHOT_TYPE   | 7     | A result node-set containing snapshots of all the nodes matching the expression. The nodes in the result set are in the same order that they appear in the document.                             |
| ANY_UNORDERED_NODE_TYPE      | 8     | A result node-set containing any single node that matches the expression. The node is not necessarily the first node in the document that matches the expression.                                |
| FIRST_ORDERED_NODE_TYPE      | 9     | A result node-set containing the first node in the document that matches the expression.                                                                                                         |

## See also

- [Using XPath](/en/Using_XPath)

## Original Document Information

- Based Upon Original Document [Mozilla XPath Tutorial](http://www-xray.ast.cam.ac.uk/~jgraham/mozilla/xpath-tutorial.html)
- Original Source Author: James Graham.
- Other Contributors: James Thompson.
- Last Updated Date: 2006-3-25.
