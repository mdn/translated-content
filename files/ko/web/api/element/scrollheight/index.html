---
title: Element.scrollHeight
slug: Web/API/Element/scrollHeight
tags:
  - API
  - Element
  - Property
  - Reference
translation_of: Web/API/Element/scrollHeight
---
<p>{{ APIRef("DOM") }}</p>

<p><strong><code>Element.scrollHeight</code></strong> 읽기 전용 속성은 요소 콘텐츠의 총 높이를 나타내며, 바깥으로 넘쳐서 보이지 않는 콘텐츠도 포함합니다.</p>

<p><code>scrollHeight</code> 값은 수직 스크롤바를 사용하지 않고 요소의 콘텐츠를 모두 나타낼 때 필요한 최소 높이의 값과 동일합니다. 높이 측정은 {{domxref("Element.clientHeight", "clientHeight")}}와 동일한 방법을 사용하여 요소의 안쪽 여백은 포함하고, 테두리와 바깥 여백, (존재하는 경우) 수평 스크롤바의 높이는 포함하지 않습니다. 또한 {{cssxref("::before")}}, {{cssxref("::after")}} 등 의사 요소의 높이도 결과에 포함합니다. 요소의 콘텐츠를 수직 스크롤바 없이 모두 보일 수 있는 경우의 <code>scrollHeight</code>는 <code>clientHeight</code>와 동일합니다.</p>

<div class="note">
<p><code>scrollHeight</code>의 반환 값은 정수로 반올림됩니다. 소수점을 포함한 값이 필요한 경우 {{domxref("Element.getBoundingClientRect()")}}를 사용하세요.</p>
</div>

<h2 id="Syntax_and_values" name="Syntax_and_values">구문</h2>

<pre class="eval notranslate">var <em>intElemScrollHeight</em> = <em>element</em>.scrollHeight;
</pre>

<p><em>intElemScrollHeight</em>은 요소 <code>scrollHeight</code>의 픽셀 값을 저장하는 정수형 변수입니다.</p>

<h2 id="Example" name="Example">예제</h2>

<div id="offsetContainer" style="margin: 40px 50px 50px; background-color: rgb(255, 255, 204); border: 4px dashed black; color: black; position: relative; display: inline-block;">
<div id="idDiv" style="margin: 24px 29px; border: 24px black solid; padding: 0px 28px; width: 199px; height: 102px; overflow: auto; background-color: white; font-size: 13px!important; font-family: Arial, sans-serif;">
<p id="PaddingTopLabel" style="text-align: center; font-style: italic; font-weight: bold; font-size: 13px!important; font-family: Arial, sans-serif; margin: 0px;">padding-top</p>

<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

<p id="PaddingBottomLabel" style="text-align: center; font-style: italic; font-weight: bold; font-size: 13px!important; font-family: Arial, sans-serif; margin: 0px;">padding-bottom</p>
</div>
<strong>Left</strong> <strong>Top</strong> <strong style="color: blue; font-family: Arial,sans-serif; font-size: 13px!important; font-weight: bold; left: 370px; position: absolute; top: 85px;">Right</strong> <strong style="color: blue; font-family: Arial,sans-serif; font-size: 13px!important; font-weight: bold; left: 164px; position: absolute; top: 203px;">Bottom</strong> <em>margin-top</em> <em>margin-bottom</em> <em>border-top</em> <em>border-bottom</em></div>

<p><img alt="Image:scrollHeight.png" class="internal" src="/@api/deki/files/840/=ScrollHeight.png"></p>

<h2 id="문제와_해결책">문제와 해결책</h2>

<h3 id="요소를_끝까지_스크롤했는지_판별하기">요소를 끝까지 스크롤했는지 판별하기</h3>

<p>다음 등식이 참인 경우 요소를 끝까지 스크롤한 것입니다.</p>

<pre class="brush: js notranslate">element.scrollHeight - element.scrollTop === element.clientHeight</pre>

<p>컨테이너가 스크롤 대신 오버플로된 자식을 노출하는 경우, 다음 검사로 컨테이너가 스크롤 가능한지 알아볼 수 있습니다.</p>

<pre class="brush: js notranslate">window.getComputedStyle(element).overflowY === 'visible'
window.getComputedStyle(element).overflowY !== 'hidden'</pre>

<h2 id="scrollHeight_Demo" name="scrollHeight_Demo">예제</h2>

<p><code><a href="/en-US/docs/DOM/element.onscroll" title="en-US/docs/DOM/element.onscroll">onscroll</a></code>이벤트를 함께 사용하여, 내용을 다 읽었는지 확인할 수 있습니다. (<code><a href="/en-US/docs/DOM/element.scrollTop" title="en-US/docs/DOM/element.scrollTop">element.scrollTop</a></code> 과 <code><a href="/en-US/docs/DOM/element.clientHeight" title="en-US/docs/DOM/element.clientHeight">element.clientHeight</a></code> 를 참조하세요).</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;form name="registration"&gt;
  &lt;p&gt;
    &lt;textarea id="rules"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at laoreet magna.
Aliquam erat volutpat. Praesent molestie, dolor ut eleifend aliquam, mi ligula ultrices sapien, quis cursus
neque dui nec risus. Duis tincidunt lobortis purus eu aliquet. Quisque in dignissim magna. Aenean ac lorem at
velit ultrices consequat. Nulla luctus nisi ut libero cursus ultrices. Pellentesque nec dignissim enim. Phasellus
ut quam lacus, sed ultricies diam. Vestibulum convallis rutrum dolor, sit amet egestas velit scelerisque id.
Proin non dignissim nisl. Sed mi odio, ullamcorper eget mattis id, malesuada vitae libero. Integer dolor lorem,
mattis sed dapibus a, faucibus id metus. Duis iaculis dictum pulvinar. In nisi nibh, dapibus ac blandit at, porta
at arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent
dictum ipsum aliquet erat eleifend sit amet sollicitudin felis tempus. Aliquam congue cursus venenatis. Maecenas
luctus pellentesque placerat. Mauris nisl odio, condimentum sed fringilla a, consectetur id ligula. Praesent sem
sem, aliquet non faucibus vitae, iaculis nec elit. Nullam volutpat, lectus et blandit bibendum, nulla lorem congue
turpis, ac pretium tortor sem ut nibh. Donec vel mi in ligula hendrerit sagittis. Donec faucibus viverra fermentum.
Fusce in arcu arcu. Nullam at dignissim massa. Cras nibh est, pretium sit amet faucibus eget, sollicitudin in
ligula. Vivamus vitae urna mauris, eget euismod nunc. Aenean semper gravida enim non feugiat. In hac habitasse
platea dictumst. Cras eleifend nisl volutpat ante condimentum convallis. Donec varius dolor malesuada erat
consequat congue. Donec eu lacus ut sapien venenatis tincidunt. Quisque sit amet tellus et enim bibendum varius et
a orci. Donec aliquet volutpat scelerisque. Proin et tortor dolor. Ut aliquet, dolor a mattis sodales, odio diam
pulvinar sem, egestas pretium magna eros vitae felis. Nam vitae magna lectus, et ornare elit. Morbi feugiat, ipsum
ac mattis congue, quam neque mollis tortor, nec mollis nisl dolor a tortor. Maecenas varius est sit amet elit
interdum quis placerat metus posuere. Duis malesuada justo a diam vestibulum vel aliquam nisi ornare. Integer
laoreet nisi a odio ornare non congue turpis eleifend. Cum sociis natoque penatibus et magnis dis parturient montes,
nascetur ridiculus mus. Cras vulputate libero sed arcu iaculis nec lobortis orci fermentum.
    &lt;/textarea&gt;
  &lt;/p&gt;
  &lt;p&gt;
    &lt;input type="checkbox" name="accept" id="agree" /&gt;
    &lt;label for="agree"&gt;동의합니다&lt;/label&gt;
    &lt;input type="submit" id="nextstep" value="다음" /&gt;
  &lt;/p&gt;
&lt;/form&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css notranslate">#notice {
  display: inline-block;
  margin-bottom: 12px;
  border-radius: 5px;
  width: 600px;
  padding: 5px;
  border: 2px #7FDF55 solid;
}

#rules {
  width: 600px;
  height: 130px;
  padding: 5px;
  border: #2A9F00 solid 2px;
  border-radius: 5px;
}</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js notranslate">function checkReading () {
  if (checkReading.read) {
    return;
  }
  checkReading.read = this.scrollHeight - this.scrollTop === this.clientHeight;
  document.registration.accept.disabled = document.getElementById("nextstep").disabled = !checkReading.read;
  checkReading.noticeBox.innerHTML = checkReading.read ? "감사합니다" : "다음 내용을 확인해주십시오";
}

onload = function () {
  var oToBeRead = document.getElementById("rules");
  checkReading.noticeBox = document.createElement("span");
  document.registration.accept.checked = false;
  checkReading.noticeBox.id = "notice";
  oToBeRead.parentNode.insertBefore(checkReading.noticeBox, oToBeRead);
  oToBeRead.parentNode.insertBefore(document.createElement("br"), oToBeRead);
  oToBeRead.onscroll = checkReading;
  checkReading.call(oToBeRead);
}</pre>

<p>{{ EmbedLiveSample('scrollHeight_Demo', '640', '400') }}</p>

<h2 id="Specification">명세</h2>

{{Specifications}}

<h2 id="Supported" name="Supported">브라우저 호환성</h2>

<p>{{Compat("api.Element.scrollHeight")}}</p>

<h2 id="See_Also" name="See_Also">같이 보기</h2>

<ul>
 <li>{{domxref("Element.clientHeight")}}</li>
 <li>{{domxref("Element.offsetHeight")}}</li>
 <li><a href="/en-US/docs/Determining_the_dimensions_of_elements" title="en/Determining_the_dimensions_of_elements">Determining the dimensions of elements</a></li>
</ul>
