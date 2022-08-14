---
title: Element.clientLeft
slug: Web/API/Element/clientLeft
translation_of: Web/API/Element/clientLeft
---
<div>{{ APIRef("DOM") }}</div>

<p>엘리먼트의 왼쪽 테두리의 너비 (픽셀 단위)입니다. 엘리먼트의 텍스트 방향이 오른쪽에서 왼쪽이고 오버플로로 인해 왼쪽 수직 스크롤 막대가 렌더링되는 경우 수직 스크롤 막대의 너비가 포함됩니다. <code>clientLeft</code>는 왼쪽 여백 또는 왼쪽 패딩을 포함하지 않습니다. <code>clientLeft</code>는 읽기 전용입니다.</p>

<p><a href="en/Gecko">Gecko</a> 기반 응용 프로그램은 Gecko 1.9부터 clientLeft를 지원합니다. (<a href="en/Firefox_3">Firefox 3</a>, {{ Bug(111207) }}에서 구현됨). 이 속성은 Firefox 2 이전 버전은 지원하지 않습니다.</p>

<p><a href="http://kb.mozillazine.org/Layout.scrollbar.side"><code>layout.scrollbar.side</code> 환경 설정</a>이 1 또는 3으로 설정되고 텍스트 방향이 RTL로 설정된 경우 세로 스크롤 막대가 왼쪽에 배치되며 이는 clientLeft가 계산되는 방식에 영향을줍니다.</p>

<div class="note">
<p><strong>Note:</strong> 이 속성은 값을 정수로 반올림합니다. 소수점 단위 값이 필요할 경우, {{ domxref("element.getBoundingClientRect()") }}을 사용하십시오.</p>
</div>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox">var <var>left</var> = <var>element</var>.clientLeft;
</pre>

<h2 id="Example">Example</h2>

<div id="offsetContainer" style="margin: 40px 50px 50px; background-color: rgb(255, 255, 204); border: 4px dashed black; color: black; position: relative; display: inline-block;">
<div id="idDiv" style="margin: 24px 29px; border: 24px black solid; padding: 0px 28px; width: 199px; height: 102px; overflow: auto; background-color: white; font-size: 13px!important; font-family: Arial, sans-serif;">
<p id="PaddingTopLabel" style="text-align: center; font-style: italic; font-weight: bold; font-size: 13px!important; font-family: Arial, sans-serif; margin: 0px;">padding-top</p>

<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

<p id="PaddingBottomLabel" style="text-align: center; font-style: italic; font-weight: bold; font-size: 13px!important; font-family: Arial, sans-serif; margin: 0px;">padding-bottom</p>
</div>
<strong style="color: blue; font-family: arial,sans-serif; font-size: 13px!important; font-weight: bold; left: -32px; position: absolute; top: 85px;">Left</strong> <strong style="color: blue; font-family: arial,sans-serif; font-size: 13px!important; font-weight: bold; left: 170px; position: absolute; top: -24px;">Top</strong> <strong style="color: blue; font-family: arial,sans-serif; font-size: 13px!important; font-weight: bold; left: 370px; position: absolute; top: 85px;">Right</strong> <strong style="color: blue; font-family: arial,sans-serif; font-size: 13px!important; font-weight: bold; left: 164px; position: absolute; top: 203px;">Bottom</strong> <em>margin-top</em> <em>margin-bottom</em> <em>border-top</em> <em>border-bottom</em></div>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat("api.Element.clientLeft")}}</p>

<h2 id="Notes">Notes</h2>

<p><code>clientLeft</code> was first introduced in the MS IE DHTML object model.</p>

<p>The position of the vertical scrollbar in right–to–left text direction set on the element will depend on the <a class="external" href="http://kb.mozillazine.org/Layout.scrollbar.side"><code>layout.scrollbar.side</code> preference</a></p>

<p>When element has <code>display: inline</code>, then <code>clientLeft</code> returns <code>0</code> regardless of the element's border.</p>
