---
title: MediaDevices.getUserMedia()
slug: Web/API/MediaDevices/getUserMedia
tags:
  - API
  - Audio
  - Capture
  - Media Capture and Streams API
  - Media Streams API
  - MediaDevices
  - Method
  - Photos
  - Reference
  - Video
  - WebRTC
  - getusermedia
  - メソッド
translation_of: Web/API/MediaDevices/getUserMedia
---
<div>{{APIRef("Media Capture and Streams")}}</div>

<p>{{domxref("MediaDevices")}}<code><strong>.getUserMedia()</strong></code> メソッドは、要求された種類のメディアを含むトラックを持つ {{domxref("MediaStream")}} を生成するメディア入力を使用する許可をユーザーに求めます。このストリームには、例えば、動画トラック (カメラ、ビデオ録画機器、スクリーン共有サービスなどのような、ハードウェアまたは仮想ビデオソースによって生み出される)、音声トラック (同様に、マイク、A/D 変換器などの物理的または仮想オーディオソースによって生み出される)、その他の可能な種別を含めることができます。</p>

<p>これは {{domxref("MediaStream")}} オブジェクトに解決する {{jsxref("Promise")}} を返します。ユーザーが拒否した場合や、一致するメディアが利用できない場合、 Promise はそれぞれ <code>NotAllowedError</code> または <code>NotFoundError</code> で拒否されます。</p>

<div class="note">
<p><strong>メモ:</strong> ユーザーが選択する必要が全くなく、リクエストを単純に無視できる場合、返却された Promise が解決または拒否の<em>どちらにもならない</em>可能性があります。</p>
</div>

<p>一般的に、 {{domxref("MediaDevices")}} のシングルトンオブジェクトは以下のように、 {{domxref("navigator.mediaDevices")}} を使用してアクセスします。</p>

<pre class="brush: js notranslate">async function getMedia(constraints) {
  let stream = null;

  try {
    stream = await navigator.mediaDevices.getUserMedia(constraints);
    /* ストリームを使用 */
  } catch(err) {
    /* エラーを処理 */
  }
}
</pre>

<p>同様に、生の Promise を直接使用すると、コードは次のようになります。</p>

<pre class="brush: js notranslate">navigator.mediaDevices.getUserMedia(constraints)
.then(function(stream) {
  /* ストリームを使用 */
})
.catch(function(err) {
  /* エラーを処理 */
});</pre>

<div class="blockIndicator note">
<p><strong>メモ:</strong> 現在の文書が安全に読み込まれなかった場合は、 <code>navigator.mediaDevices</code> は <code>undefined</code> になり、 <code>getUserMedia()</code> を使用することはできません。{{anch("Security", "セキュリティ")}}の節に、この件やその他の <code>getUserMedia()</code> の使用に関するセキュリティ問題の詳細があります。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">var <var>promise</var> = navigator.mediaDevices.getUserMedia(<var>constraints</var>);
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>constraints</var></code></dt>
 <dd>
 <p>{{domxref("MediaStreamConstraints")}} オブジェクトで、それぞれの種類のために何らかの要件に沿って要求するメディアの種類を指定します。</p>

 <p><code><var>constraints</var></code> 引数は <code>MediaStreamConstraints</code> であり、二つのメンバー <code>video</code> および <code>audio</code> を持ち、要求されたメディアの種類を記述します。どちらか、または両方を指定する必要があります。ブラウザーが指定された条件に合う指定されたタイプを持つすべてのメディアトラックを発見できない場合、返却された Promise は <code>NotFoundError</code> で拒否されます。</p>

 <p>次の例は特定の要件なしに audio と video の両方を要求します。</p>

 <pre class="brush: js notranslate">{ audio: true, video: true }</pre>

 <p>メディアの種類に <code>true</code> が指定された場合、結果のストリームはそのタイプのトラックが中にある<em>必要</em>があります。何らかの理由で含めることができない場合、 <code>getUserMedia()</code> の呼び出しはエラーが返ります。</p>

 <p>ユーザーのカメラやマイクについての情報は、プライバシー上の理由からアクセスできませんが、アプリケーションは追加の制約を使用することで、カメラやマイクの能力を必要に応じて要求することができます。次の例は、 1280x720 のカメラ解像度の設定を表しています。</p>

 <pre class="brush: js notranslate">{
  audio: true,
  video: { width: 1280, height: 720 }
}</pre>

 <p id="successCallback">ブラウザーはこれに忠実であろうとしますが、正確に一致するものが使用できない場合や、ユーザーがこれをオーバーライドした場合は、異なる解像度を返すことがあります。</p>

 <p>機能を<em>必要</em>とするには、 <code>min</code>, <code>max</code>, <code>exact</code> (つまり <code>min == max</code>) の各キーワードが使用してください。次の例は 1280x720 の最小解像度を要求します。</p>

 <pre class="brush: js notranslate">{
  audio: true,
  video: {
    width: { min: 1280 },
    height: { min: 720 }
  }
}</pre>

 <p>この解像度以上のカメラがない場合、返却された Promise は <code>OverconstrainedError</code> として拒否され、ユーザーには通知されません。</p>

 <p>動作に違いが発生する理由は、 <code>min</code>, <code>max</code>, <code>exact</code> の各キーワードが本質的に必須であるためです。それに対して <code>ideal</code> と呼ばれるプレーンな値とキーワードはそうではありません。より充実したサンプルを示します。</p>

 <pre class="brush: js notranslate">{
  audio: true,
  video: {
    width: { min: 1024, ideal: 1280, max: 1920 },
    height: { min: 776, ideal: 720, max: 1080 }
  }
}</pre>

 <p><code>ideal</code> の値は、使用された場合は重みをもち、つまりブラウザーは ideal の値からみた<a href="https://w3c.github.io/mediacapture-main/#dfn-fitness-distance">最適距離</a>が最小になるような設定 (および、複数ある場合はカメラ) を見つけようとすることを意味します。</p>

 <p>プレインの値は本質的に ideal ですので、これは上記の解像度の例を以下のように書くこともできることを意味します。</p>

 <pre class="brush: js notranslate">{
  audio: true,
  video: {
    width: { ideal: 1280 },
    height: { ideal: 720 }
  }
}</pre>

 <p>すべての constraint が数字とは限りません。例えば、次の例はリアカメラよりもフロントカメラを (利用できるなら) を選好します。</p>

 <pre class="brush: js notranslate">{ audio: true, video: { facingMode: "user" } }</pre>

 <p>リアカメラが<em>必要</em>であれば、次のようにします。</p>

 <pre class="brush: js notranslate">{ audio: true, video: { facingMode: { exact: "environment" } } }</pre>

 <p>他の数値以外の制約として、 <code>deviceId</code> の制約があります。 <code>deviceId</code> が {{domxref("mediaDevices.enumerateDevices()")}} から分かっているのであれば、これを使用して特定の機器を要求することができます。</p>

 <pre class="brush: js notranslate">{ video: { deviceId: myPreferredCameraDeviceId } }</pre>

 <p>上記のものは要求されたカメラを返しますが、特定したカメラが利用できない場合は別なカメラを返します。また、特定のカメラが<em>必要</em>なのであれば、以下のようにすることができます。</p>

 <pre class="brush: js notranslate">{ video: { deviceId: { exact: myExactCameraOrBustDeviceId } } }</pre>
 </dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>要求されたメディアが正しく取得できたときに {{domxref("MediaStream")}} を受け取るハンドラーを示す {{jsxref("Promise")}} を返します。</p>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<p>返却されたpromiseの拒否は {{ domxref("DOMException") }}に構成された{{ domxref("MediaStreamError") }}として生成されます。関連するエラーは以下の通りです。</p>

<dl>
 <dt><code>AbortError</code></dt>
 <dd>デバイスへのアクセスはユーザとOSから許可され、かつ<code>NotReadableError</code>が生じるような問題も起きなかったが、デバイスを利用できない何らかの問題が発生した。</dd>
 <dt><code>NotAllowedError</code></dt>
 <dd>One or more of the requested source devices cannot be used at this time. This will happen if the browsing context is insecure (that is, the page was loaded using HTTP rather than HTTPS). It also happens if the user has specified that the current browsing instance is not permitted access to the device, the user has denied access for the current session, or the user has denied all access to user media devices globally. On browsers that support managing media permissions with <a href="/ja/docs/Web/HTTP/Feature_Policy">Feature Policy</a>, this error is returned if Feature Policy is not configured to allow access to the input source(s).
 <div class="note">Older versions of the specification used <code>SecurityError</code> for this instead; <code>SecurityError</code> has taken on a new meaning.</div>
 </dd>
 <dt><code>NotFoundError</code></dt>
 <dd>constraint で指定された機能を満たすメディアトラックの種類が見つからない。</dd>
 <dt><code>NotReadableError</code></dt>
 <dd>Although the user granted permission to use the matching devices, a hardware error occurred at the operating system, browser, or Web page level which prevented access to the device.</dd>
 <dt><code>OverconstrainedError</code></dt>
 <dd>The specified constraints resulted in no candidate devices which met the criteria requested. The error is an object of type <code>OverconstrainedError</code>, and has a <code>constraint</code> property whose string value is the name of a constraint which was impossible to meet, and a <code>message</code> property containing a human-readable string explaining the problem.
 <div class="note">Because this error can occur even when the user has not yet granted permission to use the underlying device, it can potentially be used as a fingerprinting surface.</div>
 </dd>
 <dt><code>SecurityError</code></dt>
 <dd>User media support is disabled on the {{domxref("Document")}} on which <code>getUserMedia()</code> was called. The mechanism by which user media support is enabled and disabled is left up to the individual user agent.</dd>
 <dt><code>TypeError</code></dt>
 <dd>The list of constraints specified is empty, or has all constraints set to <code>false</code>. This can also happen if you try to call <code>getUserMedia()</code> in an insecure context, since {{domxref("navigator.mediaDevices")}} is <code>undefined</code> in an insecure context.</dd>
</dl>

<h2 id="Privacy_and_security" name="Privacy_and_security">プライバシーとセキュリティ</h2>

<p>As an API that may involve significant privacy concerns, <code>getUserMedia()</code>'s specification lays out a wide array of privacy and security requirements that browsers are obligated to meet.</p>

<p><code>getUserMedia()</code> is a powerful feature which can only be used in <a href="/ja/docs/Web/Security/Secure_Contexts">secure contexts</a>; in insecure contexts, <code>navigator.mediaDevices</code> is <code>undefined</code>, preventing access to <code>getUserMedia()</code>. A secure context is, in short, a page loaded using HTTPS or the <code>file:///</code> URL scheme, or a page loaded from <code>localhost</code>.</p>

<p>In addition, user permission is always required to access the user's audio and video inputs. Only a window's top-level document context for a valid origin can even request permission to use <code>getUserMedia()</code>, unless the top-level context expressly grants permission for a given {{HTMLElement("iframe")}} to do so using <a href="/ja/docs/Web/HTTP/Feature_Policy">Feature Policy</a>. Otherwise, the user will never even be asked for permission to use the input devices.</p>

<p>For additional details on these requirements and rules, how they are reflected in the context in which your code is running, and about how browsers manage user privacy and security issues, read on.</p>

<h3 id="User_privacy" name="User_privacy">ユーザーのプライバシー</h3>

<p>As an API that may involve significant privacy concerns, <code>getUserMedia()</code> is held by the specification to very specific requirements for user notification and permission management. First, <code>getUserMedia()</code> must always get user permission before opening any media gathering input such as a webcam or microphone. Browsers may offer a once-per-domain permission feature, but they must ask at least the first time, and the user must specifically grant ongoing permission if they choose to do so.</p>

<p>Of equal importance are the rules around notification. Browsers are required to display an indicator that shows that a camera or microphone is in use, above and beyond any hardware indicator that may exist. They must also show an indicator that permission has been granted to use a device for input, even if the device is not actively recording at the moment.</p>

<p>For example in Firefox,<strong> </strong>the URL bar displays a pulsing red icon to indicate that recording is underway. The icon is gray if the permission is in place but recording is not currently underway. The device's physical light is used to indicate whether or not recording is currently active. If you've muted your camera (so-called "facemuting"), your camera's activity light goes out to indicate that the camera is not actively recording you, without discarding the permission to resume using the camera once muting is over.</p>

<h3 id="Security">Security</h3>

<p>There are a number of ways security management and controls in a {{Glossary("user agent")}} can cause <code>getUserMedia()</code> to return a security-related error.</p>

<div class="blockIndicator note">
<p><strong>Note:</strong> The security model for <code>getUserMedia()</code> is still somewhat in flux. The originally-designed security mechanism is in the process of being replaced with Feature Policy, so various browsers have different levels of security support, using different mechanisms. You should test your code carefully on a variety of devices and browsers to be sure it is as broadly compatible as possible</p>
</div>

<h4 id="Feature_Policy">Feature Policy</h4>

<p>The <a href="/ja/docs/Web/HTTP/Feature_Policy">Feature Policy</a> security management feature of {{Glossary("HTTP")}} is in the process of being introduced into browsers, with support available to some extent in many browsers (though not always enabled by default, as in Firefox). <code>getUserMedia()</code> is one method which will require the use of Feature Policy, and your code needs to be prepared to deal with this. For example, you may need to use the {{htmlattrxref("allow", "iframe")}} attribute on any {{HTMLElement("iframe")}} that uses <code>getUserMedia()</code>, and pages that use <code>getUserMedia()</code> will eventually need to supply the {{HTTPHeader("Feature-Policy")}} header.</p>

<p>The two permissions that apply to <code>getUserMedia()</code> are <code>camera</code> and <code>microphone</code>.</p>

<p>For example, this line in the HTTP headers will enable use of a camera for the document and any embedded {{HTMLElement("iframe")}} elements that are loaded from the same origin:</p>

<pre class="notranslate">Feature-Policy: camera 'self'</pre>

<p>This will request access to the microphone for the current origin and the specific origin https://developer.mozilla.org:</p>

<pre class="notranslate">Feature-Policy: microphone 'self' https://developer.mozilla.org</pre>

<p>If you're using <code>getUserMedia()</code> within an <code>&lt;iframe&gt;</code>, you can request permission just for that frame, which is clearly more secure than requesting a more general permission. Here, indicate we need the ability to use both camera and microphone:</p>

<pre class="brush: html notranslate">&lt;iframe src="https://mycode.example.net/etc" allow="camera;microphone"&gt;
&lt;/iframe&gt;</pre>

<p>Read our guide, <a href="/ja/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy">Using Feature Policy</a>, to learn more about how it works.</p>

<h4 id="Encryption_based_security">Encryption based security</h4>

<p>The <code>getUserMedia()</code> method is only available in <a href="/ja/docs/Web/Security/Secure_Contexts">secure contexts</a>. A secure context is one the browser is reasonably confident contains a document which was loaded securely, using HTTPS/TLS, and has limited exposure to insecure contexts. If a document isn't loaded in a secure context, the {{domxref("navigator.mediaDevices")}} property is <code>undefined</code>, making access to <code>getUserMedia()</code> impossible.</p>

<p>Attempting to access <code>getUserMedia()</code> in this situation will result in a <code>TypeError</code>.</p>

<h4 id="Document_source_security">Document source security</h4>

<p>Because of the obvious security concern associated with <code>getUserMedia()</code> if used unexpectedly or without security being carefully managed, it can only be used in secure contexts. There are a number of insecure ways to load a document that might, in turn, attempt to call <code>getUserMedia()</code>. The following are examples of situations in which <code>getUserMedia()</code> is not permitted to be called:</p>

<ul>
 <li>A document loaded into a sandboxed {{HTMLElement("iframe")}} element cannot call <code>getUserMedia()</code> unless the <code>&lt;iframe&gt;</code> has its {{htmlattrxref("sandbox", "iframe")}} attribute set to <code>allow-same-origin</code>.</li>
 <li>A document loaded using a <code>data://</code> or <code>blob://</code> URL which has no origin (such as when one of these URLs is typed by the user into the address bar) cannot call <code>getUserMedia()</code>. These kinds of URLs loaded from JavaScript code inherit the script's permissions.</li>
 <li>Any other situation in which there is no origin, such as when the {{htmlattrxref("srcdoc", "iframe")}} attribute is used to specify the contents of a frame.</li>
</ul>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Width_and_height" name="Width_and_height">幅と高さ</h3>

<p>この例ではカメラの解像度の設定を与えて、結果の {{domxref("MediaStream")}} オブジェクトを vide 要素に割り当てます。</p>

<pre class="brush: js notranslate">// Prefer camera resolution nearest to 1280x720.
var constraints = { audio: true, video: { width: 1280, height: 720 } };

navigator.mediaDevices.getUserMedia(constraints)
.then(function(mediaStream) {
  var video = document.querySelector('video');
  video.srcObject = mediaStream;
  video.onloadedmetadata = function(e) {
    video.play();
  };
})
.catch(function(err) { console.log(err.name + ": " + err.message); }); // always check for errors at the end.
</pre>

<h3 id="Using_the_new_API_in_older_browsers" name="Using_the_new_API_in_older_browsers">古いブラウザーでの新しい API の使用</h3>

<p>Here's an example of using <code>navigator.mediaDevices.getUserMedia()</code>, with a polyfill to cope with older browsers. Note that this polyfill does not correct for legacy differences in constraints syntax, which means constraints won't work well across browsers. It is recommended to use the <a href="https://github.com/webrtc/adapter">adapter.js</a> polyfill instead, which does handle constraints.</p>

<pre class="brush: js notranslate">// Older browsers might not implement mediaDevices at all, so we set an empty object first
if (navigator.mediaDevices === undefined) {
  navigator.mediaDevices = {};
}

// Some browsers partially implement mediaDevices. We can't just assign an object
// with getUserMedia as it would overwrite existing properties.
// Here, we will just add the getUserMedia property if it's missing.
if (navigator.mediaDevices.getUserMedia === undefined) {
  navigator.mediaDevices.getUserMedia = function(constraints) {

    // First get ahold of the legacy getUserMedia, if present
    var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

    // Some browsers just don't implement it - return a rejected promise with an error
    // to keep a consistent interface
    if (!getUserMedia) {
      return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
    }

    // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise
    return new Promise(function(resolve, reject) {
      getUserMedia.call(navigator, constraints, resolve, reject);
    });
  }
}

navigator.mediaDevices.getUserMedia({ audio: true, video: true })
.then(function(stream) {
  var video = document.querySelector('video');
  // Older browsers may not have srcObject
  if ("srcObject" in video) {
    video.srcObject = stream;
  } else {
    // Avoid using this in new browsers, as it is going away.
    video.src = window.URL.createObjectURL(stream);
  }
  video.onloadedmetadata = function(e) {
    video.play();
  };
})
.catch(function(err) {
  console.log(err.name + ": " + err.message);
});
</pre>

<h3 id="Frame_rate" name="Frame_rate">フレームレート</h3>

<p>帯域幅に制限のあるWebRTC通信のようなケースでは、低フレームレートが望ましいかもしれません。</p>

<pre class="brush: js notranslate">var constraints = { video: { frameRate: { ideal: 10, max: 15 } } };
</pre>

<h3 id="Front_and_back_camera" name="Front_and_back_camera">フロントカメラとバックカメラ</h3>

<p>携帯電話での例。</p>

<pre class="brush: js notranslate">var front = false;
document.getElementById('flip-button').onclick = function() { front = !front; };

var constraints = { video: { facingMode: (front? "user" : "environment") } };
</pre>

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
   <td>{{SpecName('Media Capture', '#dom-mediadevices-getusermedia', 'MediaDevices.getUserMedia()')}}</td>
   <td>{{Spec2('Media Capture')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.MediaDevices.getUserMedia")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>より古い {{domxref("navigator.getUserMedia()")}} API。</li>
 <li>{{domxref("mediaDevices.enumerateDevices()")}}:利用可能なメディア機器を列挙</li>
 <li><a href="/ja/docs/Web/API/WebRTC_API">WebRTC API</a></li>
 <li><a href="/ja/docs/Web/API/Media_Streams_API">Media Capture and Streams API (メディアストリーム)</a></li>
 <li><a href="/ja/docs/Web/API/Screen_Capture_API">Screen Capture API</a>: 画面の内容を {{domxref("MediaStream")}} としてキャプチャ</li>
 <li>{{domxref("mediaDevices.getDisplayMedia()")}}: スクリーンの内容を含むストリームの取得</li>
 <li><a href="/ja/docs/Web/API/WebRTC_API/Taking_still_photos">ウェブカメラでの写真撮影</a>: <code>getUserMedia()</code> を使用して動画ではなくスチル写真を撮る方法</li>
</ul>
