---
title: "<search>: 一般検索要素"
slug: Web/HTML/Element/search
l10n:
  sourceCommit: b03632b84049c5110d9ee466307f7e2d28959be5
---

{{HTMLSidebar}}

**`<search>`** は [HTML](/ja/docs/Web/HTML) の要素で、文書やアプリケーションのうち、検索や絞り込み操作を行うことに関連する、フォームコントロールやその他のコンテンツの部分を表すコンテナーです。`<search>` 要素は意味的に、要素の内容の目的が検索や絞り込み機能であることを示します。検索や絞り込み機能は、ウェブサイトやアプリケーション、現在のウェブページや文書、あるいはインターネット全体やそのサブセクションを対象とする可能性があります。

## 属性

この要素は[グローバル属性](/ja/docs/Web/HTML/Global_attributes)のみを持ちます。

## 使用上の注意

`<search>` 要素は検索結果を表示するためのものではありません。むしろ、検索やフィルタリングの結果はそのウェブページのメインコンテンツの一部として存在するべきです。とはいえ、検索や 絞り込み機能の中の「クイック検索」機能の一部である提案やリンクは、検索機能なので `<search>` 要素のコンテンツの中で入れ子にするのが適切です。

## 例

### ヘッダーの検索フォーム

この例では、単純なサイト全体の検索を行うために、ウェブサイトヘッダー内の検索のコンテナーとして `<search>` を使用する例を示します。`<search>` は {{HTMLElement("form")}} の意味づけコンテナーであり、ユーザーが入力した検索クエリーをサーバーへ送信します。

#### HTML

```html
<header>
  <h1>動画のウェブサイト</h1>
  <search>
    <form action="./search/">
      <label for="movie">動画を検索</label>
      <input type="search" id="movie" name="q" />
      <button type="submit">検索</button>
    </form>
  </search>
</header>
```

#### 結果

{{EmbedLiveSample('Header search form')}}

### ウェブアプリの検索

この例は、ウェブアプリケーションで JavaScript によって動的に行うの検索機能を実装する際の DOM コンテンツの可能性を示しています。検索機能がすべて JavaScript で実装された場合、フォームが送信されなければ {{HTMLElement("form")}} 要素も送信 {{HTMLElement("button")}} も必要ありません。意味づけのために、`<search>` 要素が検索と絞り込み機能を含めるために使用されています。

#### HTML

```html
<search>
  <label>
    検索して絞り込み
    <input type="search" id="query" />
  </label>
  <label>
    <input type="checkbox" id="exact-only" />
    完全一致のみ
  </label>

  <section>
    <h3>結果:</h3>
    <ul id="results">
      <!-- 検索結果コンテンツ -->
    </ul>
    <output id="no-results">
      <!-- 結果のない時のコンテンツ -->
    </output>
  </section>
</search>
```

#### 結果

{{EmbedLiveSample('Web app search')}}

> **メモ:** JavaScript を使用していないユーザーもいること、そして JavaScript が正常にダウンロードされ、解釈され、実行されるまでは、どのユーザーも JavaScript を実行していないことを忘れずにしてください。ユーザーが JavaScript を無効にしていても、確実にサイトのコンテンツにアクセスできるように保証してください。

### 複数の検索

この例は、2 つの検索機能を持つページを示しています。最初の検索はヘッダー上のグローバルサイト検索です。2 つ目はページのコンテキストに基づいた検索とフィルターで、この例では車の検索です。

#### HTML

```html
<body>
  <header>
    <h1>Car rental agency</h1>
    <search title="Website">...</search>
  </header>
  <main>
    <h2>Cars available for rent</h2>
    <search title="Cars">
      <h3>Filter results</h3>
      ...
    </search>
    <article>
      <!-- search result content -->
    </article>
  </main>
</body>
```

#### 結果

{{EmbedLiveSample('Multiple searches')}}

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリー</a>
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#flow_content">フローコンテンツ</a>, <a href="/ja/docs/Web/HTML/Content_categories#palpable_content">知覚可能コンテンツ</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">許可されているコンテンツ</th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#flow_content">フローコンテンツ</a>
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/search_role">search</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>
        <a href="/ja/docs/Web/Accessibility/ARIA/Roles/form_role"><code>form</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Roles/group_role"><code>group</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Roles/region_role"><code>region</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Roles/search_role"><code>search</code></a>
      </td>
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

- 他の検索に関する要素: {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("aside")}}, {{HTMLElement("nav")}}, {{HTMLElement("form")}}
- [ARIA: Search ロール](/ja/docs/Web/Accessibility/ARIA/Roles/search_role)
