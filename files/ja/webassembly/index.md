---
title: WebAssembly
slug: WebAssembly
---
{{WebAssemblySidebar}}

WebAssembly はモダンなウェブブラウザーで実行できる新しいタイプのコードです。ネイティブに近いパフォーマンスで動作するコンパクトなバイナリー形式の低レベルなアセンブリ風言語です。さらに、 C/C++ や Rust のような言語のコンパイル対象となって、それらの言語をウェブ上で実行することができます。 WebAssembly は JavaScript と並行して動作するように設計されているため、両方を連携させることができます。

## 概要

WebAssembly はウェブプラットフォームに大きな影響を与えます — 以前ではできなかったようなウェブ上で動作するクライアントアプリケーションのために、複数の言語で記述されたコードをウェブ上でネイティブに近いスピードで実行する方法を提供します。

WebAssembly は JavaScript を補完、並行して動作するように設計されています — WebAssembly JavaScript API を使用して、 WebAssembly モジュールを JavaScript アプリケーションにロードし、2 つの間で機能を共有できます。これにより、WebAssembly コードの記述方法を知らなくても、 WebAssembly のパフォーマンスとパワー、JavaScript の表現力と柔軟性を同じアプリケーションで活用できます。

さらに、[W3C WebAssembly Working Group](https://www.w3.org/wasm/) と [Community Group](https://www.w3.org/community/webassembly/) を介して、ウェブ標準として開発されており、主要なブラウザーベンダーも積極的に参加しています。

## ガイド

- [WebAssembly のコンセプト](/ja/docs/WebAssembly/Concepts)
  - : まずは WebAssembly の高レベルなコンセプト— WebAssembly とはなにか、有用性、ウェブプラットフォーム (またはそれ以上) にどのように適合するか、どのように使用するか — の理解から始めてください。
- [C/C++ から WebAssembly にコンパイルする](/ja/docs/WebAssembly/C_to_wasm)
  - : C/C++ で書いたコードを[Emscripten](/ja/docs/Mozilla/Projects/Emscripten/) のようなツールを使って .wasm にコンパイルできます。どのように動作するか確認してみましょう。
- [既存の C モジュール から WebAssembly へのコンパイル](/ja/docs/WebAssembly/existing_C_to_wasm)
  - : WebAssembly のコアユースケースは、既存の C ライブラリのエコシステムを利用し、開発者が Web 上でそれらを使用できるようにすることです。
- [Rust から WebAssembly へのコンパイル](/ja/docs/WebAssembly/rust_to_wasm)
  - : Rust コードを書いていれば、WebAssembly にコンパイルすることができます！このチュートリアルでは、Rust プロジェクトをコンパイルして既存の Web アプリケーションで使用するために知っておく必要があるすべてのことを説明します。
- [WebAssembly コードのロードと実行](/ja/docs/WebAssembly/Loading_and_running)
  - : .wasm を手に入れたら、この記事では、[Fetch](/ja/docs/Web/API/Fetch_API) または [XHR](/ja/docs/Web/API/XMLHttpRequest) API と [WebAssembly JavaScript](/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly) API を組み合わせて、フェッチコンパイル、インスタンス化する方法について説明します。
- [WebAssembly JavaScript API の使用](/ja/docs/WebAssembly/Using_the_JavaScript_API)
  - : .wasm モジュールをロードしたら、それを使いたいでしょう。この記事では、WebAssembly JavaScript API を用いて WebAssembly を使用する方法を説明します。
- [エクスポートされた WebAssembly 関数](/ja/docs/WebAssembly/Exported_functions)
  - : エクスポートされた WebAssembly 関数は、WebAssembly 関数の JavaScript リフレクションであり、JavaScript から WebAssembly コードを呼び出すことができます。 この記事では、それらが何なのか説明します。
- [WebAssembly テキストフォーマットを理解する](/ja/docs/WebAssembly/Understanding_the_text_format)
  - : この記事では wasm テキスト形式について説明します。これは .wasm モジュールの低レベルなテキスト表現で、デバッグ時にブラウザーの開発者ツールに表示されます。
- [WebAssembly テキストフォーマットから wasm に変換する](/ja/docs/WebAssembly/Text_format_to_wasm)
  - : この記事では、テキスト形式で書かれた WebAssembly モジュールを .wasm バイナリに変換する方法について説明します。

## API リファレンス

- {{jsxref("Global_objects/WebAssembly", "WebAssembly")}}
  - : このオブジェクトは、 WebAssembly に関連する全ての機能の名前空間として振る舞います。
- {{jsxref("Global_objects/WebAssembly/Global", "WebAssembly.Global()")}}
  - : `WebAssembly.Global` オブジェクトは JavaScript と 1 つ以上の {{jsxref("WebAssembly.Module")}} インスタンス(のインポート/エクスポート可能な値)を横断してアクセスできるグローバル変数のインスタンスを表現します。これによって、複数モジュールでの動的リンクを実現できます。
- {{jsxref("Global_objects/WebAssembly/Module", "WebAssembly.Module()")}}
  - : `WebAssembly.Module` オブジェクトにはブラウザーでコンパイルされたステートレスな WebAssembly コードが含まれており、効率的に [Worker で共有](/ja/docs/Web/API/Worker/postMessage)したり、[IndexedDB にキャッシュ](/ja/docs/WebAssembly/Caching_modules)したり、複数回インスタンス化したりすることができます。
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
- 他の多くの例については [webassembly-examples](https://github.com/mdn/webassembly-examples/) レポジトリーを参照してください。

## 仕様書

| 仕様書                                   | 状態                                 | 備考                                |
| ---------------------------------------- | ------------------------------------ | ----------------------------------- |
| {{SpecName('WebAssembly JS')}} | {{Spec2('WebAssembly JS')}} | JavaScript API の初回ドラフト定義。 |

## ブラウザーの互換性

{{Compat("javascript.builtins.WebAssembly")}}

## 関連情報

- [WebAssembly on Mozilla Research](https://research.mozilla.org/webassembly/)
- [webassembly.org](http://webassembly.org/)
- [WebAssembly articles on Mozilla Hacks blog](https://hacks.mozilla.org/category/webassembly/)
- [W3C WebAssembly Community Group](https://www.w3.org/community/webassembly/)
- [Large-Allocation HTTP header](/ja/docs/Web/HTTP/Headers/Large-Allocation)
- [Emscripting a C Library to Wasm](https://developers.google.com/web/updates/2018/03/emscripting-a-c-library)
