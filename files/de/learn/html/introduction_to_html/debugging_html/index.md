---
title: Fehlersuche in HTML
slug: Learn/HTML/Introduction_to_HTML/Debugging_HTML
tags:
  - Anfänger
  - Beginner
  - Debugging
  - Guide
  - HTML
  - Validation
  - validator
translation_of: Learn/HTML/Introduction_to_HTML/Debugging_HTML
original_slug: Learn/HTML/Einführung_in_HTML/Fehlersuche_in_HTML
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Document_and_website_structure", "Learn/HTML/Introduction_to_HTML/Marking_up_a_letter", "Learn/HTML/Introduction_to_HTML")}}

HTML-Code zu schreiben ist die eine Sache. Fehler die sich beim Entwickeln einschleichen zu finden und zu beheben die andere. In diesem Artikel stellen wir einige Werkzeuge vor, mit welchen man Fehler in HTML finden und beheben kann.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Vorwissen:</th>
      <td>
        <p>
          Grundkenntnisse in HTML, wie sie in den Artikeln
          <a href="/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
            >Lernen Sie HTML kennen</a
          >,
          <a
            href="/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals"
            >Einfache Textformatierung mit HTML</a
          >
          und
          <a href="/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks"
            >Erstellen von Links</a
          >
          abgedeckt werden.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        <p>
          Die Grundlagen zur Fehlersuche in HTML, mit Hilfe von entsprechenden
          Werkzeugen, kennen lernen.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Keine Angst vor der Fehlersuche

Wenn Computercode geschrieben wird, dann ist meistens alles in Ordnung, bis zu dem Moment in dem ein Fehler auftritt - es wurde etwas falsch gemacht, deswegen funktioniert der Code nicht - entweder überhaupt nicht, oder nicht so wie es vorgesehen war. Als Beispiel zeigen wir einen Fehlerbericht, der beim compilieren eines einfachen Programmes in der Programmiersprache [Rust](https://www.rust-lang.org/), ausgegeben wurde.

![A console window showing the result of trying to compile a rust program with a missing quote around a string in a print statement. The error message reported is error: unterminated double quote string.](https://mdn.mozillademos.org/files/12435/error-message.png) "Error" ist Englisch und bedeutet Fehler. In diesem Beispiel gibt die Fehlerwarnung aus "unterminated double quote string", was bedeutet, dass ein doppeltes Anführungszeichen fehlt. Wenn man sich `println!(Hello, world!");` anschaut, dann kann man sehen, das dort doppelte Anführungszeichen fehlen. Dieser Fehler ist dank der Fehlermeldung einfach zu finden und zu beheben. Fehlermeldungen können aber um einiges komplizierter sein, als in diesem Beispiel. Vor allem bei größeren Programmen, mit mehr Code, sind Fehler unvermeidlich und für jemanden, der eine Programmiersprache nicht kennt, wird es fast unmöglich, diese zu finden.

## Begriffserklärungen Fehlerbehebung

Im Computerbereich wurden viele **Begriffe aus dem Englischen übernommen**, so auch in diesem Bereich. So wird Fehlerbehebung auch im deutschen Sprachgebrauch **Debugging** genannt. Der Fehler im Code wird im Englischen als **Bug** bezeichnet, was soviel wie _Ungeziefer_ bedeutet. Das _Debugging_ ist dann das _Entfernen des Ungeziefers_ Als **Debugger** wird ein Programm bezeichnet, welches zur Fehlersuche und -behebung genutzt wird.

Die Fehlerbehebung, das debuggen also, muss niemandem Angst machen, auch wenn es viel Arbeit ist. Der Schlüssel zum Schreiben und Debuggen von Programmiercode ist Vertrautheit mit der entsprechenden Programmiersprache und den Wekrzeugen zur Fehlerbehebung.

## HTML und Debugging

Die Syntax von HTML ist um einiges einfacher als in einer "echten" Programmiersprache, wie Rust, {{glossary("Javascript")}} oder {{glossary("Python")}}. Auch wird HTML nicht erst compiliert, sondern direkt vom Browser interpretiert. Browser sind beim rendern von HTML sehr **permissiv**. Fehler bewirken normalerweise nicht, wie bei anderen Programmiersprachen üblich, das ein Dokument gar nicht dargestellt wird, sondern der Browser rendert das HTML-Dokument trotzdem, was sowohl gut, als auch schlecht sein kann.

### Permissiver Code

Was bedeutet permissiv? Wenn man in Programmiersprachen etwas falsch macht, dann gibt es normalereise zwei Sorten von Fehlern, denen man begegnet:

- **Syntaxfehler**: Dies sind Schreibfehler im Code, welche bewirken, dass das Programm nicht läuft, wie das obige Beispiel in Rust. Syntaxfehler sind leicht zu finden und zu beheben, wenn man mit der entsprechenden Programmierprache vertraut ist und man weiß, wie man Fehlermeldungen interpretiert.
- **Logische Fehler**: Diese Fehler treten auf, wenn die Syntax korrekt ist, der Code aber nicht das tut, was er tun soll. Das Programm läuft, aber nicht so wie erwartet. Logische Fehler sind schwieriger zu beheben, weil es keine Fehlermeldung gibt, die einen zu der Fehlerquelle führt.

HTML ignoriert Syntaxfehler, Browser rendern permissiv, die Seite wird angezeigt, obwohl Syntaxfehler im Code sind. Browser haben Regeln eingebaut, welche falsch geschriebenen HTML-Code trotzdem interpretieren, allerdings meist nicht so, wie es vorgesehen war. Die Fehler müssen trotzdem behoben werden.

> **Hinweis:** Warum wird HTML permissiv gerendert? Weil bei der Entwicklung des World Wide Web befunden wurde, dass es wichtiger ist, dass Leute ihre Inhalte publizieren können. Wichtiger als ein paar Syntaxfehler im Code, die eine Veröffentlichung verhindern würden. Das Internet wäre vermutlich nicht so populär, wenn die Regeln der Sprache strenger gewesen wären.

### Aktives Lernen: Permissiven Code untersuchen

Es ist Zeit sich anzuschauen, wie permissiv HTML Code gerendert wird.

1. Laden Sie bitte die folgende Datei herunter und speichern sie diese lokal: [debug-example demo](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/debugging-html/debug-example.html) In diesem Demo-Code sind absichtlich einige Fehler verbaut. Der HTML-Code ist schlecht geschrieben.
2. Öffnen Sie diese Datei in einem Browser. Sie sollten folgendes sehen: ![A simple HTML document with a title of HTML debugging examples, and some information about common HTML errors, such as unclosed elements, badly nested elements, and unclosed attributes. ](https://mdn.mozillademos.org/files/12437/badly-formed-html.png)
3. Das sieht gleich etwas merkwürdig aus. Schauen sie sich nun den Quellcode der Datei an:

    ```html
    <h1>HTML debugging examples</h1>

    <p>What causes errors in HTML?

    <ul>
      <li>Unclosed elements: If an element is <strong>not closed properly,
          then its effect can spread to areas you didn't intend

      <li>Badly nested elements: Nesting elements properly is also very important
          for code behaving correctly. <strong>strong <em>strong emphasised?</strong>
          what is this?</em>

      <li>Unclosed attributes: Another common source of HTML problems. Let's
          look at an example: <a href="https://www.mozilla.org/>link to Mozilla
          homepage</a>
    </ul>
    ```

4. Lassen Sie uns die Probleme erläutern:

    - Die {{htmlelement("p","Absatz")}} und {{htmlelement("li","Listenpunkt")}} Elemente haben keine schließenden Tags. Auf dem Bild oben sehen wir, das dies kaum Auswikrungen hat, da es für den Browser einfach ist, trotzdem zu erkennen, wo das Ende dieser Elemente sein sollte.
    - Das erste {{htmlelement("strong")}} Element hat kein schließendes Tag. Der Browser kann nicht erraten, wo das Element enden soll, deswegen ist der ganze Rest von dem Text stark hervorgehoben.
    - Diese Sektion des Textes wurden die Elemente schlecht verschachtelt. `<strong>strong <em>strong emphasised?</strong> what is this?</em>`. Wegen dem vorhergehenden Problem, kann man nicht sagen, wie dies vom Browser interpretiert wird.
    - Bei dem {{htmlattrxref("href","a")}}-Attributwert wurde ein schließendes, doppeltes Anführungszeichen vergessen. Dies scheint das größte Problem zu verursachen, der Link ist gar nicht erst gerendert worden.

5. Lassen Sie uns den Code anschauen den der Browser zum rendern benutzt hat, im Gegensatz zu dem geschriebenen Quellcode. Dafür benutzen wir die Web Developer Tools, die in jedem modernen Browser enthalten sind (nicht aber in der mobilen Version der Browser). Wenn Sie nicht wissen, was Web Developer Tools sind, dann nehmen Sie sich einige Minuten Zeit, um diesen Artikel zu lesen: [Entdecken Sie die Web Developer Tools](/de/docs/Learn/Discover_browser_developer_tools)
6. In dem DOM-Inspektor können Sie sehen, wie der gerenderte Code aussieht: ![The HTML inspector in Firefox, with our example's paragraph highlighted, showing the text "What causes errors in HTML?" Here you can see that the paragraph element has been closed by the browser.](https://mdn.mozillademos.org/files/12439/html-inspector.png)
7. Mit Hilfe des DOM-Inspektors können wir den Code den der Browser versucht hat zu beheben sehen und wie dieser versucht die HTML Fehler zu beheben. (Wir habe hier Firefox benutzt, um den Code anzuschauen; andere moderne Browser _sollten_ zu dem selben Resultat kommen.):

    - Den Absätzen und den Listenpunkten wurden schließende Tags hinzugefügt.
    - Es ist nicht klar, wo das erste `<strong>`-Element enden soll, deswegen hat der Browser jeden separaten Block mit einem eigenen `<strong>`-Tag versehen, bis zum Ende des Dokumentes!
    - Die falsch verschachtelten Elemente wurden vom Browser wie folgt gelöst:

      ```html
      <strong>strong
        <em>strong emphasised?</em>
      </strong>
      <em> what is this?</em>
      ```

    - Der Link mit den fehlenden, doppelten Anführungszeichen wurde komplett gelöscht. Das letzte Listenelement sieht so aus:

      ```html
      <li>
        <strong>Unclosed attributes: Another common source of HTML problems.
        Let's look at an example: </strong>
      </li>
      ```

### HTML Validation

Es ist auf jeden Fall besser, die korrekte Syntax für HTML zu verwenden, um ungewollte Ergebnisse zu vermeiden. Aber wie? Bei einem kleinen Dokument, wie dem obigen, ist es einfach, dieses Zeile für Zeile durchzugehen, um die Fehler zu finden. Aber was bei einem sehr großen HTML-Dokument tun?

Die beste Strategie ist es, das HTML-Dokument von dem [Markup Validation Service](https://validator.w3.org/) überprüfen zu lassen. Dieses Tool wird von der W3C bereitgestellt, also von der Organisation, welche auch die Spezifikationen von HTML, CSS und anderen Internettechnologien erstellt. Dieser Webseite gibt man ein HTML-Dokument an, diese untersucht das Dokument auf Fehler und gibt einen detailierten Fehlerbericht zurück.

![The HTML validator homepage](https://mdn.mozillademos.org/files/12441/validator.png)

Man kann entweder eine Webseite, ein hochgeladenes HTML-Dokument oder direkt eingegebenen HTML-Code validieren lassen

### Aktives lernen: Validieren eines HTML-Dokumentes

Lassen Sie uns das Gelernte einmal in die Praxis umsetzen, mit unserem [Beispieldokument hier](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/debugging-html/debug-example.html).

1. Öffnen Sie als Erstes den [Markup Validation Service](https://validator.w3.org/) in einem anderen Browser-Tab.
2. Gehen Sie zu dem [Validate by Direct Input](https://validator.w3.org/#validate_by_input) Tab. Dort kann man direkt HTML-Code überprüfen.
3. Kopieren Sie den Code aus dem Beispieldokument komplett in das große Textfeld auf der Webseite des Markup Validation Service.
4. Klicken Sie auf _Check_.

Dies sollte Ihnen eine Liste der Fehler und weitere Informationen geben.

![A list of of HTML validation results from the W3C markup validation service](https://mdn.mozillademos.org/files/12443/validation-results.png)

#### Die Fehlermeldungen richtig interpretieren

Meistens sind die Fehlermeldungen hilfreich, manchmal aber auch schwierig zu verstehen. Es braucht etwas Übung, um den Grund aller Fehlermeldungen zu erkennen. Lassen Sie uns durch die ausgegebenen Fehlermeldungen gehen und überlegen, was diese bedeuten. Sie sehen, dass jede Fehlermeldung mit einer Zeilen(line) und einer Spalten(column)- nummer versehen sind damit der Ort des Fehlers auffindbar ist.

- "End tag `li` implied, but there were open elements" (2 instances): Diese Fehlermeldung zeigt an, dass ein Element offen ist, welches eigentlich geschlossen werden sollte. Die line/column Informationen zeigen auf die erste Zeile, welche nach dem nicht vorhandenen geschlossenen Tag sein sollte. Dies hilft uns zu sehen, was falsch ist.
- "Unclosed element `strong`": Diese Fehlermeldung ist einfach zu verstehen. Ein {{htmlelement("strong")}} Element wurde nicht geschlossen und die Zeilen und Spaltennummern deuten direkt auf den Fehler.
- "End tag `strong` violates nesting rules": An der angegebenen Possition wurden Elemente falsch verschachtelt.
- "End of file reached when inside an attribute value. Ignoring tag": Diese Fehlermeldung ist etwas kryptisch. Es zeigt auf, das ein Attribut irgendwo nicht richtig geformt wurde, vermutlich eher am Ende des Dokumentes, denn das Ende des Dokumentes ist innerhalb des Attribut-Wertes. Da der Browser den Link gar nicht darstellt, könnte hier der Fehler liegen.
- "End of file seen and there were open elements": Diese Fehlermeldung sagt uns einfach nur, das es offene Elemente im Dokument gibt, welche geschlossen werden müssen. Die Zeilennummern deuten auf die letzten paar Zeilen im Dokument und diese Meldung kommt mit einer Zeile Code, die ein Beispiel dafür im Dokument aufzeigt.

      Beispiel: <a href="https://www.mozilla.org/>Link zur Mozilla Homepage</a> ↩ </ul>↩ </body>↩</html>

  > **Hinweis:** Ein Attributwert, bei welchem geschlossene Anführungszeichen fehlen ist ein offenes Element, da der Rest des Dokumentes als der Wert des Attributes gelesen wird.

- "Unclosed element `ul`": Diese Meldung ist nicht hilfreich, da das {{htmlelement("ul")}}-Element _richtig_ geschlossen wurde. Der Fehler kommt von dem nicht geschlossenen {{htmlelement("a")}}-Element, da dort die schließenden Anführungszeichen, bei einem der Attributwerte fehlen.

Wenn Sie nicht gleich alle Fehlermeldungen verstehen ist das nicht schlimm. Am besten versucht man, einen Fehler nach dem anderen zu beheben, meistens verschwinden dann auch andere Fehlermeldungen damit. Mehrere Fehlermeldungen können das Resulstat von einem einzigen Fehler im Code sein.

Wenn alle Fehler beseitigt sind, dann erfolgt das folgende Banner:

![Banner that reads "The document validates according to the specified schema(s) and to additional constraints checked by the validator."](https://mdn.mozillademos.org/files/12445/valid-html-banner.png)

## Zusammenfassung

Dies war eine Einführung in die Fehlerbehebung bei HTML-Dokumenten. Dies sollte Ihnen einige nützliche Fähigkeiten vermittelt haben, um Ihre Webseiten zukünftig ordentlich zu halten. Finden Sie selber die Fehler im Code, indem Sie sich das gerenderte HTML-Dokument im Browser anschauen oder nutzen Sie den HTML-Validator.

Dies ist auch das Ende der Artikelreihe des Moduls "Einführung in HTML". Als nächstes kommen zwei Aufgaben, welche Sie alleine bearbeiten sollten, um das Gelernte in die Praxis umzusetzen! Bei der ersten Aufgabe geht es darum, einen Brief mit HTML ordentlich zu formatieren: [Aufgabe: Formatieren eines Briefes](/de/docs/Learn/HTML/Introduction_to_HTML/Marking_up_a_letter)

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Document_and_website_structure", "Learn/HTML/Introduction_to_HTML/Marking_up_a_letter", "Learn/HTML/Introduction_to_HTML")}}

## In this module

- [Getting started with HTML](/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
- [What’s in the head? Metadata in HTML](/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)
- [HTML text fundamentals](/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals)
- [Creating hyperlinks](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks)
- [Advanced text formatting](/de/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting)
- [Document and website structure](/de/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure)
- [Debugging HTML](/de/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML)
- [Marking up a letter](/de/docs/Learn/HTML/Introduction_to_HTML/Marking_up_a_letter)
- [Structuring a page of content](/de/docs/Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content)
