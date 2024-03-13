---
title: プロパティの列挙可能性と所有権
slug: Web/JavaScript/Enumerability_and_ownership_of_properties
---

{{JsSidebar("More")}}

列挙可能プロパティは、内部の列挙可能（enumerable）フラグが true に設定されているプロパティです。これは、単純な代入や初期化で作成されたプロパティのデフォルトです ([Object.defineProperty](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) で追加したプロパティはデフォルトで列挙可能性が false になります）。プロパティのキーが [Symbol](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol) でない限り、列挙可能なプロパティは [for...in](/ja/docs/Web/JavaScript/Reference/Statements/for...in) ループにの対象になります。プロパティの所有権は、プロパティがプロトタイプチェーンではなく、オブジェクトに直接属しているかどうかによって決まります。オブジェクトのプロパティはまとめて取り扱うこともでき、プロパティを検出、反復、列挙、取得するための多くの組み込み機能があります。以下に、使用可能なチャートと不足しているカテゴリを取得する方法を示すサンプルコードを示します。

<table>
  <caption>
    プロパティの列挙可能性と所有権の検出、取得、反復の組み込みメソッド
  </caption>
  <tbody>
    <tr>
      <th>機能</th>
      <th>所有するオブジェクト</th>
      <th>所有するオブジェクトとプロトタイプチェーン</th>
      <th>プロトタイプチェーンのみ</th>
    </tr>
    <tr>
      <td>検出</td>
      <td>
        <table>
          <thead>
            <tr>
              <th scope="col">列挙可能</th>
              <th scope="col">列挙不可能</th>
              <th scope="col">列挙可能と列挙不可能</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>
                  <code
                    ><a
                      href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable"
                      >propertyIsEnumerable</a
                    ></code
                  >
                </p>
                <p>
                  <code
                    ><a
                      href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty"
                      >hasOwnProperty</a
                    ></code
                  >
                </p>
              </td>
              <td>
                <p>
                  <code
                    ><a
                      href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty"
                      >hasOwnProperty</a
                    ></code
                  >
                  –
                  <code
                    ><a
                      href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable"
                      >propertyIsEnumerable</a
                    ></code
                  >
                  を使用して列挙可能なものを除外するようにフィルターリング
                </p>
              </td>
              <td>
                <code
                  ><a
                    href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty"
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
              <th scope="col">列挙可能</th>
              <th scope="col">列挙不可能</th>
              <th scope="col">列挙可能と列挙不可能</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>追加のコードが必要</td>
              <td>追加のコードが必要</td>
              <td>
                <code
                  ><a href="/ja/docs/Web/JavaScript/Reference/Operators/in"
                    >in</a
                  ></code
                >
              </td>
            </tr>
          </tbody>
        </table>
      </td>
      <td>追加のコードが必要</td>
    </tr>
    <tr>
      <td>取得</td>
      <td>
        <table>
          <thead>
            <tr>
              <th scope="col">列挙可能</th>
              <th scope="col">列挙不可能</th>
              <th scope="col">列挙可能と列挙不可能</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>
                  <code
                    ><a
                      href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/keys"
                      >Object.keys</a
                    ></code
                  >
                </p>
                <p>
                  <code
                    ><a
                      href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames"
                      >getOwnPropertyNames</a
                    ></code
                  >
                </p>
                <p>
                  <code
                    ><a
                      href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols"
                      >getOwnPropertySymbols</a
                    ></code
                  >
                </p>
              </td>
              <td>
                <code
                  ><a
                    href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames"
                    >getOwnPropertyNames</a
                  ></code
                >,
                <code
                  ><a
                    href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols"
                    >getOwnPropertySymbols</a
                  ></code
                >
                –
                <code
                  ><a
                    href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable"
                    >propertyIsEnumerable</a
                  ></code
                >
                を使用して列挙可能なものを除外するようにフィルターリング
              </td>
              <td>
                <p>
                  <code
                    ><a
                      href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames"
                      >getOwnPropertyNames</a
                    ></code
                  >
                </p>
                <p>
                  <code
                    ><a
                      href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols"
                      >getOwnPropertySymbols</a
                    ></code
                  >
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
      <td>追加のコードが必要</td>
      <td>追加のコードが必要</td>
    </tr>
    <tr>
      <td>反復</td>
      <td>
        <table>
          <thead>
            <tr>
              <th scope="col">列挙可能</th>
              <th scope="col">列挙不可能</th>
              <th scope="col">列挙可能と列挙不可能</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>
                  <code
                    ><a
                      href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/keys"
                      >Object.keys</a
                    ></code
                  >
                </p>
                <p>
                  <code
                    ><a
                      href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames"
                      >getOwnPropertyNames</a
                    ></code
                  >
                </p>
                <p>
                  <code
                    ><a
                      href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols"
                      >getOwnPropertySymbols</a
                    ></code
                  >
                </p>
              </td>
              <td>
                <code
                  ><a
                    href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames"
                    >getOwnPropertyNames</a
                  ></code
                >,
                <code
                  ><a
                    href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols"
                    >getOwnPropertySymbols</a
                  ></code
                >
                –
                <code
                  ><a
                    href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable"
                    >propertyIsEnumerable</a
                  ></code
                >
                を使用して列挙可能なものを除外するようにフィルターリング
              </td>
              <td>
                <p>
                  <code
                    ><a
                      href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames"
                      >getOwnPropertyNames</a
                    ></code
                  >
                </p>
                <p>
                  <code
                    ><a
                      href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols"
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
              <th scope="col">列挙可能</th>
              <th scope="col">列挙不可能</th>
              <th scope="col">列挙可能と列挙不可能</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>
                  <code
                    ><a
                      href="/ja/docs/Web/JavaScript/Reference/Statements/for...in"
                      >for..in</a
                    ></code
                  >
                </p>
                <p>(symbol を除く)</p>
              </td>
              <td>追加のコードが必要</td>
              <td>追加のコードが必要</td>
            </tr>
          </tbody>
        </table>
      </td>
      <td>追加のコードが必要</td>
    </tr>
  </tbody>
</table>

## 列挙可能性/所有権によるプロパティの取得

以下に示すのは全てのケースで最も効率的なアルゴリズムではなく、簡潔なデモであることに注意してください。

- 検出は以下の方法で行うことができます。
  `SimplePropertyRetriever.使いたい get メソッド(obj).indexOf(prop) > -1`
- 反復は以下の方法で行うことができます。
  `SimplePropertyRetriever.使いたい get メソッド(obj).forEach(function (value, prop) {});` (または `filter()`, `map()` などを使う)

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

## 検出テーブル

|                         | `in` | `for..in` | `obj.hasOwnProperty` | `obj.propertyIsEnumerable` | `Object.keys` | `Object.getOwnPropertyNames` | `Object.getOwnPropertyDescriptors` | `Reflect.ownKeys()` |
| ----------------------- | ---- | --------- | -------------------- | -------------------------- | ------------- | ---------------------------- | ---------------------------------- | ------------------- |
| 列挙可能                | true | true      | true                 | true                       | true          | true                         | true                               | true                |
| 列挙不可能              | true | false     | true                 | false                      | false         | true                         | true                               | true                |
| Symbols キー            | true | false     | true                 | true                       | false         | false                        | true                               | true                |
| 継承された列挙可能      | true | true      | false                | false                      | false         | false                        | false                              | false               |
| 継承された列挙不可能    | true | false     | false                | false                      | false         | false                        | false                              | false               |
| 継承された Symbols キー | true | false     | false                | false                      | false         | false                        | false                              | false               |

## 関連情報

- [`in`](/ja/docs/Web/JavaScript/Reference/Operators/in)
- [`for..in`](/ja/docs/Web/JavaScript/Reference/Statements/for...in)
- {{jsxref("Object.hasOwnProperty()")}}
- {{jsxref("Object.propertyIsEnumerable()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.getOwnPropertyDescriptors()")}}
