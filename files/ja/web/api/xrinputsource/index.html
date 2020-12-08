---
title: XRInputSource
slug: Web/API/XRInputSource
tags:
  - API
  - AR
  - Augmented Reality
  - Experimental
  - Input
  - Interface
  - Reference
  - VR
  - Virtual Reality
  - WebXR
  - WebXR Device API
  - XRInputSource
  - control
translation_of: Web/API/XRInputSource
---
<div>{{securecontext_header}}{{APIRef("WebXR Device API")}}</div>

<p><span class="seoSummary"><a href="/ja/docs/Web/API/WebXR_Device_API">WebXR Device API</a> の <strong><code>XRInputSource</code></strong> インターフェースは、ユーザーの WebXR 互換の仮想現実または拡張現実のシステムの一部であるコントロール入力の単一ソースを記述します。</span> デバイスは使用されているプラットフォームに固有ですが、それが向けられている方向を提供し、ユーザーがデバイスを使用してアクションを実行することをトリガーにした場合、オプションでイベントを生成することができます。</p>

<h2 id="Properties" name="Properties">プロパティ</h2>

<dl>
 <dt>{{domxref("XRInputSource.gamepad", "gamepad")}} {{ReadOnlyInline}}{{experimental_inline}}</dt>
 <dd>
 <p>XR 入力ソースのボタンと軸の状態を説明する {{domxref("Gamepad")}} オブジェクト（ゲームパッドまたは同等のデバイスの場合）。 デバイスがゲームパッドのようなデバイスでない場合、このプロパティの値は <code>NULL</code> です。</p>

 <div class="note"><strong>注</strong>: <code>XRInputSource</code> は <a href="/ja/docs/Web/API/Gamepad_API">Gamepad API</a> の {{domxref("Gamepad")}} インターフェイスを使用しますが、この入力デバイスは WebXR ハードウェアに厳密に関連付けられており、汎用のゲームデバイスではありません。</div>
 </dd>
 <dt>{{domxref('XRInputSource.gripSpace', 'gripSpace')}}{{readonlyInline}}</dt>
 <dd><code>handedness</code> で示された手に持っているように見えるオブジェクトをレンダリングするために使用するポーズを原点が追跡する {{domxref("XRSpace")}}。この空間の向きは、手がオブジェクトをつかんでいる角度を示します。 この空間の使用方法の詳細については、{{domxref("XRInputSource.gripSpace", "gripSpace")}} のメイン記事をお読みください。</dd>
 <dt>{{domxref('XRInputSource.handedness', 'handedness')}}{{readonlyInline}}</dt>
 <dd>この <code>XRInputSource</code> によって表されるデバイスを使用している手がある場合はそれを示す {{domxref("DOMString")}}。 値は、<code>left</code>、<code>right</code>、または <code>none</code> になります。</dd>
 <dt>{{domxref('XRInputSource.profiles', 'profiles')}}{{readonlyInline}}</dt>
 <dd>DOMString オブジェクトの配列。 それぞれが、この入力ソースの望ましい視覚的表現と振る舞いを説明する入力プロファイルの名前を指定します。</dd>
 <dt>{{domxref('XRInputSource.targetRayMode', 'targetRayMode')}}{{readonlyInline}}</dt>
 <dd>
 <p>ターゲット光線を生成するために使用する方法を <code>gaze</code>、<code>tracked-pointer</code>、または <code>screen</code> で示す <code>DOMString</code>。</p>
 </dd>
 <dt>{{domxref('XRInputSource.targetRaySpace', 'targetRaySpace')}}{{readonlyInline}}</dt>
 <dd>ターゲット光線の原点とそれが伸びる方向を定義する {{domxref("XRSpace")}} オブジェクト。 この空間は、<code>targetRayMode</code> で定義された方法を使用して確立されます。</dd>
</dl>

<h2 id="Methods" name="Methods"><br>
 メソッド</h2>

<p><em><code>XRInputSource</code> インターフェイスはメソッドを定義しません。</em></p>

<h2 id="Usage_notes" name="Usage_notes">使用上の注意</h2>

<h3 id="Actions_and_the_target_ray" name="Actions_and_the_target_ray">アクションとターゲット光線</h3>

<p>デバイスがそれが向けられている方向を示す場合、これは<strong>ターゲット光線</strong>（target ray）を使用して行われます。 これは、デバイスの位置から、デバイスが向けられている方向に外側に伸びる光線です。</p>

<div style="width: 42em;">
<figure style="background: #eee; padding: 0.5em; border: 1px solid #aaa; border-radius: 1em; max-width: 504px; padding: 1em; margin: 1em auto;">
<figcaption><strong>ハンドコントローラから放出されるターゲット光線。</strong></figcaption>
<img alt="ハンドコントローラーから放出されるターゲット光線を示すスクリーンショット" src="https://mdn.mozillademos.org/files/17089/example-target-ray.gif" style="width: 100%;"></figure>
</div>

<p class="cleared">デバイスにトリガーまたは他のスクイーズ可能な入力（ユーザーが拳を握ったことを認識するハンドジェスチャーデバイスなど）が含まれている場合、そのアクションは<strong>プライマリースクイーズアクション</strong>（primary squeeze action）と呼ばれます。 プライマリースクイーズアクションは、オブジェクトをつかんだり、ツールや武器のトリガーを押したりするなど、実際のグリップアクションに対応している必要があります。 ユーザーがトリガーを押したりグリップを締め付けたりするなどしてスクイーズアクションが開始されると、{{domxref("XRSession.squeezestart_event", "squeezestart")}} イベントが <code>XRSession</code> に送信されます。 アクションが完了し、ユーザーがトリガーまたはグリップを放すと、{{domxref("XRSession.squeeze_event", "squeeze")}} イベントが送信されます。 この後に {{domxref("XRSession.squeezeend_event", "squeezeend")}} が続き、アクションが完了ではなく中止された場合にも送信されます。</p>

<p>デバイスにボタンまたはその他の押すことができる入力コントロールがある場合、それは<strong>プライマリ入力ソース</strong>（primary input source）であり、このボタンは<strong>プライマリーアクション</strong>（primary action）です。 プライマリーアクションは、ユーザーがボタンを押すか、タッチパッドまたはサムスティックのトップボタンをクリックするか、ボタンのようなアクションを呼び出す手のジェスチャーまたは音声コマンドを使用するときに発生する可能性があります。 プライマリーアクションが開始されると、{{domxref("XRSession.selectstart_event", "selectstart")}} イベントが {{domxref("XRSession")}} に送信されます。 アクションが完了すると（ユーザーがボタンを離したときなど）、{{domxref("XRSession.select_event", "select")}} イベントが送信されます。 最後に、それが完了すると、またはユーザーがアクションを中止すると、{{domxref("XRSession.selectend_event", "selectend")}} イベントがセッションオブジェクトに送信されます。</p>

<p>アクションは、ユーザーがデバイス固有の方法で中止するか、アクションが完了する前に入力デバイスが切断された場合に中止される可能性があります。</p>

<h3 id="Local_coordinate_system" name="Local_coordinate_system">ローカル座標系</h3>

<p>各入力ソースには独自のローカル座標系があります。 これは、入力の座標系を世界座標系にマッピングするために使用する {{domxref("XRSpace")}} である {{domxref("XRInputSource.gripSpace", "gripSpace")}} プロパティによって記述されます。 次に、グリップ空間の座標系を使用してオブジェクトをレンダリングし、ユーザーの手に持っているように見せることができます。</p>

<p><img alt="GripSpace プロパティで定義された座標系を示す図" src="https://mdn.mozillademos.org/files/17215/xr-hand-axes.svg" style="height: 472px; width: 450px;"></p>

<p>入力ソースの座標系の詳細については、{{domxref("XRInputSource.gripSpace", "gripSpace")}} プロパティについて詳しく説明している記事を参照してください。</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('WebXR','#xrinputsource-interface','XRInputSource')}}</td>
   <td>{{Spec2('WebXR')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.XRInputSource")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/WebXR_Device_API">WebXR Device API</a></li>
 <li><a href="/ja/docs/Web/API/WebXR_Device_API/Inputs">入力と入力ソース</a></li>
 <li><a href="/ja/docs/Web/WebXR%20Device%20API/Gamepads">WebXR アプリケーションでのゲームパッドの使用</a></li>
 <li>{{domxref("XRInputSourceArray")}}</li>
 <li>{{domxref("XRSpace")}}</li>
</ul>
