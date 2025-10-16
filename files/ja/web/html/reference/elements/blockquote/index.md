---
title: "<blockquote>: ブロック引用要素"
slug: Web/HTML/Reference/Elements/blockquote
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

**`<blockquote>`** は [HTML](/ja/docs/Web/HTML) 要素で、内包する要素のテキストが引用文であることを示します。通常、字下げして表示されます（整形方法については[注意](#使用上の注意)の項を参照してください）。引用元の URL は `cite` 属性により与えることができ、引用元のテキスト表現は {{HTMLElement("cite")}} 要素を用いて与えることができます。

{{InteractiveExample("HTML デモ: &lt;blockquote&gt;", "tabbed-standard")}}

```html interactive-example
<div>
  <blockquote cite="https://www.huxley.net/bnw/four.html">
    <p>
      Words can be like X-rays, if you use them properly—they’ll go through
      anything. You read and you’re pierced.
    </p>
  </blockquote>
  <p>—Aldous Huxley, <cite>Brave New World</cite></p>
</div>
```

```css interactive-example
div:has(> blockquote) {
  background-color: #ededed;
  margin: 10px auto;
  padding: 15px;
  border-radius: 5px;
}

blockquote p::before {
  content: "\201C";
}

blockquote p::after {
  content: "\201D";
}

blockquote + p {
  text-align: right;
}
```

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)があります。

- `cite`
  - : 引用元の文書の URL、または引用元の情報に関するメッセージを示します。この属性は、引用文の背景や出典についての説明を指し示すためのものです。

## 使用上の注意

仕様書によると、引用文の出典がある場合は、 `<blockquote>` 要素の外側に配置しなければなりません。

引用された文字列に適用される字下げを変更するには、 {{Glossary("CSS")}} の {{cssxref("margin-left")}} や {{cssxref("margin-right")}} プロパティ、または一括指定の {{cssxref("margin")}} プロパティを使用してください。

独立したブロックというより行内の短い引用を行うには、 {{HTMLElement("q")}} (Quotation) 要素を使用してください。

## 例

この例は {{RFC(1149)}}, A Standard for the Transmission of IP Datagrams on Avian Carriers からの文言を引用するために `<blockquote>` 要素を使用する例です。

```html
<blockquote cite="https://datatracker.ietf.org/doc/html/rfc1149">
  <p>
    Avian carriers can provide high delay, low throughput, and low altitude
    service. The connection topology is limited to a single point-to-point path
    for each carrier, used with standard carriers, but many carriers can be used
    without significant interference with each other, outside early spring. This
    is because of the 3D ether space available to the carriers, in contrast to
    the 1D ether used by IEEE802.3. The carriers have an intrinsic collision
    avoidance system, which increases availability.
  </p>
</blockquote>
```

以下のように出力されます。

{{EmbedLiveSample("Examples", 640, 180)}}

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
        >, 区分化ルート, 知覚可能コンテンツ
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
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
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >を受け入れるすべての要素
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <code>
          <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles#structural_roles_with_html_equivalents"
            >blockquote</a
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
      <td>{{domxref("HTMLQuoteElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("q")}}: インラインの引用のための要素
- {{HTMLElement("cite")}}: 情報源の引用のための要素
- [The blockquote element](https://heydonworks.com/article/the-blockquote-element/) (heydonworks.com, 2024)
