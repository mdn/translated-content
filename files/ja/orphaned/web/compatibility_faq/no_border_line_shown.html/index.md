---
title: 罫線が表示されない
slug: orphaned/Web/Compatibility_FAQ/No_Border_Line_Shown.html
tags:
  - Compatibility
  - Invisible element
original_slug: Web/Compatibility_FAQ/No_Border_Line_Shown.html
---
<h2 id="概要">概要</h2>

<p>　他ブラウザで表示されている罫線が、Firefoxで表示されない場合があります。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/9983/0302.jpg" style="width: 468px; height: 250px; margin-right: 50px; margin-left: 50px;"></p>

<h2 id="要因">要因</h2>

<p>　要因の代表例として以下があります。</p>

<ol>
 <li>
  <p><strong>他ブラウザで独自のCSSが適応されている</strong><br>
   例えば、Chromeではブラウザ独自のCSSにて、hr要素に<a href="https://developer.mozilla.org/ja/docs/Web/CSS/background-color">background-color</a>プロパティを指定することができます。<br>
   そのため、Firefoxで表示されていない罫線がChromeでは表示されるということが起きてしまいます。<br>
   特に、コンテンツの記述やFirefoxの動作が問題になっているわけではありません。</p>
 </li>
</ol>

<h2 id="解決策">解決策</h2>

<p>　要因の解決策の代表例として以下があります。</p>

<ol>
 <li>
  <p><strong>他ブラウザで独自のCSSが適応されている</strong><br>
   Firefox側のコンテンツの記述、動作に問題はありませんが、下記の方法で統一することが可能です。<br>
   まず、表示させたい要素のインラインに罫線(<a href="https://developer.mozilla.org/ja/docs/Web/CSS/border-top">border-top</a>: thin solid;)を指定します。<br>
   そして、他ブラウザ(この場合はChrome)で入っている指定をリセット記述(<a href="https://developer.mozilla.org/ja/docs/Web/CSS/background-color">background-color</a>プロパティを利用)にて非表示にします。</p>


  <pre><code><font size="3">　　インライン {
	<font>border-top</font>: <strong>thin solid;</strong>
　　}

　　hr {
	display: block;
	height: 1px;
	border: 0;
	border-top: 1px solid #cccccc;
	margin: 1em 0;
	padding: 0;
	<font>background-color</font>: <strong>rgb(255,255,255);</strong>
　　}				</font></code></pre>
  上記の修正にて、他ブラウザとの互換がとれるようになります。</li>
</ol>

<h2 id="メリット">メリット</h2>

<p>　・他のブラウザでも互換性を維持することができます。<br>
 　・作成者の把握できていないブラウザ独自の装飾をリセットすることで作成時の想定に近いコンテンツが作成できます。</p>

<p><a href="https://developer.mozilla.org/ja/docs/Web/Compatibility_FAQ">戻る</a></p>
