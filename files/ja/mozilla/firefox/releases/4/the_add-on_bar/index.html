---
title: アドオンバー
slug: Mozilla/Firefox/Releases/4/The_add-on_bar
tags:
  - Add-ons
  - Extensions
  - Firefox 4
  - Toolbar
  - 要更新
translation_of: Mozilla/Firefox/Releases/4/The_add-on_bar
original_slug: The_add-on_bar
---
<p>Firefox 4 よりウィンドウの下部に新しいツールバーを実装する為、ブラウザウィンドウの下部からステータスバーが削除されます。この新しいツールバーは ID "addon-bar" を持った、標準の XUL {{XULElem("toolbar")}} です。アドオンはこのバーにコンテンツを挿入することが可能であり、また、ユーザーはツールバーのカスタマイズ中にボタンをアドオンバーにドラッグすることができます。これがアドオンバーと旧ステータスバーの間の主な相違点です。標準のツールバーであるため、どの XUL 要素でもアドオンバーに配置することができます。</p>
<div class="note">
  <strong>注記:</strong> 当面は、Firefox にはステータスバーが存在することを期待するアドオンがうまく動作するようにするためのシムが噛ませてあります。但しこれは一時的な措置であり、じきに削除されます。アドオンをアップデートしてください。</div>
<h2 id="Adding_an_element_to_the_add-on_bar" name="Adding_an_element_to_the_add-on_bar">アドオンバーに要素を加える</h2>
<p>アドオンバーは ID "addon-bar" を持つ XUL ツールバーです。次のコードは、一番最近使われたウィンドウを探し出し、XUL {{XULElem("label")}} 要素を用いて単に "Hello world!" のテキストを表示する新しいアイテムをアドオンバーに加えます。</p>
<pre class="brush:js">// 一番最近使われたウィンドウを探す

var mediator = Components.classes['@mozilla.org/appshell/window-mediator;1']
                  .getService(Components.interfaces.nsIWindowMediator);
var doc = mediator.getMostRecentWindow("navigator:browser").document;

// そのウィンドウのアドオンバーを取得する
var addonBar = doc.getElementById("addon-bar");

// 新しいツールバーアイテムを構築する
var newItem = doc.createElement("toolbaritem");
var itemLabel = doc.createElement("label");

// アイテムをツールバーに追加しテキストラベルをセットする
newItem.appendChild(itemLabel);
addonBar.appendChild(newItem);
itemLabel.value = "Hello world!";
</pre>
<p>To add the button only once create a bool pref to check if it is the first run. <a class="external" href="http://stackoverflow.com/questions/4978188/how-do-i-detect-a-first-run-in-firefox-a-addon/4978512#4978512">For example</a>:</p>
<pre class="brush: js">var firstrun = Services.prefs.getBoolPref("extensions.YOUREXT.firstrun");

var curVersion = "0.0.0";

if (firstrun) {
  Services.prefs.setBoolPref("extensions.YOUREXT.firstrun", false);
  Services.prefs.setCharPref("extensions.YOUREXT.installedVersion", curVersion);
  /* Code related to firstrun */
} else {
  try {
    var installedVersion = Services.prefs.getCharPref("extensions.YOUREXT.installedVersion");
    if (curVersion &gt; installedVersion) {
      Services.prefs.setCharPref("extensions.YOUREXT.installedVersion", curVersion);
      /* Code related to upgrade */
    }
  } catch (ex) {
    /* Code related to a reinstall */
  }
}
</pre>
<h2 id="How_to_use_one_overlay_per_Firefox_version" name="How_to_use_one_overlay_per_Firefox_version">Firefox の各バージョンでのオーバーレイの使用方法</h2>
<p>Firefox 3.6 とそれ以前のバージョンとの互換性を保持したままアドオンバーのサポートを追加するには、2 つのオーバーレイを使用する必要があります。<br>
  The <a href="/ja/docs/Chrome_Registration">chrome.manifest</a> file can specify which file is used by which Firefox version by using <a href="/ja/docs/Chrome_Registration#Manifest_flags">manifest flags</a>:</p>
<pre><span id="the-code">overlay <a href="http://mxr.mozilla.org/services-central/search?string=browser&amp;find=contents.rdf">chrome://</a><a href="http://mxr.mozilla.org/services-central/search?string=browser&amp;find=chrome%5C.manifest">browser/</a><a href="http://mxr.mozilla.org/services-central/search?string=browser&amp;find=chrome%5C.manifest&amp;filter=content">content</a><a href="http://mxr.mozilla.org/services-central/find?string=/browser.xul&amp;hint=browser/fx-sync/addon/chrome.manifest.in">/browser.xul</a> <a href="http://mxr.mozilla.org/services-central/search?string=weave&amp;find=contents.rdf">chrome://</a><a href="http://mxr.mozilla.org/services-central/search?string=weave&amp;find=chrome%5C.manifest">myaddon/</a><a href="http://mxr.mozilla.org/services-central/search?string=weave&amp;find=chrome%5C.manifest&amp;filter=content">content</a><a href="http://mxr.mozilla.org/services-central/find?string=/overlay.xul&amp;hint=weave/firefox/fx-sync/addon/chrome.manifest.in">/</a></span><a href="http://mxr.mozilla.org/services-central/search?string=weave&amp;find=chrome%5C.manifest">myaddon</a><span id="the-code"><a href="http://mxr.mozilla.org/services-central/find?string=/overlay.xul&amp;hint=weave/firefox/fx-sync/addon/chrome.manifest.in">/overlayold.xul</a> application={ec8030f7-c20a-464f-9b0e-13a3a9e97384} appversion&lt;4.0</span>
<span id="the-code">overlay <a href="http://mxr.mozilla.org/services-central/search?string=browser&amp;find=contents.rdf">chrome://</a><a href="http://mxr.mozilla.org/services-central/search?string=browser&amp;find=chrome%5C.manifest">browser/</a><a href="http://mxr.mozilla.org/services-central/search?string=browser&amp;find=chrome%5C.manifest&amp;filter=content">content</a><a href="http://mxr.mozilla.org/services-central/find?string=/browser.xul&amp;hint=browser/fx-sync/addon/chrome.manifest.in">/browser.xul</a> <a href="http://mxr.mozilla.org/services-central/search?string=weave&amp;find=contents.rdf">chrome://</a><a href="http://mxr.mozilla.org/services-central/search?string=weave&amp;find=chrome%5C.manifest">myaddon/</a><a href="http://mxr.mozilla.org/services-central/search?string=weave&amp;find=chrome%5C.manifest&amp;filter=content">content</a><a href="http://mxr.mozilla.org/services-central/find?string=/overlay.xul&amp;hint=weave/firefox/fx-sync/addon/chrome.manifest.in">/</a></span><a href="http://mxr.mozilla.org/services-central/search?string=weave&amp;find=chrome%5C.manifest">myaddon</a><span id="the-code"><a href="http://mxr.mozilla.org/services-central/find?string=/overlay.xul&amp;hint=weave/firefox/fx-sync/addon/chrome.manifest.in">/overlay.xul</a> application={ec8030f7-c20a-464f-9b0e-13a3a9e97384} appversion&gt;=4.0</span>
</pre>
<p>注記: the appversion has to be at least 2 digits long or it won't work with versions of Gecko before 1.8.0.13 and 1.8.1.5.</p>
<h3 id="Adding_a_button_by_default" name="Adding_a_button_by_default">デフォルトでボタンを追加</h3>
<p>参照 : <a href="/ja/docs/Code_snippets/Toolbar#Adding_button_by_default">Adding a button by default</a></p>
<h2 id="Appearance_differences" name="Appearance_differences">見た目の違い</h2>
<ul>
  <li>ブラウザーがステータス情報によりバー領域の大半を占拠することがなくなるので、すべての領域をアドオンが使えるようになります。</li>
  <li>既定ではアドオンバーは空 (empty) であり、隠されています (hidden) 。ユーザーがこれを可視状態にするには、明示的にそうしなければなりません。</li>
  <li>再起動不要のアドオンがアドオンバーに直接インストールされたとき、アドオンバーが可視でなければアドオンバーは自動的に可視になります。</li>
  <li>再起動不要のアドオンがアンインストールされてアドオンバー内のアイテムの数がゼロになったときには、アドオンバーは自動的に隠されます。</li>
</ul>
<h2 id="See_also" name="See_also">関連情報</h2>
<ul>
  <li><a class="external" href="http://mike.kaply.com/2011/01/25/the-firefox-4-add-on-bar-for-developers">Firefox 4 add-on bar for developers</a> by Mike Kaply</li>
</ul>
