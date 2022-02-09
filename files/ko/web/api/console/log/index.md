---
title: Console.log()
slug: Web/API/Console/log
tags:
  - API
  - console
  - console.log()
  - 메소드
translation_of: Web/API/Console/log
---
<div>{{APIRef("Console API")}}</div>

<p>Web Console에 메시지를 출력합니다.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="구문">구문</h2>

<pre class="syntaxbox">console.log(<em>obj1</em> [, <em>obj2</em>, ..., <em>objN</em>]);
console.log(<em>msg</em> [, <em>subst1</em>, ..., <em>substN</em>]);
</pre>

<h2 id="매개_변수">매개 변수</h2>

<dl>
 <dt><code>obj1</code> ... <code>objN</code></dt>
 <dd>출력할 자바스크립트 객체의 모음입니다. 각각의 자바스크립트 객체들의 문자열 표현은 순서가 있는 목록에 추가되며, 출력됩니다. </dd>
 <dt><code>msg</code></dt>
 <dd>0개 이상의 치환 문자열(ex:%d, %s)들을 포함하는 자바스크립트 문자열입니다.</dd>
 <dt><code>subst1</code> ... <code>substN</code></dt>
 <dd><code>msg</code> 내의 치환 문자열들을 치환할 자바스크립트 객체들입니다. 이것은 추가적인 출력 형식 제어권을 제공합니다.</dd>
</dl>

<p>자세한 내용은 {{domxref("console")}} 기록 문서에서 <a href="/en-US/docs/DOM/console#Outputting_text_to_the_console">Outputting text to the console</a>을 참조하십시오.</p>

<h2 id="명세">명세</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("Console API", "#consolelogobject--object-", "console.log()")}}</td>
   <td>{{Spec2("Console API")}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="브라우저_호환성">브라우저 호환성</h2>



<p>{{Compat("api.Console.log")}}</p>

<h2 id="console.dir()_과의_차이">console.dir() 과의 차이</h2>

<p>당신은 console.dir() 과 console.log() 가 무엇이 다른지 궁금할 수 있습니다.</p>

<p>DOM 요소들을 콘솔로 보낼 때 Chrome에서 다른 유용한 차이점이 있습니다.</p>

<p><img src="http://i.imgur.com/DozDcYR.png"></p>

<p>안내:</p>

<ul>
 <li><code>console.log는 요소를 HTML과 같은 트리 구조로 출력합니다.</code></li>
 <li><code>console.dir은 요소를 JSON과 같은 트리 구조로 출력합니다.</code></li>
</ul>

<p>구체적으로, console.log는 DOM 요소에 대해 특별한 처리를 제공하지만 console.dir은 그렇지 않습니다. 이것은 종종 DOM JS 객체의 전체 표현을 보려고 할 때 유용합니다.</p>

<p>이것과 다른 함수들에 대한 더 많은 정보가  <a href="https://developers.google.com/chrome-developer-tools/docs/console-api#consoledirobject">Chrome Console API reference</a>에 있습니다.</p>

<h2 id="객체_로깅하기">객체 로깅하기</h2>

<p><code>console.log(obj);</code>를 사용하지 말고 <br>
 <code>console.log(JSON.parse(JSON.stringify(obj)));</code>를 사용하시기 바랍니다.</p>

<p>이 방법은 여러분이 로그를 남길 당시의 <code>obj</code> 값을 보려고 사용했을겁니다. 그러나 많은 브라우저가 값이 갱신 될때마다 끊임없이 바뀐 값을 보여줍니다. 이는 여러분이 원하는 방법이 아닐겁니다.</p>

<h2 id="참조">참조</h2>

<ul>
 <li><a class="external" href="http://www.opera.com/dragonfly/documentation/console/">Opera Dragonfly documentation: Console</a></li>
 <li><a class="external" href="http://msdn.microsoft.com/library/gg589530">MSDN: Using the F12 Tools Console to View Errors and Status</a></li>
 <li><a href="http://getfirebug.com/wiki/index.php/Console_API">Firebug wiki: Console API</a> - Firebug supports additional features in its console.log() implementation, such as <a href="http://www.softwareishard.com/blog/firebug/firebug-tip-styled-logging/">styled logging</a>.</li>
 <li><a href="http://nodejs.org/docs/latest/api/console.html#console_console_log_data">NodeJS: Console API</a></li>
</ul>
