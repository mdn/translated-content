---
title: SuppressedError
slug: Web/JavaScript/Reference/Global_Objects/SuppressedError
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

`SuppressedError` は、別のエラーを処理している際に発生したエラーを表すオブジェクトです。これは、{{jsxref("Statements/using", "using")}} または {{jsxref("Statements/await_using", "await using")}} を使用したリソースの破棄中に生成されます。

{{jsxref("AggregateError")}} と比べると、`SuppressedError` は 別のエラーによって抑制された単一のエラーを表すのに対し、`AggregateError` は無関係なエラーのリストを表します。ただし、`SuppressedError` が抑制されたエラーのチェーン（`e.suppressed.suppressed.suppressed...`）を含められます。また、{{jsxref("Error/cause", "cause")}} とは意味的に異なります。なぜなら、そのエラーは別のエラーによって「引き起こされる」のではなく、別のエラーを処理している際に「発生する」からです。

`SuppressedError` は {{jsxref("Error")}} のサブクラスです。

## コンストラクター

- {{jsxref("SuppressedError/SuppressedError", "SuppressedError()")}}
  - : `SuppressedError` オブジェクトを生成します。

## インスタンスプロパティ

_継承元の {{jsxref("Error")}} からインスタンスプロパティも継承します。_

これらのプロパティは `SuppressedError.prototype` に定義されており、すべての `SuppressedError` インスタンスで共有されます。

- {{jsxref("Object/constructor", "SuppressedError.prototype.constructor")}}
  - : インスタンスオブジェクトを生成したコンストラクター関数。`SuppressedError` インスタンスの場合、初期値は {{jsxref("SuppressedError/SuppressedError", "SuppressedError")}} コンストラクターです。
- {{jsxref("Error/name", "SuppressedError.prototype.name")}}
  - : エラーの種類を表す名前。`SuppressedError.prototype.name` の初期値は `"SuppressedError"` です。

> [!NOTE]
> `cause` と `suppressed` の意味論が重複するため、`SuppressedError` は {{jsxref("Error/cause", "cause")}} プロパティを持ちません。

これらのプロパティは各 `SuppressedError` インスタンスの固有のプロパティです。

- {{jsxref("SuppressedError/error", "error")}}
  - : 抑制の結果としてのエラーへの参照。
- {{jsxref("SuppressedError/suppressed", "suppressed")}}
  - : `error` によって抑制されたエラーへの参照。

## インスタンスメソッド

_親 {{jsxref("Error")}} からインスタンスメソッドを継承します。_

## 例

### SuppressedError のキャッチ

`SuppressedError` は、[リソースの破棄](/ja/docs/Web/JavaScript/Guide/Resource_management) 中にエラーが発生したときにスローされます。エラーをスローするとスコープのクリーンアップが行われ、クリーンアップ中の各 disposer は独自のエラーをスローできます。これらのエラーはすべて `SuppressedError` インスタンスのチェーンに収集され、元のエラーが `suppressed` プロパティとして、次の disposer によってスローされた新しいエラーが `error` プロパティとして格納されます。

```js
try {
  using resource1 = {
    [Symbol.dispose]() {
      throw new Error("resource1 の破棄中にエラーが発生しました");
    },
  };
  using resource2 = {
    [Symbol.dispose]() {
      throw new Error("resource2 の破棄中にエラーが発生しました");
    },
  };
  throw new Error("元のエラー");
} catch (e) {
  console.log(e instanceof SuppressedError); // true
  console.log(e.message); // "破棄中にエラーが抑制されました"
  console.log(e.name); // "SuppressedError"
  console.log(e.error); // Error: resource1 の破棄中にエラーが発生しました
  console.log(e.suppressed); // SuppressedError: 破棄中にエラーが抑制されました
  console.log(e.suppressed.error); // Error: resource2 の破棄中にエラーが発生しました
  console.log(e.suppressed.suppressed); // Error: 元のエラー
}
```

チェーンは次のようになります：

```plain
       SuppressedError --suppressed--> SuppressedError --suppressed--> 元のエラー
              |                               |
            error                           error
              v                               v
resource1 の破棄中にエラーが発生しました   resource2 の破棄中にエラーが発生しました
    (破棄は後で行われます)                (破棄は先に行われます)
```

### SuppressedError の作成

```js
try {
  throw new SuppressedError(
    new Error("新しいエラー"),
    new Error("元のエラー"),
    "こんにちは",
  );
} catch (e) {
  console.log(e instanceof SuppressedError); // true
  console.log(e.message); // "こんにちは"
  console.log(e.name); // "SuppressedError"
  console.log(e.error); // Error: "新しいエラー"
  console.log(e.suppressed); // Error: "元のエラー"
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [core-js における `SuppressedError` のポリフィル](https://github.com/zloirock/core-js#explicit-resource-management)
- {{jsxref("Error")}}
- {{jsxref("Statements/using", "using")}}
- {{jsxref("Statements/await_using", "await using")}}
- {{jsxref("DisposableStack")}}
- {{jsxref("AsyncDisposableStack")}}
