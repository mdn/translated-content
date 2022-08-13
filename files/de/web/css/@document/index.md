---
title: '@document'
slug: Web/CSS/@document
tags:
  - At-Regel
  - CSS
  - Referenz
translation_of: Web/CSS/@document
---
{{CSSRef}}{{SeeCompatTable}}

## Übersicht

Die **`@document`** [CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/At-Regel) beschränkt die Stilregeln, die sie beinhaltet, basierend auf dem URL des Dokuments. Sie wurde hauptsächlich für Benutzerstylesheets entworfen. Eine `@document` Regel kann eine oder mehrere Matchingfunktionen definieren. Falls eine der Funktionen auf einen URL passt, wird die Regel auf diesen URL angewandt.

Der Hauptanwendungsfall ist für benutzerdefinierte Stylesheets, jedoch kann diese Regel auch für autordefinierte Stylesheets verwendet werden.

Die verfügbaren Funktionen sind:

- `url()`, welche einen exakten URL matcht.
- `url-prefix()`, welche matcht, falls der Dokument-URL mit dem angegebenen Wert beginnt.
- `domain()`, welche matcht, falls der Dokument-URL zur angegebenen Domain (oder einer Subdomain davon) gehört.
- `regexp()`, welche matcht, falls der Dokument-URL auf den angegebenen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_Expressions) passt. Der Ausdruck muss den gesamten URL matchen.

## Syntax

Die angegebenen Werte für die `url()`, `url-prefix()` und `domain()` Funktionen können optional durch einfache oder doppelte Anführungszeichen umschlossen werden. Die angegebenen WErte für die `regexp()` Funktion **müssen** durch Anführungenzeichen umschlossen sein.

Für die `regexp()` Funktion escapte Werte müssen zusätzlich vom CSS escapt werden. Zum Beispiel matcht ein `.` (Punkt) ein beliebiges Zeichen in regulären Ausdrücken. Um einen Punkt zu matchen, muss er zunächst anhand der Regeln für reguläre Ausdrücke escapt werden (also `\.`) und anschließend durch die CSS Regeln (also `\\.`).

### Formale Syntax

{{csssyntax}}

## Beispiele

```css
@document url(http://www.w3.org/),
               url-prefix(http://www.w3.org/Style/),
               domain(mozilla.org),
               regexp("https:.*")
{
  /* CSS Regeln hier werden angewandt auf:
     - Die Seite "http://www.w3.org/".
     - Jede Seite, deren URL mit "http://www.w3.org/Style/" beginnt
     - Jede Seite, deren URLs Host "mozilla.org" ist oder mit ".mozilla.org" endet
     - Jede Seite, deren URL mit "https:" beginnt */

  /* macht die oben erwähnten Seiten wirklich hässlich */
  body {
    color: purple;
    background: yellow;
  }
}
```

## Spezifikationen

[Ursprünglich](http://www.w3.org/TR/2012/WD-css3-conditional-20120911/#at-document) in {{SpecName('CSS3 Conditional', '', '')}}, wurde `@document` nach Level 4 [verschoben](http://www.w3.org/TR/2012/WD-css3-conditional-20121213/#changes).

## Browser Kompatibilität

{{Compat("css.at-rules.document")}}

## Siehe auch

- [Per-site user style sheet rules](http://lists.w3.org/Archives/Public/www-style/2004Aug/0135) on the www-style mailing list.
- The file [`userContent.css`](http://www.mozilla.org/support/firefox/edit#content) is a user stylesheet on Gecko-based browsers.
