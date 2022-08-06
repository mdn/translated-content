---
title: クイックリンク
slug: >-
  conflicting/MDN/Writing_guidelines/Page_structures_beab16e4cec4868f7c665da1b19be9a5
tags:
  - ガイド
  - MDN メタ
  - 構造
translation_of: MDN/Structures/Quicklinks
original_slug: MDN/Structures/Quicklinks
---
{{MDNSidebar}}

MDN はページへのクイックリンクの追加に対応しています。これらのボックスは、 MDN 上の他のページやサイト外のページへの階層的なリストを含むことができます。この記事では、クイックリンクボックスの生成方法を解説します。

## クイックリンクの構文

ページのクイックリンクは、 "Quick_Links" という ID を持つ {{HTMLElement("section")}} ブロックを作成することによって提供されます。
次に、セクション内のクイックリンクボックスに入るコンテンツを配置します。
これらは {{HTMLElement("ol")}} 順序付きリスト (ネストも可) として整形する必要があります。
これは、エディターツールバーの番号付きリストボタンを使用して行うことができます。
たとえば、クイックリンクの HTML は次のようになります。

```html
<section id="Quick_links">
  <ol>
    <li><a href="http://docs.ckeditor.com/">CKEditor documentation site</a></li>
    <li><a href="http://mxr.mozilla.org/">MXR: Mozilla source cross-reference</a></li>
    <li class="toggle">
      <details><summary>Style guides</summary>
      <ol>
        <li><a href="http://www.economist.com/research/StyleGuide/">The Economist style guide</a></li>
        <li><a href="https://www.amazon.com/gp/product/0226104036/">The Chicago manual of style</a></li>
        <li><a href="http://www.answers.com/library/Dictionary">Answers.com dictionary</a></li>
        <li><a href="http://www.wsu.edu/~brians/errors/">Common Errors in English</a></li>
      </ol>
      </details>
    </li>
  </ol>
</section>
```

注意すべき重要事項は次の通りです。

- リストは順序付きリストである**べき**です。
- 別な順序付きリストを含んだ {{HTMLElement("details")}} を同じ {{HTMLElement("li")}} ブロックの**中**で使用すると、階層構造のリストを持つことができます。

## クイックリンクを生成するマクロの使用

言うまでもなく、マクロを使用してクイックリンクを生成することができます (また、ふつうは**するべき**です)。
複数のページで同じクイックリンクを使用する必要がある場合は、マクロにするべきです。

マクロは、必要に応じて単純なものでも複雑なものでもかまいません。上記の[クイックリンクの構文](#クイックリンクの構文)と同様の HTML を出力するだけです。

### 標準のクイックリンクマクロ

私たちのクイックリンクを生成する標準マクロの一覧です。

- [`CSSRef`](https://github.com/mdn/yari/blob/main/kumascript/macros/CSSRef.ejs)
  - : CSS リファレンスページの標準クイックリンクを構築します。
- [`HTMLRef`](https://github.com/mdn/yari/blob/main/kumascript/macros/HTMLRef.ejs)
  - : HTML リファレンスページの標準クイックリンクを構築します。
- [`QuickLinksWithSubpages`](https://github.com/mdn/yari/blob/main/kumascript/macros/QuickLinksWithSubpages.ejs)
  - : 現在のページ（または指定したページ）の子を宛先として使用して、クイックリンクのセットを作成します。
    これにより、最大 2 レベルの階層リストが作成されます。
    ページのタイトルをリンクテキストとして使用し、その概要をツールチップとして表示します。
