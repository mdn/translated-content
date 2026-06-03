---
title: HTML `<canvas>` グラフィックキャンバス要素
short-title: <canvas>
slug: Web/HTML/Reference/Elements/canvas
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

**HTML の `<canvas>` 要素** と [キャンバススクリプティング API](/ja/docs/Web/API/Canvas_API) や [WebGL API](/ja/docs/Web/API/WebGL_API) を使用して、グラフィックやアニメーションを描画することができます。

## 属性

他のすべての HTML 要素と同様に、[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)を持ちます。

- `height`
  - : CSS ピクセル数で示した座標空間の高さ。デフォルトでは 150 ピクセルに設定されています。
- `moz-opaque` {{non-standard_inline}} {{deprecated_inline}}
  - : canvas に半透明性がファクターになるかを知らせます。キャンバスは半透明性がないことがわかっていれば、描画パフォーマンスを最適化できます。これは Mozilla ベースのブラウザーしか対応していません。代わりに標準化された {{domxref("HTMLCanvasElement.getContext()", "canvas.getContext('2d', { alpha: false })")}} を使用してください。
- `width`
  - : CSS ピクセル数で示した座標空間の幅。デフォルトでは 300 ピクセルに設定されています。

## 使用上の注意

### 代替コンテンツ

`<canvas>` のブロックの中で、代替コンテンツを提供すべきです。その内容物は、 canvas に対応しない古いブラウザーおよび JavaScript が無効であるブラウザーで描画されます。

### `</canvas>` 終了タグ

{{HTMLElement("img")}} 要素とは異なり、`<canvas>` 要素は終了タグ (`</canvas>`) が**必要です**。

### CSS と HTML におけるキャンバスの寸法指定の違い

表示されるキャンバスの寸法は、スタイルシートを用いて変更できますが、そうすると画像はスタイルで設定した寸法に合うように拡大縮小され、最終的なグラフィックが歪んで表示されることがあります。

キャンバスの寸法は、HTML または JavaScript を用いて `width` および `height` 属性を `<canvas>` 要素に直接設定するした方がいいでしょう。

### キャンバスの最大寸法

`<canvas>` 要素の正確な最大サイズは、ブラウザーや環境によって異なります。ほとんどの場合、最大サイズは 10,000 × 10,000 ピクセルを超えますが、特に iOS端末では、キャンバスのサイズが 4,096 × 4,096 ピクセルに制限されています。[さまざまなブラウザーおよび端末におけるキャンバスのサイズ制限](https://jhildenbiddle.github.io/canvas-size/#/?id=test-results)<sup>（英語）</sup>を参照してください。

> [!NOTE]
> 寸法や面積の最大値を超えると、キャンバスが使用できなくなります。 — 描画コマンドが動作しなくなります。

### オフスクリーンキャンバスの使用

{{domxref("OffscreenCanvas")}} API を使用すると、文書とキャンバスを分離した状態でキャンバスを描画することができます。
この利点は、[ワーカースレッド](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)がキャンバスの描画を処理できるため、ウェブアプリケーションのメインスレッドがキャンバス操作によってブロックされないことです。
処理を並列化することで、オフスクリーンキャンバス上で複雑なグラフィックを実行している場合でも、ウェブアプリケーションの他の UI の要素は応答性が維持されます。
詳細については、{{domxref("OffscreenCanvas")}} API のドキュメントをご覧ください。

## アクセシビリティ

### 代替コンテンツ

`<canvas>` 要素は単なるビットマップであり、描かれたオブジェクトに関する情報は提供しません。キャンバスのコンテンツは、セマンティック HTML のようにはアクセシビリティツールに公開されません。一般的に、アクセシビリティに配慮したウェブサイトやアプリではキャンバスを使用しないでください。アクセシビリティを改善するには、以下のガイドが役立ちます。

- [Canvas accessibility use cases](https://www.w3.org/WAI/PF/HTML/wiki/Canvas_Accessibility_Use_Cases)
- [Canvas element accessibility issues](https://www.w3.org/html/wg/wiki/AddedElementCanvas)
- [Best practices for interactive canvas elements](https://html.spec.whatwg.org/multipage/scripting.html#best-practices)

## 例

### HTML

このコードスニペットは、 HTML 文書に canvas 要素を追加します。ブラウザーがキャンバスをレンダリングできない場合や、キャンバスを読み込めない場合には、代替テキストが提供されます。

```html
<canvas width="120" height="120">
  キャンバスの表示内容を説明する代替テキストです。
</canvas>
```

### JavaScript

それから JavaScript コード内で {{domxref("HTMLCanvasElement.getContext()")}} を呼び出して描画コンテキストを取得し、キャンバス上に描画を開始します。

```js
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "green";
// (10, 10) の位置に 100×100 ピクセルのサイズの矩形を追加
ctx.fillRect(10, 10, 100, 100);
```

### 結果

{{EmbedLiveSample('Examples', 600, 150)}}

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Guides/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >,
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >,
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#埋め込みコンテンツ"
          >埋め込みコンテンツ</a
        >, 知覚可能コンテンツ
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        透過的コンテンツ、ただし子孫に<a
          href="/ja/docs/Web/HTML/Guides/Content_categories#対話型コンテンツ"
          >対話型コンテンツ</a
        >のうち {{HTMLElement("a")}} 要素,
        {{HTMLElement("button")}} 要素, {{HTMLElement("input")}}
        要素の <a href="/ja/docs/Web/HTML/Reference/Elements/input#type"><code>type</code></a> 属性が
        <code>checkbox</code>, <code>radio</code>,
        <code>button</code> のいずれか以外を含まないもの
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >を受け入れるすべての要素
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >対応するロールなし</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>すべて</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLCanvasElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [キャンバス API](/ja/docs/Web/API/Canvas_API)
- [キャンバスのチュートリアル](/ja/docs/Web/API/Canvas_API/Tutorial)
- [OffscreenCanvas](/ja/docs/Web/API/OffscreenCanvas)
- [キャンバス早見表](https://simon.html5.org/dump/html5-canvas-cheat-sheet.html)<sup>（英語）</sup> (2009)
- [キャンバス早見表](https://websitesetup.org/wp-content/uploads/2015/11/Infopgraphic-CanvasCheatSheet-Final2.pdf)<sup>（英語）</sup> (pdf) (2015)
- [Safari HTML キャンバスガイド](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/HTML-canvas-guide/Introduction/Introduction.html) - Apple (2013)
- [`CanvasRenderingContext2D` 2D drawing context for a canvas element](https://developer.apple.com/documentation/webkitjs/canvasrenderingcontext2d) - Apple.com
- [WebGL](/ja/docs/Web/API/WebGL_API) API
- {{HTMLElement("img")}}
- [SVG](/ja/docs/Web/SVG)
- [HTML 動画と音声](/ja/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
