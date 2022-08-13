---
title: Collections mit Schlüssel
slug: Web/JavaScript/Guide/Keyed_collections
tags:
  - Collections
  - Guide
  - JavaScript
  - Map
  - l10n:priority
  - set
translation_of: Web/JavaScript/Guide/Keyed_collections
---
{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Indexed_Collections", "Web/JavaScript/Guide/Working_with_Objects")}}

Dieses Kapitel gibt eine Einleitung in Sammlungen von Daten, welche mit einem Schlüssel verknüpft werden. `Map` und `Set` Objekte enthalten Elemente, die in der Reihenfolge ihres Einfügens iterierbar sind.

## Maps

### `Map` Objekt

ECMAScript 2015 führt eine neue Datenstruktur ein, um Werte auf Werte zu abbildet. Ein {{jsxref("Map")}} Objekt ist eine einfache Schlüssel/Werte-Abbildung und man kann über die Element in der Einfügereihenfolge iterieren.

Das folgende Beispiel zeigt einige Basisoperationen mit einer `Map`. Für mehr Beispiele und die komplette API siehe zudem die Referenzseite {{jsxref("Map")}}. Man kann eine {{jsxref("Statements/for...of","for...of")}} Schleife benutzen, um ein Array von `[key, value]` für jede Iteration zurückzugeben.

```js
var sayings = new Map();
sayings.set('dog', 'woof');
sayings.set('cat', 'meow');
sayings.set('elephant', 'toot');
sayings.size; // 3
sayings.get('fox'); // undefined
sayings.has('bird'); // false
sayings.delete('dog');
sayings.has('dog'); // false

for (var [key, value] of sayings) {
  console.log(key + ' goes ' + value);
}
// "cat goes meow"
// "elephant goes toot"

sayings.clear();
sayings.size; // 0
```

### `Object` und `Map` im Vergleich

Traditionell werden {{jsxref("Object", "Objekte", "", 1)}} eingesetzt, um Strings auf Werte abzubilden. Objekte erlauben es Werte zu Schlüsseln zu setzen, diese Werte abzufragen, Schlüssel zu löschen und erkennen, ob etwas zu einem Schlüssel gespeichert wurde. `Map` Objekte haben ein paar Vorteile, was sie zu besseren Abbildungen macht.

- Die Schlüssel eines `Object` sind {{jsxref("Global_Objects/String","Strings")}}, während bei einer `Map` jeder Wert möglich ist.
- Man kann die Größe einer `Map` einfach abfragen, während man bei einem Objekt manuell mitzählen muss.
- Die Iteration einer `Map` erfolgt in der Reihenfolge des Einfügens ihrer Elemente.
- Ein `Object` hat einen Prototyp, so dass Standardschlüssel in der `Map` schon vorhanden sind. (Dies kann mit `map = Object.create(null)` umgangen werden.)

Diese drei Tipps können bei der Entscheidung für eine `Map` oder ein `Object` helfen:

- Man sollte Maps bevorzugen, wenn die Schlüssel vor der Laufzeit unbekannt sind und wenn alle Schlüssel den gleichen Typ haben und wenn alle Werte den gleichen Schlüssel haben.
- Man sollte Maps in Fällen benutzen, in denen primitive Werte als Schlüssel benutzt werden, weil in Objekten jeder Schlüssel ein String ist egal, ob eigentlich eine Zahl, ein Boolean oder ein anderer primitiver Datentyp vorliegt.
- Man sollte Objekte benutzen, wenn es eine Logik gibt, die auf individuellen Elementen angewandt wird.

### `WeakMap` Objekte

Das {{jsxref("WeakMap")}} Objekt ist eine Collection von Schlüssel/Werte-Paaren, wobei der **Schlüssel nur ein Objekt sein kann** und die Werte willkürliche Werte sein können. Die Objektreferenzen in den Schlüsseln werden _weakly_ gehalten, was bedeutet, dass diese Referenz ein Ziel des Speicherbereinigung (Garbage Collectors (GC)) wird, wenn keine andere Referenz mehr auf dieses Objekt referenziert. Die `WeakMap` API ist die gleiche wie die `Map` API.

Einen Unterschied zu `Map` Objekten ist, dass `WeakMap` Schlüssel nicht aufzählbar sind (z. B. gibt es keine Methode, die eine Liste von Schlüsseln zurückgibt). Wenn dies der Fall wäre, würde die Liste vom Zustand der Speicherbereinigung abhängen, was zu Nicht-Determinismus führen würde.

Für mehr Informationen, Beispiele und "Warum \_Weak_Map" auf der {{jsxref("WeakMap")}} Referenzseite.

Ein Einsatzgebiet für `WeakMap`s ist der Einsatz für Private Daten oder das Verbergen von Implementierungsdetails. Das folgende Beispiel ist von Nick Fitzgeralds Blogpost ["Hiding Implementation Details with ECMAScript 6 WeakMaps"](http://fitzgeraldnick.com/weblog/53/). Die privaten Daten und Methoden, die zu dem Objekt gehören, werden in dem WeakMap Objekt `privates` gespeichert. Alles offene auf der Instanz und dem Prototyp ist Öffentlich; alles andere ist von Außen nicht erreichbar, weil `privates` vom Modul nicht exportiert wird.

```js
const privates = new WeakMap();

function Public() {
  const me = {
    // Private data goes here
  };
  privates.set(this, me);
}

Public.prototype.method = function() {
  const me = privates.get(this);
  // Do stuff with private data in `me`...
};

module.exports = Public;
```

## Sets

### `Set` Objekte

{{jsxref("Set")}} Objekte sind Collectionen mit Werten. Man kann über die Elemente in der Einfügereihenfolge iterieren. Ein Wert in einem `Set` kann nur einmal existieren und ist einzigartig in einer `Set` Collection.

Das folgende Beispiel zeigt einige Basisoperationen mit einem `Set`. Für mehr Beispiele und die komplette API siehe auf der {{jsxref("Set")}} Referenzseite nach.

```js
var mySet = new Set();
mySet.add(1);
mySet.add('some text');
mySet.add('foo');

mySet.has(1); // true
mySet.delete('foo');
mySet.size; // 2

for (let item of mySet) console.log(item);
// 1
// "some text"
```

### Konvertierung zwischen Arrays und Sets

Man kann ein {{jsxref("Array")}} von einem Set erstellen, indem {{jsxref("Array.from")}} oder der [spread Operator](/de/docs/Web/JavaScript/Reference/Operators/Spread_operator) eingesetzt wird. Zudem akzeptiert der `Set` Konstruktor ein `Array`, um es in die andere Richtung zu konvertieren. Wichtig ist aber, dass `Set` Objekte Werte nur einmalig Speichern, so dass jedes Elementduplikat aus dem Array beim Konvertieren gelöscht wird.

```js
Array.from(mySet);
[...mySet2];

mySet2 = new Set([1, 2, 3, 4]);
```

### `Array` und `Set` im Vergleich

Traditionell wird eine Menge von Objekten in vielen Situationen in JavaScript in Arrays gespeichert. Das neue `Set` Objekt hat aber einige Vorteile:

- Das Prüfen, ob ein Element in einer Collection schon existiert mit {{jsxref("Array.indexOf")}} ist in Arrays langsamer.
- In `Set` Objekte lassen sich Elemente löschen. Mit einem Array entsteht an dem Element Index eine Lücke, bzw. sie wird geschlossen.
- Der Wert {{jsxref("NaN")}} kan in einem Array nicht mit `indexOf` gefunden werden.
- `Set` Objekte erlauben nur eindeutige Objekte; man muss sich nicht selber um Duplikate kümmern.

### `WeakSet` Objekte

{{jsxref("WeakSet")}} Objekte sind Collections von Objekten. Ein Objekt in einer `WeakSet` gibt es nur einmal; es ist einzigartig in der `WeakSet` Collection und Objekte sind nicht aufzählbar.

Die Hauptunterschiede zu einem {{jsxref("Set")}} Objekt sind:

- Im Gegensatz zu `Sets`, ist `WeakSets` eine **Collection von nur Objekten** und nicht von beliebigen Werten von jedem Typ.
- Das `WeakSet` ist _weak:_ Referenzen in in der Collection sind _weakly_ gehalten. Was gedeutet, dass wenn es keine weitere Referenz auf eine Objekt in dem `WeakSet` gibt, der Speicher geleert werden kann. Das bedeutet auch, dass es keine Liste gibt, die die aktuellen Objekte der Collection enthält. `WeakSets` sind nicht Aufzählbar.

Die Einsatzgebiete von `WeakSet` Objekten sind begrenzt. Sie erzeugen keine Speicherlecks, so dass sie sicher DOM Elemente enthalten können, um sie zum Beispiel zu verfolgen.

## Schlüssel- und Wertegleichheit von `Map` und `Set`

Beide, die Schlüsselgleichheit von `Map` Objekten und die Wertegleichheit von `Set` Objekten basieren auf dem "[same-value-zero Algorithmus](https://tc39.github.io/ecma262/#sec-samevaluezero)":

- Gleichheit funktioniert wie der Identitätsvergleichsoperator `===`.
- `-0` and `+0` werden als gleich angenommen.
- {{jsxref("NaN")}} wird als gleich zu sich selbst angenommen (im Gegensatz zu `===`).

{{PreviousNext("Web/JavaScript/Guide/Indexed_Collections", "Web/JavaScript/Guide/Working_with_Objects")}}
