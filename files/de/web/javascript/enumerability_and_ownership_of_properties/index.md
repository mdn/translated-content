---
title: Aufzählbarkeit und Zugehörigkeit von Eigenschaften
slug: Web/JavaScript/Enumerability_and_ownership_of_properties
tags:
  - Eigenschaft
  - JavaScript
  - Objekt
  - enumerable
translation_of: Web/JavaScript/Enumerability_and_ownership_of_properties
original_slug: Web/JavaScript/Aufzählbarkeit_und_Zugehörigkeit_von_Eigenschaften
---
{{JsSidebar("More")}}

Aufzählbare Eigenschaften sind jene, deren internes Statusfeld `enumerable` gesetzt ist.

Alle aufzählbaren Eigenschaften eines Objektes sind mit [for...in](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleifen zu durchlaufen (sofern der Name der Eigenschaft kein [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) ist), daher die Bezeichnung „aufzählbar“.
Neben for…in gibt es weitere Möglichkeiten, die Existenz einer Eigenschaft zu erkennen, Eigenschaften aufzuzählen oder abzurufen. Siehe dazu nachfolgende Tabellen.

Standardmäßig aufzählbar sind Eigenschaften, die durch einfache Zuweisung oder Initialisierung entstanden sind, nicht jedoch Eigenschaften, die durch [Object.defineProperty](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) oder ähnliche Mechanismen erzeugt wurden.

Die Zugehörigkeit einer Eigenschaft ergibt sich aus dem Ort seiner Definition; dies ist entweder das Objekt selbst oder einer seiner Prototypen. Eine Eigenschaft, die im Objekt definiert wurde, gehört zu diesem Objekt.

Aufzählbarkeit und Zugehörigkeit – Eingebaute Methoden zur Erkennung, zum Abruf und zur Aufzählung

<table>
  <tbody>
    <tr>
      <th>Funktion</th>
      <th>Objekt</th>
      <th>Objekt und geerbt aus Prototypenkette</th>
      <th>nur geerbt aus Prototypenkette</th>
    </tr>
    <tr>
      <td>Erkennung</td>
      <td>
        <table>
          <thead>
            <tr>
              <th scope="col">aufzählbar</th>
              <th scope="col">nicht aufzählbar</th>
              <th scope="col">aufzählbar und nicht aufzählbar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>
                  <code
                    ><a
                      href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable"
                      >propertyIsEnumerable</a
                    ></code
                  >
                </p>
                <p>
                  <code
                    ><a
                      href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty"
                      >hasOwnProperty</a
                    ></code
                  >
                </p>
              </td>
              <td>
                <p>
                  <code
                    ><a
                      href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty"
                      >hasOwnProperty</a
                    ></code
                  >
                  – aufzählbare Eigenschaften mit
                  <code
                    ><a
                      href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable"
                      >propertyIsEnumerable</a
                    ></code
                  >
                  entfernt
                </p>
              </td>
              <td>
                <code
                  ><a
                    href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty"
                    >hasOwnProperty</a
                  ></code
                >
              </td>
            </tr>
          </tbody>
        </table>
      </td>
      <td>
        <table>
          <thead>
            <tr>
              <th scope="col">aufzählbar</th>
              <th scope="col">nicht aufzählbar</th>
              <th scope="col">aufzählbar und nicht aufzählbar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>nur mit eigenem Code möglich</td>
              <td>nur mit eigenem Code möglich</td>
              <td>
                <code
                  ><a href="/en-US/docs/Web/JavaScript/Reference/Operators/in"
                    >in</a
                  ></code
                >
              </td>
            </tr>
          </tbody>
        </table>
      </td>
      <td>nur mit eigenem Code möglich</td>
    </tr>
    <tr>
      <td>Abruf</td>
      <td>
        <table>
          <thead>
            <tr>
              <th scope="col">aufzählbar</th>
              <th scope="col">nicht aufzählbar</th>
              <th scope="col">aufzählbar und nicht aufzählbar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>
                  <code
                    ><a
                      href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys"
                      >Object.keys</a
                    ></code
                  >
                </p>
                <p>
                  <code
                    ><a
                      href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames"
                      >getOwnPropertyNames</a
                    ></code
                  >
                </p>
                <p>
                  <code
                    ><a
                      href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols"
                      >getOwnPropertySymbols</a
                    ></code
                  >
                </p>
              </td>
              <td>
                <code
                  ><a
                    href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames"
                    >getOwnPropertyNames</a
                  ></code
                >,
                <code
                  ><a
                    href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols"
                    >getOwnPropertySymbols</a
                  > </code
                >– aufzählbare Eigenschaften mit
                <code
                  ><a
                    href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable"
                    >propertyIsEnumerable</a
                  ></code
                >
                entfernt
              </td>
              <td>
                <p>
                  <code
                    ><a
                      href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames"
                      >getOwnPropertyNames</a
                    ></code
                  >
                </p>
                <p>
                  <code
                    ><a
                      href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols"
                      >getOwnPropertySymbols</a
                    ></code
                  >
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
      <td>nur mit eigenem Code möglich</td>
      <td>nur mit eigenem Code möglich</td>
    </tr>
    <tr>
      <td>Aufzählung</td>
      <td>
        <table>
          <thead>
            <tr>
              <th scope="col">aufzählbar</th>
              <th scope="col">nicht aufzählbar</th>
              <th scope="col">aufzählbar und nicht aufzählbar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>
                  <code
                    ><a
                      href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys"
                      >Object.keys</a
                    ></code
                  >
                </p>
                <p>
                  <code
                    ><a
                      href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames"
                      >getOwnPropertyNames</a
                    ></code
                  >
                </p>
                <p>
                  <code
                    ><a
                      href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols"
                      >getOwnPropertySymbols</a
                    ></code
                  >
                </p>
              </td>
              <td>
                <code
                  ><a
                    href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames"
                    >getOwnPropertyNames</a
                  ></code
                >,
                <code
                  ><a
                    href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols"
                    >getOwnPropertySymbols</a
                  ></code
                >
                – aufzählbare Eigenschaften mit
                <code
                  ><a
                    href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable"
                    >propertyIsEnumerable</a
                  ></code
                >
                entfernt
              </td>
              <td>
                <p>
                  <code
                    ><a
                      href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames"
                      >getOwnPropertyNames</a
                    ></code
                  >
                </p>
                <p>
                  <code
                    ><a
                      href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols"
                      >getOwnPropertySymbols</a
                    ></code
                  >
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
      <td>
        <table>
          <thead>
            <tr>
              <th scope="col">aufzählbar</th>
              <th scope="col">nicht aufzählbar</th>
              <th scope="col">aufzählbar und nicht aufzählbar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>
                  <code
                    ><a
                      href="/en-US/docs/Web/JavaScript/Reference/Statements/for...in"
                      >for..in</a
                    ></code
                  >
                </p>
                <p>(ohne Symbole)</p>
              </td>
              <td>nur mit eigenem Code möglich</td>
              <td>nur mit eigenem Code möglich</td>
            </tr>
          </tbody>
        </table>
      </td>
      <td>nur mit eigenem Code möglich</td>
    </tr>
  </tbody>
</table>

## Sichtbarkeit von Eigenschaften

|                          | `in` | `for..in` | `obj.hasOwnProperty` | `obj.propertyIsEnumerable` | `Object.keys` | `Object.getOwnPropertyNames` | `Object.getOwnPropertyDescriptors` | `Reflect.ownKeys()` |
| ------------------------ | ---- | --------- | -------------------- | -------------------------- | ------------- | ---------------------------- | ---------------------------------- | ------------------- |
| Aufzählbar               | ja   | ja        | ja                   | ja                         | ja            | ja                           | ja                                 | ja                  |
| Nicht aufzählbar         | ja   | nein      | ja                   | nein                       | nein          | ja                           | ja                                 | ja                  |
| Symbol als Name          | ja   | nein      | ja                   | ja                         | nein          | nein                         | ja                                 | ja                  |
| Aufzählbar, geerbt       | ja   | ja        | nein                 | nein                       | nein          | nein                         | nein                               | nein                |
| Nicht aufzählbar, geerbt | ja   | nein      | nein                 | nein                       | nein          | nein                         | nein                               | nein                |
| Symbol als Name, geerbt  | ja   | nein      | nein                 | nein                       | nein          | nein                         | nein                               | nein                |

## Eigenschaften nach Aufzählbarkeit oder Zugehörigkeit abrufen

Der nachfolgende Code ist nicht immer der effizienteste Weg, aber als einfaches Beispiel gut geeignet.

- Die Existenz einer Eigenschaft erkennen: `SimplePropertyRetriever.theGetMethodYouWant(obj).indexOf(prop) > -1`
- Alle Eigenschaften durchlaufen:
  `SimplePropertyRetriever.theGetMethodYouWant(obj).forEach(function (value, prop) {});` (or use` filter()`, `map()`, etc.)

```js
var SimplePropertyRetriever = {
    getOwnEnumerables: function(obj) {
        return this._getPropertyNames(obj, true, false, this._enumerable);
         // Or could use for..in filtered with hasOwnProperty or just this: return Object.keys(obj);
    },
    getOwnNonenumerables: function(obj) {
        return this._getPropertyNames(obj, true, false, this._notEnumerable);
    },
    getOwnEnumerablesAndNonenumerables: function(obj) {
        return this._getPropertyNames(obj, true, false, this._enumerableAndNotEnumerable);
        // Or just use: return Object.getOwnPropertyNames(obj);
    },
    getPrototypeEnumerables: function(obj) {
        return this._getPropertyNames(obj, false, true, this._enumerable);
    },
    getPrototypeNonenumerables: function(obj) {
        return this._getPropertyNames(obj, false, true, this._notEnumerable);
    },
    getPrototypeEnumerablesAndNonenumerables: function(obj) {
        return this._getPropertyNames(obj, false, true, this._enumerableAndNotEnumerable);
    },
    getOwnAndPrototypeEnumerables: function(obj) {
        return this._getPropertyNames(obj, true, true, this._enumerable);
        // Or could use unfiltered for..in
    },
    getOwnAndPrototypeNonenumerables: function(obj) {
        return this._getPropertyNames(obj, true, true, this._notEnumerable);
    },
    getOwnAndPrototypeEnumerablesAndNonenumerables: function(obj) {
        return this._getPropertyNames(obj, true, true, this._enumerableAndNotEnumerable);
    },
    // Private static property checker callbacks
    _enumerable: function(obj, prop) {
        return obj.propertyIsEnumerable(prop);
    },
    _notEnumerable: function(obj, prop) {
        return !obj.propertyIsEnumerable(prop);
    },
    _enumerableAndNotEnumerable: function(obj, prop) {
        return true;
    },
    // Inspired by http://stackoverflow.com/a/8024294/271577
    _getPropertyNames: function getAllPropertyNames(obj, iterateSelfBool, iteratePrototypeBool, includePropCb) {
        var props = [];

        do {
            if (iterateSelfBool) {
                Object.getOwnPropertyNames(obj).forEach(function(prop) {
                    if (props.indexOf(prop) === -1 && includePropCb(obj, prop)) {
                        props.push(prop);
                    }
                });
            }
            if (!iteratePrototypeBool) {
                break;
            }
            iterateSelfBool = true;
        } while (obj = Object.getPrototypeOf(obj));

        return props;
    }
};
```

## Siehe auch

- [`in`](/en-US/docs/Web/JavaScript/Reference/Operators/in)
- [`for..in`](/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
- {{jsxref("Object.hasOwnProperty()")}}
- {{jsxref("Object.propertyIsEnumerable()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.getOwnPropertyDescriptors()")}}
