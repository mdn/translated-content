---
title: RegExp
slug: Web/JavaScript/Reference/Global_Objects/RegExp
tags:
  - JavaScript
  - Klasse
  - Referenz
  - RegExp
  - Reguläre Ausdrücke
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp
---
{{JSRef}}

Der `RegExp constructor` erstellt ein Objekt mit regulären Werten, um diese dann als Muster an einem Text anzuwenden.

Für eine Einführung über reguläre Ausdrücke, lies das [Kapitel Regular Expressions im JavaScript Guide](/de/docs/JavaScript/Guide/Regular_Expressions) (englisch).

## Syntax

    /muster/flags

    RegExp(muster [, flags])

### Parameter

- `muster`
  - : Text des regulären Ausdrucks.
- `flags`
  - : Optional, flags kann eine Zeichenkette mit einer beliebige Kombination folgender Werte sein:_ `g`
    _ : globale Suche (nach einem Treffer fortsetzen)
    - `i`
      - : Groß-/Kleinschreibung ignorieren
    - `m`
      - : multiline; behandelt den Suchkontext als Mehrfachzeilen, d.h. Anfang- und Endeanker (^ und $) entsprechen dem Anfang bzw. Ende _jeder einzelnen_ Zeile (begrenzt durch \n oder \r), nicht nur dem Anfang und Ende der gesamten zu durchsuchenden Zeichenkette.
    - `y` {{non-standard_inline}}
      - : sticky; matches only from the index indicated by the `lastIndex` property of this regular expression in the target string (and does not attempt to match from any later indexes). This allows the match-only-at-start capabilities of the character "^" to effectively be used at any location in a string by changing the value of the `lastIndex` property.

## Beschreibung

Es bestehen zwei Möglichkeiten, ein RegExp-Objekt zu erzeugen: Eine literale Notation und ein Konstruktor. In der literaren Version werden im Gegensatz zu der Konstruktorversion keine Anführungszeichen verwendet, um Zeichenketten zu kennzeichnen. Dementsprechend erzeugen beide der folgenden Zeilen den gleichen regulären Ausdruck:

```js
/ab+c/i;
new RegExp("ab+c", "i");
```

Die literale Notation stellt eine Kompilierung des regulären Ausdrucks während der Auswertung des Ausdrucks bereit. Nutzen Sie die literale Notation, wenn der reguläre Ausdruck unverändert bleiben wird. Wenn Sie zum Beispiel die literale Notation für die Erzeugung eines regulären Ausdruck verwenden, um ihn in einer Schleife zu anzuwenden, wird der reguläre Ausdruck nicht in jedem Schleifendurchlauf rekompiliert.

Der Konstruktor des RegExp-Objekts, z.B. `new RegExp("ab+c")`, stellt eine Laufzeitkompilierung des regulären Ausdrucks bereit. Nutzen Sie die Konstruktor-Funktion, wenn sich das reguläre Suchmuster ändern wird oder Sie das Muster nicht kennen und es aus einer anderen Quelle wie z.B. einer Benutzereingabe beziehen.

Bei Verwendung der Konstruktor-Funktion sind die normalen Zeichenfolgenmaskierungsregeln (Voranstellen eines Rückwärtsschrägstrichs (\\) vor Sonderzeichen innerhalb von Zeichenketten) einzuhalten. Zum Beispiel sind folgende Zeilen äquivalent:

```js
var re = /\w+/;
var re = new RegExp("\\w+");
```

## Bedeutung spezieller Zeichen in regulären Ausdrücken

- [Zeichenklassen](#Zeichenklassen)
- [Zeichenauswahl](#Zeichenauswahl)
- [Bereichsgrenzen](#Bereichsgrenzen)
- [Gruppierung und Rückwärtsreferenzen](#Gruppierung-und-Rueckwaertsreferenz)
- [Quantoren](#Quantoren)

<table class="fullwidth-table">
  <tbody>
    <tr id="character-classes">
      <th colspan="2"><a name="Zeichenklassen">Zeichenklassen</a></th>
    </tr>
    <tr>
      <th>Zeichen</th>
      <th>Bedeutung</th>
    </tr>
    <tr>
      <td><code>.</code></td>
      <td>
        <p>
          (Punkt, Satzendezeichen) stimmt mit jedem Einzelzeichen
          <em>außer</em> den Zeilenvorschub- und Wagenrücklaufzeichen (<code
            >\n</code
          >
          <code>\r</code> <code>\u2028</code> oder <code>\u2029</code>) überein.
        </p>
        <p>
          Zu beachten ist, dass das <code>m</code> <em>multiline flag</em> nicht
          das Punktverhalten verändert. Um ein Musterentsprechung über mehrere
          Zeilen hinweg zu erreichen, kann die leere negative Zeichenauswahl
          <code>[^]</code> verwendet werden, sie stimmt mit jedem Zeichen
          einschließlich Zeilenumbrüchen überein.
        </p>
        <p>
          <code>/.y/</code> passt z.B. auf "my" und "ay", nicht aber auf "yes"
          in "yes make my day".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\d</code></td>
      <td>
        <p>
          Stimmt mit einer arabischen Ziffer überein. Äquivalent zu
          <code>[0-9]</code>.
        </p>
        <p>
          <code>/\d/</code> or <code>/[0-9]/</code> passt z.B. auf '2' in "B2
          ist die Zimmernummer."
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\D</code></td>
      <td>
        <p>
          Stimmt mit jedem Zeichen überein, das keine arabische Ziffer ist.
          Äquivalent zu <code>[^0-9]</code>.
        </p>
        <p>
          <code>/\D/</code> or <code>/[^0-9]/</code> passt z.B. auf 'B' in "B2
          ist die Zimmernummer."
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\w</code></td>
      <td>
        <p>
          Stimmt mit einem alphanumerischen Zeichen (Wortzeichen) einschließlich
          dem Unterstrich überein. Äquivalent zu <code>[A-Za-z0-9_]</code>.
        </p>
        <p>
          <code>/\w/</code> passt zum Beispiel auf 'A' in "Apfel", '5' in
          "€5,28," und '3' in "3D."
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\W</code></td>
      <td>
        <p>
          Stimmt mit jedem Zeichen überein, das kein alphanumerisches Zeichen
          (Wortzeichen) ist. Äquivalent zu <code>[^A-Za-z0-9_]</code>.
        </p>
        <p>
          <code>/\W/</code> or <code>/[^A-Za-z0-9_]/</code> passt z.B. auf '%'
          in "50%."
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\s</code></td>
      <td>
        <p>
          Stimmt mit einem einzelnen Leerraumzeichen überein (Leerzeichen,
          Tabulator, Seitenvorschub, Zeilenvorschub und weitere
          Unicode-Zeichen). Äquivalent zu
          <code
            >[ \f\n\r\t\v​\u00a0\u1680​\u180e\u2000​\u2001\u2002​\u2003\u2004​
            \u2005\u2006​\u2007\u2008​\u2009\u200a​\u2028\u2029​​\u202f\u205f​
            \u3000]</code
          >.
        </p>
        <p><code>/\s\w*/</code> passt z.B. auf ' bar' in "foo bar."</p>
      </td>
    </tr>
    <tr>
      <td><code>\S</code></td>
      <td>
        <p>
          Stimmt mit einem einzelnen Zeichen überein, das kein Leerraumzeichen
          ist. (Nicht-Leerraumzeichen).<br />Äquivalent zu
          <code>[^\s]</code> und zu
          <code
            >[^ \f\n\r\t\v​\u00a0\u1680​\u180e\u2000​\u2001\u2002​\u2003\u2004​
            \u2005\u2006​\u2007\u2008​\u2009\u200a​\u2028\u2029​​\u202f\u205f​
            \u3000]</code
          >.
        </p>
        <p><code>/\S\w*/</code> passt z.B. auf 'foo' in "foo bar."</p>
      </td>
    </tr>
    <tr>
      <td><code>\t</code></td>
      <td>Stimmt mit einem Tabulatorzeichen überein.</td>
    </tr>
    <tr>
      <td><code>\r</code></td>
      <td>Stimmt mit einem Wagenrücklaufzeichen überein.</td>
    </tr>
    <tr>
      <td><code>\n</code></td>
      <td>Stimmt mit einem Zeilenvorschub überein.</td>
    </tr>
    <tr>
      <td><code>\v</code></td>
      <td>Stimmt mit einem vertikalen Tabulatorzeichen überein.</td>
    </tr>
    <tr>
      <td><code>\f</code></td>
      <td>Stimmt mit einem Seitenvorschub überein.</td>
    </tr>
    <tr>
      <td><code>[\b]</code></td>
      <td>
        <p>
          Stimmt mit einem Rücklöschzeichen (Backspace) überein. (Nicht zu
          verwechseln mit <code>\b</code>)
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\0</code></td>
      <td>
        Stimmt mit einem NUL-Zeichen überein. (Keine weiteren Ziffern dürfen
        folgen!)
      </td>
    </tr>
    <tr>
      <td>
        <code>\c<em>X</em></code>
      </td>
      <td>
        <p>
          Wobei <code><em>X</em></code> ein Buchstabe von A - Z ist. Stimmt mit
          einem Steuerzeichen überein.
        </p>
        <p>
          <code>/\cM/</code> passt z.B. auf Steuerung-M in einer Zeichenkette.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>\x<em>hh</em></code>
      </td>
      <td>
        <p>
          Stimmt mit einem Zeichen mit dem Code <code><em>hh</em></code> (zwei
          hexadezimale Ziffern) überein.
        </p>
        <p>/foo\x20bar/ passt z.B. auf 'o b' in "foo bar".</p>
      </td>
    </tr>
    <tr>
      <td>
        <code>\u<em>hhhh</em></code>
      </td>
      <td>
        Stimmt mit einem Zeichen mit dem Unicode
        <code><em>hhhh</em></code> (vier hexadezimale Ziffern) überein.
      </td>
    </tr>
    <tr>
      <td><code>\</code></td>
      <td>
        <p>
          Bei einem Zeichen, das normalerweise als Literal behandelt wird,
          signalisiert ein vorangestellter Rückschrägstrich, dass es als
          Spezialzeichen und nicht als Literal zu interpretieren ist.
        </p>
        <p>
          Z.B. passt <code>/b/</code> auf das Zeichen <code>'b'</code>. Durch
          Voranstellen des Rückschrägstriches vor das "b", also
          <code>/\b/</code>, bekommt das Zeichen eine besondere Bedeutung und
          passt auf eine Wordgrenze.
        </p>
        <p><em>oder</em></p>
        <p>
          Bei einem Zeichen, das normalerweise als Zeichen mit spezieller
          Bedeutung interpretiert wird, signalisiert ein vorangestellter
          Rückschrägstrich, dass es ohne besondere Bedeutung als Literal
          interpretiert werden soll.
        </p>
        <p>
          Zum Beispiel ist * Quantor-Spezialzeichen, das eine Übereinstimmung
          mit null oder mehreren Vorkommen des vorausgehenden Zeichens bedeutet;
          z.B. bedeutet <code>/a*/</code> eine Übereinstimmung von null oder
          mehr "a"s. Um dem "<code>*"</code> als Literal zu entsprechen, wird
          ein Rückschrägstrich vorangestellt; z.B. passt <code>/a\*/</code> auf
          'a*'.
        </p>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr id="character-sets">
      <th colspan="2">
        <p><a name="Zeichenauswahl">Zeichenauswahl</a></p>
      </th>
    </tr>
    <tr>
      <th>Zeichen</th>
      <th>Bedeutung</th>
    </tr>
    <tr>
      <td><code>[xyz]</code></td>
      <td>
        <p>
          Zeichenauswahl, stimmt mit einem Beliebigen der eingeschlossenen
          Zeichen überein. Mittels eines Bindestriches kann ein Bereich von
          Zeichen angegeben werden.
        </p>
        <p>
          <code>[abcd]</code> ist gleichbedeutend mit<code>[a-d]</code> und
          passt auf 'b' in "brisket" und 'c' in "chop".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>[^xyz]</code></td>
      <td>
        <p>
          Eine negative bzw. komplementäre Zeichenauswahl. Das bedeutet eine
          Übereinstimmung mit jedem Zeichen, das <em>nicht</em> in den eckigen
          Klammern eingeschlossen ist. Mittels eines Bindestriches kann ein
          Bereich von Zeichen angegeben werden.
        </p>
        <p>
          Zum Beispiel ist <code>[^abc]</code> gleichbedeutend mit<code>
            [^a-c]</code
          >. Beides passt auf 'o' in "bacon" und 'h' in "chop."
        </p>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr id="boundaries">
      <th colspan="2"><a name="Bereichsgrenzen">Bereichsgrenzen</a></th>
    </tr>
    <tr>
      <th>Zeichen</th>
      <th>Bedeutung</th>
    </tr>
    <tr>
      <td><code>^</code></td>
      <td>
        <p>
          Stimmt mit dem Anfang eines Subjekts und, wenn das
          <em>multiline flag</em> gesetzt ist, auch mit der Stelle unmittelbar
          nach einem Zeilenumbruchzeichen überein.
        </p>
        <p>
          <code>/^E/</code> passt z.B. nicht auf 'E' in "ein E" aber auf das
          erste 'E' in "Ein E."
        </p>
      </td>
    </tr>
    <tr>
      <td><code>$</code></td>
      <td>
        <p>
          Stimmt mit dem Ende eines Subjekts und, wenn das
          <em>multiline flag</em> gesetzt ist, auch mit der Stelle unmittelbar
          vor einem Zeilenumbruchzeichen überein.
        </p>
        <p>
          <code>/t$/</code> passt z.B. auf das 't' in "Brot", nicht aber in
          "Brote".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\b</code></td>
      <td>
        <p>
          Stimmt mit einer null-breiten Wortgrenze wie zwischen einem Buchstaben
          und einem Leerzeichen überein. (Nicht zu verwechseln mit der
          Zeichenklasse <code>[\b]</code>)
        </p>
        <p>
          <code>/\bno/</code> passt z.B. auf 'no' in "at noon";
          <code>/ly\b/</code> passt auf 'ly' in "possibly yesterday."
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\B</code></td>
      <td>
        <p>
          Stimmt mit einer null-breiten Nichtwortgrenze wie zwischen zwei
          Buchstaben oder zwischen zwei Leerzeichen überein.
        </p>
        <p>
          <code>/\Bon/</code> passt z.B. auf 'on' in "at noon" und
          <code>/ye\B/</code> passt auf 'ye' in "possibly yesterday."
        </p>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr id="grouping-back-references">
      <th colspan="2">
        <a name="Gruppierung-und-Rueckwaertsreferenz"
          >Gruppierung und Rückwärtsreferenz</a
        >
      </th>
    </tr>
    <tr>
      <th>Zeichen</th>
      <th>Bedeutung</th>
    </tr>
    <tr>
      <td><code>(<em>x</em>)</code></td>
      <td>
        <p>
          Stimmt mit <code><em>x</em></code> überein und speichert die
          Übereinstimmung. Dies wird auch <em>capturing parentheses</em> (engl.,
          aufzeichnende Klammern) genannt.
        </p>
        <p>
          <code>/(foo)/</code> passt z.B. auf 'foo' in "foo bar" und speichert
          die Übereinstimmung. Aufgezeichnete Teilzeichenketten können aus den
          Elementen <code>[1], ..., [n]</code> des Ergebnisfelds (Array) oder
          den Eigenschaften <code>$1, ..., $9</code> des vordefinierten
          <code>RegExp</code>-Objekts ausgelesen werden.
        </p>
        <p>
          Aufzeichnende Gruppierungen führen zu Performanzeinbußen. Wenn die
          übereinstimmenden Teilzeichenketten nicht wiederverwendet werden
          müssen, sind nicht aufzeichnende Klammern zu bevorzugen (siehe weiter
          unten).
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>\<em>n</em></code>
      </td>
      <td>
        <p>
          Wobei <code><em>n</em></code> eine positive Ganzzahl ist. Ein
          Rückbezug auf die zuletzt gefundene Teilzeichenkette, die der
          Übereinstimmung mit der n-ten runden Klammer im regulären Ausdruck
          entspricht (öffnende Klammern gezählt).
        </p>
        <p>
          <code>/apple(,)\sorange\1/</code> passt z.B. auf 'apple, orange,' in
          "apple, orange, cherry, peach." und zeichnet das Komma auf. Ein
          umfassenderes Beispiel folgt im Anschluss an diese Tabelle.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?:<em>x</em>)</code></td>
      <td>
        Stimmt mit <code><em>x</em></code> überein, speichert die
        Übereinstimmung aber nicht, auch
        <em>non-capturing parentheses</em> genannt. Auf die übereinstimmende
        Teilzeichenkette kann nicht mittels der Elemente
        <code>[1], ..., [n]</code> des Arrays oder der vordefinierten
        Eigenschaften <code>$1, ..., $9 </code>des <code>RegExp</code>-Objekts
        zugegriffen werden .
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr id="quantifiers">
      <th colspan="2"><a name="Quantoren">Quantoren</a></th>
    </tr>
    <tr>
      <th>Zeichen</th>
      <th>Bedeutung</th>
    </tr>
    <tr>
      <td><code>*</code></td>
      <td>
        <p>
          Stimmt mit dem null- oder mehrmaligen Vorkommen des voranstehenden
          Zeichen überein.
        </p>
        <p>
          <code>/bo*/</code> passt z.B. auf 'boooo' in "A ghost booooed" und 'b'
          in "A bird warbled", aber auf nichts in "A goat grunted".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>+</code></td>
      <td>
        <p>
          Stimmt mit dem ein- oder mehrmaligen Vorkommen des voranstehenden
          Zeichen überein. Äquivalent zu <code>{1,}</code>
        </p>
        <p>
          <code>/ca+/</code> passt z.B. auf 'ca' in "candy" und 'caaa' in
          "caaandy" aber auf nichts in "cindy".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>*?</code><br /><code>+?</code></td>
      <td>
        <p>
          Passt wie <code>*</code> und<code>+</code> weiter oben, aber der
          Ausdruck ist nicht gierig, d.h. er passt auf die kürzestmögliche
          Übereinstimmung.
        </p>
        <p>
          <code>/_.*?_/</code> passt z.B. auf "_foo_" in "_foo_ _bar_" aber
          nicht auf "_foo_ _bar_" wie der Ausdruck ohne dem
          <code>?</code> hinterm <code>*</code>.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>?</code></td>
      <td>
        <p>
          Stimmt mit dem null- oder einmaligen Vorkommen des voranstehenden
          Zeichens überein.
        </p>
        <p>
          <code>/e?le?/</code> passt z.B. auf das 'el' in "angel" und auf das
          'le' in "angle."
        </p>
        <p>
          If used immediately after any of the quantifiers <code>*</code>,
          <code>+</code>, <code>?</code>, or <code>{}</code>, makes the
          quantifier non-greedy (matching the minimum number of times), as
          opposed to the default, which is greedy (matching the maximum number
          of times).
        </p>
        <p>
          Das Fragezeichen wird auch in lookahead assertions verwendet, welche
          unter <code>(?=)</code>, <code>(?!)</code>, sowie <code>(?:)</code> in
          dieser Tabelle beschrieben sind.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>(?=<em>y</em>)</code>
      </td>
      <td>
        Passt nur auf <code><em>x</em></code
        >, wenn <code><em>y</em></code> darauf folgt. Zum Beispiel passt
        <code>/Jack(?=Sprat)/</code> nur auf 'Jack', wenn danach 'Sprat' folgt.
        <code>/Jack(?=Sprat|Frost)/</code> passt nur auf 'Jack', wenn 'Sprat'
        oder 'Frost' folgt. Allerdings ist weder 'Sprat' noch 'Frost' Teil der
        Übereinstimmungsresultate.
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>(?!<em>y</em>)</code>
      </td>
      <td>
        <p>
          Passt nur auf <code><em>x</em></code
          >, wenn darauf nicht <code><em>y</em></code> folgt.
          <code>/\d+(?!\.)/</code> z.B. stimmt nur mit einer Zahl überein,
          sofern kein Dezimalpunkt folgt.
        </p>
        <p>
          <code>/\d+(?!\.)/.exec("3.141")</code> passt auf 141, aber nicht auf
          3.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>|<em>y</em></code>
      </td>
      <td>
        <p>
          Passt entweder auf <code><em>x</em></code> oder <code><em>y</em></code
          >.
        </p>
        <p>
          <code>/green|red/</code> passt z.B. auf 'green' in "green apple" und
          auf 'red' in "red apple."
        </p>
      </td>
    </tr>
    <tr>
      <td><code>{<em>n</em>}</code></td>
      <td>
        <p>
          Wobei <code><em>n</em></code> eine positive Ganzzahl ist. Stimmt mit
          genau <code><em>n</em></code> Vorkommen des vorausgehenden Zeichens
          oder Teilausdrucks überein.
        </p>
        <p>
          <code>/a{2}/</code> passt z.B. auf beide 'a' in "caandy" und die
          ersten beiden 'a' in "caaandy", nicht aber auf das 'a' in "candy".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>{<em>n</em>,}</code></td>
      <td>
        <p>
          Wobei <code><em>n</em></code> eine positive Ganzzahl ist. Stimmt mit
          mindestens <code><em>n</em></code> Vorkommen des vorausgehenden
          Zeichens oder Teilausdrucks überein.
        </p>
        <p>
          <code>/a{2,}/</code> passt z.B. auf alle 'a' in "caandy" und in
          "caaaaaaandy.", nicht aber auf das 'a' in "candy".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>{<em>n</em>,<em>m</em>}</code></td>
      <td>
        <p>
          Wobei <code><em>n</em></code> und <code><em>m</em></code> positive
          Ganzzahlen sind. Stimmt mit mindestens <code><em>n</em></code> und
          höchstens <code><em>m</em></code> Vorkommen des vorausgehenden
          Zeichens oder Teilausdrucks überein.
        </p>
        <p>
          <code>/a{1,3}/</code> passt z.B. auf nichts in "cndy", das 'a' in
          "candy," die beiden 'a' in "caandy," und die ersten drei 'a' in
          "caaaaaaandy". Es ist zu beachten, dass bei der Übereinstimmung in
          "caaaaaaandy" der Treffer "aaa" ist, obwohl in der
          Originalzeichenkette mehr 'a' vorhanden wären.
        </p>
      </td>
    </tr>
  </tbody>
</table>

### Fußnoten

1.  Equivalent to:

    `[\t\n\v\f\r \u00a0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000]`

2.  Equivalent to:

    `[^\t\n\v\f\r \u00a0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000]`

### Eigenschaften

- [prototype](/de/docs/JavaScript/Reference/Global_Objects/RegExp/prototype "JavaScript/Reference/Global_Objects/RegExp/prototype")
  - : Erlaubt das Hinzufügen von Eigenschaften zu allen Objekten

{{jsOverrides("Function", "Properties", "prototype")}}

### Methoden

Das globale `RegExp` Objekt hat keine eigenen Methoden. Es erbt allerdings manche Methoden durch die Prototypenkette.{{jsOverrides("Function", "Methods", "prototype")}}

## `RegExp`-Instanzen

### Eigenschaften

{{page('en/JavaScript/Reference/Global_Objects/RegExp/prototype','Properties')}}

### Methoden

{{page('en/JavaScript/Reference/Global_Objects/RegExp/prototype','Methods')}}

## Beispiele

### Beispiel: Anwendung regulären Ausdrucks zur Datenformatänderung

Das folgende Script nutzt die [`replace`](/en-US/docs/JavaScript/Reference/Global_Objects/String/replace "JavaScript/Reference/Global_Objects/String/replace") Methode und nutzt die vererbte [String](/de/docs/JavaScript/Reference/Global_Objects/String "JavaScript/Reference/Global_Objects/String") Instanz `(re)` um als Rückgabewert eine Übereinstimmung des Namens `(str) `in dem Format _erster, letzter_ und im Format _letzter_, _erster_ zu finden. In dem zu ersetzenden Text nutzt das Script $1 und $2 um das Ergebnis der übereinstimmenden Treffer in der Klammer als Muster des regulären Ausdrucks.

```js
var re = /(\w+)\s(\w+)/;
var str = "John Smith";
var newstr = str.replace(re, "$2, $1");
print(newstr);
```

Das ergibt: "Smith, John".

### Beispiel: Anwendung eines regulären Ausdrucks auf mehrzeilige Texte

```js
var s = "Please yes\nmake my day!";
s.match(/yes.*day/);
// Returns null
s.match(/yes[^]*day/);
// Returns 'yes\nmake my day'
```

### Beispiel: Anwendung eines regulären Ausdrucks mit dem "sticky" flag

Dieses Beispiel zeigt, wie man die feste Kennzeichung (`sticky flag`) an reguläre Ausdrücke nutzt, um Übereinstimmungen von individuelle Treffer von mehrzeigen Eingaben zu erhalten.

```js
var text = "First line\nSecond line";
var regex = /(\S+) line\n?/y;

var match = regex.exec(text);
print(match[1]);  // prints "First"
print(regex.lastIndex); // prints 11

var match2 = regex.exec(text);
print(match2[1]); // prints "Second"
print(regex.lastIndex); // prints "22"

var match3 = regex.exec(text);
print(match3 === null); // prints "true"
```

One can test at run-time whether the sticky flag is supported, using `try { … } catch { … }`. For this, either an `eval(…)` expression or the `RegExp(regex-string, flags-string)` syntax must be used (since the `/regex/flags` notation is processed at compile-time, so throws an exception before the `catch` block is encountered). For example:

```js
var supports_sticky;
try { RegExp('','y'); supports_sticky = true; }
catch(e) { supports_sticky = false; }
alert(supports_sticky); // alerts "true"
```

### Beispiel: Regulärer Ausdruck und Unicode-Zeichen

Wie oben erwähnt treffen Übereinstimmugnen mit `\w` or `\W` nur ASCII basierende Zeichen; als Beispiel: 'a' bis 'z', 'A' bis 'Z', 0 bis 9 und '\_'. Um Übereinstimmungen für Zeichensätze anderer Sprachen wie Kyrillisch oder Hebräisch zu erzielen, nutze `\uhhhh`., während "hhhh" den Unicode-Wert des Zeichensatzes in Hexadezimal angibt. Dieses Beispiel demonstriert wie man Unicode-Zeichen aus einem Wort erhält:

```js
var text = "Образец text на русском языке";
var regex = /[\u0400-\u04FF]+/g;

var match = regex.exec(text);
print(match[0]);  // prints "Образец"
print(regex.lastIndex);  // prints "7"

var match2 = regex.exec(text);
print(match2[0]);  // prints "на" [did not print "text"]
print(regex.lastIndex);  // prints "15"

// and so on
```

Hier ist eine externe Quelle um alle Unicode Blöcke für verschiedene Scripte zu erhalten: [Regexp-unicode-block](http://kourge.net/projects/regexp-unicode-block)

### Weitere nennenswerte Beispiele

##### Extrahieren eines Subdomain-Namens aus einer URL

```js
var url = "http://xxx.domain.com";
print(/[^.]+/.exec(url)[0].substr(7)); // prints "xxx"
```

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Regular Expressions](/de/docs/JavaScript/Guide/Regular_Expressions "JavaScript/Guide/Regular_Expressions") chapter in the [JavaScript Guide](/de/docs/JavaScript/Guide "JavaScript/Guide")
