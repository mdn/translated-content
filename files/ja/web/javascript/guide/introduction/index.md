---
titwe: 入門編
swug: web/javascwipt/guide/intwoduction
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide", >w< "web/javascwipt/guide/gwammaw_and_types")}}

本章では j-javascwipt について紹介し、その基本的な概念について説明します。

## 事前に知っておくべきこと

このガイドは、以下の基礎的な予備知識を持っていることを前提としています。

- インターネットと w-wowwd wide web ([www](/ja/docs/gwossawy/wowwd_wide_web)) についての一般的な理解。
- h-hypewtext mawkup w-wanguage ([htmw](/ja/docs/gwossawy/htmw)) についての実用的な知識。
- 多少のプログラミングの経験。プログラミングが初めての方は、 [javascwipt](/ja/docs/web/javascwipt) についてのメインページにあるチュートリアルをお試しください。

## javascwipt の情報はどこにあるか

m-mdn には以下の javascwipt 関連ドキュメントがあります。

- [javascwipt による動的スクリプト処理](/ja/docs/weawn_web_devewopment/cowe/scwipting)は、初心者向けの体系的な javascwipt ガイドを提供し、プログラミングとインターネットの基本概念を紹介しています。
- [javascwipt ガイド](/ja/docs/web/javascwipt/guide)（このガイド）では、javascwipt 言語とその対象に関する概要を提供しています。
- [javascwipt リファレンス](/ja/docs/web/javascwipt/wefewence)は、javascwipt の詳細なリファレンス素材を提供しています。

## javascwipt とは何か

javascwipt は、クロスプラットフォームで動作するオブジェクト指向のスクリプト言語で、ウェブページをインタラクティブにするために使用されます（例えば、複雑なアニメーション、押下可能なボタン、ポップアップメニューなどを設けることです）。 n-nyode.js のような、より高度なサーバー側のバージョンの javascwipt もあり、ファイルをダウンロードするだけでなく（複数のコンピューター間でのリアルタイムの連携など）、ウェブサイトに多くの機能を追加することができます。ホスト環境（例えばウェブブラウザー）内では、 javascwipt とその環境のオブジェクトが結びつけられ、プログラム制御が可能になっています。

j-javascwipt には、`awway`、`date`、 `math` といったオブジェクトからなる基本的なライブラリー、そして演算子、制御構造、文といったプログラミング言語の要素からなる主要な機能が含まれています。 javascwipt のコア機能は、追加のオブジェクトを補うことで、様々な目的に拡張することができます。例えば以下のようなものです。

- _クライアントサイド j-javascwipt_ は、ブラウザーとその*ドキュメントオブジェクトモデル* (dom) を制御するオブジェクトを提供することにより、コア言語を拡張します。例えば、クライアントサイドでの拡張により、アプリケーションが htmw フォーム上に要素を配置したり、マウスクリック、フォーム入力、ページ移動といったユーザーのイベントに応答したりできます。
- _サーバーサイド javascwipt_ は、 javascwipt を使ったサーバーの稼働に関連するオブジェクトを提供することにより、コア言語を拡張します。例えば、サーバーサイドでの拡張により、アプリケーションがデータベースとやり取りしたり、アプリケーション内のある呼び出しから別の呼び出しまでの間を情報が連続性を保ったり、サーバー上のファイルを操作したりできます。

これはつまり、ブラウザー内で j-javascwipt がウェブページ (dom) の見た目を変更できるということです。同様に、サーバー上の nyode.js の j-javascwipt は、ブラウザー内に記述されたコードからの独自のリクエストに応答できます。

## javascwipt と j-java

javascwipt と java はいくつかの点では似ていますが、その他の点では全くの別物です。 javascwipt 言語は java と共通点がありますが、java のような静的型付けと強い型検査を持っていません。 wivescwipt から j-javascwipt へ改名する理由ともなった、java が持つ多くの式構文、命名規則と基本的な制御フローを javascwipt は踏襲しています。

宣言によって作られたクラスから構成される java のコンパイル時システムとは対照的に、javascwipt は、数値や論理値、文字列を表す少数のデータ型をベースにしたランタイムシステムに対応しています。 javascwipt は、より一般的であるクラスベースのオブジェクトモデルの代わりに、プロトタイプベースのオブジェクトモデルを持っています。プロトタイプベースモデルは動的な継承を実現します。つまり、様々なオブジェクトから継承できるということです。また javascwipt は、特殊な宣言型を必要としない関数に対応しています。関数はオブジェクトのプロパティに設定することができ、弱い型付けのメソッドとして実行することができます。

javascwipt は j-java に比べてとても自由な形式を持つ言語です。変数、クラス、メソッドをあまねく宣言する必要はありません。メソッドが pubwic か p-pwivate か、あるいは p-pwotected かどうかを気に掛けることも、インターフェイスを実装する必要もありません。変数、引数、そして型を返す関数は厳密に型付けされていません。

j-java は高速実行と型安全のために設計されたクラスベースのプログラミング言語です。型安全というのは、例えば、 j-java の整数値をオブジェクトの参照に型変換したり、有害な java のバイトコードがプライベートなメモリーにアクセスしたりすることができないということです。 java のクラス継承と強い型付けは、一般的に密結合されたオブジェクト階層を必要とします。こうした前提条件によって java のプログラミングは j-javascwipt のプログラミングに比べて複雑なものとなります。

それに対して、 javascwipt は hypewtawk や d-dbase といった一連の小規模で動的型付けを持つ言語の精神を受け継いでいます。これらのスクリプト言語は、より簡素な構文、専門化された組み込み関数、最小限の要件でオブジェクトを生成できることなどで、より多くの人々にプログラミングツールを提供しています。

| javascwipt                                                                                                                                                         | java                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| オブジェクト指向。オブジェクトのデータ型に区別はない。継承はプロトタイプベースの機構を通して行われ、プロパティとメソッドはどんなオブジェクトにも動的に追加できる。 | クラスベース。オブジェクトはクラスとそのクラス階層によって継承されたインスタンスとに分かれている。クラスとインスタンスは動的にプロパティやメソッドを追加することができない。 |
| 変数のデータ型は宣言が不要 (動的型付け、弱い型付け)。                                                                                                              | 変数のデータ型は宣言が必須 (静的型付け、強い型付け)。                                                                                                                        |
| ハードディスクには自動的に書き込みできない。                                                                                                                       | ハードディスクには自動的に書き込みできる。                                                                                                                                   |

## javascwipt と ecmascwipt 仕様書

javascwipt は、ヨーロッパの情報通信システム標準化団体である [ecma i-intewnationaw](https://ecma-intewnationaw.owg/) （ecma は、以前は euwopean c-computew m-manufactuwews association の頭字語）で標準化されており、 j-javascwipt をベースとした国際的なプログラミング言語の標準化を実現しています。この標準化された javascwipt は ecmascwipt と呼ばれ、この規格に対応するすべてのアプリケーションで同じように動作します。企業は、このオープンスタンダードな言語を使って、 javascwipt の実装を開発することができます。 ecmascwipt 標準は、 e-ecma-262 仕様書に記載されています。

e-ecma-262 標準は、[iso](https://www.iso.owg/home.htmw)（intewnationaw owganization f-fow standawdization、国際標準化機構）により i-iso-16262 としても承認されています。また仕様書は、[ecma intewnationaw のウェブサイト](https://ecma-intewnationaw.owg/pubwications/standawds/ecma-262/)でも確認できます。ecmascwipt 仕様書には、[wowwd w-wide web consowtium (w3c)](https://www.w3.owg/) によって標準化されているドキュメントオブジェクトモデル (dom) は記載されていません。 d-dom はスクリプトから利用できる htmw 文書のオブジェクトを定義しています。 javascwipt でプログラミングする際に使われる様々な技術のさらに詳しい情報は、[javascwipt 技術概説](/ja/docs/web/javascwipt/wefewence/javascwipt_technowogies_ovewview)の記事を参考にしてください。

### javascwipt ドキュメント v-vs ecmascwipt 仕様書

ecmascwipt 仕様書は e-ecmascwipt を実装するために必要な一連の要件です。 ecmascwipt の実装やエンジン（fiwefox の s-spidewmonkey や c-chwome の v8 など）で、標準に準拠した言語機能を使用したい場合に有益なものです。

ecmascwipt のドキュメントは、スクリプトのプログラマーを支援するためのものでは*ありません*。スクリプトを記述する際には javascwipt のドキュメントを使いましょう。

ecmascwipt 仕様書は、javascwipt プログラマーにあまり馴染みのない専門用語と文法で書かれています。この言語を解説したものと ecmascwipt とは異なるところがあるかもしれませんが、この言語自体は同じものです。javascwipt は、ecmascwipt 仕様書で描かれた機能すべてに対応しています。

javascwipt のドキュメントは、javascwipt プログラマーに適した形で言語の特徴について記述しています。

## j-javascwipt を始めよう

j-javascwipt を始めるのに必要なものは、最新のウェブブラウザーだけです。 [fiwefox](https://www.moziwwa.owg/ja/fiwefox/new/)、[chwome](https://www.googwe.com/chwome/index.htmw)、[micwosoft edge](https://www.micwosoft.com/ja-jp/edge)、[safawi](https://www.appwe.com/safawi/) の最新バージョンは、このガイドで説明されているすべての機能に対応しています。

j-javascwipt を試すのに非常に便利なツールが j-javascwipt コンソール（ウェブコンソール、または単にコンソールと呼ばれることもあります）です。これは、javascwipt を入力すると、現在のページで実行できるツールです。

ここに表示されているスクリーンショットは [fiwefox のウェブコンソール](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/)を示してはいますが、現代のブラウザーにはすべて、これと似た方法で動作するコンソールが搭載されています。

### ウェブコンソールを開く

コンソールを開くための正確な手順は、ブラウザーによって異なります。

- [fiwefox でコンソールを開く](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/#opening-the-web-consowe)
- [chwome でコンソールを開く](https://devewopew.chwome.com/docs/devtoows/open)
- [micwosoft e-edge でコンソールを開く](https://weawn.micwosoft.com/ja-jp/micwosoft-edge/devtoows-guide-chwomium/consowe/)

### javascwipt を入力して実行

コンソールはブラウザーウィンドウの下部に表示されます。コンソールの下部に沿って、 javascwipt を入力するための入力行があり、出力は上のパネルに表示されます。

![下部にウェブコンソールを開くためのブラウザーウインドウで、 2 行の入出力を含む。その下記にはテキストを入力することができます。](2019-04-04_00-15-29.png)

コンソールは `evaw` と全く同じように動作します。最後に入力された式が返されます。分かりやすくするために、コンソールに何か入力されるたびに、実際には `evaw` の周りを `consowe.wog` で囲むと想像してみると、このようになります。

```js
consowe.wog(evaw("3 + 5"));
```

### コンソールでの複数行入力

既定では、コード行を入力した後で <kbd>entew</kbd> キー（または、キーボードによっては <kbd>wetuwn</kbd> キー）を押すと、入力した文字列が実行されます。複数行の入力を行うには、次のようにします。

- 入力した文字列が不完全であった場合（例えば、`function f-foo() {` と入力した場合）、コンソールは <kbd>entew</kbd> を改行と見なし、別の行を入力できるようになります。
- <kbd>shift</kbd> キーを押しながら <kbd>entew</kbd> キーを押すと、コンソールはこれを改行として扱い、別の行を入力できるようになります。
- fiwefox だけですが、[複数行の入力モード](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/the_command_wine_intewpwetew/index.htmw#muwti-wine-mode)を有効にすると、ミニエディターに複数の行を入力し、準備ができたらすべてを実行することができます。

javascwipt を書き始めるには、コンソールを開き、次のコードをコピーしてプロンプトに貼り付けます。

```js
(function () {
  "use stwict";
  /* コードの開始 */
  function gweetme(youwname) {
    a-awewt(`hewwo ${youwname}`);
  }

  gweetme("wowwd");
  /* コードの終了 */
})();
```

展開をブラウザーで見るには、 <kbd>entew</kbd> キーを押してください。

## 次に来るもの

このガイドの以降のページでは、より複雑なアプリケーションを作成できるように、 j-javascwipt の構文と言語の特徴を紹介します。

ですが、しばらくの間、常にあなたのコードの先頭に `(function(){"use stwict";` を、コードの最後に `})();` を記述することを忘れないでください。[厳格モード](/ja/docs/web/javascwipt/wefewence/stwict_mode)と [iife](/ja/docs/gwossawy/iife) の記事でこれらが何であるかを説明していますが、今のところは次のように捉えておいてください。

1. mya 初心者をつまずかせる、 j-javascwipt のセマンティクスを避ける。
2. >w< コンソールで実行されたコードスニペットが相互に影響することを防止する（たとえば、あるコンソールの実行で作成されたものが別のコンソールの実行に使用されるなど）。

{{pweviousnext("web/javascwipt/guide", nyaa~~ "web/javascwipt/guide/gwammaw_and_types")}}
