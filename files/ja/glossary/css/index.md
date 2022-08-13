---
title: CSS
slug: Glossary/CSS
tags:
  - CSS
  - CodingScripting
  - Glossar
  - Glossary
  - Web
  - 'l10n:priority'
translation_of: Glossary/CSS
---
<p><span class="seoSummary"><strong>CSS</strong> (Cascading StyleSheets) は {{glossary("browser","ブラウザー")}} でウェブページの見た目を調整する宣言型の言語です。</span>ウェブブラウザーは、指定された要素を適切に表示するために CSS スタイル宣言を適用する働きを持ちます。スタイルの宣言には、ウェブページの見た目を決定するプロパティとプロパティの値が含まれています。</p>

<p>CSS は {{Glossary("HTML")}} と {{Glossary("JavaScript")}} と合わせて、核となる 3 つのウェブ技術のうちの 1 つです。CSS は普通、{{Glossary("Element","HTML 要素")}} のデザインをしますが、{{Glossary("SVG")}} や {{Glossary("XML")}} のような他のマークアップ言語でも使用できます。</p>

<p>1 つの CSS のルールは、{{Glossary("CSS selector", "セレクタ")}} と、関連した {{Glossary("CSS Property","プロパティ")}} がセットになっています。以下の例は、黄色い文字と黒い背景を HTML の各段落要素に適用するものです:</p>

<pre class="brush: css">/* "p" セレクタは、そのルールによってドキュメント内のすべての段落に作用することを表します。*/
p {
  /* "color" プロパティは文字の色を定義するもので、ここでは黄色に設定しています。*/
  color: yellow;

  /* "background-color" プロパティは背景の色を定義するもので、ここでは黒色に設定しています。*/
  background-color: black
}</pre>

<p>"カスケーディング" 機能は、ルールを参照して、ページの見た目を変更するために、セレクタがどう優先的に取り扱われるか決定します。カスケーディングはとても重要な機能で、複雑なウェブサイトでは数千もの CSS ルールがあります。</p>

<h2 id="詳細">詳細</h2>

<h3 id="General_knowledge" name="General_knowledge">一般知識</h3>

<ul>
 <li><a href="/ja/Learn/CSS">CSS を学ぶ</a></li>
 <li>Wikipedia の {{interwiki("wikipedia", "CSS")}} 記事</li>
</ul>

<h3 id="Technical_reference" name="Technical_reference">技術的な文書</h3>

<ul>
 <li><a href="/ja/docs/Web/CSS">MDN 上の CSS ドキュメント</a></li>
 <li><a href="http://www.w3.org/Style/CSS/current-work" rel="external">The CSS Working Group current work</a></li>
</ul>
