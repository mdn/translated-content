---
title: Date.prototype.toGMTString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toGMTString
translation_of: Web/JavaScript/Reference/Global_Objects/Date/toGMTString
---
<div>{{JSRef("Global_Objects", "Date")}} {{ Deprecated_header() }}</div>

<p>The <code><strong>toGMTString()</strong></code> method converts a date to a string, using Internet GMT conventions. The exact format of the value returned by <code>toGMTString</code> varies according to the platform and browser, in general it should represent a human readable date string.</p>

<p><strong>Note</strong>: <code>toGMTString</code> is deprecated and should no longer be used, it's only there for backwards compatibility, use {{jsxref("Date.toUTCString", "toUTCString()")}} instead.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox"><var>dateObj</var>.toGMTString()</pre>

<h2 id="Examples">Examples</h2>

<h3 id="Example:_Using_toGMTString">Example: Using <code>toGMTString</code></h3>

<p>In this example, the <code>toGMTString</code> method converts the date to GMT (UTC) using the operating system's time-zone offset and returns a string value that is similar to the following form. The exact format depends on the platform.</p>

<pre class="brush: js">var today = new Date();
var str = today.toGMTString();  // deprecated! use toUTCString()

console.log(str);               // Mon, 18 Dec 1995 17:28:35 GMT
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_Also">See also</h2>

<ul>
 <li>{{jsxref("Date.prototype.toLocaleDateString()")}}</li>
 <li>{{jsxref("Date.prototype.toTimeString()")}}</li>
 <li>{{jsxref("Date.prototype.toUTCString()")}}</li>
</ul>
