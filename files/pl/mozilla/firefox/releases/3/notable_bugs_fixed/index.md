---
title: Istotne błędy poprawione w Firefoksie 3
slug: Mozilla/Firefox/Releases/3/Notable_bugs_fixed
tags:
  - Strony_wymagające_dopracowania
translation_of: Mozilla/Firefox/Releases/3/Notable_bugs_fixed
original_slug: Istotne_błędy_poprawione_w_Firefoksie_3
---
{{FirefoxSidebar}}

W tym artykule przedstawiono listę ważnych błędów, które zostały poprawione w Firefoksie 3, lecz nie zostały szczegółowo uwzględnione w dokumentacji.

- W przypadku wystąpienia błędu podczas przetwarzania nakładki nie jest ona stosowana. Błędy przetwarzania są rejestrowane w konsoli błędów ({{ Bug(355755) }}).
- Rozwiązany błąd, gdzie elementy `<menupopup>` mogą być umieszczone wewnątrz wiązania podczas gdy zostały przymocowane już do menu lub elementu podobnego do menu. ({{ Bug(345896) }})
- Własność `dlgType` przycisków działa poprawnie ({{ Bug(308591) }}).
- Argument `canBubble` metody {{ Domxref("event.initEvent") }} działa poprawnie, co pozwala na wywołanie zdarzeń, które nie działają w trybie bąbelkowania ({{ Bug(330190) }}).
- Zdarzenie `DOMAttrModified` poprawnie obsługuje atrybuty ze zdefiniowaną przestrzenią nazw ({{ Bug(362391) }})).
- Instrukcje przetwarzania XML, takie jak `<?xml-stylesheet ?>`, są dodawane do modelu DOM dokumentów XUL. W wyniku tego własność {{ Domxref("document.firstChild") }} nie zawsze zwraca element główny — należy zamiast niej skorzystać z własności {{ Domxref("document.documentElement") }}. Ponadto instrukcje przetwarzania `<?xml-stylesheet ?>` i `<?xul-overlay ?>` nie są wykonywane, jeżeli umieszczono je poza prologiem dokumentu ({{ Bug(319654) }}).
- Do elementów i dokumentów XUL dodano metodę `getElementsByAttributeNS()` ({{ Bug(239976) }}).
- Funkcje obsługi zdarzeń są zachowywane w przypadku przeniesienia lub usunięcia elementu z dokumentu XUL ({{ Bug(286619) }}).
- Zdarzenia zmiany są teraz wyzwalane dla dokumentów niewyświetlanych ({{ Bug(201236) }}).
- Poprawiono wiele błędów związanych z nieprawidłową kolejnością rysowania elementów ({{ Bug(317375) }}).
- Metoda [`getElementsByTagName()`](/pl/DOM/element.getElementsByTagName "pl/DOM/element.getElementsByTagName") została poprawiona i działa teraz prawidłowo dla poddrzew z elementami, których nazwy znaczników zawierają prefiks przestrzeni nazw ({{ Bug(206053) }}).
- Zdarzenia `DOMNodeInserted` i `DOMNodeRemoved` są teraz stosowane do właściwych węzłów ({{ Bug(367164) }}).
- Sekwencja `\d`, jeden ze znaków specjalnych w wyrażeniach regularnych, oznacza teraz cyfry wyłącznie z podstawowego alfabetu łacińskiego (odpowiednik sekwencji `{{ mediawiki.external('0-9') }}`); ({{ Bug(378738) }}).
- Serwisy oferujące wyszukiwanie obrazków zyskują dostęp do dekoderów obrazków tak jak rozszerzenia poprawnie odkodowane z nieprawidłowymi mime-typami.({{ Bug(391667) }})
- Kliknięcie prawym przyciskiem myszy na kontrolkach formularzy już nie zmienia menu kontekstowego na domyślne. ({{ Bug(404536) }}. Przeczytaj [Offering a context menu for form controls](/En/Offering_a_context_menu_for_form_controls "en/Offering a context menu for form controls") by nauczyć się jak włączyć to na wszelki wypadek.

### Zobacz również

- [Firefox 3 dla programistów](/pl/Firefox_3_dla_programist%C3%B3w "pl/Firefox_3_dla_programistów")
