---
title: Firefox 69 for developers
slug: Mozilla/Firefox/Releases/69
l10n:
  sourceCommit: 19dbdc2139ab1c68651da2b9338061d64567665d
---

{{FirefoxSidebar}}

Firefox 69 は、米国時間 2019 年 9 月 3 日 にリリースされました。このページでは、開発者に影響する Firefox 69 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

#### デバッガー

- [イベントリスナーブレークポイント](https://firefox-source-docs.mozilla.org/devtools-user/debugger/set_event_listener_breakpoints/index.html) で、ブラウザーのイベントに対してどのコードを実行したかを分析できます。`click` や `keydown` など特定の型、あるいはすべてのマウス入力イベントのようにイベントのカテゴリー全体を選択できます ([Firefox バグ 1526082](https://bugzil.la/1526082))。
- デバッガーの [ソースリストペイン](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#source-list-pane) に表示しているスクリプトを、コンテキストメニューの _ファイルをダウンロード_ で保存できるようになりました ([Firefox バグ 888161](https://bugzil.la/888161))。
- デバッガーのソースリストペインで、拡張機能が {{Glossary("UUID")}} に代わって拡張機能の名前で表示されるようになりました ([Firefox バグ 1486416](https://bugzil.la/1486416))。デバッグしたい拡張機能のコードを見つけやすくなります。
- スクリプトの読み込みを遅延させることで、デバッガーの起動がかなり早くなりました ([Firefox バグ 1527488](https://bugzil.la/1527488))。

#### コンソール

- リソースやストレージへのアクセスが何度もブロックされることによるノイズを減らすため、[トラッキング防止のエラー](/ja/docs/Web/Privacy/Firefox_tracking_protection)、[CSP のエラー](/ja/docs/Web/HTTP/CSP)、[CORS のエラー](/ja/docs/Web/HTTP/CORS/Errors) による [ブラウザーコンソール](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html) のメッセージを自動的にグループ化するようになりました ([Firefox バグ 1522396](https://bugzil.la/1522396))。
- コンソールに表示されているログを、コンテキストメニューの新しい項目である \[表示メッセージをエクスポート] でファイルに保存、またはクリップボードにコピーして共有できるようになりました ([Firefox バグ 1517728](https://bugzil.la/1517728))。
- コンソールのツールバーが、縦方向の領域を節約するためレスポンシブに高さを 1 行に減らすようになりました ([Firefox バグ 972530](https://bugzil.la/972530))。
- Firefox UI が発したログに集中するため、コンソールでコンテンツが発したメッセージを隠せるようになりました ([Firefox バグ 1523842](https://bugzil.la/1523842))。

#### ネットワーク

- [CSP](/ja/docs/Web/HTTP/CSP) または [混在コンテンツ](/ja/docs/Web/Security/Mixed_content) のためにブロックされたリソースを、詳しい理由とともにネットワークパネルに表示するようになりました ([Firefox バグ 1556451](https://bugzil.la/1556451))。
- ネットワークパネルで、リソースの完全な URL を表示する _URL_ 列が新たに使用可能になりました ([Firefox バグ 1341155](https://bugzil.la/1341155))。

#### インスペクター

- [ページインスペクター](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) で要素にマウスポインターを載せたときに表示される情報バーで、その要素がフレックスコンテナーやフレックスアイテムであることを表示するようになりました ([Firefox バグ 1521188](https://bugzil.la/1521188))。
- サブグリッドを持つグリッドを含むページを検査するとき、サブグリッドの行が表示されるたびに親グリッドのオーバーレイ行が表示されます。親グリッドのオーバーレイチェックボックスが選択されていない場合、その行は半透明になります ([Firefox バグ 1550519](https://bugzil.la/1550519)).

#### リモートデバッグ

- モバイルウェブブラウザーのために、リモートデバッグの機能を古い WebIDE から再設計した [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) に移行しました。USB を通してリモート端末の [GeckoView](https://hacks.mozilla.org/2019/06/geckoview-in-2019/) をリモートデバッグするエクスペリエンスが向上します ([Firefox バグ 1462208](https://bugzil.la/1462208))。

#### 全般

- 開発ツールのパネルの並び順を、人気を反映して変更しました ([Firefox バグ 1558630](https://bugzil.la/1558630))。

### HTML

- さらに仕様書へ準拠させるため、既定の `disabled` {{domxref("TextTrack.mode", "mode")}} で生成された {{HTMLElement("track")}} 要素では、要素に関連付けられたテキストトラックがテキストキューを含む WebVTT ファイルを読み込まないようになりました。`mode` が `disabled` であるキューにアクセスまたは操作するには、`mode` を `started` または `hidden` に変更します。これによって WebVTT データの読み込みが発生します ([Firefox バグ 1550633](https://bugzil.la/1550633))。

#### 廃止

- HTML {{HTMLElement("keygen")}} 要素を Firefox から削除しました。これは以前から非推奨であり、また用途がほかの技術に取って代わられました ([Firefox バグ 1315460](https://bugzil.la/1315460))。

### CSS

- {{cssxref("white-space")}} プロパティの値 `break-spaces` を実装しました ([Firefox バグ 1351432](https://bugzil.la/1351432))。
- SVG ジオメトリー属性 ({{SVGAttr("width")}} や {{SVGAttr("height")}} など) が、CSS のプロパティとしても定義されました ([Firefox バグ 1383650](https://bugzil.la/1383650))。
- [WebVTT](/ja/docs/Web/API/WebVTT_API) で表示されるキャプション ("cues") にスタイルを設定するために使用する {{cssxref("::cue")}} セレクターで、仕様書に従ってキューに使用できる CSS プロパティが制限されるようになりました ([Firefox バグ 1321488](https://bugzil.la/1321488))。
- 仕様書に従って、{{cssxref("::marker")}} に適用できるプロパティを制限しました ([Firefox バグ 1552578](https://bugzil.la/1552578))。
- {{cssxref("overflow-block")}} および {{cssxref("overflow-inline")}} プロパティを実装しました ([Firefox バグ 1470695](https://bugzil.la/1470695))。
- CSS Feature Queries ({{cssxref("@supports")}}) で `selector()` メソッドを使用して、セレクターをサポートしているかをテストできるようになりました ([Firefox バグ 1513643](https://bugzil.la/1513643))。
- 対象の要素でユーザーがテキストを選択できるかを指定する {{cssxref("user-select")}} プロパティの接頭辞を外しました ([Firefox バグ 1492739](https://bugzil.la/1492739))。
- リトアニア語のロケール固有の大文字・小文字規則を実装しました ([Firefox バグ 1322992](https://bugzil.la/1322992))。[こちらの例をご覧ください](/ja/docs/Web/CSS/text-transform#lowercase_lithuanian)。
- CSS Text の {{cssxref("line-break")}} プロパティを実装しました ([Firefox バグ 1011369](https://bugzil.la/1011369)) および ([Firefox バグ 1531715](https://bugzil.la/1531715))。
- 要素とその内容物が DOM ツリーのほかの部分からおおむね独立していることを開発者が定義できる {{cssxref("contain")}} プロパティを実装しました ([Firefox バグ 1487493](https://bugzil.la/1487493))。

### SVG

- gzip で圧縮された SVG-in-OpenType をサポートしました ([Firefox バグ 1359240](https://bugzil.la/1359240))。
- {{domxref("SVGGeometryElement.isPointInFill()")}} および {{domxref("SVGGeometryElement.isPointInStroke()")}} メソッドを実装しました ([Firefox バグ 1325319](https://bugzil.la/1325319))。

### JavaScript

- [パブリッククラスフィールド](/ja/docs/Web/JavaScript/Reference/Classes#フィールド宣言)を既定で有効にしました ([Firefox バグ 1555464](https://bugzil.la/1555464))。詳しくは[クラスフィールド](/ja/docs/Web/JavaScript/Reference/Classes/Public_class_fields)もご覧ください。
- プロミスの拒否イベントである [`unhandledrejection`](/ja/docs/Web/API/Window/unhandledrejection_event) および [`rejectionhandled`](/ja/docs/Web/API/Window/rejectionhandled_event) を既定で有効にしました ([Firefox バグ 1362272](https://bugzil.la/1362272))。これらの動作について詳しくは [プロミスの拒否イベント](/ja/docs/Web/JavaScript/Guide/Using_promises#%E3%83%97%E3%83%AD%E3%83%9F%E3%82%B9%E3%81%AE%E6%8B%92%E5%90%A6%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88) をご覧ください。

### HTTP

- HTTP の {{HTTPHeader("Access-Control-Expose-Headers")}}、{{HTTPHeader("Access-Control-Allow-Methods")}}、{{HTTPHeader("Access-Control-Allow-Headers")}} ヘッダーが、資格情報がないリクエストを示すワイルドカード値 "`*`" を受け入れるようになりました ([Firefox バグ 1309358](https://bugzil.la/1309358))。この変更は Firefox 68 ESR に反映されました。

### API

#### 新規 API

- [リサイズオブザーバー API](/ja/docs/Web/API/Resize_Observer_API) を既定で有効にしました ([Firefox バグ 1543839](https://bugzil.la/1543839))。
- Microtask API ({{domxref("queueMicrotask()")}}) を実装しました ([Firefox バグ 1480236](https://bugzil.la/1480236))。

#### DOM

- ワーカーで {{domxref("DOMMatrix")}}、{{domxref("DOMPoint")}}、および関連オブジェクトをサポートしました ([Firefox バグ 1420580](https://bugzil.la/1420580))。
- 仕様書に準拠させるため、`pageX` および `pageY` プロパティを {{domxref("UIEvent")}} から {{domxref("MouseEvent")}} に移動しました ([Firefox バグ 1178763](https://bugzil.la/1178763))。これらのプロパティは、`UIEvent` から継承する {{domxref("CompositionEvent")}}、{{domxref("FocusEvent")}}、{{domxref("InputEvent")}}、{{domxref("KeyboardEvent")}}、{{domxref("TouchEvent")}} インターフェイスに公開されなくなりました。
- {{domxref("Blob.text()")}}、{{domxref("Blob.arrayBuffer()")}}、{{domxref("Blob.stream()")}} メソッドを実装しました ([Firefox バグ 1557121](https://bugzil.la/1557121))。
- {{domxref("DOMMatrix.fromMatrix()")}} を実装しました ([Firefox バグ 1560462](https://bugzil.la/1560462))。
- 引数が 6 個の {{domxref("DOMMatrix.scale()")}} メソッドをサポートしました ([Firefox バグ 1397945](https://bugzil.la/1397945))。
- 仕様書に従って {{domxref("DOMMatrix.translate()")}}、{{domxref("DOMMatrix.skewX()")}}、{{domxref("DOMMatrix.skewY()")}} の引数がすべて省略可能になりました ([Firefox バグ 1397949](https://bugzil.la/1397949))。
- {{domxref("navigator.userAgent")}}、{{domxref("navigator.platform")}}、{{domxref("navigator.oscpu")}} プロパティが、64 ビット版 OS で 32 ビット版 Firefox を実行していることを公表しないようになりました ([Firefox バグ 1559747](https://bugzil.la/1559747))。`Linux i686 on x86_64` に代わって `Linux x86_64`、`WOW64` に代わって `Win64` を示します。
- {{domxref("HTMLDocument")}} に残されているメソッドを、{{domxref("Document")}} に移動しました。これはほとんどの場合、目に見えるほどの影響は発生しないでしょう。特に {{domxref("document.close", "close()")}}、{{domxref("document.open", "open()")}}、{{domxref("document.write", "write()")}} メソッドが移動しました。よって、さまざまなプロパティだけでなく {{domxref("document.execCommand", "execCommand()")}} などのエディター関連メソッドも持つようになりました ([Firefox バグ 1549560](https://bugzil.la/1549560))。
- {{domxref("AbstractRange")}} および {{domxref("StaticRange")}} を実装しました ([Firefox バグ 1444847](https://bugzil.la/1444847))。

#### メディア、Web Audio、WebRTC

- ユーザーのセキュリティを向上させるため、および最新版の[メディアキャプチャとストリーム](/ja/docs/Web/API/Media_Capture_and_Streams_API)仕様書に合わせるために、安全でないコンテキストでは {{domxref("navigator.mediaDevices")}} プロパティを提供しないようになりました。{{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}、{{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}}、{{domxref("MediaDevices.enumerateDevices", "enumerateDevices()")}} などを使用するには、{{Glossary("HTTPS")}} を使用してコンテンツを読み込むようにしてください ([Firefox バグ 1528031](https://bugzil.la/1528031))。
- Web Audio API の {{domxref("AudioParam.value")}} プロパティが、現時点のプロパティの実際の値を、その値に適用されるすべての予定済みまたは段階的な変更を考慮したうえで返すようになりました。以前の Firefox は、(`value` セッターを使用して) 直近に明示的に設定された値だけを返していました([Firefox バグ 893020](https://bugzil.la/893020)).
- 新たにトラックを辞書式順序で使用するように {{domxref("MediaStreamAudioSourceNode")}} を更新しました。以前はトラックの順序が個々のブラウザー次第であり、任意に変更することもできました。加えて、音声トラックがないストリームを使用して `MediaStreamAudioSourceNode` を作成しようとすると `InvalidStateError` 例外が発生するようになりました ([Firefox バグ 1553215](https://bugzil.la/1553215))。
- {{domxref("MediaTrackSettings.facingMode", "facingMode")}}、{{domxref("MediaTrackSettings.deviceId", "deviceId")}}、{{domxref("MediaTrackSettings.groupId", "groupId")}} 設定が、{{domxref("MediaStreamTrack.getSettings()")}} を呼び出すと返される {{domxref("MediaTrackSettings")}} オブジェクトのメンバーに含まれるようになりました ([Firefox バグ 1537986](https://bugzil.la/1537986))。

#### 廃止

- {{domxref("DOMMatrix.scaleNonUniformSelf()")}} メソッドを削除しました ([Firefox バグ 1560119](https://bugzil.la/1560119))。

### WebDriver conformance (Marionette)

#### その他

- Marionette が、モーダルダイアログやユーザープロンプトの開く・閉じるを動的に制御するようになりました ([Firefox バグ 1477977](https://bugzil.la/1477977))。これは、複数開くプロンプトも制御されることを意味します ([Firefox バグ 1487358](https://bugzil.la/1487358))。
- DOM の一部が削除されたり追加の通知が出たりすることを防ぐため、既定でトラッキング防止と DOM push 機能を無効化するようになりました ([Firefox バグ 1542244](https://bugzil.la/1542244))。
- Firefox が低メモリー状態になったときにバッググラウンドのタブを自動的にアンロードする機能を無効化しました。これはタブを切り替えるときの自動化に悪影響がありました ([Firefox バグ 1553748](https://bugzil.la/1553748))。

## アドオン開発者向けの変更点

### API の変更点

- [UserScripts API](/ja/docs/Mozilla/Add-ons/WebExtensions/API/userScripts) を既定で有効にしました。
- [`topSites.get()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/topSites/get) メソッドで、新たなオプションである `includePinned` および `includeSearchShortcuts` が使用可能になりました ([Firefox バグ 1547669](https://bugzil.la/1547669))。

### その他の変更点

- ホワイトリストに記載されたものを除く*すべての*拡張機能をブラックリストに登録する [グループポリシー設定](https://github.com/mozilla/policy-templates/blob/master/README.md#extensionsettings) を追加しました ([Firefox バグ 1522823](https://bugzil.la/1522823))。

## 関連情報

- Hacks release post: [Firefox 69 — a tale of Resize Observer, microtasks, CSS, and DevTools](https://hacks.mozilla.org/2019/09/firefox-69-a-tale-of-resize-observer-microtasks-css-and-devtools/)

## 過去のバージョン

{{Firefox_for_developers(68)}}
