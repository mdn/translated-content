---
title: orphans
slug: Web/CSS/orphans
tags:
  - CSS
  - CSS3
  - Layout
  - Referenz
  - mehrspaltige Layouts
translation_of: Web/CSS/orphans
---
{{CSSRef}}

Die [CSS](/de/docs/CSS)-Eigenschaft **`orphans`** legt die Mindestanzahl von Zeilen in einem Blockcontainer fest, die unten auf einer [Seite](/de/docs/Web/CSS/Paged_Media), eines Bereichs oder einer [Spalte](/de/docs/Web/CSS/CSS_Columns) angezeigt werden müssen.

```css
/* <integer> values */
orphans: 2;
orphans: 3;

/* Global values */
orphans: inherit;
orphans: initial;
orphans: unset;
```

> **Note:** **Hinweis:** In der Typografie ist ein _Schusterjunge_ die erste Zeile eines Absatzes, die allein am unteren Rand einer Seite angezeigt wird (der Absatz wird auf einer nachfolgenden Seite fortgesetzt).

## Syntax

### Werte

- {{cssxref("&lt;integer&gt;")}}
  - : Die Mindestanzahl von Zeilen, die vor einem Fragmentierungsbruch am unteren Rand eines Fragments verbleiben können. Der Wert muss positiv sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiel

### Festlegung einer Mindestgröße für Waisenkinder von drei Zeilen

#### HTML

```html
<div>
  <p>This is the first paragraph containing some text.</p>
  <p>This is the second paragraph containing some more text than the first one. It is used to demonstrate how orphans work.</p>
  <p>This is the third paragraph. It has a little bit more text than the first one.</p>
</div>
```

#### CSS

```css
div {
  background-color: #8cffa0;
  height: 150px;
  columns: 3;
  orphans: 3;
}

p {
  background-color: #8ca0ff;
}

p:first-child {
  margin-top: 0;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_a_minimum_orphan_size_of_three_lines", 380, 150)}}

## Spezifikationen

| Specification                                                                        | Status                                   | Comment                                                                                                                 |
| ------------------------------------------------------------------------------------ | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS3 Fragmentation', '#widows-orphans', 'orphans')}} | {{Spec2('CSS3 Fragmentation')}} | Erweitert `orphans`, die auf alle Fragmenttypen angewendet werden können, einschließlich Seiten, Regionen oder Spalten. |
| {{SpecName('CSS2.1', 'page.html#break-inside', 'orphans')}}     | {{Spec2('CSS2.1')}}                 | Initiale Definition.                                                                                                    |

## Browserkompatibilität

{{Compat("css.properties.orphans")}}

## Siehe auch

- {{cssxref("widows")}}
- [Seitennummerierte Medien](/de/docs/Web/CSS/Paged_Media)
