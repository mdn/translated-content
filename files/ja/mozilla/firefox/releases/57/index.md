---
title: Firefox 57 (Quantum) for developers
slug: Mozilla/Firefox/Releases/57
l10n:
  sourceCommit: 78ef1310a76394c4e0bdce456982abc3856790c0
---

Firefox 57 (別名 Firefox Quantum) は、米国時間 2017 年 11 月 14 日にリリースされました。このページでは、開発者に影響する Firefox 57 の変更点をまとめています。

## Firefox 57 === Firefox Quantum

Firefox 57 は、Firefox を徹底的に再構築してパフォーマンス、安定性、外見を大きく向上させることを目指す [Firefox Quantum](https://wiki.mozilla.org/Quantum) エンジニアリングプロジェクトにちなんで **Quantum** というリリース名が与えられました。Firefox 57 はこれらの改善点の一部をリリースする最初のバージョンであり、祝福を求めていました。

> [!NOTE]
> このリリースの Quantum の特徴について詳しくは、Dan Callahan による記事 [Firefox Quantum Developer Edition: the fastest Firefox ever with Photon UI and better tooling](https://hacks.mozilla.org/2017/09/firefox-quantum-developer-edition-fastest-firefox-ever/) をご覧ください。

[Firefox's new parallel CSS engine](https://hacks.mozilla.org/2017/08/inside-a-super-fast-css-engine-quantum-css-aka-stylo/)、別名 **Quantum CSS** または **Stylo** はデスクトップ版の Firefox 57 でデフォルトで有効であり、モバイル版の Firefox は追って有効化します。多くのパフォーマンス向上は別として、開発者が何らかの大きな違いに気づくことがあってはいけません。Stylo には多くの小規模な機能差がありますが、Gecko で取り除くべき非標準の動作を修正するために実装したものです。このような差異は、適宜リファレンスのページやリリースノートに掲載します ([Quantum CSS に関する補足](#quantum_css_に関する補足) を参照)。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

_変更なし。_

### HTML

- {{htmlelement("input")}} の [date](/ja/docs/Web/HTML/Reference/Elements/input/date) および [time](/ja/docs/Web/HTML/Reference/Elements/input/time) 型が、すべてのビルドで有効になりました ([Firefox バグ 1399036](https://bugzil.la/1399036))。

### CSS

- [`display-mode`](/ja/docs/Web/CSS/Reference/At-rules/@media/display-mode) メディアクエリーの値 `minimal-ui` および `standalone` をサポートしました ([Firefox バグ 1369815](https://bugzil.la/1369815))。[ウェブアプリマニフェストの `display` フィールド](/ja/docs/Web/Progressive_web_apps/Manifest#display) もご覧ください。
- `grid-row-gap` および `grid-column-gap` プロパティが、{{CSSxRef("grid")}} ショートハンドプロパティでリセットされないようになりました ([Firefox バグ 1387410](https://bugzil.la/1387410))。
- 設定項目 `layout.css.clip-path-shapes.enabled` を削除しました ([Firefox バグ 1399767](https://bugzil.la/1399767))。この設定項目で、{{CSSxRef("clip-path")}} の {{cssxref("&lt;basic-shape&gt;")}} のサポートを無効化できました。これは Firefox 54 で導入されたものであり、今後は無効化できません。

#### Quantum CSS に関する補足

Quantum で以下の不具合を修正しました。

- 以前の Gecko のスタイルシステムでは `radial-gradient(circle gold,red)` のような放射状のグラデーションが、`circle` と `gold` の間にカンマがないため動作すべきではないにもかかわらず、動作していました ([Firefox バグ 1383323](https://bugzil.la/1383323))。
- オフスクリーンの要素をオンスクリーンにアニメーションするときに遅延を指定すると、Gecko は Windows など一部のプラットフォームで再描画を行いません ([Firefox バグ 1383239](https://bugzil.la/1383239))。
- Gecko では、{{htmlelement("details")}} 要素で {{CSSxRef("animation")}} をアクティブにすると `open` 属性を使用して既定で開かせることができません ([Firefox バグ 1382124](https://bugzil.la/1382124))。
- Gecko では、色を指定した {{CSSxRef("text-shadow")}} から色を指定しない `text-shadow` へ遷移する場合に{{cssxref("transition", "トランジション", "", 1)}}が動作しません ([Firefox バグ 726550](https://bugzil.la/726550))。
- Gecko ではアニメーションのフィリングをキャンセルする (例えば `animation-fill-mode: forwards` を設定) と、1 回だけですが同じ要素に設定したトランジションを発生させられます (詳しくは [Firefox バグ 1192592](https://bugzil.la/1192592) および [こちらのテストケース](https://bug1192592.bmoattachments.org/attachment.cgi?id=8843824) をご覧ください)。一般的に、宣言的なアニメーションがトランジションを発生させるべきではありません。
- Gecko では em 単位を使用するアニメーションが、アニメーションする要素の親で {{CSSxRef("font-size")}} を変更しても影響を受けませんが、実際は影響を受けるべきです ([Firefox バグ 1254424](https://bugzil.la/1254424))。
- Gecko と Quantum CSS では `font-size` の継承が異なっており、Gecko では一部の言語設定で継承したフォントのサイズが想定より小さくなります ([Firefox バグ 1391341](https://bugzil.la/1391341))。
- Gecko では {{CSSxRef("@document", "@-moz-document")}} 規則の `domain()` あるいは `url-prefix()` URL マッチング関数で解析するときに、URL トークンの解析と同じ仕組みを再使用します。Quantum CSS は同じ仕組みを使用せず、括弧や引用符を含む場合にトークンを無効とみなしません ([Firefox バグ 1362333](https://bugzil.la/1362333))。
- Gecko では canvas 2D コンテキストの {{DOMxRef("CanvasRenderingContext2D.font", "font")}} の値としてシステムフォント (例えば `menu`) を設定すると、期待するフォントが返りません (何も返りません)。Quantum でこの不具合を修正しました ([Firefox バグ 1374885](https://bugzil.la/1374885))。
- Gecko では、切り離されたサブツリー (例えば {{DOMxRef("Document.createElement","createElement()")}} を使用して作成した、DOM に未挿入の {{htmlelement("div")}}) を作成すると、サブツリーのルート要素がブロックレベル要素として設定されます。Quantum CSS では仕様書に従って、インラインとして設定します ([Firefox バグ 1374994](https://bugzil.la/1374994))。
- Gecko では {{CSSxRef("calc", "calc()")}} 式を {{CSSxRef("gradient/radial-gradient", "radial-gradient()")}} の半径の構成要素として使用すると、式が拒否されて値が無効になります ([Firefox バグ 1376019](https://bugzil.la/1376019))。
- Gecko では `calc(1*2*3)` が正しく解析されません。Quantum CSS でこの不具合を修正しました ([Firefox バグ 1379467](https://bugzil.la/1379467))。
- Quantum CSS では、[`calc()` を仕様書で説明されているとおり全面的にサポートしています](https://drafts.csswg.org/css-values-3/#calc-notation) ([Firefox バグ 1350857](https://bugzil.la/1350857))。Gecko はそうではありません。
- Gecko は {{CSSxRef("::before")}} および {{CSSxRef("::after")}} 擬似要素で、{{CSSxRef("content")}} プロパティの値が `normal` や `none` であっても擬似要素を生成する不具合があります。仕様書によると、このようにするべきではありません ([Firefox バグ 1387931](https://bugzil.la/1387931))。
- Gecko は {{CSSxRef("background-position")}} プロパティで、異なる数の {{CSSxRef("&lt;position&gt;")}} 値を持つ 2 つの値の間 (例えば `background-position: 10px 10px;` と `background-position: 20px 20px, 30px 30px;`) でトランジションを行えない不具合があります ([Firefox バグ 1390446](https://bugzil.la/1390446))。

### SVG

_変更なし。_

### JavaScript

- 非標準の {{JSxRef("Statements/for_each...in", "for each...in")}} (E4X) ループを廃止しました。代わりに {{JSxRef("Statements/for...of", "for...of")}} を使用してください。また、移行の助けになる [Warning: JavaScript 1.6's for-each-in loops are deprecated](/ja/docs/Web/JavaScript/Reference/Errors/For-each-in_loops_are_deprecated) をご覧ください。([Firefox バグ 1083470](https://bugzil.la/1083470))
- {{JSxRef("Object.prototype.watch()")}} および {{JSxRef("Object.unwatch", "unwatch()")}} メソッドが非推奨になり、使用すると警告が発生します。また、将来削除する予定です ([Firefox バグ 934669](https://bugzil.la/934669))。
- 非標準の {{JSxRef("Iterator")}} および {{JSxRef("StopIteration")}} オブジェクトと、古いイテレーションプロトコルを廃止しました ([Firefox バグ 1098412](https://bugzil.la/1098412))。
- 非同期ジェネレーターを有効化しました ([Firefox バグ 1352312](https://bugzil.la/1352312))。
- for await (... of ...) 構文を有効化しました ([Firefox バグ 1352312](https://bugzil.la/1352312))。

### API

#### 新規 API

- {{DOMxRef("PerformanceObserver")}} API をデフォルトで有効にしました ([Firefox バグ 1386021](https://bugzil.la/1386021))。
- {{DOMxRef("AbortController")}} および {{DOMxRef("AbortSignal")}} インターフェイス (Abort API) を追加しました。必要に応じて、DOM リクエスト ([fetch リクエスト](/ja/docs/Web/API/Window/fetch) など) を中止できます ([Firefox バグ 1378342](https://bugzil.la/1378342))。
- [Storage API](/ja/docs/Web/API/Storage_API) を実装して、デフォルトで有効にしました ([Firefox バグ 1399038](https://bugzil.la/1399038))。

#### DOM

- [Selection API](/ja/docs/Web/API/Selection_API) の {{DOMxRef("Selection.type")}} プロパティを実装しました ([Firefox バグ 1359157](https://bugzil.la/1359157))。
- {{DOMxRef("Document.createEvent", "Document.createEvent('FocusEvent')")}} をサポートしました ([Firefox バグ 1388069](https://bugzil.la/1388069))。
- {{DOMxRef("HTMLInputElement")}} インターフェイスの `files` プロパティが設定可能になりました ([Firefox バグ 1384030](https://bugzil.la/1384030))。
- `HTMLDocument.getSelection()` メソッドを {{DOMxRef("Document.getSelection","Document")}} インターフェイスに移動して、XML ドキュメントで使用可能になりました ([Firefox バグ 718711](https://bugzil.la/718711))。
- `messageerror` イベントを実装して、メッセージターゲットで実装したイベントハンドラーの発動に反応して実行するコードを持つことが可能になりました。{{DOMxRef("MessagePort.messageerror_event")}}、{{DOMxRef("DedicatedWorkerGlobalScope.messageerror_event")}}、{{DOMxRef("Worker.messageerror_event")}}、{{DOMxRef("BroadcastChannel.messageerror_event")}}、{{DOMxRef("Window.messageerror_event")}} をご覧ください ([Firefox バグ 1359017](https://bugzil.la/1359017))。
- {{DOMxRef("Headers")}} の値で反復処理を行うとき、値を自動的に辞書順で整列して、さらに重複するヘッダー名の値を結合するようになりました ([Firefox バグ 1396848](https://bugzil.la/1396848))。

#### DOM イベント

_変更なし。_

#### メディアと WebRTC

- SCTP メッセージの end-of-record (EOR) フラグを使用することにより、{{DOMxRef("RTCDataChannel")}} で任意のサイズ (256kiB が相互運用性が高いのですが、最大 1GiB まで) のメッセージをサポートしました。詳しくは [Understanding message size limits](/ja/docs/Web/API/WebRTC_API/Using_data_channels#understanding_message_size_limits) をご覧ください ([Firefox バグ 979417](https://bugzil.la/979417))。

  > [!NOTE]
  > Firefox は、複数のソースの SCTP メッセージを多重化する機能を提供する SCTP ndata プロトコルが未サポートですので、大きなデータオブジェクトを送信すると他のすべての SCTP 通信で著しい遅延が発生する可能性があります。Firefox の ndata サポートの実装および展開の進捗を追跡するには、[Firefox バグ 1381145](https://bugzil.la/1381145) をご覧ください。

- {{DOMxRef("RTCDataChannel.send()")}} メソッドで、送信しようとしたメッセージのサイズが受信側の {{Glossary("user agent","ユーザーエージェント")}} と互換性がない場合に `TypeError` 例外を発生できるようになりました (これは [Firefox バグ 979417](https://bugzil.la/979417) の一部として実装しました)。
- [MediaStream Recording API](/ja/docs/Web/API/MediaStream_Recording_API) を更新し、録画中に発生した問題を報告するために送信される {{domxref("MediaRecorder/error_event", "error")}} イベントを一般的なイベントから {{DOMxRef("MediaRecorderErrorEvent")}} 型にしました。
- {{DOMxRef("OfflineAudioContext")}} のコンストラクターで引数のリストに加えてオブジェクトを指定可能になったため、関連文書を更新しました ([Firefox バグ 1388591](https://bugzil.la/1388591))。

### セキュリティ

- `resource://` URL が情報を漏えいしないようになりました ([Firefox バグ 863246](https://bugzil.la/863246))。
- Data URI のオリジンが、ナビゲーションの責任がある設定オブジェクトのオリジンを継承するのではなく、一意の opaque origin として扱うようになりました ([Firefox バグ 1324406](https://bugzil.la/1324406))。

### プラグイン

_変更なし。_

### その他

- Firefox の [ヘッドレスモード](/ja/docs/Mozilla/Firefox/Headless_mode) に、コマンドラインからウェブサイトのスクリーンショットを直接取得することを可能にする `-screenshot` フラグを追加しました ([Firefox バグ 1378010](https://bugzil.la/1378010))。

## ウェブプラットフォームから廃止

### HTML

- さまざまなウェブ互換性の問題があるため、Firefox 57 で `<link rel="preload">` ([Preloading content with rel="preload"](/ja/docs/Web/HTML/Reference/Attributes/rel/preload) をご覧ください) を無効化しました ([Firefox バグ 1405761](https://bugzil.la/1405761))。キャッシュ不可のリソース向けに改良したバージョンを Firefox 58 に搭載する予定です。

### API

- Mozilla 独自仕様 [ソーシャル API](/ja/docs/Archive/Social_API) を完全に削除しました ([Firefox バグ 1388902](https://bugzil.la/1388902))。

### SVG

_変更なし。_

## アドオン開発者と Mozilla 開発者向けの変更点

> [!NOTE]
> Firefox 57 より、XPCOM ベースのアドオンのサポートを全面的に廃止します。すべての拡張機能は新しい [ブラウザー拡張機能](/ja/docs/Mozilla/Add-ons/WebExtensions) (WebExtensions としても知られています) への移行が必要であり、そうしなければ動作しません。

### WebExtensions

以下の API を追加または拡張しました:

- [`bookmarks`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks)
  - [`bookmarks.BookmarkTreeNodeType`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNodeType) でセパレーターをサポートしました。

- [`browser_action`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action)
  - light/dark テーマアイコンのための `theme_icons` プロパティ

- [`browserAction`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/browserAction)
  - [`browserAction.openPopup()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/browserAction/openPopup)

- [`browserSettings`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings)
  - [`allowPopupsForUserEvents`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/allowPopupsForUserEvents)
  - [`homepageOverride`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/homepageOverride)
  - [`imageAnimationBehavior`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/imageAnimationBehavior)
  - [`newTabPageOverride`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/newTabPageOverride)

- [`browsingData`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/browsingData)
  - [`browsingData.removeLocalStorage()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/browsingData/removeLocalStorage)

- [`clipboard`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/clipboard)
  - [`setImageData()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/clipboard/setImageData)

- [`contextualIdentities`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities)
  - [`onCreated`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities/onCreated)
  - [`onRemoved`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities/onRemoved)
  - [`onUpdated`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities/onUpdated)
  - [`contextualIdentitities.ContextualIdentity`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities/ContextualIdentity) の `colorCode` および `iconUrl`

- [`devtools.panels`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels)
  - [`devtools.panels.ElementsPanel.createSidebarPane()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ElementsPanel/createSidebarPane)

- [`downloads`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/downloads)
  - [`downloads.download()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/downloads/download) の `incognito` オプション
  - [`downloads.DownloadItem`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/downloads/DownloadItem) の `estimatedEndTime` プロパティ

- [`find`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/find)
  - [`find()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/find/find)
  - [`highlightResults()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/find/highlightResults)
  - [`removeHighlighting()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/find/removeHighlighting)

- [`pageAction.openPopup()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/openPopup)
- [`privacy`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/privacy/websites)
  - [`websites.trackingProtectionMode`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/privacy/websites)

- [`proxy`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/proxy)
  - `FindProxyForURL()` がオブジェクトを返せるようになりました

- [`runtime`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime)
  - [`runtime.openOptionsPage()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/openOptionsPage) を Android でサポート

- [`sessions`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/sessions)
  - [`setTabValue()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/sessions/setTabValue)
  - [`getTabValue()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/sessions/getTabValue)
  - [`removeTabValue()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/sessions/removeTabValue)
  - [`setWindowValue()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/sessions/setWindowValue)
  - [`getWindowValue()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/sessions/getWindowValue)
  - [`removeWindowValue()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/sessions/removeWindowValue)

- [`sidebarAction`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction)
  - [`sidebarAction.open()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/open)

- [`storage`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/storage)
  - [`storage.managed`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/storage/managed)

- [`tabs`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs)
  - [`tabs.update()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/update) の `loadReplace` オプション
  - [`tabs.Tab`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab)、[`tabs.onUpdated`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/onUpdated)、[`tabs.query()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query) の `discarded` プロパティ
  - [`tabs.create()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/create) で "view-source:" URL を開くことが可能になりました
  - [`tabs.Tab`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab)、[`tabs.create()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/create)、[`tabs.query()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query)、[`tabs.update()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/update) の `openerTabId` プロパティ

- [`theme`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme)
  - `colors.toolbar`
  - `colors.toolbar_field`
  - `colors.toolbar_field_text`
  - `colors.toolbar_text`

- [`theme`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/theme)
  - [`theme.update()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/theme/update) の `windowId` オプション

- [`webRequest`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/webRequest)
  - [`filterResponseData()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/filterResponseData)
  - [`webRequest`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/webRequest) イベントの `proxyInfo` プロパティ

- [`windows`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/windows)
  - [`windows.create()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/windows/create) の `allowScriptsToClose` プロパティ

## 過去のバージョン

{{Firefox_for_developers(56)}}
