---
title: static
slug: Web/JavaScript/Reference/Classes/static
l10n:
  sourceCommit: 41cddfdaeed4a73fb8234c332150df8e54df31e9
---

{{jsSidebar("Classes")}}

**`static`** キーワードは、クラスの[静的メソッドまたはフィールド](/ja/docs/Web/JavaScript/Reference/Classes#静的メソッドとフィールド)、または[静的初期化ブロック](/ja/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)を定義します（この使用法について詳しくは、リンク先を参照してください）。静的プロパティは、クラスのインスタンスに直接アクセスすることはできません。代わりに、クラス自体にアクセスします。

静的メソッドは多くの場合、オブジェクトの生成や複製を行う関数などのユーティリティ関数です。静的プロパティはキャッシュ、固定的な構成、その他の各インスタンスに複製する必要のないデータです。

> **メモ:** クラスの文脈では、 MDN Web Docs はプロパティと[フィールド](/ja/docs/Web/JavaScript/Reference/Classes/Public_class_fields)という言葉を同等のものとして使用しています。

{{EmbedInteractiveExample("pages/js/classes-static.html", "taller")}}

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

さらにいくつかの構文上の制約があります。

- 静的プロパティ（フィールドまたはメソッド）の名前を `prototype` とすることはできません。
- クラスの（静的またはインスタンス）フィールドの名前を `constructor` とすることはできません。

## 解説

このページでは、静的メソッド、静的アクセサー、静的フィールドを含めた、クラスの公開静的プロパティを紹介します。

- 私的な静的機能は、[私的プロパティ](/ja/docs/Web/JavaScript/Reference/Classes/Private_properties)を参照してください。
- インスタンスの機能については、[メソッド定義](/ja/docs/Web/JavaScript/Reference/Functions/Method_definitions)、[ゲッター](/ja/docs/Web/JavaScript/Reference/Functions/get)、[セッター](/ja/docs/Web/JavaScript/Reference/Functions/set)。[公開クラスフィールド](/ja/docs/Web/JavaScript/Reference/Classes/Public_class_fields)を参照してください。

公開静的機能は `static` キーワードを使用して宣言します。これらは、[クラス評価](/ja/docs/Web/JavaScript/Reference/Classes#evaluation_order) 時に、[`[[DefineOwnProperty]]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty) セマンティック（これは本質的に {{jsxref("Object.defineProperty()")}}）を使用してクラスのコンストラクターに追加されます。これらはクラスのコンストラクターから再びアクセスします。

静的メソッドは、インスタンスを作成したり複製したりする関数など、ユーティリティ関数であることが多いです。公開静的フィールドは、作成するすべてのクラスインスタンスではなく、クラスごとに一度だけフィールドを存在させたい場合に有益です。これは、キャッシュや固定的な構成、その他のインスタンス間で複製する必要のないデータなどに有益です。

静的フィールド名は[計算](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer#計算されたプロパティ名)することができます。計算式の `this` 値はクラス定義を囲む `this` であり、クラス名を参照すると {{jsxref("ReferenceError")}} となります。この式では {{jsxref("Operators/await", "await")}} と {{jsxref("Operators/yield", "yield")}} は期待通りに動作します。

静的フィールドは初期化子を持つことができます。初期化子を持たない静的フィールドは `undefined` に初期化されます。公開静的フィールドはサブクラスでは再初期化されませんが、プロトタイプチェーン経由でアクセスすることができます。

```js
class ClassWithStaticField {
  static staticField;
  static staticFieldWithInitializer = "static field";
}

class SubclassWithStaticField extends ClassWithStaticField {
  static subStaticField = "subclass field";
}

console.log(Object.hasOwn(ClassWithStaticField, "staticField")); // true
console.log(ClassWithStaticField.staticField); // undefined
console.log(ClassWithStaticField.staticFieldWithInitializer); // "static field"
console.log(SubclassWithStaticField.staticFieldWithInitializer); // "static field"
console.log(SubclassWithStaticField.subStaticField); // "subclass field"
```

フィールド初期化子では、 [`this`](/ja/docs/Web/JavaScript/Reference/Operators/this) は現在のクラス（名前からもアクセスすることができます）を参照し、 [`super`](/ja/docs/Web/JavaScript/Reference/Operators/super) は基底クラスのコンストラクターを参照します。

```js
class ClassWithStaticField {
  static baseStaticField = "base static field";
  static anotherBaseStaticField = this.baseStaticField;

  static baseStaticMethod() {
    return "base static method output";
  }
}

class SubClassWithStaticField extends ClassWithStaticField {
  static subStaticField = super.baseStaticMethod();
}

console.log(ClassWithStaticField.anotherBaseStaticField); // "base static field"
console.log(SubClassWithStaticField.subStaticField); // "base static method output"
```

式は同期的に評価されます。初期化子式で {{jsxref("Operators/await", "await")}} や {{jsxref("Operators/yield", "yield")}} を使用することはできません。（初期化子式は暗黙的に関数に包まれていると考えてください。）

静的フィールド初期化子と[静的初期化ブロック](/ja/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)は 1 つずつ評価されます。フィールド初期化子は、その上のフィールド値を参照することはできますが、その下のフィールド値を参照することはできません。静的メソッドはすべて事前に追加され、アクセスすることができますが、初期化されるフィールドより下のフィールドを参照している場合、呼び出すと期待した動作をしないことがあります。

> **メモ:** これは、[私的静的フィールド](/ja/docs/Web/JavaScript/Reference/Classes/Private_properties)ではより重要で、初期化されていない私的フィールドにアクセスすると、たとえ私的フィールドがその下で宣言されていても {{jsxref("TypeError")}} が発生するからです。（私的フィールドが宣言されていない場合は、早期に {{jsxref("SyntaxError")}} となります。）

## 例

### クラスでの静的メンバーの使用

次の例はいくつかのことを説明しています。

1. 静的メンバー (メソッドまたはプロパティ) がクラスでどのように定義されるか
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

// This throws because calculate() is a static member, not an instance member.
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

静的メソッドは静的ではないメソッドの {{jsxref("Operators/this", "this")}} キーワードを使用して直接アクセスすることができません。呼び出すにはクラス名を使用して `クラス名.静的メソッド名()` / `クラス名.静的プロパティ名` のようにするか、 `constructor` プロパティのメソッドとして `this.constructor.静的メソッド名()` / `this.constructor.静的プロパティ名` のようにしてください。

```js
class StaticMethodCall {
  constructor() {
    console.log(StaticMethodCall.staticProperty); // 'static property'
    console.log(this.constructor.staticProperty); // 'static property'
    console.log(StaticMethodCall.staticMethod()); // 'static method has been called.'
    console.log(this.constructor.staticMethod()); // 'static method has been called.'
  }

  static staticProperty = "static property";
  static staticMethod() {
    return "static method has been called.";
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
