---
title: unset
slug: Web/CSS/unset
tags:
  - CSS
  - CSS Cascade
  - Layout
  - NeedsLiveSample
  - Referenz
  - Schlüsselwort
  - Web
translation_of: Web/CSS/unset
---
{{CSSRef}}

Das `unset` [CSS](/de/docs/Web/CSS) Schlüsselwort ist eine Kombination der Schlüsselwörter {{cssxref("initial")}} und {{cssxref("inherit")}}. Wie diese beiden anderen CSS-weiten Schlüsselwörter kann es auf alle CSS-Eigenschaften angewendet werden, einschließlich des CSS-Shorthands {{cssxref("all")}}. Dieses Schlüsselwort setzt die Eigenschaft auf ihren geerbten Wert zurück, falls er vom Elternelement geerbt wurde, oder andernfalls auf den ursprünglichen Wert. Mit anderen Worten, es verhält sich im ersten Fall wie das `inherit` Schlüsselwort und wie das `initial` Schlüsselwort im zweiten Fall.

## Beispiele

```css
/* Kopfzeilen erhalten einen grünen Rand */
h2 {
  border: medium solid green;
}

/* Aber die in der Seitenleiste verwenden den Wert der "color" Eigenschaft (Initialwert) */
#sidebar h2 {
  border-color: unset;
}
```

```css
<p style="color: red;">
  Dieser Text ist rot.
  <em style="color:initial">
    Dieser Text ist in der Initialfarbe gehalten, d. h. schwarz
  </em>
  Dieser Text ist wieder rot.
</p>
```

## Spezifikationen

| Spezifikation                                                    | Status                               | Kommentar                |
| ---------------------------------------------------------------- | ------------------------------------ | ------------------------ |
| {{ SpecName('CSS3 Cascade', '#unset', 'unset') }} | {{ Spec2('CSS3 Cascade') }} | Ursprüngliche Definition |

## Browserkompatibilität

{{Compat("css.types.global_keywords.unset")}}

## Siehe auch

Die CSS-weiten Eigenschaftswerte: {{cssxref("initial")}}, {{cssxref("inherit")}} und {{cssxref("unset")}}.
