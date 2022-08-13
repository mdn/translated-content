---
title: element.attributes
slug: Web/API/Element/attributes
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Element/attributes
---
{{ ApiRef() }}

### Podsumowanie

**attributes** zwraca _kolekcję_ atrybutów określonych dla danego elementu.

### Składnia i wartości

    var kolekcjaAtrybutów = elementNodeReference.attributes;

Typem zwracanego obiektu kolekcji jest [NamedNodeMap](http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core.html#ID-1780488922). Jeśli element nie ma określonych żadnych atrybutów, zwrócony obiekt ma zerową długość. Właściwość `attributes` jest tylko do odczytu.

_kolekcjaAtrybutów_ to referencja do kolekcji atrybutów.

### Przykład

    // weź pierwszy element <p> z dokumentu
    var para = document.getElementsByTagName("p")[0];
    var atts = para.attributes;

### Uwagi

Zwracany obiekt ma typ [NamedNodeMap](http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core.html#ID-1780488922), nazywany także _kolekcją_, będący listą węzłów, a nie ciągów znakowych. Właściwości obiektów atrybutów dostępne są poprzez indeks, tak jak w poniższym przykładzie, który pobiera parę nazwa/wartość pierwszego atrybutu akapitu "p1":

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
    "http://www.w3.org/TR/html4/strict.dtd">

    <html>

     <head>
      <title>Attributes example</title>
      <script type="text/javascript">
       function showFirstAttr()
       {
        var FirstParg = document.getElementById("p1");
        var outputText = document.getElementById("result");

        if (FirstParg.hasAttributes())
        // sprawdźmy, czy FirstParg ma atrybuty
         {
          outputText.value = FirstParg.attributes[0].name + "->"
                           + FirstParg.attributes[0].value;
         }
        else
         {
          outputText.value = "Brak atrybutów do wyświetlenia"
         };
       }
      </script>
     </head>

    <body>
     <p id="p1" style="color: green;">Przykładowy akapit</p>
     <form action="">
      <p><input type="button" value="Pokaż nazwę i wartość pierwszego atrybutu"
          onclick="showFirstAttr();">
      <input id="result" type="text" value=""></p>
     </form>
    </body>
    </html>

Obiekt z atrybutami jest _kolekcją_, która podobna jest do tablicy, ponieważ ma właściwość `length`, a do atrybutów można odnosić się poprzez indeks liczbowy, ale kolekcja nie posiada specjalnych metod, jakie mają tablice, jak `join`, `split`, itd.

Kolejność w kolekcji atrybutów nie jest wiarygodna - dwie przeglądarki po otrzymaniu takiego samego kodu znaczników mogą zwracać różnie uporządkowane obiekty `attributes`.

By uzyskać dostęp do konkretnego atrybutu, użyj metody [getAttribute](/pl/DOM/element.getAttribute "pl/DOM/element.getAttribute") lub zapisu z użyciem kropki:

     // pokaż id elementu, jeśli element go posiada
     if(element.id)
      {
       alert("id elementu to " + element.id);
      }
     else
      {
       alert("element nie ma id");
      };

### Specyfikacja

- [W3C DOM Level 2 Core: attributes](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-84CF096)
- [W3C DOM Level 3 Core: attributes](http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core.html#ID-84CF096)
- [W3C DOM Level 3 NamedNodeMap interface](http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core.html#ID-1780488922)

{{ languages( { "en": "en/DOM/element.attributes", "fr": "fr/DOM/element.attributes", "ja": "ja/DOM/element.attributes", "zh-cn": "cn/DOM/element.attributes" } ) }}
