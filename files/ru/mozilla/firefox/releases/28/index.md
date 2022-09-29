---
title: Firefox 28 для разработчика
slug: Mozilla/Firefox/Releases/28
tags:
  - Compatibility
  - Firefox
  - Mozilla
translation_of: Mozilla/Firefox/Releases/28
---
<div>{{FirefoxSidebar}}</div><p>Firefox 28 был выпущен 18 марта 2014 года. Список ключевых изменений в данной статье будет полезен не только веб-разработчикам, но и Firefox-, Gecko-разработчикам и разработчикам дополнений.</p>
<p>Хотите помочь документировать Firefox 28? Просмотрите <a class="external" href="http://beta.elchi3.de/doctracker/#list=fx&amp;version=28.0">список недостатков, которые надо устранить</a> и приступайте!</p>
<h2 id="Изменения_для_разработчиков">Изменения для разработчиков</h2>
<h3 id="Инструменты_разработчика">Инструменты разработчика</h3>
<ul>
 <li>The {{domxref("console.exception")}} property has been added ({{bug("922214")}}).</li>
 <li>The {{domxref("console.assert")}} property has been added ({{bug("760193")}}).</li>
 <li>App Manager: a new Manifest Editor was added.</li>
 <li>App Manager: the toolbox used for debugging apps is now embedded in the app manager UI.</li>
 <li>Web Console: added a "split console" mode - press Escape to quickly open the console in any other tool.</li>
 <li>Web Console: added a dark theme for the output.</li>
 <li>Debugger: pretty-print minified JavaScript.</li>
 <li>Debugger: simply hover over any variable or click on it to bring up a pop-up that displays the current value.</li>
 <li>Inspector: added a color picker in rules view and various tooltips.</li>
 <li>Browser Toolbox: allows add-on and platform developers to use almost all of the developer tools while targeting the browser itself.</li>
</ul>
<p>Больше деталей <a href="https://hacks.mozilla.org/2013/12/split-console-pretty-print-minified-js-and-more-firefox-developer-tools-episode-28/" title="Split console, pretty-print minified JS and more – Firefox Developer Tools Episode 28">в этой публикации</a>.</p>
<h3 id="CSS">CSS</h3>
<ul>
 <li>Support for multi-line <a href="/en-US/docs/Web/Guide/CSS/Flexible_boxes">flexbox</a> has been added ({{bug("939901")}}).</li>
 <li>Longhand East Asian <a href="/en-US/docs/Web/CSS/list-style-type">counter styles</a> have been implemented ({{bug("934072")}}).</li>
 <li>Support for the {{cssxref("background-blend-mode")}} property has been added ({{bug("841601")}}).</li>
 <li>The <code>none</code> value has been added to {{cssxref("font-variant-ligatures")}} ({{bug("913264")}}).</li>
 <li>Support for the {{cssxref(":hover")}} user action pseudo-class on pseudo-elements has been implemented ({{bug("922669")}}).</li>
</ul>
<h3 id="HTML">HTML</h3>
<ul>
 <li>Реализована поддержка <code>&lt;input type=color&gt;</code> и <code>&lt;input type=number&gt;</code>, отключены по умолчанию.</li>
</ul>
<h3 id="JavaScript">JavaScript</h3>
<ul>
 <li><a href="/en-US/docs/Web/JavaScript/ECMAScript_6_support_in_Mozilla" title="/en-US/docs/Web/JavaScript/ECMAScript_6_support_in_Mozilla">ECMAScript 6</a> (Harmony) implementation continues:
  <ul>
   <li>New <code>Array</code> methods have been implemented: {{jsxref("Array.prototype.entries()")}} and {{jsxref("Array.prototype.keys()")}} ({{bug("894658")}}).</li>
  </ul>
 </li>
</ul>
<h3 id="ИнтерфейсAPIDOM">Интерфейс/API/DOM</h3>
<ul>
 <li><code>HTMLVideoElement.canPlayType('video/webm')</code> now reports <code>maybe</code>. ({{bug("884275")}}).</li>
 <li>The {{domxref("DocumentFragment.getElementById()")}} method has been implemented. E.g. <code>document.createDocumentFragment().getElementById()</code> ({{bug("933193")}}).</li>
 <li>The {{domxref("KeyboardEvent.repeat")}} attribute has been implemented ({{bug("600117")}}).</li>
 <li>The {{domxref("File")}} constructor, e.g. <code>new File(["foo"], "foo.txt")</code> has been implemented. ({{bug("819900")}}).</li>
 <li>The {{domxref("NavigatorPlugins.plugins", "navigator.plugins")}} is no more enumerable, for privacy reasons ({{bug(757726)}}).</li>
 <li>The two attributes {{domxref("Window.screenX")}} and {{domxref("Window.screenY")}} now return CSS pixels (and no more device pixels) ({{bug(943668)}}).</li>
 <li>The two methods {{domxref("CanvasRenderingContext2D.drawSystemFocusRing()")}} and {{domxref("CanvasRenderingContext2D.drawCustomFocusRing()")}} have been implemented. The preference <code>canvas.focusring.enabled</code> must be set to <code>true</code> to activate both ({{bug(540456)}}).</li>
 <li>The following attributes have been added to {{domxref("NavigatorID")}}: {{domxref("NavigatorID.appCodeName", "appCodeName")}} and {{domxref("NavigatorID.product", "product")}} ({{bug(925847)}}).</li>
</ul>
<h3 id="MathML">MathML</h3>
<ul>
 <li>Добавлена поддержка атрибута <code>mathvariant</code> ({{bug("114365")}}).</li>
</ul>
<h3 id="SVG">SVG</h3>
<p><em>Без изменений.</em></p>
<h3 id="АудиоВидео">Аудио/Видео</h3>
<ul>
 <li>Добавлена поддержка аудиокодека Opus для контента в мультимедиа-контейнерах WebM ({{bug("887978")}}).</li>
 <li>Интегрирована поддержка видео-декодера VP9 ({{bug("833023")}}).</li>
</ul>
<h3 id="Сеть">Сеть</h3>
<ul>
 <li>Удалена поддержка протокола <code>SPDY/2</code>.</li>
</ul>
<h2 id="Изменения_для_разработчиков_дополнений">Изменения для разработчиков дополнений</h2>
<ul>
 <li>The interface of <a href="/en-US/docs/Mozilla/JavaScript_code_modules/DeferredTask.jsm">DeferredTask.jsm</a> has been changed, and the <code>isPending()</code>, <code>start()</code>, <code>flush()</code>, and <code>cancel()</code> methods have been removed ({{bug("940408")}}).</li>
</ul>
<h2 id="Безопасность">Безопасность</h2>
<ul>
 <li>CSP was not enforced in sandboxed iframes. This has been fixed ({{bug(886164)}}).</li>
 <li>The CSP 1.1 experimental <code>script-nonce</code> directive has been implemented. The preference <code>security.csp.experimentalEnabled</code> should be set to <code>true</code> to enable this functionality ({{bug(855326)}}).</li>
</ul>
<h2 id="Смотрите_также">Смотрите также</h2>
<ul>
 <li><a href="/ru/docs/Mozilla/Firefox/Releases/28/Site_Compatibility">Site Compatibility for Firefox 28</a></li>
</ul>
<h3 id="Предыдущие_версии">Предыдущие версии</h3>
<p>{{Firefox_for_developers('27')}}</p>
