---
title: プログラムによるメディアクエリーのテスト
slug: Web/CSS/Media_Queries/Testing_media_queries
tags:
  - Advanced
  - CSS
  - DOM
  - Guide
  - JavaScript
  - Media Queries
  - MediaQueryList
  - Responsive Design
  - Web
  - matchMedia
  - ウェブ
  - メディアクエリー
  - レスポンシブデザイン
translation_of: Web/CSS/Media_Queries/Testing_media_queries
---
<div>{{cssref}}</div>

<p>{{Glossary("DOM")}} では、<a href="/ja/docs/Web/CSS/Media_Queries">メディアクエリー</a>の結果を {{domxref("MediaQueryList")}} インターフェイスおよびそのメソッドやプロパティを用いてプログラムからで調べることができる機能を備えています。 <code>MediaQueryList</code> オブジェクトを作成すると、クエリーの結果を確認したり、結果が変化したときに自動的に通知を受け取ったりすることができます。</p>

<h2 id="Creating_a_media_query_list">メディアクエリーリストの作成</h2>

<p>クエリーの結果を評価できるようにするのに先立ち、メディアクエリーを示す <code>MediaQueryList</code> オブジェクトを作成する必要があります。オブジェクトを作成するには、{{domxref("window.matchMedia")}} メソッドを用います。</p>

<p>例えば、端末が横置きか縦置きかを調べるクエリーリストを設定したい場合は、以下のようにします。</p>

<pre class="brush: js">const mediaQueryList = window.matchMedia("(orientation: portrait)");
</pre>

<h2 id="Checking_the_result_of_a_query">クエリーの結果の確認</h2>

<p>メディアクエリーリストが作成されると、その <code>matches</code> プロパティの値を参照することで、クエリーの結果を確認することができます。このプロパティは、クエリーの結果を反映します。</p>

<pre class="brush: js">if (mediaQueryList.matches) {
  /* 現在ビューポートが縦長である */
} else {
  /* 現在ビューポートが縦長ではない、すなわち横長である */
}
</pre>

<h2 id="Receiving_query_notifications">クエリーの通知の受信</h2>

<p>クエリーの評価結果の変化を継続的に意識する必要がある場合は、クエリーの結果をポーリングするよりも<a href="/ja/docs/Web/API/EventTarget/addEventListener">リスナー</a>を登録したことが効率的です。このためには、 <code>addListener()</code> メソッドを {{domxref("MediaQueryList")}} オブジェクトに対して呼び出し、メディアクエリーの状態が変化したとき (例えば、メディアクエリーの結果が <code>true</code> から <code>false</code> へ移行した場合) に呼び出されるコールバック関数を設定します。</p>

<pre class="brush: js">// クエリーリストを作成する。
const mediaQueryList = window.matchMedia("(orientation: portrait)");

// イベントリスナーのコールバック関数を定義する。
function handleOrientationChange(mql) {
  // ...
}

// 向き変更時のハンドラーを一度実行する。
handleOrientationChange(mediaQueryList);

// コールバック関数をリスナーとしてクエリーリストに追加する。
mediaQueryList.addListener(handleOrientationChange);
</pre>

<p>このコードでは端末の向き (orientation) を評価するメディアクエリーリストを作成し、次にリスナーを追加しています。リスナーを定義した後、そのリスナーを直接一度呼び出しています。これにより、リスナーが現在の端末の向きを基にして初期状態の調整を行うことができます (そうしないと、コードでは端末の初期状態が縦置きと想定しているが実際は横置きであるような場合に、不整合が発生します)。</p>

<p>次の <code>handleOrientationChange()</code> メソッドで、クエリーの結果の確認や端末の向きが変わったときに必要な処理を行います。</p>

<pre class="brush: js">function handleOrientationChange(evt) {
  if (evt.matches) {
    /* 現在ビューポートが縦長 */
  } else {
    /* 現在ビューポートが横長 */
  }
}
</pre>

<p>上記で、引数を <code>evt</code> — イベントオブジェクトとして定義しています。これは <a href="/ja/docs/Web/API/MediaQueryList#browser_compatibility"><code>MediaQueryList</code> の新しい実装</a>がイベントリスナーを標準の方法で扱うのでお分かりでしょう。標準外の {{domxref("MediaQueryListListener")}} の機構はもう使われませんが、標準のイベントリスナーの設定では、 {{domxref("MediaQueryListEvent")}} 型の<a href="/ja/docs/Web/API/Event">イベントオブジェクト</a>をコールバック関数の引数として渡します。</p>

<p>このイベントオブジェクトは {{domxref("MediaQueryListEvent.media","media")}} および {{domxref("MediaQueryListEvent.matches","matches")}} プロパティも含んでおり、 <code>MediaQueryList</code> のこれらの機能に直接アクセスしたり、イベントオブジェクトにアクセスしたりすることができます。</p>

<h2 id="Ending_query_notifications">クエリーの通知の終了</h2>

<p>メディアクエリーの値の変化について通知を受ける必要がなくなったときは、 <code>removeListener()</code> メソッドを <code>MediaQueryList</code> オブジェクトに対して呼び出してください。</p>

<pre class="brush: js">mediaQueryList.removeListener(handleOrientationChange);
</pre>

<h2 id="Browser_compatibility">ブラウザーの対応</h2>

<h3 id="MediaQueryList_interface"><code>MediaQueryList</code> インターフェイス</h3>

<p>{{Compat("api.MediaQueryList")}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/CSS/Media_Queries/Using_media_queries">メディアクエリー</a></li>
 <li>{{domxref("window.matchMedia()")}}</li>
 <li>{{domxref("MediaQueryList")}}</li>
 <li>{{domxref("MediaQueryListEvent")}}</li>
</ul>
