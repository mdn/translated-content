---
title: Location.reload()
slug: Web/API/Location/reload
tags:
  - API
  - HTML-DOM
  - Location
  - Metodă
translation_of: Web/API/Location/reload
---
{{ APIRef("HTML DOM") }}

Metoda **`Location.reload()`** ponownie ładuje zasób z bieżącego adresu URL. Jej opcjonalnym i jednocześnie unikalnym parametrem jest parametr {{domxref("Boolean")}}. Jeśli przyjmie on wartość `true`, powoduje zawsze ponownie ładowanie strony z serwera. Jeśli jego wartość wynosi `false` lub nie jest zdefiniowana, przeglądarka może ponownie załadować stronę z pamięci podręcznej. Poza domyślnym zachowaniem pamięci cache, flaga `forcedReload` wpływa również na to, jak niektóre przeglądarki obsługują pozycję przewijania strony: zwykłe przeładowanie próbuje przywrócić pozycję przewijania po ponownym załadowaniu strony, natomiast w trybie wymuszonym (gdy parametr jest ustawiony na wartość `true`) nowy DOM zostaje wczytany ze `scrollTop == 0`.

Jeśli przypisanie nie może się wydarzyć z powodu naruszenia bezpieczeństwa, zostanie zgłoszony wyjątek {{domxref("DOMException")}} typu `SECURITY_ERROR`. Dzieje się tak, gdy pochodzenie skryptu wywołującego metodę różni się od pochodzenia strony opisanej przez obiekt {{domxref("Location")}} (zazwyczaj kiedy skrypt jest hostowany na innej domenie).

## Składnia

    object.reload(forcedReload);

### Parametry

- _forcedReload_ {{optional_inline}}
  - : Jest flagą {{domxref("Boolean")}}, która przyjmując wartość `true`, zawsze powoduje przeładowanie strony z serwera. Jeśli jej wartość to `false` lub nie została ona zdefiniowana, przeglądarka może wczytać stronę z pamięci podręczniej (pamięci cache).

## Przykłady

```js
// Przeładuj bieżącą stronę bez cache
window.location.reload(true);
```

## Lista specyfikacji

| Specyfikacja                                                                                                     | Status                           | Komentarz                                      |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | ---------------------------------------------- |
| {{SpecName('HTML WHATWG', "history.html#dom-location-reload", "Location.reload()")}} | {{Spec2('HTML WHATWG')}} | Bez zmian od {{SpecName("HTML5 W3C")}}. |
| {{SpecName('HTML5 W3C', "browsers.html#dom-location-reload", "Location.reload()")}} | {{Spec2('HTML5 W3C')}}     | Początkowa definicja.                          |

## Zgodność przeglądarek

{{Compat("api.Location.reload")}}

## Zobacz także

- Interfejs {{domxref("Location")}}.
- Podobne metody: {{domxref("Location.assign()")}} i {{domxref("Location.replace()")}}.
