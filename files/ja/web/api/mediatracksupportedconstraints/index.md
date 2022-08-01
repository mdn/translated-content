---
title: MediaTrackSupportedConstraints
slug: Web/API/MediaTrackSupportedConstraints
translation_of: Web/API/MediaTrackSupportedConstraints
---
<div>{{APIRef("Media Capture and Streams")}}</div>

<p><strong><code>MediaTrackSupportedConstraints</code></strong>ディクショナリは、{{domxref("MediaStreamTrack")}}オブジェクトを実装している{{Glossary("user agent")}}やブラウザによって理解できる制約可能なプロパティの一覧を表します。{{domxref("MediaDevices.getSupportedConstraints()")}}によって、<code>MediaTrackSupportedConstraints</code>に適合するオブジェクトが戻り値として返されます。</p>

<p>WebIDLでのインタフェース定義の手順で動作するため、制約は受け付けられたがサポートしていない場合エラーは発生しません。代わりに、指定された制約は解釈できなかった制約を除いて適用されるでしょう。これは混乱を招きエラーのデバッグを困難にするので、制約が暗黙的に無視されたのか制約が受け付けられたのかを知りたい場合は、<code>getSupportedConstraints()</code>を用いて、制約の確立を試みる前にこの情報を取得してください。</p>

<p>実際の制約セットは{{domxref("MediaTrackConstraints")}}ディクショナリをベースにしたオブジェクトで表現されます。</p>

<p>制約がどのように動作するかについての詳細を知りたい場合は、<a href="/ja/docs/Web/API/Media_Streams_API/Constraints">Capabilities, constraints, and settings</a>を読んでください。</p>

<h2 id="プロパティ">プロパティ</h2>

<p>オブジェクトは以下のプロパティの組み合わせであり、必ずしも全てのプロパティが含まれるわけではありません。</p>

<dl>
 <dt>{{domxref("MediaTrackSupportedConstraints.autoGainControl", "autoGainControl")}}</dt>
 <dd>実行環境で<code><a href="/ja/docs/Web/API/MediaTrackConstraints#autoGainControl">autoGainControl</a></code>制約がサポートされている場合は、Boolean型の<code>true</code>の値になります。</dd>
 <dt>{{domxref("MediaTrackSupportedConstraints.width", "width")}}</dt>
 <dd>実行環境で<code><a href="/ja/docs/Web/API/MediaTrackConstraints#width">width</a></code>制約がサポートされている場合は、Boolean型の<code>true</code>の値になります。</dd>
 <dt>{{domxref("MediaTrackSupportedConstraints.height", "height")}}</dt>
 <dd>実行環境で<code><a href="/ja/docs/Web/API/MediaTrackConstraints#height">height</a></code>制約がサポートされている場合は、Boolean型の<code>true</code>の値になります。</dd>
 <dt>{{domxref("MediaTrackSupportedConstraints.aspectRatio", "aspectRatio")}}</dt>
 <dd>実行環境で<code><a href="/ja/docs/Web/API/MediaTrackConstraints#aspectRatio">aspectRatio</a></code>制約がサポートされている場合は、Boolean型の<code>true</code>の値になります。</dd>
 <dt>{{domxref("MediaTrackSupportedConstraints.frameRate", "frameRate")}}</dt>
 <dd>実行環境で<code><a href="/ja/docs/Web/API/MediaTrackConstraints#frameRate">frameRate</a></code>制約がサポートされている場合は、Boolean型の<code>true</code>の値になります。</dd>
 <dt>{{domxref("MediaTrackSupportedConstraints.facingMode", "facingMode")}}</dt>
 <dd>実行環境で<code><a href="/ja/docs/Web/API/MediaTrackConstraints#facingMode">facingMode</a></code>制約がサポートされている場合は、Boolean型の<code>true</code>の値になります。</dd>
 <dt>{{domxref("MediaTrackSupportedConstraints.volume", "volume")}}</dt>
 <dd>実行環境で<code><a href="/ja/docs/Web/API/MediaTrackConstraints#volume">volume</a></code>制約がサポートされている場合は、Boolean型の<code>true</code>の値になります。</dd>
 <dt>{{domxref("MediaTrackSupportedConstraints.sampleRate", "sampleRate")}}</dt>
 <dd>実行環境で<code><a href="/ja/docs/Web/API/MediaTrackConstraints#sampleRate">sampleRate</a></code>制約がサポートされている場合は、Boolean型の<code>true</code>の値になります。</dd>
 <dt>{{domxref("MediaTrackSupportedConstraints.sampleSize", "sampleSize")}}</dt>
 <dd>実行環境で<code><a href="/ja/docs/Web/API/MediaTrackConstraints#sampleSize">sampleSize</a></code>制約がサポートされている場合は、Boolean型の<code>true</code>の値になります。</dd>
 <dt>{{domxref("MediaTrackSupportedConstraints.echoCancellation", "echoCancellation")}}</dt>
 <dd>実行環境で<code><a href="/ja/docs/Web/API/MediaTrackConstraints#echoCancellation">echoCancellation</a></code>制約がサポートされている場合は、Boolean型の<code>true</code>の値になります。</dd>
 <dt>{{domxref("MediaTrackSupportedConstraints.latency", "latency")}}</dt>
 <dd>実行環境で<code><a href="/ja/docs/Web/API/MediaTrackConstraints#latency">latency</a></code> 制約がサポートされている場合は、Boolean型の<code>true</code>の値になります。</dd>
 <dt>{{domxref("MediaTrackSupportedConstraints.noiseSuppression", "noiseSuppression")}}</dt>
 <dd>実行環境で<code><a href="/ja/docs/Web/API/MediaTrackConstraints#noiseSuppression">noiseSuppression</a></code>制約がサポートされている場合は、Boolean型の<code>true</code>の値になります。</dd>
 <dt>{{domxref("MediaTrackSupportedConstraints.channelCount", "channelCount")}}</dt>
 <dd>実行環境で<code><a href="/ja/docs/Web/API/MediaTrackConstraints#channelCount">channelCount</a></code>制約がサポートされている場合は、Boolean型の<code>true</code>の値になります。</dd>
 <dt>{{domxref("MediaTrackSupportedConstraints.deviceId", "deviceId")}}</dt>
 <dd>実行環境で<code><a href="/ja/docs/Web/API/MediaTrackConstraints#deviceId">deviceId</a></code>制約がサポートされている場合は、Boolean型の<code>true</code>の値になります。</dd>
 <dt>{{domxref("MediaTrackSupportedConstraints.groupId", "groupId")}}</dt>
 <dd>実行環境で<code><a href="/ja/docs/Web/API/MediaTrackConstraints#groupId">groupId</a></code>制約がサポートされている場合は、Boolean型の<code>true</code>の値になります。</dd>
</dl>

<h2 id="関連項目">関連項目</h2>

<ul>
 <li>{{domxref("MediaTrackConstraints")}}</li>
 <li>{{domxref("MediaDevices.getUserMedia()")}}</li>
 <li>{{domxref("MediaStreamTrack.getConstraints()")}}</li>
 <li>{{domxref("MediaStreamTrack.applyConstraints()")}}</li>
 <li>{{domxref("MediaStreamTrack.getSettings()")}}</li>
</ul>
