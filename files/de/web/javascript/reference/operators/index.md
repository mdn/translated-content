---
title: Ausdrücke und Operatoren
slug: Web/JavaScript/Reference/Operators
tags:
  - JavaScript
  - Operators
translation_of: Web/JavaScript/Reference/Operators
---
{{jsSidebar("Operators")}}

Dieses Kapitel behandelt alle JavaScript Sprachoperatoren, Ausdrücke und Schlüsselwörter.

## Ausdrücke und Operatoren geordnet nach Kategorie

Die alphabetische Sortierung finden Sie in der linken Seitenspalte.

### Grundlegende Ausdrücke

Elementare Schlüsselwörter und allgemeine Ausdrücke in JavaScript.

- {{jsxref("Operators/this", "this")}}
  - : Das `this` Schlüsselwort referenziert eine spezielle Eigenschaft des Ausführungskontexts.
- {{jsxref("Operators/function", "function")}}
  - : Der `function` Schlüsselbegriff definiert einen Funktionsausdruck.
- {{jsxref("Operators/class", "class")}}
  - : Das `class` Schlüsselwort definiert einen Klassenausdruck.
- {{jsxref("Operators/function*", "function*")}}
  - : Das `function*` Schlüsselword definiert einen Generatorfunktionsausdruck.
- {{jsxref("Operators/yield", "yield")}}
  - : Eine Generatorfunktion anhalten und fortsetzen.
- {{jsxref("Operators/yield*", "yield*")}}
  - : Delegiert zu einer anderen Generatorfunktion oder Iterable Objekt.
- {{experimental_inline}} {{jsxref("Operators/async_function", "async function*")}}
  - : `async function` definiert einen asynchron Funktionsausdruck.
- {{experimental_inline}} {{jsxref("Operators/await", "await")}}
  - : Hält eine asynchrone Funktion an und setzt sie fort und wartet dabei auf ein erfolgreichen oder nicht erfolgreichen Promise.
- {{jsxref("Global_Objects/Array", "[]")}}
  - : Array-Initialisierungs/Literal-Syntax.
- {{jsxref("Operators/Object_initializer", "{}")}}
  - : Objekt-Initialisierungs/Literal-Syntax.
- {{jsxref("Global_Objects/RegExp", "/ab+c/i")}}
  - : Literal-Syntax für reguläre Ausdrücke.
- {{jsxref("Operators/Grouping", "( )")}}
  - : Gruppierungs-Operator.

### Linke-Seite-Ausdrücke

Werte auf der linken Seite sind das Ziel einer Zuweisung.

- {{jsxref("Operators/Property_accessors", "Eigenschaftszugriff", "", 1)}}
  - : Member-Operatoren ermöglichen den Zugriff auf eine Objektvariable oder eine Methode eines Objekts (`object.property` und `object["property"]`).
- {{jsxref("Operators/new", "new")}}
  - : Der `new` Operator erzeugt eine Instanz über einen Konstruktor.
- [new.target](/de/docs/Web/JavaScript/Reference/Operators/new.target)
  - : In Konstruktoren referenziert `new.target` auf den Konstruktor, welcher mit {{jsxref("Operators/new", "new")}} aufgerufen wurde.
- {{jsxref("Operators/super", "super")}}
  - : Das `super` Schlüsselwort ruft den Elternkonstruktor auf.
- {{jsxref("Operators/Spread_operator", "...obj")}}
  - : Der Spread-Operator ermöglicht es einem Ausdruck in Situationen erweitert zu werden, wo mehrfache Argumente (für Funktionsaufrufe) oder mehrfache Elemente (für Array-Literale) erwartet werden.

### Inkrement und Dekrement

Postfix/Prefix-Inkrement- und Postfix/Prefix-Dekrement-Operatoren.

- {{jsxref("Operators/Arithmetic_Operators", "A++", "#Increment")}}
  - : Postfix-Inkrementoperator.
- {{jsxref("Operators/Arithmetic_Operators", "A--", "#Decrement")}}
  - : Postfix-Dekrementoperator.
- {{jsxref("Operators/Arithmetic_Operators", "++A", "#Increment")}}
  - : Prefix-Inkrementoperator.
- {{jsxref("Operators/Arithmetic_Operators", "--A", "#Decrement")}}
  - : Prefix-Dekrementoperator.

### Unäre Operatoren

Ein unärer Operation ist ein Operation mit nur einem Operanden.

- {{jsxref("Operators/delete", "delete")}}
  - : Der `delete`-Operator entfernt eine Eigenschaft eines Objektes.
- {{jsxref("Operators/void", "void")}}
  - : Der `void`-Operator verwirft den Rückgabewert eines Ausdrucks.
- {{jsxref("Operators/typeof", "typeof")}}
  - : Der `typeof`-Operator ermittelt den Typ des angegebenen Objekts.
- {{jsxref("Operators/Arithmetic_Operators", "+", "#Unary_plus")}}
  - : Der unäre Plusoperator wandelt seinen Operand in einen Zahlentyp um.
- {{jsxref("Operators/Arithmetic_Operators", "-", "#Unary_negation")}}
  - : Der unäre Negationsoperator wandelt seinen Operand in einen Zahlentyp um und negiert ihn.
- {{jsxref("Operators/Bitwise_Operators", "~", "#Bitwise_NOT")}}
  - : Bitweiser NICHT-Operator.
- {{jsxref("Operators/Logical_Operators", "!", "#Logical_NOT")}}
  - : Logischer NICHT-Operator.

### Arithmetische Operatoren

Arithmetische Operatoren nehmen numerische Werte (entweder Literale oder Variablen) als ihre Operanden und geben genau einen numerischen Wert zurück.

- {{jsxref("Operators/Arithmetic_Operators", "+", "#Addition")}}
  - : Additionsoperator.
- {{jsxref("Operators/Arithmetic_Operators", "-", "#Subtraction")}}
  - : Subtraktionsoperator.
- {{jsxref("Operators/Arithmetic_Operators", "/", "#Division")}}
  - : Divisionsoperator.
- {{jsxref("Operators/Arithmetic_Operators", "*", "#Multiplication")}}
  - : Multiplikationsoperator.
- {{jsxref("Operators/Arithmetic_Operators", "%", "#Remainder")}}
  - : Restoperator.
- {{jsxref("Operators/Arithmetic_Operators", "**", "#Exponentiation")}}
  - : Potenzierungsoperator.

### Vergleichsoperatoren

Ein Vergleichsoperator vergleicht seine Operanden und gibt einen `Booleschen` Wert zurück, basierend dem Ergebnis des Vergleiches.

- {{jsxref("Operators/in", "in")}}
  - : Der `in`-Operator ermittelt ob ein Objekt die gegebene Objektvariable enthält.
- {{jsxref("Operators/instanceof", "instanceof")}}
  - : Der `instanceof-`Operator ermittelt ob ein Objekt eine Instanz eines anderen Objekts ist.
- {{jsxref("Operators/Comparison_Operators", "&lt;", "#Less_than_operator")}}
  - : Kleiner-als-Operator.
- {{jsxref("Operators/Comparison_Operators", "&gt;", "#Greater_than_operator")}}
  - : Größer-als-Operator.
- {{jsxref("Operators/Comparison_Operators", "&lt;=", "#Less_than_or_equal_operator")}}
  - : "Kleiner als oder gleich" - Operator.
- {{jsxref("Operators/Comparison_Operators", "&gt;=", "#Greater_than_or_equal_operator")}}
  - : "Größer als oder gleich" - Operator.

> **Note:** **Hinweis: =>** is kein Operator, aber die Notation für [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

### Gleichheitsoperatoren

Das Ergebnis der Auswertung eines Gleichheitoperators ist immer vom Typ `Boolean`, basierend auf dem Ergebnis des Vergleiches.

- {{jsxref("Operators/Comparison_Operators", "==", "#Equality")}}
  - : Gleichheitsoperator.
- {{jsxref("Operators/Comparison_Operators", "!=", "#Inequality")}}
  - : Ungleichheitsoperator.
- {{jsxref("Operators/Comparison_Operators", "===", "#Identity")}}
  - : Identitätsoperator.
- {{jsxref("Operators/Comparison_Operators", "!==", "#Nonidentity")}}
  - : "Nicht Identitäts"-Operator.

### Bitweise-Verschieben-Operatoren

Operationen, die alle Bits eines Operanden verschieben.

- {{jsxref("Operators/Bitwise_Operators", "&lt;&lt;", "#Left_shift")}}
  - : Operator für bitweises Verschieben nach links.
- {{jsxref("Operators/Bitwise_Operators", "&gt;&gt;", "#Right_shift")}}
  - : Operator für bitweises Verschieben nach rechts.
- {{jsxref("Operators/Bitwise_Operators", "&gt;&gt;&gt;", "#Unsigned_right_shift")}}
  - : Operator für vorzeichenloses bitweises Verschieben nach rechts.

### Binäre bitweise Operatoren

Bitweise Operatoren behandeln ihre Operanden als eine Menge von 32 Bits und geben einen in JavaScript üblichen numerischen Werte zurück.

- {{jsxref("Operators/Bitwise_Operators", "&amp;", "#Bitwise_AND")}}
  - : Bitweises UND.
- {{jsxref("Operators/Bitwise_Operators", "|", "#Bitwise_OR")}}
  - : Bitweises ODER.
- {{jsxref("Operators/Bitwise_Operators", "^", "#Bitwise_XOR")}}
  - : Bitweises XOR.

### Binäre logische Operatoren

Logische Operatoren werden normalerweise mit Booleschen (logischen) Werten benutzt und sie liefern dann einen Booleschen Wert zurück.

- {{jsxref("Operators/Logical_Operators", "&amp;&amp;", "#Logical_AND")}}
  - : Logisches UND.
- {{jsxref("Operators/Logical_Operators", "||", "#Logical_OR")}}
  - : Logisches ODER.

### Bedingter (ternärer) Operator

- {{jsxref("Operators/Conditional_Operator", "(Bedingung ? wennTrue : wennFalse)")}}
  - : Der bedingte Operator liefert einen von zwei Werten zurück, in Abhängigkeit des logischen Wertes der Bedingung.

### Zuweisungsoperator

Der Zuweisungsoperator weist seinem linken Operand einen Wert zu, in Abhängigkeit des Wertes seines rechten Operanden.

- {{jsxref("Operators/Assignment_Operators", "=", "#Assignment")}}
  - : Zuweisungsoperator.
- {{jsxref("Operators/Assignment_Operators", "*=", "#Multiplication_assignment")}}
  - : Multiplikationszuweisung.
- {{jsxref("Operators/Assignment_Operators", "/=", "#Division_assignment")}}
  - : Teilungszuweisung.
- {{jsxref("Operators/Assignment_Operators", "%=", "#Remainder_assignment")}}
  - : Restzuweisung.
- {{jsxref("Operators/Assignment_Operators", "+=", "#Addition_assignment")}}
  - : Additionszuweisung.
- {{jsxref("Operators/Assignment_Operators", "-=", "#Subtraction_assignment")}}
  - : Subtraktionszuweisung.
- {{jsxref("Operators/Assignment_Operators", "&lt;&lt;=", "#Left_shift_assignment")}}
  - : Links-verschieben-Zuweisung.
- {{jsxref("Operators/Assignment_Operators", "&gt;&gt;=", "#Right_shift_assignment")}}
  - : Rechts-verschieben-Zuweisung.
- {{jsxref("Operators/Assignment_Operators", "&gt;&gt;&gt;=", "#Unsigned_right_shift_assignment")}}
  - : Vorzeichenlose (unsigned) Rechts-verschieben-Zuweisung.
- {{jsxref("Operators/Assignment_Operators", "&amp;=", "#Bitwise_AND_assignment")}}
  - : Bitweise UND-Zuweisung.
- {{jsxref("Operators/Assignment_Operators", "^=", "#Bitwise_XOR_assignment")}}
  - : Bitweise ENTWEDER-ODER-Zuweisung.
- {{jsxref("Operators/Assignment_Operators", "|=", "#Bitwise_OR_assignment")}}
  - : Bitweise ODER-Zuweisung.
- {{jsxref("Operators/Destructuring_assignment", "[a, b] = [1, 2]")}}
  {{jsxref("Operators/Destructuring_assignment", "{a, b} = {a:1, b:2}")}}
  - : Destrukturierende Zuweisung ermöglicht das Zuweisen von Daten aus Arrays oder Objekten an Variablen, mit einer ähnlichen Syntax wie bei Array- oder Objekt-Literalen.

### Kommaoperator

- {{jsxref("Operators/Comma_Operator", ",")}}
  - : Der Kommaoperator erlaubt es mehrere Ausdrücke innerhalb eines einzigen Ausdrucks zu evaluieren und liefert das Ergebnis des letzten Ausdrucks.

### Nicht standardisierte Funktionen

- {{non-standard_inline}} {{jsxref("Operators/Legacy_generator_function", "Legacy generator function", "", 1)}}
  - : Das `function` Schlüsselwort kann benutzt werden, um eine veraltete Generatorfunktion in einem Ausdruck zu schreiben. Um die Funktion zu einem veralteten Generator zu machen, muss der Funktionskörper mindestens ein {{jsxref("Operators/yield", "yield")}} Ausdruck enthalten.
- {{non-standard_inline}} {{jsxref("Operators/Expression_closures", "Expression closures", "", 1)}}
  - : Die Ausdrucks Closure Syntax ist eine Kurzform für eine einfache Funktion.
- {{non-standard_inline}} {{jsxref("Operators/Array_comprehensions", "[for (x of y) x]")}}
  - : Array Comprehensions.
- {{non-standard_inline}} {{jsxref("Operators/Generator_comprehensions", "(for (x of y) y)")}}
  - : Generator Comprehensions.

## Spezifikationen

| Spezifikation                                                                                                                        | Status                       | Kommentar                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | ------------------------------------------------------------------------------------ |
| {{SpecName('ES1', '#sec-11', 'Expressions')}}                                                                         | {{Spec2('ES1')}}         | Initiale Definition.                                                                 |
| {{SpecName('ES5.1', '#sec-11', 'Expressions')}}                                                                     | {{Spec2('ES5.1')}}     |                                                                                      |
| {{SpecName('ES6', '#sec-ecmascript-language-expressions', 'ECMAScript Language: Expressions')}}     | {{Spec2('ES6')}}         | Neu: Spread Syntax, Rest Syntax, destrukturierte Zuweisungen, `super` Schlüsselwort. |
| {{SpecName('ESDraft', '#sec-ecmascript-language-expressions', 'ECMAScript Language: Expressions')}} | {{Spec2('ESDraft')}} |                                                                                      |

## Browserkompatibilität

{{Compat("javascript.operators")}}

## Siehe auch

- [Operator Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
