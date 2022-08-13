---
title: アイコン、画像が期待と異なるサイズで表示される
slug: orphaned/Web/Compatibility_FAQ/Invalid_Icon_Size.html
tags:
  - Compatibility
  - Layout
original_slug: Web/Compatibility_FAQ/Invalid_Icon_Size.html
---
<h2 id="概要">概要</h2>

<p>　アイコンや画像が期待と異なるサイズで表示されます。<br>
 　他のブラウザと比較した場合や、同ページで複数使用されている同アイコンで比較した場合に、画像が小さく表示されたり、大きく表示されたりします。<br>
 　結果、他の要素と並んだ場合に不自然な表示となってしまいます。</p>

<div>
<p>　　表示画面</p>
<img alt="" src="https://mdn.mozillademos.org/files/9971/0105.jpg" style="width: 481px; height: 80px; margin-right: 50px; margin-left: 50px;">
<p> </p>
</div>

<h2 id="要因">要因</h2>

<p>　要因の代表例として以下があります。</p>

<ol>
 <li>
  <p><strong>ベンダープレフィックス </strong><br>
   他のブラウザで正しく表示出来ている場合でもFirefoxで表示が崩れている場合は、ベンダープレフィックスの指定が入っていることがあります。<br>
   -webkit-linear-gradient()関数等の指定で表示領域を設定していると、Firefoxでは認識できず、指定されていない状態になっています。</p>


  <pre><code><font size="3">　　input[type="submit"] {
	position: absolute;
	right: 15px;
	width: 40px;
	border-radius: 5px;
	padding: 6px 19px;
	margin-top: 10px;
	background: url(../images/icon_serach.png) no-repeat center center, <strong>-webkit-linear-gradient(top, #ffffff 1%, #e5c21f 2%, #e6a227 90%, #e6a026);</strong>
　　}				</font></code></pre>

  <p> </p>
 </li>
 <li>
  <p><strong>各アイコンの配置指定方法が統一されていない</strong><br>
   各アイコンの配置指定方法が統一されていない為、各アイコンの表示状態が異なってしまう場合があります。<br>
   インラインでの装飾指定とそれぞれのアイコンにおける%指定やfloatなどの指定が統一していない場合に、ブラウザによっては、表示サイズや配置が異なってしまうことがあります。</p>


  <pre><code><font size="3">　　インライン {background: url('/images/shared/arw_r_black_01.png') no-repeat scroll 97.5% 50% #EFEFEF !important;}
　　インライン {float: right; clear: both;}				</font></code></pre>

  <p> </p>
 </li>
</ol>

<h2 id="解決策">解決策</h2>

<p>　各要因の解決策の代表例として以下があります。</p>

<ol>
 <li>
  <p><strong>ベンダープレフィックス</strong><br>
   webkit指定が入っている場合は、他ブラウザ互換用に別途指定を行う必要があります。<br>
   -webkit-linear-gradient()関数の場合は、<a href="https://developer.mozilla.org/ja/docs/Web/CSS/linear-gradient">linear-gradient()</a>関数を追記することでFirefoxでも指定を行うことができます。<br>
   ただし、-webkit-linear-gradient()関数と<a href="https://developer.mozilla.org/ja/docs/Web/CSS/linear-gradient">linear-gradient()</a>関数は、伴う引数が異なる為、例に従って記載してください。</p>

  <pre><code><font size="3">　　input[type="submit"] {
	position: absolute;
	right: 15px;
	width: 40px;
	border-radius: 5px;
	padding: 6px 19px;
	margin-top: 10px;
	background: url(../images/icon_serach.png) no-repeat center center, -webkit-linear-gradient(top, #ffffff 1%, #e5c21f 2%, #e6a227 90%, #e6a026);
	<font>background</font>: <strong>url(../images/icon_serach.png) no-repeat center center, linear-gradient(to top, #ffffff 1%, #e5c21f 2%, #e6a227 90%, #e6a026);</strong>
　　}				</font></code></pre>

  <p> </p>
 </li>
 <li>
  <p><strong>各アイコンの配置指定方法が統一されていない</strong><br>
   各アイコンの配置指定方法を統一することで解消されます。<br>
   インラインで各アイコンの指定を行うと統一できていない場合があるので、別途CSSファイルを作成し、統一した指定を定義するとよいでしょう。</p>
 </li>
</ol>

<h2 id="メリット">メリット</h2>

<p>　・他のブラウザでも互換性を維持することができます。<br>
 　・HTML全体の指定を出来る限り統一し、CSSファイルで定義することで変更修正が容易になります。</p>

<p><a href="https://developer.mozilla.org/ja/docs/Web/Compatibility_FAQ">戻る</a></p>
