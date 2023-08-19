---
title: static
slug: Web/JavaScript/Reference/Classes/static
---

{{jsSidebar("Classes")}}

**`static`** キーワードは、クラスに静的メソッドや静的プロパティを定義します。静的メソッドも静的プロパティもクラスのインスタンスからは呼び出されません。その代わりに、クラスそのものから呼び出されます。静的メソッドは多くの場合、オブジェクトの生成や複製を行う関数などのユーティリティ関数です。静的プロパティはキャッシュ、固定的な構成、その他の各インスタンスに複製する必要のないデータです。

{{EmbedInteractiveExample("pages/js/classes-static.html")}}

## 構文

```js
static methodName() { ... }
static propertyName [= value];
```

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
    return "Static method and " + this.staticProperty + " has been called";
  }
  static anotherStaticMethod() {
    return this.staticMethod() + " from another static method";
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

{{Compat("javascript.classes.static")}}

## 関連情報

- [`class` 式](/ja/docs/Web/JavaScript/Reference/Operators/class)
- [`class` 宣言](/ja/docs/Web/JavaScript/Reference/Statements/class)
- [クラス](/ja/docs/Web/JavaScript/Reference/Classes)
