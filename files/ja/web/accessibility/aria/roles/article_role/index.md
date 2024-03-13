---
title: "ARIA: article ロール"
slug: Web/Accessibility/ARIA/Roles/article_role
---

記事 (`article`) ロールは、ページ、文書、またはウェブサイト上で容易に自立することができるページのセクションを示します。 これは、通常、コメント、フォーラム投稿、新聞記事、または 1 ページにまとめられたその他項目などの関連コンテンツの項目に設定します。

```html
<div role="article">
  <h2>この断片の見出し</h2>
  <p>この断片の段落。</p>
  <p>別の段落。</p>
  ... 記事とインタラクションしたり、共有したり等するためのコントロール ...
</div>
<div role="article">...</div>
```

この例では、同じように構成され、関連している 2 つの記事を 1 ページに並べて表示しています。

> **メモ:** 記事 (`article`) ロールを持つ `<div>` ではなく、`<article>` 要素を使用します。 利用可能な場合は、いつでもネイティブの要素を使用します。

`role="article"` を使用する代わりに、{{htmlelement("article")}} 要素を使用することができます。

```html
<article>
  <h2>この断片の見出し</h2>
  <p>この断片の段落。</p>
  <p>別の段落。</p>
  ... 記事とインタラクションしたり、共有したり等するためのコントロール ...
</article>
<article>...</article>
```

## 説明

記事 (`article`) ロールは、文書、ページ、サイトのセクションを表し、それが自立している場合は、完全な文書、ページ、サイトとして見ることができます。 一連の記事セクションの目的は、互いの関係を示すことです。

記事は、ナビゲーションに関するランドマークとは見なされませんが、ランドマークをサポートする多くの支援技術は、記事間をナビゲートする手段をサポートします。 また、記事内のネスト関係の表示をサポートすることもあります。

記事をネストすることができ、ネストされた記事は、それをネストしているものと直接関係しますが、必ずしもネスト階層の外側にあるものに関連しているとは限りません。 具体的な使用事例については、例を参照してください。

記事がフィード (feed) の一部である場合、`aria-posinset` 属性および `aria-setsize` 属性を設定して、この特定の記事がフィード内のどの位置にあるかを示すことができます。

スクリーンリーダーやその他の支援技術がパススルーモードになるようなアプリケーション (`application`) やその他のウィジェット内では、記事を使用して、囲まれたコンテンツを再び通常のウェブコンテンツとして扱うように切り替えるべきであることを示すことができます。

意味論のない要素に記事 (`article`) ロールを含める代わりに、{{htmlelement("article")}} 要素を使用するべきです。 ユーザーエージェントは、これを記事 (`article`) ロールのような適切なアクセシビリティ情報に変換します。 `<article>` 要素を使用すると、検索エンジンがページの構造をより適切に見いだすのにも役立ちます。 `role="article"`、または好ましくは `<article>` の適切な使用例には、ブログ投稿、フォーラム投稿、フォーラムまたはブログ投稿へのコメント、フォーラムまたはブログ投稿へのコメントへのコメント、ソーシャルメディアフィード内の項目等が含まれます。

### 関連する WAI-ARIA のロール、ステート、プロパティ

- aria-posinset
  - : フィードのコンテキストでは、1 から始まるカウントに基づいて、そのフィード内のこの特定の記事の位置を示します。
- aria-setsize
  - : フィードのコンテキストでは、そのフィード内にいくつの記事の項目があるかを示します。

### キーボードインタラクション

このロールは、具体的なキーボードインタラクションをサポートしていません。

### 必要な JavaScript 機能

- イベントハンドラ
  - : このロールでは、イベントハンドラは必要ありません。
- 属性値の変更
  - : フィードを作成するときは、各記事 (`article`) ロールの `aria-posinset` 属性と `aria-setsize` 属性を適切な値に設定します。 `aria-posinset` は、1 ベースであることに注意してください。

> **メモ:** 常にネイティブの要素を使用してください。 記事 (`article`) ロールを持つ `<div>` ではなく、{{htmlelement("article")}} 要素を使用するべきです。

## 例

- WAI-ARIA Authoring Practices 1.1 の feed のデザインパターンから、[お薦めのレストランのフィード表示](https://www.w3.org/TR/wai-aria-practices-1.1/examples/feed/feedDisplay.html)とそれと分けられた[文書](https://www.w3.org/TR/wai-aria-practices-1.1/examples/feed/feed.html)

## 仕様

{{Specifications}}

## 優先順位

このロールは、HTML の {{htmlelement("article")}} 要素に対応し、可能な場合はその要素を代わりに使用するべきです。 このロールは、その子たちの間に具体的なロールが存在する必要はありません。 これは、フィード ([`feed`](/ja/docs/Web/Accessibility/ARIA/Roles/Feed_Role)) ロールを持つ要素の直接の子として許可される唯一のロールです。

## 関連情報

- [feed ロール](/ja/docs/Web/Accessibility/ARIA/Roles/Feed_Role)
- [section ロール](/ja/docs/Web/Accessibility/ARIA/Roles/Section_Role)
- {{htmlelement("article")}} 要素
- [RSS](/ja/docs/Glossary/RSS)

1. [**WAI-ARIA ロール**](/ja/docs/Web/Accessibility/ARIA/Roles){{ListSubpagesForSidebar("/ja/docs/Web/Accessibility/ARIA/Roles")}}
