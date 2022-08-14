---
title: new Operator
slug: Web/JavaScript/Reference/Operators/new
tags:
  - JavaScript
  - Left-hand-side expressions
  - Operator
translation_of: Web/JavaScript/Reference/Operators/new
---
{{jsSidebar("Operators")}}

Der** `new` Operator** erzeugt eine Instanz eines benutzerdefinierten Objekttyps oder eines Standardtyps, welcher eine Konstruktorfunktion besitzt.

{{EmbedInteractiveExample("pages/js/expressions-newoperator.html")}}

## Syntax

    new constructor[([arguments])]

### Parameter

- `constructor`
  - : Eine Funktion, welche den Typ der Objektinstanz spezifiziert.

<!---->

- `arguments`
  - : Eine Liste von Werten, die dem `constructor` übergeben wird.

## Beschreibung

Das erstellen eines benutzerdefinierten Objektes benötigt zwei Schritte:

1.  Definieren eines Objekttypen indem eine Funktion geschrieben wird.
2.  Erstellen einer Instanz des Objektes mit `new`.

Um ein neuen Objekttypen zu definieren, erstellt man eine Funktion für den Objekttypen, die seinen Namen und Eigenschaften spezifiziert. Ein Objekt kann Eigenschaften haben, die ebenfalls Objekte sind. Sie dazu das Beispiel unten.

Wenn der Code `new Foo(...)` ausgeführt wird, passieren folgende Dinge:

1.  Ein neues Objekt wird erstellt, welches von `Foo.prototype` erbt.
2.  Die Konstruktorfunktion `Foo` wird mit den spezifizierten Argumenten aufgerufen und [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) wird an das neu erstellte Objekt gebunden. `new Foo` ist gleichbedeutend mit `new Foo()`, d. h. wenn keine Argumentenliste spezifiziert ist, wird `Foo` ohne Argumente aufgerufen.
3.  Das Objekt, welches von der Konstruktorfunktion zurückgegeben wird, ist das Resultat des ganzen `new` Ausdrucks. Wenn die Konstruktorfunktion nicht explizit ein Objekt zurück gibt, wird stattdessen das erstellte Objekt aus Schritt 1 zurückgegeben. (Normalerweise geben Konstruktoren keinen Wert zurück, aber sie können es tun, um den normalen Objekterstellungsprozess zu überschreiben.)

Man kann immer eine Eigenschaft zu dem vorher erstellten Objekt hinzufügen. Zum Beispiel fügt das Statement `auto1.farbe = "schwarz"` die Eigenschaft `farbe` zu `auto1` hinzu und weist dieser den Wert `"schwarz"` zu. Jedoch hat das keinen Effekt auf andere Objekte. Um die Eigenschaft zu allen Objekten des selben Typs hinzuzufügen, muss die Eigenschaft dem `Auto` Objekttypen hinzugefügt werden.

Man kann eine geteilte Eigenschaft zum vorher definierten Objekttypen hinzufügen, indem die [`Function.prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) Eigenschaft genutzt wird. Diese definiert eine geteilte Eigenschaft mit allen Objekten, die mit der gleichen Funktion erstellt wurde, und nicht nur bei einer Instanz des Objekttypen. Der folgende Code fügt die `farbe` Eigenschaft mit dem Wert `"originale Farbe"` zu allen Objekten des Typs `Auto` hinzu und überschreibt diesen Wert mit dem String `"schwarz"` nur in dem Instanzobjekt `auto1`. Für weitere Informationen siehe [Prototype](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype).

```js
function Auto() {}
auto1 = new Auto();
auto2 = new Auto();

console.log(auto1.farbe);    // undefined

Auto.prototype.farbe = "originale Farbe";
console.log(auto1.farbe);    // originale Farbe

auto1.farbe = "schwarz";
console.log(auto1.farbe);   // schwarz

console.log(auto1.__proto__.farbe); // originale Farbe
console.log(auto2.__proto__.farbe); // originale Farbe
console.log(auto1.farbe);           // schwarz
console.log(auto2.farbe);           // originale Farbe
```

> **Note:** Wenn man den `new` Operator nicht benutzt, **wird die Konstruktorfunktion wie eine normale Funktion ausgeführt,** _ohne ein Objekt zu erstellen_. In diesem Fall ist der Wert von `this` ebenfalls anders.

## Beispiele

### Objekttyp und Objektinstanz

Angenommen man möchte ein Objekttypen für Autos erstellen, man möchte den Objekttypen `Auto` nennen und man möchte Eigenschaften für die Marke, das Modell und das Jahr haben. Um das zu erreichen muss folgende Funktion geschrieben werden:

```js
function Auto(marke, modell, jahr) {
  this.marke = marke;
  this.modell = modell;
  this.jahr = jahr;
}
```

Nun kann man ein Objekt mit dem Namen `meinAuto` wie folgt erstellen:

```js
var meinAuto = new Auto("Eagle", "Talon TSi", 1993);
```

Dieses Statement erstellt `meinAuto` und wiest die spezifizierten Werte den Eigenschaften zu. Dann ist der Wert von `meinAuto.marke` der String "Eagle", von `meinAuto.jahr` die Zahl 1993 und so weiter.

Man kann beliebig viele Objekte von `Auto` mit `new` erstellen. Zum Beispiel:

```js
var kensAuto = new Auto("Nissan", "300ZX", 1992);
```

### Objekteigenschaft, die selber ein Objket

Angenommen man Definiert ein Objekt mit dem Namen `Person` wie folgt:

```js
function Person(name, alter, geschlecht) {
  this.name = name;
  this.alter = alter;
  this.geschlecht = geschlecht;
}
```

Dann instantiiert man zwei neue `Person` Objekte wie folgt:

```js
var rand = new Person("Rand McNally", 33, "M");
var ken = new Person("Ken Jones", 39, "M");
```

Dann erneuert man die Definition von `Auto` um eine `besitzer` Eigenschaft , die ein `Person` Objekt ist, wie folgt:

```js
function Auto(marke, modell, jahr, besitzer) {
  this.marke = marke;
  this.modell = modell;
  this.jahr = jahr;
  this.besitzer = besitzer;
}
```

Um das neue Objekt zu instantiiert benutzt man dann folgendes:

```js
var auto1 = new Auto("Eagle", "Talon TSi", 1993, rand);
var auto2 = new Auto("Nissan", "300ZX", 1992, ken);
```

Statt ein Stringliteral oder einen Zahlenwert beim erstellen zu benutzen, übergibt das obere Beispiel die Objekte `rand` und `ken` als Parameter für den Besitzer. Um den Namen des Besitzers von `auto2` zu erfahren, muss man die Eigenschaft wie folgt abfragen:

```js
auto2.besitzer.name
```

## Spezifikationen

| Spezifikation                                                                        | Status                       | Kommentar                                             |
| ------------------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-new-operator', 'The new Operator')}} | {{Spec2('ESDraft')}} |                                                       |
| {{SpecName('ES6', '#sec-new-operator', 'The new Operator')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ES5.1', '#sec-11.2.2', 'The new Operator')}}         | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES3', '#sec-11.2.2', 'The new Operator')}}             | {{Spec2('ES3')}}         |                                                       |
| {{SpecName('ES1', '#sec-11.2.2', 'The new Operator')}}             | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.0. |

## Browserkompatibilität

{{Compat("javascript.operators.new")}}

## Siehe auch

- {{jsxref("Function")}}
- {{jsxref("Reflect.construct()")}}
