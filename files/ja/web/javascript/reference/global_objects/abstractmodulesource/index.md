---
title: AbstractModuleSource
slug: Web/JavaScript/Reference/Global_Objects/AbstractModuleSource
l10n:
  sourceCommit: 31bad7cd99cccf47f6332b81bbff4371e2bc551f
---

**_AbstractModuleSource_** オブジェクトは、[`import source`](/ja/docs/Web/JavaScript/Reference/Statements/import/source) または [`import.source()`](/ja/docs/Web/JavaScript/Reference/Operators/import/source) で取得した、コンパイル済みモジュールのソースを表します。`AbstractModuleSource` コンストラクターは直接見える形では存在しません。

## 解説

`AbstractModuleSource` コンストラクター（JavaScript プログラムに公開されるグローバルオブジェクトに対応しないことから、「内在的」であることを示すために `%AbstractModuleSource%` と呼ばれることもあります）は、すべてのモジュールソースのサブクラスのスーパークラスとして、ユーティリティメソッドの共通インターフェイスを提供します。このコンストラクターは直接公開されていません。グローバルな `AbstractModuleSource` プロパティはありません。`Object.getPrototypeOf(moduleSourceObject.constructor)` などを通じてのみアクセスできます。

### AbstractModuleSource オブジェクト

- [`WebAssembly.Module`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Module)

JavaScript のモジュールソースオブジェクトは、[ECMAScript Module Phase Imports](https://github.com/tc39/proposal-esm-phase-imports) の提案によって追加される予定です。

## コンストラクター

このオブジェクトを直接インスタンス化することはできません。`new` で構築しようとすると {{jsxref("TypeError")}} が発生します。

```js
import source modSource from "./module.wasm";

new (Object.getPrototypeOf(modSource.constructor))();
// TypeError: Abstract class AbstractModuleSource not directly constructable
```

代わりに、`import source`、`import.source()`、`WebAssembly.Module()` のような具象モジュール型の API を使用して、モジュールソースオブジェクトを取得してください。これらの仕組みは抽象コンストラクターを呼び出しません。

## インスタンスプロパティ

これらのプロパティは `AbstractModuleSource.prototype` で定義されており、すべての `AbstractModuleSource` サブクラスのインスタンスで共有されます。

- {{jsxref("Object/constructor", "AbstractModuleSource.prototype.constructor")}}
  - : インスタンスオブジェクトを作成したコンストラクター関数。`AbstractModuleSource.prototype.constructor` は隠された `AbstractModuleSource` コンストラクター関数ですが、各モジュールソースのサブクラスも独自の `constructor` プロパティを定義します。
- `AbstractModuleSource.prototype[Symbol.toStringTag]`
  - : [`AbstractModuleSource.prototype[Symbol.toStringTag]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) プロパティの初期値は、コンストラクターの識別情報に基づく文字列（`"WebAssembly.Module"` や `"ModuleSource"` など）を返すゲッターです。`this` 値がいずれかのモジュールソースのサブクラスのインスタンスでない場合は、`undefined` を返します。このプロパティは {{jsxref("Object.prototype.toString()")}} で使用されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`WebAssembly.Module`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Module)
- {{jsxref("Operators/import/source", "import.source()")}}
- {{jsxref("Statements/import/source", "import source")}}
