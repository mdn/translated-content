---
title: WebAssembly
slug: WebAssembly/JavaScript_interface
---

{{WebAssemblySidebar}}

**`WebAssembly`** は JavaScript のオブジェクトで、 [WebAssembly](/ja/docs/WebAssembly) に関するすべての機能の名前空間の役割をします。

他のグローバルオブジェクトとは異なり、 `WebAssembly` はコンストラクターではありません (関数オブジェクトではありません) 。数学の定数や関数の名前空間である {{jsxref("Math")}} や 、国際化のコンストラクターやその他の言語を意識した関数ための {{jsxref("Intl")}} と同様のものです。

## 概要

`WebAssembly` オブジェクトの主な用途は次のとおりです。

- {{jsxref("WebAssembly.instantiate()")}} 関数を用いた WebAssembly コードの読み込み。
- {{jsxref("WebAssembly.Memory()")}}/{{jsxref("WebAssembly.Table()")}} コンストラクターによる新しいメモリーやテーブルインスタンスの生成。
- {{jsxref("WebAssembly.CompileError()")}}/{{jsxref("WebAssembly.LinkError()")}}/{{jsxref("WebAssembly.RuntimeError()")}} コンストラクターによる、WebAssembly で発生するエラーの処理する機能の提供。

## コンストラクタープロパティ

- [`WebAssembly.CompileError()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/CompileError/CompileError)
  - : WebAssembly のデコードまたは検証中のエラーを示します。
- [`WebAssembly.Global()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Global/Global)
  - : グローバル変数のインスタンスを表し、 JavaScript からアクセス可能で、 1 つ以上の {{jsxref("WebAssembly.Module")}} インスタンスの間でインポート/エクスポート可能です。これにより、複数のモジュールを動的リンクすることができます。
- [`WebAssembly.Instance()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Instance/Instance)
  - : ステートフルで、実行可能な [WebAssembly.Module](/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Module) のインスタンスです。
- [`WebAssembly.LinkError()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/LinkError/LinkError)
  - : (関数開始後の[トラップ](https://webassembly.org/docs/semantics/#traps)ではなく) モジュールの初期化時に発生したエラーを示します。
- [`WebAssembly.Memory()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory/Memory)
  - : {{jsxref("WebAssembly/Memory/buffer","buffer")}} プロパティが可変長の [ArrayBuffer](/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) であり、これが WebAssembly の `Instance` からアクセス可能なメモリーのバイト列を保持しています。
- [`WebAssembly.Module()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Module/Module)
  - : ステートレスの WebAssembly のコードであり、ブラウザーでコンパイルされ、効率的に[ワーカーと共有](/ja/docs/Web/API/Worker/postMessage)することができ、複数回インスタンス化することができます。
- [`WebAssembly.RuntimeError()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/RuntimeError/RuntimeError)
  - : WebAssembly が[トラップ](https://webassembly.org/docs/semantics/#traps)を指定するたびに例外として発生するエラー型です。
- [`WebAssembly.Table()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/Table)
  - : WebAssembly のテーブルを表す配列風の構造で、関数の参照を保持します。

## 静的メソッド

- {{jsxref("WebAssembly.instantiate()")}}
  - : WebAssembly コードをコンパイル、インスタンス化するための主要な API で、 `Module` と、その最初の `Instance` を返します。
- {{jsxref("WebAssembly.instantiateStreaming()")}}
  - : ソースのストリームから直接 WebAssembly モジュールをコンパイル、インスタンス化し、 `Module` と、その最初の `Instance` を返します。
- {{jsxref("WebAssembly.compile()")}}
  - : {{jsxref("WebAssembly.Module")}} を用いて WebAssembly バイナリコードからコンパイルします。インスタンス化は別ステップとして分離されます。
- {{jsxref("WebAssembly.compileStreaming()")}}
  - : ソースのストリームから直接 {{jsxref("WebAssembly.Module")}} にコンパイルします。インスタンス化は別ステップとして分離されます。
- {{jsxref("WebAssembly.validate()")}}
  - : WebAssembly バイナリコードの型付き配列を検証し、バイト列が有効な WebAssembly コードか (`true`) 否か (`false`) を返します。

## 例

## .wasm モジュールを読み込み、コンパイルし、インスタンス化する

次の例 (GitHub 上の [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/instantiate-streaming.html) のデモと、[動作例](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html)も参照) は、基礎となるソースから .wasm モジュールを直接ストリーミングし、コンパイルしてインスタンス化し、 `ResultObject` で履行されるプロミスを返します。 `instantiateStreaming()` 関数は [`Response`](/ja/docs/Web/API/Response) オブジェクトのプロミスを受け付けるので、 [`fetch()`](/ja/docs/Web/API/fetch) の呼び出し結果を直接渡すと、履行されたときにレスポンスを関数に渡すことができます。

```js
var importObject = { imports: { imported_func: (arg) => console.log(arg) } };

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
- [WebAssembly の概念](/ja/docs/WebAssembly/Concepts)
- [WebAssembly JavaScript API の使用](/ja/docs/WebAssembly/Using_the_JavaScript_API)
