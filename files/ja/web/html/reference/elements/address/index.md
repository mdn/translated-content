---
title: "`<address>` 連絡先要素"
short-title: <address>
slug: Web/HTML/Reference/Elements/address
l10n:
  sourceCommit: bcb7d4dde9f0a43664c64587d9d70b8835286eb7
---

**`<address>`** は [HTML](/ja/docs/Web/HTML) の要素で、この中の HTML が個人または複数の人、あるいは組織の連絡先情報を提供していることを示します。

{{InteractiveExample("HTML デモ: &lt;address&gt;", "tabbed-standard")}}

```html interactive-example
<p>このページの作者の連絡先:</p>

<address>
  <a href="mailto:jim@example.com">jim@example.com</a><br />
  <a href="tel:+14155550132">+1 (415) 555‑0132</a>
</address>
```

```css interactive-example
a[href^="mailto"]::before {
  content: "📧 ";
}

a[href^="tel"]::before {
  content: "📞 ";
}
```

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)のみがあります。

## 使用上の注意

`<address>` 要素の内容で提供される連絡先情報は、その文脈に適した形式であればどのような形式でもかまいません。住所、URL、メールアドレス、電話番号、ソーシャルメディアのアカウント名、地理座標など、必要な種類の連絡先情報を含めることができます。`<address>` 要素には、連絡先情報の対象となる個人や人々、または組織の名前を含めるべきです。ただし、この要素には、公開日（{{HTMLElement("time")}} 要素に含める情報）のような、連絡先情報以外の情報を含めるべきではありません。

`<address>` は、ページヘッダーにビジネスの連絡先情報を記載する場合や、{{HTMLElement("article")}} 内に `<address>` 要素を含めて記事の著者を示す場合など、さまざまな文脈で使用できます。`<address>` 要素は、最も近い祖先の {{HTMLElement("article")}} 要素または {{HTMLElement("body")}} 要素の連絡先情報を表す場合にのみ使用できます。一般的に、`<address>` 要素は、現在のセクションに {{HTMLElement("footer")}} 要素があれば、その中に配置できます。

## 例

この記事では、`<address>` 要素を使って記事の著者の連絡先情報を示します。

```html-nolint
<address>
  作者の連絡先は <a href="http://www.example.com/contact">www.example.com</a> です。<br />
  バグを発見した場合は<a href="mailto:webmaster@example.com">ウェブマスターへご連絡ください</a>。<br />
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
        <a href="/ja/docs/Web/HTML/Guides/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >、知覚可能コンテンツ
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ"
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
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        > を受け入れるすべての要素。ただし <code>&#x3C;address></code> 要素は除く（論理的な対称性の原理によれば、親要素である <code>&#x3C;address></code> タグは <code>&#x3C;address></code> 要素を入れ子にすることができません。したがって、同じ <code>&#x3C;address></code> のコンテンツの親に <code>&#x3C;address></code> タグを置くこともできません）。
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <code
          ><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/group_role"
            >group</a
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
      <td>
        {{domxref("HTMLElement")}}。 Gecko 2.0 (Firefox 4) より前では {{domxref("HTMLSpanElement")}} インターフェイスが提供されます。
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
- [HTML 文書のセクションとアウトライン](/ja/docs/Web/HTML/Reference/Elements/Heading_Elements)
