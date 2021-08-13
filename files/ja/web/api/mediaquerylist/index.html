---
title: MediaQueryList
slug: Web/API/MediaQueryList
tags:
  - API
  - Adaptive Design
  - CSSOM View
  - DOM
  - Interface
  - Media Queries
  - MediaQueryList
  - Reference
  - query
  - アダプティブデザイン
  - インターフェイス
  - メディアクエリ
translation_of: Web/API/MediaQueryList
---
<p>{{APIRef("CSSOM")}}</p>

<p><span class="seoSummary">A <strong><code>MediaQueryList</code></strong> オブジェクトは文書に適用されている<a href="/ja/docs/Web/CSS/Media_Queries">メディアクエリ</a>の情報を格納し、文書の状態に対する中間かつイベントドリブンのマッチングに対応します。</span> <code>MediaQueryList</code> は {{DOMxRef("Window.matchMedia", "matchMedia()")}} を {{DOMxRef("window")}} オブジェクト上で呼び出すことで作成することができます。結果として得られるオブジェクトは、メディアクエリの状態が変化したとき (つまり、メディアクエリのテストが <code>true</code> の評価が開始または停止したとき) に、リスナーへの通知の送信を処理します。</p>

<p>これにより、定期的に値をポーリングするのではなく、文書を観察してメディアクエリが変更されたときに検出することが可能になり、メディアクエリの状態に基づいて文書にプログラム的に変更を加えることができるので、アダプティブデザインにとても便利です。</p>

<h2 id="Properties" name="Properties">プロパティ</h2>

<p><em><code>MediaQueryList</code> インターフェイスは親インターフェイスである {{DOMxRef("EventTarget")}} からプロパティを継承しています。</em></p>

<dl>
 <dt>{{DOMxRef("MediaQueryList.matches", "matches")}}{{ReadOnlyInline}}</dt>
 <dd>{{jsxref("Boolean")}} で、 <code>true</code> であれば {{DOMxRef("document")}} が現在メディアクエリリストに一致しており、 <code>false</code> であればそうではありません。</dd>
 <dt>{{DOMxRef("MediaQueryList.media", "media")}}{{ReadOnlyInline}}</dt>
 <dd>{{DOMxRef("DOMString")}} で、シリアライズされたメディアクエリを表します。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<p><em><code>MediaQueryList</code> インターフェイスは親インターフェイスである {{DOMxRef("EventTarget")}} からメソッドを継承しています。</em></p>

<dl>
 <dt>{{DOMxRef("MediaQueryList.addListener", "addListener()")}}</dt>
 <dd><code>MediaQueryList</code> にコールバックを追加します。このコールバックは、メディアクエリの状態 (リスト内のメディアクエリと文書が一致するかどうか) が変化するたびに呼び出されます。このメソッドは、主に下位互換性のために存在します。可能であれば、代わりに {{domxref("EventTarget.addEventListener", "addEventListener()")}}を使用して {{domxref("EventTarget.change_event", "change")}} イベントを監視してください。</dd>
 <dt>{{DOMxRef("MediaQueryList.removeListener", "removeListener()")}}</dt>
 <dd>指定されたリスナーコールバックを、 <code>MediaQueryList</code> でメディアクエリの状態が変化するたび、すなわち <code>MediaQueryList</code> に列挙されたメディアクエリの一致・不一致の状態が変化するに呼び出されるコールバックから削除します。このメソッドは下位互換性のために保持されています。可能であれば、一般的に {{domxref("EventTarget.removeEventListener", "removeEventListener()")}} を使用して、変更通知コールバックを削除してください (以前 <code>addEventListener()</code> を使用して追加されたものです)。</dd>
</dl>

<h2 id="Events" name="Events">イベント</h2>

<p><em>以下のイベントは <code>MediaQueryList</code> オブジェクトに配信されます。</em></p>

<dl>
 <dt>{{DOMxRef("MediaQueryList.change_event", "change")}}</dt>
 <dd>文書に対してメディアクエリを実行した結果が変更されたときに <code>MediaQueryList</code> に送信されます。例えば、メディアクエリが <code>(min-width: 400px)</code> の場合、 <code>change</code> イベントが文書の{{Glossary("viewport", "ビューポート")}}}の幅が 400px の閾値を通過するよう変更されるたびに発行されます。<br>
 また、 {{DOMxRef("MediaQueryList.onchange", "onchange")}} イベントハンドラープロパティを使用することもできます。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<p>このシンプルな例では、 <code>MediaQueryList</code> を作成し、メディアクエリの状態が変化したときにそれを検出するリスナーを設定し、それがページの表示を変更するときにカスタム関数を実行します。</p>

<pre class="brush: js notranslate">var para = document.querySelector('p');
var mql = window.matchMedia('(max-width: 600px)');

function screenTest(e) {
  if (e.matches) {
    /* the viewport is 600 pixels wide or less */
    para.textContent = 'This is a narrow screen — less than 600px wide.';
    document.body.style.backgroundColor = 'red';
  } else {
    /* the viewport is more than than 600 pixels wide */
    para.textContent = 'This is a wide screen — more than 600px wide.';
    document.body.style.backgroundColor = 'blue';
  }
}

mql.addEventListener(screenTest);</pre>

<div class="note">
<p><strong>注</strong>: この例は GitHub にあります (<a href="https://github.com/mdn/dom-examples/blob/master/mediaquerylist/index.html">ソースコード</a>を参照、および<a href="https://mdn.github.io/dom-examples/mediaquerylist/index.html">ライブで実行</a>)。</p>
</div>

<p>他の例は個別のプロパティやメソッドのページにあります。</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("CSSOM View", "#the-mediaquerylist-interface", "MediaQueryList")}}</td>
   <td>{{Spec2("CSSOM View")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.MediaQueryList")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/CSS/Media_queries">メディアクエリ</a></li>
 <li><a href="/ja/docs/CSS/Using_media_queries_from_code">コードからのメディアクエリの使用</a></li>
 <li>{{DOMxRef("window.matchMedia()")}}</li>
 <li>{{DOMxRef("MediaQueryListListener")}}</li>
 <li>{{DOMxRef("MediaQueryListEvent")}}</li>
 <li>{{DOMxRef("Window.devicePixelRatio")}} の記事にも有益な例があります</li>
</ul>
