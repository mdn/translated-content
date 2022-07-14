---
title: 你的第一個 WebExtension
slug: Mozilla/Add-ons/WebExtensions/Your_first_WebExtension
translation_of: Mozilla/Add-ons/WebExtensions/Your_first_WebExtension
---
<div>{{AddonSidebar}}</div>

<p>我們會在這篇文章詳細講解 Firefox 的 WebExtension 的製作。這支附加元件會在 "mozilla.org" 網域底下的所有網頁，增加紅色外框。</p>

<p>範例的原始碼也放在 GitHub 喔：<a href="https://github.com/mdn/webextensions-examples/tree/master/borderify">https://github.com/mdn/webextensions-examples/tree/master/borderify</a>。</p>

<p>首先勒，你需要 Firefox 45.0 或以上的版本。</p>

<h2 id="撰寫_WebExtension">撰寫 WebExtension</h2>

<p>新增一個資料夾，然後進到裡面：</p>

<pre class="brush: bash">mkdir borderify
cd borderify</pre>

<h3 id="manifest.json">manifest.json</h3>

<p>現在新增一個檔案 "manifest.json"，直接放在 "borderify" 目錄底下就行，然後把下面的程式碼塞進去：</p>

<pre class="brush: json">{

  "manifest_version": 2,
  "name": "Borderify",
  "version": "1.0",

  "description": "Adds a red border to all webpages matching mozilla.org.",

  "icons": {
    "48": "icons/border-48.png"
  },

  "content_scripts": [
    {
      "matches": ["*://*.mozilla.org/*"],
      "js": ["borderify.js"]
    }
  ]

}</pre>

<ul>
 <li>最前面的三個 key：<code><a href="/zh-TW/Add-ons/WebExtensions/manifest.json/manifest_version">manifest_version</a></code>、<code><a href="/zh-TW/Add-ons/WebExtensions/manifest.json/name">name</a></code>、<code><a href="/zh-TW/Add-ons/WebExtensions/manifest.json/version">version</a></code> 必須寫進去，它包含了附加元件的基本詮釋資料（metadata）。</li>
 <li><code><a href="/zh-TW/Add-ons/WebExtensions/manifest.json/description">description</a></code> 是可選、但最好要有：它會在附加元件管理員內標示。</li>
 <li><code><a href="/zh-TW/Add-ons/WebExtensions/manifest.json/icons">icons</a></code> 也是可選、但最好要有：它允許附加元件指定圖示、也會在附加元件的管理員顯示。</li>
</ul>

<p>這裡最有趣的 key 是 <code><a href="/zh-TW/Add-ons/WebExtensions/manifest.json/content_scripts">content_scripts</a></code>：它告訴 Firefox 說：符合特定型態的 URL 會載入網頁的腳本。在此我們告訴 Firefox 說：所有由 "mozilla.org" 或其子域名服務的 HTTP 或 HTTPS 頁面，都要載入 "borderify.js"。</p>

<ul>
 <li><a href="/zh-TW/Add-ons/WebExtensions/Content_scripts">深入理解 content script</a></li>
 <li><a href="/zh-TW/Add-ons/WebExtensions/Match_patterns">深入理解 about match pattern</a></li>
</ul>

<div class="warning">
<p><strong>警告：</strong> <a href="/zh-TW/Add-ons/WebExtensions/WebExtensions_and_the_Add-on_ID#When_do_you_need_an_Add-on_ID">某些情況下，你需要給附加元件指定 ID</a>。如果需要指定附加元件 ID，請在 <code>manifest.json</code> 引入 <code><a href="/zh-TW/Add-ons/WebExtensions/manifest.json/applications">applications</a></code> key，並設定 <code>gecko.id</code> 屬性：</p>

<pre class="brush: json">"applications": {
  "gecko": {
    "id": "borderify@example.com"
  }
}</pre>
</div>

<h3 id="iconsborder-48.png">icons/border-48.png</h3>

<p>附加元件要有一個圖標。它會在附加元件管理員的附加元件清單旁邊列出來。我們的 manifest.json 已經說好了，要在 "icons/border-48.png" 那邊會有個圖標。</p>

<p>在 "borderify" 目錄下直接建立 "icons" 目錄，並儲存一個叫 "border-48.png" 的圖標檔。你可以用<a href="https://github.com/mdn/webextensions-examples/blob/master/borderify/icons/border-48.png">範例的這張圖標</a>，它是從 Google Material Design 圖標集抓下來的，並使用<a href="https://creativecommons.org/licenses/by-sa/3.0/deed.zh_TW">創用 CC：姓名標示-相同方式分享</a>授權。</p>

<p>如果你要用自己的圖標，它應該是 48x48 像素。你也可以針對高解析度提供 96x96 像素的圖標，這樣的話它在 manifest.json 會被指定為 <code>icons</code> 物件內的 <code>96</code> property：</p>

<pre class="brush: json">"icons": {
  "48": "icons/border-48.png",
  "96": "icons/border-96.png"
}</pre>

<p>要不然，你也能提供 SVG 檔，它就會等比縮放。</p>

<ul>
 <li><a href="/zh-TW/Add-ons/WebExtensions/manifest.json/icons">深入理解指定圖標。</a></li>
</ul>

<h3 id="borderify.js">borderify.js</h3>

<p>最後，新增一個檔案叫 "borderify.js"，直接放在 "borderify" 目錄底下即可，然後一樣把下面的 code 塞進去：</p>

<pre class="brush: js">document.body.style.border = "5px solid red";</pre>

<p>一旦網址符合 manifest.json 中 content_scripts 所設定的模式，這段 script 就會載入，並且就像該頁自己讀入的程式碼一樣、能夠直接存取該頁上的東西。</p>

<ul>
 <li><a href="/en-US/Add-ons/WebExtensions/Content_scripts">深入了解 content scripts.</a></li>
</ul>

<h2 id="測試看看">測試看看</h2>

<p>首先，仔細檢查這些檔案是否在正確的位置：</p>

<pre>borderify/
    icons/
        border-48.png
    borderify.js
    manifest.json</pre>

<h3 id="安裝">安裝</h3>

<p>在 Firefox 打開 about:debugging，點選 Load Temporary Add-on 然後選擇你的 manifest.json 檔案：</p>

<p>{{EmbedYouTube("cer9EUKegG4")}}</p>

<p>現在這個附加元件就要安裝起來，但它要在你重新啟動 Firefox 後才開始。</p>

<p>又或者，你可以從命令列利用 <a href="/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Getting_started_with_web-ext">web-ext</a> 工具執行 WebExtension。</p>

<h3 id="測試">測試</h3>

<p>現在去看一下 mozilla.org 還有它下面的所有網頁。你應該會看到有個紅色外框圍繞著網頁。</p>

<p>{{EmbedYouTube("rxBQl2Z9IBQ")}}</p>

<div class="note">
<p><strong>備註：</strong> 不過，別把這招用在 addons.mozilla.org 上，該網域目前會阻擋 content scripts。</p>
</div>

<p>再做點小實驗吧。改一下腳本讓外框顏色改變，或是做其他更動。接著存檔，並按下 about:debugging 的 Reload 鍵重啟附加元件。現在你能看到更動了：</p>

<p>{{EmbedYouTube("NuajE60jfGY")}}</p>

<ul>
 <li><a href="/zh-TW/Add-ons/WebExtensions/Temporary_Installation_in_Firefox">多了解一點附加元件的載入</a></li>
</ul>

<h2 id="打包並發送">打包並發送</h2>

<p>想讓別人用你的附加元件，就要把元件遞交給 Mozilla 簽署之。想獲得更多資訊，請參見 <a href="/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Publishing_your_WebExtension">發布你的 WebExtension</a>。</p>

<h2 id="接下來咧？">接下來咧？</h2>

<p>現在你針對 Firefox 的 WebExtension 開發有點子的話，來看看：</p>

<ul>
 <li><a href="/zh-TW/Add-ons/WebExtensions/Anatomy_of_a_WebExtension">reading more about the anatomy of WebExtensions</a></li>
 <li><a href="/zh-TW/Add-ons/WebExtensions/Your_second_WebExtension">再寫個更進階的 WebExtension</a></li>
 <li><a href="/zh-TW/Add-ons/WebExtensions/API">了解 WebExtensions 所提供的 JavaScript API</a></li>
</ul>
