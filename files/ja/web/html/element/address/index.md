---
title: '<address>: 連絡先要素'
slug: Web/HTML/Element/address
---

{{HTMLRef}}

**HTML の `<address>` 要素**は、これを含んでいる HTML が個人、団体、組織の連絡先を提供していることを示します。

{{EmbedInteractiveExample("pages/tabbed/address.html", "tabbed-standard")}}

`<address>` 要素の内容で提供される連絡先情報は、その文脈で適切であればどのような形でもよく、必要とされるあらゆる形の連絡先情報 (住所、 URL、メールアドレス、電話番号、ソーシャルメディアのアカウント、地理上の座標など) を含めることができます。 `<address>` には連絡先情報が参照する個人、団体、組織の名前を含めてください。

`<address>` は様々な文脈で使用することができ、ページヘッダーでビジネスの連絡先を提供したり、 {{HTMLElement("article")}} 要素の中で `<address>` を含めることで、記事の著者を識別したりすることができます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリ</a>
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >、<a href="/ja/docs/Web/HTML/Content_categories#知覚可能コンテンツ"
          >知覚可能コンテンツ</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >。ただし
        <code>&#x3C;address></code> 要素をネストしたり、見出しコンテンツ
        ({{HTMLElement("hgroup")}}, {{HTMLElement("h1")}},
        {{HTMLElement("h2")}}, {{HTMLElement("h3")}},
        {{HTMLElement("h4")}}, {{HTMLElement("h5")}},
        {{HTMLElement("h6")}}), 区分コンテンツ
        ({{HTMLElement("article")}}, {{HTMLElement("aside")}},
        {{HTMLElement("section")}}, {{HTMLElement("nav")}}),
        {{HTMLElement("header")}} 要素および
        {{HTMLElement("footer")}} 要素を入れたりしてはなりません。
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
        >
        を受け入れるすべての要素。ただし <code>&#x3C;address></code> 要素は除く
        (論理的な対称性の原理によれば、親要素である
        <code>&#x3C;address></code> タグは
        <code>&#x3C;address></code>
        要素を入れ子にすることができません。したがって、同じ
        <code>&#x3C;address></code> のコンテンツの親に
        <code>&#x3C;address></code> タグを置くこともできません)。
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
      <td>
        {{domxref("HTMLElement")}}。 Gecko 2.0 (Firefox 4) より前では
        {{domxref("HTMLSpanElement")}}
        インターフェイスが提供されます。
      </td>
    </tr>
  </tbody>
</table>

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)のみがあります。

## 使用上の注意

- `<address>` 要素は文書の著者の連絡先情報を表すだけのために使われる傾向があります。しかし最新の仕様書では、定義が更新され、様々な宛先をマークアップするために使用できるようになりました。
- この要素には、公開日 ({{HTMLElement("time")}} によるもの) のような連絡先情報以外の情報を含めるべきではありません。
- 一般的に、 `<address>` 要素は現在のセクションに {{HTMLElement("footer")}} 要素があれば、その中に配置することができます。

## 例

この例は `<address>` 要素で記事の編集者の連絡先情報を示す使い方を示します。

```html
  <address>
    You can contact author at <a href="http://www.somedomain.com/contact">
    www.somedomain.com</a>.<br>
    If you see any bugs, please <a href="mailto:webmaster@somedomain.com">
    contact webmaster</a>.<br>
    You may also want to visit us:<br>
    Mozilla Foundation<br>
    331 E Evelyn Ave<br>
    Mountain View, CA 94041<br>
    USA
  </address>
```

### 結果

{{EmbedLiveSample("Examples", "300", "200")}}

この要素は文字列を {{HTMLElement("i")}} 要素や {{HTMLElement("em")}} 要素と同じ既定のスタイルで描画しますが、付加的な意味情報として連絡先情報を扱うときに `<address>` を使用するのがより適切でしょう。

## 仕様書

| 仕様書                                                                                                                   | 状態                             | 備考 |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ---- |
| {{SpecName('HTML WHATWG', 'sections.html#the-address-element', '&lt;address&gt;')}}         | {{Spec2('HTML WHATWG')}} |      |
| {{SpecName('HTML5 W3C', 'grouping-content.html#the-address-element', '&lt;address&gt;')}} | {{Spec2('HTML5 W3C')}}     |      |
| {{SpecName('HTML4.01', 'struct/global.html#h-7.5.6', '&lt;address&gt;')}}                         | {{Spec2('HTML4.01')}}     |      |

## ブラウザーの互換性

{{Compat("html.elements.address")}}

## 関連情報

- 他のセクション関連要素: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("footer")}}, {{HTMLElement("section")}}, {{HTMLElement("header")}}
- [HTML5 文書のセクションとアウトライン](/ja/docs/Sections_and_outlines_of_an_HTML5_document)
