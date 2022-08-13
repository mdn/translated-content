---
title: <maction>
slug: Web/MathML/Element/maction
tags:
  - MathML
  - MathML:Element
  - Referenz
translation_of: Web/MathML/Element/maction
---
{{MathMLRef}}

Das **`<maction>`**-Element verbindet Ausdrücke oder Teile von Ausdrücken mit Aktionen. Die Aktion wird durch das Attribute `actiontype` benannt. Mit dem Attribut `selection` kann ein bestimmtes Kind-Element gezielt ausgewählt werden.

## Attribute

- actiontype
  - : Bestimmt, welche Aktion mit diesem Ausdruck verbunden werden soll. Mögliche Werte sind:\* `statusline`: Wenn der _expression_ angeklickt wird oder der Nutzer den Mauszeiger über den Ausdruck bewegt, dann wird _message_ in der Statuszeile des Browsers eingeblendet. Die Syntax ist: `<maction actiontype="statusline"> expression message </maction>.`
    - `toggle`: Wenn der Ausdruck mit der Maus angeklickt wird, dann wechselt die Darstellung zum nächsten der Ausdrücke. Jeder Klick setzt den Wert von `selection` um eins herauf, nach dem letzten Ausdruck folgt wieder der erste.
      The syntax is: `<maction actiontype="toggle" selection="positive-integer" > expression1 expression2 expressionN </maction>`.
    - `tooltip`{{ unimplemented_inline() }} : Wenn der Mauszeiger über _expression_ bewegt wird, dann wird ein Tooltip mit dem Text _message_ angezeigt.
      Die Syntax ist:`<maction actiontype="tooltip"> expression message </maction>.`
- class, id, style
  - : Zur Einbindung von [CSS-Stylesheets](/de/docs/Web/CSS) und zur direkten Anwendung von CSS-Angaben.
- href
  - : Mit diesem Attribut kann ein Link gesetzt werden.
- mathbackground
  - : Die Hintergrundfarbe. Folgende Notationen sind erlaubt: [`#rgb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29), [`#rrggbb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29) und [HTML-Farbnamen](/de/docs/Web/CSS/Farben#Werte).
- mathcolor
  - : Die Textfarbe. Folgende Notationen sind erlaubt: [`#rgb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29), [`#rrggbb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29) und [HTML-Farbnamen](/de/docs/Web/CSS/Farben#Werte).
- selection
  - : Benennt das Kind-Element für die Aktion. Der Vorgabewert ist 1 für das erste Kind-Element. Die Darstellung beginnt mit dem so benannte Ausdruck. Dieses Attribut wirkt nur bei `actiontype=toggle`.

## Beispiele

Dieses Beispiel nutzt den "toggle" `actiontype`, um zwischen drei Ausdrücken zyklisch umzuschalten:

```html
<math>

<maction actiontype="toggle">

  <mfrac>
    <mn>6</mn>
    <mn>8</mn>
  </mfrac>

  <mfrac>
    <mrow>
      <mn>3</mn>
      <mo>&sdot;</mo>
      <mn>2</mn>
    </mrow>
    <mrow>
      <mn>4</mn>
      <mo>&sdot;</mo>
      <mn>2</mn>
    </mrow>
  </mfrac>

  <mfrac>
    <mn>3</mn>
    <mn>4</mn>
  </mfrac>

</maction>

</math>
```

## Spezifikationen

| Standard                                                                                 | Status                       | Bemerkung             |
| ---------------------------------------------------------------------------------------- | ---------------------------- | --------------------- |
| {{ SpecName('MathML3', 'chapter3.html#presm.maction', 'maction') }} | {{ Spec2('MathML3') }} | Current specification |
| {{ SpecName('MathML2', 'chapter3.html#presm.maction', 'maction') }} | {{ Spec2('MathML2') }} | Initial specification |

## Browserkompatibilität

{{Compat}}

\[1] `toggle` & `statusline`. `tooltip` sind nicht implementiert [bug 544001](https://bugzilla.mozilla.org/show_bug.cgi?id=544001).

\[2] Siehe [WebKit bug 85734](https://bugs.webkit.org/show_bug.cgi?id=85734).

\[3] Siehe [WebKit bug 85733](https://bugs.webkit.org/show_bug.cgi?id=85733).

## Hinweise zu Gecko

- Bis Gecko 9.0 {{ geckoRelease("9.0") }} wurde der nichtstandardisierte Wert `actiontype=restyle` unterstützt. Dieser Wert wird nun nicht mehr unterstützt.
- Bis Gecko 14.0 {{ geckoRelease("14.0") }} hatte `actiontype=statusline` eine nichtstandardisierte Schreibweise (siehe unten). Dies wurde korrigiert und entspricht jetzt der MathML-Spezifikation.

  ```html
  <maction actiontype="statusline#(message)">
  (expression)
  </maction>
  ```

- Ab Gecko 15.0 {{geckoRelease("15.0")}} wird das Attribute `selection` nur noch für `actiontype=toggle` akzeptiert.
- Ab Gecko 16.0 {{geckoRelease("16.0")}} wird das Attribut `selection` auch für unbekannte Werte für `actiontype` akzeptiert. Wird der Wert für `actiontype` leergelassen oder hat `selection` einen ungültigen Wert, schreibt MathML einen Fehler aus (invalid-markup).
