---
title: contenteditable
slug: Web/HTML/Global_attributes/contenteditable
tags:
  - contenteditable
  - copy
  - document.execCommand
translation_of: Web/HTML/Global_attributes/contenteditable
---
<p>{{HTMLSidebar("Global_attributes")}}</p>

<p><a href="/zh-CN/docs/Web/HTML/Global_attributes">全局属性</a> <strong>contenteditable</strong>  是一个枚举属性，表示元素是否可被用户编辑。 如果可以，浏览器会修改元素的部件以允许编辑。</p>

<div>{{EmbedInteractiveExample("pages/tabbed/attribute-contenteditable.html","tabbed-shorter")}}</div>

<p>该属性必须是下面的值之一：</p>

<ul>
 <li><code>true</code> 或空字符串，表示元素是可编辑的；</li>
 <li><code>false</code> 表示元素不是可编辑的。</li>
</ul>

<p>如果没有设置该属性，其默认值继承自父元素。</p>

<p>该属性是一个枚举属性，而非布尔属性。这意味着必须显式设置其值为 <code>true</code>、<code>false</code> 或空字符串中的一个，并且不允许简写为 <code>&lt;label contenteditable&gt;Example Label&lt;/label&gt;</code>正确的用法是 <code>&lt;label contenteditable="true"&gt;Example Label&lt;/label&gt;</code>。</p>

<p>你可以使用 CSS {{cssxref("caret-color")}} 属性设置用于绘制文本插入{{Glossary("caret")}}的颜色。</p>

<h2 id="规范">规范</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">规范版本</th>
   <th scope="col">规范状态</th>
   <th scope="col">注解</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "editing.html#attr-contenteditable", "contenteditable")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>No change from latest snapshot, {{SpecName('HTML5.1')}}</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5.1', "editing.html#attr-contenteditable", "contenteditable")}}</td>
   <td>{{Spec2('HTML5.1')}}</td>
   <td>Snapshot of {{SpecName('HTML WHATWG')}}, no change from {{SpecName('HTML5 W3C')}}</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', "editing.html#attr-contenteditable", "contenteditable")}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td>Snapshot of  {{SpecName('HTML WHATWG')}}, initial definition.</td>
  </tr>
 </tbody>
</table>

<h2 id="浏览器兼容性">浏览器兼容性</h2>

<p>{{Compat("html.global_attributes.contenteditable")}}</p>

<h2 id="相关链接">相关链接</h2>

<ul>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Editable_content">Making content editable</a></li>
 <li>All <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes">global attributes</a></li>
 <li>{{domxref("HTMLElement.contentEditable")}} and {{domxref("HTMLElement.isContentEditable")}}</li>
 <li>The CSS {{cssxref("caret-color")}} property</li>
</ul>
