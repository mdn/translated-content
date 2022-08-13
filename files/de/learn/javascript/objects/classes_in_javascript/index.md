---
title: Objektorientiertes JavaScript für Beginner
slug: Learn/JavaScript/Objects/Classes_in_JavaScript
tags:
  - Anfänger
  - Artikel
  - Erstellen
  - Erzeugen
  - Instanzen
  - JavaScript
  - Konstruktor
  - Lernen
  - OOJS
  - OOP
  - Objekt
  - Objektorientiert
  - codescripting
translation_of: Learn/JavaScript/Objects/Object-oriented_JS
original_slug: Learn/JavaScript/Objects/Object-oriented_JS
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Objects/Basics", "Learn/JavaScript/Objects/Object_prototypes", "Learn/JavaScript/Objects")}}

Mit den nun bereits erlangten Grundlagen werden wir uns jetzt auf objektorientiertes JavaScript (OOJS) konzentrieren - dieser Artikel vermittelt Grundlagen der Theorie der objektorientierten Programmierung (OOP). Anschließend wird näher betrachtet, wie JavaScript Objektklassen über Konstruktor-Funktionen emuliert und wie Objekt-Instanzen erzeugt werden.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Grundlegende Computerkenntnisse, ein grundlegendes Verständnis von
          HTML und CSS, Vertrautheit mit den Grundlagen von JavaScript (siehe
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
        Die grundlegende Theorie hinter der objektorientierten Programmierung
        und wie diese in JavaScript umgesetzt ist ("alles ist ein Objekt") zu
        verstehen, und wie man Konstruktoren und Objektinstanzen erstellt.
      </td>
    </tr>
  </tbody>
</table>

## Objektorientierte Programmierung - Grundlagen

Um zu beginnen möchten wir Ihnen eine vereinfachende und umfangreiche Übersicht darüber geben, was objektorientierte Programmierung (OOP) ist. Wir sagen vereinfachend, weil OOP schnell sehr kompliziert werden kann und an dieser Stelle eine vollständige Einführung sehr wahrscheinlich mehr verwirren als helfen würde. Die Grundidee von OOP ist, dass wir Objekte verwenden, um Dinge aus der realen Welt zu modellieren, die wir in unseren Programmen abbilden wollen und/oder eine einfache Möglichkeit bieten möchten, auf Funktionen zuzugreifen, die sonst nur schwer oder gar nicht genutzt werden könnten.

Objekte können in Beziehung stehende Daten und Code enthalten, die Informationen über die Sache darstellen, die Sie modellieren möchten, sowie Funktionalitäten bzw. Verhalten, die Sie erhalten bzw. bereitstellen möchten. Objektdaten (und oft auch Funktionen) können geordnet (das Fachwort dafür lautet "gekapselt") innerhalb eines Objektpakets gespeichert werden (dem ein bestimmter Name gegeben werden kann, auf den man sich beziehen kann, der manchmal auch "Namensraum" genannt wird), wodurch es leicht strukturiert und zugänglich wird. Objekte werden auch häufig als Datenspeicher verwendet, die einfach über das Netzwerk gesendet werden können.

### Definieren einer Objektvorlage

Betrachten wir ein einfaches Programm, das Informationen über die Schüler und Lehrer einer Schule anzeigt. Hier betrachten wir die OOP-Theorie im Allgemeinen, nicht im Zusammenhang mit einer bestimmten Programmiersprache.

Um damit zu beginnen, könnten wir zu unserem `person`-Objekt aus dem vorhergehenden Kapitel zurückkehren, in dem wir Informationen und Funktionalitäten einer Person definiert hatten. Es gibt viele Dinge, die man über eine Person wissen kann (ihre Adresse, Größe, Schuhgröße, DNA-Profil, Ausweisnummer, signifikante Persönlichkeitsmerkmale ...), aber in diesem Fall sind wir nur daran interessiert, ihren Namen, ihr Alter, ihr Geschlecht und ihre Interessen zu betrachten. Und wir wollen auch in der Lage sein, eine kurze Erläuterung über sie auf der Grundlage dieser Daten zu schreiben und sie dazu zu bringen, "Hallo" zu sagen. Dies wird als "Abstraktion" bezeichnet - ein einfaches Modell einer komplexeren Sache wird erstellt, das die wichtigsten Aspekte in einer Weise darstellt, die für die Zwecke unseres Programms leicht zu bearbeiten sind.

![](https://mdn.mozillademos.org/files/13889/person-diagram.png)

### Erstellen von realen Objekten

Von unserer Klasse können wir Objektinstanzen erstellen - Objekte die Informationen und Funktionalitäten enthalten, die in der Klasse definiert worden. Von unserer Klasse `person` können wir nun einige tatsächliche Personen erzeugen:

![](https://mdn.mozillademos.org/files/15163/MDN-Graphics-instantiation-2-fixed.png)

Wenn eine Objektinstanz aus einer Klasse erzeugt wurde, wird die Konstruktorfunktion der Klasse ausgeführt, um die Objektinstanz zu erzeugen. Dieser Vorgang der Erzeugung einer Objektinstanz aus einer Klasse wird als Instanziierung bezeichnet - die Objektinstanz wird von der Klasse aus instanziiert.

### Spezialisierte Klassen

In diesem Fall wollen wir keine allgemeinen Leute - wir wollen Lehrer und Schüler, die beide spezifischere Typen von Menschen sind. In OOP können wir neue Klassen erstellen, die auf anderen Klassen basieren - diese neuen Unterklassen können die Daten- und Funktionalitäten ihrer Elternklasse erben, so dass Sie die Funktionalitäten, die allen Objekttypen gemeinsam ist, wiederverwenden können, anstatt sie duplizieren zu müssen. Da wo sich Funktionalitäten zwischen den Klassen unterscheiden soll, können bei Bedarf spezialisierte Features direkt in den betroffenen Klassen entsprechend definieren.

![](https://mdn.mozillademos.org/files/13881/MDN-Graphics-inherited-3.png)

Das ist wirklich sehr nützlich - Lehrer und Schüler haben viele gemeinsame Merkmale wie Name, Geschlecht und Alter, so dass es praktisch ist, diese Merkmale nur einmal zu definieren. Sie können dasselbe Merkmal auch separat in verschiedenen Klassen definieren, da jede Definition dieses Merkmals in einem anderen Namensraum liegt. Die Begrüßung eines Schülers könnte z.B. die Form "Yo, ich bin `firstName`" haben (z.B. Yo, ich bin Sam), während ein Lehrer etwas formelleres verwenden könnte, wie z.B. "Hallo, mein Name ist `prefix` `lastName` und ich unterrichte `Subject`". (z.B. Hallo, ich heiße Mr. Griffiths und unterrichte Chemie).

> **Hinweis:** Das Fachwort für die Fähigkeit, mehrere Objekttypen mit der gleichen Funktionalität zu implementieren, nennt man Polymorphismus. Nur für den Fall, dass Sie sich das fragen.

Sie können nun Objektinstanzen aus Ihren Unterklassen erzeugen. Beispiel:

![](https://mdn.mozillademos.org/files/13885/MDN-Graphics-instantiation-teacher-3.png)

Im weiteren Verlauf dieses Kapitels werden wir uns damit beschäftigen, wie die OOP-Theorie in JavaScript in die Praxis umgesetzt werden kann.

## Konstruktoren und Objektinstanzen

JavaScript verwendet spezielle Funktionen, die "Konstruktor-Funktionen" genannt werden, um Objekte und deren Eigenschaften zu definieren und zu initialisieren. Sie sind nützlich, weil Sie oft auf Situationen stoßen werden, in denen Sie nicht wissen, wie viele Objekte Sie erstellen werden müssen. Konstruktoren bieten die Möglichkeit, so viele Objekte wie nötig auf einfache und effektive Weise zu erstellen, indem sie alle erforderlichen Daten und Funktionen an diese Objekte anhängen.

Lassen Sie uns nun das Erstellen von Klassen über Konstruktoren und das Erstellen von Objektinstanzen aus ihnen heraus speziell in JavaScript untersuchen. Zuerst möchten wir Sie bitten, eine neue lokale Kopie der oojs.html-Datei zu erstellen, die wir im vorhergehenden Kapitel bereits benutzt haben.

### Ein einfaches Beispiel

1. Fangen wir damit an, wie man eine Person mit einer normalen Funktion definieren könnte. Fügen Sie diese Funktion innerhalb des Skript-Elements der oojs.html hinzu:

    ```js
    function createNewPerson(name) {
      var obj = {};
      obj.name = name;
      obj.greeting = function() {
        alert('Hi! I\'m ' + obj.name + '.');
      };
      return obj;
    }
    ```

2. Sie können nun eine neue Person erstellen, indem Sie diese Funktion aufrufen - bitte geben Sie die folgenden Zeilen in der JavaScript-Konsole Ihres Browsers ein:

    ```js
    var salva = createNewPerson('Salva');
    salva.name;
    salva.greeting();
    ```

    Das funktioniert zwar ganz gut, aber es ist ein bisschen umständlich. Wenn wir wissen, dass wir ein Objekt erstellen wollen, warum müssen wir dann explizit ein neues leeres Objekt erstellen und es zurückgeben? Glücklicherweise bietet uns JavaScript eine praktische Vereinfachung in Form von Konstruktorfunktionen - nutzen wir jetzt eine!

3. Ersetzen Sie die vorher implementierte Funktion durch folgende:

    ```js
    function Person(name) {
      this.name = name;
      this.greeting = function() {
        alert('Hi! I\'m ' + this.name + '.');
      };
    }
    ```

Die Konstruktorfunktion ist die JavaScript-Version einer Klasse. Sie werden feststellen, dass sie alle Eigenschaften hat, die man in einer Funktion erwartet, obwohl sie weder etwas zurückgibt oder explizit ein Objekt erzeugt - sie definiert im Grunde nur Eigenschaften und Methoden. Sie werden sehen, dass dieses Schlüsselwort auch hier verwendet wird - es besagt im Grunde, dass immer dann, wenn eine dieser Objektinstanzen erzeugt wird, die Eigenschaft `name` des Objekts gleich dem Namenswert ist, der an den Konstruktoraufruf übergeben wird, und die Methode `greeting()` wird ebenfalls den Namenswert verwenden, der an den Konstruktoraufruf übergeben wird.

> **Hinweis:** Der Name einer Konstruktorfunktion beginnt normalerweise mit einem Großbuchstaben - diese Konvention wird verwendet, um Konstruktorfunktionen im Code leichter erkennbar zu machen.

Wie rufen wir also einen Konstruktor auf, um einige Objekte zu erstellen?

1. Fügen Sie die folgenden Zeilen unterhalb Ihres vorherigen Codezusatzes ein:

    ```js
    var person1 = new Person('Bob');
    var person2 = new Person('Sarah');
    ```

2. Speichern Sie Ihren Code, laden Sie ihn im Browser neu und geben Sie die folgenden Zeilen in Ihre JS-Konsole ein:

    ```js
    person1.name
    person1.greeting()
    person2.name
    person2.greeting()
    ```

Cool! Sie werden nun sehen, dass wir zwei neue Objekte auf der Seite haben, die jeweils unter einem anderen Namespace gespeichert sind - wenn Sie auf ihre Eigenschaften und Methoden zugreifen, müssen Sie Aufrufe mit `person1` oder `person2` starten; die darin enthaltene Funktionalität ist sauber verpackt, damit sie nicht mit anderen Funktionen kollidiert. Sie haben jedoch die gleiche Namenseigenschaft und die gleiche Methode `greeting()` zur Verfügung. Beachten Sie, dass Sie Ihren eigenen Namenswert verwenden, der Ihnen bei der Erstellung zugewiesen wurde. Das ist ein Grund, warum es sehr wichtig ist, diesen zu verwenden, so dass Sie Ihre eigenen Werte verwenden werden, und nicht irgendeinen anderen Wert.

Sehen wir uns die Konstruktoraufrufe noch einmal genauer an:

```js
var person1 = new Person('Bob');
var person2 = new Person('Sarah');
```

In jedem Fall wird das neue Schlüsselwort verwendet, um dem Browser mitzuteilen, dass wir eine neue Objektinstanz erstellen wollen, gefolgt vom Funktionsnamen mit den erforderlichen Parametern in Klammern. Das Ergebnis wird in einer Variablen gespeichert - sehr ähnlich wie bei dem Aufruf einer Standardfunktion. Jede Instanz wird entsprechend dieser Definition erzeugt:

```js
function Person(name) {
  this.name = name;
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name + '.');
  };
}
```

Nach dem Anlegen der neuen Objekte enthalten die Variablen `person1` und `person2` die folgenden Objekte:

```js
{
  name: 'Bob',
  greeting: function() {
    alert('Hi! I\'m ' + this.name + '.');
  }
}

{
  name: 'Sarah',
  greeting: function() {
    alert('Hi! I\'m ' + this.name + '.');
  }
}
```

Beachten Sie, dass wir beim Aufruf unserer Konstruktor-Funktion jedes Mal `greeting()` definieren, was nicht ideal ist. Um dies zu vermeiden, können wir stattdessen Funktionen auf dem Prototypen definieren, die wir uns später genauer ansehen werden.

### Erstellen unseres finalen Konstruktors

Das Beispiel, das wir oben betrachtet haben, war nur ein einfaches Beispiel, um den Einstieg zu erleichtern. Lassen Sie uns nun weitermachen und unsere finale Konstruktor-Funktion `Person()` erstellen.

1. Entfernen Sie den bisher eingefügten Code und fügen Sie nachfolgenden Konstruktor als Ersatz hinzu - dies ist im Prinzip genau dasselbe, wie das einfache Beispiel, nur etwas komplexer:

    ```js
    function Person(first, last, age, gender, interests) {
      this.name = {
         first : first,
         last : last
      };
      this.age = age;
      this.gender = gender;
      this.interests = interests;
      this.bio = function() {
        alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
      };
      this.greeting = function() {
        alert('Hi! I\'m ' + this.name.first + '.');
      };
    }
    ```

2. Fügen Sie nun unter dem Code von oben folgende Zeile ein, um eine Objektinstanz zu erzeugen:

    ```js
    var person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
    ```

Sie werden nun sehen, dass Sie auf die Eigenschaften und Methoden zugreifen können, genau wie wir es zuvor getan haben - probieren Sie das in Ihrer JS-Konsole aus:

```js
person1['age']
person1.interests[1]
person1.bio()
// etc.
```

> **Hinweis:** Wenn Sie Probleme haben, dies zum Laufen zu bringen, vergleichen Sie Ihren Code mit unserer Version - siehe [oojs-class-finished.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/introduction/oojs-class-finished.html) ([hier](http://mdn.github.io/learning-area/javascript/oojs/introduction/oojs-class-finished.html) können Sie auch sehen, wie es live läuft).

### Weitere Übungen

Versuchen Sie zunächst, ein paar weitere eigene Objekte hinzuzufügen, und versuchen Sie, die Eigenschaften bzw. Funktionen der daraus erzeugten Objektinstanzen zu nutzen bzw. zu verändern.

Außerdem gibt es einige Probleme mit unserer `bio()`-Methode - die Ausgabe enthält immer das Pronomen "He", egal ob Ihre `Person` weiblich ist oder einem anderen Geschlecht angehört. Und die `bio()`-Methode wird nur zwei Interessen enthalten, auch wenn mehr im Interessen-Array aufgelistet sind. Finden Sie heraus, wie man das in der Klassendefinition (Konstruktor) beheben kann? Sie können jeden beliebigen Code in einen Konstruktor einfügen (Sie werden wahrscheinlich ein paar Bedingungen und eine Schleife benötigen). Überlegen Sie sich, wie die Sätze je nach Geschlecht und je nachdem, ob die Anzahl der aufgelisteten Interessen 1, 2 oder mehr als 2 beträgt, unterschiedlich strukturiert werden sollten.

> **Hinweis:** Wenn Sie nicht weiterkommen, haben wir eine Antwort bzw. Lösung in unserem [GitHub-Repo](https://github.com/mdn/learning-area/blob/master/javascript/oojs/introduction/oojs-class-further-exercises.html) bereitgestellt ([Sehen Sie es sich hier an](http://mdn.github.io/learning-area/javascript/oojs/introduction/oojs-class-further-exercises.html)) - versuchen Sie bitte aber erst einmal, die Lösung selbst zu schreiben!

## Andere Möglichkeiten, Objektinstanzen zu erzeugen

Bisher haben wir zwei verschiedene Wege gesehen, um eine Objektinstanz zu erzeugen - die Deklaration eines Objektes als Literal und die Verwendung einer Konstruktorfunktion (siehe oben).

Diese machen Sinn, aber es gibt auch andere Wege - wir möchten Sie mit diesen vertraut machen, falls Sie auf Ihren Reisen im Web auf sie stoßen sollten.

### Der Object()-Konstruktor

Zuerst können Sie den `Object()` Konstruktor verwenden, um ein neues Objekt zu erstellen. Ja, sogar generische Objekte haben einen Konstruktor, der ein leeres Objekt erzeugt.

1. Geben Sie dies in die JavaScript-Konsole Ihres Browsers ein:

    ```js
    var person1 = new Object();
    ```

2. Diese speichert ein leeres Objekt in der Variable `person1`. Sie können dann diesem Objekt Eigenschaften und Methoden mit Punkt- oder Klammer-Notation hinzufügen, wie gewünscht. Versuchen Sie diese Beispiele in Ihrer Konsole:

    ```js
    person1.name = 'Chris';
    person1['age'] = 38;
    person1.greeting = function() {
      alert('Hi! I\'m ' + this.name + '.');
    };
    ```

3. Sie können auch ein Objektliteral als Parameter an den `Object()` Konstruktor übergeben, um es mit Eigenschaften/Methoden vorzufüllen. Versuchen Sie folgendes in Ihrer JS-Konsole:

    ```js
    var person1 = new Object({
      name: 'Chris',
      age: 38,
      greeting: function() {
        alert('Hi! I\'m ' + this.name + '.');
      }
    });
    ```

### Verwendung der Methode create()

Konstruktoren können Ihnen helfen, Ihren Code zu ordnen - Sie können Konstruktoren an einer Stelle erstellen und dann bei Bedarf Instanzen davon erstellen - und es ist immer nachvollziehbar, woher sie kommen.

Einige Leute ziehen es jedoch vor, Objektinstanzen zu erstellen, ohne vorher Konstruktoren zu erstellen, insbesondere wenn sie nur wenige Instanzen eines Objekts erstellen müssen. JavaScript hat eine eingebaute Methode namens `create()`, die es Ihnen einfach ermöglicht, dies zu tun. Mit ihr können Sie ein neues Objekt auf Basis eines beliebigen vorhandenen Objekts erstellen.

1. Wenn Ihre fertige Übung aus den vorherigen Abschnitten im Browser geladen ist, versuchen Sie folgendes in Ihrer JavaScript-Konsole:

    ```js
    var person2 = Object.create(person1);
    ```

2. Nun geben Sie bitte folgendes in die JavaScript-Konsole ein:

    ```js
    person2.name
    person2.greeting()
    ```

Sie werden sehen, dass `person2` auf der Basis von `person1` erstellt wurde - es hat die gleichen Eigenschaften und die gleiche Methode, die ihm zur Verfügung stehen.

Eine Einschränkung von `create()` ist, dass der IE8 es nicht unterstützt. Daher können Konstruktoren effektiver sein, wenn Sie ältere Browser unterstützen wollen.

Wir werden die Auswirkungen von `create()` später noch genauer untersuchen.

## Zusammenfassung

Dieser Artikel hat eine vereinfachte Sicht der objektorientierten Theorie geliefert - das ist noch lange nicht die ganze Geschichte, aber er gibt Ihnen eine Vorstellung davon, womit wir es hier zu tun haben. Darüber hinaus haben wir damit begonnen, verschiedene Möglichkeiten der Erzeugung von Objektinstanzen zu betrachten.

Im nächsten Artikel werden wir uns mit JavaScript-Objekt-Prototypen beschäftigen.

{{PreviousMenuNext("Learn/JavaScript/Objects/Basics", "Learn/JavaScript/Objects/Object_prototypes", "Learn/JavaScript/Objects")}}

## In diesem Modul

- [Objekt Grundlagen](/de/docs/Learn/JavaScript/Objects/Basics)
- [Objektorientiertes JavaScript für Anfänger](/de/docs/Learn/JavaScript/Objects/Object-oriented_JS)
- [Objekt Prototypen](/de/docs/Learn/JavaScript/Objects/Object_prototypes)
- [Vererbung in JavaScript](/de/docs/Learn/JavaScript/Objects/Inheritance)
- [Mit JSON Daten arbeiten](/de/docs/Learn/JavaScript/Objects/JSON)
- [Objekterstellungsübungen](/de/docs/Learn/JavaScript/Objects/Object_building_practice)
- [Funktionalität zu unserer Hüpfball Demo hinzufügen](/de/docs/Learn/JavaScript/Objects/Adding_bouncing_balls_features)
