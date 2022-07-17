---
title: 为 Firefox 3 升级扩展
slug: Mozilla/Firefox/Releases/3/Updating_extensions
tags:
  - Firefox 3
translation_of: Mozilla/Firefox/Releases/3/Updating_extensions
original_slug: Updating_extensions_for_Firefox_3
---
{{FirefoxSidebar}}

<p>英文原文取自于 <a href="/en/docs/Extensions">http://developer.mozilla.org/en/docs/Extensions</a>  这篇文章将对于那些想把他们的扩展在 Firefox 3 中正常运行的开发者提供一些有用的信息。</p>

<p>在进入主题之前，首先要提示一下：如果你的扩展所需要的唯一改变只是安装文件中的<code>maxVersion</code>信息，并且你的扩展所在的主机是<a href="https://addons.mozilla.org">addons.mozilla.org</a>，事实上你不需要上传你的新的版本的扩展！只需要在 AMO 中使用开发者控制面板调整<code>maxVersion</code>。通过这种方式你可以避免你的扩展被再次审核。</p>

<h3 id=".E7.AC.AC.E4.B8.80.E6.AD.A5_.E5.8D.87.E7.BA.A7.E5.AE.89.E8.A3.85.E6.96.87.E4.BB.B6">第一步：升级安装文件</h3>

<p>第一步，当然，对于大多数的扩展也仅需要这一步——更新安装文件<code>install.rdf</code>，声明扩展兼容 Firefox 3。</p>

<p>找到声明兼容的最大版本号的那一行（对于 Firefox2，如下）：</p>

<pre class="eval"> &lt;em:maxVersion&gt;2.0.*&lt;/em:maxVersion&gt;
</pre>

<p>对于 Firefox 3，如下：</p>

<pre class="eval"> &lt;em:maxVersion&gt;3.0.*&lt;/em:maxVersion&gt;
</pre>

<p>然后重新安装扩展。</p>

<p>注意，在 Firefox3 的本版号中没有额外的“.0”，所以请使用“3.0.*”，而非“3.0.0.*”。</p>

<div class="blockIndicator note"><p><strong>备注：</strong> Note that at this point more changes in Firefox 3 are expected. These changes may break some extensions, so you shouldn't release an extension with <code>3.0.*</code> <code>maxVersion</code> to the users until the Firefox 3 release candidate is out. During the Firefox 3 Beta period, you should use <code>3.0b5</code> as your <code>maxVersion</code>.</p></div>

<p>There have been (and will continue to be) a number of API changes that will likely break some extensions. We're still working on compiling a complete list of these changes.</p>

<div class="blockIndicator note"><p><strong>备注：</strong> If your extension still uses an <code><a href="cn/Install.js">Install.js</a></code> script instead of an <a href="">install manifest</a>, you need to make the transition to an install manifest now. Firefox 3 no longer supports <code>install.js</code> scripts in XPI files.</p></div>

<h4 id="Add_localizations_to_the_install_manifest">Add localizations to the install manifest</h4>

<p>Firefox 3 supports new properties in the install manifest to specify localized descriptions. The old methods still work however the new allow Firefox to pick up the localizations even when the add-on is disabled and pending install. See <a href="/cn/Localizing_extension_descriptions">Localizing extension descriptions</a> for more details.</p>

<h3 id="Step_2_.E7.A1.AE.E4.BF.9D.E6.8F.90.E4.BE.9B.E5.AE.89.E5.85.A8.E7.9A.84.E6.9B.B4.E6.96.B0">Step 2: 确保提供安全的更新</h3>

<p>If you are hosting addons yourself and not on a secure add-on hosting provider like <a href="https://addons.mozilla.org">addons.mozilla.org</a> then you must provide a secure method of updating your add-on. This will either involve hosting your updates on an SSL website, or using cryptographic keys to sign the update information. Read <a href="/cn/Extension_Versioning,_Update_and_Compatibility#Securing_Updates">Securing Updates</a> for more information.</p>

<h3 id="Step_3_Deal_with_changed_APIs">Step 3: Deal with changed APIs</h3>

<p>Several APIs have been changed in significant ways. The most significant of these, which will likely affect a large number of extensions, are:</p>

<h4 id="DOM">DOM</h4>


<p>将外部文档的节点插入当前文档之前，你必须使用 <a href="/zh-CN/docs/Web/API/Document/importNode"><code>document.importNode()</code></a> 从外部文档导入源节点，或者使用 <a href="/zh-CN/docs/Web/API/Document/adoptNode"><code>document.adoptNode()</code></a>导入源节点，
    想要了解更多的 <a href="/zh-CN/docs/Web/API/Node/ownerDocument"><code>Node.ownerDocument</code></a> 问题，请参考 <a href="http://www.w3.org/DOM/faq.html#ownerdoc">W3C DOM FAQ</a>.</p>

    <p>即使你不执行导入动作，就执行插入外部文档中的节点.Firefox 目前也不会报错 (如果严格按标准执行，很多已有的网站都无法正常运行).
    我们鼓励开发者严格按标准修改自己已有的不符合上述标准的代码。</p>

<h4 id="Bookmarks__History">Bookmarks &amp; History</h4>

<p>If your extension accesses bookmark or history data in any way, it will need substantial work to be compatible with Firefox 3. The old APIs for accessing this information have been replaced by the new <a href="/cn/Places">Places</a> architecture. See the <a href="/cn/Places_migration_guide">Places migration guide</a> for details on updating your existing extension to use the Places API.</p>

<h4 id="Download_Manager">Download Manager</h4>

<p>The Download Manager API has changed slightly due to the transition from an RDF data store to using the <a href="/cn/Storage">Storage</a> API. This should be a pretty easy transition to make. In addition, the API for monitoring download progress has changed to support multiple download manager listeners. See <code><a href="/zh-CN/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDownloadManager">nsIDownloadManager</a></code>, <code><a href="/zh-CN/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDownloadProgressListener">nsIDownloadProgressListener</a></code>, and <a href="/cn/Monitoring_downloads">Monitoring downloads</a> for more information.</p>

<h4 id="Password_Manager">Password Manager</h4>

<p>If your extension accesses user login information using the Password Manager, it will need to be updated to use the new Login Manager API.</p>

<ul>
 <li>The article <a href="/cn/Using_nsILoginManager">Using nsILoginManager</a> includes examples, including a demonstration of how to write your extension to work with both the Password Manager and the Login Manager, so it will work with both Firefox 3 and earlier versions.</li>
 <li><code><a href="/cn/NsILoginInfo">nsILoginInfo</a></code></li>
 <li><code><a href="/cn/NsILoginManager">nsILoginManager</a></code></li>
</ul>

<p>You can also override the built-in password manager storage if you want to provide your own password storage implementation in your extensions. See <a href="/cn/Creating_a_Login_Manager_storage_module">Creating a Login Manager storage module</a> for details.</p>

<h4 id="Popups_.28Menus.2C_Context_Menus.2C_Tooltips_and_Panels.29">Popups (Menus, Context Menus, Tooltips and Panels)</h4>

<p>The XUL Popup system was heavily modified in Firefox 3. The Popup system includes main menus, context menus and popup panels. A guide to <a href="/cn/XUL/PopupGuide">using Popups</a> has been created, detailing how the system works. One thing to note is that <code>popup.<code><a href="/zh-CN/docs/Mozilla/Tech/XUL/Method/showPopup">showPopup</a></code></code> has been deprecated in favor of new <code>popup.<code><a href="/zh-CN/docs/Mozilla/Tech/XUL/Method/openPopup">openPopup</a></code></code> and <code>popup.<code><a href="/zh-CN/docs/Mozilla/Tech/XUL/Method/openPopupAtScreen">openPopupAtScreen</a></code></code>.</p>

<h4 id="Autocomplete">Autocomplete</h4>

<p>The <code><a href="/zh-CN/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIAutoCompleteController">nsIAutoCompleteController</a></code> interface's <code><a href="/cn/NsIAutoCompleteController#handleEnter.28.29">handleEnter()</a></code> method has been changed to accept an argument that indicates whether the text was selected from the autocomplete popup or by the user pressing enter after typing text.</p>

<h4 id="DOMParser">DOMParser</h4>

<ul>
 <li>When a <code>DOMParser</code> is instantiated, it inherits the calling code's principal and the <code>documentURI</code> and <code>baseURI</code> of the window the constructor came from.</li>
 <li>If the caller has UniversalXPConnect privileges, it can pass parameters to <code>new DOMParser()</code>. If fewer than three parameters are passed, the remaining parameters will default to <code>null</code>.
  <ul>
   <li>The first parameter is the principal to use; this overrides the default principal normally inherited.</li>
   <li>The second parameter is the <code>documentURI</code> to use.</li>
   <li>The third parameter is the <code>baseURI</code> to use.</li>
  </ul>
 </li>
 <li>If you initialize a <code>DOMParser</code> using a contract, such as by calling <code>createInstance()</code>, and you don't call the <code>DOMParser</code>'s <code>init()</code> method, attempting to initiate a parsing operation will automatically create and initialize the <code>DOMParser</code> with a null principal and <code>null</code> pointers for <code>documentURI</code> and <code>baseURI</code>.</li>
</ul>

<h4 id="Removed_interfaces">Removed interfaces</h4>

<p>The following interfaces were removed from Gecko 1.9, which drives Firefox 3. If your extension makes use of any of these, you'll need to update your code:</p>

<ul>
 <li><code>nsIDOMPaintListener</code></li>
 <li><code>nsIDOMScrollListener</code></li>
 <li><code>nsIDOMMutationListener</code></li>
 <li><code>nsIDOMPageTransitionListener</code></li>
 <li><code>nsICloseAllWindows</code> (see <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=386200">bug 386200</a>)</li>
</ul>

<h3 id="Step_4_Check_for_relevant_chrome_changes">Step 4: Check for relevant chrome changes</h3>

<p>There has been a minor change to the chrome that may require changes in your code. A new <code>vbox</code> has been added, called "browser-bottombox", which encloses the find bar and status bar at the bottom of the browser window. Although this doesn't affect the appearance of the display, it may affect your extension if it overlays chrome relative to these elements.</p>

<p>For example, if you previously overlaid some chrome before the status bar, like this:</p>

<pre>&lt;window id="main-window"&gt;
  &lt;something insertbefore="status-bar" /&gt;
&lt;/window&gt;
</pre>

<p>You should now overlay it like this:</p>

<pre>&lt;vbox id="browser-bottombox"&gt;
  &lt;something insertbefore="status-bar" /&gt;
&lt;/vbox&gt;
</pre>

<p>Or use the following technique to make your overlay work on both Firefox 2 and Firefox 3:</p>

<pre>&lt;window id="main-window"&gt;
  &lt;vbox id="browser-bottombox" insertbefore="status-bar"&gt;
    &lt;something insertbefore="status-bar" /&gt;
  &lt;/vbox&gt;
&lt;/window&gt;
</pre>

<div class="blockIndicator note"><p><strong>备注：</strong> This change is effective for Firefox 3 beta 4 and the pre-beta 4 nightlies.</p></div>

<h3 id="Other_changes">其他方面的修改</h3>

<p><em>Add simple changes you had to make while updating your extension to work with Firefox 3 here.</em></p>

<ul>
 <li><code><a class="external" rel="freelink">chrome://browser/base/utilityOverlay.js</a></code> is no longer supported for security reasons. If you were previously using this, you should switch to <code><a class="external" rel="freelink">chrome://browser/content/utilityOverlay.js</a></code>.</li>
 <li><code><a href="/zh-CN/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIAboutModule">nsIAboutModule</a></code> implementations are now required to support the <code>getURIFlags</code> method. See <a href="https://dxr.mozilla.org/mozilla-central/source/netwerk/protocol/about/public/nsIAboutModule.idl">nsIAboutModule.idl</a> for documentation. This affects extensions that provide new <code>about:</code> URIs. (<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=337746">bug 337746</a>)</li>
 <li>The <code><a href="/zh-CN/docs/Mozilla/Tech/XUL/tabbrowser">tabbrowser</a></code> element is no longer part of "toolkit" (<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=339964">bug 339964</a>). This means this element is no longer available to XUL applications and extensions. It continues to be used in the main Firefox window (browser.xul).</li>
 <li>Changes to <a href="/cn/NsISupports_proxies">nsISupports proxies</a> and possibly to threading-related interfaces need to be documented.</li>
 <li>If you use XML processing instructions, such as <code>&lt;?xml-stylesheet ?&gt;</code> in your XUL files, be aware of the changes made in <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=319654">bug 319654</a>:
  <ol>
   <li>XML PIs are now added to a XUL document's DOM. This means <a href="/zh-CN/docs/Web/API/Document/firstChild"><code>document.firstChild</code></a> is no longer guaranteed to be the root element. If you need to get the root document in your script, use <a href="/zh-CN/docs/Web/API/Document/documentElement"><code>document.documentElement</code></a> instead.</li>
   <li><code>&lt;?xml-stylesheet ?&gt;</code> and <code>&lt;?xul-overlay ?&gt;</code> processing instructions now have no effect outside the document prolog.</li>
  </ol>
 </li>
 <li><code>window.addEventListener("load", myFunc, true)</code> is not fired when loading web content (browser page loads). This is due to <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=296639">bug 296639</a> which changes the way inner and outer windows communicate. The simple fix here is to use <code>gBrowser.addEventListener("load", myFunc, true)</code> as described <a href="/cn/Code_snippets/Tabbed_browser#Detecting_page_load">here</a> and works in Firefox 2 as well.</li>
 <li><code>content.window.getSelection()</code> gives an object (which can be converted to a string by <code>toString()</code>), unlike the now deprecated <code>content.document.getSelection()</code> which returns a string</li>
 <li><code>event.preventBubble()</code> was deprecated in Firefox 2 and has been removed in Firefox 3. Use <a href="/cn/DOM/event.stopPropagation"><code>event.stopPropagation()</code></a>, which works in Firefox 2 as well.</li>
 <li>Timers that are initiated using <code>setTimeout()</code> are now blocked by modal windows due to the fix made for <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=52209">bug 52209</a>. You may use <code>nsITimer</code> instead.</li>
 <li>If your extension needs to allow an untrusted source (e.g., a web site) to access the extension's chrome, then you must use the new <a href="/cn/Chrome_Registration#contentaccessible"><code>contentaccessible</code> flag</a>.</li>
</ul>
