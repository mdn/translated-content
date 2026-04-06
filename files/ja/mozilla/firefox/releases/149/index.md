---
title: Firefox 149 release notes for developers (Stable)
short-title: Firefox 149 (Stable)
slug: Mozilla/Firefox/Releases/149
l10n:
  sourceCommit: 05b5b1f7d349d5e48e197394c1c4ced51d5fc8ce
---

このページでは、開発者に影響する Firefox 149 の変更点をまとめています。
Firefox 149 は、米国時間 [2026 年 3 月 24 日](https://whattrainisitnow.com/release/?version=149) にリリースされました。

## ウェブ開発者向けの変更点一覧

### HTML

- [`popover`](/ja/docs/Web/HTML/Reference/Global_attributes/popover) グローバル属性で値 [`hint`](/ja/docs/Web/HTML/Reference/Global_attributes/popover#hint) をサポートしました。`hint` のポップオーバーは表示されるときに `auto` のポップオーバーを閉じませんが、ほかの hint ポップオーバーを閉じます ([Firefox bug 1867743](https://bugzil.la/1867743))。

### MathML

- CSS の [`font-family: math`](/ja/docs/Web/CSS/Reference/Properties/font-family#math) プロパティをサポートして、デフォルトで {{mathmlelement('math')}} 要素へ適用するようになりました。
  これは基盤の OS でどのフォントが提供されているかを知る必要なく、ウェブサイトが適切な数式フォントや MathML を使用できることを確実にします ([Firefox bug 2014703](https://bugzil.la/2014703))。

### CSS

- {{CSSXRef("shape-outside")}} CSS プロパティで [`xywh()`](/ja/docs/Web/CSS/Reference/Values/basic-shape/xywh) および [`rect()`](/ja/docs/Web/CSS/Reference/Values/basic-shape/rect) 関数を値としてサポートしました。これらの関数は以前から {{CSSXRef("clip-path")}} および {{CSSXRef("offset-path")}} プロパティ向けに実装しており、`shape-outside` でも使用可能になりました ([Firefox bug 1983187](https://bugzil.la/1983187))。

- {{CSSXRef("vertical-align")}} CSS プロパティが {{CSSXRef("alignment-baseline")}}、{{CSSXRef("baseline-shift")}}、{{CSSXRef("baseline-source")}} のショートハンドプロパティになりました ([Firefox bug 1830771](https://bugzil.la/1830771))。

- {{cssxref("@container")}} [アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules) 条件の、[`<container-query>`](/ja/docs/Web/CSS/Reference/At-rules/@container#container-query) の部分が省略可能になりました。
  これにより、コンテナーの名前のみに基づいてマッチングすることができます ([Firefox bug 2016474](https://bugzil.la/2016474))。

### JavaScript

- {{jsxref("Intl")}} で `"islamic-umalqura"` の [暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) をサポートしました。
  この文字列は {{jsxref("Intl.supportedValuesOf()")}} が返す暦のリストに含まれており、また [`DateTimeFormat()` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) の引数 [`options.calendar`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#calendar) として設定できます ([Firefox bug 2011505](https://bugzil.la/2011505))。

### API

- {{domxref("Window.createImageBitmap()")}} および {{domxref("WorkerGlobalScope.createImageBitmap()")}} で引数 [`options.resizeQuality`](/ja/docs/Web/API/Window/createImageBitmap#resizequality) をサポートしました。
  また、これらのメソッドでリサイズのオプション ([`options.resizeWidth`](/ja/docs/Web/API/Window/createImageBitmap#resizewidth) または [`options.resizeHeight`](/ja/docs/Web/API/Window/createImageBitmap#resizeheight)) とビットマップの引数 ([`sx`、`sy`、`sw`、`sh`](/ja/docs/Web/API/Window/createImageBitmap#sx)) を同時に設定できるようになりました。以前は、両方とも設定するとスケーリングしていない元のビットマップを返していました ([Firefox bug 2010125](https://bugzil.la/2010125))。

- [Reporting API](/ja/docs/Web/API/Reporting_API) が、[Content Security Policy (CSP)](/ja/docs/Web/HTTP/Guides/CSP) および {{httpheader("Integrity-Policy")}} の違反の報告をサポートしました。
  この API は {{domxref("ReportingObserver")}} を使用して、違反しているページの {{domxref("CSPViolationReport")}} および {{domxref("IntegrityViolationReport")}} オブジェクトを報告できます (報告は `type` プロパティの `"csp-violation"` または `"integrity-violation"` によってフィルタリングできます)。
  シリアライズした報告オブジェクトは、対応する HTTP ヘッダーで指定した報告サーバーへ送信することもできます。エンドポイントの名前と対応する URL は、はじめに {{httpheader('Reporting-Endpoints')}} または {{httpheader('Report-To')}} HTTP レスポンスヘッダーで定義しなければなりません ([Firefox bug 1976074](https://bugzil.la/1976074)、[Firefox bug 2008916](https://bugzil.la/2008916))。

- Firefox 148 まで `structuredClone.call(iframe.contentWindow)` が、誤って iframe の [レルム](/ja/docs/Web/JavaScript/Reference/Execution_model#realms) ではなく呼び出し元のレルムでオブジェクトを作成していました。この実装が `this` のレルムでオブジェクトをインスタンス化するようになり、メソッドの動作がより厳密に、仕様書に準拠します。

#### DOM

- [`HTMLSelectElement.showPicker()`](/ja/docs/Web/API/HTMLInputElement/showPicker#showpicker_for_a_datalist_input) メソッドを、{{htmlelement("datalist")}} で定義したオプションのリストでサポートしました。
  これにより、ユーザー操作が発生したときにブラウザーが `<datalist>` のピッカーをプログラムから表示させることができます ([Firefox bug 1998668](https://bugzil.la/1998668))。

- {{domxref("CloseWatcher")}} インターフェイスをサポートしました。
  これにより開発者は Windows の <kbd>Esc</kbd> キーや Android の <kbd>戻る</kbd> キーのようなデバイスネイティブの仕組みを使用して閉じることができるコンポーネントを、[ダイアログ](/ja/docs/Web/HTML/Reference/Elements/dialog) や [ポップオーバー](/ja/docs/Web/API/Popover_API) などの組み込みコンポーネントと同じように実装できます ([Firefox bug 1966073](https://bugzil.la/1966073))。

- DOM メソッドで、要素や属性の名前としてより広い範囲の文字を受け入れるようになりました。
  以前は DOM メソッドで大きな制限がありましたが、現在は HTML パーサーと同じ文字セットが許可されています。
  影響があるメソッドは以下のとおりです: {{domxref("Document")}} インターフェイスの {{domxref("Document/createAttribute","createAttribute()")}}、{{domxref("Document/createAttributeNS","createAttributeNS()")}}、{{domxref("Document/createElement","createElement()")}}、{{domxref("Document/createElementNS","createElementNS()")}}、{{domxref("Element")}} インターフェイスの {{domxref("Element/toggleAttribute","toggleAttribute()")}}、{{domxref("Element/setAttribute","setAttribute()")}}、{{domxref("Element/setAttributeNS","setAttributeNS()")}}、{{domxref("DOMImplementation")}} インターフェイスの {{domxref("DOMImplementation/createDocument","createDocument()")}}、{{domxref("CustomElementRegistry"}} インターフェイスの {{domxref("CustomElementRegistry/define","define()")}}、{{domxref("CustomElementRegistry/whenDefined","whenDefined()")}} ([Firefox bug 1773312](https://bugzil.la/1773312))。

#### Media、WebRTC、Web Audio

- {{domxref("HTMLMediaElement.captureStream()")}} メソッドをサポートしました。
  これは、要素のコンテンツのリアルタイムキャプチャーをストリーミングするオブジェクトを返します。
  このストリームは、たとえば WebRTC {{domxref("RTCPeerConnection")}} のソースとして使用できます。
  以前は `captureStream()` が、非標準の `mozCaptureStream()` メソッドとしてのみ使用可能でした ([Firefox bug 2017708](https://bugzil.la/2017708))。

- {{domxref("MediaElementAudioSourceNode")}} が、(仕様書での要件により) すべての種類のソースにおいて音声をキャプチャーする際にメディア要素の音量に従うようになりました。
  以前は、要素の音量設定が {{domxref("MediaStream")}} のソースとしてキャプチャーした音声に影響がありませんでした ([Firefox bug 2010427](https://bugzil.la/2010427))。

- {{domxref("HTMLMediaElement.captureStream()", "HTMLMediaElement.mozCaptureStream()")}} メソッドが (仕様書での要件により)、メディア要素が再生しているソースの種類に関係なく、メディア要素の音量を適用せずにソースから生の音声をキャプチャーするようになりました。
  この変更を施す前はメディア要素の音量が、キャプチャーしたストリームの音量に影響を与えていました ([Firefox bug 2010427](https://bugzil.la/2010427))。

### WebDriver への適合 (WebDriver BiDi, Marionette)

#### 一般

- WebDriver BiDi および WebDriver classic プロトコルで、要求したスクリーンショットの領域がサポートされる最大寸法を超えた場合に、黙ってクリッピングするのではなく正しくエラーを返すようにスクリーンショットの実装を更新しました ([Firefox bug 1994148](https://bugzil.la/1994148))。
- WebDriver BiDi および WebDriver classic プロトコルで、入力ソース型 `wheel` による `scroll` アクションが視覚的なビューポートの寸法を超えてスクロールできるように、アクションの実装を更新しました ([Firefox bug 1962355](https://bugzil.la/1962355))。

#### WebDriver BiDi

- `session.new` コマンドのケイパビリティを通して設定可能な、ユーザープロンプトの自動処理をサポートしました ([Firefox bug 1905086](https://bugzil.la/1905086))。
- `browser.setDownloadBehavior` コマンドを追加しました。これはクライアントがダウンロードを許可または拒否する、および個別のダウンロードフォルダーを設定することができます。この動作はセッションごと、またはユーザーコンテキストごとに設定できます ([Firefox bug 1989022](https://bugzil.la/1989022))。
- ワーカーレルム (専用ワーカー、共用ワーカー、サービスワーカー) 向けに `script.realmCreated` および `script.realmDestroyed` イベントを追加しました ([Firefox bug 1936770](https://bugzil.la/1936770))。
- Android で `browsingContext.userPromptOpened` および `browsingContext.userPromptClosed` イベントが、誤って iframe のコンテキスト ID ではなくトップレベルのコンテキスト ID を報告していた問題を修正しました ([Firefox bug 2007385](https://bugzil.la/2007385))。
- ユーザーエージェントに固有のシャドウルートを公開しないように、DOM ノードのシリアライズ処理を修正しました ([Firefox bug 2016673](https://bugzil.la/2016673))。
- `window.open` コマンドでブラウジングコンテキストを作成する場合に、コマンドから返る前にエミュレーション、ビューポートの上書き、プリロードスクリプトを確実に適用するように、新しいブラウジングコンテキストに異なる設定を適用する処理を更新しました ([Firefox bug 1985997](https://bugzil.la/1985997)、[Firefox bug 2005546](https://bugzil.la/2005546)、[Firefox bug 2005558](https://bugzil.la/2005558))。

#### Marionette

- いくつかの WebDriver classic コマンドを、`implicit` および `pageLoad` のタイムアウトをスクリプトのタイムアウトと同様に処理するように更新しました。タイムアウトを無効にするための値 `null` を受け入れます ([Firefox bug 2008345](https://bugzil.la/2008345))。

## アドオン開発者向けの変更点一覧

- 分割ビューの初期サポートを追加しました。以下のサポートを含みます:
  - {{WebExtAPIRef("tabs.query")}}、{{WebExtAPIRef("tabs.onUpdated")}}、{{WebExtAPIRef("tabs.Tab")}} に分割ビューの ID が含まれます。
  - {{WebExtAPIRef("tabs.move")}} または {{WebExtAPIRef("tabs.remove")}} が分割ビュー内のタブを含む場合の動作に関する文書 ([Firefox bug 1993037](https://bugzil.la/1993037))。
- {{WebExtAPIRef("action.isEnabled")}} および {{WebExtAPIRef("browserAction.isEnabled")}} のトップレベルの引数として `tabId` を追加しました。この変更は、Chrome の `action.isEnabled` の実装との互換性を提供します ([Firefox bug 2013477](https://bugzil.la/2013477))。
- ポップアップを開くための {{WebExtAPIRef("action.openPopup")}} および {{WebExtAPIRef("browserAction.openPopup")}} で、ユーザーのジェスチャーが必要ではなくなりました。この機能は Firefox 108 から、設定 `extensions.openPopupWithoutUserGesture.enabled` によって使用できました。この変更は、Firefox の動作を Chrome や Safari に合わせるものです ([Firefox bug 1799344](https://bugzil.la/1799344))。
- {{WebExtAPIRef("action.openPopup")}} または {{WebExtAPIRef("browserAction.openPopup")}} に `windowId` が渡された場合に、ポップアップを開くためにウィンドウにフォーカス (アクティブ) を設定しなければなりません。フォーカスがないウィンドウでポップアップを開くには、初めに {{WebExtAPIRef("windows.update","windows.update(windowId, { focused: true })")}} を呼び出さなければなりません。この変更は Firefox の動作を Chrome に合わせるものです ([Firefox bug 2011516](https://bugzil.la/2011516))。
- {{domxref("structuredClone")}} の実装を、呼び出し元のレルムではなく `this` のレルムでオブジェクトをインスタンス化するように変更しました。後方互換性のためコンテンツスクリプトのグローバルスコープに、`window.structuredClone` をシャドーイングする独自の `structuredClone` メソッドを含むようになりました。詳しくは [Sharing objects with page scripts の `structuredClone`](/ja/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts#structuredclone) をご覧ください。

- 拡張機能が {{WebExtAPIRef("tabs.executeScript")}}、{{WebExtAPIRef("tabs.insertCSS")}}、{{WebExtAPIRef("tabs.removeCSS")}}、{{WebExtAPIRef("scripting.executeScript")}}、{{WebExtAPIRef("scripting.insertCSS")}}、{{WebExtAPIRef("scripting.removeCSS")}} によって、`moz-extension:` 文書で動的にコードを実行する機能が非推奨になりました ([Firefox bug 2011234](https://bugzil.la/2011234))。この機能は Firefox Nightly では使用できず、Beta および Release 版の Firefox ではタブのコンソールで警告が表示されます。この制限は Firefox 152 以降ですべてのバージョンに適用する予定です。([Firefox bug 2015559](https://bugzil.la/2015559)) 代替手段として文書のスクリプトで {{WebExtAPIRef("runtime.onMessage")}} リスナーを登録して、要求したコードを実行するためにメッセージを送信することで、拡張機能が文書内で動的にコードを実行できます。
- ダークテーマで [ページアクション](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) の SVG アイコンに適用される暗黙的な CSS フィルターが、Nightly ビルドで無効化されました ([Firefox bug 2001318](https://bugzil.la/2001318))。また Firefox 152 から、ほかのエディションでも無効化する予定です ([Firefox bug 2016509](https://bugzil.la/2016509))。ほかの Firefox エディションでは、`about:config` でブーリアン型の設定項目 `extensions.webextensions.pageActionIconDarkModeFilter.enabled` を作成して `false` を設定することで、CSS フィルターを無効にしたページアクション SVG アイコンのテストを行えます。

## 実験的なウェブ機能

以下の機能は Firefox 149 で導入しましたが、デフォルトで無効です。
これらを実験するには、`about:config` ページで適切な設定項目を検索して `true` に設定してください。
[実験的機能](/ja/docs/Mozilla/Firefox/Experimental_features) のページで、さらに多くの機能を確認できます。

- **`attr()` CSS 関数の値 `<attr-type>`**: `layout.css.attr.enabled`

  {{cssxref("attr")}} CSS 関数で値 [`<attr-type>`](/ja/docs/Web/CSS/Reference/Values/attr#attr-type) をサポートしました。これは属性値をどのように CSS の値へ解析するかを指定して、[`data-*`](/ja/docs/Web/HTML/How_to/Use_data_attributes) からそれらの値を直接取り出すことができます ([Firefox bug 1986631](https://bugzil.la/1986631) & [Firefox bug 1998245](https://bugzil.la/1998245))。

- **`color-mix()` が複数の色の引数を受け入れる**: `layout.css.color-mix-multi-color.enabled`

  [`color-mix()`](/ja/docs/Web/CSS/Reference/Values/color_value/color-mix) CSS 関数で、[`<color>`](/ja/docs/Web/CSS/Reference/Values/color_value) の値を 2 つだけでなく複数個サポートしました。これにより多くの色を混ぜ合わせて、それぞれのパーセンテージを設定できます ([Firefox bug 2007772](https://bugzil.la/2007772))。

- **メディアベースの擬似クラス**: `dom.media.pseudo-classes.enabled`

  メディアベースの擬似クラスである {{cssxref(":buffering")}}、{{cssxref(":muted")}}、{{cssxref(":paused")}}、{{cssxref(":playing")}}、{{cssxref(":seeking")}}、{{cssxref(":stalled")}}、{{cssxref(":volume-locked")}} は {{htmlelement("audio")}} および {{htmlelement("video")}} 要素に対して、再生中や一時停止など要素の現在の状態に基づいてスタイルを設定できます ([Firefox bug 1707584](https://bugzil.la/1707584)、[Firefox bug 2014512](https://bugzil.la/2014512))。

- **`color` input 要素の `alpha` および `colorspace` 属性** (Nightly 限定): `dom.forms.html_color_picker.enabled`

  HTML の [`<input type="color">`](/ja/docs/Web/HTML/Reference/Elements/input/color) 要素で [`alpha`](/ja/docs/Web/HTML/Reference/Elements/input/color#alpha) および [`colorspace`](/ja/docs/Web/HTML/Reference/Elements/input/color#colorspace) 属性をサポートしました ([Firefox bug 1919718](https://bugzil.la/1919718))。

- **`@container style()` クエリー** (Nightly): `layout.css.style-queries.enabled`

  [`@container`](/ja/docs/Web/CSS/Reference/At-rules/@container) CSS アットルールで [`style()`](/ja/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) クエリーをサポートしました。これはコンテナーが有効な CSS 宣言、CSS プロパティ、カスタムプロパティを保持しているかを確認して、その結果に従って子孫にスタイルを適用することができます ([Firefox bug 2014404](https://bugzil.la/2014404))。

- **CSS Typed Object Model Level 1**: `layout.css.typed-om.enabled`

  CSS Typed Object Model Level 1 仕様を実装しました。
  このリリースでは {{domxref("CSSNumericValue")}} インターフェイスの {{domxref("CSSNumericValue/to","to()")}} メソッドをサポートしており、CSS の数値をある単位から別の単位に変換できます ([Firefox bug 1278697](https://bugzil.la/1278697))。

- **JPEG XL 画像のサポート: Rust によるデコーダー** (Nightly 限定): `image.jxl.enabled`

  以前の C++ による [JPEG XL](https://jpeg.org/jpegxl/) 画像デコーダーを、`jxl-rs` ライブラリーを使用する新たな Rust による実装に置き換えました ([Firefox bug 1986393](https://bugzil.la/1986393))。
