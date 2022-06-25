---
title: VRDisplay.requestPresent()
slug: Web/API/VRDisplay/requestPresent
tags:
  - API
  - Experimental
translation_of: Web/API/VRDisplay/requestPresent
original_slug: Web/API/VRDevice/requestPresent
---
<div>{{APIRef("WebVR API")}}{{SeeCompatTable}}</div>

<p>{{domxref("VRDisplay")}} インターフェイスの <code><strong>requestPresent()</strong></code> メソッドは，<code>VRDisplay</code> へのシーン表示を開始します．</p>

<h2 id="シンタックス">シンタックス</h2>

<pre class="brush: js notranslate">vrDisplayInstance.requestPresent(<em>layers</em>).then(function() {
  // Do something after the presentation has begun
});
</pre>

<h3 id="パラメータ">パラメータ</h3>

<dl>
 <dt>layers</dt>
 <dd>表示したいシーンを表す {{domxref("VRLayer")}} オブジェクトの配列．なお現時点では，指定できるのは最小0要素，最大1要素です．</dd>
</dl>

<h3 id="戻り値">戻り値</h3>

<p>表示が開始されたかを解決するpromise．</p>

<div class="note">
<p><strong>注記</strong>: {{domxref("VRDisplayCapabilities.canPresent")}} が <code>false，あるいは</code> <code>VRLayer</code> 配列数が {{domxref("VRDisplayCapabilities.maxLayers")}} レイヤより多い場合, promiseはリジェクトされます．</p>
</div>

<div class="note">
<p><strong>注記</strong>:   <code>requestPresent()</code> を呼出した時に<code>VRDisplay</code> が表示中の場合，<code>VRDisplay</code> は表示する <code>VRLayer</code> 配列を更新します．<code>VRDisplayが表示中で</code> <code>requestPresent()</code> がリジェクトされたら，<code>VRDisplay</code> は表示を終了します．</p>
</div>

<h2 id="例">例</h2>

<pre class="notranslate">if(navigator.getVRDisplays) {
  console.log('WebVR 1.1 supported');
  // Then get the displays attached to the computer
  navigator.getVRDisplays().then(function(displays) {
    // If a display is available, use it to present the scene
    if(displays.length &gt; 0) {
      vrDisplay = displays[0];
      console.log('Display found');
      // Starting the presentation when the button is clicked: It can only be called in response to a user gesture
      btn.addEventListener('click', function() {
        if(btn.textContent === 'Start VR display') {
          vrDisplay.requestPresent([{ source: canvas }]).then(function() {
            console.log('Presenting to WebVR display');

            // Set the canvas size to the size of the vrDisplay viewport

            var leftEye = vrDisplay.getEyeParameters('left');
            var rightEye = vrDisplay.getEyeParameters('right');

            canvas.width = Math.max(leftEye.renderWidth, rightEye.renderWidth) * 2;
            canvas.height = Math.max(leftEye.renderHeight, rightEye.renderHeight);

            // stop the normal presentation, and start the vr presentation
            window.cancelAnimationFrame(normalSceneFrame);
            drawVRScene();

            btn.textContent = 'Exit VR display';
          });
        } else {
          vrDisplay.exitPresent();
          console.log('Stopped presenting to WebVR display');

          btn.textContent = 'Start VR display';

          // Stop the VR presentation, and start the normal presentation
          vrDisplay.cancelAnimationFrame(vrSceneFrame);
          drawScene();
        }
      });
    }
  });
}</pre>

<div class="blockIndicator note">
<p><strong>Note</strong>: You can see this complete code at <a href="https://github.com/mdn/webvr-tests/blob/master/raw-webgl-example/webgl-demo.js">raw-webgl-example</a>.</p>
</div>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('WebVR', '#dom-vrdisplay-requestpresent', 'requestPresent()')}}</td>
   <td>{{Spec2('WebVR')}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザの互換性">ブラウザの互換性</h2>

<p>{{Compat("api.VRDisplay.requestPresent")}}</p>

<h2 id="参照">参照</h2>

<ul>
 <li><a href="/ja/docs/Web/API/WebVR_API">WebVR API homepage</a>.</li>
 <li><a href="http://mozvr.com/">MozVr.com</a> — Mozilla VRチームのデモ，ダウンロード，その他のリソース．</li>
</ul>
