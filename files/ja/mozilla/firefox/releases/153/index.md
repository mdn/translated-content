---
title: Firefox 153 release notes for developers (Stable)
short-title: Firefox 153 (Stable)
slug: Mozilla/Firefox/Releases/153
l10n:
  sourceCommit: 3b763f8f076c053b7a44e261c3a19a1879bc11ff
---

このページでは、開発者に影響する Firefox 153 の変更点をまとめています。
Firefox 153 は、米国時間 [2026 年 7 月 21 日](https://whattrainisitnow.com/release/?version=153) にリリースされました。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- 開発者ツールのアクセシビリティハイライト表示およびアクセシビリティツリーで、見出し要素の見出しレベルを表示するようになりました (以前は、見出しであるという事実のみ表示していました)。
  この情報は [Accessibility Inspector panel](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) で確認できます ([Firefox bug 1588784](https://bugzil.la/1588784)、[Firefox bug 2044904](https://bugzil.la/2044904))。

### HTML

- {{htmlelement("select")}} 要素の HTML 構文解析規則を、`<option>`、`<optgroup>`、`<hr>` だけでなくすべてのネストされた要素を DOM に解析できるように更新しました。
  これは将来、[カスタマイズ可能な select 要素](/ja/docs/Learn_web_development/Extensions/Forms/Customizable_select) をサポート可能にします ([Firefox bug 2019977](https://bugzil.la/2019977))。
- {{htmlelement("audio", "", "#muted")}} および {{htmlelement("video", "", "#muted")}} 要素で、`muted` 属性が DOM から追加または削除されたことを反映するように更新しました。この属性は {{cssxref(":muted")}} CSS 擬似クラスの状態にも一致します ([Firefox bug 2037015](https://bugzil.la/2037015))。

### CSS

- {{cssxref("::-webkit-scrollbar")}} 擬似要素セレクターを認識して、`@supports selector(::-webkit-scrollbar)` の確認が `true` を返すようになりました。`::-webkit-scrollbar` によるスクロールバーのスタイル設定を実際はサポートしていないにもかかわらず、セレクターはサポートしていると報告することに注意してください。これは、ネストしたスクロール可能な領域でスクロールバーが互いに重なり合う問題を修正するために追加しました。たとえば、スクロールバーを `display: none` または `width: 0` に設定すると一部のコンテンツにアクセスできなくなる場合です ([Firefox bug 2038877](https://bugzil.la/2038877))。

### JavaScript

- [TC39 Intl.Locale info proposal](https://github.com/tc39/proposal-intl-locale-info) をサポートしました。
  これには、`Intl.Locale` で接頭辞 "get" を伴うすべてのインスタンスメソッドである {{jsxref("Intl/Locale/getCalendars", "getCalendars()")}}、{{jsxref("Intl/Locale/getCollations", "getCollations()")}}、{{jsxref("Intl/Locale/getHourCycles", "getHourCycles()")}}、{{jsxref("Intl/Locale/getNumberingSystems", "getNumberingSystems()")}}、{{jsxref("Intl/Locale/getTextInfo", "getTextInfo()")}}、{{jsxref("Intl/Locale/getTimeZones", "getTimeZones()")}}、{{jsxref("Intl/Locale/getWeekInfo", "getWeekInfo()")}} が含まれます ([Firefox bug 2037069](https://bugzil.la/2037069))。
- エラーのスタックトレースでキャプチャーされるスタックフレームの最大数を設定または取得する静的データプロパティである {{jsxref("Error.stackTraceLimit")}} をサポートしました。
  デフォルトより小さい値を設定することでパフォーマンスを向上できます ([Firefox bug 2037856](https://bugzil.la/2037856))。
- [`with { type: "text" }`](/ja/docs/Web/JavaScript/Reference/Statements/import/with#text_modules_type_text) を使用して、テキストモジュールを文字列にインポートできるようになりました。
  レスポンスのメディアタイプが無視されることが JavaScript または CSS のモジュールとは異なっており、ファイルにスクリプトやほかの実行可能なコードが含まれていてもコンテンツはテキストとして解析されます ([Firefox bug 2039881](https://bugzil.la/2039881))。
- [`import source`](/ja/docs/Web/JavaScript/Reference/Statements/import/source) 構文 ([TC39 source phase imports](https://github.com/tc39/proposal-source-phase-imports) 提案の一部) をサポートしました。
  これは通常の [`import`](/ja/docs/Web/JavaScript/Reference/Statements/import) 宣言に似ていますが、モジュールを読み込んで評価するのではなく、後で評価できるモジュールのソースコードを表すオブジェクトを生成します。
  現在は構文のみサポートしており、この機能は開発者に対してまだ有用ではないことに注意してください。WebAssembly モジュールのソースの表現は別に実装しており、まだ利用できません ([Firefox bug 2043242](https://bugzil.la/2043242))。

### API

- {{domxref("IDBObjectStore.getAllRecords()")}} および {{domxref("IDBIndex.getAllRecords()")}} メソッドをサポートしました。
  これらはそれぞれ、オブジェクトストアおよびインデックスからすべてのレコード (またはレコードの特定のサブセット) を取り出します ([Firefox bug 1927945](https://bugzil.la/1927945))。
- [ピクチャインピクチャ API](/ja/docs/Web/API/Document_Picture-in-Picture_API) をデスクトップ環境でサポートしました。
  これは ウェブサイトが {{htmlelement("video")}} 要素の表示をページ内と最前面のフローティング動画ウィンドウの間で切り替えるための便利な仕組みを提供して、ユーザーがほかのサイトやアプリケーションと対話しながら動画の視聴を続けることができます ([Firefox bug 1463402](https://bugzil.la/1463402))。

#### DOM

- [ポップオーバー API](/ja/docs/Web/API/Popover_API) で、[`hint` および `auto` のポップオーバーを開閉するとき](/ja/docs/Web/API/Popover_API/Using#popover_openclose_interaction_rules) の動作がより一貫性のあるものになりました。
  これは [whatwg/html#12345](https://github.com/whatwg/html/pull/12345) の仕様更新に従います ([Firefox bug 2029974](https://bugzil.la/2029974))。

#### Media、WebRTC、Web Audio

- {{domxref("RTCDtlsTransport.getRemoteCertificates()")}} メソッドで、安全な DTLS 通信のためにリモートピアが使用する証明書を取得します。
  これは、リモートピアのアプリケーション層における認証に使用できます ([Firefox bug 1805446](https://bugzil.la/1805446))。
- {{domxref("MediaCapabilities")}} インターフェイスの {{domxref("MediaCapabilities.decodingInfo()", "decodingInfo()")}} および {{domxref("MediaCapabilities.encodingInfo()", "encodingInfo()")}} メソッドが `"webrtc"` 構成タイプを受け入れるようになりました。
  これにより、特定の音声または映像の構成が WebRTC を使用してデコードまたはエンコードできるか、およびその処理がスムーズか電力効率的か、あるいはその両方かをサイトが確認できます。
  `webrtc` の別名として使用されていた、非標準の [`transmission`](/ja/docs/Web/API/MediaCapabilities/encodingInfo#transmission) タイプは削除しました ([Firefox bug 2037610](https://bugzil.la/2037610)、[Firefox bug 2032075](https://bugzil.la/2032075))。
- {{domxref("RTCStatsReport")}} で、WebRTC の "transport" 統計情報のすべての必須項目および一部のオプション項目を報告できるようになりました。
  返されるオブジェクトは {{domxref("RTCTransportStats.dtlsCipher","dtlsCipher")}}、{{domxref("RTCTransportStats.dtlsRole","dtlsRole")}}、{{domxref("RTCTransportStats.dtlsState","dtlsState")}}、{{domxref("RTCTransportStats.iceLocalUsernameFragment","iceLocalUsernameFragment")}}、{{domxref("RTCTransportStats.iceRole","iceRole")}}、{{domxref("RTCTransportStats.iceState","iceState")}}、{{domxref("RTCTransportStats.id","id")}}、{{domxref("RTCTransportStats.selectedCandidatePairId","selectedCandidatePairId")}}、{{domxref("RTCTransportStats.srtpCipher","srtpCipher")}}、{{domxref("RTCTransportStats.timestamp","timestamp")}}、{{domxref("RTCTransportStats.tlsVersion","tlsVersion")}}、{{domxref("RTCTransportStats.type","type")}} の各プロパティを持つ {{domxref("RTCTransportStats")}} オブジェクトです。
  また、`transportId` プロパティが {{domxref("RTCOutboundRtpStreamStats.transportId","RTCOutboundRtpStreamStats")}}、{{domxref("RTCRemoteOutboundRtpStreamStats.transportId","RTCRemoteOutboundRtpStreamStats")}}、{{domxref("RTCRemoteInboundRtpStreamStats.transportId","RTCRemoteInboundRtpStreamStats")}}、{{domxref("RTCInboundRtpStreamStats.transportId","RTCInboundRtpStreamStats")}} でも使用可能になりました ([Firefox bug 1225723](https://bugzil.la/1225723)、[Firefox bug 2019389](https://bugzil.la/2019389))。

### WebAssembly

- JavaScript Promise Integration (JS-PI) が有効になり、[WebAssembly](/ja/docs/WebAssembly) モジュールが非同期の {{jsxref("Promise")}} ベースの JavaScript API と相互運用できるようになりました。これにより WebAssembly のコードが JavaScript プロミスを待つ間に一時停止する、およびプロミスが決定したときに再開できるようになります 説明や動作例については [`WebAssembly.Suspending`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Suspending) をご覧ください ([Firefox bug 2044809](https://bugzil.la/2044809))。

### WebDriver への適合 (WebDriver BiDi, Marionette)

#### 一般

- Marionette および WebDriver BiDi のウィンドウ操作コマンドを、x 座標・y 座標・幅・高さといった個々のウィンドウのジオメトリープロパティを個別に調整できるように改良しました ([Firefox bug 1941404](https://bugzil.la/1941404))。
- 要素の最初の DOMRect (たとえば複数の行にまたがるインライン要素) のサイズがゼロである場合に、クリックやポインターアクションのコマンドが失敗する不具合を修正しました ([Firefox bug 2038932](https://bugzil.la/2038932))。
- content スコープで操作しているときは、特権ページ (特定の `about:*` ページ、`chrome://`、`resource://` URL) へのナビゲーションを制限します ([Firefox bug 1579790](https://bugzil.la/1579790))。

#### WebDriver BiDi

- `emulation.setLocaleOverride` コマンドを、専用ワーカーおよび共有ワーカーでもロケールのエミュレーションを適用するように拡張しました ([Firefox bug 2015655](https://bugzil.la/2015655))。
- `emulation.setTimezoneOverride` コマンドを、専用ワーカーおよび共有ワーカーでもタイムゾーンのエミュレーションを適用するように拡張しました ([Firefox bug 2015657](https://bugzil.la/2015657))。
- `browsingContext.create` コマンドを、新しいトップレベルのブラウジングコンテキストを作成したときに初期の `about:blank` に対して `browsingContext.domContentLoaded` および `browsingContext.load` イベントが発生しないように更新しました。また、作成処理の完了時に `browsingContext.contextCreated` イベントが発生するようになりました ([Firefox bug 1930594](https://bugzil.la/1930594))。
- `script.addPreloadScript` コマンドで作成した関数が、数回ナビゲーションした後に動作しなくなる場合がある不具合を修正しました ([Firefox bug 2046390](https://bugzil.la/2046390))。

#### Marionette

- WebDriver Classic の `Take Element Screenshot` コマンドを、ビューポートからはみ出した要素をスクリーンショットから切り落とすように修正しました ([Firefox bug 2013176](https://bugzil.la/2013176))。
- 内部のアクションが完了するのを適切に待つように `Perform Actions` コマンドを修正して、潜在的な競合状態を防ぐようになりました ([Firefox bug 2031596](https://bugzil.la/2031596))。

## アドオン開発者向けの変更点一覧

- 拡張機能が `file://` URL へアクセスするために、明示的なユーザーの許可が必要になりました。以前は "保存されたすべてのウェブサイトのユーザーデータへのアクセス" のホスト権限にローカルファイルへのアクセスが含まれていました。この変更は拡張機能の権限設定 (デスクトップに限る) の "ユーザーのコンピューター上のローカルファイルへのアクセス" オプションを個別に導入して、すでに存在するものを含めてすべての拡張機能でファイルアクセスがデフォルトで無効になります。また、{{WebExtAPIRef("extension.isAllowedFileSchemeAccess()")}} メソッドはユーザーがファイルスキームへのアクセスを許可した場合に正しく `true` を返すようになりました。以前は Firefox が常に `false` を返していました。さらに、`file://` URL で {{WebExtAPIRef("devtools.inspectedWindow.eval()")}} を呼び出す際にこの許可が必要になりました ([Firefox bug 2034168](https://bugzil.la/2034168))。
- 拡張機能が必要に応じてユーザースクリプトをタブやフレームに挿入できるようにする {{WebExtAPIRef("userScripts.execute()")}} メソッドをサポートしました。{{WebExtAPIRef("userScripts.register()")}} とは異なり、このメソッドは定義された順序で実行する複数のスクリプトソースを 1 回限り挿入できます ([Firefox bug 1930776](https://bugzil.la/1930776))。
- ブラウザーに組み込まれた [Public Suffix List](https://publicsuffix.org/) を使用して、ホスト名の登録可能ドメイン (eTLD+1) やパブリックサフィックスを拡張機能が判別できるようにする {{WebExtAPIRef("publicSuffix")}} API を追加しました。この API は 3 つの同期メソッド {{WebExtAPIRef("publicSuffix.isKnownSuffix()")}}、{{WebExtAPIRef("publicSuffix.getKnownSuffix()")}}、{{WebExtAPIRef("publicSuffix.getDomain()")}} を提供します ([Firefox bug 1315558](https://bugzil.la/1315558))。
- 新しい {{WebExtAPIRef("runtime.getDocumentId()")}} メソッド、{{WebExtAPIRef("webNavigation")}} のイベントおよびメソッド、{{WebExtAPIRef("webRequest")}} のイベント、スクリプトの挿入対象、メッセージング API を含む、さまざまな WebExtension API に `documentId` を追加しました。サポートするすべてのイベントやメソッドの一覧、および `documentId` の使用に関するガイダンスについては [Work with documentId](/ja/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId) をご覧ください ([Firefox bug 1891478](https://bugzil.la/1891478))。
- 拡張機能のコンテンツスクリプトで、`.wrappedJSObject` を使用せずに {{domxref("document.adoptedStyleSheets")}} および {{domxref("ShadowRoot.adoptedStyleSheets")}} で構築済みのスタイルシートの読み取りおよび変更が可能になりました ([Firefox bug 1751346](https://bugzil.la/1751346))。
- [`theme`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) マニフェストキーの `images.additional_backgrounds` プロパティで、画像の URL に加えて CSS グラデーションをサポートしました。新たに `properties.additional_backgrounds_size` プロパティで、それぞれの追加背景アイテムのサイズを制御します ([Firefox bug 2036647](https://bugzil.la/2036647))。
- Contextual identities (コンテナー) に関する変更:
  - サポートされる色やアイコンの値を取得するための {{WebExtAPIRef("contextualIdentities.getSupportedColors()")}} および {{WebExtAPIRef("contextualIdentities.getSupportedIcons()")}} メソッドを追加しました。これにより、それらの値をハードコーディングする必要がなくなりました ([Firefox bug 2044712](https://bugzil.la/2044712))。
  - 使用可能な色を更新しました。`"turquoise"` を `"cyan"` に改名、`"toolbar"` を `"gray"` に改名、および `"violet"` を追加しました。古い名前の `"turquoise"` および `"toolbar"` は、後方互換性のために受け入れます。色名称のハードコーディングを防ぐため、使用可能な色を取得するには {{WebExtAPIRef("contextualIdentities.getSupportedColors()")}} を使用してください ([Firefox bug 2044354](https://bugzil.la/2044354))。

## 実験的なウェブ機能

以下の機能は Firefox 153 で導入しましたが、デフォルトで無効です。
これらを実験するには、`about:config` ページで適切な設定項目を検索して `true` に設定してください。
[実験的機能](/ja/docs/Mozilla/Firefox/Experimental_features) のページで、さらに多くの機能を確認できます。

- **JPEG XL 画像のサポート** (Nightly): `image.jxl.enabled`

  Rust ベースの [JPEG XL](https://jpeg.org/jpegxl/) 画像デコーダーを、Nightly においてデフォルトで有効にしました ([Firefox bug 2040074](https://bugzil.la/2040074))。

- **ツリーカウント CSS 関数**: `layout.css.tree-counting-functions.enabled`

  {{cssxref("sibling-count")}} および {{cssxref("sibling-index")}} 関数をサポートしました。`sibling-count()` 関数は、要素自体および兄弟要素の数を返します。`sibling-index()` 関数は、兄弟要素に対するその要素のインデックス番号を返します。この値は `0` ではなく `1` から始まります ([Firefox bug 2042063](https://bugzil.la/2042063))。

- **外部リソースの属性を更新**: `layout.css.link-parameters.enabled`

  {{cssxref("link-parameters")}} CSS プロパティおよび {{cssxref("param")}} CSS 関数をサポートしました。これは、{{cssxref("env")}} CSS 関数で属性を設定している SVG などの外部リソースの属性をユーザーが更新することを可能にします。これにより、色やその他の値だけが異なる複数のバリエーションを作成するのではなく、ひとつの外部リソースを使用できるようになります ([Firefox bug 2046153](https://bugzil.la/2046153))。

- **CSS 基本図形で `farthest-corner` および `closest-corner` キーワードを使用可能** (Nightly): `layout.css.ellipse-corners.enabled`

  [`ellipse()`](/ja/docs/Web/CSS/Reference/Values/basic-shape/ellipse) および [`circle()`](/ja/docs/Web/CSS/Reference/Values/basic-shape/circle) CSS 基本図形の半径の値を指定するために、`farthest-corner` および `closest-corner` キーワードが使用可能になりました ([Firefox bug 2037673](https://bugzil.la/2037673))。
