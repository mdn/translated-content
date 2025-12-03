---
title: Firefox 133 for developers
slug: Mozilla/Firefox/Releases/133
l10n:
  sourceCommit: 66fa0acf565a240c390418f588d571d6e650514d
---

このページでは、開発者に影響する Firefox 133 の変更点をまとめています。Firefox 133 は、米国時間 [2024 年 11 月 26 日](https://whattrainisitnow.com/release/?version=133) にリリースされました。

## ウェブ開発者向けの変更点一覧

### HTML

- [`<meta>` の `viewport` タグ](/ja/docs/conflicting/Web/HTML/Reference/Elements/meta/name/viewport) で [`interactive-widgets`](/ja/docs/conflicting/Web/HTML/Reference/Elements/meta/name/viewport#the_effect_of_interactive_ui_widgets) 属性をサポートしました。これはソフトウェアキーボードのような共通 UI ウィジェットがスクリーンに表示されるときの、ビューポートのサイズに影響を与えます ([Firefox bug 1831649](https://bugzil.la/1831649)、[Firefox bug 1920755](https://bugzil.la/1920755))。

### CSS

変更なし。

### JavaScript

- {{jsxref("Uint8Array")}} で、{{glossary("base64")}} や 16 進数表記でエンコードされた文字列とバイト配列の間の変換を容易にするメソッドをサポートしました ([Firefox bug 1917885](https://bugzil.la/1917885)、[Firefox bug 1862220](https://bugzil.la/1862220))。

  新しいメソッドは以下のとおりです:
  - {{jsxref("Uint8Array.fromBase64()")}} および {{jsxref("Uint8Array.fromHex()")}} 静的メソッド。それぞれ、base64 や 16 進数表記でエンコードされた文字列から新しい `Uint8Array` オブジェクトを構築します。
  - {{jsxref("Uint8Array.prototype.setFromBase64()")}}、{{jsxref("Uint8Array.prototype.setFromHex()")}} インスタンスメソッド。base64 や 16 進数表記でエンコードされた文字列からバイト値を、既存の `Uint8Array` オブジェクトに追加します。
  - {{jsxref("Uint8Array.prototype.toBase64()")}}、{{jsxref("Uint8Array.prototype.toHex()")}} インスタンスメソッド。`Uint8Array` オブジェクトにあるデータから、base64 や 16 進数表記でエンコードされた文字列を返します。

### API

- {{domxref('WorkerNavigator.permissions')}} プロパティをサポートしました。メインウィンドウのスレッドと同様に、[ワーカー](/ja/docs/Web/API/Web_Workers_API) でも [Permissions API](/ja/docs/Web/API/Permissions_API) を使用できます ([Firefox bug 1193373](https://bugzil.la/1193373))。
- [server-sent events](/ja/docs/Web/API/Server-sent_events) を処理する {{domxref("EventSource")}} インターフェイスを、[サービスワーカー](/ja/docs/Web/API/Service_Worker_API) でサポートしました ([Firefox bug 1681218](https://bugzil.la/1681218))。
- [WebCodecs API](/ja/docs/Web/API/WebCodecs_API) の {{domxref("ImageDecoder")}}、{{domxref("ImageTrackList")}}、{{domxref("ImageTrack")}} インターフェイスをサポートしました。メインスレッドやワーカースレッドから画像をデコードできます ([Firefox bug 1923755](https://bugzil.la/1923755))。
- {{domxref("HTMLElement")}} インターフェイスの [`beforetoggle`](/ja/docs/Web/API/HTMLElement/beforetoggle_event) および [`toggle`](/ja/docs/Web/API/HTMLElement/toggle_event) イベントが、それぞれ {{HTMLElement("dialog")}} 要素が表示される直前および隠された直後に発生するようになりました。たとえば `beforetoggle` は、ダイアログのアニメーションを制御するクラスを適用や削除したり、ダイアログフォームを表示する前にフォームの状態をリセットしたりするために使用できます。`toggle` イベントはダイアログを開いた状態で変更通知を受けるために使用できます (ほかの方法は {{domxref("MutationObserver")}} が必要です) ([Firefox bug 1876762](https://bugzil.la/1876762))。
- {{domxref('Window.fetch','fetch()')}} グローバルメソッドおよび [`Request()` コンストラクター](/ja/docs/Web/API/Request/Request#options) で [`keepalive`](/ja/docs/Web/API/RequestInit#keepalive) 初期化オプションをサポートしました。また、{{domxref("Request.keepalive")}} プロパティもサポートしました。`keepalive` を `true` に設定すると、リクエストが完了する前にリクエストを開始したページがアンロードされても、ブラウザーが関連するリクエストを中止することを防げます。
  たとえばユーザーが別のページへ移動したりページを閉じたりしても、セッションの最後に分析情報を送信するためにこの機能を利用できるでしょう。

  `keepalive` を伴って `fetch()` を使用することは、同じ目的で {{domxref("Navigator.sendBeacon()")}} を使用するよりも、[`POST`](/ja/docs/Web/HTTP/Reference/Methods/POST) 以外の HTTP メソッドを利用できる、リクエストのプロパティをカスタマイズできる、読み込みの {{jsxref("Promise")}} のフルフィルメントを通してサーバーのレスポンスにアクセスできるといった長所があります。これは [サービスワーカー](/ja/docs/Web/API/Service_Worker_API) でも使用できます ([Firefox bug 1906952](https://bugzil.la/1906952)、[Firefox bug 1923044](https://bugzil.la/1923044)).

- {{htmlelement("audio")}}/{{htmlelement("video")}} 要素に、`waitingforkey` イベントのインラインイベントハンドラーを設定するための [`onwaitingforkey`](/ja/docs/Web/API/HTMLMediaElement/waitingforkey_event) コンテンツ属性を指定可能になりました ([Firefox bug 1925952](https://bugzil.la/1925952))。
- {{domxref("WorkerNavigator.serviceWorker")}} を通してすべてのワーカーコンテキストに {{domxref("ServiceWorkerContainer")}} を公開しました。現在のオリジンに関連する {{domxref("ServiceWorkerRegistration","service worker registrations","","nocode")}} を、ワーカーが調査および管理できます。以前はメインスレッドに限り、{{domxref("Navigator.serviceWorker")}} を通して `ServiceWorkerContainer` を使用可能でした ([Firefox bug 1113522](https://bugzil.la/1113522))。
- 仕様書に合わせて、`PerformanceNavigationTiming` の [`name`](/ja/docs/Web/API/PerformanceNavigationTiming#performanceentry.name) プロパティが [テキストフラグメント](/ja/docs/Web/URI/Reference/Fragment/Text_fragments) を除外するようになりました。この種類の {{domxref("PerformanceResourceTiming")}} オブジェクトは、{{domxref("PerformanceEntry/entryType", "entryType")}} が `navigation` であるエントリーに対して {{domxref("Performance.getEntries()")}} によって返されます ([Firefox bug 1919565](https://bugzil.la/1919565))。

#### 廃止

- {{domxref("ShadowRoot")}} オブジェクトを {{domxref('Document.caretPositionFromPoint()')}} メソッドに渡すための引数 [`options.shadowRoots`](/ja/docs/Web/API/Document/caretPositionFromPoint#shadowroots) を Release 版から削除しました。
  この機能は Nightly 版でテストしており、将来再公開する予定です ([Firefox bug 1914596](https://bugzil.la/1914596))。

### WebDriver への適合 (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- `network.continueRequest` コマンドで引数 `url` をサポートしました。リクエストをほかの URL へ透過的にリダイレクトできます ([Firefox bug 1898158](https://bugzil.la/1898158))。
- 誤った寸法を伴って `browsingContext.print` を使用したときに `InvalidArgumentError` が発生するようになりました ([Firefox bug 1886382](https://bugzil.la/1886382))。
- sandbox レルムで `document.open` の使用を許可するように `script.evaluate` および `script.callFunction` を修正しました ([Firefox bug 1918288](https://bugzil.la/1918288))。
- メインナビゲーションの間に同一ドキュメント内のナビゲーションが発生したときに、`browsingContext.load` イベントに誤ったナビゲーション ID が入る場合がある不具合を修正しました ([Firefox bug 1922327](https://bugzil.la/1922327))。
- ナビゲーションが原因で `UnknownError` としてコマンドが失敗する、別のエッジケースを修正しました ([Firefox bug 1923899](https://bugzil.la/1923899))。

#### Marionette

- Wayland を使用する Linux で、ウィンドウの位置をよりよく制御するように Marionette を更新しました ([Firefox bug 1857571](https://bugzil.la/1857571))。
- 要素をクリックあるいはクリアーしようとしたときに、要素に空の `style` 属性が残る場合がある不具合を修正しました ([Firefox bug 1922709](https://bugzil.la/1922709))。
- `UnexpectedAlertOpen` エラーで送信されるエラーメッセージを、対応する警告の文字列を含むように更新しました ([Firefox bug 1924469](https://bugzil.la/1924469))。

## アドオン開発者向けの変更点一覧

- {{WebExtAPIRef("cookies.get")}} が、[HTTP State Management Mechanism (RFC 6265) の 5.4 The Cookie Header](https://datatracker.ietf.org/doc/html/rfc6265#section-5.4) に従って Cookie を整理するようになりました。これは、Cookie にパスコンポーネントが異なるバリアントがある場合の呼び出し結果に影響があります。以前はもっとも早く作成された Cookie が {{WebExtAPIRef("cookies.get")}}、{{WebExtAPIRef("cookies.remove")}}、{{WebExtAPIRef("cookies.set")}}、{{WebExtAPIRef("cookies.getAll")}} にマッチしていました。変更後は、パスが最長一致の Cookie が返されます ([Firefox bug 1798655](https://bugzil.la/1798655))
- ブラウザーを再起動した後に {{WebExtAPIRef("declarativeNetRequest")}} API がルールの登録を妨げていた不具合を修正しました ([Firefox bug 1921353](https://bugzil.la/1921353))。この不具合は {{WebExtAPIRef("declarativeNetRequest.updateDynamicRules")}} や {{WebExtAPIRef("declarativeNetRequest.updateEnabledRulesets")}} に依存している拡張機能に影響がありました。この修正は Firefox ESR 128.5 および Firefox ESR 115.18 にバックポートされています。

## 実験的なウェブ機能

以下の機能は Firefox 133 で新たに導入しましたが、デフォルトで無効です。これらを実験するには、`about:config` ページで適切な設定項目を検索して `true` に設定してください。[実験的機能](/ja/docs/Mozilla/Firefox/Experimental_features) のページで、さらに多くの機能を確認できます。

- **contenteditable の値 plaintext-only:** `dom.element.contenteditable.plaintext-only.enabled`。

  [`contenteditable`](/ja/docs/Web/HTML/Reference/Global_attributes/contenteditable) グローバル属性の値 `plaintext-only` は、要素が編集可能であるがリッチテキスト形式が無効であり、貼り付けられたテキストの書式が自動的に除去されることを示します ([Firefox bug 1922723](https://bugzil.la/1922723))。

- **:has-slotted CSS 擬似クラス:** `layout.css.has-slotted-selector.enabled`。

  {{CSSXRef(":has-slotted")}} [擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes) は、[ウェブコンポーネント](/ja/docs/Web/API/Web_components) をレンダリングするときに {{HTMLElement("slot")}} 要素へ追加したコンテンツがある {{HTMLElement("template")}} 内の要素へスタイルを設定するために使用します ([Firefox bug 1921747](https://bugzil.la/1921747))。

## 過去のバージョン

{{Firefox_for_developers}}
