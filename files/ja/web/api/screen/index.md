---
title: Screen
slug: Web/API/Screen
tags:
  - API
  - CSSOM View
  - Interface
  - Reference
translation_of: Web/API/Screen
---
<div>{{APIRef("CSSOM")}}</div>

<p><code>Screen</code> インターフェイスは画面を表し、通常は、現在のウィンドウが描画されている画面であり、 {{DOMxRef("window.screen")}} を使用して取得されます。</p>

<p>なお、ブラウザーはブラウザーのウィンドウの中心がどの画面にあるかを検出することで、報告する現在の画面がどれかを判断します。</p>

<h2 id="Example" name="Example">プロパティ</h2>

<dl>
 <dt>{{DOMxRef("Screen.availTop")}} {{Non-standard_Inline}}</dt>
 <dd>オペレーティングシステムによって表示されるウィンドウ上のタスクバーなどの、固定あるいは半固定のユーザーインターフェイス部分を含まない、最初のピクセルの y 座標を指します。</dd>
 <dt>{{DOMxRef("Screen.availLeft")}} {{Non-standard_Inline}}</dt>
 <dd>スクリーンの左端からの、最初の利用可能なピクセルの値を返します。​</dd>
 <dt>{{DOMxRef("Screen.availHeight")}}</dt>
 <dd>固定あるいは半固定のユーザーインターフェイス部分を除いたスクリーンの高さをピクセルで表します。</dd>
 <dt>{{DOMxRef("Screen.availWidth")}}</dt>
 <dd>ウィンドウで利用可能な水平方向のスペースの合計をピクセルで返します。</dd>
 <dt>{{DOMxRef("Screen.colorDepth")}}</dt>
 <dd>画面の色深度を返します。</dd>
 <dt>{{DOMxRef("Screen.height")}}</dt>
 <dd>画面の高さをピクセルで返します。</dd>
 <dt>{{DOMxRef("Screen.left")}} {{Non-standard_Inline}}</dt>
 <dd>メイン画面の左端から現在の画面の左端までの距離をピクセルで返します。</dd>
 <dt>{{DOMxRef("Screen.orientation")}}</dt>
 <dd>現在の画面の向きを返します。</dd>
 <dt>{{DOMxRef("Screen.pixelDepth")}}</dt>
 <dd>画面のピット深度を取得します。</dd>
 <dt>{{DOMxRef("Screen.top")}} {{Non-standard_Inline}}</dt>
 <dd>現在の画面の上端からの距離をピクセルで返します。 </dd>
 <dt>{{DOMxRef("Screen.width")}}</dt>
 <dd>画面の幅を返します。</dd>
 <dt>{{DOMxRef("Screen.mozEnabled")}} {{Non-standard_Inline}} {{Deprecated_Inline}}{{Gecko_MinVersion_Inline(12)}}</dt>
 <dd>ブール値。<code>false</code> に設定すると、デバイスの画面がオフになります。</dd>
 <dt>{{DOMxRef("Screen.mozBrightness")}} {{Non-standard_Inline}} {{Deprecated_Inline}}{{Gecko_MinVersion_Inline(12)}}</dt>
 <dd>デバイスの画面の明るさをコントロールします。0 から 1.0 までの double で指定します。</dd>
</dl>

<h3 id="Events_handler" name="Events_handler">イベントハンドラー</h3>

<dl>
 <dt>{{DOMxRef("Screen.onorientationchange")}} {{Deprecated_Inline}}</dt>
 <dd>{{Event("orientationchange")}} イベントのハンドラー。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<dl>
 <dt>{{DOMxRef("Screen.lockOrientation")}}</dt>
 <dd>画面の向きをロックします (全画面かインストールしたアプリでのみ動作します)</dd>
 <dt>{{DOMxRef("Screen.unlockOrientation")}}</dt>
 <dd>画面の向きのロックを解除します。 (全画面時かインストールしたアプリでのみ動作します)</dd>
</dl>

<p>メソッドは {{DOMxRef("EventTarget")}} から継承されています。</p>

<p>{{Page("/en-US/docs/Web/API/EventTarget", "Methods")}}</p>

<h2 id="Example" name="Example">例</h2>

<pre class="brush:js">if (screen.pixelDepth &lt; 8) {
  // 色数の少ないバージョンのページを使う
} else {
  // 通常の色数のページを使う
}
</pre>

<h2 id="Specification" name="Specification">仕様書</h2>

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
   <td>{{SpecName("CSSOM View", "#the-screen-interface", "Screen")}}</td>
   <td>{{Spec2("CSSOM View")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("api.Screen")}}</p>
