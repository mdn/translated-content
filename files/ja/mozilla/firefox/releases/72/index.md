---
title: Firefox 72 for Developers
slug: Mozilla/Firefox/Releases/72
---

{{FirefoxSidebar}}

Firefox 72 は、米国時間 2020 年 1 月 7 日にリリースされました。このページでは、開発者に影響する Firefox 72 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

[コンソール](/ja/docs/Tools/Web_Console):

- [インタラクティブ JS インタープリターのマルチラインモード](/ja/docs/Tools/Web_Console/The_command_line_interpreter#Multi-line_mode) で、キーボードショートカット&#x20;

  <kbd>Ctrl</kbd>

  &#x20;\+&#x20;

  <kbd>O</kbd>

  &#x20;および&#x20;

  <kbd>Ctrl</kbd>

  &#x20;\+&#x20;

  <kbd>S</kbd>

  &#x20;を使用してファイルを開いたり保存したりできるようになりました ({{bug(1592308)}})。

- [非同期メッセージを視覚的に分ける設定](/ja/docs/Tools/Web_Console/Console_messages#Async_stack_frames) が可能になりました ({{bug(1592969)}})。

[JavaScript デバッガー](/ja/docs/Tools/Debugger):

- スコープパネルでオブジェクトを右クリックまたは&#x20;

  <kbd>Ctrl</kbd>

  &#x20;を押しながらクリックして*プロパティの設定* または _プロパティの取得_ を選択すると、[ウォッチポイント](/ja/docs/Tools/Debugger/How_to/Use_watchpoints#Set_a_watchpoint) を設定できます ({{bug(1574192)}})。

[ネットワークモニター](/ja/docs/Tools/Network_Monitor):

- タイミングタブで、それぞれのリソースの [Queued、Started、Downloaded](/ja/docs/Tools/Network_Monitor/request_details#Queued_Started_Downloaded) 時間を表示するようになりました ({{bug(1580431)}})。

[インスペクター](/ja/docs/Tools/Page_Inspector):

- [`prefers-color-scheme`](/ja/docs/Web/CSS/@media/prefers-color-scheme) メディア特性のさまざまな値の [シミュレーターを有効化する設定](/ja/docs/Tools/Page_Inspector/How_to/Examine_and_edit_CSS#View_media_rules_for_color-scheme-preference) が可能になりました ({{bug(1550804)}})。

#### 廃止

- [スクラッチパッド](/ja/docs/Tools/Scratchpad) を削除しました ({{bug(1519103)}})。

### HTML

_変更なし。_

### CSS

- CSS Shadow Parts が有効になりました。これは [`part` 属性](/ja/docs/Web/HTML/Global_attributes/part) や [`::part` 疑似要素](/ja/docs/Web/CSS/::part) が含まれており、スタイル設定のためにシャドーホストが自身のシャドーツリーから選択した要素を選択的に出力ページへ公開できます ({{bug(1559074)}})。
- [CSS Motion Path](/ja/docs/Web/CSS/CSS_Motion_Path) を実装しました ({{bug(1582554)}} および [実装目的](https://groups.google.com/forum/#!topic/mozilla.dev.platform/nOOIRsuxvuc) をご覧ください)。以下のプロパティが含まれます:

  - {{cssxref("offset")}}
  - {{cssxref("offset-path")}}
  - {{cssxref("offset-anchor")}}
  - {{cssxref("offset-distance")}}
  - {{cssxref("offset-rotate")}}

- 個々の変形関連プロパティ ({{cssxref("scale")}}、{{cssxref("rotate")}}、{{cssxref("translate")}}) をデフォルトで有効にしました ({{bug(1424900)}})。

#### 廃止

### SVG

_変更なし。_

### JavaScript

- [nullish coalescing operator](/ja/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator) を実装しました ({{bug(1566141)}})。

### API

#### 新規 API

- {{domxref("FormDataEvent")}} および [イベントに基づくフォームへの関与](/ja/docs/Web/API/FormData/Using_FormData_Objects#Using_a_formdata_event) をデフォルトで有効にしました ({{bug(1594708)}})。

#### DOM

- 最近の仕様変更に応じて、[Geolocation API](/ja/docs/Web/API/Geolocation_API) でいくつかのインターフェイス名を更新しました ({{bug(1575144)}}):

  - {{domxref("Coordinates")}} を {{domxref("GeolocationCoordinates")}} に変更しました。
  - {{domxref("Position")}} を {{domxref("GeolocationPosition")}} に変更しました。
  - {{domxref("PositionError")}} を {{domxref("GeolocationPositionError")}} に変更しました。

- いくつかのプロパティを、標準の stringifier を使用するように更新しました ({{bug(824857)}}):

  - {{domxref("DOMTokenList.value")}}
  - {{domxref("HTMLHyperlinkElementUtils.href")}}
  - {{domxref("Location.href")}}
  - {{domxref("MediaList.mediaText")}}
  - {{domxref("URL.href")}}
  - {{domxref("WorkerLocation.href")}}

#### DOM イベント

- {{domxref("Notification.requestPermission()")}} および {{domxref("PushManager.subscribe()")}} が、[`click`](/ja/docs/Web/API/Element/click_event) イベントのようなユーザー操作に応じてのみ呼び出せるようになりました ({{bug(1593644)}})。

#### Service workers

- {{domxref("WindowOrWorkerGlobalScope.crossOriginIsolated")}} プロパティをサポートしました ({{bug(1591892)}})。

#### メディア、Web Audio、WebRTC

- {{domxref("MediaDevices.getDisplayMedia()")}} メソッドが、[`click`](/ja/docs/Web/API/Element/click_event) イベントのようなユーザー操作に応じてのみ呼び出せるようになりました ({{bug(1580944)}})。
- {{domxref("RTCRtpContributingSource")}} ディクショナリーが {{domxref("RTCRtpContributingSource.rtpTimestamp", "rtpTimestamp")}} プロパティを持てるようになりました。これはパケットのメディアが生成またはサンプリングされた時点の source-generated time です ({{bug(1583867)}})。

#### 廃止

- 非標準の {{DOMxRef("window.mozPaintCount")}} プロパティを削除しました ({{bug(1591968)}})。
- {{domxref("BatteryManager")}} インターフェイスは web content で使用できなくなりました ({{bug(1441976)}})。
- {{domxref("Navigator.vibrate()")}} はクロスオリジンの {{htmlelement("iframe")}} でサポートされなくなりました ({{bug(1591113)}})。
- WebRTC は `simulcast` で `rid=` および `pt=` のパラメーターをサポートしなくなりました。"`a=simulcast: send rid=7 recv rid=8`" のような行の新しい構文は "`a=simulcast: send 7 recv 8`" です。新しい構文は Firefox 68 からサポートしており、古い構文のサポートを廃止する時期になりました ({{bug(1470568)}})。

### セキュリティ

- {{HTTPHeader("Content-type")}} が提供されていれば、{{HTTPHeader("X-Content-Type-Options")}} を使用した MIME スニッフィングのオプトアウトをトップレベルドキュメントも適用するようになりました。HTML ウェブページを `text/html` 以外の MIME タイプで提供するとき、表示する代わりにダウンロードさせることができます。両方のヘッダーを正しく設定するようにしてください ({{bug(1591932)}})。
- 採択率の低さと相互運用性の問題のため、[HTTP Public Key Pinning (HPKP)](/ja/docs/Web/HTTP/Public_Key_Pinning) のサポートを廃止しました。{{HTTPHeader("Public-Key-Pins")}} および {{HTTPHeader("Public-Key-Pins-Report-Only")}} ヘッダーは黙って無視されるようになりました ({{bug(1412438)}})。

### プラグイン

_変更なし。_

### WebDriver conformance (Marionette)

- `WebDriver:FindElement` および `WebDriver:FindElements` コマンドから、`Anon` および `AnonAttribute` ストラテジーを削除しました ({{bug(1587627)}})。
- `Webdriver:TakeScreenshot` が、キャプチャーされた領域が canvas の幅、高さ、サイズの最大上限値を超えても失敗しないようになりました ({{bug(1590064)}}).

## アドオン開発者向けの変更点

### API の変更点

- [`browserSettings.ftpProtocolEnabled`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/ftpProtocolEnabled) プロパティを実装しました ({{bug(1592687)}})。
- [`BrowserSetting.onChange`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/onChange) イベントを実装しました ({{bug(1410412)}})。
- [`captivePortal.canonicalURL`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/captivePortal/canonicalURL) プロパティを実装しました ({{bug(1592932)}})。
- [`browserAction.onClicked`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/browserAction/onClicked) および [`pageAction.onClicked`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/onClicked) イベントのコールバック関数が、キーボードモディファイアとともに押されたマウスボタンを示すプロパティを持つオブジェクトを含む、`OnClickData` プロパティを含むようになりました ({{bug(1405031)}})。これは、付加的な種類のマウスクリックのサポートを可能にします。

### マニフェストの変更点

_変更なし。_

## 関連情報

- Hacks ブログのリリース記事: [Firefox 72 — our first song of 2020](https://hacks.mozilla.org/2020/01/firefox-72-our-first-song-of-2020/)

## 過去のバージョン

{{Firefox_for_developers(71)}}
