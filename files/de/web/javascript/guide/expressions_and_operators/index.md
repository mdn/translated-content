---
title: Ausdrücke und Operatoren
slug: Web/JavaScript/Guide/Expressions_and_Operators
tags:
  - Beginner
  - Extensions
  - Guide
  - JavaScript
  - Operatoren
  - l10n:priority
translation_of: Web/JavaScript/Guide/Expressions_and_Operators
original_slug: Web/JavaScript/Guide/Ausdruecke_und_Operatoren
---
{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Funktionen", "Web/JavaScript/Guide/Numbers_and_dates")}}

Dieses Kapitel beschreibt JavaScript Ausdrücke und Operatoren, Zuweisungsoperatoren, Vergleichsoperatoren, Rechenoperatoren, Bit-Operatoren, Logische Operatoren, Operator zur Zeichenkettenverknüpfung, Bedingte (ternäre) Operatoren und mehr.

Eine vollständige und detaillierte Liste mit Operatoren und Ausdrücken ist in den [Referenzen](/de/docs/Web/JavaScript/Reference/Operators) zu finden.

## Operatoren

JavaScript besitzt verschiedene Operatortypen. Dieser Abschnitt beschreibt die einzelnen Operatoren und beinhaltet Informationen über die Operator-Prioritäten.

- {{ web.link("#Assignment_operators", "Zuweisungs-Operatoren") }}
- {{ web.link("#Comparison_operators", "Vergleichs-Operatoren") }}
- {{ web.link("#Arithmetic_operators", "Arithmetische Operatoren") }}
- {{ web.link("#Bitwise_operators", "Bit-Operatoren") }}
- {{ web.link("#Logical_operators", "Logische Operatoren") }}
- {{ web.link("#String_operators", "String Operatoren") }}
- {{ web.link("#Conditional_(ternary)_operator", "Bedingter (ternärer) Operator")}}
- {{ web.link("#Comma_operator", "Komma Operator")}}
- {{ web.link("#Unary_operators", "Unäre Operatoren")}}
- {{ web.link("#Relational_operators", "Vergleichsoperator")}}

JavaScript verfügt über beides, binäre als auch unäre Operatoren. Zudem existiert ein spezieller ternärer Operator - der Bedingungsoperator. Ein binärer Operator benötigt zwei Operanden, einen vor dem Operator und einen nach dem Operator:

    operand1 operator operand2

Zum Beispiel: `3+4`, oder `x*y`.

Ein unärer Operator erwartet einen einzelnen Operanden, entweder vor, oder nach dem Operator:

    operator operand

oder

    operand operator

Zum Beispiel: `x++`, oder `++x`.

### Zuweisungsoperatoren

Ein Zuweisungsoperator weißt seinem linken Operanden einen Wert zu. Dieser Wert basiert auf dem Ergebnis des rechten Operanden. Der einfachste Zuweisungsoperator ist das "Gleich" (`=`), welches den Wert des rechten Operanden dem linken Operanden zuweist.

Zum Beispiel: `x = y` (`y` wid der Wert von `x` zugewiesen).

Es gibt auch zusammengesetzte Zuweisungsoperatoren, diese stellen Abkürzungen für die in der folgenden Tabelle aufgelisteten Operationen dar:

| Name                                                                                                                                                     | Abgekürzter Operator | Ausgeschriebener Operator |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | ------------------------- |
| [Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Assignment "Zuweisung")                                                     | `x = y`              | `x = y`                   |
| [Addition](/de/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Addition_assignment)                                                         | `x += y`             | `x = x + y`               |
| [Subraktion](/de/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Subtraction_assignment)                                                    | `x -= y`             | `x = x - y`               |
| [Multiplikation](/de/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Multiplication_assignment)                                             | `x *= y`             | `x = x * y`               |
| [Division](/de/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Division_assignment)                                                         | `x /= y`             | `x = x / y`               |
| [Modulo (Division mit Rest)](/de/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Remainder_assignment)                                      | `x %= y`             | `x = x % y`               |
| [Exponentiation assignment](/de/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Exponentiation_assignment) {{experimental_inline}} | `x **= y`            | `x = x ** y`              |
| [Left shift assignment](/de/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Left_shift_assignment)                                          | `x <<= y`            | `x = x << y`              |
| [Right shift assignment](/de/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Right_shift_assignment)                                        | `x >>= y`            | `x = x >> y`              |
| [Unsigned right shift assignment](/de/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Unsigned_right_shift_assignment)                      | `x >>>= y`           | `x = x >>> y`             |
| [Bitwise AND assignment](/de/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Bitwise_AND_assignment)                                        | `x &= y`             | `x = x & y`               |
| [Bitwise XOR assignment](/de/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Bitwise_XOR_assignment)                                        | `x ^= y`             | `x = x ^ y`               |
| [Bitwise OR assignment](/de/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Bitwise_OR_assignment)                                          | `x \|= y`            | `x = x \| y`              |

#### Destrukturierung

Komplexere Zuweisungen ermöglicht Javascript über die sogenannte [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment). Diese ermöglicht es, Daten aus Arrays oder Objekten mithilfe einer Syntax zu extrahieren, die die Konstruktion von Array- und Objektliteralen widerspiegelt.

```js
var foo = ["eins", "zwei", "drei"];

// Ohne Destrukturierung
var eins   = foo[0];
var zwei   = foo[1];
var drei   = foo[2];

// mit Destrukturierung
var [eins, zwei, drei] = foo;
```

### Vergleichsoperatoren

Ein Vergleichsoperator vergleicht seine Operanden und gibt einen logischen Wert zurück, der darauf basiert, ob der Vergleich wahr ist, oder nicht.

Die Operanden können numerische-, string-, logische- oder Objektwerte sein. Zeichenfolgen werden basierend auf der lexikographischen Standardreihenfolge mit unicodewerten verglichen. Wenn die beiden Operanden nicht vom selben Typ sind, versucht JavaScript in den meisten Fällen, sie in einen geeigneten Typ für den Vergleich zu konvertieren. Dieses Verhalten führt im Allgemeinen dazu, dass die Operanden numerisch verglichen werden. Die einzigen Ausnahmen für die Typumwandlung innerhalb von Vergleichen sind die Operatoren `===` und `!==`, die strenge Vergleiche durchführen. Diese Operatoren versuchen nicht, die Operanden in kompatible Typen zu konvertieren, bevor sie die Gleichheit überprüfen.

Die folgende Tabelle beschreibt die Vergleichsoperatoren in Bezug auf diesen Beispielcode:

```js
var var1 = 3;
var var2 = 4;
```

| Operator                                                                                                                        | Beschreibung                                                                                                                                                                                                                                                                 | Beispiele, die `true` zurückgeben    |
| ------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| [Equal](/de/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Equality) (`==`)                                       | Gibt `true` zurück, wenn die Operanden gleich sind.                                                                                                                                                                                                                          | ` 3 == var1``"3" == var1``3 == '3' ` |
| [Not equal](/de/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Inequality) (`!=`)                                 | Gibt `true` zurück, wenn die Operanden ungleich sind.                                                                                                                                                                                                                        | `var1 != 4 var2 != "3"`              |
| [Strict equal](/de/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Identity) (`===`)                               | Gibt `true` zurück, wenn die Operanden gleich sind und auch der Typ übereinstimmt. Weitere Informationen unter {{jsxref("Object.is")}} und [sameness in JS](/de/docs/Web/JavaScript/Equality_comparisons_and_sameness "/en-US/docs/Web/JavaScript/Guide/Sameness"). | `3 === var1`                         |
| [Strict not equal](/de/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Nonidentity) (`!==`)                        | Gibt `true` zurück, wenn die Operanden vom selben Typ sind, doch nicht den selben Wert haben, oder wenn sie den selben Wert haben, doch nicht vom selben Typ sind.                                                                                                           | `var1 !== "3" 3 !== '3'`             |
| [Greater than](/de/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Greater_than_operator) (`>`)                    | Gibt `true` zurück, wenn der linke Operand größer dem rechten Operanden ist.                                                                                                                                                                                                 | `var2 > var1 "12" > 2`               |
| [Greater than or equal](/de/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Greater_than_or_equal_operator) (`>=`) | Gibt `true` zurück, wenn der linke Operand größer als, oder gleich dem linken Operanden ist.                                                                                                                                                                                 | `var2 >= var1 var1 >= 3`             |
| [Less than](/de/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Less_than_operator) (`<`)                          | Gibt `true` zurück, wenn der linke Operand kleiner dem rechten Operanden ist.                                                                                                                                                                                                | `var1 < var2 "2" < 12`               |
| [Less than or equal](/de/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Less_than_or_equal_operator) (`<=`)       | Gibt `true` zurück, wenn der linke Operand kleiner als, oder gleich dem rechten Operanden ist.                                                                                                                                                                               | `var1 <= var2 var2 <= 5`             |

> **Note:**(**=>**) ist kein Operator, hiermit werden [Arrow functions](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) notiert.

### Arithmetische Operatoren (Rechenzeichen)

Ein [arithmetischer Operator](/de/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators) nimmt numerische Werte (Literale oder Variablen) als Operanden entgegen und gibt einen einzelnen numerischen Wert zurück. Die arithmetischen Standardoperatoren sind Addition (`+)`, Subtraktion (`-`), Multiplikation (`*`) und Division (`/`). Diese Operatoren funktionieren wie in den meisten anderen Programmiersprachen, wenn sie mit Fließkommazahlen verwendet werden (beachten Sie insbesondere, dass die Division durch Null {{jsxref ("Infinity")}} ergibt).

```js
1 / 2; // 0.5
1 / 2 == 1.0 / 2.0; // this is true
```

Neben den arithmetischen Standardoperatoren (+, -, \* /), stellt JavaScript noch weitere Rechenzeichen zur Verfügung. Diese werden in der folgenden Tabelle aufgeführt:

| Operator                                                                                                                                           | Beschreibung                                                                                                                                                                                                                                                                 | Beispiel                                                                                                                   |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| [Remainder](/de/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder) (`%`)                                                      | Binärer Operator. Gibt den ganzzahligen Rest der Division beider Operanden zurück.                                                                                                                                                                                           | `12 % 5` gibt `2` zurück.                                                                                                  |
| [Increment](/de/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment) (`++`)                                                     | Unärer Operator. Addiert 1 zu seinem Operanden.Wenn der Operator vorangestellt wird (`++x`), gibt er den Wert seines Operanden zurück nachdem 1 addiert wurde; Wenn der Operator nachgestellt wird (`x++`), gibt er den Wert seines Operanden zurück, bevor 1 addiert wurde. | Wenn `x` gleich 3 ist, setzt `++x` `x` auf 4 und gibt 4 zurück, wobei `x++` 3 zurückgibt und erst danach `x` auf 4 setzt.  |
| [Decrement](/de/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Decrement) (`--`)                                                     | Unärer Operator. Subtrahiert 1 von seinem Operanden.Der Rückgabewert verhält sich analog zum increment Operator.                                                                                                                                                             | Wenn `x` gleich 3 ist, setzt `--x` `x` auf 2 und gibt 2 zurück, wobei `x--` 3 zurückgibt und erst danach, `x` auf 2 setzt. |
| [Unary negation](/de/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Unary_negation) (`-`)                                            | Unärer Operator. Gibt die Negierung seines Operanden zurück.                                                                                                                                                                                                                 | Wenn `x` gleich 3 ist, gibt `-x` -3 zurück.                                                                                |
| [Unary plus](/de/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Unary_plus) (`+`)                                                    | Versucht, den Operanden in eine Zahl umzuwandeln, wenn dies nicht bereits der Fall ist.                                                                                                                                                                                      | `+"3"` gibt `3` zurück. `+true` gibt `1` zurück.                                                                           |
| [Exponentiation operator](/de/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Exponentiation) (`**`) {{experimental_inline}} | Calculates the `base` to the `exponent` power, that is, `baseexponent`                                                                                                                                                                                                       | `2 ** 3` gibt `8` zurück. `10 ** -1` gibt `0.1 `zurück.                                                                    |

### Bitweise Operatoren

Ein bitweiser Operator behandelt seine Operanden als eine Menge von 32 Bits (Nullen und Einsen) und nicht als dezimale, hexadezimale oder oktale Zahlen. Zum Beispiel hat die Dezimalzahl Neun eine binäre Darstellung von `1001`. Bitweise Operatoren führen ihre Operationen mit solchen binären Darstellungen aus, doch sie geben standardmäßige numerische JavaScript-Werte zurück.

Die folgende Tabelle fasst die bitweisen Operatoren von JavaScript zusammen.

| Operator                                                                                                    | Verwendung | Beschreibung                                                                                                                                                            |
| ----------------------------------------------------------------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Bitwise AND](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_AND)                    | `a & b`    | Returns a one in each bit position for which the corresponding bits of both operands are ones.                                                                          |
| [Bitwise OR](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_OR)                      | `a \| b`   | Returns a zero in each bit position for which the corresponding bits of both operands are zeros.                                                                        |
| [Bitwise XOR](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_XOR)                    | `a ^ b`    | Returns a zero in each bit position for which the corresponding bits are the same. [Returns a one in each bit position for which the corresponding bits are different.] |
| [Bitwise NOT](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_NOT)                    | `~ a`      | Inverts the bits of its operand.                                                                                                                                        |
| [Left shift](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Left_shift)                      | `a << b`   | Shifts `a` in binary representation `b` bits to the left, shifting in zeros from the right.                                                                             |
| [Sign-propagating right shift](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Right_shift)   | `a >> b`   | Shifts `a` in binary representation `b` bits to the right, discarding bits shifted off.                                                                                 |
| [Zero-fill right shift](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Unsigned_right_shift) | `a >>> b`  | Shifts `a` in binary representation `b` bits to the right, discarding bits shifted off, and shifting in zeros from the left.                                            |

#### Bitweise logische Operatoren

Konzeptuell arbeiten bitweise logische Operatoren wie folgt:

- Die Operanden werden zu 32 Bit Integer Zahlen konvertiert und als Folge von Bits (Nullen und Einsen) dargestellt. Zahlen mit mehr als 32 Bits verlieren dabei ihre signifikanten Bits bis auf eine Länge von 32. Im folgenden Beispiel wird eine Zahl mit mehr als 32 Bits zu einer 32 Bit Integer Zahl konvertiert:

      Before: 11100110111110100000000000000110000000000001
      After:              10100000000000000110000000000001

- Jedes Bit des ersten Operanden wird mit dem korrespondierenden Bit im zweiten Operanden gepaart: Erstes Bit mit dem ersten Bit, zweites Bit mit dem zweiten Bit und so weiter.
- Der Operator wird auf jedes paar von Bits angewendet und das Ergebnis bitweise erstellt.

Zum Beispiel ist die binäre Darstellung der Zahl neun 1001, die binäre Darstellung der Zahl 15 ist 1111. Wenn die bitweisen logischen Operatoren auf diese Zahlen angewendet werden, ergeben sich folgende Ergebnisse:

| Ausdruck  | Ergebnis | Binäre Darstellung                                                |
| --------- | -------- | ----------------------------------------------------------------- |
| `15 & 9`  | `9`      | `1111 & 1001 = 1001`                                              |
| `15 \| 9` | `15`     | `1111 \| 1001 = 1111`                                             |
| `15 ^ 9`  | `6`      | `1111 ^ 1001 = 0110`                                              |
| `~15`     | `-16`    | ` ~``00000000...`` 00001111 = ``1111``1111``...``11110000 `       |
| `~9`      | `-10`    | ` ~``00000000``...``0000`` 1001 = ``1111``1111``...``1111``0110 ` |

Beachte, dass alle 32 Bits invertiert werden, wenn der bitweise NOT Operator benutzt wird. Wenn dabei das höchstwertigste (ganz linke) Bit auf 1 gesetzt wird, entsteht eine negative Zahl. Note that all 32 bits are inverted using the Bitwise NOT operator, and that values with the most significant (left-most) bit set to 1 represent negative numbers (Zweierkomplement). `~x` wird also genauso ausgewertet wie `-x - 1`.

#### Bitweise Schiebeoperatoren

Die bitweisen Schiebeoperatoren erwarten zwei Operanden. Der erste ist der Wert, der geschoben werden soll, der zweite die Anzahl der Bits, um die geschoben werden soll. Die Richtung, in die geschoben wird, wird durch den verwendeten Operator bestimmt.

Schiebeoperatoren konvertieren ihre Operanden in 32 Bit Integer Zahlen und liefern als Ergebnis einen Wert vom selben Typen wir der linke Operand.

Die Schiebeoperatoren sind in der folgenden Tabelle aufgelistet.

| Operator                                                                                                                                 | Description                                                                                                                                                                                    | Example                                                                                                                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Left shift](</de/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#<<_(Left_shift)>) (`<<`)                                     | This operator shifts the first operand the specified number of bits to the left. Excess bits shifted off to the left are discarded. Zero bits are shifted in from the right.                   | `9<<2` yields 36, because 1001 shifted 2 bits to the left becomes 100100, which is 36.                                                                                                        |
| [Sign-propagating right shift](</de/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#>>_(Sign-propagating_right_shift)>) (`>>`) | This operator shifts the first operand the specified number of bits to the right. Excess bits shifted off to the right are discarded. Copies of the leftmost bit are shifted in from the left. | `9>>2` yields 2, because 1001 shifted 2 bits to the right becomes 10, which is 2. Likewise, `-9>>2` yields -3, because the sign is preserved.                                                 |
| [Zero-fill right shift](</de/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#>>>_(Zero-fill_right_shift)>) (`>>>`)             | This operator shifts the first operand the specified number of bits to the right. Excess bits shifted off to the right are discarded. Zero bits are shifted in from the left.                  | `19>>>2` yields 4, because 10011 shifted 2 bits to the right becomes 100, which is 4. For non-negative numbers, zero-fill right shift and sign-propagating right shift yield the same result. |

### Logische Operatoren

[Logische Operatoren](/de/docs/Web/JavaScript/Reference/Operators/Logical_Operators) werden normalerweise mit boolesche (logischen) Werten verwendet - hierbei geben sie dann einen booleschen Wert zurück. Die Operatoren `&&` und `||` geben den Wert von einem der Operatoren zurück, sodass sie im Falle der Verwendung mit einem nicht-booleschen Wert auch einen nicht-booleschen Wert zurückgeben können. Die logischen Operatoren werden in der folgenden Tabelle beschrieben:

| Operator                                                                                          | Verwendung         | Beschreibung                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Logical AND](/de/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_AND)` `(`&&`) | `expr1 && expr2`   | Gibt `expr1` zurück, sofern es zu `false` konvertiert werden kann; ansonsten wird `expr2` zurückgegeben. Insofern mit booleschen Werten verwendet, `&&` gibt `true` zurück, wenn beide Operanden wahr sind; ansonsten `false`.                     |
| [Logical OR ](/de/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_OR)(`\|\|`)   | `expr1 \|\| expr2` | Gibt `expr1` zurück, sofern er zu `true` konvertiert werden kann. Insofern mit booleschen Werten verwendet, gibt der Operator `\|\|` true zurück, wenn einer von beiden Operanden `true` ist; wenn beide `false` sind, wird `false` zurückgegeben. |
| [Logical NOT ](/de/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_NOT)(`!`)    | `!expr`            | Gibt `false` zurück, wenn sein einziger Operand in `true` konvertiert werden kann; andernfalls gibt er `true` zurück.                                                                                                                              |

Beispiele von Ausdrücken, die in `false` umgewandelt werden können, sind solche, die `null`, 0, `NaN`, einen leeren String ("") oder `undefined` sind.

Die folgenden Zeilen zeigen Beispiele des `&&` (logisches UND) Operators.

```js
var a1 =  true && true;     // t && t returns true
var a2 =  true && false;    // t && f returns false
var a3 = false && true;     // f && t returns false
var a4 = false && (3 == 4); // f && f returns false
var a5 = "Cat" && "Dog";    // t && t returns Dog
var a6 = false && "Cat";    // f && t returns false
var a7 = "Cat" && false;    // t && f returns false
```

Die folgenden Zeilen zeigen Beispiele des `||` (logisches ODER) Operators:

```js
var o1 =  true || true;     // t || t returns true
var o2 = false || true;     // f || t returns true
var o3 =  true || false;    // t || f returns true
var o4 = false || (3 == 4); // f || f returns false
var o5 = "Cat" || "Dog";    // t || t returns Cat
var o6 = false || "Cat";    // f || t returns Cat
var o7 = "Cat" || false;    // t || f returns Cat
```

Die folgenden Zeilen zeigen Beispiele des `!` (logisches NICHT) Operators:

```js
var n1 = !true;  // !t returns false
var n2 = !false; // !f returns true
var n3 = !"Cat"; // !t returns false
```

#### Short-circuit-Bewertung

Da logische Ausdrücke von links nach rechts bewertet werden, werden sie auf eine mögliche "Abkürzung" (short-circuit) hin gemäß den folgenden Regeln evaluiert:

- `false` && _irgendwas_ wird abgekürzt als `false` bewertet.
- `true` || _irgendwas_ wird abgekürtz als `true` bewertet.

Die Regeln der Logik garantieren, dass diese Bewertungen immer korrekt sind. Der _irgendwas_-Operand werden in den o.g. Beispielen hierbei nicht bewertet.

### String-Operatoren

In addition to the comparison operators, which can be used on string values, the concatenation operator (+) concatenates two string values together, returning another string that is the union of the two operand strings.

For example,

```js
console.log("my " + "string"); // console logs the string "my string".
```

The shorthand assignment operator += can also be used to concatenate strings.

For example,

```js
var mystring = "alpha";
mystring += "bet"; // evaluates to "alphabet" and assigns this value to mystring.
```

### Conditional (ternary) operator

The [conditional operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) is the only JavaScript operator that takes three operands. The operator can have one of two values based on a condition. The syntax is:

    condition ? val1 : val2

If `condition` is true, the operator has the value of `val1`. Otherwise it has the value of `val2`. You can use the conditional operator anywhere you would use a standard operator.

For example,

```js
var status = (age >= 18) ? "adult" : "minor";
```

This statement assigns the value "adult" to the variable `status` if `age` is eighteen or more. Otherwise, it assigns the value "minor" to `status`.

### Comma operator

The [comma operator](/de/docs/Web/JavaScript/Reference/Operators/Comma_Operator) (`,`) simply evaluates both of its operands and returns the value of the last operand. This operator is primarily used inside a `for` loop, to allow multiple variables to be updated each time through the loop.

For example, if `a` is a 2-dimensional array with 10 elements on a side, the following code uses the comma operator to update two variables at once. The code prints the values of the diagonal elements in the array:

```js
var x = [0,1,2,3,4,5,6,7,8,9];
var a = [x, x, x, x, x]

for (var i = 0, j = 9; i <= j; i++, j--)
  console.log("a[" + i + "][" + j + "]= " + a[i][j]);
```

### Unary operators

A unary operation is an operation with only one operand.

#### `delete`

The [`delete`](/en-US/docs/Web/JavaScript/Reference/Operators/delete) operator deletes an object, an object's property, or an element at a specified index in an array. The syntax is:

```js
delete objectName;
delete objectName.property;
delete objectName[index];
delete property; // legal only within a with statement
```

where `objectName` is the name of an object, `property` is an existing property, and `index` is an integer representing the location of an element in an array.

The fourth form is legal only within a [`with`](/en-US/docs/Web/JavaScript/Reference/Statements/with) statement, to delete a property from an object.

You can use the `delete` operator to delete variables declared implicitly but not those declared with the `var` statement.

If the `delete` operator succeeds, it sets the property or element to `undefined`. The `delete` operator returns true if the operation is possible; it returns `false` if the operation is not possible.

```js
x = 42;
var y = 43;
myobj = new Number();
myobj.h = 4;    // create property h
delete x;       // returns true (can delete if declared implicitly)
delete y;       // returns false (cannot delete if declared with var)
delete Math.PI; // returns false (cannot delete predefined properties)
delete myobj.h; // returns true (can delete user-defined properties)
delete myobj;   // returns true (can delete if declared implicitly)
```

##### Deleting array elements

When you delete an array element, the array length is not affected. For example, if you delete `a[3]`, `a[4]` is still `a[4]` and `a[3]` is undefined.

When the `delete` operator removes an array element, that element is no longer in the array. In the following example, `trees[3]` is removed with `delete`. However, `trees[3]` is still addressable and returns `undefined`.

```js
var trees = ["redwood", "bay", "cedar", "oak", "maple"];
delete trees[3];
if (3 in trees) {
  // this does not get executed
}
```

If you want an array element to exist but have an undefined value, use the `undefined` keyword instead of the `delete` operator. In the following example, `trees[3]` is assigned the value `undefined`, but the array element still exists:

```js
var trees = ["redwood", "bay", "cedar", "oak", "maple"];
trees[3] = undefined;
if (3 in trees) {
  // this gets executed
}
```

#### `typeof`

The [`typeof` operator](/de/docs/Web/JavaScript/Reference/Operators/typeof) is used in either of the following ways:

    typeof operand
    typeof (operand)

The `typeof` operator returns a string indicating the type of the unevaluated operand. `operand` is the string, variable, keyword, or object for which the type is to be returned. The parentheses are optional.

Suppose you define the following variables:

```js
var myFun = new Function("5 + 2");
var shape = "round";
var size = 1;
var today = new Date();
```

The `typeof` operator returns the following results for these variables:

```js
typeof myFun;     // returns "function"
typeof shape;     // returns "string"
typeof size;      // returns "number"
typeof today;     // returns "object"
typeof dontExist; // returns "undefined"
```

For the keywords `true` and `null`, the `typeof` operator returns the following results:

```js
typeof true; // returns "boolean"
typeof null; // returns "object"
```

For a number or string, the `typeof` operator returns the following results:

```js
typeof 62;            // returns "number"
typeof 'Hello world'; // returns "string"
```

For property values, the `typeof` operator returns the type of value the property contains:

```js
typeof document.lastModified; // returns "string"
typeof window.length;         // returns "number"
typeof Math.LN2;              // returns "number"
```

For methods and functions, the `typeof` operator returns results as follows:

```js
typeof blur;        // returns "function"
typeof eval;        // returns "function"
typeof parseInt;    // returns "function"
typeof shape.split; // returns "function"
```

For predefined objects, the `typeof` operator returns results as follows:

```js
typeof Date;     // returns "function"
typeof Function; // returns "function"
typeof Math;     // returns "object"
typeof Option;   // returns "function"
typeof String;   // returns "function"
```

#### `void`

The [`void` operator](/de/docs/Web/JavaScript/Reference/Operators/void) is used in either of the following ways:

    void (expression)
    void expression

The `void` operator specifies an expression to be evaluated without returning a value. `expression` is a JavaScript expression to evaluate. The parentheses surrounding the expression are optional, but it is good style to use them.

You can use the `void` operator to specify an expression as a hypertext link. The expression is evaluated but is not loaded in place of the current document.

The following code creates a hypertext link that does nothing when the user clicks it. When the user clicks the link, `void(0)` evaluates to `undefined`, which has no effect in JavaScript.

```html
Click here to do nothing
```

The following code creates a hypertext link that submits a form when the user clicks it.

```html

Click here to submit
```

### Relational operators

A relational operator compares its operands and returns a `Boolean` value based on whether the comparison is true.

#### `in`

The [`in` operator](/de/docs/Web/JavaScript/Reference/Operators/in) returns true if the specified property is in the specified object. The syntax is:

```js
propNameOrNumber in objectName
```

where `propNameOrNumber` is a string or numeric expression representing a property name or array index, and `objectName` is the name of an object.

The following examples show some uses of the `in` operator.

```js
// Arrays
var trees = ["redwood", "bay", "cedar", "oak", "maple"];
0 in trees;        // returns true
3 in trees;        // returns true
6 in trees;        // returns false
"bay" in trees;    // returns false (you must specify the index number,
                   // not the value at that index)
"length" in trees; // returns true (length is an Array property)

// built-in objects
"PI" in Math;          // returns true
var myString = new String("coral");
"length" in myString;  // returns true

// Custom objects
var mycar = { make: "Honda", model: "Accord", year: 1998 };
"make" in mycar;  // returns true
"model" in mycar; // returns true
```

#### `instanceof`

The [`instanceof` operator](/de/docs/Web/JavaScript/Reference/Operators/instanceof) returns true if the specified object is of the specified object type. The syntax is:

    objectName instanceof objectType

where `objectName` is the name of the object to compare to `objectType`, and `objectType` is an object type, such as {{jsxref("Date")}} or {{jsxref("Array")}}.

Use `instanceof` when you need to confirm the type of an object at runtime. For example, when catching exceptions, you can branch to different exception-handling code depending on the type of exception thrown.

For example, the following code uses `instanceof` to determine whether `theDay` is a `Date` object. Because `theDay` is a `Date` object, the statements in the `if` statement execute.

```js
var theDay = new Date(1995, 12, 17);
if (theDay instanceof Date) {
  // statements to execute
}
```

### Operator precedence

The _precedence_ of operators determines the order they are applied when evaluating an expression. You can override operator precedence by using parentheses.

The following table describes the precedence of operators, from highest to lowest.

| Operator type          | Individual operators                      |
| ---------------------- | ----------------------------------------- |
| member                 | `. []`                                    |
| call / create instance | `() new`                                  |
| negation/increment     | `! ~ - + ++ -- typeof void delete`        |
| multiply/divide        | `* / %`                                   |
| addition/subtraction   | `+ -`                                     |
| bitwise shift          | `<< >> >>>`                               |
| relational             | `< <= > >= in instanceof`                 |
| equality               | `== != === !==`                           |
| bitwise-and            | `&`                                       |
| bitwise-xor            | `^`                                       |
| bitwise-or             | `\|`                                      |
| logical-and            | `&&`                                      |
| logical-or             | `\|\|`                                    |
| conditional            | `?:`                                      |
| assignment             | `= += -= *= /= %= <<= >>= >>>= &= ^= \|=` |
| comma                  | `,`                                       |

A more detailed version of this table, complete with links to additional details about each operator, may be found in [JavaScript Reference](/de/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table).

## Expressions

An _expression_ is any valid unit of code that resolves to a value.

Every syntactically valid expression resolves to some value but conceptually, there are two types of expressions: with side effects (for example: those that assign value to a variable) and those that in some sense evaluate and therefore resolve to a value.

The expression `x = 7` is an example of the first type. This expression uses the = _operator_ to assign the value seven to the variable `x`. The expression itself evaluates to seven.

The code `3 + 4` is an example of the second expression type. This expression uses the + operator to add three and four together without assigning the result, seven, to a variable.

JavaScript has the following expression categories:

- Arithmetic: evaluates to a number, for example 3.14159. (Generally uses {{ web.link("#Arithmetic_operators", "arithmetic operators") }}.)
- String: evaluates to a character string, for example, "Fred" or "234". (Generally uses {{ web.link("#String_operators", "string operators") }}.)
- Logical: evaluates to true or false. (Often involves {{ web.link("#Logical_operators", "logical operators") }}.)
- Primary expressions: Basic keywords and general expressions in JavaScript.
- Left-hand-side expressions: Left values are the destination of an assignment.

### Primary expressions

Basic keywords and general expressions in JavaScript.

#### `this`

Use the [`this` keyword](/de/docs/Web/JavaScript/Reference/Operators/this) to refer to the current object. In general, `this` refers to the calling object in a method. Use `this` either with the dot or the bracket notation:

    this["propertyName"]
    this.propertyName

Suppose a function called `validate` validates an object's `value` property, given the object and the high and low values:

```js
function validate(obj, lowval, hival){
  if ((obj.value < lowval) || (obj.value > hival))
    console.log("Invalid Value!");
}
```

You could call `validate` in each form element's `onChange` event handler, using `this` to pass it the form element, as in the following example:

```html

```

Enter a number between 18 and 99:

{{EmbedLiveSample("", 300, 300)}}

#### Grouping operator

The grouping operator `( )` controls the precedence of evaluation in expressions. For example, you can override multiplication and division first, then addition and subtraction to evaluate addition first.

```js
var a = 1;
var b = 2;
var c = 3;

// default precedence
a + b * c     // 7
// evaluated by default like this
a + (b * c)   // 7

// now overriding precedence
// addition before multiplication
(a + b) * c   // 9

// which is equivalent to
a * c + b * c // 9
```

#### Comprehensions

Comprehensions are an experimental JavaScript feature, targeted to be included in a future ECMAScript version. There are two versions of comprehensions:

- {{experimental_inline}} {{jsxref("Operators/Array_comprehensions", "[for (x of y) x]")}}
  - : Array comprehensions.
- {{experimental_inline}} {{jsxref("Operators/Generator_comprehensions", "(for (x of y) y)")}}
  - : Generator comprehensions.

Comprehensions exist in many programming languages and allow you to quickly assemble a new array based on an existing one, for example.

```js
[for (i of [ 1, 2, 3 ]) i*i ];
// [ 1, 4, 9 ]

var abc = [ "A", "B", "C" ];
[for (letter of abc) letter.toLowerCase()];
// [ "a", "b", "c" ]
```

### Left-hand-side expressions

Left values are the destination of an assignment.

#### `new`

You can use the [`new` operator](/de/docs/Web/JavaScript/Reference/Operators/new) to create an instance of a user-defined object type or of one of the built-in object types. Use `new` as follows:

```js
var objectName = new objectType([param1, param2, ..., paramN]);
```

#### super

The [super keyword](/de/docs/Web/JavaScript/Reference/Operators/super) is used to call functions on an object's parent. It is useful with [classes](/de/docs/Web/JavaScript/Reference/Classes) to call the parent constructor, for example.

    super([arguments]); // calls the parent constructor.
    super.functionOnParent([arguments]);

#### Spread operator

The [spread operator](/de/docs/Web/JavaScript/Reference/Operators/Spread_operator) allows an expression to be expanded in places where multiple arguments (for function calls) or multiple elements (for array literals) are expected.

**Example:** Today if you have an array and want to create a new array with the existing one being part of it, the array literal syntax is no longer sufficient and you have to fall back to imperative code, using a combination of `push`, `splice`, `concat`, etc. With spread syntax this becomes much more succinct:

```js
var parts = ['shoulder', 'knees'];
var lyrics = ['head', ...parts, 'and', 'toes'];
```

Similarly, the spread operator works with function calls:

```js
function f(x, y, z) { }
var args = [0, 1, 2];
f(...args);
```

{{PreviousNext("Web/JavaScript/Guide/Funktionen", "Web/JavaScript/Guide/Numbers_and_dates")}}
