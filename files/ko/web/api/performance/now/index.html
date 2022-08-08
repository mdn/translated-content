---
title: performance.now()
slug: Web/API/Performance/now
tags:
  - Performance
  - performance.now
translation_of: Web/API/Performance/now
---
<div>{{APIRef("High Resolution Timing")}}</div>

<p>The <code><strong>performance.now()</strong></code> method returns a {{domxref("DOMHighResTimeStamp")}}, measured in milliseconds.</p>

<div class="warning">
<p>The timestamp is not actually high-resolution. To mitigate security threats such as <a href="https://spectreattack.com/">Spectre</a>, browsers currently round the results to varying degrees. (Firefox started rounding to 1 millisecond in Firefox 60.) Some browsers may also slightly randomize the timestamp. The precision may improve again in future releases; browser developers are still investigating these timing attacks and how best to mitigate them.</p>
</div>

<p>{{AvailableInWorkers}}</p>

<p>The returned value represents the time elapsed since the <a href="/en-US/docs/Web/API/DOMHighResTimeStamp#The_time_origin">time origin</a>.</p>

<p>Bear in mind the following points:</p>

<ul>
 <li>In dedicated workers created from a {{domxref("Window")}} context, the value in the worker will be lower than <code>performance.now()</code> in the window who spawned that worker. It used to be the same as <code>t0</code> of the main context, but this was changed.</li>
 <li>In shared or service workers, the value in the worker might be higher than that of the main context because that window can be created after those workers.</li>
</ul>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox"><em>t</em> = performance.now();</pre>

<h2 id="Example">Example</h2>

<pre class="brush: js">var t0 = performance.now();
doSomething();
var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
</pre>

<p>Unlike other timing data available to JavaScript (for example <a href="/en-US/docs/JavaScript/Reference/Global_Objects/Date/now"><code>Date.now</code></a>), the timestamps returned by <code>performance.now()</code> are not limited to one-millisecond resolution. Instead, they represent times as floating-point numbers with up to microsecond precision.</p>

<p>Also unlike <code>Date.now()</code>, the values returned by <code>performance.now() </code>always increase at a constant rate, independent of the system clock (which might be adjusted manually or skewed by software like NTP). Otherwise, <code>performance.timing.navigationStart + performance.now() </code>will be approximately equal to<code> Date.now()</code>.</p>

<h2 id="Reduced_time_precision">Reduced time precision</h2>

<p>To offer protection against timing attacks and fingerprinting, the precision of <code>performance.now()</code> might get rounded depending on browser settings.<br>
 In Firefox, the <code>privacy.reduceTimerPrecision</code>  preference is enabled by default and defaults to 1ms.</p>

<pre class="brush: js">// reduced time precision (1ms) in Firefox 60
performance.now();
// 8781416
// 8781815
// 8782206
// ...


// reduced time precision with `privacy.resistFingerprinting` enabled
performance.now();
// 8865400
// 8866200
// 8866700
// ...
</pre>

<p>In Firefox, you can also enable <code>privacy.resistFingerprinting</code> — this changes the precision to 100ms or the value of <code>privacy.resistFingerprinting.reduceTimerPrecision.microseconds</code>, whichever is larger.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat("api.Performance.now")}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="http://updates.html5rocks.com/2012/08/When-milliseconds-are-not-enough-performance-now">When milliseconds are not enough: performance.now() </a>from HTML5 Rocks.</li>
</ul>
