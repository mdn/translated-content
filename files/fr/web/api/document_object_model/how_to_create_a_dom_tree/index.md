---
title: Comment créer un arbre DOM
slug: Web/API/Document_object_model/How_to_create_a_DOM_tree
---

Cet article décrit comment utiliser l'API [DOM Core (en)](https://www.w3.org/TR/DOM-Level-3-Core/) en JavaScript pour créer et modifier des objets DOM. Il concerne toutes les applications basées sur Gecko (telles que Firefox) sur du code avec privilèges (par exemple les extensions) ou sans privilège (des pages Web).

### Créer dynamiquement un arbre DOM

Considérons le document XML suivant&nbsp;:

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

L'API DOM du W3C, supportée par Mozilla, peut être utilisée pour créer une représentation en mémoire de ce document comme cela&nbsp;:

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

Voir également le chapitre [DOM du tutoriel XUL](/fr/docs/Mozilla/Tech/XUL/Tutoriel_XUL/Document_Object_Model)

Vous pouvez automatiser la création de l'arbre DOM en utilisant un algorithme inversé JSON associé avec la représentation JSON suivante :

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

### Et après ?

Les arbres DOM peuvent être interrogés en utilisant des [expressions XPath](/fr/docs/Introduction_à_l'utilisation_de_XPath_avec_JavaScript), convertis en chaîne de caractères ou écris dans un fichier local ou distant en utilisant [XMLSerializer](/fr/docs/Web/Guide/Parsing_and_serializing_XML) (sans avoir à le convertir en chaîne de caractères auparavant), [envoyés à un serveur Web](/fr/docs/Web/API/XMLHttpRequest) (via XMLHttpRequest), transformés en utilisant [XSLT](/fr/docs/XSLT), [XLink](/fr/docs/Glossaire/XLink), convertis en un objet JavaScript à travers un [algorithme JXON](/fr/docs/Archive/JXON), etc.

Vous pouvez utiliser des arbres DOM pour modéliser des données qui ne peuvent pas être traitées avec RDF (ou si vous n'aimez pas RDF). Un autre champ d'action est que, comme XUL est du XML, l'UI de votre application peut être manipulée dynamiquement, téléchargée, enregistrée, chargée, convertie ou transformée relativement facilement.

## Voir aussi

- [XML](/fr/docs/Glossaire/XML)
- [JXON](/fr/docs/Archive/JXON)
- [XPath](/fr/docs/XPath)
- [E4X (ECMAScript for XML)](/fr/docs/E4X)
- [Parsing and serializing XML](/fr/docs/Web/Guide/Parsing_and_serializing_XML)
- [XMLHttpRequest](/fr/docs/Web/API/XMLHttpRequest)
