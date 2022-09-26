---
title: class
slug: Web/JavaScript/Reference/Statements/class
---

{{jsSidebar("Statements")}}

**クラス宣言**は、プロトタイプベースの継承を使って、指定された名前の新しいクラスを作成します。

{{EmbedInteractiveExample("pages/js/statement-class.html")}}

{{jsxref("Operators/class", "クラス式", "", 1)}}を使ってクラスを定義することもできます。しかし、クラス式と異なり、クラス宣言は既存のクラスを再宣言することができず、再宣言しようとすると {{jsxref("SyntaxError")}} が発生します。

## 構文

```
class name [extends otherName] {
  // クラス本体
}
```

## 解説

クラス式と同様、クラス宣言の内部は[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)で実行されます。 `constructor` メソッドは省略可能です。

クラス宣言は{{Glossary("Hoisting", "巻き上げ")}}が行われません ([関数宣言](/ja/docs/Web/JavaScript/Reference/Statements/function)とは異なります)。

## 例

### 単純なクラス宣言

次の例では、はじめに `Polygon` という名前のクラスを定義し、次にそれを拡張して `Square` という名前のクラスを作成します。

なお、コンストラクターで使われている `super()` は、コンストラクター内でのみ使えること、 `this` キーワードの使用*前*に呼び出さなくてはならないことに注意してください。

```js
class Polygon {
  constructor(height, width) {
    this.name = 'Polygon';
    this.height = height;
    this.width = width;
  }
}

class Square extends Polygon {
  constructor(length) {
    super(length, length);
    this.name = 'Square';
  }
}
```

### クラスを二度宣言する

クラス宣言を使って再度クラスを宣言すると、 {{jsxref("SyntaxError")}} が発生します。

```js example-bad
class Foo {};
class Foo {}; // Uncaught SyntaxError: Identifier 'Foo' has already been declared
```

クラス式を使って事前にクラスを定義していたときも、同じエラーが発生します。

```js example-bad
let Foo = class {};
class Foo {}; // Uncaught SyntaxError: Identifier 'Foo' has already been declared
```

## 仕様書

| 仕様書                                                                                       |
| -------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-class-definitions', 'Class definitions')}} |

## ブラウザーの互換性

{{Compat("javascript.statements.class")}}

## 関連情報

- [`function` 宣言](/ja/docs/Web/JavaScript/Reference/Statements/function)
- [`class` 式](/ja/docs/Web/JavaScript/Reference/Operators/class)
- [クラス](/ja/docs/Web/JavaScript/Reference/Classes)
