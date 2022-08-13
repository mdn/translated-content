---
title: Grid
slug: Glossary/Grid
translation_of: Glossary/Grid
---
Um ein CSS Grid definieren zu können verwendet man die `grid` Value für die {{cssxref("display")}} Property. Man kann Spalten und Reihen mit den {{cssxref("grid-template-rows")}} und {{cssxref("grid-template-columns")}} Propertys definieren.

Das Grid welches man mit den Werten definiert hat, beschreibt das _explizite Grid_.

Falls man Inhalte ausserhalb des expliziten Grids platziert, so erstellt der Grid Algorithmus zusätzliche Reihen und Spalten {{glossary("grid tracks", "tracks")}} um {{glossary("grid item", "grid items")}} zu beinhalten, denn zusätzliche Tracks sind implizierte Grid Tracks. Das implizierte Grid ist das Grid, welches automatisch erstellt wird, während dem vergrössern des Inhaltes

Im Beispiel unten habe ich ein _explitzites Grid_ von drei Spalten und zwei Reihen erstellt. Die dritte Reihe im Grid ist eine _implizierte Grid_ Reihe, welche automatisch erstellt wurde, da es mehr als sechs Div's hat.

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
    background-color: #ffd8a8;
    padding: 1em;
    color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 100px;
}
```

```html
<div class="wrapper">
   <div>Eins</div>
   <div>Zwei</div>
   <div>Drei</div>
   <div>Vier</div>
   <div>Fünf</div>
   <div>Sechs</div>
   <div>Sieben</div>
   <div>Acht</div>
</div>
```

{{ EmbedLiveSample('example', '500', '330') }}

## Learn More

### Property reference

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid")}}
- {{cssxref("grid-template")}}

### Further reading

- CSS Grid Layout Guide: _[Basic concepts of grid layout](/de/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)_
