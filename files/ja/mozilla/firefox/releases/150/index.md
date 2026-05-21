---
title: Firefox 150 release notes for developers (Stable)
short-title: Firefox 150 (Stable)
slug: Mozilla/Firefox/Releases/150
l10n:
  sourceCommit: 674d6c8868cde1654eaba3c285afde9d3b60ce9f
---

このページでは、開発者に影響する Firefox 150 の変更点をまとめています。
Firefox 150 は、米国時間 [2026 年 4 月 21 日](https://whattrainisitnow.com/release/?version=150) にリリースされました。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- リクエストがリダイレクトされたときに応答データがない理由を示すため、特定のメッセージを [ネットワークペインの _応答タブ_](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#response-tab) に表示するようになりました ([Firefox bug 2016679](https://bugzil.la/2016679))。
- [疑似クラスの切り替えペイン](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#viewing-common-pseudo-classes) へ新たに "要素固有の疑似クラス" セクションを追加しました。ここには {{cssxref(":open")}} 疑似クラスの切り替え機能が含まれており、`<dialog>` 要素などの開く状態を持つ要素のみで使用可能です。既存の {{cssxref(":visited")}} 疑似クラスの切り替え機能もここに移動しており、`<a>` および `<area>` 要素にのみ適用されます ([Firefox bug 2014442](https://bugzil.la/2014442))。

### HTML

- `<img>` 要素の [`sizes`](/ja/docs/Web/HTML/Reference/Elements/img#sizes) 属性 (および [`HTMLImageElement.sizes`](/ja/docs/Web/API/HTMLImageElement/sizes)) のオプションで、キーワード `"auto"` をサポートしました。
  これは [`srcset`](/ja/docs/Web/HTML/Reference/Elements/img#srcset) からどの画像を表示するかを選択するために、遅延読み込みされる `<img>` 要素で CSS が適用された後の計算済み画像レイアウトサイズを使用できるようにします。
  これは属性でメディア条件やそれに関連するサイズを指定するよりもシンプルです。従来の方法では、すでに CSS メディアクエリーで表現した動作と重複する可能性が高くなります ([Firefox bug 1819581](https://bugzil.la/1819581))。

### CSS

- [`color-mix()`](/ja/docs/Web/CSS/Reference/Values/color_value/color-mix) CSS 関数で、[`<color>`](/ja/docs/Web/CSS/Reference/Values/color_value) の値を 2 つだけでなく複数受け入れるようになりました。これにより任意の数の色を混ぜ合わせることができます ([Firefox bug 2024171](https://bugzil.la/2024171))。

- [`light-dark()`](/ja/docs/Web/CSS/Reference/Values/color_value/light-dark) CSS 関数で、[`<image>`](/ja/docs/Web/CSS/Reference/Values/image) の値を受け入れるようになりました。これにより、さまざまな配色に合わせて画像やグラデーションなどを使用できます ([Firefox bug 2023569](https://bugzil.la/2023569))。

- メディアベースの擬似クラスである {{cssxref(":buffering")}}、{{cssxref(":muted")}}、{{cssxref(":paused")}}、{{cssxref(":playing")}}、{{cssxref(":seeking")}}、{{cssxref(":stalled")}}、{{cssxref(":volume-locked")}} をサポートしました。これらは {{htmlelement("audio")}} および {{htmlelement("video")}} 要素に対して、再生中や一時停止など現在の状態に基づいてスタイルを設定できます ([Firefox bug 2020775](https://bugzil.la/2020775))。

- {{cssxref("animation-range-start")}} および {{cssxref("animation-range-end")}} プロパティ (および {{cssxref("animation-range")}} ショートハンドプロパティ) をサポートしました。これらのプロパティはアニメーションのタイムラインに沿って適用範囲の開始点と終了点を設定するもので、[スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations) のタイムラインのどこでアニメーションを開始および終了するかを制御できます ([Firefox bug 1825427](https://bugzil.la/1825427))。

- {{cssxref("revert-rule")}} CSS キーワードをサポートしました。これにより現在のスタイル規則が存在しないかのようにプロパティの値を決定でき、代わりに別のマッチする規則の値が適用されます ([Firefox bug 2017307](https://bugzil.la/2017307))。

- {{cssxref("overscroll-behavior")}} CSS プロパティ (およびロングハンドプロパティの {{cssxref("overscroll-behavior-x")}}、{{cssxref("overscroll-behavior-y")}}、{{cssxref("overscroll-behavior-block")}}、{{cssxref("overscroll-behavior-inline")}}) を、`overflow: hidden` を適用した要素などスクロール可能なオーバーフローがないスクロールコンテナーに正しく適用するようになりました。以前は、それらの要素でプロパティが無視されていました ([Firefox bug 1837436](https://bugzil.la/1837436))。

### JavaScript

変更なし。

### API

- {{domxref("Sanitizer.replaceElementWithChildren()")}} メソッドが、HTML [名前空間](/ja/docs/Web/API/Sanitizer/replaceElementWithChildren#namespace) で置き換えられる要素が {{htmlelement("html")}} である場合に `false` を返すようになりました。
  言い換えると、`<html>` 要素をその内部コンテンツで置き換える {{domxref("Sanitizer")}} を、このメソッドを使用して作成することはできません ([Firefox bug 2022176](https://bugzil.la/2022176))。

#### DOM

- {{domxref('Document.caretPositionFromPoint()')}} メソッドの引数 [`options.shadowRoots`](/ja/docs/Web/API/Document/caretPositionFromPoint#shadowroots) をサポートしました。
  これは関連する {{domxref("ShadowRoot")}} がオプションとして渡されると、シャドウ DOM の内部でキャレットを含むノードを返すことができます ([Firefox bug 1914596](https://bugzil.la/1914596))。

- {{domxref("CSSFontFaceDescriptors")}} インターフェイスをサポートして、{{domxref("CSSFontFaceRule.style")}} プロパティによってこの型のインスタンスが返されるようになりました ([Firefox bug 2019904](https://bugzil.la/2019904))。

- {{domxref("Document")}} インターフェイスの非標準メソッドである {{domxref("Document/caretRangeFromPoint","caretRangeFromPoint()")}} をサポートしました ([Firefox bug 1550635](https://bugzil.la/1550635))。

- {{domxref("Document/ariaNotify","Document")}} および {{domxref("Element/ariaNotify","Element")}} で `ariaNotify()` メソッドをサポートしました。
  これは {{glossary("screen reader", "スクリーンリーダー")}} が読み上げるテキスト文字列をキューに登録するもので、[ARIA ライブリージョン](/ja/docs/Web/Accessibility/ARIA/Guides/Live_regions) に代わる、より人間工学的で信頼性が高い代替手段を提供します ([Firefox bug 2018095](https://bugzil.la/2018095))。

### WebDriver への適合 (WebDriver BiDi, Marionette)

#### 一般

- 保留中のダウンロードがあるとき、ブラウザーを閉じる操作がプロンプトによってブロックされる場合がある問題を修正しました。プロンプトは自動的に破棄されます ([Firefox bug 2003840](https://bugzil.la/2003840))。

#### WebDriver BiDi

- `emulation.setNetworkConditions` コマンドを追加しました。現在は `type: offline` をサポートします。このコマンドは特定のブラウジングコンテキストまたはユーザーコンテキスト (コンテナー)、あるいはグローバルでオフラインモードのエミュレーションを行えます ([Firefox bug 1993079](https://bugzil.la/1993079))。
- `network` モジュールのすべてのコマンドおよびイベントで、UTF-8 でないヘッダー値のサポートを改良しました。それらの値を適切に `BytesValue` へシリアライズします ([Firefox bug 1994996](https://bugzil.la/1994996))。
- "Content-Disposition" ヘッダーを持つ応答で発生する、ダウンロードのイベントの不具合を修正しました。`target="_blank"` があるリンクで開始されたダウンロードで、イベントの `navigation` プロパティが欠落していました ([Firefox bug 1999481](https://bugzil.la/1999481))。
- ブラウザーの開発ツールへ実際にメッセージが表示されるコンソール API の呼び出しに限って、`log.entryAdded` イベントが発生するように更新しました (コンソールの仕様もご覧ください: [using the printer](https://console.spec.whatwg.org/#printer))。この変更により、`console.clear` または `console.time` を使用してもイベントは発生しません ([Firefox bug 1866749](https://bugzil.la/1866749))。
- 複数のコンテキストを並行して生成した場合に、`browsingContext.setViewport` コマンドでタイムアウトが発生する可能性があった競合状態を修正しました ([Firefox bug 2019511](https://bugzil.la/2019511))。
- `browsingContext.locateNodes` コマンドを改良して、`css` ロケーターを使用したときにページの HTML 要素 (`documentElement`) を取得できるようになりました ([Firefox bug 2020578](https://bugzil.la/2020578))。

#### Marionette

- `WebDriver:getShadowRoot` コマンドを、ユーザーエージェントシャドウルートを返さないように修正しました ([Firefox bug 2016741](https://bugzil.la/2016741))。

## アドオン開発者向けの変更点一覧

- 分割ビューのために、{{WebExtAPIRef("tabs.move")}} の動作を更新しました:
  - 分割ビューの中にあるタブの順序を入れ替えることができます ([Firefox bug 2016762](https://bugzil.la/2016762))。
  - タブのリストに分割ビューのタブが含まれており、それらの間に 1 つ以上のタブが置かれたときに、タブは切り離して移動されて分割ビューが閉じられます ([Firefox bug 2022549](https://bugzil.la/2022549))。
- 拡張機能の文書で [Web Authentication API](/ja/docs/Web/API/Web_Authentication_API) が使用可能になり、拡張機能の [host 権限](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) でカバーされるすべてのドメインに対して [Relying Party ID (RP ID)](/ja/docs/Web/API/PublicKeyCredentialCreationOptions#rp) を指定できるようになりました。この変更により {{domxref("CredentialsContainer.create()", "navigator.credentials.create()")}} および {{domxref("CredentialsContainer.create()", "navigator.credentials.get()")}} でホスト権限があるドメインに一致する RP ID を指定でき、拡張機能がウェブサービスに代わって WebAuthn の資格情報を作成および取得できます。詳しくは [Use Web Authn API in web extensions](/ja/docs/Mozilla/Add-ons/WebExtensions/Use_the_web_authn_api) をご覧ください ([Firefox bug 1956484](https://bugzil.la/1956484))。
- JavaScript の [`import`](/ja/docs/Web/JavaScript/Reference/Statements/import) の呼び出しで、CSS のインポートが失敗する場合がある問題が解消しました ([Firefox bug 2016369](https://bugzil.la/2016369))。

## 実験的なウェブ機能

以下の機能は Firefox 150 で導入しましたが、デフォルトで無効です。
これらを実験するには、`about:config` ページで適切な設定項目を検索して `true` に設定してください。
[実験的機能](/ja/docs/Mozilla/Firefox/Experimental_features) のページで、さらに多くの機能を確認できます。

- **`attr()` CSS 関数の名前空間つき属性**: `layout.css.attr.enabled`

  {{cssxref("attr")}} CSS 関数が [名前空間つき属性](/ja/docs/Web/CSS/Reference/Values/attr#namespaces) を受け入れるようになりました。これにより [SVG](/ja/docs/Web/SVG) など [XML](/ja/docs/Web/XML) ベースの言語の要素から属性を取得して、それに従ってスタイルを適用できます ([Firefox bug 2014060](https://bugzil.la/2014060))。

- **`@container style()` クエリー** (Nightly): `layout.css.style-queries.enabled`

  [`@container`](/ja/docs/Web/CSS/Reference/At-rules/@container) CSS アットルールは [`style()`](/ja/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) クエリーをサポートします。ここでは `style()` クエリーの入れ子をサポートするように更新しました。([Firefox bug 2014098](https://bugzil.la/2014098))。

- **段組みコンテナーおよび印刷時の絶対配置要素**: `layout.abspos.fragmentainer-aware-positioning.enabled`

  [段組みコンテナー](/ja/docs/Web/CSS/Guides/Multicol_layout) の内部や印刷時に、絶対配置要素が正しく配置および分割されるようになりました。この改良によりほかのブラウザーとの相互運用性が向上して、テキストの重なりやコンテンツの欠落などのレイアウトの不具合を防ぐことができます ([Firefox bug 2018797](https://bugzil.la/2018797))。

- **スコープつきカスタム要素レジストリー**: `dom.scoped-custom-element-registries.enabled`

  {{domxref("Document")}}、{{domxref("Element")}}、{{domxref("ShadowRoot")}} で {{domxref("CustomElementRegistry","customElementRegistry")}} プロパティをサポートしました。
  これは [スコープつきカスタム要素レジストリー](/ja/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) を定義できます ([Firefox bug 2018900](https://bugzil.la/2018900))。

- **複数のインポートマップ**: `dom.multiple_import_maps.enabled`

  [複数のインポートマップ](/ja/docs/Web/HTML/Reference/Elements/script/type/importmap#merging_multiple_import_maps) は、開発者が JavaScript モジュールを構造化や読み込みするときの柔軟性を向上します ([Firefox bug 1916277](https://bugzil.la/1916277))。
