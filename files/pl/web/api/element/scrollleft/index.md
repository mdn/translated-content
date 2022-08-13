---
title: element.scrollLeft
slug: Web/API/Element/scrollLeft
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Element/scrollLeft
---
{{ ApiRef() }}

### Podsumowanie

**scrollLeft** pobiera bądź ustawia liczbę pikseli, o którą zostanie przewinięta zawartość dokumentu. Kierunek przewijania odbywa się w lewo.

### Składnia i wartości

    // Pobierz wartość przewinięcia w pikselach
    var sLeft = element.scrollLeft;

_sLeft_ jest wartością liczbową reprezentującą ilość pikseli, o które _element_ został przewinięty w lewo.

    // Ustaw wartość przewinięcia w pikselach
    element.scrollLeft = 10;

**scrollLeft** może przyjąć dowolną wartość liczbową, jednakże:

- Jeżeli element nie może być przewijany (nie posiada atrybutu overflow), scrollLeft jest równe 0.
- Jeżeli ustawiana wartość jest mniejsza niż 0, scrollLeft jest równe 0.
- Jeżeli ustawiana wartość jest większa od wartości maksymalnej, o którą zawartość dokumentu może być przewijana, scrollLeft jest równe wartości maksymalnej.

### Przykład

    <script type="text/javascript">

    function doScrollLeft(el, p)
    {
      el.scrollLeft = p;
    }

    </script>

    <div id="aDiv"
         style="width: 100px; height: 200px; overflow: auto;"
    >
    <script type="text/javascript">
    for (var i=0; i<100; ++i){
      document.write(i + '-FooBar-FooBar-FooBar<br>');
    }
    </script>
    </div>
    <br>
    <input type="button" value="Scroll left 50"
           onclick="doScrollLeft(document.getElementById('aDiv'), 50);"
    >

### Specyfikacja

To nie jest żadna część specyfikacji W3C.

### Powiązania

[MSDN scrollLeft](http://msdn.microsoft.com/workshop/author/dhtml/reference/properties/scrollleft.asp)



{{ languages( { "en": "en/DOM/element.scrollLeft", "fr": "fr/DOM/element.scrollLeft" } ) }}
