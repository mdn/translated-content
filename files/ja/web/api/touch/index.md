---
title: Touch
slug: Web/API/Touch
tags:
  - API
  - DOM
  - Interface
  - Reference
  - TouchEvent
  - touch
translation_of: Web/API/Touch
---
<p>{{APIRef("Touch Events")}}</p>

<p><strong><code>Touch</code></strong> インターフェイスは、タッチ感応面へのひとつの接触点を表します。接触点とは一般的に指やスタイラスと、タッチ画面やトラックパッドのような機器が触れた位置です。</p>

<p>{{domxref("Touch.radiusX")}}、{{domxref("Touch.radiusY")}}、{{domxref("Touch.rotationAngle")}} で、ユーザーと画面が接触した<em>タッチ領域 (touch area)</em> を表します。これは指を使うような、精度が低いポインティングデバイスを扱う場合に役立ちます。これらの値は、接触した領域全体 (ユーザの指先など) に可能な限り合う楕円を表すように設定されます。 {{experimental_inline}}</p>

<div class="note">
<p><strong>注:</strong> プロパティの値の多くは、ハードウェア依存です。例えば、表面を押さえる力を検出する手段を持たない機器では、<code>force</code> の値が常に 0 になるでしょう。これは <code>radiusX</code> や <code>radiusY</code> にもあてはまります。ハードウェアがひとつの点しか通知できない場合は、これらの値が 1 になるでしょう。</p>
</div>

<h2 id="Constructor" name="Constructor">コンストラクター</h2>

<dl>
 <dt>{{domxref("Touch.Touch", "Touch()")}} {{experimental_inline}}</dt>
 <dd>Touch オブジェクトを作成します。</dd>
</dl>

<h2 id="Properties" name="Properties">プロパティ</h2>

<p><em>このインターフェイスには親がなく、ほかのプロパティを継承または実装していません。</em></p>

<h3 id="Basic_properties" name="Basic_properties">基本プロパティ</h3>

<dl>
 <dt>{{domxref("Touch.identifier")}} {{readonlyInline}}</dt>
 <dd><code>Touch</code> オブジェクトの一意な識別子を返します。あるタッチ点 (指などによる) は表面を移動している間、同じ識別子を持ち続けます。これにより、同一のタッチを終始追跡することが確実になります。</dd>
 <dt>{{domxref("Touch.screenX")}} {{readonlyInline}}</dt>
 <dd>画面の左端に対する、タッチ点の X 座標を返します。</dd>
 <dt>{{domxref("Touch.screenY")}} {{readonlyInline}}</dt>
 <dd>画面の上端に対する、タッチ点の Y 座標を返します。</dd>
 <dt>{{domxref("Touch.clientX")}} {{readonlyInline}}</dt>
 <dd>スクロールによるオフセットを含まず、ブラウザのビューポートの左端に対する、タッチ点の X 座標を返します。</dd>
 <dt>{{domxref("Touch.clientY")}} {{readonlyInline}}</dt>
 <dd>スクロールによるオフセットを含まず、ブラウザのビューポートの上端に対する、タッチ点の Y 座標を返します。</dd>
 <dt>{{domxref("Touch.pageX")}} {{readonlyInline}}</dt>
 <dd>ドキュメントの左端に対する、タッチ点の X 座標を返します。水平スクロールによるオフセットがある場合は、それを含むことが <code>clientX</code> と異なります。</dd>
 <dt>{{domxref("Touch.pageY")}} {{readonlyInline}}</dt>
 <dd>ドキュメントの上端に対する、タッチ点の Y 座標を返します。垂直スクロールによるオフセットがある場合は、それを含むことが <code>clientY</code> と異なります。</dd>
 <dt>{{domxref("Touch.target")}} {{readonlyInline}}</dt>
 <dd>タッチ点がタッチ面で最初に触れた位置にある {{domxref("Element")}} を返します。タッチ点が要素の対話エリアの外に移動したり、ドキュメント上に存在しなくなっても同様です。</dd>
</dl>

<h3 id="Touch_area" name="Touch_area">タッチ領域</h3>

<p>{{SeeCompatTable}}</p>

<dl>
 <dt>{{domxref("Touch.radiusX")}} {{readonlyInline}} {{experimental_inline}}</dt>
 <dd>画面に触れた領域にもっとも接近して囲むような、楕円の X 方向の半径を返します。この値は、<code>screenX</code> と同じ尺度のピクセル数で表します。</dd>
 <dt>{{domxref("Touch.radiusY")}} {{readonlyInline}} {{experimental_inline}}</dt>
 <dd>画面に触れた領域にもっとも接近して囲むような、楕円の Y 方向の半径を返します。この値は、<code>screenY</code> と同じ尺度のピクセル数で表します。</dd>
 <dt>{{domxref("Touch.rotationAngle")}} {{readonlyInline}} {{experimental_inline}}</dt>
 <dd>ユーザがタッチ面に触れた領域をもっとも正確に覆うために、radiusX および radiusY で表す楕円を時計回りに回転すべき角度 (単位は度 (degree)) を返します。</dd>
 <dt>{{domxref("Touch.force")}}{{readonlyInline}} {{experimental_inline}}</dt>
 <dd>ユーザがタッチ面に与えた圧力を、<code>0.0</code> (最小圧力) から <code>1.0</code> (最大圧力) の間の <code>float</code> で返します。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<p><em>このインターフェイスにはメソッドがなく、親もないのでメソッドを継承または実装していません。</em></p>

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
   <td>{{SpecName('Touch Events 2', '#touch-interface', 'Touch')}}</td>
   <td>{{Spec2('Touch Events 2')}}</td>
   <td><code>radiusX</code>, <code>radiusY</code>, <code>rotationAngle</code>, <code>force</code> の各プロパティと <code>Touch()</code> コンストラクターを追加。</td>
  </tr>
  <tr>
   <td>{{SpecName('Touch Events', '#touch-interface', 'Touch')}}</td>
   <td>{{Spec2('Touch Events')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("api.Touch")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Touch_events">タッチイベント</a></li>
 <li>{{ domxref("Document.createTouch()") }}</li>
</ul>
