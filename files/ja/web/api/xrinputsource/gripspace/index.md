---
title: XRInputSource.gripSpace
slug: Web/API/XRInputSource/gripSpace
tags:
  - API
  - AR
  - Augmented Reality
  - Experimental
  - Property
  - Reference
  - VR
  - Virtual Reality
  - WebXR
  - WebXR Device API
  - XRInputSession
  - gripSpace
translation_of: Web/API/XRInputSource/gripSpace
---
<div>{{securecontext_header}}{{APIRef("WebXR")}}</div>

<p class="summary"><span class="seoSummary">{{domxref("XRInputSource")}} の <strong><code>gripSpace</code></strong> 読み取り専用プロパティは、ネイティブの原点がユーザーの手に保持している（またはユーザーの手の一部の）ように見える仮想オブジェクトのレンダリングに使用するポーズを追跡する {{domxref("XRSpace")}} を返します。</span> 例えば、ユーザーが仮想の真っ直ぐな棒を持っている場合、この <code>XRSpace</code> のネイティブの原点は、ユーザーの拳のおおよその重心にあります。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">var <var>xrSpace</var> = <em>xrInputSource</em>.gripSpace;</pre>

<h3 id="Value" name="Value">値</h3>

<p>仮想空間での入力デバイスの位置と向きを表す {{domxref("XRSpace")}} オブジェクト。 デバイスの画像をシーンにレンダリングするのに適しています。 入力ソースが本質的に追跡できない場合、<code>gripSpace</code> は <code>null</code> です。 例えば、{{domxref("XRInputSource.targetRayMode", "targetRayMode")}} が <code>tracked-pointer</code> である入力のみが <code>gripSpace</code> を提供します。</p>

<p>コントローラーがまっすぐな棒のような形をしていて、ユーザーの拳で握られていると想像してみてください。 グリップ空間の本来の原点は、ユーザーの拳の重心にあり、ユーザーの手の位置を追跡します。</p>

<div style="width: 42em;">
<div style="width: 20em; float: left;">
<figure style="background: #eee; padding: 0.5em; border: 1px solid #aaa; border-radius: 1em; max-width: 504px; padding: 1em; margin: 1em auto;">
<figcaption><strong>左手のグリップ空間の座標系。</strong></figcaption>

<div style="background-color: #FFF;"><img alt="グリップ空間が、世界に対するプレーヤーの手のローカル座標系をどのように示しているかを示す図。" src="https://mdn.mozillademos.org/files/17260/GripSpace-LeftHand-Light.svg" style="width: 100%;"></div>
</figure>
</div>

<div style="width: 20em; float: right;">
<figure style="background: #eee; padding: 0.5em; border: 1px solid #aaa; border-radius: 1em; max-width: 504px; padding: 1em; margin: 1em auto;">
<figcaption><strong>右手のグリップ空間の座標系。</strong></figcaption>

<div style="background-color: #FFF;"><img alt="グリップ空間が、世界に対するプレーヤーの手のローカル座標系をどのように示しているかを示す図。" src="https://mdn.mozillademos.org/files/17261/GripSpace-RightHand-Light.svg" style="width: 100%;"></div>
</figure>
</div>
</div>

<p class="cleared">上の図に示すように、座標系は次のように方向付けられています。</p>

<ul>
 <li>x 軸は、ユーザーの手のひらに垂直であり、手の甲から外側に伸びる方向は、コントローラーがユーザーの右手にある場合は +X 、コントローラーが左手にある場合は -X です。</li>
 <li>z 軸は、棒の長さに沿い、ユーザーの手のひらに平行で、グリップの長さに沿います。 -Z はユーザーの親指の方向であり、+Z は反対方向です。</li>
 <li>y 軸は、他の2つの軸間の関係によって示されます。 いつものように、それは他の2つの軸の外積です（X 軸と Z 軸の両方から90°離れています）。</li>
</ul>

<h2 id="Examples" name="Examples">例</h2>

<p>この例では、フレームレンダリングコールバックから取得した <code>gripSpace</code> を使用して、仮想環境でのコントローラーの位置と向きを表すメッシュをレンダリングします。</p>

<pre class="brush: js notranslate">for (let source in xrSession.inputSources) {
  if (source.gripSpace) {
    let gripPose = frame.getPose(source.gripSpace, xrRefSpace);

    if (gripPose) {
      myDrawMeshUsingTransform(controllerMesh, gripPose.transform.matrix);
    }
  }
}
</pre>

<p>このループは、<code>gripSpace</code> の値を持つ各入力ソースについて、<code>gripSpace</code> によって記述される位置と向きを表す {{domxref("XRPose")}} を取得します。 有効なポーズが返された場合、メソッド <code>myDrawMeshUsingTransform()</code> を呼び出して、グリップポーズの変換行列を使用して変換されたコントローラーのメッシュを描画します。</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('WebXR','#dom-xrinputsource-gripspace','XRInputSource.gripSpace')}}</td>
   <td>{{Spec2('WebXR')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.XRInputSource.gripSpace")}}</p>
