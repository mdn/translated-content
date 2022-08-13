---
title: const
slug: Web/JavaScript/Reference/Statements/const
tags:
  - ECMAScript 2015
  - JavaScript
  - Statement
translation_of: Web/JavaScript/Reference/Statements/const
---
{{jsSidebar("Statements")}}

## Zusammenfassung

Die **`const`-**Deklaration erstellt eine Konstante. Wie bei der Deklaration einer Variablen mit {{jsxref("Statements/let", "let")}} ist der Gültigkeitsbereich auf den lokalen Block begrenzt. Der Wert einer Konstanten kann nicht verändert werden durch Zuweisung oder Neudeklaration.

{{EmbedInteractiveExample("pages/js/statement-const.html")}}

## Syntax

    const name1 = wert1 [, name2 = wert2 [, ... [, nameN = wertN]]];

- `nameN`
  - : Name der Konstanten. Dieser kann jeder gültige {{Glossary("Identifier", "Bezeichner")}} sein.
- `wertN`
  - : Wert der Konstanten. Dieser kann jeder gültige {{Glossary("Expression", "Ausdruck")}} sein, einschließlich einer Funktion.

## Beschreibung

Die **`const`**-Deklaration erstellt eine Konstante, die entweder global sichtbar oder nur lokal in dem {{jsxref("Statements/Block", "Anweisungsblock")}}, in der sie deklariert wird, sichtbar ist.

Die Konstante muss bei ihrer Definition mit einem Wert belegt werden. Eine spätere Zuweisung ist logischerweise nicht möglich, denn Sinn einer Konstanten ist, dass nach ihrer Definition keine Änderungen mehr vorgenommen werden können.

Die **`const`-**Deklaration erzeugt eine nicht veränderbare Referenz auf einen Wert. Dies bedeutet aber nicht, dass dieser Wert an sich unveränderlich ist, sondern nur, dass der Konstanten kein anderer Wert zugewiesen werden kann. Ist der Wert einer Konstanten zum Beispiel ein Objekt vom Typ {{jsxref("Global_Objects/Array", "Array")}}, können dessen Einträge durchaus verändert werden. Die Beispiele unten verdeutlichen dies.

Eine Konstante kann nicht den gleichen Namen einer Funktion oder einer Variablen im gleichen Gültigkeitsbereich führen. Der Versuch, den Namen einer Konstanten nochmals zu verwenden, führt ebenso zu einem Fehler wie der Versuch, den Namen eines bestehenden Objektes für eine Konstante zu verwenden.

Für const gelten die gleichen Regel hinsichtlich der [toten Zone](/de/docs/Web/JavaScript/Reference/Statements/let#Zeitweilig_tote_Zonen_und_Fehler_mit_let) wie für {{jsxref("Statements/let", "let")}}. Auch Konstanten sind erst _nach_ ihrer Deklaration verfügbar, nicht jedoch zwischen dem Beginn des Blocks und der Deklaration.
Dies ist ein Unterschied zur Variablendeklaration mit {{jsxref("Statements/var", "var")}}. Mit var deklarierte Variablen sind in der gesamten Funktion verfügbar, in der sie deklariert wurden, selbst falls die Variablendeklaration die letzte Anweisung der Funktion war.

## Beispiele

Die nachfolgenden Beispiele bauen aufeinander auf und sollten funktionell als ein Skript betrachtet werden. Sie sind lediglich in mehrere Absätze aufgeteilt, um die Teilaspekte der Konstantenbenutzung abzugrenzen.

### Grundlagen

Konstanten müssen bei Deklaration mit einem Wert belegt werden und sind danach nicht mehr änderbar.

```js
// Definiert my_fav als eine Konstante und weist ihr den Wert 7 zu.
const MY_FAV = 7;

// Ein Versuch, der Konstanten einen anderen Wert zuzuweisen, ergibt
// einen Fehler.
MY_FAV = 20;

// Schreibt 7 auf die Konsole.
console.log("my favorite number is: " + MY_FAV);

// Der Versuch, eine existierende Konstante neu zu definieren,
// erzeugt einen Fehler
const MY_FAV = 20;

// Der Name my_fav ist für die obige Konstante reserviert, weshalb
// dieses ebenfalls einen Fehler erzeugt.
var MY_FAV = 20;
// Auch dies ergibt einen Fehler.
let MY_FAV = 20;

// Konstanten benötigten einen Initialwert, weshalb hier ein SyntaxError
// erzeugt wird.
const FOO;

// Konstanten sind erst nach ihrer Deklaration verfügbar,
// anders als var-Variablen.
console.log("konstante = " + KONST); // Fehler, KONST existiert noch nicht
console.log("variable = " + VAR); // VAR hingegen schon
const KONST = "23";
var VAR = "32";
console.log("konstante = " + KONST); // KONST existiert erst jetzt
```

### Der Block als Gültigkeitsbereich

Konstanten sind nur innerhalb des Blocks aus geschweiften Klammern sichtbar, in dem sie deklariert wurden.

```js
// MY_FAV, in vorigem Beispiel erstellt, ist immer noch 7
if (MY_FAV === 7) {
    // Innerhalb dieses if-Blocks kann eine neue Konstante MY_FAV
    // erzeugt werden, die nur für diesen Block gültig ist.
    const MY_FAV = 20;

    // MY_FAV ist nun 20
    console.log("my favorite number is " + MY_FAV);

    // var-Variablen werden hingegen immer in den übergeordneten
    // Funktions- oder den globalen Kontext eingebettet, weshalb
    // dies zu einer Kollision mit der globalen Konstante MY_FAV
    // aus vorigem Beispiel führen wird:
    var MY_FAV = 20;
}
// MY_FAV ist immer noch 7, denn wir haben den if-Block verlassen.
console.log("my favorite number is " + MY_FAV);
```

### Die Konstante und der Wert einer Konstante

Obwohl Konstanten selbst nicht geändert werden können, kann sich der Wert des Objektes, auf das die Konstante verweist, ändern.

```js
// Konstanten können auch komplexe Objekte sein.
const MY_OBJECT = {"key": "value"};

// Ein Versuch, der Konstanten ein anderes Objekt zuzuweisen, ergibt
// einen Fehler.
MY_OBJECT = {"OTHER_KEY": "value"};

// Das Objekt selber hingegen ist nicht vor Veränderungen geschützt.
// Die folgende Anweisung wird ohne Probleme ausgeführt.
MY_OBJECT.key = "otherValue";

// Das Gleiche gilt für Felder:
const MY_ARRAY = [];
// Es ist möglich, neue Einträge an das Feld anzufügen.
MY_ARRAY.push("A"); // ["A"]
// Jedoch führt der Versuch, der Konstanten ein anderes Feld
// zuzuweisen, zu einem Fehler.
MY_ARRAY = ["B"]
```

## Spezifikationen

| Spezifikation                                                                                                        | Status                       |     | Kommentar         |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | --- | ----------------- |
| {{SpecName('ES2015', '#sec-let-and-const-declarations', 'Let and Const Declarations')}} | {{Spec2('ES2015')}}     |     | Erste Definition. |
| {{SpecName('ESDraft', '#sec-let-and-const-declarations', 'Let and Const Declarations')}} | {{Spec2('ESDraft')}} |     |                   |

## Browserkompatibilität

{{Compat("javascript.statements.const")}}

## Siehe auch

- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/let", "let")}}
- [Konstanten in der JavaScript-Einführung](/de/docs/Web/JavaScript/Guide/Values,_variables,_and_literals#Constants)
