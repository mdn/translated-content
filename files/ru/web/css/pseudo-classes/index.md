---
title: Псевдоклассы
slug: Web/CSS/Pseudo-classes
tags:
  - CSS
  - Reference
  - Псевдоклассы
  - Селекторы
translation_of: Web/CSS/Pseudo-classes
original_slug: Web/CSS/Псевдо-классы
---
<div>{{CSSRef}}</div>

<p><strong>Псевдокласс</strong> в CSS — <dfn>это ключевое слово, добавленное к селектору,</dfn> которое определяет его особое состояние. Например, {{ Cssxref(":hover") }} может быть использован для изменения цвета кнопки при наведении курсора на неё.</p>

<pre class="brush: css no-line-numbers">div:hover {
  background-color: #F89B4D;
}</pre>

<p>Псевдоклассы дают возможность стилизовать элемент на основе не только отношений в DOM-дереве, но и основываясь на внешних факторах, таких как история посещений (например, {{ cssxref(":visited") }}), состояние содержимого (вроде {{ cssxref(":checked") }} у некоторых элементов формы) или позиции курсора мыши (например, {{ cssxref(":hover") }} определяет, находится ли курсор мыши над элементом).</p>

<div class="note">
<p><strong>Примечание:</strong> В отличие от псевдоклассов, <a href="/ru/docs/Web/CSS/pseudo-elements">псевдоэлементы</a> могут быть использованы для стилизации <em>определённой части</em> элемента.</p>
</div>

<h2 id="Синтаксис">Синтаксис</h2>

<pre class="syntaxbox">selector:pseudo-class {
  property: value;
}
</pre>

<p>Как и с обычными классами, можно совмещать вместе в одном селекторе любое число псевдоклассов.</p>

<h2 id="Список_стандартных_псевдоклассов">Список стандартных псевдоклассов</h2>

<div class="index">
<ul>
 <li>{{ Cssxref(":active") }}</li>
 <li>{{ cssxref(':any')}}</li>
 <li>{{ cssxref(':any-link')}}</li>
 <li>{{ Cssxref(":checked") }}</li>
 <li>{{ Cssxref(":default") }}</li>
 <li>{{ Cssxref(":defined") }}</li>
 <li>{{ Cssxref(":dir", ":dir()")}}</li>
 <li>{{ Cssxref(":disabled") }}</li>
 <li>{{ Cssxref(":empty") }}</li>
 <li>{{ Cssxref(":enabled") }}</li>
 <li>{{ Cssxref(":first") }}</li>
 <li>{{ Cssxref(":first-child") }}</li>
 <li>{{ Cssxref(":first-of-type") }}</li>
 <li>{{ Cssxref(":fullscreen") }}</li>
 <li>{{ Cssxref(":focus") }}</li>
 <li>{{ Cssxref(":hover") }}</li>
 <li>{{ Cssxref(":indeterminate") }}</li>
 <li>{{ Cssxref(":in-range") }}</li>
 <li>{{ Cssxref(":invalid") }}</li>
 <li>{{ Cssxref(":lang", ":lang()") }}</li>
 <li>{{ Cssxref(":last-child") }}</li>
 <li>{{ Cssxref(":last-of-type") }}</li>
 <li>{{ Cssxref(":left") }}</li>
 <li>{{ Cssxref(":link") }}</li>
 <li>{{ Cssxref(":not", ":not()") }}</li>
 <li>{{ Cssxref(":nth-child", ":nth-child()") }}</li>
 <li>{{ Cssxref(":nth-last-child", ":nth-last-child()") }}</li>
 <li>{{ Cssxref(":nth-last-of-type", ":nth-last-of-type()") }}</li>
 <li>{{ Cssxref(":nth-of-type", ":nth-of-type()") }}</li>
 <li>{{ Cssxref(":only-child") }}</li>
 <li>{{ Cssxref(":only-of-type") }}</li>
 <li>{{ Cssxref(":optional") }}</li>
 <li>{{ Cssxref(":out-of-range") }}</li>
 <li>{{ Cssxref(":read-only") }}</li>
 <li>{{ Cssxref(":read-write") }}</li>
 <li>{{ Cssxref(":required") }}</li>
 <li>{{ Cssxref(":right") }}</li>
 <li>{{ Cssxref(":root") }}</li>
 <li>{{ Cssxref(":scope") }}</li>
 <li>{{ Cssxref(":target") }}</li>
 <li>{{ Cssxref(":valid") }}</li>
 <li>{{ Cssxref(":visited") }}</li>
</ul>
</div>

<h2 id="Спецификации">Спецификации</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Спецификация</th>
   <th scope="col">Статус</th>
   <th scope="col">Комментарий</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{ SpecName('Fullscreen') }}</td>
   <td>{{ Spec2('Fullscreen') }}</td>
   <td>Определён <code>:fullscreen</code>.</td>
  </tr>
  <tr>
   <td>{{ SpecName('HTML WHATWG') }}</td>
   <td>{{ Spec2('HTML WHATWG') }}</td>
   <td>Нет изменений от {{ SpecName('HTML5 W3C') }}.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS4 Selectors')}}</td>
   <td>{{Spec2('CSS4 Selectors')}}</td>
   <td>Определены <code>:any-link</code>, <code>:local-link</code>, <code>:scope</code>, <code>:active-drop-target</code>, <code>:valid-drop-target</code>, <code>:invalid-drop-target</code>, <code>:current</code>, <code>:past</code>, <code>:future</code>, <code>:placeholder-shown</code>, <code>:user-error</code>, <code>:blank</code>, <code>:nth-match()</code>, <code>:nth-last-match()</code>, <code>:nth-column()</code>, <code>:nth-last-column()</code> и <code>:matches()</code>.<br>
    Нет существенных изменений для псевдоклассов, определённых в {{SpecName('CSS3 Selectors')}} и {{SpecName('HTML5 W3C')}} (не рассматривая семантическое значение).</td>
  </tr>
  <tr>
   <td>{{ SpecName('HTML5 W3C') }}</td>
   <td>{{ Spec2('HTML5 W3C') }}</td>
   <td>Определено семантическое значение в HTML контексте для  <code>:link</code>, <code>:visited</code>, <code>:active</code>, <code>:enabled</code>, <code>:disabled</code>, <code>:checked</code> и <code>:indeterminate</code>.<br>
    Определены <code>:default</code>, <code>:valid</code>, <code>:invalid</code>, <code>:in-range</code>, <code>:out-of-range</code>, <code>:required</code>, <code>:optional</code>, <code>:read-only</code>, <code>:read-write</code> и <code>:dir()</code>.</td>
  </tr>
  <tr>
   <td>{{ SpecName('CSS3 Basic UI') }}</td>
   <td>{{ Spec2('CSS3 Basic UI') }}</td>
   <td>Определены <code>:default</code>, <code>:valid</code>, <code>:invalid</code>, <code>:in-range</code>, <code>:out-of-range</code>, <code>:required</code>, <code>:optional</code>, <code>:read-only</code> и <code>:read-write</code>, но без связанного семантического значения.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Selectors')}}</td>
   <td>{{Spec2('CSS3 Selectors')}}</td>
   <td>Определены <code>:target</code>, <code>:root</code>, <code>:nth-child()</code>, <code>:nth-last-of-child()</code>, <code>:nth-of-type()</code>, <code>:nth-last-of-type()</code>, <code>:last-child</code>, <code>:first-of-type</code>, <code>:last-of-type</code>, <code>:only-child</code>, <code>:only-of-type</code>, <code>:empty</code> и <code>:not()</code>.<br>
    Определён синтаксис для <code>:enabled</code>, <code>:disabled</code>, <code>:checked</code> и <code>:indeterminate</code>, но без связанного семантического значения.<br>
    Нет значительных изменений для псевдоклассов, определённых в {{SpecName('CSS2.1')}}.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>Определены <code>:lang()</code>, <code>:first-child</code>, <code>:hover</code> и <code>:focus</code>.<br>
    Нет значительных изменений для псевдоклассов, определённых в {{SpecName('CSS1')}}.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS1')}}</td>
   <td>{{Spec2('CSS1')}}</td>
   <td>Определены <code>:link</code>, <code>:visited</code> и <code>:active</code>, но без связанного семантического значения.</td>
  </tr>
 </tbody>
</table>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li><a href="/ru/docs/Web/CSS/Pseudo-elements">Псевдоэлементы</a></li>
</ul>
