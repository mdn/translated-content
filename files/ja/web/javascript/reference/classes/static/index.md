---
title: static
slug: Web/JavaScript/Reference/Classes/static
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**`static`** キーワードは、クラスに[静的メソッドや静的フィールド](/ja/docs/Web/JavaScript/Reference/Classes#静的メソッドとフィールド)、または[静的初期化ブロック](/ja/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)を定義します（この使い方について詳しくは、リンク先を参照してください）。 静的プロパティは、クラスのインスタンスから直接アクセスすることはできません。代わりに、クラス自体に対してアクセスします。

静的メソッドは多くの場合、オブジェクトの生成や複製を行う関数などのユーティリティ関数です。静的プロパティはキャッシュ、固定的な構成、その他の各インスタンスに複製する必要のないデータです。

> [!NOTE]
> クラスの文脈において、 MDN Web Docs のコンテンツではプロパティと[フィールド](/ja/docs/Web/JavaScript/Reference/Classes/Public_class_fields)という用語を同等のものとして使用しています。

{{InteractiveExample("JavaScript デモ: クラスの static", "taller")}}

```js interactive-example
class ClassWithStaticMethod {
  static staticProperty = "someValue";
  static staticMethod() {
    return "静的メソッドが呼び出されました。";
  }
  static {
    console.log("クラス静的初期化ブロックが呼び出されます");
  }
}

console.log(ClassWithStaticMethod.staticProperty);
// 予想される結果: "someValue"
console.log(ClassWithStaticMethod.staticMethod());
// 予想される結果: "静的メソッドが呼び出されました。"
```

## 構文

```js-nolint
class ClassWithStatic {
  static staticField;
  static staticFieldWithInitializer = value;
  static staticMethod() {
    // …
  }
}
```

それ以外にも構文上の制約があります。

- 静的プロパティ（フィールドまたはメソッド）の名前を `prototype` とすることはできません。
- クラスフィールド（静的またはインスタンス）の名前を `constructor` とすることはできません。

## 解説

このページでは、静的メソッド、静的アクセサ、静的フィールドを含む、クラスのパブリック静的プロパティを紹介します。

- プライベートな静的機能については、[プライベート要素](/ja/docs/Web/JavaScript/Reference/Classes/Private_elements)を参照してください。
- インスタンスの機能については、[メソッド定義](/ja/docs/Web/JavaScript/Reference/Functions/Method_definitions)、[ゲッター](/ja/docs/Web/JavaScript/Reference/Functions/get)、[セッター](/ja/docs/Web/JavaScript/Reference/Functions/set)、[パブリッククラスフィールド](/ja/docs/Web/JavaScript/Reference/Classes/Public_class_fields)を参照してください。

パブリック静的機能は、`static` キーワードを使用して宣言します。これらは[クラス評価時](/ja/docs/Web/JavaScript/Reference/Classes#評価の順序)に、 [`[[DefineOwnProperty]]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty) の意味づけ（これは本質的に {{jsxref("Object.defineProperty()")}} です）を使用して、クラスのコンストラクターに追加されます。これらは、コンストラクターから再びアクセスします。

静的メソッドの多くは、インスタンスを作成したり複製したりするなどの、ユーティリティ関数です。パブリック静的フィールドは、作成するすべてのクラスインスタンスではなく、クラスごとに一つだけフィールドを存在させたい場合に有益です。これは、キャッシュや固定の構成値、 あるいはインスタンスをまたがって複製する必要のないデータなどに有益です。

静的フィールド名は[計算](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer#算出プロパティ名)できます。計算式の `this` 値はクラス定義の周囲の `this` であり、クラス名を参照すると、クラスがまだ初期化されていないため {{jsxref("ReferenceError")}} になります。この式では {{jsxref("Operators/await", "await")}} と {{jsxref("Operators/yield", "yield")}} は期待どおりに動作します。

静的フィールドは初期化子を持つことができます。初期化子を持たない静的フィールドは `undefined` に初期化されます。パブリック静的フィールドはサブクラスでは再初期化されませんが、プロトタイプチェーン経由でアクセスすることができます。

```js
class ClassWithStaticField {
  static staticField;
  static staticFieldWithInitializer = "静的フィールド";
}

class SubclassWithStaticField extends ClassWithStaticField {
  static subStaticField = "サブクラスのフィールド";
}

console.log(Object.hasOwn(ClassWithStaticField, "staticField")); // true
console.log(ClassWithStaticField.staticField); // undefined
console.log(ClassWithStaticField.staticFieldWithInitializer); // "静的フィールド"
console.log(SubclassWithStaticField.staticFieldWithInitializer); // "静的フィールド"
console.log(SubclassWithStaticField.subStaticField); // "サブクラスのフィールド"
```

フィールド初期化子では、 [`this`](/ja/docs/Web/JavaScript/Reference/Operators/this) は現在のクラス（その名前からもアクセスすることができます）を参照し、 [`super`](/ja/docs/Web/JavaScript/Reference/Operators/super) は基底クラスのコンストラクターを参照します。

```js
class ClassWithStaticField {
  static baseStaticField = "基底クラスの静的フィールド";
  static anotherBaseStaticField = this.baseStaticField;

  static baseStaticMethod() {
    return "基底クラスの静的フィールドの出力";
  }
}

class SubClassWithStaticField extends ClassWithStaticField {
  static subStaticField = super.baseStaticMethod();
}

console.log(ClassWithStaticField.anotherBaseStaticField); // "基底クラスの静的フィールド"
console.log(SubClassWithStaticField.subStaticField); // "基底クラスの静的フィールドの"
```

式は同期的に評価されます。初期化子式で（{{jsxref("Operators/await", "await")}} や {{jsxref("Operators/yield", "yield")}}）を使用することはできません。（初期化子式は暗黙に関数に包まれていると考えてください）。

静的フィールド初期化子と[静的初期化ブロック](/ja/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)は、 1 つずつ評価されます。フィールド初期化子は、それより上のフィールド値を参照することはできますが、それより下のフィールド値を参照することはできません。静的メソッドはすべて事前に追加され、アクセスすることができますが、初期化されるフィールドより下のフィールドを参照している場合、呼び出すと期待した動作をしないことがあります。

> [!NOTE]
> これは[プライベート静的フィールド](/ja/docs/Web/JavaScript/Reference/Classes/Private_elements)ではより重要です。初期化されていないプライベートフィールドにアクセスすると、たとえそのプライベートフィールドが下で宣言されていたとしても、 {{jsxref("TypeError")}} が発生するからです。（プライベートフィールドが宣言されていない場合は、早期に {{jsxref("SyntaxError")}} となります。）

## 例

### クラスでの静的メンバーの使用

次の例はいくつかのことを説明しています。

1. 静的メンバー（メソッドまたはプロパティ）がクラスでどのように定義されるか
2. 静的メンバーを持つクラスがサブクラスを作れるか
3. 静的メンバーがどう呼び出せて、どう呼び出せないか

```js
class Triple {
  static customName = "Tripler";
  static description = "I triple any number you provide";
  static calculate(n = 1) {
    return n * 3;
  }
}

class SquaredTriple extends Triple {
  static longDescription;
  static description = "I square the triple of any number you provide";
  static calculate(n) {
    return super.calculate(n) * super.calculate(n);
  }
}

console.log(Triple.description); // 'I triple any number you provide'
console.log(Triple.calculate()); // 3
console.log(Triple.calculate(6)); // 18

const tp = new Triple();

console.log(SquaredTriple.calculate(3)); // 81 (not affected by parent's instantiation)
console.log(SquaredTriple.description); // 'I square the triple of any number you provide'
console.log(SquaredTriple.longDescription); // undefined
console.log(SquaredTriple.customName); // 'Tripler'

// これは calculate() がインスタンスメンバーではなく静的メンバーなので、例外が発生
console.log(tp.calculate()); // 'tp.calculate is not a function'
```

### 静的メンバーの別な静的メソッドからの呼び出し

同じクラス内の静的メソッドまたはプロパティを静的メソッドから呼び出すには、 [`this`](/ja/docs/Web/JavaScript/Reference/Operators/this) キーワードを使います。

```js
class StaticMethodCall {
  static staticProperty = "static property";
  static staticMethod() {
    return `Static method and ${this.staticProperty} has been called`;
  }
  static anotherStaticMethod() {
    return `${this.staticMethod()} from another static method`;
  }
}
StaticMethodCall.staticMethod();
// 'Static method and static property has been called'

StaticMethodCall.anotherStaticMethod();
// 'Static method and static property has been called from another static method'
```

### クラスのコンストラクターや他のメソッドからの静的メソッドの呼び出し

静的メソッドは静的ではないメソッドの {{JSxRef("Operators/this", "this")}} キーワードを使用して直接アクセスすることができません。呼び出すにはクラス名を使用して `クラス名.静的メソッド名()` / `クラス名.静的プロパティ名` のようにするか、 `constructor` プロパティのメソッドとして `this.constructor.静的メソッド名()` / `this.constructor.静的プロパティ名` のようにしてください。

```js
class StaticMethodCall {
  constructor() {
    console.log(StaticMethodCall.staticProperty); // 'static property'
    console.log(this.constructor.staticProperty); // 'static property'
    console.log(StaticMethodCall.staticMethod()); // '静的メソッドが呼び出されました。'
    console.log(this.constructor.staticMethod()); // '静的メソッドが呼び出されました。'
  }

  static staticProperty = "static property";
  static staticMethod() {
    return "静的メソッドが呼び出されました。";
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [クラスの使用](/ja/docs/Web/JavaScript/Guide/Using_classes)ガイド
- [クラス](/ja/docs/Web/JavaScript/Reference/Classes)
- [静的初期化ブロック](/ja/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)
- {{jsxref("Statements/class", "class")}}
