---
title: Date.parse()
slug: Web/JavaScript/Reference/Global_Objects/Date/parse
translation_of: Web/JavaScript/Reference/Global_Objects/Date/parse
browser-compat: javascript.builtins.Date.parse
---
<div>{{JSRef}}</div>

<p>Date.parse () 메서드는 날짜의 문자열 표현을 구문 분석하고 1970 년 1 월 1 일 00:00:00 UTC 이후의 밀리 초 수를 반환하거나 문자열이 인식되지 않거나 경우에 따라 잘못된 날짜 값을 포함하는 경우 NaN을 반환합니다. (예 : 2015-02-31).</p>

<p>ES5까지는 Date.parse를 사용하지 않는 것이 좋습니다. 문자열 구문 분석은 전적으로 구현에 따라 다릅니다. 다른 호스트가 날짜 문자열을 구문 분석하는 방법에는 여전히 많은 차이점이 있으므로 날짜 문자열을 수동으로 구문 분석해야합니다 (다양한 형식을 수용하면 라이브러리가 도움이 될 수 있습니다).</p>

<h2 id="Syntax">Syntax</h2>

<p>Direct call:</p>

<pre class="syntaxbox">Date.parse(<var>dateString</var>)</pre>

<p>Implicit call:</p>

<pre class="syntaxbox">new Date(<var>dateString</var>)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code>dateString</code></dt>
 <dd>RFC2822 또는 ISO 8601 날짜를 나타내는 문자열 (다른 형식도 사용할 수 있지만 예기치 않은 결과 일 수 있음)</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>1970 년 1 월 1 일 00:00:00 UTC 이후 경과 된 밀리 초를 나타내는 숫자 및 주어진 문자열 표현을 파싱하여 얻은 날짜입니다. 인수가 유효한 날짜를 나타내지 않으면 {{jsxref ( "NaN")}}이 반환됩니다.</p>

<h2 id="Description">Description</h2>

<p>parse () 메서드는 날짜 문자열 (예 : "Dec 25, 1995")을 사용하고 1970 년 1 월 1 일 00:00:00 UTC 이후의 밀리 초 수를 반환합니다. 이 함수는 예를 들어 {{jsxref("Date.prototype.setTime()", "setTime()")}} 메서드 및 {{jsxref ( "Global_Objects / Date ","Date ")}} 객체를 반환합니다.</p>

<p>주어진 시간을 나타내는 문자열이 주어지면 parse ()는 시간 값을 반환합니다. RFC2822 / IETF 날짜 구문 (RFC2822 섹션 3.3)을 받아들입니다. "Mon, 25 Dec 1995 13:30:00 GMT". 미국 대륙의 표준 시간대 약어를 이해하지만, 일반적으로 "Mon, 25 Dec 1995 13:30:00 +0430"(그리니치 자오선의 동쪽으로 4 시간 30 분)과 같이 시간대 오프셋을 사용하십시오.</p>

<p>GMT와 UTC는 동등한 것으로 간주됩니다. 현지 시간대는 시간대 정보가없는 RFC2822 섹션 3.3 형식의 인수를 해석하는 데 사용됩니다.</p>

<p>날짜 문자열 구문 분석의 차이로 인해 결과가 일관되지 않아 문자열을 수동으로 구문 분석하는 것이 좋습니다. 특히 "2015-10-12 12:00:00"과 같은 문자열을 NaN으로 구문 분석 할 수있는 다른 ECMAScript 구현, UTC 또는 현지 시간대.</p>

<h3 id="ECMAScript_5_ISO-8601_format_support">ECMAScript 5 ISO-8601 format support</h3>

<p>날짜 시간 문자열은 ISO 8601 형식 일 수 있습니다. 예를 들어, "2011-10-10"(날짜 만) 또는 "2011-10-10T14 : 48 : 00"(날짜 및 시간)을 전달하고 구문 분석 할 수 있습니다. 문자열이 ISO 8601 날짜 인 경우 UTC 시간대는 인수를 해석하는 데 사용됩니다. 문자열이 ISO 8601 형식의 날짜 및 시간이면 로컬로 처리됩니다.</p>

<p>날짜 문자열 구문 분석 중에 시간대 지정자를 사용하여 인수를 해석하지만 반환되는 값은 1970 년 1 월 1 일 00:00:00 UTC와 인수 또는 NaN이 나타내는 시점 사이의 밀리 초입니다.</p>

<p>parse ()는 {{jsxref ( "Date")}}의 정적 메서드이기 때문에 {{jsxref ( "Date")}} 인스턴스의 메서드가 아닌 Date.parse ()로 호출됩니다.</p>

<h3 id="가정_된_시간대의_차이점">가정 된 시간대의 차이점</h3>

<p>"March 7, 2014"이라는 날짜 문자열이 주어지면 parse ()는 현지 시간대를 사용하지만 "2014-03-07"과 같은 ISO 형식이 주어지면 UTC (ES5 및 ECMAScript 2015)의 시간대로 가정합니다. 따라서 {{jsxref ( "Date")}} 이러한 문자열을 사용하여 생성 된 객체는 시스템이 현지 표준 시간대 (UTC)로 설정되어 있지 않으면 지원되는 ECMAScript 버전에 따라 다른 순간을 나타낼 수 있습니다. 즉, 변환되는 문자열의 형식에 따라 동등하게 나타나는 두 개의 날짜 문자열이 서로 다른 두 개의 값을 가질 수 있습니다.</p>

<h3 id="구현_특정_날짜_형식으로_폴백">구현 특정 날짜 형식으로 폴백</h3>

<p>ECMAScript 사양은 다음과 같이 설명합니다. String이 표준 형식을 준수하지 않으면 함수는 구현 특정 휴리스틱 또는 구현 특정 파싱 알고리즘으로 폴백 할 수 있습니다. 인식 할 수없는 문자열 또는 ISO 형식의 문자열에 잘못된 요소 값이 포함 된 날짜로 인해 Date.parse ()가 {{jsxref ( "NaN")}}을 반환합니다.</p>

<p>그러나 ECMA-262에 정의 된 ISO 형식으로 인식되지 않는 날짜 문자열의 잘못된 값은 제공된 브라우저 및 값에 따라 {{jsxref ( "NaN")}}이 될 수도 있고 그렇지 않을 수도 있습니다 (예 :</p>

<pre class="brush: js">// Non-ISO string with invalid date values
new Date('23/25/2014');
</pre>

<p>Firefox 30에서는 2015 년 11 월 25 일, Safari 7에서는 유효하지 않은 날짜로 처리됩니다. 그러나 문자열이 ISO 형식 문자열로 인식되고 유효하지 않은 값을 포함하면 {{jsxref ( "NaN ")}} ES5 이상을 준수하는 모든 브라우저에서 :</p>

<pre class="brush: js">// ISO string with invalid values
new Date('2014-25-23').toISOString();
// returns "RangeError: invalid date" in all es5 compliant browsers
</pre>

<p>SpiderMonkey의 구현 관련 추론은 jsdate.cpp에서 찾을 수 있습니다. 문자열 "10 06 2014"는 부적합한 ISO 형식의 예이므로 맞춤 루틴으로 되돌아갑니다. 파싱이 어떻게 작동하는지에 대한 대략적인 개요를 참조하십시오.</p>

<pre class="brush: js">new Date('10 06 2014');
</pre>

<p>2014 년 10 월 6 일과 2014 년 6 월 10 일이 아닌 현지 날짜로 취급됩니다. 다른 예 :</p>

<pre class="brush: js">new Date('foo-bar 2014').toString();
// returns: "Invalid Date"

Date.parse('foo-bar 2014');
// returns: NaN
</pre>

<h2 id="Examples">Examples</h2>

<h3 id="Using_Date.parse()">Using <code>Date.parse()</code></h3>

<p>IPOdate가 기존의 {{jsxref ( "Date")}} 객체 인 경우 다음과 같이 1995 년 8 월 9 일 (현지 시간)으로 설정할 수 있습니다.</p>

<pre class="brush: js">IPOdate.setTime(Date.parse('Aug 9, 1995'));</pre>

<p>표준이 아닌 날짜 문자열을 파싱하는 몇 가지 다른 예는 다음과 같습니다.</p>

<pre class="brush: js">Date.parse('Aug 9, 1995');</pre>

<p>문자열이 표준 시간대를 지정하지 않고 ISO 형식이 아니므로 표준 시간대 GMT-0300의 807937200000과 다른 표준 시간대의 다른 값을 반환하므로 표준 시간대는 기본적으로 local입니다.</p>

<pre class="brush: js">Date.parse('Wed, 09 Aug 1995 00:00:00 GMT');</pre>

<p>GMT (UTC)가 제공되는 현지 시간대와 상관없이 807926400000을 반환합니다.</p>

<pre class="brush: js">Date.parse('Wed, 09 Aug 1995 00:00:00');</pre>

<p>인수에 표준 시간대 지정자가 없으므로 ISO 형식이 아니기 때문에 표준 시간대 GMT-0300에서 807937200000과 다른 표준 시간대의 다른 값을 반환하므로 로컬로 처리됩니다.</p>

<pre class="brush: js">Date.parse('Thu, 01 Jan 1970 00:00:00 GMT');</pre>

<p>현지 시간대와 상관없이 0을 반환합니다. GMT (UTC)가 제공됩니다.</p>

<pre class="brush: js">Date.parse('Thu, 01 Jan 1970 00:00:00');</pre>

<p>표준 시간대가 제공되지 않고 문자열이 ISO 형식이 아니기 때문에 표준 시간대 GMT-0400의 14400000과 다른 표준 시간대의 다른 값을 반환하므로 현지 표준 시간대가 사용됩니다.</p>

<pre class="brush: js">Date.parse('Thu, 01 Jan 1970 00:00:00 GMT-0400');</pre>

<p>현지 시간대와 관계없이 14400000을 반환합니다. GMT (UTC)가 제공됩니다.</p>

<h2 id="specifications">명세</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">브라우저 호환성</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{jsxref("Date.UTC()")}}</li>
</ul>
