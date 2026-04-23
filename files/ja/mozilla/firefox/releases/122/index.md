---
title: Firefox 122 for developers
slug: Mozilla/Firefox/Releases/122
l10n:
  sourceCommit: 6f56b2dbc0229d381a5e63cf763a77883ee23906
---

このページでは、開発者に影響する Firefox 122 の変更点をまとめています。Firefox 122 は、米国時間 [2024 年 1 月 23 日](https://whattrainisitnow.com/release/?version=122) にリリースされました。

## ウェブ開発者向けの変更点一覧

### HTML

- {{HTMLElement("hr")}} 要素が、{{HTMLElement("select")}} 要素の子要素として認められるようになりました。これは、多くの項目がある選択リストの読みやすさを向上させる新機能です ([Firefox bug 1830909](https://bugzil.la/1830909))。
- {{HTMLElement("ol")}} で `type` HTML 属性を `none`、`disc`、`circle`、`square` に設定した場合、および {{HTMLElement("ul")}} で `type` HTML 属性を `1`、`a`、`A`、`i`、`I` に設定した場合に、影響を与えないようになりました。`<ul>` および `<ol>` のリストで `type` は非推奨の属性であるため、代わりに {{CSSxref("list-style-type")}} CSS プロパティでスタイルを設定してください ([Firefox bug 1868087](https://bugzil.la/1868087))。

### CSS

- CSS の {{cssxref("offset-position")}} プロパティをデフォルトで有効にしました。これは、パスにおける要素の初期位置を定義します ([Firefox bug 1598152](https://bugzil.la/1598152))。

- [`<basic-shape>`](/ja/docs/Web/CSS/Reference/Properties/offset-path#basic-shape)、[`<coord-box>`](/ja/docs/Web/CSS/Reference/Properties/offset-path#coord-box)、[`url()`](/ja/docs/Web/CSS/Reference/Properties/offset-path#url) といった、CSS の {{cssxref("offset-path")}} を定義するためのさまざまな方法をデフォルトで有効にしました ([Firefox bug 1598159](https://bugzil.la/1598159))。

- CSS の {{cssxref("ray")}} 関数をデフォルトで有効にしました。この関数を使用して、{{cssxref("offset-position")}} から始まって指定した角度の方向へ伸びる線分として {{cssxref("offset-path")}} を定義できます ([Firefox bug 1598151](https://bugzil.la/1598151))。

- {{CSSxref("clip-path")}} および {{CSSxref("offset-path")}} プロパティが、[`rect()`](/ja/docs/Web/CSS/Reference/Values/basic-shape/rect) および [`xywh()`](/ja/docs/Web/CSS/Reference/Values/basic-shape/xywh) シェイプ関数を受け入れるようになりました。これらの {{CSSXref("basic-shape")}} 値は、要素の端からの距離で定義する長方形 (`rect()`) または座標とサイズ (`xywh()`) で要素の切り抜きや移動を可能にします ([Firefox bug 1868722](https://bugzil.la/1868722))。

### JavaScript

- {{jsxref("ArrayBuffer.prototype.transfer()")}} および {{jsxref("ArrayBuffer.prototype.transferToFixedLength()")}} メソッドを、ある {{jsxref("ArrayBuffer")}} から別の ArrayBuffer へメモリーの [所有権を転送する](/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer#transferring_arraybuffers) ために使用できるようになりました。転送後は、元のバッファーが元のメモリーから切り離されて使用できなくなります。状態は {{jsxref("ArrayBuffer.prototype.detached")}} を使用して確認できます (詳しくは [Firefox bug 1865103](https://bugzil.la/1865103) をご覧ください)。

- ほかのブラウザーに合わせるため [`Date.parse()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) および [`Date()` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/Date) は、[標準外の日付文字列](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#標準外の日付文字列) を解析するときに、指定された月の最初の 3 文字だけを考慮するようになりました。以前は、完全な月の名前を 3 文字以上に切り詰めた値だけを受け入れていました (詳しくは [Firefox bug 1862910](https://bugzil.la/1862910) をご覧ください)。

### SVG

#### 廃止

- [XSS](/ja/docs/Glossary/Cross-site_scripting) 攻撃を防ぐため、SVG の `<use>` 要素および [`SVGUseElement`](/ja/docs/Web/API/SVGUseElement) インターフェイスで `data:` URLのサポートを廃止しました。
  セキュリティ上の理由で非推奨ですが、設定項目 `svg.use-element.data-url-href.allowed` を `true` に設定することでレガシー機能を再び有効にできます ([Firefox bug 1806964](https://bugzil.la/1806964))。

### API

- [LargestContentfulPaint API](/ja/docs/Web/API/LargestContentfulPaint) をサポートしました。
  この API は [Performance APIs](/ja/docs/Web/API/Performance_API) の一部であり、ユーザーがウェブページと対話する前に最大の画像やテキスト描画に関するタイミング情報を提供します ([Firefox bug 1866266](https://bugzil.la/1866266))。

#### DOM

- ユーザー操作によって発生したときに {{HTMLElement("select")}} 要素のブラウザーの選択ツールをプログラムから起動できるようにする、{{domxref("HTMLSelectElement.showPicker()")}} メソッドをサポートしました ([Firefox bug 1865207](https://bugzil.la/1865207))。

#### 廃止

- CSS の [`-moz-user-focus`](/ja/docs/Web/CSS/Reference/Properties/-moz-user-focus) プロパティのサポートを廃止しました ([Firefox bug 1871745](https://bugzil.la/1871745) および [Firefox bug 1868552](https://bugzil.la/1868552))。

### WebDriver conformance (WebDriver BiDi, Marionette)

#### 一般

- [Perform Actions](https://w3c.github.io/webdriver/#perform-actions) が、`mouse` 入力ソースのダブルクリックやほかのマルチクリックのイベントを適切に合成することを妨げる不具合を修正しました ([Firefox bug 1864614](https://bugzil.la/1864614))。またこれらのイベントは、直前のクリックアクションから実際のマウスの位置が変わっていない場合に限り発生するようになります ([Firefox bug 1681076](https://bugzil.la/1681076))。
- `Pause` キーおよび `Equal` キー (テンキー部分) の定義を、WebDriver 仕様に合致するように更新しました ([Firefox bug 1863687](https://bugzil.la/1863687))。

#### WebDriver BiDi

- `WindowProxy` リモートオブジェクトのシリアライズが、プロセス外 iframe でも正しく動作するようになりました ([Firefox bug 1867667](https://bugzil.la/1867667))。
- [browsingContext.setViewport](https://w3c.github.io/webdriver-bidi/#command-browsingContext-setViewport) コマンドが、`viewport` 引数の値として `undefined` と `null` を区別するようになりました。`undefined` に設定すると、ビューポートが変更されないままにするべきであることを示します。一方 `null` を使用すると、ビューポートを元の寸法にリセットします ([Firefox bug 1865618](https://bugzil.la/1865618))。
- [browsingContext.traverseHistory](https://w3c.github.io/webdriver-bidi/#command-browsingContext-traverseHistory) コマンドをサポートしました。ブラウザーの履歴で前へ戻る・次へ進むナビゲーションを可能にします ([Firefox bug 1841018](https://bugzil.la/1841018))。
- iframe でナビゲーションが発生した場合でもトップレベルの閲覧コンテキストの `context` ID が、すべてのサポート済みのネットワークイベントで一貫して報告される不具合を修正しました ([Firefox bug 1869735](https://bugzil.la/1869735))。

#### Marionette

- 要素が ShadowRoot のスロットに置かれているときに、[Get Element Text](https://w3c.github.io/webdriver/#dfn-get-element-text) が誤って空文字列を返す不具合を修正しました ([Firefox bug 1824664](https://bugzil.la/1824664))。

## 実験的なウェブ機能

以下の機能は Firefox 122 で新たに導入しましたが、デフォルトで無効です。これらを実験するには、`about:config` ページで適切な設定項目を検索して `true` に設定してください。[実験的機能](/ja/docs/Mozilla/Firefox/Experimental_features) のページで、さらに多くの機能を確認できます。

- **宣言的なシャドウ DOM:** `dom.webcomponents.shadowdom.declarative.enabled`。

  {{htmlelement("template")}} 要素で `shadowrootmode` 属性をサポートしました。{{domxref("Element.attachShadow()", "attachShadow()")}} メソッドの `mode` オプションと同じく、`open` または `closed` を設定できます。これは、シャドウ DOM のサブツリーを宣言的に作成することを可能にします ([Firefox bug 1712140](https://bugzil.la/1712140))。

- **シャドウ DOM の cloneable オプションとプロパティ**
  - {{domxref("Element.attachShadow()")}} メソッドで `clonable` ブール型オプションをサポートしました。これは、作成したシャドウルートが複製可能かを指定します。既定値は `false` であり、`true` に設定すると {{domxref("Node.cloneNode()")}} または {{domxref("Document.importNode()")}} で複製されたシャドウホストは、複製にシャドウルートが含まれます。
  - {{domxref("ShadowRoot")}} インターフェイスで、読み取り専用の {{domxref("ShadowRoot.clonable", "clonable")}} プロパティをサポートしました。シャドウルートが複製可能である場合は `true`、そうでない場合は `false` を返します。宣言的なシャドウ DOM で作成したシャドウルートは常に `true` を返します。

  宣言的なシャドウ DOM でシャドウルートを作成するときはデフォルトで `clonable` オプションが `true` に設定されるため、`clonable` プロパティは `true` を返します([Firefox bug 1712140](https://bugzil.la/1868428))。

- **Popover API:** `dom.element.popover.enabled`。

  HTML 属性や JavaScript API を使用して、ページコンテンツの上にポップオーバーを表示する機能をサポートしました。これは CSS の [`:popover-open`](/ja/docs/Web/CSS/Reference/Selectors/:popover-open) 擬似クラスや [`::backdrop`](/ja/docs/Web/CSS/Reference/Selectors/::backdrop) 擬似要素のサポート強化が含まれます。詳しくは [Popover API](/ja/docs/Web/API/Popover_API) のリファレンスをご覧ください ([Firefox bug 1823757](https://bugzil.la/1823757))。

- **クリップボードの読み書き:** `dom.events.asyncClipboard.clipboardItem`、`dom.events.asyncClipboard.readText`、`dom.events.asyncClipboard.writeText`。

  {{domxref('ClipboardItem')}} インターフェイスの [`read()`](/ja/docs/Web/API/Clipboard/read)、[`readText()`](/ja/docs/Web/API/Clipboard/readText)、[`write()`](/ja/docs/Web/API/Clipboard/write) メソッドを含む、非同期の {{domxref('Clipboard API')}} を完全サポートしました。同一オリジンではないページから提供されたクリップボードのデータを読み取るとき、確認のためユーザーに貼り付けのコンテキストメニュー表示されます ([Firefox bug 1809106](https://bugzil.la/1809106))。

- **`Intl.Segmenter`:** Firefox Nightly に限り、デフォルトで有効です。

  {{jsxref("Intl.Segmenter")}} オブジェクトは、文字列でロケールに依存した正確なテキスト分割を可能にします。たとえば、単語を分けるためにスペースを使用しない言語でテキストを単語に分割するには `Intl.Segmenter("ja-JP", { granularity: "word" })` とします ([Firefox bug 1423593](https://bugzil.la/1423593))。

## 過去のバージョン

{{Firefox_for_developers(121)}}
