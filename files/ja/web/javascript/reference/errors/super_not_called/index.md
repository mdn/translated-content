---
title: "ReferenceError: must call super constructor before using 'this' in derived class constructor"
slug: Web/JavaScript/Reference/Errors/Super_not_called
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript の例外 "must call super constructor before using 'this' in derived class constructor" は、派生クラスのコンストラクターで {{jsxref("Operators/super", "super()")}} を呼び出していない状態で、{{jsxref("Operators/this", "this")}} の値にアクセスしようとした場合や、派生コンストラクターがすでに終了しており、その戻り値がオブジェクトでない場合に発生します。

## エラーメッセージ

```plain
ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor (V8-based)
ReferenceError: must call super constructor before using 'this' in derived class constructor (Firefox)
ReferenceError: 'super()' must be called in derived constructor before accessing |this| or returning non-object. (Safari)
```

## エラーの種類

{{jsxref("ReferenceError")}}

## エラーの原因

`super()` の呼び出しは、派生クラスのコンストラクターに対する `new` 呼び出しごとに最大 1 回しか行えません。多くの場合、ちょうど 1 回呼び出す必要があります。なぜなら、これを呼び出さないと親クラスのコンストラクターが `this` を初期化できず、派生コンストラクター内で `this` にアクセスできないためです。この状態のまま派生コンストラクターが終了すると、`this` は正しく構築されたオブジェクトと見なされず、例外が発生します。これを回避する方法として、派生クラスのコンストラクターからオブジェクトを返すことが挙げられます。この場合、 `this` の代わりに返されたオブジェクトが構築結果として使用されるため、`super()` を呼び出さなくても済みます。ただし、この方法が使われることはほとんどありません。

## 例

### 無効なケース

```js example-bad
class Base {
  constructor() {
    this.x = 1;
  }
}

class Derived extends Base {
  constructor() {
    console.log(this.x);
    // まだ Base コンストラクターが呼び出されていないため、this.x は未定義
    // ReferenceError: must call super constructor before using 'this' in derived class constructor
  }
}
```

### 有効な場合

```js example-good
class Base {
  constructor() {
    this.x = 1;
  }
}

class Derived extends Base {
  constructor() {
    super();
    console.log(this.x); // 1
  }
}
```

## 関連情報

- [クラス](/ja/docs/Web/JavaScript/Reference/Classes)
- {{jsxref("Operators/super", "super")}}
