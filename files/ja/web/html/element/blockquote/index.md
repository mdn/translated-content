---
title: "<blockquote>: ブロック引用要素"
slug: Web/HTML/Element/blockquote
l10n:
  sourceCommit: 610522d12e27fc70bcfd67d183c7ab1f38956a62
---

{{HTMLSidebar}}

**`<blockquote>`** は [HTML](/ja/docs/Web/HTML) 要素で、内包する要素のテキストが引用文であることを示します。通常、字下げして表示されます（整形方法については[注意](#使用上の注意)の項を参照してください）。引用元の URL は `cite` 属性により与えることができ、引用元のテキスト表現は {{HTMLElement("cite")}} 要素を用いて与えることができます。

{{EmbedInteractiveExample("pages/tabbed/blockquote.html","tabbed-standard")}}

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)があります。

- `cite`
  - : 引用元の文書の URL、または引用元の情報に関するメッセージを示します。この属性は、引用文の背景や出典についての説明を指し示すためのものです。

## 使用上の注意

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
        <a href="/ja/docs/Web/HTML/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >, 区分化ルート, 知覚可能コンテンツ
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
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
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
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
