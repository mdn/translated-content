---
title: Speicherverwaltung
slug: Web/JavaScript/Memory_Management
tags:
  - JavaScript
translation_of: Web/JavaScript/Memory_Management
original_slug: Web/JavaScript/Speicherverwaltung
---
{{JsSidebar("Advanced")}}

## Einleitung

Bei Low-Level Programmiersprachen wie C, die zur systemnahen Programmierung eingesetzt werden, existieren Funktionen - wie z. B. `malloc()` und `free()` - womit explizit Speicher angefordert und wieder freigegeben werden kann. Bei JavaScript gibt es keine solchen Funktionen, sondern der benötigte Speicher wird bei der Erzeugung neuer Objekte (z. B. benutzerdefinierte Objekte oder vordefinierte Objekte wie `String`) zugewiesen. Die Speicherfreigabe erfolgt automatisch im Hintergrund durch die _Garbage Collection_ (wörtlich: "Müllabfuhr"; automatische Speicherbereinigung). Dieser Automatismus führt oft zu Verwirrung und lässt so manchen Entwicklern irrtümlich glauben, man müsse sich über die Speicherverwaltung keine Gedanken machen.

## Zyklus der Speichernutzung

Unabhängig von der eingesetzten Programmiersprache läuft der Zyklus für die Speichernutzung immer ungefähr gleich ab:

1. Alloziierung/Zuweisung des benötigten Speichers.
2. Benutzung des Speichers (lesen, schreiben).
3. Freigabe des alloziierten Speichers, wenn er nicht mehr benötigt wird.

Der erste und zweite Schritt erfolgt bei allen Programmiersprachen explizit. Der letzte Schritt, die Freigabe des Speichers, wird bei Low-Level-Sprachen explizit und bei höheren Programmiersprachen wie JavaScript meist implizit vorgenommen.

### Speicherzuweisung bei JavaScript

#### Initialisierung von Werten

Um dem Programmierer die Arbeit zu erleichtern, weist JavaScript bei der Zuweisung von Werten je nach Typ automatisch die benötigte Menge an Speicher zu:

```js
var n = 123; // alloziiert Speicher für eine Number
var s = "azerty"; // alloziiert Speicher für einen String

var o = {
  a: 1,
  b: null
}; // alloziiert Speicher für das Objekt und enthaltene Werte

var a = [1, null, "abra"]; // (wie bei Objekten) alloziiert Speicher für das Array und enthaltene Werte

function f(a){
  return a + 2;
} // alloziiert eine Function (die ein aufrufbares Objekt ist)

// Funktions-Ausdrücke alloziieren ebenfalls ein Objekt
someElement.addEventListener('click', function(){
  someElement.style.backgroundColor = 'blue';
}, false);
```

#### Allokation über Funktionsaufrufe

Einige Funktionen allozieren Objekte:

```js
var d = new Date();
var e = document.createElement('div'); // alloziiert ein DOM-Element
```

Andere Methoden allozieren neue Werte oder Objekte:

```js
var s = "azerty";
var s2 = s.substr(0, 3); // s2 ist ein neuer String
// Da Strings immutable sind, weist JavaScript evtl. hier
// keinen neuen Speicher zu, sondern merkt sich nur [0, 3],
// dass s2 die ersten beiden Elemente von s enthält

var a = ["ouais ouais", "nan nan"];
var a2 = ["generation", "nan nan"];
var a3 = a.concat(a2); // neues Array mit den 4 Elementen von a und a2
```

### Werte

Bei der Zuweisung von Werten wird in den Speicher geschrieben und beim Abfragen von Werten der Speicher ausgelesen. Weist man also z. B. einer Objekteigenschaft einen Wert zu oder übergibt einen Wert als Argument an eine Funktion, wird dieser in den Speicher geschrieben und beim Abfragen des Werts der Speicher ausgelesen.

### Freigabe des Speichers, wenn dieser nicht mehr benötigt wird

Bei diesem Vorgang tauchen am häufigsten Probleme mit der Speicherverwaltung auf, da es keine leichte Aufgabe ist, zu entscheiden, wann der benötigte Speicher tatsächlich nicht mehr gebraucht wird. Oftmals muss der Entwickler selbst bestimmen, an welcher Stelle die Freigabe eines Speicherbereichs erfolgen soll.

Höhere Programmiersprachen setzten häufig eine Softwarekomponente namens _Garbage Collector_ ein, dessen Aufgabe darin besteht, die Speicherallokation zu überwachen und nicht mehr benötigten Speicher wieder freizugeben. Dieser Prozess basiert auf einer Abschätzung, da das zugrundeliegende Problem - zu entscheiden, wann Speicher nicht mehr benötigt wird - [unentscheidbar ist](http://de.wikipedia.org/wiki/Entscheidbar) (nicht durch einen Algorithmus lösbar).

## Garbage Collection

Wie oben schon erwähnt, gibt es keine eindeutige Lösung für das zugrunde liegende Problem. Aus diesem Grund implementieren Garbage Collections einen beschränkten Algorithmus. Dieser Abschnitt liefert Informationen zum Verständnis der wichtigsten Algorithmen der Garbage Collection und deren Beschränkungen.

### Referenzen

Der Grundgedanke auf dem Garbage Collection-Algorithmen hauptsächlich basieren, ist die Idee der _Referenz_. Im Zusammenhang mit der Speicherverwaltung spricht man davon, dass ein Objekt ein anderes Objekt referenziert, wenn ersteres (entweder implizit oder explizit) Zugriff auf letzteres hat. Zum Beispiel hat ein JavaScript-Objekt eine Referenz auf dessen Prototype (implizite Referenz) und dessen Eigenschaftswerte (explizite Referenz).

In diesem Kontext wird also der Begriff _Objekt_ etwas breiter aufgefasst, als im Zusammenhang mit JavaScript-Objekten und beinhaltet außerdem auch Sichtbarkeitsbereiche von Funktionen (bzw. den globalen Sichtbarkeitsbereich).

### Referenzzählung der Garbage Collection

Dies ist der naivste Algorithmus der Garbage Collection. Er reduziert einfach "ein Objekt wird nicht mehr benötigt" auf "kein anderes Objekt referenziert auf das Objekt". Ein Objekt wird also dann von der Garbage Collection entsorgt, wenn keine Referenzen auf das Objekt existieren.

#### Beispiel

```js
var o = {
  a: {
    b:2
  }
}; // 2 Objekte wurden erstellt. Das eine referenziert auf das andere als dessen Eigenschaft.
// Das Objekt a wird referenziert, weil es der Variablen o zugewiesen wurde.
// Da auf alle Objekte irgendwie referenziert wird, kann keines entsogt werden

var o2 = o; // Die Variable 'o2' ist das zweite Objekt mit einer Referenz auf das Objekt
o = 1; // nun hat das Objekt, das sich ursprünglich in o befand eine einzige Referenz durch 'o2'

var oa = o2.a; // Referenz auf die Eigenschaft 'a' des Objekts.
// Nun hat das Objekt 2 Referenzen: Eine als Eigenschaft, die andere als Variable 'oa'

o2 = "yo"; // Das objekt, welches sich anfangs in 'o' befand hat nun keine Referenzen mehr
// und kann von der Garbage Collection entsorgt werden.
// Jedoch wird die Eigenschaft 'a' noch immer durch die Variable 'oa' referenziert und kann daher nicht freigegeben werden

oa = null; // Nun existieren keine Refrenzen mehr auf die Eigenschaft 'a'
// und das Objekt kann entsorgt werden.
```

#### Beschränkung: gegenseitige Referenzen

Dieser naive Algorithmus ist deshalb beschränkt, weil Objekte, die gegenseitig aufeinender referenzieren, gar nicht mehr benötigt werden könnten, aber nicht entsorgt werden dürfen, da noch auf sie referenziert wird.

```js
function f(){
  var o = {};
  var o2 = {};
  o.a = o2; // o referenziert o2
  o2.a = o; // o2 referenziert o

  return "azerty";
}

f();
// die Objekte werden erzeugt und referenzieren gegenseitig aufeinander.
// Sie werden außerhalb des Sichtbarkeitsbereichs der Funktion nicht verwendet
// und könnten daher nach der Funktionsausführung freigegeben werden
// Der Referenzzählungsalgorithmus erkennt jedoch nur, dass auf beide Objekte
// noch referenziert wird und entsorgt daher keines der beiden
```

#### Praxisbeispiel

Bei Internet Explorer 6, 7 ist bekannt, dass sie einen Garbage Collector mit Referenzzählung für DOM-Objekte einsetzen. Es gibt daher ein bekanntes Muster für die systematische Erzeugung von Speicherlecks:

```js
var div = document.createElement("div");
div.onclick = function(){
  doSomething();
}; // Das div hat eine Referenz über die Event-Handler-Eigenschaft 'onclick'.
// Der Handler hat auch eine Referenz auf das div, da die div-Variable
// innerhalb Sichtbarkeitsbereich der Funktion ansprechbar ist.
// Dieser Kreislauf sorgt dafür, dass beide Objekte nicht entsorgt werden
// und ein Speicherleck entsteht
```

### Mark-and-Sweep-Algorithmus

Dieser Algorithmus reduziert die Definition "ein Objekt wird nicht mehr gebraucht" auf "ein Objekt ist nicht erreichbar".

Der Algorithmus nimmt an, dass ein Satz von _root_-Objekten (bei JavaScript das globale Objekt) existiert. Der Algorithmus sucht dann von diesen Anfangsobjekten aus alle referenzierten Objekte, dann von den referenzierten Objekten alle Objekte, die auf andere Objekte referenzieren und so weiter. Auf diese Weise erkennt der Algorithmus alle _erreichbaren_ Objekte und sammelt alle unerreichbaren Objekte.

Dieser Algorithmus ist besser als der vorherige, da Objekte, die nicht referenziert sind als unerreichbar gelten, jedoch Objekte, die unerreichbar sind, nicht unbedingt keine Referenzen haben (gegenseitige Referenz).

Im Jahr 2012 arbeiten alle modernen Browser mit einem Mark-and-Sweep-Garbage Collector. Alle Verbesserungen der letzen Jahre im Bereich der Garbage Collection bei JavaScript (generational/incremental/concurrent/parallel garbage collection) sind Verbesserungen der Implementierung des Algorithmus, jedoch keine Änderungen des Algorithmus selbst oder der Definition von "ein Objekt wird nicht mehr gebraucht".

#### Gegenseitige Verweise stellen kein Problem mehr dar

Bei dem Beispiel oben zu gegenseitigen Verweisen wird auf die beiden Objekte nicht mehr von einem Objekt aus verwiesen, welches über das globale Objekt erreichbar ist. Daher werden sie vom Garbage Collector als unerreichbar angesehen.

Dasselbe gilt für das nächste Beispiel. Sobald das div und der Handler unerreichbar geworden sind, werden sie vom Gabage Collector entsorgt, obwohl sie noch gegenseitig aufeinander verweisen.

#### Einschränkung: Objekte müssen explizit unerreichbar gemacht werden

Obwohl dies als Einschränkung gilt, gibt es in der Praxis kaum solche Situationen und deshalb denkt kaum jemand über die Garbage Collection nach.

## Weitere Informationen

- [IBM-Artikel "Memory leak patterns in JavaScript" (2007)](http://www.ibm.com/developerworks/web/library/wa-memleak/)
- [Kangax-Artikel zu Event Handlern und Vermeidung von Speicherlecks (2010)](http://msdn.microsoft.com/en-us/magazine/ff728624.aspx)
- [Performance: Leak Tools](https://wiki.mozilla.org/Performance:Leak_Tools)
