---
title: element.nextSibling
slug: Web/API/Node/nextSibling
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Node/nextSibling
original_slug: Web/API/Element/nextSibling
---
{{ ApiRef() }}

### Podsumowanie

Zwraca węzeł znajdujący się w drzewie bezpośrednio za węzłem bieżącym.

### Składnia i wartości

    następnyElement = element.nextSibling

`następnyElement` to węzeł bezpośrednio następny w liście rodzeństwa (np. liście dzieci węzła `parentNode`). Następnym węzłem jest na ogół węzeł elementu, komentarza lub węzeł tekstowy.

### Przykład

    <div id="div-01">Here is div-01</div>
    <div id="div-02">Here is div-02</div>

    <script type="text/javascript">
      var el = document.getElementById('div-01').nextSibling;
      document.write('<p>Rodzeństwo div-01</p><ol>');
      while (el) {
        document.write('<li>' + el.nodeName + '</li>');
        el = el.nextSibling;
      }
      document.write('</ol>');
    </script>

    /**************************************************
      Po załadowaniu zostanie dopisane do strony:

         Rodzeństwo div-01

          1. #text
          2. DIV
          3. #text
          4. SCRIPT
          5. P
          6. OL
    **************************************************/

Węzły tekstowe - `#text` - są w powyższym przykładzie wstawiane do modelu dokumentu w miejsce białych znaków między elementami (np. po znaczniku zamykającym jeden element, ale przed znacznikiem otwierającym następny element). Białe znaki nie są wstawiane przy wywołaniu `document.write`.

Poniższy przykład pokazuje, jak białe znaki wpływają na sąsiednie węzły komórek tabeli:

    <table>
      <tr>
        <td id="cell1">cell1</td>
        <td id="cell2">cell2</td>
      </tr>
      <tr>
        <td id="cell3">cell3</td><td id="cell4">cell4</td></tr>
    </table>

`nextSibling` `cell1` to węzeł tekstowy. Między komórkami drugiego rzędu tabeli nie ma białych znaków, dlatego rodzeństwo `cell3` to tylko `cell4`. Podczas przechodzenia przez model dokumentu za pomocą `nextSibling` należy liczyć się z możliwością wystąpienia węzłów tekstowych.

### Uwagi

Zwraca `null`, kiedy nie ma już więcej węzłów.

### Specyfikacja

[nextSibling](http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-6AC54C2F)



{{ languages( { "en": "en/DOM/element.nextSibling", "fr": "fr/DOM/element.nextSibling", "ja": "ja/DOM/element.nextSibling" } ) }}
