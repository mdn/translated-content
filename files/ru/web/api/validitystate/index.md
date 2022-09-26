---
title: ValidityState
slug: Web/API/ValidityState
tags:
  - API
  - Constraint Validation API
  - Формы
  - HTML DOM
  - Интерфейс
browser-compat: api.ValidityState
---
<div>{{APIRef("HTML DOM")}}</div>

<p>Интерфейс <strong><code>ValidityState</code></strong> представляет <em>состояния валидности</em>, в которых может находиться элемент при валидации ограничений. Вместе они помогают понять, по какой именно причине значение элемента не прошло валидацию.</p>

<h2 id="Properties">Свойства</h2>

<p>Если свойство возвращает <code>true</code>, значит оно отражает причину, по которой значение не прошло валидацию. Исплючением является лишь свойство <code>valid</code>, которое возвращает <code>true</code>, когда значение элемента соответствует всем ограничениям.</p>

<dl>
 <dt>{{domxref("ValidityState.badInput", "badInput")}} {{ReadOnlyInline}}</dt>
 <dd>{{jsxref("Boolean")}} <code>true</code>, если пользователь ввёл значение, которое браузер не может преобразовать.</dd>
 <dt><code>customError</code> {{ReadOnlyInline}}</dt>
 <dd>{{jsxref("Boolean")}}, указывающий, было ли установлено кастомное сообщение валидации путём вызова метода {{domxref('HTMLObjectElement.setCustomValidity', 'setCustomValidity()')}} с непустой строкой в аргументе.</dd>
 <dt>{{domxref("ValidityState.patternMismatch", "patternMismatch")}} {{ReadOnlyInline}}</dt>
 <dd>{{jsxref("Boolean")}} <code>true</code>, если значение не соответствует шаблону, указанному в атрибуте {{htmlattrxref("pattern", "input")}}. <code>false</code>, если значение соответствует этому шаблону. Если <code>true</code>, элемент соответствует CSS-псевдоклассу {{cssxref(":invalid")}}.</dd>
 <dt>{{domxref("ValidityState.rangeOverflow", "rangeOverflow")}} {{ReadOnlyInline}}</dt>
 <dd>{{jsxref("Boolean")}} <code>true</code>, если значение больше максимума, заданного в атрибуте {{htmlattrxref("max", "input")}}. <code>false</code>, если значение меньше или равно ему. Если <code>true</code>, элемент соответствует CSS-псевдоклассам {{cssxref(":invalid")}} и {{cssxref(":out-of-range")}}.</dd>
 <dt>{{domxref("ValidityState.rangeUnderflow", "rangeUnderflow")}} {{ReadOnlyInline}}</dt>
 <dd>{{jsxref("Boolean")}} <code>true</code>, если значение меньше минимума, заданного в атрибуте {{htmlattrxref("min", "input")}}. <code>false</code>, если значение больше или равно ему. Если <code>true</code>, элемент соответствует CSS-псевдоклассам {{cssxref(":invalid")}} и {{cssxref(":out-of-range")}}.</dd>
 <dt>{{domxref("ValidityState.stepMismatch", "stepMismatch")}} {{ReadOnlyInline}}</dt>
 <dd>{{jsxref("Boolean")}} <code>true</code>, если значение не соответствует правилам, заданным в атрибуте {{htmlattrxref("step", "input")}} (то есть, не делится без остатка на значение шага). <code>false</code>, если соответствует этим правилам. Если <code>true</code>, элемент соответствует CSS-псевдоклассам {{cssxref(":invalid")}} и {{cssxref(":out-of-range")}}.</dd>
 <dt>{{domxref("ValidityState.tooLong", "tooLong")}} {{ReadOnlyInline}}</dt>
 <dd>{{jsxref("Boolean")}} <code>true</code>, если значение превышает лимит, указанный в атрибуте <code>maxlength</code> объектов {{domxref("HTMLInputElement")}} или {{domxref("HTMLTextAreaElement")}}. <code>false</code>, если длина меньше или равна максимальной длине. <em><strong>Примечание:</strong> Данное свойство никогда не будет <code>true</code> в Gecko, потому что значению элемента не разрешается быть больше <code>maxlength</code>.</em> Если <code>true</code>, элемент соответствует CSS-псевдоклассам {{cssxref(":invalid")}} и {{cssxref(":out-of-range")}}.</dd>
 <dt>{{domxref("ValidityState.tooShort", "tooShort")}} {{ReadOnlyInline}}</dt>
 <dd>{{jsxref("Boolean")}} <code>true</code>, если длина значения не достигает минимума, указанного в атрибуте <code>minlength</code> объектов {{domxref("HTMLInputElement")}} и {{domxref("HTMLTextAreaElement")}}. <code>false</code>, если длина больше или равна ему. Если <code>true</code>, элемент соответствует CSS-псевдоклассам {{cssxref(":invalid")}} и {{cssxref(":out-of-range")}}.</dd>
 <dt>{{domxref("ValidityState.typeMismatch", "typeMismatch")}} {{ReadOnlyInline}}</dt>
 <dd>{{jsxref("Boolean")}} <code>true</code>, если значение не соответствует требуемому синтаксису (когда для {{htmlattrxref("type", "input")}} задано значение <code>email</code> или <code>url</code>). <code>false</code>, если синтаксис корректный. Если <code>true</code>, элемент соответствует CSS-псевдоклассу {{cssxref(":invalid")}}.</dd>
 <dt><code>valid</code> {{ReadOnlyInline}}</dt>
 <dd>{{jsxref("Boolean")}} <code>true</code>, если элемент соответствует всем ограничениям валидации и, следовательно, считается валидным. <code>false</code>, если не соответствует любому ограничению. Если <code>true</code>, элемент соответствует CSS-псевдоклассу {{cssxref(":valid")}}; иначе — псевдоклассу {{cssxref(":invalid")}}.</dd>
 <dt>{{domxref("ValidityState.valueMissing", "valueMissing")}} {{ReadOnlyInline}}</dt>
 <dd>{{jsxref("Boolean")}} <code>true</code>, если у элемента есть атрибут {{htmlattrxref("required", "input")}}, но сам элемент заполнен не был. <code>false</code>, если элемент был заполнен. Если <code>true</code>, элемент соответствует CSS-псевдоклассу {{cssxref(":invalid")}}.</dd>
</dl>

<h2 id="Specifications">Спецификации</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Совместимость с браузером</h2>

<p>{{Compat}}</p>

<h2 id="See_also">Также смотрите</h2>

<ul>
 <li><a href="/ru/docs/Web/Guide/HTML/HTML5/Constraint_validation">Руководство: Валидация ограничений</a></li>
 <li><a href="/ru/docs/Learn/Forms/Form_validation">Учебник: Валидация форм</a></li>
</ul>
