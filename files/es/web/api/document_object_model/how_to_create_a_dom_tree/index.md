---
title: Cómo crear un DOM tree
slug: Web/API/Document_object_model/How_to_create_a_DOM_tree
---

Esta página describe cómo usar el API [DOM Core](http://www.w3.org/TR/DOM-Level-3-Core/core.html) en JavaScript para crear o modificar objetos DOM. Es aplicable a todas las aplicaciones basadas en Gecko (como Mozilla Firefox) cuyo código tenga privilegios (como las extensiones) y a las que no (páginas web).

### Creación dinámica de un DOM tree

Considere el siguiente documento XML:

```xml
<?xml version="1.0"?>
<people>
  <person first-name="eric" middle-initial="H" last-name="jung">
    <address street="321 south st" city="denver" state="co" country="usa"/>
    <address street="123 main st" city="arlington" state="ma" country="usa"/>
  </person>

  <person first-name="jed" last-name="brown">
    <address street="321 north st" city="atlanta" state="ga" country="usa"/>
    <address street="123 west st" city="seattle" state="wa" country="usa"/>
    <address street="321 south avenue" city="denver" state="co" country="usa"/>
  </person>
</people>
```

El W3C DOM API soportado por Mozilla, puede ser usado para crear una representación en memoria del documento anterior, como se ve a continuación:

```js
var doc = document.implementation.createDocument("", "", null);
var peopleElem = doc.createElement("people");

var personElem1 = doc.createElement("person");
personElem1.setAttribute("first-name", "eric");
personElem1.setAttribute("middle-initial", "h");
personElem1.setAttribute("last-name", "jung");

var addressElem1 = doc.createElement("address");
addressElem1.setAttribute("street", "321 south st");
addressElem1.setAttribute("city", "denver");
addressElem1.setAttribute("state", "co");
addressElem1.setAttribute("country", "usa");
personElem1.appendChild(addressElem1);

var addressElem2 = doc.createElement("address");
addressElem2.setAttribute("street", "123 main st");
addressElem2.setAttribute("city", "arlington");
addressElem2.setAttribute("state", "ma");
addressElem2.setAttribute("country", "usa");
personElem1.appendChild(addressElem2);

var personElem2 = doc.createElement("person");
personElem2.setAttribute("first-name", "jed");
personElem2.setAttribute("last-name", "brown");

var addressElem3 = doc.createElement("address");
addressElem3.setAttribute("street", "321 north st");
addressElem3.setAttribute("city", "atlanta");
addressElem3.setAttribute("state", "ga");
addressElem3.setAttribute("country", "usa");
personElem2.appendChild(addressElem3);

var addressElem4 = doc.createElement("address");
addressElem4.setAttribute("street", "123 west st");
addressElem4.setAttribute("city", "seattle");
addressElem4.setAttribute("state", "wa");
addressElem4.setAttribute("country", "usa");
personElem2.appendChild(addressElem4);

var addressElem5 = doc.createElement("address");
addressElem5.setAttribute("street", "321 south avenue");
addressElem5.setAttribute("city", "denver");
addressElem5.setAttribute("state", "co");
addressElem5.setAttribute("country", "usa");
personElem2.appendChild(addressElem5);

peopleElem.appendChild(personElem1);
peopleElem.appendChild(personElem2);
doc.appendChild(peopleElem);
```

Vea también el [Capítulo DOM del Tutorial de XUL](/en/XUL_Tutorial/Document_Object_Model).

Se puede automatizar la creación de un DOM tree usando el [JXON reverse algorithm (algoritmo inverso JXON)](/en/JXON#JXON_reverse_algorithms) en asociación con la siguiente representación JSON:

```js
{
  "people": {
    "person": [{
      "address": [{
        "@street": "321 south st",
        "@city": "denver",
        "@state": "co",
        "@country": "usa"
      }, {
        "@street": "123 main st",
        "@city": "arlington",
        "@state": "ma",
        "@country": "usa"
      }],
      "@first-name": "eric",
      "@middle-initial": "H",
      "@last-name": "jung"
    }, {
      "address": [{
        "@street": "321 north st",
        "@city": "atlanta",
        "@state": "ga",
        "@country": "usa"
      }, {
        "@street": "123 west st",
        "@city": "seattle",
        "@state": "wa",
        "@country": "usa"
      }, {
        "@street": "321 south avenue",
        "@city": "denver",
        "@state": "co",
        "@country": "usa"
      }],
      "@first-name": "jed",
      "@last-name": "brown"
    }]
  }
}
```

### ¿Ahora qué?

Los DOM trees pueden ser [invocados usando expresiones XPath](/en/Using_XPath), convertidos a cadenas de texto, salvados a un archivo local o remoto usando [XMLSerializer](/en/Parsing_and_serializing_XML) (sin tener que convertirlo primero a una cadena de texto), Enviados mediante [POST a un servidor web](/en/DOM/XMLHttpRequest) (via `XMLHttpRequest`), transformados usando [XSLT](/en/XSLT), [XLink](/en/XLink), convertidos a un objeto JavaScript a tráves del [algoritmo](/en/JXON)[JXON](/en/JXON), etc.

Adicionalmente se puede hacer uso de los DOM trees para modelar los datos que no estén bien formados para RDF (o si sólo no prefieres usar RDF). Otra aplicación que puedes darle, se relaciona a XUL (que es XML), la UI (interfaz) de tu aplicación puede ser manipulada dinámicamente, descargada, subida, guardada, cargada, convertida, o transformada fácilmente.

## Vea también

- [XML](/en/XML)
- [JXON](/en/JXON)
- [XPath](/en/XPath)
- [E4X (ECMAScript for XML)](/en/E4X)
- [Parsing and serializing XML](/en/Parsing_and_serializing_XML)
- [XMLHttpRequest](/en/DOM/XMLHttpRequest)
