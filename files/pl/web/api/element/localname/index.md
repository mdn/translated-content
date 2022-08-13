---
title: element.localName
slug: Web/API/Element/localName
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Node/localName
original_slug: Web/API/Node/localName
---
{{ ApiRef() }}

### Podsumowanie

**localName** zwraca lokalną część uściślonej nazwy węzła.

### Składnia

    nazwa = element.localName

### Parametry

- `nazwa` to ciąg z lokalną nazwą węzła (zobacz [Uwagi](#uwagi) poniżej, aby dowiedzieć się więcej)

### Przykład

(Musi obsługiwać treść XML typu, jak \<tt>text/xml\</tt> lub \<tt>application/xhtml+xml\</tt>.)

    <html xmlns="http://www.w3.org/1999/xhtml"
          xmlns:svg="http://www.w3.org/2000/svg">
    <head>
      <script><![CDATA[
      function test() {
        var text = document.getElementById('text');
        var circle = document.getElementById('circle');

        text.value = "<svg:circle> has:\n" +
                     "localName = '" + circle.localName + "'\n" +
                     "namespaceURI = '" + circle.namespaceURI + "'";
      }
      ]]></script>
    </head>
    <body onload="test()">
      <textarea id="text" rows="4" cols="55"/>
      <svg:svg version="1.1"
        style="width:100%; height:100%; position:absolute; top:0; left:0; z-index:0;"
        viewBox="0 0 100 100">
        <svg:circle cx="50" cy="50" r="30" style="fill:#aaa" id="circle"/>
      </svg:svg>
    </body>
    </html>

### Uwagi

Dla węzłów typu innego niż `ELEMENT_NODE` i `ATTRIBUTE_NODE` oraz dla węzłów utworzonych za pomocą metod DOM Level 1, jak na przykład [`document.createElement`](pl/DOM/document.createElement), własność ta ma zawsze wartość `NULL`.

**localname** węzła to ta część uściślonej nazwy węzła, która znajduje się po dwukropku. Uściślone nazwy są zwykle używane w XML jako część przestrzeni nazw w poszczególnych dokumentach XML. Na przykład w uściślonej nazwie "ecomm:partners" nazwa lokalna to "partners", a "ecomm" to prefiks.

    <ecomm:business id="soda_shop" type="brick_n_mortar">
      <ecomm:partners>
        <ecomm:partner id="1001">Tony's Syrup Warehouse
        </ecomm:partner>
      </ecomm:partner>
    </ecomm:business>

Prefiks - w tym wypadku "ecomm" - określa przestrzeń nazw, w której można użyć nazwy lokalnej.

### Zobacz także

[element.namespaceURI](pl/DOM/element.namespaceURI)

### Specyfikacja

[localName](http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-NodeNSLocalN)



{{ languages( { "en": "en/DOM/element.localName", "fr": "fr/DOM/element.localName", "ja": "ja/DOM/element.localName" } ) }}
