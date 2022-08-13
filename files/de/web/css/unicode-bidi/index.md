---
title: unicode-bidi
slug: Web/CSS/unicode-bidi
tags:
  - CSS
  - CSS Eigenschaft
  - NeedsLiveSample
  - Reference
  - Referenz
translation_of: Web/CSS/unicode-bidi
---
{{CSSRef}}

## Zusammenfassung

Die **`unicode-bidi`** [CSS](/de/docs/Web/CSS) Eigenschaft zusammen mit der {{Cssxref("direction")}} Eigenschaft hat damit zu tun wie bidirektionaler Text in einem Dokument behandelt wird. Zum Beispiel, wenn ein Textblock sowohl Text der von links nach recht als auch von rechts nach links läuft enthält, dann entscheidet das System mithilfe eines komplexen Unicode Algorithmus wie es den Text darstellen soll. Diese Eigenschaft überschreibt den Algorithmus und gibt dem Entwickler die Kontrolle über die Textdarstellung.

Die `unicode-bidi` und{{cssxref("direction")}} Eigenschaften sind die einzigen zwei Werte welche nicht von der {{cssxref("all")}} Kurzform betroffen sind.

> **Hinweis:** Die Eigenschaft ist für DTD Designer gedacht. Web Designer und ähnliche sollten es nicht überschreiben.

{{cssinfo}}

## Syntax

```css
/* Schlüsselwerte */
unicode-bidi: normal;
unicode-bidi: embed;
unicode-bidi: isolate;
unicode-bidi: bidi-override;
unicode-bidi: isolate-override;
unicode-bidi: plaintext;

/* Globale Werte*/
unicode-bidi: inherit;
unicode-bidi: initial;
unicode-bidi: unset;
```

### Werte

- `normal`
  - : The element does not offer a additional level of embedding with respect to the bidirectional algorithm. For inline elements implicit reordering works across element boundaries.
- `embed`
  - : If the element is inline, this value opens an additional level of embedding with respect to the bidirectional algorithm. The direction of this embedding level is given by the {{Cssxref("direction")}} property.
- `bidi-override`
  - : For inline elements this creates an override. For block container elements this creates an override for inline-level descendants not within another block container element. This means that inside the element, reordering is strictly in sequence according to the {{Cssxref("direction")}} property; the implicit part of the bidirectional algorithm is ignored.
- `isolate` {{experimental_inline}}
  - : This keyword indicates that the element's container directionality should be calculated without considering the content of this element. The element is therefore _isolated_ from its siblings. When applying its bidirectional-resolution algorithm, its container element treats it as one or several `U+FFFC Object Replacement Character`, i.e. like an image.
- `isolate-override`{{experimental_inline}}
  - : This keyword applies the isolation behavior of the `isolate` keyword to the surrounding content and the override behavior of the `bidi-override` keyword to the inner content.
- `plaintext`{{experimental_inline}}
  - : This keyword makes the elements directionality calculated without considering its parent bidirectional state or the value of the {{cssxref("direction")}} property. The directionality is calculated using the P2 and P3 rules of the Unicode Bidirectional Algorithm.
    This value allows to display data which has already formatted using a tool following the Unicode Bidirectional Algorithm.

### Formaler Syntax

{{csssyntax}}

## Beispiele

```css
.bible-quote {
  direction: rtl;
  unicode-bidi: embed;
}
```

## Spezifikation

| Specification                                                                                        | Status                                   | Comment                                                       |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------- | ------------------------------------------------------------- |
| {{SpecName('CSS3 Writing Modes', '#unicode-bidi', 'unicode-bidi')}}             | {{Spec2('CSS3 Writing Modes')}} | Added `plaintext`, `isolate`, and `isolate-override` keywords |
| {{SpecName('CSS2.1', 'visuren.html#propdef-unicode-bidi', 'unicode-bidi')}} | {{Spec2('CSS2.1')}}                 | Initial definition                                            |

## Browser Kompatibilität

{{Compat("css.properties.unicode-bidi")}}

## Siehe auch

- {{Cssxref("direction")}}
