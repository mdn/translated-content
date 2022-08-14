---
title: event.button
slug: Web/API/MouseEvent/button
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/MouseEvent/button
translation_of_original: Web/API/event.button
original_slug: Web/API/Event/button
---
{{ ApiRef() }}

### Podsumowanie

Wskazuje, który przycisk myszy wywołał zdarzenie.

### Składnia

    var kodPrzycisku = event.button;

Zwraca całkowitą wartość liczbową oznaczającą przycisk, który zmienił stan:

- 0 - zwykłe
  _kliknięcie_
  , zazwyczaj lewy przycisk
- 1 - środkowy przycisk, zazwyczaj kliknięcie rolką
- 2 - prawy przycisk

Faktyczna kolejność przycisków może być różna, zależnie od konfiguracji urządzenia wskazującego.

### Przykład

    <script type="text/javascript">

    function whichButton(e)
    {
      // obsłuż różne modele obsługi zdarzeń
      var e = e || window.event;
      var btnCode;

      if ('object' == typeof e){
        btnCode = e.button;

        switch (btnCode){
          case 0  : alert('Kliknięto lewym przyciskiem');
                    break;
          case 1  : alert('Kliknięto środkowym przyciskiem');
                    break;
          case 2  : alert('Kliknięto prawym przyciskiem');
                    break;
          default : alert('Nieoczekiwany kod: ' + btnCode);
        }
      }
    }

    </script>

    <p onclick="whichButton(event);">Kliknij tu myszą...</p>

### Uwagi

Ponieważ kliknięcia myszy są często przechwytywane przez interfejs uzytkownika, w niektórych okolicznościach może być trudno wykryć przyciski inne niż ten dla standardowego kliknięcia (tj. zazwyczaj lewy).

Użytkownicy mogą zmienić konfigurację przycisków swoich urządzeń wskazujących, tak że nawet jeśli własność
_button_
wynosi zero, niekoniecznie musiał być naciśnięty przycisk znajdujący się fizycznie po lewej stronie. Jednak zachowanie w takiej sytuacji powinno być takie, jak gdyby kliknięto lewy przycisk w standardowym układzie.

### Specyfikacja

[DOM Level 2 Events: button](http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-MouseEvent-button)



{{ languages( { "en": "en/DOM/event.button", "ja": "ja/DOM/event.button" } ) }}
