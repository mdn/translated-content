---
title: '<blockquote>: ブロック引用要素'
slug: Web/HTML/Element/blockquote
---

{{HTMLRef}}

**HTML の `<blockquote>` 要素** _(HTML ブロック引用要素_) は、内包する要素の文字列が引用文であることを示します。通常、字下げを伴ってレンダリングされます (整形方法については[注意](#Usage_notes)の項を参照してください)。 **cite** 属性により引用元の文書の URL を、 {{HTMLElement("cite")}} 要素により引用元の文書のタイトルなどを明示可能です。

{{EmbedInteractiveExample("pages/tabbed/blockquote.html","tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリ</a>
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
      <td>{{no_tag_omission}}</td>
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

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)があります。

- {{htmlattrdef("cite")}}
  - : 引用元の文書の URL、または引用元の情報に関するメッセージを示します。この属性は、引用文の背景や出典についての説明を指し示そうとするものです。

## 使用上の注意

引用された文字列に適用される字下げを変更するには、 {{Glossary("CSS")}} の {{cssxref("margin-left")}} や {{cssxref("margin-right")}} プロパティ、または一括指定の {{cssxref("margin")}} プロパティを使用してください。

独立したブロックというより行内の短い引用を行うには、 {{HTMLElement("q")}} (Quotation) 要素を使用してください。

## 例

この例は {{RFC(1149)}}, A Standard for the Transmission of IP Datagrams on Avian Carriers からの文言を引用するために `<blockquote>` 要素を使用する例です。

```html
<blockquote cite="https://tools.ietf.org/html/rfc1149">
  <p>Avian carriers can provide high delay, low
  throughput, and low altitude service. The
  connection topology is limited to a single
  point-to-point path for each carrier, used with
  standard carriers, but many carriers can be used
  without significant interference with each other,
  outside of early spring. This is because of the 3D
  ether space available to the carriers, in contrast
  to the 1D ether used by IEEE802.3. The carriers
  have an intrinsic collision avoidance system, which
  increases availability.</p>
</blockquote>
```

以下のように出力されます。

{{EmbedLiveSample("Example", 640, 180)}}

## 仕様書

| 仕様書                                                                                                                           | 状態                             | 備考 |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ---- |
| {{SpecName('HTML WHATWG', 'semantics.html#the-blockquote-element', '&lt;blockquote&gt;')}}         | {{Spec2('HTML WHATWG')}} |      |
| {{SpecName('HTML5 W3C', 'grouping-content.html#the-blockquote-element', '&lt;blockquote&gt;')}} | {{Spec2('HTML5 W3C')}}     |      |
| {{SpecName('HTML4.01', 'struct/text.html#h-9.2.2', '&lt;blockquote&gt;')}}                             | {{Spec2('HTML4.01')}}     |      |

## ブラウザーの互換性

{{Compat("html.elements.blockquote")}}

## 関連情報

- {{HTMLElement("q")}}: インラインの引用のための要素
- {{HTMLElement("cite")}}: 情報源の引用のための要素
