---
title: WebAssembly
slug: WebAssembly/Reference/JavaScript_interface
l10n:
  sourceCommit: 3934778cdfee0d5d2ae4c93b9f5568701008a628
---

**`WebAssembly`** は JavaScript のオブジェクトで、 [WebAssembly](/ja/docs/WebAssembly) に関するすべての機能の名前空間の役割をします。

他のグローバルオブジェクトとは異なり、`WebAssembly` はコンストラクターではありません（関数オブジェクトではありません）。数学の定数や関数の名前空間オブジェクトである {{jsxref("Math")}} や、国際化のコンストラクターやその他の言語を意識した関数ための名前空間オブジェクトである {{jsxref("Intl")}} と同様のものです。

## 概要

`WebAssembly` オブジェクトの主な用途は次のとおりです。

- [`WebAssembly.instantiate()`](/ja/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) 関数を用いた WebAssembly コードの読み込み。
- [`WebAssembly.Memory()`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Memory)/[`WebAssembly.Table()`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Table) コンストラクターによる新しいメモリーやテーブルインスタンスの生成。
- [`WebAssembly.CompileError()`](/ja/docs/WebAssembly/Reference/JavaScript_interface/CompileError)/[`WebAssembly.LinkError()`](/ja/docs/WebAssembly/Reference/JavaScript_interface/LinkError)/[`WebAssembly.RuntimeError()`](/ja/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError) コンストラクターによる、WebAssembly で発生するエラーの処理する機能の提供。

## インターフェイス

- [`WebAssembly.CompileError`](/ja/docs/WebAssembly/Reference/JavaScript_interface/CompileError)
  - : WebAssembly のデコードまたは検証中のエラーを示します。
- [`WebAssembly.Global`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Global)
  - : グローバル変数のインスタンスを表し、 JavaScript からアクセス可能で、 1 つ以上の [`WebAssembly.Module`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Module) インスタンスの間でインポート/エクスポート可能です。これにより、複数のモジュールを動的リンクすることができます。
- [`WebAssembly.Instance`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Instance)
  - : ステートフルで、実行可能な [WebAssembly.Module](/ja/docs/WebAssembly/Reference/JavaScript_interface/Module) のインスタンスです。
- [`WebAssembly.LinkError`](/ja/docs/WebAssembly/Reference/JavaScript_interface/LinkError)
  - : （関数開始後の[トラップ](https://webassembly.github.io/simd/core/intro/overview.html#trap)<sup>(英語)</sup>ではなく）モジュールの初期化時に発生したエラーを示します。
- [`WebAssembly.Memory`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Memory)
  - : [`buffer`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer) プロパティが可変長の {{jsxref("ArrayBuffer")}} であり、これが WebAssembly の `Instance` からアクセス可能なメモリーのバイト列を保持しています。
- [`WebAssembly.Module`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Module)
  - : ステートレスの WebAssembly のコードであり、ブラウザーでコンパイルされ、効率的に[ワーカーと共有](/ja/docs/Web/API/Worker/postMessage)することができ、複数回インスタンス化することができます。
- [`WebAssembly.RuntimeError`](/ja/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError)
  - : WebAssembly が[トラップ](https://webassembly.github.io/simd/core/intro/overview.html#trap)<sup>(英語)</sup>を指定するたびに例外として発生するエラー型です。
- [`WebAssembly.Suspending`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Suspending)
  - : 一時停止関数を表します。これは、非同期（{{jsxref("Promise")}} に基づく）JavaScript 関数であり、Wasm モジュールにインポートされ、その内部から呼び出されると、プロミスが解決されるまで実行が一時停止されます。
- [`WebAssembly.Table`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Table)
  - : WebAssembly のテーブルを表す配列風の構造で、[多数の参照](https://webassembly.github.io/spec/core/syntax/types.html#syntax-reftype)<sup>(英語)</sup>を保持します（関数の参照など）。
- [`WebAssembly.Tag`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Tag)
  - : WebAssembly の例外の 1 つの型を表すオブジェクト。
- [`WebAssembly.Exception`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Exception)
  - : WebAssembly/JavaScript の境界内および境界をまたいで、発生、捕捉、再発生させることが可能な WebAssembly の例外オブジェクト。

## 静的プロパティ

- [`WebAssembly.JSTag`](/ja/docs/WebAssembly/Reference/JavaScript_interface/JSTag_static)
  - : JavaScript ホストで発生した例外を表す組み込みの [`WebAssembly.Tag`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Tag) — これにより、JavaScript で発生した例外を Wasm モジュール内部から処理することができます。

## 静的メソッド

- [`WebAssembly.compile()`](/ja/docs/WebAssembly/Reference/JavaScript_interface/compile_static)
  - : [`WebAssembly.Module`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Module) を用いて WebAssembly バイナリーコードからコンパイルします。インスタンス化は別ステップとして分離されます。
- [`WebAssembly.compileStreaming()`](/ja/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static)
  - : ソースのストリームから直接 [`WebAssembly.Module`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Module) にコンパイルします。インスタンス化は別ステップとして分離されます。
- [`WebAssembly.instantiate()`](/ja/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static)
  - : WebAssembly コードをコンパイル、インスタンス化するための主要な API で、 `Module` と、その最初の `Instance` を返します。
- [`WebAssembly.instantiateStreaming()`](/ja/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)
  - : ソースのストリームから直接 WebAssembly モジュールをコンパイル、インスタンス化し、 `Module` と、その最初の `Instance` を返します。
- [`WebAssembly.promising()`](/ja/docs/WebAssembly/Reference/JavaScript_interface/promising_static)
  - : 非同期操作（つまり、[`WebAssembly.Suspending()`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Suspending/Suspending) コンストラクターを使用して作成された、インポートされた一時停止関数）に依存するエクスポートされた Wasm 関数をラップし、それを {{jsxref("Promise")}} に変換します。
- [`WebAssembly.validate()`](/ja/docs/WebAssembly/Reference/JavaScript_interface/validate_static)
  - : WebAssembly バイナリーコードの型付き配列を検証し、バイト列が有効な WebAssembly コードか (`true`) 否か (`false`) を返します。

## 例

## .wasm モジュールを読み込み、コンパイルし、インスタンス化する

次の例（GitHub 上の [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/instantiate-streaming.html) のデモと、[動作例](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html)も参照）は、基礎となるソースから Wasm モジュールを直接ストリーミングし、コンパイルしてインスタンス化し、 `ResultObject` で履行されるプロミスを返します。 `instantiateStreaming()` 関数は [`Response`](/ja/docs/Web/API/Response) オブジェクトのプロミスを受け付けるので、 [`fetch()`](/ja/docs/Web/API/Window/fetch) の呼び出し結果を直接渡すと、履行されたときにレスポンスを関数に渡すことができます。

```js
const importObject = {
  my_namespace: { imported_func: (arg) => console.log(arg) },
};

WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

それから `ResultObject` の instance メンバーにアクセスすると、呼び出し対象のエクスポートされた関数が入っています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebAssembly](/ja/docs/WebAssembly) 概要ページ
- [WebAssembly の概念](/ja/docs/WebAssembly/Guides/Concepts)
- [WebAssembly JavaScript API の使用](/ja/docs/WebAssembly/Guides/Using_the_JavaScript_API)
