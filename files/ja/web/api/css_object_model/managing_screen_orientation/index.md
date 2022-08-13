---
title: 画面の向きを制御する
slug: Web/API/CSS_Object_Model/Managing_screen_orientation
tags:
  - Advanced
  - CSSOM View
  - Guide
  - Screen Orientation
translation_of: Web/API/CSS_Object_Model/Managing_screen_orientation
---
<p>{{DefaultAPISidebar("Screen Orientation API")}}{{SeeCompatTable}}</p>

<p>画面の向きは、<a href="/ja/docs/WebAPI/Detecting_device_orientation">端末の向き</a>と異なる場合があります。端末が自身の向きを検知することができない場合でも、画面には向きがあります。また端末が自身の向きを知ることが可能であっても、Web アプリケーションのインターフェイスを維持または適合するために画面の向きを制御できるとよいでしょう。</p>

<p>CSS と JavaScript の双方に、画面の向きを扱う方法がいくつかあります。第一の方法は <a href="/ja/docs/CSS/Media_queries#orientation">orientation メディアクエリ</a>です。これはブラウザウィンドウがランドスケープモード (すなわち幅が高さより大きい) かポートレートモード (高さが幅より大きい) かに基づいて、CSS を使用してコンテンツのレイアウトを調整できます。</p>

<p>第二の方法は、画面自身の現在の向きを取得して最終的に固定するために使用できる、JavaScript の Screen Orientation API です。</p>

<h2 id="Adjusting_layout_based_on_the_orientation" name="Adjusting_layout_based_on_the_orientation">向きに基づいてレイアウトを調整する</h2>

<p>向きの変化についてのもっとも一般的なケースのひとつが、端末の向きに基づいてコンテンツのレイアウトを変更したいときです。例えば、端末のディスプレイで最長の寸法に沿ってボタンバーを引き伸ばしたいでしょう。メディアクエリを使用して、簡単かつ自動的にこれを行うことができます。</p>

<p>以下の HTML コードによる例を見てみましょう。</p>

<pre class="brush: html">&lt;ul id="toolbar"&gt;
  &lt;li&gt;A&lt;/li&gt;
  &lt;li&gt;B&lt;/li&gt;
  &lt;li&gt;C&lt;/li&gt;
&lt;/ul&gt;

&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia nisi nec sem viverra vitae fringilla nulla ultricies. In ac est dolor, quis tincidunt leo. Cras commodo quam non tortor consectetur eget rutrum dolor ultricies. Ut interdum tristique dapibus. Nullam quis malesuada est.&lt;/p&gt;
</pre>

<p>画面の向きに応じて固有のスタイルを扱うために、CSS で orientation メディアクエリに頼ります。</p>

<pre class="brush: css">/* 始めに、共通のスタイルを定義しましょう */

html, body {
  width : 100%;
  height: 100%;
}

body {
  border: 1px solid black;

  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

p {
  font   : 1em sans-serif;
  margin : 0;
  padding: .5em;
}

ul {
  list-style: none;

  font   : 1em monospace;
  margin : 0;
  padding: .5em;

  -moz-box-sizing: border-box;
  box-sizing: border-box;

  background: black;
}

li {
  display: inline-block;
  margin : 0;
  padding: 0.5em;
  background: white;
}
</pre>

<p>共通のスタイルを定義したら、続いて向きに対して特有のケースの定義を始めましょう。</p>

<pre class="brush: css">/* 縦長の場合はツールバーを上に置きたい */

@media screen and (orientation: portrait) {
  #toolbar {
    width: 100%;
  }
}

/* 横長の場合はツールバーを左端に付けたい */

@media screen and (orientation: landscape) {
  #toolbar {
    position: fixed;
    width: 2.65em;
    height: 100%;
  }

  p {
    margin-left: 2em;
  }

  li + li {
    margin-top: .5em;
  }
}
</pre>

<p>結果は以下のとおりです。</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">縦長</th>
   <th scope="col">横長</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{ EmbedLiveSample('Adjusting_layout_based_on_the_orientation', 180, 350) }}</td>
   <td>{{ EmbedLiveSample('Adjusting_layout_based_on_the_orientation', 350, 180) }}</td>
  </tr>
 </tbody>
</table>

<div class="note">
<p><strong>メモ:</strong> orientation メディアクエリは、実際は端末の向きではなくブラウザウィンドウ (または iframe) の向きに応じて適用されます。</p>
</div>

<h2 id="Locking_the_screen_orientation" name="Locking_the_screen_orientation">画面の向きを固定する</h2>

<div class="warning">
<p><strong>警告:</strong> この API は実験的であり現在は <code>moz</code> 接頭辞付きで、<a href="/ja/docs/Mozilla/Firefox_OS" title="Mozilla/Firefox_OS">Firefox OS</a> および <a href="/ja/docs/Mozilla/Firefox_for_Android" title="Mozilla/Firefox_for_Android">Android 版 Firefox</a> で使用できます。また、Windows 8.1 以降の Internet Explorer では <code>ms</code> 接頭辞付きで使用できます。</p>
</div>

<p>一部の端末 (主にモバイル端末) は、画面に表示している内容をいつでも読めるようにするため、端末の向きに基づいて画面の向きを動的に変更できます。この動作はテキストコンテンツにはとても適していますが、そのような変化を好まないコンテンツも存在します。例えば端末の向きに基づくゲームでは、そのような向きの変化によって混乱してしまうでしょう。</p>

<p>Screen Orientation API は、そのような変化を抑制したり制御したりするものです。</p>

<h3 id="Listening_orientation_change" name="Listening_orientation_change">向きの変化をリッスンする</h3>

<p>{{event("orientationchange")}} イベントは、端末が画面の向きを変更する度に発生します。また、向きそのものを {{domxref("Screen.orientation")}} プロパティで読み取ることが可能です。</p>

<pre class="brush: js">screen.addEventListener("orientationchange", function () {
  console.log("The orientation of the screen is: " + Screen.orientation);
});
</pre>

<h3 id="Preventing_orientation_change" name="Preventing_orientation_change">向きの変更を抑制する</h3>

<p>任意の Web アプリケーションが、自身の要望に合うように画面を固定できます。{{domxref("Screen.lockOrientation()")}} メソッドを使用して画面の固定を、また {{domxref("Screen.unlockOrientation()")}} メソッドで固定の解除を行います。</p>

<p>{{domxref("Screen.lockOrientation()")}} は、適用する固定方式を定義する文字列 (または一連の文字列) を受け入れます。受け入れる値: <code>portrait-primary</code>、<code>portrait-secondary</code>、<code>landscape-primary</code>、<code>landscape-secondary</code>、<code>portrait</code>、<code>landscape</code> (それぞれの値について知るために {{domxref("Screen.lockOrientation")}} をご覧ください)。</p>

<pre class="brush: js">Screen.lockOrientation('landscape');</pre>

<div class="note">
<p><strong>メモ:</strong> 画面の固定はウェブアプリケーションに従属します。アプリケーション A が <code>landscape</code> に固定、またアプリケーション B が <code>portrait</code> に固定した場合は、アプリケーション A から B に、または B から A に切り替えても {{event("orientationchange")}} イベントは発生しません。これは、双方のアプリケーションが自身の向きを維持しているためです。</p>

<p>ただし、固定の要求を満たすために向きを変更しなければならない場合は、向きの固定で {{event("orientationchange")}} イベントが発生してもかまいません。</p>
</div>

<h2 id="Firefox_OS_and_Android_Orientation_lock_using_the_manifest" name="Firefox_OS_and_Android_Orientation_lock_using_the_manifest">Firefox OS および Android: マニフェストを使用して向きをロックする</h2>

<p>Firefox OS および Android 版 Firefox (近いうちにデスクトップ版 Firefox も対応予定) 特有の向きをロックする方法として、アプリのマニフェストで <a href="/ja/Apps/Build/Manifest#orientation">orientation</a> フィールドを設定できます。例を示します:</p>

<pre class="brush: json">"orientation": "portrait"</pre>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("Screen.orientation")}}</li>
 <li>{{domxref("Screen.lockOrientation()")}}</li>
 <li>{{domxref("Screen.unlockOrientation()")}}</li>
 <li>{{domxref("Screen.onorientationchange")}}</li>
 <li><a href="/ja/docs/CSS/Media_queries#orientation" title="CSS/Media queries#orientation">orientation メディアクエリ</a></li>
 <li><a class="external" href="http://hacks.mozilla.org/2009/06/media-queries/">A short introduction to media queries in Firefox 3.5</a></li>
</ul>
