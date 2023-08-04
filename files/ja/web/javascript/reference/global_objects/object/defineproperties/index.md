---
title: Object.defineProperties()
slug: Web/JavaScript/Reference/Global_Objects/Object/defineProperties
---

{{JSRef}}

**`Object.defineProperties()`** メソッドは、オブジェクトに直接新しいプロパティを定義し、あるいは既存のプロパティを変更して、そのオブジェクトを返します。

{{EmbedInteractiveExample("pages/js/object-defineproperties.html")}}

## 構文

```
Object.defineProperties(obj, props)
```

### 引数

- `obj`
  - : プロパティを定義または変更するオブジェクト。
- `props`

  - : キーが定義または変更されるプロパティの名前を表し、値がそれらのプロパティを記述するオブジェクトであるオブジェクトです。 `props` の各値は、データ記述子かアクセサー記述子のいずれかでなければなりませんが、両方を指定することはできません (詳細は {{jsxref("Object.defineProperty()")}} を参照してください)。

    データ記述子およびアクセサー記述子は、オプションで以下のキーを含むことができます。

    - `configurable`
      - : プロパティの記述子が変更でき、プロパティが対応するオブジェクトから削除できるときのみ `true`。
        **既定値は `false`。**
    - `enumerable`
      - : 対応するオブジェクトのプロパティを列挙したとき表示される場合のみ `true`。
        **既定値は `false`。**

    データ記述子には以下のオプションのキーもあります。

    - `value`
      - : プロパティに関連づける値。 JavaScript で有効な任意の値です (数値、オブジェクト、関数など)。
        **既定値は {{jsxref("undefined")}}。**
    - `writable`

      - : プロパティに関連づけられた値が{{jsxref("Operators/Assignment_Operators", "代入演算子", "", 1)}}で変更できる場合のみ `true`。
        **既定値は `false`。**

        アクセサー記述子には、以下のオプションのキーもあります。

    - `get`
      - : プロパティのゲッターとして用いられる関数。ゲッターがなければ {{jsxref("undefined")}} になります。関数の返値がプロパティの値として使用されます。
        **既定値は {{jsxref("undefined")}}。**
    - `set`
      - : プロパティのセッターとして用いられる関数。セッターがなければ {{jsxref("undefined")}} になります。関数はただひとつの引数として、プロパティに代入された新たな値を受取ります。
        **既定値は {{jsxref("undefined")}}。**

    記述子が `value`, `writable`, `get` `set` キーのいずれでもない場合は、データ記述子として扱われます。記述子に `value` または `writable` と `get` または `set` キーの両方があった場合は、例外が発生します。

### 返値

関数に渡されたオブジェクト。

## 例

### Object.defineProperties の使用

```js
var obj = {};
Object.defineProperties(obj, {
  property1: {
    value: true,
    writable: true,
  },
  property2: {
    value: "Hello",
    writable: false,
  },
  // etc. etc.
});
```

## ポリフィル

すべての名前とプロパティが自身の初期値を参照する基本的な実行環境において、 `Object.defineProperties` は以下の JavaScript による再実装とほぼ同等です(`isCallable` のコメントに注意)。

```js
function defineProperties(obj, properties) {
  function convertToDescriptor(desc) {
    function hasProperty(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }

    function isCallable(v) {
      // 注意: 関数以外の値が呼び出し可能である場合、必要に応じて変更。
      return typeof v === "function";
    }

    if (typeof desc !== "object" || desc === null)
      throw new TypeError("bad desc");

    var d = {};

    if (hasProperty(desc, "enumerable")) d.enumerable = !!desc.enumerable;
    if (hasProperty(desc, "configurable")) d.configurable = !!desc.configurable;
    if (hasProperty(desc, "value")) d.value = desc.value;
    if (hasProperty(desc, "writable")) d.writable = !!desc.writable;
    if (hasProperty(desc, "get")) {
      var g = desc.get;

      if (!isCallable(g) && typeof g !== "undefined")
        throw new TypeError("bad get");
      d.get = g;
    }
    if (hasProperty(desc, "set")) {
      var s = desc.set;
      if (!isCallable(s) && typeof s !== "undefined")
        throw new TypeError("bad set");
      d.set = s;
    }

    if (("get" in d || "set" in d) && ("value" in d || "writable" in d))
      throw new TypeError("identity-confused descriptor");

    return d;
  }

  if (typeof obj !== "object" || obj === null) throw new TypeError("bad obj");

  properties = Object(properties);

  var keys = Object.keys(properties);
  var descs = [];

  for (var i = 0; i < keys.length; i++)
    descs.push([keys[i], convertToDescriptor(properties[keys[i]])]);

  for (var i = 0; i < descs.length; i++)
    Object.defineProperty(obj, descs[i][0], descs[i][1]);

  return obj;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Object.defineProperties")}}

## 関連情報

- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.keys()")}}
- [プロパティの列挙可能性と所有権](/ja/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
