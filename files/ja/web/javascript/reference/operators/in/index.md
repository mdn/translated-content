---
title: in 演算子
slug: Web/JavaScript/Reference/Operators/in
---

{{jsSidebar("Operators")}}

**`in` 演算子**は、指定されたプロパティが指定されたオブジェクトにある場合に `true` を返します。

{{EmbedInteractiveExample("pages/js/expressions-inoperator.html")}}

## 構文

```js
prop in object;
```

### 引数

- `prop`
  - : プロパティ名または配列のインデックスを表す文字列式またはシンボルです（シンボルではない場合は、文字列に強制変換されます）。
- `object`
  - : オブジェクト（またはそのプロトタイプチェーン）に、指定された名前（`prop`）のプロパティが含まれているかどうかを確認するオブジェクト。

## 例

### 基本的な使い方

次の例で `in` 演算子の使用法を示します。

```js
// 配列
let trees = ["redwood", "bay", "cedar", "oak", "maple"];
0 in trees; // true を返す
3 in trees; // true を返す
6 in trees; // false を返す
"bay" in trees; // false を返す (添字の指す値ではなく、添字の数値を指定しなければならない)
"length" in trees; // true を返す (length は Array のプロパティ)
Symbol.iterator in trees; // true を返す (配列は反復可能。 ES2015 以上で動作する)

// 定義済みオブジェクト
"PI" in Math; // true を返す

// ユーザー定義オブジェクト
let mycar = { make: "Honda", model: "Accord", year: 1998 };
"make" in mycar; // true を返す
"model" in mycar; // true を返す
```

`in` 演算子の右側には、オブジェクトを指定しなければなりません。例えば、`String` コンストラクターで作成した文字列は指定できますが、文字列リテラルは指定できません。

```js
let color1 = new String("green");
"length" in color1; // true を返す

let color2 = "coral";
// エラーが発生 (color2 は String オブジェクトではない)
"length" in color2;
```

### 削除済みあるいは未定義状態のプロパティへの `in` の使用

[`delete`](/ja/docs/Web/JavaScript/Reference/Operators/delete) 演算子で削除されたプロパティについては、`in` 演算子は `false` を返します。

```js
let mycar = { make: "Honda", model: "Accord", year: 1998 };
delete mycar.make;
"make" in mycar; // false を返す

let trees = new Array("redwood", "bay", "cedar", "oak", "maple");
delete trees[3];
3 in trees; // false を返す
```

{{jsxref("Global_Objects/undefined", "undefined")}} を設定しているが削除されていないプロパティについて、`in` 演算子は true を返します。

```js
let mycar = { make: "Honda", model: "Accord", year: 1998 };
mycar.make = undefined;
"make" in mycar; // true を返す
```

```js
let trees = new Array("redwood", "bay", "cedar", "oak", "maple");
trees[3] = undefined;
3 in trees; // true を返す
```

`in` 演算子は、空の配列スロットに対して `false` を返します。直接アクセスしても `undefined` が返されます。

```js
let empties = new Array(3);
empties[2]; // undefined を返す
2 in empties; // false を返す
```

これを避けるためには、新しい配列が常に空でない値で埋められるようにするか、配列の終わりを超える位置に書き込まないようにしてください。

```js
let empties = new Array(3).fill(undefined);
2 in empties; // true を返す
```

### 継承されたプロパティ

`in` 演算子は、プロトタイプチェーンのプロパティに対して `true` を返します。(*継承されていない*プロパティのみをチェックする場合は、代わりに {{jsxref("Object.prototype.hasOwnProperty()")}} を使用してください)。

```js
"toString" in {}; // true を返す
```

### プライベートフィールドとメソッド

`in` 演算子を使用して、特定の[クラスのプライベートフィールドまたはメソッド](/ja/docs/Web/JavaScript/Reference/Classes/Private_class_fields)がクラスで定義されているかどうかを調べることができます。そのメソッドが存在すれば演算子は `true` を返し、そうでなければ `false` を返します。

> **メモ:** クラスの定義されていない*プライベート*フィールドやメソッドにアクセスしようとすると、コードで `throw` が発生します。存在しない可能性があるプライベートフィールドを `in` 演算子でチェックすると、 `try/catch` を使用するより簡潔にすることができます。

以下のコードは、指定されたクラスが特定のプライベートメソッドやフィールドを持っているかどうかをチェックする静的関数です。

```js
class ClassWithPrivateFeatures {
  #a;
  #b = null;
  #c() {}
  get #d() {}
  static f(o) {
    return #a in o && #b in o && #c in o && #d in o;
  }
}
ClassWithPrivateFeatures.f(new ClassWithPrivateFeatures()); // true を返す
ClassWithPrivateFeatures.f({}); // false を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`for...in`](/ja/docs/Web/JavaScript/Reference/Statements/for...in)
- [`delete`](/ja/docs/Web/JavaScript/Reference/Operators/delete)
- {{jsxref("Object.prototype.hasOwnProperty()")}}
- {{jsxref("Reflect.has()")}}
- [プロパティの列挙可能性と所有権](/ja/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
