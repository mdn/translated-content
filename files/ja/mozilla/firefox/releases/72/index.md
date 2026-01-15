---
title: Firefox 72 for Developers
slug: Mozilla/Firefox/Releases/72
l10n:
  sourceCommit: 45fdc5d8cce894088d4c270b8f160841ecb11a2a
---

Firefox 72 は、米国時間 2020 年 1 月 7 日にリリースされました。このページでは、開発者に影響する Firefox 72 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

[コンソール](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html):

- [インタラクティブ JS インタープリターのマルチラインモード](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#multi-line-mode) で、キーボードショートカット `Ctrl` + `O` および `Ctrl` + `S` を使用してファイルを開いたり保存したりできるようになりました ([Firefox バグ 1592308](https://bugzil.la/1592308))。
- [非同期メッセージを視覚的に分ける設定](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#async-stack-frames) が可能になりました ([Firefox バグ 1592969](https://bugzil.la/1592969))。

[JavaScript デバッガー](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html):

- スコープパネルでオブジェクトを右クリックまたは `Ctrl` を押しながらクリックして*プロパティの設定* または _プロパティの取得_ を選択すると、[ウォッチポイント](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_watchpoints/index.html#set-a-watchpoint)を設定できます ([Firefox バグ 1574192](https://bugzil.la/1574192))。

[ネットワークモニター](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html):

- タイミングタブで、それぞれのリソースの [Queued、Started、Downloaded](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#queued-started-downloaded) 時間を表示するようになりました ([Firefox バグ 1580431](https://bugzil.la/1580431))。

[インスペクター](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html):

- [`prefers-color-scheme`](/ja/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) メディア特性のさまざまな値の [シミュレーターを有効化する設定](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#view-media-rules-for-color-scheme-preference) が可能になりました ([Firefox バグ 1550804](https://bugzil.la/1550804))。

#### 廃止

- _スクラッチパッド_ を削除しました ([Firefox バグ 1519103](https://bugzil.la/1519103))。

### HTML

_変更なし。_

### CSS

- CSS Shadow Parts が有効になりました。これは [`part` 属性](/ja/docs/Web/HTML/Reference/Global_attributes/part) や [`::part` 擬似要素](/ja/docs/Web/CSS/Reference/Selectors/::part) が含まれており、スタイル設定のためにシャドウホストが自身のシャドウツリーから選択した要素を選択的に出力ページへ公開できます ([Firefox バグ 1559074](https://bugzil.la/1559074))。
- [CSS モーションパス](/ja/docs/Web/CSS/Guides/Motion_path) を実装しました ([Firefox バグ 1582554](https://bugzil.la/1582554) および [実装目的](https://groups.google.com/forum/#!topic/mozilla.dev.platform/nOOIRsuxvuc) をご覧ください)。以下のプロパティが含まれます。
  - {{cssxref("offset")}}
  - {{cssxref("offset-path")}}
  - {{cssxref("offset-anchor")}}
  - {{cssxref("offset-distance")}}
  - {{cssxref("offset-rotate")}}

- 個々の座標変換関連プロパティ ({{cssxref("scale")}}、{{cssxref("rotate")}}、{{cssxref("translate")}}) を既定で有効にしました ([Firefox バグ 1424900](https://bugzil.la/1424900))。

#### 廃止

### SVG

_変更なし。_

### JavaScript

- [ヌル値合体演算子](/ja/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)を実装しました ([Firefox バグ 1566141](https://bugzil.la/1566141))。

### API

#### 新規 API

- {{domxref("FormDataEvent")}} および [イベントに基づくフォームへの関与](/ja/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects#formdata_イベントの使用)を既定で有効にしました ([Firefox バグ 1594708](https://bugzil.la/1594708))。
- {{domxref("Window.crossOriginIsolated")}} プロパティおよび {{domxref("WorkerGlobalScope.crossOriginIsolated")}} プロパティに対応しました ([Firefox バグ 1591892](https://bugzil.la/1591892))。

#### DOM

- 最近の仕様変更に応じて、[位置情報 API](/ja/docs/Web/API/Geolocation_API) でいくつかのインターフェイス名を更新しました ([Firefox バグ 1575144](https://bugzil.la/1575144)):
  - `Coordinates` を {{domxref("GeolocationCoordinates")}} に変更しました。
  - `Position` を {{domxref("GeolocationPosition")}} に変更しました。
  - `PositionError` を {{domxref("GeolocationPositionError")}} に変更しました。

- いくつかのプロパティを、標準の文字列化子を使用するように更新しました ([Firefox バグ 824857](https://bugzil.la/824857))。
  - {{domxref("DOMTokenList.value")}}
  - {{domxref("HTMLAnchorElement.href")}}
  - {{domxref("Location.href")}}
  - {{domxref("MediaList.mediaText")}}
  - {{domxref("URL.href")}}
  - {{domxref("WorkerLocation.href")}}

#### DOM イベント

- {{domxref("Notification.requestPermission_static", "Notification.requestPermission()")}} および {{domxref("PushManager.subscribe()")}} が、[`click`](/ja/docs/Web/API/Element/click_event) イベントのようなユーザー操作に応じてのみ呼び出せるようになりました ([Firefox バグ 1593644](https://bugzil.la/1593644))。

#### メディア、Web Audio、WebRTC

- {{domxref("MediaDevices.getDisplayMedia()")}} メソッドが、[`click`](/ja/docs/Web/API/Element/click_event) イベントのようなユーザー操作に応じてのみ呼び出せるようになりました ([Firefox バグ 1580944](https://bugzil.la/1580944))。
- `RTCRtpContributingSource` 辞書が `rtpTimestamp` プロパティを持てるようになりました。これはパケットのメディアが生成またはサンプリングされた時点の source-generated time です ([Firefox バグ 1583867](https://bugzil.la/1583867))。

#### 廃止

- 非標準の `window.mozPaintCount` プロパティを削除しました ([Firefox バグ 1591968](https://bugzil.la/1591968))。
- {{domxref("BatteryManager")}} インターフェイスはウェブコンテンツで使用できなくなりました ([Firefox バグ 1441976](https://bugzil.la/1441976))。
- {{domxref("Navigator.vibrate()")}} は別オリジンの {{htmlelement("iframe")}} でサポートされなくなりました ([Firefox バグ 1591113](https://bugzil.la/1591113))。
- WebRTC は `simulcast` で `rid=` および `pt=` の引数に対応しなくなりました。"`a=simulcast: send rid=7 recv rid=8`" のような行の新しい構文は "`a=simulcast: send 7 recv 8`" です。新しい構文は Firefox 68 から対応しており、古い構文の対応を廃止する時期になりました ([Firefox バグ 1470568](https://bugzil.la/1470568))。

### セキュリティ

- {{HTTPHeader("X-Content-Type-Options")}} を使用した MIME スニッフィングのオプトアウトを、{{HTTPHeader("Content-type")}} が提供されていれば、最上位の文書でも適用するようになりました。HTML ウェブページを `text/html` 以外の MIME タイプで提供するとき、表示する代わりにダウンロードさせることができます。両方のヘッダーを正しく設定するようにしてください ([Firefox バグ 1591932](https://bugzil.la/1591932))。
- 採択率の低さと相互運用性の問題のため、HTTP Public Key Pinning (HPKP) の対応を廃止しました。`Public-Key-Pins` および `Public-Key-Pins-Report-Only` ヘッダーは黙って無視されるようになりました ([Firefox バグ 1412438](https://bugzil.la/1412438))。

### プラグイン

_変更なし。_

### WebDriver conformance (Marionette)

- `WebDriver:FindElement` および `WebDriver:FindElements` コマンドから、`Anon` および `AnonAttribute` ストラテジーを削除しました ([Firefox バグ 1587627](https://bugzil.la/1587627))。
- `Webdriver:TakeScreenshot` が、キャプチャーされた領域が canvas の幅、高さ、サイズの最大上限値を超えても失敗しないようになりました ([Firefox バグ 1590064](https://bugzil.la/1590064))。

## アドオン開発者向けの変更点

### API の変更点

- [`browserSettings.ftpProtocolEnabled`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/ftpProtocolEnabled) プロパティを実装しました ([Firefox バグ 1592687](https://bugzil.la/1592687))。
- [`BrowserSetting.onChange`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/onChange) イベントを実装しました ([Firefox バグ 1410412](https://bugzil.la/1410412))。
- [`captivePortal.canonicalURL`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/captivePortal/canonicalURL) プロパティを実装しました ([Firefox バグ 1592932](https://bugzil.la/1592932))。
- [`browserAction.onClicked`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/browserAction/onClicked) および [`pageAction.onClicked`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/onClicked) イベントのコールバック関数が、キーボードモディファイアとともに押されたマウスボタンを示すプロパティを持つオブジェクトを含む、`OnClickData` プロパティを含むようになりました ([Firefox バグ 1405031](https://bugzil.la/1405031))。これは、付加的な種類のマウスクリックのサポートを可能にします。
- {{WebExtAPIRef("browserSettings.tlsVersionRestrictionConfig")}} プロパティが実装され、ブラウザーの対応している TLS の最高バージョンと最低バージョンを読み取ることができるようになりました ([Firefox バグ 1593635](https://bugzil.la/1593635))。

### マニフェストの変更点

_変更なし。_

## 関連情報

- Hacks ブログのリリース記事: [Firefox 72 — our first song of 2020](https://hacks.mozilla.org/2020/01/firefox-72-our-first-song-of-2020/)

## 過去のバージョン

{{Firefox_for_developers}}
