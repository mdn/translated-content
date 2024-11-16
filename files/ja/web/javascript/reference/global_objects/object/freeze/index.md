---
title: Object.freeze()
slug: Web/JavaScript/Reference/Global_Objects/Object/freeze
l10n:
  sourceCommit: 588a149a835f8a6e24d6ff5ee9b86323296ada5c
---

{{JSRef}}

**`Object.freeze()`** 静的メソッドは、オブジェクトを**凍結**します。オブジェクトを凍結すると、[拡張ができなくなり](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions)、既存のプロパティは書き込みも構成も不可能になります。新しいプロパティを追加したり、既存のプロパティを削除したり、列挙可能性、構成可能性、書き込み可能性、値を変更したり、オブジェクトのプロトタイプを再代入したりすることはできません。 `freeze()` は、渡されたオブジェクトと同じものを返します。

オブジェクトの凍結は JavaScript が提供する最も高い完全性レベルです。

{{EmbedInteractiveExample("pages/js/object-freeze.html")}}

## 構文

```js-nolint
Object.freeze(obj)
```

### 引数

- `obj`
  - : 凍結するオブジェクトです。

### 返値

この関数に渡されたオブジェクトです。

## 説明

オブジェクトを凍結することは、[拡張を禁止](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions)し、既存のすべての[プロパティの記述子](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#解説)の `configurable` を `false` に変更すること、そしてデータプロパティについては、 `writable` を同様に `false` に変更することと同じです。凍結したオブジェクトのプロパティ設定には、何も追加したり除去したりすることはできません。これを行おうとすると、静かに、あるいは {{jsxref("TypeError")}} 例外が発生し、失敗します（{{jsxref("Strict_mode", "厳格モード", "", 1)}}の場合によく発生しますが、これに限ったことではありません）。

凍結されたオブジェクトのプロパティは、 `writable` 属性と `configurable` 属性が `false` に設定されているため、値を変更することはできません。アクセサプロパティ（ゲッターとセッター）も同じように動作します。ゲッターによって返されるプロパティ値は変更される可能性があり、セッターはプロパティを設定する際にエラーを発生させることなく呼び出すことができます。オブジェクトである値は、凍結されていない限り変更することができることに注意してください。配列はオブジェクトとして凍結することができ、凍結後はその要素を変更したり、配列に要素を追加したり除去したりすることはできなくなります。

[プライベートプロパティ](/ja/docs/Web/JavaScript/Reference/Classes/Private_properties)にはプロパティ記述子の概念はありません。プライベートプロパティを持つオブジェクトを凍結しても、プライベートプロパティの値が変更されることはありません。（オブジェクトの凍結は通常、外部コードに対するセキュリティ対策として意味していますが、外部コードはいずれにせよプライベートプロパティにアクセスすることはできません。）オブジェクトが凍結されていてもいなくても、プライベートプロパティをオブジェクトに追加したり除去したりすることはできません。

`freeze()` は関数に渡されたものと同じオブジェクトを返します。凍結されたコピーを生成する訳ではありません。

要素を持つ {{jsxref("TypedArray")}} や {{jsxref("DataView")}} は {{jsxref("TypeError")}} になります。これらはメモリー上のビューであり、他にも可能な問題を確実に引き起こします。

```js
Object.freeze(new Uint8Array(0)); // 要素なし
// Uint8Array []

Object.freeze(new Uint8Array(1)); // 要素あり
// TypeError: 要素を含む配列バッファービューは凍結できない

Object.freeze(new DataView(new ArrayBuffer(32))); // 要素なし
// DataView {}

Object.freeze(new Float64Array(new ArrayBuffer(64), 63, 0)); // 要素なし
// Float64Array []

Object.freeze(new Float64Array(new ArrayBuffer(64), 32, 2)); // 要素あり
// TypeError: 要素を含む配列バッファービューは凍結できない
```

なお、標準の 3 つのプロパティ (`buf.byteLength`, `buf.byteOffset`, `buf.buffer`) は読み取り専用ですので（{{jsxref("ArrayBuffer")}} または {{jsxref("SharedArrayBuffer")}} の場合）、これらのプロパティを凍結しようとする理由はありません。

{{jsxref("Object.seal()")}} とは異なり、 `Object.freeze()` によって凍結されたオブジェクトの既存のプロパティは不変となり、データプロパティには代入できなくなります。

## 例

### オブジェクトの凍結

```js
const obj = {
  prop() {},
  foo: "bar",
};

// 凍結前: 新しいプロパティが追加でき、
// 既存のプロパティは変更や削除ができます
obj.foo = "baz";
obj.lumpy = "woof";
delete obj.prop;

// 凍結
const o = Object.freeze(obj);

// 返値は渡したオブジェクトとまったく同じものです。
o === obj; // true

// オブジェクトは凍結されています。
Object.isFrozen(obj); // === true

// すべての変更が失敗するようになりました
obj.foo = "quux"; // 暗黙的に何も行われません
// 暗黙的にプロパティは追加されません
obj.quaxxor = "the friendly duck";

// また、厳格モードではこれらの試みに対して TypeError が発生します
function fail() {
  "use strict";
  obj.foo = "sparky"; // TypeError が発生
  delete obj.foo; // TypeError が発生
  delete obj.quaxxor; // 属性 'quaxxor' が追加されたことがないため true を返す
  obj.sparky = "arf"; // TypeError が発生
}

fail();

// Object.defineProperty から変更を試みますが、
// 以下のどちらの文も TypeError が発生します。
Object.defineProperty(obj, "ohai", { value: 17 });
Object.defineProperty(obj, "foo", { value: "eit" });

// プロトタイプを変更することもできず、
// 以下のどちらの文も TypeError が発生します。
Object.setPrototypeOf(obj, { x: 20 });
obj.__proto__ = { x: 20 };
```

### 配列の凍結

```js
const a = [0];
Object.freeze(a); // 配列が変更できなくなりました。

a[0] = 1; // 暗黙に失敗

// 厳格モードで試みると TypeError が発生します
function fail() {
  "use strict";
  a[0] = 1;
}

fail();

// push を試みる
a.push(2); // TypeError が発生
```

凍結されたオブジェクトは*不変*になります。しかし、*定数*であるとは限りません。以下の例では、凍結されたオブジェクトが定数ではないことを示しています（凍結が浅い）。

```js
const obj1 = {
  internal: {},
};

Object.freeze(obj1);
obj1.internal.a = "aValue";

obj1.internal.a; // 'aValue'
```

定数オブジェクトになるには、参照のつながり全体（他のオブジェクトへの直接または間接的な参照）が不変で凍結されたオブジェクトのみを参照していなければなりません。凍結されるオブジェクトは、オブジェクト全体の中にあるオブジェクトの*状態*（値と他のオブジェクトへの参照）がすべて固定されているので、不変ということができます。なお、文字列、数値、真偽値はすべて不変となり、関数や配列はオブジェクト扱いです。

#### 深い凍結

`Object.freeze(object)` を呼び出した結果は、`object` の直属のプロパティにのみ適用され、`object` 上*のみ*に対するその後のプロパティの追加、削除、値の再代入操作を禁止します。これらのプロパティの値がオブジェクトそのものであった場合、これらのオブジェクトは凍結されず、プロパティの追加、削除、値の再代入操作の対象になり得ます。

```js
const employee = {
  name: "Mayank",
  designation: "Developer",
  address: {
    street: "Rohini",
    city: "Delhi",
  },
};

Object.freeze(employee);

employee.name = "Dummy"; // 厳格モードでなければ暗黙に失敗
employee.address.city = "Noida"; // 子オブジェクトの属性は変更できる

console.log(employee.address.city); // 出力: "Noida"
```

オブジェクトを不変にするには、オブジェクト型のプロパティをそれぞれ再帰的に凍結させてください（深い凍結）。オブジェクトが参照グラフに[閉路](https://ja.wikipedia.org/wiki/閉路)を含まないことが分かっている場合は、デザインパターンに基づいてケースバイケースのパターンを使用してください。そうでないと、無限ループが発生します。例えば、[`function`](/ja/docs/Web/JavaScript/Reference/Statements/function) 構文で作成された関数は、[`prototype`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function) プロパティにその関数自身を指すコンストラクタープロパティがあるため、既定では循環参照が発生します。その他の関数（[アロー関数](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions)など）は、それでも凍結することができます。

`deepFreeze()` をパス（例えば配列）引数を受け取る内部関数を持つよう拡張すると、オブジェクトを不変にするプロセスにいるときに、 `deepFreeze()` が再帰的に呼び出されることを防ぐことができます。一例として、[`WeakSet` を使用して循環参照を検出](/ja/docs/Web/JavaScript/Reference/Global_Objects/WeakSet#使用例_循環参照の検出)する方法をご覧ください。凍結させてはいけない [`window`](/ja/docs/Web/API/Window) のようなオブジェクトを凍結させる危険性がなおあります。

```js
function deepFreeze(object) {
  // オブジェクトで定義されたプロパティ名を取得
  const propNames = Reflect.ownKeys(object);

  // 自分自身を凍結する前にプロパティを凍結
  for (const name of propNames) {
    const value = object[name];

    if ((value && typeof value === "object") || typeof value === "function") {
      deepFreeze(value);
    }
  }

  return Object.freeze(object);
}

const obj2 = {
  internal: {
    a: null,
  },
};

deepFreeze(obj2);

obj2.internal.a = "anotherValue"; // 厳格モードでなければ暗黙に失敗
obj2.internal.a; // null
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Object.isFrozen()")}}
- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Object.seal()")}}
- {{jsxref("Object.isSealed()")}}
