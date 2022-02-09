---
title: Console.group()
slug: Web/API/Console/group
translation_of: Web/API/Console/group
---
<div>{{APIRef("Console API")}}</div>

<p><a href="/en-US/docs/Tools/Web_Console">Web Console</a> log 에 새로운 인라인 그룹을 만듭니다. This indents all following output by an additional level, until {{domxref("console.groupEnd()")}} is called.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="구문">구문</h2>

<pre>console.group([label]);</pre>

<h2 id="매개변수">매개변수</h2>

<p> </p>

<dl>
 <dt><code>label</code></dt>
 <dd>Label for the group. Optional. (Chrome 59 tested) Does not work with <code>console.groupEnd()</code>.</dd>
</dl>

<p>{{h3_gecko_minversion("Using groups in the console", "9.0")}}</p>

<p>You can use nested groups to help organize your output by visually associating related messages. To create a new nested block, call <code>console.group()</code>. The <code>console.groupCollapsed()</code> method is similar, but the new block is collapsed and requires clicking a disclosure button to read it.</p>

<p><strong>Note:</strong> From Gecko 9 until Gecko 51, the <code>groupCollapsed()</code> method was the same as <code>group()</code>. Collapsed groups are fully supported starting in Gecko 52. See {{bug("1088360")}}.</p>

<p>To exit the current group, call <code>console.groupEnd()</code>. For example, given this code:</p>

<pre><code>console.log("This is the outer level");
console.group();
console.log("Level 2");
console.group();
console.log("Level 3");
console.warn("More of level 3");
console.groupEnd();
console.log("Back to level 2");
console.groupEnd();
console.log("Back to the outer level");</code></pre>

<p>The output looks like this:</p>

<p><img alt="A screenshot of messages nested in the console output." src="https://developer.mozilla.org/@api/deki/files/6082/=nesting.png"></p>

<p>See <a href="https://developer.mozilla.org/en-US/docs/Web/API/console#Using_groups_in_the_console">Using groups in the console</a> in the documentation of {{domxref("console")}} for more details.</p>

<p> </p>

<h2 id="설명">설명</h2>

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
   <td>{{SpecName("Console API", "#group", "console.group()")}}</td>
   <td>{{Spec2("Console API")}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p> </p>

<p>{{Compat("api.Console.group")}}</p>

<p> </p>

<h2 id="더_보기">더 보기</h2>

<ul>
 <li><a class="external" href="http://www.opera.com/dragonfly/documentation/console/">Opera Dragonfly documentation: Console</a></li>
</ul>
