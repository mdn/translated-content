---
title: ValidityState.patternMismatch
slug: Web/API/ValidityState/patternMismatch
tags:
  - API
  - Constraint Validation API
  - DOM
  - Property
  - Reference
translation_of: Web/API/ValidityState
---
<p>{{draft}}<strong><code>patternMismatch</code></strong> は <strong><code><a href="/ja/docs/Web/API/ValidityState">ValidityState</a></code></strong> オブジェクトの読み取り専用プロパティで、 {{HTMLElement("input")}} 要素の値がユーザーによって編集された後で、その要素の <code><a href="/ja/docs/Web/HTML/Attributes/pattern">pattern</a></code> 属性で設定された制約に適合するかどうかを示します。</p>

<p>そのフィールドが <code><a href="/ja/docs/Web/HTML/Attributes/pattern">pattern</a></code> 属性に対応している場合 -- つまり、 {{HTMLElement("input")}} の <code>type</code> が {{HTMLElement("input/text", "text")}}, {{HTMLElement("input/tel", "tel")}}, {{HTMLElement("input/email", "email")}}, {{HTMLElement("input/url", "url")}}, {{HTMLElement("input/password", "password")}}, {{HTMLElement("input/search", "search")}} のいずれかであった場合 -- かつ、 pattern の値が有効な正規表現に設定されていた場合、値が <code><a href="/ja/docs/Web/HTML/Attributes/pattern">pattern</a></code> の値で設定された制約に適合していない場合、 <code>patternMismatch</code> プロパティが true になります。</p>

<h2 id="Examples">例</h2>

<p>以下のものがあったとします。</p>

<pre class="brush: html">&lt;p&gt;
 &lt;label&gt;電話番号を (123)456-7890 の形で入力してください
  (&lt;input name="tel1" type="tel" pattern="[0-9]{3}" placeholder="###" aria-label="3-digit area code" size="2"/&gt;)-
   &lt;input name="tel2" type="tel" pattern="[0-9]{3}" placeholder="###" aria-label="3-digit prefix" size="2"/&gt; -
   &lt;input name="tel3" type="tel" pattern="[0-9]{4}" placeholder="####" aria-label="4-digit number" size="3"/&gt;
 &lt;/label&gt;
&lt;/p&gt;</pre>

<p>ここでは、北米の電話番号のための 3 つの部分があり、電話番号の 3 つの構成要素すべてを包含する暗黙のラベルが、それぞれ 3 桁、3 桁、4 桁を期待しています。それぞれが <code><a href="/ja/docs/Web/HTML/Attributes/pattern">pattern</a></code> 属性によってそのように定義されています。</p>

<p>値が長すぎたり短すぎたり、数字ではない文字が含まれていたりすると、 <code>patternMismatch</code> が true になります。 <code>true</code> の場合、要素は CSS の {{cssxref(":invalid")}} 擬似クラスに一致します。</p>

<pre class="brush: css">input:invalid {
  border: red solid 3px;
}</pre>

<p>{{EmbedLiveSample("Examples", 300, 40)}}</p>

<p>この場合、値の長さを決定するのはパターンであるため、値が長すぎたり短すぎたりした場合に発生するのは <code>patternMismatch</code> であり、 {{domxref('validityState.tooLong')}} や {{domxref('validityState.tooShort')}} ではないことに注意してください。代わりに <code><a href="/ja/docs/Web/HTML/Attributes/minlength">minlength</a></code> と <code><a href="/ja/docs/Web/HTML/Attributes/maxlength">maxlength</a></code> 属性を使用していたら、 {{domxref('validityState.tooLong')}} または {{domxref('validityState.tooShort')}} が true になるかもしれません。</p>

<div class="notecard note">
<p>注: pattern 属性がない場合、 <code>{{HTMLElement("input/email", "email")}}</code> 入力型は、少なくとも <code>x@y</code> に一致する必要があり、 <code>{{HTMLElement("input/url", "url")}}</code> 型は、少なくとも x: に一致する必要があります。無効な場合、 pattern 属性がない場合 (またはその入力型で pattern 属性が無効な場合) は {{domxref('validityState.typeMismatch')}} が true になります。</p>
</div>

<h2 id="Specifications">仕様書</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
  <tr>
   <td>{{ SpecName('HTML WHATWG', 'constraints.html#dom-validitystate-patternmismatch', 'ValidityState.patternMismatch') }}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{ SpecName('HTML5.1', 'sec-forms.html#dom-validitystate-patternmismatch', 'ValidityState.patternMismatch') }}</td>
   <td>{{Spec2('HTML5.1')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{ SpecName('HTML5 W3C', 'forms.html#dom-validitystate-patternmismatch', 'ValidityState.patternMismatch') }}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.ValidityState.patternMismatch")}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/Guide/HTML/HTML5/Constraint_validation">制約検証</a></li>
 <li><a href="/ja/docs/Learn/Forms/Form_validation">フォーム: データフォームの検証</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Guide/Regular_Expressions">正規表現</a></li>
</ul>
