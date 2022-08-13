---
title: direction
slug: Web/CSS/direction
tags:
  - CSS
  - CSS Eigenschaft
  - Referenz
translation_of: Web/CSS/direction
---
{{CSSRef}}

## Zusammenfassung

Legt die CSS Eigenschaft **`direction`** fest damit sie mit der Richtung des Textes übereinstimmt: `rtl` dür Sprachen welche von rechts nach links geschrieben werden (wie Hebräisch oder Arabisch) und `ltr` für Sprachen von links nach rechts. Normalerweise ist es jedoch ein Teil des Dokuments (z.B. mit dem dir Attribut in HTML) statt durch den direkten Gebrauch in CSS.

Der Wert legt die grundsätzliche Richtung des Textes von block-level Elementen und die Richtung von Einbindungen, welche von der {{Cssxref("unicode-bidi")}} Eigenschaft erzeugt wird, fest. Auch legt es die grunsätzliche Ausreichtung des Textes, block-level Elemente und die Richtung in welcher Zellen in einer Tabellenzeile angeordnet werden.

Anders als das `dir` Attribut in HTML, wird die `direction` Eigenschaft nicht von Tabellenspalten an die Tabellenzellen vererbt, da CSS Vererbung dem Dokumenten Baum folgt, in welchem Tabellenzellen in Zeilen sind und nicht in Spalten.

Die `direction` und {{cssxref("unicode-bidi")}} Eigenschaft sind die einzigen zwei Eigenschaften welche nicht von der {{cssxref("all")}} Kurzform Eigenschaft beinflusst werden.

{{cssinfo}}

## Syntax

```css
direction: ltr;
direction: rtl;

/* Globale Werte*/
direction: inherit;
direction: initial;
direction: unset;
```

### Werte

- `ltr`
  - : Der Ausgangswert von `direction` (wenn nicht anders festgelegt). Text und andere Elemente gehen von links nach rechts.
- `rtl`
  - : Text und andere Elemente gehen von rechts nach links.

Damit die `direction` Eigenschaft Auswirkungen auf inline-level elemente hat, muss der {{Cssxref("unicode-bidi")}} Eigenschaftswert `embed` oder `override` sein.

### Formaler Syntax

{{csssyntax}}

## Beispiele

```css
blockquote {
  direction: rtl;
}
```

## Spezifikationen

| Spezifikation                                                                    | Status                                   | Kommentar         |
| -------------------------------------------------------------------------------- | ---------------------------------------- | ----------------- |
| {{SpecName('CSS3 Writing Modes', '#direction', 'direction')}} | {{Spec2('CSS3 Writing Modes')}} | Keine Änderung.   |
| {{SpecName('CSS2.1', 'visuren.html#direction', 'direction')}} | {{Spec2('CSS2.1')}}                 | Erste Definition. |

## Browser Kompatibilität

{{Compat("css.properties.direction")}}

## Siehe auch

- {{Cssxref("unicode-bidi")}}
- {{Cssxref("writing-mode")}}
