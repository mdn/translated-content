---
title: Firefox 59 for developers
slug: Mozilla/Firefox/Releases/59
---

Firefox 59 は、米国時間 2018 年 3 月 13 日にリリースされました。このページでは、開発者に影響する Firefox 59 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- [ネットワークモニター](/ja/docs/Tools/Network_Monitor) の応答タブで、応答が HTML である場合に [描画された HTML のプレビュー](/ja/docs/Tools/Network_Monitor#HTML_preview) を表示するようになりました ({{bug(1353319)}})。
- ストレージインスペクターで表示する Cookie の情報 ([Cookie](/ja/docs/Tools/Storage_Inspector#Cookies) をご覧ください) で、それぞれの Cookie が same-site 状態であるかを示す _sameSite_ 列を追加しました ({{bug(1298370)}})。
- [定規](/ja/docs/Tools/Rulers) ツールで、ビューポートの現在の寸法を示す情報を表示するようになりました ({{bug(1402633)}})。
- [レスポンシブデザインモード](/ja/docs/Tools/Responsive_Design_Mode) で、カーソルキーを使用して画面の寸法を設定できるようにになりました ({{bug(1421663)}})。詳しくは [画面のサイズを設定する](/ja/docs/Tools/Responsive_Design_Mode#Setting_screen_size) をご覧ください。
- [ネットワークモニター](/ja/docs/Tools/Network_Monitor) の _ヘッダー_ タブに表示する*生ヘッダー*で、応答のステータスコードを表示するようになりました ({{bug(1419401)}})。

### HTML

- {{HTMLElement("textarea")}} 要素の {{htmlattrxref("autocomplete", "textarea")}} 属性を実装しました。要素でフォームのオートフィル機能を有効化または無効化できます。

### CSS

- {{cssxref("overscroll-behavior")}} プロパティと、このプロパティに関係するロングハンドプロパティである {{cssxref("overscroll-behavior-x")}} および {{cssxref("overscroll-behavior-y")}} を実装しました ({{bug(951793)}})。また、すべてのリリースで、デフォルトで有効化しました ({{bug(1428879)}})。
- "unusual elements" (置換要素のように、CSS のボックスの概念に従って描画されない要素) で {{cssxref("display")}} の値に `contents` を指定したときの動作を、仕様書に従って更新しました ({{bug(1427292)}})。仕様で定められた正確な動作については、[Appendix B: Effects of display: contents on Unusual Elements](https://drafts.csswg.org/css-display/#unbox) をご覧ください。
- {{cssxref("position")}} の `sticky` を、適切な [HTML テーブル](/ja/docs/Learn/HTML/Tables) の部品 (例えば {{htmlelement("th")}} 要素) でサポートしました ({{bug(975644)}})。
- {{cssxref("&lt;color&gt;")}} 値 (`rgb()`, `rgba()`, `hsl()`, `hsla()`) で {{cssxref("calc()")}} をサポートしました ({{bug(984021)}})。
- [メディアクエリー](/ja/docs/Web/CSS/Media_Queries) の値で {{cssxref("calc()")}} をサポートしました ({{bug(1396057)}})。
- {{cssxref("@document")}} @-規則の使用を、ユーザースタイルシートと UA スタイルシートに限定しました ({{bug(1035091)}})。
- {{cssxref("font-optical-sizing")}} プロパティを実装しました ({{bug(1435692)}})。

### SVG

_変更なし。_

### JavaScript

_変更なし。_

### API

#### 新規 API

- {{domxref("PointerEvent","PointerEvents")}} を、デスクトップ版 Firefox で有効化しました ({{bug(1411467)}})。

#### DOM

- {{domxref("EventTarget.EventTarget()","EventTarget()")}} コンストラクターを実装しました ({{bug(1379688)}})。
- {{domxref("Response.Response()","Response()")}} コンストラクターが、仕様書に従って `body` 引数で `null` 値を受け入れるようになりました ({{bug(1303025)}})。

#### DOM イベント

- {{domxref("Event.composedPath()")}} メソッドを実装しました ({{bug(1412775)}})。

#### Service workers

- 別のブラウザープロセスで、Service worker Clients API を発見および通信できるようになりました ({{bug(1293277)}})。
- 入れ子の about:blank や about:srcdoc のインラインフレームが、親で制御している service worker を継承するようになりました。これは {{bug(1293277)}} および {{bug(1426979)}} で修正しました。
- service worker が {{domxref("Response")}} を {{domxref("FetchEvent.respondWith()")}} に提供するときに {{domxref("Response.url")}} の値が、インターセプトされたネットワークに最終的に解決された URL として伝播しないようになりました。以前は、代わりに {{domxref("Request.url","FetchEvent.request.url")}} を使用していました。これは、例えば service worker がスタイルシートや worker スクリプトをインターセプトする場合に提供される `Response.url` が、関連する {{cssxref("@import")}} や {{domxref("WorkerGlobalScope.importScripts()","importScripts()")}} のサブリソースの解決に使用されるということです ({{bug(1222008)}})。
- {{domxref("Request.mode","FetchEvent.request.mode")}} が `"same-origin"` であり、{{domxref("Response.type")}} に `"cors"` を与えた場合に、`FetchEvent.respondWith()` がネットワークエラーを発生させるようになりました ({{bug(1222008)}})。

#### メディアと WebRTC

- {{domxref("MediaStreamTrack")}} の {{domxref("MediaStreamTrack.muted")}} プロパティ、および {{event("mute")}} イベントと {{event("unmute")}} イベント、さらにこれに対応するイベントハンドラーである {{domxref("MediaStreamTrack.onmute", "onmute")}} と {{domxref("MediaStreamTrack.onmute", "onunmute")}} を実装しました。トラックの `muted` 状態は、トラックが今のところメディアデータを提供できないことを示します。

  > **メモ:** トラックの `muted` 状態は、一般的に考えられているトラックのミュートやミュート解除として役に立つものではありません。代わりに {{domxref("MediaStreamTrack.enabled", "enabled")}} プロパティを使用します。`enabled` を `false` に設定すると、トラックは空のフレームだけを出力します。

- Android 版 Firefox 59 で Apple の HTTPS Live Streaming (HLS) を、音声および映像の両方でサポートしました。この非標準プロトコルは、モバイル環境においてモバイルストリーミングのためにこのプロトコルを必要とするサイトの互換性を向上するためにサポートしました。現在、デスクトップ版 Firefox にこのプロトコルを実装する予定はありません。
- それぞれの RTP ストリームのソースの情報を提供するため、{{domxref("RTCRtpReceiver")}} の {{domxref("RTCRtpReceiver.getContributingSources", "getContributingSources()")}} および {{domxref("RTCRtpReceiver.getSynchronizationSources", "getSynchronizationSources()")}} メソッドを実装しました。ただし、公開前に仕様書が変更されましたので、デフォルトで設定項目 `media.peerconnection.rtpsourcesapi.enable` によってこれらを無効化しました ({{bug(1363667)}}, {{bug(1430213)}}, {{bug(1433236)}})。
- Firefox の WebRTC 実装でトランシーバーをサポートしましたので、{{domxref("RTCRtpTransceiver")}} インターフェイスを実装しました。また、`RTCPeerConnection` やほかのインターフェイスを、最新の仕様書に従ってこれらを使用使用するように更新しました。
- {{domxref("RTCPeerConnection.addTransceiver()")}} メソッドを追加しました。さらに、要求に従ってトランシーバーを作成するように、{{domxref("RTCPeerConnection.addTrack", "addTrack()")}} の動作を更新しました。
- Firefox 58 で [WebVTT](/ja/docs/Web/API/WebVTT_API) のリージョンを実装しましたが、デフォルトで無効化していました。これをデフォルトで有効化しました ({{bug(1415805)}})。
- WebVTT ファイルで同じ行にすべての設定を並べる形式ではなく、1 行ごとにひとつの設定を並べる形式の `REGION` 定義ブロックを Firefox でサポートしました ({{bug(1415821)}})。

#### Canvas と WebGL

_変更なし。_

### CSSOM

- {{domxref("CSSNamespaceRule")}} インターフェイスと、`namespaceURL` および `prefix` プロパティを実装しました ({{bug(1326514)}})。

### HTTP

_変更なし。_

### セキュリティ

- `data:` URI へのトップナビゲーションはブロックされます({{bug(1401895)}})。詳しくは [Blocking Top-Level Navigations to data URLs for Firefox 59](https://blog.mozilla.org/security/2017/11/27/blocking-top-level-navigations-data-urls-firefox-59/) をご覧ください。
- {{httpheader("X-Frame-Options")}} ヘッダーの `SAMEORIGIN` ディレクティブが、トップレベルのインラインフレームが同一オリジンであるかだけでなく、すべての祖先も同様であるかを確認するようになりました ({{bug(725490)}})。
- 異なるオリジンから現在のドキュメントに読み込まれる画像リソースが、HTTP 認証ダイアログを表示させることができなくなりました。 ({{bug(1423146)}})。
- ほかのブラウザーに合わせるため、および {{bug(1419658)}} で説明されている潜在的な問題を避けるため、HTTP 認証でユーザー名やパスワードに (`ISO-8859-1` ではなく) `utf-8` エンコーディングを使用するようになりました。
- [HSTS プリロードリスト](https://searchfox.org/mozilla-central/source/security/manager/ssl/nsSTSPreloadList.inc)は Google によって毎日更新されています。いつもの更新であれば注意する必要はないのですが、このリリースから新しい TLD が追加されました。このうち具体的に注目したいのが `.app` と `.dev` です。これらの新しい TLD を知らず、ローカルの開発環境に使用した場合、予期しない挙動となるかもしれません。なお、ローカルでの開発には[予約済み TLD](https://tools.ietf.org/html/rfc2606) を使うべきとされています。

### プラグイン

_変更なし。_

### その他

_変更なし。_

## ウェブプラットフォームから廃止

### HTML

- {{htmlelement("script")}} 要素の {{htmlattrxref("type","script")}} 属性の非標準パラメーターである `version` (例えば `type="application/javascript;version=1.8"`) を削除しました ({{bug(1428745)}})。

### CSS

- 独自仕様の `mozmm` {{cssxref("&lt;length&gt;")}} 単位を削除しました ({{bug(1416564)}})。
- 独自仕様の {{cssxref("-moz-border-top-colors")}}、{{cssxref("-moz-border-right-colors")}}、{{cssxref("-moz-border-bottom-colors")}}、{{cssxref("-moz-border-left-colors")}} プロパティを、chrome コードのみ使用するように制限しました ({{bug(1417200)}})。

### JavaScript

- 非標準の [条件付き catch 節](/ja/docs/Web/JavaScript/Reference/Statements/try...catch#Conditional_catch_clauses) を削除しました ({{bug(1228841)}})。

### API

- 非標準の `Event.getPreventDefault()` メソッドを削除しました。{{domxref("Event")}} で {{domxref("Event.preventDefault", "preventDefault()")}} が呼び出されたかを判断するには、代わりに {{domxref("Event.defaultPrevented")}} プロパティを使用します。
- 標準の [Notifications API](/ja/docs/Web/API/Notifications_API) が好ましいため、独自仕様の [`Navigator.mozNotification`](/ja/docs/Archive/API/Navigator/mozNotification) プロパティと `DesktopNotification` インターフェイスを削除しました ({{bug(952453)}})。
- 独自仕様の `window.external.addSearchEngine()` メソッドを削除しました ({{bug("862147")}})。詳しくは {{domxref("Window.sidebar")}} もご覧ください。
- Firefox 限定の非標準プロパティである {{domxref("HTMLMediaElement")}} property `mozAutoplayEnabled` を削除しました。

### SVG

- SMIL の `accessKey` 機能のサポートを廃止しました ({{bug(1423098)}})。

### その他

- 非標準の `pcast:` および `feed:` プロトコルのサポートを廃止しました ({{bug(1420622)}})。

## アドオン開発者と Mozilla 開発者向けの変更点

### WebExtensions

- [theme](/ja/Add-ons/WebExtensions/manifest.json/theme) の更新:

  - 新しいプロパティ: `colors.background_tab_text`, `colors.toolbar_field_border`
  - すべての色関連プロパティで、Chrome 形式の配列と CSS の色の値の両方をサポートしました。

- 新しい [ブラウザー設定](/ja/Add-ons/WebExtensions/API/browserSettings):

  - [`contextMenuShowEvent`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/contextMenuShowEvent)
  - [`openBookmarksInNewTabs`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/openBookmarksInNewTabs)
  - [`openSearchResultsInNewTabs`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/openSearchResultsInNewTabs)
  - [`proxyConfig`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/proxyConfig)

- 新しい [`tabs`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs) の API:

  - [`tabs.captureTab()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/captureTab)
  - [`tabs.hide()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/hide)
  - [`tabs.show()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/show)

- [`contextMenus`](/ja/docs/Archive/Add-ons/Legacy_Firefox_for_Android/API/NativeWindow/contextmenus) API で ["bookmark" コンテキスト](/ja/Add-ons/WebExtensions/API/menus/ContextType) をサポートしました。
- 新しい [`contentScripts`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/contentScripts) API で、ランタイムがコンテンツスクリプトを登録できます。
- 新しい [`pageAction`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/pageAction), [`browserAction`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/browserAction), [`SidebarAction`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction) の API:

  - `browserAction/pageAction/sidebarAction.set*` 関数で、変更を元に戻すための `null` をサポートしました。
  - [`browserAction.isEnabled()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/browserAction/isEnabled), [`pageAction.isShown()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/isShown) , [`sidebarAction.isOpen()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/isOpen) 関数。

- デフォルトでページアクションを表示するための、[`page_action`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) の新しいオプション。
- `protocol_handers` の新しい値:

  - Secure Scuttlebutt 通信のための "ssb"
  - DATproject のための "dat"
  - IPFS のための "ipfs", "ipns", "dweb"

- [`privacy.websites`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/privacy/websites) の新しい設定 "cookieConfig"。
- [`cookies`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/cookies) API で [ファーストパーティ分離](/ja/Add-ons/WebExtensions/API/cookies#First-party_isolation) をサポート。
- [`webRequest`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/webRequest) の新しいオプションである `upgradeToSecure`。

## 関連情報

- [Firefox — Notes (59.0)](https://www.mozilla.org/firefox/59.0/releasenotes/)

## 過去のバージョン

{{Firefox_for_developers(58)}}
