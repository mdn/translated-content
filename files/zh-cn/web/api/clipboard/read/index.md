---
title: Clipboard.read()
slug: Web/API/Clipboard/read
tags:
  - API
  - Clip
  - Clipboard
  - Clipboard API
  - read
translation_of: Web/API/Clipboard/read
---
<div>{{APIRef("Clipboard API")}}</div>

<p>The <strong><code>read()</code></strong> method of the {{domxref("Clipboard")}} interface requests a copy of the clipboard's contents, delivering the data to the returned {{jsxref("Promise")}} when the promise is resolved. Unlike {{domxref("Clipboard.readText", "readText()")}}, the <code>read()</code> method can return arbitrary data, such as images.</p>

<p>To read from the clipboard, you must first have the <code>"clipboard-read"</code> permission.</p>

<div class="note">
<p><strong>Note:</strong> The asynchronous Clipboard and <a href="/en-US/docs/Web/API/Permissions_API">Permissions APIs</a> are still in the process of being integrated into most browsers, so they often deviate from the official rules for permissions and the like. Be sure to review the <a href="#浏览器兼容性">compatibility table</a> before using these methods.</p>
</div>

<h2 id="语法">语法</h2>

<pre class="syntaxbox">var <em>promise</em> = navigator.clipboard.read();</pre>

<h3 id="Parameters">Parameters</h3>

<p>None.</p>

<h3 id="Return_value">Return value</h3>

<p>A {{jsxref("Promise")}} that resolves with a {{domxref("DataTransfer")}} object containing the clipboard's contents. The promise is rejected if permission to access the clipboard is not granted.</p>

<h2 id="例子">例子</h2>

<p>After using {{domxref("Permissions.query", "navigator.permissions.query()")}} to find out if we have (or if the user will be prompted to allow) <code>"clipboard-read"</code> access, this example fetches the data currently on the clipboard. If it's not plain text, an error message is presented. Otherwise, an element referred to using the variable <code>textElem</code> has its contents replaced with the clipboard's contents.</p>

<pre class="brush: js">// First, ask the Permissions API if we have some kind of access to
// the "clipboard-read" feature.

navigator.permissions.query({name: "clipboard-read"}).then(result =&gt; {
  // If permission to read the clipboard is granted or if the user will
  // be prompted to allow it, we proceed.

  if (result.state == "granted" || result.state == "prompt") {
    navigator.clipboard.read().then(data =&gt; {
      for (let i=0; i&lt;data.items.length; i++) {
        if (data.items[i].type != "text/plain") {
          alert("Clipboard contains non-text data. Unable to access it.");
        } else {
          textElem.innerText = data.items[i].getAs("text/plain");
        }
      }
    });
  }
});
</pre>

<div class="note">
<p><strong>Note:</strong> At this time, while Firefox does implement <code>read()</code>, it does not recognize the <code>"clipboard-read"</code> permission, so attempting to use the <a href="/en-US/docs/Web/API/Permissions_API">Permissions API</a> to manage access to the API will not work.</p>
</div>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>



<p>{{Compat("api.Clipboard.read")}}</p>
