---
title: text-transform
slug: Web/CSS/text-transform
translation_of: Web/CSS/text-transform
---
{{CSSRef}}

## Übersicht

Das `text-transform` CSS Attribut legt die Groß- und Kleinschreibung eines Elementes fest. Es kann verwendet werden, um den Text eines Elementes komplett klein oder klein zu schreiben oder den ersten Buchstaben jedes Wortes groß zu schreiben.

> **Note:** Das `text-transform` Attribut berücksichtigt sprachspezifische Regeln:\* in Turksprachen, wie Türkisch (tr), Aserbaidschanisch (az), Krimtatarisch (crh), und Baschkirisch (ba), gibt es zwei Arten von i, mit und ohne Punkt, und jeweils die Groß- bzw. Kleinschreibung: `i`/`İ` and `ı`/`I`.
>
> - auf Deutsch (de) wird das `ß` in der Großschreibung zu `SS`.
> - auf Niederländisch (nl) wird der Digraph `ij` auch bei `text-transform: capitalize` zu `IJ`.
> - auf Griechisch (el) verlieren Vokale ihren Akzent wenn wenn ganze Worte is in Großschreibung geschrieben werden (`ά`/`Α`), außer beim Eta (`ή`/`Ή`). Doppelvokale mit einem Akzent auf dem ersten Vokal verlieren den Akzent und bekommen einen Trema auf dem zweiten Vokal (`άι`/`ΑΪ`).
> - auf Griechisch (el) hat das kleine Sigma zwei Formen: `σ` and `ς`. `ς` wird nur dann genutzt, wenn Sigma ein Wort beendet. Wird `text-transform: lowercase` auf ein großes Sigma (Σ) angewandt, so muss der Browser aus dem Kontext heraus entscheiden, welches verwendet wird.Die Sprache wird durch das `lang` HTML Attribut oder das `xml:lang` XML Attribut festgelegt..Die Unterstützung dieser spezifischen Fälle unterscheidet sich von Browser zu Browser, also prüfen Sie dies anhand der [Kompatibilitätstabelle](/de/docs/CSS/text-transform#Browser_compatibility "CSS/text-transform#Browser_compatibility").

{{cssinfo}}

## Syntax

{{csssyntax("/en-US/docs/CSS/Value_definition_syntax")}}

    text-transform: capitalize
    text-transform: uppercase
    text-transform: lowercase
    text-transform: none
    text-transform: full-width

    text-transform: inherit

### Werte

- `capitalize`

  - : Ein Schlüsselwort, dass die Großschreibung des Anfachsbuchstaben jedes Wortes erzwingt. Geändert werden alle Unicode-basierten Zeichen außer Symbole. Dabei bleiben alle anderen Zeichen unverändert.

    > **Note:** Bei der automatischen Großschreibung sollte je nach Sprache die Kompatibilität beachtet und überprüft werden.

- `uppercase`
  - : Wendet die Großschreibung auf alle Zeichen an.
- `lowercase`
  - : Erzwingt die Kleinschreibung aller Zeichen.
- `none`
  - : Verhindert Änderungen; alle Buchstaben bleiben unverändert.
- `full-width` {{experimental_inline}}
  - : Erzwingt das Rendern der Buchstaben als rechteckige Form, was z.B. die Interaktion mit ostasiatischen Sprachen (z.B. Chinesisch oder Japanisch) erlaubt.

## Beispiele

<table class="standard-table">
  <tbody>
    <tr>
      <td colspan="2"><code>p { text-transform: none; }</code></td>
    </tr>
    <tr>
      <td>Zeichenkette</td>
      <td>
        <code
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit, ...</code
        >
      </td>
    </tr>
    <tr>
      <td>Echtzeitbeispiel</td>
      <td>
        <code style="text-transform: none"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit, ...</code
        >
      </td>
    </tr>
    <tr>
      <td>Referenzwert</td>
      <td>
        <code
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit, ...</code
        >
      </td>
    </tr>
  </tbody>
</table>

<table class="standard-table">
  <tbody>
    <tr>
      <td colspan="2"><code>p { text-transform: capitalize; }</code></td>
    </tr>
    <tr>
      <td>Zeichenkette</td>
      <td>
        <code
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit, ...</code
        >
      </td>
    </tr>
    <tr>
      <td>Echtzeitbeispiel</td>
      <td>
        <code style="text-transform: capitalize"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit, ...</code
        >
      </td>
    </tr>
    <tr>
      <td>Referenzwert</td>
      <td>
        <code
          >Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, ...</code
        >
      </td>
    </tr>
  </tbody>
</table>

<table class="standard-table">
  <tbody>
    <tr>
      <td colspan="2">
        <p><code>p { text-transform: capitalize; }</code></p>
        <p>
          Die Großschreibung beginnt bei Zeichen, die nach Unicode der
          Buchstabenkategorie angehören.
        </p>
      </td>
    </tr>
    <tr>
      <td>Zeichenkette</td>
      <td>
        <code
          >(this) “is” [a] –short– -test- «for» *the* _css_ ¿capitalize?
          ?¡transform!</code
        >
      </td>
    </tr>
    <tr>
      <td>Echtzeitbeispiel</td>
      <td>
        <code style="text-transform: capitalize"
          >(this) “is” [a] –short– -test- «for» *the* _css_ ¿capitalize?
          ?¡transform!</code
        >
      </td>
    </tr>
    <tr>
      <td>Referenzwert</td>
      <td>
        <code
          >(This) “Is” [A] –Short– -Test- «For» *The* _Css_ ¿Capitalize?
          ?¡Transform!</code
        >
      </td>
    </tr>
  </tbody>
</table>

<table class="standard-table">
  <tbody>
    <tr>
      <td colspan="2">
        <p><code>p { text-transform: capitalize; }</code></p>
        <p>
          Symbole werden ignoriert. Auch hier wird erst der erste gefundene
          Buchstabe in einer Zeichenkette großgeschrieben.
        </p>
      </td>
    </tr>
    <tr>
      <td>Zeichenkette</td>
      <td><code>ⓐⓑⓒ (ⓓⓔⓕ) —ⓖⓗⓘ— ⓙkl</code></td>
    </tr>
    <tr>
      <td>Echtzeitbeispiel</td>
      <td style="text-transform: capitalize">
        <code>ⓐⓑⓒ (ⓓⓔⓕ) —ⓖⓗⓘ— ⓙkl</code>
      </td>
    </tr>
    <tr>
      <td>Referenzwert</td>
      <td><code>ⓐⓑⓒ (ⓓⓔⓕ) —ⓖⓗⓘ— ⓙKl</code></td>
    </tr>
  </tbody>
</table>

<table class="standard-table">
  <tbody>
    <tr>
      <td colspan="2">
        <code>p { text-transform: capitalize; }</code><br />Das dänische Digraph
        <code>ij </code>muss wie ein einzelnes Zeichen behandelt werden.
      </td>
    </tr>
    <tr>
      <td>Zeichenkette</td>
      <td>
        <code
          >The Dutch word: "<span lang="nl">ijsland</span>" starts with a
          digraph.</code
        >
      </td>
    </tr>
    <tr>
      <td>Echtzeitbeispiel</td>
      <td style="text-transform: capitalize">
        <code
          >The Dutch word: "<span lang="nl">ijsland</span>" starts with a
          digraph.</code
        >
      </td>
    </tr>
    <tr>
      <td>Referenzwert</td>
      <td><code>The Dutch Word: "IJsland" Starts With A Digraph.</code></td>
    </tr>
  </tbody>
</table>

<table class="standard-table">
  <tbody>
    <tr>
      <td colspan="2"><code>p { text-transform: uppercase; }</code></td>
    </tr>
    <tr>
      <td>Zeichenkette</td>
      <td>
        <code
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit, ...</code
        >
      </td>
    </tr>
    <tr>
      <td>Echtzeitbeispiel</td>
      <td>
        <code style="text-transform: uppercase"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit, ...</code
        >
      </td>
    </tr>
    <tr>
      <td>Referenzwert</td>
      <td>
        <code
          >LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIT, ...</code
        >
      </td>
    </tr>
  </tbody>
</table>

<table class="standard-table" lang="el">
  <tbody>
    <tr>
      <td colspan="2">
        <p><code>p { text-transform: uppercase; }</code></p>
        <p>
          Bei Griechischen Vokalen sollte, außer bei einem trennenden
          <code>eta</code>, auf Akzente verzichtet werden. Bei der
          Großschreibung eines ersten Vokals mit Akzent kommt es bei zwei direkt
          aufeinander folgenden Vokalen zu einer Diaräse.
        </p>
      </td>
    </tr>
    <tr>
      <td>Zeichenkette</td>
      <td><code>Θα πάμε στο "Θεϊκό φαΐ" ή στη "Νεράιδα";</code></td>
    </tr>
    <tr>
      <td>Echtzeitbeispiel</td>
      <td>
        <code style="text-transform: uppercase"
          >Θα πάμε στο "Θεϊκό φαΐ" ή στη "Νεράιδα";</code
        >
      </td>
    </tr>
    <tr>
      <td>Referenzwert</td>
      <td><code>ΘΑ ΠΑΜΕ ΣΤΟ "ΘΕΪΚΟ ΦΑΪ" Ή ΣΤΗ "ΝΕΡΑΪΔΑ";</code></td>
    </tr>
  </tbody>
</table>

<table class="standard-table">
  <tbody>
    <tr>
      <td colspan="2"><code>p { text-transform: lowercase; }</code></td>
    </tr>
    <tr>
      <td>Zeichenkette</td>
      <td>
        <code
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit, ...</code
        >
      </td>
    </tr>
    <tr>
      <td>Echtzeitbeispiel</td>
      <td>
        <code style="text-transform: lowercase"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit, ...</code
        >
      </td>
    </tr>
    <tr>
      <td>Referenzwert</td>
      <td>
        <code
          >lorem ipsum dolor sit amet, consectetur adipisicing elit, ...</code
        >
      </td>
    </tr>
  </tbody>
</table>

<table class="standard-table">
  <tbody>
    <tr>
      <td colspan="2">
        <p><code>p { text-transform: lowercase; }</code></p>
        <p>
          Der griechische Buchstabe Sigma (<font face="Consolas">Σ</font>) wird
          je nach Kontext in ein kleingeschriebenes Sigma (<font face="Consolas"
            >σ</font
          >) oder die entsprechene Wortvariante (<font face="Consolas">ς</font>)
          umgewandelt.
        </p>
      </td>
    </tr>
    <tr>
      <td>Zeichenkette</td>
      <td>
        <code>Σ IS A greek LETTER that appears SEVERAL TIMES IN ΟΔΥΣΣΕΥΣ.</code>
      </td>
    </tr>
    <tr>
      <td>Echtzeitbeispiel</td>
      <td>
        <code style="text-transform: lowercase"
          >Σ IS A greek LETTER that appears SEVERAL TIMES IN ΟΔΥΣΣΕΥΣ.</code
        >
      </td>
    </tr>
    <tr>
      <td>Referenzwert</td>
      <td>
        <code>σ is a greek letter that appears several times in </code
        ><code style="text-transform: lowercase">ΟΔΥΣΣΕΥ</code><code>ς.</code>
      </td>
    </tr>
  </tbody>
</table>

<table class="standard-table">
  <tbody>
    <tr>
      <td colspan="2">
        <code>p { text-transform: full-width; }</code><br />Some characters
        exists in two formats, normal width and a full-width, with different
        Unicode code points. The full-width version is used to mix them smoothly
        with Asian ideographic characters.
      </td>
    </tr>
    <tr>
      <td>Zeichenkette</td>
      <td>
        0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&#x26;()*+,-./:;&#x3C;=>?@{|}~
      </td>
    </tr>
    <tr>
      <td>Echtzeitbeispiel</td>
      <td>
        <span
          >0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&#x26;()*+,-./:;&#x3C;=>?@{|}~</span
        >
      </td>
    </tr>
    <tr>
      <td>Referenzwert</td>
      <td>
        ０１２３４５６７８９ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ！＂＃＄％＆（）＊＋，－．／：；＜＝＞？＠｛｜｝～
      </td>
    </tr>
  </tbody>
</table>

## Details

| Spezifikation                                                                        | Status                       | Kommentrar                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS4 Text', '#text-transform', 'text-transform')}} | {{Spec2('CSS4 Text')}} | Aus{{SpecName('CSS3 Text', '#text-transform', 'text-transform')}} :Fügt das Schlüsselwort `full-size-kana` hinzu und erlaubt die Kombination von Schlüsselwörtern mit `full-width`                                                                                                                                                    |
| {{SpecName('CSS3 Text', '#text-transform', 'text-transform')}} | {{Spec2('CSS3 Text')}} | Aus {{SpecName('CSS2.1', 'text.html#caps-prop', 'text-transform')}} : Mehr Zahlen und Buchstaben können verwendet werden. Das Schlüsselwort capitalize aktiviert die Großschreibung nur beim _ersten unterstützten_ Zeichen eines Wortes; andere Zeichen werden ignoriert. Erhöhung der Kompatibilität des Schlüsselwortes full-width. |
| {{SpecName('CSS2.1', 'text.html#caps-prop', 'text-transform')}} | {{Spec2('CSS2.1')}}     | Aus {{SpecName('CSS1', '#text-transform', 'text-transform')}} : Ergänzung des Umfangs an unterstützten Zeichen um einige nicht-lateinische Buchstaben                                                                                                                                                                                    |
| {{SpecName('CSS1', '#text-transform', 'text-transform')}}         | {{Spec2('CSS1')}}     |                                                                                                                                                                                                                                                                                                                                                             |

## Browserkompatibilität

{{Compat}}

### Browserinformationen

Das capitalize Schlüsselwort wurde in CSS1 bzw. CSS 2.1 nicht eindeutig spezifiziert. Dadurch wurde der erste großzuschreibende Buchstabe unterschiedlich ermittelt. Sowohl Webkit-basierte Browser als auch die Gecko Engine identifizierte Symbole fälschlicherwiese als Buchstaben. Beispielsweise galten bei Firefox `- `respektive `_` als Buchstaben. Internet Explorer 9 hielt sich den Spezifikationen insgesamt am nächsten. Mit CSS3 wurde das Verhalten vereinheitlicht. Der Kompatibilitätstabelle können die Browserversionen entnommen werden, mit denen der Standard erstmals exakt umgesetzt wurde.

## Siehe auch

- {{cssxref("font-variant")}}
