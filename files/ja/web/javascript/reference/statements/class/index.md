---
title: class
slug: Web/JavaScript/Reference/Statements/class
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

{{jsSidebar("Statements")}}

**`class`** 宣言は、指定された名前の新しい[class](/ja/docs/Web/JavaScript/Reference/Classes)を作成します。

{{jsxref("Operators/class", "クラス式", "", 1)}}を使ってクラスを定義できます。

{{InteractiveExample("JavaScript デモ: Statement - Class")}}

```js interactive-example
class Polygon {
  constructor(height, width) {
    this.area = height * width;
  }
}

console.log(new Polygon(4, 3).area);
// Expected output: 12
```

## 構文

```js-nolint
class name {
  // クラス本体
}
class name extends otherName {
  // クラス本体
}
```

## 解説

クラス宣言のクラス本体は[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)で実行されます。クラス宣言は {{jsxref("Statements/let", "let")}} と非常によく似ています。

- `class` 宣言は、関数だけでなくブロックにもスコープされます。

- `class` 宣言は、宣言された場所に到達した後にのみアクセスできます（[一時的デッドゾーン](/ja/docs/Web/JavaScript/Reference/Statements/let#一時的なデッドゾーン_tdz)を参照）。このため、`class` 宣言は一般的に [非ホイスティング](/ja/docs/Glossary/Hoisting) とみなされます（[関数宣言](/ja/docs/Web/JavaScript/Reference/Statements/function)とは異なります）。

- スクリプトの最上位レベルで宣言された `class` 宣言は、{{jsxref("globalThis")}} にプロパティを作成しません（[関数宣言](/ja/docs/Web/JavaScript/Reference/Statements/function)とは異なります）。

- `class` 宣言は、同じスコープ内の他の宣言によって [再宣言](/ja/docs/Web/JavaScript/Reference/Statements/let#再宣言) できません。

```js
class Foo {
  static {
    Foo = 1; // TypeError: Assignment to constant variable.
  }
}

class Foo2 {
  bar = (Foo2 = 1); // TypeError: Assignment to constant variable.
}

class Foo3 {}
Foo3 = 1;
console.log(Foo3); // 1
```

## 例

### クラス宣言

次の例では、はじめに `Rectangle` という名前のクラスを定義し、次にそれを拡張して `FilledRectangle` という名前のクラスを作成します。

なお、コンストラクター (`constructor`) で使われている `super()` は、コンストラクター内でのみ使えること、 `this` キーワードの使用*前*に呼び出さなくてはならないことに注意してください。

```js
class Rectangle {
  constructor(height, width) {
    this.name = "Rectangle";
    this.height = height;
    this.width = width;
  }
}

class FilledRectangle extends Rectangle {
  constructor(height, width, color) {
    super(height, width);
    this.name = "Filled rectangle";
    this.color = color;
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`function` 宣言](/ja/docs/Web/JavaScript/Reference/Statements/function)
- [`class` 式](/ja/docs/Web/JavaScript/Reference/Operators/class)
- [クラス](/ja/docs/Web/JavaScript/Reference/Classes)
