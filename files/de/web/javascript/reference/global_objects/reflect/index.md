---
title: Reflect
slug: Web/JavaScript/Reference/Global_Objects/Reflect
translation_of: Web/JavaScript/Reference/Global_Objects/Reflect
---
{{JSRef}}Reflect ist ein Standardobjekt, das Methoden für abfangfähige JavaScript-Operationen bereitstellt.Die Methoden entsprechen denen des [proxy handlers](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler).`Reflect` ist kein Funktionsobjekt und verfügt daher über keinen Konstruktor.

## Beschreibung

Im Gegensatz zu den meisten globalen Objekten hat `Reflect` keinen Konstruktor. Sie können es nicht mit einem [`new` operator](/de/docs/Web/JavaScript/Reference/Operators/new) verwenden, oder `Reflect` als Funktion aufrufen.

Alle Eigenschaften und Methoden von `Reflect` sind statisch (wie bei {{jsxref("Math")}}).

## Methoden

Das `Reflect`-Objekt stellt die folgenden statischen Funktionen bereit, die dieselben Namen haben wie die Methoden des [proxy handler](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler). Einige dieser Methoden sind exakt die selben wie bei entsprechenden Methoden des {{jsxref("Object")}}.

- {{jsxref("Reflect.apply()")}}
  - : Ruft eine Zielfunktion mit Argumenten auf, die Argumente werden im Parameter args angegeben. Siehe auch {{jsxref("Function.prototype.apply()")}}.
- {{jsxref("Reflect.construct()")}}
  - : Der [`new` operator](/de/docs/Web/JavaScript/Reference/Operators/new) als Funktion. Equivalent zu `new target(...args)`. Bietet die optionale Möglichkeit, einen anderen Prototyp anzugeben.
- {{jsxref("Reflect.defineProperty()")}}
  - : Ähnlich zu {{jsxref("Object.defineProperty()")}}. Gibt einen {{jsxref("Boolean")}} zurück.
- {{jsxref("Reflect.deleteProperty()")}}
  - : Der [`delete` operator](/de/docs/Web/JavaScript/Reference/Operators/delete) als Funktion. Ähnlich zu dem Aufruf `delete target[name]`.
- {{jsxref("Reflect.get()")}}
  - : Eine Funktion, die den Wert von Eigenschaften/Properties zurückgibt.
- {{jsxref("Reflect.getOwnPropertyDescriptor()")}}
  - : Ähnlich zu {{jsxref("Object.getOwnPropertyDescriptor()")}}. Gibt einen Eigenschaftsdeskriptor der angegebenen Eigenschaft, oder {{jsxref("undefined")}} zurück.
- {{jsxref("Reflect.getPrototypeOf()")}}
  - : Gleich wie {{jsxref("Object.getPrototypeOf()")}}.
- {{jsxref("Reflect.has()")}}
  - : Der [`in` operator](/de/docs/Web/JavaScript/Reference/Operators/in) als Funktion. Gibt einen booleschen Wert zurück, der angibt, ob eine eigene oder geerbte Eigenschaft vorhanden ist.
- {{jsxref("Reflect.isExtensible()")}}
  - : Gleich wie {{jsxref("Object.isExtensible()")}}.
- {{jsxref("Reflect.ownKeys()")}}
  - : Gibt ein Array der eigenen (nicht geerbten) Eigenschaftsschlüssel des Zielobjekts zurück.
- {{jsxref("Reflect.preventExtensions()")}}
  - : Ähnlich zu {{jsxref("Object.preventExtensions()")}}. Gibt einen {{jsxref("Boolean")}} zurück.
- {{jsxref("Reflect.set()")}}
  - : Eine Funktion, die den Eigenschaften/Properties Werte zuweist. Gibt einen {{jsxref("Boolean")}} zurück, der `true` ist, wenn die Zuweisung erfolgreich verlief.
- {{jsxref("Reflect.setPrototypeOf()")}}
  - : Eine Funktion, die den Prototyp eines Objekts festlegt.

## Spezifikationen

| Spezifikation                                                                | Status                       | Kommentar                         |
| ---------------------------------------------------------------------------- | ---------------------------- | --------------------------------- |
| {{SpecName('ES2015', '#sec-reflect-object', 'Reflect')}} | {{Spec2('ES2015')}}     | Ursprüngliche Definition.         |
| {{SpecName('ESDraft', '#sec-reflect-object', 'Reflect')}} | {{Spec2('ESDraft')}} | Reflect.enumerate wurde entfernt. |

## Browser kompatiblität

{{Compat("javascript.builtins.Reflect")}}

## Siehe auch

- Das globale {{jsxref("Proxy")}} Objekt.
- Das {{jsxref("Proxy.handler", "handler")}} Objekt.
