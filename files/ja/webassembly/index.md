---
title: WebAssembly
slug: WebAssembly
l10n:
  sourceCommit: 73cc9b528b45a869992d268f119853021b33d454
---

{{WebAssemblySidebar}}

WebAssembly は現代のウェブブラウザーで実行できる新しい種類のコードです。ネイティブに近いパフォーマンスで動作する、コンパクトなバイナリー形式の低レベルなアセンブリー風言語です。さらに、 C/C++、C# や Rust などの言語のコンパイル先となり、それらの言語をウェブ上で実行することができます。 WebAssembly は JavaScript と並行して動作するように設計されているため、両方を連携させることができます。

## 概要

WebAssembly はウェブプラットフォームに大きな影響を与えます。以前ではできなかったようなウェブ上で動作するクライアントアプリケーションのために、複数の言語で記述されたコードをウェブ上でネイティブに近い速度で実行する方法を提供します。

WebAssembly は JavaScript を補完、並行して動作するように設計されています。 WebAssembly JavaScript API を使用して、 WebAssembly モジュールを JavaScript アプリケーションに読み込み、2 つの間で機能を共有できます。これにより、WebAssembly コードの記述方法を知らなくても、 WebAssembly のパフォーマンスとパワー、 JavaScript の表現力と柔軟性を同じアプリケーションで活用できます。

さらに、 [W3C WebAssembly Working Group](https://www.w3.org/wasm/) と[コミュニティグループ](https://www.w3.org/community/webassembly/)を介して、ウェブ標準として開発されており、主要なブラウザーベンダーも積極的に参加しています。

## ガイド

- [WebAssembly の概要](/ja/docs/WebAssembly/Concepts)
  - : まずは WebAssembly の大まかな概念 — WebAssembly とはなにか、有用性、ウェブプラットフォーム (またはそれ以上) にどのように適合するか、どのように使用するか — の理解から始めてください。
- [C/C++ から WebAssembly へのコンパイル](/ja/docs/WebAssembly/C_to_Wasm)
  - : C/C++ で書いたコードを [Emscripten](https://emscripten.org/) のようなツールを使って .wasm にコンパイルできます。どのように動作するか確認してみましょう。
- [既存の C モジュールから WebAssembly へのコンパイル](/ja/docs/WebAssembly/existing_C_to_Wasm)
  - : WebAssembly のコアユースケースは、既存の C ライブラリーのエコシステムを利用し、開発者がウェブ上でそれらを使用できるようにすることです。
- [Rust から WebAssembly へのコンパイル](/ja/docs/WebAssembly/Rust_to_Wasm)
  - : Rust コードを書いていれば、WebAssembly にコンパイルすることができます。このチュートリアルでは、Rust プロジェクトをコンパイルして既存のウェブアプリケーションで使用するために知っておく必要があるすべてのことを説明します。
- [WebAssembly コードの読み込みと実行](/ja/docs/WebAssembly/Loading_and_running)
  - : .wasm を手に入れたら、この記事ではそれを読み取り、コンパイルし、インスタンス化する方法を説明します。 [WebAssembly JavaScript](/ja/docs/WebAssembly/JavaScript_interface) API と [Fetch](/ja/docs/Web/API/Fetch_API) または [XHR](/ja/docs/Web/API/XMLHttpRequest) API とを組み合わせます。
- [WebAssembly JavaScript API の使用](/ja/docs/WebAssembly/Using_the_JavaScript_API)
  - : .wasm モジュールを読み込んだら、それを使いたくなるでしょう。この記事では、 WebAssembly JavaScript API を用いて WebAssembly を使用する方法を説明します。
- [エクスポートされた WebAssembly 関数](/ja/docs/WebAssembly/Exported_functions)
  - : エクスポートされた WebAssembly 関数は、WebAssembly 関数の JavaScript リフレクションであり、 JavaScript から WebAssembly コードを呼び出すことができます。 この記事では、それらが何なのか説明します。
- [WebAssembly テキスト形式を理解する](/ja/docs/WebAssembly/Understanding_the_text_format)
  - : この記事では wasm テキスト形式について説明します。これは .wasm モジュールの低レベルなテキスト表現で、デバッグ時にブラウザーの開発者ツールに表示されます。
- [WebAssembly テキスト形式から wasm に変換する](/ja/docs/WebAssembly/Text_format_to_Wasm)
  - : この記事では、テキスト形式で書かれた WebAssembly モジュールを .wasm バイナリーに変換する方法について説明します。

## API リファレンス

- [WebAssembly の制御フロー](/ja/docs/WebAssembly/Reference/Control_flow)
  - : WebAssembly の制御フロー操作の設定に関するリファレンスドキュメントです。
- {{jsxref("Global_objects/WebAssembly", "WebAssembly")}}
  - : このオブジェクトは、 WebAssembly に関連する全ての機能の名前空間として振る舞います。
- {{jsxref("Global_objects/WebAssembly/Global", "WebAssembly.Global()")}}
  - : `WebAssembly.Global` オブジェクトは JavaScript と 1 つ以上の {{jsxref("WebAssembly.Module")}} インスタンス（のインポート/エクスポート可能な値）を横断してアクセスできるグローバル変数のインスタンスを表現します。これによって、複数モジュールでの動的リンクを実現できます。
- {{jsxref("Global_objects/WebAssembly/Module", "WebAssembly.Module()")}}
  - : `WebAssembly.Module` オブジェクトにはブラウザーでコンパイルされたステートレスな WebAssembly コードが含まれており、効率的に[ワーカーで共有](/ja/docs/Web/API/Worker/postMessage)したり、複数回インスタンス化したりすることができます。
- {{jsxref("Global_objects/WebAssembly/Instance", "WebAssembly.Instance()")}}
  - : `WebAssembly.Instance` オブジェクトはステートフルで、実行可能な `Module` のインスタンスです。`Instance` オブジェクトには JavaScript から WebAssembly コードを呼び出すことを許可された[エクスポートされた WebAssembly 関数](/ja/docs/WebAssembly/Exported_functions)が含まれます。
- {{jsxref("Global_objects/WebAssembly/instantiateStreaming", "WebAssembly.instantiateStreaming()")}}
  - : `WebAssembly.instantiate()` 関数は WebAssembly コードをコンパイル、インスタンス化するための主要な API で、`Module` と、その最初の `Instance` を返します。
- {{jsxref("Global_objects/WebAssembly/Memory", "WebAssembly.Memory()")}}
  - : `WebAssembly.Memory` オブジェクトはリサイズ可能な {{jsxref("Global_objects/ArrayBuffer", "ArrayBuffer")}} で、 `Instance` からアクセスされる生のバイト列を保持します。
- {{jsxref("Global_objects/WebAssembly/Table", "WebAssembly.Table()")}}
  - : `WebAssembly.Table` オブジェクトは `Instance` からアクセスされる関数参照などの不透明値のリサイズ可能な型付き配列です。
- {{jsxref("WebAssembly.CompileError()")}}
  - : WebAssembly `CompileError` オブジェクトを生成します。
- {{jsxref("WebAssembly.LinkError()")}}
  - : WebAssembly `LinkError` オブジェクトを生成します。
- {{jsxref("WebAssembly.RuntimeError()")}}
  - : WebAssembly `RuntimeError` オブジェクトを生成します。

## 例

- [WASMSobel](https://github.com/JasonWeathersby/WASMSobel)
- 他の多くの例については [webassembly-examples](https://github.com/mdn/webassembly-examples/) リポジトリーを参照してください。

## 仕様書

{{Specifications}}

## 関連情報

- [WebAssembly on Mozilla Research](https://research.mozilla.org/)
- [webassembly.org](https://webassembly.org/)
- [WebAssembly articles on Mozilla Hacks blog](https://hacks.mozilla.org/category/webassembly/)
- [W3C WebAssembly Community Group](https://www.w3.org/community/webassembly/)
- [Emscripting a C Library to Wasm](https://web.dev/emscripting-a-c-library/)
