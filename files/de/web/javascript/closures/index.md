---
title: Closures (Funktionsabschlüsse)
slug: Web/JavaScript/Closures
tags:
  - Closure
  - ES5
  - Intermediate
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Closures
---
{{jsSidebar("Intermediate")}}

_Closures_ sind Funktionen mit unabhängigen, freien Variablen. Anders ausgedrückt: Die in der _Closure_ definierte Funktion merkt sich die Umgebung, in der sie erzeugt wurde.

## Lexical scoping

### Lexikalischer Geltungsbereich

Betrachten wir folgendes Beispiel:

```js
function init() {
  var name = "Mozilla"; // name ist eine von init erzeugte lokale Variable
  function displayName() { // displayName() ist die innere, umschlossene Funktion, sprich die 'Closure'
    alert(name); // hier wird die in der umschließenden Eltern-Funktion deklarierte Variable benutzt
  }
  displayName();
}
init();
```

`init()` erzeugt eine lokale Variable `name` und anschließend eine Funktion `displayName()`. `displayName()` ist eine interne Funktion definiert in `init()` und ist ausschließlich im Rahmen dieser Funktion verfügbar. `displayName()` besitzt keine eigenen lokalen Variablen, hat jedoch Zugriff auf Variablen umgebender Funktionen und kann darum die Variable `name` aus der umschließenden Eltern-Funktion abrufen.

{{JSFiddleEmbed("https://jsfiddle.net/78dg25ax/", "js,result", 250)}}

Dieses [Code-Beispiel](http://jsfiddle.net/xAFs9/3/) zeigt, dass es funktioniert. Es handelt sich hier um einen lexikalischen Geltungsbereich (_lexical_ _scoping_), d.h. in JavaScript wird der Geltungsbereich (_scope_) einer Variablen bestimmt durch ihren Fundort im Quellcode (darum lexikalisch). Und verschachtelte Funktionen haben Zugriff auf Variablen, die im umschließenden Geltungsbereich (_outer scope_) deklariert werden.

## Closure

### Funktionsabschluss

Betrachten wir folgendes Beispiel:

```js
function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();
```

Zum Laufen gebracht zeigt dieser Code exakt den gleichen Effekt wie das vorherige `init()` Beispiel: Die Zeichenfolge "Mozilla" wird als JavaScript _alert_ Meldung angezeigt. Der interessante Unterschied besteht darin, dass die innere Funktion `displayName()` von der äußeren Funktion schon vor ihrer Ausführung zurückgegeben wurde.

Dass der Code weiterhin funktioniert, mag verwundern. Üblicherweise existieren die in einer Funktion enthaltenen lokalen Variablen nur während ihrer Ausführung. Man könnte also annehmen, dass die Variable `name` nicht mehr abrufbar ist, nachdem `makeFunc()` geendet hat. Da der Code trotzdem funktioniert, ist dies offensichtlich nicht der Fall.

Des Rätsels Lösung ist, dass `myFunc` zu einem Funktionsabschluss, einer _Closure_, geworden ist. Die _Closure_ ist ein besonderes Objekt mit zwei außergewöhnlichen Merkmalen – sie umfasst sowohl die Funktion, wie auch das Umfeld, in dem diese erzeugt wurde. Dieses Umfeld besteht aus sämtlichen lokalen Variablen, die im Geltungsbereich (_Scope_) lagen zum Zeitpunkt der Erzeugung der _Closure._ Im obigen Beispiel ist `myFunc` eine _Closure_, die sowohl die Funktion _myFunc_, wie auch die Zeichenfolge "Mozilla", die bei der Erzeugung der _Closure_ exisitierte, umfasst.

Hier nun ein etwas interessanteres Beispiel, eine `makeAdder()` Funktion:

```js
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12
```

In diesem Beispiel haben wir eine Funktion `makeAdder(x)` definiert, die ein einzelnes Argument `x` erwartet und eine neue Funktion zurück gibt. Die zurückgegebene Funktion erwartet ein Argument `y` und liefert die Summe von `x` und `y` als Ergebnis.

Die Funktion `makeAdder` ist im Wesentlichen eine Factory für spezielle Funktionen: sie erzeugt Funktionen, welche ihrem Argument einen bestimmten Wert hinzuaddieren. Im vorangegangenen Beispiel erzeugen wir mittels dieser Factory zwei neue Funktionen: eine von ihnen addiert 5 zu ihrem Argument, die andere addiert 10 hinzu.

`add5` und `add10` sind beides Closures. Sie teilen beide den selben Funktionsrumpf, behalten aber verschiedene Kontexte. In `add5`'s Kontext ist `x` 5, im Kontext von `add10` ist `x` 10.

## Practical closures

### Closures in der Praxis

Soviel zur Theorie von Closures — aber gibt es tatsächlich einen Praxisnutzen? Betrachten wir dafür die Auswirkungen in der Praxis. Ein Closure lässt uns Daten (die Ausführungsumgebung) mit einer Funktion, die auf diesen Daten operiert, verbinden. Das hat offensichtliche Parallelen zur objektorientierten Programmierung, bei der die Daten eines Objekts (die Objekteigenschaften) mit einer oder mehreren Methoden verbunden werden. Somit kann ein Closure immer dann verwendet werden, wo normalerweise ein Objekt mit einer einzigen Methode verwendet wird.

Besonders im Web kommt uns das häufig entgegen. Ein Großteil von JavaScript-Code ist ereignisbasierter Code: wir definieren erst ein Verhalten, und hängen es dann an ein Benutzerereignis (bspw. einen Mausklick oder Tastendruck). Unser Code nimmt dabei üblicherweise die Form eines Callback an: eine einzelne Funktion, die bei Eintreten des Ereignisses aufgerufen wird.

Hier ein Beispiel aus der Praxis: Angenommen, wir wollen Buttons auf einer Seite hinzufügen, die die Schriftgröße ändern – eine Möglichkeit wäre, die Schriftgröße mittels der Eigenschaft `font-size` im `body`-Element in Pixel (`px`) zu setzen und bei anderen Elementen der Seite (z.B. _header_-Elemente wie `h1`, `h2`) die Eigenschaft `font-size` in der relativen Einheit `em` anzugeben:

```css
body {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;
}

h1 {
  font-size: 1.5em;
}

h2 {
  font-size: 1.2em;
}
```

Unser interaktiver Schriftgößen-Button ändert die `font-size`-Eigenschaft des `body`-Elements. Diese Änderung wird von den anderen Elementen auf der Seite wahrgenommen und die Elemente passen sich dank der relativen Einheit `em` nun der neuen Schriftgröße an.

Hier das JavaScript:

```js
function makeSizer(size) {
  return function() {
    document.body.style.fontSize = size + 'px';
  };
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);
```

`size12`, `size14` und `size16` sind nun Funktionen, die den `body`-Text in Schriftgröße 12 Pixel, 14 Pixel oder 16 Pixel ändern. Diese Funktionen können nun wie folgt als Buttons (in diesem Fall als Links) hinzugefügt werden:

```js
document.getElementById('size-12').onclick = size12;
document.getElementById('size-14').onclick = size14;
document.getElementById('size-16').onclick = size16;
```

```html
<a href="#" id="size-12">12</a>
<a href="#" id="size-14">14</a>
<a href="#" id="size-16">16</a>
```

{{JSFiddleEmbed("https://jsfiddle.net/vnkuZ/7726/","","200")}}

## Emulation privater Methoden mit Hilfe von Closures

Sprachen wie Java bieten die Möglichkeit Methoden als privat zu deklarieren, was bedeutet, dass sie nur von anderen Methoden der gleichen Klasse aufgerufen werden können.

Dies ist in JavaScript nicht explizit vorgesehen, aber es kann mit Hilfe von Funtionsabschlüssen nachgebildet werden. Private Methoden sind nicht nur nützlich um den Zugriff auf Code einzuschränken: sie bieten auch ein mächtiges Werkzeug um den globalen Namensraum zu verwalten indem sie weniger wichtige Methoden vor dem öffentlichen Interface verbergen.

Das folgende Beispiel zeigt, wie man ein paar öffentliche Funktionen definiert, welche Zugriff auf private Funktionen und Variablen haben, indem man _Closures_ verwendet. Die ist auch als [module pattern](http://www.google.com/search?q=javascript+module+pattern) bekannt:

```js
var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };
})();

console.log(counter.value()); // logs 0
counter.increment();
counter.increment();
console.log(counter.value()); // logs 2
counter.decrement();
console.log(counter.value()); // logs 1
```

In den vorhergehenden Beispielen hatte jede _Closure_ ihr eigenes Umfeld; hier erzeugen wir ein einziges Umfeld, welches von 3 Funktionen geteilt wird: `counter.increment`, `counter.decrement` und `counter.value`.

Das gemeinsame Umfeld wird im Inneren einer anonymen Funktion erzeugt, welche nach der Definition auch gleich aufgerufen wird. Das Umfeld enthält 2 private Dinge: eine Variable mit dem Namen `privateCounter` und eine Funktion mit dem Namen `changeBy`. Auf keines von diesen privaten Dingen kann von ausserhalb der anonymen Funktion zugegriffen werden. Statt dessen muß auf sie mit Hilfe der drei öffentlichen Funktionen zugegriffen werden, welche von der anonymen Funktion zurueckgegeben werden.

Diese drei öffentlichen Funktionen sind _Closures_, welche das gleiche Umfeld teilen. Wegen JavaScripts lexikalischem Geltungsbereich haben sie alle Zugriff auf die `privateCounter` Variable und die `changeBy` Funktion.

> **Note:** Du siehst: wir definieren eine anonyme Funktion, die einen Zähler erzeugt, und dann rufen wir sie unmittelbar auf und weisen das Ergebnis der `counter` Variablen zu. Wir könnten diese Funktion in einer separaten Variablen `makeCounter` speichern und sie zum Erzeugen mehrerer Zähler benutzen.

```js
var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }
};

var counter1 = makeCounter();
var counter2 = makeCounter();
alert(counter1.value()); /* Alerts 0 */
counter1.increment();
counter1.increment();
alert(counter1.value()); /* Alerts 2 */
counter1.decrement();
alert(counter1.value()); /* Alerts 1 */
alert(counter2.value()); /* Alerts 0 */
```

Beachte wie jeder der zwei Zähler, `counter1` und `counter2`, seine Unabhängigkeit vom anderen erhält. Jede _Closure_ referenziert eine andere Version der `privateCounter` Variablen durch ihren eigene Closure. Jedes mal, wenn einer der Zähler aufgerufen wird, ändert sich das lexikalische Umfeld durch ändern des Wertes dieser Variablen; jedoch haben Änderungen des Wertes der Variablen in der einen _Closure_ keinen Einfluss auf den Wert in der anderen _Closure_.

> **Note:** Diese Art _Closures_ zu verwenden bietet einige Vorteile, die man der Objekt orientierten Progammierung zuspricht, insbesondere Daten verbergen und Klammerung.

## Closure Scope Chain

### Kette von Closure Geltungsbereichen

Für jede _Closure_ haben wir drei Geltungsbereiche:

- Lokaler Geltungsbereich (Eigener Geltungsbereich)
- Geltungsbereich der Äusseren Funktionen
- Globaler Geltungsbereich

Wir haben also drei Geltungsbereiche für eine _Closure_. Aber häufig machen wir Fehler, wenn wir geschachtelte innere Funktionen haben. Betrachten wir das folgende Beispiel:

```js
// global scope
var e = 10;
function sum(a){
  return function(b){
    return function(c){
      // outer functions scope
      return function(d){
        // local scope
        return a + b + c + d + e;
      }
    }
  }
}

console.log(sum(1)(2)(3)(4)); // log 20

// We can also write without anonymous functions:

// global scope
var e = 10;
function sum(a){
  return function sum2(b){
    return function sum3(c){
      // outer functions scope
      return function sum4(d){
        // local scope
        return a + b + c + d + e;
      }
    }
  }
}

var s = sum(1);
var s1 = s(2);
var s2 = s1(3);
var s3 = s2(4);
console.log(s3) //log 20
```

Also in dem obigen Beispiel haben wir eine Serie von geschachtelten Funktionen, die alle Zugriff auf den Geltungsbereich der äusseren Funktionen haben aber fälschlicherweise oft angenommen wird, dass sie Zugriff nur auf den Geltungsbereich der nächsten äusseren Funktion haben. Zur Verdeutlichung kann man sagen, dass alle _Closures_ Zugriff auf die Geltungsbereiche aller Funktionen haben, innerhalb derer sie deklariert sind.

## Creating closures in loops: A common mistake

### Erzeugen von _Closures_ in Schleifen: Ein häufiger Fehler

Vor der Einführung des [`let`](/de/docs/Web/JavaScript/Reference/Statements/let "let") Schlüsselwortes in ECMAScript 6, gab es ein häufiges Problem mit _Closures_, wenn sie innerhalb einer Schleife erzeugt wurden. Hier ein Beispiel:

```html
<p id="help">Helpful notes will appear here</p>
<p>E-mail: <input type="text" id="email" name="email"></p>
<p>Name: <input type="text" id="name" name="name"></p>
<p>Age: <input type="text" id="age" name="age"></p>
```

```js
function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = function() {
      showHelp(item.help);
    }
  }
}

setupHelp();
```

{{JSFiddleEmbed("https://jsfiddle.net/v7gjv/8164/", "", 200)}}

Das `helpText` Array definiert drei Hilfshinweise, die jeweils mit der ID eines Eingabefeldes verknüpft sind. Die Schleife geht durch diese Definitionen und hängt an das `onfocus` Ereignis die entsprechende Hilfemethode.

Wenn du aber diesen Code ausprobierst, wirst du sehen, dass er nicht tut was er sollte. Egal auf welches Feld du den Fokus gibst, es wird immer die Meldung über dein Alter gezeigt.

Der Grund dafür ist, dass die Callbacks, die an `onfocus` gehängt sind, _Closures_ sind; sie bestehen aus der Funktionsdefinition und dem Umfeld aus dem Geltungsbereich von `setupHelp`. Drei _Closures_ wurden von der Schleife erzeugt, aber jede benutzt das gleiche gemeinsame lexikalische Umfeld, das eine Variable mit sich änderndem Wert besitzt (`item.help`). Der Wert von `item.help` wird bestimmt, wenn die `onfocus` Callbacks ausgeführt werden. Weil aber die Schleife zu dieser Zeit bereits gelaufen ist, zeigt das `item` Objekt (das von allen drei _Closures_ geteilt wird) weiterhin auf den letzten Eintrag in der `helpText` Liste.

Eine Lösung ist in diesem Fall die Benutzung von mehreren _Closures_: insbesondere, eine Funktionsfabrik zu benutzten wie früher beschrieben:

```js
function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function makeHelpCallback(help) {
  return function() {
    showHelp(help);
  };
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
  }
}

setupHelp();
```

{{JSFiddleEmbed("https://jsfiddle.net/v7gjv/9573/", "", 300)}}

Das tut wie erwartet. Anstatt den Callbacks ein gemeinsames lexikales Umfeld zu geben erzeugt die `makeHelpCallback` Funktion ein neues lexikalisches Umfeld für jeden Callback, in dem sich `help` auf den entsprechenden String aus dem `helpText` Array bezieht.

Ein anderer Weg das obige mit einer anonymonen _Closure_ zu schreiben ist:

```js
function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

  for (var i = 0; i < helpText.length; i++) {
    (function() {
       var item = helpText[i];
       document.getElementById(item.id).onfocus = function() {
         showHelp(item.help);
       }
    })(); // Immediate event listener attachment with the current value of item (preserved until iteration).
  }
}

setupHelp();
```

Wenn du nicht mehrere _Closures_ benutzten möchtest, kannst du das [`let`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/let) Schlüsselwort benutzen, das in ES2015 eingeführt wurde:

```js
function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

  for (var i = 0; i < helpText.length; i++) {
    let item = helpText[i];
    document.getElementById(item.id).onfocus = function() {
      showHelp(item.help);
    }
  }
}

setupHelp();
```

Dieses Beispiel benutzt `let` anstatt `var`, so dass jede Closure die blocksichtbare Variable bindet, was bedeutet, dass keine zusätzlichen _Closures_ gebraucht werden.

Eine weitere Alternative könnte sein `forEach()` für die Iteration über das `helpText` Array zu benutzen und einen Callback für jeden {{htmlelement("div")}} zuzuweisen, wie hier gezeigt:

```js
function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

  helpText.forEach(function(text) {
    document.getElementById(text.id).onfocus = function() {
      showHelp(text.help);
    }
  });
}

setupHelp();
```

## Performance considerations

### Effizienzbetrachtungen

Es ist unklug unnötigerweise Funktionen innerhalb anderer Funktionen zu erzeugen, wenn _Closures_ für eine bestimmte Aufgabe nicht gebraucht werden. Denn es hat negativen Einfluss auf die Scripteffizienz sowohl in Bezug auf Geschwindigkeit als auch Speicherbedarf.

Wenn zum Beispiel ein neues Objekt/Klasse erzeugt wird, sollten die Methoden mit dem Prototypen des Objekts verbunden sein anstatt im Objektkonstuktor erzeugt werden. Der Grund ist, dass immer wenn der Konstruktor aufgerufen wird, die Methoden neu zugewiesen würden (das heisst, für jede Objekterzeugung).

Betrachte folgenden Fall:

```js
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
  this.getName = function() {
    return this.name;
  };

  this.getMessage = function() {
    return this.message;
  };
}
```

Da der vorliegende Code die Vorteile von _Closures_ in diesem speziellen Fall nicht nutzt, könnten wir ihn umschreiben so dass wir die _Closure_ vermeiden:

```js
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}
MyObject.prototype = {
  getName: function() {
    return this.name;
  },
  getMessage: function() {
    return this.message;
  }
};
```

Es wird jedoch nicht empfohlen, den Prototyp neu zu definieren. Das folgende Beispiel erweitert statt dessen den existierenden Prototyp:

```js
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}
MyObject.prototype.getName = function() {
  return this.name;
};
MyObject.prototype.getMessage = function() {
  return this.message;
};
```

In den zwei vorhergehenden Beispielen kann der vererbte Prototyp von allen Objekten benutzt werden und die Definition der Methoden muss nicht bei jeder Objekterzeugung durchgeführt werden. Weitere Informationen unter [Details zum Objektmodell](/de/docs/Web/JavaScript/Guide/Details_of_the_Object_Model).
