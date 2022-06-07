---
title: Firefox 101 for developers
slug: Mozilla/Firefox/Releases/101
tags:
  - '101'
  - Firefox
  - Mozilla
  - Release
---
{{FirefoxSidebar}}

このページでは、開発者に影響する Firefox 101 の変更点をまとめています。Firefox 101 は、米国時間 2022 年 5 月 31 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### HTML

変更なし。

### CSS

- ウェブコンテンツに高いコントラスト (`more`) または低いコントラスト(`less`) の設定をユーザーが指定しているかを検知するために使用できる、[`prefers-contrast`](/ja/docs/Web/CSS/@media/prefers-contrast) メディア特性をデフォルトで有効にしました。また、この特性の新しい値 `custom` で、コントラストのために使用する色のセットをユーザーが指定できます ({{bug(1656363)}})。

- 3 種類の新たなビューポートの寸法である小 (`s`)、大 (`l`)、動的 (`d`) を導入しました。これらの新しい寸法で、既存の単位である `vh`、`vw`、`vmax`、`vmin` に加えて新しい [ビューポートのパーセント値による寸法](/ja/docs/Web/CSS/length) が追加されました。新しいビューポートのパーセント値による寸法の単位は `svh`、`lvh`、`dvh`、`svw`、`lvw`、`dvw`、`svmax`、`lvmax`、`dvmax`、`svmin`、`lvmin`、`dvmin` です ({{bug(1610815)}})。また、単位 `vb` および `vi` をデフォルトで有効にしました ({{bug(1610815)}})。

### JavaScript

変更なし。

### API

#### DOM

- `moz` 接頭辞がない [`HTMLMediaElement.preservesPitch`](/ja/docs/Web/API/HTMLMediaElement/preservesPitch) をサポートしました。
  `mozPreservesPitch` は `preservesPitch` の別名になりましたが非推奨であり、将来のリリースで削除する予定です ({{bug(1652950)}})。

- [`HTMLInputElement.showPicker()`](/ja/docs/Web/API/HTMLInputElement/showPicker) をサポートしました。button など他の要素のユーザーインターフェイスで、input 要素向けのピッカーを表示できます ({{bug(1745005)}})。

- [`DOMException`](/ja/docs/Web/API/DOMException) が {{Glossary("シリアライズ可能なオブジェクト")}} になりました。{{domxref("structuredClone()")}} でクローンを作ることや、{{domxref("Worker.postMessage()", "postMessage()")}} を使用して [workers](/ja/docs/Web/API/Worker) との間でコピーすることができます ({{bug(1561357)}})。

- [`RTCRtpEncodingParameters.maxFramerate`](/ja/docs/Web/API/RTCRtpEncodingParameters/maxFramerate) で、({{domxref("RTCPeerConnection.addTransceiver()")}} および {{domxref("RTCRtpSender.setParameters()" )}} で送信時のエンコードで使用する最大フレームレートを設定できるようになりました。
  0 は有効なフレームレートの値ですが、Firefox は "フレームレート制限なし" と解釈しますので注意してください。
  詳しくは {{bug(1611957)}} をご覧ください。

- _Constructable stylesheets_ をサポートしました。[Shadow DOM](/ja/docs/Web/Web_Components/Using_shadow_DOM) とともに使用する、再使用可能なスタイルシートをとても簡単に作成できます。
  この更新には新しいスタイルシートを作成する [`CSSStyleSheet()` コンストラクター](/ja/docs/Web/API/CSSStyleSheet/CSSStyleSheet) や、スタイルシートに CSS 規則を追加するために使用できる {{domxref("CSSStyleSheet.replace()")}} および {{domxref("CSSStyleSheet.replaceSync()")}} メソッドが含まれます。
  詳しくは {{bug(1520690)}} をご覧ください。

#### Media、WebRTC、Web Audio

- [AV1 コーデックのパラメーター](/ja/docs/Web/Media/Formats/codecs_parameter#av1) が、メディアサポートクエリーで適切に解析されるようになりました。
  これは [`MediaCapabilities.decodingInfo()`](/ja/docs/Web/API/MediaCapabilities/decodingInfo)、[`HTMLMediaElement.canPlayType()`](/ja/docs/Web/API/HTMLMediaElement/canPlayType)、[`MediaSource.isTypeSupported()`](/ja/docs/Web/API/MediaSource/isTypeSupported) が、与えられたコーデックパラメーターに基づいた AV1 ソースの再生を正確に報告することを意味します。
  [`MediaCapabilities.decodingInfo()`](/ja/docs/Web/API/MediaCapabilities/decodingInfo) も、AV1 動画の "効率的なデコード" を正確に報告するためにこの情報を使用します。
  詳しくは {{bug(1757861)}} をご覧ください。

### WebDriver conformance (WebDriver BiDi, Marionette)

このリリースの Firefox から、[WebDriver BiDi](https://wiki.mozilla.org/WebDriver/RemoteProtocol/WebDriver_BiDi) プロトコルがデフォルトで有効になりました。WebDriver BiDi セッションは WebDriver クラシック (geckodriver、Marionette) を使用して、新しい WebDriver セッションを生成するときに [`webSocketURL` capability](/ja/docs/Web/WebDriver/Capabilities/webSocketUrl) を `true` に設定することで要求できます。同じ機能に、BiDi クライアントが接続するための WebSocket エンドポイントも含まれています。

以下のコマンドやイベントを使用できます:

- イベントをグローバルにサブスクライブするコマンド ([`session.subscribe`](https://w3c.github.io/webdriver-bidi/#command-session-subscribe)) およびサブスクライブを解除するコマンド ([`session.unsubscribe`](https://w3c.github.io/webdriver-bidi/#command-session-unsubscribe)) の部分的な実装と、WebDriver クラシックを使用しないときに WebDriver BiDi セッションを直接作成する機能 ([`session.new`](https://w3c.github.io/webdriver-bidi/#command-session-new)) を含む、[`session` モジュール](https://w3c.github.io/webdriver-bidi/#module-session) を追加しました。

- 新しいタブやウィンドウを開くコマンド ([`browsingContext.create`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-create)) や閉じるコマンド ([`browsingContext.close`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-close))、開いているブラウジングコンテキストを取得するコマンド ([`browsingContext.getTree`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-getTree))、ブラウジングコンテキスト内でナビゲーションするコマンド ([`browsingContext.navigate`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-navigate)) を含む [`browsingContext` モジュール](https://w3c.github.io/webdriver-bidi/#module-browsingContext) を追加しました。これらは、ブラウジングコンテキストが作成されたときのイベント ([`browsingContext.contextCreated`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-contextCreated)) もサポートします。

- ログのイベント ([`log.entryAdded`](https://w3c.github.io/webdriver-bidi/#event-log-entryAdded)) をサポートする [`log` モジュール](https://w3c.github.io/webdriver-bidi/#module-log) を追加しました。

詳しくは、[すべてのバグの一覧](https://bugzilla.mozilla.org/buglist.cgi?component=Agent&component=Marionette&component=WebDriver%20BiDi&v1=fixed&query_format=advanced&f1=cf_status_firefox101&o1=equals&product=Remote%20Protocol&product=Testing&j_top=OR&list_id=16095473&resolution=FIXED) をご覧ください。

## アドオン開発者向けの変更点一覧

- {{WebExtAPIRef("scripting")}} API を追加しました。スクリプトの実行、CSS の挿入と削除、コンテンツスクリプトの登録管理の機能を提供します ({{bug(1687764)}})。この API は Manifest V3 拡張機能で使用可能であり、スクリプトの実行や CSS の挿入・削除の機能を {{WebExtAPIRef("tabs")}} API から引き継いでいます。
- {{WebExtAPIRef("action")}} API を追加しました。Manifest V3 拡張機能で {{WebExtAPIRef("browserAction")}} API の機能を引き継いでいます。[`"action"`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) マニフェストキーの追加も対応しています。{{WebExtAPIRef("browserAction")}} API および [`"action"`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) マニフェストキーは Manifest V2 拡張機能だけで使用可能であることに注意してください。
- [`"background"`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) マニフェストキーの `"persistent"` を、設定項目による制御で `false` に設定できます。Manifest V2 の設定項目は <code>extensions.eventPages.enabled</code>、Manifest V3 の設定項目は <code>extensions.manifestV3.enabled</code> です。
- [`"host_permissions"`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) マニフェストキーを追加しました。これは Manifest V3 拡張機能で使用できます。
- Manifest V3 拡張機能向けのコンテンツスクリプト実行環境を変更しました:
  - コンテンツスクリプトのオリジン間リクエストが、ホストの許可に依存できなくなりました。コンテンツスクリプトのオリジン間リクエストは、[CORS](/ja/docs/Web/HTTP/CORS) で実行可能です。
  - `content` オブジェクト (`content.fetch`、`content.XMLHttpRequest`、`content.WebSocket` で提供される) が、コンテンツスクリプトの実行環境から削除されました。

## 過去のバージョン

{{Firefox_for_developers(100)}}
