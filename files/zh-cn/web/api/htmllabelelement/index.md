---
title: HTMLLabelElement
slug: Web/API/HTMLLabelElement
translation_of: Web/API/HTMLLabelElement
---
<div>{{ APIRef("HTML DOM") }}</div>

<p>The <strong><code>HTMLLabelElement</code></strong> interface gives access to properties specific to {{HTMLElement("label")}} elements. It inherits from {{domxref("HTMLElement")}}. </p>

<h2 id="Properties">Properties</h2>

<p><em>Inherits properties from its parent, {{domxref("HTMLElement")}}.</em></p>

<table>
 <thead>
  <tr>
   <th scope="col">Name</th>
   <th scope="col">Type</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>accessKey</code></td>
   <td>{{domxref("DOMString")}}</td>
   <td>Reflects the {{htmlattrxref("accesskey", "label")}} HTML attribute.</td>
  </tr>
  <tr>
   <td><code>control</code> {{readonlyInline}}</td>
   <td>{{domxref("HTMLElement")}}</td>
   <td>The labeled control.</td>
  </tr>
  <tr>
   <td><code>form</code> {{readonlyInline}}</td>
   <td>{{domxref("HTMLFormElement")}}</td>
   <td>The form owner of this label.</td>
  </tr>
  <tr>
   <td><code>htmlFor </code></td>
   <td>{{domxref("DOMString")}}</td>
   <td>The ID of the labeled control. Reflects the {{htmlattrxref("for", "label")}} attribute.</td>
  </tr>
 </tbody>
</table>

<h2 id="Methods">Methods</h2>

<p><em>No specific method; inherits properties from its parent, {{domxref("HTMLElement")}}.</em></p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

{{Compat("api.HTMLLabelElement")}}

<h2 id="See_also">See also</h2>

<ul>
 <li>The HTML element implementing this interface: {{HTMLElement("label")}}</li>
</ul>
