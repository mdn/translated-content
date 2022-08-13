---
title: Destrukturierende Zuweisung
slug: Web/JavaScript/Reference/Operators/Destructuring_assignment
tags:
  - Destructuring
  - ECMAScript 2015
  - JavaScript
  - Operator
translation_of: Web/JavaScript/Reference/Operators/Destructuring_assignment
original_slug: Web/JavaScript/Reference/Operators/Destrukturierende_Zuweisung
---
{{jsSidebar("Operators")}}

Die **destrukturierende Zuweisung** ermöglicht es, Daten aus Arrays oder Objekten zu extrahieren, und zwar mit Hilfe einer Syntax, die der Konstruktion von Array- und Objekt-Literalen nachempfunden ist.

{{EmbedInteractiveExample("pages/js/expressions-destructuringassignment.html")}}

## Syntax

```js
var a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b): // 20
console.log(rest); // [30, 40, 50]

({ a, b } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20


// Stage 3 Vorschlag
({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40 });
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}
```

## Beschreibung

Die Objekt- und Array-Literal Ausdrücke stellen einen einfachen Weg für die Erstellung von _ad hoc_ Datenpaketen zur Verfügung.

```js
var x = [1, 2, 3, 4, 5];
```

Die destrukturierende Zuweisung nutzt eine ähnliche Syntax, aber auf der linken Seite der Zuweisung, um zu definieren, welche Werte von der Quellvariablen ausgepackt werden muss.

```js
var x = [1, 2, 3, 4, 5];
var [y, z] = x;
console.log(y); // 1
console.log(z); // 2
```

Diese Fähigkeit ist so ähnlich wie in den Sprachen Perl und Python.

## Array-Destrukturierung

### Einfaches Variablenzuweisung

```js
var foo = ['one', 'two', 'three'];

var [one, two, three] = foo;
console.log(one); // "one"
console.log(two); // "two"
console.log(three); // "three"
```

### Zuweisung separat von Deklaration

Eine destrukturierende Zuweisung kann ohne Deklaration im Zuweisungsstatement vorgenommen werden.

```js
var a, b;

[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2
```

### Standardwerte

Einer Variablen kann ein Standardwert zugewiesen werden, welcher greift, wenn der Wert im Fall vom auspacken des Arrays `undefined` ist.

```js
var a, b;

[a=5, b=7] = [1];
console.log(a); // 1
console.log(b); // 7
```

### Variablen tauschen

Zwei Variablenwerte können mit destrukturierenden Zuweisungen vertauscht werden.

Ohne destrukturierende Zuweisung benötigt man für den Tausch zweier Werte eine temporäre Variable (oder, in manchen Low-level Sprachen, den [XOR-swap Trick](http://en.wikipedia.org/wiki/XOR_swap)).

```js
var a = 1;
var b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1
```

### Array von Funktion zurückgeben und einlesen

Es ist immer möglich einen Array von einer Funktion zurückzugeben. Destrukturierung kann mit dem Arrayrückgabewert verwendet werden um mehrerer Werte auszuwählen.

In diesem Beispiel gibt `f()` den Wert `[1, 2]` zurück, welcher in einer Zeile mittels Destrukturierung eingelesen werden kann.

```js
function f() {
  return [1, 2];
}

var a, b;
[a, b] = f();
console.log(a); // 1
console.log(b); // 2
```

### Rückgabewerte teilweise ignorieren

Man kann auch Rückgabewerte, an denen man nicht interessiert ist, ignorieren:

```js
function f() {
  return [1, 2, 3];
}

var [a, , b] = f();
console.log("A ist " + a + " B ist " + b);
```

Nach Ausführung dieses Codes ist a =1 und b = 3. Der Wert 2 wird ignoriert. Auf diese Art kann man jegliche (auch alle) zurückgegebene Werte ignorieren. Zum Beispiel:

```js
[,,] = f();
```

### Den Rest eines Arrays einer Variablen zuweisen

Wenn ein Array destrukturiert wird, kann man beim Auspacken den restlichen Teil eines Arrays einer Varaible mit dem Restpattern zuweisen:

```js
var [a, ...b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // [2, 3]
```

Zu beachten ist, dass ein {{jsxref("SyntaxError")}} erzeugt wird, wenn auf der linken Seite des Restelements ein trennendes Komma steht:

```js example-bad
var [a, ...b,] = [1, 2, 3];
// SyntaxError: rest element may not have a trailing comma
```

### Auspacken von Treffern eines regulären Ausdrucks

Wenn die Methode [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) für reguläre Ausdrücke einen Treffer findet, gibt sie ein Array zurück, das erstens, den gesamten, passenden Teil des Strings und dann die Teile des Strings enthält, die den einzelnen geklammerten Gruppen im regulären Ausdruck entsprechen. Destrukturierende erlaubt es die Teile aus diesem Array auf einfache Art herauszuziehen, wobei der String mit dem kompletten Treffer ignoriert werden kann, falls er nicht benötigt wird.

```js
function parseProtocol(url) {
  var parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
  if(!parsedURL) {
    return false;
  }
  console.log(parsedURL); // ["https://developer.mozilla.org/en-US/Web/JavaScript", "https", "developer.mozilla.org", "en-US/Web/JavaScript"]

  var [, protocol, fullhost, fullpath] = parsedURL;
  return protocol;
}

console.log(parseProtocol('https://developer.mozilla.org/en-US/Web/JavaScript')); // "https"
```

## Objektdestrukturierung

### Einfache Zuweisung

```js
var o = {p: 42, q: true};
var {p, q} = o;

console.log(p); // 42
console.log(q); // true
```

### Zuweisung ohne Deklaration

Die destrukturierende Zuweisung kann ohne eine Deklaration im Zuweisungs-Statement durchgeführt werden.

```js
var a, b;

({a, b} = {a: 1, b: 2});
```

> **Note:** Die runden Klammern `( ... )` wird benötigt wenn man die destrukturierende Zuweisung mit Objektliteralen ohne eine Deklaration durchführen möchte.`{a, b} = {a: 1, b: 2}` ist keine valide eigenständige Syntax, weil `{a, b}` auf der linken Seite als ein Block und nicht als Objektliteral erkannt wird.`({a, b} = {a: 1, b: 2})` ist genauso gültig wie `var {a, b} = {a: 1, b: 2}`HINWEIS: Der `( ... )` Ausdruck muss durch ein vorangestelltes Semikolen benutzt werden oder es führt eine Funktion aus der vorherigen Zeile aus.

### Zu neuen Varaiblennamen zuweisen

Eine Eigenschaft kann aus einem Objekt ausgepackt werden und zu einer Variablen mit einem anderen Namen zugewiesen werden.

```js
var o = {p: 42, q: true};
var {p: foo, q: bar} = o;

console.log(foo); // 42
console.log(bar); // true
```

### Standardwerte

Einer Variablen können Standardwerte zugewiesen werden, wenn der ausgepackte Wert aus dem Objekt `undefined` ist.

```js
var {a = 10, b = 5} = {a: 3};

console.log(a); // 3
console.log(b); // 5
```

### Zuweisen eines neuen Variablennamen und eines Standardwertes

Eine Eigenschaft kann sowohl 1) aus einem Objekt ausgepackt werden und einer Variablen mit einem andern Namen zugewiesen werden und 2) einen Standardwert unterstützen, wenn der ausgepackte Wert `undefined` ist.

```js
var {a:aa = 10, b:bb = 5} = {a: 3};

console.log(aa); // 3
console.log(bb); // 5
```

### Standardwerte für Funktionsparamter setzen

#### ES5 Version

```js
function drawES5Chart(options) {
  options = options === undefined ? {} : options;
  var size = options.size === undefined ? 'big' : options.size;
  var cords = options.cords === undefined ? { x: 0, y: 0 } : options.cords;
  var radius = options.radius === undefined ? 25 : options.radius;
  console.log(size, cords, radius);
  // jetzt zeichnen wir endlich ein paar Charts
}

drawES5Chart({
  cords: { x: 18, y: 30 },
  radius: 30
});
```

#### ES2015-Version

```js
function drawES2015Chart({size = 'big', cords = { x: 0, y: 0 }, radius = 25} = {})
{
  console.log(size, cords, radius);
  // zeichne ein paar Graphen
}

drawES2015Chart({
  cords: { x: 18, y: 30 },
  radius: 30
});
```

> **Note:** In der Funktionssignatur für **`drawES2015Chart`** oben ist der destrukturierten linken Seite ein leeres Objektliteral zugewiesen, auf der rechten Seite: `{size = 'big', cords = {x: 0, y: 0}, radius = 25} = {}`. Man kann die Funktion auch ohne die rechte Zuweisungsseite schreiben. Wenn jedoch die Zuweisung auf der rechten Seite weglassen wird, sucht die Funktion nach mindestens einem Argument, das beim Aufruf bereitgestellt wird, während man in der aktuellen Form einfach **`drawES2015Chart()`** aufrufen kann, ohne Parameter anzugeben. Das aktuelle Design ist nützlich, wenn man die Funktion, ohne Parameter anzugeben, aufrufen möchte. Das andere ist nützlich, um sicherzustellen , dass ein Objekt an die Funktion übergeben wird.

### Destrukturierung von verschachtelten Objekten und Arrays

```js
var metadata = {
    title: "Scratchpad",
    translations: [
      {
        locale: "de",
        localization_tags: [ ],
        last_edit: "2014-04-14T08:43:37",
        url: "/de/docs/Tools/Scratchpad",
        title: "JavaScript-Umgebung"
      }
    ],
    url: "/en-US/docs/Tools/Scratchpad"
};

var { title: englishTitle, translations: [{ title: localeTitle }] } = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle);  // "JavaScript-Umgebung"
```

### "for of" Iteration und Destrukturierung

```js
var people = [
  {
    name: "Mike Smith",
    family: {
      mother: "Jane Smith",
      father: "Harry Smith",
      sister: "Samantha Smith"
    },
    age: 35
  },
  {
    name: "Tom Jones",
    family: {
      mother: "Norah Jones",
      father: "Richard Jones",
      brother: "Howard Jones"
    },
    age: 25
  }
];

for (var {name: n, family: { father: f } } of people) {
  console.log("Name: " + n + ", Father: " + f);
}

// "Name: Mike Smith, Father: Harry Smith"
// "Name: Tom Jones, Father: Richard Jones"
```

### Auspacken von Objektfeldern, die als Funktionsparameter übergeben werden

```js
function userId({id}) {
  return id;
}

function whois({displayName: displayName, fullName: {firstName: name}}){
  console.log(displayName + " is " + name);
}

var user = {
  id: 42,
  displayName: "jdoe",
  fullName: {
      firstName: "John",
      lastName: "Doe"
  }
};

console.log("userId: " + userId(user)); // "userId: 42"
whois(user); // "jdoe is John"
```

Dies ermittelt `id`, `displayName` und `firstName` vom user Objekt und gibt sie aus.

### Berechnete Objekteigenschaftsnamen und Destrukturierung

Berechnete Eigenschaftsnamen, wie bei [Objektliteralen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names), können bei der Destruktierung verwendet werden.

```js
let key = "z";
let { [key]: foo } = { z: "bar" };

console.log(foo); // "bar"
```

### Rest in Objektdestrukturierung

Die [Rest/Spread Eigenschaften für den ECMAScript](https://github.com/tc39/proposal-object-rest-spread) Vorschlag (Stage 3) fügt die [Rest-](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters)Syntax zur Destrukturierung hinzu. Rest Eigenschaften sammeln die restlichen, eigenen, aufzählbaren Eigenschaftsschlüssel, die noch nicht von der Destrukturierung erfasst wurden, auf.

```js
var {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40};
a; // 10
b; // 20
rest; // { c: 30, d: 40 }
```

### Ungültige JavaScript Bezeichner als Eigenschaftsnamen

Destrukturierung kann mit Eigenschaftsnamen benutzt werden, die keine gültigen JavaScript [Bezeichner](/de/docs/Glossary/Identifier) sind, indem ein alternativer valider Beizeichner angegeben wird.

```js
const foo = { 'fizz-buzz': true }
const { 'fizz-buzz': fizzBuzz } = foo

console.log(fizzBuzz); // "true"
```

## Spezifikationen

| Spezifikation                                                                                                    | Status                       | Kommentar            |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-destructuring-assignment', 'Destructuring assignment')}} | {{Spec2('ES2015')}}     | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-destructuring-assignment', 'Destructuring assignment')}} | {{Spec2('ESDraft')}} |                      |
| [Rest/Spread Properties for ECMAScript](https://github.com/tc39/proposal-object-rest-spread)                     | Draft                        | Stage 3 Entwurf.     |

## Browserkompatibilität

{{Compat("javascript.operators.destructuring")}}

## Siehe auch

- [Zuweisungsoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Assignment_Operators)
- ["ES6 in Depth: Destructuring" auf hacks.mozilla.org](https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/)
- [Multiple ways of using destructuring assignments (Stack Overflow)](https://stackoverflow.com/questions/28532868/basic-nodejs-require-syntax#28532919)
