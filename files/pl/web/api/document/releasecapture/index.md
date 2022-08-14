---
title: Document.releaseCapture()
slug: Web/API/Document/releaseCapture
translation_of: Web/API/Document/releaseCapture
---
{{ ApiRef("DOM") }} {{gecko_minversion_header("2.0")}}

Zwalnia śledzenie myszy, jeśli śledzenie jest ustawione na jakimś elemencie wewnątrz dokumentu. Możesz włączyć śledzenie wywołując {{domxref("element.setCapture()")}}.

## Składnia

    document.releaseCapture()

Po zwolnieniu śledzenia, zdarzenia myszy nie będą przekierowywane do elementu dla którego śledzenie było włączone.

## Przykład

Zobacz przykład [przykład](/pl/docs/Web/API/element.setCapture#Example) dla {{domxref("element.setCapture()")}}.

## Specyfikacja

Oparta na implementacji Internet Explorera.

## Zobacz także

- {{domxref("element.setCapture()")}}
