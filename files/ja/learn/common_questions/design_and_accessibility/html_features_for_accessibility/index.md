---
title: アクセシビリティを推進する HTML の機能とは？
slug: Learn/Common_questions/Design_and_accessibility/HTML_features_for_accessibility
---

以下のコンテンツは、さまざまな障害を持つ人々にとってウェブページのアクセシビリティをより高めるために使用できる HTML の特定の機能について説明しています。

## タブ移動

ポインティングデバイスを使用しない、または使用できないユーザーは、リンク間を <kbd>Tab</kbd> で移動できます。ですから、リンクは論理的なタブ移動の順序になっている必要があります。 `tabindex` 属性を使用すると、この順序を定義することができます。 HTML が線形である場合（そうあるべきなのですが）、論理的なタブ移動の順序は自動的に正しい位置に配置されるはずです。

```html
<ul>
  <li><a href="here.html" tabindex="1">Here</a></li>
  <li><a href="there.html" tabindex="3">There</a></li>
  <li><a href="anywhere.html" tabindex="2">Anywhere</a></li>
</ul>
```

この例では（これは純粋にデモンストレーションとして使用されています - こうはしないでください）、タブは "Here" から "Anywhere" 、"There" の順にジャンプします。

## リンクタイトル

自己説明的でないリンクがある場合や、リンク先をより詳細に説明をすることで好ましいことがある場合、`title`属性を使用してリンクに情報を追加することができます。

```html
<p>
  I'm really bad at writing link text.
  <a
    href="inept.html"
    title="Why I'm rubbish at writing link text: An explanation and an apology."
    >Click here</a
  >
  to find out more.
</p>
```

## アクセスキー

**アクセスキー**を使用すると、**キーボードショートカット**をリンクに割り当てることができ、ナビゲーションが簡単になります。通常、ユーザーが <kbd>Alt</kbd> キーまたは <kbd>Ctrl</kbd> キーを押しながらアクセスキーを押すとフォーカスが移動します。正確なキーの組み合わせはプラットフォームによって変わります。

```html
<a href="somepage.html" accesskey="s">Some page</a>
```

## スキップリンク

タブ移動を補助するために、ユーザーがあなたのウェブページの大きな塊を飛び越えることを可能にするリンクを提供することができます。たとえば、ユーザーが多すぎるナビゲーションリンクを飛び越えて、すべてのリンクを巡回するのではなくページのメインコンテンツを読むことができるようにしたい場合があります。

```html
<header>
  <h1>The Heading</h1>
  <a href="#content">コンテンツまでスキップ</a>
</header>

<nav>
  <!-- navigation stuff -->
</nav>

<section id="content">
  <!--your content -->
</section>
```
