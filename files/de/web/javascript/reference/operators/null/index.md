---
title: 'null'
slug: Web/JavaScript/Reference/Operators/null
tags:
  - JavaScript
  - Literal
  - Primitive
translation_of: Web/JavaScript/Reference/Global_Objects/null
original_slug: Web/JavaScript/Reference/Global_Objects/null
---
{{jsSidebar("Objects")}}

Der Wert `null` repräsentiert das absichtliche Fehlen eines Wertes. Es ist einer der {{Glossary("Primitive", "Primitiven Werte")}} in Javascript.

{{EmbedInteractiveExample("pages/js/globalprops-null.html")}}

## Syntax

    null

## Beschreibung

Der Wert `null` wird als Literal geschrieben: `null`. Der Wert `null` ist ein Literal (keine Eigenschaft des _globalen Objektes_ wie {{jsxref("Global_Objects/undefined", "undefined")}}). Stattdessen drückt null einen Mangel an Identifikation aus und zeigt an, dass eine Variable auf kein Objekt zeigt. In APIs wird `null` oftmals an Stellen verwendet, an denen ein Objekt optional genutzt werden kann.

```js
// foo existiert nicht. Es wurde nicht definiert und nirgendwo initialisiert:
foo;
"ReferenceError: foo is not defined"

// foo existiert nun, aber die Variable hat keinen Typ oder Wert:
var foo = null;
foo;
"null"
```

### Unterschied zwischen `null` und `undefined`

Wenn auf null geprüft wird, sollte nicht der Gleichheitsvergleich ({{jsxref("Operators/Comparison_Operators", "==", "#Equality")}}) mit dem Identitätsvergleich ({{jsxref("Operators/Comparison_Operators", "===", "#Identity")}}) verwechselt werden, weil bei der Prüfung auf Gleichheit eine implizite Typumwandlung vorgenommen wird.

```js
typeof null          // "object" (not "null" for legacy reasons)
typeof undefined     // "undefined"
null === undefined   // false
null == undefined    // true
null === null        // true
null == null         // true
!null                // true
isNaN(1 + null)      // false
isNaN(1 + undefined) // true
```

## Spezifikationen

| Spezifikation                                                                | Status                       | Kommentar            |
| ---------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES1')}}                                                     | {{Spec2('ES1')}}         | Initiale Definition. |
| {{SpecName('ES5.1', '#sec-4.3.11', 'null value')}}         | {{Spec2('ES5.1')}}     |                      |
| {{SpecName('ES6', '#sec-null-value', 'null value')}}         | {{Spec2('ES6')}}         |                      |
| {{SpecName('ESDraft', '#sec-null-value', 'null value')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.null")}}

## Siehe auch

- {{jsxref("undefined")}}
- {{jsxref("NaN")}}
