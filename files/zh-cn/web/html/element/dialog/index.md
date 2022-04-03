---
title: <dialog>
slug: Web/HTML/Element/dialog
tags:
  - Dialog
  - HTML
  - 元素
  - 参考
  - 可交互
translation_of: Web/HTML/Element/dialog
---
<div>{{HTMLRef}}</div>

<p><strong>HTML <code>&lt;dialog&gt;</code> 元素</strong>表示一个对话框或其他交互式组件，例如一个检查器或者窗口。</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/en-US/docs/Web/HTML/Content_categories">Content categories</a></th>
   <td><a href="/en-US/docs/Web/HTML/Content_categories#Flow_content">Flow content</a>, <a href="/en-US/docs/Web/HTML/Sections_and_Outlines_of_an_HTML5_document#Sectioning_roots">sectioning root</a></td>
  </tr>
  <tr>
   <th scope="row">Permitted content</th>
   <td><a href="/en-US/docs/Web/HTML/Content_categories#Flow_content">Flow content</a></td>
  </tr>
  <tr>
   <th scope="row">Tag omission</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">Permitted parents</th>
   <td>Any element that accepts <a href="/en-US/docs/Web/HTML/Content_categories#Flow_content">flow content</a></td>
  </tr>
  <tr>
   <th scope="row">Permitted ARIA roles</th>
   <td>{{ARIARole("alertdialog")}}</td>
  </tr>
  <tr>
   <th scope="row">DOM interface</th>
   <td>{{domxref("HTMLDialogElement")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="属性">属性</h2>

<p>这个元素包含了<a href="/zh-CN/docs/Web/HTML/Global_attributes">全局属性</a>。但是 <code>tabindex</code> 特性不能被使用在 <code>&lt;dialog&gt;</code> 元素上。</p>

<dl>
 <dt>{{htmlattrdef("open")}}</dt>
 <dd>指示这个对话框是激活的和能互动的。当这个 <code>open</code> 特性没有被设置，对话框不应该显示给用户。</dd>
</dl>

<h2 id="使用备注">使用备注</h2>

<ul>
 <li><code>&lt;form&gt;</code> 元素可在此对话框中使用，但需要指定属性 <code>method="dialog"</code> 。当提交表单时，对话框的 {{domxref("HTMLDialogElement.returnValue", "returnValue")}} 属性将会等于表单中被使用的提交按钮的 <code>value</code> 。</li>
 <li> {{cssxref('::backdrop')}} CSS 伪元素可用于更改 <code>&lt;dialog&gt;</code> 背景元素样式，例如在对话框被打开激活时，调暗背景中不可访问的内容。仅当使用  {{domxref("HTMLDialogElement.showModal()")}}  显示对话框时才会绘制 backdrop 背景。</li>
</ul>

<h2 id="Examples">Examples</h2>

<h3 id="简单的例子">简单的例子</h3>

<pre class="brush: html">&lt;dialog open&gt;
  &lt;p&gt;Greetings, one and all!&lt;/p&gt;
&lt;/dialog&gt;
</pre>

<h3 id="高级示例">高级示例</h3>

<p>当单击 “更新详细信息” 按钮时，此示例打开一个包含一个表单的弹出对话框。</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;!-- Simple pop-up dialog box containing a form --&gt;
&lt;dialog id="favDialog"&gt;
  &lt;form method="dialog"&gt;
    &lt;p&gt;&lt;label&gt;Favorite animal:
      &lt;select&gt;
        &lt;option&gt;&lt;/option&gt;
        &lt;option&gt;Brine shrimp&lt;/option&gt;
        &lt;option&gt;Red panda&lt;/option&gt;
        &lt;option&gt;Spider monkey&lt;/option&gt;
      &lt;/select&gt;
    &lt;/label&gt;&lt;/p&gt;
    &lt;menu&gt;
      &lt;button value="cancel"&gt;Cancel&lt;/button&gt;
      &lt;button id="confirmBtn" value="default"&gt;Confirm&lt;/button&gt;
    &lt;/menu&gt;
  &lt;/form&gt;
&lt;/dialog&gt;

&lt;menu&gt;
  &lt;button id="updateDetails"&gt;Update details&lt;/button&gt;
&lt;/menu&gt;

&lt;output aria-live="polite"&gt;&lt;/output&gt;
</pre>

<h4 id="JavaScript">JavaScript</h4>

<pre class="brush: js">(function() {
  var updateButton = document.getElementById('updateDetails');
  var favDialog = document.getElementById('favDialog');
  var outputBox = document.getElementsByTagName('output')[0];
  var selectEl = document.getElementsByTagName('select')[0];
  var confirmBtn = document.getElementById('confirmBtn');

  // “Update details” button opens the &lt;dialog&gt; modally
  updateButton.addEventListener('click', function onOpen() {
    if (typeof favDialog.showModal === "function") {
      favDialog.showModal();
    } else {
      alert("The dialog API is not supported by this browser");
    }
  });
  // "Favorite animal" input sets the value of the submit button
  selectEl.addEventListener('change', function onSelect(e) {
    confirmBtn.value = selectEl.value;
  });
  // "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
  favDialog.addEventListener('close', function onClose() {
    outputBox.value = favDialog.returnValue + " button clicked - " + (new Date()).toString();
  });
})();

</pre>

<h3 id="结果">结果</h3>

<p>{{EmbedLiveSample("Advanced_example", "100%", 300)}}</p>

<p>Which button was clicked can be determined from <code>favDialog</code>’s {{domxref("HTMLDialogElement.returnValue", "returnValue")}}.</p>

<h2 id="规范">规范</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">规范</th>
   <th scope="col">状态</th>
   <th scope="col">备注</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('HTML WHATWG', 'forms.html#the-dialog-element', '&lt;dialog&gt;')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5.2', 'interactive-elements.html#the-dialog-element', '&lt;dialog&gt;')}}</td>
   <td>{{Spec2('HTML5.2')}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="浏览器兼容性">浏览器兼容性</h2>



<p>{{Compat("html.elements.dialog")}}</p>

<h2 id="Polyfill">Polyfill</h2>

<p>Include this polyfill to provide support for older browsers.</p>

<p><a href="https://github.com/GoogleChrome/dialog-polyfill">dialog-polyfill</a></p>

<h2 id="参见">参见</h2>

<ul>
 <li>{{event("close")}} 事件</li>
 <li>{{event("cancel")}} 事件</li>
 <li><a href="/en-US/docs/Web/Guide/HTML/Forms">HTML forms guide</a>.</li>
 <li>{{cssxref("::backdrop")}} 伪元素</li>
</ul>
