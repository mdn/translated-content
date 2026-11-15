---
title: import.source()
slug: Web/JavaScript/Reference/Operators/import/source
l10n:
  sourceCommit: 696a0436bb4dd20eb4d30ac3f1d4fc5140d1eee9
---

{{SeeCompatTable}}

**`import.source()`** 構文は通常の [`import()`](/ja/docs/Web/JavaScript/Reference/Operators/import) 構文と同様に動作しますが、モジュールのコンパイル済みソースコードを表すオブジェクトで履行されるプロミスを返します。モジュールは[取得およびコンパイル](/ja/docs/Web/JavaScript/Guide/Modules/Module_graph#loading_the_graph)されますが、依存関係は読み込まれず、[リンク](/ja/docs/Web/JavaScript/Guide/Modules/Module_graph#linking_modules)も[評価](/ja/docs/Web/JavaScript/Guide/Modules/Module_graph#evaluating_modules)もされません。後から[動的インポート](/ja/docs/Web/JavaScript/Reference/Operators/import)や[`WebAssembly.instantiate()`](/ja/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static)などを使って、明示的に評価できます。

`import.source()` を使用するには、対象のモジュールがソースフェーズのインポートに対応している必要があります。現在、ソースフェーズのインポートに対応しているのは WebAssembly モジュールのみであり、返されるのは [`WebAssembly.Module`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Module) オブジェクトです。[ECMAScript Module Phase Imports](https://github.com/tc39/proposal-esm-phase-imports) 提案により、JavaScript モジュールのソースオブジェクトも追加される予定です。

ソースフェーズのインポートの意味について詳しくは、[`import source`](/ja/docs/Web/JavaScript/Reference/Statements/import/source) 宣言形式を参照してください。

## 構文

```js-nolint
import.source(moduleName)
import.source(moduleName, options)
```

`import.source()` は特殊な構文（「メタプロパティ」）であり、`import` オブジェクトのメソッドではありません。

### 引数

[`import()`](/ja/docs/Web/JavaScript/Reference/Operators/import#引数)を参照してください。

### 返値

モジュールが正常に読み込まれてコンパイルされた後、そのコンパイル済みソースを表す {{jsxref("AbstractModuleSource")}} オブジェクトで履行されるプロミスを返します。

通常の [`import()`](/ja/docs/Web/JavaScript/Reference/Operators/import#返値) と同様に、モジュールを読み込めない場合や構文解析できない場合、プロミスは拒否されます。モジュールの型がソースフェーズのインポートに対応していない場合も、{{jsxref("SyntaxError")}} で拒否されます。このインポートでは依存関係の読み込み、リンク、モジュールの評価を行わないため、それら後続の手順で発生するエラーは報告されません。

## 例

### import.source() の使用

```js
const myModuleSource = await import.source("./my-module.wasm");

const instance = await WebAssembly.instantiate(myModuleSource, {
  env: { log: console.log },
});
const { exports } = instance;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript モジュール](/ja/docs/Web/JavaScript/Guide/Modules)ガイド
- {{jsxref("Operators/import", "import()")}}
- {{jsxref("Statements/import/source", "import source")}}
- {{jsxref("AbstractModuleSource")}}
