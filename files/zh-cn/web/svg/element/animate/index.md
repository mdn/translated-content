---
title: animate
slug: Web/SVG/Element/animate
tags:
  - SVG
  - SVG动画
  - 元素
translation_of: Web/SVG/Element/animate
---
<div>{{SVGRef}}</div>

<p>动画元素放在形状元素的内部，用来定义一个元素的某个属性如何踩着时点改变。在指定持续时间里，属性从开始值变成结束值。</p>

<pre class="brush: css"><code>html,body,svg { height:100%; margin:0; padding:0; }</code></pre>

<pre class="brush: html"><code>&lt;svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"&gt;
  &lt;rect width="10" height="10"&gt;
    &lt;animate attributeName="rx" values="0;5;0" dur="10s" repeatCount="indefinite" /&gt;
  &lt;/rect&gt;
&lt;/svg&gt;</code></pre>

<p>{{EmbedLiveSample('Exemple', 150, '100%')}}</p>

<h2 id="属性">属性</h2>

<h3 id="全局属性">全局属性</h3>

<ul>
 <li><a href="/en-US/docs/SVG/Attribute#ConditionalProccessing" title="SVG/Attribute#ConditionalProccessing">条件处理属性</a> »</li>
 <li><a href="/en-US/docs/SVG/Attribute#Core" title="SVG/Attribute#Core">核心属性</a> »</li>
 <li><a href="/en-US/docs/SVG/Attribute#AnimationEvent" title="SVG/Attribute#AnimationEvent">动画事件属性</a> »</li>
 <li><a href="/en-US/docs/SVG/Attribute#XLink" title="SVG/Attribute#XLink">Xlink属性</a> »</li>
 <li><a href="/en-US/docs/SVG/Attribute#AnimationAttributeTarget" title="SVG/Attribute#AnimationAttributeTarget">动画属性目标属性</a> »</li>
 <li><a href="/en-US/docs/SVG/Attribute#AnimationTiming" title="SVG/Attribute#AnimationTiming">动画定时属性</a> »</li>
 <li><a href="/en-US/docs/SVG/Attribute#AnimationValue" title="SVG/Attribute#AnimationValue">动画值属性</a> »</li>
 <li><a href="/en-US/docs/SVG/Attribute#AnimationAddition" title="SVG/Attribute#AnimationAddition">动画累加属性</a> »</li>
 <li>{{SVGAttr("externalResourcesRequired")}}</li>
</ul>

<h3 id="专有属性">专有属性</h3>

<ul>
 <li>{{SVGAttr("attributeName")}}</li>
 <li>{{SVGAttr("attributeType")}}</li>
 <li>{{SVGAttr("from")}}</li>
 <li>{{SVGAttr("to")}}</li>
 <li>{{SVGAttr("dur")}}</li>
 <li>{{SVGAttr("repeatCount")}}</li>
</ul>

<h2 id="用法">用法</h2>

<p>该元素实现了 {{domxref("SVGAnimateElement")}} 接口</p>

<p>该元素实现了<code><a href="/en-US/docs/DOM/SVGAnimateElement" title="DOM/SVGAElement">SVGAnimateElement</a></code> 接口。</p>

<h2 id="Accessibility_concerns">Accessibility concerns</h2>

<p>Blinking and flashing animation can be problematic for people with cognitive concerns such as Attention Deficit Hyperactivity Disorder (ADHD). Additionally, certain kinds of motion can be a trigger for Vestibular disorders, epilepsy, and migraine and Scotopic sensitivity.</p>

<p>Consider providing a mechanism for pausing or disabling animation, as well as using the <a href="/zh-CN/docs/Web/CSS/@media/prefers-reduced-motion">Reduced Motion Media Query</a> to create a complimentary experience for users who have expressed a preference for no animated experiences.</p>

<ul>
 <li><a href="https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity">Designing Safer Web Animation For Motion Sensitivity · An A List Apart Article</a></li>
 <li><a href="https://css-tricks.com/introduction-reduced-motion-media-query/">An Introduction to the Reduced Motion Media Query | CSS-Tricks</a></li>
 <li><a href="https://webkit.org/blog/7551/responsive-design-for-motion/">Responsive Design for Motion | WebKit</a></li>
 <li><a href="/zh-CN/docs/Web/Accessibility/Understanding_WCAG/Operable#Guideline_2.2_%E2%80%94_Enough_Time_Provide_users_enough_time_to_read_and_use_content">MDN Understanding WCAG, Guideline 2.2 explanations</a></li>
 <li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html">Understanding Success Criterion 2.2.2 | W3C Understanding WCAG 2.0</a></li>
</ul>

<h2 id="规范">规范</h2>

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
   <td>{{SpecName("SVG Animations 2", "#AnimateElement", "&lt;animate&gt;")}}</td>
   <td>{{Spec2("SVG Animations 2")}}</td>
   <td>No change</td>
  </tr>
  <tr>
   <td>{{SpecName("SVG1.1", "animate.html#AnimateElement", "&lt;animate&gt;")}}</td>
   <td>{{Spec2("SVG1.1")}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="浏览器兼容性">浏览器兼容性</h2>

{{Compat("svg.elements.animate")}}
