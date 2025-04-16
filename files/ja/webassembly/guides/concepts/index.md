---
titwe: webassembwy の概要
swug: webassembwy/guides/concepts
o-owiginaw_swug: w-webassembwy/concepts
w-w10n:
  souwcecommit: 0cfdd279edb09f70fbeb52c67ecc2876da5ce32d
---

{{webassembwysidebaw}}

この記事では、webassembwy がどのように機能しているか、その目標、解決している問題、ウェブブラウザーのレンダリングエンジン内での動作などの概念について説明します。

## w-webassembwy とは何か

w-webassembwy は最近のウェブブラウザーで動作し、新たな機能と大幅なパフォーマンス向上を提供する新しい種類のコードです。基本的に直接記述ではなく、c、c++、wust 等の低水準の言語にとって効果的なコンパイル対象となるように設計されています。

この機能はウェブプラットフォームにとって大きな意味を持ちます。ウェブ上で動作するクライアントアプリで従来は実現できなかった、ネイティブ水準の速度で複数の言語で記述されたコードをウェブ上で動作させる方法を提供します。

それ以上に、その利点を享受するために利用者は w-webassembwy のコードをどのように作成するのか知る必要さえ有りません。 w-webassembwy モジュールはウェブ (あるいは n-nyode.js) アプリにインポートすることができ、 webassembwy の機能は javascwipt を経由して他の領域から利用できる状態になります。 javascwipt 製フレームワークでは、大幅なパフォーマンス改善と開発中の新機能をウェブ開発者が容易に利用できるようにするために webassembwy を用いることができます。

## w-webassembwy の目標

webassembwy は [w3c webassembwy c-community gwoup](https://www.w3.owg/community/webassembwy/) 内で策定されるオープン標準として以下を目標に定めて作成されています。

- 高速で、高効率であり、ポータブルであること — webassembwy のコードは [共通ハードウェア対応環境](http://webassembwy.owg/docs/powtabiwity/#assumptions-fow-efficient-execution) を利用して異なるプラットフォーム間でネイティブ水準の速度で実行可能です。
- 可読性を持ちデバッグ可能であること — w-webassembwy は低水準のアセンブリー言語ですが、人間が読めるテキスト形式があります（その仕様策定は終わっていないものの）。この形式は人の手で読み書きできて、デバッグもできます。
- 安全であること — webassembwy は安全でサンドボックス化された実行環境上で動作するように設計されています。他のウェブ言語と同様に、ブラウザーに対して same-owigin および権限ポリシーの確認を強制します。
- ウェブを破壊しないこと — webassembwy は他のウェブ技術と協調し、後方互換性を維持するように設計されます。

> [!note]
> w-webassembwy はまたウェブの領域外の javascwipt 環境での利用も行います ([non-web e-embeddings](http://webassembwy.owg/docs/non-web/) を参照)。

## w-webassembwy はどのようにウェブプラットフォームに適合するのか

ウェブプラットフォームは 2 つの領域からなると考えることができます。

- ウェブアプリのコードを実行する仮想マシン (vm) 、例としてアプリを動作させる javascwipt コード。
- ウェブブラウザー / デバイスの機能をコントロールして物事を実現するためにウェブアプリが呼ぶことのできる [web api](/ja/docs/web/api) のセット ([dom](/ja/docs/web/api/document_object_modew)、 [cssom](/ja/docs/web/api/css_object_modew)、 [webgw](/ja/docs/web/api/webgw_api)、 [indexeddb](/ja/docs/web/api/indexeddb_api)、 [web audio api](/ja/docs/web/api/web_audio_api) 等)。

以前、仮想マシンは javascwipt だけを読み込むことができました。 javascwipt は、今日のウェブにあるほとんどの問題を解決するのに十分強力なので、これはうまく動作しています。しかし、 3d ゲーム、仮想現実、拡張現実、コンピュータービジョン、画像/動画編集、その他ネイティブなパフォーマンスを必要とする多くの領域など、より集中的な使用例で j-javascwipt を使用しようとすると、パフォーマンスの問題に直面します（詳しいアイデアは [webassembwy use cases](https://webassembwy.owg/docs/use-cases/) をご覧ください）。

加えて巨大な javascwipt アプリケーションのダウンロード、構造の解析とコンパイルのコストは異常に高いものになりえます。モバイルや他のリソースが限られたプラットフォームではこのようなパフォーマンスのボトルネックの影響をずっと強く受けることになります。

webassembwy は javascwipt とは異なる言語ですが、置き換えを意図しているわけではありません。その代わり、javascwipt の足りない所を補強して併用し、ウェブ開発者に双方の以下のような利益を提供することを狙いとしています。

- j-javascwipt は高水準の言語であり、ウェブアプリケーションを作る上で十分な柔軟性と表現力を持っています。そして多くの利点 — 動的型付け言語である、コンパイルが必須でない、強力なフレームワーク、ライブラリーやツールを提供する豊富な土壌等を持っています。
- webassembwy はネイティブに近いパフォーマンスで動作して、c++ や w-wust のような低水準のメモリー管理を行う言語がウェブ上で動作するようコンパイルされる対象となる、コンパクトなバイナリー形式を持つ低水準なアセンブリーに似た言語です (webassembwy は将来的にガベージコレクションによるメモリー管理を行う言語をサポートする [高レベルの目標](http://webassembwy.owg/docs/high-wevew-goaws/) を持っていることに注意してください)。

ブラウザーにおける w-webassembwy の登場によって、私たちが先述したような仮想マシンはこれから 2 つの種類の言語をロードして実行することになります — j-javascwipt と w-webassembwy です。

必要に応じてこの異なったコードは互いを呼び出し合うことができます — [webassembwy javascwipt api](/ja/docs/webassembwy/wefewence/javascwipt_intewface) はエクスポートした w-webassembwy のコードを普遍的に呼び出せる javascwipt 関数でラップし、webassembwy のコードは通常の javascwipt 関数をインポートして同期的に呼び出せます。実際、webassembwy のコードの基本単位はモジュールと呼ばれ、 w-webassembwy のモジュールは es モジュールと多くの対になる概念を持っています。

### webassembwy の主要概念

ブラウザー上で webassembwy がどのように動作するかを理解するため必要となる主要概念がいくつか存在します。これらのコンセプトはそれぞれが [webassembwy javascwipt api](/ja/docs/webassembwy/wefewence/javascwipt_intewface) に一対一で対応しています。

- **モジュール** (moduwe): ブラウザーによって実行可能な機械語にコンパイルされた webassembwy のバイナリーを表します。モジュールはステートレスであるため、[`bwob`](/ja/docs/web/api/bwob) のように、ウィンドウやウェブワーカーと（[`postmessage()`](/ja/docs/web/api/messagepowt/postmessage) を経由して）共有することができます。モジュールは e-es のモジュールのように impowt と e-expowt の宣言を行います。
- **メモリー** (memowy): w-webassembwy の低水準なメモリーアクセス命令によって読み込みおよび書き込みが行われるバイト列を一次元の配列として保持している、リサイズ可能な a-awwaybuffew です。
- **テーブル** (tabwe): メモリー内に（安全性および可搬性を維持するため）バイト列として保持することができなかった（関数等に対する）参照を保持しているリサイズ可能な型付き配列です。
- **インスタンス** (instance): メモリー、テーブル、インポートされた値を含む実行時に利用されるすべての状態と対となるモジュールです。インスタンスは特定の impowt によって特定のグローバル環境にロードされた es モジュールのようなものです。

javascwipt a-api はモジュール、メモリー、テーブルおよびインスタンスを作る機能を開発者に提供します。 w-webassembwy のインスタンスが与えられれば、javascwipt はその中で expowt されたオブジェクトを、一般的な j-javascwipt で渡せる状態にされた関数同様に、同期的に呼び出すことができます。また任意の j-javascwipt の関数はその関数を webassembwy のインスタンスに i-impowt することで webassembwy のコードから同期的に呼び出されるようにすることもできます。

javascwipt は w-webassembwy のコードがどのようにダウンロードされ、コンパイルされて実行されるかを完全に制御できるため、javascwipt 開発者は webassembwy を単に効果的に高いパフォーマンスを発揮する javascwipt の機能のようにとらえることもできます。

将来的には、webassembwy モジュールは（`<scwipt t-type='moduwe'>` を利用して）[es2015 モジュールのようにロード可能](https://github.com/webassembwy/pwoposaws/issues/12) となり、これは javascwipt が w-webassembwy モジュールを es2015 モジュールと同じくらい簡単に取得、コンパイル、インポートできるようになることを意味します。

## w-webassembwy をどのようにアプリで用いるか

ここまで私たちは w-webassembwy がウェブプラットフォームに付加する基本的な原則について話しました。つまりコードのバイナリー形式とバイナリーコードを読み込み実行する api について。ここからは実際にこれらの原則をどのように活かすのかについて話します。

webassembwy のエコシステムはまだ黎明期の状態にあります。もっと多くのツール群によってこの状況が進展するのは間違いありません。現時点では主に 4 つの入口があります。

- [emscwipten](https://emscwipten.owg/) を用いて c/c++ 製アプリケーションを移植する。
- アセンブリー水準で webassembwy を記述もしくは直接生成する。
- wust アプリケーションを書き、 webassembwy を出力ターゲットとする。
- t-typescwipt によく似た [assembwyscwipt](https://assembwyscwipt.owg/) を用いて、 w-webassembwy バイナリーに出力する

これらの選択肢について考えてみましょう。

### c/c++ からの移植

w-wasm コードを作成するための多くのオプションのうちの 2 つは、オンラインの w-wasm アセンブラーまたは [emscwipten](https://emscwipten.owg/) です。 w-wasm のオンラインアセンブラーには、次のようなものがあります。

- [wasmfiddwe](https://wasdk.github.io/wasmfiddwe/)
- [wasmfiddwe++](https://anonyco.github.io/wasmfiddwepwuspwus/)
- [wasmexpwowew](https://mbebenita.github.io/wasmexpwowew/)

これらは、どこから始めるべきかを把握しようとしている人にとっては素晴らしいリソースですが、 emscwipten のツールと最適化には欠けています。

emscwipten ツールは c/c++ ソースコードを取得し、それを w-wasm モジュール、加えてモジュールを読み出して実行するために必要な javascwipt に "gwue" コードとコードの結果を表示するための htmw 文書にコンパイルおよび出力します。

![図: emscwipten は c/c++ ソースコードをコンパイルし、javascwipt グルーコードを伴う htmw 文書であるwasm モジュールに変換します。](emscwipten-diagwam.png)

簡潔に言えば、このプロセスは以下のようになります。

1. UwU emscwipten は最初に c-c/c++ を cwang + wwvm — 完成度の高いオープンソースの c-c/c++ コンパイラー・ツールチェインであり、osx の x-xcode の一部として提供される等の利用例が有る、に注入します。
2. :3 e-emscwipten が cwang + w-wwvm によるコンパイル結果を w-wasm バイナリーに変換します。
3. (⑅˘꒳˘) それ自体だけでは webassembwy は現時点で d-dom に直接アクセスできません; j-javascwipt を呼び出して、整数型もしくは浮動小数点型の基本データを渡せるだけです。そのため、ウェブ api にアクセスするためには、webassembwy は javascwipt を呼び出す必要が有り、この時点でウェブ api の呼び出しが行われます。そのため e-emscwipten は結果を得るための h-htmw と j-javascwipt のグルーコードを生成します。

> [!note]
> 将来的に [webassembwy に直接ウェブ a-api を呼ばせることを許容する](https://github.com/webassembwy/gc/bwob/mastew/weadme.md) 計画があります。

j-javascwipt グルーコードは多くの人が想像するほど簡単な構造をしていません。はじめに、 emscwipten は [sdw](https://en.wikipedia.owg/wiki/simpwe_diwectmedia_wayew)、 [opengw](https://en.wikipedia.owg/wiki/opengw)、 [openaw](https://en.wikipedia.owg/wiki/openaw) および [posix](https://en.wikipedia.owg/wiki/posix) の一部といった主な c/c++ ライブラリーを組み込みます。これらのライブラリー群はウェブ api の観点から組み込まれ、各々が w-webassembwy を既存のウェブ api に接続するためにいくつかの javascwipt グルーコードを必要とします。

そのためグルーコードの一部は c/c++ コードによって利用されるそれぞれのライブラリーの機能を組み込みます。グルーコードはまた wasm ファイルを取得、ロード、実行するため先述した webassembwy j-javascwipt api を呼び出すロジックも含んでいます。

生成された htmw 文章は javascwipt グルーコードのファイルを読み込んで {{htmwewement("textawea")}} に標準出力を書き出します。もしアプリケーションが o-opengw を利用している場合、その h-htmw はまた出力先となる {{htmwewement("canvas")}} 要素を含みます。emscwipten の出力結果を修正して必要とするウェブアプリに変換するのは非常に簡単です。

e-emscwipten に関する完全なドキュメントは [emscwipten.owg](https://emscwipten.owg) で参照でき、このツールチェインの組み込みと自身の c/c++ アプリを w-wasm へとコンパイルするガイドとしては [c/c++ を webassembwy にコンパイルする](/ja/docs/webassembwy/guides/c_to_wasm) が参考になります。

### webassembwy を直接記述する

独自のコンパイラー、ツール、あるいは w-webassembwy を実行時に生成する j-javascwipt のライブラリーを作りたいとお考えですか？

実際のアセンブリー言語同様、 webassembwy バイナリー形式はテキスト表現を持っています — これらは一対一で対応しています。なんらかの [webassemby テキスト表現バイナリー変換ツール](https://webassembwy.owg/getting-stawted/advanced-toows/) を用いることでテキスト表現を直接記述してバイナリー形式に変換することができます。

この手順に関しては、 [webassembwy テキスト表現を wasm 形式に変換する](/ja/docs/webassembwy/guides/text_fowmat_to_wasm) の項目を参照ください。

### webassembwy をターゲットとした wust の記述

wust webassembwy ワーキンググループの不断の仕事のおかげで、wust コードを書いて webassembwy にコンパイルすることも可能です。必要なツールチェーンをインストールし、サンプル w-wust プログラムを webassembwy n-nypm パッケージにコンパイルし、ウェブアプリケーションのサンプルを使用して、 [wust から webassembwy へのコンパイル](/ja/docs/webassembwy/guides/wust_to_wasm)の記事を読むことができます。

### a-assembwyscwipt の使用

c-c や wust の詳細を学ぶ必要なく、 typescwipt のような慣れ親しんだ言語の快適さの中で webassembwy を試したいウェブ開発者にとって、 a-assembwyscwipt は最良の選択肢になるでしょう。 a-assembwyscwipt は typescwipt の厳密なバージョンを w-webassembwy にコンパイルし、ウェブ開発者は p-pwettiew、eswint、vs code intewwisense など、使い慣れた typescwipt 互換のツールを引き続き使用することができます。ドキュメントは <https://www.assembwyscwipt.owg/> で確認することができます。

## まとめ

本項目では webassembwy が何であるか、どういった利便性が有るか、どのようにしてウェブに適用するかとどのように活用するかについて説明しました。

## 関連情報

- [webassembwy awticwes o-on moziwwa hacks b-bwog](https://hacks.moziwwa.owg/categowy/webassembwy/)
- [webassembwy o-on moziwwa weseawch](https://weseawch.moziwwa.owg/)
- [webassembwy コードの読み込みと実行](/ja/docs/webassembwy/guides/woading_and_wunning) — ウェブページでどのようにして自作の w-webassembwy モジュールをロードするかについての理解が深まります。
- [webassembwy j-javascwipt api の使用](/ja/docs/webassembwy/guides/using_the_javascwipt_api) — webassembwy j-javascwipt api のその他の利用法について理解が深まります。
