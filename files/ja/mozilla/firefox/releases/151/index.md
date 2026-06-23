---
title: Firefox 151 release notes for developers
short-title: Firefox 151
slug: Mozilla/Firefox/Releases/151
l10n:
  sourceCommit: 681ee4beb90b7e0d001f8938df41d5af0f602fe7
---

このページでは、開発者に影響する Firefox 151 の変更点をまとめています。
Firefox 151 は、米国時間 [2026 年 5 月 19 日](https://whattrainisitnow.com/release/?version=151) にリリースされました。

## ウェブ開発者向けの変更点一覧

### HTML

- [`shadowrootslotassignment` 属性](/ja/docs/Web/HTML/Reference/Elements/template#shadowrootslotassignment) を {{htmlelement("template")}} 要素でサポートしました。シャドウルートのスロット割り当て動作を宣言的に定義できます。
  この属性は、JavaScript で {{domxref("ShadowRoot.slotAssignment")}} または {{domxref("HTMLTemplateElement.shadowRootSlotAssignment")}} に反映されます ([Firefox bug 2031295](https://bugzil.la/2031295)、[Firefox bug 2023824](https://bugzil.la/2023824))。

### CSS

- [`@container`](/ja/docs/Web/CSS/Reference/At-rules/@container) CSS アットルールは [`style()`](/ja/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#コンテナースタイルクエリー) クエリーをサポートします。これはコンテナーが有効な CSS 宣言、CSS プロパティ、カスタムプロパティを保持しているかを確認して、その結果に従って子孫にスタイルを適用することができます ([Firefox bug 2016929](https://bugzil.la/2016929)、[Firefox bug 2019254](https://bugzil.la/2019254)、[Firefox bug 2024601](https://bugzil.la/2024601)、[Firefox bug 2030645](https://bugzil.la/2030645))。

- {{cssxref("position-anchor")}} CSS プロパティで値 `normal` (既定値) をサポートしました。これにより {{cssxref("position-area")}} プロパティとのマッチングが可能になり、`position-area` プロパティを更新すると `position-anchor` プロパティも同様に更新されます ([Firefox bug 2030351](https://bugzil.la/2030351))。

### JavaScript

変更なし。

### API

- {{domxref("Sanitizer.replaceElementWithChildren()")}} メソッドが、([Firefox 150](/ja/docs/Mozilla/Firefox/Releases/150#api) で不可になった {{htmlelement("html")}} に加えて) SVG [名前空間](/ja/docs/Web/API/Sanitizer/replaceElementWithChildren#namespace) で置き換えられる要素が {{svgelement("svg")}} である場合、あるいは MathML 名前空間で置き換えられる要素が {{mathmlelement("math")}} である場合に `false` を返すようになりました ([Firefox bug 2032359](https://bugzil.la/2032359))。
- [Document Picture-in-Picture API](/ja/docs/Web/API/Document_Picture-in-Picture_API) をデスクトップ版でサポートしました。
  これは、任意の HTML コンテンツを収められる [最前面表示ウィンドウ](/ja/docs/Web/API/Document_Picture-in-Picture_API#how_does_it_work) を開くことができます。
  これはビデオ会議の参加者を表示するストリームのセット、ストックティッカー、カウントダウンタイマーなど、ユーザーが起動ページ (またはブラウザー) から切り離して表示したい任意のコンテンツを表示するために使用できます ([Firefox bug 2006594](https://bugzil.la/2006594))。
- キャンバスで描画するコンテンツの言語を設定するために、{{domxref("CanvasRenderingContext2D.lang")}} プロパティをサポートしました。
  DOM キャンバスは関連づけられた {{htmlelement("canvas")}} 要素の `lang` 属性からこのコンテキストを継承しますが、これは `<canvas>` に関連づけられる前にレンダリングされる可能性があるオフスクリーンのキャンバスにコンテキストを設定する時に役立ちます ([Firefox bug 1943070](https://bugzil.la/1943070))。
- [`options.keyboardLock`](/ja/docs/Web/API/Element/requestFullscreen#keyboardlock) プロパティを、{{domxref("Element.requestFullscreen()")}} のオプションとして渡すことが可能になりました。要素を全画面モードで表示しているときに、ウェブサイトからキーボードのロックを要求できます。
  これは <kbd>Esc</kbd> キーによる要素の全画面表示の解除を無効にする (代わりに長押しが必要です)、および以前から予約されていたいくつかのブラウザーのショートカットキーに介入してデフォルトのアクションを抑止することができます ([Firefox bug 2032302](https://bugzil.la/2032302))。
- {{domxref("GPUSupportedLimits")}} の `maxStorageBuffersInFragmentStage`、`maxStorageBuffersInVertexStage`、`maxStorageTexturesInFragmentStage`、`maxStorageTexturesInVertexStage` プロパティを部分的にサポートしました。
  これらのプロパティは、`maxStorageBuffersPerShaderStage` および `maxStorageTexturesPerShaderStage` の制限値を報告します。
  デバイスを作成するときにステージ*単位*の制限値として要求した値は無視されます ([Firefox bug 2006720](https://bugzil.la/2006720))。
- [`@container`](/ja/docs/Web/CSS/Reference/At-rules/@container) アットルールでカンマ区切りによる複数のコンテナー条件をサポートしたことを反映して、{{domxref("CSSContainerRule.conditions")}} プロパティをサポートしました。
  `condition` プロパティは対応する `@container` をオブジェクトの配列として反映しており、それぞれのオブジェクトがひとつのコンテナー条件を表します ([Firefox bug 2022827](https://bugzil.la/2022827))。
- [Web Serial API](/ja/docs/Web/API/Web_Serial_API) をデスクトップ環境でサポートしました。シリアル通信をサポートするマイクロコントローラーを制御できます。
  これにより、たとえば ESP デバイス、BBCmicro:bit、Raspberry Pi Pico、3D プリンター、CNC 機械装置などサポートされているデバイスの、マイクロコントローラーのプログラムやボードの開発ができます。
  API を使用するには、ウェブサイトのユーザーによる [合成的に生成されたサイト権限アドオン](https://support.mozilla.org/kb/site-permission-add-ons) のインストールが必要です。これは WebMIDI へのアクセスを安全に管理するために使用する方法と同じです ([Firefox bug 2029625](https://bugzil.la/2029625))。

### WebDriver への適合 (WebDriver BiDi, Marionette)

#### 一般

- `touch` サブタイプのポインターアクションで `altitudeAngle` および `azimuthAngle` をサポートしました。これらのプロパティにより、ポインターが表面に接触する角度やその回転方向を指定することで、正確な角度方向データを伴うタッチ操作をシミュレーションできます ([Firefox bug 2022644](https://bugzil.la/2022644))。
- コンテンツページから発生した `UnknownError` DOM 例外が、誤って WebDriver の内部エラーとして扱われる不具合を修正しました ([Firefox bug 2032387](https://bugzil.la/2032387))。

#### WebDriver BiDi

- `browser.setClientWindowState` コマンドを実装しました。このコマンドは最大化、最小化、全画面、通常といった、ブラウザーウィンドウの OS レベルの状態をクライアントが変更することができます。また、ウィンドウの位置変更やサイズ変更も可能です ([Firefox bug 1855028](https://bugzil.la/1855028))。
- `script.getRealms` に、ワーカーレルム (専用ワーカー、共有ワーカー、サービスワーカー) のサポートを追加しました。このコマンドはウィンドウのコンテキストに加えて、ワーカースクリプトのレルム情報を返すようになりました ([Firefox bug 2016097](https://bugzil.la/2016097))。
- すべての Console API メッセージの `log.entryAdded` イベントに、最上位のスタックフレームを含めるようになりました ([Firefox bug 1941813](https://bugzil.la/1941813))。
- `log.entryAdded` イベントの `text` フィールドを、Firefox 開発ツールの動作と Google Chrome の WebDriver BiDi 実装により適合させるために改良しました ([Firefox bug 2005054](https://bugzil.la/2005054))。
- ネットワークイベントの Cookie が、`name` および `value` だけでなくすべてのプロパティを含むように修正しました ([Firefox bug 1887118](https://bugzil.la/1887118))。
- `network.getData` コマンドがリダイレクトでタイムアウトする問題を修正しました ([Firefox bug 2009916](https://bugzil.la/2009916))。
- `browsingContext.reload` コマンドが、ナビゲートされた iframe の位置情報をリセットしない問題を修正しました ([Firefox bug 2023917](https://bugzil.la/2023917))。
- プロキシーが指定されていない場合に、`session.new` コマンドの応答から空の `proxy` 機能を削除しました ([Firefox bug 1916463](https://bugzil.la/1916463))。

#### Marionette

- ヘッドレスモードにおいて、Linux Wayland 環境でブラウザーウィンドウの位置変更が可能になりました ([Firefox bug 2023978](https://bugzil.la/2023978))。

## アドオン開発者向けの変更点一覧

- {{WebExtAPIRef("webRequest.onErrorOccurred")}} イベントが、`NS_ERROR_NET_ON_` または `NS_ERROR_NET_UNKNOWN_` から始まる文字列に代わって `NS_ERROR_NET_ON_RECEIVING_FROM` にフォールバックするようになりました。この変更は、`onErrorOccurred` イベントのパフォーマンスや信頼性の向上の一環です ([Firefox bug 1881986](https://bugzil.la/1881986))。
- 分割ビューのタブのひとつを含めて {{WebExtAPIRef("tabs.group()")}} および {{WebExtAPIRef("tabs.ungroup()")}} を呼び出したときに、分割ビューを正しく追加および削除するようになりました。以前は呼び出しが失敗するか、分割ビューを分離していました ([Firefox bug 2029099](https://bugzil.la/2029099))。
- 分割ビューのタブのひとつを含めて {{WebExtAPIRef("tabs.move()")}} を呼び出したとき、分割ビューを正しく右へ移動するようになりました。以前は左またはタブ一覧の末尾にだけ移動しました ([Firefox bug 2027855](https://bugzil.la/2027855))。

## 実験的なウェブ機能

以下の機能は Firefox 151 で導入しましたが、デフォルトで無効です。
これらを実験するには、`about:config` ページで適切な設定項目を検索して `true` に設定してください。
[実験的機能](/ja/docs/Mozilla/Firefox/Experimental_features) のページで、さらに多くの機能を確認できます。

- **`@container style()` の範囲指定構文クエリー**: `layout.css.attr.enabled`

  [`@container`](/ja/docs/Web/CSS/Reference/At-rules/@container) CSS アットルールの [`style()`](/ja/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) クエリーで _範囲指定構文_ をサポートしました。これはコンテナーに有効な CSS カスタムプロパティがあることを確認して、その値を `>`、`<`、`>=`、`<=` などの比較演算子で比較して、その結果に応じて子要素へスタイルを適用できます ([Firefox bug 2024601](https://bugzil.la/2024601))。

- **`field-sizing` プロパティ**: `layout.css.field-sizing.enabled`

  {{cssxref("field-sizing")}} CSS プロパティは、フォームコントロール要素のサイズ設定の動作を制御できます。このプロパティは値が 2 つあり、`content` は要素が内容物に合わせてサイズを調整できます。また `fixed` は、要素に固定のサイズを設定します ([Firefox bug 1977176](https://bugzil.la/1977176))。

- **MathML で `<a>` 以外の要素の `href` を無効化**: `mathml.href_link_on_non_anchor_element.disabled`

  この設定を有効にすると [MathML Core specification](https://w3c.github.io/mathml-core/#the-a-element) に準拠して、`<a>` 以外の MathML 要素で [`href`](/ja/docs/Web/MathML/Reference/Global_attributes/href) グローバル属性がハイパーリンクを作成しなくなります ([Firefox bug 2026848](https://bugzil.la/2026848))。

- **入れ子のスクロールバー領域の修正**: `layout.css.fake-webkit-scrollbar.enabled`

  この実装は、スクロール可能なコンテンツに到達できない問題を修正するために追加しました。スクロールバーを `display: none;` または `width: 0;` に設定すると、入れ子になったスクロール可能な領域のスクロールバーが互いに重なり合い、一部のコンテンツに到達できなくなる場合があります ([Firefox bug 1977511](https://bugzil.la/1977511))。

- **`<timeline-range-name>` の値**: `layout.css.scroll-driven-animations.enabled`

  {{cssxref("animation-range-start")}}、{{cssxref("animation-range-end")}} CSS プロパティおよび {{cssxref("animation-range")}} ショートハンドプロパティで [`<timeline-range-name>`](/ja/docs/Web/CSS/Reference/Values/timeline-range-name) の値をサポートしました。これらの [`<timeline-range-name>`](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#timeline_range_names) の値は、スクロール連動アニメーションをどのセグメントで実行するかを正確に指定できます ([Firefox bug 1804775](https://bugzil.la/1804775))。

- **GeometryUtils のメソッド: `convertPointFromNode()`、`convertRectFromNode()`、`convertQuadFromNode()`**: `layout.css.convertFromNode.enabled`

  GeometryUtils のメソッド `convertPointFromNode()`、`convertRectFromNode()`、`convertQuadFromNode()` は、Firefox Nightly ではデフォルトで無効になりました ([Firefox bug 2026051](https://bugzil.la/2026051))。

- **GeometryUtils のメソッド: `getBoxQuads()`**: `layout.css.getBoxQuads.enabled`

  GeometryUtils のメソッド `getBoxQuads()` は、Firefox Nightly ではデフォルトで無効になりました ([Firefox bug 2026051](https://bugzil.la/2026051))。
