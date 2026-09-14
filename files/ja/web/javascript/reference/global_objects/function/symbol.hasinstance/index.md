---
title: Function.prototype[Symbol.hasInstance]()
short-title: "[Symbol.hasInstance]()"
slug: Web/JavaScript/Reference/Global_Objects/Function/Symbol.hasInstance
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`[Symbol.hasInstance]()`** は {{jsxref("Function")}} インスタンスのメソッドで、コンストラクター関数がオブジェクトをそのコンストラクターのインスタンスの一つであると認識するかどうかを決定するデフォルトの手続きを定義します。これは、[`instanceof`](/ja/docs/Web/JavaScript/Reference/Operators/instanceof) 演算子から呼ばれます。

## 構文

```js-nolint
func[Symbol.hasInstance](value)
```

### 引数

- `value`
  - : 判定を行うオブジェクトです。プリミティブ値に対しては常に `false` を返します。

### 返値

`func.prototype` が `value` のプロトタイプチェーン内に存在する場合は `true` を返し、そうでない場合は `false` を返します。`value` がオブジェクトではないか、`this` が関数でない場合は、常に `false` を返します。`this` が[バインド済み関数](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)である場合は、`value` およびもとになったターゲット関数における `instanceof` 判定の結果を返します。

### 例外

- {{jsxref("TypeError")}}
  - : `this` がバインド済み関数ではなく、かつ `this.prototype` がオブジェクトではないとき投げられます。

## 説明

[`instanceof`](/ja/docs/Web/JavaScript/Reference/Operators/instanceof) 演算子は、右辺の値に [`[Symbol.hasInstance]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance) メソッドが存在する場合は、常にこのメソッドを呼びます。すべての関数はデフォルトで `Function.prototype` を継承しているので、それらはすべてこの `[Symbol.hasInstance]()` メソッドを持ちます。そのため、ほとんどの場合、右辺が関数であれば `Function.prototype[Symbol.hasInstance]` メソッドが `instanceof` の挙動を定義します。このメソッドは、`instanceof` 演算子のデフォルトの挙動 (`constructor` が `@@hasInstance` を持たないときと同じアルゴリズム) を実装します。

ほとんどのメソッドと違い、`Function.prototype[Symbol.hasInstance]()` プロパティは設定不可能で、書込不可能です。これは、バインド済み関数のもとになったターゲット関数を取得されるのを防ぐためのセキュリティ機能です。例として、[この StackOverflow での回答](https://stackoverflow.com/questions/38215027/trying-to-understand-the-official-es6-spec-regarding-symbol-hasinstance/38215392#38215392)を参照してください。

## 例

### デフォルトの instanceof の挙動に戻す

このメソッドを直接呼ぶ必要が生じることはほとんどないでしょう。かわりに、このメソッドは `instanceof` 演算子から呼ばれます。以下の 2 種類の結果は通常等価であることを期待するべきです。

```js
class Foo {}
const foo = new Foo();
console.log(foo instanceof Foo === Foo[Symbol.hasInstance](foo)); // true
```

デフォルトの `instanceof` の挙動を呼び出したいが、コンストラクターにオーバーライドされた `[Symbol.hasInstance]()` メソッドがあるかわからないとき、このメソッドを使いたくなるかもしれません。

```js
class Foo {
  static [Symbol.hasInstance](value) {
    // 独自の実装
    return false;
  }
}

const foo = new Foo();
console.log(foo instanceof Foo); // false
console.log(Function.prototype[Symbol.hasInstance].call(Foo, foo)); // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`instanceof`](/ja/docs/Web/JavaScript/Reference/Operators/instanceof)
- {{jsxref("Symbol.hasInstance")}}
