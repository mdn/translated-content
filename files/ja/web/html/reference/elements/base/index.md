---
title: "<base>: 文書の基底 URL 要素"
slug: Web/HTML/Reference/Elements/base
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

**`<base>`** は [HTML](/ja/docs/Web/HTML) の要素で、文書内におけるすべての*相対* URL の基点となる URL を指定します。 `<base>` 要素は、文書内に 1 つだけ置くことができます。

文書に使われている基底 URL は、スクリプトから {{domxref('Node.baseURI')}} を使用して問い合わせることができます。文書に `<base>` 要素がなかった場合、 `baseURI` は既定で {{domxref("location.href")}} になります。

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)があります。

> [!WARNING]
> `<base>` 要素は、 `href` 属性または `target` 属性、あるいはその両方を指定する必要があります。これらの属性のうち少なくとも 1 つが指定されている場合、 `<base>` 要素は、 {{HTMLElement("link")}} の `href` 属性など、URL を属性値とする他の要素よりも前に記述する**必要があります**。

- `href`
  - : 文書全体を通して相対 URL に使用される基底 URL です。絶対 URL と相対 URL が使用できます。
    [`data:`](/ja/docs/Web/URI/Reference/Schemes/data) および [`javascript:`](/ja/docs/Web/URI/Reference/Schemes/javascript) の URL は利用できません。
- `target`
  - : **キーワード**または**制作者が定義した名前**で、既定の{{Glossary("browsing context", "閲覧コンテキスト")}}を表し、 {{HTMLElement("a")}}、{{HTMLElement("area")}}、{{HTMLElement("form")}} のいずれかの要素が明示的に `target` 属性を持たない場合に、移動の結果を表示する先として使用されます。以下のキーワードは特別な意味を持ちます。
    - `_self` （既定値）: 現在の閲覧コンテキストに結果を表示します。
    - `_blank`: 新しい無名の閲覧コンテキストに結果を表示します。
    - `_parent`: 現在のコンテキストの親の閲覧コンテキストに結果を表示します。親がない場合、このオプションは `_self` と同じ振る舞いをします。
    - `_top`: 最上位の閲覧コンテキスト（現在のコンテキストの祖先で、それ以上の親をもたない閲覧コンテキスト）に結果を表示します。親がない場合、このオプションは `_self` と同じ振る舞いをします。

## 使用上の注意

### 複数の \<base> 要素

複数の `<base>` 要素が使用された場合、最初の `href` と最初の `target` の値が使用され、他はすべて無視されます。

### ページ内アンカー

文書内のフラグメントを指すリンク — 例えば `<a href="#some-id">` — は `<base>` を使用して解決され、基底 URL にフラグメントを付けて HTTP リクエストを発行します。

例えば、 `<base href="https://example.com/">` が指定され、`<a href="#anchor">To anchor</a>` というリンクがあったとします。リンク先は `https://example.com/#anchor` となります。

### target に ASCII の改行、タブ、 < を含むことはできない

[`target`](#target) 属性に ASCII の改行、タブ、 < 文字が含まれている場合、値は `_blank` にリセットされます。
これは、懸垂マークアップインジェクション攻撃を防ぐためです。懸垂マークアップインジェクション攻撃とは、閉じられていないターゲット属性がページに挿入され、その後に続くテキストが、ブラウザーが属性を閉じる文字に到達するまでキャプチャされる、スクリプトを使用しない攻撃です。

### Open Graph

[Open Graph](https://ogp.me/) のメタタグは `<base>` を認識しないので、次のように常に完全 URL を使用してください。

```html
<meta property="og:image" content="https://example.com/thumbnail.jpg" />
```

## 例

```html
<base href="https://www.example.com/" />
<base target="_blank" />
<base target="_top" href="https://example.com/" />
```

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Guides/Content_categories">コンテンツカテゴリー</a>
      </th>
      <td>メタデータコンテンツ</td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>なし。この要素は{{Glossary("void element", "空要素")}}です。</td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>開始タグは必須で、終了タグを置くことはできません。</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        {{HTMLElement("head")}} 要素で、他に <code>&lt;base&gt;</code> 要素を含んでいないもの。
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
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLBaseElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
