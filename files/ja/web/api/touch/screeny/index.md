---
title: Touch.screenY
slug: Web/API/Touch/screenY
tags:
  - API
  - DOM
  - Mobile
  - Property
  - touch
translation_of: Web/API/Touch/screenY
---
<p>{{ APIRef("Touch Events") }}</p>

<h2 id="Summary" name="Summary">概要</h2>

<p>画面を基準としたタッチポイントの Y 座標を返します。スクロールオフセットは含まれません。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="eval notranslate">var <em>y</em> = <em>touchItem</em>.screenY;
</pre>

<h3 id="Return_Value" name="Return_Value">返り値</h3>

<dl>
 <dt><code>y</code></dt>
 <dd>画面を基準としたタッチポイントの Y 座標。スクロールオフセットは含まれません。</dd>
</dl>

<h2 id="例">例</h2>

<p><a href="/ja/docs/Web/API/Touch/screenX#Example">Touch.screenX の例</a>には、このプロパティの使用例が含まれています。</p>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">ステータス</th>
   <th scope="col">備考</th>
  </tr>
  <tr>
   <td>{{SpecName('Touch Events 2','#dom-touch-screeny')}}</td>
   <td>{{Spec2('Touch Events 2')}}</td>
   <td>前の版から変更なし。</td>
  </tr>
  <tr>
   <td>{{SpecName('Touch Events', '#widl-Touch-screenY')}}</td>
   <td>{{Spec2('Touch Events')}}</td>
   <td>初回定義。</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザー実装状況">ブラウザー実装状況</h2>



<p>{{Compat("api.Touch.screenY")}}</p>
