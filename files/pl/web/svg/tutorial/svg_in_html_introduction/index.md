---
title: SVG w XHTML - Wprowadzenie
slug: Web/SVG/Tutorial/SVG_In_HTML_Introduction
tags:
  - SVG
  - Wszystkie_kategorie
translation_of: Web/SVG/Tutorial/SVG_In_HTML_Introduction
original_slug: Web/SVG/Przewodnik/SVG_w_XHTML_-_Wprowadzenie
---
### Podsumowanie

Ten artykuł oraz powiązany z nim przykład pokazują, jak używać [SVG](pl/SVG) osadzonego w [XHTML](pl/XHTML), jako tła dla formularza. Pokazuje ponadto, jak [JavaScript](pl/JavaScript) i [CSS](pl/CSS) mogą być zastosowane do manipulowania obrazem w analogiczny sposób, jak kodem XHTML. Uwaga: poniższy przykład będzie działał wyłącznie w przeglądarkach obsługujących integrację XHTML (nie HTML) z SVG (jak np. Firefox 1.5 Beta 1 - _przyp. tłum._)

### Kod źródłowy

Poniżej przedstawiono kod źródłowy [przykładu zastosowania](http://developer.mozilla.org/presentations/xtech2005/svg-canvas/SVGDemo.xml) SVG osadzonego w XHTML:

    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <title>XTech SVG Demo</title>
      <style>
        stop.begin { stop-color:yellow; }
        stop.end { stop-color:green; }
        body.invalid stop.end { stop-color:red; }
        #err { display:none; }
        body.invalid #err { display:inline; }
      </style>
      <script>
        function signalError() {
          document.getElementById('body').setAttribute("class", "invalid");
        }
      </script>
    </head>
    <body id="body"
       style="position:absolute; z-index:0; border:1px solid black; left:5%; top:5%; width:90%; height:90%;">
      <form>
         <fieldset>
           <legend>HTML Form</legend>
           <p><label>Enter something:</label>
              <input type="text"/>
              <span id="err">Incorrect value!</span></p>
           <p><button onclick="signalError();">Activate!</button></p>
         </fieldset>
      </form>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
        viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice"
        style="width:100%; height:100%; position:absolute; top:0; left:0; z-index:-1;">
        <linearGradient id="gradient">
          <stop class="begin" offset="0%"/>
          <stop class="end" offset="100%"/>
        </linearGradient>
        <rect x="0" y="0" width="100" height="100" style="fill:url(#gradient)" />
        <circle cx="50" cy="50" r="30" style="fill:url(#gradient)" />
      </svg>
    </body>
    </html>

### Omówienie

Powyższa strona składa się głównie ze zwykłego XHTML, CSS i JavaScriptu. Interesującą częścią
jest element \<svg>. Ten element i jego elementy potomne zostały zadeklarowane w przestrzeni nazw SVG. Element ten zawiera gradient oraz dwie figury nim wypełnione. Kolory ograniczników (ang. _stops_) gradientu zostały ustawione przez CSS. Kiedy użytkownik wprowadzi coś nieprawidłowego do pola formularza, skrypt ustawia atrybut "`invalid`" na elemencie \<body>, a odpowiednia regułka CSS zmienia końcowy kolor na czerwony. Kolejna regułka CSS wyświetla komunikat o błędzie.

To podejście ma następujące zalety:

- zastosowaliśmy zwykły formularz XHTML, który mógłby być częścią istniejącej strony www i dodaliśmy atrakcyjne, interaktywne tło
- zachowana została wsteczna kompatybilność z przeglądarkami, które nie obsługują SVG; po prostu nie pojawi się w nich żadne tło
- rozwiązanie to jest proste i wydajne
- obraz dynamicznie dopasowuje się do żądanych rozmiarów w inteligentny sposób
- możemy mieć deklaratywne regułki stylów działające i z HTML, i z SVG
- ten sam skrypt manipuluje zarówno XHTML jak i SVG
- dokument jest całkowicie oparty na standardach

### Szczegóły

Atrybut `viewBox` tworzy logiczny układ współrzędnych dla obrazu SVG. W tym przypadku nasz obraz jest wyświetlany w oknie (_viewport_) 100 na 100.

Atrybut `preserveAspectRatio` sprawia, że stosunek wymiarów obrazu musi być zachowany, centrując obraz, zmieniając jego wymiary do największej możliwej długości lub szerokości (zależnie od tego, która jest większa) i odcinając ewentualne przepełnienie.

Atrybut `style` przypina element SVG do tła formularza.

### Inne strony

- Inny przykład SVG w XHTML: [Rój pyłków (en)](/pl/docs/index.php?title=SVG:Namespaces_Crash_Course:Example)
- Strona [Inline SVG](http://svg-whiz.com/wiki/index.php?title=Inline_SVG) na wiki SVG

{{ languages( { "en": "en/SVG_In_HTML_Introduction", "fr": "fr/Introduction\_\u00e0\_SVG_dans_HTML", "ja": "ja/SVG_In_HTML_Introduction" } ) }}
