---
title: Object prototypes
slug: Learn/JavaScript/Objects/Object_prototypes
tags:
  - Anfänger
  - Beitrag
  - I10n:priority
  - JavaScript
  - Konstruktor
  - Lernen
  - OOJS
  - OOP
  - Objekt
  - Prototypen
  - Prototypketten
  - codescripting
  - create()
translation_of: Learn/JavaScript/Objects/Object_prototypes
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Objects/Object-oriented_JS", "Learn/JavaScript/Objects/Inheritance", "Learn/JavaScript/Objects")}}

Prototypen dienen als Mechanismus, durch den JavaScript-Objekte Eigenschaften voneinander erben. In diesem Artikel erklären wir, wie Prototypketten funktionieren und betrachten, wie die Prototypeneigenschaft verwendet werden kann, um Methoden zu bestehenden Konstruktoren hinzuzufügen.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Verständnis der Funktionen in JavaScript, sowie Vertrautheit mit den
          Grundlagen von JavaScript (siehe
          <a href="/de/docs/Learn/JavaScript/First_steps">erste Schritte</a> und
          <a href="/de/docs/Learn/JavaScript/Bausteine">Bausteine</a>) und
          OOJS-Grundlagen (siehe
          <a href="/de/docs/Learn/JavaScript/Objects/Basics"
            >Einführung in Objekte</a
          >).
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        JavaScript-Objekt-Prototypen zu verstehen, wie Prototypenketten
        funktionieren und wie man neue Methoden auf die Prototyp-Eigenschaft
        hinzufügt.
      </td>
    </tr>
  </tbody>
</table>

## Eine Prototyp-basierte Sprache?

JavaScript wird oft als eine **prototypische bzw. Prototyp-basierte Sprache** beschrieben - um Vererbung zu ermöglichen, können Objekte dazu ein **Prototyp-Objekt** haben, das als Vorlageobjekt fungiert, von dem es Methoden und Eigenschaften erbt. Das Prototyp-Objekt eines Objekts kann auch ein Prototyp-Objekt haben, von dem es Methoden und Eigenschaften erbt und so weiter. Dies wird oft als eine **Prototypenkette** bezeichnet und erklärt, warum verschiedene Objekte Eigenschaften und Methoden haben, die auf anderen Objekten definiert sind, die ihnen dadurch zur Verfügung stehen.

Genau gesagt basieren die Eigenschaften und Methoden auf den Prototyp-Eigenschaften der Konstruktorfunktionen der Objekte, nicht auf den Objektinstanzen selbst.

In JavaScript wird eine Verbindung zwischen der Objektinstanz und ihrem Prototyp hergestellt (seine `__proto__`-Eigenschaft, die von der Prototyp-Eigenschaft des Konstruktor abgeleitet ist). Die Eigenschaften und Methoden stammen aus der Kette der Prototypen (aufwärts der Prototypenkette folgend).

> **Note:** **Hinweis**: Es ist wichtig zu wissen, dass es einen Unterschied gibt zwischen dem Prototypen eines Objekts (das über `Object.getPrototypeOf(obj)` oder über die veraltete `__proto__`-Eigenschaft zur Verfügung gestellt wird) und der Prototyp-Eigenschaft von Konstruktorfunktionen. Erstere ist die Eigenschaft auf jeder Instanz, letztere ist die Eigenschaft auf dem Konstruktor. Das heißt, `Object.getPrototypeOf(new Foobar())` bezieht sich auf dasselbe Objekt wie `Foobar.prototype`.

Schauen wir uns ein Beispiel an, um dies etwas deutlicher zu machen.

## Verstehen von Prototyp-Objekten

An dieser Stelle gehen wir zu dem Beispiel zurück, an dem wir unsere Konstruktor-Funktion `Person()` fertig gestellt haben - bitte laden Sie das Beispiel in Ihrem Browser. Sie können dazu gerne auch unsere Beispieldatei [oojs-class-further-exercises.html](http://mdn.github.io/learning-area/javascript/oojs/introduction/oojs-class-further-exercises.html) nutzen ([hier finden Sie den Quellcode](https://github.com/mdn/learning-area/blob/master/javascript/oojs/introduction/oojs-class-further-exercises.html)), falls Ihnen der Quellcode aus dem vorangegangenen Artikel nicht mehr zur Verfügung steht.

In diesem Beispiel haben wir eine Konstruktorfunktion wie nachfolgend gezeigt definiert:

```js
function Person(first, last, age, gender, interests) {

  // property and method definitions
  this.name = {
    'first': first,
    'last' : last
  };
  this.age = age;
  this.gender = gender;
  //...see link in summary above for full definition
}
```

Wir haben dann davon eine Objektinstanz erzeugt, die wie folgt aussieht:

```js
let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
```

Wenn Sie in Ihre JavaScript-Konsole `person1.` eingeben, sollten Sie sehen können, das der Browser versucht, die Ausgabe der in dem Objekt verfügbaren Eigenschaften automatisch zu vervollständigen.

![](https://mdn.mozillademos.org/files/13853/object-available-members.png)

In dieser Liste können Sie die Eigenschaften sehen, die in der Konstruktor-Funktion `person()` definiert sind - `name`, `age`, `gender`, `interests`, `bio` und `greeting`. Sie werden jedoch auch einige andere Eigenschaften sehen können - `toString`, `valueOf` etc. - diese sind im Prototyp-Objekt der Konstruktor-Funktion `person()` definiert.

![](https://mdn.mozillademos.org/files/13891/MDN-Graphics-person-person-object-2.png)

Was passiert eigentlich, wenn man eine Methode auf `person1` ausführt, welche aktuell nur im Objekt definiert ist? Zum Beispiel:

```js
person1.valueOf()
```

Die Methode `Object.valueOf()` wird von `person1` geerbt, weil deren Konstruktor-Funktion `person()` ist und der Prototyp von `person()` gleich `Object()` ist. `valueOf()` gibt den Wert des Objekts zurück, dass die Methode aufruft - probieren Sie es aus und sehen selber! Was in diesem Fall passiert, sieht wie folgt aus:

- Der Browser prüft zunächst, ob für das `person1`-Objekt eine `valueOf()`-Methode verfügbar ist, wie sie in seinem Konstruktor `Person()` definiert ist.
- Wenn das nicht der Fall ist, prüft der Browser im Prototyp-Objekt des Konstruktors von `Person()`, nämlich `Object()`, ob in diesem eine Methode `valueOf()` verfügbar ist. Ist dem so, wird die Methode aufgerufen und alles läuft!

> **Note:** **Hinweis**: Wir möchten nochmals darauf hinweisen, dass die Methoden und Eigenschaften in der Prototypenkette nicht von einem Objekt auf ein anderes kopiert werden, sondern dass der Zugriff auf sie erfolgt, indem man in der Kette wie oben beschrieben nach oben geht.

> **Note:** **Hinweis**: Es gibt keine offizielle Möglichkeit, direkt auf das Prototyp-Objekt eines Objekts zuzugreifen - die "Links" zwischen den Elementen in der Kette sind in einer internen Eigenschaft definiert, die in der Spezifikation für die JavaScript-Sprache als \[\[prototype]] bezeichnet wird (siehe {{glossary("ECMAScript")}}). Die meisten modernen Browser verfügen jedoch über eine Eigenschaft namens `__proto__` (mit 2 Unterstrichen auf jeder Seite), die das Prototyp-Objekt des Konstruktors des betroffenen Objekts enthält. Geben Sie zum Beispiel `person1.__proto__` und `person1.__proto__.__proto__` in der JavaScript-Konsole ein, um zu sehen, wie die Kette im Code aussieht!Seit ECMAScript 2015 können Sie auf das Prototyp-Objekt eines Objekts indirekt über `Object.getPrototypeOf(obj)` zugreifen.

## Die Prototyp-Eigenschaft: Wo vererbte Mitglieder definiert sind

Wo sind also die vererbten Eigenschaften und Methoden definiert? Wenn Sie sich die [Referenzseite des Konstruktors object](/de/docs/Web/JavaScript/Reference/Global_Objects/Object) ansehen, sehen Sie auf der linken Seite eine große Anzahl von Eigenschaften und Methoden aufgelistet - viel mehr als die Anzahl der geerbten Eigenschaften, die wir auf dem `person1`-Objekt gesehen haben. Einige werden vererbt, andere nicht - warum ist das so?

Wie oben erwähnt sind die geerbten diejenigen, die auf der Prototyp-Eigenschaft (man könnte es einen Unter-Namensraum nennen) definiert sind - damit sind die Eigenschaften gemeint, die mit `Object.prototype`. beginnen und nicht die, die nur mit Object beginnen. Der Wert der Prototyp-Eigenschaft ist ein Objekt, das im Grunde ein Bereich zum Speichern von Eigenschaften und Methoden ist, die wir an Objekte weiter unten in der Prototyp-Kette vererben wollen.

Somit stehen [Object.prototype.toString()](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString), [Object.prototype.valueOf()](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) usw. für alle Objekttypen zur Verfügung, die von `Object.prototype` erben, einschließlich neuer Objektinstanzen, die vom `Person()`-Konstruktor erstellt werden.

[Object.is()](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/is), [Object.keys()](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) und andere Eigenschaften, die nicht innerhalb des Prototyp-Bereichs definiert sind, werden nicht von Objektinstanzen oder Objekttypen geerbt, die von `Object.prototype` erben. Sie sind Methoden/Eigenschaften, die nur auf dem `Object()`-Konstruktor selbst verfügbar sind.

> **Note:** **Hinweis**: Das mag ein wenig befremdlich wirken - wie können Sie eine Methode in einem Konstruktor definieren, wenn er selber eine Funktion ist? Eine Funktion ist ebenfalls eine Art Objekt - siehe auch auf der [Referenzseite des function()-Konstruktors](/de/docs/Web/JavaScript/Reference/Global_Objects/Function), damit Sie es besser nachvollziehen können.

1.  Sie können die vorhandenen Prototyp-Eigenschaften selbst überprüfen - gehen Sie zurück zu unserem vorherigen Beispiel und geben Sie folgendes in die JavaScript-Konsole ein:

    ```js
    Person.prototype
    ```

2.  Die Ausgabe wird Ihnen nicht sehr viel zeigen, da wir nichts im Prototyp unseres `Custom`-Konstruktors definiert haben! Standardmäßig startet der Prototyp eines Konstruktors immer leer. Versuchen Sie jetzt Folgendes:

    ```js
    Object.prototype
    ```

Sie werden eine große Anzahl von Methoden sehen, die in den Prototyp-Eigenschaften des Objekts (`Object`) definiert sind, die dann auf Objekten verfügbar sind, die von diesem Objekt (`Object)` erben, wie bereits gezeigt.

Sie werden weitere Beispiele für die Vererbung von Prototypenketten sehen, die in JavaScript verfügbar sind - versuchen Sie zum Beispiel, nach den Methoden und Eigenschaften zu suchen, die auf dem Prototyp der globalen Objekte [String](/de/docs/Web/JavaScript/Reference/Global_Objects/String), [Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date), [Number](/de/docs/Web/JavaScript/Reference/Global_Objects/Number) und [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) definiert sind. Diese haben alle eine Anzahl von Elementen, die auf ihrem Prototyp definiert sind, wie z.B. bei der Erstellung einer Zeichenfolge:

```js
let myString = 'This is my string.';
```

myString hat per se eine Reihe nützlicher Methoden zur Verfügung, wie [split()](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split), [indexOf()](/de/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf), [replace()](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace) usw.

> **Note:** **Hinweis**: Es lohnt sich unseren [ausführlicheren Leitfaden zur Verwendung von Prototypen in JavaScript](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) zu lesen, sobald Sie diesen Abschnitt verinnerlicht haben und mehr wissen möchten. Dieser Abschnitt ist absichtlich stark vereinfacht, um diese Konzepte bei der ersten Begegnung für Sie etwas leichter verständlich zu machen.

> **Warning:** **Wichtig:** Die Prototyp-Eigenschaft ist einer der Teile von JavaScript, die stark verwirrend benannt worden sind - man könnte meinen, dass `this` auf das Prototyp-Objekt des aktuellen Objekts zeigt, aber das tut sie nicht. `prototype` ist ein internes Objekt, auf das mit `__proto__` zugegriffen werden kann, erinnern Sie sich?

## Zurück zu create()

Etwas früher im Beitrag haben wir gezeigt, wie die Methode [Object.create()](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/create) verwendet werden kann, um eine neue Objektinstanz zu erzeugen.

1.  Geben Sie folgendes in der JavaScript-Konsole Ihres vorherigen Beispiels ein:

    ```js
    let person2 = Object.create(person1);
    ```

2.  Was `create()` tatsächlich tut, ist lediglich ein neues Objekt aus einem spezifizierten Prototyp-Objekt zu erstellen. Hier wird `person2` erstellt indem `person1` als Prototyp Objekt verwendet wird. Man kann das überprüfen indem man das folgende in der Konsole eingibt:

    ```js
    person2.__proto__
    ```

Dies wird das `person1`-Objekt zurückgeben.

## Die Konstruktor-Eigenschaft

Jede Konstruktorfunktion hat eine Prototyp-Eigenschaft, deren Wert ein Objekt ist, das eine [constructor](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)-Eigenschaft enthält. Diese Konstruktoreigenschaft zeigt auf die ursprüngliche Konstruktorfunktion. Wie Sie im nächsten Abschnitt sehen werden, werden Eigenschaften, die auf der `Person.prototype`-Eigenschaft (oder im Allgemeinen auf der Prototyp-Eigenschaft einer Konstruktorfunktion, die ein Objekt ist, wie im obigen Abschnitt erwähnt) definiert sind, für alle Instanzobjekte verfügbar, die mit dem `Person()`-Konstruktor erstellt werden. Daher ist die Konstruktor-Eigenschaft auch für die beiden Objekte `Person1` und `Person2` verfügbar.

1.  Probieren Sie zum Beispiel diese Befehle in der Konsole aus:

    ```js
    person1.constructor
    person2.constructor
    ```

    Diese sollten beide den `Person()`-Konstruktor zurückgeben, da dieser die ursprüngliche Definition dieser Instanzen enthält.

    Ein cleverer Trick ist es, dass Sie am Ende der `constructor`-Eigenschaft Klammern setzen können (die alle erforderlichen Parameter enthalten), um eine weitere Objektinstanz aus diesem Konstruktor zu erzeugen. Der Konstruktor ist schließlich eine Funktion und kann daher mit Hilfe von Klammern aufgerufen werden; Sie müssen nur das neue Schlüsselwort einfügen, um anzugeben, dass Sie die Funktion als Konstruktor verwenden wollen.

2.  Geben Sie folgendes in die Konsole ein:

    ```js
    let person3 = new person1.constructor('Karen', 'Stephenson', 26, 'female', ['playing drums', 'mountain climbing']);
    ```

3.  Nun können Sie zum Beispiel auf die Funktionen Ihres neuen Objekts zuzugreifen:

    ```js
    person3.name.first
    person3.age
    person3.bio()
    ```

Das funktioniert gut. Sie werden es nicht oft benutzen müssen, aber es kann wirklich nützlich sein, wenn Sie eine neue Instanz erzeugen wollen und aus irgendeinem Grund keine Referenz auf den Originalkonstruktor leicht verfügbar ist.

Die `constructor`-Eigenschaft hat andere Verwendungsmöglichkeiten. Wenn Sie z.B. eine Objektinstanz haben und den Namen des Konstruktors zurückgeben wollen, von dem das Objekt eine Instanz ist, können Sie Folgendes verwenden:

```js
instanceName.constructor.name
```

Geben Sie zum Beispiel folgendes ein:

```js
person1.constructor.name
```

> **Note:** Hinweis: Der Wert von `constructor.name` kann sich ändern (aufgrund von prototypischer Vererbung, Bindung, Präprozessoren, Transpilern, etc.), so dass Sie für komplexere Beispiele stattdessen den `instanceof`-Operator verwenden sollten.

## Prototypen modifizieren

Schauen wir uns ein Beispiel für die Veränderung der Prototyp-Eigenschaft einer Konstruktor-Funktion näher an - Methoden, die dem Prototyp hinzugefügt werden, sind dann auf allen Objektinstanzen verfügbar, die aus dem Konstruktor heraus erzeugt werden. An diesem Punkt werden wir schließlich etwas zum Prototyp unseres Konstruktors `Person()` hinzufügen.

1.  Gehen Sie zurück zu unserem Beispiel [oojs-class-further-exercises.html](http://mdn.github.io/learning-area/javascript/oojs/introduction/oojs-class-further-exercises.html) und erstellen Sie eine lokale Kopie des [Quellcodes](https://github.com/mdn/learning-area/blob/master/javascript/oojs/introduction/oojs-class-further-exercises.html). Fügen Sie unter dem vorhandenen JavaScript den folgenden Code hinzu, der eine neue Methode zur Prototyp-Eigenschaft des Konstruktors hinzufügt:

    ```js
    Person.prototype.farewell = function() {
      alert(this.name.first + ' has left the building. Bye for now!');
    };
    ```

2.  Speichern Sie bitte den Code, laden den Browser neu und geben bitte folgendes in die Konsole ein:

    ```js
    person1.farewell();
    ```

Sie sollten eine Warnmeldung erhalten, die den Namen der Person, wie er im Konstruktor definiert ist, anzeigt. Das ist wirklich nützlich, aber noch nützlicher ist, dass die gesamte Vererbungskette dynamisch aktualisiert wurde, wodurch diese neue Methode automatisch auf allen vom Konstruktor abgeleiteten Objektinstanzen verfügbar ist.

Denken Sie einen Moment in Ruhe darüber nach. In unserem Code definieren wir den Konstruktor, dann erzeugen wir ein Instanzobjekt aus dem Konstruktor, dann fügen wir dem Prototypen des Konstruktors eine neue Methode hinzu:

```js
function Person(first, last, age, gender, interests) {

  // Definition der Eigenschaften und methoden

}

let person1 = new Person('Tammi', 'Smith', 32, 'neutral', ['music', 'skiing', 'kickboxing']);

Person.prototype.farewell = function() {
  alert(this.name.first + ' has left the building. Bye for now!');
};
```

Aber die Methode `farewell()` ist immer noch auf der `person1`-Objektinstanz verfügbar - ihre Mitglieder wurden automatisch aktualisiert, um die neu definierte Methode `farewell()` aufzunehmen.

> **Note:** Hinweis: Sie können dazu gerne auch unsere Beispieldatei [oojs-class-further-exercises.html](http://mdn.github.io/learning-area/javascript/oojs/introduction/oojs-class-further-exercises.html) nutzen ([hier finden Sie den Quellcode](https://github.com/mdn/learning-area/blob/master/javascript/oojs/introduction/oojs-class-further-exercises.html)), falls Ihnen der Quellcode aus dem vorangegangenen Artikel nicht mehr zur Verfügung steht bzw. Ihr Quellcode nicht funktioniert.

Sie werden nur selten Eigenschaften sehen, die auf der Prototyp-Eigenschaft definiert sind, weil sie nicht sehr flexibel sind, wenn sie so definiert worden. Sie könnten zum Beispiel eine solche Eigenschaft hinzufügen:

```js
Person.prototype.fullName = 'Bob Smith';
```

Das ist nicht sehr flexibel, da die Person vielleicht nicht so genannt wird. Es wäre viel besser, den vollen Namen aus `name.first` und `name.last` zu bilden:

```js
Person.prototype.fullName = this.name.first + ' ' + this.name.last;
```

Dies funktioniert jedoch nicht, da sich `this` in diesem Fall auf den globalen Bereich bezieht, nicht auf den Funktionsbereich. Der Aufruf dieser Eigenschaft würde `undefined` zurückgeben. Dies funktionierte gut auf die Methode, die wir früher im Prototyp definiert haben, weil sie innerhalb eines Funktionsbereichs sitzt, der erfolgreich in den Objektinstanzbereich übertragen wird. Sie können also konstante Eigenschaften auf dem Prototyp definieren (d.h. solche, die sich nie ändern müssen), aber im allgemeinen funktioniert es besser, Eigenschaften innerhalb des Konstruktors zu definieren.

In der Tat ist es üblich, für weitere Objektdefinitionen die Eigenschaften innerhalb des Konstruktors und die Methoden auf dem Prototyp zu definieren. Dies macht den Code leichter lesbar, da der Konstruktor nur die Eigenschaftsdefinitionen enthält und die Methoden in separate Blöcke aufgeteilt sind. Zum Beispiel:

```js
// Konstruktor mit der Definition der Eigenschaften

function Test(a, b, c, d) {
  // property definitions
}

// eine erste Methode wird definiert

Test.prototype.x = function() { ... };

// eine zweite Methode wird definiert

Test.prototype.y = function() { ... };

// etc.
```

Dieses Muster kann in Aktion im Beispiel der [Schulplan-App von Piotr Zalewa](https://github.com/zalun/school-plan-app/blob/master/stage9/js/index.js) gesehen werden.

## Zusammenfassung

Dieser Beitrag hat Objekt-Prototypen in JavaScript behandelt, einschließlich wie Prototyp-Objektketten es ermöglichen, das Objekte voneinander Funktionen (ver)erben können, sowie Prototyp-Eigenschaften und wie diese verwendet werden können, um neue Methoden zu Konstruktoren hinzuzufügen. Darüber hinaus andere mit den Themen verwandte Themen.

Im nächsten Artikel sehen wir uns an, wie Sie die Vererbung von Funktionalität zwischen zwei Ihrer eigenen benutzerdefinierten Objekte implementieren können.

{{PreviousMenuNext("Learn/JavaScript/Objects/Object-oriented_JS", "Learn/JavaScript/Objects/Inheritance", "Learn/JavaScript/Objects")}}

## In diesem Modul

- [Objekt Grundlagen](/de/docs/Learn/JavaScript/Objects/Basics)
- [Objektorientiertes JavaScript für Anfänger](/de/docs/Learn/JavaScript/Objects/Object-oriented_JS)
- [Objekt Prototypen](/de/docs/Learn/JavaScript/Objects/Object_prototypes)
- [Vererbung in JavaScript](/de/docs/Learn/JavaScript/Objects/Inheritance)
- [Mit JSON Daten arbeiten](/de/docs/Learn/JavaScript/Objects/JSON)
- [Objekterstellungsübungen](/de/docs/Learn/JavaScript/Objects/Object_building_practice)
- [Funktionalität zu unserer Hüpfball Demo hinzufügen](/de/docs/Learn/JavaScript/Objects/Adding_bouncing_balls_features)
