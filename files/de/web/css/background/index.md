---
title: background
slug: Web/CSS/background
tags:
  - CSS
  - CSS Background
  - CSS Eigenschaft
  - CSS Hintergrund
  - Referenz
translation_of: Web/CSS/background
---
{{CSSRef("CSS Background")}}

Die [CSS](/de/docs/Web/CSS) [Kurzformat](/de/docs/Web/CSS/Kurzformat_Eigenschaft)-Eigenschaft **`background`**setzt alle Hintergrundstileigenschaften auf einmal, wie Farbe, Bild, Ursprung und Größe oder Wiederholungsmethode.

{{EmbedInteractiveExample("pages/css/background.html")}}

## Eigenschaftsbestandteile

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("background-attachment")}}
- {{cssxref("background-clip")}}
- {{cssxref("background-color")}}
- {{cssxref("background-image")}}
- {{cssxref("background-origin")}}
- {{cssxref("background-position")}}
- {{cssxref("background-repeat")}}
- {{cssxref("background-size")}}

## Syntax

```css
/* Verwendung von <background-color> */
background: green;

/* Verwendung von <bg-image> und <repeat-style> */
background: url("test.jpg") repeat-y;

/* Verwendung von <box> und <background-color> */
background: border-box red;

/* Ein einzelnes Bild, zentriert und skaliert */
background: no-repeat center/80% url("../img/image.png");
```

Die Eigenschaft `background` wird als eine oder mehrere Hintergrundebenen, durch Kommata getrennt, angegeben.

Die Syntax der einzelnen Schichten ist wie folgt:

- Jede Schicht kann null oder ein Vorkommen eines der folgenden Werte enthalten:

  - [`<attachment>`](/de/docs/Web/CSS/background$edit#<attachment>)
  - [`<bg-image>`](/de/docs/Web/CSS/background$edit#<bg-image>)
  - [`<position>`](/de/docs/Web/CSS/background$edit#<position>)
  - [`<bg-size>`](/de/docs/Web/CSS/background$edit#<bg-size>)
  - [`<repeat-style>`](/de/docs/Web/CSS/background$edit#<repeat-style>)

- Der Wert [`<bg-size>`](/de/docs/Web/CSS/background$edit#<bg-size>) darf nur unmittelbar nach [`<position>`](/de/docs/Web/CSS/background$edit#<position>), getrennt durch das Zeichen '/', wie folgt eingefügt werden: "`center/80%`".
- Der Wert [`<box>`](/de/docs/Web/CSS/background$edit#<box>) kann Null, eins oder zwei Mal eingeschlossen werden. Wenn er einmal eingeschlossen wird, setzt er sowohl {{cssxref("background-origin")}} als auch {{cssxref("background-clip")}}. Bei zweimaligem Einschließen setzt das erste Vorkommen {{cssxref("background-origin")}} und das zweite Vorkommen {{cssxref("background-clip")}}.
- Der Wert [`<background-color>`](/de/docs/Web/CSS/background$edit#<background-color>) darf nur in der zuletzt angegebenen Ebene enthalten sein.

> **Hinweis:** Die {{cssxref("background-color")}} kann nur für den letzten Hintergrund definiert werden, da es nur eine Hintergrundfarbe für das gesamte Element gibt.

### Werte

Einer oder mehrere der folgenden Werte, in beliebiger Reihenfolge:

- `<attachment>`
  - : Siehe {{cssxref("background-attachment")}}
- `<box>`
  - : Siehe {{cssxref("background-clip")}} and {{cssxref("background-origin")}}
- `<background-color>`
  - : Siehe {{cssxref("background-color")}}
- `<bg-image>`
  - : See {{Cssxref("background-image")}}
- `<position>`
  - : Siehe {{cssxref("background-position")}}
- `<repeat-style>`
  - : Siehe {{cssxref("background-repeat")}}
- `<bg-size>`
  - : Siehe {{cssxref("background-size")}}.

## Bedenken zur Zugänglichkeit

Browser bieten keine speziellen Informationen über Hintergrundbilder zu unterstützenden Technologien. Dies ist vor allem für Bildschirmleseprogramme wichtig, da ein Bildschirmleseprogramm seine Anwesenheit nicht ankündigt und seinen Benutzern daher nichts vermittelt. Wenn das Bild Informationen enthält, die für das Verständnis des Gesamtzwecks der Seite entscheidend sind, ist es besser, diese im Dokument semantisch zu beschreiben.

- [MDN Understanding WCAG, Guideline 1.1 explanations](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.1_%E2%80%94_Providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Hintergründe mit farbigen Schlüsselwörtern und Bildern setzen

#### HTML

```html
<p class="topbanner">
  Starry sky<br/>
  Twinkle twinkle<br/>
  Starry sky
</p>
<p class="warning">Here is a paragraph<p>
```

#### CSS

```css
.warning {
  background: pink;
}

.topbanner {
  background: url("https://mdn.mozillademos.org/files/11983/starsolid.gif") #99f repeat-y fixed;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_backgrounds_with_color_keywords_and_images")}}

## Spezifikationen

| Spezifikation                                                                                | Status                                   | Kommentar                                                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS3 Backgrounds', '#the-background', 'background')}}     | {{Spec2('CSS3 Backgrounds')}} | Die Kurzformat-Eigenschaft wurde erweitert, sodass sie mehrere Hintergründe und die neuen Eigenschaften {{cssxref("background-size")}}, {{cssxref("background-origin")}} und {{cssxref("background-clip")}} unterstützt. |
| {{SpecName('CSS2.1', 'colors.html#propdef-background', 'background')}} | {{Spec2('CSS2.1')}}                 | Keine wesentlichen Änderungen                                                                                                                                                                                                                            |
| {{SpecName('CSS1', '#background', 'background')}}                             | {{Spec2('CSS1')}}                 | Ursprüngliche Definition                                                                                                                                                                                                                                 |

## Browser-Kompatibilität

{{Compat("css.properties.background")}}

## Siehe auch

- {{cssxref("-moz-background-inline-policy")}}
- [Verwendung von CSS Farbverläufen](/de/docs/Farbverläufe_in_CSS)
- [Mehrere Hintergründe in CSS verwenden](/de/docs/Web/Guide/CSS/mehrere_Hintergründe_verwenden)
