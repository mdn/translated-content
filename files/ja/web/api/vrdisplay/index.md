---
title: VRDisplay
slug: Web/API/VRDisplay
tags:
  - API
  - DOM
  - Experimental
  - Interface
  - Media
  - Reference
  - VR
  - VRDisplay
  - Virtual Reality
  - WebVR
translation_of: Web/API/VRDisplay
original_slug: Web/API/VRDevice
---
<div>{{APIRef("WebVR API")}}{{SeeCompatTable}}</div>

<p><a href="/ja/docs/Web/API/WebVR_API">WebVR API</a> の <strong><code>VRDisplay</code></strong> インターフェイスは，このAPIがサポートしているVRデバイスを現します．VRDisplayにはデバイスIDやデスクリプションのような汎用的な情報が含まれていて，VRシーンの表示を開始するためのメソッドや，目のパラメータやディスプレイの備える機能の取得，その他の重要な機能を含んでいます。</p>

<p>{{domxref("Navigator.getVRDisplays()")}} を呼び出すことで，すべての接続されているVRのデバイスの配列が返されます。</p>

<h2 id="プロパティ">プロパティ</h2>

<dl>
 <dt>{{domxref("VRDisplay.capabilities")}} {{readonlyInline}}</dt>
 <dd><code>VRDisplay</code>の備える機能を示す {{domxref("VRDisplayCapabilities")}} オブジェクトを返します．</dd>
 <dt>{{domxref("VRDisplay.depthFar")}}</dt>
 <dd><a href="https://en.wikipedia.org/wiki/Viewing_frustum">eye view frustum</a>(ビューフラスタム；つまりシーンの可視領域の境界) のfar平面を定義しているz-depthの取得と設定を行います．</dd>
 <dt>{{domxref("VRDisplay.depthNear")}}</dt>
 <dd><a href="https://en.wikipedia.org/wiki/Viewing_frustum">eye view frustum</a>(ビューフラスタム；つまりシーンの可視領域の境界) のnear平面を定義しているz-depthの取得と設定を行います．</dd>
 <dt>{{domxref("VRDisplay.displayId")}} {{readonlyInline}}</dt>
 <dd>このVRDisplay固有のIDを返します．このIDは<a href="/ja/docs/Web/API/Gamepad_API">Gamepad API</a> (参照 {{domxref("Gamepad.displayId")}}) の関連付けのために使用されます．</dd>
 <dt>{{domxref("VRDisplay.displayName")}} {{readonlyInline}}</dt>
 <dd><code>VRDisplay</code>を識別するための人間が読める形式の名前を返します．</dd>
 <dt>{{domxref("VRDisplay.isConnected")}} {{readonlyInline}}</dt>
 <dd><code>VRDisplay</code>がコンピュータに接続されているか否かを示す {{domxref("Boolean")}} を返します．</dd>
 <dt>{{domxref("VRDisplay.isPresenting")}} {{readonlyInline}}</dt>
 <dd><code>VRDisplay</code>が現在コンテンツを表示中であるか否かを示す {{domxref("Boolean")}} を返します．</dd>
 <dt>{{domxref("VRDisplay.stageParameters")}} {{readonlyInline}}</dt>
 <dd><code>VRDisplay</code>がルームスケール体験をサポートしている場合に，ルームスケールパラメータを含んだ {{domxref("VRStageParameters")}} オブジェクトを返します．</dd>
</dl>

<h2 id="メソッド">メソッド</h2>

<dl>
 <dt>{{domxref("VRDisplay.getEyeParameters()")}}</dt>
 <dd>指定した側の眼のパラメータを含む {{domxref("VREyeParameters")}} オブジェクトを返します．</dd>
 <dt>{{domxref("VRDisplay.getLayers()")}}</dt>
 <dd><code>VRDisplay</code> に表示中のレイヤーを返します．</dd>
 <dt>{{domxref("VRDisplay.getPose()")}}</dt>
 <dd>現在のフレームが実際に描画される時点の未来の <code>VRDisplay</code> の予測ポーズを決める {{domxref("VRPose")}} オブジェクトを返します．</dd>
 <dt>{{domxref("VRDisplay.getImmediatePose()")}}</dt>
 <dd>（予測なしの）<code>VRDisplay</code> のポーズを決める {{domxref("VRPose")}} オブジェクトを返します．</dd>
 <dt>{{domxref("VRDisplay.resetPose()")}}</dt>
 <dd>現在の {{domxref("VRPose.position")}} と {{domxref("VRPose.orientation")}} を"原点/ゼロ"位置の値として扱うように，<code>VRDisplay</code> のポーズをリセットします．</dd>
 <dt>{{domxref("VRDisplay.cancelAnimationFrame()")}}</dt>
 <dd>{{domxref("Window.cancelAnimationFrame")}} の特別な実装で，{{domxref("VRDisplay.requestAnimationFrame()")}} を未登録状態にすることをコールバック可能にしています．</dd>
 <dt>{{domxref("VRDisplay.requestAnimationFrame()")}}</dt>
 <dd>{{domxref("Window.requestAnimationFrame")}} の特別な実装で，<code>VRDisplay</code>の新しいフレームが描画される際に毎回呼出されるコールバック関数を持っています．</dd>
 <dt>{{domxref("VRDisplay.requestPresent()")}}</dt>
 <dd><code>VRDisplay</code> へのシーン描画を開始します．</dd>
 <dt>{{domxref("VRDisplay.exitPresent()")}}</dt>
 <dd><code>VRDisplay</code> のシーン描画を停止します．</dd>
 <dt>{{domxref("VRDisplay.submitFrame()")}}</dt>
 <dd>{{domxref("VRLayer")}} の現在の状態をキャプチャし，<code>VRDisplay</code> 上にそれを表示します．</dd>
 <dt>
 <h3 id="非推奨のメソッド">非推奨のメソッド</h3>
 </dt>
 <dt>{{domxref("VRDisplay.getPose()")}} {{deprecated_inline}}</dt>
 <dd>Returns a {{domxref("VRPose")}} object defining the future predicted pose of the <code>VRDisplay</code> as it will be when the current frame is actually presented. <strong>This method is deprecated — instead, you should use {{domxref("VRDisplay.getFrameData()")}}, which also provides a {{domxref("VRPose")}} object.</strong></dd>
 <dt>
 <h3 id="廃止されたメソッド">廃止されたメソッド</h3>
 </dt>
 <dt>{{domxref("VRDisplay.getImmediatePose()")}} {{obsolete_inline}}</dt>
 <dd>Returns a {{domxref("VRPose")}} object defining the current pose of the <code>VRDisplay</code>, with no prediction applied. This is no longer needed, and has been removed from the spec.</dd>
 <dt>{{domxref("VRDisplay.hardwareUnitId")}} {{obsolete_inline}}</dt>
 <dd>Returns a {{domxref("DOMString")}} defining the shared ID of the display, and any other devices that are part of that hardware set (e.g. controllers). This is no longer needed, and has been removed from the spec. Displays now use {{domxref("VRDisplay.displayId")}}, and corresponsing controllers will now return the same ID under {{domxref("Gamepad.displayId")}}.</dd>
</dl>

<h2 id="例">例</h2>

<pre class="notranslate">if(navigator.getVRDisplays) {
  console.log('WebVR 1.1 supported');
  // Then get the displays attached to the computer
  navigator.getVRDisplays().then(function(displays) {
    // If a display is available, use it to present the scene
    if(displays.length &gt; 0) {
      vrDisplay = displays[0];
      // Now we have our VRDisplay object and can do what we want with it
    }
  });
}</pre>

<div class="blockIndicator note">
<p><strong>Note</strong>: この完全なコードは <a href="https://github.com/mdn/webvr-tests/blob/master/raw-webgl-example/webgl-demo.js">raw-webgl-example</a> で確認できます。</p>
</div>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">ステータス</th>
   <th scope="col">備考</th>
  </tr>
  <tr>
   <td>{{SpecName('WebVR', '#interface-vrdisplay', 'VRDisplay')}}</td>
   <td>{{Spec2('WebVR')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザー実装状況">ブラウザー実装状況</h2>

<p>{{Compat("api.VRDisplay")}}</p>



<div id="compat-mobile"></div>

<h2 id="参照">参照</h2>

<ul>
 <li><a href="/ja/docs/Web/API/WebVR_API">WebVR API homepage</a>.</li>
 <li><a href="http://mozvr.com/">MozVr.com</a> — Mozilla VRチームのデモ，ダウンロード，その他のリソース．</li>
</ul>
