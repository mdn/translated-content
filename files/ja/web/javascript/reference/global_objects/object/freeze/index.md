---
title: Object.freeze()
slug: Web/JavaScript/Reference/Global_Objects/Object/freeze
---

{{JSRef}}

**`Object.freeze()`** メソッドはオブジェクトを**凍結**します。凍結されたオブジェクトは変更できなくなります。オブジェクトを凍結すると、新しいプロパティを追加したり、既存のプロパティを削除したりすることができなくなり、既存のプロパティに対する列挙可否、構成可否、書き込み可否の変更ができなくなり、既存のプロパティの値が変更できなくなります。加えて、オブジェクトを凍結するとプロトタイプも変更できなくなります。`freeze()` は渡されたものと同じオブジェクトを返します。

{{EmbedInteractiveExample("pages/js/object-freeze.html")}}

## 構文

```
Object.freeze(obj)
```

### 引数

- `obj`
  - : 凍結するオブジェクトです。

### 返値

この関数に渡されたオブジェクトです。

## 説明

凍結されたオブジェクトにプロパティのセットを追加あるいは削除することはできません。実行しようとすると暗黙に失敗するか、または {{jsxref("TypeError")}} 例外が発生して失敗します (多くの場合は、ただし{{jsxref("Strict_mode", "厳格モード", "", 1)}}ではこれに限りません)。

凍結されたオブジェクトデータプロパティについては、値を変更することはできず、構成可否、書き込み可否の属性は false に設定されます。アクセサープロパティ (ゲッターおよびセッター) は同様に動作します (そして、値を変更しているかのようにみえます)。なお、オブジェクトである値については、それも凍結されていない限り変更可能です。オブジェクトとして、配列は凍結可能です。凍結すると、要素が変更可能ではなくなり、配列に対する要素の追加や削除ができなくなります。

`freeze()` は関数に渡されたものと同じオブジェクトを返します。凍結されたコピーを生成する訳では*ありません*。

ECMAScript 5 では、このメソッドの引数がオブジェクトではない (プリミティブである) 場合、{{jsxref("TypeError")}} が発生します。ECMAScript 2015 では、オブジェクトではない引数は通常の凍結済みのオブジェクトである場合と同様に扱い、単純に返されます。

```js
> Object.freeze(1)
TypeError: 1 is not an object // ES5 のコード

> Object.freeze(1)
1                             // ES2015 のコード
```

要素を伴う {{domxref("ArrayBufferView")}} では、メモリー上のビューであり絶対的に他の問題の可能性があるため、{{jsxref("TypeError")}} が発生します。

```js
> Object.freeze(new Uint8Array(0)) // 要素なし
Uint8Array []

> Object.freeze(new Uint8Array(1)) // 要素あり
TypeError: Cannot freeze array buffer views with elements

> Object.freeze(new DataView(new ArrayBuffer(32))) // 要素なし
DataView {}

> Object.freeze(new Float64Array(new ArrayBuffer(64), 63, 0)) // 要素なし
Float64Array []

> Object.freeze(new Float64Array(new ArrayBuffer(64), 32, 2)) // 要素あり
TypeError: Cannot freeze array buffer views with elements
```

なお、標準の 3 つのプロパティ (`buf.byteLength`, `buf.byteOffset` and `buf.buffer`) は読み取り専用ですので ({{jsxref("ArrayBuffer")}} または {{jsxref("SharedArrayBuffer")}} の場合)、これらのプロパティを凍結しようとする理由はありません。

### Object.seal() との比較

{{jsxref("Object.seal()")}} によって封印されたオブジェクトは、既存のプロパティを変更することができます。`Object.freeze()` によって凍結されたオブジェクトの既存のプロパティは、不変になります。

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

// Object.defineProperty; から変更を試みますが、
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
let a = [0];
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

凍結されたオブジェクトは*不変*になります。しかし、*定数*であるとは限りません。以下の例では、凍結されたオブジェクトが定数ではないことを示しています (凍結が浅い)。

```js
const obj1 = {
  internal: {},
};

Object.freeze(obj1);
obj1.internal.a = "aValue";

obj1.internal.a; // 'aValue'
```

定数オブジェクトになるには、参照のつながり全体 (他のオブジェクトへの直接または間接的な参照) が不変で凍結されたオブジェクトのみを参照していなければなりません。凍結されるオブジェクトは、オブジェクト全体の中にあるオブジェクトの*状態* (値と他のオブジェクトへの参照) がすべて固定されているので、不変ということができます。なお、文字列、数値、真偽値はすべて不変となり、関数や配列はオブジェクト扱いです。

#### 浅い凍結とは

`Object.freeze(object)` を呼び出した結果は、`object` の直属のプロパティにのみ適用され、`object` 上*のみ*に対するその後のプロパティの追加、削除、値の再割り当て操作を禁止します。これらのプロパティの値がオブジェクトそのものであった場合、これらのオブジェクトは凍結されず、プロパティの追加、削除、値の再割り当て操作の対象になり得ます。

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

employee.name = "Dummy"; // 非 strict モードでは暗黙に失敗
employee.address.city = "Noida"; // 子オブジェクトの属性は変更できる

console.log(employee.address.city); // 出力: "Noida"
```

オブジェクトを不変にするには、オブジェクト型のプロパティをそれぞれ再帰的に凍結させてください (深い凍結)。オブジェクトが参照グラフに[閉路](https://ja.wikipedia.org/wiki/閉路)を含まないことが分かっている場合は、デザインパターンに基づいてケースバイケースのパターンを使用してください。そうでないと、無限ループが発生します。`deepFreeze()` をパス (例えば配列) 引数を受け取る内部関数を持つよう拡張すると、オブジェクトを不変にするプロセスにいるときに、`deepFreeze()` が再帰的に呼び出されることを防ぐことができます。凍結させてはいけない \[window] のようなオブジェクトを凍結させる危険性がなおあります。

```js
function deepFreeze(object) {
  // オブジェクトで定義されたプロパティ名を取得
  const propNames = Object.getOwnPropertyNames(object);

  // 自分自身を凍結する前にプロパティを凍結

  for (const name of propNames) {
    const value = object[name];

    if (value && typeof value === "object") {
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

obj2.internal.a = "anotherValue"; // 非 strict モードでは暗黙に失敗
obj2.internal.a; // null
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Object.freeze")}}

## 関連情報

- {{jsxref("Object.isFrozen()")}}
- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Object.seal()")}}
- {{jsxref("Object.isSealed()")}}
