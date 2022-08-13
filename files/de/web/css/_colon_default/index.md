---
title: ':default'
slug: Web/CSS/:default
tags:
  - CSS
  - CSS Pseudoklasse
  - Layout
  - NeedsMobileBrowserCompatibility
  - Referenz
  - Web
translation_of: Web/CSS/:default
---
{{CSSRef}}

## Übersicht

Die `:default` [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Benutzerschnittstellenelement, das das Standardelement innerhalb einer Gruppe ähnlicher Elemente darstellt.

Zum Beispiel kann mithilfe dieser Pseudoklasse die Standardschaltfläche in einer Gruppe von Schaltflächen ausgewählt werden.

Benutzerschnittstellenelemente, die Mehrfachauswahlen erlauben, können mehrere Standardwerte haben, um anfangs mit mehreren selektierten Einträgen angezeigt zu werden. In diesem Fall werden alle Standardwerte über die `:default` Pseudoklasse angesprochen.

## Syntax

    :default { Stileigenschaften }

## Beispiele

```css
:default
{
  background-color: lime;
}
```

...auf folgendes HTML angewendet...

```html
 <form method="get">
   <p><input type="submit" id="submit1"></p>
   <p><input type="submit" id="submit2"></p>
   <p><input type="reset"></p>
 </form>
```

Dieses Beispiel färbt die Hintergrundfarbe für die Absendeschaltfläche des Formulars in `lime` ein.

## Spezifikationen

| Spezifization                                                                    | Status                               | Kommentar                                                                                                      |
| -------------------------------------------------------------------------------- | ------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', '#selector-default', ':default')}} | {{Spec2('HTML WHATWG')}}     | Keine Änderung.                                                                                                |
| {{SpecName('HTML5 W3C', '#selector-default', ':default')}}     | {{Spec2('HTML5 W3C')}}         | Definiert die Semantik in Bezug auf HTML und Defines the semantic regarding HTML and Beschränkungsvalidierung. |
| {{SpecName('CSS4 Selectors', '#default-pseudo', ':default')}} | {{Spec2('CSS4 Selectors')}} | Keine Änderung.                                                                                                |
| {{SpecName('CSS3 UI', '#pseudo-default', ':default')}}         | {{Spec2('CSS3 UI')}}         | Definiert die Pseudoklasse, aber nicht die dazugehörige Semantik.                                              |

## Browser Kompatibilität

{{Compat("css.selectors.default")}}
