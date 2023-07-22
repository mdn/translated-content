---
title: Firefox 4 for developers
slug: Mozilla/Firefox/Releases/4
---

Firefox 4 （6 月後半にベータ版リリースが予定されています）では、パフォーマンスが向上し、 HTML 5 やその他の革新的な Web 技術のさらなるサポートが追加され、さらには、セキュリティも改善しています。 この記事では、この次期リリースについてのとっかかりの情報と、 Web 開発者、アドオン開発者、そして、Gecko プラットフォーム開発者向けに利用可能になる機能の一覧を提供します。

これらの機能の多くはすでに [Firefox 4 beta](http://www.mozilla.com/en-US/firefox/beta/) リリース、もしくは（冒険心にあふれているなら）[ナイトリー trunk ビルド](http://nightly.mozilla.org/) で試すことできます。

> **メモ:** この記事は作成中であり、このページからリンクされている記事もまた同様です。多くの記事名が仮名であり、いくつかのトピックは複数の記事に分割されるかもしれません。

## Web 開発者向け機能

Gecko は現在 [HTML5](/ja/docs/HTML/HTML5) パーサーを利用しています。それはバグが修正され、相互運用性が改善され、また、パフォーマンスが向上されたものです。また、HTML マークアップでコンテンツに [SVG](/ja/docs/SVG) と [MathML](/ja/docs/MathML) を直接埋め込むことも可能にします。

### HTML

- [HTML5 パーサー入門](/ja/docs/HTML/HTML5/HTML5_Parser)
  - : HTML5 パーサーが意味することと、どのように SVG と MathML をコンテンツにインラインで埋め込むかの概説。
- [HTML5 におけるフォーム](/ja/docs/HTML/HTML5/Forms_in_HTML5)
  - : HTML5 における Web フォームの改善の概説。これらの変更点には [`<input>`](/ja/docs/Web/HTML/Element/input) 要素における入力種類の追加、データバリデーションなどが含まれています。
- [HTML5 Sections](/ja/docs/Sections_and_outlines_of_an_HTML5_document)
  - : Gecko は文書におけるセクションに関する新しい HTML5 要素をサポートします。: [`<article>`](/ja/docs/Web/HTML/Element/article)、[`<section>`](/ja/docs/Web/HTML/Element/section)、[`<nav>`](/ja/docs/Web/HTML/Element/nav)、[`<aside>`](/ja/docs/Web/HTML/Element/aside)、 [`<hgroup>`](/ja/docs/Web/HTML/Element/hgroup)、[`<header>`](/ja/docs/Web/HTML/Element/header) および [`<footer>`](/ja/docs/Web/HTML/Element/footer)。
- [HTML5 の hidden 属性](/ja/docs/HTML/Global_attributes#attr-hidden)
  - : この属性は、すべての要素に共通であり、Web ページでユーザに現在は関係しないコンテントを隠すために用いられます。
- その他の HTML5 要素
  - : Gecko は次の新しい HTML5 要素もサポートします。: [`<mark>`](/ja/docs/Web/HTML/Element/mark)、[`<figure>`](/ja/docs/Web/HTML/Element/figure) および [`<figcaption>`](/ja/docs/Web/HTML/Element/figcaption)。
- [WebSocket](/ja/docs/WebSockets)
  - : Web アプリケーションとサーバーの間でリアルタイムコミュニケーションを行うための WebSocket API を利用するためのガイド。

#### Canvas improvements

The following changes were made to the [`CanvasRenderingContext2D`](/ja/docs/Web/API/CanvasRenderingContext2D) interface to bring our [`<canvas>`](/ja/docs/Web/HTML/Element/canvas) implementation closer to being in line with the specification:

- Specifying a negative radius when calling `arc()` now correctly throws an `INDEX_SIZE_ERR` exception.
- Specifying non-finite values when calling `createLinearGradient()` and `createRadialGradient()` now throws `NOT_SUPPORTED_ERR` instead of `SYNTAX_ERR`.
- Setting `miterLimit` to a negative value no longer throws an exception; instead, it properly ignores non-positive values.
- Setting `lineWidth` to a negative value no longer throws an exception; instead, it properly ignores non-positive values.
- The `putImageData()` method now supports the optional parameters `dirtyX`, `dirtyY`, `dirtyWidth`, and `dirtyHeight`.

#### 小さな HTML の変更

- [`<textarea>`](/ja/docs/Web/HTML/Element/textarea) 要素をデフォルトでサイズ変更できるようになりました。これを無効にするために [`resize`](/ja/docs/Web/CSS/resize) CSS プロパティが利用できます。
- `canvas.getContext` および `canvas.toDataURL` が認識できない引数を指定して呼び出したときに例外を投げなくなりました。
- [`<canvas>`](/ja/docs/Web/HTML/Element/canvas) 要素に Mozilla 固有の `mozGetAsFile()` メソッドが追加されました。これを用いることで、Canvas の内容である画像を含んだメモリベースのファイルを保持できます。詳細は [`HTMLCanvasElement`](/ja/docs/Web/API/HTMLCanvasElement) を参照してください。
- `canvas2dcontext.lineCap` および `canvas2dcontext.lineJoin` が認識できない値を設定したときに例外を投げなくなりました。
- `canvas2dcontext.globalCompositeOperation` が認識できない値を設定したときに例外を投げなくなりました。また、非標準の値 `darker` をサポートしなくなりました。
- 他のブラウザでは実装されておらず、非推奨 な要素である [`<spacer>`](/ja/docs/Web/HTML/Element/spacer) 要素のサポートが無くなりました。
- The [`<isindex>`](/ja/docs/Web/HTML/Element/isindex) 要素が、[`document.createElement()`](/ja/docs/Web/API/Document/createElement) メソッドによって作成されたときに、 一切プロパティもメソッドも持たない単純な要素として作成されるようになりました。
- Gecko に [`<input>`](/ja/docs/Web/HTML/Element/input) 要素での `click()`メソッドの呼び出しが追加されました。このメソッドを用いることでファイル選択ダイアログが開けます。[Web アプリケーションからファイルを利用する](/ja/docs/Using_files_from_web_applications) の記事内の [例](/ja/docs/Using_files_from_web_applications#Using_hidden_file_input_elements_using_the_click%28%29_method) を参照してください。
- [`<input>`](/ja/docs/Web/HTML/Element/input) 要素に新しい [`mozactionhint`](/ja/docs/HTML/Element/Input#attr-mozactionhint) 属性が追加されました。これを用いることで仮想キーボード上でのエンターキーのラベルを指定できます。
- [`<iframe>`](/ja/docs/Web/HTML/Element/iframe)、[`<noembed>`](/ja/docs/Web/HTML/Element/noembed)、および [`<noframes>`](/ja/docs/Web/HTML/Element/noframes) 要素内の [`<script>`](/ja/docs/Web/HTML/Element/script) 要素が実行されるようになりました。以前のバージョンの Firefox ではこれらの要素内での実行はされませんでした。これは仕様準拠であり、他のブラウザの挙動と合致します。

### CSS

- [CSS transitions](/ja/docs/CSS/CSS_transitions)
  - : 新しい CSS transitions サポートが Firefox 4 では利用できるようになりました。
- CSS での算出値
  - : [`-moz-calc`](/ja/docs/Web/CSS/-moz-calc) のサポートが追加されました。これを用いることで、[`<length>`](/ja/docs/Web/CSS/length) の値を数式で指定できます。
- セレクタのグルーピング
  - : セレクタをグループ化しコンビネータを分解する [`:-moz-any`](/ja/docs/Web/CSS/:-moz-any) がサポートされました。
- 背景画像の部分領域のサポート
  - : [`-moz-image-rect`](/ja/docs/Web/CSS/-moz-image-rect) 関数を用いることで、画像の一部分の領域 (subrectangle)を背景画像として利用できるようになります。
- CSS touch プロパティ群
  - : touch プロパティ群が追加されました。詳細と正式な記事名は後日追記予定です。
- [CSS 背景として任意の要素を使用する](/ja/docs/CSS/-moz-element)
  - : [`-moz-element`](/ja/docs/Web/CSS/-moz-element) CSS 関数と [`document.mozSetImageElement()`](/ja/docs/Web/API/Document/mozSetImageElement) DOM 関数を用いることで、任意の HTML 要素を背景として使用することができます。
- [プライバシーと :visited セレクタ](/ja/docs/CSS/Privacy_and_the_:visited_selector)
  - : CSS セレクタを用いた訪問済みリンクのスタイルについて取得できる情報が変更されました。これはいくつかの Web アプリケーションに影響するかもしれません。

#### 新しい CSS プロパティ

| プロパティ                                                                  | 説明                                                                     |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`-moz-font-feature-settings`](/ja/docs/Web/CSS/-moz-font-feature-settings) | OpenType フォントの高度な機能を変更できます。                            |
| [`-moz-tab-size`](/ja/docs/Web/CSS/-moz-tab-size)                           | テキストを描画するときのタブ文字 (U+0009) の幅を空白文字数で指定します。 |
| [`resize`](/ja/docs/Web/CSS/resize)                                         | サイズ変更可能な要素の方向を制御できます。                               |

#### 新しい CSS 擬似クラス

| 擬似クラス                                                        | 説明                                                                                                            |
| ----------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| [`:-moz-handler-crashed`](/ja/docs/Web/CSS/:-moz-handler-crashed) | プラグインがクラッシュした要素の表示に用いられます。                                                            |
| [`:-moz-placeholder`](/ja/docs/Web/CSS/:-moz-placeholder)         | フォームフィールドのガイドテキストに適用されます。                                                              |
| [`:-moz-submit-invalid`](/ja/docs/Web/CSS/:-moz-submit-invalid)   | 1 つ、もしくは、複数のフォームフィールドの入力が妥当でないときのフォームの送信ボタンに適用されます。            |
| [`:-moz-window-inactive`](/ja/docs/Web/CSS/:-moz-window-inactive) | アクティブでないウィンドウの要素に適用されます。                                                                |
| [`:invalid`](/ja/docs/Web/CSS/:invalid)                           | 入力が妥当でない [`<input>`](/ja/docs/Web/HTML/Element/input) フィールドに自動的に適用されます。                |
| [`:optional`](/ja/docs/Web/CSS/:optional)                         | `required` 属性を指定していない [`<input>`](/ja/docs/Web/HTML/Element/input) フィールドに自動的に適用されます。 |
| [`:required`](/ja/docs/Web/CSS/:required)                         | `required` 属性を指定している [`<input>`](/ja/docs/Web/HTML/Element/input) フィールドに自動的に適用されます。   |
| [`:valid`](/ja/docs/Web/CSS/:valid)                               | 入力が妥当であると判断された [`<input>`](/ja/docs/Web/HTML/Element/input) フィールドに自動的に適用されます。    |

#### 新しい CSS 擬似セレクタ

| 擬似セレクタ                                          | 説明                                                                             |
| ----------------------------------------------------- | -------------------------------------------------------------------------------- |
| [`:-moz-focusring`](/ja/docs/Web/CSS/:-moz-focusring) | Gecko がフォーカスインジケータを描画すべきとしている要素の見え方を指定できます。 |

#### 新しい CSS 関数

| 関数                                                  | 説明                                                                                                                                               |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`:-moz-any`](/ja/docs/Web/CSS/:-moz-any)             | セレクタをグループ化しコンビネータを分解できます。                                                                                                 |
| [`-moz-calc`](/ja/docs/Web/CSS/-moz-calc)             | `<length> の値を数式で指定できます。`                                                                                                              |
| [`-moz-element`](/ja/docs/Web/CSS/-moz-element)       | 任意の要素を [`background-image`](/ja/docs/Web/CSS/background-image) および [`background`](/ja/docs/Web/CSS/background) の背景として使用できます。 |
| [`-moz-image-rect`](/ja/docs/Web/CSS/-moz-image-rect) | 画像の一部分を [`background-image`](/ja/docs/Web/CSS/background-image) もしくは [`background`](/ja/docs/Web/CSS/background)で利用できます。        |

#### 改名された CSS プロパティ

| 旧名称                 | 新名称                                                | 備考                                                                                                                             |
| ---------------------- | ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `-moz-background-size` | [`background-size`](/ja/docs/Web/CSS/background-size) | `-moz-background-size` という名称はサポートされません。                                                                          |
| `-moz-border-radius`   | [`border-radius`](/ja/docs/Web/CSS/border-radius)     | 旧名称は、サイトを更新するための時間を考慮して、限られた期間サポートされます。描画の変更も仕様の最新版に適合するようになります。 |
| `-moz-box-shadow`      | [`box-shadow`](/ja/docs/Web/CSS/box-shadow)           |                                                                                                                                  |

#### 小さな CSS の変更

- [`text-shadow`](/ja/docs/Web/CSS/text-shadow) プロパティのぼかし範囲が 300 までに制限されるようになりました。これは健全さとパフォーマンスの理由によるものです。
- [`overflow`](/ja/docs/Web/CSS/overflow) プロパティがテーブルグループ要素 (`<thead>`、`<tbody>`、および `<tfoot>`) に適用されなくなりました。
- [`-moz-appearance`](/ja/docs/Web/CSS/-moz-appearance) プロパティが要素に境界のない Aero Glass の見た目を適用する `-moz-win-borderless-glass 値をサポートするようになりました。`
- [`-moz-device-pixel-ratio`](/ja/docs/CSS/Media_queries#-moz-device-pixel-ratio) メディア機能が追加されました。これを用いることで、[Media Query](/ja/docs/CSS/Media_queries) で用いられる、CSS ピクセルを基準としたデバイスのピクセル比率を指定できます。
- Gecko の [CSS 単位の](/ja/docs/CSS-2_Quick_Reference/Units) 扱いが他のブラウザにより良く適合するように、また、絶対的長さをデバイスの DPI を基準にした画面ピクセル数により的確に変換するように修正されました。

### グラフィックとビデオ

- [WebGL](/ja/docs/WebGL)
  - : 開発中の WebGL 標準が Firefox でサポートされました。
- [グラフィックパフォーマンスの最適化](/ja/docs/Optimizing_graphics_performance)
  - : Firefox 4 でグラフィックとビデオのパフォーマンスを最大限引き出すための Tips & Tricks。
- [WebM ビデオのサポート](/ja/docs/Media_formats_supported_by_the_audio_and_video_elements#WebM)
  - : 新しいオープンな [WebM](http://www.webmproject.org/) ビデオフォーマットが Gecko2.0 でサポートされます。このサポートは 6 月 9 日以降のナイトリーに含まれています。
- [SMIL による SVG アニメーション](/ja/docs/SVG/SVG_animation_with_SMIL)
  - : SVG の SMIL アニメーションのサポートが利用できるようになりました。[バグ 482402](https://bugzilla.mozilla.org/show_bug.cgi?id=482402 'FIXED: Enable "svg.smil.enabled" pref by default') を参照してください。
- 画像と CSS 背景としての SVG の利用
  - : SVG を [`<img>`](/ja/docs/Web/HTML/Element/img) 要素とともに、また、CSS の [`background-image`](/ja/docs/Web/CSS/background-image) で利用することができるようになりました。
- メディア要素での `buffered` 属性サポート
  - : [`<video>`](/ja/docs/Web/HTML/Element/video) および [`<audio>`](/ja/docs/Web/HTML/Element/audio) 要素での `buffered` 属性がサポートされました。これを用いることでメディアファイルでバッファリングされた範囲が判断可能になります。これをサポートするために [`TimeRanges`](/ja/docs/Web/API/TimeRanges) DOM インタフェースが実装されました。
- メディア要素での `preload` 属性
  - : HTML5 仕様から `preload` 属性が実装されました。これは以前実装された（そしてもうサポートされない）`autobuffer` 属性を置き換えものです。これは [`<video>`](/ja/docs/Web/HTML/Element/video) および [`<audio>`](/ja/docs/Web/HTML/Element/audio) 要素、同様に[`nsIDOMHTMLMediaElement`](/ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDOMHTMLMediaElement) インタフェースを実装した要素で利用できます。
- SVG text 位置指定の改善
  - : SVG [`<text>`](/ja/docs/Web/SVG/Element/text) and [`<tspan>`](/ja/docs/Web/SVG/Element/tspan) 要素で `x`、`y`、`dx`、および `dy` プロパティの値のためのリストを指定できるようになりました。これを用いることで、文字列中の各文字の位置を個別に制御できます。

### DOM

- [JavaScript 型付き配列](/ja/docs/JavaScript_typed_arrays)
  - : JavaScript 型付き配列 (typed arrays) のサポートが追加されました。これを用いることで、ネイティブデータ型を用いた生のデータを含むバッファを扱えます。 [File API](/ja/docs/DOM/File)、[WebGL](/ja/docs/WebGL)、および [WebSockets](/ja/docs/WebSockets) を含む、いくつかの API でこれを用いることができます。
- 範囲の境界領域の保持
  - : [`Range`](/ja/docs/Web/API/Range) オブジェクトに [`range.getClientRects()`](/ja/docs/Web/API/Range/getClientRects) および [`range.getBoundingClientRect()`](/ja/docs/Web/API/Range/getBoundingClientRect) メソッドが追加されました。
- 任意の要素上でのマウスイベントのキャプチャ
  - : Internet Explorer 由来の `setCapture()` と `releaseCapture()`API のサポートが追加されました。[バグ 503943](https://bugzilla.mozilla.org/show_bug.cgi?id=503943) を参照してください。
- [ブラウザ履歴の操作](/ja/docs/DOM/Manipulating_the_browser_history)
  - : [`window.history`](/ja/docs/Web/API/Window/history) オブジェクトを通して利用できる、既存のドキュメント履歴オブジェクトが新しい HTML5 の `pushState()` と `replaceState()` メソッドをサポートするようになりました。
- [MozBeforePaint を用いたアニメーション](/ja/docs/DOM/Animations_using_MozBeforePaint)
  - : 追加された新しいイベントと [`window.mozRequestAnimationFrame()`](/ja/docs/Web/API/Window/mozRequestAnimationFrame) メソッドおよび [`window.mozAnimationStartTime`](/ja/docs/Web/API/Window/mozAnimationStartTime) プロパティを組み合わせることで、互いに同期したアニメーションを作成する方法が提供されます。
- タッチイベントとマルチタッチイベント
  - : タッチイベントとマルチタッチイベントのサポートが追加されました。

#### HTML 要素の DOM インタフェースが変更されました

いくつかの HTML 要素に関連づけられた DOM インタフェースが、以下のように、 HTML5 仕様で要求されるひとつのインタフェースに変更されました。

| Firefox 3.6 でのインタフェース                        | Firefox 4 でのインタフェース              | HTML 要素                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ----------------------------------------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`HTMLSpanElement`](/ja/docs/Web/API/HTMLSpanElement) | [`HTMLElement`](/ja/docs/DOM/HTMLElement) | [`<abbr>`](/ja/docs/Web/HTML/Element/abbr), [`<acronym>`](/ja/docs/Web/HTML/Element/acronym), [`<address>`](/ja/docs/Web/HTML/Element/address), [`<b>`](/ja/docs/Web/HTML/Element/b), [`<bdo>`](/ja/docs/Web/HTML/Element/bdo), [`<big>`](/ja/docs/Web/HTML/Element/big), [`<blink>`](/ja/docs/Web/HTML/Element/blink), [`<center>`](/ja/docs/Web/HTML/Element/center), [`<cite>`](/ja/docs/Web/HTML/Element/cite), [`<code>`](/ja/docs/Web/HTML/Element/code), [`<dd>`](/ja/docs/Web/HTML/Element/dd), [`<dfn>`](/ja/docs/Web/HTML/Element/dfn), [`<dt>`](/ja/docs/Web/HTML/Element/dt), [`<em>`](/ja/docs/Web/HTML/Element/em), [`<i>`](/ja/docs/Web/HTML/Element/i), [`<kbd>`](/ja/docs/Web/HTML/Element/kbd), [`<listing>`](/ja/docs/Web/HTML/Element/listing), [`<nobr>`](/ja/docs/Web/HTML/Element/nobr), [`<plaintext>`](/ja/docs/Web/HTML/Element/plaintext), [`<s>`](/ja/docs/Web/HTML/Element/s), [`<samp>`](/ja/docs/Web/HTML/Element/samp), [`<small>`](/ja/docs/Web/HTML/Element/small), [`<strike>`](/ja/docs/Web/HTML/Element/strike), [`<strong>`](/ja/docs/Web/HTML/Element/strong), [`<sub>`](/ja/docs/Web/HTML/Element/sub), [`<sup>`](/ja/docs/Web/HTML/Element/sup), , [`<tt>`](/ja/docs/Web/HTML/Element/tt), [`<u>`](/ja/docs/Web/HTML/Element/u), [`<var>`](/ja/docs/Web/HTML/Element/var), [`<xmp>`](/ja/docs/Web/HTML/Element/xmp) |
| [`HTMLDivElement`](/ja/docs/DOM/HTMLDivElement)       | [`HTMLElement`](/ja/docs/DOM/HTMLElement) | [`<noembed>`](/ja/docs/Web/HTML/Element/noembed), [`<noframes>`](/ja/docs/Web/HTML/Element/noframes), [`<noscript>`](/ja/docs/Web/HTML/Element/noscript)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`HTMLWBRElement`](/ja/docs/DOM/HTMLWBRElement)       | [`HTMLElement`](/ja/docs/DOM/HTMLElement) | [`<wbr>`](/ja/docs/Web/HTML/Element/wbr)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

#### 小さな DOM の変更

- `wrap` DOM 属性を利用することで、[`<textarea>`](/ja/docs/Web/HTML/Element/textarea) `要素の折り返しを`DOM によってコントロールできるようになりました。[バグ 41464](https://bugzilla.mozilla.org/show_bug.cgi?id=41464)
- [`document.createElement()`](/ja/docs/Web/API/Document/createElement) を用いて作成されてドキュメントに追加された [`<script>`](/ja/docs/Web/HTML/Element/script) 要素が、標準で HTML5 仕様に従って動作するようになりました。 `src` 属性で指定されたスクリプトは（順番を調整することはせずに）実行可能になりしだい実行され、`src` 属性で指定されていないスクリプトは同期的に実行されます。`src` 属性を持つ挿入されたスクリプトを挿入された順番で実行するには、`それらに .async=false を指定します。`
- DOM の [`file`](/ja/docs/Web/API/File) オブジェクトが url プロパティを提供するようになりました。
- DOM の [`file`](/ja/docs/Web/API/File) オブジェクトに`新しく click()` メソッドが追加されました。
- XMLHttpRequest で [FormData](/ja/docs/XMLHttpRequest/Using_XMLHttpRequest#Using_FormData_objects) がサポートされました。
- [`element.isContentEditable`](/ja/docs/Web/API/Element/isContentEditable) プロパティが実装されました。
- [`document.currentScript`](/ja/docs/Web/API/Document/currentScript) プロパティを用いることで、現在実行されている [`<script>`](/ja/docs/Web/HTML/Element/script) 要素のスクリプトを判別できます。新しく追加された [`element.onbeforescriptexecute`](/ja/docs/Web/API/Element/onbeforescriptexecute) および [`element.onafterscriptexecute`](/ja/docs/Web/API/Element/onafterscriptexecute) イベントは script 要素の実行前後に発生します。
- [`DragTransfer`](/ja/docs/DragDrop/DataTransfer) オブジェクトに [`mozSourceNode`](/ja/docs/DragDrop/DataTransfer#mozSourceNode) プロパティが追加されました。
- [`Selection`](/ja/docs/Web/API/Selection) オブジェクトに [`selection.modify()`](/ja/docs/DOM/Selection/modify) メソッドが追加されました。このメソッドを用いると、ブラウザウィンドウでの現在のテキスト選択範囲あるいはカーソル位置を簡単に変更できます。
- `window.directories` オブジェクトと [`window.open`](/ja/docs/Web/API/Window/open) の `directories` 特性（これらは他のブラウザではサポートされていません）が 削除されました。代わりに `personalbar` を利用してください。[バグ 474058](https://bugzilla.mozilla.org/show_bug.cgi?id=474058)
- [`event.mozInputSource`](/ja/docs/Web/API/Event/mozInputSource) プロパティが DOM ユーザインタフェースイベントに追加されました。この非標準プロパティを用いると、イベントを生成したデバイスのタイプを判別できます。
- [`document.onreadystatechange`](/ja/docs/Web/API/Document/onreadystatechange) イベントが実装されました。
- [`document.createElement`](/ja/docs/Web/API/Document/createElement) メソッドが Quirks モードでタグ名の前後の `<` と `>` を受け入れないようになりました。
- [`element.setCapture()`](/ja/docs/Web/API/Element/setCapture) および[`document.releaseCapture()`](/ja/docs/Web/API/Document/releaseCapture) メソッドが追加され、これらを用いることで、`指定要素で mousedown` イベントが発生した後にマウスが通常の追跡領域を越えても、マウスイベントを追い続けることができます。
- The [`window.mozPaintCount`](/ja/docs/Web/API/Window/mozPaintCount) プロパティが追加されました。これを用いることで、何回ドキュメントが描画されたかを判定できます。これは Web アプリケーションのパフォーマンスをテストするときに役立ちます。
- [`window.navigator.appVersion`](/ja/docs/Web/API/Window/navigator/appVersion) および [`window.navigator.userAgent`](/ja/docs/Web/API/Window/navigator/userAgent) から言語トークンが削除されました。代わりに [`window.navigator.language`](/ja/docs/Web/API/Window/navigator/language) もしくは [Accept-Language ヘッダ](/ja/docs/Content_negotiation) を利用してください。 [バグ 572656](https://bugzilla.mozilla.org/show_bug.cgi?id=572656)
- [XMLHttpRequest](/ja/docs/XMLHttpRequest) オブジェクトに追加された Gecko 固有の `mozResponseArrayBuffer`プロパティを用いると、レスポンスを文字列と同様 に JavaScript Typed Array として扱えます。
- [Mouse イベント](/ja/docs/DOM/Event/UIEvent/MouseEvent) に `mozPressure` プロパティが追加されました。このプロパティは圧力感知をサポートする入力デバイスでの圧力を示します。
- ~~window\.createBlobURL()~~ [`window.URL.createObjectURL()`](/ja/docs/Web/API/Window/URL/createObjectURL) および [`window.URL.revokeObjectURL()`](/ja/docs/Web/API/Window/URL/revokeObjectURL) メソッドを用いることで、ローカルファイルを参照する BLOB ("Binary Large OBject") URL を作成できます。
- [`DOMImplementation.createHTMLDocument()`](/ja/docs/Web/API/DOMImplementation/createHTMLDocument) メソッドを用いることで、新しい HTML 文書を作成できます。
- [`Node.mozMatchesSelector()`](/ja/docs/Web/API/Node/mozMatchesSelector) が指定セレクタ文字列が妥当ではない場合に正しくない `false` を返すのではなく、`SYNTAX_ERR` 例外を投げるようになりました。
- CSS 同様の省略構文を用いて 要素の SVG プロパティの値を設定できるようになりました。例: `element.style.fill = 'lime'`。詳細は [`element.style`](/ja/docs/Web/API/Element/style) を参照してください。
- ドキュメントルートに [`privatebrowsingmode` 属性](/ja/docs/Supporting_private_browsing_mode#Detecting_whether_private_browsing_mode_is_permanent) が追加されました。これはプライベートブラウジングがセッションで一時的であるか永続的であるかの状態を含む、プライベートブラウジングモードの状態を示します。
- [`window.getComputedStyle()`](/ja/docs/Web/API/Window/getComputedStyle) メソッドの 2 番目のパラメータが、他の主なブラウザと同様に省略可能になりました。
- DOM の [`StorageEvent`](/ja/docs/DOM/event/StorageEvent) オブジェクトが仕様の最新版に合致するようになりました。
- [`window.setTimeout()`](/ja/docs/Web/API/Window/setTimeout) メソッドの最小遅延時間を設定するための `dom.min_timeout_value が追加されました。`
- [`MozAfterPaint`](/ja/docs/Gecko-Specific_DOM_Events#MozAfterPaint) イベントは、潜在的なセキュリティ問題があるため、デフォルトでは送られなくなりました。設定を変更することで有効にできます。

### セキュリティ

- [Content Security Policy (CSP)](/ja/docs/Introducing_Content_Security_Policy)
  - : Content Security Policy (CSP) は Mozilla が提案する Web デザイナーとサーバー管理者が Web サイトの相互利用でどのようなコンテンツを指定するかの仕様です。目的はクロスサイトスクリプティングを含む攻撃とデータインジェクション攻撃を判定し、軽減することです。
- [HTTP Strict Transport Security](/ja/docs/Security/HTTP_Strict_Transport_Security)
  - : HTTP Strict Transport Security は Web サイトがブラウザに HTTP を用いる代わりに HTTPS を用いてのみやり取りすべきであることを伝えるセキュリティ機能です。
- [X-FRAME-OPTIONS レスポンスヘッダ](/ja/docs/The_X-FRAME-OPTIONS_response_header)
  - : Internet Explorer 8 で導入された X-FRAME-OPTIONS HTTP レスポンスヘッダが Firefox でサポートされるようになりました。これを用いることでサイトがページをフレーム内で用いることができるかどうか、フレーム内で利用可能ならば、同じドメイン内に限定するかどうかを指示することができます。
- [User Agent 文字列](/ja/docs/User_Agent_Strings_Reference) の変更
  - : [HTTP リクエストで送ったデータとエントロピーの総量を減少させるべき](https://bugzilla.mozilla.org/show_bug.cgi?id=572650)にあるように、 ユーザエージェント文字列から暗号の強度を表す文字列と言語を表す文字列が削除されました。

### JavaScript

JavaScript 1.8.5 で実装される変更の概要については、[JavaScript 1.8.5 の新機能](/ja/docs/New_in_JavaScript_1.8.5) を参照してください。Firefox 4 における JavaScript は ECMASCript 5 標準へのさらなる順守となる予定です。

### 開発者ツール

- [Web コンソールの利用](/ja/docs/Using_the_Web_Console)
  - : Web コンソールツールは Web 開発者および拡張開発者のデバッグ作業の補助に役立ちます。

> **メモ:** Gecko 2.0 のメモ(Firefox 4 / Thunderbird 3.3 / SeaMonkey 2.1)エラーコンソールは Firefox 4 からデフォルトで無効化されます。`devtools.errorconsole.enabled 設定を` `true` に変更し、ブラウザを再起動することで再び有効にすることができます。

## Mozilla およびアドオン開発者向けの変更

Firefox 4 向けに既存の拡張を更新する上で役立つ Tips は、[Updating extensions for Firefox 4](/ja/docs/Extensions/Updating_extensions_for_Firefox_4) を参照してください。ここでは既存のアドオンの互換性を破壊する主な変更点のいくつかを取り上げているだけです。ですから、上記記事も必ず読んでください。

テーマ開発者であるならば、注意する必要がある重要な変更点を理解するために [Theme changes in Firefox 4](/ja/docs/Theme_changes_in_Firefox_4) を読むべきです。

### 新しい JavaScript コードモジュール

- [Services.jsm](/ja/docs/JavaScript_code_modules/Services.jsm)
  - : `Services.jsm` コードモジュールは preferences service や window mediator などのよく用いられているサービスへの参照を簡単に取得できるようにするゲッターを提供します。
- [JS-ctypes API](/ja/docs/JavaScript_code_modules/ctypes.jsm)
  - : JS-ctypes API は C 互換外部ライブラリ関数を XPCOM を利用すること無しに呼び出せるようにします。
- [Add-ons Manager](/ja/docs/Addons/Add-on_Manager)
  - : 新しい Add-ons Manager はインストールされたアドオンについての情報の提供、それらの管理のためのサポート、および、アドオンのインストールと削除の方法を提供します。
- [PopupNotifications.jsm](/ja/docs/JavaScript_code_modules/PopupNotifications.jsm)
  - : 新しいポップアップ通知モジュールを用いることで簡単に魅力的な非モーダルな通知をユーザに提供できます。この API の使い方は[ポップアップ通知の利用](/ja/docs/Using_popup_notifications)で参照できます。
- [chrome: URL からコードモジュールを読み込む](/ja/docs/JavaScript_code_modules/Using#Locating_the_code_module)
  - : **chrome:** URL を用いて JavaScript コードモジュールを読め込むことができるようになりました。JAR ファイルの中でも可能です。
- DownloadLastDir.jsm
  - : [`DownloadLastDir.jsm`](/ja/docs/JavaScript_code_modules/DownloadLastDir.jsm) コードモジュールは `gDownloadLastDir` グローバル変数を提供します。この変数には最後のダウンロードが行われたディレクトリのパスを知るために利用可能な文字列が含まれています。このモジュールはプライベートブラウジングに対応しています。
- [PerfMeasurement.jsm コードモジュールを用いたパフォーマンスの測定](/ja/docs/Performance/Measuring_performance_using_the_PerfMeasurement.jsm_code_module)
  - : [`PerfMeasurement.jsm`](/ja/docs/JavaScript_code_modules/PerfMeasurement.jsm) コードモジュールは JavaScript コードにおける CPU レベルでのパフォーマンスデータを測定するための API を提供します。

#### 小さなコードモジュールの変更

- `NetUtil.jsm` コードモジュールが [`readInputStreamToString()`](</ja/docs/JavaScript_code_modules/NetUtil.jsm#readInputStreamToString()>) メソッドを提供するようになりました。これを用いることで、ストリームが null 文字を含んでいても、ストリームから文字列に任意のバイトを読み出せます。
- [JavaScript コードモジュール内で Worker を利用](/ja/docs/JavaScript_code_modules/Using_workers_in_JavaScript_code_modules)できるようになりました。

### DOM の変更

- [`ChromeWorker`](/ja/docs/Web/API/ChromeWorker)
  - : 特権コード向けの新しいタイプの Worker です。これを用いると、拡張およびアプリケーションコードで Worker から [js-ctypes](/ja/docs/js-ctypes) のようなものを用いることができます。
- [タッチイベント](/ja/docs/DOM/Touch_events)
  - : (非標準の) タッチイベントのサポートが追加されました。これを用いると、タッチスクリーン上で同時に複数の指でトラックできます。

### XUL

#### Tabbrowser (gBrowser) の変更

いくつかの変更が \<tabbrowser> 要素になされており、タブ機能の拡張に影響があります。アイコンタブのサポートに加えて、タブバーが標準ツールバーに統合されたという変更もあります。この変更によって、ユーザがツールバーボタンをそこへドラッグできるようになっています。

- TabClose/TabSelect/TabOpen イベントはもはや tabbrowser 要素 (gBrowser) にバブルアップしません。これらのイベントのためのイベントリスナーは gBrowser 直接ではなく gBrowser.tabContainer に追加すべきです。
- タブコンテキストメニューはもはや tabbrowser の無名の子要素ではありません。それゆえ [XUL オーバーレイ](/ja/docs/XUL_Overlays)で直接オーバレイできるようになります。gBrowser.tabContextMenu 経由で JavaScript でより直接的にアクセスすることもできます。詳細は[このブログ投稿](http://www.gavinsharp.com/blog/2010/03/31/accessingmodifying-the-firefox-tab-context-menu-from-extensions/)を参照してください。
- 新たに `visibleTabs` プロパティが追加され、これを用いると、現在表示されているタブの配列を取得することができます。このことにより、現在のタブセットでどのタブが表示されているかを知ることができます。これは例えば、Firefox Panorama で利用されています。
- 新たに [`showOnlyTheseTabs`](/ja/docs/Mozilla/Tech/XUL/Method/showOnlyTheseTabs) メソッドが追加されました。これは Firefox Panorama で用いられています。
- 新たに [`getIcon`](/ja/docs/Mozilla/Tech/XUL/Method/getIcon) メソッドが追加されました。これを用いると、[`<xul:browser>`](/ja/docs/Mozilla/Tech/XUL/browser) 要素から引っ張り出す必要無しに、 タブのファビコンを得ることができます。
- 新たに `tabbrowser.tabs` プロパティが追加されました。これを用いると、簡単に [`<xul:tabbrowser>`](/ja/docs/Mozilla/Tech/XUL/tabbrowser) 要素内のタブの一覧を取得できます。
- 新たに [`pinTab`](/ja/docs/Mozilla/Tech/XUL/Method/pinTab) と [`unpinTab`](/ja/docs/Mozilla/Tech/XUL/Method/unpinTab) メソッドが追加されました。これを用いると、タブのアイコン化およびタブのアイコン化の解除ができます（つまり、アイコンタブと通常タブを切り替えます）。
- [`getTabModalPromptBox`](/ja/docs/Mozilla/Tech/XUL/Method/getTabModalPromptBox) メソッドと [`<xul:tabbrowser>`](/ja/docs/Mozilla/Tech/XUL/tabbrowser) 要素の [`tabmodalPromptShowing`](/ja/docs/Mozilla/Tech/XUL/Attribute/tabmodalPromptShowing) 属性がタブモーダルアラートのサポートのために追加されました。

#### ポップアップに対する変更点

- [`<xul:popup>`](/ja/docs/Mozilla/Tech/XUL/popup) 要素がサポートされなくなりました。代わりに [`<xul:menupopup>`](/ja/docs/Mozilla/Tech/XUL/menupopup) 要素を使うべきです。(`popup` 要素を用い続けた場合、その要素にはもはや何の特別な意味もないため、不具合に遭遇するでしょう。例えば、[`<xul:menuseparator>`](/ja/docs/Mozilla/Tech/XUL/menuseparator) 要素は [`<xul:popup>`](/ja/docs/Mozilla/Tech/XUL/popup) 要素内で用いたときに透明で表示される可能性があります。)
- [`<xul:menupopup>`](/ja/docs/Mozilla/Tech/XUL/menupopup) XUL 要素に `triggerNode` プロパティが追加されました。このプロパティはポップアップを開くイベントが起こったノードを示します。これは [`openPopup`](/ja/docs/Mozilla/Tech/XUL/Method/openPopup) メソッドに対するトリガーイベント引数の追加も必要とします。また、 `anchorNode` プロパティも追加されました。このプロパティはポップアップが作成されたときに指定されたアンカーを返します。
- [`<xul:panel>`](/ja/docs/Mozilla/Tech/XUL/panel) 要素に [`fade`](/ja/docs/Mozilla/Tech/XUL/Attribute/fade) および [`flip`](/ja/docs/Mozilla/Tech/XUL/Attribute/flip) 属性が追加されました。これらの属性は新しい "arrow" スタイル通知パネルの挙動を設定するために用いられます。

#### リモート XUL サポートの削除

リモート XUL [がサポートされなくなりました](https://bugzilla.mozilla.org/show_bug.cgi?id=546857)。 これは HTTP を経由して供給される XUL ドキュメントにのみ影響します。 また、`dom.allow_XUL_XBL_for_file` の設定を作成して、その値を `true` に設定しない限り、`file://` URL 形式を用いた XUL 文書の読み込みも行えなくなります。しかしながら、ホワイトリスト機能を用いることで、特定ドメインのリモート XUL を読み込むことを許可できます。[Remote XUL Manager 拡張](https://addons.mozilla.org/en-US/firefox/addon/235281/) を用いると、このホワイトリストを管理できます。

#### 小さな XUL の変更

- [`readonly`](/ja/docs/Mozilla/Tech/XUL/Attribute/readonly) 属性がフィールドで正しく動作するようになりました。
- [`<xul:resizer>`](/ja/docs/Mozilla/Tech/XUL/resizer) 要素でウィンドウをリサイズする代わりにリサイズする要素を指定できる [`element`](/ja/docs/Mozilla/Tech/XUL/Attribute/element) 属性を用いることができるようになりました。
- [`<xul:resizer>`](/ja/docs/Mozilla/Tech/XUL/resizer) 要素に [`type`](/ja/docs/Mozilla/Tech/XUL/Attribute/resizer.type) 属性が追加され、これを用いることで、要素の変わりにウィンドウのリサイズグリップを指定し、ウィンドウのリサイズグリップが 2 度描画されることを防ぐことができます。
- "active" 属性は XUL ウィンドウでは設定されません。背景ウィンドウに異なるスタイルを指定するための新しい [`:-moz-window-inactive`](/ja/docs/Web/CSS/:-moz-window-inactive) 擬似クラスを利用してください。
- [`emptytext`](/ja/docs/Mozilla/Tech/XUL/Attribute/emptytext) 属性は非推奨になりました。代わりに [`placeholder`](/ja/docs/Mozilla/Tech/XUL/Attribute/placeholder) を用いるべきです。
- [`<xul:popup>`](/ja/docs/Mozilla/Tech/XUL/popup) 要素はサポートされません。代わりに [`<xul:menupopup>`](/ja/docs/Mozilla/Tech/XUL/menupopup) を持ちいるべきです。
- [`<xul:window>`](/ja/docs/Mozilla/Tech/XUL/window) 要素が [`accelerated`](/ja/docs/Mozilla/Tech/XUL/Attribute/accelerated) 属性を提供するようになりました。true の場合、ハードウェアレイヤーマネージャがウィンドウをアクセラレーションすることが許可されます。
- [`<xul:stack>`](/ja/docs/Mozilla/Tech/XUL/stack) 要素が [`bottom`](/ja/docs/Mozilla/Tech/XUL/Attribute/bottom) と [`right`](/ja/docs/Mozilla/Tech/XUL/Attribute/right) 要素をサポートするようになりました。
- [`<xul:tree>`](/ja/docs/Mozilla/Tech/XUL/tree) 要素での [`alternatingbackground`](/ja/docs/Mozilla/Tech/XUL/Attribute/alternatingbackground) 属性はサポートされません。代わりに [`:-moz-tree-row`](/ja/docs/Web/CSS/:-moz-tree-row) 擬似クラスを利用できます。
- anonid chevronPopup を持っていたブックマークツールバーのオーバーフローボタンは無名になりました。それは PlacesChevron の id を持っています。
- [`<xul:tabs>`](/ja/docs/Mozilla/Tech/XUL/tabs) 要素に `tabbox` プロパティが追加されました。これは古い `_tabbox` プロパティを置き換えます。古い方のプロパティは非推奨です（そして決してドキュメント化されません）。
- XUL [`<xul:window>`](/ja/docs/Mozilla/Tech/XUL/window) 要素に [`drawintitlebar`](/ja/docs/Mozilla/Tech/XUL/Attribute/drawintitlebar) 属性が追加されました。この値が `true であれば、`ウィンドウのコンテント領域にはタイトルバーが含まれており、タイトルバー内に描画することを許可します。
- 新たに `TabPinned` および `TabUnpinned` イベントが追加され、これを用いることで、[タブがアイコン化したかアイコン化が解除されたかを検知できます](/ja/docs/Code_snippets/Tabbed_browser#Notification_when_a_tab_is_pinned_or_unpinned)。
- 新しい [`TabAttrModified` イベント](/ja/docs/Code_snippets/Tabbed_browser#Notification_when_a_tab%27s_attributes_change) はタブの [`label`](/ja/docs/Mozilla/Tech/XUL/Attribute/label)、[`crop`](/ja/docs/Mozilla/Tech/XUL/Attribute/crop)、[`busy`](/ja/docs/Mozilla/Tech/XUL/Attribute/busy)、 [`image`](/ja/docs/Mozilla/Tech/XUL/Attribute/image)、あるいは、[`selected`](/ja/docs/Mozilla/Tech/XUL/Attribute/selected) 属性のいずれかが変化したときに送られます。
- [`<xul:tab>`](/ja/docs/Mozilla/Tech/XUL/tab) 要素に [`pinned`](/ja/docs/Mozilla/Tech/XUL/Attribute/pinned) 属性が追加されました。これを用いることで、タブが現在アイコン化されているかどうか判定できます。
- [`<xul:tree>`](/ja/docs/Mozilla/Tech/XUL/tree) 要素上の `setDirectionIndicator` クラスは何もしないことがありましたが、一切利用されないようになりました。
- [`<xul:window>`](/ja/docs/Mozilla/Tech/XUL/window) 要素に [`chromemargin`](/ja/docs/Mozilla/Tech/XUL/Attribute/chromemargin) 属性が追加され、これを用いることで、ウィンドウの両端の Chrome とコンテントのマージンを設定できます。例えば、タイトルバーに描画するためにこれを用いることができます。
- [`<xul:window>`](/ja/docs/Mozilla/Tech/XUL/window) 要素に [`disablechrome`](/ja/docs/Mozilla/Tech/XUL/Attribute/disablechrome) 属性が追加されました。これは `about:addons のように`ブラウザ内 UI に表示するために用いるときにウィンドウで Chrome のほどんどを隠すために用いることができます。
- [`<xul:window>`](/ja/docs/Mozilla/Tech/XUL/window) 要素に [`disablefastfind`](/ja/docs/Mozilla/Tech/XUL/Attribute/disablefastfind) 属性が追加されました。これを用いることで、ウィンドウ内のページ内検索バーを無効にできます。このときコンテント内でページ検索バーはサポートされません。例えば、これはアドオンパネルで使われています。
- ツールバーをツールボックスの外部に置けるようになりました。[`<xul:toolbar>`](/ja/docs/Mozilla/Tech/XUL/toolbar) 要素の `toolboxid` プロパティを設定することで、以前のように [`<xul:toolbox>`](/ja/docs/Mozilla/Tech/XUL/toolbox) 要素のメンバーとして扱うことができます。また、[`<xul:toolbox>`](/ja/docs/Mozilla/Tech/XUL/toolbox) 要素に `externalToolbars` プロパティが追加されました。このプロパティによって、そのツールボックスのメンバーとして扱われるツールバーのすべての一覧を取得できます。
- デバッグ目的向けに [logging XUL テンプレートのロギング](/ja/docs/XUL/Template_Guide/Template_Logging) のサポートが追加されました。

### 開発者に影響がある UI の変更

- [アドオンバー](/ja/docs/The_add-on_bar)
  - : ステータスバーが削除され、新しいアドオンバーに置き換えられました。以前にステータスバーに UI を追加していた拡張は更新する必要があります。
- [ブラウザのクロームを隠す](/ja/docs/Hiding_browser_chrome)
  - : ブラウザのクロームを隠したいときに、隠せるようになりました。例えば、`about:addons` がこれを用いています。

### Storage

#### 小さなストレージ API の変更

- [`mozIStorageBindingParamsArray`](/ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/mozIStorageBindingParamsArray) インタフェースが 配列である[`mozIStorageBindingParams`](/ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/mozIStorageBindingParams) オブジェクトの数を示す length 属性を持つようになりました。
- [`mozIStorageStatement`](</ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/mozIStorageStatement >)の メソッド [bindParameters](/ja/docs/mozIStorageStatemt#bindPrameters) が 指定された [`mozIStorageBindingParamsArray`](/ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/mozIStorageBindingParamsArray) が空のときにエラーを返すようになりました。
- [`mozIStorageConnection.clone()`](</ja/docs/XPCOM_Interface_Reference/mozIStorageConnection#clone()>) メソッドが追加されました。これを用いると、存在するデータベース接続を複製できます。
- [`mozIStorageConnection.asyncClose()`](</ja/docs/XPCOM_Interface_Reference/mozIStorageConnection#asyncClose()>) が追加されました。これを用いると、非同期にデータベース接続を閉じることができます。クローズ処理が完了したときに通知されるコールバックを指定します。
- [`mozIStorageConnection.setGrowthIncrement()`](</ja/docs/XPCOM_Interface_Reference/mozIStorageConnection#setGrowthIncrement()>) メソッドが追加されました。これを用いると、SQLite のフラグメンテーションを減らすことを助けるために、データベースファイルでの一度の増加量を指定できます。
- `SQLITE_CONSTRAINT` エラーが `NS_ERROR_FAILURE` の代わりに `NS_ERROR_STORAGE_CONSTRAINT` を報告するようになりました。

### XPCOM

以下から参照できる特定の変更に加えて、凍結されたインタフェースが一切無くなったという重要な変更もあります。すべてのインタフェースは非凍結となっています。ドキュメンテーションに書いていることに関わらずです。ドキュメンテーションを後ほど更新する予定です。

- [Gecko 2.0 における XPCOM の変更](/ja/docs/XPCOM/XPCOM_changes_in_Gecko_2.0)
  - : Firefox 4 で互換性に影響を与える XPCOM への変更についての詳細。
- [Components.utils.getGlobalForObject()](/ja/docs/Components.utils.getGlobalForObject)
  - : この新しいメソッドはオブジェクトが属しているグローバルオブジェクトを返します。これは現在削除された `__parent__ の一般的用途を置き換えます。`

### Places

- Places クエリの結果が複数のオブザーバによって提供されるようになり、それらのクエリは非同期で実行される可能性があります。このことにより、[`nsINavHistoryResult`](/ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsINavHistoryResult)、[`nsINavHistoryQueryOptions`](/ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsINavHistoryQueryOptions)、および[`nsINavHistoryContainerResultNode`](/ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsINavHistoryContainerResultNode) インタフェースにいくつかの変更があります。より大きな変更は、[`nsINavHistoryResultViewer`](/ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsINavHistoryResultViewer) インタフェースが [`nsINavHistoryResultObserver`](/ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsINavHistoryResultObserver) に改名されたことです。
- いくつかの [新しい通知](/ja/docs/Observer_Notifications#Places) が追加されました。この通知を用いると、ブラウザが Places サービスのシャットダウンプロセスをより確実に追跡できます。これらのうち、ほとんどは内部での利用のためにのみ用意されたものですが、`places-connection-closed` 通知は Places サービスが自身のシャットダウンプロセスを完了したときを知るために利用可能です。
- いくつかの Places のメソッドで配列サイズ出力を指定する引数がオプションになりました。
- `<menupopup type="places">` のサポートが削除されました。代わりに、以前は自動で行なわれていた Places の情報を持つメニューを手動で作成して配置する必要があります。詳細は[メニュービューを用いて Places 情報を表示する](/ja/docs/Displaying_Places_information_using_views#Menu_view)を参照してください。

### インタフェースの変更

- The [`nsIDocShell`](/ja/docs/XPCOM_Interface_Reference/nsIDocShell) and [`nsIWebBrowser`](/ja/docs/XPCOM_Interface_Reference/nsIWebBrowser) interfaces now have a new `isActive` attribute, which is used to allow optimization of code paths for documents that aren't currently visible.
- The [`nsIMemory`](/ja/docs/XPCOM_Interface_Reference/nsIMemory) method [`nsIMemory.isLowMemory()`](</ja/docs/en-US/XPCOM_Interface_Reference/nsIMemory#isLowMemory()>) has been deprecated. You should use ["memory-pressure" notifications](/ja/docs/XPCOM_Interface_Reference/nsIMemory#Low_memory_notifications) to watch for low memory situations instead.
- The API for handling redirects on HTTP channels has changed to let them be processed asynchronously. Any code that implements redirect handling using [`nsIChannelEventSink.onChannelRedirect()`](</ja/docs/en-US/XPCOM_Interface_Reference/nsIChannelEventSink#onChannelRedirect()>) needs to be updated to use [`nsIChannelEventSink.asyncOnChannelRedirect()`](</ja/docs/en-US/XPCOM_Interface_Reference/nsIChannelEventSink#asyncOnChannelRedirect()>) instead. This accepts a callback handler that must be called when a redirect is successfully completed.
- The [`nsINavHistoryResultObserver.batching()`](</ja/docs/en-US/XPCOM_Interface_Reference/nsINavHistoryResultObserver#batching()>) method has been added, providing a way to group Places operations into batches, reducing the number of update notifications delivered, which can improve performance when observers are performing relatively involved tasks (such as refreshing views).
- The long-obsolete `nsIPref` interface has finally been removed. If you haven't already switched to [`nsIPrefService`](/ja/docs/XPCOM_Interface_Reference/nsIPrefService), now is the time.
- The [`nsISessionStore`](/ja/docs/XPCOM_Interface_Reference/nsISessionStore) and [`nsISessionStartup`](/ja/docs/XPCOM_Interface_Reference/nsISessionStartup) interfaces received changes to support on-demand session restore. See the [`nsISessionStore.restoreLastSession()`](</ja/docs/en-US/XPCOM_Interface_Reference/nsISessionStore#restoreLastSession()>) method.
- The [`nsIPrincipal`](/ja/docs/XPCOM_Interface_Reference/nsIPrincipal) methods [`nsIPrincipal.subsumes()`](</ja/docs/en-US/XPCOM_Interface_Reference/nsIPrincipal#subsumes()>) and [`nsIPrincipal.checkMayLoad()`](</ja/docs/en-US/XPCOM_Interface_Reference/nsIPrincipal#checkMayLoad()>), as well as its `origin`, `csp`, and `URI` attributes, are now available from script; previously they were only available from native code.
- The [`nsIPrompt`](/ja/docs/XPCOM_Interface_Reference/nsIPrompt) interface now supports tab-modal alerts; see [Using tab-modal prompts](/ja/docs/Using_tab-modal_prompts) for details.
- The [`nsIEffectiveTLDService.getPublicSuffixFromHost()`](</ja/docs/en-US/XPCOM_Interface_Reference/nsIEffectiveTLDService#getPublicSuffixFromHost()>) method now correctly rejects host name starting with a period (".").
- The [`mozIJSSubScriptLoader.loadSubScript()`](</ja/docs/en-US/XPCOM_Interface_Reference/mozIJSSubScriptLoader#loadSubScript()>) method now has an optional argument allowing you to specify the character set of the script; if one is not provided, ASCII is assumed (as was always assumed previously).
- The `nsIAccessProxy` interface has been removed. It was an implementation detail that has outlived its usefulness.
- The [`nsIContentView`](/ja/docs/XPCOM_Interface_Reference/nsIContentView) and [`nsIContentViewManager`](/ja/docs/XPCOM_Interface_Reference/nsIContentViewManager) interfaces have been added for Firefox Mobile. It represents a scrollable content view whose contents are actually drawn by a separate process.
- The [`nsIDiskCacheStreamInternal`](/ja/docs/XPCOM_Interface_Reference/nsIDiskCacheStreamInternal) interface has been added.
- The [`nsIExternalURLHandlerService`](/ja/docs/XPCOM_Interface_Reference/nsIExternalURLHandlerService) interface has been added.
- The [`nsISyncJPAKE`](/ja/docs/XPCOM_Interface_Reference/nsISyncJPAKE) interface has been added. See [bug 601645](https://bugzilla.mozilla.org/show_bug.cgi?id=601645).

<!---->

- [`nsIDocShell`](/ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDocShell) および [`nsIWebBrowser`](/ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIWebBrowser) インタフェースに新しく `isActive` 属性が追加されました。これは現在表示されていないドキュメントのためにコードパスを最適化することを許可するために用いることができます。
- [`nsIMemory`](/ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIMemory) のメソッドである [`isLowMemory()`](/ja/docs/XPCOM_Interface_Reference/nsIMemory/isLowMemory) は非推奨になりました。低メモリ状況を監視するには ["memory-pressure" 通知](/ja/docs/XPCOM_Interface_Reference/nsIMemory#Low_memory_notifications) を用いることが推奨されます。
- HTTP チャンネル上でリダイレクトを扱う API が非同期で動作できるように変更されました。[`nsIChannelEventSink.onChannelRedirect()`](</ja/docs/XPCOM_Interface_Reference/nsIChannelEventSink#onChannelRedirect()>) を用いてリダイレクトを扱う実装を行なっているコードは `nsIChannelEventSink.asyncOnChannelRedirect` を代わりに用いて更新する必要があります。これはリダイレクトが正常に完了したときに呼び出されるコールバックハンドラを受け入れます。
- [`nsINavHistoryResultObserver.batching()`](</ja/docs/XPCOM_Interface_Reference/nsINavHistoryResultObserver#batching()>) メソッドが追加されました。このメソッドは Places 操作をバッチにグループ化する方法を提供し、送られてくる更新通知の数を減少させ、その結果、オブザーバが（ビューをリフレッシュするような）相対的にタスクを追加するときのパフォーマンスを向上させます。
- 長い間廃止状態であった [`nsIPref`](/ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIPref) インタフェースがついに削除されました。まだ [`nsIPrefService`](/ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIPrefService) に移行していないなら、今がそのときです。
- [`nsISessionStore`](/ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsISessionStore) および [`nsISessionStartup`](/ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsISessionStartup) インタフェースがユーザの要求に応じたセッションリストアのサポートへの変更を受けとるようになりました。[`nsISessionStore.restoreLastSession()`](</ja/docs/XPCOM_Interface_Reference/nsISessionStore#restoreLastSession()>) メソッドを参照してください。
- [`nsIPrincipal`](/ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIPrincipal) のメソッドである [`nsIPrincipal.subsumes()`](</ja/docs/XPCOM_Interface_Reference/nsIPrincipal#subsumes()>) および [`nsIPrincipal.checkMayLoad()`](</ja/docs/XPCOM_Interface_Reference/nsIPrincipal#checkMayLoad()>) が `origin`、`csp、` および `URI` 属性同様に、スクリプトから利用可能になりました。以前はこれらはネイティブコードからのみ利用可能でした。
- [`nsIPrompt`](/ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIPrompt) インタフェースがタブモーダルアラートをサポートするようになりました。詳細は[タブモーダルプロンプトの利用](/ja/docs/Using_tab-modal_prompts)を参照してください。
- [`nsIEffectiveTLDService.getPublicSuffixFromHost()`](</ja/docs/XPCOM_Interface_Reference/nsIEffectiveTLDService#getPublicSuffixFromHost()>) メソッドがピリオド (".") で始まるホスト名を正しく拒否するようになりました。

### メモリ管理

- [確実なメモリアロケーション](/ja/docs/Infallible_memory_allocation)
  - : Mozilla は null を返さないことを保証する確実なメモリアロケータを複数提供するようになりました。この記事を読んでそれらがどのように動作し、どのようにして不確実な、あるいは、確実なメモリアロケーションを明確に指定して呼び出すのかを学んでください。

### その他の変更

- Firefox 内に含まれるリソースのほとんどが単一の JAR アーカイブである `omni.jar` にまとめられました。これにより、 I/O が減少し、その結果、起動パフォーマンスが向上しています。詳細は [omni.jar について](/ja/docs/About_omni.jar)を読んでください。
- `accessibility.disablecache` 設定はサポートされなくなりました。これはデバッグ目的で公開されており、もはや用いられません。
- バージョンアップによって GUID が変更になるアドオンが正しく更新されるようになりました。
- プラットフォーム固有のディレクトリを削除した副作用として、各プラットフォーム向けに異なった設定を提供することができなくなりました。
- デフォルトで、拡張はインストール時に展開されなくなりました。その代わりに XPI ファイルから直接実行されます。拡張は古い挙動を選択するために[インストールマニフェスト](/ja/docs/Install_Manifests)内で [unpack](/ja/docs/Install_Manifests#unpack) プロパティを使用できます。バイナリコンポーネントや、[js-ctypes](/ja/docs/js-ctypes) を利用して読み込まれる DLL、[検索プラグイン](/ja/docs/Creating_OpenSearch_plugins_for_Firefox)、辞書、ウィンドウアイコンは展開される必要があるように指定しなければなりません。[SQLite データベースを生成する](/ja/docs/XUL/School_tutorial/Local_Storage#SQLite)拡張や、拡張ディレクトリからファイルシステムへ相対的に何かをコピーする拡張も、それらのコードを変更する必要があるかもしれません。
- カスタマイズされた Firefox に[アプリケーションスタートアップ時に自動でインストールされる](/ja/docs/Developer_Guide/Customizing_Firefox#Including_extensions_with_your_distribution_of_Firefox)拡張を含められるようになりました。

## その他の変更

- ルートの chrome.manifest ファイルだけが読み込まれるように
  - : ルートの `chrome.manifest` ファイルだけが読み込まれるようになりました。 2 つ以上のマニフェストファイルを読み込む必要がある場合は、ルートの `chrome.manifest` でそれらを読み込むために [`manifest`](/ja/docs/Chrome_Registration#manifest) コマンドを使用できます。
- Gopher サポートの削除
  - : Gopher プロトコルがネイティブでサポートされなくなりました。継続してサポートを受けるには [OverbiteFF](https://addons.mozilla.org/addon/7685/) 拡張を利用できます。
- [コンテントプロセスイベントハンドリング](/ja/docs/The_message_manager)
  - : out-of-process プラグインのサポートとその他の multiple-process 機能をサポートするために、プロセス間でメッセージを送ることをサポートするための新しい API が導入されました。
- [ブートストラップ拡張](/ja/docs/Extensions/Bootstrapped_extensions)
  - : ブラウザを再起動せずにインストール、アンインストール、更新（またはダウングレード）できる拡張を作成できるようになりました。
- デフォルトプラグイン の削除
  - : デフォルトプラグインが削除されました。アプリケーションプラグインフォルダもデフォルトで削除されますが、このフォルダ経由でプラグインをインストールするためのサポートはまだ存在します。[bug 533891](https://bugzilla.mozilla.org/show_bug.cgi?id=533891) を参照してください。
- Extension Manager の AddonManager への置き換え
  - : [nsIExtensionManager](/ja/docs/XPCOM_Interface_Reference/nsIExtensionManager) は [AddonManager](/ja/docs/Addons/Add-on_Manager/AddonManager) に置き換えられました。 指定した拡張 ID からインストール場所を取得するための方法は現在のところ存在しないと思われるので、それに最も近い回避策はプロファイルディレクトリを見つけるためにディレクトリサービスを用い、それに "extensions" を追加することです（この手段ではプロファイルディレクトリ外あるいは他の位置にエイリアスされている拡張は取得できません）。
- 子 HWND はもはや利用されません
  - : Firefox は Windows で内部利用していた 子 HWND を作成しないようになりました。これらの HWND を扱うネィティブコードを用いる拡張を書いていた場合、その拡張は Firefox 4 では動作しないでしょう。HWND を用いることを止めるか、[NPAPI](/ja/docs/NPAPI) プラグインで HWND に依存するコードをラップする必要があります。それは多大な作業であり、HWND を直接用いることを避けられるならば、そうすべきです。
- ジェスチャの変更
  - : トラックパッド上の 3 本指の上下スワイプジェスチャが、デフォルトで、Firefox Panorama (旧称 TabCandy) の開閉に変更されました。これらの変更を以前の scroll-to-top および scroll-to-bottom コマンドに戻すには、about:config を開き、`browser.gesture.swipe.down` を `cmd_scrollBottom` にし、`browser.gesture.swipe.up` を `cmd_scrollTop` に設定してください。

## 関連情報

- [Firefox 5 for developers](/ja/docs/Mozilla/Firefox/Releases/5)
- [Firefox 4 for developers](/ja/docs/Mozilla/Firefox/Releases/4)
- [Firefox 3.6 for developers](/ja/docs/Mozilla/Firefox/Releases/3.6)
- [Firefox 3.5 for developers](/ja/docs/Mozilla/Firefox/Releases/3.5)
- [Firefox 3 for developers](/ja/docs/Mozilla/Firefox/Releases/3)
- [Firefox 2 for developers](/ja/docs/Mozilla/Firefox/Releases/2)
- [Firefox 1.5 for developers](/ja/docs/Mozilla/Firefox/Releases/1.5)
