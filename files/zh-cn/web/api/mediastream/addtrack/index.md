---
title: MediaStream.addTrack()
slug: Web/API/MediaStream/addTrack
translation_of: Web/API/MediaStream/addTrack
original_slug: Web/API/MediaStream.addTrack
---
<p>{{APIRef("Media Capture and Streams")}}</p>

<p><strong><code>MediaStream.addTrack()</code></strong> 方法会给流添加一个新轨道。指定一个{{domxref("MediaStreamTrack")}}对象作为参数。</p>

<div class="note">
<p>如果指定的 track 已经存在于流的 track set 里的话，该方法不会产生作用。</p>
</div>

<h2 id="语法">语法</h2>

<pre class="syntaxbox"><em>stream</em>.addTrack(<em>track</em>);
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code>track</code></dt>
 <dd>A {{domxref("MediaStreamTrack")}} to add to the stream.</dd>
</dl>

<h2 id="Example">Example</h2>

<p> </p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

{{Compat}}

<h2 id="See_also">See also</h2>

<ul>
 <li>{{domxref("MediaStream")}}, the interface it belongs to.</li>
</ul>
