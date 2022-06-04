---
title: text-overflow
slug: Web/CSS/text-overflow
tags:
  - CSS
  - CSS 属性
  - text-overflow
translation_of: Web/CSS/text-overflow
---
<p>{{ CSSRef() }}</p>

<p><strong><code>text-overflow</code></strong> <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS</a> 属性确定如何向用户发出未显示的溢出内容信号。它可以被剪切，显示一个省略号（'...'，U + 2026 HORIZONTAL ELLIPSIS）或显示一个自定义字符串。</p>



<p><img alt="text-overflow.png" class="default internal" src="/@api/deki/files/5846/=text-overflow.png"></p>

<p>一般在容器的极限处进行截断。如果想在裁剪处显示空白符，可以使用 (<code>''</code>).</p>

<p>这个属性只对那些在块级元素溢出的内容有效，但是必须要与块级元素内联 (inline) 方向一致（举个反例：内容在盒子的下方溢出。此时就不会生效）。文本可能在以下情况下溢出：当其因为某种原因而无法换行 (例子：设置了"white-space:nowrap")，或者一个单词因为太长而不能合理地被安置 (fit)。</p>

<p>这个属性并不会强制“溢出”事件的发生，因此为了能让"text-overflow"能够生效，程序员们必须要在元素上添加几个额外的属性，比如"将{{cssxref("overflow")}} 设置为 hidden"。</p>

<p>{{cssinfo}}</p>

<h2 id="Syntax">Syntax</h2>

<pre class="notranslate"><code>/* Overflow behavior at line end
   Right end if ltr, left end if rtl */
text-overflow: clip;
text-overflow: ellipsis;
text-overflow: "…";
text-overflow: fade;
text-overflow: fade(10px);
text-overflow: fade(5%);

/* Overflow behavior at left end | at right end
   Directionality has no influence */
text-overflow: clip ellipsis;
text-overflow: "…" "…";
text-overflow: fade clip;
text-overflow: fade(10px) fade(10px);
text-overflow: fade(5%) fade(5%);

/* Global values */
text-overflow: inherit;
text-overflow: initial;
text-overflow: unset;</code></pre>

<h3 id="值">值</h3>

<dl>
 <dt><code>clip</code></dt>
 <dd><strong>此为默认值。</strong>这个关键字的意思是"在内容区域的极限处截断文本"，因此在字符的中间可能会发生截断。如果你的目标浏览器支持 <code>text-overflow: ''</code>，为了能在两个字符过渡处截断，你可以使用一个空字符串值 (<code>''</code>) 作为 <code>text-overflow</code> 属性的值。</dd>
 <dt><code>ellipsis</code></dt>
 <dd>这个关键字的意思是“用一个省略号 (<code>'…'</code>, <code>U+2026 HORIZONTAL ELLIPSIS</code>) 来表示被截断的文本”。这个省略号被添加在内容区域中，因此会减少显示的文本。如果空间太小到连省略号都容纳不下，那么这个省略号也会被截断。</dd>
 <dt><code>&lt;string&gt;</code> {{ experimental_inline() }}</dt>
 <dd>{{cssxref("&lt;string&gt;")}}用来表示被截断的文本。字符串内容将被添加在内容区域中，所以会减少显示出的文本。如果空间太小到连省略号都容纳不下，那么这个字符串也会被截断。</dd>
</dl>

<h3 id="Formal_syntax">Formal syntax</h3>

{{csssyntax("text-overflow")}}

<h2 id="示例">示例</h2>

<h3 id="CSS_content">CSS content</h3>

<pre class="notranslate"><code>p {
  width: 200px;
  border: 1px solid;
  padding: 2px 5px;

  /* BOTH of the following are required for text-overflow */
  white-space: nowrap;
  overflow: hidden;
}

.overflow-visible {
  white-space: initial;
}

.overflow-clip {
  text-overflow: clip;
}

.overflow-ellipsis {
  text-overflow: ellipsis;
}

.overflow-string {
  /* Not supported in most browsers,
     see the 'Browser compatibility' section below */
  text-overflow: " [..]";
}</code></pre>

<h3 id="HTML_content">HTML content</h3>

<pre class="notranslate"><code>&lt;p class="overflow-visible"&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit.&lt;/p&gt;

&lt;p class="overflow-clip"&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit.&lt;/p&gt;

&lt;p class="overflow-ellipsis"&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit.&lt;/p&gt;

&lt;p class="overflow-string"&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit.&lt;/p&gt;</code></pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample('Examples', 300, 220, '', 'Web/CSS/text-overflow')}}</p>

<table>
 <thead>
  <tr>
   <th colspan="1" rowspan="2" scope="col">CSS value</th>
   <th colspan="2" rowspan="1" scope="col"><code>direction: ltr</code></th>
   <th colspan="2" rowspan="1" scope="col"><code>direction: rtl</code></th>
  </tr>
  <tr>
   <th scope="col">Expected Result</th>
   <th scope="col">Live result</th>
   <th scope="col">Expected Result</th>
   <th scope="col">Live result</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><em>visible overflow</em></td>
   <td>1234567890</td>
   <td>
    <p>1234567890</p>
   </td>
   <td>0987654321</td>
   <td>
    <p>1234567890</p>
   </td>
  </tr>
  <tr>
   <td><code>text-overflow: clip</code></td>
   <td><img alt="t-o_clip.png" src="https://developer.mozilla.org/@api/deki/files/6056/=t-o_clip.png"></td>
   <td>
    <p>123456</p>
   </td>
   <td><img alt="t-o_clip_rtl.png" src="https://developer.mozilla.org/@api/deki/files/6057/=t-o_clip_rtl.png"></td>
   <td>
    <p>1234567890</p>
   </td>
  </tr>
  <tr>
   <td><code>text-overflow: ''</code></td>
   <td>12345</td>
   <td>
    <p>123456</p>
   </td>
   <td>54321</td>
   <td>
    <p>1234567890</p>
   </td>
  </tr>
  <tr>
   <td><code>text-overflow: ellipsis</code></td>
   <td>1234…</td>
   <td>
    <p>1234567890</p>
   </td>
   <td>…4321</td>
   <td>
    <p>1234567890</p>
   </td>
  </tr>
  <tr>
   <td><code>text-overflow: '.'</code></td>
   <td>1234.</td>
   <td>
    <p>1234567890</p>
   </td>
   <td>.4321</td>
   <td>
    <p>1234567890</p>
   </td>
  </tr>
  <tr>
   <td><code>text-overflow: clip clip</code></td>
   <td>123456</td>
   <td>
    <p>1234567890</p>
   </td>
   <td>654321</td>
   <td>
    <p>1234567890</p>
   </td>
  </tr>
  <tr>
   <td><code>text-overflow: clip ellipsis</code></td>
   <td>1234…</td>
   <td>
    <p>1234567890</p>
   </td>
   <td>6543…</td>
   <td>
    <p>1234567890</p>
   </td>
  </tr>
  <tr>
   <td><code>text-overflow: clip '.'</code></td>
   <td>1234.</td>
   <td>
    <p>1234567890</p>
   </td>
   <td>6543.</td>
   <td>
    <p>1234567890</p>
   </td>
  </tr>
  <tr>
   <td><code>text-overflow: ellipsis clip</code></td>
   <td>…3456</td>
   <td>
    <p>1234567890</p>
   </td>
   <td>…4321</td>
   <td>
    <p>1234567890</p>
   </td>
  </tr>
  <tr>
   <td><code>text-overflow: ellipsis ellipsis</code></td>
   <td>…34…</td>
   <td>
    <p>1234567890</p>
   </td>
   <td>…43…</td>
   <td>
    <p>1234567890</p>
   </td>
  </tr>
  <tr>
   <td><code>text-overflow: ellipsis '.'</code></td>
   <td>…34.</td>
   <td>
    <p>1234567890</p>
   </td>
   <td>…43.</td>
   <td>
    <p>1234567890</p>
   </td>
  </tr>
  <tr>
   <td><code>text-overflow: ',' clip</code></td>
   <td>,3456</td>
   <td>
    <p>1234567890</p>
   </td>
   <td>,4321</td>
   <td>
    <p>1234567890</p>
   </td>
  </tr>
  <tr>
   <td><code>text-overflow: ',' ellipsis</code></td>
   <td>,34…</td>
   <td>
    <p>1234567890</p>
   </td>
   <td>,43…</td>
   <td>
    <p>1234567890</p>
   </td>
  </tr>
  <tr>
   <td><code>text-overflow: ',' '.'</code></td>
   <td>,34.</td>
   <td>
    <p>1234567890</p>
   </td>
   <td>,53.</td>
   <td>
    <p>1234567890</p>
   </td>
  </tr>
 </tbody>
</table>

<h2 id="说明">说明</h2>

<table>
 <thead>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('CSS4 UI', '#text-overflow', 'text-overflow')}}</td>
   <td>{{Spec2('CSS4 UI')}}</td>
   <td>Added the values <code>&lt;string&gt;</code> and <code>fade</code>and the <code>fade()</code> function</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 UI', '#text-overflow', 'text-overflow')}}</td>
   <td>{{Spec2('CSS3 UI')}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<p>此接口的较早版本曾经被纳入候选名单。但由于需要对某些尚未列出的风险点进行删除工作，因此该规范已降级到“工作草案”。所以说浏览器无前缀地实现此属性，但其却不在 CR 状态。</p>

<h2 id="浏览器兼容性">浏览器兼容性</h2>

{{Compat("css.properties.text-overflow")}}

<h2 id="另见">另见</h2>

<ul>
 <li>Related CSS properties: {{cssxref("overflow")}}, {{cssxref("white-space")}}</li>
</ul>

<p>(69.2017.4.4，多多包涵)</p>
