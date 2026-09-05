---
title: Firefox 154 release notes for developers (Stable)
short-title: Firefox 154 (Stable)
slug: Mozilla/Firefox/Releases/154
l10n:
  sourceCommit: 2ad62b2e8cb4dbd6305f23fda33d800e218d8aef
---

このページでは、開発者に影響する Firefox 154 の変更点をまとめています。
Firefox 154 は、米国時間 [2026 年 8 月 18 日](https://whattrainisitnow.com/release/?version=154) にリリースされました。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- [JSON ビューワー](https://firefox-source-docs.mozilla.org/devtools-user/json_viewer/index.html) が、JSON 構造内で選択した項目の位置を示すパンくずリストをパネルの下部に表示するようになりました ([Firefox bug 1850288](https://bugzil.la/1850288))。

### HTML

変更なし。

### CSS

- {{cssxref("sibling-count")}} および {{cssxref("sibling-index")}} 関数をサポートしました。`sibling-count()` 関数は、要素自体および兄弟要素の数を返します。`sibling-index()` 関数は、兄弟要素に対するその要素のインデックス番号を返します。この値は `0` ではなく `1` から始まります ([Firefox bug 2045706](https://bugzil.la/2045706))。
- {{cssxref("text-box-edge")}} および {{cssxref("text-box-trim")}} プロパティと、{{cssxref("text-box")}} ショートハンドプロパティをサポートしました。これらのプロパティは、特にブロックに複数のフォントが含まれている場合に、ブロック方向のテキスト間隔を制御しやすくします。`text-box-edge` プロパティは、テキスト要素のブロックコンテナーから取り除く余白の量を指定できます。`text-box-trim` プロパティは、取り除く端 (上端、下端、両方、またはどちらでもない) を指定できます。`text-box` ショートハンドプロパティは、これら2つのプロパティを組み合わせたものです ([Firefox bug 2050141](https://bugzil.la/2050141))。

### JavaScript

- {{jsxref("Iterator.prototype.includes()")}} メソッドをサポートしました。これにより指定した値がイテレーターに含まれているかを開発者が確認できます ([Firefox bug 2034104](https://bugzil.la/2034104))。
- {{jsxref("Iterator.prototype.join()")}} メソッドをサポートしました。これはイテレーターによって生成されたすべての要素を、カンマまたは指定した区切り文字で連結した文字列を返します。
  これは {{jsxref("Array.prototype.join()")}} に似ています ([Firefox bug 2047995](https://bugzil.la/2047995))。
- {{jsxref("Iterator.prototype.chunks()")}} および {{jsxref("Iterator.prototype.windows()")}} メソッドをサポートしました。
  これらはどちらも、元のイテレーターからいくつかの要素を配列として作成する、反復可能な [イテレーターヘルパーオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator#イテレーターヘルパーオブジェクト) を返します。
  これらのメソッドの違いは、`chunks()` ヘルパーは要素を元のイテレーターから連続する配列のチャンクに分割するのに対して、`windows()` ヘルパーは元のイテレーターのスライディングウィンドウである配列を返します (それぞれの反復処理で、1 要素分前方へスライドした配列を作成します。すなわち、前の反復処理で取得した最初の要素を削除して、元のイテレーターから新しい要素を 1 つ取得します) ([Firefox bug 2047997](https://bugzil.la/2047997))。

### API

#### Media、WebRTC、Web Audio

- トランスポートの現在の {{domxref("RTCIceCandidatePair")}} を取得するための {{domxref("RTCIceTransport.getSelectedCandidatePair()")}} メソッドおよび {{domxref("RTCIceTransport/selectedcandidatepairchange_event", "selectedcandidatepairchange")}} イベントをサポートしました ([Firefox bug 2019332](https://bugzil.la/2019332))。
- DTLS や フィンガープリンティングのエラーを報告するため、{{domxref("RTCDtlsTransport")}} で {{domxref("RTCDtlsTransport/error_event", "error")}} イベントが発生するようになりました ([Firefox bug 1805447](https://bugzil.la/1805447))。
- {{domxref("RTCRtpReceiver.getParameters()")}} および {{domxref("RTCRtpSender.getParameters()")}} が返すオブジェクトに、`rtcp` プロパティが含まれるようになりました。また、{{domxref("RTCRtpSender.setParameters()")}} に渡すオブジェクトにこのプロパティを設定できます。
  このプロパティは、接続のための {{glossary("RTCP")}} 設定パラメーターを提供します ([Firefox bug 1584318](https://bugzil.la/1584318))。
- Firefox が、{{domxref("RTCCertificateStats")}} ディクショナリーで定義されたすべての WebRTC `certificate` 統計情報、および {{domxref("RTCTransportStats")}} ディクショナリーで定義された以下の追加の WebRTC `transport` 統計情報を報告するようになりました: {{domxref("RTCTransportStats/remoteCertificateId", "remoteCertificateId")}}、{{domxref("RTCTransportStats/localCertificateId", "localCertificateId")}}、{{domxref("RTCTransportStats/packetsSent", "packetsSent")}}、{{domxref("RTCTransportStats/packetsReceived", "packetsReceived")}}、{{domxref("RTCTransportStats/bytesSent", "bytesSent")}}、{{domxref("RTCTransportStats/bytesReceived", "bytesReceived")}} ([Firefox bug 2019349](https://bugzil.la/2019349) および [Firefox bug 2019333](https://bugzil.la/2019333))。

### WebDriver への適合 (WebDriver BiDi, Marionette)

#### 一般

- レイアウトビューポートを考慮することにより、非同期のウィジェットホイールスクロールイベントの `deltaX` および `deltaY` プロパティの処理を改善しました ([Firefox bug 1971979](https://bugzil.la/1971979))。
- `history.replaceState` を呼び出したときやエラーページへ移動したとき (例: X-Frame-Options によってブロックされた) に、サブフレームのナビゲーションが早く解決される不具合を修正しました ([Firefox bug 2051908](https://bugzil.la/2051908))。

#### WebDriver BiDi

- 同じダウンロードに属するイベントを特定しやすくするため、`browsingContext.downloadWillBegin` および `browsingContext.downloadEnd` イベントにダウンロード ID を追加しました ([Firefox bug 2040936](https://bugzil.la/2040936))。
- `session.new` コマンドで新しいセッションを作成するときに、ファイルピッカーの `unhandledPromptBehavior` プロパティで `ignore` 状態をサポートしました。この状態によって、ファイルピッカーはプロトコルによって自動的に処理されなくなります ([Firefox bug 1999693](https://bugzil.la/1999693))。
- いくつかの WebDriver BiDi イベントおよびコマンドのペイロードに、`userContext` フィールド (別名: Firefox コンテナー) を追加しました。これにより、ユーザーコンテキスト ID に基づいてイベントをサブスクライブしているクライアントが受信データをフィルタリングすることが容易になります ([Firefox bug 2018611](https://bugzil.la/2018611))。
- `browsingContext.startScreencast` および `browsingContext.stopScreencast` コマンドを実装しました。これらはブラウジングコンテキストを録画して、その結果を動画ファイルとして保存します ([Firefox bug 2042671](https://bugzil.la/2042671))。
- ワーカーで fetch および `WebSocket` リクエストの `Accept-Language` ヘッダーを上書きできるように、`emulation.setLocaleOverride` コマンドを更新しました ([Firefox bug 2052932](https://bugzil.la/2052932))。
- プロセス間ナビゲーションの後に、ワーカーに対して `script.realmDestroyed` イベントが欠落する不具合を修正しました ([Firefox bug 2018154](https://bugzil.la/2018154))。

## アドオン開発者向けの変更点一覧

- [`sandbox`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sandbox) マニフェストキーをサポートしました。これは拡張機能が、拡張機能の API へ直接アクセスすることなく、opaque オリジンで読み込むページを指定できます。サンドボックス化されたページは、拡張機能の [Content Security Policy](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) でブロックされる `eval()` や同様の構文を使用できます ([Firefox bug 1685123](https://bugzil.la/1685123))。

## 実験的なウェブ機能

以下の機能は Firefox 154 で導入しましたが、デフォルトで無効です。
これらを実験するには、`about:config` ページで適切な設定項目を検索して `true` に設定してください。
[実験的機能](/ja/docs/Mozilla/Firefox/Experimental_features) のページで、さらに多くの機能を確認できます。

- **`line-clamp` によるコンテンツの切り詰め**: `layout.css.line-clamp.enabled`

  {{cssxref("line-clamp")}} CSS プロパティが `-webkit-` ベンダー接頭辞なしで動作するようになりました。ただし、現在は `no-ellipsis` および `<string>` 値をサポートしていません ([Firefox bug 2042986](https://bugzil.la/2042986))。

- **`text-decoration-inset` のパーセンテージ値**: `layout.css.text-decoration-inset-percentage.enabled`

  {{cssxref("text-decoration-inset")}} CSS プロパティの値としてパーセンテージをサポートしました。パーセンテージ値は、インセットのサイズを {{cssxref("font-size")}} のパーセンテージとして指定します ([Firefox bug 2044602](https://bugzil.la/2044602))。

- **`progress()` に基づく値の計算**: `layout.css.progress-function.enabled`

  {{cssxref("progress")}} CSS 関数をサポートしました。これによりユーザーは、最小値と最大値の間の値 (または進捗) に基づいて {{cssxref("number")}} を計算できます ([Firefox bug 2047015](https://bugzil.la/2047015))。

- **CSS 型付きオブジェクトモデル Level 1** (Nightly): `layout.css.typed-om.enabled`

  [CSS 型付きオブジェクトモデル API](/ja/docs/Web/API/CSS_Typed_OM_API) (CSS 型付きオブジェクトモデル Level 1 仕様として定義) を実装しました。
  これは CSS の値を文字列ではなく型付き JavaScript オブジェクトとして公開することにより、CSS プロパティの操作を簡素化します ([Firefox bug 2051047](https://bugzil.la/2051047))。
