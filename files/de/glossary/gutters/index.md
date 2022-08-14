---
title: Gutters
slug: Glossary/Gutters
tags:
  - CSS Grid
translation_of: Glossary/Gutters
---
Die Zwischenräume zwischen den Inhaltsbereichen sind _gutters_ oder _alleys_. Diese können im CSS Grid Layout über die Eigenschaften `grid-column-gap`, `grid-row-gap` oder `grid-gap` erstellt werden.

Im folgenden Beispiel haben wir ein dreispaltiges und zweireihiges Grid mit 20-Pixel-Lücken zwischen den Spalten und 20-Pixel-Lücken zwischen den Reihen.

```css hidden
* {box-sizing: border-box;}

.wrapper {
    border: 2px solid #f76707;
    border-radius: 5px;
    background-color: #fff4e6;
}

.wrapper > div {
    border: 2px solid #ffa94d;
    border-radius: 5px;
    background-color: #fff8f8;
    padding: 1em;
    color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3,1.2fr);
  grid-auto-rows: 45%;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}
```

```html
<div class="wrapper">
   <div>One</div>
   <div>Two</div>
   <div>Three</div>
   <div>Four</div>
   <div>Five</div>
</div>
```

{{ EmbedLiveSample('example_1', '300', '280') }}

In Bezug auf die Gridgröße verhalten sich die Zwischenräume (gaps) wie eine normale Spalte oder Reihe, jedoch kann nichts darin platziert werden. Der Abstand wirkt so, als ob die Gitterlinie an dieser Stelle eine zusätzlichen Platz bekommen hätte, so dass jedes nach dieser Linie platzierte Grid-Element am Ende des Abstandes beginnt.

Die Grid-Gap-Eigenschaften sind nicht das Einzige, was dazu führen kann, dass Reihen oder Spalten überlaufen. Margins, Padding oder die Verwendung der Raumverteilungseigenschaften im [Box Alignment ](/de/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)können alle zum sichtbaren Spalt beitragen - daher sollten die Grid-Gap-Eigenschaften nicht gleich "der Rastergröße" gesehen werden, es sei denn, Sie wissen, dass Ihr Entwurf nicht mit einer dieser Methoden zusätzlichen Raum geschaffen hat.

## Erfahren Sie mehr

### Eigenschaftsreferenz

- {{cssxref("grid-column-gap")}}
- {{cssxref("grid-row-gap")}}
- {{cssxref("grid-gap")}}

### Weiterführende Informationen

- CSS Grid Layout Anleitung: _[Basic concepts of grid layout](/de/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)_
- [Definition of gutters in the CSS Grid Layout specification](https://drafts.csswg.org/css-grid/#gutters)
