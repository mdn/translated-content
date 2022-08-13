---
title: Window.scroll()
slug: Web/API/Window/scroll
translation_of: Web/API/Window/scroll
---
{{APIRef}}

## Zusammenfassung

Scrollt das Fenster zu einer bestimmten Stelle im Dokument.

## Syntax

    window.scroll(x-koord,y-koord)

### Parameters

- `x-koord` ist das Pixel auf der horizontalen Achse des Dokuments, das Sie in der oberen linken Ecke angezeigt haben wollen.
- `y-koord` ist das Pixel auf der vertikalen Achse des Dokuments, das Sie in der oberen linken Ecke angezeigt haben wollen.

## Beispiel

```html
<!-- lege den 100. vertikalen Pixel an der oberen Fensterrand -->

<button onClick="scroll(0, 100);">Klicken, um 100 Pixel nach unten zu scrollen</button>
```

## Notizen

[window.scrollTo](/de/docs/DOM/window.scrollTo) ist praktisch dasselbe wie diese Methode. Zum wiederholten Blättern um einen bestimmten Abstand, wird [window.scrollBy](/de/docs/Window.scrollBy) benutzt. Siehe auch [window.scrollByLines](/de/docs/Window.scrollByLines), [window.scrollByPages](/de/docs/Window.scrollByPages).

## Spezifikation

| Specification                                                                                    | Status                           | Comment           |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ----------------- |
| {{ SpecName('CSSOM View', '#dom-window-scrollto', 'window.scrollTo()') }} | {{ Spec2('CSSOM View') }} | Erste Definition. |
