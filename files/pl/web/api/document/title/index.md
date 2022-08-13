---
title: document.title
slug: Web/API/Document/title
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Document/title
---
{{ ApiRef() }}

### Podsumowanie

Pobiera lub ustawia tytuł dokumentu.

### Składnia

    tytul =document.title;

- `tytul` jest łańcuchem znaków zawierającym tytuł dokumentu. Jeśli tytuł został nadpisany poprzez ustawienie `document.title`, zwraca tę wartość. W przeciwnym wypadku zwraca tytuł określony w znaczniku (zobacz poniższe [Uwagi](#uwagi)).

    document.title =nowyTytul;

- `nowyTytul` jest nowym tytułem dokumentu. Przypisanie to ma wpływ na wartość zwracaną przez `document.title` oraz wyświetlany tytuł dokumentu (np. w pasku tytułowym okna), ale nie wpływa na DOM dokumentu (np. zawartość elementu `<title>` w dokumencie HTML).

### Przykład

    <html>
    <head>
     <title>Hello World!</title>
    </head>
    <body>
     <script>
     alert(document.title); // wyswietla "Hello World!"
     document.title = "Goodbye World!";
     alert(document.title); // wyswietla "Goodbye World!"
     </script>
    </body>
    </html>

### Uwagi

Własność ta ma zastosowanie w HTML, SVG, XUL i innych dokumentach w Gecko.

Dla dokumentów HTML początkową wartością `document.title` jest zawartość tekstowa elementu `<title>`. Dla XUL-a jest to wartość atrybutu {{ XULAttr("title") }} elementu {{ XULElem("window") }} lub innego elementu XUL najwyższego poziomu.

W XUL-u próba dostępu do `document.title` zanim jeszcze dokument zostanie w pełni załadowany może skutkować niepożądanym zachowaniem (`document.title` może zwrócić pusty łańcuch znaków, a ustawienie `document.title` może nie mieć żadnego efektu).

### Specyfikacja

[DOM Level 2 HTML: document.title](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-18446827)

{{ languages( { "en": "en/DOM/document.title" } ) }}
