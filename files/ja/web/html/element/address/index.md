---
title: "<address>: 連絡先要素"
slug: Web/HTML/Element/address
l10n:
  sourceCommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{HTMLSidebar}}

**`<address>`** は [HTML](/ja/docs/Web/HTML) の要素で、この中の HTML が個人、団体、組織の連絡先情報を提供していることを示します。

{{EmbedInteractiveExample("pages/tabbed/address.html", "tabbed-standard")}}

`<address>` 要素の内容で提供される連絡先情報は、その文脈で適切であればどのような形でもよく、必要とされるあらゆる形の連絡先情報（住所、 URL、メールアドレス、電話番号、ソーシャルメディアのアカウント、地理上の座標など）を含めることができます。`<address>` には、連絡先情報が参照する個人、団体、組織の名前を含めてください。

`<address>` は様々な文脈で使用することができます。ページヘッダーでビジネスの連絡先を提供したり、`<address>` を {{HTMLElement("article")}} 要素に入れることで、記事の著者を識別したりすることができます。

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)のみがあります。

## 使用上の注意

- `<address>` 要素、直近の {{HTMLElement("article")}} または {{HTMLElement("body")}} 要素の連絡先情報を表すためにのみ使用できます。
- この要素には、公開日（{{HTMLElement("time")}} によるもの）のような連絡先情報以外の情報を含めるべきではありません。
- 一般的に、 `<address>` 要素は現在のセクションに {{HTMLElement("footer")}} 要素があれば、その中に配置することができます。

## 例

この例は `<address>` 要素で記事の編集者の連絡先情報を示す使い方を示しています。

```html
<address>
  作者の連絡先は
  <a href="http://www.somedomain.com/contact"> www.somedomain.com</a>
  です。<br />
  バグを発見した場合は<a href="mailto:webmaster@somedomain.com"
    >ウェブマスターへご連絡ください</a
  >。<br />
  住所は下記の通りです。<br />
  Mozilla Foundation<br />
  331 E Evelyn Ave<br />
  Mountain View, CA 94041<br />
  USA
</address>
```

### 結果

{{EmbedLiveSample("Examples", "300", "200")}}

この要素は文字列を {{HTMLElement("i")}} 要素や {{HTMLElement("em")}} 要素と同じ既定のスタイルで描画しますが、付加的な意味情報として連絡先情報を扱うときに `<address>` を使用するのがより適切でしょう。

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
        >、知覚可能コンテンツ
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >。ただし
        <code>&#x3C;address></code> 要素をネストしたり、見出しコンテンツ
        ({{HTMLElement("hgroup")}}, {{HTMLElement("Heading_Elements", "h1")}},
        {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}},
        {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}},
        {{HTMLElement("Heading_Elements", "h6")}}), 区分コンテンツ
        ({{HTMLElement("article")}}, {{HTMLElement("aside")}},
        {{HTMLElement("section")}}, {{HTMLElement("nav")}}),
        {{HTMLElement("header")}} 要素および
        {{HTMLElement("footer")}} 要素を入れたりしてはなりません。
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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 他のセクション関連要素: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}}, {{HTMLElement("Heading_Elements", "h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("footer")}}, {{HTMLElement("section")}}, {{HTMLElement("header")}}
- [HTML 文書のセクションとアウトライン](/ja/docs/Web/HTML/Element/Heading_Elements)
