---
title: 'HTML attribute: step'
slug: Web/HTML/Attributes/step
tags:
  - Attribute
  - Attributes
  - constrain validation
  - step
translation_of: Web/HTML/Attributes/step
---
<p>{{HTMLSidebar}}{{draft}}</p>

<p><span class="seoSummary"><strong><code>step</code></strong> 属性は、が従わなければならない刻み値を指定する数値、またはキーワード <code>any</code> です。数値の入力型、たとえば {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}}, {{HTMLElement("input/range", "range")}} 型に有効です。</span></p>

<p><code>step</code> は、スピナーボタンを上下にクリックしたり、範囲上でスライダーを左右に動かしたり、異なる日付タイプを検証したりする際の<em>刻み間隔</em>を設定します。明示的に指定されていない場合、 <code>step</code> の既定値は、 <code>number</code> と <code>range</code> の場合は 1、日付/時刻入力型の場合は1単位 (分、週、月、日) になります。値は正の整数または浮動小数点数、または刻みが指定されておらず、 (<code><a href="/ja/docs/Web/HTML/Attributes/min">min</a></code> や <code><a href="/ja/docs/Web/HTML/Attributes/max">max</a></code> のような他の制約を除いて) すべての値が可能であることを意味する特別な値 <code>any</code> のいずれかでなければなりません。</p>

<p><code>number</code> 入力型の既定の刻み値は 1 で、刻みの基底値が整数でない場合を<em>除き</em>、整数のみを入力することができます。 <code>time</code> の既定の刻み値は 1 秒で、 900 は15分と等しくなります。</p>

<table class="standard-table">
 <caption>step の既定値</caption>
 <thead>
  <tr>
   <th>入力型</th>
   <th>構文</th>
   <th>例</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{HTMLElement("input/date", "date")}}</td>
   <td>1 (日)</td>
   <td><code class="brush: html">&lt;input type="date" min="2019-12-25" step="1"&gt;</code></td>
  </tr>
  <tr>
   <td>{{HTMLElement("input/month", "month")}}</td>
   <td>1 (月)</td>
   <td><code class="brush: html">&lt;input type="month" min="2019-12" step="12"&gt;</code></td>
  </tr>
  <tr>
   <td>{{HTMLElement("input/week", "week")}}</td>
   <td>1 (週)</td>
   <td><code class="brush: html">&lt;input type="week" min="2019-W23" step="2"&gt;</code></td>
  </tr>
  <tr>
   <td>{{HTMLElement("input/time", "time")}}</td>
   <td>60 (分)</td>
   <td><code class="brush: html">&lt;input type="time" min="09:00" step="900"&gt;</code></td>
  </tr>
  <tr>
   <td>{{HTMLElement("input/datetime-local", "datetime-local")}}</td>
   <td>1 (日)</td>
   <td>
    <p><code class="brush: html">&lt;input type="datetime-local" min="019-12-25T19:30" step="7"&gt;</code></p>
   </td>
  </tr>
  <tr>
   <td>{{HTMLElement("input/number", "number")}}</td>
   <td>1</td>
   <td><code class="brush: html">&lt;input type="number" min="0" step="0.1" max="10"&gt;</code></td>
  </tr>
  <tr>
   <td>{{HTMLElement("input/range", "range")}}</td>
   <td>1</td>
   <td><code class="brush: html">&lt;input type="range" min="0" step="2" max="10"&gt;</code></td>
  </tr>
 </tbody>
</table>

<p><code>any</code> が明示的に設定されていない場合、 <code>number</code>, 日付/時刻入力型, <code>range</code> の入力型で有効な値は、刻みの基底値と等しくなります。 - <code><a href="/ja/docs/Web/HTML/Attributes/min">min</a></code> の値と、それに step の値を <code><a href="/ja/docs/Web/HTML/Attributes/max">max</a></code> の値 (指定されている場合) まで加えていった値です。例えば、 <code>&lt;input type="number" min="10" step="2"&gt;</code> は10以上の偶数が有効です。省略された場合、 <code>&lt;input type="number"&gt;</code> は任意の整数が有効ですが、 4.2 のような小数は無効になります。これは <code>step</code> の既定値が 1 だからです。 4.2 を有効にするには、 <code>step</code> を <code>any</code>、 0.1, 0.2 などに設定するか、 min の値の小数点以下を .2 に、たとえば <code>&lt;input type="number" min="-5.2"&gt;</code> のようにする必要があります。</p>

<h3 id="min_impact_on_step" name="min_impact_on_step">min の step への影響</h3>

<p><code>min</code> と <code>step</code> の値は、 <code>step</code> 属性がない場合も含め、どの値が有効であるかを定義します。 <code>step</code> の既定値は <code>0</code> です。</p>

<p>無効な入力の周囲に太く赤い境界を追加します。</p>

<pre class="brush: css notranslate">input:invalid {
  border: solid red 3px;
}</pre>

<p>それから入力欄の最小値を 7.2 と定義し、 step 属性は省略しているので、既定値が 1 になります。</p>

<pre class="brush: html notranslate">&lt;input id="myNumber" name="myNumber" type="number" step="2" min="1.2"&gt;</pre>

<p>有効な値は、 <code>1.2</code>, <code>3.2</code>, <code>5.2</code>, <code>7.2</code>, <code>9.2</code>, <code>11.2</code> などになります。整数や .2 が付く偶数は無効です。無効な値である場合、対応しているブラウザーは値が無効であることを表示します。数値スピナーがある場合は、 <code>1.2</code> 以上の有効な浮動小数点以下の値のみ表示されます。</p>

<p>{{EmbedLiveSample("min_impact_on_step",200,55)}}</p>

<div class="note">
<p><strong>注:</strong> ユーザーが入力したデータが刻みの設定に従っていない場合、制約検証では無効とみなされ、 {{cssxref(":invalid")}} と {{cssxref(":out-of-range")}} の擬似クラスにマッチします。</p>
</div>

<p>詳しくは<a href="/ja/docs/Web/Guide/HTML/HTML5/Constraint_validation">クライアント側制約検証</a>と {{domxref("ValidityState.stepMismatch", "stepMismatch")}} を参照してください。</p>

<h2 id="Accessibility_concerns" name="Accessibility_concerns">アクセシビリティの考慮</h2>

<p>ユーザーがフォームに記入したり、個々のフォームコントロールを使用するのに役立つ説明を提供してください。必須の入力、任意の入力、データの書式、その他の関連する情報を示してください。 <code>max</code> 属性を使用する場合は、この最大値の要件がユーザーに理解されていることを確認してください。 {{htmlelement('label')}} 内で指示を提供すれば十分かもしれません。ラベルの外に指示を提供すれば、より柔軟な配置やデザインが可能になるので、 <code><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute">aria-labelledby</a></code> または <code><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute">aria-describedby</a></code> を使用することを検討してください。</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('HTML WHATWG', 'input.html#the-min-and-max-attributes', 'min attribute')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', 'input.html#the-min-and-max-attributes', 'min attribute')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><code><a href="/ja/docs/Web/HTML/Attributes/min">min</a></code></li>
 <li><a href="/ja/docs/Web/Guide/HTML/HTML5/Constraint_validation">制約検証</a></li>
 <li>{{domxref('Constraint validation', "", 1)}} API</li>
 <li>{{domxref('validityState.stepMismatch')}}</li>
 <li>{{cssxref(':out-of-range')}}</li>
 <li>{{htmlelement('input')}}</li>
</ul>
