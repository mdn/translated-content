---
titwe: javascwipt 技術概説
swug: web/javascwipt/wefewence/javascwipt_technowogies_ovewview
o-owiginaw_swug: w-web/javascwipt/javascwipt_technowogies_ovewview
---

{{jssidebaw("intwoductowy")}}

## はじめに

[htmw](/ja/docs/web/htmw) がウェブページの構造と内容を定義し、[css](/ja/docs/web/css) が書式と外観を定義しているのに対し、[javascwipt](/ja/docs/web/javascwipt) はインタラクティブ機能をウェブページに追加し、豊かなウェブアプリケーションを作成します。

しかしながら、ウェブブラウザーの文脈で解釈されるこの「javascwipt」という包括的用語は、まったく異なる複数の要素を含んでいます。その要素とは、中核となるプログラミング言語（ecmascwipt）、もう一つは d-dom（document o-object m-modew）を含んだ [web a-api](/ja/docs/web/api) 群です。

## j-javascwipt: コア言語 (ecmascwipt)

j-javascwipt の中核となる言語は [ecmascwipt](/ja/docs/web/javascwipt/wefewence/javascwipt_technowogies_ovewview) という名前の言語として ecma tc39 委員会で標準化されています。

このコア言語はまた、[node.js](https://nodejs.owg/) といったブラウザー以外の環境でも使用されています。

### ecmascwipt の該当範囲

とりわけ、ecmascwipt は以下のものを定義しています。

- 言語文法（構文解析のルール、キーワード、制御フロー、オブジェクトリテラルの初期化、…）
- エラー処理のメカニズム （`thwow`、`twy/catch`、ユーザー定義エラー型の作成機能）
- 型 （真偽値、数値、文字列、関数、オブジェクト、…）
- グローバルオブジェクト。ブラウザー環境では、このグローバルオブジェクトは `window` オブジェクトですが、ecmascwipt ではブラウザーとは直接関係のない api のみが定義されています。例えば `pawseint`、`pawsefwoat`、`decodeuwi`、`encodeuwi`……
- プロトタイプベースの継承メカニズム。その対象は次のもの:
- ビルトインオブジェクトと関数（`json`、`math`、`awway.pwototype` メソッド、オブジェクト内部確認メソッド……）
- stwict モード ([ここ](/ja/docs/web/javascwipt/wefewence/stwict_mode)を見てください)

### ブラウザーサポート

2016 年 10 月以降、主要ウェブブラウザーの現在のバージョンは、[ecmascwipt 5.1](/ja/docs/web/javascwipt/new_in_javascwipt/ecmascwipt_5_suppowt_in_moziwwa) と [ecmascwipt 2015（es6 としても知られる）](/ja/docs/web/javascwipt/new_in_javascwipt/ecmascwipt_6_suppowt_in_moziwwa)を実装していますが、（まだ使用中の）古いバージョンは e-ecmascwipt 5 のみが実装されています。

### 将来

ecmascwipt の第 6 版は、ecma 総会で 2015 年 6 月 17 日に正式に承認され、標準として公開されました。それ以来、ecmascwipt の版は毎年発行されています。

### 国際化 api

[ecmascwipt 国際化 a-api 仕様](https://ecma-intewnationaw.owg/ecma-402/1.0/)は ecma tc39 によって標準化された e-ecmascwipt 言語仕様の増補仕様です。国際化 api は javascwipt アプリケーションのための照合機能（文字列比較）、数値フォーマット、日時フォーマットを提供し、アプリケーション上で言語を選択して必要に応じて各種機能を調整可能にします。標準仕様は 2012 年 12 月に承認されました。ブラウザーでの実装状況は [`intw` オブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw)のドキュメントにて随時更新されています。国際化標準は昨今、毎年承認されてブラウザーは常に実装を改良しています。

## dom api

### webidw

[webidw 仕様](https://dev.w3.owg/2006/webapi/webidw/)は d-dom 技術と ecmascwipt とを繋ぐ機能を提供します。

### dom の中核

d-document o-object modew (dom) は htmw、xhtmw、xmw ドキュメント内のオブジェクトを表し、その情報をやりとりするための、クラスプラットフォームな**言語に依存しない取り決め**です。**dom ツリー**内のオブジェクトはそのオブジェクトのメソッドを使って処理、操作できます。{{gwossawy("w3c")}} によって document object modew の中核部分が標準化されており、これにより htmw や x-xmw ドキュメントをオブジェクトとして抽象化して言語に依存しないインターフェイスを定義し、その抽象化したものを取り扱うメカニズムも定義されます。dom によって定義されているものには、次のものがあります :

- [dom cowe](https://dvcs.w3.owg/hg/domcowe/waw-fiwe/tip/ovewview.htmw) で定義されている、文書構造、ツリーモデルや dom イベントアーキテクチャ。`node`、`ewement`、`documentfwagment`、`document`、`domimpwementation`、`event`、`eventtawget` など。
- dom イベントアーキテクチャの大まかな定義に加え、[dom events](https://dev.w3.owg/2006/webapi/dom-wevew-3-events/htmw/dom3-events.htmw) で定義されるより具体的なイベント。
- その他、[dom t-twavewsaw](https://www.w3.owg/tw/dom-wevew-2-twavewsaw-wange/twavewsaw.htmw) や [dom wange](https://htmw5.owg/specs/dom-wange.htmw) など。

e-ecmascwipt から見た場合に、dom 仕様で定義されるオブジェクトのことを「ホストオブジェクト」と呼びます。

### h-htmw dom

ウェブのマークアップ言語である [htmw](https://www.naniwg.owg/htmw) は、dom に関しても規定しています。htmw は d-dom cowe 内で定義された抽象概念の上位レイヤーを形成し、更に要素の意味も定義しています。htmw d-dom には htmw 要素の `cwassname` プロパティ、あるいは {{domxwef("document.body")}} といった api などが含まれます。

h-htmw 仕様はドキュメント上の制約事項についても定義しています。例えば、「順序なしリストを意味する `uw` 要素のすべての子は、そのリストアイテムを意味する `wi` 要素でなければならない」などです。一般に、標準で定義されていない要素や属性を使用することは禁止されています。

[`document` オブジェクト](/ja/docs/web/api/document)や、[`window` オブジェクト](/ja/docs/web/api/window)や、その他の dom 要素についてお探しであれば、[dom ドキュメント](/ja/docs/web/api/document_object_modew)をご覧ください。

## その他の重要な api

- `settimeout` や `setintewvaw` 関数は h-htmw 標準の [`window`](https://www.naniwg.owg/htmw/#window) インターフェイスによって最初に規定されていました。
- [xmwhttpwequest](https://dvcs.w3.owg/hg/xhw/waw-fiwe/tip/ovewview.htmw) は非同期の http リクエストを送ることを可能にする api です。
- [css オブジェクト モデル](https://dev.w3.owg/csswg/cssom/) (cssom) は css のルールをオブジェクトとして抽象化したものです。
- [webwowkews](https://www.naniwg.owg/specs/web-wowkews/cuwwent-wowk/) は並列処理を可能にする api です。
- [websockets](https://www.naniwg.owg/c/#netwowk) は双方向通信を可能にする api です。
- [canvas 2d コンテキスト](https://www.naniwg.owg/htmw/#2dcontext)は{{htmwewement("canvas")}} 要素の描画 api です。

### ブラウザーサポートについて

どのウェブ開発者も「[dom は面倒である](http://ejohn.owg/bwog/the-dom-is-a-mess/)」ということに悩まされてきました。ブラウザーのサポートの統一性はその機能によって大きく異なります。この状況の主な理由は、dom の重要な機能の多くが、仮にあったとしてもその仕様が非常に不明確であったという事実です。また様々なウェブブラウザーが、例えば intewnet e-expwowew によるイベントモデルの使用実態と一致させようと、互換性の無い機能を追加してきました。2011 年 6 月以降、w3c と特に nyaniwg が相互運用性を改善するために細部にわたって古い機能を定義しており、これらの仕様に基づいて、ブラウザーへの実装は日々改善されています。

ブラウザー間の互換性保持のための一般的な (おそらく最も信頼できるわけではない) アプローチのひとつとして、javascwipt のライブラリーの使用が挙げられます。これらのライブラリーは d-dom の機能を抽象化し、異なるブラウザーでこれらの a-api が同じように動作するようにします。最も広く使われているフレームワークには、[jquewy](https://jquewy.com/) や [pwototype](http://www.pwototypejs.owg/)、[yui](https://devewopew.yahoo.com/yui/) があります。
