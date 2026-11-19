---
title: import.defer()
slug: Web/JavaScript/Reference/Operators/import/defer
l10n:
  sourceCommit: 696a0436bb4dd20eb4d30ac3f1d4fc5140d1eee9
---

{{SeeCompatTable}}

**`import.defer()`** 構文は通常の [`import()`](/ja/docs/Web/JavaScript/Reference/Operators/import) 構文と同様に動作しますが、結果として[遅延評価されるモジュール名前空間オブジェクト](/ja/docs/Web/JavaScript/Reference/Statements/import/defer#deferred_module_namespace_object)で履行されるプロミスを返します。モジュールとその依存関係は事前に[取得](/ja/docs/Web/JavaScript/Guide/Modules/Module_graph#loading_the_graph)および[リンク](/ja/docs/Web/JavaScript/Guide/Modules/Module_graph#linking_modules)されますが、それらの同期的な[評価](/ja/docs/Web/JavaScript/Guide/Modules/Module_graph#evaluating_modules)は名前空間のプロパティにアクセスされるまで遅延されます。

最上位の `await` との相互作用など、遅延評価について詳しくは、[`import defer`](/ja/docs/Web/JavaScript/Reference/Statements/import/defer) 宣言形式を参照してください。

## 構文

```js-nolint
import.defer(moduleName)
import.defer(moduleName, options)
```

`import.defer()` は特殊な構文（「メタプロパティ」）であり、`import` オブジェクトのメソッドではありません。

### 引数

[`import()`](/ja/docs/Web/JavaScript/Reference/Operators/import#引数)を参照してください。

### 返値

モジュールグラフの[読み込み](/ja/docs/Web/JavaScript/Guide/Modules/Module_graph#loading_the_graph)とリンクが完了し、先行して評価される[最上位の `await` の依存関係](/ja/docs/Web/JavaScript/Reference/Statements/import/defer#top-level_await)の評価がすべて完了した後、[遅延評価されるモジュール名前空間オブジェクト](/ja/docs/Web/JavaScript/Reference/Statements/import/defer#deferred_module_namespace_object)で履行されるプロミスを返します。

通常の [`import()`](/ja/docs/Web/JavaScript/Reference/Operators/import#返値) と同様に、モジュールまたはその依存関係を読み込み、構文解析、リンクできない場合、プロミスは拒否されます。先行して評価されるモジュールで例外が発生した場合も拒否されます。一方、遅延されたままの評価で発生するエラーは、評価を開始する名前空間の操作によって同期的に発生します。

## 例

### import.defer() の使用

> [!NOTE]
> 遅延評価されるモジュール名前空間オブジェクトには `then` というプロパティが決して公開されないため、返されたプロミスを `await` しても、エクスポートされた `then` メソッドが誤って呼び出されることはありません。これは[通常のモジュール名前空間オブジェクト](/ja/docs/Web/JavaScript/Reference/Operators/import#モジュール名前空間オブジェクト)に関する注意点です。

```js
const ts = await import.defer("typescript");

function compilePath(path) {
  // typescript モジュールのサブグラフの評価はここで開始
  const program = ts.createProgram([path], {});
}
```

返された名前空間をすぐに分割代入しないでください。評価が開始されるためです。

```js example-bad
const { createProgram } = await import.defer("typescript");
// typescript モジュールはこの時点で評価済み
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript モジュール](/ja/docs/Web/JavaScript/Guide/Modules)ガイド
- {{jsxref("Operators/import", "import()")}}
- {{jsxref("Statements/import/defer", "import defer")}}
