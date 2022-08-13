---
title: Vergleiche auf Gleichheit und deren Verwendung
slug: Web/JavaScript/Equality_comparisons_and_sameness
translation_of: Web/JavaScript/Equality_comparisons_and_sameness
original_slug: Web/JavaScript/Vergleiche_auf_Gleichheit_und_deren_Verwendung
---
{{jsSidebar("Intermediate")}}

JavaScript bietet drei verschiedene Operationen an, um Werte zu vergleichen:

- strikte Gleichheit (oder "triple equals" or "identity") mit [===](/de/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Identity),
- lose Gleichheit ("double equals") mit [==](/de/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Equality),
- und [`Object.is`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/is "/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is") (neu in ECMAScript 2015).

Die Wahl der Operation hängt von der Art des gewünschten Vergleichs auf Gleichheit ab.

Kurz gesagt nimmt double equals eine Typkonvertierung der Operanden vor, bevor der Vergleich der Werte gemacht wird. Bei triple equals werden die Werte ohne vorherige Typkonvertierung miteinander verglichen. Wenn sich die Datentypen der beiden Operanden unterscheiden liefert triple equals immer `false` zurück. [`Object.is`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/is "/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is") verhält sich wie triple equals und bietet darüber hinaus eine spezielle Behandlung für `NaN` und `-0` und `+0` an. `-0` und `+0` sind für `Object.is` ungleich während `Object.is(NaN, NaN) true` ist. Laut IEEE 754 ergibt ein Vergleich von zwei `NaN` mit double equals oder triple equals `false`. Diese drei Operationen unterscheiden sich ihrere Behandlung von primitiven Datentypen. Es wird nicht geprüft, ob die beiden Operanden konzeptionell diesselbe Struktur besitzen. Für die nichtprimitiven Objekte x und y, welche diesselbe Struktur besitzen aber zwei unterschiedliche Objekte sind, ergeben die drei Operationen `false`.

## Strikte Gleichheit mit `===`

Strikte Gleichheit prüft zwei Werte auf Gleichheit. Keiner der Werte wird vor dem Vergleich implizit konvertiert. Wenn die Werte verschiedene Datentypen haben, werden die Werte als ungleich betrachtet. Anderenfalls, wenn die Werte denselben Datentyp haben und keine Zahlen sind, werden sie als gleich betrachtet, solange sie denselben Wert haben. Wenn beide Werte Zahlen sind, werden sie als gleich betrachtet, solange beide nicht NaN sind und denselben Wert haben oder der eine Wert +0 und der andere Wert -0 ist.

```js
var num = 0;
var obj = new String("0");
var str = "0";
var b = false;

console.log(num === num); // true
console.log(obj === obj); // true
console.log(str === str); // true

console.log(num === obj); // false
console.log(num === str); // false
console.log(obj === str); // false
console.log(null === undefined); // false
console.log(obj === null); // false
console.log(obj === undefined); // false
```

Strikte Gleichheit ist fast immer die am meisten geeignete Vergleichsoperation. Für alle Werte, die keine Zahlen sind, verwendet sie die naheliegende Semantik: ein Wert ist nur mit sich selbst gleich. Für Zahlen kommt eine leicht unterschiedliche Semantik zum Einsatz, da zwei Grenzfälle berücksichtigt werden müssen. Im ersten Grenzfall kann die Zahl 0 als Gleitkommazahl ein positives oder negatives Vorzeichen haben. Dies kann zur Repräsentation von bestimmten mathematischen Lösungen nützlich sein. Da aber in den meisten Situationen nicht zwischen +0 und -0 unterschieden wird, behandelt die strikte Gleichheit diese zwei Werte als gleich. Der zweite Grenzfall ergibt sich dadruch, dass Gleitkommazahlen einen keine-Zahl Wert haben, `NaN` (not-a-number). Dadurch können Lösungen für schlecht definierte mathematische Probleme dargestellt werden (z.B.: negativ unendlich plus positiv undendlich). Strikte Gleichheit behandelt `NaN` als ungleich zu jedem anderen Wert und sich selbst. Der einzige Fall, in dem `(x !== x)` `true` ergibt, ist, wenn `x` den Wert `NaN` hat.

## Lose Gleichheit mit `==`

Lose Gleichheit vergleicht zwei Werte auf deren Gleichheit, _nachdem_ beide zu demselben Datentyp konvertiert wurden. Nach der Konvertierung (ein oder beide Werte können konvertiert werden) wird der finale Vergleich wie bei `===` ausgeführt. Lose Gleichheit ist _symmetrisch_: `A == B` hat immer dieselbe Semantik wie `B == A` für alle Werte von `A` und `B`.

Der Vergleich auf Gleichheit wird wie folgt für Operanden mit den verschiedenen Datentypen ausgeführt:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row"></th>
      <th colspan="7" scope="col" style="text-align: center">Operand B</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td></td>
      <td style="text-align: center">Undefined</td>
      <td style="text-align: center">Null</td>
      <td style="text-align: center">Number</td>
      <td style="text-align: center">String</td>
      <td style="text-align: center">Boolean</td>
      <td style="text-align: center">Object</td>
    </tr>
    <tr>
      <th colspan="1" rowspan="6" scope="row">Operand A</th>
      <td>Undefined</td>
      <td style="text-align: center"><code>true</code></td>
      <td style="text-align: center"><code>true</code></td>
      <td style="text-align: center"><code>false</code></td>
      <td style="text-align: center"><code>false</code></td>
      <td style="text-align: center"><code>false</code></td>
      <td style="text-align: center"><code>IsFalsy(B)</code></td>
    </tr>
    <tr>
      <td>Null</td>
      <td style="text-align: center"><code>true</code></td>
      <td style="text-align: center"><code>true</code></td>
      <td style="text-align: center"><code>false</code></td>
      <td style="text-align: center"><code>false</code></td>
      <td style="text-align: center"><code>false</code></td>
      <td style="text-align: center"><code>IsFalsy(B)</code></td>
    </tr>
    <tr>
      <td>Number</td>
      <td style="text-align: center"><code>false</code></td>
      <td style="text-align: center"><code>false</code></td>
      <td style="text-align: center"><code>A === B</code></td>
      <td style="text-align: center"><code>A === ToNumber(B)</code></td>
      <td style="text-align: center"><code>ToNumber(B) === A</code></td>
      <td style="text-align: center"><code>ToPrimitive(B) == A</code></td>
    </tr>
    <tr>
      <td>String</td>
      <td style="text-align: center"><code>false</code></td>
      <td style="text-align: center"><code>false</code></td>
      <td style="text-align: center"><code>B === ToNumber(A)</code></td>
      <td style="text-align: center"><code>A === B</code></td>
      <td style="text-align: center">
        <code>ToNumber(A) === ToNumber(B)</code>
      </td>
      <td style="text-align: center"><code>ToPrimitive(B) == A</code></td>
    </tr>
    <tr>
      <td>Boolean</td>
      <td style="text-align: center"><code>false</code></td>
      <td style="text-align: center"><code>false</code></td>
      <td style="text-align: center"><code>ToNumber(A) === B</code></td>
      <td style="text-align: center">
        <code>ToNumber(A) === ToNumber(B)</code>
      </td>
      <td style="text-align: center"><code>A === B</code></td>
      <td style="text-align: center"><code>false</code></td>
    </tr>
    <tr>
      <td>Object</td>
      <td style="text-align: center"><code>IsFalsy(A)</code></td>
      <td style="text-align: center"><code>IsFalsy(A)</code></td>
      <td style="text-align: center"><code>ToPrimitive(A) == B</code></td>
      <td style="text-align: center"><code>ToPrimitive(A) == B</code></td>
      <td style="text-align: center"><code>false</code></td>
      <td style="text-align: center">
        <p><code>A === B</code></p>
      </td>
    </tr>
  </tbody>
</table>

In der oberen Tabelle versucht `ToNumber(A)` sein Argument vor dem Vergleich in eine Zahl zu konvertieren. Das Verhalten ist äquivalent zu `+A` (der unäre + Operator). `ToPrimitive(A)` versucht sein Argument, das ein Objekt ist, in einen primitiven Wert zu konvertieren. Dazu wird eine unterschiedliche Sequenz von `A.toString` und `A.valueOf` Methoden von `A` aufzurufen.

Traditionell und laut ECMAScript sind alle Objekte lose ungleich zu `undefined` und `null`. Aber die meisten Webbbrowser erlauben einer sehr kleinen Menge von Objekten (speziell das `document.all` Objekt für jede Seite), dass sie sich in bestimmten Kontexten so verhalten, als ob sie den Wert `undefined` _emulieren_. Lose Gleichheit ist ein derartiger Kontext. Daher ergibt die Methode `IsFalsy(A)` genau dann `true`, wenn A ein Objekt ist, das `undefined` _emuliert_. In allen anderen Fällen ist ein Objekt nie lose gleich zu `undefined` oder `null`.

```js
var num = 0;
var obj = new String("0");
var str = "0";
var b = false;

console.log(num == num); // true
console.log(obj == obj); // true
console.log(str == str); // true

console.log(num == obj); // true
console.log(num == str); // true
console.log(obj == str); // true
console.log(null == undefined); // true

// both false, except in rare cases
console.log(obj == null);
console.log(obj == undefined);
```

Manche Entwickler haben die Ansicht, dass die Verwendung der losen Gleichheit fast nie eine gute Idee ist. Das Resultat des Vergleichs mit strikter Gleichheit ist einfacher vorherzusagen und die Auswertung ist schneller, da keine Konvertierung der Werte stattfindet.

## Same-value Gleichheit

Same-value Gleichheit adressiert den dritten Fall: Bestimmung, ob zwei Werte in allen Kontexten _funktional identisch_ sind. Dieser Anwendungsfall demonstriert eine Instanz des [Liskovschen Substitutionsprinzip](http://de.wikipedia.org/wiki/Liskovsches_Substitutionsprinzip). Eine Instanz tritt auf, wenn versucht wird ein nicht veränderbares Property zu verändern:

```js
// Add an immutable NEGATIVE_ZERO property to the Number constructor.
Object.defineProperty(Number, "NEGATIVE_ZERO",
                      { value: -0, writable: false, configurable: false, enumerable: false });

function attemptMutation(v)
{
  Object.defineProperty(Number, "NEGATIVE_ZERO", { value: v });
}
```

`Object.defineProperty` wird eine Exception werfen, wenn ein Versuch zum Verändern eines unveränderbares Property es verändern würde. Es passiert nichts, solange keine Veränderung stattfinden soll. Wenn `v` `-0` ist, wurde keine Veränderung angefragt und somit wird keine Exception geworfen. Wenn `v` aber `+0` ist, hätte `Number.NEGATIVE_ZERO` nicht länger seinen unveränderbaren Wert. Wenn ein unveränderbares Property neudefiniert wird, wird der neu spezifizierte Wert intern mittels der Same-value Gleichheit mit dem aktuellen Wert verglichen.

Die Same-value Gleichheit wird von der [`Object.is`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/is "/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is") Methode angeboten.

## Abstrakte Gleichheit, strikte Gleichheit und same-value Gleichheit in der Spezifikation

In ECMAScript 5 wird der Vergleich mit [`==`](/de/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) in [Section 11.9.3, The Abstract Equality Algorithm](http://ecma-international.org/ecma-262/5.1/#sec-11.9.3) beschrieben. Der [`===`](/de/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) Vergleich ist in [11.9.6, The Strict Equality Algorithm](http://ecma-international.org/ecma-262/5.1/#sec-11.9.6) zu finden. (Diese beiden Abschnitte sind kurz und verständlich. Hinweis: zuerst den Abschnitt Strict Equality Algorithm lesen) ECMAScript 5 beschreibt auch die same-value Gleichheit in [Section 9.12, The SameValue Algorithm](http://ecma-international.org/ecma-262/5.1/#sec-9.12) für die interne Verwendung in der JavaScript Engine. Dieser Abschnitt ist hauptsächlich derselbe wie Strict Equality Algorithm mit der Ausnahme, dass sich 11.9.6.4 und 9.12.4 in der Behandlung von Zahlen ([`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number "/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number")) unterscheiden. ECMAScript 2015 schlägt vor, dass dieser Algorithmus über [`Object.is`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/is "/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is") angeboten wird.

Wir können erkennen, dass mit double und triple equals, mit der Ausnahme der vorhergehenden Typkonvertierung in 11.9.6.1, der Strict Equality Algorithm eine Teilmenge des Abstract Equality Algorithm ist, weil 11.9.6.2–7 dem Abschnitt 11.9.3.1.a–f entspricht.

## A model for understanding equality comparisons?

Prior to ES2015, you might have said of double equals and triple equals that one is an "enhanced" version of the other. For example, someone might say that double equals is an extended version of triple equals, because the former does everything that the latter does, but with type conversion on its operands. E.g., `6 == "6"`. (Alternatively, someone might say that double equals is the baseline, and triple equals is an enhanced version, because it requires the two operands to be the same type, so it adds an extra constraint. Which one is the better model for understanding depends on how you choose to view things.)

However, this way of thinking about the built-in sameness operators is not a model that can be stretched to allow a place for ES2015's [`Object.is`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/is) on this "spectrum". [`Object.is`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/is) isn't simply "looser" than double equals or "stricter" than triple equals, nor does it fit somewhere in between (i.e., being both stricter than double equals, but looser than triple equals). We can see from the sameness comparisons table below that this is due to the way that [`Object.is`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/is) handles [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN). Notice that if `Object.is(NaN, NaN)` evaluated to `false`, we _could_ say that it fits on the loose/strict spectrum as an even stricter form of triple equals, one that distinguishes between `-0` and `+0`. The [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) handling means this is untrue, however. Unfortunately, [`Object.is`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/is) simply has to be thought of in terms of its specific characteristics, rather than its looseness or strictness with regard to the equality operators.

| x                   | y                   | `==`    | `===`   | `Object.is` |
| ------------------- | ------------------- | ------- | ------- | ----------- |
| `undefined`         | `undefined`         | `true`  | `true`  | `true`      |
| `null`              | `null`              | `true`  | `true`  | `true`      |
| `true`              | `true`              | `true`  | `true`  | `true`      |
| `false`             | `false`             | `true`  | `true`  | `true`      |
| `"foo"`             | `"foo"`             | `true`  | `true`  | `true`      |
| `{ foo: "bar" }`    | `x`                 | `true`  | `true`  | `true`      |
| `0`                 | `0`                 | `true`  | `true`  | `true`      |
| `+0`                | `-0`                | `true`  | `true`  | `false`     |
| `0`                 | `false`             | `true`  | `false` | `false`     |
| `""`                | `false`             | `true`  | `false` | `false`     |
| `""`                | `0`                 | `true`  | `false` | `false`     |
| `"0"`               | `0`                 | `true`  | `false` | `false`     |
| `"17"`              | `17`                | `true`  | `false` | `false`     |
| `[1,2]`             | `"1,2"`             | `true`  | `false` | `false`     |
| `new String("foo")` | `"foo"`             | `true`  | `false` | `false`     |
| `null`              | `undefined`         | `true`  | `false` | `false`     |
| `null`              | `false`             | `false` | `false` | `false`     |
| `undefined`         | `false`             | `false` | `false` | `false`     |
| `{ foo: "bar" }`    | `{ foo: "bar" }`    | `false` | `false` | `false`     |
| `new String("foo")` | `new String("foo")` | `false` | `false` | `false`     |
| `0`                 | `null`              | `false` | `false` | `false`     |
| `0`                 | `NaN`               | `false` | `false` | `false`     |
| `"foo"`             | `NaN`               | `false` | `false` | `false`     |
| `NaN`               | `NaN`               | `false` | `false` | `true`      |

## When to use [`Object.is`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/is) versus triple equals

Aside from the way it treats [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN), generally, the only time [`Object.is`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/is)'s special behavior towards zeros is likely to be of interest is in the pursuit of certain meta-programming schemes, especially regarding property descriptors when it is desirable for your work to mirror some of the characteristics of [`Object.defineProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty). If your use case does not require this, it is suggested to avoid [`Object.is`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/is) and use [`===`](/de/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) instead. Even if your requirements involve having comparisons between two [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) values evaluate to `true`, generally it is easier to special-case the [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) checks (using the [`isNaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/isNaN "/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN") method available from previous versions of ECMAScript) than it is to work out how surrounding computations might affect the sign of any zeros you encounter in your comparison.

Here's an in-exhaustive list of built-in methods and operators that might cause a distinction between `-0` and `+0` to manifest itself in your code:

- [`- (unary negation)`](/de/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#-_.28Unary_Negation.29 "/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators")
  - : It's obvious that negating `0` produces `-0`. But the abstraction of an expression can cause `-0` to creep in when you don't realize it. For example, consider:`js let stoppingForce = obj.mass * -obj.velocity`If `obj.velocity` is `0` (or computes to `0`), a `-0` is introduced at that place and propogates out into `stoppingForce`.
- [`Math.atan2`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/atan2)

  [`Math.ceil`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil)

  [`Math.pow`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/pow)

  [`Math.round`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/round)

  - : It's possible for a `-0` to be introduced into an expression as a return value of these methods in some cases, even when no `-0` exists as one of the parameters. E.g., using [`Math.pow`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/pow) to raise `-Infinity` to the power of any negative, odd exponent evaluates to `-0`. Refer to the documentation for the individual methods.

- [`Math.floor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)

  [`Math.max`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/max)

  [`Math.min`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/min)

  [`Math.sin`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/sin)

  [`Math.sqrt`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt)

  [`Math.tan`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/tan)

  - : It's possible to get a `-0` return value out of these methods in some cases where a `-0` exists as one of the parameters. E.g., `Math.min(-0, +0)` evalutes to `-0`. Refer to the documentation for the individual methods.

- [`~`](/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators "/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators")

  [`<<`](/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators "/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators")

  [`>>`](/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators "/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators")

  - : Each of these operators uses the ToInt32 algorithm internally. Since there is only one representation for 0 in the internal 32-bit integer type, `-0` will not survive a round trip after an inverse operation. E.g., both `Object.is(~~(-0), -0)` and `Object.is(-0 << 2 >> 2, -0)` evaluate to `false`.

Relying on [`Object.is`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/is) when the signedness of zeros is not taken into account can be hazardous. Of course, when the intent is to distinguish between `-0` and `+0`, it does exactly what's desired.

## Siehe auch

- [JS Comparison Table](http://dorey.github.io/JavaScript-Equality-Table/)
