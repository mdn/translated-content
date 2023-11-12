---
title: 属性的可枚举性和所有权
slug: Web/JavaScript/Enumerability_and_ownership_of_properties
---

{{JsSidebar("More")}}

可枚举属性是指那些内部“可枚举”标志设置为 `true` 的属性，对于通过直接的赋值和属性初始化的属性，该标识值默认为即为 `true`，对于通过 [Object.defineProperty](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) 等定义的属性，该标识值默认为 `false`。可枚举的属性可以通过 [for...in](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in) 循环进行遍历（除非该属性名是一个 [Symbol](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol)）。属性的所有权是通过判断该属性是否直接属于某个对象决定的，而不是通过原型链继承的。一个对象的所有的属性可以一次性的获取到。有一些内置的方法可以用于判断、迭代/枚举以及获取对象的一个或一组属性，下表对这些方法进行了列举。对于部分不可用的类别，下方的示例代码对获取方法进行了演示。

<table>
  <caption>
    属性的可枚举性和所有权 - 内置的判断、访问和迭代方法
  </caption>
  <tbody>
    <tr>
      <th>作用</th>
      <th>自身对象</th>
      <th>自身对象及其原型链</th>
      <th>仅原型链</th>
    </tr>
    <tr>
      <td>判断</td>
      <td>
        <table>
          <thead>
            <tr>
              <th scope="col">可枚举属性</th>
              <th scope="col">不可枚举属性</th>
              <th scope="col">可枚举属性及不可枚举属性</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code
                  ><a
                    href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable"
                    >propertyIsEnumerable</a
                  ></code
                ><br /><code
                  ><a
                    href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty"
                    >hasOwnProperty</a
                  ></code
                >
              </td>
              <td>
                <code
                  ><a
                    href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty"
                    >hasOwnProperty</a
                  ></code
                >
                获取属性后使用
                <code
                  ><a
                    href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable"
                    >propertyIsEnumerable</a
                  ></code
                >
                过滤可枚举属性
              </td>
              <td>
                <code
                  ><a
                    href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty"
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
              <th scope="col">可枚举属性</th>
              <th scope="col">不可枚举属性</th>
              <th scope="col">可枚举属性及不可枚举属性</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>需要额外代码实现</td>
              <td>需要额外代码实现</td>
              <td>
                <code
                  ><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/in"
                    >in</a
                  ></code
                >
              </td>
            </tr>
          </tbody>
        </table>
      </td>
      <td>需要额外代码实现</td>
    </tr>
    <tr>
      <td>访问</td>
      <td>
        <table>
          <thead>
            <tr>
              <th scope="col">可枚举属性</th>
              <th scope="col">不可枚举属性</th>
              <th scope="col">可枚举属性及不可枚举属性</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code
                  ><a
                    href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys"
                    >Object.keys</a
                  ></code
                ><br /><code
                  ><a
                    href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames"
                    >getOwnPropertyNames</a
                  ></code
                ><br /><code
                  ><a
                    href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols"
                    >getOwnPropertySymbols</a
                  ></code
                >
              </td>
              <td>
                <code
                  ><a
                    href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames"
                    >getOwnPropertyNames</a
                  ></code
                >、<code
                  ><a
                    href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols"
                    >getOwnPropertySymbols</a
                  > </code
                >获取属性后使用
                <code
                  ><a
                    href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable"
                    >propertyIsEnumerable</a
                  ></code
                >
                过滤可枚举属性
              </td>
              <td>
                <code
                  ><a
                    href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames"
                    >getOwnPropertyNames</a
                  ></code
                ><br /><code
                  ><a
                    href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols"
                    >getOwnPropertySymbols</a
                  ></code
                >
              </td>
            </tr>
          </tbody>
        </table>
      </td>
      <td>需要额外代码实现</td>
      <td>需要额外代码实现</td>
    </tr>
    <tr>
      <td>迭代</td>
      <td>
        <table>
          <thead>
            <tr>
              <th scope="col">可枚举属性</th>
              <th scope="col">不可枚举属性</th>
              <th scope="col">可枚举属性及不可枚举属性</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code
                  ><a
                    href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys"
                    >Object.keys</a
                  ></code
                ><br /><code
                  ><a
                    href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames"
                    >getOwnPropertyNames</a
                  ></code
                ><br /><code
                  ><a
                    href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols"
                    >getOwnPropertySymbols</a
                  ></code
                >
              </td>
              <td>
                <code
                  ><a
                    href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames"
                    >getOwnPropertyNames</a
                  ></code
                >、<code
                  ><a
                    href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols"
                    >getOwnPropertySymbols</a
                  ></code
                >
                获取属性后使用
                <code
                  ><a
                    href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable"
                    >propertyIsEnumerable</a
                  ></code
                >
                过滤可枚举属性
              </td>
              <td>
                <code
                  ><a
                    href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames"
                    >getOwnPropertyNames</a
                  ></code
                ><br /><code
                  ><a
                    href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols"
                    >getOwnPropertySymbols</a
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
              <th scope="col">可枚举属性</th>
              <th scope="col">不可枚举属性</th>
              <th scope="col">可枚举属性及不可枚举属性</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code
                  ><a
                    href="/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in"
                    >for..in</a
                  ></code
                ><br />（同时会排除 Symbol）
              </td>
              <td>需要额外代码实现</td>
              <td>需要额外代码实现</td>
            </tr>
          </tbody>
        </table>
      </td>
      <td>需要额外代码实现</td>
    </tr>
  </tbody>
</table>

## 通过可枚举性和所有权获取对象的属性

注：以下实现并非使用于所有情况的最优算法，但可以快捷的展示语言特性。

- 使用 `SimplePropertyRetriever.theGetMethodYouWant(obj).indexOf(prop) > -1` 时将发生判断操作。
- 使用 `SimplePropertyRetriever.theGetMethodYouWant(obj).forEach(function (value, prop) {});` 时将发生迭代操作。 (或使用 `filter()`、`map()` 等方法)

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
      this._enumerableAndNotEnumerable,
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
      this._enumerableAndNotEnumerable,
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
      this._enumerableAndNotEnumerable,
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
    includePropCb,
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

## 统计表

|                    | `in` | `for..in` | `obj.hasOwnProperty` | `obj.propertyIsEnumerable` | `Object.keys` | `Object.getOwnPropertyNames` | `Object.getOwnPropertyDescriptors` | `Reflect.ownKeys()` |
| ------------------ | ---- | --------- | -------------------- | -------------------------- | ------------- | ---------------------------- | ---------------------------------- | ------------------- |
| 自身的可枚举属性   | true | true      | true                 | true                       | true          | true                         | true                               | true                |
| 自身的不可枚举属性 | true | false     | true                 | false                      | false         | true                         | true                               | true                |
| 自身的 Symbol 键   | true | false     | true                 | true                       | false         | false                        | true                               | true                |
| 继承的可枚举属性   | true | true      | false                | false                      | false         | false                        | false                              | false               |
| 继承的不可枚举属性 | true | false     | false                | false                      | false         | false                        | false                              | false               |
| 继承的 Symbol 键   | true | false     | false                | false                      | false         | false                        | false                              | false               |

## 参见

- [`in`](/zh-CN/docs/Web/JavaScript/Reference/Operators/in)
- [`for..in`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in)
- {{jsxref("Object.hasOwnProperty()")}}
- {{jsxref("Object.propertyIsEnumerable()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.getOwnPropertyDescriptors()")}}
