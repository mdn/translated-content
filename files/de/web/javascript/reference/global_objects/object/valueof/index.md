---
title: Object.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/valueOf
tags:
  - JavaScript
  - Method
  - Object
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Object/valueOf
---
{{JSRef}}

Die **`valueOf()`** Methode liefert den primitiven Wert des spezifizierten Objekts zurück.

{{EmbedInteractiveExample("pages/js/object-prototype-valueof.html")}}

## Syntax

    object.valueOf()

### Rückgabewert

Der primitive Wert des spezifizierten Objekts.

## Beschreibung

JavaScript ruft die `valueOf` Methode auf, um das Objekt zu einem primitiven Wert zu konvertieren. Nur in seltenen Fällen ist es nötig, selbst die `valueOf` Methode aufzurufen; JavaScript tut dies automatisch dann, wenn es ein Objekt vorfindet und ein primitiver Wert erforderlich ist.

Standardmäßig erbt jedes Objekt die `valueOf` Methode von {{jsxref("Object")}}. Jedes built-in core object überschreibt zudem diese Methode, um jeweils den geeigneten Wert zu liefern. Falls ein Objekt keinen primitiven Wert haben sollte, liefert `valueOf` das Objekt selbst zurück.

Die Methode `valueOf` kann in eigenem Code verwendet werden, um etwa ein built-in object in seinen primitiven Wert zu wandeln. Bei der Implementierung eines eigenen Objekttyps sollte die Methode `Object.prototype.valueOf()` entsprechend überschrieben werden, anstelle der standardmäßig durch {{jsxref("Object")}} bereitgestellten Methode.

### Überschreiben von `valueOf` für eigene Objekttypen

Es ist möglich eine function zu implementieren, welche anstelle der standardmäßig bereit gestellten `valueOf` Methode aufgerufen wird. Diese empfängt und benötigt keine Argumente.

Angenommen, in einem Projekt gibt es den Objekttyp `MyNumberType` und für diesen soll nun eine passende `valueOf` Methode implementiert werden. Der folgende Code zeigt wie mit einer function die `valueOf` Methode des Typs implementiert wird:

```js
MyNumberType.prototype.valueOf = function() { return customPrimitiveValue; };
```

Mit Hilfe dieses Codes wird JavaScript automatisch diese Funktion aufrufen, sobald ein Objekt des Typs `MyNumberType` in einem Kontext steht, wo es als primitiver Wert benötigt wird.

Die Methode `valueOf` eines Objekts wird üblicherweise nur von JavaScript selbst aufgerufen, kann aber ebenso wie folgt jederzeit aufgerufen werden:

```js
myNumberType.valueOf()
```

> **Note:** **Wichtig:** Objekte in String-Kontexten werden über die Methode {{jsxref("Object.toString", "toString()")}} zu String umgewandelt, was etwas anderes ist als ein {{jsxref("String")}} Objekt welches über `valueOf` zum string primitive konvertiert wird. Alle Objekte haben eine Möglichkeit, zu einem String konvertiert zu werden, selbst wenn dies lediglich resultiert in "`[object type]`". Die meisten Objekte hingegen können nicht gewandelt werden zu number, boolean, oder function.

## Beispiele

### Verwendung von `valueOf`

```js
function MyNumberType(n) {
    this.number = n;
}

MyNumberType.prototype.valueOf = function() {
    return this.number;
};

var myObj = new MyNumberType(4);
myObj + 3; // 7
```

## Spezifikationen

| Spezifikation                                                                                                    | Status                       | Hinweise                                           |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                         | {{Spec2('ES1')}}         | Initial definition. Implemented in JavaScript 1.1. |
| {{SpecName('ES5.1', '#sec-15.2.4.4', 'Object.prototype.valueOf')}}                         | {{Spec2('ES5.1')}}     |                                                    |
| {{SpecName('ES6', '#sec-object.prototype.valueof', 'Object.prototype.valueOf')}}     | {{Spec2('ES6')}}         |                                                    |
| {{SpecName('ESDraft', '#sec-object.prototype.valueof', 'Object.prototype.valueOf')}} | {{Spec2('ESDraft')}} |                                                    |

## Browser Kompatibilität

{{Compat("javascript.builtins.Object.valueOf")}}

## Siehe auch

- {{jsxref("Object.prototype.toString()")}}
- {{jsxref("parseInt", "parseInt()")}}
- {{jsxref("Symbol.toPrimitive")}}
