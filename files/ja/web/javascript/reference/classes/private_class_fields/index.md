---
title: プライベートクラス機能
slug: Web/JavaScript/Reference/Classes/Private_class_fields
tags:
  - Classes
  - Private
  - JavaScript
  - Language feature
translation_of: Web/JavaScript/Reference/Classes/Private_class_fields
---
{{JsSidebar("Classes")}}

クラスのフィールドは既定で{{ jsxref('Classes/Public_class_fields','公開', '', 1) }}ですが、ハッシュ `#` 接頭辞を使ってプライベートクラスメンバーを生成することができます。これらのクラス機能のプライバシーのカプセル化は、JavaScript 自身によって行われます。

## 構文

```js
class ClassWithPrivateField {
  #privateField;
}

class ClassWithPrivateMethod {
  #privateMethod() {
    return 'hello world';
  }
}

class ClassWithPrivateStaticField {
  static #PRIVATE_STATIC_FIELD;
}

class ClassWithPrivateStaticMethod {
  static #privateStaticMethod() {
    return 'hello world';
  }
}
```

## 例

### プライベートインスタンスフィールド

プライベートインスタンスフィールドは **# 名** (*ハッシュ名*と読む) で宣言され、これは `#` の接頭辞が付いた識別子です。この `#` は名前の一部で、宣言やアクセスにも使われます。プライベートフィールドはクラスのコンストラクターー上でクラス定義自身の中から参照できます。フィールド名の宣言や、フィールドの値へのアクセスに使用されます。

スコープ外から `#` 名を参照すると構文エラーになります。また、呼び出される前に宣言されていないプライベートフィールドを参照したり、宣言されているフィールドを `delete` で削除しようとしても構文エラーになります。

```js example-bad
class ClassWithPrivateField {
  #privateField;

  constructor() {
    this.#privateField = 42;
    delete this.#privateField;   // Syntax error
    this.#undeclaredField = 444; // Syntax error
  }
}

const instance = new ClassWithPrivateField()
instance.#privateField === 42;   // Syntax error
```

> **Note:** [`in`](/ja/docs/Web/JavaScript/Reference/Operators/in) 演算子を使用すると、プライベートフィールド (またはプライベートメソッド) が欠けているかどうかをチェックできます。そのプライベートフィールドが存在すれば `true` を返し、そうでなければ `false` を返します。

パブリックフィールドのように、プライベートフィールドは基底クラスの構築辞典、またはサブクラス内で `super()` が呼び出される場面で追加されます。

```js
class ClassWithPrivateField {
  #privateField;

  constructor() {
    this.#privateField = 42;
  }
}

class SubClass extends ClassWithPrivateField {
  #subPrivateField;

  constructor() {
    super();
    this.#subPrivateField = 23;
  }
}

new SubClass();
// SubClass {#privateField: 42, #subPrivateField: 23}
```

### プライベート静的フィールド

プライベートフィールドは、クラスのコンストラクター上でクラス宣言の内部からアクセスできます。
静的変数は静的メソッドからのみ呼び出せるという制限はまだあります。

```js
class ClassWithPrivateStaticField {
  static #PRIVATE_STATIC_FIELD;

  static publicStaticMethod() {
    ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD = 42;
    return ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD;
  }
}

console.log(ClassWithPrivateStaticField.publicStaticMethod() === 42);
// true
```

プライベート静的フィールドには制限があります。プライベート静的フィールドを定義したクラスのみが、そのフィールドにアクセスできます。**`this`** を使用すると、予期しない動作をする可能性があります。
次の例では、`SubClass.basePublicStaticMethod()` を呼び出そうとしたときに、これが (`BaseClassWithPrivateStaticField` クラスではなく) `SubClass` クラスを参照してしまい、 `TypeError` が発生します。

```js
class BaseClassWithPrivateStaticField {
  static #PRIVATE_STATIC_FIELD;

  static basePublicStaticMethod() {
    this.#PRIVATE_STATIC_FIELD = 42;
    return this.#PRIVATE_STATIC_FIELD;
  }
}

class SubClass extends BaseClassWithPrivateStaticField { };

let error = null;

try {
  SubClass.basePublicStaticMethod()
} catch(e) { error = e};

console.log(error instanceof TypeError);
// true
console.log(error);
// TypeError: Cannot write private member #PRIVATE_STATIC_FIELD
// to an object whose class did not declare it
```

### プライベートメソッド

#### プライベートインスタンスメソッド

プライベートインスタンスメソッドは、プライベートインスタンスフィールドと同様にアクセスが制限されているクラスインスタンスで利用できるメソッドです。

```js
class ClassWithPrivateMethod {
  #privateMethod() {
    return 'hello world';
  }

  getPrivateMessage() {
    return this.#privateMethod();
  }
}

const instance = new ClassWithPrivateMethod();
console.log(instance.getPrivateMessage());
// hello world
```

プライベートインスタンスメソッドは、ジェネレーター関数、非同期関数、非同期ジェネレーター関数のいずれかになります。プライベートなゲッターやセッターも可能です。

```js
class ClassWithPrivateAccessor {
  #message;

  get #decoratedMessage() {
    return `🎬${this.#message}🛑`;
  }
  set #decoratedMessage(msg) {
    this.#message = msg;
  }

  constructor() {
    this.#decoratedMessage = 'hello world';
    console.log(this.#decoratedMessage);
  }
}

new ClassWithPrivateAccessor();
// 🎬hello world🛑
```

#### プライベート静的メソッド

プライベート静的メソッドは、パブリックと同様に、クラスのインスタンスではなく、クラス自体から呼び出されます。プライベート静的フィールドと同様に、クラス宣言の内部からのみアクセス可能です。

```js
class ClassWithPrivateStaticMethod {
  static #privateStaticMethod() {
    return 42;
  }

  static publicStaticMethod1() {
    return ClassWithPrivateStaticMethod.#privateStaticMethod();
  }

  static publicStaticMethod2() {
    return this.#privateStaticMethod();
  }
}

console.log(ClassWithPrivateStaticMethod.publicStaticMethod1() === 42);
// true
console.log(ClassWithPrivateStaticMethod.publicStaticMethod2() === 42);
// true
```

プライベート静的メソッドは、ジェネレーター関数、非同期関数、非同期ジェネレーター関数、などがあります。

前述のプライベート静的フィールドの制限は、プライベート静的メソッドにも当てはまり、**`this`** を同様に使用すると予期しない動作が発生する可能性があります。次の例では、 `Derived.publicStaticMethod2()` を呼び出そうとすると、これは `Base` クラスではなく `Derived` クラスを参照するため、`TypeError` が発生します。

```js
class Base {
  static #privateStaticMethod() {
    return 42;
  }
  static publicStaticMethod1() {
    return Base.#privateStaticMethod();
  }
  static publicStaticMethod2() {
    return this.#privateStaticMethod();
  }
}

class Derived extends Base {}

console.log(Derived.publicStaticMethod1());
// 42
console.log(Derived.publicStaticMethod2());
// TypeError: Cannot read private member #privateStaticMethod
// from an object whose class did not declare it
```

## 仕様書

{{Specifications("javascript.classes")}}

## ブラウザーの互換性

{{Compat("javascript.classes")}}

## 関連情報

- [プライベートクラス機能での作業](/ja/docs/Web/JavaScript/Guide/Working_With_Private_Class_Features)
- [パブリッククラスフィールド](/ja/docs/Web/JavaScript/Reference/Classes/Public_class_fields)
- [The Semantics of All JS Class Elements](https://rfrn.org/~shu/2018/05/02/the-semantics-of-all-js-class-elements.html)
- [Public and private class fields](https://v8.dev/features/class-fields)
  v8.dev サイトの記事
