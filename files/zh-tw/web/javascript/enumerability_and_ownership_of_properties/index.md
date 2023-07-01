---
title: 屬性的可列舉性及所有權
slug: Web/JavaScript/Enumerability_and_ownership_of_properties
---

{{JsSidebar("More")}}

Enumerable properties are those properties whose internal \[\[Enumerable]] flag is set to true, which is the default for properties created via simple assignment or via a property initializer (properties defined via [Object.defineProperty](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) and such default \[\[Enumerable]] to false). Enumerable properties show up in [for...in](/zh-TW/docs/Web/JavaScript/Reference/Statements/for...in) loops unless the property's name is a [Symbol](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Symbol). Ownership of properties is determined by whether the property belongs to the object directly and not to its prototype chain. Properties of an object can also be retrieved in total. There are a number of built-in means of detecting, iterating/enumerating, and retrieving object properties, with the chart showing which are available. Some sample code follows which demonstrates how to obtain the missing categories.

<table>
  <caption>
    Property enumerability and ownership - built-in methods of detection,
    retrieval, and iteration
  </caption>
  <tbody>
    <tr>
      <th>Functionality</th>
      <th>Own object</th>
      <th>Own object and its prototype chain</th>
      <th>Prototype chain only</th>
    </tr>
    <tr>
      <td>Detection</td>
      <td>
        <table>
          <thead>
            <tr>
              <th scope="col">Enumerable</th>
              <th scope="col">Nonenumerable</th>
              <th scope="col">Enumerable and Nonenumerable</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code
                  ><a
                    href="/zh-TW/docs/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable"
                    >propertyIsEnumerable</a
                  ></code
                >
              </td>
              <td>
                <code
                  ><a
                    href="/zh-TW/docs/JavaScript/Reference/Global_Objects/Object/hasOwnProperty"
                    >hasOwnProperty</a
                  ></code
                >
                and not
                <code
                  ><a
                    href="/zh-TW/docs/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable"
                    >propertyIsEnumerable</a
                  ></code
                >
              </td>
              <td>
                <code
                  ><a
                    href="/zh-TW/docs/JavaScript/Reference/Global_Objects/Object/hasOwnProperty"
                    >hasOwnProperty</a
                  ></code
                >
              </td>
            </tr>
          </tbody>
        </table>
      </td>
      <td>Not available without extra code</td>
      <td>Not available without extra code</td>
    </tr>
    <tr>
      <td>Retrieval</td>
      <td>
        <table>
          <thead>
            <tr>
              <th scope="col">Enumerable</th>
              <th scope="col">Nonenumerable</th>
              <th scope="col">Enumerable and Nonenumerable</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code
                  ><a
                    href="/zh-TW/docs/JavaScript/Reference/Global_Objects/Object/keys"
                    >Object.keys</a
                  ></code
                >
              </td>
              <td>
                <code
                  ><a
                    href="/zh-TW/docs/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames"
                    >getOwnPropertyNames</a
                  ></code
                >
                filtered to include properties when not passing
                <code
                  ><a
                    href="/zh-TW/docs/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable"
                    >propertyIsEnumerable</a
                  ></code
                >
              </td>
              <td>
                <code
                  ><a
                    href="/zh-TW/docs/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames"
                    >getOwnPropertyNames</a
                  ></code
                >
              </td>
            </tr>
          </tbody>
        </table>
      </td>
      <td>Not available without extra code</td>
      <td>Not available without extra code</td>
    </tr>
    <tr>
      <td>Iteration</td>
      <td>
        <table>
          <thead>
            <tr>
              <th scope="col">Enumerable</th>
              <th scope="col">Nonenumerable</th>
              <th scope="col">Enumerable and Nonenumerable</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Iterate over
                <code
                  ><a
                    href="/zh-TW/docs/JavaScript/Reference/Global_Objects/Object/keys"
                    >Object.keys</a
                  ></code
                >
              </td>
              <td>
                Iterate over
                <code
                  ><a
                    href="/zh-TW/docs/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames"
                    >getOwnPropertyNames</a
                  > </code
                >filtered to include properties when not passing
                <code
                  ><a
                    href="/zh-TW/docs/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable"
                    >propertyIsEnumerable</a
                  ></code
                >
              </td>
              <td>
                Iterate over
                <code
                  ><a
                    href="/zh-TW/docs/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames"
                    >getOwnPropertyNames</a
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
              <th scope="col">Enumerable</th>
              <th scope="col">Nonenumerable</th>
              <th scope="col">Enumerable and Nonenumerable</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code
                  ><a
                    href="/zh-TW/docs/JavaScript/Reference/Statements/for...in"
                    >for..in</a
                  ></code
                >
              </td>
              <td>Not available without extra code</td>
              <td>Not available without extra code</td>
            </tr>
          </tbody>
        </table>
      </td>
      <td>Not available without extra code</td>
    </tr>
  </tbody>
</table>

## Obtaining properties by enumerability/ownership

Note that this is not the most efficient algorithm for all cases, but useful for a quick demonstration.

- Detection can occur by `SimplePropertyRetriever.theGetMethodYouWant(obj).indexOf(prop) > -1`
- Iteration can occur by `SimplePropertyRetriever.theGetMethodYouWant(obj).forEach(function (value, prop) {});` (or use `filter()`, `map()`, etc.)

```js
var SimplePropertyRetriever = {
  getOwnEnumerables: function (obj) {
    return this._getPropertyNames(obj, true, false, this._enumerable);
    // Or could use for..in filtered with hasOwnProperty or just this: return Object.keys(obj);
  },
  getOwnNonenumerables: function (obj) {
    return this._getPropertyNames(obj, true, false, this._notEnumerable);
  },
  getOwnEnumerablesAndNonenumerables: function (obj) {
    return this._getPropertyNames(
      obj,
      true,
      false,
      this._enumerableAndNotEnumerable
    );
    // Or just use: return Object.getOwnPropertyNames(obj);
  },
  getPrototypeEnumerables: function (obj) {
    return this._getPropertyNames(obj, false, true, this._enumerable);
  },
  getPrototypeNonenumerables: function (obj) {
    return this._getPropertyNames(obj, false, true, this._notEnumerable);
  },
  getPrototypeEnumerablesAndNonenumerables: function (obj) {
    return this._getPropertyNames(
      obj,
      false,
      true,
      this._enumerableAndNotEnumerable
    );
  },
  getOwnAndPrototypeEnumerables: function (obj) {
    return this._getPropertyNames(obj, true, true, this._enumerable);
    // Or could use unfiltered for..in
  },
  getOwnAndPrototypeNonenumerables: function (obj) {
    return this._getPropertyNames(obj, true, true, this._notEnumerable);
  },
  getOwnAndPrototypeEnumerablesAndNonenumerables: function (obj) {
    return this._getPropertyNames(
      obj,
      true,
      true,
      this._enumerableAndNotEnumerable
    );
  },
  // Private static property checker callbacks
  _enumerable: function (obj, prop) {
    return obj.propertyIsEnumerable(prop);
  },
  _notEnumerable: function (obj, prop) {
    return !obj.propertyIsEnumerable(prop);
  },
  _enumerableAndNotEnumerable: function (obj, prop) {
    return true;
  },
  // Inspired by http://stackoverflow.com/a/8024294/271577
  _getPropertyNames: function getAllPropertyNames(
    obj,
    iterateSelfBool,
    iteratePrototypeBool,
    includePropCb
  ) {
    var props = [];

    do {
      if (iterateSelfBool) {
        Object.getOwnPropertyNames(obj).forEach(function (prop) {
          if (props.indexOf(prop) === -1 && includePropCb(obj, prop)) {
            props.push(prop);
          }
        });
      }
      if (!iteratePrototypeBool) {
        break;
      }
      iterateSelfBool = true;
    } while ((obj = Object.getPrototypeOf(obj)));

    return props;
  },
};
```

## Detection Table

|                          | `in` | `for..in` | `hasOwnProperty` | `propertyIsEnumerable` | `in Object.keys` | `in Object.getOwnPropertyNames` | in Object.getOwnPropertyDescriptors |
| ------------------------ | ---- | --------- | ---------------- | ---------------------- | ---------------- | ------------------------------- | ----------------------------------- |
| Enumerable               | true | true      | true             | true                   | true             | true                            | true                                |
| Nonenumerable            | true | false     | true             | false                  | false            | true                            | true                                |
| Inherited Enumerable     | true | true      | false            | false                  | false            | false                           | false                               |
| Inherited Nonenumerable  | true | false     | false            | false                  | false            | false                           | false                               |
| Account for Symbols keys | true | false     | true             | true                   | false            | false                           | true                                |

## 參見

- [`in`](/zh-TW/docs/JavaScript/Reference/Operators/in)
- [`for..in`](/zh-TW/docs/JavaScript/Reference/Statements/for...in)
- [`hasOwnProperty`](/zh-TW/docs/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)
- [`propertyIsEnumerable`](/zh-TW/docs/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable)
- [`getOwnPropertyNames`](/zh-TW/docs/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)
- [`Object.keys`](/zh-TW/docs/JavaScript/Reference/Global_Objects/Object/keys)
- [`Object.getOwnPropertyDescriptors`](/zh-TW/docs/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors)
