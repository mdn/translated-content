---
title: Firefox 3.6 技術文件
slug: Mozilla/Firefox/Releases/3.6
translation_of: Mozilla/Firefox/Releases/3.6
---
{{FirefoxSidebar}}

<p><a href="http://www.firefox.com/">Firefox 3.6</a> offers support for new and developing web standards, increased performance, and an overall better experience for web users and developers. This page provides links to articles covering the new capabilities of Firefox 3.6.</p>

<h2 id="For_web_site_and_application_developers">For web site and application developers</h2>

<h3 id="CSS">CSS</h3>

<dl>
 <dt><a href="/en-US/docs/CSS/Using_CSS_gradients">Using gradients</a></dt>
 <dd>Firefox 3.6 adds support for the proposed <a href="/zh-TW/docs/Web/CSS/-moz-linear-gradient"><code>-moz-linear-gradient</code></a> and <a href="/zh-TW/docs/Web/CSS/-moz-radial-gradient"><code>-moz-radial-gradient</code></a> properties for <a href="/zh-TW/docs/Web/CSS/background"><code>background</code></a>.</dd>
 <dt><a href="/en-US/docs/CSS/Multiple_backgrounds">Multiple backgrounds</a></dt>
 <dd>The <a href="/zh-TW/docs/Web/CSS/background"><code>background</code></a> property (as well as <a href="/zh-TW/docs/Web/CSS/background-color"><code>background-color</code></a>, <a href="/zh-TW/docs/Web/CSS/background-image"><code>background-image</code></a>, <a href="/zh-TW/docs/Web/CSS/background-position"><code>background-position</code></a>, <a href="/zh-TW/docs/Web/CSS/background-repeat"><code>background-repeat</code></a>, and <a href="/zh-TW/docs/Web/CSS/background-attachment"><code>background-attachment</code></a>) now supports multiple backgrounds. This lets you specify multiple backgrounds that are rendered atop one another in layers.</dd>
 <dt><a href="/en-US/docs/CSS/Media_queries#Mozilla-specific_media_features">Mozilla-specific media features</a></dt>
 <dd>Media features have been added for Mozilla-specific system metrics, so that <a href="/en-US/docs/CSS/Media_queries">media queries</a> can be used to more safely check on the availability of features such as touch support.</dd>
 <dt><a href="/en-US/docs/CSS/Scaling_background_images">Scaling background images</a></dt>
 <dd>The <code>background-size </code>property from the <a href="http://dev.w3.org/csswg/css3-background/">CSS 3 Backgrounds and Borders draft</a> is now supported under the name <a href="/zh-TW/docs/Web/CSS/-moz-background-size"><code>-moz-background-size</code></a>.</dd>
 <dt><a href="/en-US/docs/WOFF">WOFF font support</a></dt>
 <dd><a href="/zh-TW/docs/Web/CSS/@font-face"><code>@font-face</code></a> now supports the WOFF downloadable font file format.</dd>
 <dt><a href="/en-US/docs/CSS/pointer-events">Pointer events</a></dt>
 <dd>The <a href="/zh-TW/docs/Web/CSS/pointer-events"><code>pointer-events</code></a> property lets content specify whether or not an element may be the target of mouse pointer events.</dd>
</dl>

<h4 id="Miscellaneous_CSS_changes">Miscellaneous CSS changes</h4>

<ul>
 <li>The <a href="/en-US/docs/CSS/length#Relative_length_units"><code>rem</code></a> length unit from <a href="http://www.w3.org/TR/css3-values/#lengths">CSS3 Values and Units</a> is now supported. <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=472195">bug 472195</a></li>
 <li><a href="/zh-TW/docs/Web/CSS/image-rendering"><code>image-rendering</code></a> is supported for images, background images, videos and canvases. <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=423756">bug 423756</a></li>
 <li><a href="/zh-TW/docs/Web/CSS/text-align"><code>text-align</code></a>:end is now supported. <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=299837">bug 299837</a></li>
 <li>DOM changes to elements using the table <a href="/zh-TW/docs/Web/CSS/display"><code>display</code></a> types now work much better.</li>
 <li>Added <a href="/zh-TW/docs/Web/CSS/:-moz-locale-dir(ltr)"><code>:-moz-locale-dir(ltr)</code></a> and <a href="/zh-TW/docs/Web/CSS/:-moz-locale-dir(rtl)"><code>:-moz-locale-dir(rtl)</code></a> to make it easier to customize layouts based on whether the user interface is being displayed using a left-to-right or a right-to-left locale. <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=478416">bug 478416</a></li>
 <li>Added support for the <a href="/zh-TW/docs/Web/CSS/:indeterminate"><code>:indeterminate</code></a> pseudo-class, which matches <code>checkbox</code> <a href="/en-US/docs/HTML/Element/Input"><code>input</code></a> elements whose <code>indeterminate</code> attribute is <code>true</code>.</li>
 <li>Windowed plugins are no longer displayed in CSS transforms, because they can't be transformed properly by the compositor.</li>
</ul>

<h3 id="HTML">HTML</h3>

<dl>
 <dt><a href="/en-US/docs/Using_files_from_web_applications">Using files from web applications</a></dt>
 <dd>Support for the new HTML5 File API has been added to Gecko, making it possible for web applications to access local files selected by the user. This includes support for selecting multiple files using the <code>input type="file"</code> HTML element's new <code>multiple</code> attribute.</dd>
 <dt>HTML5 video supports poster frames</dt>
 <dd>The <code>poster</code> attribute is now supported for the <a href="/en-US/docs/HTML/Element/Video"><code>video</code></a> element, allowing content to specify a poster frame to be displayed until the video begins to play.</dd>
 <dt>Checkboxes and radio buttons support the <code>indeterminate</code> property</dt>
 <dd>HTML <a href="/en-US/docs/HTML/Element/Input"><code>input</code></a> elements of types <code>checkbox</code> and <code>radio</code> now support the indeterminate property, which allows a third, "indeterminate" state.</dd>
 <dt>Canvas image smoothing can be controlled</dt>
 <dd>The new <a href="/en-US/docs/Canvas_tutorial/Using_images#Controlling_image_scaling_behavior"><code>mozImageSmoothingEnabled</code></a> property can be used to turn on and off image smoothing when scaling in <a href="/en-US/docs/HTML/Element/canvas"><code>canvas</code></a> elements.</dd>
 <dt>Asynchronous script execution</dt>
 <dd>By setting the <code>async</code> attribute on a <a href="/en-US/docs/HTML/Element/Script"><code>script</code></a> element, the <code>script</code> will not block loading or display of the rest of the page. Instead the <code>script</code> executes as soon as it is downloaded.</dd>
</dl>

<h3 id="JavaScript">JavaScript</h3>

<p>Gecko 1.9.2 introduces JavaScript 1.8.2, which adds a number of language features from the <a href="/en-US/docs/JavaScript/ECMAScript_5_support_in_Mozilla">ECMAScript 5 standard</a>:</p>

<ul>
 <li><a href="/en-US/docs/JavaScript/Reference/Global_Objects/Date/parse"><code>Date.parse()</code></a> can now parse ISO 8601 dates like YYYY-MM-DD.</li>
 <li>
  <p>The <a href="/en-US/docs/JavaScript/Reference/Global_Objects/Function/prototype"><code>prototype</code></a> property of function instances is no longer enumerable.</p>
 </li>
</ul>

<dl>
</dl>

<h3 id="DOM">DOM</h3>

<dl>
 <dt>Web workers can now self-terminate</dt>
 <dd><a href="/en-US/docs/DOM/Using_web_workers">Workers</a> now support the <code><a href="/zh-TW/docs/XPCOM_Interface_Reference/nsIWorkerScope#close()">nsIWorkerScope.close()</a></code> method, which allows them to terminate themselves.</dd>
 <dt>Drag and drop now supports files</dt>
 <dd>The <a href="/en-US/docs/DragDrop/DataTransfer"><code>DataTransfer</code></a> object provided to drag listeners now includes a list of files that were dragged.</dd>
 <dt>Checking to see if an element matches a specified CSS selector</dt>
 <dd>The new <a href="/zh-TW/docs/Web/API/Node/mozMatchesSelector"><code>element.mozMatchesSelector</code></a> method lets you determine whether or not an element matches a specified CSS selector. See <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=518003">bug 518003</a>.</dd>
 <dt><a href="/en-US/docs/Detecting_device_orientation">Detecting device orientation</a></dt>
 <dd>Content can now detect the orientation of the device if it has a supported accelerometer, using the <a href="/en-US/docs/DOM/MozOrientation"><code>MozOrientation</code></a> event. Firefox 3.6 supports the accelerometer in Mac laptops.</dd>
 <dt><a href="/en-US/docs/DOM/Detecting_document_width_and_height_changes">Detecting document width and height changes</a></dt>
 <dd>The new <code>MozScrollAreaChanged</code> event is dispatched whenever the document's <code>scrollWidth</code> and/or <code>scrollHeight</code> properties change.</dd>
</dl>

<h4 id="Miscellaneous_DOM_changes">Miscellaneous DOM changes</h4>

<ul>
 <li>The <code>getBoxObjectFor()</code> method has been <strong>removed</strong>, as it was non-standard and exposed even more non-standard stuff to the web. See <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=340571">bug 340571</a>. Also affects <a href="http://mootools.net/">MooTools</a> which uses this call for Gecko detection; this has been fixed in the latest version of MooTools, so be sure to update.</li>
 <li>The new <a href="/en-US/docs/DOM/window.mozInnerScreenX"><code>mozInnerScreenX</code></a> and <a href="/en-US/docs/DOM/window.mozInnerScreenY"><code>mozInnerScreenY</code></a> properties on DOM windows have been added; these return the screen coordinates of the top-left corner of the window's viewport.</li>
 <li>The new <code>mozScreenPixelsPerCSSPixel</code> attribute on the <code><a href="/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDOMWindowUtils">nsIDOMWindowUtils</a></code> interface, accessible only to chrome, provides a conversion factor between CSS pixels and screen pixels; this value can vary based on the zoom level of the content.</li>
 <li>When the page's URI's document fragment identifier (the part after the "#" (hash) character) changes, a new <code>hashchange</code> event is sent to the page. See <a href="/en-US/docs/DOM/window.onhashchange">window.onhashchange</a> for more information. <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=385434">bug 385434</a></li>
 <li>The attribute <a href="/en-US/docs/DOM/document.readyState"><code>document.readyState</code></a> is now supported. <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=347174">bug 347174</a></li>
 <li>Support for HTML5's <code><a href="/en-US/docs/DOM/element.classList">element.classList</a></code> to allow easier handling of the class attribute. <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=501257">bug 501257</a></li>
 <li><code>localName</code> and <code>namespaceURI</code> in HTML documents now behave like they do in XHTML documents: <code>localName</code> returns in lower case and <code>namespaceURI</code> for HTML elements is <code>"<a href="http://www.w3.org/1999/xhtml">http://www.w3.org/1999/xhtml</a>"</code>.</li>
 <li><a href="/en-US/docs/DOM/element.getElementsByTagNameNS"><code>element.getElementsByTagNameNS</code></a> no longer lowercases its argument, so upper-case ASCII letters in the argument make matches against HTML elements fail. The same is true for <a href="/en-US/docs/DOM/document.getElementsByTagNameNS"><code>document.getElementsByTagNameNS</code></a>.</li>
 <li>Support has been added for addresses in geolocation via the <code><a href="/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDOMGeoPositionAddress">nsIDOMGeoPositionAddress</a></code> interface and a new field added to <code><a href="/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDOMGeoPosition">nsIDOMGeoPosition</a></code>.</li>
 <li>The <a href="/zh-TW/docs/Web/API/Window/getComputedStyle"><code>window.getComputedStyle</code></a> function now returns quotes within <code>url()</code> values.</li>
</ul>

<h3 id="XPath">XPath</h3>

<dl>
 <dt>The choose() XPath method is now supported</dt>
 <dd>The <a href="/en-US/docs/XPath/Functions/choose"><code>choose()</code></a> method is now supported by our implementation of <a href="/en-US/docs/XPath">XPath</a>.</dd>
</dl>

<h2 id="For_XUL_and_add-on_developers">For XUL and add-on developers</h2>

<p>If you're an extension developer, you should start by reading <a href="/en-US/docs/Updating_extensions_for_Firefox_3.6">Updating extensions for Firefox 3.6</a>, which offers a helpful overview of what changes may affect your extension. Plug-in developers should read <a href="/en-US/docs/Updating_plug-ins_for_Firefox_3.6">Updating plug-ins for Firefox 3.6</a>.</p>

<h3 id="New_features">New features</h3>

<dl>
 <dt><a href="/en-US/docs/Detecting_device_orientation">Detecting device orientation</a></dt>
 <dd>Content can now detect the orientation of the device if it has a supported accelerometer, using the <a href="/en-US/docs/DOM/MozOrientation"><code>MozOrientation</code></a> event. Firefox 3.6 supports the accelerometer in Mac laptops.</dd>
 <dt><a href="/en-US/docs/Monitoring_HTTP_activity">Monitoring HTTP activity</a></dt>
 <dd>You can now monitor HTTP transactions to observe requests and responses in real time.</dd>
 <dt><a href="/en-US/docs/Working_with_the_Windows_taskbar">Working with the Windows taskbar</a></dt>
 <dd>It's now possible to customize the appearance of windows in the taskbar in Windows 7 or later. <em>This has been disabled by default in Firefox 3.6.</em></dd>
</dl>

<h3 id="Places">Places</h3>

<ul>
 <li>Places queries can now use the <code>redirectsMode</code> attribute on the <code><a href="/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsINavHistoryQueryOptions">nsINavHistoryQueryOptions</a></code> interface to specify whether or not to include redirected pages in results.</li>
 <li>Added the new <code><a href="/zh-TW/docs/XPCOM_Interface_Reference/nsIFaviconService#expireAllFavicons()">nsIFaviconService.expireAllFavicons()</a></code> method to the <code><a href="/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIFaviconService">nsIFaviconService</a></code> interface.</li>
</ul>

<h3 id="Storage">Storage</h3>

<dl>
 <dt><a href="/en-US/docs/Storage#Collation_(sorting)">Locale-aware collation of data is now supported by the Storage API</a></dt>
 <dd>Gecko 1.9.2 added several new collation methods to provide optimized collation (sorting) of results using locale-aware techniques.</dd>
 <dt><a href="/en-US/docs/mozIStorageStatementParams#Enumeration_of_properties">Properties on a statement can now be enumerated</a></dt>
 <dd>You can now use a <code><a href="/en-US/docs/JavaScript/Reference/Statements/for...in">for..in</a></code> enumeration to enumerate all the properties on a statement.</dd>
 <dt>mozIStorageStatement's getParameterIndex changed behavior between 3.5 and 3.6.</dt>
 <dd>See <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=528166">bug 528166</a> for details.</dd>
 <dt>Asynchronously bind multiple sets of parameters and execute a statement.</dt>
 <dd>See <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=490085">bug 490085</a> for details. Documentation coming soon.</dd>
</dl>

<h3 id="Preferences">Preferences</h3>

<ul>
 <li>The <code><a href="/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIContentPrefService">nsIContentPrefService</a></code> interface has two new methods: <code><a href="/zh-TW/docs/XPCOM_Interface_Reference/nsIContentPrefService#getPrefsByName()">nsIContentPrefService.getPrefsByName()</a></code> and <code><a href="/zh-TW/docs/XPCOM_Interface_Reference/nsIContentPrefService#removePrefsByName()">nsIContentPrefService.removePrefsByName()</a></code>.</li>
</ul>

<h3 id="Themes">Themes</h3>

<p>See <a href="/en-US/docs/Updating_themes_for_Firefox_3.6">Updating themes for Firefox 3.6</a> for a list of changes related to themes.</p>

<dl>
 <dt><a href="/en-US/docs/Themes/Lightweight_themes">Lightweight themes</a></dt>
 <dd>Firefox 3.6 supports lightweight themes; these are easy-to-create themes that simply apply a background to the top (URL bar and button bar) and bottom (status bar) of browser windows. This is an integration of the existing <a href="http://www.getpersonas.com/">Personas</a> theme architecture into Firefox.</dd>
</dl>

<h3 id="Miscellaneous">Miscellaneous</h3>

<ul>
 <li>Firefox will no longer load third-party components installed in its internal components directory. This helps to ensure stability by preventing buggy third-party components from being executed. Developers that install components this way must <a href="/en-US/docs/Migrating_raw_components_to_add-ons">repackage their components as XPI packages</a> so they can be installed as standard add-ons.</li>
 <li><code>contents.rdf</code> is no longer supported for registering chrome in extensions. You must now use the <a href="/en-US/docs/Install_Manifests"><code>chrome.manifest</code></a> file instead. See <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=492008">bug 492008</a>.</li>
 <li>Added support for hiding the menu bar automatically. See <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=477256">bug 477256</a>.</li>
 <li>Added support for the <code>container-live-role</code> attribute to objects. See <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=391829">bug 391829</a>.</li>
 <li>The <code>tabs-closebutton</code> binding has been removed. See <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=500971">bug 500971</a>.</li>
 <li>Added support to <code><a href="/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsISound">nsISound</a></code> for playing sounds based on events that have occurred. See <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=502799">bug 502799</a>.</li>
 <li>The syntax for the <code><a href="/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsITreeView">nsITreeView</a></code> methods <code><a href="/zh-TW/docs/XPCOM_Interface_Reference/nsITreeView#canDrop()">nsITreeView.canDrop()</a></code> and <code><a href="/zh-TW/docs/XPCOM_Interface_Reference/nsITreeView#drop()">nsITreeView.drop()</a></code> has changed to support the new drag &amp; drop API introduced in Gecko 1.9. See <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=455590">bug 455590</a>.</li>
 <li>Added support to snap the mouse cursor to the default button of dialog or wizard on Windows, see <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=76053">bug 76053</a>. This is processed automatically by dialog and wizard element. But if a XUL application creates a window using the <code>window</code> element and it has a default button, it needs to call <code><a href="/zh-TW/docs/XPCOM_Interface_Reference/nsIDOMChromeWindow#notifyDefaultButtonLoaded()">nsIDOMChromeWindow.notifyDefaultButtonLoaded()</a></code> during the window's <code>onload</code> event handler.</li>
 <li>The <code><a href="/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsILocalFileMac">nsILocalFileMac</a></code> interface has had two methods removed: <code>setFileTypeAndCreatorFromMIMEType()</code> and <code>setFileTypeAndCreatorFromExtension()</code>.</li>
 <li>The new <a href="/en-US/docs/JavaScript_code_modules/NetUtil.jsm"><code>NetUtils.jsm</code></a> code module provides an easy-to-use method for asynchronously copying data from an input stream to an output stream.</li>
 <li>The new <a href="/en-US/docs/JavaScript_code_modules/openLocationLastURL.jsm"><code>openLocationLastURL.jsm</code></a> code module makes it easy to read and change the value of the "Open Location" dialog box's remembered URL while properly taking private browsing mode into account.</li>
 <li>On Windows, the <code><a href="/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIScreen">nsIScreen</a></code> interface now reports 24 bit per pixel color depths when the graphics driver claims 32 bits, since 24 more accurately represents the actual number of color pixels in use.</li>
 <li>Menu bars can now be hidden on Windows, using the new <code id="a-autohide"><a href="/zh-TW/docs/Mozilla/Tech/XUL/Attribute/autohide">autohide</a></code> attribute on the <code><a href="/zh-TW/docs/Mozilla/Tech/XUL/toolbar">toolbar</a></code> XUL element.</li>
 <li>The <code><a href="/zh-TW/docs/Mozilla/Tech/XUL/Method/loadOneTab">loadOneTab</a></code> and <code><a href="/zh-TW/docs/Mozilla/Tech/XUL/Method/addTab">addTab</a></code> methods now accept a new <code>relatedToCurrent</code> parameter and, in addition, allow the parameters to be specified by name, since nearly all of the parameters are optional.</li>
 <li>The "<a href="/en-US/docs/Install_Manifests#hidden">hidden</a>" property is no longer supported in install manifests; it's no longer possible to prevent the user from seeing add-ons in the add-on manager window.</li>
 <li>The <code>@mozilla.org/webshell;1</code> component no longer exists; you need to use <code>@mozilla.org/docshell;1</code> instead.</li>
 <li>You can now register with the update-timer category to schedule timer events without having to instantiate the object that the timer will eventually call into; it will instead be instantiated when it's needed. See <code><a href="/zh-TW/docs/XPCOM_Interface_Reference/nsIUpdateTimerManager#registerTimer()">nsIUpdateTimerManager.registerTimer()</a></code> for details.</li>
 <li>The <a href="/en-US/docs/NPN_GetValue"><code>NPN_GetValue()</code></a> function no longer provides access to XPCOM through the variable values <code>NPNVserviceManager</code>, <code>NPNVDOMelement</code>, and <code>NPNVDOMWindow</code>. This is part of the work toward making plugins run in separate processes in a future version of Gecko.</li>
 <li>Plugins are no longer scriptable through XPCOM (IDL) interfaces, <a href="/en-US/docs/Gecko_Plugin_API_Reference/Scripting_plugins">NPRuntime</a> is the API to use for making plugins scriptable, and <a href="/en-US/docs/NPP_GetValue"><code>NPP_GetValue()</code></a> is no longer called to with the value <code>NPPVpluginScriptableInstance</code> or <code>NPPVpluginScriptableIID</code>. This is part of the work toward making plugins run in separate processes in a future version of Gecko.</li>
</ul>

<h2 id="For_FirefoxGecko_developers">For Firefox/Gecko developers</h2>

<p>Certain changes are only really interesting if you work on the internals of Firefox itself.</p>

<h3 id="Interfaces_merged">Interfaces merged</h3>

<p>The following interfaces have been combined together:</p>

<ul>
 <li><code>nsIPluginTagInfo2</code> has been merged into <code>nsIPluginTagInfo</code>.</li>
 <li><code>nsIPluginInstanceInternal</code>, <code>nsIPPluginInstancePeer</code>, <code>nsIPluginInstancePeer1</code>, <code>nsIPluginInstancePeer2</code>, and <code>nsIPluginInstancePeer3</code> have all been merged into <code>nsIPluginInstance</code>.</li>
 <li><code>nsIWindowlessPlugInstPeer</code> has been merged into <code>nsIPluginInstance</code>.</li>
 <li><code>nsIPluginManager</code> and <code>nsIPluginManager2</code> have been merged into <code>nsIPluginHost</code>.</li>
</ul>

<h3 id="Interfaces_removed">Interfaces removed</h3>

<p>The following interfaces have been removed entirely because they were unused, unimplemented, or obsolete:</p>

<ul>
 <li><code>nsIFullScreen</code></li>
 <li><code>nsIDOMSVGListener</code></li>
 <li><code>nsIDOMSVGZoomListener</code></li>
 <li><code>nsIInternetConfigService</code></li>
 <li><code>nsIDKey</code></li>
 <li><code>nsIEventHandler</code></li>
 <li><code>nsIJRILiveConnectPIPeer</code></li>
 <li><code>nsIJRILiveConnectPlugin</code></li>
 <li><code>nsIScriptablePlugin</code></li>
 <li><code>nsIClassicPluginFactory</code></li>
 <li><code>nsIFileUtilities</code></li>
</ul>

<h3 id="Interfaces_moved">Interfaces moved</h3>

<p>The following interfaces have been relocated from their previous IDL files into new ones:</p>

<ul>
 <li><code>nsIDOMNSCSS2Properties</code> is now located in its own IDL file (<code>dom/interfaces/css/nsIDOMCSS2Properties.idl</code>).</li>
 <li><code><a href="/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIUpdateTimerManager">nsIUpdateTimerManager</a></code> is now located in its own IDL file.</li>
</ul>

<p>A large number of interfaces have been moved. See <a href="/en-US/docs/Interfaces_moved_in_Firefox_3.6">Interfaces moved in Firefox 3.6</a> for a complete list.</p>

<h3 id="Other_interface_changes">Other interface changes</h3>

<p>The following assorted changes have been made:</p>

<ul>
 <li>The <code>nsIPlugin</code> interface now inherits from <code><a href="/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsISupports">nsISupports</a></code> instead of <code><a href="/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIFactory">nsIFactory</a></code>.</li>
 <li>The <code>nsIPluginHost</code> interface now inherits from <code><a href="/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsISupports">nsISupports</a></code> instead of <code><a href="/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIFactory">nsIFactory</a></code>.</li>
 <li>The <code>nsIFrame</code> interface now inherits from <code>nsQueryFrame</code> instead of <code><a href="/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsISupports">nsISupports</a></code>.</li>
 <li>The <code><a href="/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDeviceContext">nsIDeviceContext</a></code> method <code>getPaletteInfo()</code> has been removed, as it was never implemented.</li>
 <li>The <code><a href="/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIScriptContext">nsIScriptContext</a></code> method <code>reportPendingException()</code> has been removed, since it was no longer being used.</li>
</ul>

<h3 id="Changes_in_accessibility_code">Changes in accessibility code</h3>

<ul>
 <li>The EVENT<code>_REORDER</code> <a href="/en-US/docs/XPCOM_Interface_Reference/nsIAccessibleEvent">accessibility event</a> is now sent when the children of frames and iframes change, as well as when the main document's children change. See <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=420845">bug 420845</a>.</li>
 <li>The <code><a href="/zh-TW/docs/XPCOM_Interface_Reference/nsIAccessibleTable#selectRow()">nsIAccessibleTable.selectRow()</a></code> now correctly removes any current selection before selecting the specified row.</li>
</ul>

<h2 id="See_also">See also</h2>

<div>
<ul>
<li><a href="/zh-TW/docs/Mozilla/Firefox/Releases/3.5">Firefox 3.5 for developers</a></li><li><a href="/zh-TW/docs/Mozilla/Firefox/Releases/3">Firefox 3 for developers</a></li><li><a href="/zh-TW/docs/Mozilla/Firefox/Releases/2">Firefox 2 for developers</a></li><li><a href="/zh-TW/docs/Mozilla/Firefox/Releases/1.5">Firefox 1.5 for developers</a></li></ul>
</div>
