---
title: Firefox 110 for developers
slug: Mozilla/Firefox/Releases/110
l10n: 
  sourceCommit: ed423f006c44e07db7693434b50aea2c373c579f
---

{{FirefoxSidebar}}

このページでは、開発者に影響する Firefox 110 の変更点をまとめています。Firefox 110 は、米国時間 2023 年 2 月 14 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### HTML

変更なし。

### CSS

- コンテナークエリーと、コンテナークエリーの長さの単位をデフォルトで有効にしました。
  これらのクエリーや関連する長さの単位について、詳しくは [CSS Container Queries](/ja/docs/Web/CSS/CSS_Container_Queries#container_query_length_units) の文書をご覧ください ({{bug(1809720)}})。
- [color-gamut メディアクエリー](/ja/docs/Web/CSS/@media/color-gamut) をサポートしました ({{bug(1422237)}})。
- Windows および Linux で、`type="color"` を持つ `<input>` 要素で [`list`](/ja/docs/Web/HTML/Element/datalist#color_type) 属性をサポートしました ({{bug(960984)}})。

### JavaScript

- [`Worker.postMessage()`](/ja/docs/Web/API/Worker/postMessage) および [`structuredClone()`](/ja/docs/Web/API/structuredClone) を使用したとき、[ネイティブなエラーの型](/ja/docs/Web/JavaScript/Reference/Global_Objects/Error#error_types) をシリアライズした結果に worker の [`stack`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Error/stack) プロパティも含まれるようになりました。
  この機能追加によりメインスレッドと worker の両方で、[構造化複製アルゴリズム](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) を使用するすべてのメソッドでネイティブエラーのスタックの複製が機能するようになりました (詳しくは {{bug(1774866)}} をご覧ください)。

### API

- [Permission API](/ja/docs/Web/API/Permissions_API) の `midi` パーミッションをサポートしました。
  これにより、[`navigator.permissions.query()`](/ja/docs/Web/API/Permissions/query) を使用して [Web MIDI API](/ja/docs/Web/API/Web_MIDI_API) の使用許可の状態を問い合わせできます ({{bug(1772166)}})。

- {{domxref("ReadableStream")}} で、`for await...of` 構文を使用する [ストリーム内のチャンクの非同期反復処理](/ja/docs/Web/API/ReadableStream#async_iteration) をサポートしました ({{bug(1734244)}})。

- WebRTC で、ピア接続にトランシーバーを追加する際に使用可能なエンコーディングのセットを送信すること、および送信元に紐づいたアクティブなエンコーディングを取得することをサポートしました。
  特に {{domxref("RTCPeerConnection.addTransceiver()")}} で、[`init`](/ja/docs/Web/API/RTCPeerConnection/addTransceiver#init) パラメーターオブジェクトで [`sendEncodings`](/ja/docs/Web/API/RTCPeerConnection/addTransceiver#sendencodings) オプションを使用すること、および送信データでエンコーディングが使用されているかを確認するために使用できる [`RTCRtpEncodingParameters.active`](/ja/docs/Web/API/RTCRtpEncodingParameters#active) をサポートしました (詳しくは {{bug(1676855)}} をご覧ください)。

- WebRTC の {{domxref("RTCRtpSender.getParameters()")}}、{{domxref("RTCRtpSender.setParameters()")}}、{{domxref("RTCRtpReceiver.getParameters()")}} メソッドが仕様書に準拠するようになりました ({{bug(1401592)}})。

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- `network.beforeRequestSent` ({{bug(1790368)}})、`network.responseStarted` ({{bug(1790370)}})、`network.responseCompleted` ({{bug(1790372)}}) イベントをサポートしました。

- ページ全体のスクリーンショットを取得する `browsingContext.captureScreenshot` コマンドをサポートしました ({{bug(1800086)}})。

- 汎用プラットフォームオブジェクト ({{bug(1792524)}})、`NodeList` 型および `HTMLCollection` 型プラットフォームオブジェクト ({{bug(1802284)}}) のシリアライズとデシリアライズをサポートしました。

- `browsingContext.domContentLoaded` および `browsingContext.load` イベントに `timestamp` フィールドを追加しました ({{bug(1790378)}})。

- Added a `type` field to the response for `script.evaluate` および `script.callFunction` の応答に、`success` または `exception` の結果を示す `type` フィールドを追加しました ({{bug(1803599)}})。

#### Marionette

- 最近の WebDriver classic の変更に従って、既知のノード (要素やシャドウルートの参照) のキャッシュを親プロセスからウェブコンテンツプロセスへ移動しました ({{bug(1692468)}})。

- WebDriver classic 仕様に準拠させるため、JSON のシリアライズおよびデシリアライズのアルゴリズムを改良しました ({{bug(1794078)}})。

## アドオン開発者向けの変更点一覧

- `"webRequestFilterResponse"`[API 権限](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) を追加しました。この権限は、{{WebExtAPIRef("webRequest.filterResponseData")}} へのアクセスを提供します。この権限は、実行時に要求する権限として提供できます。この権限について、詳しくは {{WebExtAPIRef("webRequest.filterResponseData")}} をご覧ください ({{bug(1809235)}})。
- {{WebExtAPIRef("tabs.ZoomSettings")}} の `defaultZoomFactor` プロパティが、デフォルトのズーム倍率の設定値を返すようになりました ({{bug(1772166)}})。

## 過去のバージョン

{{Firefox_for_developers(109)}}
