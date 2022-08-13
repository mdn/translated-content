---
title: Wertdefinitionssyntax
slug: Web/CSS/Value_definition_syntax
tags:
  - CSS
  - Referenz
translation_of: Web/CSS/Value_definition_syntax
original_slug: Web/CSS/Wertdefinitionssyntax
---
{{ CSSRef() }}

Eine formale Grammatik, die **CSS Wertdefinitionssyntax**, wird für die Definition einer Menge von gültigen Werten für eine CSS Eigenschaft oder Funktion verwendet. Zusätzlich zu dieser Syntax kann die Menge an gültigen Werten durch semantische Beschränkungen (wie z. B. dass eine Zahl positiv sein muss) weiter eingegrenzt werden.

Die Definitionssyntax beschreibt, welche Werte erlaubt sind und die Interaktionen zwischen ihnen. Eine Komponente kann ein _Schlüsselwort_ sein, einige Zeichen, die als _Literal_ interpretiert werden, oder ein Wert eines vorhandenen CSS Datentyps einer anderen CSS Eigenschaft.

## Komponentenwert Typen

### Schlüsselwörter

#### Generische Schlüsselwörter

Ein Schlüsselwort mit einer vordefinierten Bedeutung wird wortgetreu, ohne Anführungszeichen, dargestellt, zum Beispiel: `auto`, `smaller` oder `ease-in`.

#### Die Spezialfälle `inherit` und `initial`

Alle CSS Eigenschaften akzeptieren die Schlüsselwörter `inherit` und `initial`, die durchweg in CSS definiert werden. Sie werden nicht in der Wertdefinition angezeigt und werden implizit definiert.

### Literale

In CSS können einige Zeichen getrennt auftreten, wie der Schrägstrich ('`/`') oder das Komma ('`,`'), und werden in der Eigenschaftendefinition verwendet, um Teile voneinander zu trennen. Das Komma wird oft verwendet, um Werte in Aufzählungen oder Parameter in Mathematik ähnlichen Funktionen zu trennen; der Schrägstrich trennt oft Teile eines Wertes, die semantisch unterscheiden, jedoch eine gemeinsame Syntax haben. Normalerweise wird der Schrägstrich manchmal in Kurzform Eigenschaften verwendet, um Komponenten von einander zu trennen, die vom gleichen Typ sind, aber zu verschiedenen Eigenschaften gehören.

Beide Symbole erscheinen buchstäblich in einer Wertdefinition.

### Datentypen

#### Elementare Datentypen

Bestimmte Daten werden überall in CSS verwendet und werden einmalig für alle Werte in der Spezifikation definiert. Die sogenannten _elementaren Datentypen_ werden durch ihren von den Symbolen '`<`' und '`>`' umschlossenen Namen gekennzeichnet: {{ cssxref("&lt;angle&gt;") }}, {{cssxref("&lt;string&gt;")}}, …

#### Nichtterminale Datentypen

Weniger häufige Datentypen, genannt _nichtterminale Datentypen_, werden ebenfalls von '`<`' und '`>`' umschlossen.

Es gibt zwei Arten von nichtterminalen Datentypen:

- Datentypen, die _den Namen einer Eigenschaft teilen_, eingeschlossen von Anführungszeichen. In diesem Fall teilt der Datentyp die gleiche Menge an Werten wie die Eigenschaft. Sie werden oft in der Definition von Kurzform Eigenschaften verwendet.
- Datentypen, die _den Namen einer Eigenschaft nicht teilen_. Diese Datentypen ähneln den elementaren Datentypen. Sie unterscheiden sich lediglich in der Stelle ihrer Definition von den elementaren Datentypen: In diesem Fall ist die Definition normalerweise sehr nahe bei der Definition der Eigenschaft, die sie benutzt.

## Komponentenwert Kombinatoren

### Eckige Klammern

_Eckige Klammern_ schließen mehrere Entitäten, Kombinatoren und Multiplikatoren ein und transformieren diese anschließend als eine einzige Komponente. Sie werden benutzt, um **Komponenten zu gruppieren und so die Rangordnungsregeln zu umgehen**.

    bold [ thin && <length> ]

Dieses Beispiel passt auf die folgenden Werte:

- `bold thin 2vh`
- `bold 0 thin`
- `bold thin 3.5em`

Aber nicht:

- `thin bold 3em`; da `bold` neben die durch die Klammern definierte Komponente gestellt ist, muss sie davor erscheinen.

### Nebeneinanderstellung

Wenn mehrere Schlüsselwörter, Literale oder Datentypen aufgereiht werden und nur durch ein oder mehrere Leerzeichen getrennt werden, nennt man dies _Nebeneinanderstellung_. Alle nebeneinander gestellten Komponenten sind zwingend und müssen in der exakten Reihenfolge angegeben werden.

    bold <length> , thin

Dieses Beispiel passt auf die folgenden Werte:

- `bold 1em, thin`
- `bold 0, thin`
- `bold 2.5cm, thin`
- `bold 3vh, thin`

Aber nicht:

- `thin 1em, bold`, da die Entitäten in der beschriebenen Reihenfolge stehen müssen.
- `bold 1em thin`, da die Entitäten zwingend angegeben werden müssen; das Komma und ein Literal müssen vorhanden sein.
- `bold 0.5ms, thin`, da `ms` Werte keine {{cssxref("&lt;length&gt;")}} Werte sind.

### Doppeltes Und-Zeichen

Wenn zwei oder mehrere Komponenten durch ein _doppeltes Und-Zeichen_, `&&`, getrennt sind, bedeutet das, dass alle diese Entitäten **zwingend sind, jedoch in beliebiger Reihenfolge auftreten können**.

    bold && <length>

Dieses Beispiel passt auf die folgenden Werte:

- `bold 1em`
- `bold 0`
- `2.5cm bold`
- `3vh bold`

Aber nicht:

- `bold`, da beide Komponenten im Wert vorkommen müssen.
- `bold 1em bold`, da beide Komponenten nur einmal vorkommen dürfen.

> **Hinweis:** Juxtaposition hat Vorrang gegenüber dem doppelten Und-Zeichen, was bedeutet, dass `bold thin && <length>` gleichbedeutend ist mit `[ ``bold thin ] && <length>`. Dies beschreibt `bold thin <length>` oder `<length>`` bold thin`, aber nicht `bold <length>`` thin`.

### Doppelter Balken

Wenn zwei oder mehrere Komponenten durch einen _doppelten Balken_, `||`, getrennt sind, bedeutet das, dass alle Entitäten optional sind: **mindestens eine davon muss angegeben werden, und sie können in beliebiger Reihenfolge auftreten**. Normalerweise wird dies verwendet, um die verschiedenen Werte einer [Kurzform Eigenschaft](/de/docs/Web/CSS/Kurzform_Eigenschaft "/en-US/docs/CSS/Shorthand_properties") zu definieren.

    <'border-width'> || <'border-style'> || <'border-color'>

Dieses Beispiel passt auf die folgenden Werte:

- `1em solid blue`
- `blue 1em`
- `solid 1px yellow`

Aber nicht:

- `blue yellow`, da eine Komponente nur einmal vorkommen darf.
- `bold`, da es kein erlaubtes Schlüsselwort als Wert für irgendeine Entität ist.

> **Hinweis:** Das doppelte Und-Zeichen hat Vorrang gegenüber dem doppelten Balken, was bedeutet, dass `bold || thin && <length>` gleichbedeutend ist mit `bold || [ thin && <length> ]`. Dies beschreibt `bold`, `thin`, `<length>`, `bold thin`, `<length> bold`, oder `thin <length> bold`, aber nicht `bold <length>`` bold thin`, da `bold`, falls nicht weggelassen, vor oder nach der gesamten `thin && <length>` Komponente platziert werden muss.

### Einfacher Balken

Wenn zwei oder mehrere Entitäten durch einen _einfachen Balken_, `|`, getrennt werden, bedeutet das, dass alle Entitäten exklusive Optionen sind: **genau eine dieser Optionen muss angegeben werden**. Dies wird normalerweise benutzt, um eine Liste möglicher Schlüsselwörter zu trennen.

    <percentage> | <length> | left | center | right | top | bottom

Dieses Beispiel passt auf die folgenden Werte:

- `3%`
- `0`
- `3.5em`
- `left`
- `center`
- `right`
- `top`
- `bottom`

Aber nicht:

- `center 3%`, da nur eine der Komponenten angegeben werden darf.
- `3em 4.5em`, da eine Komponente nur einmal vorkommen darf.

> **Hinweis:** Der doppelte Balken hat Vorrang gegenüber dem einfachen Balken, was bedeutet, dass `bold | thin || <length>` gleichbedeutend ist mit `bold | [ thin || <length> ]`. Dies beschreibt `bold`, `thin`, `<length>`, `<length> thin`, oder `thin <length>`, aber nicht `bold <length>`, da nur eine Entität jeder Seite des `|` Kombinators vorkommen darf.

## Komponentenwert Multiplikatoren

Ein Multiplikator ist ein Zeichen, das angibt, wie oft eine vorhergehende Entität wiederholt werden kann. Ohne einen Multiplikator muss eine Entität exakt einmal vorkommen.

{{Note("Multiplikatoren können nicht zu Kombinatoren hinzugefügt werden und haben auch keinen Vorrang vor diesen.")}}

### Asterisk (`*`)

Der _Asterisk Multiplikator_ gibt an, dass die Entität **keinmal, einmal oder mehrmals** vorkommen kann.

    bold smaller*

Dieses Beispiel passt auf die folgende Werte:

- `bold`
- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller` and so on.

Aber nicht:

- `smaller`, da `bold` eine Nebeneinanderstellung ist und vor jeglichem `smaller` Schlüsselwort stehen muss.

### Plus (`+`)

Der _Plus Multiplikator_ gibt an, dass die Entität **einmal oder mehrmals** vorkommen kann.

    bold smaller+

Dieses Beispiel passt auf die folgenden Werte:

- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller` and so on.

Aber nicht:

- `bold`, da `smaller` mindestens einmal vorkommen muss.
- `smaller`, da `bold` eine Nebeneinanderstellung ist und vor jeglichem `smaller` Schlüsselwort stehen muss.

### Fragezeichen (`?`)

Der _Fragezeichen Multiplikator_ gibt an, dass die Entität optional ist und **keinmal oder einmal** vorkommen kann.

    bold smaller?

Dieses Beispiel passt auf die folgenden Werte:

- `bold`
- `bold smaller`

Aber nicht:

- `bold smaller smaller`, da `smaller` höchstens einmal vorkommen darf.
- `smaller`, da `bold` eine Nebeneinanderstellung ist und vor jeglichem `smaller` Schlüsselwort stehen muss.

### Geschweifte Klammern (`{ }`)

Der _Geschweifte Klammern Multiplikator_ schließt zwei durch Komma getrennte Ganzzahlen A und B ein und gibt an, dass die Entität **mindestens A-mal vorkommen muss und höchstens B-mal vorkommen darf**.

    bold smaller{1,3}

Dieses Beispiel passt auf die folgenden Werte:

- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller`

Aber nicht:

- `bold`, da `smaller` mindestens einmal vorkommen muss.
- `bold smaller smaller smaller smaller`, da `smaller` höchstens dreimal vorkommen darf.
- `smaller`, da `bold` eine Nebeneinanderstellung ist und vor jeglichem `smaller` Schlüsselwort stehen muss.

### Rautensymbol (`#`)

Der _Rautensymbol Multiplizierer_ gibt an, dass die Entität **einmal oder mehrmals** wiederholt werden kann (wie beim _Plus Multiplikator_), jedoch jedes Vorkommen durch **ein Komma** ('`,`') **getrennt** wird.

    bold smaller#

Dieses Beispiel passt auf die folgenden Werte:

- `bold smaller`
- `bold smaller, smaller`
- `bold smaller, smaller, smaller` and so on.

Aber nicht:

- `bold`, da `smaller` mindestens einmal vorkommen muss.
- `bold smaller smaller smaller`, da verschiedene Vorkommen von `smaller` durch Komma getrennt werden müssen.
- `smaller`, da `bold` eine Nebeneinanderstellung ist und vor jeglichem `smaller` Schlüsselwort stehen muss.

## Übersicht

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Zeichen</th>
      <th scope="col">Name</th>
      <th scope="col">Beschreibung</th>
      <th scope="col">Beispiel</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4">Kombinatoren</th>
    </tr>
    <tr>
      <td></td>
      <td>Nebeneinanderstellung</td>
      <td>
        Komponenten sind zwingend und müssen in der angegebenen Reihenfolge
        vorkommen
      </td>
      <td><code>solid &#x3C;length></code></td>
    </tr>
    <tr>
      <td><code>&#x26;&#x26;</code></td>
      <td>Doppeltes Und-Zeichen</td>
      <td>
        Komponenten sind zwingend, aber können in beliebiger Reihenfolge
        vorkommen
      </td>
      <td><code>&#x3C;length> &#x26;&#x26; &#x3C;string></code></td>
    </tr>
    <tr>
      <td><code>||</code></td>
      <td>Doppelter Balken</td>
      <td>
        Mindestens eine der Komponenten muss angegeben werden und sie können in
        beliebiger Reihenfolge vorkommen
      </td>
      <td>
        <code>&#x3C;'border-image-outset'> || &#x3C;'border-image-slice'></code>
      </td>
    </tr>
    <tr>
      <td><code>|</code></td>
      <td>Einfacher Balken</td>
      <td>Genau eine der Komponenten muss angegeben werden</td>
      <td><code>smaller | small | normal | big | bigger</code></td>
    </tr>
    <tr>
      <td><code>[ ]</code></td>
      <td>Eckige Klammern</td>
      <td>Gruppierung von Komponenten, um Rangordnungsregeln zu umgehen</td>
      <td><code>bold [ thin &#x26;&#x26; &#x3C;length> ]</code></td>
    </tr>
    <tr>
      <th colspan="4">Multiplizierer</th>
    </tr>
    <tr>
      <td></td>
      <td>Kein Multiplizierer</td>
      <td>Genau einmal</td>
      <td><code>solid</code></td>
    </tr>
    <tr>
      <td><code>*</code></td>
      <td>Asterisk</td>
      <td>0 oder mehrmals</td>
      <td><code>bold smaller*</code></td>
    </tr>
    <tr>
      <td><code>+</code></td>
      <td>Pluszeichen</td>
      <td>1 oder mehrmals</td>
      <td><code>bold smaller+</code></td>
    </tr>
    <tr>
      <td><code>?</code></td>
      <td>Fragezeichen</td>
      <td>0 oder 1-mal (that is <em>optional)</em></td>
      <td><code>bold smaller?</code></td>
    </tr>
    <tr>
      <td><code>{A,B}</code></td>
      <td>Geschweifte Klammern</td>
      <td>Mindestens <code>A</code>-mal, höchstens <code>B</code>-mal</td>
      <td><code>bold smaller{1,3}</code></td>
    </tr>
    <tr>
      <td><code>#</code></td>
      <td>Rautensymbol</td>
      <td>
        1 oder mehrmals, aber jedes Vorkommen getrennt durch Komma
        ('<code>,</code>')
      </td>
      <td><code>bold smaller#</code></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

| Spezifikation                                                                                                | Status                               | Kommentar                                        |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------ | ------------------------------------------------ |
| {{ SpecName('CSS3 Values', '#value-defs', 'Value definition syntax') }}             | {{ Spec2('CSS3 Values') }} | Fügt den Rautensymbol Multiplizierer hinzu.      |
| {{ SpecName('CSS2.1', 'about.html#value-defs', 'Value definition syntax') }}         | {{ Spec2('CSS2.1') }}         | Fügt den doppelten Und-Zeichen Kombinator hinzu. |
| {{SpecName('CSS1', '#notation-for-property-values', 'Value definition syntax') }} | {{ Spec2('CSS1') }}             | Ursprüngliche Definition                         |

## Siehe auch

- CSS Schlüsselkonzepte:
  [CSS Syntax](/de/docs/Web/CSS/Syntax "Syntax"),
  [Spezifität](/de/docs/Web/CSS/Spezifität "Spezifität") und
  [Vererbung](/de/docs/Web/CSS/Vererbung "Vererbung"),
  das [Boxmodell](/de/docs/Web/CSS/Boxmodell "Boxmodell"),
  [Layoutmodi](/de/docs/Web/CSS/Layoutmodi "CSS Layoutmodi") und
  [visuelle Formatierungsmodelle](/de/docs/Web/Guide/CSS/Visuelles_Formatierungsmodell "Visuelles Formatierungsmodell")
  und [Abstandzusammenfallen](/de/docs/Web/CSS/Boxmodell/Abstandzusammenfallen_meistern "Abstandzusammenfallen"),
  or the [initiale](/de/docs/Web/CSS/Initialwert "Initialwert"),
  [berechnete](/de/docs/Web/CSS/berechneter_Wert "berechneter Wert"),
  [verwendete](/de/docs/Web/CSS/verwendeter_Wert "verwendeter Wert")
  and [tatsächliche](/de/docs/Web/CSS/tatsächlicher_Wert "tatsächlicher Wert") Werte.
  Definitions of [Wertsyntax](/de/docs/Web/CSS/Wertdefinitionssyntax "Wertdefinitionssyntax"),
  [Kurzschreibweiseeigenschaften](/de/docs/Web/CSS/Kurzschreibweiseeigenschaften "Kurzschreibweiseeigenschaften")
  and [ersetzte Elemente](/de/docs/Web/CSS/ersetztes_Element "Ersetztes Element").
