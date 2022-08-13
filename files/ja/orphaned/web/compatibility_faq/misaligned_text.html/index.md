---
title: 文字列の表示位置がずれる
slug: orphaned/Web/Compatibility_FAQ/Misaligned_Text.html
tags:
  - Compatibility
  - Layout
original_slug: Web/Compatibility_FAQ/Misaligned_Text.html
---
<h2 id="概要">概要</h2>

<p>　文字列の表示位置が上下左右にずれて表示されたり、プルダウンメニュー等の表示領域をはみ出して表示したりすることがあります。<br>
 　その場合、横スクロールが行えないことを想定したモバイル向けwebページで横スクロールが可能となってしまいます。</p>

<div style="margin-left: 50px;">表示画面</div>

<p><img alt="" src="https://mdn.mozillademos.org/files/9977/0109.jpg" style="height: 320px; margin-left: 50px; margin-right: 50px; width: 567px;"></p>

<h2 id="要因">要因</h2>

<p>　複数の要因が考えられますが、代表例として以下があります。</p>

<ol>
 <li>
  <p><strong>ブラウザ間でのデフォルト値の差異</strong><br>
   ブラウザ毎でデフォルト値を持っています。 <a href="https://developer.mozilla.org/ja/docs/Web/CSS/line-height">line-height</a>: normal; 等で指定するとデフォルト値で表示されます。<br>
   しかし、ブラウザによってはデフォルト値が異なるため、同じようにnormalで指定してもブラウザ比較すると異なる表示となってしまうことがあります。</p>

  <pre class="notranslate"><code><font size="3">　　.recommended {
	text-decoration: none;
	display: inline;
	width: auto;
	height: auto;
	<font>line-height</font>: <strong>normal;</strong>
	vertical-align: baseline;
　　}			</font></code></pre>


 </li>
 <li>
  <p><strong>ベンダープレフィックス</strong><br>
   他のブラウザで正しく表示出来ているが、Firefoxで表示が崩れている場合は、ベンダープレフィックスの指定が入っていることが考えられます。<br>
   -webkit-box-sizingプロパティ等で指定している場合、Firefoxでは認識できないため、表示崩れが発生します。</p>

  <pre class="notranslate"><code><font size="3">　　#button-06 {
	display: table;
	width: 99.9%;
	<font>-webkit-box-sizing</font>: <strong>border-box;</strong>
　　}				</font></code></pre>


 </li>
 <li>
  <p><strong>ブラウザ間でのpx指定の差異</strong><br>
   様々なアイコン上の文字列をCSSの<a href="https://developer.mozilla.org/ja/docs/Web/CSS/padding">padding</a>プロパティ等を使用して、配置を指定している場合、ブラウザ間で表示がずれてしまう場合があります。<br>
   これは、ブラウザ間でpx指定の差異があるために発生しています。</p>

  <pre class="notranslate"><code><font size="3">　　.gender-type {
	<font>padding-top</font>: <strong>3px;</strong>
　　}				</font></code></pre>


 </li>
</ol>

<h2 id="解決策">解決策</h2>

<p>　各要因の解決策の代表例として以下があります。</p>

<ol>
 <li>
  <p><strong>ブラウザ間でのデフォルト値の差異</strong><br>
   デフォルト値で設定するとそれぞれのブラウザで解釈の差異が生まれてしまう可能性があるため、<br>
   明示的に値を指定することで正しく表示できます。</p>

  <pre class="notranslate"><code><font size="3">　　.recommended {
	text-decoration: none; display: inline;
	width: auto;
	height: auto;
	<font>line-height</font>: <strong>1;</strong>
	vertical-align: baseline;
　　}				</font></code></pre>


 </li>
 <li>
  <p><strong>ベンダープレフィックス</strong><br>
   webkit指定が入っている場合は、他のブラウザとの互換用に別途指定を行う必要があります。<br>
   -webkit-box-sizingプロパティの場合は、<a href="https://developer.mozilla.org/ja/docs/Web/CSS/box-sizing">box-sizing</a>プロパティを追記することでFirefoxでも指定を行うことができます。</p>

  <pre class="notranslate"><code><font size="3">　　#button-06 {
	display: table;
	width: 99.9%;
	-webkit-box-sizing: border-box;
	<font>box-sizing</font>: <strong>border-box;</strong>
　　}				</font></code></pre>


 </li>
 <li>
  <p><strong>ブラウザ間でのpx指定の差異</strong><br>
   指定に差異が出てしまっているものに関しては、個々の要素に<a href="https://developer.mozilla.org/ja/docs/Web/CSS/padding">padding</a>プロパティ指定を追記し、<br>
   それぞれで調整を行うことで、想定の表示を行うことが可能となります。</p>

  <pre class="notranslate"><code><font size="3">　　.gender-type.blc-hdr-rgt {
	float: right;
	<font>padding</font>: <strong>1.5px;</strong>
　　}				</font></code></pre>


 </li>
</ol>

<h2 id="メリット">メリット</h2>

<p>　・デフォルト値ではなく、明示的に値を指定することで、他のブラウザで差異があった場合にも対応できます。</p>

<p><a href="https://developer.mozilla.org/ja/docs/Web/Compatibility_FAQ">戻る</a></p>
