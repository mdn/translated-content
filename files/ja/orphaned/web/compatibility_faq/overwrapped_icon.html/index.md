---
title: アイコンが隣接する他のアイコンと重なってしまう
slug: orphaned/Web/Compatibility_FAQ/Overwrapped_Icon.html
tags:
  - Compatibility
  - Layout
original_slug: Web/Compatibility_FAQ/Overwrapped_Icon.html
---
<h2 id="概要">概要</h2>

<p>　アイコンが隣接する他のアイコンと重なってしまい、正しく表示できません。<br>
 　隣のアイコンと重なっている部分が、欠けてしまったり、隣のアイコンの上に表示されてしまう場合があります。</p>

<div>
<div style="margin-left: 50px;">表示画面</div>
<img alt="" src="https://mdn.mozillademos.org/files/9993/0106.jpg" style="width: 291px; height: 270px;">
<p> </p>
</div>

<h2 id="要因">要因</h2>

<p>　要因の代表例として以下があります。</p>

<ol>
 <li>
  <p><strong>アイコンの表示領域が足りていない</strong><br>
   アイコン内の数値が変動する(桁数が変わる)場合は、最大桁数が考慮されていないと、桁数によっては隣のアイコンと被ってしまうことがあります。<br>
   表示領域をpx指定していると、他のアイコンが押し出される等の問題は発生しませんが、指定しているアイコン自身の表示欠け等が発生します。</p>


  <pre><code><font size="3">　　.icon {<font>width</font>: <strong>100px !important;</strong>}				</font></code></pre>

  <p> </p>
 </li>
</ol>

<h2 id="解決策">解決策</h2>

<p>　解決策の代表例として以下があります。</p>

<ol>
 <li>
  <p><strong>アイコンの表示領域が足りていない</strong><br>
   アイコン内の数値の最大桁数を考慮し、表示領域の横幅を再設定することで正しく表示されます。<br>
   その時に、全体の横幅が画面サイズを超えて指定してしまうと、横並びになっていたアイコンが折り返されてしまうことがあるので、全体の横幅に注意し、表示領域の再設定を行ってください。</p>

  <pre><code><font size="3">　　.icon {<font>width</font>: <strong>120px !important;</strong>}				</font></code></pre>

  <p>また、<a href="https://developer.mozilla.org/ja/docs/Web/CSS/width">width</a>プロパティを「auto」で指定し、数値の変動に合わせ、表示領域も変動するように指定する方法もよいです。<br>
   ただし、「auto」で指定した場合は、他のアイコンが折り返される可能性があるので、他のアイコンを<a href="https://developer.mozilla.org/ja/docs/Web/CSS/margin">margin</a>プロパティ等で表示位置を調整する必要があります。</p>

  <pre><code><font size="3">　　.icon {<font>width</font>: <strong>auto;</strong>}				</font></code></pre>

  <p> </p>
 </li>
</ol>

<h2 id="メリット">メリット</h2>

<p>　・px指定した場合は、少ない修正で横幅の変動するアイコンに対応できます。<br>
 　・「auto」で指定した場合は、他のアイコンの表示位置指定を全体的に見直す必要がありますが、桁数の少ない場合と多い場合で、それぞれ合った表示を行うことが可能となります。</p>

<p><a href="https://developer.mozilla.org/ja/docs/Web/Compatibility_FAQ">戻る</a></p>
