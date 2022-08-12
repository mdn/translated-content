---
title: Object.defineProperties()
slug: Web/JavaScript/Reference/Global_Objects/Object/defineProperties
translation_of: Web/JavaScript/Reference/Global_Objects/Object/defineProperties
---
<div>{{JSRef}}</div>

<p><code><strong>Object.defineProperties()</strong></code> 메서드는 객체에 새로운 속성을 정의하거나 기존의 속성을 수정하고, 그 객체를 반환한다.</p>

<div>{{EmbedInteractiveExample("pages/js/object-defineproperties.html")}}</div>



<h2 id="문법">문법</h2>

<pre class="syntaxbox"><code>Object.defineProperties(<var>obj</var>, <var>props</var>)</code></pre>

<h3 id="인자">인자</h3>

<dl>
 <dt><code><var>obj</var></code></dt>
 <dd>속성을 정의하거나 수정할 객체.</dd>
 <dt><code><var>props</var></code></dt>
 <dd>정의하거나 수정할 속성의 이름을 키로, 그 속성을 서술하는 객체를 값으로 갖는 객체. <code>props</code>의 각 값은 데이터 서술자(data descriptor) 혹은 접근자 서술자(accessor descriptor) 중 하나여야 하며, 동시에 두 유형을 포함할 수 없다({{jsxref("Object.defineProperty()")}} 참조).</dd>
 <dd>데이터 서술자와 접근자 서술자 모두 다음 키를 선택적으로 포함할 수 있다:</dd>
 <dd>
 <dl>
  <dt><code>configurable</code></dt>
  <dd><code>true</code>일 경우 이 속성 서술자의 형태를 변경하거나, 속성을 해당 객체에서 삭제할 수 있다.<br>
  <strong>기본값은 <code>false</code>이다.</strong></dd>
  <dt><code>enumerable</code></dt>
  <dd><code>true</code>일 경우 해당 객체의 속성을 열거할 때 이 속성이 열거된다.<br>
  <strong>기본값은 <code>false</code>이다.</strong></dd>
 </dl>

 <p>데이터 서술자의 경우 다음 키를 추가로 포함할 수 있다:</p>

 <dl>
  <dt><code>value</code></dt>
  <dd>이 속성에 설정할 값. 올바른 자바스크립트 값(숫자, 객체, 함수 등)이면 무엇이든 설정할 수 있다.<br>
  <strong>기본값은 {{jsxref("undefined")}}이다.</strong></dd>
  <dt><code>writable</code></dt>
  <dd><code>true</code>일 경우 이 속성에 설정된 값을 {{jsxref("Operators/Assignment_Operators", "할당 연산자", "", 1)}}로 수정할 수 있다.<br>
  <strong>기본값은 <code>false</code>이다.</strong></dd>
 </dl>

 <p>접근자 서술자의 경우 다음 키를 추가로 포함할 수 있다:</p>

 <dl>
  <dt><code>get</code></dt>
  <dd>해당 속성의 getter가 될 함수, 혹은 getter가 없을 경우 {{jsxref("undefined")}}. 이 함수의 반환값이 속성의 값으로 사용된다.<br>
  <strong>기본값은 {{jsxref("undefined")}}이다.</strong></dd>
  <dt><code>set</code></dt>
  <dd>해당 속성의 setter가 될 함수, 혹은 setter가 없을 경우 {{jsxref("undefined")}}. 이 함수는 이 속성에 할당되는 새로운 값을 유일한 인자로 받는다.<br>
  <strong>기본값은 {{jsxref("undefined")}}이다.</strong></dd>
 </dl>

 <p>서술자가 <code>value</code>, <code>writable</code>, <code>get</code>, <code>set</code> 키를 모두 가지고 있지 않을 경우 데이터 서술자로 취급한다. 서술자가 <code>value</code>이나 <code>writable</code>과 <code>get</code>이나 <code>set</code> 키를 모두 가지고 있을 경우 예외가 발생한다.</p>
 </dd>
</dl>

<h3 id="반환값">반환값</h3>

<p>함수에 넘겨주었던 객체.</p>

<h2 id="설명">설명</h2>

<p><code>Object.defineProperties</code>는 기본적으로 <code>props</code>의 모든 열거가능한 속성에 따라 객체 <code>obj</code>의 속성을 정의한다.</p>

<h2 id="예시">예시</h2>

<pre class="brush: js">var obj = {};
Object.defineProperties(obj, {
  'property1': {
    value: true,
    writable: true
  },
  'property2': {
    value: 'Hello',
    writable: false
  }
  // 등등
});
</pre>

<h2 id="폴리필">폴리필</h2>

<p>모든 이름과 속성이 원래 값을 가리키는 깨끗한 실행 환경에서 <code>Object.defineProperties</code>는 다음 자바스크립트 재구현과 거의 완벽하게 똑같이(<code>isCallable</code>의 주석에 주목) 실행된다.</p>

<pre class="brush: js;highlight:[8]">function defineProperties(obj, properties) {
  function convertToDescriptor(desc) {
    function hasProperty(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }

    function isCallable(v) {
      // NB: 함수가 아닌 값이 호출가능할 경우 필요할 시 수정할 것
      return typeof v === 'function';
    }

    if (typeof desc !== 'object' || desc === null)
      throw new TypeError('bad desc');

    var d = {};

    if (hasProperty(desc, 'enumerable'))
      d.enumerable = !!desc.enumerable;
    if (hasProperty(desc, 'configurable'))
      d.configurable = !!desc.configurable;
    if (hasProperty(desc, 'value'))
      d.value = desc.value;
    if (hasProperty(desc, 'writable'))
      d.writable = !!desc.writable;
    if (hasProperty(desc, 'get')) {
      var g = desc.get;

      if (!isCallable(g) &amp;&amp; typeof g !== 'undefined')
        throw new TypeError('bad get');
      d.get = g;
    }
    if (hasProperty(desc, 'set')) {
      var s = desc.set;
      if (!isCallable(s) &amp;&amp; typeof s !== 'undefined')
        throw new TypeError('bad set');
      d.set = s;
    }

    if (('get' in d || 'set' in d) &amp;&amp; ('value' in d || 'writable' in d))
      throw new TypeError('identity-confused descriptor');

    return d;
  }

  if (typeof obj !== 'object' || obj === null)
    throw new TypeError('bad obj');

  properties = Object(properties);

  var keys = Object.keys(properties);
  var descs = [];

  for (var i = 0; i &lt; keys.length; i++)
    descs.push([keys[i], convertToDescriptor(properties[keys[i]])]);

  for (var i = 0; i &lt; descs.length; i++)
    Object.defineProperty(obj, descs[i][0], descs[i][1]);

  return obj;
}
</pre>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_지원_현황">브라우저 지원 현황</h2>

<p>{{Compat("javascript.builtins.Object.defineProperties")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>{{jsxref("Object.defineProperty()")}}</li>
 <li>{{jsxref("Object.keys()")}}</li>
 <li><a href="/en-US/docs/Enumerability_and_ownership_of_properties">Enumerability and ownership of properties</a></li>
</ul>
