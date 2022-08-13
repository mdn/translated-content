---
title: アイコンが表示されない
slug: orphaned/Web/Compatibility_FAQ/No_Icon_Shown.html
tags:
  - Compatibility
  - Invisible element
original_slug: Web/Compatibility_FAQ/No_Icon_Shown.html
---
<h2 id="概要">概要</h2>

<p>　一部のアイコンやバナーが表示されません。<br>
 　メニューのボタンや、検索実行ボタン、バナーなどがFirefoxのみで非表示となってしまいます。</p>

<div>
<p><img alt="" src="https://mdn.mozillademos.org/files/9989/0301.jpg" style="width: 439px; height: 250px; margin-right: 50px; margin-left: 50px;"></p>
</div>

<h2 id="要因">要因</h2>

<p>　複数要因がありますが、代表例として以下があります。</p>

<ol>
 <li>
  <p><strong>ベンダープレフィックス </strong><br>
   描画やサイズ指定でwebkit指定を使用している場合は、Firefoxでは認識できないため、非表示となってしまう場合があります。<br>
   また、背景色をwebkit指定で行い、白抜きのアイコンを描画していた場合も背景色が認識できません。<br>
   背景色が白で表示されると、白文字を指定した場合、同色となり非表示となるケースもあります。</p>
   下記は、描画指定の例になります。

  <pre><code><font size="3">　　top li{
	font-size: 90%;
	<font>-webkit-border-radius</font>: <strong>3px;</strong>
	border: 1px solid #e5e5e5;
	background-color: #ffffff;
	<font>background</font>: <strong>-webkit-gradient(linear, left bottom, left top, from(#f6f6f6), to(#ffffff));</strong>
	<font>-webkit-box-shadow</font>: <strong>0 1px 1px rgba(0, 0, 0, 0.05);</strong>
	margin: 0 0 0 5px;
	position: relative;
	bottom: 15px;
　　}

　　.icn_search a:before {
	content: "" "";
	width: 7px;
	height: 7px;
	border: 2px solid #e4006f;
	background: transparent;
	<font>-webkit-border-radius</font>: <strong>12px;</strong>
　　}

　　.icn_search a:after {
	content: "" "";
	left: 18px;
	width: 2px;
	height: 7px;
	margin-top: 0;
	<font>-webkit-transform</font>: <strong>rotate(-45deg);</strong>
　　}				</font></code></pre>

  <p>下記は、サイズ指定の例になります。</p>

  <pre><code><font size="3">　　single_02 {
	background: url(http://common/icon.png) no-repeat 0 -625px;
	<font>-webkit-background-size</font>: <strong>26px auto;</strong>
　　}				</font></code></pre>

  <p> </p>
 </li>
 <li>
  <p><strong>全体のレイアウトに誤りがある</strong><br>
   全体のレイアウトに誤りがあり、結果一部のバナー等が非表示となっている場合があります。<br>
   <a href="https://developer.mozilla.org/ja/docs/Web/CSS/float">float</a>プロパティ等の配置指定に誤りがあり、結果、一部の要素が画面に収まりきれずに表示できていません。</p>
 </li>
</ol>

<h2 id="解決策">解決策</h2>

<p>　各要因の解決策の代表例として以下があります。</p>

<ol>
 <li>
  <p><strong>ベンダープレフィックス </strong><br>
   webkit指定の描画やサイズ指定を他ブラウザでも互換性を維持できるよう下記記載のものに修正することで正しく表示可能となります。</p>

  <ul>
   <li><a href="https://developer.mozilla.org/ja/docs/Web/CSS/border-radius">border-radius</a>プロパティ</li>
   <li><a href="https://developer.mozilla.org/ja/docs/Web/CSS/linear-gradient">linear-gradient()</a>関数</li>
   <li><a href="https://developer.mozilla.org/ja/docs/Web/CSS/box-shadow">box-shadow</a>プロパティ</li>
   <li><a href="https://developer.mozilla.org/ja/docs/Web/CSS/transform">transform</a>プロパティ</li>
   <li><a href="https://developer.mozilla.org/ja/docs/Web/CSS/background-size">background-size</a>プロパティ</li>
  </ul>

  <p>詳しくは、「<a href="./Tips_Vendor_Prefix.html">mobile版Firefox向けベンダープレフィックス対処方法まとめ</a>」をご覧ください。</p>

  <p>下記は、描画指定の例になります。</p>

  <pre><code><font size="3">　　navtop li {
	font-size:90%;
	<font>border-radius</font>: <strong>3px;</strong>
	border: 1px solid #e5e5e5;
	background-color: #ffffff;
	<font>background</font>: <strong>linear-gradient(to bottom, #f6f6f6 0%, #ffffff 100%);</strong>
	<font>box-shadow</font>: <strong>0 1px 1px rgba(0, 0, 0, 0.05);</strong>
	margin: 0 0 0 5px;
	position: relative;
	bottom: 15px;
　　}

　　.icn_search a:before {
	content: "" "";
	width: 7px;
	height: 7px;
	border: 2px solid #e4006f;
	background: transparent;
	<font>border-radius</font>: <strong>12px;</strong>
　　}

　　.icn_search a:after {
	content: "" "";
	left: 18px;
	width: 2px;
	height: 7px;
	margin-top: 0;
	<font>transform</font>: <strong>rotate(-45deg);</strong>
　　}				</font></code></pre>

  <p>下記は、サイズ指定の例になります。</p>

  <pre><code><font size="3">　　single_02 {
	background: url(http://common/icon.png) no-repeat 0 -625px;
	-webkit-background-size: 26px auto;
	<font>background-size</font>: <strong>26px auto;</strong>
　　}				</font></code></pre>

  <p> </p>
 </li>
 <li>
  <p><strong>全体のレイアウトに誤りがある</strong><br>
   表示されていない部分のみが問題ではない場合もありますので、ページ全体のレイアウトを見直し、部品の一つ一つが想定の位置に正しく配置されていることを確認してください。</p>
 </li>
</ol>

<h2 id="メリット">メリット</h2>

<p>　・他のブラウザでも互換性を維持することができます。<br>
 　・全体のレイアウトを見直すことにより、その後の変更修正も容易になります。</p>

<p><a href="https://developer.mozilla.org/ja/docs/Web/Compatibility_FAQ">戻る</a></p>
