---
title: Enumerability and ownership of properties
slug: Web/JavaScript/Enumerability_and_ownership_of_properties
translation_of: Web/JavaScript/Enumerability_and_ownership_of_properties
---
<div>{{JsSidebar("More")}}</div>



<p>'Enumerable properties'(열거 가능한 속성)는 내부 열거 형 플래그가 true로 설정된 property로, 이는 간단한 할당 또는 property initializer (<a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty">Object.defineProperty</a>를 통해 정의 된 특성 및 이러한 기본 열거 형을 false로 정의한 특성)를 통해 작성된 property의 기본값입니다. 등록 정보의 키가 <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol">Symbol</a>이 아니면 열거 가능한 등록 정보가 <a href="/en-US/docs/Web/JavaScript/Reference/Statements/for...in">for...in</a> 루프에 표시됩니다. 'Ownership of properties' (속성의 소유권)은 속성이 프로토 타입 체인이 아닌 개체에 직접 속하는지 여부에 따라 결정됩니다. 객체의 속성도 전체적으로 검색 할 수 있습니다. 개체 속성을 감지, 반복 / 열거 및 검색하는 여러 가지 기본 제공 방법이 있으며 아래 표와 같이 사용할 수 있습니다. 누락 된 범주를 얻는 방법을 보여주는 샘플 코드는 다음과 같습니다.</p>

<div style="overflow: auto; width: 100%;">
<table>
 <caption>Property enumerability and ownership - built-in methods of detection, retrieval, and iteration</caption>
 <tbody>
  <tr>
   <th>Functionality</th>
   <th>Own object</th>
   <th>Own object and its prototype chain</th>
   <th>Prototype chain only</th>
  </tr>
  <tr>
   <td>Detection</td>
   <td>
    <table>
     <thead>
      <tr>
       <th scope="col">Enumerable</th>
       <th scope="col">Nonenumerable</th>
       <th scope="col">Enumerable and Nonenumerable</th>
      </tr>
     </thead>
     <tbody>
      <tr>
       <td>
        <p><code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable">propertyIsEnumerable</a></code></p>

        <p><code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty">hasOwnProperty</a></code></p>
       </td>
       <td>
        <p><code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty">hasOwnProperty</a></code> – filtered to exclude enumerables using <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable">propertyIsEnumerable</a></code></p>
       </td>
       <td><code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty">hasOwnProperty</a></code></td>
      </tr>
     </tbody>
    </table>
   </td>
   <td>
    <table>
     <thead>
      <tr>
       <th scope="col">Enumerable</th>
       <th scope="col">Nonenumerable</th>
       <th scope="col">Enumerable and Nonenumerable</th>
      </tr>
     </thead>
     <tbody>
      <tr>
       <td>Not available without extra code</td>
       <td>Not available without extra code</td>
       <td><code><a href="/en-US/docs/Web/JavaScript/Reference/Operators/in">in</a></code></td>
      </tr>
     </tbody>
    </table>
   </td>
   <td>Not available without extra code</td>
  </tr>
  <tr>
   <td>Retrieval</td>
   <td>
    <table>
     <thead>
      <tr>
       <th scope="col">Enumerable</th>
       <th scope="col">Nonenumerable</th>
       <th scope="col">Enumerable and Nonenumerable</th>
      </tr>
     </thead>
     <tbody>
      <tr>
       <td>
        <p><code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys">Object.keys</a></code></p>

        <p><code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames">getOwnPropertyNames</a></code> </p>

        <p><code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols">getOwnPropertySymbols</a></code></p>
       </td>
       <td><code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames">getOwnPropertyNames</a></code>, <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols">getOwnPropertySymbols</a> </code>– filtered to exclude enumerables using <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable">propertyIsEnumerable</a></code></td>
       <td>
        <p><code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames">getOwnPropertyNames</a></code></p>

        <p><code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols">getOwnPropertySymbols</a></code></p>
       </td>
      </tr>
     </tbody>
    </table>
   </td>
   <td>Not available without extra code</td>
   <td>Not available without extra code</td>
  </tr>
  <tr>
   <td>Iterable</td>
   <td>
    <table>
     <thead>
      <tr>
       <th scope="col">Enumerable</th>
       <th scope="col">Nonenumerable</th>
       <th scope="col">Enumerable and Nonenumerable</th>
      </tr>
     </thead>
     <tbody>
      <tr>
       <td>
        <p><code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys">Object.keys</a></code></p>

        <p><code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames">getOwnPropertyNames</a></code> </p>

        <p><code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols">getOwnPropertySymbols</a></code></p>
       </td>
       <td><code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames">getOwnPropertyNames</a></code>, <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols">getOwnPropertySymbols</a></code> – filtered to exclude enumerables using <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable">propertyIsEnumerable</a></code></td>
       <td>
        <p><code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames">getOwnPropertyNames</a></code></p>

        <p><code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols">getOwnPropertySymbols</a></code></p>
       </td>
      </tr>
     </tbody>
    </table>
   </td>
   <td>
    <table>
     <thead>
      <tr>
       <th scope="col">Enumerable</th>
       <th scope="col">Nonenumerable</th>
       <th scope="col">Enumerable and Nonenumerable</th>
      </tr>
     </thead>
     <tbody>
      <tr>
       <td>
        <p><code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/for...in">for..in</a></code></p>

        <p>(excluding symbols)</p>
       </td>
       <td>Not available without extra code</td>
       <td>Not available without extra code</td>
      </tr>
     </tbody>
    </table>
   </td>
   <td>Not available without extra code</td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="Obtaining_properties_by_enumerabilityownership">Obtaining properties by enumerability/ownership</h2>



<p>아래는 모든 경우에 가장 효율적인 알고리즘은 아니지만 빠르게 코드를 작성하여 확인하기 좋습니다.</p>

<ul>
 <li>Detection can occur by <code>SimplePropertyRetriever.theGetMethodYouWant(obj).indexOf(prop) &gt; -1</code></li>
 <li>Iteration can occur by <code>SimplePropertyRetriever.theGetMethodYouWant(obj).forEach(function (value, prop) {});</code> (or use<code> filter()</code>, <code>map()</code>, etc.)</li>
</ul>

<pre class="brush: js notranslate">var SimplePropertyRetriever = {
    getOwnEnumerables: function(obj) {
        return this._getPropertyNames(obj, true, false, this._enumerable);
         // Or could use for..in filtered with hasOwnProperty or just this: return Object.keys(obj);
    },
    getOwnNonenumerables: function(obj) {
        return this._getPropertyNames(obj, true, false, this._notEnumerable);
    },
    getOwnEnumerablesAndNonenumerables: function(obj) {
        return this._getPropertyNames(obj, true, false, this._enumerableAndNotEnumerable);
        // Or just use: return Object.getOwnPropertyNames(obj);
    },
    getPrototypeEnumerables: function(obj) {
        return this._getPropertyNames(obj, false, true, this._enumerable);
    },
    getPrototypeNonenumerables: function(obj) {
        return this._getPropertyNames(obj, false, true, this._notEnumerable);
    },
    getPrototypeEnumerablesAndNonenumerables: function(obj) {
        return this._getPropertyNames(obj, false, true, this._enumerableAndNotEnumerable);
    },
    getOwnAndPrototypeEnumerables: function(obj) {
        return this._getPropertyNames(obj, true, true, this._enumerable);
        // Or could use unfiltered for..in
    },
    getOwnAndPrototypeNonenumerables: function(obj) {
        return this._getPropertyNames(obj, true, true, this._notEnumerable);
    },
    getOwnAndPrototypeEnumerablesAndNonenumerables: function(obj) {
        return this._getPropertyNames(obj, true, true, this._enumerableAndNotEnumerable);
    },
    // Private static property checker callbacks
    _enumerable: function(obj, prop) {
        return obj.propertyIsEnumerable(prop);
    },
    _notEnumerable: function(obj, prop) {
        return !obj.propertyIsEnumerable(prop);
    },
    _enumerableAndNotEnumerable: function(obj, prop) {
        return true;
    },
    // Inspired by http://stackoverflow.com/a/8024294/271577
    _getPropertyNames: function getAllPropertyNames(obj, iterateSelfBool, iteratePrototypeBool, includePropCb) {
        var props = [];

        do {
            if (iterateSelfBool) {
                Object.getOwnPropertyNames(obj).forEach(function(prop) {
                    if (props.indexOf(prop) === -1 &amp;&amp; includePropCb(obj, prop)) {
                        props.push(prop);
                    }
                });
            }
            if (!iteratePrototypeBool) {
                break;
            }
            iterateSelfBool = true;
        } while (obj = Object.getPrototypeOf(obj));

        return props;
    }
};</pre>

<h2 id="Detection_Table">Detection Table</h2>

<div style="overflow: auto; width: 100%;">
<table>
 <thead>
  <tr>
   <th scope="row"></th>
   <th scope="col"><code>in</code></th>
   <th scope="col"><code>for..in</code></th>
   <th scope="col"><code>obj.hasOwnProperty</code></th>
   <th scope="col"><code>obj.propertyIsEnumerable</code></th>
   <th scope="col"><code>Object.keys</code></th>
   <th scope="col"><code>Object.getOwnPropertyNames</code></th>
   <th scope="col"><code>Object.getOwnPropertyDescriptors</code></th>
   <th scope="col"><code>Reflect.ownKeys()</code></th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <th scope="row">Enumerable</th>
   <td>true</td>
   <td>true</td>
   <td>true</td>
   <td>true</td>
   <td>true</td>
   <td>true</td>
   <td>true</td>
   <td>true</td>
  </tr>
  <tr>
   <th scope="row">Nonenumerable</th>
   <td>true</td>
   <td>false</td>
   <td>true</td>
   <td>false</td>
   <td>false</td>
   <td>true</td>
   <td>true</td>
   <td>true</td>
  </tr>
  <tr>
   <th scope="row">Symbols keys</th>
   <td>true</td>
   <td>false</td>
   <td>true</td>
   <td>true</td>
   <td>false</td>
   <td>false</td>
   <td>true</td>
   <td>true</td>
  </tr>
  <tr>
   <th scope="row">Inherited Enumerable</th>
   <td>true</td>
   <td>true</td>
   <td>false</td>
   <td>false</td>
   <td>false</td>
   <td>false</td>
   <td>false</td>
   <td>false</td>
  </tr>
  <tr>
   <th scope="row">Inherited Nonenumerable</th>
   <td>true</td>
   <td>false</td>
   <td>false</td>
   <td>false</td>
   <td>false</td>
   <td>false</td>
   <td>false</td>
   <td>false</td>
  </tr>
  <tr>
   <th scope="row">Inherited Symbols keys</th>
   <td>true</td>
   <td>false</td>
   <td>false</td>
   <td>false</td>
   <td>false</td>
   <td>false</td>
   <td>false</td>
   <td>false</td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="See_also">See also</h2>

<ul>
 <li><code><a href="/en-US/docs/Web/JavaScript/Reference/Operators/in">in</a></code></li>
 <li><code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/for...in">for..in</a></code></li>
 <li>{{jsxref("Object.hasOwnProperty()")}}</li>
 <li>{{jsxref("Object.propertyIsEnumerable()")}}</li>
 <li>{{jsxref("Object.getOwnPropertyNames()")}}</li>
 <li>{{jsxref("Object.keys()")}}</li>
 <li>{{jsxref("Object.getOwnPropertyDescriptors()")}}</li>
</ul>
