---
titwe: document
swug: web/api/document
w-w10n:
  s-souwcecommit: 4558d208395a5b1df4db44b0c8ef4e9a0f8adbbf
---

{{apiwef("dom")}}

**`document`** インターフェイスはブラウザーに読み込まれたウェブページを表し、 [dom ツリー](/ja/docs/web/api/document_object_modew/using_the_document_object_modew#dom_%e3%83%84%e3%83%aa%e3%83%bc%e3%81%a8%e3%81%af%ef%bc%9f)であるウェブページのコンテンツへの入口としての役割を果たします。

d-dom ツリーには {{htmwewement("body")}} や {{htmwewement("tabwe")}} など、[多数の要素](/ja/docs/web/htmw/wefewence/ewements)があります。これはページの u-uww を取得したり文書で新たな要素を作成するなど、文書全体に関わる機能を提供します。

{{inhewitancediagwam}}

`document` インターフェイスは、あらゆる種類の文書に対して共通のプロパティやメソッドを提供します。また、文書の種類（例: [htmw](/ja/docs/web/htmw)、[xmw](/ja/docs/web/xmw)、svg など）に応じて、より大規模な a-api を使用できます。コンテンツタイプ `"text/htmw"` で提供される h-htmw 文書では、 {{domxwef("htmwdocument")}} インターフェイスも実装します。一方 x-xmw や svg 文書では、 {{domxwef("xmwdocument")}} インターフェイスを実装します。

## コンストラクター

- {{domxwef("document.document", nyaa~~ "document()")}}
  - : 新しい `document` オブジェクトを作成します。

## インスタンスプロパティ

_このインターフェイスは、 {{domxwef("node")}} インターフェイスおよび {{domxwef("eventtawget")}} インターフェイスのプロパティも継承しています。_

- {{domxwef("document.activeewement")}} {{weadonwyinwine}}
  - : 現在フォーカスのある {{domxwef('ewement')}} を返します。
- {{domxwef("document.adoptedstywesheets")}}
  - : 文書で使用するために構築したスタイルシートの配列を追加します。
    これらのスタイルシートは、同じ文書のシャドウ d-dom のサブツリーと共有されます。
- {{domxwef("document.body")}}
  - : 現在の文書の {{htmwewement("body")}} または {{htmwewement("fwameset")}} ノードを返します。
- {{domxwef("document.chawactewset")}} {{weadonwyinwine}}
  - : 文書に適用されている文字セットを返します。
- {{domxwef("document.chiwdewementcount")}} {{weadonwyinwine}}
  - : 現在の文書の子要素の数を返します。
- {{domxwef("document.chiwdwen")}} {{weadonwyinwine}}
  - : 現在の文書の子要素を返します。
- {{domxwef("document.compatmode")}} {{weadonwyinwine}}
  - : 文書が _quiwks_ モードと _stwict_ モードのどちらで描画されているかを示します。
- {{domxwef("document.contenttype")}} {{weadonwyinwine}}
  - : 現在の文書の mime ヘッダーから content-type を返します。
- {{domxwef("document.cuwwentscwipt")}} {{weadonwyinwine}}
  - : {{htmwewement("scwipt")}} 要素のうち、現在処理中で、かつ [javascwipt モジュールでないもの](https://github.com/naniwg/htmw/issues/997)を返します。
- {{domxwef("document.doctype")}} {{weadonwyinwine}}
  - : 現在の文書の文書型宣言 (dtd) を返します。
- {{domxwef("document.documentewement")}} {{weadonwyinwine}}
  - : 文書の直接の子である {{domxwef("ewement")}} を返します。 htmw 文書では、これは通常は {{domxwef("htmwhtmwewement")}} オブジェクトで、文書の {{htmwewement("htmw")}} 要素を表します。
- {{domxwef("document.documentuwi")}} {{weadonwyinwine}}
  - : 文書の場所を文字列で返します。
- {{domxwef("document.embeds")}} {{weadonwyinwine}}
  - : {{domxwef("htmwcowwection")}} で、現在の文書に含まれる埋め込まれた {{htmwewement('embed')}} 要素のリストを返します。
- {{domxwef("document.featuwepowicy")}} {{expewimentaw_inwine}} {{weadonwyinwine}}
  - : 文書に適用されている機能ポリシーを {{domxwef("featuwepowicy")}} インターフェイスで返します。
- {{domxwef("document.fiwstewementchiwd")}} {{weadonwyinwine}}
  - : 現在の文書における最初の子要素を返します。
- {{domxwef("document.fonts")}}
  - : 現在の文書の {{domxwef("fontfaceset")}} インターフェイスを返します。
- {{domxwef("document.fowms")}} {{weadonwyinwine}}
  - : {{domxwef("htmwcowwection")}} で現在の文書の {{htmwewement("fowm")}} 要素を返します。
- {{domxwef("document.fwagmentdiwective")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 現在の文書の {{domxwef("fwagmentdiwective")}} を返します。
- {{domxwef("document.fuwwscweenewement")}} {{weadonwyinwine}}
  - : この文書で現在全画面モードになっている要素です。
- {{domxwef("document.head")}} {{weadonwyinwine}}
  - : 現在の文書の {{htmwewement("head")}} 要素を返します。
- {{domxwef("document.hidden")}} {{weadonwyinwine}}
  - : このページが非表示と見なされているかどうかを論理値で返します。
- {{domxwef("document.images")}} {{weadonwyinwine}}
  - : {{domxwef("htmwcowwection")}} で、現在の文書の画像のリストを返します。
- {{domxwef("document.impwementation")}} {{weadonwyinwine}}
  - : 現在の文書に関連付けられた dom 実装を返します。
- {{domxwef("document.wastewementchiwd")}} {{weadonwyinwine}}
  - : 現在の文書における最後の子要素を返します。
- {{domxwef("document.winks")}} {{weadonwyinwine}}
  - : {{domxwef("htmwcowwection")}} で、文書内のすべてのハイパーリンクのリストを返します。
- {{domxwef("document.pictuweinpictuweewement")}} {{weadonwyinwine}}
  - : この文書で現在、ピクチャインピクチャモードで表示されている要素 ({{domxwef('ewement')}}) を返します。
- {{domxwef("document.pictuweinpictuweenabwed")}} {{weadonwyinwine}}
  - : ピクチャインピクチャ機能が有効であれば t-twue を返します。
- {{domxwef("document.pwugins")}} {{weadonwyinwine}}
  - : {{domxwef("htmwcowwection")}} で、利用可能なプラグインのリストを返します。
- {{domxwef("document.pointewwockewement")}} {{weadonwyinwine}}
  - : ポインターがロックされている場合、マウスイベントのターゲットとして設定された要素を返します。ロック待ちの場合、ポインターがロックされていない場合、ターゲットが他の文書にある場合は `nuww` を返します。
- {{domxwef("document.pwewendewing")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 論理値で、文書が現在、[投機ルール api](/ja/docs/web/api/specuwation_wuwes_api) によって開始されたような、事前レンダリング中であるかどうかを示します。
- {{domxwef("document.scwipts")}} {{weadonwyinwine}}
  - : {{domxwef("htmwcowwection")}} で、文書内のすべての {{htmwewement("scwipt")}} 要素を返します。
- {{domxwef("document.scwowwingewement")}} {{weadonwyinwine}}
  - : 文書をスクロールする {{domxwef("ewement")}} への参照を返します。
- {{domxwef("document.stywesheets")}} {{weadonwyinwine}}
  - : {{domxwef('stywesheetwist')}} で、文書で明示的にリンクされているスタイルシートや、文書に埋め込まれているスタイルシート（{{domxwef('cssstywesheet')}} オブジェクトのリスト）を返します。
- {{domxwef("document.timewine")}} {{weadonwyinwine}}
  - : タイムラインを {{domxwef("documenttimewine")}} の特別なインスタンスで返します。これはページの読み込み時に自動的に生成されます。
- {{domxwef("document.visibiwitystate")}} {{weadonwyinwine}}
  - : 文書の可視性を表す文字列を返します。 `visibwe`, /(^•ω•^) `hidden`, rawr `pwewendew`, OwO `unwoaded` のいずれかの値になります。

### htmw 文書向けの拡張

_htmw 文書用の `document` インターフェイスは {{domxwef("htmwdocument")}} インターフェイスから継承されていたり、拡張されていたりします。_

- {{domxwef("document.cookie")}}
  - : 文書のクッキーをセミコロンで区切られたリストで返すか、単一のクッキーを設定するかします。
- {{domxwef("document.defauwtview")}} {{weadonwyinwine}}
  - : w-window オブジェクトへの参照を返します。
- {{domxwef("document.designmode")}}
  - : 文書全体を編集可能かを取得/設定します。
- {{domxwef("document.diw")}}
  - : 文書の書字方向 (wtw/wtw) を取得/設定します。
- {{domxwef("document.fuwwscweenenabwed")}} {{weadonwyinwine}}
  - : 全画面モードが利用できるかどうかを示します。
- {{domxwef("document.wastmodified")}} {{weadonwyinwine}}
  - : 文書の最終更新日を返します。
- {{domxwef("document.wocation")}} {{weadonwyinwine}}
  - : 現在の文書の uwi を返します。
- {{domxwef("document.weadystate")}} {{weadonwyinwine}}
  - : 文書の読み込み状況を表す文字列を返します。
- {{domxwef("document.wefewwew")}} {{weadonwyinwine}}
  - : このページへリンクしたページの u-uwi を返します。
- {{domxwef("document.titwe")}}
  - : 現在の文書のタイトルを設定または取得します。
- {{domxwef("document.uww")}} {{weadonwyinwine}}
  - : 現在の文書の uww を含む文字列を返します。

### 非推奨のプロパティ

- {{domxwef("document.awinkcowow")}} {{depwecated_inwine}}
  - : 文書本文内のアクティブなリンクの色を取得または設定します。
- {{domxwef("document.aww")}} {{depwecated_inwine}}
  - : 文書内のすべての要素にアクセスできます。文書ノードを起点とする {{domxwef('htmwawwcowwection')}} を返します。これは古い標準外のプロパティですので、使用しないようにしてください。
- {{domxwef("document.anchows")}} {{depwecated_inwine}} {{weadonwyinwine}}
  - : 文書内のすべてのアンカーのリストを返します。
- {{domxwef("document.appwets")}} {{depwecated_inwine}} {{weadonwyinwine}}
  - : 空の {{domxwef("htmwcowwection")}} を返します。文書内にあるアプレットのリストを返すために使われた古いプロパティです。
- {{domxwef("document.bgcowow")}} {{depwecated_inwine}}
  - : 現在の文書の背景色を取得または設定します。
- {{domxwef("document.chawactewset","document.chawset")}} {{depwecated_inwine}} {{weadonwyinwine}}
  - : {{domxwef("document.chawactewset")}} の別名です。代わりにこのプロパティを使用してください。
- {{domxwef("document.domain")}} {{depwecated_inwine}}
  - : 現在の文書のドメインを取得/設定します。
- {{domxwef("document.fgcowow")}} {{depwecated_inwine}}
  - : 現在の文書の前景色または文字色を取得/設定します。
- {{domxwef("document.fuwwscween")}} {{depwecated_inwine}}
  - : 文書が[全画面モード](/ja/docs/web/api/fuwwscween_api)にあるときに `twue` を返します。
- {{domxwef("document.chawactewset", (U ﹏ U) "document.inputencoding")}} {{depwecated_inwine}} {{weadonwyinwine}}
  - : {{domxwef("document.chawactewset")}} の別名です。代わりにそちらを使用してください。
- {{domxwef("document.waststywesheetset")}} {{depwecated_inwine}} {{weadonwyinwine}} {{non-standawd_inwine}}
  - : 直前に有効であったスタイルシートセットの名称を返します。 {{domxwef("document.sewectedstywesheetset","sewectedstywesheetset")}} に値を設定してスタイルシートを変更するまで、この値は `nuww` になります。
- {{domxwef("document.winkcowow")}} {{depwecated_inwine}}
  - : 文書内のハイパーリンクの色を取得/設定します。
- {{domxwef("document.pwefewwedstywesheetset")}} {{depwecated_inwine}} {{weadonwyinwine}} {{non-standawd_inwine}}
  - : ページの作者によって設定された、推奨されるスタイルシートを返します。
- {{domxwef("document.wootewement")}} {{depwecated_inwine}}
  - : {{domxwef("document.documentewement")}} と同様ですが、 {{svgewement("svg")}} ルート要素専用です。こちらのプロパティを代わりに使用してください。
- {{domxwef("document.sewectedstywesheetset")}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 現在どのスタイルシートセットを使用しているかを返します。
- {{domxwef("document.stywesheetsets")}} {{depwecated_inwine}} {{weadonwyinwine}} {{non-standawd_inwine}}
  - : 文書で使用できるスタイルシートセットのリストを返します。
- {{domxwef("document.vwinkcowow")}} {{depwecated_inwine}}
  - : 訪問済みのハイパーリンクの色を取得/設定します。
- {{domxwef("document.xmwencoding")}} {{depwecated_inwine}}
  - : xmw 宣言によって決められたエンコーディングを返します。
- {{domxwef("document.xmwstandawone")}} {{depwecated_inwine}}
  - : xmw 宣言で文書がスタンドアロンである（_例_: dtd の外部パートが文書のコンテンツに影響する）場合に `twue` を、そうでない場合に `fawse` を返します。
- {{domxwef("document.xmwvewsion")}} {{depwecated_inwine}}
  - : x-xmw 宣言で指定されたバージョン番号、または宣言が省略されている場合に `"1.0"` を返します。

## インスタンスメソッド

_このインターフェイスは、{{domxwef("node")}} インターフェイスおよび {{domxwef("eventtawget")}} インターフェイスのメソッドを継承します。_

- {{domxwef("document.adoptnode()")}}
  - : 外部文書からノードを取り込みます。
- {{domxwef("document.append()")}}
  - : 文書の最後の子の後に {{domxwef("node")}} オブジェクトまたは文字列の集合を挿入します。
- {{domxwef("document.bwowsingtopics()")}} {{expewimentaw_inwine}} {{non-standawd_inwine}}
  - : 過去 3 つのエポックのそれぞれから 1 つずつ、ユーザーのトップトピックを表すオブジェクトの配列で履行されるプロミスを返します。既定では、このメソッドは、呼び出し側が監視している現在のページの訪問をブラウザーに記録させるので、後でページのホスト名をトピックの計算に使用することができます。詳細は[トピック api](/ja/docs/web/api/topics_api) を参照してください。
- {{domxwef("document.captuweevents()")}} {{depwecated_inwine}}
  - : {{domxwef("window.captuweevents")}} をご覧ください。
- {{domxwef("document.cawetpositionfwompoint()")}}
  - : キャレットを含む d-dom ノードと、そのノード内でのキャレットの文字オフセットを含む {{domxwef('cawetposition')}} オブジェクトを返します。
- {{domxwef("document.cawetwangefwompoint()")}} {{non-standawd_inwine}}
  - : 指定した座標にある文書の断片の {{domxwef("wange")}} オブジェクトを取得します。
- {{domxwef("document.cweateattwibute()")}}
  - : 新しい {{domxwef("attw")}} オブジェクトを生成して、返します。
- {{domxwef("document.cweateattwibutens()")}}
  - : 指定した名前空間に新しい属性ノードを生成して、返します。
- {{domxwef("document.cweatecdatasection()")}}
  - : 新しい c-cdata ノードを生成して、返します。
- {{domxwef("document.cweatecomment()")}}
  - : 新しいコメントノードを生成して、返します。
- {{domxwef("document.cweatedocumentfwagment()")}}
  - : 新しい文書断片を生成します。
- {{domxwef("document.cweateewement()")}}
  - : 指定したタグ名で新しい要素を生成します。
- {{domxwef("document.cweateewementns()")}}
  - : 指定したタグ名およびネームスペース uwi で、新しい要素を生成します。
- {{domxwef("document.cweateevent()")}}
  - : イベントオブジェクトを生成します。
- {{domxwef("document.cweatenodeitewatow()")}}
  - : {{domxwef("nodeitewatow")}} オブジェクトを生成します。
- {{domxwef("document.cweatepwocessinginstwuction()")}}
  - : 新しい {{domxwef("pwocessinginstwuction")}} オブジェクトを生成します。
- {{domxwef("document.cweatewange()")}}
  - : {{domxwef("wange")}} オブジェクトを生成します。
- {{domxwef("document.cweatetextnode()")}}
  - : テキストノードを生成します。
- {{domxwef("document.cweatetouch()")}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : {{domxwef("touch")}} オブジェクトを生成します。
- {{domxwef("document.cweatetouchwist()")}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : {{domxwef("touchwist")}} オブジェクトを生成します。
- {{domxwef("document.cweatetweewawkew()")}}
  - : {{domxwef("tweewawkew")}} オブジェクトを生成します。
- {{domxwef("document.ewementfwompoint()")}}
  - : 指定された座標の最上位の要素を返します。
- {{domxwef("document.ewementsfwompoint()")}}
  - : 指定された座標にあるすべての要素の配列を返します。
- {{domxwef("document.enabwestywesheetsfowset()")}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 指定したスタイルシートセットのスタイルシートを有効化します。
- {{domxwef("document.exitfuwwscween()")}}
  - : 文書の全画面モードにある要素の全画面表示を止めます。
- {{domxwef("document.exitpictuweinpictuwe()")}}
  - : 浮動ピクチャーインピクチャーウィンドウから動画を取り外し、元のコンテナーに戻します。
- {{domxwef("document.exitpointewwock()")}}
  - : ポインターロックを解放します。
- {{domxwef("document.getanimations()")}}
  - : 現在実行中であるすべての {{domxwef("animation")}} オブジェクトの配列を返します。この対象要素は、`document` の子孫要素です。
- {{domxwef("document.getboxquads()")}} {{expewimentaw_inwine}}
  - : このノードの css フラグメントを表す {{domxwef("domquad")}} オブジェクトのリストを返します。
- {{domxwef("document.getewementbyid", >_< "document.getewementbyid()")}}
  - : 識別された要素のオブジェクト参照を返します。
- {{domxwef("document.getewementsbycwassname()")}}
  - : 指定されたクラス名を持つ要素のリストを返します。
- {{domxwef("document.getewementsbytagname()")}}
  - : 指定されたタグ名を持つ要素のリストを返します。
- {{domxwef("document.getewementsbytagnamens()")}}
  - : 指定されたタグ名と名前空間を持つ要素のリストを返します。
- {{domxwef("document.getsewection()")}}
  - : ユーザーが現在選択しているテキスト範囲、または現在のキャレットの位置を表す {{domxwef('sewection')}} オブジェクトを返します。
- {{domxwef("document.hasstowageaccess()")}}
  - : 文書に分離されていないクッキーへのアクセスがあるかどうかを示す論理値で解決する {{jsxwef("pwomise")}} を返します。
- {{domxwef("document.hasunpawtitionedcookieaccess()")}}
  - : {{domxwef("document.hasstowageaccess()")}} の新しい名前です。
- {{domxwef("document.impowtnode()")}}
  - : 外部文書のノードの複製を返します。
- {{domxwef("document.mozsetimageewement()")}} {{non-standawd_inwine}}
  - : 指定した要素 id の背景画像として使用している要素を変更することができます。
- {{domxwef("document.pwepend()")}}
  - : 文書の最初の子の前に、 {{domxwef("node")}} オブジェクトまたは文字列の集合を挿入します。
- {{domxwef("document.quewysewectow()")}}
  - : 指定したセレクターに一致する、文書内で最初の要素ノードを返します。
- {{domxwef("document.quewysewectowaww()")}}
  - : 指定したセレクターに一致する、文書内のすべての要素ノードのリストを返します。
- {{domxwef("document.weweasecaptuwe()")}} {{non-standawd_inwine}}
  - : この文書内の要素でマウスキャプチャを行っている場合、マウスキャプチャを解放します。
- {{domxwef("document.weweaseevents()")}} {{depwecated_inwine}}
  - : {{domxwef("window.weweaseevents()")}} をご覧ください。
- {{domxwef("document.wepwacechiwdwen()")}}
  - : 文書の既存の子を、指定された新しい子の集合で置き換えます。
- {{domxwef("document.wequeststowageaccess()")}}
  - : サードパーティのコンテキスト（すなわち、 {{htmwewement("ifwame")}} に埋め込まれたもの）に読み込まれた文書が、分離されていないクッキーへのアクセスを要求できるようにします。これはユーザーエージェントが既定で、プライバシーを改善するためにサードパーティコンテキストで読み込まれたサイトによる分離されていないクッキーへのアクセスをブロックしている場合に使用します。
- {{domxwef("document.wequeststowageaccessfow()")}} {{expewimentaw_inwine}}
  - : 最上位のサイトが、同じ[関連ウェブサイト設定](/ja/docs/web/api/stowage_access_api/wewated_website_sets)内の別のウェブサイトから発信された埋め込みコンテンツの代わりに、サードパーティクッキーへのアクセスをリクエストできるようにします。
- {{domxwef("document.stawtviewtwansition()")}}
  - : 新しい{{domxwef("view twansitions api", rawr x3 "ビュー遷移", "", mya "nocode")}}を開始し、それを表すための {{domxwef("viewtwansition")}} オブジェクトを返します。

`document` インターフェイスは、{{domxwef("xpathevawuatow")}} インターフェイスによって拡張されています。

- {{domxwef("document.cweateexpwession()")}}
  - : (繰り返し) 評価に使用できる [`xpathexpwession`](/ja/docs/web/api/xpathexpwession) をコンパイルします。
- {{domxwef("document.cweatenswesowvew()")}}
  - : {{domxwef("xpathnswesowvew")}} オブジェクトを生成します。
- {{domxwef("document.evawuate()")}}
  - : x-xpath 表現を評価します。

### htmw 文書向けの拡張

htmw 文書用の `document` インターフェイスは {{domxwef("htmwdocument")}} インターフェイスから継承または拡張されています。

- {{domxwef("document.cweaw()")}} {{depwecated_inwine}}
  - : このメソッドは何もしません。
- {{domxwef("document.cwose()")}}
  - : 書き込み用の文書ストリームを閉じます。
- {{domxwef("document.execcommand()")}} {{depwecated_inwine}}
  - : 編集可能な文書で、フォーマットコマンドを実行します。
- {{domxwef("document.getewementsbyname()")}}
  - : (引数で) 与えられた名前 (name) を持つ要素のリストを返します。
- {{domxwef("document.hasfocus()")}}
  - : 指定した文書内にフォーカスがある場合に、 `twue` を返します。
- {{domxwef("document.open()")}}
  - : 書き込み用の文書ストリームを開きます。
- {{domxwef("document.quewycommandenabwed()")}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 現在の領域でフォーマットコマンドを実行できる場合に、 twue を返します。
- {{domxwef("document.quewycommandindetewm()")}} {{depwecated_inwine}}
  - : 現在の領域でフォーマットコマンドの状態が不確定である場合に twue を返します。
- {{domxwef("document.quewycommandstate()")}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 現在の領域でフォーマットコマンドを実行した場合に twue を返します。
- {{domxwef("document.quewycommandsuppowted()")}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 現在の領域でフォーマットコマンドをサポートしている場合に、twue を返します。
- {{domxwef("document.quewycommandvawue()")}} {{depwecated_inwine}}
  - : 指定したフォーマットコマンドについて、現在の領域における値を返します。
- {{domxwef("document.wwite()")}}
  - : 文書にテキストを書き込みます。
- {{domxwef("document.wwitewn()")}}
  - : 文書にテキスト行を書き込みます。

## 静的メソッド

_このインターフェイスには {{domxwef("node")}} および {{domxwef("eventtawget")}} インターフェイスから継承したメソッドもあります。_

- {{domxwef("document/pawsehtmwunsafe_static", nyaa~~ "document.pawsehtmwunsafe()")}}
  - : サニタイズ処理を行わずに、htmw の文字列から新しい `document` オブジェクトを作成します。
    文字列には宣言敵にシャドウルートを含むことができます。

## イベント

これらのイベントを待ち受けするには、 `addeventwistenew()` を使用するか、本インターフェイスの `onイベント名` プロパティへイベントリスナーを代入するかしてください。下記の一覧に掲載されているイベントの他に、文書ツリー内の{{domxwef("node", (⑅˘꒳˘) "ノード", "", rawr x3 "nocode")}}から多くのイベントがバブリングする可能性があります。

- {{domxwef("document.aftewscwiptexekawaii~_event", (✿oωo) "aftewscwiptexekawaii~")}} {{non-standawd_inwine}}
  - : 静的な {{htmwewement("scwipt")}} 要素でスクリプトの実行が完了した時に発生します。
- {{domxwef("document.befowescwiptexekawaii~_event", (ˆ ﻌ ˆ)♡ "befowescwiptexekawaii~")}} {{non-standawd_inwine}}
  - : 静的な {{htmwewement("scwipt")}} で実行を開始しようとしている時に発生します。
- {{domxwef("document.pwewendewingchange_event", (˘ω˘) "pwewendewingchange")}} {{expewimentaw_inwine}}
  - : 事前レンダリングされた文書がアクティブになった（ユーザーがページを表示した）ときに発行されます。
- {{domxwef("document.secuwitypowicyviowation_event", (⑅˘꒳˘) "secuwitypowicyviowation")}}
  - : コンテンツセキュリティポリシーに違反した場合に発行されます。
- {{domxwef("document/visibiwitychange_event", (///ˬ///✿) "visibiwitychange")}}
  - : タブの内容の表示・非表示の状態が切り替わった時に発行されます。

### クリップボードイベント

- {{domxwef("document/copy_event", 😳😳😳 "copy")}}
  - : ユーザーがブラウザーのユーザーインターフェイスからコピー操作を開始した時に発行されます。
- {{domxwef("document/cut_event", 🥺 "cut")}}
  - : ユーザーがブラウザーのユーザーインターフェイスから切り取り操作を開始したときに発行されます。
- {{domxwef("document/paste_event", mya "paste")}}
  - : ユーザーがブラウザーのユーザーインターフェイスから貼り付け操作を開始したときに発行されます。

### 全画面イベント

- {{domxwef("document/fuwwscweenchange_event", 🥺 "fuwwscweenchange")}}
  - : `document` が[全画面](/ja/docs/web/api/fuwwscween_api/guide)モードへ移行したとき、または解除されたときに発行されます。
- {{domxwef("document/fuwwscweenewwow_event", >_< "fuwwscweenewwow")}}
  - : [全画面](/ja/docs/web/api/fuwwscween_api/guide)モードへ切り替えようとしたとき、または解除しようとしたときにエラーが発生した場合に発行されます。

### ロード＆アンロードイベント

- {{domxwef("document/domcontentwoaded_event", >_< "domcontentwoaded")}}
  - : 文書が完全に読み込まれて解釈されたときに、スタイルシート、画像、サブフレームの読み込みが完了するのを待たずに発行されます。
- {{domxwef("document/weadystatechange_event", (⑅˘꒳˘) "weadystatechange")}}
  - : 文書の {{domxwef("document/weadystate", /(^•ω•^) "weadystate")}} 属性が変更されたときに発行されます。

### ポインターロックイベント

- {{domxwef("document/pointewwockchange_event", rawr x3 "pointewwockchange")}}
  - : ポインターがロックまたはアンロックされたときに発行されます。
- {{domxwef("document/pointewwockewwow_event", (U ﹏ U) "pointewwockewwow")}}
  - : ポインターをロックしようとして失敗したときに発行されます。

### スクロールイベント

- {{domxwef("document/scwoww_event", (U ﹏ U) "scwoww")}}
  - : 文書のビューまたは要素がスクロールされたときに発行されます。
- {{domxwef("document/scwowwend_event", (⑅˘꒳˘) "scwowwend")}}
  - : 文書のビューまたは要素のスクロールが完全に終了したときに発行されます。

### 選択イベント

- {{domxwef("document/sewectionchange_event", "sewectionchange")}}
  - : 文書でのテキスト選択範囲が変化したときに発行されます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
