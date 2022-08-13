---
title: '@viewport'
slug: Web/CSS/@viewport
translation_of: Web/CSS/@viewport
---
{{ CSSRef() }}

## Zusammenfassung

Die `@viewport` [CSS](/en/CSS "CSS") [at-Regel](/en/CSS/At-rule "en/CSS/At-rule") enthält eine Menge aus geschachtelten Deskriptoren in einem CSS-Block, der durch geschweifte Klammern begrenzt wird. Diese Deskriptoren steuern die Viewport-Einstellungen, insbesondere auf mobilen Geräten.

## Syntax

(Dieser MDN Artikel ist derzeit nur ein Abriss, ihm fehlt die vollständige Beschreibung der Syntax.)

```css
@viewport {
  /* viewport-Deskriptor: viewport-Wert; */
}
```

Ein _Zoomfaktor_ von `1.0` oder `100%` beschreibt kein Zooming. Größere Werte vergrößern, kleinere Werte verkleinern.

### Deskriptoren

Browser sollen unbekannte Deskriptoren ignorieren.

- [`min-width`](/de/docs/Web/CSS/@viewport/min-width)
  - : Verwendet für die Festlegung der Breite des Viewports, wenn das Dokument zum ersten Mal gezeigt wird.
- [`max-width`](/de/docs/Web/CSS/@viewport/max-width)
  - : Verwendet für die Festlegung der Breite des Viewports, wenn das Dokument zum ersten Mal gezeigt wird.
- [`width`](/de/docs/Web/CSS/@viewport/width)
  - : Eine Kurznotation für die Festlegung von sowohl `min-width` als auch `max-width`
- [`min-height`](/de/docs/Web/CSS/@viewport/min-height)
  - : Verwendet für die Festlegung der Höhe des Viewports, wenn das Dokument zum ersten Mal gezeigt wird.
- [`max-height`](/de/docs/Web/CSS/@viewport/max-height)
  - : Verwendet für die Festlegung der Höhe des Viewports, wenn das Dokument zum ersten Mal gezeigt wird.
- [`height`](/de/docs/Web/CSS/@viewport/height)
  - : Eine Kurznotation für die Festlegung von sowohl `min-height` als auch `max-height`
- [`zoom`](/de/docs/Web/CSS/@viewport/zoom)
  - : Legt den initialen Zoomfaktor fest.
- [`min-zoom`](/de/docs/Web/CSS/@viewport/min-zoom)
  - : Legt den minimalen Zoomfaktor fest.
- [`max-zoom`](/de/docs/Web/CSS/@viewport/max-zoom)
  - : Legt den maximalen Zoomfaktor fest.
- [`user-zoom`](/de/docs/Web/CSS/@viewport/user-zoom)
  - : Steuert, ob der Anwender den Zoomfaktor ändern darf.
- [`orientation`](/de/docs/Web/CSS/@viewport/orientation)
  - : Steuert die Orientierung des Dokuments (Hoch- oder Querformat).

## Beispiele

```css
@viewport {
  min-width: 640px;
  max-width: 800px;
}
@viewport {
  zoom: 0.75;
  min-zoom: 0.5;
  max-zoom: 0.9;
}
@viewport {
  orientation: landscape;
}
```

## Spezifikationen

| Spezification                                                                        | Status                           | Kommentar |
| ------------------------------------------------------------------------------------ | -------------------------------- | --------- |
| {{SpecName('CSS3 Device', '#the-atviewport-rule', '@viewport')}} | {{Spec2('CSS3 Device')}} |           |

## Browserkompatibilität

{{Compat("css.at-rules.viewport")}}

## Siehe auch

- {{HTMLElement("meta")}}, specifically `<meta name="viewport">`
- [Using the viewport meta tag to control layout on mobile browsers](/de/docs/Mobile/Viewport_meta_tag)
