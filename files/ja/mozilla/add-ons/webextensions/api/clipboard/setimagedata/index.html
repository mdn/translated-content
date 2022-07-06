---
title: clipboard.setImageData()
slug: Mozilla/Add-ons/WebExtensions/API/clipboard/setImageData
translation_of: Mozilla/Add-ons/WebExtensions/API/clipboard/setImageData
---
<div>{{AddonSidebar()}}</div>

<p>イメージをクリップボードにコピーします。イメージはクリップボードに書き込まれる前に再エンコードされます。イメージが無効な場合、クリップボードは修正されません。</p>

<p>The image is provided as an <code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer">ArrayBuffer</a></code> containing the encoded image. JPEG and PNG formats are supported.</p>

<p>Although this API is based on Chrome's <code><a href="https://developer.chrome.com/apps/clipboard">clipboard.setImageData()</a></code> API, there are some differences:</p>

<ul>
 <li>The Chrome API is only for apps, not extensions.</li>
 <li>This API requires only the <code>"clipboardWrite"</code> permission, while the Chrome version also requires the <code>"clipboard"</code> permission.</li>
 <li>Chrome's API uses callbacks, and this API only supports promises.</li>
 <li>This API does not support the <code>additionalItems</code> parameter.</li>
</ul>

<p>これは<code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a></code>を返す非同期関数です。</p>

<h2 id="書式">書式</h2>

<pre class="syntaxbox brush:js">browser.clipboard.setImageData(<em>imageData</em>, <em>imageType</em>)
</pre>

<h3 id="パラメータ">パラメータ</h3>

<dl>
 <dt><code>imageData</code></dt>
 <dd>An <code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer">ArrayBuffer</a></code> containing the encoded image data to copy to the clipboard.</dd>
 <dt><code>imageType</code></dt>
 <dd>A {{domxref("DOMString")}} indicating the type of image contained in <code>imageData</code>: <code>"png"</code> or <code>"jpeg"</code>.</dd>
</dl>

<h3 id="返り値">返り値</h3>

<p>A <code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a></code> that will be resolved with no arguments if the operation succeeded, or rejected if there was an error (for example, because the data did not represent a valid image).</p>

<h2 id="ブラウザ互換性">ブラウザ互換性</h2>

<p>{{Compat("webextensions.api.clipboard.setImageData", 10)}}</p>

<h2 id="例">例</h2>

<p>Copy a remote image:</p>

<pre class="brush: js" id="ct-71"><span class="quote">// requires:
// * the host permission for "<a href="https://cdn.mdn.mozilla.net/" rel="nofollow">https://cdn.mdn.mozilla.net/</a>*"
// * the API permission "clipboardWrite"

fetch('<a href="https://cdn.mdn.mozilla.net/static/img/favicon144.png" rel="nofollow">https://cdn.mdn.mozilla.net/static/img/favicon144.png</a>')
.then(response =&gt; response.arrayBuffer())
.then(buffer =&gt; browser.clipboard.setImageData(buffer, 'png'));</span></pre>

<p><span class="quote">Copy an image that was bundled with the extension:</span></p>

<pre class="brush: js" id="ct-70">// requires <span class="quote">the API permission </span>"clipboardWrite"

fetch(browser.runtime.getURL('image.png'))
.then(response =&gt; response.arrayBuffer())
.then(buffer =&gt; browser.clipboard.setImageData(buffer, 'png'));</pre>

<p>{{WebExtExamples}}</p>

<div class="note"><strong>Acknowledgements</strong>

<p>This API is based on Chromium's <a href="https://developer.chrome.com/apps/clipboard"><code>chrome.clipboard</code></a> API.</p>
</div>
