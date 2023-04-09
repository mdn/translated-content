---
title: 静的初期化ブロック
slug: Web/JavaScript/Reference/Classes/Static_initialization_blocks
l10n:
  sourceCommit: 9c4fb236cd9ced12b1eb8e7696d8e6fcb8d8bad3
---

{{jsSidebar("Classes")}}

**静的初期化ブロック**は{{jsxref("Statements/class", "クラス")}}の特殊機能で、フィールドごとの初期化よりも柔軟に{{jsxref("Classes/static", "静的")}}プロパティを初期化できるようにします。

静的ブロックでは、初期化中に文を評価することができるため、（例えば）`try...catch` を含めたり、1 つの値を複数のフィールドに設定したりすることができます。

初期化は、現在のクラス宣言のコンテキストで実行され、プライベート状態への特権的なアクセスが可能です。
つまり、静的ブロックは、インスタンスのプライベートフィールドを持つクラスと、同じスコープで宣言された他のクラスや関数との間で情報を共有するためにも使用できます（C++ の "friend" クラスに似ています）。

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

{{jsxref("Statements/class", "class")}} は、そのクラス本体に任意の数の `static {}` 初期化ブロックを置くことができます。
これらのブロックは、宣言された順に、静的フィールド初期化子とともに評価されます。
スーパークラスの静的初期化は、そのサブクラスの初期化よりも先に実行されます。

静的ブロックの内部で宣言された変数のスコープは、そのブロックのローカルなものです。`static {}` 初期化ブロック内で宣言された `var`, `function`, `const`, `let` は、そのブロックのローカル変数であるため、ブロック内の `var` 宣言は巻き上げされることはありません。

```js
var y = "Outer y";

class A {
  static field = "Inner y";
  static {
    var y = this.field;
  }
}

// 静的ブロックで定義された var は巻き上げられない
console.log(y); // 'Outer y'
```

静的ブロック内の `this` は、そのクラスのコンストラクター オブジェクトを参照します。
`super.<プロパティ>` を使用して、スーパークラスのプロパティにアクセスすることができます。
ただし、クラスの静的初期化ブロック内で {{jsxref("Operators/super", "super()")}} を呼び出したり、クラスのコンストラクター関数の引数にアクセスしようとするのは構文エラーであることに注意してください。

静的初期化ブロックのスコープは、クラス本体の字句スコープに入れ子になっており、クラスのプライベートなインスタンス変数にアクセスすることができます。

静的初期化ブロックはデコレーターを持つことができません（クラス自身は持つことができます）。

## 例

### 複数のブロック

下記コードは、静的初期化ブロックと静的フィールド初期化子を挟み込んだクラスを示すものです。
出力は、ブロックとフィールドが実行順に評価されることを示しています。

```js
class MyClass {
  static field1 = console.log("field1 called");
  static {
    console.log("Class static block #1 called");
  }
  static field2 = console.log("field2 called");
  static {
    console.log("Class static block #2 called");
  }
}

/*
> "field1 called"
> "Class static block #1 called"
> "field2 called"
> "Class static block #2 called"
*/
```

スーパークラスの静的な初期化は、サブクラスの初期化よりも最初に行われることに注意してください。

### this と super の使用

静的ブロック内の `this` は、そのクラスのコンストラクター オブジェクトを参照します。
このコードは、パブリックな静的フィールドにアクセスする方法を示しています。

```js
class A {
  static field = "A static field";
  static {
    console.log(this.field);
  }
}
```

[`super.property`](/ja/docs/Web/JavaScript/Reference/Operators/super) を `static` ブロックの中で使用すると、スーパークラスのプロパティを参照することができます。
下記で示すように、静的プロパティを含めるために使用します。

```js
class A {
  static fieldA = "A.fieldA";
}
class B extends A {
  static {
    console.log(super.fieldA);
    // 'A.fieldA'
  }
}
```

### プライベートフィールドへのアクセス

下記は、クラス外のオブジェクトからクラスのプライベートオブジェクトにアクセスを許可する例です（[v8.dev blog](https://v8.dev/features/class-static-initializer-blocks#access-to-private-fields)より）。

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

console.log(getDPrivateField(new D("private"))); // private
```

### 代替策

ES13 以前で、より複雑な静的初期化を行うには、他のプロパティの後に静的メソッドが呼び出されるようにするか、初期化タスクを実行するクラスの外部メソッドを設定することで実現できるかもしれません。

どちらの場合も、手法はあまり洗練されておらず、クラスのプライベートメソッドへのアクセスも許可されません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Class static initialization blocks](https://v8.dev/features/class-static-initializer-blocks) (v8.dev blog)
- [ES2022 feature: class static initialization blocks](https://2ality.com/2021/09/class-static-block.html) (2ality.com blog)
- [クラス](/ja/docs/Web/JavaScript/Reference/Classes)
- {{jsxref("Operators/super", "super()")}}
- [Object.prototype.constructor](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)
