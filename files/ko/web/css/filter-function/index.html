---
title: <filter-function>
slug: Web/CSS/filter-function
tags:
  - CSS
  - CSS Data Type
  - Filter Effects
  - Reference
translation_of: Web/CSS/filter-function
---
<div>{{cssref}}</div>

<p><span class="seoSummary"><a href="/ko/docs/Web/CSS">CSS</a> <code><strong>&lt;filter-function&gt;</strong></code> <a href="/ko/docs/Web/CSS/CSS_Types">자료형</a>은 입력 이미지의 모습을 변형할 수 있는 그래픽 효과를 나타냅니다.</span> {{cssxref("filter")}}와 {{cssxref("backdrop-filter")}} 속성에서 사용합니다.</p>

<h2 id="구문">구문</h2>

<p><code>&lt;filter-function&gt;</code> 자료형은 다음 목록의 필터 중 하나를 사용해 지정할 수 있습니다. 각 함수는 매개변수를 받아야 하며, 유효하지 않은 값을 전달하면 필터를 적용하지 않습니다.</p>

<dl>
 <dt>{{cssxref("filter-function/blur", "blur()")}}</dt>
 <dd>이미지를 흐리게 만듭니다.</dd>
 <dt>{{cssxref("filter-function/brightness", "brightness()")}}</dt>
 <dd>이미지의 밝기를 조절합니다.</dd>
 <dt>{{cssxref("filter-function/contrast", "contrast()")}}</dt>
 <dd>이미지의 대비를 조절합니다.</dd>
 <dt>{{cssxref("filter-function/drop-shadow", "drop-shadow()")}}</dt>
 <dd>이미지의 뒤에 그림자를 적용합니다.</dd>
 <dt>{{cssxref("filter-function/grayscale", "grayscale()")}}</dt>
 <dd>이미지를 흑백으로 변환합니다.</dd>
 <dt>{{cssxref("filter-function/hue-rotate", "hue-rotate()")}}</dt>
 <dd>이미지의 전체 색조를 조절합니다.</dd>
 <dt>{{cssxref("filter-function/invert", "invert()")}}</dt>
 <dd>이미지의 색을 반전합니다.</dd>
 <dt>{{cssxref("filter-function/opacity", "opacity()")}}</dt>
 <dd>이미지의 투명도를 조절합니다.</dd>
 <dt>{{cssxref("filter-function/saturate", "saturate()")}}</dt>
 <dd>이미지의 채도를 조절합니다.</dd>
 <dt>{{cssxref("filter-function/sepia", "sepia()")}}</dt>
 <dd>이미지에 세피아 톤을 적용합니다.</dd>
</dl>

<h2 id="예제">예제</h2>

<h3 id="필터_함수_비교">필터 함수 비교</h3>

<p>이 예제는 간단한 그래픽과 함께 여러 가지 필터를 선택할 수 있는 선택 메뉴와, 필터의 값을 조절할 수 있는 슬라이더를 제공합니다. 컨트롤을 조절하면 필터가 실시간으로 변화하므로 각 필터의 효과를 편리하게 알아볼 수 있습니다.</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html notranslate">&lt;div&gt;&lt;/div&gt;
&lt;ul&gt;
  &lt;li&gt;
    &lt;label for="filter-select"&gt;필터 함수 선택:&lt;/label&gt;
    &lt;select id="filter-select"&gt;
      &lt;option selected&gt;blur&lt;/option&gt;
      &lt;option&gt;brightness&lt;/option&gt;
      &lt;option&gt;contrast&lt;/option&gt;
      &lt;option&gt;drop-shadow&lt;/option&gt;
      &lt;option&gt;grayscale&lt;/option&gt;
      &lt;option&gt;hue-rotate&lt;/option&gt;
      &lt;option&gt;invert&lt;/option&gt;
      &lt;option&gt;opacity&lt;/option&gt;
      &lt;option&gt;saturate&lt;/option&gt;
      &lt;option&gt;sepia&lt;/option&gt;
    &lt;/select&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;input type="range"&gt;&lt;output&gt;&lt;/output&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;p&gt;Current value: &lt;code&gt;&lt;/code&gt;&lt;/p&gt;
  &lt;/li&gt;
&lt;/ul&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css notranslate">div {
  width: 300px;
  height: 300px;
  background: url(https://media.prod.mdn.mozit.cloud/attachments/2020/07/29/17350/3b4892b7e820122ac6dd7678891d4507/firefox.png) no-repeat center;
}

li {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

input {
  width: 60%
}

output {
  width: 5%;
  text-align: center;
}

select {
  width: 40%;
  margin-left: 2px;
}</pre>

<h4 id="JavaScript">JavaScript</h4>

<pre class="brush: js notranslate">const selectElem = document.querySelector('select');
const divElem = document.querySelector('div');
const slider = document.querySelector('input');
const output = document.querySelector('output');
const curValue = document.querySelector('p code');

selectElem.addEventListener('change', () =&gt; {
  setSlider(selectElem.value);
  setDiv(selectElem.value);
});

slider.addEventListener('input', () =&gt; {
  setDiv(selectElem.value);
});

function setSlider(filter) {
  if(filter === 'blur') {
    slider.value = 0;
    slider.min = 0;
    slider.max = 30;
    slider.step = 1;
    slider.setAttribute('data-unit', 'px');
  } else if(filter === 'brightness' || filter === 'contrast' || filter === 'saturate') {
    slider.value = 1;
    slider.min = 0;
    slider.max = 4;
    slider.step = 0.05;
    slider.setAttribute('data-unit', '');
  } else if(filter === 'drop-shadow') {
    slider.value = 0;
    slider.min = -20;
    slider.max = 40;
    slider.step = 1;
    slider.setAttribute('data-unit', 'px');
  } else if(filter === 'opacity') {
    slider.value = 1;
    slider.min = 0;
    slider.max = 1;
    slider.step = 0.01;
    slider.setAttribute('data-unit', '');
  } else if(filter === 'grayscale' || filter === 'invert' || filter === 'sepia') {
    slider.value = 0;
    slider.min = 0;
    slider.max = 1;
    slider.step = 0.01;
    slider.setAttribute('data-unit', '');
  } else if(filter === 'hue-rotate') {
    slider.value = 0;
    slider.min = 0;
    slider.max = 360;
    slider.step = 1;
    slider.setAttribute('data-unit', 'deg');
  }
}

function setDiv(filter) {
  if(filter === 'drop-shadow') {
    divElem.style.filter = `${selectElem.value}(${Math.round(slider.value)}${slider.getAttribute('data-unit')} ${Math.round(slider.value)}${slider.getAttribute('data-unit')} ${Math.round(Math.abs(slider.value/2))}${slider.getAttribute('data-unit')})`;
  } else {
    divElem.style.filter = `${selectElem.value}(${slider.value}${slider.getAttribute('data-unit')}`;
  }

  updateOutput();
  updateCurValue();
}

function updateOutput() {
  output.textContent = slider.value;
}

function updateCurValue() {
  curValue.textContent = `필터: ${divElem.style.filter}`;
}

setSlider(selectElem.value);
setDiv(selectElem.value);</pre>

<h4 id="결과">결과</h4>

<p>{{EmbedLiveSample('필터_함수_비교', '100%', 500)}}</p>

<h2 id="명세">명세</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comments</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{ SpecName('Filters 1.0', '#typedef-filter-function', '&lt;filter-function&gt;') }}</td>
   <td>{{ Spec2('Filters 1.0') }}</td>
   <td>Initial definition.</td>
  </tr>
 </tbody>
</table>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>자료형을 사용하는 속성: {{cssxref("filter")}}, {{cssxref("backdrop-filter")}}</li>
</ul>
