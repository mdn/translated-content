---
title: "<header>: ヘッダー要素"
slug: Web/HTML/Reference/Elements/header
l10n:
  sourceCommit: 0ab262675372b83fc870accf3dc46d6a367c451c
---

**`<header>`** は [HTML](/ja/docs/Web/HTML) の要素で、導入的なコンテンツ、ふつうは導入部やナビゲーション補助のグループを表します。見出し要素だけでなく、ロゴ、検索フォーム、著者名、その他の要素を含むこともできます。

{{InteractiveExample("HTML デモ: &lt;header&gt;", "tabbed-standard")}}

```html interactive-example
<header>
  <a class="logo" href="#">かわいい子犬急便！</a>
</header>

<article>
  <header>
    <h1>Beagles</h1>
    <time>08.12.2014</time>
  </header>
  <p>
    ビーグル犬が<em>実に</em>大好き！実に、めっちゃ。可愛くて、耳が実に、実にふわふわで気持ちいいの！
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
  text-shadow: black 2px 2px 0.2rem;
}

header > h1 {
  margin-bottom: 0;
}

header > time {
  font: italic 0.7rem sans-serif;
}
```

## 使用上のメモ

[区分コンテンツ](/ja/docs/Web/HTML/Guides/Content_categories#区分コンテンツ)、{{htmlelement("main")}}、またはこれらの要素の暗黙的な ARIA ロールとして同じ ARIA ロールのある要素の中に含まれていない限り、`<header>` 要素は、ウェブサイト全体の [`banner`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role) ランドマークロールと同じ意味を持ちます。これはグローバルサイトヘッダーを定義します。通常、ロゴ、会社名、検索機能、場合によってはグローバルナビゲーションやスローガンを含むことがあります。一般的にページの上部に配置されます。

そうでない場合、これらの要素内に内包されると、そのランドマークとしての地位を失い、周囲のセクションに対する導入部またはナビゲーション補助のグループを表します。通常、周囲のセクションの見出し（`h1`～`h6` 要素）とオプションのサブ見出しが含まれていますが、これは必須では**ありません**。

### 歴史的な使用法

`<header>` 要素は、もともと HTML の初期に見出しのために存在していました。これは [the very first website](https://info.cern.ch/) に見られます。ある時点で見出しは [`<h1>` ～ `<h6>`](/ja/docs/Web/HTML/Reference/Elements/Heading_Elements) となり、`<header>` が自由に別なロールを担うことができるようになりました。

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)のみがあります。

## アクセシビリティ

`<header>` 要素が [`banner`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role) ランドマークを定義するのは、そのコンテキストが {{HTMLElement('body')}} 要素のときです。

{{HTMLElement('article')}}、{{HTMLElement('main')}}、{{HTMLElement('section')}}、{{HTMLElement('nav')}}、{{HTMLElement('aside')}}、またはこれらの要素の暗黙の ARIA ロールと同じ ARIA ロールを持つ要素内に配置された場合、`<header>` 要素は代わりに [`generic`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role) ロールを持ち、ランドマークとはみなされなくなります。この場合、[`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) や [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) でラベル付けすることはできません。

## 例

### ページのヘッダー

```html
<header>
  <h1>メインページのタイトル</h1>
  <img src="mdn-logo-sm.png" alt="MDN ロゴ" />
</header>
```

#### 結果

{{EmbedLiveSample('Page Header')}}

### 記事のヘッダー

```html-nolint
<article>
  <header>
    <h2>プランテットアース</h2>
    <p>
      <time datetime="2017-10-04">2017 年 10 月 4 日</time>に Jane Smith が投稿
    </p>
  </header>
  <p>
    青緑の惑星に住む私たちは、まだ見ぬことが数多くあります。
  </p>
  <p><a href="https://example.com/the-planet-earth/">続きを読む…</a></p>
</article>
```

#### 結果

{{EmbedLiveSample('Article Header')}}

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
        >,
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#知覚可能コンテンツ"
          >知覚可能コンテンツ</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ"
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
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >を受け入れるすべての要素。ただし、{{HTMLElement("address")}}、{{HTMLElement("footer")}}、他の
        <code>&lt;header&gt;</code> 要素の子孫になることはできません。
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role">banner</a>,
        または
        <code><a href="/ja/docs/Web/HTML/Reference/Elements/article">article</a></code
        >, <code><a href="/ja/docs/Web/HTML/Reference/Elements/aside">aside</a></code
        >, <code><a href="/ja/docs/Web/HTML/Reference/Elements/main">main</a></code
        >, <code><a href="/ja/docs/Web/HTML/Reference/Elements/nav">nav</a></code>,
        <code><a href="/ja/docs/Web/HTML/Reference/Elements/section">section</a></code>
        の各要素、または
        <code
          ><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/article_role"
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
        > ロールの要素の子孫である場合は
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"
          >generic</a
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
