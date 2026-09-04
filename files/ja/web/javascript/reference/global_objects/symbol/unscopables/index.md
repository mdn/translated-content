---
title: Symbol.unscopables
short-title: unscopables
slug: Web/JavaScript/Reference/Global_Objects/Symbol/unscopables
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

**`Symbol.unscopables`** は静的データプロパティで、[ウェルノウンシンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol#ウェルノウンシンボル)の `Symbol.unscopables` を表します。{{jsxref("Statements/with", "with")}} 文はスコープオブジェクト上で、その `with` 環境内でバインドから除外されるプロパティの集合を持つプロパティを、このシンボルで検索します。

{{InteractiveExample("JavaScript デモ: Symbol.unscopables")}}

```js interactive-example
const object = {
  foo: 42,
};

object[Symbol.unscopables] = {
  foo: true,
};

with (object) {
  console.log(foo);
  // 予想される結果: Error: foo is not defined
}
```

## 値

ウェルノウンシンボル `Symbol.unscopables` です。

{{js_property_attributes(0, 0, 0)}}

## 解説

`[Symbol.unscopables]` シンボル（`Symbol.unscopables` でアクセス）は、[`with`](/ja/docs/Web/JavaScript/Reference/Statements/with) 環境バインドでプロパティ名が字句変数として公開されるのを除外するために、任意のオブジェクトに定義することができます。なお、[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)では、`with` 文は使用できず、このシンボルは必要ありません。

`[Symbol.unscopables]` オブジェクトのプロパティを `true` （または任意の[真値](/ja/docs/Glossary/Truthy)）に設定すると、`with` スコープオブジェクトの対応するプロパティをスコープ対象外するため、`with` 本体スコープに導入されません。プロパティを `false` （または[偽値](/ja/docs/Glossary/Falsy)）に設定すると、スコープ対象となり、字句スコープ変数として現れます。

`x` がスコープ対象外かどうかを判断するとき、`[Symbol.unscopables]` プロパティのプロトタイプチェーン全体に対して `x` というプロパティを呼び出します。つまり、`[Symbol.unscopables]` をプレーンオブジェクトとして宣言した場合、`Object.prototype` のプロパティ（例えば [`toString`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) など）もスコープ対象外になり、これらのプロパティが通常スコープされていると想定している古いコードでは後方互換性が発生する可能性があるということです（[下記の例](#プロトタイプが_null_ではないオブジェクトを_symbol.unscopables_として使うのは避ける)を参照してください）。独自の `[Symbol.unscopables]` プロパティでは、そのプロトタイプとして `null` を持つようにすることをお勧めします（例えば [`Array.prototype[Symbol.unscopables]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables) がそうなっています）。

このプロトコルは、DOM API （[`Element.prototype.append()`](/ja/docs/Web/API/Element/append) など）でも利用されています。

## 例

### with 文内のスコープ

次のコードは、ES5 以下であれば正しく動作します。しかし、 ECMAScript 2015 以降では、{{jsxref("Array.prototype.values()")}} メソッドが導入されました。これは、`with` 環境内で "values" はメソッドになり、`with` 文の外の変数ではなくなったということです。

```js
var values = [];

with (values) {
  // [Symbol.unscopables] が存在しない場合、ECMAScript 2015 から
  // 値は Array.prototype.values になります。
  // そのため、エラーが発生します。
  values.push("something");
}
```

この `with (values)` を含むコードは、`Array.prototype.values()` が追加されたとき、Firefox において一部のウェブサイトで不具合が発生しました（[Firefox Bug 883914](https://bugzil.la/883914)）。さらに、将来配列メソッドが追加された場合、それが暗黙的に `with` スコープを変更すると壊れる可能性があることになります。そのため、`Array.prototype[Symbol.unscopables]` というシンボルが導入され、`Array` に [`Array.prototype[Symbol.unscopables]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables) として実装され、いくつかの Array メソッドが with 文にスコープされるのを防ぎます。

### オブジェクト内の unscopables

自分のオブジェクトに `[Symbol.unscopables]` を設定することもできます。

```js
const obj = {
  foo: 1,
  bar: 2,
  baz: 3,
};

obj[Symbol.unscopables] = {
  // オブジェクトに `null` プロトタイプを持たせて、
  // `Object.prototype` メソッドがスコープから外れないようにする
  __proto__: null,
  // `foo` はスコープ対象
  foo: false,
  // `bar` はスコープ対象外
  bar: true,
  // `baz` は省略。`undefined` は偽値なので、これもスコープ対象（既定値）
};

with (obj) {
  console.log(foo); // 1
  console.log(bar); // ReferenceError: bar is not defined
  console.log(baz); // 3
}
```

### プロトタイプが null ではないオブジェクトを `[Symbol.unscopables]` として使うのは避ける

`[Symbol.unscopables]` のプロトタイプを削除せずに、プレーンオブジェクトとして宣言すると、微妙なバグを発生させる可能性があります。`[Symbol.unscopables]` の前に動作する次のコードを考えてみましょう。

```js
const character = {
  name: "Yoda",
  toString: function () {
    return "Use with statements, you must not";
  },
};

with (character) {
  console.log(name + ' says: "' + toString() + '"'); // Yoda says: "Use with statements, you must not"
}
```

後方互換性を保つために、`character` にプロパティを追加するときに `[Symbol.unscopables]` プロパティを追加することにしました。ナイーブにこうやるかもしれません。

```js example-bad
const character = {
  name: "Yoda",
  toString: function () {
    return "Use with statements, you must not";
  },
  student: "Luke",
  [Symbol.unscopables]: {
    // Make `student` unscopable
    student: true,
  },
};
```

しかし、上のコードは次のようにすると壊れてしまいます。

```js
with (character) {
  console.log(name + ' says: "' + toString() + '"'); // Yoda says: "[object Undefined]"
}
```

これは `character[Symbol.unscopables].toString` を探すと、真値である [`Object.prototype.toString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) を返しているため、`with()` 文の中の `toString()` 呼び出しを、`globalThis.toString()` を参照させるためです。また、[`this`](/ja/docs/Web/JavaScript/Reference/Operators/this) なしで呼び出されているため、`this` は `undefined` であり、`[object Undefined]` を返しています。

このメソッドが `character` でオーバーライドされていない場合でも、これをスコープ不能にすることで `this` の値が変更されます。

```js
const proto = {};
const obj = { __proto__: proto };

with (proto) {
  console.log(isPrototypeOf(obj)); // true; `isPrototypeOf` がスコープされ `this` は `proto` になる
}

proto[Symbol.unscopables] = {};

with (proto) {
  console.log(isPrototypeOf(obj)); // TypeError: Cannot convert undefined or null to object
  // `isPrototypeOf` はスコープされず `this` は undefined になる
}
```

これを修正するには、常に `[Symbol.unscopables]` が、`Object.prototype` プロパティを含まない、スコープ対象外にしたいプロパティのみを持つするようにしてください。

```js example-good
const character = {
  name: "Yoda",
  toString: function () {
    return "Use with statements, you must not";
  },
  student: "Luke",
  [Symbol.unscopables]: {
    // オブジェクトに `null` プロトタイプを持たせて、
    // `Object.prototype` メソッドがスコープから外れないようにする
    __proto__: null,
    // `student` をスコープ対象外にする
    student: true,
  },
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype[Symbol.unscopables]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables)
- [`with`](/ja/docs/Web/JavaScript/Reference/Statements/with)
- [`Element.prototype.append()`](/ja/docs/Web/API/Element/append)
