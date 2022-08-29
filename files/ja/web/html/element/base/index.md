---
title: '<base>: 文書の基底 URL 要素'
slug: Web/HTML/Element/base
tags:
  - 要素
  - HTML
  - HTML 文書メタデータ
  - HTML:メタデータコンテンツ
  - リファレンス
browser-compat: html.elements.base
translation_of: Web/HTML/Element/base
---

{{HTMLRef}}

**`<base>`** は [HTML](/ja/docs/Web/HTML) の要素で、文書内におけるすべての*相対* URL の基点となる URL を指定します。 `<base>` 要素は、文書内に 1 つだけ置くことができます。

文書に使われている基底 URL は、スクリプトから {{domxref('Node.baseURI')}} を使用して問い合わせることができます。文書に `<base>` 要素がなかった場合、 `baseURI` は既定で {{domxref("location.href")}} になります。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/Guide/HTML/Content_categories">コンテンツカテゴリー</a>
      </th>
      <td>メタデータコンテンツ</td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>なし。この要素は{{Glossary("empty element", "空要素")}}です。</td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>終了タグを用いてはならない。</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        {{HTMLElement("head")}} 要素で、他に {{HTMLElement("base")}} 要素を含んでいないもの。
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">対応するロールなし</a>
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>許可されている <code>role</code> なし</td>
    </tr>
    <tr>
      <th>DOM インターフェイス</th>
      <td>{{domxref("HTMLBaseElement")}}</td>
    </tr>
  </tbody>
</table>

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)があります。

> **Warning:** 以下の属性のいずれかが指定されている場合、この要素は URL の属性値を持つ他の要素、例えば {{HTMLElement("link")}} の `href` 属性などの前に置く**必要があります**。

- {{htmlattrdef("href")}}
  - : 文書全体を通して相対 URL に使用される基底 URL です。絶対 URL と相対 URL が使用できます。
- {{htmlattrdef("target")}}

  - : **キーワード**または**作者が定義した名前**で、既定の{{Glossary("browsing context", "閲覧コンテキスト")}}を表し、 {{HTMLElement("a")}} または {{HTMLElement("form")}} 要素が明示的に `target` 属性を持たない場合に、移動の結果を表示する先として使用されます。以下のキーワードは特別な意味を持ちます。

    - `_self` (既定値): 現在の閲覧コンテキストに結果を表示します。
    - `_blank`: 新しい無名の閲覧コンテキストに結果を表示します。
    - `_parent`: 現在のコンテキストの親の閲覧コンテキストに結果を表示します。親がない場合、このオプションは `_self` と同じ振る舞いをします。
    - `_top`: 最上位の閲覧コンテキスト (現在のコンテキストの祖先で、それ以上の親をもたない閲覧コンテキスト）に結果を表示します。親がない場合、このオプションは `_self` と同じ振る舞いをします。

## 使用上の注意

### 複数の \<base> 要素

複数の `<base>` 要素が使用された場合、最初の `href` と最初の `target` の値が使用され、他はすべて無視されます。

### ページ内アンカー

文書内のフラグメントを指すリンク — 例えば `<a href="#some-id">` — は `<base>` を使用して解決され、基底 URL にフラグメントを付けて HTTP リクエストを発行します。例を示します。

1. `<base href="https://example.com">` が指定された場合
2. ...そこで `<a href="#anchor">To anchor</a>` というリンクの場合
3. ...リンク先は `https://example.com/#anchor` となります。

### Open Graph

[Open Graph](https://ogp.me/) のメタタグは `<base>` を認識しないので、次のように常に完全 URL を使用してください。

```html
<meta property="og:image" content="https://example.com/thumbnail.jpg">
```

## 例

```html
<base href="https://www.example.com/">
<base target="_blank">
<base target="_top" href="https://example.com/">
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
