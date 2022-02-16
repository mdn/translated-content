---
title: MediaDevices.enumerateDevices()
slug: Web/API/MediaDevices/enumerateDevices
tags:
  - API
  - Experimental
  - MediaDevices
  - Method
translation_of: Web/API/MediaDevices/enumerateDevices
---
<p>{{APIRef("WebRTC")}}{{SeeCompatTable}}</p>

<p><strong><code>MediaDevices.enumeratedDevices()</code></strong>  メソッドは、システム上で利用できる入出力メディアデバイスの情報を収集します。</p>

<h2 id="構文">構文</h2>

<pre class="syntaxbox">navigator.mediaDevices.enumerateDevices();</pre>

<h3 id="戻り値">戻り値</h3>

<p>列挙が成功した場合、使用できる入出力メディアデバイスの情報を持つ<font face="Courier New">MediaDeviceInfo</font>オブジェクトの配列で満たされた{{ domxref("Promise") }} が返されます。</p>

<p>次の情報が返されます。プライバシーへの配慮のため、コールした時に現在のページにアクティブな{{domxref("MediaStream")}} オブジェクトがあるか、ユーザーがページのオリジンに対して認可に対して許可を出していない限り、<font face="Courier New">label</font>情報は空文字です。</p>

<p><code>MediaDeviceInfoは以下の情報を含みます。</code></p>

<dl>
 <dt><code>deviceId</code></dt>
 <dd>deviceIdはセッション間で一貫性のあるデバイスを表現するための識別子である{{domxref("DOMString")}} です。これはほかのアプリケーションから推測できず、呼び出されたアプリケーションのオリジンごとにユニークです。ユーザーがcookieをクリアしたときにリセットされます（プライベートブラウジングのためには、セッション間で一貫性のない異なる識別子が使われます）。</dd>
 <dt><code>groupId</code></dt>
 <dd>groupIdはグループ識別子である{{domxref("DOMString")}} です。同じ物理デバイスに所属する場合、2つのデバイスは同じグループ識別子を持ちます。たとえば、組み込みのカメラとマイクの両方があるモニターです。</dd>
 <dt><code>kind</code></dt>
 <dd>kindは "<font face="Courier New">videoinput</font>"、"<font face="Courier New">audioinput</font>" か "<font face="Courier New">audiooutput</font>"のいづれかが列挙された値です。</dd>
 <dt><code>label</code></dt>
 <dd>labelはこのデバイスを表すラベルである {{domxref("DOMString")}} です（たとえば、"External USB Webcam）。MediaStreamがアクティブな間か認可が許可されているときだけ使用できます。</dd>
</dl>

<h2 id="例">例</h2>

<p><code>mediaDevices.enumerateDevices()</code>の使用例を示します。</p>

<pre class="brush: js">if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
  console.log("enumerateDevices() not supported.");
  return;
}

// List cameras and microphones.

navigator.mediaDevices.enumerateDevices()
.then(function(devices) {
  devices.forEach(function(device) {
    console.log(device.kind + ": " + device.label +
                " id = " + device.deviceId);
  });
})
.catch(function(err) {
  console.log(err.name + ": " + err.message);
});
</pre>

<p>実行例：<br>
 <br>
 <code>videoinput: id = csO9c0YpAf274OuCPUA53CNE0YHlIr2yXCi+SqfBZZ8=<br>
 audioinput: id = RKxXByjnabbADGQNNZqLVLdmXlS0YkETYCIbg+XxnvM=<br>
 audioinput: id = r2/xw1xUPIyZunfV1lGrKOma5wTOvCkWfZ368XCndm0=</code><br>
 <br>
 つ以上のMediaStreamがアクティブか、認可に対する許可がある場合：</p>

<p><code>videoinput: FaceTime HD Camera (Built-in) id=csO9c0YpAf274OuCPUA53CNE0YHlIr2yXCi+SqfBZZ8=<br>
 audioinput: default (Built-in Microphone) id=RKxXByjnabbADGQNNZqLVLdmXlS0YkETYCIbg+XxnvM=<br>
 audioinput: Built-in Microphone id=r2/xw1xUPIyZunfV1lGrKOma5wTOvCkWfZ368XCndm0=</code></p>

<h2 id="認可">認可</h2>

<p>インストールできるアプリケーション（たとえば、 <a href="/ja/Apps/Build/Building_apps_for_Firefox_OS/Firefox_OS_app_beginners_tutorial"><u><font color="#0066cc">Firefox OS app</font></u></a>）で<font face="Courier New">enumerateDevices()</font> を使用するには、マニフェストファイルに1つまたは両方の次のフィールドを設定する必要があります。</p>

<pre class="brush: js">"permissions": {
  "audio-capture": {
    "description": "Required to capture audio using getUserMedia()"
  },
  "video-capture": {
    "description": "Required to capture video using getUserMedia()"
  }
}</pre>

<p>さらなる情報は<a href="/ja/Apps/Developing/App_permissions#audio-capture">permission: audio-capture</a>と<a href="/ja/Apps/Developing/App_permissions#video-capture">permission: video-capture</a>を見てください。</p>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('Media Capture', '#mediadevices', 'mediaDevices.enumerateDevices')}}</td>
   <td>{{Spec2('Media Capture')}}</td>
   <td>Initial definition.</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザ実装状況">ブラウザ実装状況</h2>

<p>{{Compat("api.MediaDevices.enumerateDevices")}}</p>

<h2 id="関連項目">関連項目</h2>

<ul>
 <li><a href="/ja/docs/Web/API/MediaDevices/getUserMedia" title="mediaDevices.getUserMedia">navigator.mediaDevices.getUserMedia</a></li>
 <li><a href="/ja/docs/WebRTC" title="WebRTC">WebRTC</a> - APIの導入ページ</li>
 <li><a href="/ja/docs/WebRTC/MediaStream_API" title="WebRTC/MediaStream_API">MediaStream API</a> - media streamオブジェクトの導入ページ</li>
 <li><a href="/ja/docs/WebRTC/taking_webcam_photos" title="WebRTC/taking_webcam_photos">Taking webcam photos</a> - videoよりも写真を撮るために<code>getUserMedia()を使用するためのチュートリアル</code></li>
</ul>
