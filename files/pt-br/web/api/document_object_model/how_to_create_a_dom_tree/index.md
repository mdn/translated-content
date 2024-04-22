---
title: Como criar uma árvore DOM
slug: Web/API/Document_object_model/How_to_create_a_DOM_tree
---

{{DefaultAPISidebar("DOM")}}

Esta página descreve como usar a API [DOM Core](https://www.w3.org/TR/DOM-Level-3-Core/) em JavaScript para criar e modificar objetos DOM. Aplica-se a todos os aplicativos baseados em Gecko (como Firefox), tanto em código privilegiado (extensões) quanto não privilegiado (páginas da web).

### Criando dinamicamente uma árvore DOM

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

A API W3C DOM, suportada pela Mozilla, pode ser usada para criar uma representação na memória deste documento da seguinte forma:

```js
const doc = document.implementation.createDocument("", "", null);
const peopleElem = doc.createElement("people");

const personElem1 = doc.createElement("person");
personElem1.setAttribute("first-name", "eric");
personElem1.setAttribute("middle-initial", "h");
personElem1.setAttribute("last-name", "jung");

const addressElem1 = doc.createElement("address");
addressElem1.setAttribute("street", "321 south st");
addressElem1.setAttribute("city", "denver");
addressElem1.setAttribute("state", "co");
addressElem1.setAttribute("country", "usa");
personElem1.appendChild(addressElem1);

const addressElem2 = doc.createElement("address");
addressElem2.setAttribute("street", "123 main st");
addressElem2.setAttribute("city", "arlington");
addressElem2.setAttribute("state", "ma");
addressElem2.setAttribute("country", "usa");
personElem1.appendChild(addressElem2);

const personElem2 = doc.createElement("person");
personElem2.setAttribute("first-name", "jed");
personElem2.setAttribute("last-name", "brown");

const addressElem3 = doc.createElement("address");
addressElem3.setAttribute("street", "321 north st");
addressElem3.setAttribute("city", "atlanta");
addressElem3.setAttribute("state", "ga");
addressElem3.setAttribute("country", "usa");
personElem2.appendChild(addressElem3);

const addressElem4 = doc.createElement("address");
addressElem4.setAttribute("street", "123 west st");
addressElem4.setAttribute("city", "seattle");
addressElem4.setAttribute("state", "wa");
addressElem4.setAttribute("country", "usa");
personElem2.appendChild(addressElem4);

const addressElem5 = doc.createElement("address");
addressElem5.setAttribute("street", "321 south avenue");
addressElem5.setAttribute("city", "denver");
addressElem5.setAttribute("state", "co");
addressElem5.setAttribute("country", "usa");
personElem2.appendChild(addressElem5);

peopleElem.appendChild(personElem1);
peopleElem.appendChild(personElem2);
doc.appendChild(peopleElem);
```

Veja também o [capítulo DOM do Tutorial XUL](/pt-BR/docs/XUL_Tutorial/Document_Object_Model).

Você pode automatizar a criação de uma árvore DOM usando um [algoritmo reverso JXON](/pt-BR/docs/JXON#jxon_reverse_algorithms) em associação com a seguinte representação JSON:

```json
{
  "people": {
    "person": [
      {
        "address": [
          {
            "@street": "321 south st",
            "@city": "denver",
            "@state": "co",
            "@country": "usa"
          },
          {
            "@street": "123 main st",
            "@city": "arlington",
            "@state": "ma",
            "@country": "usa"
          }
        ],
        "@first-name": "eric",
        "@middle-initial": "H",
        "@last-name": "jung"
      },
      {
        "address": [
          {
            "@street": "321 north st",
            "@city": "atlanta",
            "@state": "ga",
            "@country": "usa"
          },
          {
            "@street": "123 west st",
            "@city": "seattle",
            "@state": "wa",
            "@country": "usa"
          },
          {
            "@street": "321 south avenue",
            "@city": "denver",
            "@state": "co",
            "@country": "usa"
          }
        ],
        "@first-name": "jed",
        "@last-name": "brown"
      }
    ]
  }
}
```

### E daí?

As árvores DOM podem ser [consultadas usando expressões XPath](/pt-BR/docs/Web/XPath/Introduction_to_using_XPath_in_JavaScript), convertidas em strings ou gravadas em arquivos locais ou remotos usando [XMLSerializer](/pt-BR/docs/Web/ Guide/Parsing_and_serializing_XML) (sem ter que primeiro converter para uma string), [POSTed to a web server](/pt-BR/docs/Web/API/XMLHttpRequest) (via `XMLHttpRequest`), transformado usando [XSLT](/ pt-BR/docs/Web/XSLT), [XLink](/pt-BR/docs/Glossary/XLink), convertido em um objeto JavaScript por meio de um [algoritmo JXON](/pt-BR/docs/JXON), etc .

Você pode usar árvores DOM para modelar dados que não são adequados para RDF (ou talvez você simplesmente não goste de RDF). Outra aplicação é que, como XUL é XML, a interface do usuário do seu aplicativo pode ser dinamicamente manipulada, baixada, carregada, salva, carregada, convertida ou transformada com bastante facilidade.

## Veja também

- [XML](/pt-BR/docs/Web/XML)
- [JXON](/pt-BR/docs/JXON)
- [XPath](/pt-BR/docs/Web/XPath)
- [Parsing and serializing XML](/pt-BR/docs/Web/Guide/Parsing_and_serializing_XML)
- [XMLHttpRequest](/pt-BR/docs/Web/API/XMLHttpRequest)
