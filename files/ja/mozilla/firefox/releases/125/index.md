---
title: Firefox 125 for developers
slug: Mozilla/Firefox/Releases/125
l10n:
  sourceCommit: 08ef601955d7fc92a9a4c6d6c047854b5aef723d
---

このページでは、開発者に影響する Firefox 125 の変更点をまとめています。Firefox 125 は、米国時間 [2024 年 4 月 16 日](https://whattrainisitnow.com/release/?version=125) にリリースされました。

## ウェブ開発者向けの変更点一覧

### HTML

変更なし。

### CSS

- {{cssxref("align-content")}} プロパティを、`display: block;` レイアウトで動作するように更新しました。これは `flex` や `grid` から `block` まですべてのレイアウト位置で、開発者はコンテナーを `flex` や `grid` に変換することなくブロックレベル要素を整列できるようになります ([Firefox bug 1882853](https://bugzil.la/1882853))。
- CSS の [`transform-box`](/ja/docs/Web/CSS/Reference/Properties/transform-box) プロパティで、値 `content-box` および `stroke-box` をサポートしました。値 `content-box` は [content box](/ja/docs/Learn_web_development/Core/Styling_basics/Box_model#ボックスの構成) を参照ボックスとして使用します。また、値 `stroke-box` は SVG の図形を包含するストロークのバウンディングボックスを参照ボックスとして使用します ([Firefox bug 1868374](https://bugzil.la/1868374))。
- [`content-visibility`](/ja/docs/Web/CSS/Reference/Properties/content-visibility) CSS プロパティの値 `auto` をデフォルトで有効にしました。これは、[ユーザーとの関連性](/ja/docs/Web/CSS/Guides/Containment#relevant_to_the_user) がない場合にコンテンツのレンダリングを省くことを可能にします。([Firefox bug 1874874](https://bugzil.la/1874874))

### JavaScript

- 開発者が文字列でロケールに依存したテキスト分割を実行できる {{jsxref("Intl.Segmenter")}} をサポートしました。
  たとえば `Intl.Segmenter("ja-JP", { granularity: "word" })` で、単語を分けるためにスペースを使用しない言語でテキストを単語に分割できます。
  また、文字列を書記素や文に区切ることもできます ([Firefox bug 1423593](https://bugzil.la/1423593)、[Firefox bug 1883914](https://bugzil.la/1883914))。

### API

- アクションメニュー、独自の "トースト" 通知、フォーム要素の候補、コンテンツ選択などに使用できる "ポップオーバー" UI の作成を可能にする [Popover API](/ja/docs/Web/API/Popover_API) を完全にサポートしました。
  ポップオーバーやそれを起動するボタンおよび入力は、HTML 属性や JavaScript を使用して作成、および CSS を使用してスタイル設定できます。

  以下の Web API を実装しました:
  - [`HTMLButtonElement`](/ja/docs/Web/API/HTMLButtonElement) の [`popoverTargetElement`](/ja/docs/Web/API/HTMLButtonElement/popoverTargetElement) および [`popoverTargetAction`](/ja/docs/Web/API/HTMLButtonElement/popoverTargetAction) プロパティ。
  - [`HTMLInputElement`](/ja/docs/Web/API/HTMLInputElement) の [`popoverTargetElement`](/ja/docs/Web/API/HTMLInputElement/popoverTargetElement) および [`popoverTargetAction`](/ja/docs/Web/API/HTMLInputElement/popoverTargetAction) プロパティ。
  - [`HTMLElement`](/ja/docs/Web/API/HTMLElement) の [`popover`](/ja/docs/Web/API/HTMLElement/popover) プロパティ、および [`hidePopover()`](/ja/docs/Web/API/HTMLElement/hidePopover)、[`showPopover()`](/ja/docs/Web/API/HTMLElement/showPopover)、[`togglePopover()`](/ja/docs/Web/API/HTMLElement/togglePopover) メソッド、および ([`ToggleEvent`](/ja/docs/Web/API/ToggleEvent) 型の) [`beforetoggle`](/ja/docs/Web/API/HTMLElement/beforetoggle_event)、[`toggle_event`](/ja/docs/Web/API/HTMLElement/toggle_event) イベント。

  ポップオーバーと共に使用する、以下の CSS 擬似クラスをサポートしました:
  - [`:popover-open`](/ja/docs/Web/CSS/Reference/Selectors/:popover-open)
  - [`::backdrop`](/ja/docs/Web/CSS/Reference/Selectors/::backdrop) を、ポップオーバーをサポートするように拡張しました

  以下の HTML グローバル属性をサポートしました:
  - [`popovertarget`](/ja/docs/Web/HTML/Reference/Elements/button#popovertarget)
  - [`popovertargetaction`](/ja/docs/Web/HTML/Reference/Elements/button#popovertargetaction)

  ([Firefox bug 1823757](https://bugzil.la/1823757)、[Firefox bug 1866993](https://bugzil.la/1866993))

- {{domxref("RTCIceTransport")}} の {{domxref("RTCIceTransport/state","state")}} および {{domxref("RTCIceTransport/gatheringState","gatheringState")}} プロパティと、これらに関連づけられる {{domxref("RTCIceTransport/statechange_event","statechange")}} および {{domxref("RTCIceTransport/gatheringstatechange_event","gatheringstatechange")}} イベントをサポートしました。また、{{domxref("RTCDtlsTransport.iceTransport")}} プロパティ ({{domxref("RTCDtlsTransport")}} の基礎をなす `RTCIceTransport` を返します) もサポートしました。
  これらは、{{domxref("RTCPeerConnection")}} の {{domxref("RTCPeerConnection.iceGatheringState","iceGatheringState")}} および {{domxref("RTCPeerConnection.connectionState","connectionState")}} プロパティで提供されるものよりとてもきめ細かいモニタリングを可能にします。
  ([Firefox bug 1811912](https://bugzil.la/1811912))
- {{domxref("Element.ariaBrailleLabel")}} および {{domxref("Element.ariaBrailleRoleDescription")}} をサポートしました。それぞれ、ARIA のグローバル HTML 属性である [`aria-braillelabel`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-braillelabel) および [`aria-brailleroledescription`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-brailleroledescription) を反映します ([Firefox bug 1861201](https://bugzil.la/1861201))。

- キャンバスが一時的に自身の 2D コンテキストを失ったとき、ウェブアプリケーションが体裁よく回復できるようになりました。これはキャンバスが GPU でハードウェアアクセラレーションされていて、GPU のドライバーがクラッシュしたときに発生する可能性があります ([Firefox bug 1887729](https://bugzil.la/1887729))。
  以下は、キャンバスのコンテキストが失われたり回復したりするときのイベントの詳細情報です:
  - アプリケーションで [`contextlost`](/ja/docs/Web/API/HTMLCanvasElement/contextlost_event) および [`contextrestored`](/ja/docs/Web/API/HTMLCanvasElement/contextrestored_event) イベントを監視できます。これらはそれぞれ、コンテキストが失われたり回復したりしたときに [`HTMLCanvasElement`](/ja/docs/Web/API/HTMLCanvasElement) で発生します。また、[`CanvasRenderingContext2D.isContextLost()`](/ja/docs/Web/API/CanvasRenderingContext2D/isContextLost) を使用してコンテキストを確認することもできます。
  - `contentlost` が発生した後、ブラウザーはデフォルトで失われたコンテキストの再開を試みますが、コードでイベントをキャンセルするとこの動作を抑止できます。
  - オフスクリーンキャンバスも同じ方法で監視できますが、[`OffScreenCanvas`](/ja/docs/Web/API/OffscreenCanvas) の [`contextlost`](/ja/docs/Web/API/OffscreenCanvas/contextlost_event) および [`contextrestored`](/ja/docs/Web/API/OffscreenCanvas/contextrestored_event) イベントを [`OffscreenCanvasRenderingContext2D.isContextLost()`](/ja/docs/Web/API/OffscreenCanvasRenderingContext2D#context) とともに使用します。

- `<template>` 要素の [`shadowrootclonable`](/ja/docs/Web/HTML/Reference/Elements/template#shadowrootclonable) 属性、およびこれを反映して `HTMLTemplateElement` インターフェイスの [`shadowRootClonable`](/ja/docs/Web/API/HTMLTemplateElement/shadowRootClonable) プロパティをサポートしました。
  これらは、[`<template>`] 要素を使用して宣言的に作成した [`ShadowRoot`](/ja/docs/Web/API/ShadowRoot) の [`clonable`](/ja/docs/Web/API/ShadowRoot/clonable) プロパティを設定します
  ([Firefox bug 1880188](https://bugzil.la/1880188))。

- [`Clipboard`](/ja/docs/Web/API/Clipboard) インターフェイスの [`readText()`](/ja/docs/Web/API/Clipboard/readText) メソッドが、システムのクリップボードからテキストの非同期読み取りをサポートしました。
  異なるオリジンのページから提供されたクリップボードデータを読み取るときは、ユーザーに貼り付けのコンテキストメニューを表示します ([Firefox bug 1877400](https://bugzil.la/1877400))。

#### Media、WebRTC、Web Audio

- [AV1](/ja/docs/Web/Media/Guides/Formats/Video_codecs#av1) コーデックを [Encrypted Media Extensions](/ja/docs/Web/API/Encrypted_Media_Extensions_API) でサポートしました。動画ストリーミング提供者から、より高品質な再生が可能になります ([Firefox bug 1601817](https://bugzil.la/1601817))。

#### 廃止

- [`SVGAElement.text`](/ja/docs/Web/API/SVGAElement#svgaelement.text) プロパティを削除しました。{{domxref("Node.textContent", "textContent")}} プロパティ (`Node` から継承) が広くサポートされており、代わりに使用するべきです ([Firefox bug 1880689](https://bugzil.la/1880689))。

### WebAssembly

- Wasm モジュールで、複数の独立した線形メモリーの使用をサポートしました。
  複数のメモリーは、モジュール間のより効率的な相互運用性と、将来の Wasm 標準向けのポリフィルを可能にします。これらはたとえば、内部データと共有データ、一時的なデータと持続的なデータ、スレッド間で共有が必要なデータを分離したメモリーとして作成するために使用できます。
  メモリーは JavaScript で作成して Wasm モジュールにインポートする、または Wasm モジュールで作成してエクスポートすることができます。
  Wasm インスタンス内にあるそれぞれの新規線形メモリーに、ゼロから始まる連番のインデックスが与えられます。
  WebAssembly の [メモリー命令](/ja/docs/WebAssembly/Reference/Memory) で、操作するメモリーを参照するためにインデックスを使用します。インデックスを指定しない場合は、最初のメモリーが既定値として定義されます。
  詳しくは _WebAssembly テキスト形式の理解_ で [WebAssembly メモリー](/ja/docs/WebAssembly/Guides/Understanding_the_text_format#webassembly_メモリー) をご覧ください ([Firefox bug 1860816](https://bugzil.la/1860816))。

### WebDriver conformance (WebDriver BiDi, Marionette)

#### 一般

- エンドポイントノードの既定の User-Agent の値を特定する ["userAgent" capability](https://w3c.github.io/webdriver/#capabilities) をサポートしました ([Firefox bug 1885495](https://bugzil.la/1885495))。

#### WebDriver BiDi

- `type="file"` である `<input>` 要素のファイルを設定または更新できる、[input.setFiles](https://w3c.github.io/webdriver-bidi/#command-input-setFiles) コマンドをサポートしました ([Firefox bug 1855040](https://bugzil.la/1855040))。
- Cookie を削除する、[storage.deleteCookies](https://w3c.github.io/webdriver-bidi/#command-storage-deleteCookies) コマンドをサポートしました ([Firefox bug 1854581](https://bugzil.la/1854581))。
- Cookie 関連コマンドの "partition" 引数のフィールドとして "userContext" をサポートしました ([Firefox bug 1875255](https://bugzil.la/1875255))。
- [storage.getCookies](https://w3c.github.io/webdriver-bidi/#command-storage-getCookies) が、指定した "sourceOrigin" で想定されるすべての Cookie を取得しない不具合を修正しました ([Firefox bug 1884647](https://bugzil.la/1884647))。
- リモートプロトコルが WebDriver BiDi のみである場合に、推奨設定が適用されない不具合を修正しました。すなわち、CDP が有効であったとしても無効化されます ([Firefox bug 1882748](https://bugzil.la/1882748))。
- 新しいタブの作成や切り替えが、`visibilityState` が更新されるのを待たない不具合を修正しました ([Firefox bug 1877469](https://bugzil.la/1877469))。

## アドオン開発者向けの変更点一覧

- {{WebExtAPIRef("proxy.ProxyInfo")}} の `proxyAuthorization` プロパティの内容を、[CONNECT](/ja/docs/Web/HTTP/Reference/Methods/CONNECT) リクエストの一部として (すでにサポートする HTTPS プロキシー向けに加えて) HTTP プロキシーに送信する {{httpheader("Proxy-Authorization")}} リクエストヘッダーに渡すようになりました ([Firefox bug 1794464](https://bugzil.la/1794464))。

## 実験的なウェブ機能

以下の機能は Firefox 125 で新たに導入しましたが、開発者向けリリースまたは設定した場合に限り使用できます。これらを試すには、`about:config` ページで適切な設定項目を検索して有効化または無効化されているかを確認します。これらの機能につて詳しく学ぶには、[実験的機能](/ja/docs/Mozilla/Firefox/Experimental_features) のページをご覧ください。

- **CSS `transition-behavior`:** `layout.css.transition-behavior.enabled`。
  {{cssxref("transition-behavior")}} プロパティは、Nightly リリースにおいて既定で有効です。
  制作者はこのプロパティで、[離散アニメーション](/ja/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete) のプロパティに CSS トランジションを適用するかを制御できます ([Firefox bug 1882408](https://bugzil.la/1882408)、[Firefox bug 1805727](https://bugzil.la/1805727))。

- **区分コンテンツ内の `<h1>` のユーザーエージェントスタイル:** `layout.css.h1-in-section-ua-styles.enabled`。

  [区分要素](/ja/docs/Web/HTML/Guides/Content_categories#sectioning_content) `<article>`、`<aside>`、`<nav>`、`<section>` の内部にある `<h1>` 見出しのフォントサイズは小さくなりません。HTML 仕様書からアウトラインのアルゴリズムが [削除された](https://github.com/whatwg/html/pull/7829) ため、区分要素の内部にある `<h1>` のユーザーエージェントスタイルは適切でなくなりました ([Firefox bug 1883896](https://bugzil.la/1883896))。

  > **注記:** この機能の設定は逆に機能します。Nightly ビルドでは `false` に設定しており、区分要素の内部にある見出しのユーザーエージェントスタイルを削除します。その他すべてのチャンネルでは `true` に設定しており、入れ子になった見出し用の既存のユーザーエージェントスタイルを維持します。

## 過去のバージョン

{{Firefox_for_developers}}
