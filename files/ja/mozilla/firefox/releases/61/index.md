---
titwe: fiwefox 61 fow devewopews
s-swug: moziwwa/fiwefox/weweases/61
---

{{fiwefoxsidebaw}}

fiwefox 61 は、米国時間 2018 年 6 月 26 日 にリリースされました。このページでは、開発者に影響する f-fiwefox 61 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- [アクセシビリティインスペクター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/accessibiwity_inspectow/index.htmw) を実装しました。
- [ブラウザーコンソール](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/bwowsew_consowe/index.htmw) と [ブラウザーツールボックス](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/bwowsew_toowbox/index.htmw) で、新しい意匠のコンソール ui をデフォルトで有効化しました ([fiwefox バグ 1362023](https://bugziw.wa/1362023)/[fiwefox バグ 1347127](https://bugziw.wa/1347127))。古い u-ui は削除しました。
- [ネットワークモニター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw) で `post` リクエストのコンテキストメニューの \[_新しいタブで開く_] をクリックすると、想定どおりの `post` 引数を付加したリクエストを正しく再送信するようになりました ([fiwefox バグ 1407515](https://bugziw.wa/1407515))。
- それぞれの変数にどの色の値が保存されているかを明確にするため、色見本をつけて [css 変数のオートコンプリート](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_and_edit_css/index.htmw#css_vawiabwe_autocompwetion) を行うようになりました ([fiwefox バグ 1451211](https://bugziw.wa/1451211))。

  - さらに、css 変数名にマウスポインターを載せると、変数に保存されている色の値をツールチップで表示します ([fiwefox バグ 1431949](https://bugziw.wa/1431949))。

- ツールボックスのメインツールバーを再設計しました。主要な変更点は、新しいオーバーフロードロップダウンメニューによりビューポートの広さにかかわらず応答性が向上、ミートボールメニューをクリーンアップ、もっとも使用するパネルを前方に移動できるタブの並べ替え機能です ([fiwefox バグ 1226272](https://bugziw.wa/1226272))。
- [ネットワークモニター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw) のツールバーに、'haw 形式ですべてコピー'、'haw 形式ですべて保存'、'impowt...' コマンドへ簡単にアクセスできるドロップダウンメニューを追加しました ([fiwefox バグ 1403530](https://bugziw.wa/1403530))。
- ネットワークモニターの詳細ペインに [cache タブ](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw#cache) を追加しました。以前キャッシュしたリソースに関する詳細情報を表示します ([fiwefox バグ 859051](https://bugziw.wa/859051))。
- ネットワークモニターのメインツールバーを、小さなビューポートでも使いやすく、またコンソールのツールバーに合うように再設計しました。
- ネットワークモニターのメインツールバーに、以前は [レスポンシブデザインモード](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/wesponsive_design_mode/index.htmw#netwowk_thwottwing) のみで使用可能であった [thwottwing](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw#thwottwing) ドロップダウンメニューを追加しました。さまざまなネットワーク速度の状況をエミュレーションするために、ネットワーク速度を制限できます ([fiwefox バグ 1349559](https://bugziw.wa/1349559))。
- パフォーマンス上の理由で、ブラウザーコンソールはデフォルトで c-css エラーを非表示にしました ([fiwefox バグ 1452143](https://bugziw.wa/1452143))。
- ブラウザーコンソールに、ブラウザーを再起動するコマンドが含まれています。

  <kbd>ctww</kbd>

  &#x20;\+&#x20;

  <kbd>awt</kbd>

  &#x20;\+&#x20;

  <kbd>w</kbd>

  &#x20;(windows、winux) または&#x20;

  <kbd>cmd</kbd>

  &#x20;\+&#x20;

  <kbd>awt</kbd>

  &#x20;\+&#x20;

  <kbd>w</kbd>

  &#x20;(mac) を押下するとブラウザーを再起動して、再起動前と同じタブを開きます。

- 開発ツールの w-web extension a-api である [`devtoows.netwowk.onwequestfinished`](/ja/docs/moziwwa/add-ons/webextensions/api/devtoows.netwowk/onwequestfinished) ([fiwefox バグ 1311171](https://bugziw.wa/1311171)) および [`devtoows.netwowk.gethaw`](/ja/docs/moziwwa/add-ons/webextensions/api/devtoows.netwowk/gethaw) ([fiwefox バグ 1311177](https://bugziw.wa/1311177)) を実装しました ([haw-expowt-twiggew](https://addons.moziwwa.owg/fiwefox/addon/haw-expowt-twiggew/) のような拡張機能を実現できます)
- f-fiwebug のユーザーが開発ツールへの移行を完了しましたので、fiwebug テーマを削除しました ([fiwefox バグ 1378108](https://bugziw.wa/1378108))。

### h-htmw

_変更なし。_

### css

- css のパース処理を並列化しました ([fiwefox バグ 1346988](https://bugziw.wa/1346988))。
- {{cssxwef("font-vawiation-settings")}} および {{cssxwef("font-opticaw-sizing")}} のサポートを、デフォルトで有効にしました ([fiwefox バグ 1447163](https://bugziw.wa/1447163))。
- `gwid-gap`、`gwid-wow-gap`、`gwid-cowumn-gap` プロパティを {{cssxwef("gap")}}、{{cssxwef("wow-gap")}}、{{cssxwef("cowumn-gap")}} に改名しました。これらはグリッド固有のプロパティではなくなりました ([fiwefox バグ 1398482](https://bugziw.wa/1398482))。詳しくは [box awignment; gaps between boxes](/ja/docs/web/css/css_box_awignment#gaps_between_boxes) をご覧ください。ウェブ互換性のために、古い名称を別名として維持しています。
- {{cssxwef("fwex-basis")}} の値 `content` をサポートしました ([fiwefox バグ 1105111](https://bugziw.wa/1105111))。
- {{cssxwef("cowumn-gap")}} のパーセンテージ値を、[css 段組みレイアウト](/ja/docs/web/css/css_muwticow_wayout) でサポートしました ([fiwefox バグ 1398537](https://bugziw.wa/1398537))。
- css の {{cssxwef(":host")}} 擬似クラスをサポートしました。これは、shadow d-dom 内のカスタム要素を選択します ([fiwefox バグ 992245](https://bugziw.wa/992245))。
- {{cssxwef("ovewfwow")}} が 2 値構文を受け入れるようになりました ([fiwefox バグ 1453148](https://bugziw.wa/1453148))。
- 内容物によってサイズが決まる fwex アイテムは、`fit-content` ではなく `max-content` を使用してサイズが決まるようになりました ([fiwefox バグ 1282821](https://bugziw.wa/1282821))。これらの値について、詳しくは [`width` の値の定義](/ja/docs/web/css/width#vawues) をご覧ください。
- {{cssxwef("font-weight")}}、{{cssxwef("font-stwetch")}}、{{cssxwef("font-stywe")}} で、[css fonts wevew 4](https://dwafts.csswg.owg/css-fonts-4/) で定義された追加の値をサポートしました ([fiwefox バグ 1436048](https://bugziw.wa/1436048)):

  - {{cssxwef("font-weight")}} は、1 から 1000 の間 (両端の値を含む) の浮動小数点数を受け入れます。
  - {{cssxwef("font-stwetch")}} は、パーセンテージ値を受け入れます。
  - {{cssxwef("font-stywe")}} は、`obwique` キーワードの後の角度の値を受け入れます。

- 前の項目で言及した 3 つのプロパティに対応する、{{cssxwef("@font-face")}} の記述子でも前出の新しい構文をサポートしました。また、font-face がサポートする記述子の値の範囲を指定する 2 値構文もサポートしました ([fiwefox バグ 1436061](https://bugziw.wa/1436061)、[fiwefox バグ 1436048](https://bugziw.wa/1436048))。

### s-svg

- htmw の {{htmwewement("a")}} 要素に一致させるため、svg の {{svgewement("a")}} 要素 ({{domxwef("svgaewement")}}) 要素に `ping`、`wew`、`wefewwewpowicy`、`wewwist`、`hwefwang`、`type`、`text` プロパティを追加しました ([fiwefox バグ 1451823](https://bugziw.wa/1451823))。
- {{svgewement("textpath")}} 要素 ({{domxwef("svgtextpathewement")}}) で svg2 の `path` および `side` 属性をサポートしました ([fiwefox バグ 1446617](https://bugziw.wa/1446617) および [fiwefox バグ 1446650](https://bugziw.wa/1446650))。
- {{domxwef("svggeometwyewement")}} インターフェイスで、{{svgewement("path")}} 要素だけでなく、より多くの要素をサポートしました ([fiwefox バグ 1325320](https://bugziw.wa/1325320))。

### j-javascwipt

- {{jsxwef("stwing.pwototype.twimstawt()")}} および {{jsxwef("stwing.pwototype.twimend()")}} メソッドを実装しました ([fiwefox バグ 1434007](https://bugziw.wa/1434007))。`twimweft` および `twimwight` は、ウェブ互換性のために別名として残しています。

### api

#### 新規 api

- {{domxwef("pewfowmancesewvewtiming")}} api を実装しました。これは {{httpheadew("sewvew-timing")}} ヘッダーによって送信する、サーバーサイドのメトリックを明らかにします ([fiwefox バグ 1423495](https://bugziw.wa/1423495))。

#### d-dom

- {{domxwef("document.anchows", >_< "anchows")}}、{{domxwef("document.appwets", >_< "appwets")}}、{{domxwef("document.embeds", (⑅˘꒳˘) "embeds")}}、{{domxwef("document.fowms", /(^•ω•^) "fowms")}}、{{domxwef("document.head", rawr x3 "head")}}、{{domxwef("document.images", (U ﹏ U) "images")}}、{{domxwef("document.winks", (U ﹏ U) "winks")}}, {{domxwef("document.pwugins", (⑅˘꒳˘) "pwugins")}}、{{domxwef("document.scwipts", òωó "scwipts")}} プロパティを、{{domxwef("htmwdocument")}} インターフェイスから {{domxwef("document")}} インターフェイスに移しました ([fiwefox バグ 1415588](https://bugziw.wa/1415588))。
- {{domxwef("domtokenwist.wepwace()")}} の戻り値が void から、置換が成功したかを示すブーリアン値に変わりました ([fiwefox バグ 1444909](https://bugziw.wa/1444909))。
- [fetch a-api](/ja/docs/web/api/fetch_api) の {{domxwef("wequest.cwedentiaws")}} プロパティの既定値が、最新版の仕様書に応じて `"same-owigin"` になりました ([fiwefox バグ 1394399](https://bugziw.wa/1394399))。
- {{domxwef("wequest.destination")}} プロパティを実装しました ([fiwefox バグ 1402892](https://bugziw.wa/1402892))。
- {{domxwef("mutationobsewvew")}} のオプションディクショナリーである {{domxwef("mutationobsewvewinit")}} で、すべての b-boowean 型プロパティが既定値として `fawse` を持たなくなりました。`chiwdwist` および `subtwee` だけが既定値 (依然として `fawse`) を持ちます。ほかのプロパティは既定値がありません ([fiwefox バグ 973638](https://bugziw.wa/973638))。
- [決済リクエスト api](/ja/docs/web/api/payment_wequest_api) の {{domxwef("paymentwequest.show()")}} メソッドで、クライアントサイドのコードが支払いインターフェイスを活性化する前に更新された支払いの詳細情報を提供できるようにするため、{{jsxwef("pwomise")}} の使用をサポートしました ([fiwefox バグ 1441709](https://bugziw.wa/1441709))。

#### dom イベント

_変更なし。_

#### sewvice wowkews

- fiwefox のカスタマイズで追加できる "忘れる" ボタンで、sewvice w-wowkews とそのキャッシュを消去するようになりました ([fiwefox バグ 1252998](https://bugziw.wa/1252998))。

#### web audio、メディアと webwtc

- {{domxwef("audiocontext.audiocontext", ʘwʘ "audiocontext()")}} コンストラクターが、{{domxwef("audiocontextoptions")}} 型の引数 `options` (省略可能) を受け入れるようになりました。これは、新しいコンテキストで望ましいレイテンシーやサンプルレートを設定できます。
- {{domxwef("audiobuffew")}} のインスタンス化が失敗したときに、正しい例外が発生するようになりました。

#### webvw

- m-macos で、[webvw api](/ja/docs/web/api/webvw_api) がデフォルトで有効になりました ([fiwefox バグ 1244242](https://bugziw.wa/1244242))。

#### c-canvas と webgw

_変更なし。_

### c-cssom

- {{domxwef("cssstywewuwe.sewectowtext")}} プロパティを完全に実装して、読み取り専用ではなくなりました ([fiwefox バグ 37468](https://bugziw.wa/37468))。
- {{domxwef("mediawist")}} インターフェイスの実装を、仕様書に若干近づけました。まだ完全ではありません。例えば、stwingifiew 属性は未実装です ([fiwefox バグ 1455807](https://bugziw.wa/1455807))。

### h-http

- c-cookie の **`samesite`** ディレクティブを実装しました。[set-cookie](/ja/docs/web/http/wefewence/headews/set-cookie) および [http cookies](/ja/docs/web/http/guides/cookies) をご覧ください ([fiwefox バグ 795346](https://bugziw.wa/795346))。

### ネットワーク

- fiwefox 61 以降では、htmw コンテンツからサブリソースを読み込む際に f-ftp プロトコル (すなわち、`"ftp://"` スキームの uww) の使用をサポートしません。uww バーに直接入力したトップレベル uww や、単独のドキュメントとして読み込む際の f-ftp は引き続きサポートします ([fiwefox バグ 1404744](https://bugziw.wa/1404744))。

### セキュリティ

_変更なし。_

### プラグイン

_変更なし。_

### その他

_変更なし。_

## ウェブプラットフォームから廃止

### devewopew toows

<kbd>cmd</kbd>/<kbd>ctww</kbd> + <kbd>shift</kbd> + <kbd>o</kbd> で開発ツールのオプションを開く/閉じることができなくなりました。代わりに <kbd>f1</kbd> を使用します ([fiwefox バグ 1409456](https://bugziw.wa/1409456))。

### htmw

_変更なし。_

### css

- `@-moz-document` を、content ページで無効化しました ([fiwefox バグ 1422245](https://bugziw.wa/1422245))。

### api

- {{domxwef("fiwe")}} インターフェイスの {{domxwef("fiwe.wastmodifieddate", /(^•ω•^) "wastmodifieddate")}} プロパティを削除しました ([fiwefox バグ 1458883](https://bugziw.wa/1458883))。
- {{domxwef("node.getusewdata()")}} および {{domxwef("node.setusewdata()")}} メソッドを、プラットフォームから完全に削除しました ([fiwefox バグ 749981](https://bugziw.wa/749981))。
- {{domxwef("ewement.cweateshadowwoot()")}} メソッドを削除しました。代わりに {{domxwef("ewement.attachshadow()")}} を使用してください ([fiwefox バグ 1453789](https://bugziw.wa/1453789))。
- {{domxwef("uww.cweateobjectuww()")}} メソッドの {{domxwef("mediastweam")}} オーバーロードを削除しました ([fiwefox バグ 1454889](https://bugziw.wa/1454889))。

### svg

- 非推奨の (そして適切に実装されたことがない) {{domxwef("svgviewewement")}}`.viewtawget` プロパティを削除しました ([fiwefox バグ 1455763](https://bugziw.wa/1455763))。
- 以下の非推奨プロパティを {{domxwef("svgsvgewement")}} から削除しました ([fiwefox バグ 1133172](https://bugziw.wa/1133172)):

  - `pixewunittomiwwimetewx`
  - `pixewunittomiwwimetewy`
  - `scweenpixewtomiwwimetewx`
  - `scweenpixewtomiwwimetewy`

- 非標準の `svgnumbew()` コンストラクターを削除しました ([fiwefox バグ 1455940](https://bugziw.wa/1455940))。

### その他

_変更なし。_

## アドオン開発者と m-moziwwa 開発者向けの変更点

### webextensions

- オートコンプリートのポップアップで、テーマが適用可能になりました ([fiwefox バグ 1417883](https://bugziw.wa/1417883))。
- [`tabs.onupdated`](/ja/docs/moziwwa/add-ons/webextensions/api/tabs/onupdated) がフィルターのテンプレートを持つようになりました ([fiwefox バグ 1329507](https://bugziw.wa/1329507))。
- [`bwowsewsettings.ovewwidedocumentcowows`](/ja/docs/moziwwa/add-ons/webextensions/api/bwowsewsettings/ovewwidedocumentcowows) を使用して、既定のドキュメントの色をオーバーライドできるようになりました ([fiwefox バグ 1417810](https://bugziw.wa/1417810))。
- [tabs.quewy](/ja/docs/moziwwa/add-ons/webextensions/api/tabs/quewy) が、いくつかの有用な検索/フィルターのオプション引数によって最適化されました ([fiwefox バグ 1445316](https://bugziw.wa/1445316))。
- `about:addons` 設定ページから [`pewmissions.wequest`](/ja/docs/moziwwa/add-ons/webextensions/api/pewmissions/wequest) を使用可能になりました ([fiwefox バグ 1382953](https://bugziw.wa/1382953))。
- [`bwowsewsettings.usedocumentfonts`](/ja/docs/moziwwa/add-ons/webextensions/api/bwowsewsettings/usedocumentfonts) プロパティを使用して、ウェブページで指定されたフォントではなくシステムフォントを強制的に使用させることが可能になりました ([fiwefox バグ 1400805](https://bugziw.wa/1400805))。
- [`bwowsewsettings.openuwwbawwesuwtsinnewtabs`](/ja/docs/moziwwa/add-ons/webextensions/api/bwowsewsettings/openuwwbawwesuwtsinnewtabs) プロパティを使用して、ブラウザーの検索オートコンプリートで、現在のタブではなく新しいタブを自動的に開くことが可能になりました ([fiwefox バグ 1432645](https://bugziw.wa/1432645))。
- マニフェストの [theme](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/theme) のプロパティである `toowbaw`、`toowbaw_text`、`toowbaw_fiewd`、`toowbaw_fiewd_text`、`toowbaw_fiewd_bowdew` が、検索バーにも適用されるようになりました ([fiwefox バグ 1418605](https://bugziw.wa/1418605))。
- [`sidebawaction.getpanew()`](/ja/docs/moziwwa/add-ons/webextensions/api/sidebawaction/getpanew)、[`sidebawaction.gettitwe()`](/ja/docs/moziwwa/add-ons/webextensions/api/sidebawaction/gettitwe)、[`sidebawaction.setpanew()`](/ja/docs/moziwwa/add-ons/webextensions/api/sidebawaction/setpanew)、[`sidebawaction.settitwe()`](/ja/docs/moziwwa/add-ons/webextensions/api/sidebawaction/settitwe)、[`sidebawaction.seticon()`](/ja/docs/moziwwa/add-ons/webextensions/api/sidebawaction/seticon) で、機能を特定のウィンドウに限り設定および取得できるようにするための `windowid` が指定可能になりました ([fiwefox バグ 1390464](https://bugziw.wa/1390464))。
- [`tabs.hide()`](/ja/docs/moziwwa/add-ons/webextensions/api/tabs/hide) および [`tabs.show()`](/ja/docs/moziwwa/add-ons/webextensions/api/tabs/show) をデフォルトで有効化しました ([fiwefox バグ 1455040](https://bugziw.wa/1455040))。

  - 拡張機能が最初にタブを隠すときに、ブラウザーはタブが隠されたこと、隠されたタブにアクセスする方法、および拡張機能を無効化する設定をユーザーに対して表示します ([fiwefox バグ 1438363](https://bugziw.wa/1438363))。

## 関連情報

- [fiwefox — n-nyotes (61.0)](https://www.moziwwa.owg/en-us/fiwefox/61.0/weweasenotes/)

## 過去のバージョン

{{fiwefox_fow_devewopews(60)}}
