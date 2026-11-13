---
title: プロパティの列挙可能性と所有権
slug: Web/JavaScript/Guide/Enumerability_and_ownership_of_properties
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript オブジェクトのすべてのプロパティは、次の 3 つの要素によって分類できます。

- 列挙可能か、列挙不可能か
- 文字列か、[シンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol)か
- 自身のプロパティか、プロトタイプチェーンから継承されたプロパティか

「列挙可能プロパティ」は、内部の列挙可能 (enumerable) フラグが true に設定されているプロパティです。これは、単純な代入や初期化で作成されたプロパティのデフォルトです。[`Object.defineProperty`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) で追加したプロパティはデフォルトで列挙不可能になります。多くの反復処理（[`for...in`](/ja/docs/Web/JavaScript/Reference/Statements/for...in) ループや [`Object.keys`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) など）は列挙可能なキーしか処理しません。

プロパティの所有権は、そのプロパティがオブジェクトに直接属しており、プロトタイプチェーンに属しているものではないかどうかによって決まります。

列挙可能か否か、文字列かシンボルか、固有のプロパティか継承されたプロパティかを問わず、すべてのプロパティは[ドット記法またはブラケット記法](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors)を使用してアクセスできます。この節では、JavaScript が指定する、オブジェクトのプロパティ群を一つずつ順に参照する方法に焦点を当てます。

## オブジェクトプロパティの問い合わせ

オブジェクトのプロパティを照会する組み込みの方法は 4 つあります。すべて文字列キーとシンボルキーの両方に対応しています。次の表は、それぞれのメソッドがいつ `true` を返すかをまとめたものです。

|                                                                                                          | 列挙可能、自身 | 列挙可能、継承 | 列挙不可、自身 | 列挙不可、継承 |
| -------------------------------------------------------------------------------------------------------- | -------------- | -------------- | -------------- | -------------- |
| [`propertyIsEnumerable()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable) | `true ✅`      | `false ❌`     | `false ❌`     | `false ❌`     |
| [`hasOwnProperty()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)             | `true ✅`      | `false ❌`     | `true ✅`      | `false ❌`     |
| [`Object.hasOwn()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn)                      | `true ✅`      | `false ❌`     | `true ✅`      | `false ❌`     |
| [`in`](/ja/docs/Web/JavaScript/Reference/Operators/in)                                                   | `true ✅`      | `true ✅`      | `true ✅`      | `true ✅`      |

## オブジェクトのプロパティの走査

JavaScript で、オブジェクトのプロパティ群を順に処理するメソッドが数多くあります。プロパティが配列として返される場合もあるし、ループ内で一つずつ反復処理される場合もあるし、あるいは別のオブジェクトの生成や変更に使用する場合もある。以下の表は、プロパティがいつ参照されるかをまとめたものです。

文字列プロパティのみ、またはシンボルプロパティのみを参照するメソッドには、追加のメモが付いています。✅ はこの種のプロパティが参照されることを示し、❌ は参照されないことを示します。

|                                                                                                                                                                                                                                                               | 列挙可能、自身       | 列挙可能、継承     | 列挙不可、自身       | 列挙不可、継承 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | ------------------ | -------------------- | -------------- |
| [`Object.keys`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)<br />[`Object.values`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/values)<br />[`Object.entries`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/entries) | ✅<br />（文字列）   | ❌                 | ❌                   | ❌             |
| [`Object.getOwnPropertyNames`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)                                                                                                                                                   | ✅<br />（文字列）   | ❌                 | ✅<br />（文字列）   | ❌             |
| [`Object.getOwnPropertySymbols`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols)                                                                                                                                               | ✅<br />（シンボル） | ❌                 | ✅<br />（シンボル） | ❌             |
| [`Object.getOwnPropertyDescriptors`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors)                                                                                                                                       | ✅                   | ❌                 | ✅                   | ❌             |
| [`Reflect.ownKeys`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys)                                                                                                                                                                         | ✅                   | ❌                 | ✅                   | ❌             |
| [`for...in`](/ja/docs/Web/JavaScript/Reference/Statements/for...in)                                                                                                                                                                                           | ✅<br />（文字列）   | ✅<br />（文字列） | ❌                   | ❌             |
| [`Object.assign`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)<br />(After the first parameter)                                                                                                                                            | ✅                   | ❌                 | ❌                   | ❌             |
| [Object spread](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)                                                                                                                                                                                    | ✅                   | ❌                 | ❌                   | ❌             |

## 列挙可能性/所有権によるプロパティの取得

以下に示すのは全てのケースで最も効率的なアルゴリズムではなく、簡潔なデモであることに注意してください。

- 検出は次のの方法で行うことができます。
  `SimplePropertyRetriever.theGetMethodYouWant(obj).includes(prop)`
- 反復は次のの方法で行うことができます。
  `SimplePropertyRetriever.theGetMethodYouWant(obj).forEach((value, prop) => {});` (または `filter()`, `map()` などを使う)

```js
const SimplePropertyRetriever = {
  getOwnEnumProps(obj) {
    return this._getPropertyNames(obj, true, false, this._enumerable);
    // または、Object.hasOwn でフィルタリングするか、単に return Object.keys(obj); とすることもできる
  },
  getOwnNonEnumProps(obj) {
    return this._getPropertyNames(obj, true, false, this._notEnumerable);
  },
  getOwnProps(obj) {
    return this._getPropertyNames(
      obj,
      true,
      false,
      this._enumerableAndNotEnumerable,
    );
    // または。単に return Object.getOwnPropertyNames(obj); を使用
  },
  getPrototypeEnumProps(obj) {
    return this._getPropertyNames(obj, false, true, this._enumerable);
  },
  getPrototypeNonEnumProps(obj) {
    return this._getPropertyNames(obj, false, true, this._notEnumerable);
  },
  getPrototypeProps(obj) {
    return this._getPropertyNames(
      obj,
      false,
      true,
      this._enumerableAndNotEnumerable,
    );
  },
  getOwnAndPrototypeEnumProps(obj) {
    return this._getPropertyNames(obj, true, true, this._enumerable);
    // Or could use unfiltered for...in
  },
  getOwnAndPrototypeNonEnumProps(obj) {
    return this._getPropertyNames(obj, true, true, this._notEnumerable);
  },
  getOwnAndPrototypeEnumAndNonEnumProps(obj) {
    return this._getPropertyNames(
      obj,
      true,
      true,
      this._enumerableAndNotEnumerable,
    );
  },
  // プライベート性的プロパティのチェッカーコールバック
  _enumerable(obj, prop) {
    return Object.prototype.propertyIsEnumerable.call(obj, prop);
  },
  _notEnumerable(obj, prop) {
    return !Object.prototype.propertyIsEnumerable.call(obj, prop);
  },
  _enumerableAndNotEnumerable(obj, prop) {
    return true;
  },
  // Inspired by http://stackoverflow.com/a/8024294/271577
  _getPropertyNames(obj, iterateSelf, iteratePrototype, shouldInclude) {
    const props = [];
    do {
      if (iterateSelf) {
        Object.getOwnPropertyNames(obj).forEach((prop) => {
          if (props.indexOf(prop) === -1 && shouldInclude(obj, prop)) {
            props.push(prop);
          }
        });
      }
      if (!iteratePrototype) {
        break;
      }
      iterateSelf = true;
      obj = Object.getPrototypeOf(obj);
    } while (obj);
    return props;
  },
};
```

## 関連情報

- [`in`](/ja/docs/Web/JavaScript/Reference/Operators/in)
- [`for..in`](/ja/docs/Web/JavaScript/Reference/Statements/for...in)
- [`Object.prototype.hasOwnProperty()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)
- [`Object.prototype.propertyIsEnumerable()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable)
- [`Object.getOwnPropertyNames()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)
- [`Object.getOwnPropertySymbols()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols)
- [`Object.keys()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
- [`Object.getOwnPropertyDescriptors()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors)
- [`Object.hasOwn()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn)
- [`Reflect.ownKeys()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys)
