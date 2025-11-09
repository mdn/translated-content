---
title: Firefox 126 for developers
slug: Mozilla/Firefox/Releases/126
l10n:
  sourceCommit: e6fcda9d35359bbfec32ddb42086468701f57ee5
---

このページでは、開発者に影響する Firefox 126 の変更点をまとめています。Firefox 126 は、米国時間 [2024 年 5 月 14 日](https://whattrainisitnow.com/release/?version=126) にリリースされました。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- コンソールペインを無効化するオプションを追加しました ([Firefox bug 1731635](https://bugzil.la/1731635))。

### HTML

変更なし。

### MathML

#### 廃止

- 垂直方向に中央揃えされる演算子 (+、=、< など) の自動調整を、デフォルトで無効にしました。この動作は MathML Core で定義されておらず、数式以外のフォントの回避策に限って必要なものでした。設定項目 `mathml.centered_operators.disabled` を `false` にすると、この動作を有効化できます([Firefox bug 1890531](https://bugzil.la/1890531))。

### CSS

- {{cssxref("zoom")}} プロパティをサポートしました。要素やその内容物のサイズを拡大または縮小するために使用できます ([Firefox bug 390936](https://bugzil.la/390936))。

### JavaScript

変更なし。

### HTTP

- `Content-Encoding` HTTP ヘッダーで [`zstd`](/ja/docs/Web/HTTP/Reference/Headers/Content-Encoding#zstd) ディレクティブをサポートしました。{{glossary("Zstandard compression")}} アルゴリズムでエンコードされた、サーバーから送信されるコンテンツをデコードできます ([Firefox bug 1871963](https://bugzil.la/1871963))。

### API

- 使用可能な [IndexedDB API](/ja/docs/Web/API/IndexedDB_API) データベースを列挙する [`IDBFactory.databases()`](/ja/docs/Web/API/IDBFactory/databases) をサポートしました ([Firefox bug 934640](https://bugzil.la/934640))。
- トランザクションを作成した際に設定した、トランザクションの永続性のヒントを確認できる [`IDBTransaction.durability`](/ja/docs/Web/API/IDBTransaction/durability) が使用可能になりました ([Firefox bug 1878143](https://bugzil.la/1878143))。
- [`URL.parse()`](/ja/docs/Web/API/URL/parse_static) 静的メソッドで [`URL`](/ja/docs/Web/API/URL) オブジェクトの生成をサポートしました。これは渡したパラメーターが有効な `URL` でない場合に `null` を返しますので、[`URL` コンストラクター](/ja/docs/Web/API/URL/URL) で `URL` オブジェクトを生成するための、例外を発生させない代替手段として使用できます ([Firefox bug 1823354](https://bugzil.la/1823354))。
- [Screen Wake Lock API](/ja/docs/Web/API/Screen_Wake_Lock_API) をサポートしました。ウェブアプリケーションがアクティブな間は、スクリーンを暗くしたりロックしたりしないように要求できます。これはナビゲーションや読書のアプリケーション、および通常は起動したままにして使用中は通常のタッチ操作を受け取らない、その他のアプリケーションで特に役に立ちます。この API は保護されたコンテキストで {{domxref("Navigator.wakeLock")}} を通して使用でき、{{domxref("WakeLock")}} を返します。wake lock の状態を監視したり手動で解放したりするために使用できる {{domxref("WakeLockSentinel")}} を要求できます ([Firefox bug 1589554](https://bugzil.la/1589554)、[Firefox bug 1874849](https://bugzil.la/1874849))。
- [`RTCIceCandidate`](/ja/docs/Web/API/RTCIceCandidate) で、未実装の `relayProtocol` および `url` プロパティを除くすべてのプロパティやメソッドをサポートして、仕様書に準拠するようになりました。`RTCIceCandidate` のプロパティで以下の変更があります:
  - 以下のプロパティは読み取り専用になりました: [`candidate`](/ja/docs/Web/API/RTCIceCandidate/candidate)、[`sdpMid`](/ja/docs/Web/API/RTCIceCandidate/sdpMid)、[`sdpMLineIndex`](/ja/docs/Web/API/RTCIceCandidate/sdpMLineIndex)、[`usernameFragment`](/ja/docs/Web/API/RTCIceCandidate/usernameFragment)。
  - 以下のプロパティを追加しました: [`foundation`](/ja/docs/Web/API/RTCIceCandidate/foundation)、[`component`](/ja/docs/Web/API/RTCIceCandidate/component)、[`priority`](/ja/docs/Web/API/RTCIceCandidate/priority)、[`address`](/ja/docs/Web/API/RTCIceCandidate/address)、[`protocol`](/ja/docs/Web/API/RTCIceCandidate/protocol)、[`port`](/ja/docs/Web/API/RTCIceCandidate/port)、[`type`](/ja/docs/Web/API/RTCIceCandidate/type)、[`tcpType`](/ja/docs/Web/API/RTCIceCandidate/tcpType)、[`relatedAddress`](/ja/docs/Web/API/RTCIceCandidate/relatedAddress)、[`relatedPort`](/ja/docs/Web/API/RTCIceCandidate/relatedPort)、[`usernameFragment`](/ja/docs/Web/API/RTCIceCandidate/usernameFragment)。

  ([Firefox bug 1322186](https://bugzil.la/1322186))

- 要素で有効な CSS [zoom](/ja/docs/Web/CSS/Reference/Properties/zoom) を取得する、読み取り専用の {{domxref("Element.currentCSSZoom")}} プロパティをサポートしました ([Firefox bug 1880189](https://bugzil.la/1880189))。

#### DOM

- カスタム要素の状態を定義して、CSS セレクターを使用してそれらをマッチさせる機能をサポートしました。
  カスタム状態は要素の {{domxref("ElementInternals.states")}} プロパティ ({{domxref("CustomStateSet")}}) で追加または削除できる、カスタム識別子として表されます。CSS の [`:state()`](/ja/docs/Web/CSS/Reference/Selectors/:state) 擬似クラスはカスタム識別子を引数として持ち、識別子が状態セットに含まれているカスタム要素にマッチします ([Firefox bug 1887543](https://bugzil.la/1887543))。
- 選択範囲の方向を示す {{domxref("Selection.direction")}} プロパティをサポートしました ([Firefox bug 1867058](https://bugzil.la/1867058))。

#### Media、WebRTC、Web Audio

#### 廃止

- マーキーの [`bounce`](/ja/docs/Web/API/HTMLMarqueeElement#bounce)、[`finish`](/ja/docs/Web/API/HTMLMarqueeElement#finish)、[`start`](/ja/docs/Web/API/HTMLMarqueeElement#start) イベントを [`HTMLMarqueeElement`](/ja/docs/Web/API/HTMLMarqueeElement) から削除しました。また [`<marquee>` HTML 要素](/ja/docs/Web/HTML/Reference/Elements/marquee) で定義されている、イベントに対応する [イベントハンドラー属性](/ja/docs/Web/HTML/Reference/Elements/marquee#イベントハンドラー) も削除しました ([Firefox bug 1689705](https://bugzil.la/1689705))。

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- ネットワーク要求の傍受を特定のトップレベル閲覧コンテキストに限定するための `contexts` 引数を、`network.addIntercept` コマンドに追加しました ([Firefox bug 1882260](https://bugzil.la/1882260))。
- `session.subscribe` および `session.unsubscribe` コマンドで、`events` または `contexts` 引数の値が空の配列であるときに `invalid argument` エラーが発生するようになりました ([Firefox bug 1887871](https://bugzil.la/1887871))。
- `storage.getCookies` コマンドの実装を、Gecko の既定の Cookie の動作に合わせて更新しました。これは CDP 実装だけが設定すると想定していた、設定項目 `network.cookie.cookieBehavior` のユーザー設定値を削除できます ([Firefox bug 1879503](https://bugzil.la/1879503))。
- もはや必要ないため、`browsingContext.locateNodes` コマンドの `ownership` および `sandbox` 引数を削除しました ([Firefox bug 1884935](https://bugzil.la/1884935))。
- `session.new` コマンドで capability が指定されていないときのエラーメッセージを改善しました ([Firefox bug 1838152](https://bugzil.la/1838152))。

## アドオン開発者向けの変更点一覧

- {{WebExtAPIRef("commands.onCommand")}} コマンドが、`tab` 引数をイベントリスナーに渡すようになりました。これは拡張機能が `tabs.query()` を呼び出す必要なく、発生したショートカットをページに適用できるようにします ([Firefox bug 1843866](https://bugzil.la/1843866))。
- {{WebExtAPIRef("runtime.MessageSender")}} 型が `origin` プロパティを含むようになりました。これはメッセージや接続要求が、接続を開始したページやフレームを確認することを可能にします。これはオリジンが URL から明らかでないときに、オリジンを信頼できるかを明確にするのに役立ちます ([Firefox bug 1787379](https://bugzil.la/1787379))。
- `"webRequestAuthProvider"` パーミッションをサポートしました。これは Manifest V3 の {{WebExtAPIRef("webRequest.onAuthRequired")}} のパーミッション要求について、Chrome と互換性があります ([Firefox bug 1820569](https://bugzil.la/1820569))。
- [`options_page` マニフェストキー](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_page) を、[`options_ui`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) キーの別名として提供します。これは拡張機能に対して、Chrome とのよりよい互換性を提供します ([Firefox bug 1816960](https://bugzil.la/1816960))。
- {{WebExtAPIRef("tabs.captureVisibleTab")}} メソッドが `activeTab` [パーミッション](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) でも使用可能になり、Chrome や Safari との互換性を提供します ([Firefox bug 1784920](https://bugzil.la/1784920))。

### その他

## 実験的なウェブ機能

以下の機能は Firefox 126 で新たに導入しましたが、デフォルトで無効です。これらを実験するには、`about:config` ページで適切な設定項目を検索して `true` に設定してください。[実験的機能](/ja/docs/Mozilla/Firefox/Experimental_features) のページで、さらに多くの機能を確認できます。

- **シャドウ DOM 境界を超えた範囲選択:** `dom.shadowdom.selection_across_boundary.enabled`。

  {{domxref("Selection.getComposedRanges()")}} メソッドを使用して、シャドウ DOM の内部にアンカーやフォーカスノードがある選択範囲を取得できます。ただし、それらのノードを包含する {{domxref("ShadowRoot")}} オブジェクトを渡した場合に限ります。`Selection` の {{domxref("Selection.setBaseAndExtent()","setBaseAndExtent()")}}、{{domxref("Selection.collapse()","collapse()")}}、{{domxref("Selection.extend()","extend()")}} メソッドも、シャドウルートの内部にあるノードを受け入れるように変更しました ([Firefox bug 1867058](https://bugzil.la/1867058))。

- **CSS `shape()` 関数:** `layout.css.basic-shape-shape.enabled`。

  [`shape()`](/ja/docs/Web/CSS/basic-shape/shape) 関数を使用して、{{cssxref("clip-path")}} および {{cssxref("offset-path")}} プロパティでシェイプを定義できます。この関数は定義できるシェイプをきめ細かく設定することができ、`{{cssxref("path","path()")}}` 関数より多くの利点をもたらします (`clip-path` における `shape()` 関数のサポートは [Firefox bug 1823463](https://bugzil.la/1823463)、`offset-path` における `shape()` 関数のサポートは [Firefox bug 1884424](https://bugzil.la/1884424)、`shape()` の補完のサポートは [Firefox bug 1884425](https://bugzil.la/1884425))。

## 過去のバージョン

{{Firefox_for_developers}}
