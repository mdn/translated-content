---
title: 静的初期化ブロック
slug: Web/JavaScript/Reference/Classes/Static_initialization_blocks
l10n:
  sourceCommit: 11b75916ceb7379f4ca3ba9440b032efc284fe2d
---

{{jsSidebar("Classes")}}

**静的初期化ブロック**は{{jsxref("Statements/class", "クラス", "", 1)}}内で宣言されます。これは、クラスの初期化の時に評価される文を格納します。これにより、{{jsxref("Classes/static", "静的", "", 1)}}プロパティよりも柔軟な初期化ロジックが可能になり、 `try...catch` を使用したり、 1 つの値から複数のフィールドを設定したりすることができます。初期化は現在のクラス宣言のコンテキストで実行され、プライベートプロパティにアクセスすることができます。つまり、インスタンスのプライベートフィールドを持つクラスと、同じスコープで宣言された他のクラスや関数との間で情報を共有するためにも使用できます（C++ の "friend" クラスに似ています）。

{{EmbedInteractiveExample("pages/js/classes-static-initialization.html")}}

## 構文

```js-nolint
class ClassWithSIB {
  static {
    // …
  }
}
```

## 解説

静的初期化ブロックを使わない場合、クラス宣言の後で静的メソッドを呼び出すことで、複雑な静的初期化を行うことができます。

```js
class MyClass {
  static init() {
    // プライベート静的フィールドにアクセスすることができる
  }
}

MyClass.init();
```

しかし、この手法では実装の詳細（`init()` メソッド）がクラスのユーザーに公開されてしまいます。一方、クラスの外部で宣言された初期化ロジックはプライベート静的フィールドにアクセスすることはできません。静的初期化ブロックでは、任意の初期化ロジックをクラス内で宣言し、クラスの評価中に実行することができます。

{{jsxref("Statements/class", "class")}} は、そのクラス本体に任意の数の `static {}` 初期化ブロックを置くことができます。
これらのブロックは、宣言された順に、静的フィールド初期化子とともに[評価](/ja/docs/Web/JavaScript/Reference/Classes#評価の順序)されます。
スーパークラスの静的初期化は、そのサブクラスの初期化よりも先に実行されます。

静的ブロックの内部で宣言された変数のスコープは、そのブロックのローカルなものです。ここには初期化ブロック内で宣言された `var`, `function`, `const`, `let` は、そのブロックのローカル変数であるため、 `var` 宣言は静的ブロックの外に巻き上げされることはありません。

```js
var y = "Outer y";

class A {
  static field = "Inner y";
  static {
    // var y はブロックの中にしか巻き上げられない
    console.log(y); // undefined <-- not 'Outer y'

    var y = this.field;
  }
}

// 静的ブロックで定義された var y は
// ブロックの外に巻き上げられない
console.log(y); // 'Outer y'
```

静的ブロック内の `this` は、そのクラスのコンストラクター オブジェクトを参照します。
`super.プロパティ` を使用して、スーパークラスの静的プロパティにアクセスすることができます。
ただし、クラスの静的初期化ブロック内で {{jsxref("Operators/super", "super()")}} を呼び出したり、 {{jsxref("Functions/arguments", "arguments")}} オブジェクトを使用したりするのは構文エラーであることに注意してください。

式は同期的に評価されます。初期化子式で（{{jsxref("Operators/await", "await")}} や {{jsxref("Operators/yield", "yield")}}）を使用することはできません。（初期化子式は暗黙に関数に包まれていると考えてください）。

静的ブロックのスコープは、クラス本体の字句スコープの中で入れ子になり、構文エラーを発生させることなく、クラス内で宣言された[プライベート名](/ja/docs/Web/JavaScript/Reference/Classes/Private_properties)にアクセスすることができます。

[静的フィールド](/ja/docs/Web/JavaScript/Reference/Classes/static)初期化子と静的初期化ブロックは、 1 つずつ評価されます。フィールド初期化子は、それより上のフィールド値を参照することはできますが、それより下のフィールド値を参照することはできません。静的メソッドはすべて事前に追加され、アクセスすることができますが、初期化されるフィールドより下のフィールドを参照している場合、呼び出すと期待した動作をしないことがあります。

> [!NOTE]
> これは[プライベート静的フィールド](/ja/docs/Web/JavaScript/Reference/Classes/Private_properties)ではより重要です。初期化されていないプライベートフィールドにアクセスすると、たとえそのプライベートフィールドが下で宣言されていたとしても、 {{jsxref("TypeError")}} が発生するからです。（プライベートフィールドが宣言されていない場合は、早期に {{jsxref("SyntaxError")}} となります。）

静的初期化ブロックはデコレーターを持つことができません（クラス自身は持つことができます）。

## 例

### 複数のブロック

下記コードは、静的初期化ブロックと静的フィールド初期化子を挟み込んだクラスを示すものです。
出力は、ブロックとフィールドが実行順に評価されることを示しています。

```js
class MyClass {
  static field1 = console.log("static field1");
  static {
    console.log("static block1");
  }
  static field2 = console.log("static field2");
  static {
    console.log("static block2");
  }
}
// 'static field1'
// 'static block1'
// 'static field2'
// 'static block2'
```

スーパークラスの静的な初期化は、サブクラスの初期化よりも最初に行われることに注意してください。

### this と super の使用

静的ブロック内の `this` は、そのクラスのコンストラクター オブジェクトを参照します。
このコードは、パブリック静的フィールドにアクセスする方法を示しています。

```js
class A {
  static field = "static field";
  static {
    console.log(this.field);
  }
}
// 'static field'
```

[`super.property`](/ja/docs/Web/JavaScript/Reference/Operators/super) 構文を `static` ブロックの中で使用すると、スーパークラスの静的プロパティを参照することができます。

```js
class A {
  static field = "static field";
}

class B extends A {
  static {
    console.log(super.field);
  }
}
// 'static field'
```

### プライベートプロパティへのアクセス

下記は、クラス外のオブジェクトからクラスのプライベートインスタンスフィールドにアクセスを許可する例です（[v8.dev blog](https://v8.dev/features/class-static-initializer-blocks#access-to-private-fields)より）。

```js
let getDPrivateField;

class D {
  #privateField;
  constructor(v) {
    this.#privateField = v;
  }
  static {
    getDPrivateField = (d) => d.#privateField;
  }
}

console.log(getDPrivateField(new D("private"))); // 'private'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [クラスの使用](/ja/docs/Web/JavaScript/Guide/Using_classes)ガイド
- [クラス](/ja/docs/Web/JavaScript/Reference/Classes)
- {{jsxref("Classes/static", "static")}}
- {{jsxref("Statements/class", "class")}}
- [Class static initialization blocks](https://v8.dev/features/class-static-initializer-blocks) (v8.dev blog)
- [ES2022 feature: class static initialization blocks](https://2ality.com/2021/09/class-static-block.html) (Dr. Axel Rauschmayer, 2021)
