---
title: Firefox 4 開発者向けリリースノート
short-title: Firefox 4
slug: Mozilla/Firefox/Releases/4
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Firefox 4 は 2011 年 3 月 22 日にリリースされ、パフォーマンスの向上、HTML5 やその他の進化するウェブ技術への対応強化、セキュリティのさらなる改善を実現しました。この記事では、この次期リリースについてのとっかかりの情報と、ウェブ開発者、アドオン開発者、そして、Gecko プラットフォーム開発者向けに利用可能になる機能の一覧を提供します。

## ウェブ開発者向け機能

Gecko は現在 [HTML5](/ja/docs/Glossary/HTML5) パーサーを利用するようになりました。それはバグが修正され、相互運用性が改善され、また、パフォーマンスが向上されたものです。また、HTML マークアップでコンテンツに [SVG](/ja/docs/Web/SVG) と [MathML](/ja/docs/Web/MathML) を直接埋め込むことも可能にします。

### HTML

- [ウェブフォーム](/ja/docs/Learn_web_development/Extensions/Forms)
  - : ウェブフォームの改善の概説。これらの変更点には {{HTMLElement("input")}} 要素における入力種類の追加、データ検証などが含まれています。
- [HTML5 セクション](/ja/docs/Web/HTML/Reference/Elements/Heading_Elements)
  - : Gecko は文書におけるセクションに関する新しい HTML5 要素をサポートします。: {{HTMLElement("article")}}、{{HTMLElement("section")}}、{{HTMLElement("nav")}}、{{HTMLElement("aside")}}、 {{HTMLElement("hgroup")}}、{{HTMLElement("header")}} および {{HTMLElement("footer")}}。
- [HTML5 の hidden 属性](/ja/docs/Web/HTML/Reference/Global_attributes/hidden)
  - : この属性は、すべての要素に共通であり、ウェブページでユーザーに現在は関係しないコンテントを隠すために用いられます。
- その他の HTML5 要素
  - : Gecko は次の新しい HTML5 要素もサポートします。: {{HTMLElement("mark")}}、{{HTMLElement("figure")}} および {{HTMLElement("figcaption")}}。
- [WebSocket](/ja/docs/Web/API/WebSockets_API)
  - : ウェブアプリケーションとサーバーの間でリアルタイムコミュニケーションを行うための WebSocket API を利用するためのガイド。

#### キャンバスの改良

以下の変更が {{domxref("CanvasRenderingContext2D")}} インターフェイスに施され、{{HTMLElement("canvas")}} の実装が仕様に準拠するよう近づけられました。

- `arc()` を呼び出す際に負の半径を指定すると、正しく `INDEX_SIZE_ERR` 例外が発生するようになりました。
- `createLinearGradient()` および `createRadialGradient()` の呼び出し時に非有限値を指定すると、`SYNTAX_ERR` ではなく `NOT_SUPPORTED_ERR` が発生するようになりました。
- `miterLimit` を負の値に設定しても例外は発生しなくなり、代わりに非正の値は適切に無視されるようになりました。
- `lineWidth` を負の値に設定しても例外は発生しなくなり、代わりに非正の値は適切に無視されるようになりました。
- `putImageData()` メソッドは、オプションの引数 `dirtyX`、`dirtyY`、`dirtyWidth`、`dirtyHeight` に対応するようになりました。

#### HTML のその他の変更

- {{HTMLElement("textarea")}} 要素をデフォルトでサイズ変更できるようになりました。これを無効にするために {{cssxref("resize")}} CSS プロパティが利用できます。
- `canvas.getContext` および `canvas.toDataURL` が認識できない引数を指定して呼び出したときに例外を投げなくなりました。
- {{HTMLElement("canvas")}} 要素に Mozilla 固有の `mozGetAsFile()` メソッドが追加されました。これを用いることで、Canvas の内容である画像を含んだメモリーベースのファイルを保持できます。詳細は {{domxref("HTMLCanvasElement")}} を参照してください。
- `Canvas2DContext.lineCap` および `Canvas2DContext.lineJoin` が認識できない値を設定したときに例外を投げなくなりました。
- `Canvas2DContext.globalCompositeOperation` が認識できない値を設定したときに例外を投げなくなりました。また、非標準の値 `darker` をサポートしなくなりました。
- 他のブラウザーでは実装されておらず、非推奨 な要素である `<spacer>` 要素のサポートが無くなりました。
- The `<isindex>` 要素が、{{domxref("Document.createElement()")}} メソッドによって作成されたときに、 一切プロパティもメソッドも持たない単純な要素として作成されるようになりました。
- Gecko に {{HTMLElement("input")}} 要素での `click()`メソッドの呼び出しが追加されました。このメソッドを用いることでファイル選択ダイアログが開けます。[ウェブアプリケーションからファイルを利用する](/ja/docs/Web/API/File_API/Using_files_from_web_applications) の記事内の [例](/ja/docs/Web/API/File_API/Using_files_from_web_applications) を参照してください。
- {{HTMLElement("input")}} 要素に新しい `mozactionhint` 属性が追加されました。これを用いることで仮想キーボード上でのエンターキーのラベルを指定できます。
- {{HTMLElement("script")}} 要素が {{HTMLElement("iframe")}}、{{HTMLElement("noembed")}}、{{HTMLElement("noframes")}} 要素の中でも実行されるようになりました。以前のバージョンの Firefox ではこれらの要素内での実行はされませんでした。これは仕様準拠であり、他のブラウザーの挙動と合致します。

### CSS

- [CSS 座標変換](/ja/docs/Web/CSS/Guides/Transitions/Using)
  - : 新しい CSS 座標変換サポートが Firefox 4 で利用できるようになりました。
- CSS での算出値
  - : `-moz-calc` のサポートが追加されました。これを用いることで、{{cssxref("length")}} の値を数式で指定できます。
- セレクターのグルーピング
  - : セレクターをグループ化しコンビネータを分解する `:-moz-any` がサポートされました。
- 背景画像の部分領域のサポート
  - : {{cssxref("-moz-image-rect")}} 関数を用いることで、画像の一部分の領域 (subrectangle)を背景画像として利用できるようになります。
- CSS touch プロパティ群
  - : touch プロパティ群が追加されました。詳細と正式な記事名は後日追記予定です。
- [CSS 背景として任意の要素を使用する](/ja/docs/Web/CSS/Reference/Values/element)
  - : `-moz-element` CSS 関数と {{domxref("document.mozSetImageElement()")}} DOM 関数を用いることで、任意の HTML 要素を背景として使用することができます。
- [プライバシーと :visited セレクター](/ja/docs/Web/CSS/Guides/Selectors/Privacy_and_:visited)
  - : CSS セレクターを用いた訪問済みリンクのスタイルについて取得できる情報が変更されました。これはいくつかのウェブアプリケーションに影響するかもしれません。

#### 新しい CSS プロパティ

<table>
  <tbody>
    <tr>
      <td>プロパティ</td>
      <td>説明</td>
    </tr>
    <tr>
      <td><code>-moz-font-feature-settings</code></td>
      <td>OpenType フォントの高度な機能を変更できます。</td>
    </tr>
    <tr>
      <td><code>-moz-tab-size</code></td>
      <td>
        テキストを描画するときのタブ文字 (U+0009) の幅を空白文字数で指定します。
      </td>
    </tr>
    <tr>
      <td>{{cssxref("resize")}}</td>
      <td>
        サイズ変更可能な要素の方向を制御できます。
      </td>
    </tr>
  </tbody>
</table>

#### 新しい CSS 擬似クラス

<table>
  <tbody>
    <tr>
      <td>擬似クラス</td>
      <td>説明</td>
    </tr>
    <tr>
      <td>{{cssxref(":-moz-handler-crashed")}}</td>
      <td>プラグインがクラッシュした要素の表示に用いられます。</td>
    </tr>
    <tr>
      <td><code>:-moz-placeholder</code></td>
      <td>フォームフィールドのガイドテキストに適用されます。</td>
    </tr>
    <tr>
      <td>{{cssxref(":-moz-submit-invalid")}}</td>
      <td>
        1 つ、もしくは、複数のフォームフィールドの入力が妥当でないときのフォームの送信ボタンに適用されます。
      </td>
    </tr>
    <tr>
      <td>{{cssxref(":-moz-window-inactive")}}</td>
      <td>アクティブでないウィンドウの要素に適用されます。</td>
    </tr>
    <tr>
      <td>{{cssxref(":invalid")}}</td>
      <td>
        入力が妥当でない {{HTMLElement("input")}} フィールドに自動的に適用されます。
      </td>
    </tr>
    <tr>
      <td>{{cssxref(":optional")}}</td>
      <td>
        <code>required</code> 属性を指定していない {{HTMLElement("input")}} フィールドに自動的に適用されます。
      </td>
    </tr>
    <tr>
      <td>{{cssxref(":required")}}</td>
      <td>
        <code>required</code> 属性を指定した {{HTMLElement("input")}} フィールドに自動的に適用されます。
      </td>
    </tr>
    <tr>
      <td>{{cssxref(":valid")}}</td>
      <td>
          入力が妥当であると判断された {{HTMLElement("input")}} フィールドに自動的に適用されます。
      </td>
    </tr>
  </tbody>
</table>

#### 新しい CSS 擬似セレクター

<table>
  <tbody>
    <tr>
      <td>擬似セレクター</td>
      <td>説明</td>
    </tr>
    <tr>
      <td>{{cssxref(":focus-visible", ":-moz-focusring")}}</td>
      <td>
        Gecko がフォーカスインジケーターを描画すべきとしている要素の見え方を指定できます。
      </td>
    </tr>
  </tbody>
</table>

#### 新しい CSS 関数

<table>
  <tbody>
    <tr>
      <td>関数</td>
      <td>説明</td>
    </tr>
    <tr>
      <td><code>:-moz-any</code></td>
      <td>セレクタのグループ化と結合子の分解をできるようにします。</td>
    </tr>
    <tr>
      <td><code>-moz-calc</code></td>
      <td>
        {{cssxref("length")}} の値を数式で指定できます。
      </td>
    </tr>
    <tr>
      <td><code>-moz-element</code></td>
      <td>
        任意の要素を {{cssxref("background-image")}} および {{cssxref("background")}} の背景として使用できます。
      </td>
    </tr>
    <tr>
      <td><code>-moz-image-rect</code></td>
      <td>
        画像の一部分を {{cssxref("background-image")}} もしくは {{cssxref("background")}} で利用できます。
      </td>
    </tr>
  </tbody>
</table>

#### 改名された CSS プロパティ

| 旧名称                 | 新名称                         | 備考                                                                                                                             |
| ---------------------- | ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| `-moz-background-size` | {{cssxref("background-size")}} | `-moz-background-size` という名称はサポートされません。                                                                          |
| `-moz-border-radius`   | {{cssxref("border-radius")}}   | 旧名称は、サイトを更新するための時間を考慮して、限られた期間サポートされます。描画の変更も仕様の最新版に適合するようになります。 |
| `-moz-box-shadow`      | {{cssxref("box-shadow")}}      |                                                                                                                                  |

#### 小さな CSS の変更

- {{cssxref("text-shadow")}} プロパティのぼかし範囲が 300 までに制限されるようになりました。これは健全さとパフォーマンスの理由によるものです。
- {{cssxref("overflow")}} プロパティがテーブルグループ要素 (`<thead>`、`<tbody>`、および `<tfoot>`) に適用されなくなりました。
- `-moz-appearance` プロパティが要素に境界のない Aero Glass の見た目を適用する `-moz-win-borderless-glass 値をサポートするようになりました。`
- [`-moz-device-pixel-ratio`](/ja/docs/Web/CSS/Reference/At-rules/@media/-moz-device-pixel-ratio) メディア機能が追加されました。これを用いることで、[メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries)で用いられる、CSS ピクセルを基準としたデバイスのピクセル比率を指定できます。
- Gecko の CSS {{cssxref("length")}} 単位の 扱いが他のブラウザーにより良く適合するように、また、絶対的長さをデバイスの DPI を基準にした画面ピクセル数により的確に変換するように修正されました。

### グラフィックとビデオ

- [WebGL](/ja/docs/Web/API/WebGL_API)
  - : 開発中の WebGL 標準が Firefox でサポートされました。
- [WebM ビデオのサポート](/ja/docs/Web/Media/Guides/Formats/Containers#webm)
  - : 新しいオープンな [WebM](http://www.webmproject.org/) 動画形式が Gecko2.0 でサポートされます。
- [SMIL による SVG アニメーション](/ja/docs/Web/SVG/Guides/SVG_animation_with_SMIL)
  - : SVG の SMIL アニメーションのサポートが利用できるようになりました。
- 画像と CSS 背景としての SVG の利用
  - : SVG を {{htmlelement("img")}} 要素とともに、また、CSS の {{cssxref("background-image")}} で利用することができるようになりました。
- メディア要素での `buffered` 属性サポート
  - : {{HTMLElement("video")}} および {{HTMLElement("audio")}} 要素での `buffered` 属性がサポートされました。これを用いることでメディアファイルでバッファリングされた範囲が判断可能になります。これをサポートするために {{domxref("TimeRanges")}} DOM インターフェイスが実装されました。
- メディア要素での `preload` 属性
  - : HTML5 仕様から `preload` 属性が実装されました。これは以前実装された（そしてもうサポートされない）`autobuffer` 属性を置き換えものです。これは {{HTMLElement("video")}} および {{HTMLElement("audio")}} 要素、同様に `nsIDOMHTMLMediaElement` インターフェイスを実装した要素で利用できます。
- SVG text 位置指定の改善
  - : SVG {{SVGElement("text")}} and {{SVGElement("tspan")}} 要素で `x`、`y`、`dx`、および `dy` プロパティの値のためのリストを指定できるようになりました。これを用いることで、文字列中の各文字の位置を個別に制御できます。

### DOM

- [JavaScript 型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
  - : JavaScript 型付き配列 (typed arrays) のサポートが追加されました。これを用いることで、ネイティブデータ型を用いた生のデータを含むバッファーを扱えます。[ファイル API](/ja/docs/Web/API/File)、[WebGL](/ja/docs/Web/API/WebGL_API)、および [WebSockets](/ja/docs/Web/API/WebSockets_API) を含む、いくつかの API でこれを用いることができます。
- 範囲の境界領域の保持
  - : {{domxref("Range")}} オブジェクトに {{domxref("range.getClientRects()")}} および {{domxref("range.getBoundingClientRect()")}} メソッドが追加されました。
- 任意の要素上でのマウスイベントのキャプチャ
  - : Internet Explorer 由来の `setCapture()` と `releaseCapture()`API のサポートが追加されました。[Firefox バグ 503943](https://bugzil.la/503943) を参照してください。
- [ブラウザー履歴の操作](/ja/docs/Web/API/History_API)
  - : {{domxref("window.history")}} オブジェクトを通して利用できる、既存のドキュメント履歴オブジェクトが新しい HTML5 の `pushState()` と `replaceState()` メソッドをサポートするようになりました。
- `MozBeforePaint` を用いたアニメーション
  - : 追加された新しいイベントと `window.mozRequestAnimationFrame()` メソッドおよび `window.mozAnimationStartTime` プロパティを組み合わせることで、互いに同期したアニメーションを作成する方法が提供されます。
- タッチイベントとマルチタッチイベント
  - : タッチイベントとマルチタッチイベントのサポートが追加されました。

#### HTML 要素の DOM インターフェイスの変更

いくつかの HTML 要素に関連づけられた DOM インターフェイスが、以下のように、 HTML5 仕様で要求されるひとつのインターフェイスに変更されました。

| Firefox 3.6 でのインターフェイス                      | Firefox 4 でのインターフェイス                | HTML 要素                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----------------------------------------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`HTMLSpanElement`](/ja/docs/Web/API/HTMLSpanElement) | [`HTMLElement`](/ja/docs/Web/API/HTMLElement) | {{HTMLElement("abbr")}}, {{HTMLElement("acronym")}}, {{HTMLElement("address")}}, {{HTMLElement("b")}}, {{HTMLElement("bdo")}}, {{HTMLElement("big")}}, `<blink>`, {{HTMLElement("center")}}, {{HTMLElement("cite")}}, {{HTMLElement("code")}}, {{HTMLElement("dd")}}, {{HTMLElement("dfn")}}, {{HTMLElement("dt")}}, {{HTMLElement("em")}}, {{HTMLElement("i")}}, {{HTMLElement("kbd")}}, `<listing>`, {{HTMLElement("nobr")}}, {{HTMLElement("plaintext")}}, {{HTMLElement("s")}}, {{HTMLElement("samp")}}, {{HTMLElement("small")}}, {{HTMLElement("strike")}}, {{HTMLElement("strong")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{HTMLElement("tt")}}, {{HTMLElement("u")}}, {{HTMLElement("var")}}, {{HTMLElement("xmp")}} |
| [`HTMLDivElement`](/ja/docs/Web/API/HTMLDivElement)   | [`HTMLElement`](/ja/docs/Web/API/HTMLElement) | {{HTMLElement("noembed")}}, {{HTMLElement("noframes")}}, {{HTMLElement("noscript")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `HTMLWBRElement`                                      | [`HTMLElement`](/ja/docs/Web/API/HTMLElement) | {{HTMLElement("wbr")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

#### 小さな DOM の変更

- `wrap` DOM 属性を利用することで、{{HTMLElement("textarea")}} 要素の折り返しを DOM によってコントロールできるようになりました。[バグ 41464](https://bugzil.la/41464)
- {{domxref("Document.createElement()")}} を用いて作成されてドキュメントに追加された {{HTMLElement("script")}} 要素が、標準で HTML5 仕様に従って動作するようになりました。 `src` 属性で指定されたスクリプトは（順番を調整することはせずに）実行可能になりしだい実行され、`src` 属性で指定されていないスクリプトは同期的に実行されます。`src` 属性を持つ挿入されたスクリプトを挿入された順番で実行するには、それらに `.async=false` を指定します。
- DOM の {{domxref("File")}} オブジェクトが `url` プロパティを提供するようになりました。
- `XMLHttpRequest` で [FormData](/ja/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#using_formdata_objects) がサポートされました。
- {{domxref("HTMLElement.isContentEditable")}} プロパティが実装されました。
- {{domxref("Document.currentScript")}} プロパティを用いることで、現在実行されている {{HTMLElement("script")}} 要素のスクリプトを判別できます。新しく追加された {{domxref("Element/beforescriptexecute_event", "beforescriptexecute")}} および {{domxref("Element/afterscriptexecute_event", "afterscriptexecute")}} イベントは script 要素の実行前後に発生します。
- {{domxref("DataTransfer")}} オブジェクトに `mozSourceNode` プロパティが追加されました。
- {{domxref("Selection")}} オブジェクトに {{domxref("Selection.modify()")}} メソッドが追加されました。このメソッドを用いると、ブラウザーウィンドウでの現在のテキスト選択範囲あるいはカーソル位置を簡単に変更できます。
- `window.directories` オブジェクトと {{domxref("window.open")}} の `directories` 特性（これらは他のブラウザーではサポートされていません）が 削除されました。代わりに `personalbar` を利用してください。[Firefox バグ 474058](https://bugzil.la/474058)
- {{domxref("MouseEvent.mozInputSource")}} プロパティが DOM ユーザーインターフェイスイベントに追加されました。この非標準プロパティを用いると、イベントを生成したデバイスのタイプを判別できます。
- {{domxref("Document")}} の {{domxref("Document/readystatechange_event", "readystatechange")}} イベントが実装されました。
- {{domxref("Document.createElement()")}} メソッドが Quirks モードでタグ名の前後の `<` と `>` を受け入れないようになりました。
- {{domxref("Element.setCapture()")}} および {{domxref("Document.releaseCapture()")}} メソッドが追加され、これらを用いることで、指定要素で `mousedown` イベントが発生した後にマウスが通常の追跡領域を越えても、マウスイベントを追い続けることができます。
- `window.mozPaintCount` プロパティが追加されました。これを用いることで、何回ドキュメントが描画されたかを判定できます。これはウェブアプリケーションのパフォーマンスをテストするときに役立ちます。
- {{domxref("Navigator.appVersion")}} および {{domxref("Navigator.userAgent")}} から言語トークンが削除されました。代わりに {{domxref("Navigator.language")}} もしくは [`Accept-Language`](/ja/docs/Web/HTTP/Guides/Content_negotiation) ヘッダーを利用してください。 [Firefox バグ 572656](https://bugzil.la/572656)
- {{domxref("XMLHttpRequest")}} オブジェクトに追加された Gecko 固有の `mozResponseArrayBuffer` プロパティを用いると、レスポンスを文字列と同様 に JavaScript 型付き配列として扱えます。
- [マウスイベント](/ja/docs/Web/API/MouseEvent)に `mozPressure` プロパティが追加されました。このプロパティは圧力感知をサポートする入力デバイスでの圧力を示します。
- {{domxref("URL/createObjectURL_static", "URL.createObjectURL()")}} および {{domxref("URL.revokeObjectURL_static", "URL.revokeObjectURL()")}} メソッドを用いることで、ローカルファイルを参照するオブジェクト URL を作成できます。
- {{domxref("DOMImplementation.createHTMLDocument()")}} メソッドを用いることで、新しい HTML 文書を作成できます。
- `Node.mozMatchesSelector()` が指定セレクター文字列が妥当ではない場合に正しくない `false` を返すのではなく、`SYNTAX_ERR` 例外を投げるようになりました。
- CSS 同様の省略構文を用いて 要素の SVG プロパティの値を設定できるようになりました。例: `element.style.fill = 'lime'`。詳細は {{domxref("HTMLElement/style", "style")}} を参照してください。
- ドキュメントルートに [`privatebrowsingmode` 属性](https://web.archive.org/web/20210620014429/https://developer.mozilla.org/en-US/docs/Archive/Mozilla/Supporting_private_browsing_mode#detecting_whether_private_browsing_mode_is_permanent)が追加されました。これはプライベートブラウジングがセッションで一時的であるか永続的であるかの状態を含む、プライベートブラウジングモードの状態を示します。
- {{domxref("window.getComputedStyle()")}} メソッドの 2 番目の引数が、他の主なブラウザーと同様に省略可能になりました。
- DOM の {{domxref("StorageEvent")}} オブジェクトが仕様の最新版に合致するようになりました。
- {{domxref("Window.setTimeout", "setTimeout()")}} および {{domxref("WorkerGlobalScope.setTimeout", "setTimeout()")}} メソッドの最小遅延時間を設定するための `dom.min_timeout_value が追加されました。
- [`MozAfterPaint`](https://web.archive.org/web/20191010014917/https://developer.mozilla.org/en-US/docs/Web/Events#Add-on-specific_events) イベントは、潜在的なセキュリティ問題があるため、デフォルトでは送られなくなりました。設定を変更することで有効にできます。

### セキュリティ

- [Content Security Policy (CSP)](/ja/docs/Web/HTTP/Guides/CSP)
  - : Content Security Policy (CSP) は Mozilla が提案するウェブデザイナーとサーバー管理者がウェブサイトの相互利用でどのようなコンテンツを指定するかの仕様です。目的はクロスサイトスクリプティングを含む攻撃とデータインジェクション攻撃を判定し、軽減することです。
- [HTTP Strict Transport Security](/ja/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)
  - : HTTP Strict Transport Security はウェブサイトがブラウザーに HTTP を用いる代わりに HTTPS を用いてのみやり取りすべきであることを伝えるセキュリティ機能です。
- [X-FRAME-OPTIONS レスポンスヘッダー](/ja/docs/Web/HTTP/Reference/Headers/X-Frame-Options)
  - : Internet Explorer 8 で導入された X-FRAME-OPTIONS HTTP レスポンスヘッダーが Firefox でサポートされるようになりました。これを用いることでサイトがページをフレーム内で用いることができるかどうか、フレーム内で利用可能ならば、同じドメイン内に限定するかどうかを指示することができます。
- [User Agent 文字列](/ja/docs/Web/HTTP/Reference/Headers/User-Agent/Firefox) の変更
  - : [HTTP リクエストで送ったデータとエントロピーの総量を減少させるべき](https://bugzil.la/572650)にあるように、 ユーザーエージェント文字列から暗号の強度を表す文字列と言語を表す文字列が削除されました。

### JavaScript

JavaScript 1.8.5 で実装される変更の概要については、[JavaScript 1.8.5 の新機能](https://web.archive.org/web/20210516173330/https://developer.mozilla.org/en-US/docs/Archive/Web/JavaScript/New_in_JavaScript/1.8.5) を参照してください。Firefox 4 における JavaScript は ECMASCript 5 標準へのさらなる順守となる予定です。

### 開発者ツール

- [ウェブコンソールの利用](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)
  - : ウェブコンソールツールはウェブ開発者および拡張開発者のデバッグ作業の補助に役立ちます。

> [!NOTE]
> Gecko 2.0 のメモ(Firefox 4 / Thunderbird 3.3 / SeaMonkey 2.1)エラーコンソールは Firefox 4 からデフォルトで無効化されます。`devtools.errorconsole.enabled` 設定を `true` に変更し、ブラウザーを再起動することで再び有効にすることができます。

## Mozilla およびアドオン開発者向けの変更

Firefox 4 向けに既存の拡張を更新する上で役立つ Tips は、[Updating extensions for Firefox 4](/ja/docs/Mozilla/Firefox/Releases/4/Updating_extensions_for_Firefox_4) を参照してください。ここでは既存のアドオンの互換性を破壊する主な変更点のいくつかを取り上げているだけです。ですから、上記記事も必ず読んでください。

テーマ開発者であるならば、注意する必要がある重要な変更点を理解するために [Theme changes in Firefox 4](https://web.archive.org/web/20210515184532/https://developer.mozilla.org/en-US/docs/Archive/Themes/Theme_changes_in_Firefox_4) を読むべきです。

### 新しい JavaScript コードモジュール

- [Services.jsm](https://web.archive.org/web/20210417185248/https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/Services.jsm)
  - : `Services.jsm` コードモジュールは preferences service や window mediator などのよく用いられているサービスへの参照を簡単に取得できるようにするゲッターを提供します。
- [JS-ctypes API](https://web.archive.org/web/20210528115949/https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes)
  - : JS-ctypes API は C 互換外部ライブラリー関数を XPCOM を利用すること無しに呼び出せるようにします。
- [Add-ons Manager](https://firefox-source-docs.mozilla.org/toolkit/mozapps/extensions/addon-manager/index.html)
  - : 新しい Add-ons Manager はインストールされたアドオンについての情報の提供、それらの管理のためのサポート、および、アドオンのインストールと削除の方法を提供します。
- [PopupNotifications.jsm](https://web.archive.org/web/20210414083224/https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/PopupNotifications.jsm)
  - : 新しいポップアップ通知モジュールを用いることで簡単に魅力的な非モーダルな通知をユーザーに提供できます。この API の使い方は[ポップアップ通知の利用](https://web.archive.org/web/20210411021529/https://developer.mozilla.org/en-US/docs/Mozilla/Using_popup_notifications)で参照できます。
- [chrome: URL からコードモジュールを読み込む](https://web.archive.org/web/20210529003507/https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/Using#locating_the_code_module)
  - : **chrome:** URL を用いて JavaScript コードモジュールを読め込むことができるようになりました。JAR ファイルの中でも可能です。
- DownloadLastDir.jsm
  - : [`DownloadLastDir.jsm`](https://web.archive.org/web/20210615230651/https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/DownloadLastDir.jsm) コードモジュールは `gDownloadLastDir` グローバル変数を提供します。この変数には最後のダウンロードが行われたディレクトリーのパスを知るために利用可能な文字列が含まれています。このモジュールはプライベートブラウジングに対応しています。
- [PerfMeasurement.jsm コードモジュールを用いたパフォーマンスの測定](https://web.archive.org/web/20210420142952/https://developer.mozilla.org/en-US/docs/Mozilla/Performance/Measuring_performance_using_the_PerfMeasurement.jsm_code_module)
  - : [`PerfMeasurement.jsm`](https://web.archive.org/web/20210620175828/https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/PerfMeasurement.jsm) コードモジュールは JavaScript コードにおける CPU レベルでのパフォーマンスデータを測定するための API を提供します。

#### コードモジュールのその他の変更

- `NetUtil.jsm` コードモジュールが `readInputStreamToString()` メソッドを提供するようになりました。これを用いることで、ストリームが null 文字を含んでいても、ストリームから文字列に任意のバイトを読み出せます。
- XPCOMUtils.jsm コードモジュールは、XPCOM 列挙子を反復処理するための IterSimpleEnumerator() および IterStringEnumerator() ヘルパーを提供します。
- [JavaScript コードモジュール内でワーカーを利用](https://web.archive.org/web/20210620192749/https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/Using_workers_in_JavaScript_code_modules)できるようになりました。

### DOM の変更

- `ChromeWorker`
  - : 特権コード向けの新しいタイプのワーカーです。これを用いると、拡張およびアプリケーションコードでワーカーから [js-ctypes](https://web.archive.org/web/20210528115949/https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes) のようなものを用いることができます。
- [タッチイベント](/ja/docs/Web/API/Touch_events)
  - : (非標準の) タッチイベントのサポートが追加されました。これを用いると、タッチスクリーン上で同時に複数の指でトラックできます。

#### その他の DOM の変更

- [新しい "document-element-inserted" 通知](https://web.archive.org/web/20210703204149/https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Observer_Notifications#documents)が文書のルート要素の作成時、ただしスクリプトの実行前に送られます。

### XUL

#### Tabbrowser 要素の変更

いくつかの変更が `<xul:tabbrowser>` 要素になされており、タブ機能の拡張に影響があります。アイコンタブのサポートに加えて、タブバーが標準ツールバーに統合されたという変更もあります。この変更によって、ユーザーがツールバーボタンをそこへドラッグできるようになっています。

- `TabClose`/`TabSelect`/`TabOpen` イベントはもはや `<xul:tabbrowser>` 要素 (`gBrowser`) にバブルアップしません。これらのイベントのためのイベントリスナーは gBrowser 直接ではなく gBrowser.tabContainer に追加すべきです。
- タブコンテキストメニューはもはや tabbrowser の無名の子要素ではありません。それゆえ XUL オーバーレイで直接オーバレイできるようになります。`gBrowser.tabContextMenu` 経由で JavaScript でより直接的にアクセスすることもできます。詳細は[このブログ投稿](https://gavinsharp.com/blog/2010/03/31/accessingmodifying-the-firefox-tab-context-menu-from-extensions/)を参照してください。
- 新たに `visibleTabs` プロパティが追加され、これを用いると、現在表示されているタブの配列を取得することができます。このことにより、現在のタブセットでどのタブが表示されているかを知ることができます。これは例えば、Firefox Panorama で利用されています。
- 新たに `showOnlyTheseTabs` メソッドが追加されました。これは Firefox Panorama で用いられています。
- 新たに `getIcon` メソッドが追加されました。これを用いると、`<xul:browser>` 要素から引っ張り出す必要無しに、 タブのファビコンを得ることができます。
- 新たに `tabbrowser.tabs` プロパティが追加されました。これを用いると、簡単に `<xul:tabbrowser>` 要素内のタブの一覧を取得できます。
- 新たに `pinTab` と `unpinTab` メソッドが追加されました。これを用いると、タブのアイコン化およびタブのアイコン化の解除ができます（つまり、アイコンタブと通常タブを切り替えます）。
- `getTabModalPromptBox` メソッドと `<xul:tabbrowser>` 要素の `tabmodalPromptShowing` 属性がタブモーダルアラートのサポートのために追加されました。

#### ポップアップに対する変更点

- `<xul:popup>` 要素がサポートされなくなりました。代わりに `<xul:menupopup>` 要素を使うべきです。(`popup` 要素を用い続けた場合、その要素にはもはや何の特別な意味もないため、不具合に遭遇するでしょう。例えば、`<xul:menuseparator>` 要素は `<xul:popup>` 要素内で用いたときに透明で表示される可能性があります。)
- `<xul:menupopup>` XUL 要素に `triggerNode` プロパティが追加されました。このプロパティはポップアップを開くイベントが起こったノードを示します。これは `openPopup` メソッドに対するトリガーイベント引数の追加も必要とします。また、 `anchorNode` プロパティも追加されました。このプロパティはポップアップが作成されたときに指定されたアンカーを返します。
- `<xul:panel>` 要素に `fade` および `flip` 属性が追加されました。これらの属性は新しい "arrow" スタイル通知パネルの挙動を設定するために用いられます。

#### リモート XUL サポートの削除

リモート XUL がサポートされなくなりました。 これは HTTP を経由して供給される XUL ドキュメントにのみ影響します。 また、`dom.allow_XUL_XBL_for_file` の設定を作成して、その値を `true` に設定しない限り、`file://` URL 形式を用いた XUL 文書の読み込みも行えなくなります。しかしながら、ホワイトリスト機能を用いることで、特定ドメインのリモート XUL を読み込むことを許可できます。

#### 小さな XUL の変更

- `readonly` 属性がフィールドで正しく動作するようになりました。
- `<xul:resizer>` 要素でウィンドウをリサイズする代わりにリサイズする要素を指定できる `element` 属性を用いることができるようになりました。
- `<xul:resizer>` 要素に `type` 属性が追加され、これを用いることで、要素の変わりにウィンドウのリサイズグリップを指定し、ウィンドウのリサイズグリップが 2 度描画されることを防ぐことができます。
- "active" 属性は XUL ウィンドウでは設定されません。背景ウィンドウに異なるスタイルを指定するための新しい `:-moz-window-inactive` 擬似クラスを利用してください。
- `emptytext` 属性は非推奨になりました。代わりに `placeholder` を用いるべきです。
- `<xul:popup>` 要素はサポートされません。代わりに `<xul:menupopup>` を持ちいるべきです。
- `<xul:window>` 要素が `accelerated` 属性を提供するようになりました。true の場合、ハードウェアレイヤーマネージャがウィンドウをアクセラレーションすることが許可されます。
- `<xul:stack>` 要素が `bottom` と `right` 要素をサポートするようになりました。
- `<xul:tree>` 要素での `alternatingbackground` 属性はサポートされません。代わりに `:-moz-tree-row` 擬似クラスを利用できます。
- anonid chevronPopup を持っていたブックマークツールバーのオーバーフローボタンは無名になりました。それは PlacesChevron の id を持っています。
- `<xul:tabs>` 要素に `tabbox` プロパティが追加されました。これは古い `_tabbox` プロパティを置き換えます。古い方のプロパティは非推奨です（そして決してドキュメント化されません）。
- XUL `<xul:window>` 要素に `drawintitlebar` 属性が追加されました。この値が `true` であれば、ウィンドウのコンテント領域にはタイトルバーが含まれており、タイトルバー内に描画することを許可します。
- 新たに `TabPinned` および `TabUnpinned` イベントが追加され、これを用いることで、タブがアイコン化したかアイコン化が解除されたかを検知できます。
- 新しい `TabAttrModified` イベントはタブの `label`、`crop`、`busy`、 `image`、あるいは、`selected` 属性のいずれかが変化したときに送られます。
- `<xul:tab>` 要素に `pinned` 属性が追加されました。これを用いることで、タブが現在アイコン化されているかどうか判定できます。
- `<xul:tree>` 要素上の `setDirectionIndicator` クラスは何もしないことがありましたが、一切利用されないようになりました。
- `<xul:window>` 要素に `chromemargin` 属性が追加され、これを用いることで、ウィンドウの両端の Chrome とコンテントのマージンを設定できます。例えば、タイトルバーに描画するためにこれを用いることができます。
- `<xul:window>` 要素に `disablechrome` 属性が追加されました。これは `about:addons のように`ブラウザー内 UI に表示するために用いるときにウィンドウで Chrome のほどんどを隠すために用いることができます。
- `<xul:window>` 要素に `disablefastfind` 属性が追加されました。これを用いることで、ウィンドウ内のページ内検索バーを無効にできます。このときコンテント内でページ検索バーはサポートされません。例えば、これはアドオンパネルで使われています。
- ツールバーをツールボックスの外部に置けるようになりました。`<xul:toolbar>` 要素の `toolboxid` プロパティを設定することで、以前のように `<xul:toolbox>` 要素のメンバーとして扱うことができます。また、`<xul:toolbox>` 要素に `externalToolbars` プロパティが追加されました。このプロパティによって、そのツールボックスのメンバーとして扱われるツールバーのすべての一覧を取得できます。
- デバッグ目的向けに logging XUL テンプレートのロギングのサポートが追加されました。

### 開発者に影響がある UI の変更

- [アドオンバー](/ja/docs/Mozilla/Firefox/Releases/4/The_add-on_bar)
  - : ステータスバーが削除され、新しいアドオンバーに置き換えられました。以前にステータスバーに UI を追加していた拡張は更新する必要があります。
- ブラウザーのクロームを隠す
  - : ブラウザーのクロームを隠したいときに、隠せるようになりました。例えば、`about:addons` がこれを用いています。

### Storage

#### 小さなストレージ API の変更

- `mozIStorageBindingParamsArray` インターフェイスが 配列である`mozIStorageBindingParams` オブジェクトの数を示す length 属性を持つようになりました。
- `mozIStorageStatement.bindParameters` が 指定された `mozIStorageBindingParamsArray` が空のときにエラーを返すようになりました。
- `mozIStorageConnection.clone()` メソッドが追加されました。これを用いると、存在するデータベース接続を複製できます。
- `mozIStorageConnection.asyncClose()` が追加されました。これを用いると、非同期にデータベース接続を閉じることができます。クローズ処理が完了したときに通知されるコールバックを指定します。
- `mozIStorageConnection.setGrowthIncrement()` メソッドが追加されました。これを用いると、SQLite のフラグメンテーションを減らすことを助けるために、データベースファイルでの一度の増加量を指定できます。
- `SQLITE_CONSTRAINT` エラーが `NS_ERROR_FAILURE` の代わりに `NS_ERROR_STORAGE_CONSTRAINT` を報告するようになりました。

### XPCOM

以下から参照できる特定の変更に加えて、凍結されたインターフェイスが一切無くなったという重要な変更もあります。すべてのインターフェイスは非凍結となっています。ドキュメンテーションに書いていることに関わらずです。ドキュメンテーションを後ほど更新する予定です。

- [Gecko 2.0 における XPCOM の変更](https://web.archive.org/web/20210514105748/https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Guide/Changes_in_Gecko_2.0)
  - : Firefox 4 で互換性に影響を与える XPCOM への変更についての詳細。
- [Components.utils.getGlobalForObject()](https://web.archive.org/web/20210625071536/https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Language_Bindings/Components.utils.getGlobalForObject)
  - : この新しいメソッドはオブジェクトが属しているグローバルオブジェクトを返します。これは現在削除された `__parent__ の一般的用途を置き換えます。`

### Places

- Places クエリーの結果が複数のオブザーバによって提供されるようになり、それらのクエリーは非同期で実行される可能性があります。このことにより、`nsINavHistoryResult`、`nsINavHistoryQueryOptions`、および`nsINavHistoryContainerResultNode` インターフェイスにいくつかの変更があります。より大きな変更は、`nsINavHistoryResultViewer` インターフェイスが `nsINavHistoryResultObserver` に改名されたことです。
- いくつかの [新しい通知](https://web.archive.org/web/20210703204149/https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Observer_Notifications) が追加されました。この通知を用いると、ブラウザーが Places サービスのシャットダウンプロセスをより確実に追跡できます。これらのうち、ほとんどは内部での利用のためにのみ用意されたものですが、`places-connection-closed` 通知は Places サービスが自身のシャットダウンプロセスを完了したときを知るために利用可能です。
- いくつかの Places のメソッドで配列サイズ出力を指定する引数がオプションになりました。
- `<menupopup type="places">` のサポートが削除されました。代わりに、以前は自動で行なわれていた Places の情報を持つメニューを手動で作成して配置する必要があります。詳細は[メニュービューを用いて Places 情報を表示する](https://web.archive.org/web/20201028190050/https://developer.mozilla.org/en-US/docs/Mozilla/Displaying_Place_information_using_views#menu_view)を参照してください。

### インターフェイスの変更

- `nsIDocShell` および `nsIWebBrowser` インターフェイスに新しく `isActive` 属性が追加されました。これは現在表示されていないドキュメントのためにコードパスを最適化することを許可するために用いることができます。
- `nsIMemory` のメソッドである `isLowMemory()` は非推奨になりました。低メモリー状況を監視するには ["memory-pressure" 通知](https://web.archive.org/web/20210516060454/https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIMemory#low_memory_notifications) を用いることが推奨されます。
- HTTP チャンネル上でリダイレクトを扱う API が非同期で動作できるように変更されました。`nsIChannelEventSink.onChannelRedirect()` を用いてリダイレクトを扱う実装を行なっているコードは `nsIChannelEventSink.asyncOnChannelRedirect` を代わりに用いて更新する必要があります。これはリダイレクトが正常に完了したときに呼び出されるコールバックハンドラーを受け入れます。
- `nsINavHistoryResultObserver.batching()` メソッドが追加されました。このメソッドは Places 操作をバッチにグループ化する方法を提供し、送られてくる更新通知の数を減少させ、その結果、オブザーバが（ビューをリフレッシュするような）相対的にタスクを追加するときのパフォーマンスを向上させます。
- 長い間廃止状態であった `nsIPref` インターフェイスがついに削除されました。まだ `nsIPrefService` に移行していないなら、今がそのときです。
- `nsISessionStore` および `nsISessionStartup` インターフェイスがユーザーの要求に応じたセッションリストアのサポートへの変更を受けとるようになりました。`nsISessionStore.restoreLastSession()` メソッドを参照してください。
- `nsIPrincipal` のメソッドである `nsIPrincipal.subsumes()` および `nsIPrincipal.checkMayLoad()` が `origin`、`csp、` および `URI` 属性同様に、スクリプトから利用可能になりました。以前はこれらはネイティブコードからのみ利用可能でした。
- `nsIPrompt` インターフェイスがタブモーダルアラートをサポートするようになりました。詳細は[タブモーダルプロンプトの利用](https://web.archive.org/web/20210513121539/https://developer.mozilla.org/en-US/docs/Mozilla/Using_tab-modal_prompts)を参照してください。
- `nsIEffectiveTLDService.getPublicSuffixFromHost()` メソッドがピリオド (".") で始まるホスト名を正しく拒否するようになりました。
- `mozIJSSubScriptLoader.loadSubScript()` メソッドには、スクリプトの文字セットを指定できるオプション引数が追加されました。引数が指定されない場合、ASCII が使用されます（従来通り）。
- `nsIAccessProxy` インターフェイスは削除されました。これは実装上の詳細であり、その有用性を終えたものです
- Firefox Mobile 向けに `nsIContentView` および `nsIContentViewManager` インターフェイスが追加されました。これはスクロール可能なコンテンツビューを表し、その内容は実際には別のプロセスによって描画されます。
- `nsIDiskCacheStreamInternal` インターフェイスが追加されました。
- `nsIExternalURLHandlerService` インターフェイスが追加されました。
- `nsISyncJPAKE` インターフェイスが追加されました。詳細は[Firefox バグ 601645](https://bugzil.la/601645)を参照してください。
- `nsIINIParserWriter` インターフェイスは、INI ファイルへの書き込みをサポートするために Gecko 1.9.2.4 で追加されました。

### メモリー管理

- [確実なメモリーアロケーション](https://web.archive.org/web/20201026230445/https://developer.mozilla.org/en-US/docs/Mozilla/Infallible_memory_allocation)
  - : Mozilla は null を返さないことを保証する確実なメモリーアロケーターを複数提供するようになりました。この記事を読んでそれらがどのように動作し、どのようにして不確実な、あるいは、確実なメモリーアロケーションを明確に指定して呼び出すのかを学んでください。

### その他の変更

- Firefox 内に含まれるリソースのほとんどが単一の JAR アーカイブである `omni.jar` にまとめられました。これにより、 I/O が減少し、その結果、起動パフォーマンスが向上しています。詳細は [omni.jar について](https://web.archive.org/web/20210620190432/https://developer.mozilla.org/en-US/docs/Mozilla/About_omni.ja_%28formerly_omni.jar%29)を読んでください。
- `accessibility.disablecache` 設定はサポートされなくなりました。これはデバッグ目的で公開されており、もはや用いられません。
- バージョンアップによって GUID が変更になるアドオンが正しく更新されるようになりました。
- プラットフォーム固有のディレクトリーを削除した副作用として、各プラットフォーム向けに異なった設定を提供することができなくなりました。
- デフォルトで、[拡張はインストール時に展開されなくなりました](https://web.archive.org/web/20130707104214/https://blog.mozilla.org/mwu/2010/09/10/extensions-now-installed-packed/)。その代わりに XPI ファイルから直接実行されます。拡張は古い挙動を選択するために[インストールマニフェスト](https://web.archive.org/web/20210421140209/https://developer.mozilla.org/en-US/docs/Archive/Add-ons/Install_Manifests)内で [unpack](https://web.archive.org/web/20210421140209/https://developer.mozilla.org/en-US/docs/Archive/Add-ons/Install_Manifests#unpack) プロパティを使用できます。バイナリーコンポーネントや、[js-ctypes](https://web.archive.org/web/20210528115949/https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes) を利用して読み込まれる DLL、[検索プラグイン](/ja/docs/Web/XML/Guides/OpenSearch)、辞書、ウィンドウアイコンは展開される必要があるように指定しなければなりません。[SQLite データベースを生成する](https://web.archive.org/web/20201109001036/https://developer.mozilla.org/en-US/docs/Archive/Add-ons/Overlay_Extensions/XUL_School/Local_Storage#sqlite)拡張や、拡張ディレクトリーからファイルシステムへ相対的に何かをコピーする拡張も、それらのコードを変更する必要があるかもしれません。
- カスタマイズされた Firefox に[アプリケーションスタートアップ時に自動でインストールされる](https://web.archive.org/web/20180604010849/https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Customizing_Firefox#including_extensions_with_your_distribution_of_firefox)拡張を含められるようになりました。

## その他の変更

- ルートの chrome.manifest ファイルだけが読み込まれるように
  - : ルートの `chrome.manifest` ファイルだけが読み込まれるようになりました。 2 つ以上のマニフェストファイルを読み込む必要がある場合は、ルートの `chrome.manifest` でそれらを読み込むために [`manifest`](https://web.archive.org/web/20191029205045/https://developer.mozilla.org/en-US/docs/Mozilla/Chrome_Registration#manifest) コマンドを使用できます。
- Gopher サポートの削除
  - : Gopher プロトコルがネイティブでサポートされなくなりました。継続してサポートを受けるには [OverbiteFF](https://addons.mozilla.org/en-US/firefox/addon/overbitenx/) 拡張を利用できます。
- [コンテントプロセスイベントハンドリング](https://web.archive.org/web/20210531151101/https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Multiprocess_Firefox/Message_Manager)
  - : out-of-process プラグインのサポートとその他の multiple-process 機能をサポートするために、プロセス間でメッセージを送ることをサポートするための新しい API が導入されました。
- [ブートストラップ拡張](https://web.archive.org/web/20210519000929/https://developer.mozilla.org/en-US/docs/Archive/Add-ons/Bootstrapped_extensions)
  - : ブラウザーを再起動せずにインストール、アンインストール、更新（またはダウングレード）できる拡張を作成できるようになりました。
- デフォルトプラグイン の削除
  - : デフォルトプラグインが削除されました。アプリケーションプラグインフォルダーもデフォルトで削除されますが、このフォルダー経由でプラグインをインストールするためのサポートはまだ存在します。[Firefox バグ 533891](https://bugzil.la/533891) を参照してください。
- Extension Manager の AddonManager への置き換え
  - : `nsIExtensionManager` は [AddonManager](https://firefox-source-docs.mozilla.org/toolkit/mozapps/extensions/addon-manager/AddonManager.html) に置き換えられました。
- 子 HWND はもはや利用されません
  - : Firefox は Windows で内部利用していた 子 HWND を作成しないようになりました。これらの HWND を扱うネィティブコードを用いる拡張を書いていた場合、その拡張は Firefox 4 では動作しないでしょう。HWND を用いることを止めるか、NPAPI プラグインで HWND に依存するコードをラップする必要があります。それは多大な作業であり、HWND を直接用いることを避けられるならば、そうすべきです。
- ジェスチャの変更
  - : トラックパッド上の 3 本指の上下スワイプジェスチャが、デフォルトで、Firefox Panorama (旧称 TabCandy) の開閉に変更されました。これらの変更を以前の scroll-to-top および scroll-to-bottom コマンドに戻すには、about:config を開き、`browser.gesture.swipe.down` を `cmd_scrollBottom` にし、`browser.gesture.swipe.up` を `cmd_scrollTop` に設定してください。
