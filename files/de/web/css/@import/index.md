---
title: '@import'
slug: Web/CSS/@import
tags:
  - '@-Regel'
  - CSS
  - Referenz
translation_of: Web/CSS/@import
---
{{CSSRef}}

## Übersicht

Die **`@import`** [CSS](/de/docs/Web/CSS) [@-Regel](/de/docs/Web/CSS/At-rule) wird verwendet, um Stilregeln anderer Stylesheets zu importieren. Diese Regeln müssen allen anderen Typen von Regeln vorangehen außer {{cssxref("@charset")}} Regeln; da sie kein [verschachteltes Statement](/de/docs/Web/CSS/Syntax#verschachtelte_Statements) ist, kann `@import` nicht innerhalb [bedingter Gruppen-@-Regeln](/de/docs/Web/CSS/At-rule#Bedingte_Gruppenregeln) verwendet werden.

Damit User Agents verhindern können, Ressourcen für nicht unterstützte Medientypen zu holen, können Autoren medienabhängige `@import` Regeln definieren. Diese bedingten Importe definieren kommaseparierte [Media Queries](/de/docs/Web/CSS/Media_Queries/Media_Queries_verwenden) nach dem URI. Falls keine Media Query angegeben wurde, ist der Import unbedingt. Die Angabe von `all` für das Medium hat denselben Effekt.

## Syntax

    @import url;
    @import url list-of-media-queries;

wobei:

- _url_
  - : Ist ein {{cssxref("&lt;string&gt;")}} oder ein {{cssxref("&lt;uri&gt;")}}, der die Adresse der zu importierenden Ressource repräsentiert. Der URL kann absolut oder relativ sein. Beachte, dass der URL nicht unbedingt eine Datei referenzieren muss; er kann auch nur den Packagenamen und -teil angeben und die passende Datei wird automatisch ausgewählt (z. B. **chrome://communicator/skin/**). [Siehe hier](/de/docs/XUL_Tutorial/Die_Chrome_URL) für mehr Informationen.
- _list-of-media-queries_
  - : Ist eine kommaseparierte Liste von [Media Queries](/de/docs/Web/CSS/Media_Queries/Media_Queries_verwenden), die die Anwendung der in dem verlinkten URL definierten CSS Regeln bedingt. Falls der Browser keine dieser Media Queries unterstützt, lädt er die verlinkte Ressource nicht.

### Formale Syntax

{{csssyntax}}

## Beispiele

```css
@import url("fineprint.css") print;
@import url("bluish.css") projection, tv;
@import 'custom.css';
@import url("chrome://communicator/skin/");
@import "common.css" screen, projection;
@import url('landscape.css') screen and (orientation:landscape);
```

## Spezifikationen

| Spezifikation                                                                    | Status                                   | Kommentar                                                                                                                                                                                          |
| -------------------------------------------------------------------------------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS3 Media Queries', '#media0', '@import')}}     | {{Spec2('CSS3 Media Queries')}} | Erweitert die Syntax zur Unterstützung beliebiger Media Queries und nicht nur einfache [Medientypen](/de/docs/Web/CSS/@media#Medientypen).                                                         |
| {{SpecName('CSS2.1', 'cascade.html#at-import', '@import')}} | {{Spec2('CSS2.1')}}                 | Fügt Unterstützung für {{cssxref("&lt;string&gt;")}} hinzu, um den URL eines Stylesheets anzugeben, und Voraussetzung dafür, die `@import` Regel am Anfang des CSS Dokuments anzugeben. |
| {{SpecName('CSS1', '#the-cascade', '@import')}}                 | {{Spec2('CSS1')}}                 | Ursprüngliche Definition                                                                                                                                                                           |

## Browser Kompatibilität

{{Compat("css.at-rules.import")}}
