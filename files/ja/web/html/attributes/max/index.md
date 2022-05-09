---
title: 'HTML 属性: max'
slug: Web/HTML/Attributes/max
tags:
  - Attribute
  - Attributes
  - Constraint validation
  - HTML
  - Reference
translation_of: Web/HTML/Attributes/max
---
<p>{{HTMLSidebar}}</p>

<p><strong><code>max</code></strong> 属性は、その属性を含む入力に対して許容可能で有効な最大値を定義します。要素の<code><a href="/ja/docs/Web/HTML/Element/input#attr-value">値</a></code>がこれより大きい場合、その要素は<a href="/ja/docs/Web/Guide/HTML/HTML5/Constraint_validation">制約検証</a>に失敗します。この値は、 <a href="min"><code>min</code></a> 属性の値以上でなければなりません。 <code>max</code> 属性が指定されていないか無効であった場合、 <code>max</code> 値は適用されません。 <code>max</code> 属性が有効で、値が空でなく、 <code>max</code> 属性によって許容される最大値よりも大きい場合、制約検証によってフォームの送信が阻止されます。</p>

<p>これは数値入力型、例えば {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}}, {{HTMLElement("input/range", "range")}} 型や {{htmlelement('progress')}} および {{htmlelement('meter')}} 要素で有効であり、 <code>max</code> 属性はフォームコントロールで妥当と見なされる最も大きな値をして逸する数値です。</p>

<p>値が許容される最大値を超えた場合、 {{domxref('validityState.rangeOverflow')}} が true となり、そのコントロールは {{cssxref(':out-of-range')}} および {{cssxref(':invalid')}} 擬似クラスと一致するようになります。</p>

<h3 id="Syntax" name="Syntax">構文</h3>

<table class="standard-table">
 <caption><code>max</code> の構文 (入力 <code>type</code> 別)</caption>
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
   <td><code class="brush: html">yyyy-mm-dd</code></td>
   <td><code class="brush: html">&lt;input type="date" max="2019-12-25" step="1"&gt;</code></td>
  </tr>
  <tr>
   <td>{{HTMLElement("input/month", "month")}}</td>
   <td><code class="brush: html">yyyy-mm</code></td>
   <td><code class="brush: html">&lt;input type="month" max="2019-12" step="12"&gt;</code></td>
  </tr>
  <tr>
   <td>{{HTMLElement("input/week", "week")}}</td>
   <td><code class="brush: html">yyyy-W##</code></td>
   <td><code class="brush: html">&lt;input type="week" max="2019-W23" step=""&gt;</code></td>
  </tr>
  <tr>
   <td>{{HTMLElement("input/time", "time")}}</td>
   <td><code class="brush: html">hh:mm</code></td>
   <td><code class="brush: html">&lt;input type="time" max="17:00" step="900"&gt;</code></td>
  </tr>
  <tr>
   <td>{{HTMLElement("input/datetime-local", "datetime-local")}}</td>
   <td><code>yyyy-mm-ddThh:mm</code></td>
   <td><code class="brush: html">&lt;input type="datetime-local" min="2019-12-25T23:59"&gt;</code></td>
  </tr>
  <tr>
   <td>{{HTMLElement("input/number", "number")}}</td>
   <td><a href="/ja/docs/Web/CSS/number">&lt;number&gt;</a></td>
   <td><code class="brush: html">&lt;input type="number" min="0" step="5" max="100"&gt;</code></td>
  </tr>
  <tr>
   <td>{{HTMLElement("input/range", "range")}}</td>
   <td><a href="/ja/docs/Web/CSS/number">&lt;number&gt;</a></td>
   <td><code class="brush: html">&lt;input type="range" min="60" step="5" max="100"&gt;</code></td>
  </tr>
 </tbody>
</table>

<div class="note">
<p><strong>注:</strong> ユーザーが入力したデータが設定された最大値を満たしていない場合、製薬検証では無効とみなされ、 {{cssxref(':invalid')}} と {{cssxref(':out-of-range')}} の擬似クラスに一致するようになります。</p>
</div>

<p>詳しくは <a href="/ja/docs/Web/Guide/HTML/HTML5/Constraint_validation">クライアント側検証</a>と {{domxref("ValidityState.rangeOverflow", "rangeOverflow")}} を参照してください。</p>

<p>{{htmlelement('progress')}} 要素における <code>max</code> 属性は、 <code>progress</code> 要素で示されたタスクがどれだけの作業を必要とするかを記述します。存在する場合、ゼロより大きい値を持ち、有効な浮動小数点数でなければなりません。 {{htmlelement('meter')}} 要素における <code>max</code> 属性は、測定範囲の上限の数値を定義します。これは、指定されている場合、最小値 (<code><a href="/ja/docs/Web/HTML/Attributes/min">min</a></code> 属性) よりも大きくなければなりません。どちらの場合も、省略された場合、値は既定で 1 となります。</p>

<table class="standard-table">
 <caption>その他の要素における <code>max</code> 値の構文</caption>
 <thead>
  <tr>
   <th>入力型</th>
   <th>構文</th>
   <th>例</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{HTMLElement("progress")}}</td>
   <td><a href="/ja/docs/Web/CSS/number">&lt;number&gt;</a></td>
   <td><code>&lt;progress id="file" max="100" value="70"&gt; 70% &lt;/progress&gt;</code></td>
  </tr>
  <tr>
   <td>{{HTMLElement("meter")}}</td>
   <td><a href="/ja/docs/Web/CSS/number">&lt;number&gt;</a></td>
   <td><code>&lt;meter id="fuel" min="0" max="100" low="33" high="66" optimum="80" value="40"&gt; at 40/100&lt;/meter&gt;</code></td>
  </tr>
 </tbody>
</table>

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
   <td>{{SpecName('HTML WHATWG', 'input.html#the-min-and-max-attributes', 'max attribute')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', 'input.html#the-min-and-max-attributes', 'max attribute')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', 'forms.html#the-progress-element', 'progress element')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', 'forms.html#the-progress-element', 'progress element')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', 'forms.html#the-meter-element', 'meter element')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', 'forms.html#the-meter-element', 'meter element')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("html.elements.attributes.max")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/HTML/Attributes/step"><code>step</code></a></li>
 <li><a href="/ja/docs/Web/HTML/Attributes/min"><code>min</code></a></li>
 <li>other meter attributes: <a href="/ja/docs/Web/HTML/Attributes/low"><code>low</code></a>, <a href="/ja/docs/Web/HTML/Attributes/high"><code>high</code></a>, <a href="/ja/docs/Web/HTML/Attributes/optimum"><code>optimum</code></a></li>
 <li><a href="/ja/docs/Web/Guide/HTML/HTML5/Constraint_validation">Constraint validation</a></li>
 <li><a href="/ja/docs/Web/API/Constraint_validation">Constraint validation API</a></li>
 <li>{{domxref('validityState.rangeOverflow')}}</li>
 <li>{{cssxref(':out-of-range')}}</li>
 <li>{{htmlelement('input')}}</li>
</ul>
