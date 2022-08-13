---
title: Window.scrollTo()
slug: Web/API/Window/scrollTo
tags:
  - API
  - Méthode
  - Referenz
translation_of: Web/API/Window/scrollTo
---
{{ APIRef }}

**`Window.scrollTo()`** scrollt zu einer spezifischen Koordinate im Dokument.

## Syntax

    window.scrollTo(x-Koordinate, y-Koordinate)
    window.scrollTo(options)

### Parameter

- `x-Koordinate` ist der Pixel auf der horizontalen Achse des Dokuments, wo der obere linke Punkt sein soll.
- `y-koordinate` ist der Pixel auf der vertikalen Achse des Dokuments, wo der obere linke Punkt sein soll.

\- or -

- `options` ist ein {{domxref("ScrollToOptions")}} Dictionary.

## Beispiele

```js
window.scrollTo(0, 1000);
```

Mit Benutzung von `options`:

```js
window.scrollTo({
  top: 100,
  left: 100,
  behavior: 'smooth'
});
```

## Anmerkungen

{{domxref("Window.scroll()")}} ist im Endeffekt die gleiche Methode. Schau dir {{domxref("Window.scrollBy()")}}, {{domxref("Window.scrollByLines()")}}, und {{domxref("Window.scrollByPages()")}} für relatives scrollen an.

Um Elemente zu scrollen, schau dir {{domxref("Element.scrollTop")}} und {{domxref("Element.scrollLeft")}} an.

## Spezifikationen

| Spezifikation                                                                                | Status                           | Kommentar               |
| -------------------------------------------------------------------------------------------- | -------------------------------- | ----------------------- |
| {{ SpecName('CSSOM View', '#dom-window-scroll', 'window.scroll()') }} | {{ Spec2('CSSOM View') }} | Anfängliche Definition. |

## Browser Kompatibilität

{{Compat("api.Window.scrollTo")}}
