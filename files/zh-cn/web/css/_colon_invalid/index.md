---
title: ':invalid'
slug: 'Web/CSS/:invalid'
translation_of: 'Web/CSS/:invalid'
---
<p> </p>

<p>{{CSSRef}}</p>

<p><strong><code>:invalid</code></strong> <a href="/zh-CN/docs/Web/CSS">CSS</a> <a href="/zh-CN/docs/Web/CSS/Pseudo-classes">伪类</a> 表示任意内容未通过验证的 {{HTMLElement("input")}} 或其他 {{HTMLElement("form")}} 元素 .</p>

<pre><code>/* 可选定任意无效的&lt;input&gt; */
input:invalid {
  background-color: pink;
}</code></pre>

<p>这个伪类对于突出显示用户的字段错误非常有用。</p>

<h2 id="Syntax">Syntax</h2>

<pre>:invalid
</pre>

<h2 id="Example">Example</h2>

<p>以下示例是一个简单的表单，当值有效时，元素颜色为绿色，无效时为红色。</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;form&gt;
  &lt;label for="url_input"&gt;Enter a URL:&lt;/label&gt;
  &lt;input type="url" id="url_input" /&gt;
  &lt;br /&gt;
  &lt;br /&gt;
  &lt;label for="email_input"&gt;Enter an email address:&lt;/label&gt;
  &lt;input type="email" id="email_input" required/&gt;
&lt;/form&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">input:invalid {
  background-color: #ffdddd;
}

form:invalid {
  border: 5px solid #ffdddd;
}

input:valid {
  background-color: #ddffdd;
}

form:valid {
  border: 5px solid #ddffdd;
}

input:required {
  border-color: #800000;
  border-width: 3px;
}

input:required:invalid {
  border-color: #C00000;
}</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample('Example', 600, 120)}}</p>

<h2 id="注意">注意</h2>

<h3 id="单选钮（Radio_buttons）">单选钮（Radio buttons）</h3>

<p>若一组单选钮被设定为必须选定一个，在该组中没有按钮被选中的情况，:invalid 伪类被应用到该组中的所有按钮。（单选钮组按照 name 属性共享相同值。）</p>

<h3 id="Gecko_默认">Gecko 默认</h3>

<p>默认情况下，Gecko 不应用 :invalid 伪类设置的样式。但是，Gecko 可以使用 {{cssxref(":-moz-ui-invalid")}} 伪类的样式（使用 {{Cssxref("box-shadow")}} 属性设置红色发光边框）来达到类似的效果，它可以被应用在:invalid 伪类的子集中。</p>

<p>你可以使用以下 CSS 禁用红色发光边框，或完全重写它以改变无效输入域的外观：</p>

<pre><code>:invalid {
  box-shadow: none;
}

:-moz-submit-invalid {
  box-shadow: none;
}

:-moz-ui-invalid {
  box-shadow: none;
}</code></pre>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>

<p>{{Compat}}</p>

<h2 id="参见">参见</h2>

<ul>
 <li>Other validation-related pseudo-classes: {{ cssxref(":required") }}, {{ cssxref(":optional") }}, {{ cssxref(":valid") }}</li>
 <li>Related Mozilla pseudo-classes: {{cssxref(":-moz-ui-invalid")}}, {{cssxref(":-moz-submit-invalid")}}</li>
 <li><a href="/zh-CN/docs/Learn/HTML/Forms/Form_validation">Form data validation</a></li>
</ul>
