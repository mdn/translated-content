---
title: 'セレクターでの :target 疑似クラスの利用'
slug: 'Web/CSS/CSS_Selectors/Using_the_:target_pseudo-class_in_selectors'
tags:
  - ':target'
  - CSS
  - ガイド
  - セレクター
  - リファレンス
translation_of: 'Web/CSS/CSS_Selectors/Using_the_:target_pseudo-class_in_selectors'
---
<div>{{CSSRef}}</div>

<p>URL が文書の特定の部分を指している場合、ユーザーが気づきにくい場合があります。いくつかのシンプルな CSS を使用して URL の対象に注目させ、ユーザーの利便性を向上させる方法を確認しましょう。</p>

<h2 id="Picking_a_Target" name="Picking_a_Target">ターゲットの選択</h2>

<p>{{cssxref(":target")}} <a href="/ja/CSS/Pseudo-classes">疑似クラス</a>は、フラグメント識別子を含む URL のターゲット要素にスタイルを適用するために使用されます。例えば、 <code><span class="nowiki">http://developer.mozilla.org/ja/docs/Using_the_:target_selector#example</span></code> という URL はフラグメント識別子 <code>#example</code> を含んでいます。 HTML では、 <code>id</code> 及び <code>name</code> 属性が名前空間を共用しているので、識別子はどちらかの値として見つかります。従って、例の URL はこの文書の「例」の見出しを指すことになります。</p>

<p>おそらく URL のターゲットになる <code>h2</code> 要素をすべてスタイル付けしたいでしょうが、他の種類の要素がターゲットのスタイルになることは望まないでしょう。単純にこうするだけです。</p>

<pre class="brush: css">h2:target { font-weight: bold; }</pre>

<p>文書の特定のフラグメントに特化してスタイルを作成することもできます。これは URI に見られる値と同じ識別子を使用することで実現できます。つまり、 <code>#example</code> フラグメントに枠を追加するには、以下の書きます。</p>

<pre class="brush: css">#example:target { border: 1px solid black; }</pre>

<h2 id="Targeting_the_Root_Element" name="Targeting_the_Root_Element">すべての要素を対象にする</h2>

<p>インテントが「ブランケット」スタイルで作成されれば、すべての対象となる要素に適用されますので、ユニバーサルセレクターの代わりになります。</p>

<pre class="brush: css">:target { color: red; }
</pre>

<h2 id="Example" name="Example">例</h2>

<p>以下の例には、同じ文書内で要素を指す五つのリンクがあります。例えば「First」のリンクを選択すると、 <code>&lt;h1 id="one"&gt;</code> がターゲットの要素になります。なお、ターゲット要素は可能であればブラウザーウィンドウの先頭に配置されるため、文書は新しいスクロール位置へ移動する可能性があります。</p>

<div id="example">
<pre class="brush: html">&lt;h4 id="one"&gt;...&lt;/h4&gt; &lt;p id="two"&gt;...&lt;/p&gt;
&lt;div id="three"&gt;...&lt;/div&gt; &lt;a id="four"&gt;...&lt;/a&gt; &lt;em id="five"&gt;...&lt;/em&gt;

&lt;a href="#one"&gt;First&lt;/a&gt;
&lt;a href="#two"&gt;Second&lt;/a&gt;
&lt;a href="#three"&gt;Third&lt;/a&gt;
&lt;a href="#four"&gt;Fourth&lt;/a&gt;
&lt;a href="#five"&gt;Fifth&lt;/a&gt;</pre>
</div>

<h2 id="Conclusion" name="Conclusion">まとめ</h2>

<p>フラグメント識別子が文書の一部を指している場合、文書のどの部分を読むことを想定しているのか、読み手が分からなくなることがあります。 URI の対象をスタイル付けすることで、読み手の混乱を縮小したり除いたりすることができます。</p>

<h2 id="Related_Links" name="Related_Links">関連項目</h2>

<ul>
 <li>{{cssxref(":target")}}</li>
</ul>

<div class="originaldocinfo">
<h3 id="Original_Document_Information" name="Original_Document_Information">原典情報</h3>

<ul>
 <li>Author(s): Eric Meyer, Standards Evangelist, Netscape Communications</li>
 <li>Original Copyright Information: Copyright © 2001-2003 Netscape. All rights reserved.</li>
 <li>メモ: この記事はもともと DevEdge サイトの一部だったものを再構成したものです。</li>
</ul>
</div>
