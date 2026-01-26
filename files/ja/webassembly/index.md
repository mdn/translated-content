---
title: WebAssembly
slug: WebAssembly
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

WebAssembly は現代のウェブブラウザーで実行できるコードの一種です。ネイティブに近いパフォーマンスで動作する、コンパクトなバイナリー形式の低レベルなアセンブリー風言語です。さらに、 C/C++、C# や Rust などの言語のコンパイル先となり、それらの言語をウェブ上で実行することができます。
また、JavaScript と並べて実行するように設計されており、両方を一緒に動作させることができます。

WebAssembly は、 JavaScript を補完し、並べて実行するように設計されています。WebAssembly JavaScript API を使用すると、 WebAssembly モジュールを JavaScript アプリに読み込み、両者の間で機能を共有することができます。これにより、 WebAssembly のコードの書き方を知らなくても、同じアプリ内で WebAssembly のパフォーマンスとパワー、および JavaScript の表現力と柔軟性を活用することができます。

WebAssembly は、ウェブプラットフォームに大きな影響を与えます。複数の言語で記述されたコードをネイティブに近い速度でウェブ上で実行する方法を提供するだけでなく、これまで不可能だったクライアントアプリをウェブ上で実行することができるようになります。

さらに、 [W3C WebAssembly Working Group](https://www.w3.org/groups/wg/wasm/) と[コミュニティグループ](https://www.w3.org/community/webassembly/)を介して、ウェブ標準として開発されており、主要なブラウザーベンダーも積極的に参加しています。

## ガイド

[WebAssembly ガイド](/ja/docs/WebAssembly/Guides)では、高水準の概念、さまざまな言語からのコンパイル、 Wasm バイナリー形式のテキスト表現、 WebAssembly の実行方法などのトピックについて説明しています。

- [WebAssembly の概要](/ja/docs/WebAssembly/Guides/Concepts)
  - : まずは WebAssembly の大まかな概念 — WebAssembly とはなにか、有用性、ウェブプラットフォーム (またはそれ以上) にどのように適合するか、どのように使用するか — の理解から始めてください。
- [C/C++ から WebAssembly へのコンパイル](/ja/docs/WebAssembly/Guides/C_to_Wasm)
  - : C/C++ で書いたコードを [Emscripten](https://emscripten.org/) のようなツールを使って Wasm にコンパイルできます。どのように動作するか確認してみましょう。
- [既存の C モジュールから WebAssembly へのコンパイル](/ja/docs/WebAssembly/Guides/Existing_C_to_Wasm)
  - : WebAssembly のコアユースケースは、既存の C ライブラリーのエコシステムを利用し、開発者がウェブ上でそれらを使用できるようにすることです。
- [Rust から WebAssembly へのコンパイル](/ja/docs/WebAssembly/Guides/Rust_to_Wasm)
  - : Rust コードを書いていれば、WebAssembly にコンパイルすることができます。このチュートリアルでは、Rust プロジェクトを Wasm にコンパイルして、既存のウェブアプリケーションで使用するために知っておく必要があるすべてのことを説明します。
- [WebAssembly コードの読み込みと実行](/ja/docs/WebAssembly/Guides/Loading_and_running)
  - : Wasm モジュールを手に入れた後で、この記事ではそれを読み取り、コンパイルし、インスタンス化する方法を説明します。 [WebAssembly JavaScript](/ja/docs/WebAssembly/Reference/JavaScript_interface) API と[フェッチ](/ja/docs/Web/API/Fetch_API)または [XHR](/ja/docs/Web/API/XMLHttpRequest) API とを組み合わせます。
- [WebAssembly JavaScript API の使用](/ja/docs/WebAssembly/Guides/Using_the_JavaScript_API)
  - : Wasm モジュールを読み込んだら、それを使いたくなるでしょう。この記事では、 WebAssembly JavaScript API を用いて WebAssembly を使用する方法を説明します。
- [エクスポートされた WebAssembly 関数](/ja/docs/WebAssembly/Guides/Exported_functions)
  - : エクスポートされた WebAssembly 関数は、WebAssembly 関数の JavaScript リフレクションであり、 JavaScript から WebAssembly コードを呼び出すことができます。 この記事では、それらが何なのか説明します。
- [WebAssembly テキスト形式を理解する](/ja/docs/WebAssembly/Guides/Understanding_the_text_format)
  - : この記事では Wasm テキスト形式について説明します。これは Wasm モジュールの低レベルなテキスト表現で、デバッグ時にブラウザーの開発者ツールに表示されます。
- [WebAssembly テキスト形式から Wasm に変換する](/ja/docs/WebAssembly/Guides/Text_format_to_Wasm)
  - : この記事では、テキスト形式で書かれた WebAssembly モジュールを Wasm バイナリーに変換する方法について説明します。

## API リファレンス

- [WebAssembly 命令リファレンス](/ja/docs/WebAssembly/Reference)
  - : WebAssembly の制御フロー操作の設定に関するリファレンスドキュメントです。
- [WebAssembly JavaScript インターフェイス](/ja/docs/WebAssembly/Reference/JavaScript_interface)
  - : このオブジェクトは、 WebAssembly に関連する全ての機能の名前空間として振る舞います。
- [`WebAssembly.Global()`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Global)
  - : `WebAssembly.Global` オブジェクトは JavaScript と 1 つ以上の [`WebAssembly.Module()`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Module) インスタンス（のインポート/エクスポート可能な値）を横断してアクセスできるグローバル変数のインスタンスを表現します。これによって、複数モジュールでの動的リンクを実現できます。
- [`WebAssembly.Module()`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Module)
  - : `WebAssembly.Module` オブジェクトにはブラウザーでコンパイルされたステートレスな WebAssembly コードが含まれており、効率的に[ワーカーで共有](/ja/docs/Web/API/Worker/postMessage)したり、複数回インスタンス化したりすることができます。
- [`WebAssembly.Instance()`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Instance)
  - : `WebAssembly.Instance` オブジェクトはステートフルで、実行可能な `Module` のインスタンスです。`Instance` オブジェクトには JavaScript から WebAssembly コードを呼び出すことを許可された[エクスポートされた WebAssembly 関数](/ja/docs/WebAssembly/Guides/Exported_functions)が含まれます。
- [`WebAssembly.compile()`](/ja/docs/WebAssembly/Reference/JavaScript_interface/compile_static)
  - : `WebAssembly.compile()` 関数は、WebAssembly バイナリコードを `WebAssembly.Module` オブジェクトにコンパイルします。
- [`WebAssembly.compileStreaming()`](/ja/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static)
  - : `WebAssembly.compileStreaming()` 関数は、ストリーミングされた基盤ソースから `WebAssembly.Module` を直接コンパイルします。
- [`WebAssembly.instantiate()`](/ja/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static)
  - : `WebAssembly.instantiate()` 関数を使用すると、WebAssembly コードをコンパイルしてインスタンス化することができます。
- [`WebAssembly.instantiateStreaming()`](/ja/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)
  - : `WebAssembly.instantiateStreaming()` 関数は WebAssembly コードをコンパイル、インスタンス化するための主要な API で、`Module` と、その最初の `Instance` を返します。
- [`WebAssembly.validate()`](/ja/docs/WebAssembly/Reference/JavaScript_interface/validate_static)
  - : `WebAssembly.validate()` 関数は、指定された型の WebAssembly バイナリコードの配列を検証します。
- [`WebAssembly.Memory()`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Memory)
  - : `WebAssembly.Memory` オブジェクトはリサイズ可能な {{jsxref("Global_objects/ArrayBuffer", "ArrayBuffer")}} で、 `Instance` からアクセスされる生のバイト列を保持します。
- [`WebAssembly.Table()`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Table)
  - : `WebAssembly.Table` オブジェクトは `Instance` からアクセスされる関数参照などの不透明値のリサイズ可能な型付き配列です。
- [`WebAssembly.Tag()`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Tag)
  - : `WebAssembly.Tag` オブジェクトは、WebAssembly コードに対して、または WebAssembly コードから発生する WebAssembly 例外の型を定義します。
- [`WebAssembly.Exception()`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Exception)
  - : `WebAssembly.Exception` オブジェクトは、WebAssembly から JavaScript へ、または JavaScript から WebAssembly 例外ハンドラーへ発生する実行時例外を表します。
- [`WebAssembly.CompileError()`](/ja/docs/WebAssembly/Reference/JavaScript_interface/CompileError)
  - : WebAssembly `CompileError` オブジェクトを生成します。
- [`WebAssembly.LinkError()`](/ja/docs/WebAssembly/Reference/JavaScript_interface/LinkError)
  - : WebAssembly `LinkError` オブジェクトを生成します。
- [`WebAssembly.RuntimeError()`](/ja/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError)
  - : WebAssembly `RuntimeError` オブジェクトを生成します。

## プロジェクトの例

- [WASMSobel](https://github.com/JasonWeathersby/WASMSobel)
- 他の多くの例については [webassembly-examples](https://github.com/mdn/webassembly-examples/) リポジトリーを参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebAssembly on Mozilla Research](https://research.mozilla.org/)
- [webassembly.org](https://webassembly.org/)
- [WebAssembly articles on Mozilla Hacks blog](https://hacks.mozilla.org/category/webassembly/)
- [W3C WebAssembly Community Group](https://www.w3.org/community/webassembly/)
- [Emscripting a C Library to Wasm](https://web.dev/articles/emscripting-a-c-library)
