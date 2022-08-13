---
title: Poprawki DOM w Firefoksie 3
slug: Mozilla/Firefox/Releases/3/DOM_improvements
tags:
  - DOM
  - Firefox 3
  - Wszystkie_kategorie
translation_of: Mozilla/Firefox/Releases/3/DOM_improvements
original_slug: Poprawki_DOM_w_Firefoksie_3
---
{{FirefoxSidebar}}

W programie Firefox 3 wprowadzono szereg udoskonaleń implementacji [Obiektowego Modelu Dokumentu](pl/DOM) (ang._Document Object Model_ — DOM), dotyczących przede wszystkim obsługi rozszerzeń DOM zastosowanych w innych przeglądarkach. W tym artykule przedstawiono listę zmian oraz odnośniki do szczegółowej dokumentacji.

- Obsługiwane są rozszerzenia DOM z przeglądarki Internet Explorer: [`clientTop`](pl/DOM/element.clientTop) i [`clientLeft`](pl/DOM/element.clientLeft).
- Własność [`window.fullScreen`](pl/DOM/window.fullScreen) zwraca zawsze dokładną wartość, niezależnie od kontekstu, w którym jest odczytywana. W poprzednich wersjach Firefoksa zwracana była nieprawidłowa wartość `false` ({{ Bug(127013) }}).
- Obsługiwane są rozszerzenia DOM [`getClientRects`](pl/DOM/element.getClientRects) i [`getBoundingClientRect`](pl/DOM/element.getBoundingClientRect) (patrz {{ Bug(174397) }}).
- Obsługiwane jest rozszerzenie DOM z przeglądarki Internet Explorer: [`elementFromPoint`](pl/DOM/document.elementFromPoint) ({{ Bug(199692) }}).
- Obsługiwane są rozszerzenia DOM z przeglądarki Internet Explorer: [`oncut`](pl/DOM/element.oncut), [`oncopy`](pl/DOM/element.oncopy), [`onpaste`](pl/DOM/element.onpaste), [`onbeforecut`](pl/DOM/element.onbeforecut), [`onbeforecopy`](pl/DOM/element.onbeforepaste) i [`onbeforepaste`](pl/DOM/element.onbeforepaste) ({{ Bug(280959) }}).
- Dodano dostępne wyłącznie w kodzie uprzywilejowanym metody pobierania dla własności `Node.nodePrincipal`, `Node.baseURIObject` i [`document.documentURIObject`](pl/DOM/document.documentURIObject). W kodzie chrome nie wolno ani pobierać, ani ustawiać tych własności dla obiektu nieopakowanego (np. dla obiektu `wrappedJSObject`, będącego własnością obiektu [`XPCNativeWrapper`](pl/XPCNativeWrapper)); aby uzyskać szczegółowe informacje, patrz {{ Bug(324464) }}.
- Obsługiwana jest metoda DOM [`getElementsByClassName()`](pl/DOM/document.getElementsByClassName), zdefiniowana w specyfikacji The Web Applications 1.0 (HTML5).

### Zobacz także

- [Firefox 3 dla programistów](pl/Firefox_3_dla_programist%c3%b3w)
- [Poprawki CSS w Firefoksie 3](pl/Poprawki_CSS_w_Firefoksie_3)
- [DOM](pl/DOM)







{{ languages( { "en": "en/DOM_improvements_in_Firefox\_3", "es": "es/Mejoras_DOM_en_Firefox\_3", "fr": "fr/Am\u00e9liorations_DOM_dans_Firefox\_3", "ja": "ja/DOM_improvements_in_Firefox\_3" } ) }}
