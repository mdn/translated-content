---
title: 'プライバシーと :visited セレクター'
slug: 'Web/CSS/Privacy_and_the_:visited_selector'
tags:
  - CSS
  - Guide
  - Pseudo-class
  - Reference
  - Security
  - Selectors
translation_of: 'Web/CSS/Privacy_and_the_:visited_selector'
---
<div>{{cssref}}</div>

<p>およそ 2010 年よりも前、 <a href="/ja/docs/Web/CSS">CSS</a> の {{cssxref(":visited")}} セレクターによって、ウェブサイトがユーザーの閲覧履歴を明らかにし、ユーザーがどのサイトを訪問したかを把握することができました。これは {{domxref("window.getComputedStyle")}} およびその他の技術を用いて行われていました。この処理はすばやく実行され、ユーザーがどこを訪れたかを特定できるだけでなく、ユーザーの身元に関する多くの情報を推測することも可能になりました。</p>

<p>この問題を緩和するために、ブラウザーは訪問済みリンクから受け取ることができる情報量を制限されるようになりました。</p>

<h2 id="Little_white_lies" name="Little_white_lies">ちょっとした善意の嘘</h2>

<p>ユーザーのプライバシーを保護するために、Firefox や他のブラウザーは特定の状況下でウェブアプリケーションに嘘をつきます。</p>

<ul>
 <li><code>window.getComputedStyle</code> メソッドや、 {{ domxref("element.querySelector") }} などの類似の関数は、ユーザーがページ上のリンクを訪れたことがないことを示す値を常に返します。</li>
 <li><code>:visited + span</code> のような兄弟セレクターを使用した場合、隣接する要素 (この例では <code>span</code>) は、リンクが未訪問であるかのようにスタイル付けされます。</li>
 <li>稀なケースですが、入れ子になったリンク要素を使用していて、マッチしている要素が履歴の中の存在がテストされているリンクとは異なる場合、要素はリンクが未訪問であったかのようにレンダリングされます。</li>
</ul>

<h2 id="Limits_to_visited_link_styles" name="Limits_to_visited_link_styles">訪問済みリンクスタイルの制限</h2>

<p>訪問済みリンクの視覚的なスタイルづけを行うことはまだできますが、使えるスタイルは制限されています。訪問済みリンクに用いることができるのは次のプロパティだけです:</p>

<ul>
 <li>{{cssxref("color")}}</li>
 <li>{{cssxref("background-color")}}</li>
 <li>{{cssxref("border-color")}} (およびそのサブプロパティ)</li>
 <li>{{cssxref("column-rule-color")}}</li>
 <li>{{cssxref("outline-color")}}</li>
 <li>{{SVGAttr("fill")}} および {{SVGAttr("stroke")}} プロパティの色の部分</li>
</ul>

<p>さらに、訪問済みリンクにセットできるプロパティであっても、未訪問リンクと訪問済みリンク間で不透明度を変えることはできません。これは、別の状況なら、<code><a href="/js/docs/Web/CSS/color_value#rgba()">rgba()</a></code> や <code><a href="/ja/docs/Web/CSS/color_value#hsla()">hsla()</a></code> のカラー値、もしくは <code><a href="/ja/docs/Web/CSS/color_value#transparent">transparent</a></code> キーワードを使ってできた操作でした。</p>

<p>制限内でスタイルづけをする方法を、次の例で示します。</p>

<pre class="brush: css notranslate">:link {
  outline: 1px dotted blue;
  background-color: white;
  /* The default value of background-color is `transparent`. You need to
     specify a different value, otherwise changes on :visited won't apply. */
}

:visited {
  outline-color: orange;    /* オレンジのアウトライン */
  background-color: green;  /* グリーンの背景 */
  color: yellow;            /* イエローのテキスト */
}
</pre>

<h2 id="Impact_on_web_developers" name="Impact_on_web_developers">ウェブ開発者への影響度</h2>

<p>全体として、ウェブ開発者にそれほど大きな影響はないでしょう。しかしながら、サイトの変更が必要になるような特殊なケースが少しだけあります。</p>

<ul>
 <li>背景画像を使ってリンクをスタイルづけし、訪問済みかどうかを表示する方法はもう動作しないでしょう。訪問済みリンクのスタイルには色以外は使えないからです。</li>
 <li>それ以外の透明な色は、 <code>:visited</code> セレクター内でスタイル付けした場合には表示されません。</li>
</ul>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="https://dev.mozilla.jp/2010/04/privacy-related-changes-coming-to-css-vistited/">CSS の :visited に行われるプライバシー対策</a> on Mozilla Hacks ブログ翻訳</li>
 <li><a class="external" href="http://blog.mozilla.com/security/2010/03/31/plugging-the-css-history-leak/">Plugging the CSS History Leak</a> on the Mozilla Security Blog</li>
 <li><a class="external" href="http://dbaron.org/mozilla/visited-privacy">Preventing attacks on a user's history through CSS :visited selectors</a></li>
</ul>
