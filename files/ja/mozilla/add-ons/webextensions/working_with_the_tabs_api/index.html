---
title: Tabs API を使う
slug: Mozilla/Add-ons/WebExtensions/Working_with_the_Tabs_API
tags:
  - Add-ons
  - Beginner
  - Extensions
  - How-to
  - WebExtensions
  - tabs
translation_of: Mozilla/Add-ons/WebExtensions/Working_with_the_Tabs_API
---
<p>{{AddonSidebar}}</p>

<p>タブを使うとユーザーはブラウザーウィンドウに複数のウェブページを開いてウェブページ間をスイッチできるようになります。Tabs API により、タブを操作して、新しい方法でタブを使ったり拡張機能の機能として配布できます。</p>

<p>このハウツー記事では次のようなことを見ていきます:</p>

<ul>
 <li>Tabs API を使うのに必要な権限</li>
 <li>タブについての詳しい探検と{{WebExtAPIRef("tabs.query")}}を使ったプロパティ</li>
 <li>タブの作成、複製、移動、更新、読み込み、と削除</li>
 <li>タブのズームレベル操作</li>
 <li>タブの CSS操作</li>
</ul>

<p>その次には、API で提供されるその他のいろいろな機能を見て終わります。</p>

<div class="blockIndicator note">
<p><strong>注:</strong> There are some Tab API features covered elsewhere. These are the methods you can use to manipulate tab content with scripts ({{WebExtAPIRef("tabs.connect")}}, {{WebExtAPIRef("tabs.sendMessage")}}, and {{WebExtAPIRef("tabs.executeScript")}}). If you want more information on these methods, see the Concepts article <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Content_scripts">Content scripts</a> and the how-to guide <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Modify_a_web_page">Modify a web page</a>.</p>
</div>

<h2 id="Permissions_and_the_Tabs_API" name="Permissions_and_the_Tabs_API">権限と Tabs API</h2>

<p>Tabs API 機能の大半では権限は不要ですが、次の例外はあります:</p>

<ul>
 <li>Tab オブジェクトの <code>Tab.url</code>, <code>Tab.title</code>, <code>Tab.favIconUrl</code> プロパティにアクセスするには<code>"tabs</code>" 権限が必要です。Firefox では、URL の <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query">query</a> を実行するのに<code>"tabs</code>"が要ります。</li>
 <li>{{WebExtAPIRef("tabs.executeScript")}} や {{WebExtAPIRef("tabs.insertCSS")}} には <a href="/ja/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions">Host 権限</a>が必要です。</li>
</ul>

<p>下記は、拡張機能の manifest.json ファイルで <code>"tabs"</code> 権限を要求する方法です:</p>

<pre class="brush: json">"permissions": [
  "&lt;all_urls&gt;",
  "tabs"
],
</pre>

<p>この要求により、訪問するすべてのウェブサイトですべての Tabs API 機能を使うことができます。また、host権限不要の {{WebExtAPIRef("tabs.executeScript")}} や {{WebExtAPIRef("tabs.insertCSS")}} を使うのに、<a href="/ja/Add-ons/WebExtensions/manifest.json/permissions#activeTab_permission"><code>"activeTab"</code></a>の形で権限を要求する別のこの権限は <code>"tabs"</code> に <code>&lt;all_urls&gt;</code> つきのものと同じですが、次の 2 つの制限があります:</p>

<ul>
 <li>ユーザーは拡張機能のページアクション、コンテキストメニュー、ショートカットキーいずれかでやりとりせねばならない。</li>
 <li>アクティブなタブ内の権限のみ許可される。</li>
</ul>

<p>このアプローチの利点は、拡張機能が “Access your data for all websites” という警告をユーザーに表示しないことです。これは <code>&lt;all_urls&gt;</code> 権限により、拡張機能がいつでもどんなタブでも実行できるのに対し、<a href="/ja/Add-ons/WebExtensions/manifest.json/permissions#activeTab_permission"><code>"activeTab"</code></a> では、現在のタブでのユーザーが要求したアクションのみ実行するためです。</p>

<h2 id="Discovering_more_about_tabs_and_their_properties" name="Discovering_more_about_tabs_and_their_properties">タブとそのプロパティの探検</h2>

<p>すべてのブラウザーウィンドウのすべてのタブのリストを取得したいときもあるでしょう。ある条件にマッチするタブ、例えば特定のタブから開かれた、あるいはあるドメインのページを表示したもの、のサブセットを発見したいこともあるでしょう。タブのリストを持っていれば、そのプロパティを詳しく知りたくなるでしょう。</p>

<p>これが {{WebExtAPIRef("tabs.query")}} の出てくる場所です。単独で使ってすべてのタブを取得したり、<code>queryInfo</code> オブジェクト—これでタブがアクティブかとか、現在のウィンドウ内かとかといった、17 の条件のいくつかを指定する条件—をつけて、{{WebExtAPIRef("tabs.query")}} はタブの情報を含んだ {{WebExtAPIRef("tabs.Tab")}} オブジェクトの配列を返します。</p>

<p>現在のタブだけの情報が欲しいときは、そのタブの {{WebExtAPIRef("tabs.Tab")}} オブジェクトを {{WebExtAPIRef("tabs.getCurrent")}} を使って取得できます。タブの ID がある場合、{{WebExtAPIRef("tabs.Tab")}} オブジェクトを {{WebExtAPIRef("tabs.get")}} を使って取得できます。</p>

<h3 id="How_to_example" name="How_to_example">方法の実例</h3>

<p>{{WebExtAPIRef("tabs.query")}} と {{WebExtAPIRef("tabs.Tab")}} の使われ方を見るために、<a href="https://github.com/mdn/webextensions-examples/tree/master/tabs-tabs-tabs">tabs-tabs-tabs</a> の例で “switch to tabs” のリストをツールバーボタンのポップアップに追加するのを見てみましょう。</p>

<p><img alt="The tabs tabs tabs toolbar menu showing the switch to tap area" src="https://mdn.mozillademos.org/files/15723/Switch_to_tab.png" style="height: 645px; width: 369px;"></p>

<h3 id="manifest.json" name="manifest.json">manifest.json</h3>

<p>これが <a href="https://github.com/mdn/webextensions-examples/blob/master/tabs-tabs-tabs/manifest.json">manifest.json</a> です:</p>

<pre class="brush: json">{
  "browser_action": {
    "browser_style": true,
    "default_title": "Tabs, tabs, tabs",
    "default_popup": "tabs.html"
  },
  "description": "A list of methods you can perform on a tab.",
  "homepage_url": "https://github.com/mdn/webextensions-examples/tree/master/tabs-tabs-tabs",
  "manifest_version": 2,
  "name": "Tabs, tabs, tabs",
  "permissions": [
    "tabs"
  ],
  "version": "1.0"
}
</pre>

<div class="blockIndicator note">
<p>次のことに注意します:</p>

<ul>
 <li>
  <p><strong>tabs.html は <code>browser_action</code> の <code>default_popup</code> で定義されていること。</strong>これはユーザーが拡張機能のツールバーアイコンをクリックするといつでも表示されます。</p>
 </li>
 <li>
  <p><strong>権限にタブが入っていること。</strong>これはタブリスト機能をサポートするのに必要であり、なぜなら拡張機能がポップアップに表示するためにタブのタイトルを読み取るためです。</p>
 </li>
</ul>
</div>

<h3 id="tabs.html" name="tabs.html">tabs.html</h3>

<p>tabs.html では拡張機能のポップアップのコンテンツを定義します。</p>

<pre class="brush: html">&lt;!DOCTYPE html&gt;

&lt;html&gt;

 &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;link rel="stylesheet" href="tabs.css"/&gt;
 &lt;/head&gt;

&lt;body&gt;

 &lt;div class="panel"&gt;
    &lt;div class="panel-section panel-section-header"&gt;
     &lt;div class="text-section-header"&gt;Tabs-tabs-tabs&lt;/div&gt;
    &lt;/div&gt;

    &lt;a href="#" id="tabs-move-beginning"&gt;Move active tab to the beginning of the window&lt;/a&gt;&lt;br&gt;


…

Define the other menu items
…

    &lt;div class="switch-tabs"&gt;

     &lt;p&gt;Switch to tab&lt;/p&gt;

     &lt;div id="tabs-list"&gt;&lt;/div&gt;

    &lt;/div&gt;
 &lt;/div&gt;

 &lt;script src="tabs.js"&gt;&lt;/script&gt;

&lt;/body&gt;

&lt;/html&gt;
</pre>

<p>上記のまとめとして:</p>

<ol>
 <li>メニュー項目が定義されます。</li>
 <li>タブのリストを入れるため、ID が <code>tabs-list</code> の空の <code>div</code> が定義されます。</li>
 <li>tabs.js が呼ばれます。</li>
</ol>

<h3 id="tabs.js" name="tabs.js">tabs.js</h3>

<p><a href="https://github.com/mdn/webextensions-examples/blob/master/tabs-tabs-tabs/tabs.js">tabs.js</a> では、タブのリストが作られて、ポップアップに追加される方法を見ていきましょう。</p>

<h4 id="Creating_the_popup" name="Creating_the_popup">ポップアップの作成</h4>

<p>まず、tabs.html が読み込まれたとき、<code>listTabs()</code> を実行するイベントハンドラを追加します。:</p>

<pre class="brush: js">document.addEventListener("DOMContentLoaded", listTabs);</pre>

<p><code>listTabs()</code> は最初に <code>getCurrentWindowTabs()</code> を呼び出します。ここで現在のウィンドウ内のタブの {{WebExtAPIRef("tabs.Tab")}} オブジェクトを取得するのに{{WebExtAPIRef("tabs.query")}} が使われます:</p>

<pre class="brush: js">function getCurrentWindowTabs() {
  return browser.tabs.query({currentWindow: true});
}
</pre>

<p>今度は、ポップアップのコンテンツを作成するために <code>ListTabs()</code> が準備できています。</p>

<p>開始するには:</p>

<ol>
 <li><code>tabs-list</code> <code>div</code> を取得。</li>
 <li>文書のフラグメントを作成 (ここにリストが作成される)。</li>
 <li>カウンターをセット。</li>
 <li><code>tabs-list</code> <code>div</code> のコンテンツをクリアする。</li>
</ol>

<pre class="brush: js">function listTabs() {
 getCurrentWindowTabs().then((tabs) =&gt; {
    let tabsList = document.getElementById('tabs-list');
    let currentTabs = document.createDocumentFragment();
    let limit = 5;
    let counter = 0;

    tabsList.textContent = '';
</pre>

<p>次に、それぞれのタブのリンクを作ります:</p>

<ol>
 <li> {{WebExtAPIRef("tabs.Tab")}} オブジェクトからの最初の 5項目でループする。</li>
 <li>各項目ごとに、文書のフラグメントのハイパーリンクを追加する。
  <ul>
   <li>リンクのラベル—つまり、そのテキスト—が、タブのタイトル (ない場合はその ID)を使って、セットされる</li>
   <li>タブの ID を使ってリンクのアドレスがセットされる。</li>
  </ul>
 </li>
</ol>

<pre class="brush: js">    for (let tab of tabs) {
     if (!tab.active &amp;&amp; counter &lt;= limit) {
        let tabLink = document.createElement('a');

        tabLink.textContent = tab.title || tab.id;

       tabLink.setAttribute('href', tab.id);
        tabLink.classList.add('switch-tabs');
        currentTabs.appendChild(tabLink);
     }

     counter += 1;

    }
</pre>

<p>最後に、<code>tabs-list</code> div に文書のフラグメントが書き込まれる:</p>

<pre class="brush: js">    tabsList.appendChild(currentTabs);
  });
}
</pre>

<h4 id="Working_with_the_active_tab" name="Working_with_the_active_tab">アクティブタブを操作する</h4>

<p>関連するもう 1 つの例として、“Alert active tab” インフォオプションがあり、これはアクティブなタブのすべての {{WebExtAPIRef("tabs.Tab")}} オブジェクトのプロパティをアラートにダンプするものです:</p>

<pre class="brush: js"> else if (e.target.id === "tabs-alertinfo") {
   callOnActiveTab((tab) =&gt; {
     let props = "";
     for (let item in tab) {
       props += `${ item } = ${ tab[item] } \n`;
     }
     alert(props);
   });
 }
</pre>

<p><code>callOnActiveTab()</code> では、アクティブなセットを求めて {{WebExtAPIRef("tabs.Tab")}} オブジェクトをループすることで、アクティブなタブを探します:</p>

<pre class="brush: js">document.addEventListener("click", function(e) {
 function callOnActiveTab(callback) {
   getCurrentWindowTabs().then((tabs) =&gt; {
     for (var tab of tabs) {
       if (tab.active) {
         callback(tab, tabs);
       }
     }
   });
 }
}

</pre>

<h2 id="Creating_duplicating_moving_updating_reloading_and_removing_tabs" name="Creating_duplicating_moving_updating_reloading_and_removing_tabs">タブを作成、複製、移動、更新、読み込み、削除する</h2>

<p>Having gathered information about the tabs you’ll most likely want to do something with them—either to offer users features for manipulating and managing tabs or to implement functionality in your extension.</p>

<p>The following functions are available:</p>

<ul>
 <li>create a new tab ({{WebExtAPIRef("tabs.create")}}).</li>
 <li>duplicate a tab ({{WebExtAPIRef("tabs.duplicate")}}).</li>
 <li>remove a tab ({{WebExtAPIRef("tabs.remove")}}).</li>
 <li>move a tab ({{WebExtAPIRef("tabs.move")}}).</li>
 <li>update the tab’s URL—effectively browse to a new page—({{WebExtAPIRef("tabs.update")}}).</li>
 <li>reload the tab’s page ({{WebExtAPIRef("tabs.reload")}}).</li>
</ul>

<div class="blockIndicator note">
<p><strong>NOTE: </strong></p>

<p>These functions all require the ID (or IDs) of the tab they are manipulating:</p>

<ul>
 <li>{{WebExtAPIRef("tabs.duplicate")}}</li>
 <li>{{WebExtAPIRef("tabs.remove")}}</li>
 <li>{{WebExtAPIRef("tabs.move")}}</li>
</ul>

<p>Whereas the following functions will act on the active tab (if no tab ID is provided): </p>

<ul>
 <li>{{WebExtAPIRef("tabs.update")}}</li>
 <li>{{WebExtAPIRef("tabs.reload")}}</li>
</ul>
</div>

<h3 id="How_to_example_2" name="How_to_example_2">方法の実例</h3>

<p>The <a href="https://github.com/mdn/webextensions-examples/tree/master/tabs-tabs-tabs">tabs-tabs-tabs</a> example exercises all of these features except for updating a tab’s URL The way in which these APIs are used is similar, so we’ll look at one of the more involved implementations, that of the “Move active tab to the beginning of the window list” option.</p>

<p>But first, here is a demonstration of the feature in action:</p>

<p>{{EmbedYouTube("-lJRzTIvhxo")}}</p>

<h4 id="manifest.json_2" name="manifest.json_2"><a href="https://github.com/mdn/webextensions-examples/blob/master/tabs-tabs-tabs/manifest.json">manifest.json</a></h4>

<p>None of the functions require a permission to operate, so there are no features in the manifest.json file that need to be highlighted.</p>

<h4 id="tabs.html_2" name="tabs.html_2"><a href="https://github.com/mdn/webextensions-examples/blob/master/tabs-tabs-tabs/tabs.html">tabs.html</a></h4>

<p>tabs.html defines the “menu” displayed in the popup, which includes the “Move active tab to the beginning of the window list” option, with a series of <code>&lt;a&gt;</code> tags grouped by a visual separator. Each menu item is given an ID, which is used in tabs.js to determine which menu item is being requested.</p>

<pre class="brush: html">    &lt;a href="#" id="tabs-move-beginning"&gt;Move active tab to the beginning of the window&lt;/a&gt;&lt;br&gt;
    &lt;a href="#" id="tabs-move-end"&gt;Move active tab to the end of the window&lt;/a&gt;&lt;br&gt;

    &lt;div class="panel-section-separator"&gt;&lt;/div&gt;


    &lt;a href="#" id="tabs-duplicate"&gt;Duplicate active tab&lt;/a&gt;&lt;br&gt;

    &lt;a href="#" id="tabs-reload"&gt;Reload active tab&lt;/a&gt;&lt;br&gt;
    &lt;a href="#" id="tabs-alertinfo"&gt;Alert active tab info&lt;/a&gt;&lt;br&gt;</pre>

<h4 id="tabs.js_2" name="tabs.js_2"><a href="https://github.com/mdn/webextensions-examples/blob/master/tabs-tabs-tabs/tabs.js">tabs.js</a></h4>

<p>To implement the “menu” defined in tabs.html, tabs.js includes a listener for clicks in tabs.html:</p>

<pre class="brush: js">document.addEventListener("click", function(e) {
 function callOnActiveTab(callback) {

   getCurrentWindowTabs().then((tabs) =&gt; {
     for (var tab of tabs) {
       if (tab.active) {
         callback(tab, tabs);
       }
     }
   });
}
}
</pre>

<p>A series of <code>if</code> statements then look to match the ID of the item clicked.</p>

<p>This code snippet is for the “Move active tab to the beginning of the window list” option:</p>

<pre class="brush: js"> if (e.target.id === "tabs-move-beginning") {
   callOnActiveTab((tab, tabs) =&gt; {
     var index = 0;
     if (!tab.pinned) {
       index = firstUnpinnedTab(tabs);
     }
     console.log(`moving ${tab.id} to ${index}`)
     browser.tabs.move([tab.id], {index});
   });
 }
</pre>

<p>It's worth noting the use of <code>console.log()</code>. This enables you to output information to the <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Debugging">debugger</a> console, which can be useful when resolving issues found during development.</p>

<p><img alt="Example of the console.log output, from the move tabs feature, in the debugging console" src="https://mdn.mozillademos.org/files/15722/console.png" style="height: 329px; width: 911px;"></p>

<p>The move code first calls <code>callOnActiveTab()</code> which in turn calls <code>getCurrentWindowTabs()</code> to get a {{WebExtAPIRef("tabs.Tab")}} object containing the active window’s tabs. It then loops through the object to find and return the active tab object:</p>

<pre class="brush: js"> function callOnActiveTab(callback) {
   getCurrentWindowTabs().then((tabs) =&gt; {
     for (var tab of tabs) {
       if (tab.active) {
         callback(tab, tabs);
       }
     }
   });
 }
</pre>

<h5 id="Pinned_tabs" name="Pinned_tabs">ピン止めされたタブ</h5>

<p>A feature of tabs is that the user can <dfn>pin</dfn> tabs in a window. Pinned tabs are placed at the start of the tab list and cannot be moved. This means that the earliest position a tab can move to is the first position after any pinned tabs. So, <code>firstUnpinnedTab()</code> is called to find the position of the first unpinned tab by looping through the <code>tabs</code> object:</p>

<pre class="brush: js">function firstUnpinnedTab(tabs) {
 for (var tab of tabs) {
   if (!tab.pinned) {
     return tab.index;
   }
 }
}
</pre>

<p>We now have everything needed to move the tab: the active tab object from which we can get the tab ID and the position the tab is to be moved to. So, we can implement the move:</p>

<pre class="brush: js">     browser.tabs.move([tab.id], {index});</pre>

<p>The remaining functions to duplicate, reload, create, and remove tabs are implemented similarly.</p>

<h2 id="タブのズームレベルを操作する">タブのズームレベルを操作する</h2>

<p>The next set of functions enable you to get ({{WebExtAPIRef("tabs.getZoom")}}) and set ({{WebExtAPIRef("tabs.setZoom")}}) the zoom level within a tab. You can also retrieve the zoom settings ({{WebExtAPIRef("tabs.getZoomSettings")}}) but, at the time of writing, the ability to set the settings ({{WebExtAPIRef("tabs.setZoomSettings")}}) wasn’t available in Firefox.</p>

<p>The level of zoom can be between 30% and 300% (represented as decimals <code>0.3</code> to <code>3</code>).</p>

<p>In Firefox the default zoom settings are:</p>

<ul>
 <li><strong>default zoom level: </strong>100%.</li>
 <li><strong>zoom mode:</strong> automatic (so the browser manages how zoom levels are set).</li>
 <li><strong>scope of zoom changes:</strong> <code>"per-origin"</code>, meaning that when you visit a site again, it takes the zoom level set in your last visit.</li>
</ul>

<h3 id="How_to_example_3" name="How_to_example_3">方法の実例</h3>

<p>The <a href="https://github.com/mdn/webextensions-examples/tree/master/tabs-tabs-tabs">tabs-tabs-tabs</a> example includes three demonstrations of the zoom feature: zoom in, zoom out, and reset zoom. Here is the feature in action:</p>

<p>{{EmbedYouTube("RFr3oYBCg28")}}</p>

<p>Let’s take a look at how the zoom in is implemented.</p>

<h4 id="manifest.json_3" name="manifest.json_3"><a href="https://github.com/mdn/webextensions-examples/blob/master/tabs-tabs-tabs/manifest.json">manifest.json</a></h4>

<p>None of the zoom functions require permissions, so there are no features in the manifest.json file that need to be highlighted.</p>

<h4 id="tabs.html_3" name="tabs.html_3"><a href="https://github.com/mdn/webextensions-examples/blob/master/tabs-tabs-tabs/tabs.html">tabs.html</a></h4>

<p>We have already discussed how the tabs.html defines the options for this extension, nothing new or unique is done to provide the zoom options.</p>

<h4 id="tabs.js_3" name="tabs.js_3"><a href="https://github.com/mdn/webextensions-examples/blob/master/tabs-tabs-tabs/tabs.js">tabs.js</a></h4>

<p>tabs.js starts by defining several constants used in the zoom code:</p>

<pre class="brush: js">const ZOOM_INCREMENT = 0.2;
const MAX_ZOOM = 3;
const MIN_ZOOM = 0.3;
const DEFAULT_ZOOM = 1;
</pre>

<p>It then uses the same listener we discussed earlier so it can act on clicks in tabs.html.</p>

<p>For the zoom in feature, this runs:</p>

<pre class="brush: js"> else if (e.target.id === "tabs-add-zoom") {
   callOnActiveTab((tab) =&gt; {
     var gettingZoom = browser.tabs.getZoom(tab.id);
     gettingZoom.then((zoomFactor) =&gt; {
       //the maximum zoomFactor is 3, it can't go higher
       if (zoomFactor &gt;= MAX_ZOOM) {
         alert("Tab zoom factor is already at max!");
       } else {
         var newZoomFactor = zoomFactor + ZOOM_INCREMENT;
         //if the newZoomFactor is set to higher than the max accepted
         //it won't change, and will never alert that it's at maximum
         newZoomFactor = newZoomFactor &gt; MAX_ZOOM ? MAX_ZOOM : newZoomFactor;
         browser.tabs.setZoom(tab.id, newZoomFactor);
       }
     });
   });
 }
</pre>

<p>This code uses <code>callOnActiveTab()</code> to get the details of the active tab, then {{WebExtAPIRef("tabs.getZoom")}} gets the tab’s current zoom factor. The current zoom is compared to the defined maximum (<code>MAX_ZOOM</code>) and an alert issued if the tab is already at the maximum zoom. Otherwise, the zoom level is incremented but limited to the maximum zoom, then the zoom is set with {{WebExtAPIRef("tabs.getZoom")}}.</p>

<h2 id="タブの_CSS_を操作する">タブの CSS を操作する</h2>

<p>Another significant capability offered by the Tabs API is the ability to manipulate the CSS within a tab—add new CSS to a tab ({{WebExtAPIRef("tabs.insertCSS")}}) or remove CSS from a tab ({{WebExtAPIRef("tabs.removeCSS")}}).</p>

<p>This can be useful, 例えば、 if you want to highlight certain page elements or change the default layout of the page.</p>

<h3 id="How_to_example_4" name="How_to_example_4">方法の実例</h3>

<p>The <a href="https://github.com/mdn/webextensions-examples/tree/master/apply-css">apply-css</a> example uses these features to add a red border to the web page in the active tab. Here is the feature in action:</p>

<p>{{EmbedYouTube("bcK-GT2Dyhs")}}</p>

<p>Let’s walk through how it’s set up.</p>

<h4 id="manifest.json_4" name="manifest.json_4"><a href="https://github.com/mdn/webextensions-examples/blob/master/apply-css/manifest.json">manifest.json</a></h4>

<p>To use the CSS features you need either:</p>

<ul>
 <li><code>"tabs"</code> permission and <a href="/ja/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions">host permission</a> or</li>
 <li><code>"activeTab"</code> permission.</li>
</ul>

<p>The latter is the most useful, as it allows an extension to use {{WebExtAPIRef("tabs.insertCSS")}} and {{WebExtAPIRef("tabs.removeCSS")}} in the active tab when run from the extension’s browser or page action, context menu, or a shortcut.</p>

<pre class="brush: json">{
  "description": "Adds a page action to toggle applying CSS to pages.",

 "manifest_version": 2,
 "name": "apply-css",
 "version": "1.0",
 "homepage_url": "https://github.com/mdn/webextensions-examples/tree/master/apply-css",

 "background": {

    "scripts": ["background.js"]
 },

 "page_action": {

    "default_icon": "icons/off.svg",
    "browser_style": true
 },

 "permissions": [
    "activeTab",
    "tabs"
 ]

}
</pre>

<p>You will note that <code>"tabs"</code> permission is requested in addition to <code>"activeTab"</code>. This additional permission is needed to enable the extension’s script to access the tab’s URL, the importance of which we’ll see in a moment.</p>

<p>The other main features in the manifest.json file are the definition of:</p>

<ul>
 <li><strong>a background script</strong>, which starts running as soon as the extension is loaded.</li>
 <li><strong>a “page action”</strong>, which defines an icon to be added to the browser’s address bar.</li>
</ul>

<h4 id="background.js" name="background.js"><a href="https://github.com/mdn/webextensions-examples/blob/master/apply-css/background.js">background.js</a></h4>

<p>On startup, background.js sets some constants to define the CSS to be applied, titles for the “page action”, and a list of protocols the extension will work in:</p>

<pre class="brush: js">const CSS = "body { border: 20px solid red; }";
const TITLE_APPLY = "Apply CSS";
const TITLE_REMOVE = "Remove CSS";
const APPLICABLE_PROTOCOLS = ["http:", "https:"];
</pre>

<p>When first loaded, the extension uses {{WebExtAPIRef("tabs.query")}} to get a list of all the tabs in the current browser window. It then loops through the tabs calling <code>initializePageAction()</code>.</p>

<pre class="brush: js">var gettingAllTabs = browser.tabs.query({});

gettingAllTabs.then((tabs) =&gt; {
 for (let tab of tabs) {
   initializePageAction(tab);
 }
});
</pre>

<p><code>initializePageAction</code> uses <code>protocolIsApplicable()</code> to determine whether the active tab’s URL is one the CSS can be applied to:</p>

<pre class="brush: js">function protocolIsApplicable(url) {
 var anchor =  document.createElement('a');
 anchor.href = url;
 return APPLICABLE_PROTOCOLS.includes(anchor.protocol);
}
</pre>

<p>Then, if the example can act on the tab, <code>initializePageAction()</code> sets the tab’s <code>pageAction</code> (navigation bar) icon and title to use the “off” versions before making the <code>pageAction</code> visible:</p>

<pre class="brush: js">function initializePageAction(tab) {

 if (protocolIsApplicable(tab.url)) {
   browser.pageAction.setIcon({tabId: tab.id, path: "icons/off.svg"});
   browser.pageAction.setTitle({tabId: tab.id, title: TITLE_APPLY});
   browser.pageAction.show(tab.id);
 }
}
</pre>

<p>Next, a listener on <code>pageAction.onClicked</code> waits for the <code>pageAction</code> icon to be clicked, and calls <code>toggleCSS</code> when it is.</p>

<pre class="brush: js">browser.pageAction.onClicked.addListener(toggleCSS);</pre>

<p><code>toggleCSS()</code> gets the title of the <code>pageAction</code> and then takes the action described:</p>

<ul>
 <li><strong>For "Apply CSS”:</strong>

  <ul>
   <li>toggles the <code>pageAction</code> icon and title to the “remove” versions.</li>
   <li>applies the CSS using {{WebExtAPIRef("tabs.insertCSS")}}.</li>
  </ul>
 </li>
 <li><strong>For “Remove CSS”:</strong>
  <ul>
   <li>toggles the <code>pageAction</code> icon and title to the “apply” versions.</li>
   <li>removes the CSS using {{WebExtAPIRef("tabs.removeCSS")}}.</li>
  </ul>
 </li>
</ul>

<pre class="brush: js">function toggleCSS(tab) {


 function gotTitle(title) {

    if (title === TITLE_APPLY) {
     browser.pageAction.setIcon({tabId: tab.id, path: "icons/on.svg"});
     browser.pageAction.setTitle({tabId: tab.id, title: TITLE_REMOVE});
     browser.tabs.insertCSS({code: CSS});
    } else {
     browser.pageAction.setIcon({tabId: tab.id, path: "icons/off.svg"});
     browser.pageAction.setTitle({tabId: tab.id, title: TITLE_APPLY});
     browser.tabs.removeCSS({code: CSS});
    }
 }

 var gettingTitle = browser.pageAction.getTitle({tabId: tab.id});

 gettingTitle.then(gotTitle);
}
</pre>

<p>Finally, to ensure that the <code>pageAction</code> is valid after each update to the tab, a listener on {{WebExtAPIRef("tabs.onUpdated")}} calls <code>initializePageAction()</code> each time the tab is updated to check that the tab is still using a protocol to which the CSS can be applied.</p>

<pre class="brush: js">browser.tabs.onUpdated.addListener((id, changeInfo, tab) =&gt; {
 initializePageAction(tab);
});
</pre>

<h2 id="Some_other_interesting_abilities" name="Some_other_interesting_abilities">その他の興味深い機能</h2>

<p>There are a couple of other Tabs API features that don’t fit into one of the earlier sections:</p>

<ul>
 <li>Capture the visible tab content with {{WebExtAPIRef("tabs.captureVisibleTab")}}.</li>
 <li>Detect the primary language of the content in a tab using {{WebExtAPIRef("tabs.detectLanguage")}}. This could be used, 例えば、to match the language in your extension’s UI with that of the page it’s running in.</li>
</ul>

<h2 id="Learn_more" name="Learn_more">関連項目</h2>

<p>If you want to learn more about the Tabs API, check out:</p>

<ul>
 <li><a href="/ja/Add-ons/WebExtensions/API/tabs">Tabs API reference</a></li>
 <li><a href="/ja/Add-ons/WebExtensions/Examples">Example extensions</a> (many of which use the Tabs API)</li>
</ul>
