---
title: font-style
slug: Web/CSS/font-style
translation_of: Web/CSS/font-style
---
{{CSSRef}}

Die CSS-Eigenschaft** `font-style`** legt fest, ob Text mit einem kursiven Schnitt der gewählten Schriftfamilie ({{cssxref("font-family")}}) dargestellt werden soll.

{{EmbedInteractiveExample("pages/css/font-style.html")}}

## Syntax

```css
font-style: normal;
font-style: italic;
font-style: oblique;
font-style: oblique 10deg;

/* Global values */
font-style: inherit;
font-style: initial;
font-style: unset;
```

`font-style` akzeptiert ein einzelnes der nachfolgenden Schlüsselwörter, welchem im Falle von `oblique` ein Winkel folgen darf.

### Werte

- `normal`
  - : Wählt einen Schriftschnitt mit nicht-kursiven Buchstaben.
- `italic`
  - : Wählt einen kursiven Schriftschnitt der Eigenschaft italic (siehe unten). Steht keiner zur Verfügung, wird stattdessen der Wert `oblique` angewendet. Ist auch dies nicht möglich, wird die Schrägstellung von 14° durch den Browser erzeugt.
- `oblique`
  - : Wählt einen kursiven Schriftschnitt der Eigenschaft oblique (siehe unten). Steht keiner zur Verfügung, wird stattdessen der Wert `italic` angewendet. Ist auch dies nicht möglich, wird eine Schrägstellung von 14° durch den Browser erzeugt.
- `oblique` [`<angle>`](/en-US/docs/Web/CSS/angle)

  - : Wählt einen kursiven Schriftschnitt der Eigenschaft oblique (siehe unten), dessen Buchstaben genau oder annähernd im Winkel `<angle>` schräggestellt sind. Üblicherweise werden bei der Suche nach passenden Schriftschnitten für Winkel ab 14° eher größere Werte gewählt, bis 13° eher kleinere (Details siehe [font matching section](https://drafts.csswg.org/css-fonts-4/#font-matching-algorithm)).

    Steht kein passender Schriftschnitt zur Verfügung, wird die Schrägstellung durch den Computer aus einem normalen Schriftschnitt erzeugt.

    Der gültige Winkelbereich erstreckt sich von `-90deg` bis `90deg` (einschließlich). Positive Werte bewirken eine Schrägstellung in Richtung Zeilenende, negative in Richtung Zeilenanfang.

#### italic gegenüber oblique

Die Werte `italic` und `oblique` scheinen auf den ersten Blick bei der Darstellung oftmals zu identischen Ergebnissen zu führen.

Während `italic` jedoch Schriftschnitte bezeichnet, die bereits kursiv entworfen wurden, umfasst `oblique` Schriftschnitte, die lediglich durch automatisierte Schrägstellung normaler Buchstaben derselben Familie erzeugt wurden („kursiviert“).
`italic` ist in der Regel die bessere Wahl, da die Form der Buchstaben und die Abstände der Buchstaben untereinander vom Schriftgestalter manuell festgelegt werden, was zu einer harmonischeren Textdarstellung führt.

Da beide Varianten sehr ähnlich sind, wird die jeweils andere verwendet, steht die gewählte Variante nicht zur Verfügung. Dieses Verhalten kann mit {{cssxref("font-synthesis")}} geändert werden.

### Variable Schriftarten

Variable Schriftarten erlauben eine präzise Steuerung der Darstellung von kursivierten Schriftschnitten mit Hilfe des Werts `<angle>` im Anschluss an `oblique`.

Bei variablen Schriftarten nach TrueType- oder OpenType-Spezifikation wird die Schrägstellung bei `oblique` über die Eigenschaft `"slnt"` realisiert, sowie `italic` mit einem Wert von 1 für die Eigenschaft `"ital"`(siehe {{cssxref("font-variation-settings")}}).

Das nachstehende Beispiel benötigt einen Browser, der die Syntax nach CSS Fonts Level 4 versteht, d.h. die Angabe eines Winkels bei `font-style: oblique`.

{{EmbedLiveSample("variable-font-example", 1200, 180, "", "", "example-outcome-frame")}}

#### HTML

```html
<header>
    <input type="range" id="slant" name="slant" min="-90" max="90" />
    <label for="slant">Slant</label>
</header>
<div class="container">
    <p class="sample">...it would not be wonderful to meet a Megalosaurus, forty feet long or so, waddling like an elephantine lizard up Holborn Hill.</p>
</div>
```

#### CSS

```css
/*
AmstelvarAlpha-VF is created by David Berlow (https://github.com/TypeNetwork/Amstelvar)
and is used here under the terms of its license:
https://github.com/TypeNetwork/Amstelvar/blob/master/OFL.txt
*/

@font-face {
  src: url('https://mdn.mozillademos.org/files/16044/AmstelvarAlpha-VF.ttf');
  font-family:'AmstelvarAlpha';
  font-style: normal;
}

label {
  font: 1rem monospace;
}

.container {
  max-height: 150px;
  overflow: scroll;
}

.sample {
  font: 2rem 'AmstelvarAlpha', sans-serif;
}
```

```css hidden
html, body {
  max-height: 100vh;
  max-width: 100vw;
  overflow: hidden;
}

body {
  display: flex;
  flex-direction: column;
}

header {
  margin-bottom: 1.5rem;
}

.container {
  flex-grow: 1;
}

.container > p {
  margin-top: 0;
  margin-bottom: 0;
}
```

#### JavaScript

```js
let slantLabel = document.querySelector('label[for="slant"]');
let slantInput = document.querySelector('#slant');
let sampleText = document.querySelector('.sample');

function update() {
  let slant = `oblique ${slantInput.value}deg`;
  slantLabel.textContent = `font-style: ${slant};`;
  sampleText.style.fontStyle = slant;
}

slantInput.addEventListener('input', update);

update();
```

### Formal syntax

{{csssyntax}}

## Beispiel

```html hidden
<p class="normal">Text im Schnitt normal.</p>
<p class="italic">Text im Schnitt italic.</p>
<p class="oblique">Text im Schnitt oblique.</p>
```

```css
.normal {
  font-style: normal;
}

.italic {
  font-style: italic;
}

.oblique {
  font-style: oblique;
}
```

{{ EmbedLiveSample('Font_styles') }}

## Barrierefreiheit

Längere Abschnitte in kursiver Schrift können für Menschen mit einer Lesestörung ([Legasthenie](https://de.wikipedia.org/wiki/Legasthenie "Legasthenie") oder [Dyslexie](https://de.wikipedia.org/wiki/Dyslexie "Dyslexie")) schwer bis gar nicht zu erfassen sein. Kursive Schrift sollte deshalb nur als Hervorhebung einzelner Stellen verwendet werden.

- [MDN Understanding WCAG, Guideline 1.4 explanations](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [W3C Understanding WCAG 2.1](https://www.w3.org/TR/WCAG21/#visual-presentation)

## Spezifikationen

| Spezifikation                                                                                | Status                           | Kommentar                                                    |
| -------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------ |
| {{SpecName('CSS4 Fonts', '#font-style-prop', 'font-style')}}             | {{Spec2('CSS4 Fonts')}} | Fügt die Möglichkeit einer Winkelangabe für `oblique` hinzu. |
| {{SpecName('CSS3 Fonts', '#font-style-prop', 'font-style')}}             | {{Spec2('CSS3 Fonts')}} | Keine Änderung                                               |
| {{SpecName('CSS2.1', 'fonts.html#propdef-font-style', 'font-style')}} | {{Spec2('CSS2.1')}}         | Keine Änderung                                               |
| {{SpecName('CSS1', '#font-style', 'font-style')}}                             | {{Spec2('CSS1')}}         | Erste Definition                                             |

{{cssinfo}}

## Browserkompatibilität

{{Compat("css.properties.font-style")}}
