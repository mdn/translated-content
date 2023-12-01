---
title: パブリッククラスフィールド
slug: Web/JavaScript/Reference/Classes/Public_class_fields
---

{{JsSidebar("Classes")}}

パブリックフィールドは、静的なものもインスタンスのものも書き込み可能、列挙可能、構成可能です。そのため、プライベートなものとは異なり、プロトタイプの継承に参加します。

## 構文

```js
class ClassWithInstanceField {
  instanceField = "instance field";
}

class ClassWithStaticField {
  static staticField = "static field";
}

class ClassWithPublicInstanceMethod {
  publicMethod() {
    return "hello world";
  }
}
```

## 例

### パブリック静的フィールド

パブリック静的フィールドは、フィールドがすべてのクラスインスタンスではなく、クラスごとに一つだけ存在するようにしたい場合に役立ちます。これは、キャッシュや固定設定、その他のインスタンス間で複製する必要のないデータなどに便利です。

パブリック静的フィールドは、`static` キーワードを使用して宣言されます。これらは、クラスの評価時に{{jsxref("Global_Objects/Object/defineProperty", "Object.defineProperty()")}} を使用してコンストラクターに追加され、その後はコンストラクターからアクセスします。

```js
class ClassWithStaticField {
  static staticField = "static field";
}

console.log(ClassWithStaticField.staticField);
// 期待される結果: "static field"
```

初期化子のないフィールドは `undefined` に初期化されます。

```js
class ClassWithStaticField {
  static staticField;
}

console.assert(ClassWithStaticField.hasOwnProperty("staticField"));
console.log(ClassWithStaticField.staticField);
// 期待される結果: "undefined"
```

パブリック静的フィールドはサブクラスでは再初期化されませんが、プロトタイプチェーンを介してアクセスすることができます。

```js
class ClassWithStaticField {
  static baseStaticField = "base field";
}

class SubClassWithStaticField extends ClassWithStaticField {
  static subStaticField = "sub class field";
}

console.log(SubClassWithStaticField.subStaticField);
// 期待される結果: "sub class field"

console.log(SubClassWithStaticField.baseStaticField);
// 期待される結果: "base field"
```

フィールドを初期化するとき、`this` はそのクラスのコンストラクターを参照します。名前で参照することもできますし、`super` を使用するとスーパークラスのコンストラクターを (存在する場合は) 取得することもできます。

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

console.log(ClassWithStaticField.anotherBaseStaticField);
// 期待される結果: "base static field"

console.log(SubClassWithStaticField.subStaticField);
// 期待される結果: "base static method output"
```

### パブリックインスタンスフィールド

パブリックインスタンスフィールドは、作成されたクラスのすべてのインスタンスに存在します。パブリックフィールドを宣言することで、フィールドが常に存在していることを確認でき、クラス定義がより自己文書化されます。

パブリックインスタンスフィールドは、基底クラスの構築時 (コンストラクター本体が実行される前)、またはサブクラスの `super()` が返された直後のいずれかに {{jsxref("Global_Objects/Object/defineProperty", "Object.defineProperty()")}} で追加されます。

```js
class ClassWithInstanceField {
  instanceField = "instance field";
}

const instance = new ClassWithInstanceField();
console.log(instance.instanceField);
// 期待される結果: "instance field"
```

初期化子のないフィールドは `undefined` に初期化されます。

```js
class ClassWithInstanceField {
  instanceField;
}

const instance = new ClassWithInstanceField();
console.assert(instance.hasOwnProperty("instanceField"));
console.log(instance.instanceField);
// 期待される結果: "undefined"
```

プロパティと同様に、フィールド名を計算することができます。

```js
const PREFIX = "prefix";

class ClassWithComputedFieldName {
  [`${PREFIX}Field`] = "prefixed field";
}

const instance = new ClassWithComputedFieldName();
console.log(instance.prefixField);
// 期待される結果: "prefixed field"
```

フィールドを初期化する場合、`this` は構築中のクラスインスタンスを参照します。パブリックインスタンスメソッドと同じように、サブクラスにいる場合は `super` を使ってスーパークラスのプロトタイプにアクセスできます。

```js
class ClassWithInstanceField {
  baseInstanceField = "base field";
  anotherBaseInstanceField = this.baseInstanceField;
  baseInstanceMethod() {
    return "base method output";
  }
}

class SubClassWithInstanceField extends ClassWithInstanceField {
  subInstanceField = super.baseInstanceMethod();
}

const base = new ClassWithInstanceField();
const sub = new SubClassWithInstanceField();

console.log(base.anotherBaseInstanceField);
// 期待される結果: "base field"

console.log(sub.subInstanceField);
// 期待される結果: "base method output"
```

### パブリックメソッド

#### パブリック静的メソッド

**`static`** キーワードで、クラスの静的メソッドを定義します。静的メソッドは、クラスのインスタンスでは呼び出されません。代わりに、クラス自体から呼び出されます。これらの多くは、オブジェクトを作成したり、クローンを作成したりするようなユーティリティ関数です。

```js
class ClassWithStaticMethod {
  static staticMethod() {
    return "static method has been called.";
  }
}

console.log(ClassWithStaticMethod.staticMethod());
// 期待される結果: "static method has been called."
```

静的メソッドは、クラスの評価時に {{jsxref("Global_Objects/Object/defineProperty", "Object.defineProperty()")}} を使用してクラスのコンストラクターに追加されます。これらのメソッドは書き込み可能、列挙不可、設定可能です。

#### パブリックインスタンスメソッド

パブリックインスタンスメソッドはその名の通り、クラスインスタンスで利用できるメソッドです。

```js
class ClassWithPublicInstanceMethod {
  publicMethod() {
    return "hello world";
  }
}

const instance = new ClassWithPublicInstanceMethod();
console.log(instance.publicMethod());
// 期待される結果: "hello world"
```

パブリックインスタンスメソッドは、{{jsxref("Global_Objects/Object/defineProperty", "Object.defineProperty()")}} を使用して、クラスの評価時にクラスプロトタイプに追加されます。これらのメソッドは書き込み可能、列挙不可、設定可能です。

ジェネレーター関数、非同期関数、非同期ジェネレーター関数を利用することができます。

```js
class ClassWithFancyMethods {
  *generatorMethod() {}
  async asyncMethod() {}
  async *asyncGeneratorMethod() {}
}
```

インスタンスメソッドの中では、`this` はインスタンス自体を指します。サブクラスでは、`super` を使用してスーパークラスのプロトタイプにアクセスし、そのスーパークラスからメソッドを呼び出すことができます。

```js
class BaseClass {
  msg = "hello world";
  basePublicMethod() {
    return this.msg;
  }
}

class SubClass extends BaseClass {
  subPublicMethod() {
    return super.basePublicMethod();
  }
}

const instance = new SubClass();
console.log(instance.subPublicMethod());
// 期待される結果: "hello world"
```

ゲッターとセッターは、クラスのプロパティにバインドする特別なメソッドで、そのプロパティがアクセスされたり設定されたりしたときに呼び出されます。[get](/ja/docs/Web/JavaScript/Reference/Functions/get) および [set](/ja/docs/Web/JavaScript/Reference/Functions/set) 構文を使用して、パブリックインスタンスのゲッターまたはセッターを宣言します。

```js
class ClassWithGetSet {
  #msg = "hello world";
  get msg() {
    return this.#msg;
  }
  set msg(x) {
    this.#msg = `hello ${x}`;
  }
}

const instance = new ClassWithGetSet();
console.log(instance.msg);
// 期待される結果: "hello world"

instance.msg = "cake";
console.log(instance.msg);
// 期待される結果: "hello cake"
```

## 仕様書

{{Specifications("javascript.classes")}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [The
  Semantics of All JS Class Elements](https://rfrn.org/~shu/2018/05/02/the-semantics-of-all-js-class-elements.html)
- [Public and private class fields](https://v8.dev/features/class-fields)
  v8.dev site の記事
