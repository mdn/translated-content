---
title: WebAssembly の概要
slug: WebAssembly/Concepts
---
{{WebAssemblySidebar}}

この記事では、 WebAssembly がどのように機能しているか、その目標、解決している問題、ウェブブラウザーのレンダリングエンジン内での動作などの概念について説明します。

## WebAssembly とは何か

WebAssembly は最近のウェブブラウザーで動作し、新たな機能と大幅なパフォーマンス向上を提供する新しい種類のコードです。基本的に直接記述ではなく、C、C++、Rust 等の低水準の言語にとって効果的なコンパイル対象となるように設計されています。

この機能はウェブプラットフォームにとって大きな意味を持ちます。 — ウェブ上で動作するクライアントアプリで従来は実現できなかった、ネイティブ水準の速度で複数の言語で記述されたコードをウェブ上で動作させる方法を提供します。

それ以上に、その利点を享受するために利用者は WebAssembly のコードをどのように作成するのか知る必要さえ有りません。 WebAssembly モジュールはウェブ (あるいは Node.js) アプリにインポートする事ができ、 WebAssembly の機能は JavaScript を経由して他の領域から利用できる状態になります。 JavaScript 製フレームワークでは大幅なパフォーマンス改善と開発中の新機能をウェブ開発者が容易に利用できるようにするために WebAssembly を用いることができます。

## WebAssembly の目標

WebAssembly は [W3C WebAssembly Community Group](https://www.w3.org/community/webassembly/) 内で策定されるオープン標準として以下を目標に定めて作成されています:

- 高速で、高効率であり、ポータブルである事 — WebAssembly のコードは [共通ハードウェア対応環境](http://webassembly.org/docs/portability/#assumptions-for-efficient-execution) を利用して異なるプラットフォーム間でネイティブ水準の速度で実行可能です。
- 可読性を持ちデバッグ可能である事 — WebAssembly は低水準のアセンブリ言語ですが、人間が読めるテキストフォーマットを持ちます（その仕様策定は終わっていないものの）。このフォーマットは人の手で読み書きできて、デバッグもできます。
- 安全である事 — WebAssembly は安全でサンドボックス化された実行環境上で動作するように設計されています。他のウェブ言語と同様に、ブラウザーに対して same-origin および権限ポリシーの確認を強制します。
- ウェブを破壊しない事 — WebAssembly は他のウェブ技術と協調し、後方互換性を維持するように設計されます。

> **Note:** **メモ**: WebAssembly はまたウェブの領域外の JavaScript 環境での利用も行います ([Non-web embeddings](http://webassembly.org/docs/non-web/) を参照)。

## WebAssembly はどのようにウェブプラットフォームに適合するのか

ウェブプラットフォームは 2 つの領域からなると考える事ができます:

- ウェブアプリのコードを実行する仮想マシン (VM) 、例としてアプリを動作させる JavaScript コード。
- ウェブブラウザー / デバイスの機能をコントロールして物事を実現するためにウェブアプリが呼ぶことのできる [Web API](/ja/docs/Web/API) のセット ([DOM](/ja/docs/Web/API/Document_Object_Model)、 [CSSOM](/ja/docs/Web/API/CSS_Object_Model)、 [WebGL](/ja/docs/Web/API/WebGL_API)、 [IndexedDB](/ja/docs/Web/API/IndexedDB_API)、 [Web Audio API](/ja/docs/Web/API/Web_Audio_API) 等)。

歴史的に、仮想マシンは JavaScript を読み込む事しかできませんでした。 JavaScript が今日のウェブで人々が遭遇する多くの問題を解決する上で十分にパワフルであるため私達にとって仮想マシンはとても有効でした。しかしながら私達は JavaScript をもっと厳しい状況、3D ゲーム、VR に AR、コンピュータービジョン、画像/動画編集等ネイティブの性能が要求されるような多くの領域 (これら以外の利用アイディアに関しては [WebAssembly use cases](http://webassembly.org/docs/use-cases/) を参照) において用いる際にパフォーマンス上の問題に遭遇するようになっています。

加えて巨大な JavaScript アプリケーションのダウンロード、構造の解析とコンパイルのコストは異常に高いものになりえます。モバイルや他のリソースが限られたプラットフォームではこのようなパフォーマンスのボトルネックの影響をずっと強く受ける事になります。

WebAssembly は JavaScript と異なる言語ですが、その置き換えを意図していません。その代わり、JavaScript の足りない所を補填して併用し、ウェブ開発者に双方の以下のような利益を提供する事を狙いとしています:

- JavaScript は高水準の言語であり、ウェブアプリケーションを作る上で十分な柔軟性と表現力を持っています。そして多くの利点 — 動的型付け言語である、コンパイルが必須でない、パワフルなフレームワーク、ライブラリやツールを提供する豊富な土壌等を持っています。
- WebAssembly はネイティブに近いパフォーマンスで動作して、C++ や Rust のような低水準のメモリー管理を行う言語がウェブ上で動作するようコンパイルされる対象となる、コンパクトなバイナリー形式を持つ低水準なアセンブリに似た言語です (WebAssembly は将来的にガベージコレクションによるメモリー管理を行う言語をサポートする [高レベルの目標](http://webassembly.org/docs/high-level-goals/) を持っている事に注意してください)。

ブラウザーにおいての WebAssembly の登場によって、私たちが先述したような仮想マシンはこれから 2 つの種類の言語をロードして実行することになります — JavaScript と WebAssembly です。

必要に応じてこの異なったコードは互いを呼び出し合う事ができます — [WebAssembly JavaScript API](/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly) はエクスポートした WebAssembly のコードを普遍的に呼び出せる JavaScript 関数でラップし、WebAssembly のコードは通常の JavaScript 関数をインポートして同期的に呼び出せます。実際、WebAssembly のコードの基本単位はモジュールと呼ばれ、 WebAssembly のモジュールは ES2015 のモジュールと多くの対になる概念を持っています。

### WebAssembly のキーコンセプト

ブラウザー上で WebAssembly がどのように動作するかを理解するため必要となるキーコンセプトがいくつか存在します。これらのコンセプトはそれぞれが [WebAssembly JavaScript API](/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly) に一対一で対応しています。

- **Module (モジュール)**: ブラウザーによって実行可能な機械語にコンパイルされた WebAssembly のバイナリーに対応します。モジュールはステートレスであるため、[Blob](/ja/docs/Web/API/Blob) のように、明示的に [IndexedDB にキャッシュ](/ja/docs/WebAssembly/Caching_modules) できたり window やウェブワーカーと ( [`postMessage()`](/ja/docs/Web/API/MessagePort/postMessage) を経由して ) 共有する事ができます。モジュールは ES2015 のモジュールのように import と export の宣言を行います。
- **Memory (メモリー)**: WebAssembly の低水準なメモリーアクセス命令によって読み込みおよび書き込みが行われるバイト列を一次元の配列として保持している、リサイズ可能な ArrayBuffer です。
- **Table (テーブル)**: メモリー内に (安全性およびポータブル性を維持するため) バイト列として保持することができなかった (関数等に対する) 参照を保持しているリサイズ可能な型付き配列です。
- **Instance (インスタンス)**: メモリー、テーブル、インポートされた値を含む実行時に利用されるすべての状態と対となるモジュールです。インスタンスは特定の import によって特定のグローバル環境にロードされた ES2015 におけるモジュールのような物です。

JavaScript API はモジュール、メモリー、テーブルおよびインスタンスを作る機能を開発者に提供します。 WebAssembly のインスタンスが与えられれば、 JavaScript はその中で export されたオブジェクトを、一般的な JavaScript で渡せる状態にされた関数同様に、同期的に呼び出すことができます。また任意の JavaScript の関数はその関数を WebAssembly のインスタンスに import する事で WebAssembly のコードから同期的に呼び出されるようにする事もできます。

JavaScript は WebAssembly のコードがどのようにダウンロードされ、コンパイルされて実行されるかを完全に制御できるため、JavaScript 開発者は WebAssembly を単に効果的に高いパフォーマンスを発揮する JavaScript の機能のようにとらえることもできます。

将来的には、 WebAssembly モジュールは (`<script type='module'>` を利用して) [ES2015 モジュールのようにロード可能](https://github.com/WebAssembly/proposals/issues/12) となり、これは JavaScript が WebAssembly モジュールを ES2015 モジュールと同じくらい簡単に取得、コンパイル、インポートできるようになる事を意味します。

## WebAssembly をどのようにアプリで用いるか

ここまで私たちは WebAssembly がウェブプラットフォームに付加する基本的な原則について話しました。つまりコードのバイナリー形式とバイナリーコードを読み込み実行する API について。ここからは実際にこれらの原則をどのように活かすのかについて話します。

WebAssembly のエコシステムはまだ黎明期の状態にあります。もっと多くのツール群によってこの状況が進展するのは間違いありません。現時点では主に 4 つの入口があります。

- [Emscripten](/ja/docs/Mozilla/Projects/Emscripten) を用いて C/C++ 製アプリケーションをポーティングする。
- アセンブリ水準で WebAssembly を記述もしくは直接生成する。
- Rust アプリケーションを書き、 WebAssembly を出力ターゲットとする。
- TypeScript によく似た [AssemblyScript](https://assemblyscript.org/) を用いて、 WebAssembly バイナリーに出力する

これらの選択肢について考えてみましょう。

### C/C++ からのポーティング

WASM コードを作成するための多くのオプションのうちの 2 つは、オンラインの Wasm アセンブラまたは [Emscripten](/ja/docs/Mozilla/Projects/Emscripten) です。 WASM のオンラインアセンブラには、次のようなものがあります。

- [WasmFiddle](https://wasdk.github.io/WasmFiddle/)
- [WasmFiddle++](https://anonyco.github.io/WasmFiddlePlusPlus/)
- [WasmExplorer](https://mbebenita.github.io/WasmExplorer/)

これらは、どこから始めるべきかを把握しようとしている人にとっては素晴らしいリソースですが、 Emscripten のツールと最適化には欠けています。

Emscripten ツールは C/C++ ソースコードを取得し、それを .wasm モジュール、加えてモジュールを読みだして実行するために必要な JavaScript に "glue" コードとコードの結果を表示するための HTML 文章にコンパイルおよび出力します。

![](https://mdn.mozillademos.org/files/14647/emscripten-diagram.png)

簡潔に言えば、このプロセスは以下のような物になります。

1. Emscripten は最初に C/C++ を Clang + LLVM — 完成度の高いオープンソースの C/C++ コンパイラ・ツールチェインであり、OSX の XCode の一部として提供される等の利用例が有る、に注入します。
2. Emscripten が Clang + LLVM によるコンパイル結果を .wasm バイナリーに変換します。
3. それ自体だけでは WebAssembly は現時点で DOM に直接アクセスできません; JavaScript を呼び出して、整数型もしくは浮動小数点型の基本データを渡せるだけです。そのため、ウェブ API にアクセスするためには、WebAssembly は JavaScript を呼び出す必要が有り、この時点でウェブ API の呼び出しが行われます。そのため Emscripten は結果を得るための HTML と JavaScript のグルーコードを生成します。

> **Note:** **メモ**: 将来的に [WebAssembly に直接ウェブ API を呼ばせる事を許容する](https://github.com/WebAssembly/gc/blob/master/README.md) 計画があります。

JavaScript グルーコードは多くの人が想像するほど簡単な構造をしていません。はじめに、 Emscripten は [SDL](https://en.wikipedia.org/wiki/Simple_DirectMedia_Layer)、 [OpenGL](https://en.wikipedia.org/wiki/OpenGL)、 [OpenAL](https://en.wikipedia.org/wiki/OpenAL) および [POSIX](https://en.wikipedia.org/wiki/POSIX) の一部といった主な C/C++ ライブラリを組み込みます。これらのライブラリ群はウェブ API の観点から組み込まれ、各々が WebAssembly を既存のウェブ API に接続するためにいくつかの JavaScript グルーコードを必要とします。

そのためグルーコードの一部は C/C++ コードによって利用されるそれぞれのライブラリの機能を組み込みます。グルーコードはまた .wasm ファイルを取得、ロード、実行するため先述した WebAssembly JavaScript API を呼び出すロジックも含んでいます。

生成された HTML 文章は JavaScript グルーコードのファイルを読み込んで {{htmlelement("textarea")}} に標準出力を書き出します。もしアプリケーションが OpenGL を利用している場合、その HTML はまた出力先となる {{htmlelement("canvas")}} 要素を含みます。Emscripten の出力結果を修正して必要とするウェブアプリに変換するのは非常に簡単です。

Emscripten に関する完全なドキュメントは [emscripten.org](https://emscripten.org) で参照でき、このツールチェインの組み込みと自身の C/C++ アプリを wasm へとコンパイルするガイドとしては [C/C++ を WebAssembly にコンパイルする](/ja/docs/WebAssembly/C_to_wasm) が参考になります。

### 直接 WebAssembly を記述する

独自のコンパイラ、ツール、あるいは WebAssembly を実行時に生成する JavaScript のライブラリを作りたいとお考えですか ?

実際のアセンブリ言語同様、 WebAssembly バイナリー形式はテキスト表現を持っています — これらは一対一で対応しています。なんらかの [WebAssemby テキスト表現バイナリー変換ツール](https://webassembly.org/getting-started/advanced-tools/) を用いることでテキスト表現を直接記述してバイナリー形式に変換することができます。

この手順に関しては、 [WebAssembly テキスト表現を wasm 形式に変換する](/ja/docs/WebAssembly/Text_format_to_wasm) の項目を参照ください。

### WebAssembly をターゲットとした Rust の記述

Rust WebAssembly ワーキンググループの不断の仕事のおかげで、Rust コードを書いて WebAssembly にコンパイルすることも可能です。必要なツールチェーンをインストールし、サンプル Rust プログラムを WebAssembly npm パッケージにコンパイルし、ウェブアプリケーションのサンプルを使用して、 [Rust から WebAssembly へのコンパイル](/ja/docs/WebAssembly/Rust_to_wasm)の記事を読むことができます。

### AssemblyScript の使用

C や Rust を学ぶ必要なく WebAssembly を試してみたいウェブ開発者には、 AssemblyScript が最良の選択肢です。これは小さなバンドルを生成し、 C や Rust と比較するとやや遅い程度です。ドキュメントは <https://assemblyscript.org/> でチェックすることができます。

## まとめ

本項目では WebAssembly が何であるか、どういった利便性が有るか、どのようにしてウェブに適用するかとどのように活用するかについて説明しました。

## 関連情報

- [WebAssembly articles on Mozilla Hacks blog](https://hacks.mozilla.org/category/webassembly/)
- [WebAssembly on Mozilla Research](https://research.mozilla.org/webassembly/)
- [WebAssembly コードのロードと実行](/ja/docs/WebAssembly/Loading_and_running) — ウェブページでどのようにして自作の WebAssembly モジュールをロードするかについての理解が深まります。
- [WebAssembly JavaScript API の使用](/ja/docs/WebAssembly/Using_the_JavaScript_API) — WebAssembly JavaScript API のその他の利用法について理解が深まります。
