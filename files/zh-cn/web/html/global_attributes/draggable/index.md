---
title: draggable
slug: Web/HTML/Global_attributes/draggable
tags:
  - 拖动
translation_of: Web/HTML/Global_attributes/draggable
---
<p>{{HTMLSidebar("Global_attributes")}}{{SeeCompatTable}}</p>

<p><a href="/zh-CN/docs/Web/HTML/Global_attributes">全局属性</a> <strong>draggable</strong> 是一个枚举类型的属性，用于标识元素是否允许使用 <a href="/zh-CN/docs/DragDrop/Drag_and_Drop">拖放操作 API</a> 拖动。它的取值如下：</p>

<ul>
 <li>true，表示元素可以被拖动</li>
 <li>false，表示元素不可以被拖动</li>
</ul>

<p>如果该属性没有设值，则默认值 为 auto ，表示使用浏览器定义的默认行为。</p>

<p>这个属性是<em>枚举类型</em>，而不是 <em>布尔类型</em> 。这意味着必须显式指定值为 true 或者 false ，像 <code>&lt;label draggable&gt;Example Label&lt;/label&gt; 这样的简写是不允许的。正确的用法是</code> <code>&lt;label draggable="true"&gt;Example Label&lt;/label&gt;。</code></p>

<p>默认情况下，只有已选中的文本、图片、链接可以拖动。对其它的元素来说，必须按拖动机制的顺序设置 <strong>ondragstart</strong> 事件才能正常工作， 见 <a href="/zh-CN/docs/DragDrop/Drag_Operations">综合示例</a> 。</p>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>

{{Compat}}

<h2 id="参考资料">参考资料</h2>

<ul>
 <li>All <a href="/en-US/docs/Web/HTML/Global_attributes">global attributes</a>.</li>
</ul>
