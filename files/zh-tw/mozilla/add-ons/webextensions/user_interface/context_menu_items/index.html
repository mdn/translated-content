---
title: 快捷選單項
slug: Mozilla/Add-ons/WebExtensions/user_interface/Context_menu_items
tags:
  - 擴充套件
translation_of: Mozilla/Add-ons/WebExtensions/user_interface/Context_menu_items
---
<div>{{AddonSidebar}}</div>

<div>
<p>這個用戶介面添加一個或多個項目到瀏覽器的快捷選單。這是用戶在網頁上點擊右鍵時出現的選單。頁籤也可以透過 <a href="/en-US/Add-ons/WebExtensions/API/menus">browser.menus API</a> 使用快捷選單。</p>

<p><img alt="Example of content menu items added by a WebExtension, from the context-menu-demo example" src="context_menu_example.png"></p>

<p>你可以用這個介面來顯示一些跟特定瀏覽器或網頁內容相關的功能。舉例來說，當用戶在圖片上按右鍵時提供圖片編輯器的功能或者在反白內容上按右鍵時提供儲存頁面內容的功能。你可以對選單添加普通的選單項目、核取方塊、單選按鈕組以及分隔線。選單項目透過{{WebExtAPIRef("contextMenus.create")}}添加後透過它會顯示在所有瀏覽器頁籤，但是你可以透過{{WebExtAPIRef("contextMenus.remove")}}來移除它。</p>

<h2 id="指定快捷選單項目">指定快捷選單項目</h2>

<p>透過{{WebExtAPIRef("contextMenus")}} API可以程式化地管理快捷選單項目。然而，你必須請求 <code>contextMenus</code> 的權限才能使用這些API的好處。</p>

<pre class="brush: json">"permissions": ["contextMenus"]</pre>

<p>現在你可以在你套件的後端腳本處添加（修改／刪除）選單項目。建立一個選單項目你要指定 id，標題以及它應該隸屬於哪個選單：</p>

<pre class="brush: js">browser.contextMenus.create({
  id: "log-selection",
  title: browser.i18n.getMessage("contextMenuItemSelectionLogger"),
  contexts: ["selection"]
}, onCreated);</pre>

<p>接著你的套件會監聽選單項目的點擊。送出有關項目點擊、點擊環境以及發生點擊頁籤的資訊可以用來使用恰當的套件功能。</p>

<pre class="brush: js">browser.contextMenus.onClicked.addListener(function(info, tab) {
  switch (info.menuItemId) {
    case "log-selection":
      console.log(info.selectionText);
      break;
    ...
  }
})</pre>

<h2 id="圖示">圖示</h2>

<p>更多關於建立快捷選單圖示的細節請查看文件<a href="https://design.firefox.com/photon/index.html">光子設計系統</a>的<a href="https://design.firefox.com/photon/visuals/iconography.html">圖示學</a>。</p>

<h2 id="範例">範例</h2>

<p>GitHub上的<a href="https://github.com/mdn/webextensions-examples">webextensions-examples</a> 程式庫包含了兩個建立快捷選單的範例：</p>

<ul>
 <li><a href="https://github.com/mdn/webextensions-examples/tree/master/menu-demo">menu-demo</a> 替瀏覽器的快捷選單添加幾個項目。</li>
 <li><a href="https://github.com/mdn/webextensions-examples/tree/master/context-menu-copy-link-with-types">context-menu-copy-link-with-types</a> 替連結添加一個快捷選單項，以純文字或rich HTML的形式複製連結的UR。</li>
</ul>
</div>
