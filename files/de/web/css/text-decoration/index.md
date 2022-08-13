---
title: text-decoration
slug: Web/CSS/text-decoration
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Text
  - NeedsMobileBrowserCompatibility
  - Referenz
translation_of: Web/CSS/text-decoration
---
{{CSSRef}}

## Übersicht

Die **`text-decoration`** CSS Eigenschaft wird dazu verwendet, die Textformatierung auf `underline`, `overline`, `line-through` oder `blink` zu setzen. Unter- und Überstrichdekorationen werden unterhalb des Texts positioniert, Durchstreichungen über dem Text.

Textdekorationen werden auf Unterelemente gezeichnet. Das bedeutet, dass es nicht möglich ist, die Textdekoration, die für ein übergeordnetes Element angegeben wurde, für ein Unterelement zu deaktivieren. Zum Beispiel würde in folgendem Markup `<p>Dieser Text hat <em>ein paar hervorgehobene Wörter</em>.</p>` die Stilregel `p { text-decoration: underline; }` den gesamten Absatz unterstreichen. Die Stilregel `em { text-decoration: none; }` würde nichts ändern; der gesamte Absatz wäre immer noch unterstrichen. Jedoch würde die Regel `em { text-decoration: overline; }` eine zweite Dekoration für "ein paar hervorgehobene Wörter" erscheinen lassen.

> **Note:** **Hinweis:** CSS Text Decoration Level 3 hat diese Eigenschaft zu einer Kurzschreibweise für die drei neuen CSS Eigenschaften {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-line")}} und {{cssxref("text-decoration-style")}} gemacht. Wie für andere Kurzschreibweiseeigenschaften bedeutet dies, dass sie deren Werte auf deren Standardwerte zurücksetzt, falls diese nicht explizit in der Kurzschreibweiseeigenschaft angegeben sind.

{{cssinfo}}

## Syntax

```css
/* Schlüsselwortwerte */
text-decoration: none;                 /* Keine Textdekoration */
text-decoration: underline red;        /* Rote Unterstreichung */
text-decoration: underline wavy red;   /* Rote gewellte Unterstreichung */

/* Globale Werte */
text-decoration: inherit;
text-decoration: initial;
text-decoration: unset;
```

### Werte

Die `text-decoration` Eigenschaft ist eine Kurzschreibweise und kann die Werte jeder der drei Langschreibweiseeigenschaften annehmen: {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-color")}} und {{cssxref("text-decoration-style")}}

### Formale Syntax

{{csssyntax}}

## Beispiele

```css
h1.under {
    text-decoration: underline;
}
h1.over {
    text-decoration: overline;
}
p.line {
    text-decoration: line-through;
}
p.blink {
    text-decoration: blink;
}
a.none {
    text-decoration: none;
}
p.underover {
    text-decoration: underline overline;
}
```

```html
<h1 class="under">Unterstrichene Überschrift</h1>
<p class="line">Falls Text durchgestrichen werden soll, verwende <code>line-through</code>.</p>
<p class="blink">Dieser Text könnte blinken.</p>
<h1 class="over">Und jetzt eine überstrichene Überschrift.</h1>
<p>Dieser <a class="none" href="textdecoration.html">Link wird nicht unterstrichen</a>, wie das bei den meisten Links standardmäßig ist. Vorsicht beim Entfernen der Textdekoration bei Links, da die meisten Benutzer davon ausgehen, dass Hyperlinks unterstrichen sind.</p>
<p class="underover">Dieser Text hat beides, eine Unter- und eine Überstreichung.</p>
```

{{EmbedLiveSample('Beispiele','100%','310')}}

## Spezifikationen

| Spezifikation                                                                                                    | Status                                       | Kommentar                                                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS3 Text Decoration', '#text-decoration-property', 'text-decoration')}} | {{Spec2('CSS3 Text Decoration')}} | Hat die Eigenschaft in eine Kurzschreibweiseeigenschaft ungewandelt. Unterstützung für den Wert von {{cssxref('text-decoration-style')}} wurde hinzugefügt. |
| {{SpecName('CSS2.1', 'text.html#lining-striking-props', 'text-decoration')}}             | {{Spec2('CSS2.1')}}                     | Keine wesentlichen Änderungen                                                                                                                                           |
| {{SpecName('CSS1', '#text-decoration', 'text-decoration')}}                                 | {{Spec2('CSS1')}}                     | Ursprüngliche Definition                                                                                                                                                |

## Browser Kompatibilität

{{Compat("css.properties.text-decoration")}}

## Siehe auch

- Das {{cssxref("list-style")}} Attribut steuert die Darstellung von Einträgen in HTML {{HTMLElement("ol")}} und {{HTMLElement("ul")}} Listen.
