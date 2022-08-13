---
title: Flexbox
slug: Learn/CSS/CSS_layout/Flexbox
tags:
  - Anfänger
  - Artikel
  - CSS
  - CSS layouts
  - Flexible Boxen
  - Layout
  - Layouts
  - Leitfaden
  - Lernen
  - flexbox
translation_of: Learn/CSS/CSS_layout/Flexbox
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/CSS_layout/Normal_Flow", "Learn/CSS/CSS_layout/Grids", "Learn/CSS/CSS_layout")}}

[Flexbox](/de/docs/Web/CSS/CSS_Flexible_Box_Layout) ist eine Layoutmethode zum Anordnen von Elementen in Zeilen oder Spalten. Elemente werden gestreckt, um zusätzlichen Platz zu füllen, und schrumpfen, um in kleinere Räume zu passen. Dieser Artikel erklärt alle Grundlagen.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML Grundlagen (siehe
        <a href="/en-US/docs/Learn/HTML/Introduction_to_HTML"
          >Introduction to HTML</a
        >), und eine Vorstellung davon, wie CSS funktioniert (study
        <a href="/en-US/docs/Learn/CSS/Introduction_to_CSS"
          >Introduction to CSS</a
        >.)
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Erfahren Sie, wie Sie mit dem Flexbox-Layoutsystem Weblayouts erstellen.
      </td>
    </tr>
  </tbody>
</table>

## Warum Flexbox?

Lange Zeit waren die einzigen zuverlässigen browserübergreifenden Tools zum Erstellen von CSS-Layouts Dinge wie Floats und Positionierung. Diese sind in Ordnung und funktionieren, aber in gewisser Weise sind sie auch eher einschränkend und frustrierend.

Die folgenden einfachen Layoutanforderungen sind mit solchen Werkzeugen auf bequeme und flexible Weise entweder schwierig oder unmöglich zu erreichen:

- Vertikales Zentrieren eines Inhaltsblocks in seinem übergeordneten Element.
- Alle untergeordneten Elemente eines Containers sollen die gleichen Anteil der Breite / Höhe einnehmen, unabhängig davon, wie viel Breite / Höhe verfügbar ist.
- Alle Spalten in einem mehrspaltigen Layout mit einheitlicher Höhe gestalten, auch wenn sie eine andere Menge an Inhalt enthalten.

Wie Sie in den folgenden Abschnitten sehen werden, erleichtert Flexbox viele Layoutaufgaben erheblich. Lass uns eintauchen!

## Ein einfaches Beispiel

In diesem Artikel werden Sie eine Reihe von Übungen durcharbeiten, um zu verstehen, wie Flexbox funktioniert. Zuerst sollten Sie eine lokale Kopie der ersten Startdatei - [flexbox0.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/flexbox/flexbox0.html)aus unserem Github-Repo - erstellen, sie in einen modernen Browser (wie Firefox oder Chrome) laden und den Code in Ihrem Code-Editor anzeigen. Sie können es auch [hier live sehen](http://mdn.github.io/learning-area/css/css-layout/flexbox/flexbox0.html).

Sie werden sehen, dass wir ein {{htmlelement ("header")}} Element mit einer Überschrift der obersten Ebene und ein {{htmlelement ("section")}} Element mit drei {{htmlelement ("article") }} haben. Wir werden damit ein standardmäßiges dreispaltiges Layout erstellen.

![](flexbox-example1.png)

## Festlegen der Elemente für flexible Boxen

Zunächst müssen wir auswählen, welche Elemente als flexible Boxen angeordnet werden sollen. Dazu setzen wir einen speziellen Wert von {{cssxref ("display")}} für das übergeordnete Element der Elemente, die Sie beeinflussen möchten. In diesem Fall möchten wir die {{htmlelement ("article")}} Elemente anordnen, also setzen wir dies auf das {{htmlelement ("section")}}:

```css
section {
  display: flex;
}
```

Dies führt dazu, dass das \<section> -Element zu einem **Flex-Container** wird und seine untergeordneten Elemente zu **Flex-Elementen** werden. Das Ergebnis sollte ungefähr so sein:

![](flexbox-example2.png)

Diese Deklaration erzeugt alles, was wir brauchen - unglaublich, oder? Wir haben unser mehrspaltiges Layout mit gleich großen Spalten, und die Spalten haben alle die gleiche Höhe. Dies liegt an de Standardwerte für Flex-Elemente (die untergeordneten Elemente des Flex-Containers), die so eingerichtet sind, um solche häufig auftretenden Probleme wie dieses zu lösen.

Lassen Sie uns noch einmal wiederholen, was hier passiert. Das Element, dem wir einen {{cssxref ("display")}} -Wert `flex` zugewiesen haben, verhält sich in Bezug auf die Interaktion mit dem Rest der Seite wie ein Element auf Blockebene, aber seine untergeordneten Elemente werden als Flex-Elemente angeordnet - Im nächsten Abschnitt wird detaillierter erläutert, was das bedeutet. Beachten Sie auch, dass Sie den `display` Wert `inline-flex` verwenden können, wenn Sie die untergeordneten Elemente eines Elements als Flex-Elemente auslegen möchten, dieses Element sich jedoch wie ein Inline-Element verhält.

## Das flex Modell

Wenn Elemente als flex-Elemente angeordnet sind, werden sie entlang zweier Achsen angeordnet:

![flex_terms.png](flex_terms.png)

- Die **Hauptachse (main axis)** ist die Achse, die in der Richtung verläuft, in der die Flex-Elemente angeordnet sind (z. B. als Zeilen auf der Seite oder Spalten auf der Seite). Anfang und Ende dieser Achse werden als main start und main end bezeichnet.
- Die **Querachse (cross axis)** verläuft senkrecht dazu. Anfang und Ende dieser Achse werden als cross start und cross end bezeichnet.
- Das übergeordnete Element, auf dem `display: flex` festgelegt ist (in unserem Beispiel das {{htmlelement ("section")}}), wird als **Flex-Container** bezeichnet.
- Die als flexible Boxen im Flex-Container angeordnetrn Elemente werden als **Flex-Elemente (flex-items)** bezeichnet (in unserem Beispiel die Elemente {{htmlelement ("article")}}).

Beachten Sie diese Terminologie, wenn Sie die folgenden Abschnitte durchgehen. Sie können jederzeit darauf zurückgreifen, wenn Sie über einen der verwendeten Begriffe verwirrt sind.

## Spalten oder Zeilen?

Flexbox bietet eine Eigenschaft namens {{cssxref ("flex-direction")}}, die angibt, in welche Richtung die Hauptachse verläuft (in welche Richtung die untergeordneten Flexbox-Elemente angeordnet sind). Standardmäßig ist dies auf row festgelegt, wodurch sie veranlasst werden in einer Reihe in der Richtung angeordnet sein, in der die Standardsprache Ihres Browsers funktioniert (von links nach rechts, im Fall eines englischen Browsers).

Fügen Sie Ihrer {{htmlelement ("section")}} Regel die folgende Deklaration hinzu:

```css
flex-direction: column;
```

Sie sehen, dass die Elemente dadurch wieder in ein Spaltenlayout versetzt werden, ähnlich wie vor dem Hinzufügen von CSS. Bevor Sie fortfahren, löschen Sie diese Deklaration aus Ihrem Beispiel.

> **Hinweis:** Sie können Flex-Elemente auch in umgekehrter Richtung auslegen, indem Sie die Werte `row-reverse` für Zeilenumkehr und `column-reverse` für Spaltenumkehr verwenden. Experimentieren Sie auch mit diesen Werten!

## Umbruch

Ein Problem, das auftritt, wenn Sie eine feste Breite oder Höhe in Ihrem Layout haben, ist, dass Ihre Flexbox-Kinder möglicherweise ihren Container überlaufen und das Layout beschädigen. Schauen Sie sich unser Beispiel [flexbox-wrap0.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/flexbox/flexbox-wrap0.html) an und versuchen Sie, [es live anzuzeigen](http://mdn.github.io/learning-area/css/css-layout/flexbox/flexbox-wrap0.html) (erstellen Sie jetzt eine lokale Kopie dieser Datei, wenn Sie diesem Beispiel folgen möchten):

![](flexbox-example3.png)

Hier sehen wir die Kind-Elemente tatsächlich aus ihrem Container laufen. Eine Möglichkeit, dies zu beheben, besteht darin, Ihrer {{htmlelement ("section")}} -Regel die folgende Deklaration hinzuzufügen:

```css
flex-wrap: wrap;
```

Fügen Sie Ihrer {{htmlelement ("article")}} Regel außerdem die folgende Deklaration hinzu:

```css
flex: 200px;
```

Sie werden sehen, dass das Layout damit viel besser aussieht:

![](flexbox-example4.png)

Wir haben jetzt mehrere Zeilen - so viele Flexbox-Kinder werden in jede Zeile eingefügt, wie sinnvoll ist, und jeder Überlauf wird in die nächste Zeile verschoben. Die auf den Artikeln festgelegte `flex: 200px`-Deklaration bedeutet, dass jede mindestens 200px breit ist. Wir werden diese Eigenschaft später genauer besprechen. Möglicherweise stellen Sie auch fest, dass die letzten untergeordneten Elemente in der letzten Zeile jeweils breiter sind, sodass die gesamte Zeile noch gefüllt ist.

Aber wir können hier noch mehr tun. Versuchen Sie zunächst, den Eigenschaftswert {{cssxref ("flex-direction")}} in `row-reverse` zu ändern. Jetzt sehen Sie, dass Sie immer noch über ein Layout mit mehreren Zeilen verfügen, das jedoch in der gegenüberliegenden Seite des Browsers beginnt Fenster und in umgekehrter Richtung fließt.

## flex-flow shorthand

An dieser Stelle ist anzumerken, dass eine Abkürzung für {{cssxref ("Flex-Wrap")}} und {{cssxref ("Flex-Wrap")}} - {{cssxref ("Flex-Flow")}} existiert . So können Sie beispielsweise

```css
flex-direction: row;
flex-wrap: wrap;
```

ersetzen mit

```css
flex-flow: row wrap;
```

## Flexible Dimensionierung von flex-Artikeln

Kehren wir nun zu unserem ersten Beispiel zurück und schauen wir uns an, wie wir steuern können, welchen Anteil der Space-Flex-Elemente im Vergleich zu den anderen Flex-Elementen einnehmen. Starten Sie Ihre lokale Kopie von [flexbox0.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/flexbox/flexbox0.html)oder nehmen Sie eine Kopie von [flexbox1.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/flexbox/flexbox1.html) als neuen Ausgangspunkt ([hier auch live](http://mdn.github.io/learning-area/css/css-layout/flexbox/flexbox1.html)).

Fügen Sie zunächst die folgende Regel am Ende Ihres CSS hinzu:

```css
article {
  flex: 1;
}
```

Dies ist ein einheitloser Proportionswert, der bestimmt, wie viel des verfügbaren Platzes entlang der Hauptachse jedes Flex-Element im Vergleich zu anderen Flex-Elementen einnimmt. In diesem Fall geben wir jedem {{htmlelement ("article")}} Element den gleichen Wert (den Wert 1), was bedeutet, dass alle gleich viel Platz nach dem Auffüllen und dem Rand beanspruchen. Es ist relativ zu anderen Flex-Elementen, was bedeutet, dass ein Wert von 400000 für jedes Flex-Element genau den gleichen Effekt hätte.

Fügen Sie nun die folgende Regel unter der vorherigen hinzu:

```css
article:nth-of-type(3) {
  flex: 2;
}
```

Wenn Sie jetzt aktualisieren, werden Sie feststellen, dass das dritte {{htmlelement ("article")}} doppelt so viel der verfügbaren Breite einnimmt wie die beiden anderen - es sind jetzt insgesamt vier Proportionseinheiten verfügbar (1 + 1) + 2 = 4). Die ersten beiden Flex-Elemente haben jeweils eine Einheit, sodass sie jeweils 1/4 des verfügbaren Platzes beanspruchen. Die dritte hat zwei Einheiten, nimmt also 2/4 des verfügbaren Platzes (oder die Hälfte) ein.

Sie können auch einen Mindestgrößenwert innerhalb des Flex-Werts angeben. Versuchen Sie, Ihre vorhandenen Artikelregeln wie folgt zu aktualisieren:

```css
article {
  flex: 1 200px;
}

article:nth-of-type(3) {
  flex: 2 200px;
}
```

Das heißt im Wesentlichen: "Jedes Flex-Element erhält zuerst 200 Pixel des verfügbaren Speicherplatzes. Danach wird der Rest des verfügbaren Speicherplatzes entsprechend den Proportionseinheiten aufgeteilt." Versuchen Sie es mit einer Aktualisierung, und Sie werden einen Unterschied in der Aufteilung des Speicherplatzes feststellen.

![](flexbox-example1.png)

Der wahre Wert von flexbox zeigt sich in seiner Flexibilität / Responsiveness. Wenn Sie die Größe des Browserfensters ändern oder ein weiteres {{htmlelement ("article")}} Element hinzufügen, funktioniert das Layout weiterhin einwandfrei.

## flex: Kurzform versus Langform

{{cssxref ("flex")}} ist eine Kurzform-Eigenschaft, die bis zu drei verschiedene Werte angeben kann:

- Der Anteil des Anteils ohne Einheit, den wir oben besprochen haben. Dies kann individuell mit der Langform {{cssxref ("flex-grow")}} angegeben werden.
- Ein zweiter uneinheitlicher Proportionswert - {{cssxref ("flex-shrink")}} -, der ins Spiel kommt, wenn die flexiblen Elemente ihren Container überlaufen. Dies gibt an, wie viel der überlaufenden Menge von der Größe jedes Flex-Elements entfernt wird, um zu verhindern, dass sie ihren Behälter überlaufen. Dies ist eine erweiterte Flexbox-Funktion, auf die wir in diesem Artikel nicht weiter eingehen werden.
- Der oben diskutierte Mindestgrößenwert. Dies kann individuell mit dem Lang-Wert {{cssxref ("flex-base")}} angegeben werden.

Wir raten davon ab, die lLangform Flex-Eigenschaften zu verwenden, es sei denn, Sie müssen dies wirklich tun (z. B. um etwas zuvor festgelegtes zu überschreiben). Sie führen dazu, dass viel zusätzlicher Code geschrieben wird, und sie können etwas verwirrend sein.

## Horizontale und vertikale Ausrichtung

Sie können auch Flexbox-Funktionen verwenden, um Flex-Elemente entlang der Haupt- oder Querachse auszurichten. Schauen wir uns dies anhand eines neuen Beispiels an - f[lex-align0.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/flexbox/flex-align0.html) ([siehe auch live](http://mdn.github.io/learning-area/css/css-layout/flexbox/flex-align0.html)) - das wir in eine übersichtliche, flexible Schaltfläche / Symbolleiste verwandeln werden. Im Moment sehen Sie eine horizontale Menüleiste mit einigen Schaltflächen in der oberen linken Ecke.

![](flexbox-example5.png)

Nehmen Sie zunächst eine lokale Kopie dieses Beispiels.

Fügen Sie nun am Ende des CSS des Beispiels Folgendes hinzu:

```css
div {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
```

![](flexbox_center_space-around.png)

Aktualisieren Sie die Seite und Sie werden sehen, dass die Schaltflächen jetzt horizontal und vertikal gut zentriert sind. Wir haben dies über zwei neue Eigenschaften getan.

{{cssxref ("align-items")}} steuert, wo sich die Flex-Elemente auf der Querachse befinden.

- Standardwert ist `stretch`, wodurch alle Flex-Elemente gestreckt werden, um das übergeordnete Element in Richtung der Querachse zu füllen. Wenn das übergeordnete Element in Querrichtung keine feste Breite hat, werden alle Flex-Elemente so lang wie die längsten Flex-Elemente. So hat unser erstes Beispiel standardmäßig Spalten gleicher Höhe erhalten.
- Der `center`-wert, den wir in unserem obigen Code verwendet haben, bewirkt, dass die Elemente ihre intrinsischen Abmessungen beibehalten, jedoch entlang der Querachse zentriert werden. Aus diesem Grund sind die Schaltflächen unseres aktuellen Beispiels vertikal zentriert.
- Sie können auch Werte wie `flex-start` und `flex-end` festlegen, mit denen alle Elemente am Anfang bzw. Ende der Querachse ausgerichtet werden. Ausführliche Informationen finden Sie unter {{cssxref ("align-items")}}.

Sie können das Verhalten {{cssxref ("align-items")}} für einzelne Flex-Elemente überschreiben, indem Sie die Eigenschaft {{cssxref ("align-self")}} auf diese anwenden. Versuchen Sie beispielsweise, Ihrem CSS Folgendes hinzuzufügen:

```css
button:first-child {
  align-self: flex-end;
}
```

![](flexbox_first-child_flex-end.png)

Sehen Sie sich an, welchen Effekt dies hat, und entfernen Sie ihn erneut, wenn Sie fertig sind.

{{cssxref ("Berechtigungsinhalt")}} steuert, wo sich die Flex-Elemente auf der Hauptachse befinden.

- Der Standardwert ist `flex-start`, wodurch alle Elemente am Anfang der Hauptachse sitzen.
- Sie können `flex-end` verwenden, damit sie am Ende sitzen.
- `center` ist auch ein Wert für j`ustify-content` und lässt die flexiblen Elemente in der Mitte der Hauptachse sitzen.
- Der oben verwendete Wert `space-around` ist nützlich - er verteilt alle Elemente gleichmäßig entlang der Hauptachse, wobei an beiden Enden etwas Platz verbleibt.
- Es gibt einen anderen Wert, `space-between`, der dem `space-around` sehr ähnlich ist, außer dass an beiden Enden kein Leerzeichen verbleibt.

Spielen Sie mit diesen Werten, um zu sehen, wie sie funktionieren, bevor Sie fortfahren.

## Flex-Elemente ordnen

Flexbox bietet auch eine Funktion zum Ändern der Layoutreihenfolge von Flex-Elementen, ohne die Quellreihenfolge zu beeinflussen. Dies ist eine andere Sache, die mit herkömmlichen Layoutmethoden nicht möglich ist.

Der Code hierfür ist einfach: Fügen Sie Ihrem Beispielcode für die Schaltflächenleiste das folgende CSS hinzu:

```css
button:first-child {
  order: 1;
}
```

Aktualisieren Sie, und Sie werden jetzt sehen, dass die Schaltfläche "Lächeln" an das Ende der Hauptachse verschoben wurde. Lassen Sie uns etwas detaillierter darüber sprechen, wie dies funktioniert:

- Standardmäßig haben alle Flex-Elemente den Wert {{cssxref ("order")}} von 0.
- Flex-Artikel mit höheren Ordnungswerten werden später in der Anzeigereihenfolge angezeigt als Artikel mit niedrigeren Ordnungswerten.
- Flex-Artikel mit demselben Ordnungswert werden in ihrer Quellreihenfolge angezeigt. Wenn Sie also vier Elemente mit den Ordnungswerten 2, 1, 1 und 0 festgelegt haben, lautet die Anzeigereihenfolge 4., 2., 3. und dann 1 ..
- Das 3. Element wird nach dem 2. angezeigt, da es denselben Wert hat und sich in der Quelloreihenfolge dahinter befindet.

Sie können negative Werte festlegen, damit Elemente vor Elementen mit 0 angezeigt werden. Sie können beispielsweise die Schaltfläche "Blush" am Anfang der Hauptachse mit der folgenden Regel anzeigen lassen:

```css
button:last-child {
  order: -1;
}
```

## Verschachtelte Flexboxen

Mit der Flexbox können einige recht komplexe Layouts erstellt werden. Es ist vollkommen in Ordnung, ein Flex-Element auch als Flex-Container festzulegen, damit seine untergeordneten Elemente auch wie flexible Boxen angeordnet sind. Schauen Sie sich [complex-flexbox.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/flexbox/complex-flexbox.html) an ([Live-Ansicht](http://mdn.github.io/learning-area/css/css-layout/flexbox/complex-flexbox.html)).

![](flexbox-example7.png)

Das HTML dafür ist ziemlich einfach. Wir haben ein {{htmlelement ("section")}} Element, das drei {{htmlelement ("article")}} enthält. Das dritte {{htmlelement ("article")}} enthält drei {{htmlelement ("div")}}. ::

    section - article
              article
              article - div - button
                        div   button
                        div   button
                              button
                              button

Schauen wir uns den Code an, den wir für das Layout verwendet haben.

Zunächst legen wir fest, dass die untergeordneten Elemente des {{htmlelement ("section")}} als flexible Boxen angeordnet werden.

```css
section {
  display: flex;
}
```

Als nächstes setzen wir einige Flex-Werte für die {{htmlelement ("article")}} selbst. Beachten Sie hier besonders die 2. Regel - wir setzen das dritte {{htmlelement ("article")}} so, dass seine Kindelemente auch wie flexible Elemente angeordnet sind, aber diesmal legen wir sie wie eine Spalte an.

```css
article {
  flex: 1 200px;
}

article:nth-of-type(3) {
  flex: 3 200px;
  display: flex;
  flex-flow: column;
}
```

Als nächstes wählen wir das erste {{htmlelement ("div")}} aus. Wir verwenden zuerst `flex: 1 100px`; Um eine effektive Höhe von 100 Pixel zu erreichen, setzen wir die untergeordneten Elemente (die {{htmlelement ("button")}} Elemente) so, dass sie auch wie flexible Elemente angeordnet sind. Hier legen wir sie in einer Umbruchreihe an und richten sie in der Mitte des verfügbaren Platzes aus, wie wir es in dem Beispiel für einzelne Schaltflächen getan haben, das wir zuvor gesehen haben.

```css
article:nth-of-type(3) div:first-child {
  flex:1 100px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
}
```

Schließlich haben wir einige Größen für die Schaltfläche festgelegt, aber interessanterweise geben wir ihr einen Flex-Wert von 1 Auto. Dies hat einen sehr interessanten Effekt, den Sie sehen, wenn Sie versuchen, die Breite Ihres Browserfensters zu ändern. Die Schaltflächen nehmen so viel Platz wie möglich ein und sitzen so viele auf derselben Linie wie möglich. Wenn sie jedoch nicht mehr bequem auf dieselbe Linie passen, werden sie nach unten fallen gelassen, um neue Linien zu erstellen.

```css
button {
  flex: 1 auto;
  margin: 5px;
  font-size: 18px;
  line-height: 1.5;
}
```

## Cross-Browser-Kompatibilität

Die Flexbox-Unterstützung ist in den meisten neuen Browsern verfügbar - Firefox, Chrome, Opera, Microsoft Edge und IE 11, neuere Versionen von Android / iOS usw. Sie sollten sich jedoch bewusst sein, dass noch ältere Browser verwendet werden, die Flexbox nicht unterstützen (oder aber eine veraltete Version davon unterstützen.)

Während Sie nur lernen und experimentieren, spielt dies keine große Rolle. Wenn Sie jedoch die Verwendung von Flexbox in einer echten Website in Betracht ziehen, müssen Sie Tests durchführen und sicherstellen, dass Ihre Benutzererfahrung in möglichst vielen Browsern noch akzeptabel ist.

Flexbox ist etwas kniffliger als einige CSS-Funktionen. Wenn einem Browser beispielsweise ein CSS-Schlagschatten fehlt, kann die Site wahrscheinlich weiterhin verwendet werden. Wenn Flexbox-Funktionen nicht unterstützt werden, wird ein Layout wahrscheinlich vollständig beschädigt, wodurch es unbrauchbar wird.

In unserem [Cross-Browser-Testmodul](/de/docs/Learn/Tools_and_testing/Cross_browser_testing) diskutieren wir Strategien zur Überwindung von Problemen mit der Cross-Browser-Unterstützung.

## Testen Sie Ihre Fähigkeiten!

Wir haben in diesem Artikel viel behandelt, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen beibehalten haben, bevor Sie fortfahren - siehe Testen Sie Ihre Fähigkeiten: Flexbox.

## Zusammenfassung

Damit ist unsere Tour durch die Grundlagen der Flexbox abgeschlossen. Wir hoffen, Sie hatten Spaß und werden ein gutes Stück damit herumspielen, wenn Sie Ihr Lernen vorantreiben. Als nächstes werfen wir einen Blick auf einen weiteren wichtigen Aspekt von CSS-Layouts - CSS-Raster.

{{PreviousMenuNext("Learn/CSS/CSS_layout/Normal_Flow", "Learn/CSS/CSS_layout/Grids", "Learn/CSS/CSS_layout")}}

## In diesem Modul

- [Einführung in das CSS-Layout](/de/docs/Learn/CSS/CSS_layout/Introduction)
- [Normal flow](/de/docs/Learn/CSS/CSS_layout/Normal_Flow)
- [Flexbox](/de/docs/Learn/CSS/CSS_layout/Flexbox)
- [Grid](/de/docs/Learn/CSS/CSS_layout/Grids)
- [Floats](/de/docs/Learn/CSS/CSS_layout/Floats)
- [Positionieren](/de/docs/Learn/CSS/CSS_layout/Positioning)
- [Mehrspaltiges Layout](/de/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
- [Responsive design](/de/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [Anfängerleitfaden für media queries](/de/docs/Learn/CSS/CSS_layout/Media_queries)
- [Legacy-Layout-Methoden](/de-DEdocs/Learn/CSS/CSS_layout/Legacy_Layout_Methods)
- [Unterstützung älterer Browser](/de/docs/Learn/CSS/CSS_layout/Supporting_Older_Browsers)
- [Grundlegende Bewertung des Layoutverständnisses](/de/docs/Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension)
