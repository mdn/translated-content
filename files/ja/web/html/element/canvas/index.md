---
title: "<canvas>: グラフィックキャンバス要素"
slug: Web/HTML/Element/canvas
l10n:
  sourceCommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{HTMLSidebar}}

**HTML の `<canvas>` 要素** と [キャンバススクリプティング API](/ja/docs/Web/API/Canvas_API) や [WebGL API](/ja/docs/Web/API/WebGL_API) を使用して、グラフィックやアニメーションを描画することができます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >,
        <a href="/ja/docs/Web/HTML/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >,
        <a href="/ja/docs/Web/HTML/Content_categories#埋め込みコンテンツ"
          >埋め込みコンテンツ</a
        >, 知覚可能コンテンツ
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        透過的コンテンツ、ただし子孫に<a
          href="/ja/docs/Web/HTML/Content_categories#対話型コンテンツ"
          >対話型コンテンツ</a
        >のうち {{HTMLElement("a")}} 要素,
        {{HTMLElement("button")}} 要素, {{HTMLElement("input")}}
        要素の <a href="/ja/docs/Web/HTML/Element/input#type"><code>type</code></a> 属性が
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
        <a href="/ja/docs/Web/HTML/Content_categories#記述コンテンツ"
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

## 属性

他のすべての HTML 要素と同様に、[グローバル属性](/ja/docs/Web/HTML/Global_attributes)を持ちます。

- `height`
  - : CSS ピクセルで示した座標空間の高さ。既定では 150 ピクセルに設定されています。
- `moz-opaque` {{non-standard_inline}} {{deprecated_inline}}
  - : canvas に半透明性がファクターになるかを知らせます。キャンバスは半透明性がないことがわかっていれば、描画パフォーマンスを最適化できます。これは Mozilla ベースのブラウザーしか対応していません。代わりに標準化された {{domxref("HTMLCanvasElement.getContext()", "canvas.getContext('2d', { alpha: false })")}} を使用してください。
- `width`
  - : CSS ピクセルで示した座標空間の幅。既定では 300 ピクセルに設定されています。

## 使用上の注意

### 代替コンテンツ

`<canvas>` のブロックの中で、代替コンテンツを提供すべきです。その内容物は、 canvas に対応しない古いブラウザーおよび JavaScript が無効であるブラウザーで描画されます。

### \</canvas> タグが必要

{{HTMLElement("img")}} 要素とは異なり、 {{HTMLElement("canvas")}} 要素は終了タグ (`</canvas>`) が**必要です**。

### CSS と HTML におけるキャンバスの寸法指定の違い

表示されるキャンバスの寸法は、スタイルシートを用いて変更できますが、そうすると画像はスタイルで設定した寸法に合うように拡大縮小され、最終的なグラフィックが歪んで表示されることがあります。

キャンバスの寸法は、HTML または JavaScript を用いて `width` および `height` 属性を `<canvas>` 要素に直接設定するした方がいいでしょう。

### キャンバスの最大寸法

`<canvas>` 要素の最大寸法はとても広いのですが、正確な寸法はブラウザーに依存します。以下のものは様々なテストやその他の情報源（[Stack Overflow](https://stackoverflow.com/questions/6081483/maximum-size-of-a-canvas-element) など）から収集したいくらかのデータです。

| ブラウザー | 最大高        | 最大幅        | 最大面積                                    |
| ---------- | ------------- | ------------- | ------------------------------------------- |
| Chrome     | 32,767 pixels | 32,767 pixels | 268,435,456 pixels (つまり 16,384 x 16,384) |
| Firefox    | 32,767 pixels | 32,767 pixels | 472,907,776 pixels (つまり 22,528 x 20,992) |
| Safari     | 32,767 pixels | 32,767 pixels | 268,435,456 pixels (つまり 16,384 x 16,384) |
| IE         | 8,192 pixels  | 8,192 pixels  | ?                                           |

> [!NOTE]
> 寸法や面積の最大値を超えると、キャンバスが使用できなくなります。 — 描画コマンドが動作しなくなります。

## 例

### HTML

このコードスニペットは、 HTML 文書に canvas 要素を追加します。ブラウザーがキャンバスをレンダリングできない場合や、キャンバスを読み込めない場合には、代替テキストが提供されます。

```html
<canvas width="300" height="300">
  キャンバスの表示内容を説明する代替テキストです。
</canvas>
```

### JavaScript

それから JavaScript コード内で {{domxref("HTMLCanvasElement.getContext()")}} を呼び出して描画コンテキストを取得し、キャンバス上に描画を開始します。

```js
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "green";
ctx.fillRect(10, 10, 100, 100);
```

### 結果

{{EmbedLiveSample('Examples')}}

## アクセシビリティの考慮

### 代替コンテンツ

`<canvas>` 要素は単なるビットマップであり、描かれたオブジェクトに関する情報は提供しません。キャンバスのコンテンツには、セマンティック HTML のようなアクセシビリティツールには公開されていません。一般的に、アクセシビリティに配慮したウェブサイトやアプリではキャンバスを使用しないでください。アクセシビリティを改善するには、以下のガイドが役立ちます。

- [Canvas accessibility use cases](https://www.w3.org/WAI/PF/HTML/wiki/Canvas_Accessibility_Use_Cases)
- [Canvas element accessibility issues](https://www.w3.org/html/wg/wiki/AddedElementCanvas)
- [HTML Canvas Accessibility in Firefox 13 – by Steve Faulkner](https://www.tpgi.com/html5-canvas-accessibility-in-firefox-13/)
- [Best practices for interactive canvas elements](https://html.spec.whatwg.org/multipage/scripting.html#best-practices)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [MDN のキャンバスポータル](/ja/docs/Web/API/Canvas_API)
- [キャンバスチュートリアル](/ja/docs/Web/API/Canvas_API/Tutorial)
- [キャンバス関連のデモ](/ja/docs/Web/Demos#canvas)
- [キャンバス早見表 (2009)](https://simon.html5.org/dump/html5-canvas-cheat-sheet.html)
- [キャンバス早見表 (pdf) (2015)](https://websitesetup.org/wp-content/uploads/2015/11/Infopgraphic-CanvasCheatSheet-Final2.pdf)
- [キャンバス早見表 (pdf)](https://www.coding-dude.com/wp/wp-content/uploads/2020/09/HTML5-canvas-cheat-sheet.pdf)
- [Apple によるキャンバスの紹介 (2013)](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/HTML-canvas-guide/Introduction/Introduction.html)
