---
title: Firefox 69 for developers
slug: Mozilla/Firefox/Releases/69
---

{{FirefoxSidebar}}

Firefox 69 は、米国時間 2019 年 9 月 3 日 にリリースされました。このページでは、開発者に影響する Firefox 69 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

#### Debugger

- [イベントリスナーブレークポイント](/ja/docs/Tools/Debugger/Set_event_listener_breakpoints) で、ブラウザーのイベントに対してどのコードを実行したかを分析できます。`click` や `keydown` など特定の型、あるいはすべてのマウス入力イベントのようにイベントのカテゴリー全体を選択できます ({{bug(1526082)}})。
- デバッガーの [ソースリストペイン](/ja/docs/Tools/Debugger/UI_Tour#Source_list_pane) に表示しているスクリプトを、コンテキストメニューの _ファイルをダウンロード_ で保存できるようになりました ({{bug(888161)}})。
- デバッガーのソースリストペインで、拡張機能が UUID に代わって拡張機能の名前で表示されるようになりました ({{bug(1486416)}})。デバッグしたい拡張機能のコードを見つけやすくなります。
- スクリプトの読み込みを遅延させることで、デバッガーの起動がかなり早くなりました ({{bug(1527488)}})。

#### コンソール

- リソースやストレージへのアクセスが何度もブロックされることによるノイズを減らすため、[トラッキング防止のエラー](/ja/docs/Mozilla/Firefox/Privacy/Tracking_Protection)、[CSP のエラー](/ja/docs/Web/HTTP/CSP)、[CORS のエラー](/ja/docs/Web/HTTP/CORS/Errors) による [ブラウザーコンソール](/ja/docs/Tools/Browser_Console) のメッセージを自動的にグループ化するようになりました ({{bug(1522396)}})。
- コンソールに表示されているログを、コンテキストメニューの新しい項目である \[表示メッセージをエクスポート] でファイルに保存、またはクリップボードにコピーして共有できるようになりました ({{bug(1517728)}})。
- コンソールのツールバーが、縦方向の領域を節約するためレスポンシブに高さを 1 行に減らすようになりました ({{bug(972530)}})。
- Firefox のフロントエンドが発したログに集中するため、コンソールでコンテンツが発したメッセージを隠せるようになりました ({{bug(1523842)}})。

#### ネットワーク

- [CSP](/ja/docs/Web/HTTP/CSP) または [混在コンテンツ](/ja/docs/Web/Security/Mixed_content) のためにブロックされたリソースを、詳しい理由とともにネットワークパネルに表示するようになりました ({{bug(1556451)}})。
- ネットワークパネルで、リソースの完全な URL を表示する _URL_ 列が新たに使用可能になりました ({{bug(1341155)}})。

#### インスペクター

- [ページインスペクター](/ja/docs/Tools/Page_Inspector) で要素にマウスポインターを載せたときに表示される情報バーで、その要素が flex コンテナーや flex アイテムであることを表示するようになりました ({{bug(1521188)}})。

#### リモートデバッグ

- 私たちのモバイルウェブブラウザーのために、リモートデバッグの機能を古い WebIDE から再設計した [about:debugging](/ja/docs/Tools/about:debugging) に移行しました。USB を通してリモート端末の [GeckoView](https://hacks.mozilla.org/2019/06/geckoview-in-2019/) をリモートデバッグするエクスペリエンスが向上します ({{bug(1462208)}})。

#### 全般

- 開発ツールのパネルの並び順を、人気を反映して変更しました ({{bug(1558630)}})。

### HTML

- さらに仕様書へ準拠させるため、既定の `disabled` {{domxref("TextTrack.mode", "mode")}} で生成された {{HTMLElement("track")}} 要素では、要素に関連付けられたテキストトラックがテキストキューを含む WebVTT ファイルを読み込まないようになりました。`mode` が `disabled` であるキューにアクセスまたは操作するには、`mode` を `started` または `hidden` に変更します。これによって WebVTT データの読み込みが発生します ({{bug(1550633)}})。

#### 廃止

- HTML {{HTMLElement("keygen")}} 要素を Firefox から削除しました。これは以前から非推奨であり、また用途がほかの技術に取って代わられました ({{bug(1315460)}})。

### CSS

- {{cssxref("white-space")}} プロパティの値 `break-spaces` を実装しました ({{bug(1351432)}})。
- SVG ジオメトリー属性 ({{SVGAttr("width")}} や {{SVGAttr("height")}} など) が、CSS のプロパティとしても定義されました ({{bug(1383650)}})。
- [WebVTT](/ja/docs/Web/API/WebVTT_API) で表示されるキャプション ("cues") にスタイルを設定するために使用する {{cssxref("::cue")}} セレクターで、仕様書に従ってキューに使用できる CSS プロパティが制限されるようになりました ({{bug(1321488)}})。
- 仕様書に従って、{{cssxref("::marker")}} に適用できるプロパティを制限しました ({{bug(1552578)}})。
- {{cssxref("overflow-block")}} および {{cssxref("overflow-inline")}} プロパティを実装しました ({{bug(1470695)}})。
- CSS Feature Queries ({{cssxref("@supports")}}) で `selector()` メソッドを使用して、セレクターをサポートしているかをテストできるようになりました ({{bug(1513643)}})。
- 対象の要素でユーザーがテキストを選択できるかを指定する {{cssxref("user-select")}} プロパティの接頭辞を外しました ({{bug(1492739)}})。
- リトアニア語のロケール固有の大文字・小文字規則を実装しました ({{bug(1322992)}})。[こちらの例をご覧ください](/ja/docs/Web/CSS/text-transform#lowercase_lithuanian)。
- CSS Text の {{cssxref("line-break")}} プロパティを実装しました ({{bug(1011369)}}) および ({{bug(1531715)}})。
- 要素とその内容物が DOM ツリーのほかの部分からおおむね独立していることを開発者が定義できる {{cssxref("contain")}} プロパティを実装しました ({{bug(1487493)}})。

### SVG

- gzip で圧縮された SVG-in-OpenType をサポートしました ({{bug(1359240)}})。
- {{domxref("SVGGeometryElement.isPointInFill()")}} および {{domxref("SVGGeometryElement.isPointInStroke()")}} メソッドを実装しました ({{bug(1325319)}})。

### JavaScript

- [パブリッククラスフィールド](/ja/docs/Web/JavaScript/Reference/Classes#Field_declarations) をデフォルトで有効にしました ({{bug(1555464)}})。詳しくは [Class fields](/ja/docs/Web/JavaScript/Reference/Classes/Class_fields) もご覧ください。
- promise の拒否イベントである [`unhandledrejection`](/ja/docs/Web/API/Window/unhandledrejection_event) および [`rejectionhandled`](/ja/docs/Web/API/Window/rejectionhandled_event) をデフォルトで有効にしました ({{bug(1362272)}})。これらの動作について詳しくは {{SectionOnPage("/docs/Web/JavaScript/Guide/Using_promises", "Promise rejection events")}} をご覧ください。

### HTTP

- HTTP の {{HTTPHeader("Access-Control-Expose-Headers")}}、{{HTTPHeader("Access-Control-Allow-Methods")}}、{{HTTPHeader("Access-Control-Allow-Headers")}} ヘッダーが、資格情報がないリクエストを示すワイルドカード値 "`*`" を受け入れるようになりました ({{bug(1309358)}})。この変更は Firefox 68 ESR に反映されました。

### API

#### 新規 API

- [Resize Observer API](/ja/docs/Web/API/Resize_Observer_API) をデフォルトで有効にしました ({{bug(1543839)}})。
- Microtask API ({{domxref("WindowOrWorkerGlobalScope.queueMicrotask()")}}) を実装しました ({{bug(1480236)}})。

#### DOM

- workers で {{domxref("DOMMatrix")}}、{{domxref("DOMPoint")}}、および関連オブジェクトをサポートしました ({{bug(1420580)}})。
- 仕様書に準拠させるため、`pageX` および `pageY` プロパティを {{domxref("UIEvent")}} から {{domxref("MouseEvent")}} に移動しました ({{bug(1178763)}})。これらのプロパティは、`UIEvent` から継承する {{domxref("CompositionEvent")}}、{{domxref("FocusEvent")}}、{{domxref("InputEvent")}}、{{domxref("KeyboardEvent")}}、{{domxref("TouchEvent")}} インターフェイスに公開されなくなりました。
- {{domxref("Blob.text()")}}、{{domxref("Blob.arrayBuffer()")}}、{{domxref("Blob.stream()")}} メソッドを実装しました ({{bug(1557121)}})。
- {{domxref("DOMMatrix.fromMatrix()")}} を実装しました ({{bug(1560462)}})。
- 引数が 6 個の {{domxref("DOMMatrix.scale()")}} メソッドをサポートしました ({{bug(1397945)}})。
- 仕様書に従って {{domxref("DOMMatrix.translate()")}}、{{domxref("DOMMatrix.skewX()")}}、{{domxref("DOMMatrix.skewY()")}} の引数がすべて省略可能になりました ({{bug(1397949)}})。
- {{domxref("navigator.userAgent")}}、{{domxref("navigator.platform")}}、{{domxref("navigator.oscpu")}} プロパティが、64 ビット版 OS で 32 ビット版 Firefox を実行していることを公表しないようになりました ({{bug(1559747)}})。`Linux i686 on x86_64` に代わって `Linux x86_64`、`WOW64` に代わって `Win64` を示します。
- {{domxref("HTMLDocument")}} に残されているメソッドを、{{domxref("Document")}} に移動しました。これはほとんどの場合、目に見えるほどの影響は発生しないでしょう。特に {{domxref("document.close", "close()")}}、{{domxref("document.open", "open()")}}、{{domxref("document.write", "write()")}} メソッドが移動しました。よって、さまざまなプロパティだけでなく {{domxref("document.execCommand", "execCommand()")}} などのエディター関連メソッドも持つようになりました ({{bug(1549560)}})。
- {{domxref("AbstractRange")}} および {{domxref("StaticRange")}} を実装しました ({{bug(1444847)}})。

#### メディア、Web Audio、WebRTC

- ユーザーのセキュリティを向上させるため、および最新版の [Media Capture and Streams](/ja/docs/Web/API/Media_Streams_API) 仕様書に合わせるために、安全でないコンテキストでは {{domxref("navigator.mediaDevices")}} プロパティを提供しないようになりました。{{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}、{{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}}、{{domxref("MediaDevices.enumerateDevices", "enumerateDevices()")}} などを使用するには、{{Glossary("HTTPS")}} を使用してコンテンツを読み込むようにしてください ({{bug(1528031)}})。
- Web Audio API の {{domxref("AudioParam.value")}} プロパティが、現時点のプロパティの実際の値を、その値に適用されるすべての予定済みまたは段階的な変更を考慮したうえで返すようになりました。以前の Firefox は、(`value` セッターを使用して) 直近に明示的に設定された値だけを返していました({{bug(893020)}}).
- 新たにトラックを辞書式順序で使用するように {{domxref("MediaStreamAudioSourceNode")}} を更新しました。以前はトラックの順序が個々のブラウザー次第であり、任意に変更することもできました。加えて、音声トラックがないストリームを使用して `MediaStreamAudioSourceNode` を作成しようとすると `InvalidStateError` 例外が発生するようになりました ({{bug(1553215)}})。
- {{domxref("MediaTrackSettings.facingMode", "facingMode")}}、{{domxref("MediaTrackSettings.deviceId", "deviceId")}}、{{domxref("MediaTrackSettings.groupId", "groupId")}} 設定が、{{domxref("MediaStreamTrack.getSettings()")}} を呼び出すと返される {{domxref("MediaTrackSettings")}} オブジェクトのメンバーに含まれるようになりました ({{bug(1537986)}})。

#### 廃止

- {{domxref("DOMMatrix.scaleNonUniformSelf()")}} メソッドを削除しました ({{bug(1560119)}})。

### WebDriver conformance (Marionette)

#### その他

- Marionette が、モーダルダイアログやユーザープロンプトの開く・閉じるを動的に制御するようになりました ({{bug(1477977)}})。これは、複数開くプロンプトも制御されることを意味します ({{bug(1487358)}})。
- DOM の一部が削除されたり追加の通知が出たりすることを防ぐため、デフォルトでトラッキング防止と DOM push 機能を無効化するようになりました ({{bug(1542244)}})。
- Firefox が低メモリ状態になったときにバッググラウンドのタブを自動的にアンロードする機能を無効化しました。これはタブを切り替えるときの自動化に悪影響がありました ({{bug(1553748)}})。

## アドオン開発者向けの変更点

### API の変更点

- [UserScripts API](/ja/docs/Mozilla/Add-ons/WebExtensions/API/userScripts) をデフォルトで有効にしました。
- [`topSites.get()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/topSites/get) メソッドで、新たなオプションである `includePinned` および `includeSearchShortcuts` が使用可能になりました ({{bug(1547669)}})。

### その他の変更点

- ホワイトリストに記載されたものを除く*すべての*拡張機能をブラックリストに登録する [グループポリシー設定](https://github.com/mozilla/policy-templates/blob/master/README.md#extensionsettings) を追加しました ({{bug(1522823)}})。

## 過去のバージョン

{{Firefox_for_developers(68)}}
