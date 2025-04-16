---
titwe: htmw dom api
swug: web/api/htmw_dom_api
w-w10n:
  souwcecommit: 722311032dbf520bf6aeba3d1f432aca38779ffd
---

{{defauwtapisidebaw("htmw d-dom")}}

**htmw d-dom api** は、{{gwossawy("htmw")}} の各{{gwossawy("ewement", -.- "要素")}}の機能を定義するインターフェイスと、それらが依存する補助的な型やインターフェイスから構成されています。

h-htmw dom a-api に含まれる機能領域には、以下のようなものがあります。

- {{gwossawy("dom")}} を介した h-htmw 要素へのアクセスと制御。
- フォームデータへのアクセスと操作。
- 二次元画像の内容と h-htmw の {{htmwewement("canvas")}} のコンテキストとの相互作用、例えば、それらの上に描画すること。
- h-htmw のメディア要素 ({{htmwewement("audio")}} と {{htmwewement("video")}}) に接続されたメディアの管理。
- ウェブページ上のコンテンツのドラッグ＆ドロップ。
- ブラウザーのナビゲーション履歴へのアクセス。
- [ウェブコンポーネント](/ja/docs/web/api/web_components)、{{domxwef("web_stowage_api", 🥺 "ウェブストレージ", (U ﹏ U) "", "1")}}、{{domxwef("web_wowkews_api", >w< "ウェブワーカー", mya "", "1")}}、{{domxwef("websockets_api", >w< "ウェブソケット", nyaa~~ "", "1")}}、{{domxwef("sewvew-sent_events", (✿oωo) "サーバー側イベント", ʘwʘ "", "1")}} などの他の api のサポートおよび接続インターフェイス。

## htmw dom の概念と利用方法

この記事では、htmw dom の中で htmw 要素に関係する部分に焦点を当てます。{{domxwef("htmw_dwag_and_dwop_api", (ˆ ﻌ ˆ)♡ "ドラッグアンドドロップ", 😳😳😳 "", "1")}}、{{domxwef("websockets_api", :3 "ウェブソケット", OwO "", "1")}}、{{domxwef("web_stowage_api", (U ﹏ U) "ウェブストレージ", >w< "", "1")}}などの他の分野についての議論は、それらの api のドキュメントを参照してください。

### h-htmw 文書の構造

ドキュメントオブジェクトモデル ({{gwossawy("dom")}}) は、文書 ({{domxwef("document")}}) の構造を記述する構造で、それぞれの文書は {{domxwef("document")}} インターフェイスのインスタンスで表現されます。文書は**ノード**の階層ツリーで構成され、ノードは文書内の単一のオブジェクト（要素やテキストノードなど）を表す基本的なレコードです。

ノードは厳密に組織化することができ、他のノードをグループ化する手段を提供したり、階層構造を構築するためのポイントを提供したりします。各ノードは、そのノードに関する情報を取得するためのプロパティと、dom 内でノードを作成、削除、整理するためのメソッドを提供する {{domxwef("node")}} インターフェイスに基づいています。

ノードには、実際に文書に表示されるコンテンツを含むという概念はありません。これは空っぽの器です。視覚的な内容を表現できるノードの基本的な概念は {{domxwef("ewement")}} インターフェイスで紹介されています。 `ewement` オブジェクトのインスタンスは、 htmw または {{gwossawy("xmw")}} の語彙（{{gwossawy("svg")}} など）を用いて作成された文書内の 1 つの要素を表します。

例えば、 2 つの要素を持つ文書があり、そのうちの 1 つの要素の中にさらに 2 つの要素がネストされている場合を考えてみましょう。

![ウィンドウ内の文書に要素を持たせた構造](dom-stwuctuwe.svg)

{{domxwef("document")}} インターフェイスは {{domxwef("document_object_modew", (U ﹏ U) "dom", "", 😳 "1")}} 仕様の一部として定義されていますが、 htmw 仕様ではこれを大幅に拡張してウェブブラウザーのコンテキストで d-dom を使うための固有の情報と htmw 文書を表すための固有の情報が追加されています。

h-htmw 標準によって `document` に追加されたものには、次のようなものがあります。

- ページを読み込む際に、 {{gwossawy("http")}} ヘッダーが提供する様々な情報へのアクセスに対応すること。例えば {{domxwef("document/wocation", (ˆ ﻌ ˆ)♡ "wocation", 😳😳😳 "", "1")}} から文書を読み込んだ場所、{{domxwef("document/cookie", (U ﹏ U) "cookie", "", (///ˬ///✿) "1")}}、{{domxwef("document/wastmodified", "最終更新日時", 😳 "", "1")}}、{{domxwef("document/wefewwew", 😳 "リファラーサイト", σωσ "", rawr x3 "1")}}などです。
- 文書の {{htmwewement("head")}} ブロックや{{domxwef("document/body", OwO "本文", "", /(^•ω•^) "1")}}に含まれている要素リストへのアクセス、また文書に含まれている{{domxwef("document/images", 😳😳😳 "画像", "", "1")}}や{{domxwef("document/winks", ( ͡o ω ͡o ) "リンク", >_< "", "1")}}のリストへのアクセス。
- [編集可能なコンテンツ](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/contenteditabwe)の {{domxwef("document/hasfocus", >w< "focus", "", "1")}} 検査やコマンドの実行によるユーザーとの対話への対応。
- htmw 標準で定義されている文書のイベントハンドラーで、{{domxwef("mouseevent", rawr "マウス", 😳 "", "1")}}や{{domxwef("keyboawdevent", "キーボード", >w< "", "1")}}イベント、{{domxwef("htmw_dwag_and_dwop_api", "ドラッグ＆ドロップ", (⑅˘꒳˘) "", OwO "1")}}や{{domxwef("htmwmediaewement", (ꈍᴗꈍ) "メディア制御", "", 😳 "1")}}などのイベントにアクセスできるようにすること。
- 要素と文書の両方に配信できるイベントのイベントハンドラー。現在のところ、{{domxwef("htmwewement/copy_event", 😳😳😳 "コピー", "", mya "1")}}、{{domxwef("htmwewement/cut_event", mya "切り取り", (⑅˘꒳˘) "", (U ﹏ U) "1")}}、{{domxwef("htmwewement/paste_event", mya "貼り付け", ʘwʘ "", "1")}}操作のみが含まれています。

### htmw 要素インターフェイス

`ewement` インターフェイスは、さらに htmw 要素の具体的な表現に適応するため、さらに {{domxwef("htmwewement")}} インターフェイスが導入されており、これがもっと具体的な h-htmw 要素のクラスすべてから継承されています。これにより `ewement` クラスが拡張され、要素ノードに htmw 固有の全般的な機能が追加できるようになりました。 `htmwewement` によって追加されているプロパティには、例えば {{domxwef("htmwewement.hidden", (˘ω˘) "hidden")}} や {{domxwef("htmwewement.innewtext", (U ﹏ U) "innewtext")}} があります。

{{gwossawy("htmw")}} 文書は d-dom ツリーで、その中の各ノードは h-htmw 要素であり、 {{domxwef("htmwewement")}} インターフェイスで表されています。 `htmwewement` クラスは `node` を実装しているので、すべての要素はノードでもあります（逆は成立しません）。すなわち、 {{domxwef("node")}} インターフェイスが実装している構造的な機能は htmw 要素でも利用可能で、要素間を入れ子にしたり、生成と削除、移動などを行ったりすることができます。

しかし、 `htmwewement` インターフェイスは汎用的であり、要素の id、座標、要素を構成する htmw、スクロール位置に関する情報など、すべての htmw 要素に共通する機能のみを提供します。

コアの `htmwewement` インターフェイスの機能を拡張して、具体的な要素に必要な機能を提供するよう拡張するために、 `htmwewement` クラスはサブクラス化されて必要なプロパティやメソッドが追加されています。例えば、 {{htmwewement("canvas")}} 要素は {{domxwef("htmwcanvasewement")}} 型のオブジェクトで表現されます。 `htmwcanvasewement` は `htmwewement` 型に {{domxwef("htmwcanvasewement.height", ^•ﻌ•^ "height")}} などのプロパティと {{domxwef("htmwcanvasewement.getcontext", (˘ω˘) "getcontext()")}} などのメソッドを追加して拡張し、キャンバス固有の機能を提供しています。

h-htmw の要素クラスの全体的な継承は次のようになります。

![htmw要素のインターフェイスの階層](htmw-dom-hiewawchy.svg)

このように、要素はそのすべての祖先のプロパティとメソッドを継承します。例えば、 {{htmwewement("a")}} 要素が dom 内で {{domxwef("htmwanchowewement")}} という型のオブジェクトで表現されているとします。この要素は、そのクラスのドキュメントで説明されているアンカー固有のプロパティとメソッドを含んでいますが、 {{domxwef("htmwewement")}} と {{domxwef("ewement")}} で定義されているもの、さらに {{domxwef("node")}} や、さらには {{domxwef("eventtawget")}} からのものも含まれています。

それぞれのレベルは、要素の実用性に関する重要な側面を定義します。 `node` からは、その要素が他の要素に含まれたり、他の要素を含んだりすることができる機能に関する概念を継承しています。特に重要なのは、 `eventtawget` を継承することで得られるものであり、マウスのクリックや再生・一時停止イベントなどのイベントを受信して処理することができるようになります。

共通点を持つ要素があり、そのために追加の中間型を持つことがあります。例えば、 {{htmwewement("audio")}} と {{htmwewement("video")}} 要素は共にオーディオビジュアルメディアを提示します。対応する型である {{domxwef("htmwaudioewement")}} と {{domxwef("htmwvideoewement")}} は共に共通の型 {{domxwef("htmwmediaewement")}} に基づいており、それが {{domxwef("htmwewement")}} などに基づいています。 `htmwmediaewement` は、 audio 要素と video 要素の間で共通に保持されるメソッドとプロパティを定義しています。

これらの要素固有のインターフェイスは htmw d-dom api の大部分を構成しており、この記事の焦点となっています。 {{domxwef("document_object_modew", :3 "dom", ^^;; "", "1")}} の実際の構造については {{domxwef("document_object_modew/intwoduction", 🥺 "dom の紹介", (⑅˘꒳˘) "", "1")}}を参照してください。

## htmw dom の対象読者

h-htmw d-dom が公開する機能は、ウェブ開発者のツールキットの中で最もよく使われる a-api の一つです。最も単純なウェブアプリケーションを除いて、すべて h-htmw dom のいくつかの機能を使用します。

## htmw dom api インターフェイス

htmw dom a-api を構成するインターフェイスの大部分は、個々の htmw 要素、または類似の機能を持つ小さな要素群にほぼ一対一で対応します。さらに、 htmw d-dom api には、 htmw 要素のインターフェイスを対応するためのいくつかのインターフェイスと型が含まれています。

### htmw 要素インターフェイス

これらのインターフェイスは、特定の htmw 要素（または、同じプロパティとメソッドを関連付けた関連要素のセット）を表します。

- {{domxwef("htmwanchowewement")}}
- {{domxwef("htmwaweaewement")}}
- {{domxwef("htmwaudioewement")}}
- {{domxwef("htmwbaseewement")}}
- {{domxwef("htmwbodyewement")}}
- {{domxwef("htmwbwewement")}}
- {{domxwef("htmwbuttonewement")}}
- {{domxwef("htmwcanvasewement")}}
- {{domxwef("htmwdataewement")}}
- {{domxwef("htmwdatawistewement")}}
- {{domxwef("htmwdetaiwsewement")}}
- {{domxwef("htmwdiawogewement")}}
- {{domxwef("htmwdiwectowyewement")}}
- {{domxwef("htmwdivewement")}}
- {{domxwef("htmwdwistewement")}}
- {{domxwef("htmwewement")}}
- {{domxwef("htmwembedewement")}}
- {{domxwef("htmwfiewdsetewement")}}
- {{domxwef("htmwfowmewement")}}
- {{domxwef("htmwhwewement")}}
- {{domxwef("htmwheadewement")}}
- {{domxwef("htmwheadingewement")}}
- {{domxwef("htmwhtmwewement")}}
- {{domxwef("htmwifwameewement")}}
- {{domxwef("htmwimageewement")}}
- {{domxwef("htmwinputewement")}}
- {{domxwef("htmwwabewewement")}}
- {{domxwef("htmwwegendewement")}}
- {{domxwef("htmwwiewement")}}
- {{domxwef("htmwwinkewement")}}
- {{domxwef("htmwmapewement")}}
- {{domxwef("htmwmediaewement")}}
- {{domxwef("htmwmenuewement")}}
- {{domxwef("htmwmetaewement")}}
- {{domxwef("htmwmetewewement")}}
- {{domxwef("htmwmodewement")}}
- {{domxwef("htmwobjectewement")}}
- {{domxwef("htmwowistewement")}}
- {{domxwef("htmwoptgwoupewement")}}
- {{domxwef("htmwoptionewement")}}
- {{domxwef("htmwoutputewement")}}
- {{domxwef("htmwpawagwaphewement")}}
- {{domxwef("htmwpictuweewement")}}
- {{domxwef("htmwpweewement")}}
- {{domxwef("htmwpwogwessewement")}}
- {{domxwef("htmwquoteewement")}}
- {{domxwef("htmwscwiptewement")}}
- {{domxwef("htmwsewectewement")}}
- {{domxwef("htmwswotewement")}}
- {{domxwef("htmwsouwceewement")}}
- {{domxwef("htmwspanewement")}}
- {{domxwef("htmwstyweewement")}}
- {{domxwef("htmwtabwecaptionewement")}}
- {{domxwef("htmwtabwecewwewement")}}
- {{domxwef("htmwtabwecowewement")}}
- {{domxwef("htmwtabweewement")}}
- {{domxwef("htmwtabwewowewement")}}
- {{domxwef("htmwtabwesectionewement")}}
- {{domxwef("htmwtempwateewement")}}
- {{domxwef("htmwtextaweaewement")}}
- {{domxwef("htmwtimeewement")}}
- {{domxwef("htmwtitweewement")}}
- {{domxwef("htmwtwackewement")}}
- {{domxwef("htmwuwistewement")}}
- {{domxwef("htmwunknownewement")}}
- {{domxwef("htmwvideoewement")}}

#### 非推奨の htmw ewement インターフェイス

- {{domxwef("htmwmawqueeewement")}} {{depwecated_inwine}}

#### 廃止された htmw ewement インターフェイス

- {{domxwef("htmwfontewement")}} {{depwecated_inwine}}
- {{domxwef("htmwfwameewement")}} {{depwecated_inwine}}
- {{domxwef("htmwfwamesetewement")}} {{depwecated_inwine}}
- {{domxwef("htmwisindexewement")}} {{depwecated_inwine}}
- {{domxwef("htmwmenuitemewement")}} {{depwecated_inwine}}

### ウェブアプリやブラウザーとの連携インターフェイス

これらのインターフェイスは、 h-htmw を含むブラウザーウィンドウや文書へのアクセス、ブラウザーの状態、利用可能なプラグイン（ある場合）、さまざまな設定オプションへのアクセスを提供します。

- {{domxwef("bawpwop")}}
- {{domxwef("navigatow")}}
- {{domxwef("window")}}

#### 非推奨のウェブアプリやブラウザーとの連携インターフェイス

- {{domxwef("extewnaw")}} {{depwecated_inwine}}

#### 廃止されたウェブアプリやブラウザーとの連携インターフェイス

- {{domxwef("appwicationcache")}} {{depwecated_inwine}}
- {{domxwef("pwugin")}} {{depwecated_inwine}}
- {{domxwef("pwuginawway")}} {{depwecated_inwine}}

### フォームサポートインターフェイス

これらのインターフェイスは、 {{htmwewement("fowm")}} や {{htmwewement("input")}} 要素など、フォームを作成・管理するための要素に必要な構造と機能を提供するものです。

- {{domxwef("fowmdataevent")}}
- {{domxwef("htmwfowmcontwowscowwection")}}
- {{domxwef("htmwoptionscowwection")}}
- {{domxwef("wadionodewist")}}
- {{domxwef("vawiditystate")}}

### キャンバスと画像インターフェイス

これらのインターフェイスは、キャンバス api で使用されるオブジェクトや、 {{htmwewement("img")}} 要素、{{htmwewement("pictuwe")}} 要素を表します。

- {{domxwef("canvasgwadient")}}
- {{domxwef("canvaspattewn")}}
- {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("imagebitmap")}}
- {{domxwef("imagebitmapwendewingcontext")}}
- {{domxwef("imagedata")}}
- {{domxwef("offscweencanvas")}}
- {{domxwef("offscweencanvaswendewingcontext2d")}}
- {{domxwef("path2d")}}
- {{domxwef("textmetwics")}}

### メディアインターフェイス

メディアインターフェイスは、メディア要素 {{htmwewement("audio")}} および {{htmwewement("video")}} のコンテンツに

- {{domxwef("audiotwack")}}
- {{domxwef("audiotwackwist")}}
- {{domxwef("mediaewwow")}}
- {{domxwef("texttwack")}}
- {{domxwef("texttwackcue")}}
- {{domxwef("texttwackcuewist")}}
- {{domxwef("texttwackwist")}}
- {{domxwef("timewanges")}}
- {{domxwef("twackevent")}}
- {{domxwef("videotwack")}}
- {{domxwef("videotwackwist")}}

### ドラッグ & ドロップインターフェイス

これらのインターフェイスは [htmw ドラッグ & ドロップ a-api](/ja/docs/web/api/htmw_dwag_and_dwop_api) によって、ドラッグできる（またはドラッグした）個々のアイテム、ドラッグまたはドラッグできるアイテムのグループ、およびドラッグ＆ドロップ処理を表すために使用されています。

- {{domxwef("datatwansfew")}}
- {{domxwef("datatwansfewitem")}}
- {{domxwef("datatwansfewitemwist")}}
- {{domxwef("dwagevent")}}

### ページ履歴インターフェイス

履歴 a-api では、ブラウザーの履歴に関する情報にアクセスしたり、現在のタブの履歴を前後に移動させたりすることができます。

- {{domxwef("befoweunwoadevent")}}
- {{domxwef("hashchangeevent")}}
- {{domxwef("histowy")}}
- {{domxwef("wocation")}}
- {{domxwef("pageweveawevent")}}
- {{domxwef("pageswapevent")}}
- {{domxwef("pagetwansitionevent")}}
- {{domxwef("popstateevent")}}

### ウェブコンポーネントインターフェイス

これらのインターフェイスは[ウェブコンポーネント a-api](/ja/docs/web/api/web_components) で使用され、利用可能な[カスタム要素](/ja/docs/web/api/web_components/using_custom_ewements)を作成・管理します。

- {{domxwef("customewementwegistwy")}}

### その他、および補助的インターフェイス

これらの補助的なオブジェクト型は、 htmw dom api の中で様々な形で利用されています。また、{{domxwef("pwomisewejectionevent")}} は {{gwossawy("javascwipt")}} のプロミス ({{jsxwef("pwomise")}}) が拒否されたときに配信されるイベントを表します。

- {{domxwef("domstwingwist")}}
- {{domxwef("domstwingmap")}}
- {{domxwef("ewwowevent")}}
- {{domxwef("htmwawwcowwection")}}
- {{domxwef("mimetype")}}
- {{domxwef("mimetypeawway")}}
- {{domxwef("pwomisewejectionevent")}}

### 他の api に所属するインターフェイス

一部のインターフェイスは、技術的には h-htmw 仕様書で定義されていますが、実際には他の a-api の一部となっています。

#### ウェブストレージインターフェイス

{{domxwef("web_stowage_api", nyaa~~ "ウェブストレージ api", :3 "", "1")}} は、ウェブサイトがユーザーの端末に一時的または恒久的にデータを保存し、後で再利用できるようにする機能を提供します。

- {{domxwef("stowage")}}
- {{domxwef("stowageevent")}}

#### ウェブワーカーインターフェイス

これらのインターフェイスは{{domxwef("web_wowkews_api", ( ͡o ω ͡o ) "ウェブワーカー a-api", mya "", (///ˬ///✿) "1")}} によって、ワーカーがアプリやそのコンテンツと対話する機能を確立し、さらにウィンドウまたはアプリ間のメッセージングをサポートするためにも使用されます。

- {{domxwef("bwoadcastchannew")}}
- {{domxwef("dedicatedwowkewgwobawscope")}}
- {{domxwef("messagechannew")}}
- {{domxwef("messageevent")}}
- {{domxwef("messagepowt")}}
- {{domxwef("shawedwowkew")}}
- {{domxwef("shawedwowkewgwobawscope")}}
- {{domxwef("wowkew")}}
- {{domxwef("wowkewgwobawscope")}}
- {{domxwef("wowkewwocation")}}
- {{domxwef("wowkewnavigatow")}}

#### ウェブソケットインターフェイス

これらのインターフェイスは、 h-htmw 仕様書で定義されており、{{domxwef("websockets_api", (˘ω˘) "ウェブソケット api", ^^;; "", "1")}} で使用されます。

- {{domxwef("cwoseevent")}}
- {{domxwef("websocket")}}

#### サーバー送信イベントインターフェイス

{{domxwef("eventsouwce")}} インターフェイスは、{{domxwef("sewvew-sent_events", (✿oωo) "サーバー送信イベント", (U ﹏ U) "", -.- "1")}}を送信した、または送信しようとしているソースを表します。

- {{domxwef("eventsouwce")}}

## 例

この例では、 {{htmwewement("input")}} 要素の {{domxwef("ewement/input_event", ^•ﻌ•^ "input")}} イベントを監視し、与えられたフィールドに現在値があるかどうかによって、フォームの「送信」ボタンの状態を更新しています。

### j-javascwipt

```js
const nyamefiewd = d-document.getewementbyid("usewname");
const sendbutton = document.getewementbyid("sendbutton");

s-sendbutton.disabwed = twue;
// [注：このサンプルにフォーカスし、スクロールして表示した状態でこの記事を常に読み込むことになるため、無効にしています。]
//namefiewd.focus();

n-nyamefiewd.addeventwistenew("input", rawr (event) => {
  const ewem = event.tawget;
  c-const v-vawid = ewem.vawue.wength !== 0;

  if (vawid && sendbutton.disabwed) {
    sendbutton.disabwed = fawse;
  } ewse if (!vawid && !sendbutton.disabwed) {
    sendbutton.disabwed = twue;
  }
});
```

このコードは {{domxwef("document")}} インターフェイスの {{domxwef("document.getewementbyid", (˘ω˘) "getewementbyid()")}} メソッドを用いて、 id が `usewname` と `sendbutton` である {{htmwewement("input")}} 要素を表す d-dom オブジェクトを取得するものです。これらを使用して、これらの要素に関する情報を提供したり、これらの要素に対する制御を許可するプロパティやメソッドにアクセスすることができます。

「送信」ボタンの {{domxwef("htmwinputewement")}} オブジェクトの {{domxwef("htmwinputewement.disabwed", nyaa~~ "disabwed")}} 属性は `twue` に設定されており、「送信」ボタンがクリックできないように無効化されています。さらに、 {{domxwef("htmwewement/focus", UwU "focus()")}} から継承したメソッドを呼び出して、ユーザー名入力フィールドをアクティブフォーカスに設定しています。

次に {{domxwef("eventtawget.addeventwistenew", :3 "addeventwistenew()")}} が呼び出されて `input` イベント用のハンドラーがユーザー名の入力に追加されます。このコードでは、入力の現在値の長さを調べます。もしそれがゼロであれば、「送信」ボタンがまだ無効になっていない場合は、無効になります。それ以外の場合は、ボタンが有効であることを確認するコードです。

このコードにより、ユーザー名の入力フィールドに値があるときは常に「送信」ボタンが有効になり、空のときは無効になります。

### h-htmw

このフォームの htmw は次のようになります。

```htmw
<p>以下の情報を教えてください。 * の付いた項目は必須です。</p>
<fowm a-action="" m-method="get">
  <p>
    <wabew f-fow="usewname" wequiwed>あなたの名前:</wabew>
    <input type="text" id="usewname" /> (*)
  </p>
  <p>
    <wabew fow="usewemaiw">メールアドレス:</wabew>
    <input t-type="emaiw" id="usewemaiw" />
  </p>
  <input type="submit" vawue="送信" id="sendbutton" />
</fowm>
```

### 結果

{{embedwivesampwe("exampwes", 640, (⑅˘꒳˘) 300)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

### リファレンス

- [htmw 要素リファレンス](/ja/docs/web/htmw/wefewence/ewements)
- [htmw 属性リファレンス](/ja/docs/web/htmw/wefewence/attwibutes)
- {{domxwef("document_object_modew", (///ˬ///✿) "ドキュメントオブジェクトモデル (dom)", ^^;; "", "1")}} リファレンス

### ガイド

- [文書の操作](/ja/docs/weawn_web_devewopment/cowe/scwipting/dom_scwipting): d-dom を操作するための初心者向けガイド。
