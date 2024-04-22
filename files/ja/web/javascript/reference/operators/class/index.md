---
title: クラス式
slug: Web/JavaScript/Reference/Operators/class
---

{{jsSidebar("Operators")}}

**クラス式**は、 ECMAScript 2015 でクラスを定義する方法の 1 つです。{{jsxref("Operators/function", "関数式", "", "true")}}と同じように、クラス式は名前を付けることも付けないこともできます。名前を付けた場合、クラス名はクラス内部のみのローカルです。

JavaScript のクラスはプロトタイプベースの継承が使われます。

{{EmbedInteractiveExample("pages/js/expressions-classexpression.html")}}

## 構文

```js
const MyClass = class [className] [extends otherClassName] {
  // クラス本体
}
```

## 解説

クラス式の構文は、{{jsxref("Statements/class", "クラス宣言（文）", "", "true")}} と似ています。 `class` 文では、 `class` 式の本体が{{jsxref("Strict_mode", "厳格モード", "", 1)}}で実行されます。

しかし、クラス式と{{jsxref("Statements/class", "クラス文", "", "true")}}ではいくつかの相違点があります。

- クラス式ではクラス名（「束縛識別子」 (binding identifier)）を省略できますが、{{jsxref("Statements/class", "クラス文", "", "true")}}では省略できません。
- クラス式は {{jsxref("Global_Objects/SyntaxError", "SyntaxError")}} を**発生させずに**クラスを再宣言することができます。これは{{jsxref("Statements/class", "クラス文", "", "true")}}の場合はできません。

`constructor` メソッドは省略可能です。クラス式で生成されたクラスは、常に {{jsxref("Operators/typeof", "typeof")}} が "`function`" の値を返します。

```js
"use strict";
let Foo = class {}; // コンストラクタープロパティは省略可能
Foo = class {}; // 再宣言が可能

typeof Foo; // "function" を返す
typeof class {}; // "function" を返す

Foo instanceof Object; // true
Foo instanceof Function; // true
class Foo {} // SyntaxError が発生 (クラス宣言は再宣言ができない)
```

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

クラス内部で現在のクラスを参照したい場合は、*名前付きクラス式*を作成してください。この名前は、そのクラス式自身のスコープ内だけで見ることができます。

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

- {{jsxref("Operators/function", "関数式", "", "true")}}
- {{jsxref("Statements/class", "クラス宣言", "", "true")}}
- {{jsxref("Classes", "クラス", "", "true")}}
