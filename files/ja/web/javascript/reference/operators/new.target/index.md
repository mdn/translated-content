---
title: new.target
slug: Web/JavaScript/Reference/Operators/new.target
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**`new.target`** はメタプロパティで、関数やコンストラクターが [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) 演算子を使用して呼び出されたかどうかを検出することができます。 [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) 演算子を使用して呼び出したコンストラクターや 関数の中では、 `new.target` は `new` が呼び出されたコンストラクターまたは関数への参照を返します。通常に呼び出された関数の中では、 `new.target` は {{jsxref("undefined")}} になります。

{{InteractiveExample("JavaScript デモ: new.target")}}

```js-nolint interactive-example
function Foo() {
  if (!new.target) {
    throw new TypeError("new を付けずに Foo コンストラクターを呼び出すのは不正です");
  }
}

try {
  Foo();
} catch (e) {
  console.log(e);
  // 予想される結果: TypeError: new を付けずに Foo コンストラクターを呼び出すのは不正です
}
```

## 構文

```js-nolint
new.target
```

### 値

`new.target` は、構築可能な関数値または `undefined` であることが保証されています。

- クラスのコンストラクター内では、 `new` が呼び出されたクラスを参照します。これは現在のコンストラクターのサブクラスである可能性があります。サブクラスは [`super()`](/ja/docs/Web/JavaScript/Reference/Operators/super) を通じてスーパークラスのコンストラクターを経過的に呼び出すためです。
- 通常の関数では、関数が [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) で直接構築された場合、 `new.target` はその関数自体を参照します。関数が `new` なしで呼び出された場合、`new.target` は {{jsxref("undefined")}} になります。関数は [`extends`](/ja/docs/Web/JavaScript/Reference/Classes/extends) の基底クラスとして使用されることがあり、その場合 `new.target` はサブクラスを参照する可能性があります。
- コンストラクター（クラスまたは関数）が {{jsxref("Reflect.construct()")}} 経由で呼び出された場合、 `new.target` は `newTarget` として渡された値（既定は `target`）を参照します。
- [アロー関数](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions)では、 `new.target` は周囲のスコープから継承されます。アロー関数が `new.target` の{{Glossary("binding", "バインディング")}}を持つ別のクラスや関数内で定義されていない場合、構文エラーが発生します。
- [政敵初期化ブロック](/ja/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)内では、 `new.target` は {{jsxref("undefined")}} です。

## 解説

`new.target` 構文は、キーワード `new` とドットと `target` 識別子で構成されています。`new` は識別子ではなく[予約語](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#予約語)であるため、これは[プロパティアクセサー](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors)ではなく、特別な式構文です。

`new.target` メタプロパティは、すべての関数/クラスの本体内で利用できます。関数やクラス の外部で `new.target` を使用すると構文エラーになります。

## 例

### 関数呼び出しにおける new\.target の使用

通常の関数呼び出しでは (コンストラクター関数の呼び出しとは対照的に)、 `new.target` は {{jsxref("undefined")}} になります。これにより、関数が [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) 付きでコンストラクターとして呼び出されたかを検出できます。

```js
function Foo() {
  if (!new.target) {
    throw new Error("Foo() は new を付けて呼び出さなくてはなりません");
  }
  console.log("Foo が new 付きでインスタンス化されました");
}

new Foo(); // "Foo が new 付きでインスタンス化されました" を出力
Foo(); // "Foo() は new を付けて呼び出さなくてはなりません" 例外が発生
```

### コンストラクターにおける new\.target

クラスのコンストラクターでは、`new.target` は `new` で直接実行されたコンストラクターを参照します。これは、コンストラクターが親クラスにあり、子コンストラクターから委任された場合も同様です。`new.target` は、`new` が呼び出されたクラスを指します。例えば、`b` が `new B()` を使用して初期化された際には、`B` の名前が表示されます。同様に、`a` の場合、クラス `A` の名前が表示されます。

```js
class A {
  constructor() {
    console.log(new.target.name);
  }
}

class B extends A {
  constructor() {
    super();
  }
}

const a = new A(); // Logs "A"
const b = new B(); // Logs "B"
```

### Reflect.construct() を使用したときの　new\.target

{{jsxref("Reflect.construct()")}} やクラスが登場する以前は、継承を実装する一般的な方法として、[`this`](/ja/docs/Web/JavaScript/Reference/Operators/this) の値を渡し、基底クラスのコンストラクターでそれを変更させる手法が用いられていました。

```js example-bad
function Base() {
  this.name = "Base";
}

function Extended() {
  // Base() コンストラクターが、 `new` によって生成される新しいオブジェクト
  // ではなく、既存の `this` 値に対して動作する唯一の 方法。
  Base.call(this);
  this.otherProperty = "Extended";
}

Object.setPrototypeOf(Extended.prototype, Base.prototype);
Object.setPrototypeOf(Extended, Base);

console.log(new Extended()); // Extended { name: 'Base', otherProperty: 'Extended' }
```

ただし、{{jsxref("Function/call", "call()")}} および {{jsxref("Function/apply", "apply()")}} は実際には関数を「構築」するのではなく「呼び出し」するため、`new.target` の値は `undefined` になります。これは、`Base()` が `new` で構築されたかどうかを確認する場合、エラーが発生するか、それ以外にも予期しない動作を引き起こす可能性があるということの意味します。例えば、`Map()` コンストラクターは `new` なしでは呼び出せないため、この方法で [`Map`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Map/Map) を拡張することはできません。

すべての組み込みコンストラクターは、 `new.target.prototype` を読み取ることで、新規インスタンスのプロトタイプチェーン全体を直接構築します。したがって、(1) `Base` が `new` で構築され、(2) `new.target` が `Base` 自体ではなくサブクラスを指すようにするには、 {{jsxref("Reflect.construct()")}} を使用する必要があります。

```js
function BetterMap(entries) {
  // 基底クラスのコンストラクターを呼び出すが、`new.target` をサブクラスに設定する。
  // これにより、作成されるインスタンスに正しいプロトタイプチェーンが構築される。
  return Reflect.construct(Map, [entries], BetterMap);
}

BetterMap.prototype.upsert = function (key, actions) {
  if (this.has(key)) {
    this.set(key, actions.update(this.get(key)));
  } else {
    this.set(key, actions.insert());
  }
};

Object.setPrototypeOf(BetterMap.prototype, Map.prototype);
Object.setPrototypeOf(BetterMap, Map);

const map = new BetterMap([["a", 1]]);
map.upsert("a", {
  update: (value) => value + 1,
  insert: () => 1,
});
console.log(map.get("a")); // 2
```

> [!NOTE]
> 実際、 `Reflect.construct()` が存在しないため、 ES6 以前のコードへトランスパイルする際には、組み込みオブジェクトを正しくサブクラス化することができません（[`Error` のサブクラス化](/ja/docs/Web/JavaScript/Reference/Global_Objects/Error#custom_error_types)など）。

ただし、 ES6 のコードを書く場合は、読み取り可能でエラーの可能性が低いクラスと `extends` の使用を推奨します。

```js
class BetterMap extends Map {
  // コンストラクターは既定のコンストラクターのみであるため省略

  upsert(key, actions) {
    if (this.has(key)) {
      this.set(key, actions.update(this.get(key)));
    } else {
      this.set(key, actions.insert());
    }
  }
}

const map = new BetterMap([["a", 1]]);
map.upsert("a", {
  update: (value) => value + 1,
  insert: () => 1,
});
console.log(map.get("a")); // 2
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [関数](/ja/docs/Web/JavaScript/Reference/Functions)
- [クラス](/ja/docs/Web/JavaScript/Reference/Classes)
- [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new)
- [`this`](/ja/docs/Web/JavaScript/Reference/Operators/this)
