---
title: window.clearInterval
slug: Web/API/clearInterval
tags:
  - Window
translation_of: Web/API/WindowOrWorkerGlobalScope/clearInterval
original_slug: Web/API/WindowOrWorkerGlobalScope/clearInterval
---
{{ApiRef}}

## Podsumowanie

Anuluje powtarzającą się akcję, która została utworzona korzystając z [`setInterval()`](/pl/docs/DOM/window.setInterval "DOM/window.setInterval").

## Składnia

    window.clearInterval(idInterwalu)

`idInterwalu` to identyfikator powtarzającej się akcji, która ma zostać anulowana. Ten identyfikator został zwrócony z {{domxref("window.setInterval","setInterval()")}}.

## Przykład

Zobacz [przykład z `setInterval()`](/pl/docs/DOM/window.setInterval#Przyk.C5.82ad "DOM/window.setInterval#Przyk.C5.82ad").

## Specification

{{DOM0}}

## Zobacz także

- [JavaScript zegary](/pl/docs/JavaScript/Timers "JavaScript/Timers")
- {{domxref("window.setTimeout")}}
- {{domxref("window.setInterval")}}
- {{domxref("window.clearTimeout")}}
- {{domxref("window.requestAnimationFrame")}}
- [_Daemons_ zarządzanie](/pl/docs/JavaScript/Timers/Daemons "JavaScript/Timers/Daemons")
