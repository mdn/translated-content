---
title: class
slug: Web/JavaScript/Reference/Statements/class
l10n:
  sourceCommit: 77176b1f35f73f319bb5b959e5c90db8b5a0f9ea
---

{{jsSidebar("Statements")}}

**`class`** 宣言は、プロトタイプベースの継承を使って、指定された名前の新しいクラスを作成します。

{{jsxref("Operators/class", "クラス式", "", 1)}}を使ってクラスを定義することもで、その場合は再定義やクラス名の省略ができます。同じスコープで**クラス宣言**を同じ名前で行おうとすると、{{jsxref("SyntaxError")}} が発生します。

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
class name [extends otherName] {
  // クラス本体
}
```

## 解説

クラス式と同様、クラス宣言の内部は[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)で実行されます。`constructor` メソッドは省略可能です。

クラス宣言は [`let`](/ja/docs/Web/JavaScript/Reference/Statements/let) や [`const`](/ja/docs/Web/JavaScript/Reference/Statements/const) と同様に動作し、{{Glossary("Hoisting", "巻き上げ")}}が行われません（[関数宣言](/ja/docs/Web/JavaScript/Reference/Statements/function)とは異なります）。

## 例

### 単純なクラス宣言

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

### クラスを二度宣言しようとする

クラス宣言を使って再度クラスを宣言すると、 {{jsxref("SyntaxError")}} が発生します。

```js example-bad
class Foo {}
class Foo {} // Uncaught SyntaxError: Identifier 'Foo' has already been declared
```

クラス式を使って事前にクラスを定義していたときも、同じエラーが発生します。

```js example-bad
let Foo = class {};
class Foo {} // Uncaught SyntaxError: Identifier 'Foo' has already been declared
```

Firefox のウェブコンソール (**ツール** > **ウェブ開発者** > **ウェブコンソール**) などの REPL で実験しているときに、同じ名前のクラス宣言を 2 つの入力で実行すると、同じ再宣言エラーが発生することがあります。この課題については、[Firefox bug 1580891](https://bugzil.la/1580891)で詳しく議論されていますので、ご覧ください。Chrome コンソールでは、異なる REPL 入力間でのクラスの再宣言が可能です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`function` 宣言](/ja/docs/Web/JavaScript/Reference/Statements/function)
- [`class` 式](/ja/docs/Web/JavaScript/Reference/Operators/class)
- [クラス](/ja/docs/Web/JavaScript/Reference/Classes)
