---
title: WebAssembly の概要
slug: WebAssembly/Guides/Concepts
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

この記事では、WebAssembly がどのように機能しているか、その目標、解決している問題、ウェブブラウザーのレンダリングエンジン内での動作などの概念について説明します。

## WebAssembly とは何か

WebAssembly は、現行のウェブブラウザーで実行できる新しい種類のコードで、新しい機能と大幅なパフォーマンスの向上を提供します。これは、主に手作業で記述することを意図したものではなく、C、C++、Rust などのソース言語の効果的なコンパイルターゲットとして設計されています。

これは、ウェブプラットフォームに巨大な影響を与えます。これにより、複数の言語で記述されたコードを、ネイティブに近い速度でウェブ上で実行する方法が提供され、これまで不可能だったクライアントアプリをウェブ上で実行することが可能になります。

さらに、WebAssembly コードを作成する方法を知らなくても、その機能を利用することができます。WebAssembly モジュールは、ウェブ (または Node.js) アプリにインポートして、JavaScript から使用できるように WebAssembly 関数を公開することができます。JavaScript フレームワークは、WebAssembly を使用して、ウェブ開発者が機能を簡単に利用できるようにしながら、大幅なパフォーマンスの向上と新しい機能を実現することができます。

## WebAssembly の目標

WebAssembly は [W3C WebAssembly Community Group](https://www.w3.org/community/webassembly/) 内で策定されるオープン標準として以下を目標に定めて作成されています。

- 高速で、高効率であり、ポータブルであること — WebAssembly のコードは [共通ハードウェア対応環境](http://webassembly.org/docs/portability/#assumptions-for-efficient-execution) を利用して異なるプラットフォーム間でネイティブ水準の速度で実行可能です。
- 可読性を持ちデバッグ可能であること — WebAssembly は低水準のアセンブリー言語ですが、人間が読めるテキスト形式があります（その仕様策定は終わっていないものの）。この形式は人の手で読み書きできて、デバッグもできます。
- 安全であること — WebAssembly は安全でサンドボックス化された実行環境上で動作するように設計されています。他のウェブ言語と同様に、ブラウザーに対して same-origin および権限ポリシーの確認を強制します。
- ウェブを破壊しないこと — WebAssembly は他のウェブ技術と協調し、後方互換性を維持するように設計されます。

> [!NOTE]
> WebAssembly はまたウェブの領域外の JavaScript 環境での利用も行います ([Non-web embeddings](http://webassembly.org/docs/non-web/) を参照)。

## WebAssembly はどのようにウェブプラットフォームに適合するのか

ウェブプラットフォームは 2 つの領域からなると考えることができます。

- ウェブアプリのコードを実行する仮想マシン (VM) 、例としてアプリを動作させる JavaScript コード。
- ウェブブラウザー / デバイスの機能をコントロールして物事を実現するためにウェブアプリが呼ぶことのできる [Web API](/ja/docs/Web/API) のセット ([DOM](/ja/docs/Web/API/Document_Object_Model)、 [CSSOM](/ja/docs/Web/API/CSS_Object_Model)、 [WebGL](/ja/docs/Web/API/WebGL_API)、 [IndexedDB](/ja/docs/Web/API/IndexedDB_API)、 [ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API) 等)。

以前、仮想マシンは JavaScript だけを読み込むことができました。 JavaScript は、今日のウェブにあるほとんどの問題を解決するのに十分強力なので、これはうまく動作しています。しかし、 3D ゲーム、仮想現実、拡張現実、コンピュータービジョン、画像/動画編集、その他ネイティブなパフォーマンスを必要とする多くの領域など、より集中的な使用例で JavaScript を使用しようとすると、パフォーマンスの問題に直面します（詳しいアイデアは [WebAssembly use cases](https://webassembly.org/docs/use-cases/) をご覧ください）。

加えて巨大な JavaScript アプリケーションのダウンロード、構造の解析とコンパイルのコストは異常に高いものになりえます。モバイルや他のリソースが限られたプラットフォームではこのようなパフォーマンスのボトルネックの影響をずっと強く受けることになります。

WebAssembly は JavaScript とは異なる言語ですが、置き換えを意図しているわけではありません。その代わり、JavaScript の足りない所を補強して併用し、ウェブ開発者に双方の以下のような利益を提供することを狙いとしています。

- JavaScript は高水準の言語であり、ウェブアプリケーションを作る上で十分な柔軟性と表現力を持っています。そして多くの利点 — 動的型付け言語である、コンパイルが必須でない、強力なフレームワーク、ライブラリーやツールを提供する豊富な土壌等を持っています。
- WebAssembly はネイティブに近いパフォーマンスで動作して、C++ や Rust のような低水準のメモリー管理を行う言語がウェブ上で動作するようコンパイルされる対象となる、コンパクトなバイナリー形式を持つ低水準なアセンブリーに似た言語です (WebAssembly は将来的にガベージコレクションによるメモリー管理を行う言語をサポートする[高レベルの目標](http://webassembly.org/docs/high-level-goals/)を持っていることに注意してください)。

ブラウザーにおける WebAssembly の登場によって、私たちが先述したような仮想マシンはこれから 2 つの種類の言語をロードして実行することになります — JavaScript と WebAssembly です。

必要に応じてこの異なったコードは互いを呼び出し合うことができます — [WebAssembly JavaScript API](/ja/docs/WebAssembly/Reference/JavaScript_interface) はエクスポートした WebAssembly のコードを普遍的に呼び出せる JavaScript 関数でラップし、WebAssembly のコードは通常の JavaScript 関数をインポートして同期的に呼び出せます。実際、WebAssembly のコードの基本単位はモジュールと呼ばれ、 WebAssembly のモジュールは ES モジュールと多くの対になる概念を持っています。

### WebAssembly の主要概念

ブラウザー上で WebAssembly がどのように動作するかを理解するため必要となる主要概念がいくつか存在します。これらのコンセプトはそれぞれが [WebAssembly JavaScript API](/ja/docs/WebAssembly/Reference/JavaScript_interface) に一対一で対応しています。

- **モジュール** (Module): ブラウザーによって実行可能な機械語にコンパイルされた WebAssembly のバイナリーを表します。モジュールはステートレスであるため、[`Blob`](/ja/docs/Web/API/Blob) のように、ウィンドウやウェブワーカーと（[`postMessage()`](/ja/docs/Web/API/MessagePort/postMessage) を経由して）共有することができます。モジュールは ES のモジュールのように import と export の宣言を行います。
- **メモリー** (Memory): WebAssembly の低水準なメモリーアクセス命令によって読み込みおよび書き込みが行われるバイト列を一次元の配列として保持している、リサイズ可能な ArrayBuffer です。
- **テーブル** (Table): メモリー内に（安全性および可搬性を維持するため）バイト列として保持することができなかった（関数等に対する）参照を保持しているリサイズ可能な型付き配列です。
- **インスタンス** (Instance): メモリー、テーブル、インポートされた値を含む実行時に利用されるすべての状態と対となるモジュールです。インスタンスは特定の import によって特定のグローバル環境にロードされた ES モジュールのようなものです。

JavaScript API はモジュール、メモリー、テーブルおよびインスタンスを作る機能を開発者に提供します。 WebAssembly のインスタンスが与えられれば、JavaScript はその中で export されたオブジェクトを、一般的な JavaScript で渡せる状態にされた関数同様に、同期的に呼び出すことができます。また任意の JavaScript の関数はその関数を WebAssembly のインスタンスに import することで WebAssembly のコードから同期的に呼び出されるようにすることもできます。

JavaScript は WebAssembly のコードがどのようにダウンロードされ、コンパイルされて実行されるかを完全に制御できるため、JavaScript 開発者は WebAssembly を単に効果的に高いパフォーマンスを発揮する JavaScript の機能のようにとらえることもできます。

将来的には、WebAssembly モジュールは（`<script type='module'>` を利用して）[ES モジュールのように読み込み可能](https://github.com/WebAssembly/proposals/issues/12) となり、これは JavaScript が WebAssembly モジュールを ES モジュールと同じくらい簡単に取得、コンパイル、インポートできるようになることを意味します。

## WebAssembly をどのようにアプリで用いるか

ここまで私たちは WebAssembly がウェブプラットフォームに付加する基本的な原則について話しました。つまりコードのバイナリー形式とバイナリーコードを読み込み実行する API について。ここからは実際にこれらの原則をどのように活かすのかについて話します。

WebAssembly のエコシステムはまだ黎明期の状態にあります。もっと多くのツール群によってこの状況が進展するのは間違いありません。現時点では主に 4 つの入口があります。

- [Emscripten](https://emscripten.org/) を用いて C/C++ 製アプリケーションを移植する。
- アセンブリー水準で WebAssembly を記述もしくは直接生成する。
- Rust アプリケーションを書き、 WebAssembly を出力ターゲットとする。
- TypeScript によく似た [AssemblyScript](https://assemblyscript.org/) を用いて、 WebAssembly バイナリーに出力する

これらの選択肢について考えてみましょう。

### C/C++ からの移植

Wasm コードを作成するための多くのオプションのうちの 2 つは、オンラインの Wasm アセンブラーまたは [Emscripten](https://emscripten.org/) です。 Wasm のオンラインアセンブラーには、次のようなものがあります。

- [WasmFiddle++](https://anonyco.github.io/WasmFiddlePlusPlus/)
- [WasmExplorer](https://mbebenita.github.io/WasmExplorer/)

これらは、どこから始めるべきかを把握しようとしている人にとっては素晴らしいリソースですが、 Emscripten のツールと最適化には欠けています。

Emscripten ツールは C/C++ ソースコードを取得し、それを Wasm モジュール、加えてモジュールを読み出して実行するために必要な JavaScript に "glue" コードとコードの結果を表示するための HTML 文書にコンパイルおよび出力します。

![図: Emscripten は C/C++ ソースコードをコンパイルし、JavaScript グルーコードを伴う HTML 文書であるWasm モジュールに変換します。](emscripten-diagram.png)

簡潔に言えば、このプロセスは以下のようになります。

1. Emscripten は最初に C/C++ を clang + LLVM — 完成度の高いオープンソースの C/C++ コンパイラー・ツールチェインであり、OSX の XCode の一部として提供される等の利用例が有る、に注入します。
2. Emscripten が clang + LLVM によるコンパイル結果を Wasm バイナリーに変換します。
3. それ自体だけでは WebAssembly は現時点で DOM に直接アクセスできません; JavaScript を呼び出して、整数型もしくは浮動小数点型の基本データを渡せるだけです。そのため、ウェブ API にアクセスするためには、WebAssembly は JavaScript を呼び出す必要が有り、この時点でウェブ API の呼び出しが行われます。そのため Emscripten は結果を得るための HTML と JavaScript のグルーコードを生成します。

> [!NOTE]
> 将来的に [WebAssembly に直接ウェブ API を呼ばせることを許容する](https://github.com/WebAssembly/gc/blob/master/README.md)計画があります。

JavaScript グルーコードは多くの人が想像するほど簡単な構造をしていません。はじめに、 Emscripten は [SDL](https://en.wikipedia.org/wiki/Simple_DirectMedia_Layer)、 [OpenGL](https://en.wikipedia.org/wiki/OpenGL)、 [OpenAL](https://en.wikipedia.org/wiki/OpenAL) および [POSIX](https://en.wikipedia.org/wiki/POSIX) の一部といった主な C/C++ ライブラリーを組み込みます。これらのライブラリー群はウェブ API の観点から組み込まれ、各々が WebAssembly を既存のウェブ API に接続するためにいくつかの JavaScript グルーコードを必要とします。

そのためグルーコードの一部は C/C++ コードによって利用されるそれぞれのライブラリーの機能を組み込みます。グルーコードはまた Wasm ファイルを取得、ロード、実行するため先述した WebAssembly JavaScript API を呼び出すロジックも含んでいます。

生成された HTML 文章は JavaScript グルーコードのファイルを読み込んで {{htmlelement("textarea")}} に標準出力を書き出します。もしアプリケーションが OpenGL を利用している場合、その HTML はまた出力先となる {{htmlelement("canvas")}} 要素を含みます。Emscripten の出力結果を修正して必要とするウェブアプリに変換するのは非常に簡単です。

Emscripten に関する完全なドキュメントは [emscripten.org](https://emscripten.org) で参照でき、このツールチェーンの組み込みと自身の C/C++ アプリを Wasm へとコンパイルするガイドとしては [C/C++ を WebAssembly にコンパイルする](/ja/docs/WebAssembly/Guides/C_to_Wasm) が参考になります。

### WebAssembly を直接記述する

独自のコンパイラー、ツール、あるいは WebAssembly を実行時に生成する JavaScript のライブラリーを作りたいとお考えですか？

実際のアセンブリー言語同様、 WebAssembly バイナリー形式はテキスト表現を持っています — これらは一対一で対応しています。なんらかの [WebAssemby テキスト表現バイナリー変換ツール](https://webassembly.org/getting-started/advanced-tools/) を用いることでテキスト表現を直接記述してバイナリー形式に変換することができます。

この手順に関しては、 [WebAssembly テキスト表現を Wasm 形式に変換する](/ja/docs/WebAssembly/Guides/Text_format_to_Wasm) の項目を参照ください。

### WebAssembly をターゲットとした Rust の記述

Rust WebAssembly ワーキンググループの不断の仕事のおかげで、Rust コードを書いて WebAssembly にコンパイルすることも可能です。必要なツールチェーンをインストールし、サンプル Rust プログラムを WebAssembly npm パッケージにコンパイルし、ウェブアプリケーションのサンプルを使用して、 [Rust から WebAssembly へのコンパイル](/ja/docs/WebAssembly/Guides/Rust_to_Wasm)の記事を読むことができます。

### AssemblyScript の使用

C や Rust の詳細を学ぶ必要なく、 TypeScript のような慣れ親しんだ言語の快適さの中で WebAssembly を試したいウェブ開発者にとって、 AssemblyScript は最良の選択肢になるでしょう。 AssemblyScript は TypeScript の厳密なバージョンを WebAssembly にコンパイルし、ウェブ開発者は Prettier、ESLint、VS Code IntelliSense など、使い慣れた TypeScript 互換のツールを引き続き使用することができます。ドキュメントは <https://www.assemblyscript.org/> で確認することができます。

## まとめ

本項目では WebAssembly が何であるか、どういった利便性が有るか、どのようにしてウェブに適用するかとどのように活用するかについて説明しました。

## 関連情報

- [WebAssembly articles on Mozilla Hacks blog](https://hacks.mozilla.org/category/webassembly/)
- [WebAssembly on Mozilla Research](https://research.mozilla.org/)
- [WebAssembly コードの読み込みと実行](/ja/docs/WebAssembly/Guides/Loading_and_running) — ウェブページでどのようにして自作の WebAssembly モジュールをロードするかについての理解が深まります。
- [WebAssembly JavaScript API の使用](/ja/docs/WebAssembly/Guides/Using_the_JavaScript_API) — WebAssembly JavaScript API のその他の利用法について理解が深まります。
