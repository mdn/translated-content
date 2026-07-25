---
title: HTML `<s>` 取り消し要素
short-title: <s>
slug: Web/HTML/Reference/Elements/s
l10n:
  sourceCommit: 2bb6edfe996e099d7cbe0d0e2635a76e00a788cc
---

**`<s>`** は [HTML](/ja/docs/Web/HTML) の要素で、テキストを取り消し線または打ち消し線つきで描画します。`<s>` 要素はすでに適切または正確ではなくなった事柄を表現するために使用してください。しかし、文書の修正を示す場合、 `<s>` 要素は適切ではありません。この場合は {{HTMLElement("del")}} と {{HTMLElement("ins")}} の方が適しているので、こちらを使用してください。

{{InteractiveExample("HTML デモ: &lt;s&gt;", "tabbed-shorter")}}

```html interactive-example
<p><s>今夜、チケット売り場で若干のチケットが販売される予定です。</s></p>

<p>売り切れ!</p>
```

```css interactive-example
s {
  /* ここにスタイルを追加 */
}
```

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)のみがあります。

## アクセシビリティ

`s` 要素が存在することは、多くのスクリーンリーダー技術の既定の設定ではアナウンスされません。 CSS の {{cssxref("content")}} プロパティを、 {{cssxref("::before")}} および {{cssxref("::after")}} 擬似要素と共に使うことでアナウンスさせることができます。

```css
s::before,
s::after {
  clip-path: inset(100%);
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

s::before {
  content: " [取り消しテキスト開始] ";
}

s::after {
  content: " [取り消しテキスト終了] ";
}
```

スクリーンリーダーを使用する人によっては、特に冗長になるコンテンツのアナウンスを意図的に無効にしていることがあります。このため、この手法を悪用しないようにすることは重要であり、コンテンツが取り消しされていることを知らないと理解に影響するような場面でのみ使用するようにしてください。

- [Short note on making your mark (more accessible) | Vispero](https://vispero.com/resources/short-note-on-making-your-mark-more-accessible/)
- [Tweaking Text Level Styles, Reprised | Adrian Roselli](https://adrianroselli.com/2025/04/tweaking-text-level-styles-reprised.html)

## 例

```css
.sold-out {
  text-decoration: line-through;
}
```

```html
<s>本日のおすすめ: サーモン</s> 売り切れ<br />
<span class="sold-out">本日のおすすめ: サーモン</span> 売り切れ
```

### 結果

{{EmbedLiveSample("Examples")}}

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
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >,
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >
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
        <code
          ><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles#structural_roles_with_html_equivalents">deletion</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>すべて</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("strike")}} 要素は、`<s>` 要素の分身でしたが、廃止されており、もうウェブサイトで使用するべきではありません。
- {{HTMLElement("del")}} 要素は、データが削除された場合に代わりに使用するべきものです。
- CSS の {{cssxref("text-decoration-line")}} プロパティは、`<s>` 要素の以前の視覚効果を実現します。
