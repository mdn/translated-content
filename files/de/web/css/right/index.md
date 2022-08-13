---
title: right
slug: Web/CSS/Right
tags:
  - CSS
  - CSS Positionierung
  - Layout
  - NeedsLiveSample
  - Referenz
  - Web
translation_of: Web/CSS/right
---
{{ CSSRef() }}

## Übersicht

Die `right` [CSS](/de/docs/Web/CSS) Eigenschaft gibt einen Teil der Position eines positionierten Elements an.

Bei absolut positionierten Elementen (`{{Cssxref("position")}}: absolute` oder `position: fixed`) gibt sie den Abstand zwischen der rechten, äußeren Kante des Elements und der rechten Kante des umschließenden Blocks an.

Bei relativ positionierten Elementen (`position: relative`) wird das Element aus seiner normalen Position im Elementfluss verschoben. Dabei gilt: Wenn die {{Cssxref("left")}} Eigenschaft definiert wurde, überschreibt diese den Wert der {{Cssxref("right")}} Eigenschaft. Wenn `left` den Wert `auto` besitzt, ist der berechnete Wert für `right` gleich dem Wert von `left` mit umgedrehtem Vorzeichen.
Wenn beide Eigenschaften einen anderen Wert als `auto` besitzen, wird `right` ignoriert und auf `auto` gesetzt.

{{cssinfo}}

## Syntax

### Werte

- \<Länge>
  - : Eine [Längenangabe](/de/CSS/Einheiten#L.c3.a4ngen), die positive und negative Werte sowie Null erlaubt.
- \<Prozentzahl>
  - : Eine [prozentuale Angabe](/de/CSS/Einheiten#Prozent), die sich auf den umschließenden Block bezieht. Die Prozentangabe kann nur berücksichtigt werden, wenn die Breite des umschließenden Blocks festgelegt wurde, andernfalls wird die definierte Prozentzahl wie `auto` behandelt.
- auto
  - : Standardwert. Die horizontale Position des Elementes wird nicht weiter beeinflusst, es sei denn durch [`left`](/De/CSS/Left "De/CSS/Left"), [`margin`](/de/CSS/margin "de/CSS/margin"), [`padding`](/de/CSS/padding "de/CSS/padding") oder durch die [Breite](/de/CSS/width "de/CSS/width").
- inherit
  - : Der Wert des Elternelements wird geerbt.

### Formelle Syntax

{{csssyntax}}

## Beispiele

```css
#left {
  width: 100px;
  height: 100px;
  background-color: #FFC7E4;
  position: relative;
  top: 20px;
  left: 20px;
}

#right {
  width: 100px;
  height: 100px;
  background-color: #FFD7C2;
  position: absolute;
  bottom: 10px;
  right: 20px;
}
```

```html
<div id="left">links</div>
<div id="right">rechts</div>
```

{{ EmbedLiveSample('Beispiele', 500, 220) }}

## Spezifikationen

| Spezifikation                                                                    | Status                                   | Kommentar                         |
| -------------------------------------------------------------------------------- | ---------------------------------------- | --------------------------------- |
| {{SpecName('CSS3 Transitions', '#animatable-css', 'right')}} | {{Spec2('CSS3 Transitions')}} | Definiert `right` als animierbar. |
| {{SpecName('CSS2.1', 'visuren.html#propdef-right', 'right')}} | {{Spec2('CSS2.1')}}                 | Ursprüngliche Definition          |

## Browser Kompatibilität

{{Compat("css.properties.right")}}
