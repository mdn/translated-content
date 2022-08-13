---
title: Globalne wyszukiwanie, wielkość znaków, wieloliniowe wejście
slug: Web/JavaScript/Guide/Regular_Expressions
tags:
  - JavaScript
  - Przewodnik_JavaScript
  - Wszystkie_kategorie
translation_of: Web/JavaScript/Guide/Regular_Expressions
translation_of_original: >-
  Web/JavaScript/Guide/Obsolete_Pages/Working_with_Regular_Expressions/Advanced_Searching_With_Flags
original_slug: >-
  Web/JavaScript/Guide/Obsolete_Pages/Przewodnik_po_języku_JavaScript_1.5/Praca_z_wyrażeniami_regularnymi/Globalne_wyszukiwanie,_wielkość_znaków,_wieloliniowe_wejście
---
### Zaawansowane wyszukiwanie za pomocą flag

Wyrażenia regularne posiadają cztery opcjonalne flagi, które pozwalają na globalne i niezależne od wielkości znaków wyszukiwanie. Aby wskazać wyszukiwanie globalne, użyj flagi `g`. Aby wskazać wyszukiwanie nieczułe na wielkość znaków, użyj flagi `i`. Aby wskazać wyszukiwanie wieloliniowe, użyj flagi `m`. Aby przeprowadzić "lepkie" wyszukiwanie, które pasuje do początku obecnej pozycji w łańcuchu docelowym, użyj flagi `y`. Flagi te mogą być użyte oddzielnie lub razem w dowolnej kolejności i są dołączane jako część wyrażenia regularnego.

{{ Fx_minversion_note(3, "Obsługa flagi <code>y</code> została dodana w Firefoksie 3. Użycie flagi <code>y</code> skutkuje niepowodzeniem, jeśli wynik nie następuje po aktualnej pozycji w łańcuchu docelowym.") }}

Aby dołączyć flagę do wyrażenia regularnego, użyj składni:

    re = /pattern/flags
    re = new RegExp("pattern", ["flags"])

Zauważ że flagi są integralną częścią wyrażenia regularnego. Nie mogą być one dodane lub usunięte później.

Na przykład, `re = /\w+\s/g` tworzy wyrażenie regularne, które szuka jednego lub więcej znaków, po których następuje spacja, szukając tej kombinacji w całym łańcuchu znaków.

    <script type="text/javascript">
     re = /\w+\s/g;
     str = "fee fi fo fum";
     myArray = str.match(re);
     document.write(myArray);
    </script>

To wyświetli {{ mediawiki.external('\"fee \", \"fi \", \"fo \"') }}. W tym przykładzie możesz zamienić linię:

    re = /\w+\s/g;

z:

    re = new RegExp("\\w+\\s", "g");

otrzymując ten sam rezultat.

Flaga `m` jest używana do określenia, że wieloliniowy łańcuch wejściowy powinien być traktowany jako wiele linii. Jeśli użyta jest flaga `m`, ^ i $ odpowiadają za początek lub koniec z każdej linii w wejściowym łańcuchu znaków zamiast początku i końca całego łańcucha.

{{ PreviousNext("Przewodnik po języku JavaScript 1.5:Praca z wyrażeniami regularnymi:Użycie odpowiedniego znaku", "Przewodnik po języku JavaScript 1.5:Praca z wyrażeniami regularnymi:Przykłady wyrażeń regularnych") }}

{{ languages( { "en": "en/Core_JavaScript\_1.5\_Guide/Working_with_Regular_Expressions/Advanced_Searching_With_Flags", "es": "es/Gu\u00eda_JavaScript\_1.5/Trabajar_con_expresiones_regulares/Ejecutar_una_busqueda_global,\_discriminar_mayusculas_y_minusculas_y_considerar_entrada_multil\u00ednea", "fr": "fr/Guide_JavaScript\_1.5/Travailler_avec_les_expressions_rationnelles/Ex\u00e9cution_de_recherches_globales,\_ignorer_la_casse,\_utilisation_de_cha\u00eenes_multilignes", "ja": "ja/Core_JavaScript\_1.5\_Guide/Working_with_Regular_Expressions/Advanced_Searching_With_Flags" } ) }}
