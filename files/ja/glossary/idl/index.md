---
title: IDL (インタフェース記述言語)
slug: Glossary/IDL
tags:
  - CodingScripting
  - Glossary
  - IDL
  - Interface description language
translation_of: Glossary/IDL
---
<p><strong>IDL</strong> (<em>Interface Description Language</em>、インタフェース記述言語) は、特定のプログラミング言語とは別にオブジェクトのインタフェースを指定するために使用される汎用言語です。</p>

<h2 id="Content_versus_IDL_attributes" name="Content_versus_IDL_attributes">コンテンツ属性と IDL 属性</h2>

<p>HTML では、ほとんどの属性に二つの側面があります。<strong>コンテンツ属性</strong>と <strong>IDL 属性</strong>です。</p>

<p>コンテンツ属性は、コンテンツ (HTML コード) から設定したままの属性で、 {{domxref("element.setAttribute()")}} で設定したり、 {{domxref("element.getAttribute()")}} で取得したりすることができます。コンテンツ属性は、期待される値が整数でなければならない場合でも、常に文字列です。例えば、コンテンツ属性を使用して {{HTMLElement("input")}} 要素の <code>maxlength</code> を 42 に設定するには、その要素で <code>setAttribute("maxlength", "42")</code> を呼び出す必要があります。</p>

<p>IDL 属性は JavaScript のプロパティとしても知られています。これらは、 <code class="moz-txt-verticalline">element.foo</code> のような JavaScript プロパティを使って読み込んだり、設定したりすることができる属性です。 IDL 属性は、値を取得したときに値を返すために、その下にあるコンテンツ属性を常に使用しようとしています (しかし、変換するかもしれません) し、設定したときにコンテンツ属性に何かを保存しようとしています。言い換えれば、 IDL 属性は、本質的にはコンテンツ属性を反映します。</p>

<p>ほとんどの場合、 IDL 属性は実際に使われている通りの値を返します。例えば、 {{HTMLElement("input")}} 要素の既定の <code>type</code> は "text" なので、 <code>input.type="foobar"</code> と設定すると、 <code>&lt;input&gt;</code> 要素の型は (外観と動作において) text になりますが、コンテンツ属性の "type" の値は "foobar" になります。しかし、IDL 属性 <code>type</code> は文字列 "text" を返します。</p>

<p>IDL 属性は必ずしも文字列とは限らず、例えば <code>input.maxlength</code> は数値 (signed long) です。 IDL 属性を使用する際には、希望する型の値を読み込んだり設定したりしますので、 <code>input.maxlength</code> は常に数値を返すでしょうし、 <code>input.maxlength</code> を設定すると、数値を要求します。他の型を渡した場合、型変換のための標準的な JavaScript のルールで指定されているように、自動的に数値に変換されます。</p>

<p>IDL 属性は、 unsigned long、 URL、 論理型など、<a href="https://www.whatwg.org/specs/web-apps/current-work/multipage/urls.html#reflecting-content-attributes-in-idl-attributes">他の型を反映</a>することができます。残念ながら、明確なルールはなく、 IDL 属性が対応するコンテンツ属性と連動してどのように振る舞うかは、属性に依存します。ほとんどの場合、仕様書で定められた規則に従いますが、そうでない場合もあります。 HTML の仕様は、これを可能な限り開発者に優しいものにしようとしていますが、様々な理由 (主に歴史的な理由) で、属性によっては (例えば <code>select.size</code> など) 奇妙な振る舞いをすることもありますので、それらが正確にどのように振る舞うかを理解するには仕様書を読んでください。</p>

<h2 id="Learn_more" name="Learn_more">詳細情報</h2>

<h3 id="General_knowledge" name="General_knowledge">一般知識</h3>

<ul>
 <li>Wikipedia 上の {{interwiki("wikipedia", "インタフェース記述言語")}}</li>
 <li><a href="/ja/docs/Web/HTML/Attributes">HTML 属性リファレンス</a></li>
</ul>

<h3 id="Technical_reference" name="Technical_reference">技術リファレンス</h3>

<ul>
 <li><a href="http://www.eecs.berkeley.edu/~messer/netappc/Supplements/10-idl.pdf">インタフェース定義言語</a>（英語）</li>
</ul>
