---
title: HTML 컨텐츠에 SVG 효과 적용하기
slug: Web/SVG/Applying_SVG_effects_to_HTML_content
---

모던 브라우저들은 HTML 콘텐트에 그래픽 효과를 적용하기 위해 [CSS](/ko/docs/web/CSS) 스타일 내에 [SVG](/ko/docs/Web/SVG)를 사용하는 것을 지원합니다.

스타일에서의 SVG는, 동일 문서 또는 외부 스타일 시트 어느 쪽에서도 지정할 수 있습니다. 다음 3가지 속성이 사용 가능합니다: [`mask`](/ko/docs/Web/CSS/mask), [`clip-path`](/ko/docs/Web/CSS/clip-path), and [`filter`](/ko/docs/Web/CSS/filter).

> **참고:** 외부 파일에서 SVG를 참조할 때는, 반드시 참조하는 원래 문서와 [동일한 출처](/ko/docs/Web/Security/Same-origin_policy)에서 이뤄져야 합니다.

## 임베디드 SVG 사용하기

CSS 스타일을 이용해 SVG 효과를 적용하기 위해서, 먼저 적용할 SVG를 참조하는 CSS 스타일을 작성해야 합니다.

```html
<style>p { mask: url(#my-mask); }</style>
```

위의 예제에서, 모든 문단은 [ID](/ko/docs/Web/HTML/Global_attributes/id)가 `my-mask`인 [SVG `<mask>`](/ko/docs/Web/SVG/Element/mask)에 의해 마스크 처리됩니다.

### Example: Masking

다음의 예는 HTML 문서 내에 CSS 코드와 SVG를 사용해서, HTML 콘텐트에 그래디언트 마스크를 만든 것입니다:

```html
<svg height="0">
  <mask id="mask-1">
    <linearGradient id="gradient-1" y2="1">
      <stop stop-color="white" offset="0"/>
      <stop stop-opacity="0" offset="1"/>
    </linearGradient>
    <circle cx="0.25" cy="0.25" r="0.25" id="circle" fill="white"/>
    <rect x="0.5" y="0.2" width="300" height="100" fill="url(#gradient-1)"/>
  </mask>
</svg>
```

```css
.target {
  mask: url(#mask-1);
}
p {
  width: 300px;
  border: 1px solid #000;
  display: inline-block;
}
```

Note that in the CSS, the mask is specified using a URL to the ID `#mask-1`, which is the ID of the SVG mask specified below it. Everything else specifies details about the gradient mask itself.

Applying the SVG effect to (X)HTML is accomplished by assigning the `target` class defined above to an element, like this:

```html
<p class="target" style="background:lime;">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua. Ut enim ad minim veniam.
</p>
<p>
    Lorem ipsum dolor sit amet, consectetur adipisicing
    <b class="target">elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua.</b>
    Ut enim ad minim veniam.
</p>
```

The above example would be rendered with the mask applied to it.

{{EmbedLiveSample('Example_Masking', 650, 200)}}

### Example: Clipping

This example demonstrates using SVG to clip HTML content. Notice that even the clickable areas for links are clipped.

```html
<p class="target" style="background:lime;">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua. Ut enim ad minim veniam.
</p>
<p>
    Lorem ipsum dolor sit amet, consectetur adipisicing
    <b class="target">elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua.</b>
    Ut enim ad minim veniam.
</p>

<button onclick="toggleRadius()">Toggle radius</button>

<svg height="0">
  <clipPath id="clipping-path-1" clipPathUnits="objectBoundingBox">
    <circle cx="0.25" cy="0.25" r="0.25" id="circle"/>
    <rect x="0.5" y="0.2" width="0.5" height="0.8"/>
  </clipPath>
</svg>
```

```css
.target {
  clip-path: url(#clipping-path-1);
}
p {
  width: 300px;
  border: 1px solid #000;
  display: inline-block;
}
```

This establishes a clipping area made of a circle and rectangle, assigns it the ID `#clipping-path-1`, then references it in the CSS. The clip path can be assigned to any element with the `target` class.

You can make changes to the SVG in real time and see them immediately affect the rendering of the HTML. For example, you can resize the circle in the clip path established above:

```js
function toggleRadius() {
  var circle = document.getElementById("circle");
  circle.r.baseVal.value = 0.40 - circle.r.baseVal.value;
}
```

{{EmbedLiveSample('Example_Clipping', 650, 200)}}

### Example: Filtering

This demonstrates applying a filter to HTML content using SVG. It establishes several filters, which are applied with CSS to three elements in both the normal and mouse [hover](/ko/docs/Web/CSS/:hover) states.

```html
<p class="target" style="background: lime;">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua. Ut enim ad minim veniam.
</p>
<pre class="target">lorem</pre>
<p>
    Lorem ipsum dolor sit amet, consectetur adipisicing
    <b class="target">elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua.</b>
    Ut enim ad minim veniam.
</p>
```

Any SVG filter can be applied this way. For example, to apply a blur effect, you might use:

```html
<svg height="0">
  <filter id="f1">
    <feGaussianBlur stdDeviation="3"/>
  </filter>
</svg>
```

You could also apply a color matrix:

```html
<svg height="0">
  <filter id="f2">
    <feColorMatrix values="0.3333 0.3333 0.3333 0 0
                           0.3333 0.3333 0.3333 0 0
                           0.3333 0.3333 0.3333 0 0
                           0      0      0      1 0"/>
  </filter>
</svg>
```

And some more filters:

```html
<svg height="0">
  <filter id="f3">
    <feConvolveMatrix filterRes="100 100" style="color-interpolation-filters:sRGB"
      order="3" kernelMatrix="0 -1 0   -1 4 -1   0 -1 0" preserveAlpha="true"/>
  </filter>
  <filter id="f4">
    <feSpecularLighting surfaceScale="5" specularConstant="1"
                        specularExponent="10" lighting-color="white">
      <fePointLight x="-5000" y="-10000" z="20000"/>
    </feSpecularLighting>
  </filter>
  <filter id="f5">
    <feColorMatrix values="1 0 0 0 0
                           0 1 0 0 0
                           0 0 1 0 0
                           0 1 0 0 0" style="color-interpolation-filters:sRGB"/>
  </filter>
</svg>
```

The five filters are applied using the following CSS:

```css
p.target { filter:url(#f3); }
p.target:hover { filter:url(#f5); }
b.target { filter:url(#f1); }
b.target:hover { filter:url(#f4); }
pre.target { filter:url(#f2); }
pre.target:hover { filter:url(#f3); }
```

{{EmbedLiveSample('Example_Filtering', 650, 200)}}

<p class="hidden"><a class="button liveSample" href="/files/3329/filterdemo.xhtml">View this example live</a></p>

### Example: Blurred Text

In order to blur text, Webkit based browsers have a (prefixed) CSS filter called blur (see also [CSS filter](/ko/docs/Web/CSS/filter#blur%28%29_2)). You can achieve the same effect using SVG filters.

```html
<p class="blur">Time to clean my glasses</p>
<svg height="0">
  <defs>
    <filter id="wherearemyglasses" x="0" y="0">
    <feGaussianBlur in="SourceGraphic" stdDeviation="1"/>
    </filter>
  </defs>
</svg>
```

You can apply the SVG and the CSS filter in the same class:

```css
.blur { filter: url(#wherearemyglasses); }
```

{{ EmbedLiveSample('Example_Blurred_Text', 300, 100) }}

Blurring is computation heavy, so ensure to use it sparingly, especially in elements that get scrolled or animated.

## Using external references

SVG used for clipping, masking, and filtering can be loaded from an external source, as long as that source comes from the same origin as the HTML document to which it's applied.

For example, if your CSS is in a file named `default.css`, it can look like this:

```css
.target { clip-path: url(resources.svg#c1); }
```

The SVG is then imported from a file named `resources.svg`, using the clip path with the ID `c1`.

## See also

- [SVG](/ko/docs/SVG)
- [SVG Effects for HTML Content](http://robert.ocallahan.org/2008/06/applying-svg-effects-to-html-content_04.html) (blog post)
