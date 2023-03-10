---
title: Firefox 61 for developers
slug: Mozilla/Firefox/Releases/61
---

{{FirefoxSidebar}}

Firefox 61 は、米国時間 2018 年 6 月 26 日 にリリースされました。このページでは、開発者に影響する Firefox 61 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- [アクセシビリティインスペクター](/ja/docs/Tools/Accessibility_inspector) を実装しました。
- [ブラウザーコンソール](/ja/docs/Tools/Browser_Console) と [ブラウザーツールボックス](/ja/docs/Tools/Browser_Toolbox) で、新しい意匠のコンソール UI をデフォルトで有効化しました ({{bug(1362023)}}/{{bug(1347127)}})。古い UI は削除しました。
- [ネットワークモニター](/ja/docs/Tools/Network_Monitor) で `POST` 要求のコンテキストメニューの \[_新しいタブで開く_] をクリックすると、想定どおりの `POST` パラメーターを付加した要求を正しく再送信するようになりました ({{bug(1407515)}})。
- それぞれの変数にどの色の値が保存されているかを明確にするため、色見本をつけて [CSS 変数のオートコンプリート](/ja/docs/Tools/Page_Inspector/How_to/Examine_and_edit_CSS#CSS_variable_autocompletion) を行うようになりました ({{bug(1451211)}})。

  - さらに、CSS 変数名にマウスポインターを載せると、変数に保存されている色の値をツールチップで表示します ({{bug(1431949)}})。

- ツールボックスのメインツールバーを再設計しました。主要な変更点は、新しいオーバーフロードロップダウンメニューによりビューポートの広さにかかわらず応答性が向上、ミートボールメニューをクリーンアップ、もっとも使用するパネルを前方に移動できるタブの並べ替え機能です ({{bug(1226272)}})。
- [ネットワークモニター](/ja/docs/Tools/Network_Monitor) のツールバーに、'HAR 形式ですべてコピー'、'HAR 形式ですべて保存'、'Import...' コマンドへ簡単にアクセスできるドロップダウンメニューを追加しました ({{bug(1403530)}})。
- ネットワークモニターの詳細ペインに [Cache タブ](/ja/docs/Tools/Network_Monitor#Cache) を追加しました。以前キャッシュしたリソースに関する詳細情報を表示します ({{bug(859051)}})。
- ネットワークモニターのメインツールバーを、小さなビューポートでも使いやすく、またコンソールのツールバーに合うように再設計しました。
- ネットワークモニターのメインツールバーに、以前は [レスポンシブデザインモード](/ja/docs/Tools/Responsive_Design_Mode#Network_throttling) のみで使用可能であった [Throttling](/ja/docs/Tools/Network_Monitor#Throttling) ドロップダウンメニューを追加しました。さまざまなネットワーク速度の状況をエミュレーションするために、ネットワーク速度を制限できます ({{bug(1349559)}})。
- パフォーマンス上の理由で、ブラウザーコンソールはデフォルトで CSS エラーを非表示にしました ({{bug(1452143)}})。
- ブラウザーコンソールに、ブラウザーを再起動するコマンドが含まれています。

  <kbd>Ctrl</kbd>

  &#x20;\+&#x20;

  <kbd>Alt</kbd>

  &#x20;\+&#x20;

  <kbd>R</kbd>

  &#x20;(Windows、Linux) または&#x20;

  <kbd>Cmd</kbd>

  &#x20;\+&#x20;

  <kbd>Alt</kbd>

  &#x20;\+&#x20;

  <kbd>R</kbd>

  &#x20;(Mac) を押下するとブラウザーを再起動して、再起動前と同じタブを開きます。

- 開発ツールの web extension API である [`devtools.network.onRequestFinished`](/ja/Add-ons/WebExtensions/API/devtools.network/onRequestFinished) ({{bug(1311171)}}) および [`devtools.network.getHAR`](/ja/Add-ons/WebExtensions/API/devtools.network/getHAR) ({{bug(1311177)}}) を実装しました ([har-export-trigger](https://addons.mozilla.org/firefox/addon/har-export-trigger/) のような拡張機能を実現できます)
- Firebug のユーザーが開発ツールへの移行を完了しましたので、Firebug テーマを削除しました ({{bug(1378108)}})。

### HTML

_変更なし。_

### CSS

- CSS のパース処理を並列化しました ({{bug(1346988)}})。
- {{cssxref("font-variation-settings")}} および {{cssxref("font-optical-sizing")}} のサポートを、デフォルトで有効にしました ({{bug(1447163)}})。
- `grid-gap`、`grid-row-gap`、`grid-column-gap` プロパティを {{cssxref("gap")}}、{{cssxref("row-gap")}}、{{cssxref("column-gap")}} に改名しました。これらはグリッド固有のプロパティではなくなりました ({{bug(1398482)}})。詳しくは [Box alignment; Gaps between boxes](/ja/docs/Web/CSS/CSS_Box_Alignment#Gaps_between_boxes) をご覧ください。ウェブ互換性のために、古い名称を別名として維持しています。
- {{cssxref("flex-basis")}} の値 `content` をサポートしました ({{bug(1105111)}})。
- {{cssxref("column-gap")}} のパーセンテージ値を、[CSS 段組みレイアウト](/ja/docs/Web/CSS/CSS_Columns) でサポートしました ({{bug(1398537)}})。
- CSS の {{cssxref(":host")}} 疑似クラスをサポートしました。これは、shadow DOM 内のカスタム要素を選択します ({{bug(992245)}})。
- {{cssxref("overflow")}} が 2 値構文を受け入れるようになりました ({{bug(1453148)}})。
- 内容物によってサイズが決まる Flex アイテムは、`fit-content` ではなく `max-content` を使用してサイズが決まるようになりました ({{bug(1282821)}})。これらの値について、詳しくは [`width` の値の定義](/ja/docs/Web/CSS/width#Values) をご覧ください。
- {{cssxref("font-weight")}}、{{cssxref("font-stretch")}}、{{cssxref("font-style")}} で、[CSS Fonts level 4](https://drafts.csswg.org/css-fonts-4/) で定義された追加の値をサポートしました ({{bug(1436048)}}):

  - {{cssxref("font-weight")}} は、1 から 1000 の間 (両端の値を含む) の浮動小数点数を受け入れます。
  - {{cssxref("font-stretch")}} は、パーセンテージ値を受け入れます。
  - {{cssxref("font-style")}} は、`oblique` キーワードの後の角度の値を受け入れます。

- 前の項目で言及した 3 つのプロパティに対応する、{{cssxref("@font-face")}} の記述子でも前出の新しい構文をサポートしました。また、font-face がサポートする記述子の値の範囲を指定する 2 値構文もサポートしました ({{bug(1436061)}}、{{bug(1436048)}})。

### SVG

- HTML の {{HTMLElement("a")}} 要素に一致させるため、SVG の {{SVGElement("a")}} 要素 ({{domxref("SVGAElement")}}) 要素に `ping`、`rel`、`referrerPolicy`、`relList`、`hreflang`、`type`、`text` プロパティを追加しました ({{bug("1451823")}})。
- {{SVGElement("textPath")}} 要素 ({{domxref("SVGTextPathElement")}}) で SVG2 の `path` および `side` 属性をサポートしました ({{bug("1446617")}} および {{bug("1446650")}})。
- {{domxref("SVGGeometryElement")}} インターフェイスで、{{SVGElement("path")}} 要素だけでなく、より多くの要素をサポートしました ({{bug("1325320")}})。

### JavaScript

- {{jsxref("String.prototype.trimStart()")}} および {{jsxref("String.prototype.trimEnd()")}} メソッドを実装しました ({{bug(1434007)}})。`trimLeft` および `trimRight` は、ウェブ互換性のために別名として残しています。

### API

#### 新規 API

- {{domxref("PerformanceServerTiming")}} API を実装しました。これは {{HTTPHeader("Server-Timing")}} ヘッダーによって送信する、サーバーサイドのメトリックを明らかにします ({{bug(1423495)}})。

#### DOM

- {{domxref("Document.anchors", "anchors")}}、{{domxref("Document.applets", "applets")}}、{{domxref("Document.embeds", "embeds")}}、{{domxref("Document.forms", "forms")}}、{{domxref("Document.head", "head")}}、{{domxref("Document.images", "images")}}、{{domxref("Document.links", "links")}}, {{domxref("Document.plugins", "plugins")}}、{{domxref("Document.scripts", "scripts")}} プロパティを、{{domxref("HTMLDocument")}} インターフェイスから {{domxref("Document")}} インターフェイスに移しました ({{bug(1415588)}})。
- {{domxref("DOMTokenList.replace()")}} の戻り値が void から、置換が成功したかを示すブーリアン値に変わりました ({{bug(1444909)}})。
- [Fetch API](/ja/docs/Web/API/Fetch_API) の {{domxref("Request.credentials")}} プロパティの既定値が、最新版の仕様書に応じて `"same-origin"` になりました ({{bug(1394399)}})。
- {{domxref("Request.destination")}} プロパティを実装しました ({{bug(1402892)}})。
- {{domxref("MutationObserver")}} のオプションディクショナリーである {{domxref("MutationObserverInit")}} で、すべての Boolean 型プロパティが既定値として `false` を持たなくなりました。`childList` および `subtree` だけが既定値 (依然として `false`) を持ちます。ほかのプロパティは既定値がありません ({{bug(973638)}})。
- [Payment Request API](/ja/docs/Web/API/Payment_Request_API) の {{domxref("PaymentRequest.show()")}} メソッドで、クライアントサイドのコードが支払いインターフェイスを活性化する前に更新された支払いの詳細情報を提供できるようにするため、{{jsxref("Promise")}} の使用をサポートしました ({{bug(1441709)}})。

#### DOM イベント

_変更なし。_

#### Service workers

- Firefox のカスタマイズで追加できる "忘れる" ボタンで、service workers とそのキャッシュを消去するようになりました ({{bug(1252998)}})。

#### Web Audio、メディアと WebRTC

- {{domxref("AudioContext.AudioContext", "AudioContext()")}} コンストラクターが、{{domxref("AudioContextOptions")}} 型の引数 `options` (省略可能) を受け入れるようになりました。これは、新しいコンテキストで望ましいレイテンシーやサンプルレートを設定できます。
- {{domxref("AudioBuffer")}} のインスタンス化が失敗したときに、正しい例外が発生するようになりました。

#### WebVR

- macOS で、[WebVR API](/ja/docs/Web/API/WebVR_API) がデフォルトで有効になりました ({{bug(1244242)}})。

#### Canvas と WebGL

_変更なし。_

### CSSOM

- {{domxref("CSSStyleRule.selectorText")}} プロパティを完全に実装して、読み取り専用ではなくなりました ({{bug(37468)}})。
- {{domxref("MediaList")}} インターフェイスの実装を、仕様書に若干近づけました。まだ完全ではありません。例えば、stringifier 属性は未実装です ({{bug(1455807)}})。

### HTTP

- Cookie の **`SameSite`** ディレクティブを実装しました。[Set-Cookie](/ja/docs/Web/HTTP/Headers/Set-Cookie) および [HTTP cookies](/ja/docs/Web/HTTP/Cookies) をご覧ください ({{bug(795346)}})。

### ネットワーク

- Firefox 61 以降では、HTML コンテンツからサブリソースを読み込む際に FTP プロトコル (すなわち、`"ftp://"` スキームの URL) の使用をサポートしません。URL バーに直接入力したトップレベル URL や、単独のドキュメントとして読み込む際の FTP は引き続きサポートします ({{bug(1404744)}})。

### セキュリティ

_変更なし。_

### プラグイン

_変更なし。_

### その他

_変更なし。_

## ウェブプラットフォームから廃止

### Developer tools

<kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>O</kbd> で開発ツールのオプションを開く/閉じることができなくなりました。代わりに <kbd>F1</kbd> を使用します ({{bug(1409456)}})。

### HTML

_変更なし。_

### CSS

- `@-moz-document` を、content ページで無効化しました ({{bug(1422245)}})。

### API

- {{domxref("File")}} インターフェイスの {{domxref("File.lastModifiedDate", "lastModifiedDate")}} プロパティを削除しました ({{bug(1458883)}})。
- {{domxref("Node.getUserData()")}} および {{domxref("Node.setUserData()")}} メソッドを、プラットフォームから完全に削除しました ({{bug(749981)}})。
- {{domxref("Element.createShadowRoot()")}} メソッドを削除しました。代わりに {{domxref("Element.attachShadow()")}} を使用してください ({{bug(1453789)}})。
- {{domxref("URL.createObjectURL()")}} メソッドの {{domxref("MediaStream")}} オーバーロードを削除しました ({{bug(1454889)}})。

### SVG

- 非推奨の (そして適切に実装されたことがない) {{domxref("SVGViewElement")}}`.viewTarget` プロパティを削除しました ({{bug(1455763)}})。
- 以下の非推奨プロパティを {{domxref("SVGSVGElement")}} から削除しました ({{bug(1133172)}}):

  - `pixelUnitToMillimeterX`
  - `pixelUnitToMillimeterY`
  - `screenPixelToMillimeterX`
  - `screenPixelToMillimeterY`

- 非標準の `SVGNumber()` コンストラクターを削除しました ({{bug("1455940")}})。

### その他

_変更なし。_

## アドオン開発者と Mozilla 開発者向けの変更点

### WebExtensions

- オートコンプリートのポップアップで、テーマが適用可能になりました ({{bug(1417883)}})。
- [`tabs.onUpdated`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/onUpdated) がフィルターのテンプレートを持つようになりました ({{bug(1329507)}})。
- [`browserSettings.overrideDocumentColors`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/overrideDocumentColors) を使用して、既定のドキュメントの色をオーバーライドできるようになりました ({{bug(1417810)}})。
- [tabs.query](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query) が、いくつかの有用な検索/フィルターのオプション引数によって最適化されました ({{bug(1445316)}})。
- `about:addons` 設定ページから [`permissions.request`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/permissions/request) を使用可能になりました ({{bug(1382953)}})。
- [`browserSettings.useDocumentFonts`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/useDocumentFonts) プロパティを使用して、ウェブページで指定されたフォントではなくシステムフォントを強制的に使用させることが可能になりました ({{bug("1400805")}})。
- [`browserSettings.openUrlbarResultsInNewTabs`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/openUrlbarResultsInNewTabs) プロパティを使用して、ブラウザーの検索オートコンプリートで、現在のタブではなく新しいタブを自動的に開くことが可能になりました ({{bug("1432645")}})。
- マニフェストの [theme](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) のプロパティである `toolbar`、`toolbar_text`、`toolbar_field`、`toolbar_field_text`、`toolbar_field_border` が、検索バーにも適用されるようになりました ({{bug(1418605)}})。
- [`sidebarAction.getPanel()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/getPanel)、[`sidebarAction.getTitle()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/getTitle)、[`sidebarAction.setPanel()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/setPanel)、[`sidebarAction.setTitle()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/setTitle)、[`sidebarAction.setIcon()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/setIcon) で、機能を特定のウィンドウに限り設定および取得できるようにするための `windowId` が指定可能になりました ({{bug(1390464)}})。
- [`tabs.hide()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/hide) および [`tabs.show()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/show) をデフォルトで有効化しました ({{bug(1455040)}})。

  - 拡張機能が最初にタブを隠すときに、ブラウザーはタブが隠されたこと、隠されたタブにアクセスする方法、および拡張機能を無効化する設定をユーザーに対して表示します ({{bug(1438363)}})。

## 関連情報

- [Firefox — Notes (61.0)](https://www.mozilla.org/en-US/firefox/61.0/releasenotes/)

## 過去のバージョン

{{Firefox_for_developers(60)}}
