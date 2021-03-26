---
title: 制約検証 API
slug: Web/API/Constraint_validation
tags:
  - API
  - Constraint validation
  - Landing
  - Reference
---
<div>{{apiref()}}</div>

<p><span class="seoSummary"><ruby>制約検証<rp> (</rp><rt>Constraint Validation</rt><rp>)</rp></ruby> API により、ユーザーがフォームコントロールに入力した値を、サーバーに値を送信する前にチェックすることができます。</span></p>

<h2 id="Concepts_and_usage">概念と使用方法</h2>

<p>{{HTMLElement("input")}}、{{HTMLElement("select")}}、{{HTMLElement("textarea")}} などの特定の HTML フォームコントロールは、 <code>required</code> や <code>pattern</code> などの属性を使用して基本的な制約を設定し、許容される値の形式を制限することができます。</p>

<p>しかし、より複雑な制約を課したい場合や、検証失敗の報告を既定のものよりも分かりやすくしたい場合もあるでしょう。このような場合には、制約検証 API を使用します。</p>

<div class="note">
<p><strong>注:</strong> クライアント側の制約検証は、サーバー側での検証の必要性をなくすものではありません。クライアント側の検証によって、一般的な多くの種類の無効な値を防ぐことができても、古いブラウザーやウェブアプリケーションを騙そうとする攻撃者によって、無効な値が送信されることがあります。そのため、クライアント側で行っていることと矛盾しない方法で、サーバー側でも入力値を検証する必要があります。クライアント側の検証は、ユーザーにすばやくフィードバックを与えるためのツールです。サーバーが受信したデータを完全に無害化するためにこれに依存してはいけません。</p>
</div>

<p>制約検証 API による制約検証は、単一のフォーム要素で行われたり、フォームレベルでは {{ HTMLElement("form") }} 要素自体で行われたりします。</p>

<h2 id="Constraint_validation_interfaces">制約検証のインターフェイス</h2>

<dl>
 <dt><a href="/ja/docs/Web/API/ValidityState">ValidityState</a></dt>
 <dd>ValidityState インターフェイスは、フォームコントロール要素がその定義された制約に対して取り得る<em>有効性の状態</em>を表します。また、要素の値が検証に失敗するかどうか、またその理由を説明するのにも役立ちます。</dd>
 <dt><a href="/ja/docs/Web/API/HTMLInputElement/invalid_event">invalid</a> イベント</dt>
 <dd>このイベント型は、フォームコントロール要素が制約を満たさない場合に、フォームコントロール要素で発生します。</dd>
</dl>

<h3 id="Extensions_to_other_interfaces">他のインターフェイスの拡張</h3>

<p>制約検証 API は、下記のフォーム関連要素のインターフェイスを、数多くの新しいプロパティとメソッドで拡張します (フォームの所有者を示す <code>form</code> 属性を持つことができる要素です)。</p>

<ul>
 <li><code><strong><a href="/ja/docs/Web/API/HTMLButtonElement">HTMLButtonElement</a></strong></code></li>
 <li><code><strong><a href="/ja/docs/Web/API/HTMLFieldSetElement">HTMLFieldsetElement</a></strong></code></li>
 <li><code><strong><a href="/ja/docs/Web/API/HTMLInputElement">HTMLInputElement</a></strong></code></li>
 <li><code><strong><a href="/ja/docs/Web/API/HTMLObjectElement">HTMLObjectElement</a></strong></code></li>
 <li><code><strong><a href="/ja/docs/Web/API/HTMLOutputElement">HTMLOutputElement</a></strong></code></li>
 <li><code><strong><a href="/ja/docs/Web/API/HTMLSelectElement">HTMLSelectElement</a></strong></code></li>
 <li><code><strong><a href="/ja/docs/Web/API/HTMLTextAreaElement">HTMLTextAreaElement</a></strong></code></li>
</ul>

<h4 id="Properties">プロパティ</h4>

<dl>
 <dt>{{domxref('HTMLObjectElement.validity', 'validity')}}</dt>
 <dd>読み取り専用のプロパティで、 <code><a href="/ja/docs/Web/API/ValidityState">ValidityState</a></code> オブジェクトを返します。そのプロパティは、その要素の値に対する検証エラーを表します。</dd>
 <dt>{{domxref('HTMLObjectElement.validationMessage','validationMessage')}}</dt>
 <dd>読み取り専用のプロパティで、その要素が制約検証の候補になっていない場合は空の文字列を、その要素の値が妥当な場合はその値を返します。要素の値が妥当でない場合は、ローカライズされた検証メッセージを返します。これは、要素が有効性に問題のある唯一のフォームコントロールである場合、 UI に表示されます。 {{domxref('HTMLObjectElement.setCustomValidity','setCustomValidity()')}} を使用してカスタムエラーメッセージが設定されている場合、これが表示されます。</dd>
 <dt>{{domxref('HTMLObjectElement.willValidate', 'willValidate')}}</dt>
 <dd>読み取り専用の boolean プロパティで、その要素が制約検証の候補である場合は <code>true</code> を、それ以外の場合は <code>false</code> を返します。 <code>HTMLObjectElement</code> インターフェイスを持つ要素は、制約検証の候補になることはありません。その他の要素は、特定の条件によって制約検証から除外されることがあります。</dd>
</dl>

<h4 id="Methods">メソッド</h4>

<dl>
 <dt>{{domxref('HTMLObjectElement.checkValidity', 'checkValidity()')}}</dt>
 <dd>要素の値とその制約をチェックします。値が無効な場合は、要素に <a href="/ja/docs/Web/API/HTMLInputElement/invalid_event">invalid</a> イベントを発生させて <code>false</code> を返し、それ以外の場合は <code>true</code> を返します。</dd>
 <dt>{{domxref('HTMLFormElement.reportValidity','reportValidity()')}} (HTMLFormElement のメソッド)</dt>
 <dd>要素の値をその制約と照合し、有効性の状態を報告します。値が無効な場合は、要素で <a href="/ja/docs/Web/API/HTMLInputElement/invalid_event">invalid</a> イベントを発生させて <code>false</code> を返し、ユーザーエージェントが利用可能な方法でユーザーに有効性の状態を報告します。それ以外の場合は、 <code>true</code> を返します。</dd>
 <dt>{{domxref('HTMLObjectElement.setCustomValidity','setCustomValidity(<em>message</em>)')}}</dt>
 <dd>値が有効でない理由を説明するカスタムエラーメッセージ文字列を設定し、これがフォームの送信時にユーザーに表示されます。メッセージが設定されると、有効性の状態が無効に設定されます。この状態を解除するには、引数に空の文字列を渡してこの関数を呼び出ししてください。この場合、カスタムエラーメッセージは消去され、要素は有効とみなされ、メッセージは表示されません。</dd>
</dl>

<h2 id="Examples">例</h2>

<p>以下のフォームを取り上げてみましょう。</p>

<pre class="brush: html">&lt;form&gt;
  &lt;label for="name"&gt;ユーザー名を入力してください (英大文字と小文字で): &lt;/label&gt;
  &lt;input type="text" name="name" id="name" required pattern="[A-Za-z]+"&gt;
  &lt;button&gt;Submit&lt;/button&gt;
&lt;/form&gt;</pre>

<p>HTML フォームの基本的な検証機能により、有効な値が入力されていなかったり、または <code><a href="/ja/docs/Web/HTML/Attributes/pattern">pattern</a></code> に一致しない値を入力したりしてフォームを送信しようとすると、既定のエラーメッセージが表示されます。</p>

<p>代わりに独自のエラーメッセージを表示させたい場合は、以下のような JavaScript を使用します。</p>

<pre class="brush: js">const nameInput = document.querySelector('input');
const form = document.querySelector('form');

nameInput.addEventListener('input', () =&gt; {
  nameInput.setCustomValidity('');
  nameInput.checkValidity();
});

nameInput.addEventListener('invalid', () =&gt; {
  if(nameInput.value === '') {
    nameInput.setCustomValidity('ユーザー名を入力してください！');
  } else {
    nameInput.setCustomValidity('ユーザー名は英大文字と小文字のみしか入れられません。やり直してください！');
  }
});</pre>

<p>この例は次のように表示されます。</p>

<p>{{EmbedLiveSample('Examples')}}</p>

<p>要点:</p>

<ul>
 <li>input 要素の値が変更されるたびに、 <code>input</code> イベントハンドラーから <code>checkValidity()</code> メソッドを実行して、入力要素の有効状態をチェックしています。</li>
 <li>値が無効な場合は、 <code>invalid</code> イベントが発生し、 <code>invalid</code> イベントハンドラー関数が実行されます。この関数の中では、値が空であるために無効なのか、パターンに一致しないために無効なのかを、 <code>if()</code> ブロックを使って判断し、独自の検証エラーメッセージを設定します。</li>
 <li>その結果、送信ボタンが押されたときに入力値が無効であれば、カスタムエラーメッセージのいずれかが表示されます。</li>
 <li>有効であれば、期待通りに送信されます。そのためには、空の文字列値で <code>setCustomValidity()</code> を呼び出すことによって、カスタム検証をキャンセルしなければなりません。そのため、 <code>input</code> イベントが発生するたびにこれを行います。これを行わず、以前にカスタム検証が設定されていた場合、送信時に現在有効な値を含んでいても、入力は無効と登録されてしまいます。</li>
</ul>

<div class="notecard note">
<p><strong>注</strong>: Firefox は、多くのバージョンで <code>x-moz-errormessage</code> という独自のエラー属性に対応しており、同様の方法で独自のエラーメッセージを設定することができました。これはバージョン 66 で削除されました (<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1513890">バグ 1513890</a> 参照)。</p>
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
   <td>{{ SpecName('HTML WHATWG', 'forms.html#the-constraint-validation-api', 'constraint validation API') }}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{ SpecName('HTML5.1', 'sec-forms.html#the-constraint-validation-api', 'constraint validation API') }}</td>
   <td>{{Spec2('HTML5.1')}}</td>
   <td>前回のスナップショット {{SpecName('HTML5 W3C')}} から変更なし。</td>
  </tr>
  <tr>
   <td>{{ SpecName('HTML5 W3C', 'forms.html#the-constraint-validation-api', 'constraint validation API') }}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td>このインターフェイスを含む {{SpecName('HTML WHATWG')}} の最初のスナップショット。</td>
  </tr>
 </tbody>
</table>

<h2 id="See_also">関連情報</h2>

<ul>
 <li><code><a href="/ja/docs/Web/HTML/Element/input">&lt;input&gt;</a></code></li>
 <li><code><a href="/ja/docs/Web/HTML/Element/select">&lt;select&gt;</a></code></li>
 <li><code><a href="/ja/docs/Web/HTML/Element/textarea">&lt;textarea&gt;</a></code></li>
 <li><code>{{domxref('ValidityState')}}</code> のプロパティ: {{domxref('validityState.badInput', 'badInput')}}, {{domxref('validityState.customError','customError')}}, {{domxref('validityState.patternMismatch','patternMismatch')}}, {{domxref('validityState.rangeOverflow','rangeOverflow')}}, {{domxref('validityState.rangeUnderflow','rangeUnderflow')}}, {{domxref('validityState.stepMismatch','stepMismatch')}}, {{domxref('validityState.tooLong','tooLong')}}, {{domxref('validityState.tooShort','tooShort')}}, {{domxref('validityState.typeMismatch','typeMismatch')}}, {{domxref('validityState.valid','valid')}}, {{domxref('validityState.valueMissing','valueMissing')}}</li>
</ul>
