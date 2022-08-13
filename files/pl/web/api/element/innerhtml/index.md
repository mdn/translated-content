---
title: element.innerHTML
slug: Web/API/Element/innerHTML
tags:
  - DOM
  - DOM_0
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Element/innerHTML
---
{{ ApiRef() }}

### Podsumowanie

**innerHTML** ustawia lub pobiera zbiór zawartych w danym elemencie znaczników razem z ich treścią.

### Składnia

    var markup = element.innerHTML;
    element.innerHTML = markup;

- `markup` to ciąg znaków z zawartością elementu (w tym elementami potomnymi) jako zwykły HTML. Na przykład: `"<p>Jakiś tekst</p>"`.

### Przykład

    // HTML:
    // <div id="d"><p>Treść</p>
    // <p>Bardziej skomplikowane</p>
    // </div>

    d = document.getElementById("d");
    dump(d.innerHTML);

    // ciąg "<p>Treść</p><p>Bardziej skomplikowane</p>"
    // zostanie wyświetlony w oknie konsoli

### Uwagi

Własność ta, nie będąca częścią specyfikacji W3C DOM, zapewnia możliwość łatwego zastąpienia całej zawartości elementu. Na przykład można wyczyścić wszystko co jest w body:

    document.body.innerHTML = "";  // Zawartość body zostaje zastąpiona pustym ciągiem

Własność innerHTML różnych elementów, w tym `BODY` i `HTML` może zostać pobrana czy zastąpiona. Można jej użyć, by wyświetlić źródło zmodyfikowanej dynamicznie strony:

    // Skopiuj jako pojedynczą linię i wklej do paska adresu
    javascript:x=document.body.innerHTML.replace(/</g,'&lt;').replace(/\n/g,'<br>'); document.body.innerHTML = x;

Ponieważ nie ma publicznej specyfikacji dla tej własności, jej implementacje różnią się. Na przykład po wprowadzeniu tekstu do pola tekstowego, IE zmieni zawartość atrybutu `value` elementu `INPUT` w `innerHTML`, a przeglądarki oparte o Gecko - nie.

Własności tej nigdy nie powinno się używać do zapisu części tabeli - zamiast niej należy skorzystać z metod W3C DOM. `innerHTML` można jednak użyć, by zapisać całą tabelę lub zmodyfikować zawartość pojedynczych komórek.

### Specyfikacja

{{ DOM0() }}

### Zobacz także

[MSDN innerHTML](http://msdn.microsoft.com/workshop/author/dhtml/reference/properties/innerhtml.asp)

{{ languages( { "en": "en/DOM/element.innerHTML", "fr": "fr/DOM/element.innerHTML", "ja": "ja/DOM/element.innerHTML" } ) }}
