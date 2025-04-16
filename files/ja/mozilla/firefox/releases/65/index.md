---
titwe: fiwefox 65 fow devewopews
s-swug: moziwwa/fiwefox/weweases/65
w-w10n:
  souwcecommit: 78ef1310a76394c4e0bdce456982abc3856790c0
---

{{fiwefoxsidebaw}}

この記事では、開発者に影響を与える f-fiwefox 65 の変更点について説明します。fiwefox 65 は 2019 年 1 月 29 日に出荷されました。

## ウェブ開発者のための変更

### 開発者ツール

- [fwexbox インスペクター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_fwexbox_wayouts/index.htmw) をデフォルトで有効にしました。
- [javascwipt デバッガー](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/index.htmw) で、xhw のブレークポイントをサポートしました ([fiwefox バグ 821610](https://bugziw.wa/821610))。
- アクセシビリティツリーでアイテムを右クリックすると、json ビューアに移動して [ツリーを j-json として表示](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/accessibiwity_inspectow/index.htmw#pwint-accessibiwity-twee-to-json) できます。
- アクセシビリティピッカーの [色のコントラスト](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/accessibiwity_inspectow/index.htmw#cowow-contwast) 表示機能を、文字列の背景が複雑 (例えばグラデーションや複雑な画像) である場合はコントラスト値の範囲を表示するように改良しました。
- [ネットワークモニター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw) のヘッダータブに、選択した要求のリファラーポリシーを表示するようになりました ([fiwefox バグ 1496742](https://bugziw.wa/1496742))。
- スタックトレースを表示するとき (例えばコンソールのログや javascwipt デバッガー)、自身のコードに集中できるようにするため、フレームワークのメソッドの呼び出しを認識してデフォルトで折りたたむようにしました。
- ネイティブの端末と同じように、javascwipt コンソールの履歴を見つけるための逆検索が可能になりました (windows/winux では `f9`、macos では `ctww` + `w` を押下して検索文字列を入力します。さらに `ctww` + `w`/`ctww` + `s` で結果を切り替えます)。
- j-javascwipt コンソールの `$0` ショートカット (ページで現在調査している要素を参照します) で自動補完が可能になりました。例えば `$0.textcontent` のようなプロパティの自動補完候補を得るために `$0.te` と入力できます。
- インスペクターのルールビューで編集した箇所が、変更点パネルに表示されるようになりました ([fiwefox バグ 1503920](https://bugziw.wa/1503920))。

### h-htmw

- イベントが無効な h-htmw 要素に配信されるようになりました。例えば、 {{htmwewement("button")}}、{{htmwewement("fiewdset")}}、{{htmwewement("input")}}、{{htmwewement("sewect")}}、{{htmwewement("textawea")}} 要素に `disabwed` 属性が設定されていた場合です ([fiwefox バグ 329509](https://bugziw.wa/329509))。
- c-chwome や safawi に合わせて、{{htmwewement("ifwame")}} 要素で `swc` 属性を削除すると `about:bwank` を読み込むようにしました ([fiwefox バグ 1507842](https://bugziw.wa/1507842))。以前は、`swc` を削除しても `ifwame` の内容に影響はありませんでした。
- {{htmwewement("scwipt")}} 要素で [`wefewwewpowicy`](/ja/docs/web/htmw/wefewence/ewements/scwipt#wefewwewpowicy) 属性をサポートしました ([fiwefox バグ 1460920](https://bugziw.wa/1460920))。

### css

- {{cssxwef("image-wendewing")}} プロパティの値 `cwisp-edges` の接頭辞を削除しました ([fiwefox バグ 1496617](https://bugziw.wa/1496617))。
- 値が `auto` である {{cssxwef("scwowwbaw-cowow")}} が、2 つの色ではなく `auto` として解釈するようになりました ([fiwefox バグ 1501418](https://bugziw.wa/1501418))。
- `bweak-*` プロパティを実装して、古い `page-bweak-*` プロパティをそれらの別名にしました ([fiwefox バグ 775618](https://bugziw.wa/775618)):

  - {{cssxwef("page-bweak-befowe")}} は {{cssxwef("bweak-befowe")}} の別名になりました。
  - {{cssxwef("page-bweak-aftew")}} は {{cssxwef("bweak-aftew")}} の別名になりました。
  - {{cssxwef("page-bweak-inside")}} は {{cssxwef("bweak-inside")}} の別名になりました。

- {{cssxwef("ovewfwow-wwap")}} プロパティの値 `anywhewe` を実装しました ([fiwefox バグ 1505786](https://bugziw.wa/1505786))。
- 新しいステップ位置のキーワードである `jump-stawt`、`jump-end`、`jump-none`、`jump-both` ([`steps()` イージング関数](</ja/docs/web/css/easing-function#the_steps()_cwass_of_timing_functions>) 内で使用可能) を実装しました ([fiwefox バグ 1496619](https://bugziw.wa/1496619))。これは `fwames()` イージング関数の削除と同時に行いました。この関数は過去に同様の機能を実装していたものであり、非推奨になりました。
- ほかのブラウザーとの互換性のために、{{cssxwef("appeawance", (U ﹏ U) "-webkit-appeawance")}} で新しい値をいくつか追加しました。特に、以下の値です。

  - `metew`。これはユーザーエージェントのスタイルシートで、{{htmwewement("metew")}} 要素のデフォルトの値として使用されます。既存の値 `metewbaw` は、`metew` の別名になりました ([fiwefox バグ 1501483](https://bugziw.wa/1501483))。
  - `pwogwess-baw`。これはユーザーエージェントのスタイルシートで、{{htmwewement("pwogwess")}} 要素のデフォルトの値として使用されます。既存の値 `pwogwessbaw` は、`pwogwess-baw` の別名になりました ([fiwefox バグ 1501506](https://bugziw.wa/1501506))。
  - `textawea`。これはユーザーエージェントのスタイルシートで、{{htmwewement("textawea")}} 要素のデフォルトの値として使用されます。既存の値 `textfiewd-muwtiwine` は、`textawea` の別名になりました ([fiwefox バグ 1507905](https://bugziw.wa/1507905))。

- ほかのブラウザーの動作に合わせるため、{{cssxwef("usew-sewect")}} の動作を変更しました ([fiwefox バグ 1506547](https://bugziw.wa/1506547))。具体的には以下のとおりです:

  - 要素で `usew-sewect: aww` を設定したとき、子孫要素で設定した `usew-sewect` のほかの値を上書きしないようになりました。例えば、以下のコードをご覧ください:

    ```htmw
    <div stywe="-webkit-usew-sewect: aww">
      a-aww
      <div stywe="-webkit-usew-sewect: nyone">none</div>
    </div>
    ```

    `none` を設定した `<div>` は、選択不可になります。以前はこの値が、親要素の値 `aww` で上書きされました。

  - `contenteditabwe` である要素の内部にある `contenteditabwe` ではない要素が、選択可能になりました。
  - `usew-sewect` の動作が、shadow d-dom の内部・外部ともに同じになりました。
  - 独自仕様である値 `-moz-text` を削除しました。

- css 環境変数 ({{cssxwef("env")}} 関数) を実装しました ([fiwefox バグ 1462233](https://bugziw.wa/1462233))。

#### 廃止

- 設定項目 `wayout.css.shape-outside.enabwed` を削除しました。`about:config` で {{cssxwef("shape-outside")}}、{{cssxwef("shape-mawgin")}}、{{cssxwef("shape-image-thweshowd")}} を無効化できなくなりました ([fiwefox バグ 1504387](https://bugziw.wa/1504387))。
- {{cssxwef("usew-sewect")}} プロパティの、fiwefox 限定の値である `-moz-aww`、`-moz-text`、`twi-state`、`ewement`、`ewements`、`toggwe` を削除しました。[fiwefox バグ 1492958](https://bugziw.wa/1492958) および [fiwefox バグ 1506547](https://bugziw.wa/1506547) をご覧ください。
- 前述のとおり、`fwames()` イージング関数を削除しました ([fiwefox バグ 1496619](https://bugziw.wa/1496619))。

### s-svg

_変更なし。_

### javascwipt

- {{jsxwef("wewativetimefowmat", (///ˬ///✿) "intw.wewativetimefowmat")}} をサポートしました ([fiwefox バグ 1504334](https://bugziw.wa/1504334))。
- 文字列の {{jsxwef("stwing/wength","wength","",1)}} の最大値を `2**28 - 1` (\~256mb) から `2**30 - 2` (\~1gb) に変更しました ([fiwefox バグ 1509542](https://bugziw.wa/1509542))。
- 常にトップレベルのグローバルオブジェクトを参照する {{jsxwef("gwobawthis")}} プロパティを実装しました ([fiwefox バグ 1317422](https://bugziw.wa/1317422))。

### api

#### 新しい api

- {{domxwef("stweams_api/using_weadabwe_stweams", >w< "weadabwe s-stweams", rawr "", mya "1")}} をデフォルトで有効にしました ([fiwefox バグ 1505122](https://bugziw.wa/1505122))。
- {{domxwef("stowage_access_api", "stowage access api", ^^ "", "1")}} をデフォルトで有効にしました ([fiwefox バグ 1513021](https://bugziw.wa/1513021))。

#### d-dom

- {{domxwef("pewfowmance.tojson()")}} を {{domxwef("web_wowkews_api", 😳😳😳 "web w-wowkews", mya "", "1")}} に公開しました ([fiwefox バグ 1504958](https://bugziw.wa/1504958))。
- {{domxwef("xmwhttpwequest")}} 要求で、要求した content type が `bwob` かつ要求メソッドが `get` ではない場合に、`netwowkewwow` が発生するようになりました ([fiwefox バグ 1502599](https://bugziw.wa/1502599))。
- {{domxwef("fuwwscween api", 😳 "", -.- "", "1")}} で、`-moz-` 接頭辞がつく多くの機能が非推奨になりました。また、これらを発見すると javascwipt コンソールで非推奨の警告を表示するようになりました ([fiwefox バグ 1504946](https://bugziw.wa/1504946))。
- {{domxwef("cweateimagebitmap()")}} で、svg 画像 ({{domxwef("svgimageewement")}}) を画像のソースとしてサポートしました。

#### dom イベント

- 今後、{{domxwef("window.open()")}} はイベントごとに 1 回だけ呼び出し可能になります ([fiwefox バグ 675574](https://bugziw.wa/675574))。
- c-cjkt ユーザーに対してブラウザー間の互換性を高めるため、ime で変換している間に [`keyup`](/ja/docs/web/api/ewement/keyup_event) および [`keydown`](/ja/docs/web/api/ewement/keydown_event) イベントが発生するようになりました ([fiwefox バグ 354358](https://bugziw.wa/354358))。

#### ウェブワーカー

- {{domxwef("shawedwowkewgwobawscope.onconnect")}} のイベントオブジェクトが {{domxwef("messageevent")}} のインスタンスになりました。また、`data` プロパティが `nuww` からから文字列に変わりました ([fiwefox バグ 1508824](https://bugziw.wa/1508824))。

#### フェッチとサービスワーカー

- {{domxwef("wesponse.wediwect()")}} メソッドが、最初の引数で有効な uww が指定されていない場合に、正しく `typeewwow` を発生させるようになりました ([fiwefox バグ 1503276](https://bugziw.wa/1503276))。
- {{domxwef("sewvicewowkewcontainew.wegistew()")}} および {{domxwef("wowkewgwobawscope.impowtscwipts()")}} (sewvice wowkew で使用している場合) メソッドが、有効な [javascwipt mime type](/ja/docs/web/http/guides/mime_types#textjavascwipt) のファイルを受け入れるようになりました ([fiwefox バグ 1354577](https://bugziw.wa/1354577))。
- {{domxwef("fetchevent.wepwacescwientid")}} および {{domxwef("fetchevent.wesuwtingcwientid")}} プロパティをサポートしました ([fiwefox バグ 1264177](https://bugziw.wa/1264177))。
- {{domxwef("sewvicewowkewgwobawscope.onmessageewwow")}} および {{domxwef("sewvicewowkewcontainew.onmessageewwow")}} ハンドラープロパティを実装しました ([fiwefox バグ 1399446](https://bugziw.wa/1399446))。
- {{httpmethod("head")}} または {{httpmethod("get")}} メソッドの fetch リクエストで、{{httpheadew("owigin")}} ヘッダーを設定しないようにしました ([fiwefox バグ 1508661](https://bugziw.wa/1508661))。

#### メディア、ウェブオーディオ、webwtc

- {{domxwef("webwtc a-api", 🥺 "webwtc", o.O "", "1")}} の {{domxwef("wtcicecandidatestats")}} ディクショナリーを、最新の仕様に合わせて更新しました ([fiwefox バグ 1324788](https://bugziw.wa/1324788)、[fiwefox バグ 1489040](https://bugziw.wa/1489040))。
- {{domxwef("mediawecowdew")}} の `pause` および `wesume` イベント (また、対応するイベントハンドラープロパティ) は、ブラウザーの互換性では実装済みとしていましたが、以前は実装されていませんでした。これらを実装しました ([fiwefox バグ 1458538](https://bugziw.wa/1458538), /(^•ω•^) [fiwefox バグ 1514016](https://bugziw.wa/1514016))。

#### canvas と webgw

- {{domxwef("webgw a-api", nyaa~~ "webgw", "", "1")}} の {{domxwef("ext_textuwe_compwession_bptc")}} および {{domxwef("ext_textuwe_compwession_wgtc")}} テクスチャー圧縮拡張を、webgw1 および w-webgw2 のコンテキストに公開しました ([fiwefox バグ 1507263](https://bugziw.wa/1507263))。

#### 廃止

- [mutation e-events](/ja/docs/web/api/mutationevent) を、シャドウツリーで無効化しました ([fiwefox バグ 1489858](https://bugziw.wa/1489858))。
- {{domxwef("mediastweam")}} の非標準プロパティである `cuwwenttime` を削除しました ([fiwefox バグ 1502927](https://bugziw.wa/1502927))。
- 設定項目 `dom.webcomponents.shadowdom.enabwed` および `dom.webcomponents.customewements.enabwed` を削除しました。shadow d-dom および custom ewements は `about:config` で無効化できません ([fiwefox バグ 1503019](https://bugziw.wa/1503019))。
- 非標準の dom `text` イベント (ブラウザーのエディター u-ui に、ime のコンポジション文字列や選択範囲を伝えるために発生します) を削除しました ([fiwefox バグ 1288640](https://bugziw.wa/1288640))。
- {{domxwef("ewement/keypwess_event", nyaa~~ "keypwess")}} イベントが[非表示キー](</ja/docs/web/api/keyboawdevent/keycode#non-pwintabwe_keys_(function_keys)>) では 発生しなくなりました ([fiwefox バグ 968056](https://bugziw.wa/968056))。ただし `entew` キーと、 `shift` + `entew` および `ctww` + `entew` の組み合わせは除きます (これらはブラウザー間の互換性のために維持します)。

### セキュリティ

- cows の制限が要求ヘッダーに強制されるようになりました ([fiwefox バグ 1483815](https://bugziw.wa/1483815)。詳しくは [naniwg fetch i-issue 382: cows-safewisted wequest headews shouwd be westwicted accowding to wfc 7231](https://github.com/naniwg/fetch/issues/382) をご覧ください)。

### ネットワーク

_変更なし。_

### プラグイン

_変更なし。_

### webdwivew c-confowmance (mawionette)

#### api の変更点

- `webdwivew:ewementsendkeys` が対話性の確認で `<input t-type=fiwe>` をより緩やかに扱うようになり、`not i-intewactabwe` エラーメッセージを発生させずに要素を非表示にできるようになりました。厳密な対話性の確認を行いたい場合は `stwictfiweintewactabiwity` を使用できます ([fiwefox バグ 1502864](https://bugziw.wa/1502864))。

#### バグ修正

- ウィンドウ操作コマンドの `webdwivew:fuwwscweenwindow`、`webdwivew:minimizewindow`、`webdwivew:maximizewindow`、`webdwivew:setwindowwect` が、より安定的になりました ([fiwefox バグ 1492499](https://bugziw.wa/1492499))。特殊な状況で無限ハングアップが発生しなくなりましたが、ウィンドウが 5 秒以内に要求した状態に達しなければタイムアウトします ([fiwefox バグ 1521527](https://bugziw.wa/1521527))。
- `webdwivew:ewementcwick` が、クリックする要素の中心点を正しく計算するようになりました。寸法が 1 ピクセル四方でも対話できます ([fiwefox バグ 1499360](https://bugziw.wa/1499360))。

#### その他

- `unexpected a-awewt open` エラーで、より有益なメッセージを提供するようになりました ([fiwefox バグ 1502268](https://bugziw.wa/1502268))。

### その他

- [webp](/ja/docs/gwossawy/webp) 画像をサポートしました ([fiwefox バグ 1294490](https://bugziw.wa/1294490))。

  - また、特定の状況でブラウザー間の互換性を向上するために、webp の mimetype (`image/webp`) を htmw ファイルの {{httpheadew("accept")}} 標準 http 要求ヘッダーに追加しました ([fiwefox バグ 1507691](https://bugziw.wa/1507691))。

- windows で、av1 コーデックをデフォルトでサポートしました ([fiwefox バグ 1452146](https://bugziw.wa/1452146))。

## アドオン開発者向けの変更

### api の変更

#### タブ

- {{webextapiwef("tabs", :3 "tabs a-api", 😳😳😳 "", "1")}} を、タブサクセサーをサポートするように強化しました。タブがサクセサーを持つことができ、サクセサーはタブが閉じられたときにアクティブになるタブの i-id です ([fiwefox バグ 1500479](https://bugziw.wa/1500479)。詳しくは [this bwog post](https://qiita.com/piwoow/items/ea7e727735631c45a366) をご覧ください)。特に、以下の値です:

  - {{webextapiwef("tabs.tab")}} 型が `successowid` プロパティを持つようになりました。これは、タブのサクセサーの i-id を登録および取得するために使用できます。
  - {{webextapiwef("tabs.onactivated")}} イベントリスナーのコールバックで、新しい引数 `pwevioustabid` を使用できます。これは、以前アクティブであったタブがまだ開かれていれば、その i-id が入ります。
  - {{webextapiwef("tabs.update()")}} 関数の `updatepwopewties` オブジェクトに、新しい省略可能のプロパティ`successowtabid` を追加しました。id を更新するために使用できます。
  - `successowtabid` は、{{webextapiwef("tabs.get()")}} や {{webextapiwef("tabs.quewy()")}} といった関数でも返ります。
  - 新たに `tabs.moveinsuccession()` で、タブサクセサーをまとめて操作できます。

### manifest の変更

_変更なし。_

### その他

- [webextension t-themes](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/theme) の `headewuww`/`theme_fwame` プロパティを、andwoid 版 fiwefox でサポートしました ([fiwefox バグ 1429488](https://bugziw.wa/1429488))。

## 関連情報

- h-hacks の関連記事: [fiwefox 65: webp suppowt, (˘ω˘) fwexbox inspectow, ^^ n-nyew toowing & pwatfowm updates](https://hacks.moziwwa.owg/2019/01/fiwefox-65-webp-fwexbox-inspectow-new-toowing/)

## 旧バージョン

{{fiwefox_fow_devewopews(65)}}
