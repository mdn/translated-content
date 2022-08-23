---
title: アイコンの中身が外側にはみ出すなどして形が壊れている
slug: orphaned/Web/Compatibility_FAQ/Misaligned_Text_Inside_Icon.html
tags:
  - Compatibility
  - Layout
original_slug: Web/Compatibility_FAQ/Misaligned_Text_Inside_Icon.html
---
<h2 id="概要">概要</h2>

<p>　アイコンの中身が外にはみ出して形が崩れてしまいます。</p>

<div style="margin-left: 50px;">表示画面</div>

<p><img alt="" src="https://mdn.mozillademos.org/files/9979/0103.jpg" style="width: 318px; height: 180px; margin-right: 50px; margin-left: 50px;"></p>

<h2 id="要因">要因</h2>

<p>　複数の要因が考えられますが、代表例として以下があります。</p>

<ol>
 <li>
  <p><strong>アイコンの横幅指定が誤っている</strong><br>
   アイコンの横幅指定が画面横幅を超えて指定されている為、画面の外にアイコンがはみ出してしまい、形が崩れています。<br>
   横幅に<a href="https://developer.mozilla.org/ja/docs/Web/CSS/max-width">max-width</a>プロパティを指定した場合、横画面表示時のサイズで指定されてしまうため、横幅が可変した場合に対応できません。</p>


  <pre><code><font size="3">　　img {
	<font>max-width</font>: <strong>100%;</strong>
	height: auto;
	vertical-align: middle;
	border: 0px none;
　　}				</font></code></pre>

  <p> </p>
 </li>
 <li>
  <p><strong>ベンダープレフィックス</strong><br>
   他のブラウザで正しく表示出来ているが、Firefoxで表示が崩れている場合は、ベンダープレフィックスの指定が入っていることが考えられます。<br>
   -webkit-background-sizeプロパティ等の指定で表示領域を設定していると、Firefoxでは認識できず、指定されていない状態になっています。</p>


  <pre><code><font size="3">　　h3 {
	padding: 10px 40px 10px 10px;
	background: url(/images/open.gif) no-repeat 98% 50%;
	<font>-webkit-background-size</font>: <strong>21px 21px;</strong>
	font-weight: bold;
	font-size: 12px;
	cursor: pointer;
　　}			</font></code></pre>

  <p> </p>
 </li>
</ol>

<h2 id="解決策">解決策</h2>

<p>　各要因の解決策の代表例として以下があります。</p>

<ol>
 <li>
  <p><strong>アイコンの横幅指定が誤っている</strong><br>
   <a href="https://developer.mozilla.org/ja/docs/Web/CSS/max-width">max-width</a>: 100%; で指定されている場合は、横画面表示時のサイズで指定されてしまうため、<a href="https://developer.mozilla.org/ja/docs/Web/CSS/width">width</a>: 100%; に修正することで縦画面表示のサイズにも対応できます。</p>


  <pre><code><font size="3">　　img {
	<font>width</font>: <strong>100%;</strong>
	height: auto;
	vertical-align: middle;
	border: 0px none;
　　}				</font></code></pre>

  <p> </p>
 </li>
 <li>
  <p><strong>ベンダープレフィックス </strong><br>
   webkit指定が入っている場合は、他ブラウザ互換用に別途指定を行う必要があります。<br>
   -webkit-background-sizeプロパティの場合は、<a href="https://developer.mozilla.org/ja/docs/Web/CSS/background-size">background-size</a>プロパティを追記することでFirefoxでも指定を行うことができます。<br>
   引数は同様のものが使用可能です。</p>


  <pre><code><font size="3">　　h3 {
	padding: 10px 40px 10px 10px;
	background: url(/images/open.gif) no-repeat 98% 50%;
	-webkit-background-size: 21px 21px;
	<font>background-size</font>: <strong>21px 21px;</strong>
	font-weight: bold;
	font-size: 12px;
	cursor: pointer;
　　}				</font></code></pre>

  <p> </p>
 </li>
</ol>

<h2 id="メリット">メリット</h2>

<p>　・画面サイズの可変に対応可能となります。<br>
 　・他のブラウザでも互換性を維持することができます。</p>

<p><a href="https://developer.mozilla.org/ja/docs/Web/Compatibility_FAQ">戻る</a></p>
