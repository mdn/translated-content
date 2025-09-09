---
title: <header>
slug: Web/HTML/Reference/Elements/header
original_slug: Web/HTML/Element/header
l10n:
  sourceCommit: ca65963b93e69591b9362bb2bfde56f93128e2cb
---

{{HTMLSidebar}}

**`<header>`** は [HTML](/ja/docs/Web/HTML) の要素で、導入的なコンテンツ、ふつうは導入部やナビゲーション補助のグループを表します。見出し要素だけでなく、ロゴ、検索フォーム、著者名、その他の要素を含むこともできます。

{{InteractiveExample("HTML デモ: &lt;header&gt;", "tabbed-standard")}}

```html interactive-example
<header>
  <a class="logo" href="#">Cute Puppies Express!</a>
</header>

<article>
  <header>
    <h1>Beagles</h1>
    <time>08.12.2014</time>
  </header>
  <p>
    I love beagles <em>so</em> much! Like, really, a lot. They’re adorable and
    their ears are so, so snugly soft!
  </p>
</article>
```

```css interactive-example
.logo {
  background: left / cover
    url("/shared-assets/images/examples/puppy-header.jpg");
  display: flex;
  height: 120px;
  align-items: center;
  justify-content: center;
  font:
    bold calc(1em + 2 * (100vw - 120px) / 100) "Dancing Script",
    fantasy;
  color: #ff0083;
  text-shadow: #000 2px 2px 0.2rem;
}

header > h1 {
  margin-bottom: 0;
}

header > time {
  font: italic 0.7rem sans-serif;
}
```

## 使用上の注意

`<header>` 要素は、区分コンテンツの中に含まれていない限り、ウェブサイト全体の [`banner`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role) ランドマークロールと同じ意味を持ちます。区分コンテンツの中に含まれている場合、`<header>` 要素はランドマークではありません。

`<header>` 要素はグローバルなサイトヘッダーを定義することができ、アクセシビリティツリーでは `banner` として記述されます。通常、ロゴ、会社名、検索機能、そして場合によってはグローバルナビゲーションやスローガンを含みます。一般的にはページの上部に配置されます。

それ以外の場合は、アクセシビリティツリーの `section` となり、通常は周囲のセクションの見出し（`h1` - `h6` 要素）とオプションで小見出しを格納しますが、これは必須では**ありません**。

### 歴史的な使用法

`<header>` 要素は、もともと HTML の初期に見出しのために存在していました。これは [the very first website](http://info.cern.ch/) に見られます。ある時点で見出しは [`<h1>` ～ `<h6>`](/ja/docs/Web/HTML/Reference/Elements/Heading_Elements) となり、`<header>` が自由に別なロールを担うことができるようになりました。

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)のみがあります。

## 例

### ページのヘッダー

```html
<header>
  <h1>Main Page Title</h1>
  <img src="mdn-logo-sm.png" alt="MDN logo" />
</header>
```

#### 結果

{{EmbedLiveSample('Page Header')}}

### 記事のヘッダー

```html
<article>
  <header>
    <h2>The Planet Earth</h2>
    <p>
      Posted on Wednesday, <time datetime="2017-10-04">4 October 2017</time> by
      Jane Smith
    </p>
  </header>
  <p>
    We live on a planet that's blue and green, with so many things still unseen.
  </p>
  <p><a href="https://example.com/the-planet-earth/">Continue reading…</a></p>
</article>
```

#### 結果

{{EmbedLiveSample('Article Header')}}

## アクセシビリティ

`<header>` 要素が [`banner`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role) ランドマークを定義するのは、そのコンテキストが {{HTMLElement('body')}} 要素のときです。HTML の header 要素は、{{HTMLElement('article')}}、{{HTMLElement('aside')}}、{{HTMLElement('nav')}}、{{HTMLElement('section')}} 要素の子孫である場合は banner ランドマークとみなされません。

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリー</a>
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >,
        <a href="/ja/docs/Web/HTML/Content_categories#知覚可能コンテンツ"
          >知覚可能コンテンツ</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >。但し、子孫に他の <code>&#x3C;header></code> や
        {{HTMLElement("footer")}} がないこと。
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
        >を受け入れるすべての要素。ただし、{{HTMLElement("address")}}、{{HTMLElement("footer")}}、他の
        {{HTMLElement("header")}}
        要素の子孫になることはできません。
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/Banner_role">banner</a>,
        または
        <code><a href="/ja/docs/Web/HTML/Element/article">article</a></code
        >, <code><a href="/ja/docs/Web/HTML/Element/aside">aside</a></code
        >, <code><a href="/ja/docs/Web/HTML/Element/main">main</a></code
        >, <code><a href="/ja/docs/Web/HTML/Element/nav">nav</a></code
        >,
        <code><a href="/ja/docs/Web/HTML/Element/section">section</a></code>
        の各要素、または
        <code
          >role=<a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/Article_Role"
            >article</a
          ></code
        >,
        <code
          ><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/Complementary_role"
            >complementary</a
          ></code
        >,
        <code
          ><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/Main_role"
            >main</a
          ></code
        >,
        <code
          ><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/Navigation_Role"
            >navigation</a
          ></code
        >,
        <code
          ><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/Region_role"
            >region</a
          ></code
        >
        の要素の子孫である場合は<a
          href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >対応するロールなし</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/group_role"><code>group</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>,
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>
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

- 他の区分化関連要素: {{HTMLElement("body")}}、{{HTMLElement("nav")}}、{{HTMLElement("article")}}、{{HTMLElement("aside")}}、{{HTMLElement("Heading_Elements", "h1")}}、{{HTMLElement("Heading_Elements", "h2")}}、{{HTMLElement("Heading_Elements", "h3")}}、{{HTMLElement("Heading_Elements", "h4")}}、{{HTMLElement("Heading_Elements", "h5")}}、{{HTMLElement("Heading_Elements", "h6")}}、{{HTMLElement("footer")}}、{{HTMLElement("section")}}、{{HTMLElement("address")}}
