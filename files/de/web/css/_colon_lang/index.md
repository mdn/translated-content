---
title: ':lang'
slug: Web/CSS/:lang
tags:
  - CSS
  - CSS Pseudoklasse
  - Layout
  - Referenz
  - Web
translation_of: Web/CSS/:lang
---
{{CSSRef}}

## Übersicht

Die `:lang` CSS [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) matcht Elemente anhand der Sprache, in der das Element ist. In HTML wird die Sprache durch eine Kombination aus `lang` Attribut, dem {{HTMLElement("meta")}} Element und möglicherweise durch Informationen durch das Protokoll (wie z. B. HTTP Header). Für andere Dokumenttypen können andere Dokumentmethoden zur Bestimmung der Sprache existieren.

Akzeptierte `language-code` Strings werden in der [HTML](/de/docs/Web/HTML) 4.0 Specification definiert.

## Syntax

    element:lang(language-code) { Stileigenschaften }

## Beispiel

In diesem Beispiel wird der `lang` Selektor dazu verwendet, um mit Hilfe von [Kindselektoren](/de/docs/Web/CSS/Kindselektoren) das Elternelement eines {{HTMLElement("q")}} Elements zu matchen. Es ist nicht dazu gedacht, den einzigen oder sogar den korrekten (was vom Dokumenttyp abhängt) Weg aufzuzeigen, um dies umzusetzen. Beachte, Unicodewerte werden verwendet, um spezielle Anführungszeichen anzugeben.

```css
:lang(en) > q { quotes: '\201C' '\201D' '\2018' '\2019'; }
:lang(fr) > q { quotes: '« ' ' »'; }
:lang(de) > q { quotes: '»' '«' '\2039' '\203A'; }
```

... wo ...

```html
  <div lang="fr"><q>Dieses französische Anführungszeichen hat ein <q>verschachteltes</q> Zitat.</q></div>
  <div lang="de"><q>Dieses deutsche Anführungszeichen hat ein <q>verschachteltes</q> Zitat.</q></div>
  <div lang="en"><q>Dieses englische Anführungszeichen hat ein <q>verschachteltes</q> Zitat.</q></div>
```

... wird dargestellt als ...

{{EmbedLiveSample('Beispiel', '100%', 100)}}

## Spezifikationen

| Spezifikation                                                                | Status                               | Kommentar                  |
| ---------------------------------------------------------------------------- | ------------------------------------ | -------------------------- |
| {{SpecName('CSS4 Selectors', '#lang-pseudo', ':lang()')}} | {{Spec2('CSS4 Selectors')}} | Keine Änderung             |
| {{SpecName('CSS3 Selectors', '#lang-pseudo', ':lang()')}} | {{Spec2('CSS3 Selectors')}} | Keine wesentliche Änderung |
| {{SpecName('CSS2.1', 'selector.html#lang', ':lang()')}}     | {{Spec2('CSS2.1')}}             | Ursprüngliche Definition   |

## Browser Kompatibilität

{{Compat("css.selectors.lang")}}

## Siehe auch

- Sprachbezogene Pseudoklassen: {{cssxref(":lang")}}, {{cssxref(":dir")}}
- [Spracheigenschaft](/de/docs/Web/API/HTMLElement/lang)
- [W3C HTML 4: Sprachcodes](http://www.w3.org/TR/REC-html40/struct/dirlang.html#h-8.1.1)
- [W3C DOM Level 2 HTML: lang](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-59132807)
