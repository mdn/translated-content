---
title: class 式
slug: Web/JavaScript/Reference/Operators/class
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**`class`** キーワードを使用すると、式内でクラスを定義することができます。

クラスは、 [`class` 宣言](/ja/docs/Web/JavaScript/Reference/Statements/class) を使用して定義することもできます。

{{InteractiveExample("JavaScript デモ: class 式")}}

```js interactive-example
const Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  area() {
    return this.height * this.width;
  }
};

console.log(new Rectangle(5, 8).area());
// 予想される結果: 40
```

## 構文

```js-nolint
class {
  // クラス本体
}
class name {
  // クラス本体
}
```

> [!NOTE]
> [式文](/ja/docs/Web/JavaScript/Reference/Statements/Expression_statement) は、[`class` 宣言](/ja/docs/Web/JavaScript/Reference/Statements/class) との曖昧さを避けるため、キーワード `class` で始めてはなりません。`class` キーワードは、文を受け入れないコンテキストで現れた場合にのみ、式を開始します。

## 解説

`class` 式は、[`class` 宣言](/ja/docs/Web/JavaScript/Reference/Statements/class)とよく似ており、構文もほぼ同じです。 `class` 宣言と同様に、 `class` 式の本体は[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)で実行されます。 `class` 式と `class` 宣言の主な違いは、クラス名です。 `class` 式ではこのクラス名を省略できるため、無名クラスを作成することができます。クラス式はクラスを再定義できますが、 `class` 宣言を使用してクラスを再宣言すると、 {{jsxref("SyntaxError")}} が発生します。詳細については、[クラス](/ja/docs/Web/JavaScript/Reference/Classes)の章を参照してください。

## 例

### 簡単なクラス式

以下は、名前のない簡単なクラス式です。変数 `Foo` を使って参照できます。

```js
const Foo = class {
  constructor() {}
  bar() {
    return "Hello World!";
  }
};

const instance = new Foo();
instance.bar(); // "Hello World!"
Foo.name; // "Foo"
```

### 名前付きクラス式

クラス内部で現在のクラスを参照したい場合は、名前付きクラス式を作成してください。この名前は、そのクラス式自身のスコープ内だけで見ることができます。

```js
const Foo = class NamedFoo {
  constructor() {}
  whoIsThere() {
    return NamedFoo.name;
  }
};
const bar = new Foo();
bar.whoIsThere(); // "NamedFoo"
NamedFoo.name; // ReferenceError: NamedFoo is not defined
Foo.name; // "NamedFoo"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Statements/class", "class")}}
- {{jsxref("Classes", "クラス", "", 1)}}
