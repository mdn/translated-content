---
title: HTML `<hgroup>` 見出しグループ要素
short-title: <hgroup>
slug: Web/HTML/Reference/Elements/hgroup
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

**`<hgroup>`** は [HTML](/ja/docs/Web/HTML) の要素で、見出しとそれに関連する内容を表します。これは 1 つの [`<h1>–<h6>`](/ja/docs/Web/HTML/Reference/Elements/Heading_Elements) 要素と、1 つ以上の [`<p>`](/ja/docs/Web/HTML/Reference/Elements/p) 要素をグループ化します。

{{InteractiveExample("HTML デモ: &lt;hgroup&gt;", "tabbed-standard")}}

```html interactive-example
<hgroup>
  <h1>フランケンシュタイン</h1>
  <p>または: 現代のプロメテウス</p>
</hgroup>
<p>
  スイスの科学者ヴィクター・フランケンシュタインには、知性を持つ生命体を創造するという大きな野望があった。しかし、彼が作り出した存在が初めて動き出したとき、彼は自分が怪物を作り出してしまったことに気づく。その怪物は、主人に見捨てられ、目にする者すべてから敬遠されながらも、フランケンシュタイン博士を地の果てまで追いかけていく。
</p>
```

```css interactive-example
hgroup {
  text-align: right;
  padding-right: 16px;
  border-right: 10px solid #00c8d7;
}

hgroup h1 {
  margin-bottom: 0;
}

hgroup p {
  margin: 0;
  font-weight: bold;
}
```

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)のみがあります。

## 使用上の注意

`<hgroup>` 要素は、見出しと副次的な内容（副題や代替タイトル、キャッチフレーズなど）をグループ化することが可能です。これらのコンテンツは、 `<hgroup>` 要素内の `<p>` 要素として表現されます。

`<hgroup>` 要素自体は、ウェブページの文書のアウトラインに影響を与えません。むしろ、 `<hgroup>` 内で許可されている単一の見出しが文書のアウトラインに寄与します。

## 例

```html
<!doctype html>
<title>HTML Standard</title>
<body>
  <hgroup id="document-title">
    <h1>HTML: Living Standard</h1>
    <p>Last Updated 12 July 2022</p>
  </hgroup>
  <p>Some intro to the document.</p>
  <h2>Table of contents</h2>
  <ol id="toc">
    …
  </ol>
  <h2>First section</h2>
  <p>Some intro to the first section.</p>
</body>
```

### 結果

{{EmbedLiveSample('Examples')}}

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
        >, 見出しコンテンツ, 知覚可能コンテンツ
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
      0 個以上の {{HTMLElement("p")}} と、それに続く 1 個の {{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}},
        {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}},
        {{HTMLElement("Heading_Elements", "h5")}}, {{HTMLElement("Heading_Elements", "h6")}} と、それに続く 0 個以上の {{HTMLElement("p")}}
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
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 他のセクション関連要素: {{HTMLElement("body")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("aside")}}, {{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}}, {{HTMLElement("Heading_Elements", "h6")}}, {{HTMLElement("nav")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}}
- [HTML 文書のセクションとアウトライン](/ja/docs/Web/HTML/Reference/Elements/Heading_Elements)
