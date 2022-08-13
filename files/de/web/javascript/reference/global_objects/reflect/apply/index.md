---
title: Reflect.apply()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/apply
translation_of: Web/JavaScript/Reference/Global_Objects/Reflect/apply
---
{{JSRef}}Die statische Methode **`Reflect.apply()`** ruft eine Zielfunktion mit den spezifizierten Parametern auf.{{EmbedInteractiveExample("pages/js/reflect-apply.html")}}

## Syntax

    Reflect.apply(target, thisParameter, listeDerArgumente)

### Parameter

- target
  - : Die Funktion, die aufgerufen werden soll.
- thisParameter
  - : Der Wert von `this` der für den Aufruf bereitgestellt wird.
- listeDerArgumente
  - : Ein Array ähnliches Objekt welches die Parameter spezifiziert, mit denen die Zielfunktion aufgerufen wird.

### Rückgabewert

Das Resultat des Aufruft, der Zielfunktion mit dem mitgegebenen `this` und den mitgegebenen Parametern.

### Ausnahmen

Es wird ein {{jsxref("TypeError")}} geworfen, wenn die Zielfunktion nicht aufrufbar ist.

## Beschreibung

In ES5, ruft man typischerweise {{jsxref("Function.prototype.apply()")}} auf, um eine Funktion aufzurufen, der man einen bestimmten `this` mitgeben und die Parameter als Array (oder einem [array-like object](/de/docs/Web/JavaScript/Guide/Indexed_collections#Working_with_array-like_objects)) definieren möchte.

```js
Function.prototype.apply.call(Math.floor, undefined, [1.75]);
```

Durch `Reflect.apply` wird dieses Vorhaben kürzer und ist leichter zu verstehen.

## Beispiele

### Verwendung von `Reflect.apply()`

```js
Reflect.apply(Math.floor, undefined, [1.75]);
// 1;

Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111]);
// "hello"

Reflect.apply(RegExp.prototype.exec, /ab/, ['confabulation']).index;
// 4

Reflect.apply(''.charAt, 'ponies', [3]);
// "i"
```

## Spezifikationen

| Spezifikation                                                                        | Status                       | Kommentar                 |
| ------------------------------------------------------------------------------------ | ---------------------------- | ------------------------- |
| {{SpecName('ES2015', '#sec-reflect.apply', 'Reflect.apply')}}     | {{Spec2('ES2015')}}     | Ursprüngliche Definition. |
| {{SpecName('ESDraft', '#sec-reflect.apply', 'Reflect.apply')}} | {{Spec2('ESDraft')}} |                           |

## Browser kompabilität

{{Compat("javascript.builtins.Reflect.apply")}}

## Siehe auch

- {{jsxref("Reflect")}}
- {{jsxref("Function.prototype.apply()")}}
