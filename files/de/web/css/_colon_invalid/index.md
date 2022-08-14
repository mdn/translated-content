---
title: ':invalid'
slug: Web/CSS/:invalid
tags:
  - CSS
  - CSS Pseudoelement
  - Layout
  - Referenz
  - Web
translation_of: Web/CSS/:invalid
---
{{ CSSRef() }}

## Übersicht

Die [Pseudoklasse](/de/CSS/Pseudo-classes "Pseudoklassen") `:invalid `entspricht jedem {{ HTMLElement("input") }}- oder {{ HTMLElement("form") }}-Element, dessen Inhalt nicht gemäß der Eigenschaften des Eingabeelements [validiert](/en/HTML/HTML5/Constraint_validation "en/HTML/HTML5/Constraint_validation") werden kann. Dadurch kann die Darstellung ungültiger Felder auf einfache Weise angepasst werden, damit Benutzer\*innen fehlerhafte Eingaben gut identifizieren und korrigieren können.

Standardmäßig wendet Gecko keinen Stil auf die Pseudoklasse `:invalid` an. Jedoch wendet es einen Stil (ein rotes "Leuchten" mithilfe der Eigenschaft {{ Cssxref("box-shadow") }}) auf die Pseudoklasse {{ Cssxref(":-moz-ui-invalid") }} an, der einen Teil der Fälle für `:invalid` betrifft.

Das Leuchten kann mit dem folgenden CSS ausgeschaltet werden. Es kann auch komplett überschrieben werden, um das Aussehen von ungültigen Feldern anzupassen.

```css
:invalid {
  box-shadow: none;
}

:-moz-submit-invalid {
  box-shadow: none;
}

:-moz-ui-invalid {
  box-shadow: none;
}
```

## Syntax

{{csssyntax}}

## Anmerkungen

#### Radio Buttons

Wenn in einer Gruppe von Radio Buttons (d.i., wenn alle den gleichen Wert für ihr `name`-Attribut besitzen) kein Radio Button ausgewählt ist und mindestens einer die Eigenschaft `required` hat, wird die Pseudoklasse `:invalid` auf alle Radio Buttons der Gruppe angewendet.

## Beispiel

Dieses Beispiel zeigt ein einfaches Formular, dessen gültige Elemente grün und dessen ungültige Elemente rot gefärbt werden.

### HTML

```html
<form>
  <label for="url_input">Geben Sie eine URL ein:</label>
  <input type="url" id="url_input" />
  <br />
  <br />
  <label for="email_input">Geben Sie eine E-Mail-Adresse ein:</label>
  <input type="email" id="email_input" required/>
</form>
```

### CSS

```css
input:invalid {
  background-color: #ffdddd;
}

form:invalid {
  border: 5px solid #ffdddd;
}

input:valid {
  background-color: #ddffdd;
}

form:valid {
  border: 5px solid #ddffdd;
}

input:required {
  border-color: #800000;
  border-width: 3px;
}

input:required:invalid {
  border-color: #C00000;
}
```

{{ EmbedLiveSample('Example2',600,150) }}

## Spezifikationen

| Spezifikation                                                                            | Status                                   | Kommentar                                                                |
| ---------------------------------------------------------------------------------------- | ---------------------------------------- | ------------------------------------------------------------------------ |
| {{ SpecName('HTML WHATWG', '#selector-invalid', ':invalid') }}     | {{ Spec2('HTML WHATWG') }}     | Keine Änderung.                                                          |
| {{ SpecName('HTML5 W3C', '#selector-invalid', ':invalid') }}         | {{ Spec2('HTML5 W3C') }}         | Definiert Semantik bezogen auf HTML und Überprüfung der Einschränkungen. |
| {{ SpecName('CSS4 Selectors', '#validity-pseudos', ':invalid') }} | {{ Spec2('CSS4 Selectors') }} | Keine Änderung.                                                          |
| {{ SpecName('CSS3 Basic UI', '#pseudo-validity', ':invalid') }}     | {{ Spec2('CSS3 Basic UI') }}     | Definiert die Pseudoklasse, aber nicht die dazugehörige Semantik.        |

## Browser-Kompatibilität

{{Compat("css.selectors.invalid")}}

## Siehe auch

- {{ cssxref(":valid") }}
- {{ cssxref(":-moz-submit-invalid") }}
- {{ cssxref(":required") }}
- {{ cssxref(":optional") }}
