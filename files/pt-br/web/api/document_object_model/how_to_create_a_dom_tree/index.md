---
title: How to create a DOM tree
slug: Web/API/Document_object_model/How_to_create_a_DOM_tree
translation_of: Web/API/Document_object_model/How_to_create_a_DOM_tree
original_slug: DOM/Referencia_do_DOM/How_to_create_a_DOM_tree
---
Esta página descreve como usar [DOM Core](http://www.w3.org/TR/DOM-Level-3-Core/core.html) API DOM em JavaScript para criar e modificar objetos do DOM. Aplica-se a todas as aplicações baseadas em Gecko (como o Firefox), tanto em código privilegiado (extensões) como em código não privilegiado (páginas web)

### Criando uma árvore DOM dinamicamente

Considere o seguinte documento XML:

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

A W3C DOM API, suportada pelo Mozilla, pode ser usada para criar uma representação na memória deste documento, da seguinte forma:

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

Veja também o capítulo [DOM chapter of the XUL Tutorial](/en/XUL_Tutorial/Document_Object_Model).

Você pode automatizar a criação de uma árvore DOM usando um [algoritmo reverso JXON](/en/JXON#JXON_reverse_algorithms) em associação com a seguinte representação JSON:

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

### E daí?

As árvores DOM podem ser consultadas [usando expressões XPath](/en/Using_XPath), convertidas em strings ou gravadas em arquivos locais ou remotos usando [XMLSerializer](/en/Parsing_and_serializing_XML) (sem ter que primeiro converter para uma string), [POSTed para um servidor web](/en/DOM/XMLHttpRequest) (via XMLHttpRequest), transformado usando [XSLT](/en/XSLT), [XLink](/en/XLink), convertido para um objeto JavaScript através de um [algoritmo JXON](/en/JXON), etc.

Você pode usar árvores DOM para modelar dados que não são adequados para RDF (ou talvez você simplesmente não goste de RDF). Outra aplicação é que, uma vez que XUL é XML, a UI de sua aplicação pode ser manipulada, baixada, carregada, salva, carregada, convertida ou transformada de forma bastante fácil.

## Veja também

- [XML](/en/XML)
- [JXON](/en/JXON)
- [XPath](/en/XPath)
- [E4X (ECMAScript for XML)](/en/E4X)
- [Parsing and serializing XML](/en/Parsing_and_serializing_XML)
- [XMLHttpRequest](/en/DOM/XMLHttpRequest)
