---
title: HTML 컨텐츠에 SVG 효과 적용하기
slug: Web/SVG/Applying_SVG_effects_to_HTML_content
tags:
  - CSS
  - HTML
  - SVG
  - SVG 효과
  - 가이드
  - 필터
translation_of: Web/SVG/Applying_SVG_effects_to_HTML_content
---
<p>모던 브라우저들은 HTML 콘텐트에 그래픽 효과를 적용하기 위해 <a href="/ko/docs/web/CSS" title="Cascading Style Sheets">CSS</a> 스타일 내에 <a href="/ko/docs/Web/SVG">SVG</a>를 사용하는 것을 지원합니다.</p>

<p>스타일에서의 SVG는, 동일 문서 또는 외부 스타일 시트 어느 쪽에서도 지정할 수 있습니다. 다음 3가지 속성이 사용 가능합니다: <a href="/ko/docs/Web/CSS/mask"><code>mask</code></a>, <a href="/ko/docs/Web/CSS/clip-path"><code>clip-path</code></a>, and <a href="/ko/docs/Web/CSS/filter"><code>filter</code></a>.</p>

<div class="note"><strong>Note:</strong> 외부 파일에서 SVG를 참조할 때는, 반드시 참조하는 원래 문서와 <a href="/ko/docs/Web/Security/Same-origin_policy">동일한 출처</a>에서 이뤄져야 합니다.</div>

<h2 id="임베디드_SVG_사용하기">임베디드 SVG 사용하기</h2>

<p>CSS 스타일을 이용해 SVG 효과를 적용하기 위해서, 먼저 적용할 SVG를 참조하는 CSS 스타일을 작성해야 합니다.</p>

<pre class="brush: html">&lt;style&gt;p { mask: url(#my-mask); }&lt;/style&gt;
</pre>

<p>위의 예제에서, 모든 문단은 <a href="/ko/docs/Web/HTML/Global_attributes/id">ID</a>가 <code>my-mask</code>인 <a href="/ko/docs/Web/SVG/Element/mask">SVG <code>&lt;mask&gt;</code></a>에 의해 마스크 처리됩니다.</p>

<h3 id="Example_Masking">Example: Masking</h3>

<p>다음의 예는 HTML 문서 내에 CSS 코드와 SVG를 사용해서, HTML 콘텐트에 그래디언트 마스크를 만든 것입니다:</p>

<pre class="brush: html">&lt;svg height="0"&gt;
  &lt;mask id="mask-1"&gt;
    &lt;linearGradient id="gradient-1" y2="1"&gt;
      &lt;stop stop-color="white" offset="0"/&gt;
      &lt;stop stop-opacity="0" offset="1"/&gt;
    &lt;/linearGradient&gt;
    &lt;circle cx="0.25" cy="0.25" r="0.25" id="circle" fill="white"/&gt;
    &lt;rect x="0.5" y="0.2" width="300" height="100" fill="url(#gradient-1)"/&gt;
  &lt;/mask&gt;
&lt;/svg&gt;
</pre>

<pre class="brush: css">.target {
  mask: url(#mask-1);
}
p {
  width: 300px;
  border: 1px solid #000;
  display: inline-block;
}</pre>

<p>Note that in the CSS, the mask is specified using a URL to the ID <code>#mask-1</code>, which is the ID of the SVG mask specified below it. Everything else specifies details about the gradient mask itself.</p>

<p>Applying the SVG effect to (X)HTML is accomplished by assigning the <code>target</code> class defined above to an element, like this:</p>

<pre class="brush: html">&lt;p class="target" style="background:lime;"&gt;
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua. Ut enim ad minim veniam.
&lt;/p&gt;
&lt;p&gt;
    Lorem ipsum dolor sit amet, consectetur adipisicing
    &lt;b class="target"&gt;elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua.&lt;/b&gt;
    Ut enim ad minim veniam.
&lt;/p&gt;
</pre>

<p>The above example would be rendered with the mask applied to it.</p>

<p>{{EmbedLiveSample('Example_Masking', 650, 200)}}</p>

<h3 id="Example_Clipping">Example: Clipping</h3>

<p>This example demonstrates using SVG to clip HTML content. Notice that even the clickable areas for links are clipped.</p>

<pre class="brush: html">&lt;p class="target" style="background:lime;"&gt;
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua. Ut enim ad minim veniam.
&lt;/p&gt;
&lt;p&gt;
    Lorem ipsum dolor sit amet, consectetur adipisicing
    &lt;b class="target"&gt;elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua.&lt;/b&gt;
    Ut enim ad minim veniam.
&lt;/p&gt;

&lt;button onclick="toggleRadius()"&gt;Toggle radius&lt;/button&gt;

&lt;svg height="0"&gt;
  &lt;clipPath id="clipping-path-1" clipPathUnits="objectBoundingBox"&gt;
    &lt;circle cx="0.25" cy="0.25" r="0.25" id="circle"/&gt;
    &lt;rect x="0.5" y="0.2" width="0.5" height="0.8"/&gt;
  &lt;/clipPath&gt;
&lt;/svg&gt;
</pre>

<pre class="brush: css">.target {
  clip-path: url(#clipping-path-1);
}
p {
  width: 300px;
  border: 1px solid #000;
  display: inline-block;
}</pre>

<p>This establishes a clipping area made of a circle and rectangle, assigns it the ID <code>#clipping-path-1</code>, then references it in the CSS. The clip path can be assigned to any element with the <code>target</code> class.</p>

<p>You can make changes to the SVG in real time and see them immediately affect the rendering of the HTML. For example, you can resize the circle in the clip path established above:</p>

<pre class="brush: js">function toggleRadius() {
  var circle = document.getElementById("circle");
  circle.r.baseVal.value = 0.40 - circle.r.baseVal.value;
}
</pre>

<p>{{EmbedLiveSample('Example_Clipping', 650, 200)}}</p>

<h3 id="Example_Filtering">Example: Filtering</h3>

<p>This demonstrates applying a filter to HTML content using SVG. It establishes several filters, which are applied with CSS to three elements in both the normal and mouse <a href="/ko/docs/Web/CSS/:hover">hover</a> states.</p>

<pre class="brush: html">&lt;p class="target" style="background: lime;"&gt;
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua. Ut enim ad minim veniam.
&lt;/p&gt;
&lt;pre class="target"&gt;lorem&lt;/pre&gt;
&lt;p&gt;
    Lorem ipsum dolor sit amet, consectetur adipisicing
    &lt;b class="target"&gt;elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua.&lt;/b&gt;
    Ut enim ad minim veniam.
&lt;/p&gt;
</pre>

<p>Any SVG filter can be applied this way. For example, to apply a blur effect, you might use:</p>

<pre class="brush: html">&lt;svg height="0"&gt;
  &lt;filter id="f1"&gt;
    &lt;feGaussianBlur stdDeviation="3"/&gt;
  &lt;/filter&gt;
&lt;/svg&gt;</pre>

<p>You could also apply a color matrix:</p>

<pre class="brush: html">&lt;svg height="0"&gt;
  &lt;filter id="f2"&gt;
    &lt;feColorMatrix values="0.3333 0.3333 0.3333 0 0
                           0.3333 0.3333 0.3333 0 0
                           0.3333 0.3333 0.3333 0 0
                           0      0      0      1 0"/&gt;
  &lt;/filter&gt;
&lt;/svg&gt;
</pre>

<p>And some more filters:</p>

<pre class="brush: html"><span>&lt;svg height="0"&gt;
</span>  &lt;filter id="f3"&gt;
    &lt;feConvolveMatrix filterRes="100 100" style="color-interpolation-filters:sRGB"
      order="3" kernelMatrix="0 -1 0   -1 4 -1   0 -1 0" preserveAlpha="true"/&gt;
  &lt;/filter&gt;
  &lt;filter id="f4"&gt;
    &lt;feSpecularLighting surfaceScale="5" specularConstant="1"
                        specularExponent="10" lighting-color="white"&gt;
      &lt;fePointLight x="-5000" y="-10000" z="20000"/&gt;
    &lt;/feSpecularLighting&gt;
  &lt;/filter&gt;
  &lt;filter id="f5"&gt;
    &lt;feColorMatrix values="1 0 0 0 0
                           0 1 0 0 0
                           0 0 1 0 0
                           0 1 0 0 0" style="color-interpolation-filters:sRGB"/&gt;
  &lt;/filter&gt;
<span>&lt;/svg&gt;</span></pre>

<p>The five filters are applied using the following CSS:</p>

<pre class="brush: css">p.target { filter:url(#f3); }
p.target:hover { filter:url(#f5); }
b.target { filter:url(#f1); }
b.target:hover { filter:url(#f4); }
pre.target { filter:url(#f2); }
pre.target:hover { filter:url(#f3); }
</pre>

<p>{{EmbedLiveSample('Example_Filtering', 650, 200)}}</p>

<p class="hidden"><a class="button liveSample" href="/files/3329/filterdemo.xhtml">View this example live</a></p>

<h3 id="Example_Blurred_Text">Example: Blurred Text</h3>

<p>In order to blur text, Webkit based browsers have a (prefixed) CSS filter called blur (see also <a href="/ko/docs/Web/CSS/filter#blur%28%29_2">CSS filter</a>). You can achieve the same effect using SVG filters.</p>

<pre class="brush: html">&lt;p class="blur"&gt;Time to clean my glasses&lt;/p&gt;
&lt;svg height="0"&gt;
  &lt;defs&gt;
    &lt;filter id="wherearemyglasses" x="0" y="0"&gt;
    &lt;feGaussianBlur in="SourceGraphic" stdDeviation="1"/&gt;
    &lt;/filter&gt;
  &lt;/defs&gt;
&lt;/svg&gt;
</pre>

<p>You can apply the SVG and the CSS filter in the same class:</p>

<pre class="brush: css">.blur { filter: url(#wherearemyglasses); }</pre>

<p>{{ EmbedLiveSample('Example_Blurred_Text', 300, 100) }}</p>

<p>Blurring is computation heavy, so ensure to use it sparingly, especially in elements that get scrolled or animated.</p>

<h2 id="Using_external_references">Using external references</h2>

<p>SVG used for clipping, masking, and filtering can be loaded from an external source, as long as that source comes from the same origin as the HTML document to which it's applied.</p>

<p>For example, if your CSS is in a file named <code>default.css</code>, it can look like this:</p>

<pre class="brush: css" id="line1">.target { clip-path: url(resources.svg#c1); }</pre>

<p>The SVG is then imported from a file named <code>resources.svg</code>, using the clip path with the ID <code>c1</code>.</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/ko/docs/SVG" title="SVG">SVG</a></li>
 <li><a class="external" href="http://robert.ocallahan.org/2008/06/applying-svg-effects-to-html-content_04.html">SVG Effects for HTML Content</a> (blog post)</li>
 <li><del><a class="external" href="/web-tech/2008/10/10/svg-external-document-references">SVG External Document References</a></del> (blog post) (<a href="http://web.archive.org/web/20120512132948/https://developer.mozilla.org/web-tech/2008/10/10/svg-external-document-references/" title="Web Tech Blog » Blog Archive » SVG External Document References">[archive.org] Web Tech Blog » Blog Archive » SVG External Document References</a>)</li>
</ul>
