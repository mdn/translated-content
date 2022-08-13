---
title: <custom-ident>
slug: Web/CSS/custom-ident
tags:
  - CSS
  - CSS Datentyp
  - Layout
  - Referenz
  - Web
translation_of: Web/CSS/custom-ident
---
{{CSSRef}}

## Übersicht

Der `<custom-ident>` [CSS](/de/docs/Web/CSS) Datentyp beschreibt eine beliebige benutzerdefinierte Zeichenkette, die als Bezeichner verwendet wird. Er ist schreibungsabhängig und in jedem Kontext sind mehrere Werte ausgeschlossen, um Falschinterpretationen zu vermeiden.

## Syntax

Seine Syntax ist ähnlich der des CSS Bezeichners mit Ausnahme, dass Groß- und Kleinschreibung berücksichtigt wird: ein `<custom-ident>` ist eine Sequenz von Zeichen, wobei Zeichen folgendes sein können:

- ein beliebiges alphanumerisches Zeichen (`'A'` bis `'Z'` oder `'a'` bis `'z'`),
- eine beliebige dezimale Ziffer (`'0'` bis `'9'`),
- ein Bindestrich (`'-'`)
- ein Unterstrich (`'_'`),
- ein escaptes Zeichen (mit einem Backslash, `'\'`),
- oder ein [Unicode](http://de.wikipedia.org/wiki/Unicode) Zeichen (im Format eines Backslashs gefolgt von einer bis sechs hexadezimalen Ziffern, seinem Unicode Codepoint).

Das erste Zeichen darf weder eine dezimale Ziffer, noch ein Bindestrich (`'-'`) sein, gefolgt von einer dezimalen Ziffer oder einem weiteren Bindestrich. Ein `<custom-ident>` darf nicht zwischen einfachen oder doppelten Anführungszeichen stehen, da er sonst identisch zu einem {{cssxref("&lt;string&gt;")}} wäre.

Beachte, dass `id1`, `Id1`, `iD1` und `ID1` alle verschiedene Bezeichner sind, da sie sich in [Groß-/Kleinschreibung](https://de.wikipedia.org/wiki/Case_sensitivity) unterscheiden. Im Gegensatz dazu sind `toto\?` und `toto\3F` dieselben Bezeichner, da es verschiedene Arten gibt, ein Zeichen zu escapen.

## Liste ausgeschlossener Werte

Um Mehrdeutigkeiten zu verhindern, definiert jede Eigenschaft, die `<custom-ident>` verwendet, eine spezielle Liste an verbotenen Werten:

- {{cssxref("animation-name")}}
  - : Verbietet die globalen CSS Werte `unset`, `initial` und `inherit` und den Wert `none`.
- {{cssxref("counter-reset")}}

  {{cssxref("counter-increment")}}

  - : Verbietet die globalen CSS Werte `unset`, `initial` und `inherit` und den Wert `none`.

- {{cssxref("@counter-style")}}

  {{cssxref("list-style-type")}}

  - : Verbietet die globalen CSS Werte `unset`, `initial` und `inherit`, als auch die Werte `none`, `inline` und `outside`. Auch einige vordefinierte Werte werden von verschiedenen Browsern implementiert: `disc`, `circle`, `square`, `decimal`, `cjk-decimal`, `decimal-leading-zero`, `lower-roman`, `upper-roman`, `lower-greek`, `lower-alpha`, `lower-latin`, `upper-alpha`, `upper-latin`, `arabic-indic`, `armenian`, `bengali`, `cambodian`, `cjk-earthly-branch`, `cjk-heavenly-stem`, `cjk-ideographic`, `devanagari`, `ethiopic-numeric`, `georgian`, `gujarati`, `gurmukhi`, `hebrew`, `hiragana`, `hiragana-iroha`, `japanese-formal`, `japanese-informal`, `kannada`, `katakana`, `katakana-iroha`, `khmer`, `korean-hangul-formal`, `korean-hanja-formal`, `korean-hanja-informal`, `lao`, `lower-armenian`, `malayalam`, `mongolian`, `myanmar`, `oriya`, `persian`, `simp-chinese-formal`, `simp-chinese-informal`, `tamil`, `telugu`, `thai`, `tibetan`, `trad-chinese-formal`, `trad-chinese-informal`, `upper-armenian`, `disclosure-open` und `disclosure-close`.

- {{cssxref("will-change")}}
  - : Verbietet die globalen CSS Werte `unset`, `initial` und `inherit`, als auch die Werte `will-change`, `auto`, `scroll-position` und `contents`.

## Beispiele

Dies sind gültige Bezeichner:

    nono79            Eine Mischung aus alphanumerischen Zeichen und Zahlen
    ground-level      Eine Mischung aus alphanumerischen Zeichen und einem Bindestrich
    -test             Ein Bindestrich gefolgt von alphanumerischen Zeichen
    _internal         Ein Unterstrich gefolgt von alphanumerischen Zeichen
    \22 toto          Ein Unicode-Zeichen gefolgt von einer Sequenz von alphanumerischen Zeichen
    bili\.bob         Der Punkt ist korrekt escapt

Dies sind ungültige Bezeichner:

    34rem             Darf nicht mit einer Dezimalziffer anfangen
    -12rad            Darf nicht mit einem Bindestrich gefolgt von einer Dezimalziffer anfangen
    bili.bob          Nur alphanumerische Zeichen, _ und - müssen nicht escapt werden
    --toto            Darf nicht mit zwei Bindestrichen anfangen
    'bilibob'         Kein <user-ident>, sondern ein {{cssxref("&lt;string&gt;")}}
    "bilibob"         Kein <user-ident>, sondern ein {{cssxref("&lt;string&gt;")}}

## Spezifikationen

| Spezifikation                                                                                                                                                                            | Status                                       | Kommentar                                                                                                                                                                                                                 |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS Will Change', '#valdef-will-change-custom-ident', '<code>&lt;custom-ident&gt;</code> für <code>will-change</code>')}}     | {{Spec2('CSS Will Change')}}         | Definiert, welche Werte für {{cssxref("will-change")}} ausgeschlossen sind.                                                                                                                                     |
| {{SpecName('CSS3 Counter Styles', '#typedef-counter-style-name', '<code>&lt;custom-ident&gt;</code> für <code>list-style-type</code>')}} | {{Spec2('CSS3 Counter Styles')}} | Verwendet `<custom-ident>` anstatt einer begrenzten Liste von Schlüsselwörtern und definiert, welche Werte für {{cssxref("list-style-type")}} und {{cssxref("@counter-style")}} ausgeschlossen sind. |
| {{SpecName('CSS3 Lists', '#counter-properties', '<code>&lt;custom-ident&gt;</code> für <code>counter-*</code>')}}                                 | {{Spec2('CSS3 Lists')}}             | Benennt `<identifier>` zu `<custom-ident>` um. Fügt seine Verwendung zur neuen `counter-set` Eigenschaft hinzu.                                                                                                           |
| {{SpecName('CSS3 Animations', '#typedef-single-animation-name', '<code>&lt;custom-ident&gt;</code> für <code>animation-name</code>')}}     | {{Spec2('CSS3 Animations')}}         | Definiert, welche Werte für {{cssxref("animation-name")}} ausgeschlossen sind.                                                                                                                                 |
| {{SpecName('CSS3 Values', '#identifier-value', '<code>&lt;custom-ident&gt;</code>')}}                                                                         | {{Spec2('CSS3 Values')}}             | Benennt `<identifier>` in `<custom-ident>` um. Macht ihn zu einem Pseudotyp und verlangt die verschiedenen Verwendungen, um die ausgeschlossenen Werte zu präzisieren.                                                    |
| {{SpecName('CSS2.1', 'syndata.html#value-def-identifier', '<code>&lt;identifier&gt;</code>')}}                                                             | {{Spec2('CSS2.1')}}                     | Ursprüngliche Definition                                                                                                                                                                                                  |

## Browser Kompatibilität

_Da dieser Typ kein realer Typ ist, sondern ein Bequemlichkeitstyp, der dazu verwendet wird, um die Beschreibung von erlaubten Werten zu vereinfachen, gibt es keine Browser Kompatibilitätsinformationen im engeren Sinne._
