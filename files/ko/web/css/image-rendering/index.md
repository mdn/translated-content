---
title: image-rendering
slug: Web/CSS/image-rendering
tags:
  - CSS
  - CSS Images
  - CSS Property
  - Reference
translation_of: Web/CSS/image-rendering
---
<div>{{CSSRef}}</div>

<p><strong><code>image-rendering</code></strong> <a href="/ko/docs/Web/CSS" title="CSS">CSS</a> 프로퍼티는 브라우저의 이미지 스케일링 방식에 대한 힌트를 제공합니다. 이 프로퍼티는 엘리먼트 자신에게 적용시킵니다. 스케일링(크기변경)이 안 된 이미지에게는 적용되지 않습니다.</p>

<p>예를들어, 100x100 픽셀의 이미지가 있는데 페이지에서 요구하는 이미지는 200x200픽셀 (혹은 50x50px)이라면, 이미지는 새로운 면적만큼의 특정 알고리즘으로 인해 확대(혹은 축소)됩니다. 스케일링은 사용자의 상호작용(줌기능) 으로 인해 일어날겁니다.</p>

<p>{{cssinfo}}</p>

<h2 id="구문">구문</h2>

<pre class="brush:css">/* 키워드 값 */
image-rendering: auto;
image-rendering: crisp-edges;
image-rendering: pixelated;

/* 전역 값 */
image-rendering: inherit;
image-rendering: initial;
image-rendering: unset;
</pre>

<h3 id="Values">Values</h3>

<dl>
 <dt><code><strong>auto</strong></code></dt>
 <dd>기본값입니다.<br>
 이미지의 스케일링 알고리즘은 이미지를 최대치로 활용해서 나타냅니다. 특히, 스케일링 알고리즘은 이중선형보간법같은 알고리즘이 보기에 괜찮은 "부드러운"색상을 나타냅니다. 사진같은 종류의 것들을 위해 GEcko엔진 1.9버전(파이어폭스 3.0) 에서는 이중선형 리샘플링(고품질) 을 사용해왔습니다.</dd>
</dl>

<dl>
</dl>

<dl>
 <dt><code><strong>crisp-edges</strong></code></dt>
 <dd>이미지 스케일링 알고리즘은 반드시 색상대조와 이미지의 표준을 맞게 보존해야 합니다. 그리고 smooth 하지 못한 색상 혹은 이미지의 흐림효과 또한 알고리즘 공정에 있어야합니다. 이 속성은 픽셀아트같은 의도되어 만들어진 이미지들에게 필요합니다.</dd>
 <dt><code><strong>pixelated</strong></code></dt>
 <dd>이미지 스케일링을 크게 확대할 때는 "nearest neighbor" 혹은 비슷한 알고리즘을 반드시 사용해야 합니다. 그래서 이미지의 큰 픽셀로 구성해서 나타낼 수 있습니다. 이미지를 작게 축소할 때는 "auto" 속성과 같습니다.</dd>
</dl>

<div class="note">The values <span id="cke_bm_145S" class="hidden"> </span><code>optimizeQuality</code> and <code>optimizeSpeed</code> present in early draft (and coming from its SVG counterpart) are defined as synonyms for the <code>auto</code> value.</div>

<h3 id="공식_문법">공식 문법</h3>

{{csssyntax}}

<h2 id="예제">예제</h2>

<pre class="brush:css;">/* applies to GIF and PNG images; avoids blurry edges */

img[src$=".gif"], img[src$=".png"] {
                   image-rendering: -moz-crisp-edges;         /* Firefox */
                   image-rendering:   -o-crisp-edges;         /* Opera */
                   image-rendering: -webkit-optimize-contrast;/* Webkit (non-standard naming) */
                   image-rendering: crisp-edges;
                   -ms-interpolation-mode: nearest-neighbor;  /* IE (non-standard property) */
                 }

</pre>

<pre class="brush:css;">div {
        background: url(chessboard.gif) no-repeat 50% 50%;
        image-rendering: -moz-crisp-edges;         /* Firefox */
        image-rendering:   -o-crisp-edges;         /* Opera */
        image-rendering: -webkit-optimize-contrast;/* Webkit (non-standard naming) */
        image-rendering: crisp-edges;
        -ms-interpolation-mode: nearest-neighbor;  /* IE (non-standard property) */
}</pre>

<p>{{EmbedLiveSample('예제')}}</p>

<h3 id="Live_Examples">Live Examples</h3>

<h4 id="image-rendering_auto">image-rendering: auto;</h4>

<p style="image-rendering: auto;">78% <img alt="squares.gif" src="/@api/deki/files/3612/=squares.gif" style="height: 39px; width: 39px;"> 100% <img alt="squares.gif" src="/@api/deki/files/3612/=squares.gif" style="height: 50px; width: 50px;"> 138% <img alt="squares.gif" src="/@api/deki/files/3612/=squares.gif" style="height: 69px; width: 69px;"> downsized <img alt="hut.jpg" src="/@api/deki/files/3613/=hut.jpg" style="height: 89px; width: 89px;"> upsized <img alt="blumen.jpg" src="/@api/deki/files/3611/=blumen.jpg" style="height: 89px; width: 77px;"></p>

<h4 id="image-rendering_pixelated_(-ms-interpolation-mode_nearest-neighbor)">image-rendering: pixelated; (-ms-interpolation-mode: nearest-neighbor)</h4>

<p style="-ms-interpolation-mode: nearest-neighbor; image-rendering: pixelated;">78% <img alt="squares.gif" src="/@api/deki/files/3612/=squares.gif" style="height: 39px; width: 39px;"> 100% <img alt="squares.gif" src="/@api/deki/files/3612/=squares.gif" style="height: 50px; width: 50px;"> 138% <img alt="squares.gif" src="/@api/deki/files/3612/=squares.gif" style="height: 69px; width: 69px;"> downsized <img alt="hut.jpg" src="/@api/deki/files/3613/=hut.jpg" style="height: 89px; width: 89px;"> upsized <img alt="blumen.jpg" src="/@api/deki/files/3611/=blumen.jpg" style="height: 89px; width: 77px;"></p>

<h4 id="image-rendering_crisp-edges_(-webkit-optimize-contrast)">image-rendering: crisp-edges; (-webkit-optimize-contrast)</h4>

<p style="image-rendering: -webkit-optimize-contrast; image-rendering: -moz-crisp-edges; image-rendering: -o-crisp-edges; image-rendering: crisp-edges;">78% <img alt="squares.gif" src="/@api/deki/files/3612/=squares.gif" style="height: 39px; width: 39px;"> 100% <img alt="squares.gif" src="/@api/deki/files/3612/=squares.gif" style="height: 50px; width: 50px;"> 138% <img alt="squares.gif" src="/@api/deki/files/3612/=squares.gif" style="height: 69px; width: 69px;"> downsized <img alt="hut.jpg" src="/@api/deki/files/3613/=hut.jpg" style="height: 89px; width: 89px;"> upsized <img alt="blumen.jpg" src="/@api/deki/files/3611/=blumen.jpg" style="height: 89px; width: 77px;"></p>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<div class="blockIndicator note">
<p><strong>Note:</strong> Though initially close from the SVG <code>image-rendering</code> property, the values are quite different now.</p>
</div>

<h2 id="Browser_compatibility" name="Browser_compatibility">브라우저 지원</h2>

<p>{{Compat("css.properties.image-rendering")}}</p>
