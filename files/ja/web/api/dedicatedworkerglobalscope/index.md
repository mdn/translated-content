---
title: DedicatedWorkerGlobalScope
slug: Web/API/DedicatedWorkerGlobalScope
translation_of: Web/API/DedicatedWorkerGlobalScope
---
<p>{{APIRef("Web Workers API")}}</p>

<p>The <strong><code>DedicatedWorkerGlobalScope</code></strong> object (the {{domxref("Worker")}} global scope) is accessible through the {{domxref("window.self","self")}} keyword. Some additional global functions, namespaces objects, and constructors, not typically associated with the worker global scope, but available on it, are listed in the <a href="/ja/docs/Web/JavaScript/Reference">JavaScript Reference</a>. See also: <a href="/ja/docs/Web/Guide/Needs_categorization/Functions_available_to_workers">Functions available to workers</a>.</p>

<h2 id="プロパティ">プロパティ</h2>

<p><em>This interface inherits properties from the {{domxref("WorkerGlobalScope")}} interface, and its parent {{domxref("EventTarget")}}, and therefore implements properties from {{domxref("WindowTimers")}}, {{domxref("WindowBase64")}}, and {{domxref("WindowEventHandlers")}}.</em></p>

<h3 id="WorkerGlobalScope_から継承したプロパティ">WorkerGlobalScope から継承したプロパティ</h3>

<dl>
 <dt>{{domxref("WorkerGlobalScope.self")}}</dt>
 <dd>Returns an object reference to the <code>DedicatedWorkerGlobalScope</code> object itself.</dd>
 <dt>{{domxref("WorkerGlobalScope.console")}} {{readOnlyinline}}</dt>
 <dd>Returns the {{domxref("Console")}} associated with the worker.</dd>
 <dt>{{domxref("WorkerGlobalScope.location")}} {{readOnlyinline}}</dt>
 <dd>Returns the {{domxref("WorkerLocation")}} associated with the worker. <code>WorkerLocation</code> is a specific location object, mostly a subset of the {{domxref("Location")}} for browsing scopes, but adapted to workers.</dd>
 <dt>{{domxref("WorkerGlobalScope.navigator")}} {{readOnlyinline}}</dt>
 <dd>Returns the {{domxref("WorkerNavigator")}} associated with the worker. <code>WorkerNavigator</code> is a specific navigator object, mostly a subset of the {{domxref("Navigator")}} for browsing scopes, but adapted to workers.</dd>
 <dt>{{domxref("WorkerGlobalScope.performance")}} {{readOnlyinline}} {{Non-standard_inline}}</dt>
 <dd>Returns the {{domxref("Performance")}} object associated with the worker, which is a regular performance object, but with a subset of its properties and methods available.</dd>
</dl>

<h3 id="イベントハンドラ">イベントハンドラ</h3>

<p><em>This interface inherits event handlers from the {{domxref("WorkerGlobalScope")}} interface, and its parent {{domxref("EventTarget")}}, and therefore implements event handlers from {{domxref("WindowTimers")}}, {{domxref("WindowBase64")}}, and {{domxref("WindowEventHandlers")}}.</em></p>

<dl>
 <dt>{{domxref("DedicatedWorkerGlobalScope.onmessage")}}</dt>
 <dd>Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("message")}} event is raised. These events are of type {{domxref("MessageEvent")}} and will be called when the worker receives a message from the document that started it (i.e. from the {{domxref("Worker.postMessage")}} method.)</dd>
</dl>

<h2 id="メソッド">メソッド</h2>

<p><em>This interface inherits methods from the {{domxref("WorkerGlobalScope")}} interface, and its parent {{domxref("EventTarget")}}, and therefore implements methods from {{domxref("WindowTimers")}}, {{domxref("WindowBase64")}}, and {{domxref("WindowEventHandlers")}}.</em></p>

<dl>
 <dt>{{domxref("DedicatedWorkerGlobalScope.postMessage")}}</dt>
 <dd>Sends a message — which can consist of <code>any</code> JavaScript object — to the parent document that first spawned the worker.</dd>
</dl>

<h3 id="WorkerGlobalScope_から継承したもの">WorkerGlobalScope から継承したもの</h3>

<dl>
 <dt>{{domxref("WorkerGlobalScope.close()")}}</dt>
 <dd>Discards any tasks queued in the <code>WorkerGlobalScope</code>'s event loop, effectively closing this particular scope.</dd>
 <dt>{{domxref("WorkerGlobalScope.dump()")}} {{non-standard_inline}}</dt>
 <dd>Writes a message to the console.</dd>
 <dt>{{domxref("WorkerGlobalScope.importScripts()")}}</dt>
 <dd>Imports one or more scripts into the worker's scope. You can specify as many as you'd like, separated by commas. For example:<code> importScripts('foo.js', 'bar.js');</code></dd>
</dl>

<h3 id="他の場所で実装されているもの">他の場所で実装されているもの</h3>

<dl>
 <dt>{{domxref("WindowBase64.atob()")}}</dt>
 <dd>Decodes a string of data which has been encoded using base-64 encoding.</dd>
 <dt>{{domxref("WindowBase64.btoa()")}}</dt>
 <dd>Creates a base-64 encoded ASCII string from a string of binary data.</dd>
 <dt>{{domxref("WindowTimers.clearInterval()")}}</dt>
 <dd>Cancels the repeated execution set using {{domxref("WindowTimers.setInterval()")}}.</dd>
 <dt>{{domxref("WindowTimers.clearTimeout()")}}</dt>
 <dd>Cancels the repeated execution set using {{domxref("WindowTimers.setTimeout()")}}.</dd>
 <dt>{{domxref("WindowTimers.setInterval()")}}</dt>
 <dd>Schedules the execution of a function every X milliseconds.</dd>
 <dt>{{domxref("WindowTimers.setTimeout()")}}</dt>
 <dd>Sets a delay for executing a function.</dd>
</dl>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', '#dedicatedworkerglobalscope', 'DedicatedWorkerGlobalScope')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>No change from {{SpecName("Web Workers")}}.</td>
  </tr>
  <tr>
   <td>{{SpecName('Web Workers', '#dedicatedworkerglobalscope', 'DedicatedWorkerGlobalScope')}}</td>
   <td>{{Spec2('Web Workers')}}</td>
   <td>Initial definition.</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザ互換性">ブラウザ互換性</h2>

<p>{{Compat("api.DedicatedWorkerGlobalScope")}}</p>

<h2 id="関連項目">関連項目</h2>

<ul>
 <li>{{domxref("Worker")}}</li>
 <li>{{domxref("WorkerGlobalScope")}}</li>
 <li><a href="/ja/docs/Web/Guide/Performance/Using_web_workers">Web worker を使用する</a></li>
 <li><a href="/ja/docs/Web/Guide/Needs_categorization/Functions_available_to_workers">Web Worker が使用できる関数とクラス</a></li>
</ul>
