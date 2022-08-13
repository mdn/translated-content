---
title: animation-name
slug: Web/CSS/animation-name
tags:
  - CSS
  - CSS Animationen
  - CSS Eigenschaft
  - Experimentell
  - Layout
  - Referenz
  - Web
translation_of: Web/CSS/animation-name
---
{{CSSRef}}

## Übersicht

Die `animation-name` [CSS](/de/docs/Web/CSS) Eigenschaft definiert eine Liste von Animationen, welche dem Element zugeortnet werden sollen. Jeder name steht für eine {{cssxref("@keyframes")}} Regel, welche den Ablauf der Animation definiert.

Meistens wird die Kurzform {{cssxref("animation")}} genutzt, um alle Eigenschaften der Animation auf einen Blick zu haben.

{{cssinfo}}

## Syntax

```css
animation-name: none;
animation-name: test_05;
animation-name: -specific;
animation-name: sliding-vertically;

animation-name: test1;
animation-name: test1, animation4;
animation-name: none, -moz-specific, sliding;

/* Globale Werte */
animation-name: initial;
animation-name: inherit;
animation-name: unset;
```

### Werte

- `none`
  - : Keine Animation soll abgespielt werden. Dieser Wert ermöglicht das deaktivieren einer Animation, ohne die dazugehörigen Eigenschaften und Regeln zu ändern.
- `IDENT`
  - : Eine beliebige Zeichenkette aus den Buchstaben `a` bis `z`, Zahlen `0` bis `9`, Bodenstriche (`_`), und oder Bindestriche (`-`). Das erste Zeichen muss ein Buchstabe oder einer der beiden zugelassenen Striche sein. Es dürfen nicht zwei hintereinandeflogende Striche am Anfang stehen.

### Formale Syntax

{{csssyntax}}

## Beispiele

Siehe [CSS Animationen](/de/docs/Web/Guide/CSS/CSS_Animationen_nutzen "CSS/CSS_animations") für Beispiele.

## Spezifikationen

| Spezifikation                                                                                | Status                               | Anmerkung                |
| -------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------------ |
| {{SpecName('CSS3 Animations', '#animation-name', 'animation-name')}} | {{Spec2('CSS3 Animations')}} | Ursprüngliche Definition |

## Browser Kompatibilität

{{Compat("css.properties.animation-name")}}

## Siehe auch

- [CSS Animationen nutzen](/de/docs/Web/Guide/CSS/CSS_Animationen_nutzen "Tutorial about CSS animations")
- {{domxref("AnimationEvent", "AnimationEvent")}}
