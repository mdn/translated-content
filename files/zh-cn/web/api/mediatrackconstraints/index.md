---
title: 媒体追踪约束
slug: Web/API/MediaTrackConstraints
translation_of: Web/API/MediaTrackConstraints
---
<div>{{APIRef("媒体捕获与媒体流")}}</div>

<p>The <strong><code>MediaTrackConstraints</code></strong> dictionary is used to describe a set of capabilities and the value or values each can take on. A constraints dictionary is passed into {{domxref("MediaStreamTrack.applyConstraints", "applyConstraints()")}} to allow a script to establish a set of exact (required) values or ranges and/or preferred values or ranges of values for the track, and the most recently-requested set of custom constraints can be retrieved by calling {{domxref("MediaStreamTrack.getConstraints", "getConstraints()")}}.</p>

<p>For each constraint, you can typically specify an exact value you need, an ideal value you want, a range of acceptable values, and/or a value which you'd like to be as close to as possible. The specifics vary somewhat depending on the type of the constrainable property.</p>

<p>To learn more about how constraints work, see <a href="/en-US/docs/Web/API/Media_Streams_API/Constraints">Capabilities, constraints, and settings</a>.</p>

<h2 id="Properties">Properties</h2>

<p>Some combination—but not necessarily all—of the following properties will exist on the object.</p>

<h3 id="Properties_of_all_media_tracks">Properties of all media tracks</h3>

<dl>
 <dt>{{domxref("MediaTrackConstraints.deviceId", "deviceId")}}</dt>
 <dd>A {{domxref("ConstrainDOMString")}} object specifying a device ID or an array of device IDs which are acceptable and/or required.</dd>
 <dt>{{domxref("MediaTrackConstraints.groupId", "groupId")}}</dt>
 <dd>A {{domxref("ConstrainDOMString")}} object specifying a group ID or an array of group IDs which are acceptable and/or required.</dd>
</dl>

<h3 id="Properties_of_audio_tracks">Properties of audio tracks</h3>

<dl>
 <dt>{{domxref("MediaTrackConstraints.autoGainControl", "autoGainControl")}}</dt>
 <dd>一个 {{domxref("ConstrainBoolean")}} 对象，用来指明是否首选或要求使用声音的自动增益。</dd>
 <dt>{{domxref("MediaTrackConstraints.channelCount", "channelCount")}}</dt>
 <dd>一个 {{domxref("ConstrainLong")}}，用来指明可选或要求的声道数或者是声道数的范围。</dd>
 <dt>{{domxref("MediaTrackConstraints.echoCancellation", "echoCancellation")}}</dt>
 <dd>一个 {{domxref("ConstrainBoolean")}} 对象，用来指明是否首选或需要开启回声消除。</dd>
 <dt>{{domxref("MediaTrackConstraints.latency", "latency")}}</dt>
 <dd>一个 {{domxref("ConstrainDouble")}}，用来指明多大延迟是被可接受的。</dd>
 <dt>{{domxref("MediaTrackConstraints.noiseSuppression", "noiseSuppression")}}</dt>
 <dd>一个 {{domxref("ConstrainBoolean")}}，用来指明是否首选或需要开启降噪。</dd>
 <dt>{{domxref("MediaTrackConstraints.sampleRate", "sampleRate")}}</dt>
 <dd>一个 {{domxref("ConstrainLong")}}，用来指明可接受的或要求的音频采样率/采样率范围。</dd>
 <dt>{{domxref("MediaTrackConstraints.sampleSize", "sampleSize")}}</dt>
 <dd>一个 {{domxref("ConstrainLong")}}，用来指明可接受的或要求的音频采样大小/采样范围。</dd>
 <dt>{{domxref("MediaTrackConstraints.volume", "volume")}}</dt>
 <dd>一个 {{domxref("ConstrainDouble")}}，用来指明可接受的或要求的音量大小/范围。</dd>
</dl>

<h3 id="Properties_of_image_tracks">Properties of image tracks</h3>

<dl>
 <dt>{{domxref("MediaTrackConstraints.whiteBalanceMode","whiteBalanceMode")}}</dt>
 <dd>A {{jsxref("String")}} specifying one of <code>"none"</code>, <code>"manual"</code>, <code>"sigle-shot"</code>, or <code>"continuous"</code>.</dd>
 <dt>{{domxref("MediaTrackConstraints.exposureMode","exposureMode")}}</dt>
 <dd>A {{jsxref("String")}} specifying one of <code>"none"</code>, <code>"manual"</code>, <code>"sigle-shot"</code>, or <code>"continuous"</code>.</dd>
 <dt>{{domxref("MediaTrackConstraints.focusMode","focusMode")}}</dt>
 <dd>A {{jsxref("String")}} specifying one of <code>"none"</code>, <code>"manual"</code>, <code>"sigle-shot"</code>, or <code>"continuous"</code>.</dd>
 <dt>{{domxref("MediaTrackConstraints.pointsOfInterest","pointsOfInterest")}}</dt>
 <dd>The pixel coordinates on the sensor of one or more points of interest. This is either an object in the form { x:<em>value</em>, y:<em>value</em> } or an array of such objects, where <em>value </em> is a double-precision integer.</dd>
 <dt>{{domxref("MediaTrackConstraints.expsureCompensation","exposureCompensation")}}</dt>
 <dd>A {{domxref("ConstrainDouble")}} (a double-precision integer) specifying f-stop adjustment by up to ±3. </dd>
 <dt>{{domxref("MediaTrackConstraints.colorTemperature","colorTemperature")}}</dt>
 <dd>A {{domxref("ConstrainDouble")}} (a double-precision integer) specifying a desired color temperature in degrees kelvin.</dd>
 <dt>{{domxref("MediaTrackConstraints.iso","iso")}}</dt>
 <dd>A {{domxref("ConstrainDouble")}} (a double-precision integer) specifying a desired iso setting.</dd>
 <dt>{{domxref("MediaTrackConstraints.brightness","brightness")}}</dt>
 <dd>A {{domxref("ConstrainDouble")}} (a double-precision integer) specifying a desired brightness setting.</dd>
 <dt>{{domxref("MediaTrackConstraints.contrast","contrast")}}</dt>
 <dd>A {{domxref("ConstrainDouble")}} (a double-precision integer) specifying the degree of difference between light and dark.</dd>
 <dt>{{domxref("MediaTrackConstraints.saturation","saturation")}}</dt>
 <dd>A {{domxref("ConstrainDouble")}} (a double-precision integer) specifying the degree of color intensity.</dd>
 <dt>{{domxref("MediaTrackConstraints.sharpness","sharpness")}}</dt>
 <dd>A {{domxref("ConstrainDouble")}} (a double-precision integer) specifying the intensity of edges.</dd>
 <dt>{{domxref("MediaTrackConstraints.focusDistance","focusDistance")}}</dt>
 <dd>A {{domxref("ConstrainDouble")}} (a double-precision integer) specifying distance to a focused object.</dd>
 <dt>{{domxref("MediaTrackConstraints.zoom","zoom")}}</dt>
 <dd>A {{domxref("ConstrainDouble")}} (a double-precision integer) specifying the desired focal length.</dd>
 <dt>{{domxref("MediaTrackConstraints.torch","torch")}}</dt>
 <dd>A {{jsxref("Boolean")}} whter the fill light continuously connected, meaning it stays on as long as the track is active.</dd>
</dl>

<h3 id="Properties_of_video_tracks">Properties of video tracks</h3>

<dl>
 <dt>{{domxref("MediaTrackConstraints.aspectRatio", "aspectRatio")}}</dt>
 <dd>A {{domxref("ConstrainDouble")}} specifying the video aspect ratio or range of aspect ratios which are acceptable and/or required.</dd>
 <dt>{{domxref("MediaTrackConstraints.facingMode", "facingMode")}}</dt>
 <dd>A {{domxref("ConstrainDOMString")}} object specifying a facing or an array of facings which are acceptable and/or required.</dd>
 <dt>{{domxref("MediaTrackConstraints.frameRate", "frameRate")}}</dt>
 <dd>A {{domxref("ConstrainDouble")}} specifying the frame rate or range of frame rates which are acceptable and/or required.</dd>
 <dt>{{domxref("MediaTrackConstraints.height", "height")}}</dt>
 <dd>A {{domxref("ConstrainLong")}} specifying the video height or range of heights which are acceptable and/or required.</dd>
 <dt>{{domxref("MediaTrackConstraints.width", "width")}}</dt>
 <dd>A {{domxref("ConstrainLong")}} specifying the video width or range of widths which are acceptable and/or required.</dd>
</dl>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

{{Compat}}

<h2 id="See_also">See also</h2>

<ul>
 <li>{{domxref("MediaDevices.getUserMedia()")}}</li>
 <li>{{domxref("MediaStreamTrack.getConstraints()")}}</li>
 <li>{{domxref("MediaStreamTrack.applyConstraints()")}}</li>
 <li>{{domxref("MediaDevices.getSupportedConstraints()")}}</li>
 <li>{{domxref("MediaTrackSupportedConstraints")}}</li>
 <li>{{domxref("MediaStreamTrack.getSettings()")}}</li>
</ul>
