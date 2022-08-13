---
title: Proxy handler
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy
tags:
  - ECMAScript 2015
  - JavaScript
  - NeedsTranslation
  - Proxy
  - TopicStub
translation_of: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy
translation_of_original: Web/JavaScript/Reference/Global_Objects/Proxy/handler
original_slug: Web/JavaScript/Reference/Global_Objects/Proxy/handler
---
<div>{{JSRef}}</div>

<p>The proxy's handler object is a placeholder object which contains traps for {{jsxref("Proxy", "proxies", "", 1)}}.</p>

<h2 id="Methods">Methods</h2>

<p>All traps are optional. If a trap has not been defined, the default behavior is to forward the operation to the target.</p>

<dl>
 <dt>{{jsxref("Global_Objects/Proxy/handler/getPrototypeOf", "handler.getPrototypeOf()")}}</dt>
 <dd>A trap for {{jsxref("Object.getPrototypeOf")}}.</dd>
 <dt>{{jsxref("Global_Objects/Proxy/handler/setPrototypeOf", "handler.setPrototypeOf()")}}</dt>
 <dd>A trap for {{jsxref("Object.setPrototypeOf")}}.</dd>
 <dt>{{jsxref("Global_Objects/Proxy/handler/isExtensible", "handler.isExtensible()")}}</dt>
 <dd>A trap for {{jsxref("Object.isExtensible")}}.</dd>
 <dt>{{jsxref("Global_Objects/Proxy/handler/preventExtensions", "handler.preventExtensions()")}}</dt>
 <dd>A trap for {{jsxref("Object.preventExtensions")}}.</dd>
 <dt>{{jsxref("Global_Objects/Proxy/handler/getOwnPropertyDescriptor", "handler.getOwnPropertyDescriptor()")}}</dt>
 <dd>A trap for {{jsxref("Object.getOwnPropertyDescriptor")}}.</dd>
 <dt>{{jsxref("Global_Objects/Proxy/handler/defineProperty", "handler.defineProperty()")}}</dt>
 <dd>A trap for {{jsxref("Object.defineProperty")}}.</dd>
 <dt>{{jsxref("Global_Objects/Proxy/handler/has", "handler.has()")}}</dt>
 <dd>A trap for the {{jsxref("Operators/in", "in")}} operator.</dd>
 <dt>{{jsxref("Global_Objects/Proxy/handler/get", "handler.get()")}}</dt>
 <dd>A trap for getting property values.</dd>
 <dt>{{jsxref("Global_Objects/Proxy/handler/set", "handler.set()")}}</dt>
 <dd>A trap for setting property values.</dd>
 <dt>{{jsxref("Global_Objects/Proxy/handler/deleteProperty", "handler.deleteProperty()")}}</dt>
 <dd>A trap for the {{jsxref("Operators/delete", "delete")}} operator.</dd>
 <dt>{{jsxref("Global_Objects/Proxy/handler/ownKeys", "handler.ownKeys()")}}</dt>
 <dd>A trap for {{jsxref("Object.getOwnPropertyNames")}} and {{jsxref("Object.getOwnPropertySymbols")}}.</dd>
 <dt>{{jsxref("Global_Objects/Proxy/handler/apply", "handler.apply()")}}</dt>
 <dd>A trap for a function call.</dd>
 <dt>{{jsxref("Global_Objects/Proxy/handler/construct", "handler.construct()")}}</dt>
 <dd>A trap for the {{jsxref("Operators/new", "new")}} operator.</dd>
</dl>

<p>Some non-standard traps are <a href="/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#Proxy">obsolete and have been removed</a>.</p>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-proxy-object-internal-methods-and-internal-slots', 'Proxy Object Internal Methods and Internal Slots')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-proxy-object-internal-methods-and-internal-slots', 'Proxy Object Internal Methods and Internal Slots')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td>The <code>enumerate</code> handler has been removed.</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Browser compatibility</h2>



<p>{{Compat("javascript.builtins.Proxy.handler")}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{jsxref("Proxy")}}</li>
</ul>
