---
title: ナビゲーションメニューが他のアイコンと重なって表示されたり、画面からはみ出たりしてしまう
slug: orphaned/Web/Compatibility_FAQ/Overwrapped_Navigation.html
tags:
  - Compatibility
  - Layout
original_slug: Web/Compatibility_FAQ/Overwrapped_Navigation.html
---
<h2 id="概要">概要</h2>

<p>　他のブラウザで正しく表示されているナビゲーションメニューが、Firefoxで表示すると大幅に崩れてしまう場合があります。<br>
 　一列に並ぶべきアイコンが画面横幅に収まっておらず、他のアイコンと重なって表示されてしまい、周辺のアイコンが全体的に配置崩れを起こしてしまいます。<br>
 <br>
 <br>
 　<img alt="" src="https://mdn.mozillademos.org/files/9995/0102.jpg" style="width: 258px; height: 320px; margin-right: 50px; margin-left: 50px;"><br>
  </p>

<h2 id="要因">要因</h2>

<p>　要因の代表例としては以下があります。</p>

<ol>
 <li>
  <p><strong>テーブルの列幅が指定されていない</strong><br>
   <a href="https://developer.mozilla.org/ja/docs/Web/CSS/display">display</a>: table; でテーブルの列幅を指定している場合、Firefoxでは認識できていません。<br>
   列幅を指定していないことで、アイコンが画面の横幅に収まらず、配置崩れを起こしてしまいます。</p>

  <pre><code><font size="3">　　navigation ul {
	<font>display</font>: <strong>table;</strong>
	width: 99.9%;
　　}			</font></code></pre>

  <p>また、<a href="https://developer.mozilla.org/ja/docs/Web/CSS/display">display</a>: -moz-box; が指定されている場合も、mobile版Firefoxでは認識できませんので、同様の現象が発生します。</p>

  <pre><code><font size="3">　　.go_contents_btn {
	display: -webkit-box !important;
	<font>display</font>: <strong>-moz-box !important;</strong>
	-webkit-box-pack: center !important;
	<font>-moz-box-pack</font>: <strong>center !important;</strong>
	width: 100%;
　　}			</font></code></pre>
 </li>
</ol>

<h2 id="解決策">解決策</h2>

<p>　解決策の代表例として以下があります。</p>

<ol>
 <li>
  <p><strong>テーブルの列幅が指定されていない</strong><br>
   Firefoxでは、<a href="https://developer.mozilla.org/ja/docs/Web/CSS/display">display</a>: table; の指定(mobile版Firefoxでは「-moz-box」も含む)は動作しないため、テーブルの列幅の指定に<a href="https://developer.mozilla.org/ja/docs/Web/CSS/display">display</a>: inline-block; や<a href="https://developer.mozilla.org/ja/docs/Web/CSS/display">display</a>: flex; を追記します。</p>

  <p>display: inline-block; の場合</p>

  <pre><code><font size="3">　　navigation ul{
	display: table;
	<font>display</font>: <strong>inline-block;</strong>
	width: 99.9%;
　　}			</font></code></pre>

  <p>また、親要素を<a href="https://developer.mozilla.org/ja/docs/Web/CSS/flex">flex</a>設定にした場合、自動的に子要素は<a href="https://developer.mozilla.org/ja/docs/Web/CSS/flex">flex</a>アイテムになります。<a href="https://developer.mozilla.org/ja/docs/Web/CSS/flex">flex</a>アイテム用に横方向寄せを設定しているプロパティを<a href="https://developer.mozilla.org/ja/docs/Web/CSS/justify-content">justify-content</a>プロパティに変更します。<br>
   縦方向寄せを設定しているプロパティも<a href="https://developer.mozilla.org/ja/docs/Web/CSS/align-items">align-items</a>プロパティに変更します。</p>

  <p>display: flex; の場合</p>

  <pre><code><font size="3">　　.go_contents_btn {
	display: -webkit-box !important;
	display: -moz-box !important;
	<font>display</font>: <strong>flex !important;</strong>
	-webkit-box-pack: center !important;
	<font>justify-content</font>: <strong>center !important;</strong>
	width: 100%;
　　}			</font></code></pre>

  <p> </p>
 </li>
</ol>

<h2 id="メリット">メリット</h2>

<p>　・少ない修正で他ブラウザとの互換性が取れます。</p>

<p><a href="https://developer.mozilla.org/ja/docs/Web/Compatibility_FAQ">戻る</a></p>
