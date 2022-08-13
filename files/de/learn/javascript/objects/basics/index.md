---
title: JavaScript object basics
slug: Learn/JavaScript/Objects/Basics
translation_of: Learn/JavaScript/Objects/Basics
---
{{LearnSidebar}}{{NextMenu("Learn/JavaScript/Objects/Object-oriented_JS", "Learn/JavaScript/Objects")}}

In diesem Artikel betrachten wir die fundamentale **JavaScript Objekt Syntax** und betrachten erneut einige JavaScript-Funktionalitäten, die im Kursverlauf bereits betrachtet wurden, immer im Hinblick darauf, dass viele der Merkmale, mit denen Sie bereits zu tun hatten, Objekte sind.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Vorkenntnisse:</th>
      <td>
        Grundlegende Computerkenntnisse, ein grundlegendes Verständnis von HTML
        und CSS, Vertrautheit mit JavaScript Grundlagen (siehe
        <a href="/en-US/docs/Learn/JavaScript/First_steps">Erste Schritte</a>
        und
        <a href="/en-US/docs/Learn/JavaScript/Building_blocks">Bausteine</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verständnis für die grundlegende Theorie zur objektorientierten
        Programmierung, wie dies mit JavaScript zusammenhängt ("fast alle Dinge
        sind Objekte") und wie man mit JavaScript-Objekten zu arbeiten beginnt.
      </td>
    </tr>
  </tbody>
</table>

## Objekt Grundlagen

Ein Objekt ist eine Sammlung von zusammenhängenden Daten und/oder Funktionalitäten. Diese bestehen üblicherweise aus verschiedenen Variablen und Funktionen, die Eigenschaften und Methoden genannt werden, wenn sie sich innerhalb von Objekten befinden. Arbeiten wir ein Beispiel durch, um besser zu verstehen, wie ein Objekt aussieht.

Für den Anfang erzeugen wir eine lokale Kopie unserer Datei [oojs.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/introduction/oojs.html). Sie enthält nur sehr wenig - ein {{HTMLElement("script")}} Element, um unseren Quelltext einzufügen. Wir werden diese Datei bzw. dieses Beispiel als Basis nutzen, um die grundlegende Objektsyntax zu erforschen. Während der Arbeit an diesem Beispiel sollten Sie ihre [developer tools JavaScript console](/de/docs/Learn/Common_questions/What_are_browser_developer_tools#The_JavaScript_console) (z.B. Browser-Entwicklerwerkzeuge) geöffnet haben und bereit sein, einige Befehle einzutippen.

Wie mit vielen Dingen in JavaScript beginnt das Erzeugen eines Objekts häufig mit der Definition und Initialisierung einer Variablen. Versuchen Sie, folgendes unterhalb des bestehenden JavaScript Quelltextes einzugeben, dann abzuspeichern und einen Browser refresh durchzuführen:

```js
var person = {};
```

Wenn Sie `person` in ihrer JS console eingeben und die Entertaste drücken, sollten Sie folgendes Resultat erhalten:

```js
[object Object]
```

Glückwunsch, Sie haben gerade ihr erstes Objekt erzeugt. Aufgabe erledigt! Aber dies ist ein leeres Objekt, also können wir noch nicht viel damit anfangen. Lassen sie uns unser Objekt erweitern, damit es folgendermaßen aussieht:

```js
var person = {
  name: ['Bob', 'Smith'],
  age: 32,
  gender: 'male',
  interests: ['music', 'skiing'],
  bio: function() {
    alert(this.name[0] + ' ' + this.name[1] +
    ' is ' + this.age + ' years old. He likes ' +
    this.interests[0] + ' and ' + this.interests[1] + '.');
  },
  greeting: function() {
    alert('Hi! I\'m ' + this.name[0] + '.');
  }
};
```

Nach dem Abspeichern und Aktualisieren des Browsers versuchen Sie, etwas vom Folgenden in der JavaScript-Konsole ihrer Browser Entwicklerwerkzeuge einzugeben:

```js
person.name
person.name[0]
person.age
person.interests[1]
person.bio()
person.greeting()
```

Sie haben nun einige Daten und Funktionen innerhalb ihres Objekts und sind in der Lage, mit recht einfacher Syntax darauf zuzugreifen!

> **Note:** **Notiz**: Wenn Sie Schwierigkeiten damit haben, dies zum Funktionieren zu bringen, versuchen Sie, Ihren Code mit unserer Version zu vergleichen - siehe [oojs-finished.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/introduction/oojs-finished.html) (zzgl. [see it running live](http://mdn.github.io/learning-area/javascript/oojs/introduction/oojs-finished.html)). Die Live Version wird eine leere Anzeige erzeugen - das ist so in Ordnung - öffnen Sie erneut die Entwicklerwerkzeuge \[Mozilla Firefox: F12 -> Konsole] und versuchen Sie, die obigen Befehle einzugeben um die Objektstruktur zu betrachten.

Was passiert hier? Ein Objekt besteht aus vielen Elementen (engl. "Members", Anm. d. Übersetzers). Davon hat jedes einen Namen (z.B. `name` und `age`, wie oben) und einen Wert ( z.B. `['Bob', 'Smith' ]` und `32`). Jedes Name-Wert-Paar muss durch ein Komma getrennt sein und die jeweiligen Namen und Werte werden jeweils durch einen Doppelpunkt aufgeteilt. Die Syntax folgt stets diesem Muster:

```js
var objectName = {
  member1Name: member1Value,
  member2Name: member2Value,
  member3Name: member3Value
};
```

Der Wert eines Objekt-Elements kann so ziemlich alles sein - in unserem `person`-Objekt haben wir einen String, eine Zahl, zwei Arrays und zwei Funktionen. Die ersten vier Elemente sind Datansätze und werden als Objekteigenschaften bezeichnet. Die letzten beiden Elemente sind Funktionen die es dem Objekt ermöglichen, etwas mit den Daten zu tun und werden als **Methoden** des Objekts bezeichnet.

Ein Objekt wie dieses bezeichnet man als **Objektliteral** — wir haben die Inhalte des Objekts wortwörtlich aufgeschrieben, als wir es erzeugt haben. Dies steht im Gegensatz zu solchen Objekten, die aus Klassen instanziert werden, welche wir später genauer betrachten werden.

Es ist durchaus üblich ein Objekt unter Verwendung eines Objektliterals zu erzeugen, wenn man eine Reihe von strukturierten, zusammenhängenden Datensätzen auf gewisse Weise übertragen möchte. Zum Beispiel beim Senden einer Anfrage an einen Server, um diese in einer Datenbank abzuspeichern. Ein einzelnes Objekt zu senden ist viel effizienter, als viele Datensätze einzeln und darüber hinaus ist es einfacher, mit einem Array zu arbeiten, wenn man einzelne Datensätze anhand ihres Namens identifizieren möchte.

## Punktnotation

Oben haben Sie auf die Eigenschaften und Methoden des Objektes mittels Punktnotation zugegriffen. **Der Objektbezeichner `person` dient als **Namensraum** - dieser muss zuerst angegeben werden, um auf etwas zuzugreifen, das innerhalb des Objektes **eingekapselt** ist. Als nächstes folgt der Punkt und anschließend der Bestandteil, auf den Sie zugreifen wollen - dies kann der Name einer einfachen Eigenschaft sein, ein Element einer Arrayeigenschaft oder der Aufruf einer der **Objektmethoden**, zum Beispiel:

```js
person.age
person.interests[1]
person.bio()
```

### Sub-Namensräume

Es ist sogar möglich, den Wert eines Objekt-Members zu einem anderen Objekt umzuwandeln.

Versuchen Sie zum Beispiel, den "name" Member von

```js
name: ['Bob', 'Smith'],
```

zu

```js
name : {
  first: 'Bob',
  last: 'Smith'
},
```

zu ändern. Hier erzeugen wir effektiv einen Sub-Namensraum. Das hört sich kompliziert an, ist es aber nicht - um auf diese Inhalte zuzugreifen, müssen Sie bloß den zusätzlichen Namensraum, getrennt durch einen Punkt, hinzufügen. Versuchen Sie folgendes in der JS Konsole:

```js
person.name.first
person.name.last
```

**Wichtig**: An diesem Punkt müssen Sie ihre Methodendeklarationen umarbeiten und Instanzen von

```js
name[0]
name[1]
```

zu

```js
name.first
name.last
```

ändern. Sonst greifen die Methoden ins Leere.

## Klammer-Notation

Es gibt einen weiteren Weg, auf Objekteigenschaften zuzugreifen - durch Benutzung der Klammern-Notation. Statt dies zu schreiben:

```js
person.age
person.name.first
```

Schreibt man:

```js
person['age']
person['name']['first']
```

Dies gleicht der Art wie man auf Arrayelemente zugreift und ist im Grunde der gleiche Vorgang - statt einen Index zu nutzen, um ein Element auszuwählen, benutzt man den den Namen der mit jedem Memberwert assoziiert wird. Es wundert daher nicht, dass Objekte manchmal **assoziative Arrays** genannt werden - sie verknüpfen Zeichenketten mit Werten in der gleichen Weise, wie ein Array Indizes mit Werten verknüpft.

## Wertzuweisungen an Objekt-Elemente

Bisher haben wir nur betrachtet, wie man Objekt-Elemente abruft ( getting ) — man kann den Wert von Objektelementen auch setzen ( updating ), indem man das Element, welches gesetzt werden soll, folgendermaßen deklariert:

```js
person.age = 45;
person['name']['last'] = 'Cratchit';
```

Versuchen Sie, die Zeilen wie oben aufgeführt einzugeben und dann die Elemente wieder abzurufen, etwa so:

```js
person.age
person['name']['last']
```

Zuweisungen hören nicht beim Ändern von Werten existierender Eigenschaften und Methoden auf, man kann auch völlig neue Elemente erzeugen. Versuchen Sie dies in der JS Konsole:

```js
person['eyes'] = 'hazel';
person.farewell = function() { alert("Bye everybody!"); }
```

Sie können diese neuen Elemente nun ausprobieren:

```js
person['eyes']
person.farewell()
```

Ein nützlicher Aspekt der Klammer-Notation ist jener, dass man nicht nur Elementwerte dynamisch zuweisen kann, sondern auch Elementnamen. Nehmen wir an, wir wollen es Usern ermöglichen, selbstdefinierte Wertetypen in ihren `people`-Daten zu speichern, indem sie den Elementnamen und Wert in zwei Textfeldern eingeben. Wir könnten diese Werte so abrufen:

```js
var myDataName = nameInput.value;
var myDataValue = nameValue.value;
```

dann könnten wir diesen neuen Elementnamen und Wert zum `person`-Objekt so hinzufügen:

```js
person[myDataName] = myDataValue;
```

Um das auszuprobieren, versuchen Sie, folgendes in ihren Quelltext einzufügen, gleich unterhalb der schliessenden, geschweiften Klammer des `person`-Objekts:

```js
var myDataName = 'height';
var myDataValue = '1.75m';
person[myDataName] = myDataValue;
```

Nach dem Abspeichern und einem Browser-Refresh geben Sie folgendes in der Konsole ein:

```js
person.height
```

Eine Eigenschaft zu einem Objekt hinzuzufügen ist mit der Punkt-Notation nicht möglich. Diese akzeptiert nur einen literalen Elementnamen, keine Variable, die auf einen Namen zeigt.

## Was bedeutet "this"?

Sie haben vielleicht schon etwas seltsames in unseren Methoden bemerkt. Sehen wir uns zum Beispiel folgendes genauer an:

```js
greeting: function() {
  alert('Hi! I\'m ' + this.name.first + '.');
}
```

Sie wundern sich wahrscheinlich, was dieses "this" sein soll. Das Schlüsselwort `this` referenziert das derzeitige Objekt, in dem der Code hineingeschrieben wurde - in diesem Fall wäre `this` gleichbedeutend mit `person`. Also warum nicht einfach stattdessen `person` schreiben? Wie Sie im Artikel [Object-oriented JavaScript for beginners](/de/docs/Learn/JavaScript/Objects/Object-oriented_JS) sehen werden, wenn wir damit beginnen, z.B. Konstruktoren zu erzeugen usw.: `this` ist sehr nützlich - es wird immer sicherstellen, dass die korrekten Werte verwendet werden, wenn sich der Kontext eines Elementes ändert (z.B. zwei unterschiedliche Objektinstanzen von `person` haben andere Namenswerte und sollten folgerichtig ihren jeweiligen Namenswert verwenden, wenn die greeting Methode aufgerufen wird).

Lassen Sie uns dies an einem vereinfachten Paar Objekten vom Typ `person` verdeutlichen:

```js
var person1 = {
  name: 'Chris',
  greeting: function() {
    alert('Hi! I\'m ' + this.name + '.');
  }
}

var person2 = {
  name: 'Brian',
  greeting: function() {
    alert('Hi! I\'m ' + this.name + '.');
  }
}
```

In diesem Fall wird `person1.greeting()` "Hi! I'm Chris." ausgeben; `person2.greeting()` wiederum wird "Hi! I'm Brian." ausgeben, obwohl der Quelltext in jedem Fall genau gleich lautet. Wie schon gesagt, `this` ist gleichbedeutend mit dem Objekt, in dem sich der Quelltext befindet - das ist nicht sehr nützlich, wenn man Objektliterale händisch schreibt, aber es ist sehr hilfreich, sobald Objekte dynamisch erzeugt werden (zum Beispiel unter Verwendung von Konstruktoren). Es wird im weiteren Verlauf alles deutlich werden.

## Sie haben die ganze Zeit Objekte verwendet

Als Sie diese Beispiele durchgegangen sind, haben Sie wahrscheinlich gedacht, dass die Punktnotation, die Sie verwendet haben, sehr vertraut scheint. Es liegt daran, dass Sie diese im gesamten Kursverlauf benutzt haben. Jedes Mal, wenn wir ein Beispiel behandelten, welches Teile des built-in Browser API oder JavaScript-Objekte verwendete, haben wir Objekte verwendet, da solche Funktionalitäten genau mit der gleichen Art von Objektstrukturen aufgebaut werden, wie wir sie hier betrachtet haben. Diese sind allerdings etwas komplexer als die unserer eigenen, einfachen Beispiele.

Wenn Sie String-Methoden wie diese verwenden,

```js
myString.split(',');
```

haben Sie eine Methode verwendet, die eine Instanz der `String`-Klasse zur Verfügung stellte. Jedes Mal, wenn Sie einen String in ihrem Quelltext erstellen, wir dieser String automatisch als eine Instanz von `String` erzeugt, dadurch stehen einige allgemeine Methoden und Eigenschaften zur Verfügung.

Wenn Sie im DOM folgende Zeilen verwenden,

```js
var myDiv = document.createElement('div');
var myVideo = document.querySelector('video');
```

haben Sie Methoden verwendet, die von einer Instanz der Klasse [`Document`](/en-US/docs/Web/API/Document) zur Verfügung gestellt wurden. Für jede geladene Webseite wird eine Instanz von `Document` erzeugt, die `document` genannt wird, welche die gesamte Struktur, den Inhalt und weitere Merkmale wie die URL repräsentiert. Dies bedeutet wiederum, dass einige allgemeine Methoden und Eigenschaften entsprechend verfügbar gemacht werden.

Das gleiche gilt für so ziemlich jedes andere built-in Objekt/API, welches Sie benutzt haben — z.B. [`Array`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), [`Math`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math), usw.

Beachten Sie, dass built-in Objekte/APIs nicht zwangsläufig immer automatisch eine Objektinstanz erzeugen. Ein Beispiel, die [Notifications API](/de/docs/Web/API/Notifications_API) — welche es modernen Browsern erlaubt, System Notifikationen zu generieren — benötigt für jede zu sendende Notifikation eine neue Objektinstanz, die Sie durch Verwendung des Konstruktors erzeugen müssen. Versuchen Sie, folgendes in Ihrer JavaScript Konsole einzugeben:

```js
var myNotification = new Notification('Hello!');
```

Konstruktoren werden wir in einem späteren Artikel detaillierter behandeln.

> **Note:** **Bemerkung**: Es ist nützlich, sich die Art, wie Objekte kommunizieren, als **Nachrichtenweitergabe** vorzustellen — wenn ein Objekt die Ausführung einer Aktion von einem anderen Objekt benötigt, wird es meist eine Nachricht an dieses Objekt mittels einer seiner Methoden senden und auf eine Antwort warten, welche wir als Rückgabewert bezeichnen.

## Zusammenfassung

Glückwunsch, Sie haben das Ende unseres ersten JS Objekt Artikels erreicht —Sie sollten nun eine gute Vorstellung davon haben, wie man mit Objekten in JavaScript arbeitet — einschließlich der Erzeugung von eigenen, einfachen Objekte. Sie sollten auch zu schätzen wissen, dass Objekte als Daten- und Funktionsspeicherstrukturen sehr nützlich sind — wenn Sie versuchen würden, alle Eigenschaften und Methoden in unserem `person`-Objekt als einzelne Variablen bzw. Funktionen nachzuverfolgen, wäre das sehr ineffizient und frustrierend und wir würden riskieren, das gleichnamige Variablen kollidieren. Objekte lassen uns Informationen gefahrlos und sicher in ihrem jeweils eigenen Paket verstauen.

Im nächsten Artikel werden wir damit beginnen, uns die Theorie der objektorientierten Programmierung (OOP) anzusehen und wie solche Techniken in JavaScript umgesetzt werden können.

{{NextMenu("Learn/JavaScript/Objects/Object-oriented_JS", "Learn/JavaScript/Objects")}}

## In diesem Modul

- [Objekt Grundlagen](/de/docs/Learn/JavaScript/Objects/Basics)
- [Objektorientiertes JavaScript für Anfänger](/de/docs/Learn/JavaScript/Objects/Object-oriented_JS)
- [Objekt Prototypen](/de/docs/Learn/JavaScript/Objects/Object_prototypes)
- [Vererbung in JavaScript](/de/docs/Learn/JavaScript/Objects/Inheritance)
- [Mit JSON Daten arbeiten](/de/docs/Learn/JavaScript/Objects/JSON)
- [Objekterstellungsübungen](/de/docs/Learn/JavaScript/Objects/Object_building_practice)
- [Funktionalität zu unserer Hüpfball Demo hinzufügen](/de/docs/Learn/JavaScript/Objects/Adding_bouncing_balls_features)
