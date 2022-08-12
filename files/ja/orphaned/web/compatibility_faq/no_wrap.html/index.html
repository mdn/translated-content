---
title: 画面外に不要な空白が発生する
slug: orphaned/Web/Compatibility_FAQ/No_Wrap.html
tags:
  - Compatibility
  - Layout
original_slug: Web/Compatibility_FAQ/No_Wrap.html
---
<h2 id="概要">概要</h2>

<p>　一部のコンテンツが画面の右側にはみ出して表示されることにより、はみ出していないコンテンツの右側に空白が出来てしまう場合があります。<br>
 　その場合、横スクロールが行えない想定のモバイル向けwebページで横スクロールが可能となってしまいます。</p>

<div>
<div style="margin-left: 50px;">表示画面</div>

<p><img alt="" src="https://mdn.mozillademos.org/files/9991/0101.jpg" style="width: 421px; height: 522px;"></p>
</div>

<p> </p>

<h2 id="要因">要因</h2>

<p>　複数要因がありますが、代表例として以下があります。</p>

<ol>
 <li>
  <p><strong>テーブルの列幅指定がされていない </strong><br>
   テーブルの列幅が指定されていないため、一部要素が画面右側に流れ出してしまっています。<br>
   よって、画面に表示されていない部分を表示するため、横スクロールが可能となり、要素が流れ出していない部分に空白ができています。</p>

  <p>なお、要素が流れ出さないため、テーブルの列幅は画面サイズに合わせて指定する必要があります。<br>
   指定されていない理由としては、そもそも指定を行っていないか、もしくは表示するブラウザに対応していないタグを使用している可能性があります。</p>
 </li>
 <li>
  <p><strong>アイテムの横幅指定が誤っている</strong><br>
   アイテムの横幅指定が画面横幅を超えて指定されているため、その他の要素の右側に空白ができています。<br>
   アイテムの横幅指定は、<a href="https://developer.mozilla.org/ja/docs/Web/CSS/width">width</a>プロパティの指定方法または値の誤り、アイテムを表示しているブロックの指定の誤り等があります。</p>

  <p>下記の指定方法は、<a href="https://developer.mozilla.org/ja/docs/Web/CSS/max-width">max-width</a>プロパティ等で、横画面切替表示時の横幅で指定されてしまうため、縦画面に対応されなくなってしまう例になります。<br>
   その他に、テーブル同様そもそも指定を行っていないか、もしくは表示するブラウザに対応していないタグを使用している可能性もあります。</p>


  <pre><code><font size="3">　　img {
	<font>max-width</font>: <strong>100%;</strong>
	height: auto;
	vertical-align: middle;
	border: 0px none;
　　}				</font></code></pre>

  <p>なお、ブロックの指定誤りとしては、様々ありますが、その他の表示しているアイテムの幅も考慮した上で、px指定または%指定する必要があります。</p>

  <p> </p>
 </li>
</ol>

<h2 id="解決策">解決策</h2>

<p>　各要因の解決策の代表例として以下があります。</p>

<ol>
 <li>
  <p><strong>テーブルの列幅指定がされていない</strong><br>
   画面全体に <a href="https://developer.mozilla.org/ja/docs/Web/CSS/table-layout">table-layout</a>: fixed; を指定します。<br>
   この指定により、テーブルの列幅が画面に合わされますので、画面右側の空白はなくなります。</p>


  <pre><code><font size="3">　　html, body, div, span... {
	margin: 0;
	padding: 0;
	border: 0;
	outline: 0;
	vertical-align: top;
	<font>table-layout</font>: <strong>fixed;</strong>
　　}				</font></code></pre>

  <p> </p>

  <p>また、テーブルの幅指定を <a href="https://developer.mozilla.org/ja/docs/Web/CSS/display">display</a>: table; で行っている場合、Firefoxでは認識できません。<br>
   他ブラウザ互換のために <a href="https://developer.mozilla.org/ja/docs/Web/CSS/display">display</a>: inline-block; を追記することで、画面幅に指定することができます。</p>


  <pre><code><font size="3">　　#navigation ul {
	display: table;
	<font>display</font>: <strong>inline-block;</strong>
	width: 99.9%;
　　}				</font></code></pre>

  <p> </p>
 </li>
 <li>
  <p><strong>アイテムの横幅指定が誤っている</strong><br>
   <a href="https://developer.mozilla.org/ja/docs/Web/CSS/max-width">max-width</a>: 100%; で指定されている場合は、横画面表示時のサイズで表示されてしまうため、 <a href="https://developer.mozilla.org/ja/docs/Web/CSS/width">width</a>: 100%; に修正することで縦画面表示時のサイズにも対応できます。</p>


  <pre><code><font size="3">　　img {
	<font>width</font>: <strong>100%;</strong>
	height: auto;
	vertical-align: middle;
	border: 0px none;
　　}				</font></code></pre>

  <p> </p>

  <p><a href="https://developer.mozilla.org/ja/docs/Web/CSS/display">display</a>:-moz-box; 等、mobile版ブラウザで対応されていないタグを使用している場合や、そもそも指定がない場合は、<a href="https://developer.mozilla.org/ja/docs/Web/CSS/display">display</a>: inline-block; に修正することで指定できます。</p>


  <pre><code><font size="3">　　box li {
	width: 100%;
	display: box;
	<font>display</font>: <strong>inline-block;</strong>
　　} 			</font></code></pre>

  <p> </p>
 </li>
</ol>

<h2 id="メリット">メリット</h2>

<p>　・画面サイズに列幅を合わせることにより、様々な画面サイズのデバイスに対応可能となります。<br>
 　・また、アイテム一つ一つの幅を正しく指定することで、他のコンテンツの表示崩れ等の併発を防ぐことができます。</p>

<p><a href="https://developer.mozilla.org/ja/docs/Web/Compatibility_FAQ">戻る</a></p>
