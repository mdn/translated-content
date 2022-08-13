---
title: Reguläre Ausdrücke
slug: Web/JavaScript/Guide/Regular_Expressions
tags:
  - JavaScript
  - ausdrücke
  - regex
  - reguläre
translation_of: Web/JavaScript/Guide/Regular_Expressions
---
{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Textformatierung", "Web/JavaScript/Guide/Indexed_collections")}}

Reguläre Ausdrücke sind Muster, die eingesetzt werden, um Text auf bestimmte Zeichenkombinationen zu überprüfen. Auch reguläre Ausdrücke sind Objekte bei JavaScript. Die Muster werden mit den Methoden [`exec`](/de/docs/JavaScript/Reference/Global_Objects/RegExp/exec "exec") und [`test`](/de/docs/JavaScript/Reference/Global_Objects/RegExp/test "test") von [`RegExp`](/de/docs/JavaScript/Reference/Global_Objects/RegExp "RegExp") und den Methoden [`match`](/de/docs/JavaScript/Reference/Global_Objects/String/match "match"), [`replace`](/de/docs/JavaScript/Reference/Global_Objects/String/replace "en-US/docs/JavaScript/Reference/Global_Objects/String/replace"),[`search`](/de/docs/JavaScript/Reference/Global_Objects/String/search "search") und [`split`](/de/docs/JavaScript/Reference/Global_Objects/String/split "split") von [`String`](/de/docs/JavaScript/Reference/Global_Objects/String "String") verwendet. Dieses Kapitel beschreibt reguläre Ausdrücke in JavaScript.

## Erstellen von regulären Ausdrücken

Ein regulärer Ausdruck kann auf zwei verschiedene Arten erstellt werden.

Zum einen kann ein Literal verwendet werden:

```js
var re = /ab+c/;
```

Hierbei findet die Kompilierung des regulären Ausdrucks während der Auswertung des Skripts statt. Wenn der reguläre Ausdruck konstant bleibt, ist diese Vorgehensweise aufgrund der schnelleren Ausführungsgeschwindigkeit empfehlenswert.

Zum anderen kann wie folgt die Konstruktorfunktion des Objekts [`RegExp`](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/RegExp "en-US/docs/JavaScript/Reference/Global Objects/RegExp") zum Einsatz kommen:

```js
var re = new RegExp("ab+c");
```

Bei der Benutzung der Konstruktorfunktion wird der reguläre Ausdruck während der Laufzeit kompiliert. Sie sollte verwendet werden, wenn man weiß, dass sich das Muster während der Laufzeit ändert oder man das Muster noch nicht kennt und von einer anderen Quelle, wie z. B. der Benutzereingabe, bezieht.

## Schreiben von Mustern für reguläre Ausdrücke

Ein Muster eines regulären Ausdrucks wird aus einfachen Zeichen, wie z. B. `/abc/` oder einer Kombination von einfachen und speziellen Zeichen, wie z. B. `/ab*c/` oder `/Kapitel (\d+)\.\d*/` erstellt. Das letzte Beispiel enthält Klammern, die zur Speicherung verwendet werden. Die Übereinstimmung im Text, welche auf das eingeklammerte Muster passt, wird hierbei für die spätere Verwendung hinterlegt, wie unter [Benutzung von geklammerten Mustern](/de/docs/JavaScript/Guide/Regular_Expressions#Benutzung_von_geklammerten_Mustern) beschrieben.

### Verwendung von einfachen Mustern

Einfache Muster werden aus Zeichen konstruiert, für die man eine direkte Übereinstimmung finden möchte. Zum Beispiel passt das Muster `/abc/` nur dann für eine Zeichenkette, wenn exakt die Zeichen "abc" aufeinanderfolgend in dieser Reihenfolge vorkommen. Solch eine Übereinstimmung kommt z. B. in der Zeichenkette "Hallo, kennst du das abc?" und "Das müssen wir noch abchecken." vor. In beiden Fällen enthält die Zeichenkette die Zeichenfolge "abc". In der Zeichenkette "Stab" gibt es keine Übereinstimmung, weil die Zeichenfolge "abc" darin nicht vorkommt.

### Verwendung von speziellen Zeichen

Wenn bei der Suche nicht nur nach einer direkten Übereinstimmung, sondern z. B. nach einem oder mehreren aufeinanderfolgenden Vorkommen des Buchstabens "b" oder nach Leerräumen (sowohl Tabulator, Leerzeichen als auch Steuerzeichen) gesucht wird, kommen spezielle Zeichen zum Einsatz. Zum Beispiel stimmt das Muster `/ab*c/` mit allen Zeichenkombinationen überein, die ein "a", dann sofort nachfolgend 0 oder mehrere "b" (Das Sternchen bedeutet: 0 oder mehr Vorkommen des vorherigen Zeichens) und anschließend sofort ein "c" enthalten. Demnach wird in der Zeichenfolge "cbbabbbbcdebc" eine Übereinstimmung gefunden, weil das Muster auf die Zeichenfolge "abbbbc" passt.

Die folgende Tabelle zeigt eine komplette Liste der speziellen Zeichen, die in regulären Ausdrücken verwendet werden, mit einer Beschreibung zu deren Bedeutung.

<table class="fullwidth-table">
  <caption>
    Tabelle 4.1 Spezielle Zeichen in regulären Ausdrücken
  </caption>
  <thead>
    <tr>
      <th scope="col">Zeichen</th>
      <th scope="col">Bedeutung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a
          href="#special-backslash"
          id="special-backslash"
          name="special-backslash"
          ><code>\</code></a
        >
      </td>
      <td>
        Eine der folgenden Bedeutungen:
        <ul>
          <li>
            Für Zeichen, die normalerweise buchstäblich interpretiert werden,
            wird mit der Voranstellung des Rückstrichs dafür gesorgt, dass das
            Zeichen als speziell und nicht als normales Zeichen interpretiert
            wird. Zum Beispiel stimmt <code>/b/</code> mit dem Zeichen "b"
            überein. Stellt man dem "b" einen Rückstrich voran, also
            <code>/\b/</code>, wird das Zeichen als spezielles Zeichen - in
            diesem Fall als
            <a href="#special-word-boundary" title="#special-word-boundary"
              >Wortgrenze</a
            >
            - gedeutet.
          </li>
          <li>
            Bei Zeichen, die normalerweise sofort als spezielle Zeichen
            interpretiert werden, bewirkt der Rückstrich genau das Gegenteil,
            d.h. dem Zeichen wird die spezielle Bedeutung genommen und es wird
            als einfaches Zeichen interpretiert. Zum Beispiel ist das Zeichen
            <code>*</code> (Sternchen) ein spezielles Zeichen mit der Bedeutung:
            0 oder mehr Vorkommen des vorherigen Zeichens. Der Ausdruck
            <code>/a*/</code> steht demnach für 0 oder mehr a's. Um dem Zeichen
            <code>*</code> (Sternchen) die spezielle Bedeutung zu nehmen, stellt
            man ihm einen Rückstrich voran, z. B. stimmt <code>/a\*/</code> mit
            "a*" überein - der Stern wird nun als einfaches Zeichen
            interpretiert.
          </li>
          <li>
            Das Maskieren eines Zeichens durch die Voranstellung eines
            Rückstrichs wird auch als <em>escapen</em> bezeichnet. Außerdem
            sollte man sich merken, dass bei Verwendung der new
            RegExp("pattern")-Notation auch der Rückstrich selbst eine spezielle
            Bedeutung hat und maskiert werden muss, wenn er als normales Zeichen
            interpretiert werden soll.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#special-caret" id="special-caret" name="special-caret"
          ><code>^</code></a
        >
      </td>
      <td>
        <p>
          Das Zirkumflex-Zeichen steht für den Anfang der Eingabe. Wenn das Flag
          für mehrere Zeilen (multiline flag) gesetzt ist, wird auch eine
          Übereinstimmung direkt hinter dem Zeichen für einen Zeilenumbruch
          (<code>\n</code>) gefunden.
        </p>
        <p>
          Der Ausdruck <code>/^A/</code> passt zwar auf das "A" in "Apfel",
          nicht jedoch auf das "A" in "Ein Apfel", weil das "A" bei dieser
          Zeichenkette nicht am Anfang steht.
        </p>
        <p>
          Achtung: Wenn das Zeichen innerhalb von eckigen Klammern (einer
          Zeichenauswahl) steht, hat es eine andere Bedeutung (siehe
          <a
            href="#special-negated-character-set"
            title="#special-negated-character-set"
            ><code>[^xyz]</code></a
          >
          in dieser Tabelle).
        </p>
        <p>
          Zum Beispiel stimmt <code>/[^a-zA-Z\s]/</code> mit der "3" in "Ich
          habe 3 Schwestern" überein. Die eckigen Klammern kennzeichnen die
          Zeichenauswahl. Das Zirkumflex innerhalb dieser Klammern negiert die
          aufgezählten Zeichen: nicht a bis z, nicht A bis Z und keine Leerräume
          wie das Leerzeichen oder die Steuerzeichen; übrig bleibt allein die
          "3".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="https://developer.mozilla.org/de/docs/JavaScript/Guide/Regular_Expressions#special-dollar"
          id="special-dollar"
          name="special-dollar"
          ><code>$</code></a
        >
      </td>
      <td>
        <p>
          Das Dollarzeichen steht für das Ende der Eingabe. Wenn das Flag für
          mehrere Zeilen (multiline flag) gesetzt ist, wird auch eine
          Übereinstimmung direkt hinter dem Zeichen für einen Zeilenumbruch (\n)
          gefunden.
        </p>
        <p>
          Zum Beispiel wird mit <code>/t$/</code> bei "Butter" keine
          Übereinstimmung gefunden, jedoch bei "Brot", weil das "t" am Ende
          steht.
        </p>
      </td>
    </tr>
    <tr></tr>
    <tr>
      <td>
        <a href="#special-asterisk" name="special-asterisk"><code>*</code></a>
      </td>
      <td>
        <p>
          Das Sternchen steht für eine beliebige Anzahl des vorangestellten
          Zeichens, also 0-mal oder öfter. Das Zeichen muss also nicht unbedingt
          vorkommen, sondern darf auch einfach nicht vorhanden sein. Das
          Sternchen wird gerne in Kombination mit dem . (Punkt) als Platzhalter
          für "ein beliebiges Zeichen beliebig oft" verwendet.
        </p>
        <p>
          Der Ausdruck <code>/bu*/</code> passt auf "buuuuu" in "Ein Geist
          buuuuuht" als auch auf "b" in "Ein Blauwal blubbert", jedoch nicht auf
          "Eine Katze kratzt".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#special-plus" id="special-plus" name="special-plus"
          ><code>+</code></a
        >
      </td>
      <td>
        <p>
          Steht für das vorangestellte Zeichen einmal oder öfter und ist
          äquivalent zu <code>{1,}</code>. Das Zeichen muss für einen Treffer
          also mindestens einmal vorkommen.
        </p>
        <p>
          Zum Beispiel passt <code>/a+/</code> auf "a" in "Schokolade" und alle
          a's in "Schokolaaaade".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-questionmark"
          id="special-questionmark"
          name="special-questionmark"
          ><code>?</code></a
        >
      </td>
      <td>
        <p>
          Steht für das vorangestellte Zeichen 0 oder einmal und ist äquivalent
          zu <code>{0,1}</code>.
        </p>
        <p>
          Zum Beispiel passt <code>/e?le?/</code> sowohl auf "el" in "Engel",
          als auch auf "le" in "Kapelle" und auch "l" in "Oslo".
        </p>
        <p>
          Wenn es sofort hinter einen der Quantoren <code>*</code>,
          <code>+</code>, <code>?</code>, oder <code>{}</code> gestellt wird,
          deaktiviert es die standardmäßige "Gierigkeit" (eine möglichst hohe
          Anzahl von passende Zeichen einschließend) dieser Quantoren und macht
          sie "genügsam" (eine möglichst geringe Anzahl von passende Zeichen
          einschließend).
        </p>
        <p>
          Zum Beispiel passt der Ausdruck <code>/\d+/</code> auf die
          Zeichenkette "123abc" angewendet auf "123", weil der Quantor +
          (Pluszeichen) "gierig" ist. Der Ausdruck /\d+?/ steht hingegen nur für
          "1", weil der Quantor + (Pluszeichen) aufgrund der Beeinflussung durch
          das hintangestellte ? (Fragezeichen) "genügsam" ist.
        </p>
        <p>
          Das Fragezeichen wird auch bei sogenannten
          <em>lookahead assertions</em> (vorausschauenden Annahmen/Behauptungen)
          eingesetzt, die in dieser Tabelle unter
          <a href="#special-lookahead" title="#special-lookahead"
            ><code>x(?=y)</code></a
          >
          und
          <a
            href="#special-negated-look-ahead"
            title="#special-negated-look-ahead"
            ><code>x(?!y)</code></a
          >
          beschrieben sind.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#special-dot" id="special-dot" name="special-dot"
          ><code>.</code></a
        >
      </td>
      <td>
        <p>
          Der Punkt steht für ein einzelnes beliebiges Zeichen mit Ausnahme des
          Zeichens für den Zeilenumbruch.
        </p>
        <p>
          Zum Beispiel passt <code>/.n/</code> auf "in" und "än" in der
          Zeichenkette "nur ein Apfel hängt am Baum", jedoch nicht auf das "n"
          ganz am Anfang, weil vor dem "n" ein beliebiges Zeichen stehen muss.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-capturing-parentheses"
          id="special-capturing-parentheses"
          name="special-capturing-parentheses"
          ><code>(x)</code></a
        >
      </td>
      <td>
        <p>
          Steht für die Zeichen "x", also die eingeklammerten Zeichen. Außerdem
          werden die Zeichen gespeichert, die mit dem einklammerten Muster
          übereinstimmen, damit sie an anderer Stelle wieder eingesetzt werden
          können. Die Klammern werden auch
          <em>capturing parentheses</em> (aufnehmende Klammern) genannt.
        </p>
        <p>
          Zum Beispiel steht <code>/(foo)/</code> für "foo" in "foobar" und
          "foo" wird hinterlegt. Die Zeichen innerhalb der Klammern können durch
          Array-Elemente wieder eingesetzt werden. Dabei steht
          <code>[1]</code> für die Zeichen des ersten Klammerpaars,
          <code>[2]</code> für die Zeichen des zweiten Paars usw.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-non-capturing-parentheses"
          name="special-non-capturing-parentheses"
          ><code>(?:x)</code></a
        >
      </td>
      <td>
        Steht für die Zeichen "x", aber die Übereinstimmung wird nicht
        hinterlegt. Diese Klammern werden auch als
        <em>non-capturing parentheses</em> bezeichnet. Die übereinstimmenden
        Zeichen können nicht wieder eingesetzt werden und die Array-Elemente
        <code>[1]</code>, ..., <code>[n]</code> finden keine Anwendung.
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-lookahead"
          id="special-lookahead"
          name="special-lookahead"
          ><code>x(?=y)</code></a
        >
      </td>
      <td>
        <p>
          Steht für die Zeichen "x", jedoch nur wenn "x" vor "y" steht. Dies
          wird als<em> lookahead</em> (vorausschauen) bezeichnet.
        </p>
        <p>
          Zum Beispiel passt <code>/Mustermann(?=Max)/</code> auf "Mustermann"
          nur dann, wenn "Max" dahinter steht. Der Ausdruck
          <code>/Mustermann(?=Max|Erika)/</code> passt auf "Mustermann" nur
          dann, wenn dahinter "Max" oder "Erika" steht. Doch weder "Max" noch
          "Erika" ist Teil des übereinstimmenden Ergebnisses.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-negated-look-ahead"
          id="special-negated-look-ahead"
          name="special-negated-look-ahead"
          ><code>x(?!y)</code></a
        >
      </td>
      <td>
        <p>
          Passt nur dann auf die Zeichen "x", wenn "x" nicht vor den Zeichen "y"
          steht. Dies wird auch als <em>negated lookahead</em> (negierte
          vorausschauende Annahme) bezeichnet.
        </p>
        <p>
          Zum Beispiel passt <code>/\d+(?!\.)/</code> nur dann auf eine Zahl,
          wenn diese nicht vor einem Dezimalpunkt steht. Der reguläre Ausdruck
          <code>/\d+(?!\.)/.exec("3.141")</code> passt auf "141", jedoch nicht
          auf "3.141".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#special-or" id="special-or" name="special-or"
          ><code>x|y</code></a
        >
      </td>
      <td>
        <p>Passt auf entweder die Zeichen "x" oder die Zeichen "y".</p>
        <p>
          Zum Beispiel passt der Ausdruck <code>/grüner|roter/</code> auf
          "grüner" in "grüner Apfel" und "roter" in "roter Apfel".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-quantifier"
          id="special-quantifier"
          name="special-quantifier"
          ><code>{n}</code></a
        >
      </td>
      <td>
        <p>
          Das <code>n</code> steht für eine positive ganze Zahl. Das Muster
          passt exakt auf die Anzahl <code>n</code> des vorangestellten
          Zeichens.
        </p>
        <p>
          Zum Beispiel passt <code>/a{2}/</code> nicht auf das "a" in
          "Schokolade", jedoch auf alle beide a's in "Schokolaade" und die
          ersten beiden a's in "Schokolaaade".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-quantifier-range"
          id="special-quantifier-range"
          name="special-quantifier-range"
          ><code>{n,m}</code></a
        >
      </td>
      <td>
        <p>
          Wobei <code>n</code> und <code>m</code> positive ganze Zahlen sind.
          Passt auf mindestes <code>n</code> und höchstens
          <code>m</code> Vorkommen des vorangestellten Zeichens. Wenn für
          <code>n</code> oder <code>m</code> eine 0 stehen soll, kann diese auch
          weggelassen werden.
        </p>
        <p>
          Zum Beispiel passt <code>/a{1,3}/</code> auf nichts in "cndy", jedoch
          auf das "a" in "candy", die beiden a's in "caandy," und die ersten
          drei a's in "caaaaaaandy". Merke: Wenn der Ausdruck auf "caaaaaaandy"
          angewendet wird, ist die Übereinstimmung "aaa", auch wenn in der
          Zeichenkette mehr a's enthalten sind.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-character-set"
          id="special-character-set"
          name="special-character-set"
          ><code>[xyz]</code></a
        >
      </td>
      <td>
        <p>
          Die eckigen Klammern kennzeichnen eine Zeichenauswahl. Der Ausdruck
          stimmt mit allen in den Klammern stehenden Zeichen überein. Mit Hilfe
          eines Bindestrichs kann ein Bereich (z. B. von a bis z) festgelegt
          werden. Spezielle Zeichen (wie der Punkt oder das Sternchen) haben
          keine spezielle Bedeutung innerhalb der eckigen Klammern. Sie müssen
          nicht "escaped" werden.
          <a
            href="/de/docs/JavaScript/Guide/Werte_Variablen_und_Literale#Unicode_Escape-Sequenzen"
            title="/de/docs/JavaScript/Guide/Werte_Variablen_und_Literale#Unicode_Escape-Sequenzen"
            >Escape-Sequenzen</a
          >
          funktionieren ebenfalls.
        </p>
        <p>
          Zum Beispiel ist <code>[abcd]</code> dasselbe wie
          <span style="font-family: monospace">[</span><code>a-d]</code>. Beides
          passt auf das "b" in "biegen" und das "d" in "denken". Die
          Ausdrücke<code> /[a-z.]+/</code> und <code>/[\w.]+/</code> passen
          beide auf "test.e.n". Der Punkt ist in diesem Fall kein spezielles
          Zeichen, weil er innerhalb der eckigen Klammern (Zeichenauswahl)
          steht.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-negated-character-set"
          id="special-negated-character-set"
          name="special-negated-character-set"
          ><code>[^xyz]</code></a
        >
      </td>
      <td>
        <p>
          Eine negierte oder komplementäre Zeichenauswahl. Das
          Zirkumflex-Zeichen an erster Stelle innerhalb der Klammern negiert die
          Zeichenauswahl. Der Ausdruck passt also auf alle Zeichen, die nicht in
          den Klammern stehen. Es kann mit Hilfe eines Bindestrichs auch ein
          Bereich von Zeichen (z. B. von a bis z) festgelegt werden. Alle
          Zeichen, die bei einer normalen Zeichenauswahl funktionieren,
          funktionieren hier ebenso.
        </p>
        <p>
          Zum Beispiel ist <code>[^abc]</code> dasselbe wie <code>[^a-c]</code>.
          Beide Ausdrücke passen auf das "r" in "brechen" und das "m" in
          "campen".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-backspace"
          id="special-backspace"
          name="special-backspace"
          ><code>[\b]</code></a
        >
      </td>
      <td>
        Passt auf das Steuerzeichen für die Backspace-Tastet (U+0008), welche
        den Cursor um eine Position nach links verschiebt und das dort stehende
        Zeichen entfernt. (Sollte nicht mit <code>\b</code> verwechselt werden.)
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-word-boundary"
          id="special-word-boundary"
          name="special-word-boundary"
          ><code>\b</code></a
        >
      </td>
      <td>
        <p>
          Steht für eine Wortgrenze. Wortgrenzen sind an den Stellen, wo kein
          anderes Wortzeichen vor oder hinter einem Wortzeichen steht. Eine
          Wortgrenze wird nicht in die Übereinstimmung aufgenommen. Mit anderen
          Worten ist die Länge einer Wortgrenze gleich 0 - die Wortgrenze ist
          der Zwischenraum zwischen einem Wortzeichen und einem Zeichen, das
          kein Wortzeichen ist oder zwischen einem Wortzeichen und dem Anfang
          oder Ende der Eingabe. (Sollte nicht mit <code>[\b]</code> verwechselt
          werden.)
        </p>
        <p>
          Beispiele:<br /><code>/\bMon/</code> passt auf das "Mon" in "Mond"
          ;<br /><code>/ll\b/</code> passt nicht auf "ll" in "Falle", weil "ll"
          nicht vor einer Wortgrenze steht, sondern vor dem Zeichen "e", wobei
          es sich um ein Wortzeichen handelt.<br /><code>/ond\b/</code> passt
          auf das "ond" in "Mond", weil "ond" das Ende der Zeichenkette ist,
          also nicht vor einem Wortzeichen steht.<br /><code>Bei /\w\b\w/</code>
          wird niemals eine Übereinstimmung gefunden, weil eine Wortgrenze
          niemals gleichzeitig vor einem Wortzeichen und keinem Wortzeichen
          stehen kann.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-non-word-boundary"
          id="special-non-word-boundary"
          name="special-non-word-boundary"
          ><code>\B</code></a
        >
      </td>
      <td>
        <p>
          Steht für alle Zeichen, die keine Wortgrenze sind. Dies trifft auf
          Positionen zu, wo zwei nebeneinanderstehende Zeichen vom selben Typ
          sind: Entweder sind beide Wortzeichen oder keine Wortzeichen. Der
          Anfang und das Ende einer Zeichenkette werden nicht als Wortzeichen
          angesehen, gelten also als Wortgrenzen.
        </p>
        <p>
          For example, <code>/\B../</code> matches 'oo' in "noonday" (, and
          <code>/y\B./</code> matches 'ye' in "possibly yesterday."
        </p>
        <p>
          Zum Beispiel passt <code>/\B../</code> auf "at" in "Katze" und
          <code>/e\B./</code> auf "ei" in "schlafe ein".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#special-control" id="special-control" name="special-control"
          ><code>\c<em>X</em></code></a
        >
      </td>
      <td>
        <p>
          <em>X</em> ist ein Zeichenbereich von A bis Z. Passt auf ein
          Steuerzeichen in einer Zeichenkette.
        </p>
        <p>
          Zum Beispiel steht <code>/\cM/</code> für das Steuerzeichen control-M
          (U+000D) in einer Zeichenkette.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#special-digit" id="special-digit" name="special-digit"
          ><code>\d</code></a
        >
      </td>
      <td>
        <p>Steht für Ziffern und ist äquivalent zu <code>[0-9]</code>.</p>
        <p>
          Zum Beispiel passt <code>/\d/</code> oder <code>/[0-9]/</code> auf "2"
          in "B2 ist die Zimmernummer."
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-non-digit"
          id="special-non-digit"
          name="special-non-digit"
          ><code>\D</code></a
        >
      </td>
      <td>
        <p>
          Steht für alle nicht-Ziffern und ist äquivalent zu
          <code>[^0-9]</code>.
        </p>
        <p>
          Zum Beispiel passt <code>/\D/</code> oder <code>/[^0-9]/</code> auf
          "B" in "B2 ist die Zimmernummer."
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-form-feed"
          id="special-form-feed"
          name="special-form-feed"
          ><code>\f</code></a
        >
      </td>
      <td>
        Steht für einen Seitenvorschub (<strong>engl. <em>f</em></strong
        ><em>orm feed</em> (U+000C)).
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-line-feed"
          id="special-line-feed"
          name="special-line-feed"
          ><code>\n</code></a
        >
      </td>
      <td>
        Steht für einen Zeilenbruch (engl. <em>line feed</em> bzw.
        <em><strong>n</strong>ew line</em> U+000A).
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-carriage-return"
          id="special-carriage-return"
          name="special-carriage-return"
          ><code>\r</code></a
        >
      </td>
      <td>
        Steht für einen Wagenrücklauf (engl.
        <em>carriage <strong>r</strong>eturn</em> (U+000D).
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-white-space"
          id="special-white-space"
          name="special-white-space"
          ><code>\s</code></a
        >
      </td>
      <td>
        <p>
          Steht für ein einzelnes Leerraum-Zeichen, einschließlich Leertaste,
          Tabulator, Seitenvorschub und Zeilenumbruch und ist äquivalent zu
          <code
            >[ \f\n\r\t\v​\u00A0\u1680​\u180e\u2000​\u2001\u2002​\u2003\u2004​
            \u2005\u2006​\u2007\u2008​\u2009\u200a​\u2028\u2029​\u2028\u2029​
            \u202f\u205f​\u3000]</code
          >.
        </p>
        <p>Zum Beispiel passt <code>/\s\w*/</code> auf "bar" in "foo bar".</p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-non-white-space"
          id="special-non-white-space"
          name="special-non-white-space"
          ><code>\S</code></a
        >
      </td>
      <td>
        <p>
          Steht für ein einzelnes Zeichen, das kein Leerraum-Zeichen ist.
          Äquivalent zu
          <code
            >[^ \f\n\r\t\v​\u00A0\u1680​\u180e\u2000​\u2001\u2002​\u2003\u2004​
            \u2005\u2006​\u2007\u2008​\u2009\u200a​\u2028\u2029​\u2028\u2029​
            \u202f\u205f​\u3000]</code
          >.
        </p>
        <p>Zum Beispiel passt <code>/\S\w*/</code> auf "foo" in "foo bar".</p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#special-tab" id="special-tab" name="special-tab"
          ><code>\t</code></a
        >
      </td>
      <td>
        Steht für einen Tabulator (engl.
        <em>horizontal <strong>t</strong>ab</em> U+0009).
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-vertical-tab"
          id="special-vertical-tab"
          name="special-vertical-tab"
          ><code>\v</code></a
        >
      </td>
      <td>
        Steht für einen vertikalen Tabulator (engl.
        <em><strong>v</strong>ertical tabulator</em> (U+000B).
      </td>
    </tr>
    <tr>
      <td>
        <a href="#special-word" id="special-word" name="special-word"
          ><code>\w</code></a
        >
      </td>
      <td>
        <p>
          Steht für ein alphanumerisches Zeichen (Wortzeichen), einschließlich
          Unterstrich. Äquivalent zu <code>[A-Za-z0-9_]</code>.
        </p>
        <p>
          Zum Beispiel passt <code>/\w/</code> auf "a" in "apple" als auch auf
          "5" in "$5.28" und "3" in "3D".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-non-word"
          id="special-non-word"
          name="special-non-word"
          ><code>\W</code></a
        >
      </td>
      <td>
        <p>
          Steht für ein nicht-alphanumerisches Zeichen (nicht-Wortzeichen).
          Äquivalent zu <code>[^A-Za-z0-9_]</code>.
        </p>
        <p>
          Zum Beispiel passt <code>/\W/</code> oder
          <code>/[^A-Za-z0-9_]/</code> auf "%" in "50%".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-backreference"
          id="special-backreference"
          name="special-backreference"
          ><code>\<em>n</em></code></a
        >
      </td>
      <td>
        <p>
          Stellt einen Rückgriff auf die passenden Zeichen eines eingeklammerten
          Teilausdrucks dar, wobei <em>n</em> eine positive ganze Zahl ist. Die
          Zahl steht hierbei für das jeweilige Teilmuster innerhalb eines
          Klammerpaars an entsprechender Stelle (öffnende Klammern werden
          gezählt).
        </p>
        <p>
          Zum Beispiel passt <code>/Apfel(,)\sOrange\1/</code> auf "Apfel,
          Orange," in "Apfel, Orange, Kirsche, Pfirsich".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#special-null" id="special-null" name="special-null"
          ><code>\0</code></a
        >
      </td>
      <td>
        Steht für ein NULL-Zeichen (U+0000). Es sollte kein Ziffer dahinter
        stehen, weil <code>\0&#x3C;Ziffer></code> eine Escape-Sequenz für oktale
        Zahlen ist.
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-hex-escape"
          id="special-hex-escape"
          name="special-hex-escape"
          ><code>\x<em>hh</em></code></a
        >
      </td>
      <td>
        Steht für das Zeichen mit dem Code <em>hh</em> (zweistellige
        hexadezimale Zahl).
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-unicode-escape"
          id="special-unicode-escape"
          name="special-unicode-escape"
          ><code>\u<em>hhhh</em></code></a
        >
      </td>
      <td>
        Steht für das Zeichen mit dem Code <em>hhhh</em> (vierstellige
        hexadezimale Zahl).
      </td>
    </tr>
  </tbody>
</table>

Das Escapen von Benutzereingaben in einem Stringliteral eines regulären Ausdrucks kann durch folgende Ersetzung getan werden:

    function escapeRegExp (string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& meint den komplett erkannten String
    }

### Benutzung von Klammern

Klammern werden verwendet, um den eingeklammerten Teil des regulären Ausdrucks zu speichern. Einmal gespeichert kann dieser Teil an anderer Stelle wieder eingesetzt werden, wie unter [Benutzung von geklammerten Mustern](/de/docs/JavaScript/Guide/Regular_Expressions#Benutzung_von_geklammerten_Mustern) beschrieben.

Zum Beispiel beinhaltet der Ausdruck `/Kapitel (\d+)\.\d*/` einige maskierte und spezielle Zeichen. Mit den Klammern wird bewirkt, dass die Zeichen, welche mit dem eingeklammerten Muster übereinstimmen, gespeichert werden. Der Ausdruck stimmt genau mit der Zeichenkette "Kapitel " gefolgt von einer oder mehreren Ziffern (`\d` steht für eine Ziffer und das `+` (Pluszeichen) bedeutet 1 oder mehr Vorkommen), einem Punkt (der Punkt selbst ist standardmäßig ein spezielles Zeichen, weshalb er maskiert werden muss) und nochmal beliebig vielen Ziffern (\d steht für eine Ziffer und der Stern bedeutet 0 oder mehr Vorkommen) überein. Zusätzlich werden die Klammern eingesetzt, um die erste Ziffer zu speichern.

Eine Übereinstimmung wird z. B. in "Offenes Kapitel 4.3, Absatz 6" gefunden und dabei wird "4" gespeichert. Auf die Zeichenkette "Kapitel 3 und 4" passt der Ausdruck nicht, weil hinter der ersten Ziffer "3" kein Punkt steht.

Möchte man einen zusammenhängenden Teil einer Zeichenkette suchen, jedoch nicht speichern, setzt man `?:` an den Anfang innerhalb der Klammern. Zum Beispiel stimmt `(?:\d+)` mit einer oder mehr Ziffern überein, aber diese Ziffern werden nicht gespeichert.

### Arbeiten mit regulären Ausdrücken

Reguläre Ausdrücke werden mit den Methoden [`exec`](/de/docs/JavaScript/Reference/Global_Objects/RegExp/exec "exec") und [`test`](/de/docs/JavaScript/Reference/Global_Objects/RegExp/test "test") von [`RegExp`](/de/docs/JavaScript/Reference/Global_Objects/RegExp "RegExp") und den Methoden [`match`](/de/docs/JavaScript/Reference/Global_Objects/String/match "match"), [`replace`](/de/docs/JavaScript/Reference/Global_Objects/String/replace "en-US/docs/JavaScript/Reference/Global_Objects/String/replace"),[`search`](/de/docs/JavaScript/Reference/Global_Objects/String/search "search") und [`split`](/de/docs/JavaScript/Reference/Global_Objects/String/split "split") von [`String`](/de/docs/JavaScript/Reference/Global_Objects/String "String") verwendet. Diese Methoden sind in der [JavaScript Referenz](/de/docs/JavaScript/Reference "en-US/docs/JavaScript/Reference") beschrieben.

| Method                                               | Description                                                                                                                                                             |
| ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("RegExp.exec", "exec")}}         | Eine Methode von `RegExp,` die eine Suche nach einer Übereinstimmung in einer Zeichenkette durchführt. Sie gibt ein Array mit den Übereinstimmungen zurück.             |
| {{jsxref("RegExp.test", "test")}}         | Eine Methode von `RegExp`, die eine Zeichenkette auf eine Übereinstimmung überprüft. Sie gibt `true` oder `false` zurück.                                               |
| {{jsxref("String.match", "match")}}     | Eine Methode von `String`, die eine Suche nach einer Übereinstimmung in einer Zeichenkette durchführt. Sie gibt ein Array zurück oder `null` bei keinem Treffer.        |
| {{jsxref("String.search", "search")}}     | Eine Methode von `String`, die eine Zeichenkette auf eine Übereinstimmung überprüft. Sie gibt den Index der Übereinstimmung zurück oder -1 bei keinem Treffer.          |
| {{jsxref("String.replace", "replace")}} | Eine Methode von `String`, die eine Suche nach einer Übereinstimmung in einer Zeichenkette durchführt und die Übereinstimmungen durch eine andere Zeichenkette ersetzt. |
| {{jsxref("String.split", "split")}}     | Eine Methode von `String`, die anhand eines regulären Ausdrucks oder einer festen Zeichenkette eine Zeichenkette trennt und die Teile als Array zurückgibt.             |

Wenn man nur wissen möchte, ob ein regulärer Ausdruck auf eine Zeichenkette passt, sollten die Methoden `test` oder `search` zum Einsatz kommen. Möchte man mehr erfahren, sollte man auf die Methoden `exec` oder `match` zurückgreifen (langsamere Ausführungsgeschwindigkeit). Die Methoden `exec` und `match` geben ein Array zurück falls Übereinstimmungen gefunden werden und updaten die Eigenschaften des zugehörigen `RegExp`-Objekts und des vordefinierten `RegExp`-Objekts. Wenn keine Übereinstimmungen gefunden werden, geben die Methoden `null` (konvertiert: `false`) zurück.

Bei folgendem Beispiel kommt die Methode exec zum Einsatz, um eine Übereinstimmung in einer Zeichenkette zu finden.

```js
var myRe = /d(b+)d/g;
var myArray = myRe.exec("cdbbdbsbz");
```

Wenn man auf die Eingenschaften des Objekts für den regulären Ausdruck nicht zugreifen möchte, kann man `myArray` auch direkt wie folgt erzeugen:

```js
var myArray = /d(b+)d/g.exec("cdbbdbsbz");  // äquivalent zu "cdbbdbsbz".match(/d(b+)d/g);
```

Möchte man den regulären Ausdruck aus einem String erzeugen, besteht folgende Möglichkeit:

```js
var myRe = new RegExp("d(b+)d", "g");
var myArray = myRe.exec("cdbbdbsbz");
```

Bei diesen Skripten werden Übereinstimmungen gefunden. Es wird ein Array zurückgegeben und die Eigenschaften geupdatet, welche in der nachstehenden Tabelle aufgelistet sind.

<table class="fullwidth-table">
  <caption>
    Tabelle 4.3 Ergebnisse von regulären Ausdrücken
  </caption>
  <thead>
    <tr>
      <th scope="col">Objekt</th>
      <th scope="col">Eigenschaft oder Index</th>
      <th scope="col">Beschreibung</th>
      <th scope="col">Bei diesem Beispiel</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="4"><code>myArray</code></td>
      <td></td>
      <td>Die übereinstimmende Zeichenfolge und alle gespeicherten Teile.</td>
      <td><code>["dbbd", "bb"]</code></td>
    </tr>
    <tr>
      <td><code>index</code></td>
      <td>
        Der mit 0 beginnende Index der Übereinstimmung in der
        Eingabe-Zeichenkette.
      </td>
      <td><code>1</code></td>
    </tr>
    <tr>
      <td><code>input</code></td>
      <td>Die ursprüngliche Eingabe-Zeichenkette.</td>
      <td><code>"cdbbdbsbz"</code></td>
    </tr>
    <tr>
      <td><code>[0]</code></td>
      <td>Die zuletzt übereinstimmenden Zeichen.</td>
      <td><code>"dbbd"</code></td>
    </tr>
    <tr>
      <td rowspan="2"><code>myRe</code></td>
      <td><code>lastIndex</code></td>
      <td>
        Der Index bei dem die nächste Suche nach einer Übereinstimmung gestartet
        wird. (Diese Eigenschaft wird nur gesetzt, wenn im regulären Ausdruck
        die Option "g" verwendet wird, wie unter
        <a href="#Erweiterte Suche mit Optionen (Flags)"
          >Erweiterte Suche mit Optionen (Flags)</a
        >
        beschrieben).
      </td>
      <td><code>5</code></td>
    </tr>
    <tr>
      <td><code>source</code></td>
      <td>
        Der Text des Musters - wird geupdatet wenn der reguläre Ausdruck
        erstellt wird, nicht bei der Ausführung.
      </td>
      <td><code>"d(b+)d"</code></td>
    </tr>
  </tbody>
</table>

Wie das zweite Beispiel zeigt, kann man einen regulären Ausdruck einsetzen, der über einen Objekt-Intializer erstellt wurde, ohne die Zuweisung einer Variablen. Bei dieser Vorgehensweise ist jede Übereinstimmung ein neuer Ausdruck. Aus diesem Grund kann nicht auf die Eigenschaften dieses regulären Ausdrucks zugegriffen werden. Angenommen man hat z. B. dieses Skript:

```js
var myRe = /d(b+)d/g;
var myArray = myRe.exec("cdbbdbsbz");
console.log("Der Wert von lastIndex ist " + myRe.lastIndex);
```

Dann ist die Ausgabe:

    Der Wert von lastIndex ist 5

Hat man nun aber dieses Skript:

```js
var myArray = /d(b+)d/g.exec("cdbbdbsbz");
console.log("Der Wert von lastIndex ist " + /d(b+)d/g.lastIndex);
```

Dann ist die Ausgabe:

    Der Wert von lastIndex ist 0

Die einzelnen Vorkommen der Zeichenfolgen, die mit `/d(b+)d/g` übereinstimmen sind bei den beiden Anweisungen verschiedene Objekte und haben dementsprechend auch verschiedene Werte bei der jeweiligen Eigenschaft `lastIndex`. Falls man auf die Eigenschaften eines Objekts eines regulären Ausdrucks zugreifen möchte, sollte man diesen vorher einer Variablen zuweisen.

### Benutzung von geklammerten Mustern

Klammern werden verwendet, um einen Teil der Zeichen, die mit dem regulären Ausdruck übereinstimmen, zu speichern. Zum Beispiel stimmt `/a(b)c/` mit der Zeichenfolge "abc" überein und "b" wird gespeichert. Um die gespeicherten Zeichen wieder abzurufen, verwendet man die `Array`-Elemente `[1]`, ..., `[n]`.

Die Anzahl der möglichen speicherbaren Teile ist nicht limitiert. Das Array, welches zurückgegeben wird, enthält alle gespeicherten Übereinstimmungen. Die folgenden Beispiele zeigen auf, wie man geklammerte Muster einsetzt.

#### Beispiel 1

Das folgende Skript benutzt die Methode [`replace()`](/de/docs/JavaScript/Reference/Global_Objects/String/replace "en-US/docs/JavaScript/Reference/Global Objects/String/replace"), um Wörter in einer Zeichenkette auszutauschen. Die beiden Muster für die Wörter (`\w+`) wurden geklammert, damit die Wörter gespeichert werden. Anschließend werden im Ersetzungstext diese gespeicherten Wörter mit `$1` und `$2` wieder eingesetzt.

```js
var re = /(\w+)\s(\w+)/;
var str = "Jonas Schmidt";
var newstr = str.replace(re, "$2, $1");
console.log(newstr);
```

Die Ausgabe ist "Schmidt, Jonas".

### Erweiterte Suche mit Optionen (Flags)

Reguläre Ausdrücke kennen vier verschiedene Optionen (Flags), die es z. B. erlauben global nach Übereinstimmungen zu suchen oder die Berücksichtigung der Groß- und Kleinschreibweise zu deaktivieren. Zur Aktivierung der **g**lobalen Suche wird das Flag `g` eingesetzt. Die Berücksichtigung der Groß- und Kleinschreibweise (_engl. case-**i**nsensitive_ ) wird mit dem Flag `i` abgeschaltet. Die mehrzeilige Suche (engl. **m**ultiline) wird mit dem Flag `m` aktiviert und eine "sticky" Suche, wobei die Übereinstimmung an der aktuellen Postion im Eingabe-Zeichenkette zutreffen muss, wird mit dem Flag `y` aktiviert. Diese Optionen können getrennt oder gemeinsam verwendet und in beliebiger Reihenfolge angegeben werden. Die Buchstaben werden einfach an den regulären Ausdruck angehängt.

{{ Fx_minversion_note(3, "Die Unterstützung für das Flag <code>y</code> wurde bei Firefox 3 hinzugefügt. Wenn <code>y</code> aktiviert ist, schlägt die Suche fehl, wenn es keine Übereinstimmung an der aktuellen Position innerhalb der Eingabe-Zeichenkette gibt.") }}

Syntax für die Verwendung von Optionen:

```js
var re = /Muster/Optionen;
```

oder

```js
var re = new RegExp("Muster", "Optionen");
```

Die Optionen sind ein integraler Bestandteil des regulären Ausdrucks. Sie können nicht im Nachhinein entfernt oder hinzugefügt werden.

Zum Beispiel wird mit `re = /\w+\s/g` ein regulärer Ausdruck erstellt, der auf ein oder mehr Zeichen, gefolgt von einem Leerraum, passt. Nach diesem Muster wird über die ganze Zeichenkette hinweg gesucht.

```js
var re = /\w+\s/g;
var str = "fee fi fo fum";
var myArray = str.match(re);
console.log(myArray);
```

Hier ist die Ausgabe: \["fee ", "fi ", "fo "]. Bei diesem Beispiel könnte man die Zeile:

```js
var re = /\w+\s/g;
```

mit folgender austauschen:

```js
var re = new RegExp("\\w+\\s", "g");
```

und würde dasselbe Ergebnis erhalten.

Die Option `m` sorgt dafür, dass eine mehrzeilige Eingabe auch als solche interpretiert wird. Wird die Option `m` angegeben, passen die speziellen Zeichen `^` und `$` auf den Anfang oder das Ende jeder Zeile der Eingabe, anstatt nur auf den Anfang und das Ende der gesamten Eingabe.

## Beispiele

Das folgende Beispiel zeigt einige Einsatzmöglichkeiten von regulären Ausdrücken.

### Ändern der Reihenfolge in einer Zeichenkette

Das folgende Beispiel veranschaulicht die Anordnung von regulären Ausdrücken und die Verwendung der Methoden `string.split()` und `string.replace()`. Im Beispiel wird eine schlecht formatierte Eingabe mit Personennamen (Vorname zuerst), die durch Leerzeichen, Tabulatoren und exakt ein Semikolon getrennt sind, bereinigt. Außerdem wird die Reihenfolge des jeweiligen Namens herumgedreht (Nachname zuerst) und die Liste nach Nachnamen sortiert.

```js
// Die Zeichenkette beinhaltet mehrere Leerzeichen und Tabulatoren
// und könnte mehrere Leerzeichen zwischen vor und Nachnamen enthalten.

var names = "Lieschen Müller ;Erika Mustermann; Michel Deutscher ; Otto Normalverbraucher ; ";

var output = ["---------- Original String\n", names + "\n"];

// Erstellen von zwei regulären Ausdrücken und eines Arrays.
// Die Eingabe-Zeichenkette wird in Array-Elemente zerlegt.

// Muster: Möglicherweise ein Leerraum, dann ein Semikolon
// und möglicherweise nochmal ein Leerraum (0 oder mehr).
var pattern = /\s*;\s*/;

// Splitten der Zeichenkette in einzelne Teile anhand des Musters und
// speichern der Teile in einem Array mit Namen nameList.
var nameList = names.split(pattern);

// Neuer regulärer Ausdruck: ein oder mehr alphanumerische Zeichen,
// dann mindestens ein Leerraum und nochmal mindestens ein Wortzeichen.
// Klammern zum Speichern; Rückgriff auf gespeicherte Teile später.
pattern = /(\w+)\s+(\w+)/;

// Neues Array zum Speichern der bearbeiteten Namen.
var bySurnameList = [];

// Anzeigen des Arrays und befüllen des neuen Arrays
// mit durch Komma getrennten Namen (Nachname zuerst).
// Die Methode replace() entfernt alles, was mit dem Muster übereinstimmt
// und ersetzt es durch den an zweiter Stelle angegebenen String,
// bestehend aus den gespeicherten Teilen.
// Zuerst wird der zweite Teil ($2) eingesetzt und anschließend durch Komma
// und Leerzeichen getrennt der erste Teil ($1).

output.push("---------- Nach Teilung durch regulären Ausdruck");

var i, len;
for (i = 0, len = nameList.length; i < len; i++){
  output.push(nameList[i]);
  bySurnameList[i] = nameList[i].replace(pattern, "$2, $1");
}

// Anzeigen des neuen Arrays.
output.push("---------- Namen reserviert");
for (i = 0, len = bySurnameList.length; i < len; i++){
  output.push(bySurnameList[i]);
}

// Sortieren anhand des Nachnamens und anzeigen des neuen Arrays.
bySurnameList.sort();
output.push("---------- Sortiert");
for (i = 0, len = bySurnameList.length; i < len; i++){
  output.push(bySurnameList[i]);
}

output.push("---------- End");

console.log(output.join("\n"));
```

### Benutzung von speziellen Zeichen zur Verifizierung von Eingaben

Beim nachstehenden Beispiel wird der Benutzer aufgefordert, eine Telefonnummer einzugeben. Wenn der Benutzer den "Prüfen"-Button drückt, überprüft das Skript die Validität der Nummer. Sofern dann sichergestellt ist, dass es sich um eine Telefonnummer handelt (die Eingabe stimmt mit dem Muster des regulären Ausdrucks überein), zeigt das Skript eine Nachricht, um dem Benutzer zu danken und die Nummer zu bestätigen. Wenn die Nummer nicht valide ist (nicht mit dem Muster des regulären Ausdrucks übereinstimmt), wird der Benutzer ebenfalls mit einer Nachricht darüber informiert.

Das Muster des reguläre Ausdruck setzt sich folgendermaßen zusammen: Keine oder eine öffnende Klammer, `\(?`, gefolgt von drei Ziffern `\d{3}`, gefolgt von keiner oder einer schließenden Klammer `\)?`, gefolgt von einem Bindestrich, Schrägstrich, oder Punkt (falls vorhanden wird das Zeichen gespeichert) `([-\/\.])`, gefolgt von drei Ziffern `\d{3}`, gefolgt (falls vorhanden) von dem gespeicherten Zeichen (Bindestrich, Schrägstrich oder Punkt) `\1`, gefolgt von vier Ziffern `\d{4}`.

Das Event `Change` wird ausgelöst, wenn der Benutzer die Enter-Taste drückt, um die Eingabe (den Wert für `RegExp.input`) zu bestätigen.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <meta http-equiv="Content-Script-Type" content="text/javascript">
    <script type="text/javascript">
      var re = /\(?\d{3}\)?([-\/\.])\d{3}\1\d{4}/;
      function testInfo(phoneInput){
        var OK = re.exec(phoneInput.value);
        if (!OK)
          window.alert(RegExp.input + " ist keine Telefonnummer mit Vorwahl!");
        else
          window.alert("Danke! Ihre Telefonnummer ist " + OK[0]);
      }
    </script>
  </head>
  <body>
    <p>Bitte ihre Telefonnummer (mit Vorwahl) eingeben und den "Prüfen"-Button anklicken.
        <br>Das Format ist z.B. ###-###-####.</p>
    <form action="#">
      <input id="phone"><button onclick="testInfo(document.getElementById('phone'));">Prüfen</button>
    </form>
  </body>
</html>
```

{{PreviousNext("Web/JavaScript/Guide/Textformatierung", "Web/JavaScript/Guide/Indexed_collections")}}
