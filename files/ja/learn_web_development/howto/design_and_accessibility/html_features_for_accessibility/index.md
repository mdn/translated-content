---
title: アクセシビリティを推進する HTML の機能
slug: Learn_web_development/Howto/Design_and_accessibility/HTML_features_for_accessibility
l10n:
  sourceCommit: 479ea4c8bff4b900a7968413287c77dde2b0c20f
---

以下のコンテンツは、さまざまな障害を持つ人々にとってウェブページのアクセシビリティをより高めるために使用できる HTML の特定の機能について説明しています。

## リンクテキスト

自己説明的でないリンクがある場合、またはリンク先をより詳しく説明することで恩恵を受けることができる場合、 [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) または [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) 属性を使用してリンクに情報を追加することができます。

```html-nolint
<p>
  リンクテキストを書くのが実に下手なんです。詳しくは、
  <a
    href="inept.html"
    aria-label="私がリンクテキストを書くのが下手な理由： 説明と謝罪"
    >こちらをクリック</a
  >してください。
</p>
<p>
  私は本当に<span id="incompetence">リンクテキストを書くのが下手なんです</span>。
  詳しくは<a href="inept.html" aria-labelledby="incompetence">こちらをクリック</a>してください。
</p>
```

ほとんどの場合、代わりに有益なリンクテキストを書く方が良いことに注意してください。

```html-nolint
<p>
  私は<a href="capable.html">リンクテキストを書くのが得意だというブログ記事</a>を書きました。
</p>
```

## スキップリンク

タブ移動を補助するために、ユーザーがウェブページの大きな塊を飛び越えることを可能にする[スキップリンク](/ja/docs/Web/HTML/Reference/Elements/a#スキップリンク)を提供することができます。たとえば、ユーザーが多すぎるナビゲーションリンクを飛び越えて、すべてのリンクを巡回するのではなくページのメインコンテンツを読むことができるようにしたい場合があります。

```html
<header>
  <h1>見出し</h1>
  <a href="#content">コンテンツまでスキップ</a>
</header>

<nav>
  <!-- ナビゲーション部 -->
</nav>

<section id="content">
  <!-- コンテンツ -->
</section>
```

## 画像の alt 属性

すべての画像には [`alt`](/ja/docs/Web/HTML/Reference/Elements/img#alt) 属性を設定すべきです。画像が純粋に装飾であり、文書のコンテンツやコンテキストに何の意味も与えない場合、 `alt` 属性は空ですが存在する必要があります。オプションとして、 [`role="presentation"`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) を追加することもできます。それ以外の画像にはすべて `alt` 属性を設定し、他のコンテンツは読めても画像が見えないユーザーに役立つ方法で[画像を説明する代替テキスト](/ja/docs/Web/API/HTMLImageElement/alt#usage_notes)を提供すべきです。画像を読み込むことができない人に、画像をどのように説明するかを考えてみてください。それが `alt` 属性の値として記載すべき情報です。

```html
<!-- 装飾的な画像 -->
<img alt="" src="blueswish.png" role="presentation" />
<img
  alt="Open Web Docs のロゴ: 微笑む本の虫カール"
  src="carle.svg"
  role="img" />
```

同じコンテンツに対する `alt` 属性であっても、文脈によって異なるかもしれません。次の例では、 HTML の [`<progress>`](/ja/docs/Web/HTML/Reference/Elements/progress) 要素の使い方を開発者に教える文書のページ読み込みの進捗を表示するために、進捗バーの代わりにアニメーション gif が使われています。

```html
<img alt="20% complete" src="load-progress.gif" />
<img
  alt="進捗バーは、つまみの左側に太い緑色の正方形、右側に細い灰色の線で表示されます。つまみは、緑色の部分の高さと同じ直径の円です。"
  src="screenshot-progressbar.png" />
```

## ARIA ロール属性

既定、 HTML の意味を持つすべての要素はロール ([`role`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles)) を持っています。例えば、 `<input type="radio">` は `radio` ロールを持ちます。 HTML の意味を持たない要素はロールを持ちません。 ARIA ロールは、 [`tablist`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role) ウィジェットのように、 HTML にネイティブに存在しない要素を記述するために使用することができます。ロールはまた、存在するがまだブラウザーの完全な対応をしていない新しい要素にも役立ちます。例えば、 SVG 画像を使用する場合、開始タグに `role="img"` を追加してください。 [SVG VoiceOver のバグ](https://webkit.org/b/216364) があり、 VoiceOver は SVG 画像を正しくアナウンスできないからです。

```html
<img src="mdn.svg" alt="MDN logo" role="img" />
```
