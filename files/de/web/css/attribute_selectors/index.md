---
title: Attributselektoren
slug: Web/CSS/Attribute_selectors
tags:
  - Anfänger
  - CSS
  - Reference
  - Selectors
translation_of: Web/CSS/Attribute_selectors
original_slug: Web/CSS/Attributselektoren
---
{{CSSRef}}

## Übersicht

Attributselektoren wählen Elemente anhand des Vorhandenseins oder Wertes eines Attributs aus.

- `[attr]`
  - : Repräsentiert ein Element mit einem Attribut attr.
- `[attr=wert]`
  - : Repräsentiert ein Element mit einem Attribut attr, welches exakt den Wert „wert“ enthält.
- `[attr~=wert]`
  - : Repräsentiert ein Element mit einem Attribut attr, welches eine Liste mit durch Leerraum getrennten Wörtern enthält, von denen eines exakt dem Wert „wert“ entspricht.
- `[attr|=wert]`
  - : Repräsentiert ein Element mit einem Attribut attr. Es kann exakt den Wert „wert“ enthalten oder mit einem Wert „wert“ beginnen, dem ein „-“ (U+002D) folgt. Es kann benutzt werden, um anhand von Sprachsubcodes Elemente auszuwählen.
- `[attr^=wert]`
  - : Repräsentiert ein Element mit einem Attribut attr, dessen Wert mit „wert“ beginnt.
- `[attr$=wert]`
  - : Repräsentiert ein Element mit einem Attribut attr, dessen Wert mit „wert“ endet.
- `[attr*=wert]`
  - : Repräsentiert ein Element mit einem Attribut attr, dessen Wert mindestens einmal „wert“ enthält.
- `[attr operator wert i]`
  - : Wenn ein i vor der schließenden Klammer eingefügt wird, wird ein Vergleich ohne Berücksichtigung der Groß-/Kleinschreibung (für Zeichen innerhalb des ASCII Bereichs) durchgeführt.

## Beispiele

```css
/* Alle span-Elemente mit dem „lang“-Attribut sind fett */
span[lang] {font-weight:bold;}

/* Alle span-Elemente in Portugiesisch sind grün */
span[lang="pt"] {color:green;}

/* Alle span-Elemente in amerikanischem Englisch sind blau  */
span[lang~="en-us"] {color: blue;}

/* Alle span-Elemente sowohl in vereinfachtem (zh-CN) als auch traditionellem (zh-TW) Chinesisch sind rot */
span[lang|="zh"] {color: red;}

/* Alle internen Links haben einen goldenen Hintergrund */
a[href^="#"] {background-color:gold}

/* Alle Links zu mit „.cn“ endenden URLs sind rot */
a[href$=".cn"] {color: red;}

/* Alle Links zu URLs, die „beispiel“ enthalten, haben einen grauen Hintergrund */
a[href*="beispiel"] {background-color: #CCCCCC;}

/* Alle email Eingabefelder haben einen blauen Rahmen */
/* Das matcht jede Großschreibung von "email", z. B. "email", "EMAIL", "eMaIL", etc. */
input[type="email" i] {border-color: blue;}
```

```html
<div class="hallo-beispiel">
    <a href="http://example.com">English:</a>
    <span lang="en-us en-gb en-au en-nz">Hallo Welt!</span>
</div>
<div class="hallo-beispiel">
    <a href="#portugiesisch">Portugiesisch:</a>
    <span lang="pt">Olá Mundo!</span>
</div>
<div class="hallo-beispiel">
    <a href="http://example.cn">Chinesisch (Vereinfacht):</a>
    <span lang="zh-CN">世界您好！</span>
</div>
<div class="hallo-beispiel">
    <a href="http://example.cn">Chinesisch (Traditionell):</a>
    <span lang="zh-TW">世界您好！</span>
</div>
```

{{EmbedLiveSample('Beispiele', 250, 100)}}

## Spezifikationen

| Spezifikation                                                                                                | Status                               | Kommentar                                                                                   |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------ | ------------------------------------------------------------------------------------------- |
| {{SpecName('CSS4 Selectors', '#attribute-selectors', 'attribute selectors')}}     | {{Spec2('CSS4 Selectors')}} | Hat den Modifizierer für ASCII schreibungsunabhängige Attributwertselektierung hinzugefügt. |
| {{SpecName('CSS3 Selectors', '#attribute-selectors', 'attribute selectors')}}     | {{Spec2('CSS3 Selectors')}} |                                                                                             |
| {{SpecName('CSS2.1', 'selector.html#attribute-selectors', 'attribute selectors')}} | {{Spec2('CSS2.1')}}             | Ursprüngliche Definition                                                                    |

## Browser Kompatibilität

{{Compat("css.selectors.attribute")}}

## Siehe auch

- [CSS Selektoren: Grundlegende Browserunterstützung](https://dev.l-c-n.com/CSS3-selectors/browser-support.php)
- [CSS Selektoren und Pseudoselektoren Browserkompatibilität](https://kimblim.dk/css-tests/selectors/)
