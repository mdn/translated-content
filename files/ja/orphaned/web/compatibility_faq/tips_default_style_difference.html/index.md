---
title: ブラウザごとの表示の違い(User-Agent-Stylesheetによる表示差異)
slug: orphaned/Web/Compatibility_FAQ/Tips_Default_Style_Difference.html
tags:
  - Compatibility
  - StyleSheet
original_slug: Web/Compatibility_FAQ/Tips_Default_Style_Difference.html
---
<h2 id="概要">概要</h2>

<p>　ブラウザ毎で独自のスタイルシートを持っており、使用するタグによっては、ブラウザ毎で表示が異なる場合があります。<br>
 　多少デザインが異なる程度の為、ユーザー観点や操作上の問題はない場合が多いですが、代表的な例を紹介します。</p>

<h2 id="例">例</h2>

<ol>
 <li>
  <p><strong>デフォルトのフォントが異なる</strong><br>
   ブラウザ毎でデフォルトのフォントが異なる場合があります。<a href="https://developer.mozilla.org/ja/docs/Web/CSS/font-style">font-style</a>プロパティを明示的に指定すると統一できますが、<a href="https://developer.mozilla.org/ja/docs/Web/CSS/font-style">font-style</a>: normal; で指定した場合は、表示が多少異なります。<br>
   部分的に細かいpx指定をしていると、稀にレイアウトの崩れを起こすことがありますので、その場合は、明示的に指定を行う必要があります。</p>

  <pre><code><font size="3">　　body {
	margin: 0;
	padding: 0;
	<font>font-style</font>: <strong>normal</strong>;
　　}			</font></code></pre>

  <p><img alt="" src="https://mdn.mozillademos.org/files/10007/ex2_3.png" style="width: 336px; height: 120px; margin-right: 50px; margin-left: 50px;"></p>
 </li>
 <li>
  <p><strong>テキストの太さが異なる</strong><br>
   見出しのテキストで使用するh要素ですが、同様の要素(h2要素など)で指定しても、ブラウザによっては僅かな差異が発生する場合があります。</p>

  <p><img alt="" src="https://mdn.mozillademos.org/files/9997/ex2_1.png" style="width: 286px; height: 120px; margin-right: 50px; margin-left: 50px;"></p>
 </li>
 <li>
  <p><strong>チェックボックスのデザインが異なる</strong><br>
   チェックボックスの表示がブラウザ間で異なる場合があります。<br>
   チェックボックスには、ブラウザ毎で独自のCSSが適応されるため、多少デザインが異なります。<br>
   統一させる為には、デフォルトの装飾をリセットし、別途スタイル指定を行う必要があります。</p>

  <p class="attention">注意：2014/12現在、mobile版Firefoxでは、ブラウザ側のスタイルをリセットする<a href="https://developer.mozilla.org/ja/docs/Web/CSS/-moz-appearance">appearance</a>プロパティが使用できない不具合があります。</p>

  <p><img alt="" src="https://mdn.mozillademos.org/files/9999/ex2_2.png" style="width: 385px; height: 150px; margin-right: 50px; margin-left: 50px;"></p>
 </li>
 <li>
  <p><strong>プルダウンメニューのデザインが異なる</strong><br>
   プルダウンメニューに関しても、チェックボックスのデザインと同様に、ブラウザ毎でデザインが異なる場合があります。</p>

  <p><img alt="" src="https://mdn.mozillademos.org/files/10003/ex2_4.png" style="width: 453px; height: 80px; margin-right: 50px; margin-left: 50px;"></p>
 </li>
</ol>

<p>ブラウザ毎で独自のCSSが適応されていますが、下記のような方法でデザインを指定することで、統一することも可能です。</p>

<pre><code><font size="3">　　.ipt_select_01 {
	width: 100%;
	<font>color</font>: <strong>#000;</strong>
	<font>background-color</font>: <strong>ButtonFase;</strong>
	<font>border-color</font>: <strong>#A9A9A9;</strong>
　　}			</font></code></pre>

<p><a href="https://developer.mozilla.org/ja/docs/Web/Compatibility_FAQ">戻る</a></p>
