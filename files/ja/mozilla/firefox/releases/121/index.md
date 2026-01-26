---
title: Firefox 121 for developers
slug: Mozilla/Firefox/Releases/121
l10n:
  sourceCommit: d1a9b34e50b4b9e84b51f8fadc585ae1afe75069
---

このページでは、開発者に影響する Firefox 121 の変更点をまとめています。Firefox 121 は、米国時間 [2023 年 12 月 19 日](https://whattrainisitnow.com/release/?version=121) にリリースされました。

## ウェブ開発者向けの変更点一覧

### HTML

- `<iframe>` 要素の [遅延読み込み](/ja/docs/Web/Performance/Guides/Lazy_loading) をサポートしました。特定の `<iframe>` 要素が、表示されたときに限り読み込まれるべきであると開発者が示すことができます。これはページを読み込むときに取得しなければならないリソースを削減する (一部の `<iframe>` 要素を取得する必要がない) ことで、最初の読み込み時間を短縮できます。
  このヒントは [`<iframe>`](/ja/docs/Web/HTML/Reference/Elements/iframe) 要素の [`loading`](/ja/docs/Web/HTML/Reference/Elements/iframe#loading) 属性か、JavaScript で {{domxref("HTMLIFrameElement.loading")}} を使用して提供できます ([Firefox bug 1622090](https://bugzil.la/1622090))。

### CSS

- {{CSSXRef("text-wrap")}} プロパティを、値 `balance` および `stable` をサポートするように更新しました。値 `balance` は見出しなど短いブロックのコンテンツで使用するもので、コンテンツが複数行にまたがるときにバランスがとれて読みやすくなります。値 `stable` は、編集可能なコンテンツをユーザーが編集するときにリフローしなくなります ([Firefox bug 1731541](https://bugzil.la/1731541))。
- よく親セレクターと呼ばれる、{{cssxref(":has", ":has()")}} セレクターをサポートしました。これは開発者が、関連する要素に基づいて要素にスタイルを適用することを可能にします。たとえば `li:has(ul)` はサブリストをを持つリストに、`h1:has(+ p)` は直後に段落を持つ見出しにマッチします。
- [`text-indent`](/ja/docs/Web/CSS/Reference/Properties/text-indent) CSS プロパティで、値 [`each-line`](/ja/docs/Web/CSS/Reference/Properties/text-indent#each-line) および [`hanging`](/ja/docs/Web/CSS/Reference/Properties/text-indent#hanging) をサポートしました ([Firefox bug 784648](https://bugzil.la/784648))。開発者は、特定のテキストインデントスタイルをより簡単に指定できます。また開発者はより創造的に、`text-indent` プロパティで複数の値を組み合わせることが可能になりました。例: `text-indent: 3em hanging each-line`

### JavaScript

- {{jsxref("Promise.withResolvers()")}} 静的メソッドをサポートしました。これは戻り値の {{jsxref("Promise")}} と同じスコープで `resolve` および `reject` コールバック関数を公開して、Promise を構築した後に解決または拒否するコードを定義できます ([Firefox bug 1845586](https://bugzil.la/1845586))。

- {{jsxref("Date.parse()")}} が追加の日付形式をいくつか受け入れるようになりました。
  - `YYYY-MMM-DD` 形式で年が 9999 より大きい (例: `19999-Jan-01`) ([Firefox bug 1858851](https://bugzil.la/1858851))
  - `MMM-DD-YYYY` 形式 (例: `Jan-01-1970`) ([Firefox bug 1863489](https://bugzil.la/1863489))
  - ISO 形式でない日時でミリ秒 (例: `Jan 1 1970 10:00:00.050`) ([Firefox bug 1863125](https://bugzil.la/1863125))
  - 以前は拒否されていた、先頭に曜日がある形式。たとえば:
    - `Wed, 1970-01-01`
    - `Wed, 1970-Jan-01`

    曜日が正確である必要はありません。たとえば `foo 1970-01-01` は動作します ([Firefox bug 1617562](https://bugzil.la/1617562))。

- {{jsxref("Date.parse()")}} のその他の修正:
  - `YYYY-M-DD` および `YYYY-MM-D` 形式は、ISO 形式の日付 `YYYY-MM-DD` のように GMT であると想定しないようになりました ([Firefox bug 1783731](https://bugzil.la/1783731))。
  - すべての形式でミリ秒は四捨五入するのではなく、3 桁目より後を切り捨てるようになりました ([Firefox bug 746529](https://bugzil.la/746529))。

### API

- {{domxref("WebTransportSendStream")}} インターフェイスの {{domxref("WebTransportSendStream.sendOrder", "sendOrder")}} プロパティをサポートしました。[WebTransport API](/ja/docs/Web/API/WebTransport_API) の _双方向_ ストリームの相対的な送信優先度を、ストリームの作成後に取得および変更できます。このプロパティは一方向ストリームの優先度変更には使用できません。Firefox は一方向ストリームを {{domxref("WebTransportSendStream")}} ではなく {{domxref("WritableStream")}} として実装しているためです (詳しくは [Firefox bug 1853444](https://bugzil.la/1853444) をご覧ください)。

#### DOM

- Android で、{{domxref("HTMLInputElement.showPicker()")}} が [`<input type="week">`](/ja/docs/Web/HTML/Reference/Elements/input/month) および [`<input type="month">`](/ja/docs/Web/HTML/Reference/Elements/input/month) 要素で動作するようになりました ([Firefox bug 1853797](https://bugzil.la/161853797))。

### WebAssembly

- WebAssembly で、新たに `return_call` および `return_call_indirect` 命令が [`call`](/ja/docs/WebAssembly/Reference/Control_flow/call) 命令をを置き換えることによって末尾呼び出し最適化をサポートしました。これはパフォーマンスの向上、スタック領域使用量の削減、末尾呼び出しを使用するプログラミング言語との互換性向上をもたらします。([Firefox bug 1858855](https://bugzil.la/1846789)).

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- 閲覧コンテキストが破棄されたときに発生する [`browsingContext.contextDestroyed`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-contextDestroyed) イベントを追加しました ([Firefox bug 1694390](https://bugzil.la/1694390))。
- [`script.callFunction`](https://w3c.github.io/webdriver-bidi/#command-script-callFunction) および [`script.evaluate`](https://w3c.github.io/webdriver-bidi/#command-script-evaluate) コマンドの引数 `userActivation` をサポートしました。ユーザーアクションをエミュレートしている間に JavaScript を評価できます ([Firefox bug 1845488](https://bugzil.la/1845488))。
- [`browsingContext.userPromptOpened`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-userPromptOpened) イベントの `defaultValue` フィールドをサポートしました。プロンプトの既定値をユーザーが取得できます ([Firefox bug 1851761](https://bugzil.la/1851761))。
- [`browsingContext.captureScreenshot`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-captureScreenshot) コマンドの引数 `viewportOptions` を `boxOptions` に改名しました ([Firefox bug 1859258](https://bugzil.la/1859258))。
- [`browsingContext.captureScreenshot`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-captureScreenshot) コマンドで引数 `origin` を採用して、`scrollIntoView` を削除しました ([Firefox bug 1862649](https://bugzil.la/1862649))。
- [`browsingContext.captureScreenshot`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-captureScreenshot) コマンドで引数 `origin` をサポートしました。スクリーンショットの原点と範囲を定義できます。受け入れる値は `"document"` と `"viewport"` です ([Firefox bug 1840999](https://bugzil.la/1840999))。
- `Window` オブジェクトをシリアライズするとき、`Window` オブジェクトのコンテキスト ID を設定したプロパティ `context` が含まれるようになりました。これは特定のウィンドウやフレームを参照するために、Marionette との間で取り交わすことができます ([Firefox bug 1841049](https://bugzil.la/1841049))。
- データ構造 (配列やマップなど) へ入れ子になったノードのシリアライズが失敗する不具合を修正しました ([Firefox bug 1861000](https://bugzil.la/1861000))。
- [`browsingContext.navigate`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-navigate) コマンドが誤ったナビゲーション ID を返す場合がある不具合を修正しました ([Firefox bug 1861655](https://bugzil.la/1861655))。

#### Marionette

- `Window` および `Frame` オブジェクトのシリアライズとデシリアライズをサポートしました ([Firefox bug 1274251](https://bugzil.la/1274251))。

## 実験的なウェブ機能

以下の機能は Firefox 121 で新たに導入しましたが、デフォルトで無効です。これらを実験するには、`about:config` ページで適切な設定項目を検索して `true` に設定してください。[実験的機能](/ja/docs/Mozilla/Firefox/Experimental_features) のページで、さらに多くの機能を確認できます。

- カスタム要素の状態の擬似クラス: `dom.element.customstateset.enabled`
  - : カスタム要素は {{domxref("ElementInternals.states","states")}} プロパティを通して、{{domxref("CustomStateSet")}} として内部状態を公開できます。`:--somestate` のような CSS のカスタム要素擬似クラスが、この要素の状態にマッチします。([Firefox bug 1861466](https://bugzil.la/1861466))
- HTML select 要素の `showPicker()` メソッド: `dom.select.showPicker.enabled`
  - : {{domxref("HTMLSelectElement.showPicker()")}} メソッドはユーザー操作によって発生して、{{HTMLElement("select")}} 要素のブラウザーの選択ツールをプログラムから起動します。([Firefox bug 1854112](https://bugzil.la/1854112))

## アドオン開発者向けの変更点一覧

- manifest.json の `background` キーに `service_worker` および `scripts` 宣言が含まれているとき、バックグラウンドページが開始しない具合を修正しました ([Firefox bug 1860304](https://bugzil.la/1860304))。

  > **注記:** ちなみに Chrome 121 の変更で、`service_worker` プロパティとともに指定した `scripts` プロパティが無視されます。以前、Chrome は両方のプロパティを持つ拡張機能の読み込みを拒否していました ([Chromium bug 1418934](https://crbug.com/1418934))。
  > 詳しくは [`background` マニフェストキーのブラウザーサポート](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background#browser_support) をご覧ください。

## 過去のバージョン

{{Firefox_for_developers(120)}}
