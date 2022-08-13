---
title: The Importance of Correct HTML Commenting
slug: orphaned/The_Importance_of_Correct_HTML_Commenting
tags:
  - HTML
original_slug: The_Importance_of_Correct_HTML_Commenting
---
<p>HTML を <a href="ja/Mozilla's_DOCTYPE_sniffing">標準モード</a> で記述する場合、不正確に書かれたコメントによってページの表示が崩れ、コンテンツの一部または全体がコメントアウトされた状態になってしまいます。XHTML や XML を記述する場合、不正確なコメントが含まれると、ドキュメントそのものが表示できなくなります。</p>

<h3 id="HTML_4.01" name="HTML_4.01">HTML 4.01</h3>

<p><em><a class="external" href="http://www.w3.org/TR/html4/intro/sgmltut.html#h-3.2.4">W3C HTML 4.01 Recommendation Section 3.2.4 - Comments</a> より引用:</em></p>

<blockquote>マークアップ宣言の開始区切り文字 ("&lt;!") とコメント開始区切り文字 ("--") の間に空白を含むことはできませんが、コメント終了区切り文字 ("--") とマークアップ宣言の終了区切り文字 ("&gt;") の間に含めることはできます。一般的な間違いとして、ハイフンの連続 ("---") をコメント内に含んでしまうことがあります。ページ作者は、コメント内に 2 つ以上の連続するハイフンを含めないよう注意すべきです。</blockquote>

<h4 id=".E4.BE.8B" name=".E4.BE.8B">例</h4>

<p>以下のコメントは HTML では適切なコメントです。</p>

<pre class="eval">&lt;!-- valid html comment --&gt;
&lt;!-- valid html comment -- &gt;
</pre>

<p>以下のコメントは HTML では不適切なコメントです。</p>

<pre class="eval">&lt;!-- invalid -- html comment --&gt;
</pre>

<h3 id="XML" name="XML">XML</h3>

<p><em><a class="external" href="http://www.w3.org/TR/REC-xml#sec-comments">W3C XML 1.0 Recommendation Section 2.5 - Comments</a> より:</em></p>

<blockquote><strong>定義:</strong> コメントは、ドキュメント内で他のマークアップの外側のどの箇所にも出現することができます。さらに、文法によって許可されている場所であれば、ドキュメントタイプ宣言の内部に出現することも可能です。コメントはドキュメントの文字データには含まれません。XML プロセッサは、アプリケーションがコメント内のテキストを取得できるようにする場合がありますが、それは必須ではありません。互換性のため、文字列 "--" (二重ハイフン) をコメント内に含めることはできません。パラメータ実体参照はコメント内では認識されるべきではありません。

<pre>[15] Comment ::= '&lt;!--' ((Char - '-') | ('-' (Char - '-')))* '--&gt;'
</pre>
</blockquote>

<p>XML におけるコメントの文法に書かれている通り、コメントは以下のような形式になります。</p>

<pre class="eval">&lt;!-- characters excluding adjacent dashes --&gt;
</pre>

<h4 id=".E4.BE.8B_2" name=".E4.BE.8B_2">例</h4>

<p>以下のコメントは XML および XHTML では適切なコメントです。</p>

<pre class="eval">&lt;!-- valid xml/xhtml comment --&gt;
</pre>

<p>以下のコメントは XML および XHTML では不適切なコメントです。</p>

<pre class="eval">&lt;!-- invalid -- xml comment --&gt;
&lt;!-- invalid xml comment ---&gt;
&lt;!-- invalid xml comment -- &gt;
</pre>

<h3 id=".E5.8F.82.E8.80.83.E8.B3.87.E6.96.99" name=".E5.8F.82.E8.80.83.E8.B3.87.E6.96.99">参考資料</h3>

<ul>
 <li><a class="external" href="http://www.w3.org/TR/html4/intro/sgmltut.html#h-3.2.4">HTML 4.01 Recommendation: 3.2.4 - Comments</a></li>
 <li><a class="external" href="http://www.w3.org/TR/REC-xml#sec-comments">XML Recommendation: 2.5 - Comments</a></li>
 <li>{{bug(144432) }}</li>
 <li>{{bug(102127) }}</li>
</ul>

<div class="originaldocinfo">
<h3 id=".E5.8E.9F.E6.96.87.E6.9B.B8.E3.81.AE.E6.83.85.E5.A0.B1" name=".E5.8E.9F.E6.96.87.E6.9B.B8.E3.81.AE.E6.83.85.E5.A0.B1">原文書の情報</h3>

<ul>
 <li>最終更新日: May 19th, 2003</li>
 <li>著作権: Copyright © 2001-2003 Netscape. All rights reserved.</li>
</ul>
</div>

<div class="noinclude"> </div>
