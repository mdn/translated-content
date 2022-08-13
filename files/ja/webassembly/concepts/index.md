---
title: WebAssembly の概要
slug: WebAssembly/Concepts
tags:
  - C
  - C++
  - Emscripten
  - JavaScript
  - Web プラットフォーム
  - WebAssembly
  - rust
translation_of: WebAssembly/Concepts
---
<div>{{WebAssemblySidebar}}</div>

<p class="summary">この記事では、 WebAssembly がどのように機能しているか、その目標、解決している問題、ウェブブラウザーのレンダリングエンジン内での動作などの概念について説明します。</p>

<h2 id="What_is_WebAssembly" name="What_is_WebAssembly">WebAssembly とは何か</h2>

<p>WebAssembly は最近のウェブブラウザーで動作し、新たな機能と大幅なパフォーマンス向上を提供する新しい種類のコードです。基本的に直接記述ではなく、C、C++、Rust 等の低水準の言語にとって効果的なコンパイル対象となるように設計されています。</p>

<p>この機能はウェブプラットフォームにとって大きな意味を持ちます。 — ウェブ上で動作するクライアントアプリで従来は実現できなかった、ネイティブ水準の速度で複数の言語で記述されたコードをウェブ上で動作させる方法を提供します。</p>

<p>それ以上に、その利点を享受するために利用者は WebAssembly のコードをどのように作成するのか知る必要さえ有りません。 WebAssembly モジュールはウェブ (あるいは Node.js) アプリにインポートする事ができ、 WebAssembly の機能は JavaScript を経由して他の領域から利用できる状態になります。 JavaScript 製フレームワークでは大幅なパフォーマンス改善と開発中の新機能をウェブ開発者が容易に利用できるようにするために WebAssembly を用いることができます。</p>

<h2 id="WebAssembly_goals" name="WebAssembly_goals">WebAssembly の目標</h2>

<p>WebAssembly は <a href="https://www.w3.org/community/webassembly/">W3C WebAssembly Community Group</a> 内で策定されるオープン標準として以下を目標に定めて作成されています:</p>

<ul>
 <li>高速で、高効率であり、ポータブルである事 — WebAssembly のコードは <a href="http://webassembly.org/docs/portability/#assumptions-for-efficient-execution">共通ハードウェア対応環境</a> を利用して異なるプラットフォーム間でネイティブ水準の速度で実行可能です。</li>
 <li>可読性を持ちデバッグ可能である事 — WebAssembly は低水準のアセンブリ言語ですが、人間が読めるテキストフォーマットを持ちます（その仕様策定は終わっていないものの）。このフォーマットは人の手で読み書きできて、デバッグもできます。</li>
 <li>安全である事 — WebAssembly は安全でサンドボックス化された実行環境上で動作するように設計されています。他のウェブ言語と同様に、ブラウザーに対して same-origin および権限ポリシーの確認を強制します。</li>
 <li>ウェブを破壊しない事 — WebAssembly は他のウェブ技術と協調し、後方互換性を維持するように設計されます。</li>
</ul>

<div class="note">
<p><strong>メモ</strong>: WebAssembly はまたウェブの領域外の JavaScript 環境での利用も行います (<a href="http://webassembly.org/docs/non-web/">Non-web embeddings</a> を参照)。</p>
</div>

<h2 id="How_does_WebAssembly_fit_into_the_web_platform" name="How_does_WebAssembly_fit_into_the_web_platform">WebAssembly はどのようにウェブプラットフォームに適合するのか</h2>

<p>ウェブプラットフォームは 2 つの領域からなると考える事ができます:</p>

<ul>
 <li>ウェブアプリのコードを実行する仮想マシン (VM) 、例としてアプリを動作させる JavaScript コード。</li>
 <li>ウェブブラウザー / デバイスの機能をコントロールして物事を実現するためにウェブアプリが呼ぶことのできる <a href="/ja/docs/Web/API">Web API</a> のセット (<a href="/ja/docs/Web/API/Document_Object_Model">DOM</a>、 <a href="/ja/docs/Web/API/CSS_Object_Model">CSSOM</a>、 <a href="/ja/docs/Web/API/WebGL_API">WebGL</a>、 <a href="/ja/docs/Web/API/IndexedDB_API">IndexedDB</a>、 <a href="/ja/docs/Web/API/Web_Audio_API">Web Audio API</a> 等)。</li>
</ul>

<p>歴史的に、仮想マシンは JavaScript を読み込む事しかできませんでした。 JavaScript が今日のウェブで人々が遭遇する多くの問題を解決する上で十分にパワフルであるため私達にとって仮想マシンはとても有効でした。しかしながら私達は JavaScript をもっと厳しい状況、3D ゲーム、VR に AR、コンピュータービジョン、画像/動画編集等ネイティブの性能が要求されるような多くの領域 (これら以外の利用アイディアに関しては <a href="http://webassembly.org/docs/use-cases/">WebAssembly use cases</a> を参照) において用いる際にパフォーマンス上の問題に遭遇するようになっています。</p>

<p>加えて巨大な JavaScript アプリケーションのダウンロード、構造の解析とコンパイルのコストは異常に高いものになりえます。モバイルや他のリソースが限られたプラットフォームではこのようなパフォーマンスのボトルネックの影響をずっと強く受ける事になります。</p>

<p>WebAssembly は JavaScript と異なる言語ですが、その置き換えを意図していません。その代わり、JavaScript の足りない所を補填して併用し、ウェブ開発者に双方の以下のような利益を提供する事を狙いとしています:</p>

<ul>
 <li>JavaScript は高水準の言語であり、ウェブアプリケーションを作る上で十分な柔軟性と表現力を持っています。そして多くの利点 — 動的型付け言語である、コンパイルが必須でない、パワフルなフレームワーク、ライブラリやツールを提供する豊富な土壌等を持っています。</li>
 <li>WebAssembly はネイティブに近いパフォーマンスで動作して、C++ や Rust のような低水準のメモリー管理を行う言語がウェブ上で動作するようコンパイルされる対象となる、コンパクトなバイナリー形式を持つ低水準なアセンブリに似た言語です (WebAssembly は将来的にガベージコレクションによるメモリー管理を行う言語をサポートする <a href="http://webassembly.org/docs/high-level-goals/">高レベルの目標</a> を持っている事に注意してください)。</li>
</ul>

<p>ブラウザーにおいての WebAssembly の登場によって、私たちが先述したような仮想マシンはこれから 2 つの種類の言語をロードして実行することになります — JavaScript と WebAssembly です。</p>

<p>必要に応じてこの異なったコードは互いを呼び出し合う事ができます — <a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly">WebAssembly JavaScript API</a> はエクスポートした WebAssembly のコードを普遍的に呼び出せる JavaScript 関数でラップし、WebAssembly のコードは通常の JavaScript 関数をインポートして同期的に呼び出せます。実際、WebAssembly のコードの基本単位はモジュールと呼ばれ、 WebAssembly のモジュールは ES2015 のモジュールと多くの対になる概念を持っています。</p>

<h3 id="WebAssembly_key_concepts" name="WebAssembly_key_concepts">WebAssembly のキーコンセプト</h3>

<p>ブラウザー上で WebAssembly がどのように動作するかを理解するため必要となるキーコンセプトがいくつか存在します。これらのコンセプトはそれぞれが <a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly">WebAssembly JavaScript API</a> に一対一で対応しています。</p>

<ul>
 <li><strong>Module (モジュール)</strong>: ブラウザーによって実行可能な機械語にコンパイルされた WebAssembly のバイナリーに対応します。モジュールはステートレスであるため、<a href="/ja/docs/Web/API/Blob">Blob</a> のように、明示的に <a href="/ja/docs/WebAssembly/Caching_modules">IndexedDB にキャッシュ</a> できたり window やウェブワーカーと ( <code><a href="/ja/docs/Web/API/MessagePort/postMessage">postMessage()</a></code> を経由して ) 共有する事ができます。モジュールは ES2015 のモジュールのように import と export の宣言を行います。 </li>
 <li><strong>Memory (メモリー)</strong>: WebAssembly の低水準なメモリーアクセス命令によって読み込みおよび書き込みが行われるバイト列を一次元の配列として保持している、リサイズ可能な ArrayBuffer です。</li>
 <li><strong>Table (テーブル)</strong>: メモリー内に (安全性およびポータブル性を維持するため) バイト列として保持することができなかった (関数等に対する) 参照を保持しているリサイズ可能な型付き配列です。</li>
 <li><strong>Instance (インスタンス)</strong>: メモリー、テーブル、インポートされた値を含む実行時に利用されるすべての状態と対となるモジュールです。インスタンスは特定の import によって特定のグローバル環境にロードされた ES2015 におけるモジュールのような物です。</li>
</ul>

<p>JavaScript API はモジュール、メモリー、テーブルおよびインスタンスを作る機能を開発者に提供します。 WebAssembly のインスタンスが与えられれば、 JavaScript はその中で export されたオブジェクトを、一般的な JavaScript で渡せる状態にされた関数同様に、同期的に呼び出すことができます。また任意の JavaScript の関数はその関数を WebAssembly のインスタンスに import する事で WebAssembly のコードから同期的に呼び出されるようにする事もできます。</p>

<p>JavaScript は WebAssembly のコードがどのようにダウンロードされ、コンパイルされて実行されるかを完全に制御できるため、JavaScript 開発者は WebAssembly を単に効果的に高いパフォーマンスを発揮する JavaScript の機能のようにとらえることもできます。</p>

<p>将来的には、 WebAssembly モジュールは (<code>&lt;script type='module'&gt;</code> を利用して) <a href="https://github.com/WebAssembly/proposals/issues/12">ES2015 モジュールのようにロード可能</a> となり、これは JavaScript が WebAssembly モジュールを ES2015 モジュールと同じくらい簡単に取得、コンパイル、インポートできるようになる事を意味します。</p>

<h2 id="How_do_I_use_WebAssembly_in_my_app" name="How_do_I_use_WebAssembly_in_my_app">WebAssembly をどのようにアプリで用いるか</h2>

<p>ここまで私たちは WebAssembly がウェブプラットフォームに付加する基本的な原則について話しました。つまりコードのバイナリー形式とバイナリーコードを読み込み実行する API について。ここからは実際にこれらの原則をどのように活かすのかについて話します。</p>

<p>WebAssembly のエコシステムはまだ黎明期の状態にあります。もっと多くのツール群によってこの状況が進展するのは間違いありません。現時点では主に4つの入口があります。</p>

<ul>
 <li><a href="/ja/docs/Mozilla/Projects/Emscripten">Emscripten</a> を用いて C/C++ 製アプリケーションをポーティングする。</li>
 <li>アセンブリ水準で WebAssembly を記述もしくは直接生成する。</li>
 <li>Rust アプリケーションを書き、 WebAssembly を出力ターゲットとする。</li>
 <li>TypeScript によく似た <a href="https://assemblyscript.org/">AssemblyScript</a> を用いて、 WebAssembly バイナリーに出力する</li>
</ul>

<p>これらの選択肢について考えてみましょう。</p>

<h3 id="Porting_from_CC" name="Porting_from_CC">C/C++ からのポーティング</h3>

<p>WASM コードを作成するための多くのオプションのうちの 2 つは、オンラインの Wasm アセンブラまたは <a href="/ja/docs/Mozilla/Projects/Emscripten">Emscripten</a> です。 WASM のオンラインアセンブラには、次のようなものがあります。</p>

<ul>
 <li><a href="https://wasdk.github.io/WasmFiddle/">WasmFiddle</a></li>
 <li><a href="https://anonyco.github.io/WasmFiddlePlusPlus/">WasmFiddle++</a></li>
 <li><a href="https://mbebenita.github.io/WasmExplorer/">WasmExplorer</a></li>
</ul>

<p>これらは、どこから始めるべきかを把握しようとしている人にとっては素晴らしいリソースですが、 Emscripten のツールと最適化には欠けています。</p>

<p>Emscripten ツールは C/C++ ソースコードを取得し、それを .wasm モジュール、加えてモジュールを読みだして実行するために必要な JavaScript に "glue" コードとコードの結果を表示するための HTML 文章にコンパイルおよび出力します。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/14647/emscripten-diagram.png" style="display: block; height: 104px; margin: 0px auto; width: 764px;"></p>

<p>簡潔に言えば、このプロセスは以下のような物になります。</p>

<ol>
 <li>Emscripten は最初に C/C++ を Clang + LLVM — 完成度の高いオープンソースの C/C++ コンパイラ・ツールチェインであり、OSX の XCode の一部として提供される等の利用例が有る、に注入します。</li>
 <li>Emscripten が Clang + LLVM によるコンパイル結果を .wasm バイナリーに変換します。</li>
 <li>それ自体だけでは WebAssembly は現時点で DOM に直接アクセスできません; JavaScript を呼び出して、整数型もしくは浮動小数点型の基本データを渡せるだけです。そのため、ウェブ API にアクセスするためには、WebAssembly は JavaScript を呼び出す必要が有り、この時点でウェブ API の呼び出しが行われます。そのため Emscripten は結果を得るための HTML と JavaScript のグルーコードを生成します。</li>
</ol>

<div class="note">
<p><strong>メモ</strong>: 将来的に <a href="https://github.com/WebAssembly/gc/blob/master/README.md">WebAssembly に直接ウェブ API を呼ばせる事を許容する</a> 計画があります。</p>
</div>

<p>JavaScript グルーコードは多くの人が想像するほど簡単な構造をしていません。はじめに、 Emscripten は <a href="https://en.wikipedia.org/wiki/Simple_DirectMedia_Layer">SDL</a>、 <a href="https://en.wikipedia.org/wiki/OpenGL">OpenGL</a>、 <a href="https://en.wikipedia.org/wiki/OpenAL">OpenAL</a> および <a href="https://en.wikipedia.org/wiki/POSIX">POSIX</a> の一部といった主な C/C++ ライブラリを組み込みます。これらのライブラリ群はウェブ API の観点から組み込まれ、各々が WebAssembly を既存のウェブ API に接続するためにいくつかの JavaScript グルーコードを必要とします。</p>

<p>そのためグルーコードの一部は C/C++ コードによって利用されるそれぞれのライブラリの機能を組み込みます。グルーコードはまた .wasm ファイルを取得、ロード、実行するため先述した WebAssembly JavaScript API を呼び出すロジックも含んでいます。 </p>

<p>生成された HTML 文章は JavaScript グルーコードのファイルを読み込んで {{htmlelement("textarea")}} に標準出力を書き出します。もしアプリケーションが OpenGL を利用している場合、その HTML はまた出力先となる {{htmlelement("canvas")}} 要素を含みます。Emscripten の出力結果を修正して必要とするウェブアプリに変換するのは非常に簡単です。</p>

<p>Emscripten に関する完全なドキュメントは <a href="https://emscripten.org">emscripten.org</a> で参照でき、このツールチェインの組み込みと自身の C/C++ アプリを wasm へとコンパイルするガイドとしては <a href="/ja/docs/WebAssembly/C_to_wasm">C/C++ を WebAssembly にコンパイルする</a> が参考になります。</p>

<h3 id="Writing_WebAssembly_directly" name="Writing_WebAssembly_directly">直接 WebAssembly を記述する</h3>

<p>独自のコンパイラ、ツール、あるいは WebAssembly を実行時に生成する JavaScript のライブラリを作りたいとお考えですか ?</p>

<p>実際のアセンブリ言語同様、 WebAssembly バイナリー形式はテキスト表現を持っています — これらは一対一で対応しています。なんらかの <a href="https://webassembly.org/getting-started/advanced-tools/">WebAssemby テキスト表現バイナリー変換ツール</a> を用いることでテキスト表現を直接記述してバイナリー形式に変換することができます。</p>

<p>この手順に関しては、 <a href="/ja/docs/WebAssembly/Text_format_to_wasm">WebAssembly テキスト表現を wasm 形式に変換する</a>  の項目を参照ください。</p>

<h3 id="Writing_Rust_Targeting_WebAssembly" name="Writing_Rust_Targeting_WebAssembly">WebAssembly をターゲットとした Rust の記述</h3>

<p>Rust WebAssembly ワーキンググループの不断の仕事のおかげで、Rust コードを書いて WebAssembly にコンパイルすることも可能です。必要なツールチェーンをインストールし、サンプル Rust プログラムを WebAssembly npm パッケージにコンパイルし、ウェブアプリケーションのサンプルを使用して、 <a href="/ja/docs/WebAssembly/Rust_to_wasm">Rust から WebAssembly へのコンパイル</a>の記事を読むことができます。</p>

<h3 id="Using_AssemblyScript" name="Using_AssemblyScript">AssemblyScript の使用</h3>

<p>C や Rust を学ぶ必要なく WebAssembly を試してみたいウェブ開発者には、 AssemblyScript が最良の選択肢です。これは小さなバンドルを生成し、 C や Rust と比較するとやや遅い程度です。ドキュメントは <a href="https://assemblyscript.org/">https://assemblyscript.org/</a> でチェックすることができます。</p>

<h2 id="Summary" name="Summary">まとめ</h2>

<p>本項目では WebAssembly が何であるか、どういった利便性が有るか、どのようにしてウェブに適用するかとどのように活用するかについて説明しました。</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="https://hacks.mozilla.org/category/webassembly/">WebAssembly articles on Mozilla Hacks blog</a></li>
 <li><a href="https://research.mozilla.org/webassembly/">WebAssembly on Mozilla Research</a></li>
 <li><a href="/ja/docs/WebAssembly/Loading_and_running">WebAssembly コードのロードと実行</a> — ウェブページでどのようにして自作の WebAssembly モジュールをロードするかについての理解が深まります。</li>
 <li><a href="/ja/docs/WebAssembly/Using_the_JavaScript_API">WebAssembly JavaScript API の使用</a> — WebAssembly JavaScript API のその他の利用法について理解が深まります。</li>
</ul>
