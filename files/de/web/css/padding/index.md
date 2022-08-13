---
title: padding
slug: Web/CSS/padding
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Innenabstand
  - CSS Referenz
  - Layout
  - Web
translation_of: Web/CSS/padding
---
{{ CSSRef() }}

## Übersicht

Die `padding` Eigenschaft ist eine Kurzform für die Innenabstände aller vier Seiten eines Elementes. Der Innenabstand ist der Bereich zwischen dem Inhalt und dem [Rahmen](/de/CSS/border "de/CSS/border") (auch: _padding area_).

{{cssinfo}}

## Syntax

    padding:   [ <Längenangabe> | <Prozentzahl> ] {1,4} | inherit

### Werte

Es werden bis zu vier der folgenden Werte akzeptiert:

- \<Längenangabe>
  - : Legt eine bestimmte [Länge](/de/CSS/Einheiten#L.c3.a4ngen "de/CSS/Einheiten#L.c3.a4ngen") fest. Negative Werte sind **nicht** erlaubt.
- \<Prozentzahl>
  - : Ein [prozentualer](/de/CSS/Einheiten#Prozent "de/CSS/Einheiten#Prozent") Wert, der sich auf die Breite des umschließenden Blocks (containing block) bezieht. Negative Werte **nicht** sind erlaubt.
- inherit
  - : Der Wert des Elternelements wird geerbt.
- Ein Wert
  - : Gilt für alle vier Seiten.
- Zwei Werte
  - : Der erste Wert bestimmt die [oberen](/de/CSS/padding-top "de/CSS/padding-top") und [unteren](/de/CSS/padding-bottom "de/CSS/padding-bottom") Abstände, der zweite Wert legt die Abstände [rechts](/de/CSS/padding-right "de/CSS/padding-right") und [links](/de/CSS/padding-left "de/CSS/padding-left") fest.
- Drei Werte
  - : Der erste Wert bestimmt den [oberen](/de/CSS/padding-top "de/CSS/padding-top") Abstand, der zweite Wert legt die Abstände für [rechts](/de/CSS/padding-right "de/CSS/padding-right") und [links](/de/CSS/padding-left "de/CSS/padding-left") zusammen fest und der dritte Wert bestimmt den [unteren](/de/CSS/padding-bottom "de/CSS/padding-bottom") Abstand.
- Vier Werte
  - : Für jede Seite können die Abstände einzeln festgelegt werden. In der Reihenfolge: [oben](/de/CSS/padding-top "de/CSS/padding-top"), [rechts](/de/CSS/padding-right "de/CSS/padding-right"), [unten](/de/CSS/padding-bottom "de/CSS/padding-bottom"), [links](/de/CSS/padding-left "de/CSS/padding-left").

### Beispiele

    padding: 5%;                /* 5% Abstand auf allen Seiten */

    padding: 10px;              /* 10px Abstand auf allen Seiten */

    padding: 10px 20px;         /* oben und unten 10px */
                                /* links und rechts 20px */

    padding: 10px 3% 20px;      /* oben 10px */
                                /* links und rechts 3% */
                                /* unten 20px */

    padding: 1em 3px 30px 5px;  /* oben 1em */
                                /* rechts 3px */
                                /* unten 30px */
                                /* links 5px */

border:outset; padding:5% 1em;

## Livebeispiel

### HTML Inhalt

```html
<h4>Hallo Welt!</h4>
<h3>Der Innenabstand ist in dieser Zeile anders.</h3>
```

### CSS Inhalt

```css
h4 {
  background-color: green;
  padding: 50px 20px 20px 50px;
}

h3{
  background-color: blue;
  padding: 400px 50px 50px 400px;
}
```

{{ EmbedLiveSample('Livebeispiel') }}

## Spezifikationen

| Spezifikation                                                                            | Status                           | Kommentar                |
| ---------------------------------------------------------------------------------------- | -------------------------------- | ------------------------ |
| {{ SpecName('CSS3 Box', '#the-padding', 'padding') }}                 | {{ Spec2('CSS3 Box') }} | keine Änderung           |
| {{ SpecName('CSS2.1', 'box.html#propdef-padding', 'padding-top') }} | {{ Spec2('CSS2.1') }}     | keine Änderung           |
| {{ Specname('CSS1', '#padding', 'padding') }}                             | {{ Spec2('CSS1') }}         | Ursprüngliche Definition |

## Browserkompatiblität

{{Compat("css.properties.padding")}}

## Siehe auch

- [CSS Boxmodell](/de/docs/Web/CSS/Boxmodell "en/CSS/box model")
