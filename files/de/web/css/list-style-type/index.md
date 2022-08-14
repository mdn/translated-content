---
title: list-style-type
slug: Web/CSS/list-style-type
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Liste
  - NeedsMobileBrowserCompatibility
  - Referenz
translation_of: Web/CSS/list-style-type
---
{{CSSRef}}

## Übersicht

Die CSS-Eigenschaft `list-style-type` bestimmt, wie die Einträge einer Liste ausgezeichnet werden. Übliche Arten sind etwa Punkte oder eine Nummerierung vor jedem Eintrag:

- Erster Eintrag
- Zweiter Eintrag

1.  Numerierte Einträge
2.  Numerierte Einträge

Meist wird diese Eigenschaft mit dem {{HTMLElement("li")}}-Element in Verbindung gebracht. Tatsächlich kann es sich jedoch um jedes beliebige Element handeln, dessen {{cssxref("display")}}-Eigenschaft `list-item` ist.

> **Note:** **Hinweis:** `list-style-type` ist eine Eigenschaft von Listenelementen, nicht von Listen. Da sie vererbt wird, kann sie jedoch statt beim Listenelement selbst auch bei seinem Elternelement gesetzt werden (in der Regel {{HTMLElement("ol")}} or {{HTMLElement("ul")}}).

{{cssinfo}}

## Syntax

### Werte

- `none`
  - : Es wird kein Aufzählungszeichen angezeigt.
- {{cssxref("&lt;string&gt;")}}
  - : Der gebene, in Anführungszeichen gesetzte Text wird vor jedem Listeneintrag angezeigt. Beispiel: `list-style-type: '-'`
- {{cssxref("symbols()")}}
  - : Statt über {{cssxref("@counter-style")}} eine Aufzählungsweise zu definieren, kann dies mit der Funktion symbols() auch direkt in der Eigenschaft `list-style-type` geschehen.
    Da diese Aufzählungsweise im Gegensatz zu per @counter-style definierten keinen Namen hat, wird sie auch als "anonym" bezeichnet.
- {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
  - : Ein Bezeichner, der dem Wert einer {{cssxref("@counter-style")}}-Regel entspricht oder einem der folgenden Stile:

<!---->

- `disc`
  - : \* Ein gefüllter Kreis (Standardwert)
- `circle`
  - : \* Ein leerer Kreis
- `square`
  - : \* Ein gefülltes Quadrat
- `decimal`
  - : \* Dezimalzahlen
    - Beginnend bei 1
- `cjk-decimal` {{experimental_inline}}
  - : \* Han-Dezimalzahlen
    - z. B. 一, 二, 三, ..., 九八, 九九, 一〇〇
- `decimal-leading-zero`
  - : \* Dezimalzahlen
    - Aufgefüllt mit vorangestellten Nullen
    - z. B. 01, 02, 03, … 98, 99
- `lower-roman`
  - : \* Kleingeschriebene römische Zahlen
    - E.g. i, ii, iii, iv, v…
- `upper-roman`
  - : \* Großgeschriebene römische Zahlen
    - E.g. I, II, III, IV, V…
- `lower-greek`
  - : \* Kleingeschriebene griechische Zahlworte
    - Alpha, Beta, Gamma…
    - z. B. α, β, γ…
- `lower-alpha`

  `lower-latin`

  - : \* Kleingeschriebene lateinische Buchstaben
    - z. B. a, b, c, … z
    - `lower-latin` wird nicht von IE7 und früher unterstützt
    - Siehe den Unterpunkt [Browser-Kompatibilität](#browser-kompatibilität).

- `upper-alpha`

  `upper-latin`

  - : \* Großgeschriebene lateinische Buchstaben
    - z. B. A, B, C, … Z
    - `upper-latin` wird nicht von IE7 und früher unterstützt

- `arabic-indic`

  `-moz-arabic-indic`

  - : \* Beispiel

- `armenian`
  - : \* Traditionelle armenische Nummerierung
    - z. B. ayb/ayp, ben/pen, gim/keem…
- `bengali`

  `-moz-bengali`

  - : \* Beispiel

- `cambodian` {{experimental_inline}}\*
  - : \* Beispiel
    - Ist ein Synonym für Khmer
- `cjk-earthly-branch`

  `-moz-cjk-earthly-branch`

  - : \* Beispiel

- `cjk-heavenly-stem`

  `-moz-cjk-heavenly-stem`

  - : \* Beispiel

- `cjk-ideographic`{{experimental_inline}}
  - : \* Identisch zu `trad-chinese-informal`
    - Z. B. 一萬一千一百一十一
- `devanagari`

  `-moz-devanagari`

  - : \* Beispiel

- `ethiopic-numeric` {{experimental_inline}}
  - : \* Beispiel
- `georgian`
  - : \* Traditionelle georgische Nummerierung
    - z. B. an, ban, gan, … he, tan, in…
- `gujarati`

  `-moz-gujarati`

  - : \* Beispiel

- `gurmukhi`

  `-moz-gurmukhi`

  - : \* Beispiel

- `hebrew` {{experimental_inline}}
  - : \* Traditionelle hebräische Nummerierung
- `hiragana` {{experimental_inline}}
  - : \* a, i, u, e, o, ka, ki, …
    - (Japanisch)
- `hiragana-iroha` {{experimental_inline}}
  - : \* i, ro, ha, ni, ho, he, to, …
    - {{interwiki('wikipedia', 'Iroha')}} ist die alte japanische Silbenreihenfolge.
- `japanese-formal` {{experimental_inline}}
  - : \* Formelle japanische Nummerierung, wie sie in juristischen oder Wirtschaftsdokumenten verwendet wird.
    - z. B. 壱萬壱阡壱百壱拾壱
    - Änderungen an der Gestaltung der Kanji-Schriftzeichen, die zu Verwechslungen mit anderen führen könnten, werden unterdrückt.
- `japanese-informal` {{experimental_inline}}
  - : \* Formlose japanische Nummerierung
- `kannada`

  `-moz-kannada`

  - : \* Beispiel

- `katakana` {{experimental_inline}}
  - : \* A, I, U, E, O, KA, KI, …
    - (Japanisch)
- `katakana-iroha` {{experimental_inline}}
  - : \* I, RO, HA, NI, HO, HE, TO, …
    - {{interwiki('wikipedia', 'Iroha')}} ist die alte japanische Silbenreihenfolge.
- `khmer`

  `-moz-khmer`

  - : \* Beispiel

- `korean-hangul-formal` {{experimental_inline}}
  - : \* Koreanische Hangul-Nummerierung
    - z. B. 일만 일천일백일십일
- `korean-hanja-formal` {{experimental_inline}}
  - : \* Formelle koreanische Han-Nummerierung
    - z. B. 壹萬 壹仟壹百壹拾壹
- `korean-hanja-informal` {{experimental_inline}}
  - : \* Koreanische Hanja-Nummerierung
    - z. B. 萬 一千百十一
- `lao`

  `-moz-lao`

  - : \* Beispiel

- `lower-armenian` {{experimental_inline}}\*
  - : \* Beispiel
- `malayalam`

  `-moz-malayalam`

  - : \* Beispiel

- `mongolian` {{experimental_inline}}
  - : \* Beispiel
- `myanmar`

  `-moz-myanmar`

  - : \* Beispiel

- `oriya`

  `-moz-oriya`

  - : \* Beispiel

- `persian` {{experimental_inline}}

  `-moz-persian`

  - : \* Beispiel

- `simp-chinese-formal` {{experimental_inline}}
  - : \* Formelle Nummerierung in vereinfachtem Chinesisch
    - z. B. 壹万壹仟壹佰壹拾壹
- `simp-chinese-informal` {{experimental_inline}}
  - : \* Formlose Nummerierung in vereinfachtem Chinesisch
    - z. B. 一万一千一百一十一
- `tamil` {{experimental_inline}}

  `-moz-tamil`

  - : \* Beispiel

- `telugu`

  `-moz-telugu`

  - : \* Beispiel

- `thai`

  `-moz-thai`

  - : \* Beispiel

- `tibetan` {{experimental_inline}}\*
  - : \* Beispiel
- `trad-chinese-formal` {{experimental_inline}}
  - : \* Formelle Nummerierung in traditionellem Chinesisch
    - z. B. 壹萬壹仟壹佰壹拾壹
- `trad-chinese-informal` {{experimental_inline}}
  - : \* Formlose Nummerierung in traditionellem Chinesisch
    - z. B. 一萬一千一百一十一
- `upper-armenian` {{experimental_inline}}\*
  - : \* Beispiel
- `disclosure-open` {{experimental_inline}}
  - : \* Zeigt an, dass der zugehörige Seitenbereich (etwa {{HTMLElement("details")}}) sichtbar ist.
- `disclosure-closed` {{experimental_inline}}
  - : \* Zeigt an, dass der zugehörige Seitenbereich (etwa {{HTMLElement("details")}}) versteckt ist.

### Nicht standardisierte Erweiterungen

Zusätzliche Werte, die von Gecko (Firefox), Blink (Chrome und Opera) und WebKit (Safari) unterstützt werden, um Listenarten in anderen Sprachen anzubieten. Die Kompatibilitätstabelle weiter unten gibt nähere Auskunft zu den einzelnen Browsern.

- \-moz-ethiopic-halehame
  - : \* Beispiel
- \-moz-ethiopic-halehame-am
  - : \* Beispiel
- ethiopic-halehame-ti-er

  \-moz-ethiopic-halehame-ti-er

  - : \* Beispiel

- ethiopic-halehame-ti-et

  \-moz-ethiopic-halehame-ti-et

  - : \* Beispiel

- hangul

  \-moz-hangul

  - : \* Beispiel
    - Beispiel
    - Beispiel

- hangul-consonant

  \-moz-hangul-consonant

  - : \* Beispiel
    - Beispiel
    - Beispiel

- urdu

  \-moz-urdu

  - : \* Beispiel

### Formale Syntax

{{csssyntax}}

## Beispiele

### CSS

```css
ol.normal {
  list-style-type: upper-alpha;
}

/* Es kann auch die Kurzschreibweise "list-style" verwendet werden: */
ol.shortcut {
  list-style: upper-alpha;
}
```

### HTML

```html
<ol class="normal">Liste 1
  <li>Hallo</li>
  <li>Welt</li>
  <li>Was gibt's?</li>
</ol>

<ol class="shortcut">Liste 2
  <li>Schaut</li>
  <li>Gleich</li>
  <li>aus</li>
</ol>
```

### Ergebnis

{{EmbedLiveSample("Beispiele", "200", "300")}}

## Hinweise

- Manche Listenarten setzen für die korrekte Darstellung voraus, dass eine passende Schriftart installiert ist.
- `cjk-ideographic` ist identisch zu `trad-chinese-informal`; es existiert lediglich aus Gründen der Rückwärtskompatibilität.

## Spezifikationen

| Spezifikation                                                                                                | Status                           | Kommentar                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('CSS3 Lists', '#list-style-type', 'list-style-type')}}                     | {{Spec2('CSS3 Lists')}} | Definiert CSS2.1-Zähler neu. Erweitert die Syntax um Unterstützung für `@counter-style-`Regeln. Definiert unter Verwendung von `@counter-style` die üblichen Stiltypen: `hebrew`, `cjk-ideographic`, `hiragana`, `hiragana-iroha`, `katakana`, `katakana-iroha`, `japanese-formal`, `japanese-informal`, `simp-chinese-formal`, `trad-chinese-formal`, `simp-chinese-formal`, `trad-chinese-formal`,`korean-hangul-formal`, `korean-hanja-informal`, `korean-hanja-formal`, `cjk-decimal`, `ethiopic-numeric`, `disclosure-open` und `disclosure-closed`. Erweitert `<counter-style>` um die Funktion `symbols()`. |
| {{SpecName('CSS2.1', 'generate.html#propdef-list-style-type', 'list-style-type')}} | {{Spec2('CSS2.1')}}         | Ursprüngliche Definition                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

## Browserkompatibilität

{{Compat("css.properties.list-style-type")}}

## Siehe auch

- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
