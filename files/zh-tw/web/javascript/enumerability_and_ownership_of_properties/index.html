---
title: 屬性的可列舉性及所有權
slug: Web/JavaScript/Enumerability_and_ownership_of_properties
translation_of: Web/JavaScript/Enumerability_and_ownership_of_properties
---
<div>{{JsSidebar("More")}}</div>

<p>Enumerable properties are those properties whose internal [[Enumerable]] flag is set to true, which is the default for properties created via simple assignment or via a property initializer (properties defined via <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty">Object.defineProperty</a> and such default [[Enumerable]] to false). Enumerable properties show up in <a href="/en-US/docs/Web/JavaScript/Reference/Statements/for...in">for...in</a> loops unless the property's name is a <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol">Symbol</a>. Ownership of properties is determined by whether the property belongs to the object directly and not to its prototype chain. Properties of an object can also be retrieved in total. There are a number of built-in means of detecting, iterating/enumerating, and retrieving object properties, with the chart showing which are available. Some sample code follows which demonstrates how to obtain the missing categories.</p>

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
       <td><code><a href="/en-US/docs/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable">propertyIsEnumerable</a></code></td>
       <td><code><a href="/en-US/docs/JavaScript/Reference/Global_Objects/Object/hasOwnProperty">hasOwnProperty</a></code> and not <code><a href="/en-US/docs/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable">propertyIsEnumerable</a></code></td>
       <td><code><a href="/en-US/docs/JavaScript/Reference/Global_Objects/Object/hasOwnProperty">hasOwnProperty</a></code></td>
      </tr>
     </tbody>
    </table>
   </td>
   <td>Not available without extra code</td>
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
       <td><code><a href="/en-US/docs/JavaScript/Reference/Global_Objects/Object/keys">Object.keys</a></code></td>
       <td><code><a href="/en-US/docs/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames">getOwnPropertyNames</a></code> filtered to include properties when not passing <code><a href="/en-US/docs/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable">propertyIsEnumerable</a></code></td>
       <td><code><a href="/en-US/docs/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames">getOwnPropertyNames</a></code></td>
      </tr>
     </tbody>
    </table>
   </td>
   <td>Not available without extra code</td>
   <td>Not available without extra code</td>
  </tr>
  <tr>
   <td>Iteration</td>
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
       <td>Iterate over <code><a href="/en-US/docs/JavaScript/Reference/Global_Objects/Object/keys">Object.keys</a></code></td>
       <td>Iterate over <code><a href="/en-US/docs/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames">getOwnPropertyNames</a> </code>filtered to include properties when not passing <code><a href="/en-US/docs/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable">propertyIsEnumerable</a></code></td>
       <td>Iterate over <code><a href="/en-US/docs/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames">getOwnPropertyNames</a></code></td>
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
       <td><code><a href="/en-US/docs/JavaScript/Reference/Statements/for...in">for..in</a></code></td>
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

<h2 id="Obtaining_properties_by_enumerabilityownership">Obtaining properties by enumerability/ownership</h2>

<p>Note that this is not the most efficient algorithm for all cases, but useful for a quick demonstration.</p>

<ul>
 <li>Detection can occur by <code>SimplePropertyRetriever.theGetMethodYouWant(obj).indexOf(prop) &gt; -1</code></li>
 <li>Iteration can occur by <code>SimplePropertyRetriever.theGetMethodYouWant(obj).forEach(function (value, prop) {});</code> (or use<code> filter()</code>, <code>map()</code>, etc.)</li>
</ul>

<pre class="brush: js">var SimplePropertyRetriever = {
    getOwnEnumerables: function (obj) {
        return this._getPropertyNames(obj, true, false, this._enumerable);
         // Or could use for..in filtered with hasOwnProperty or just this: return Object.keys(obj);
    },
    getOwnNonenumerables: function (obj) {
        return this._getPropertyNames(obj, true, false, this._notEnumerable);
    },
    getOwnEnumerablesAndNonenumerables: function (obj) {
        return this._getPropertyNames(obj, true, false, this._enumerableAndNotEnumerable);
        // Or just use: return Object.getOwnPropertyNames(obj);
    },
    getPrototypeEnumerables: function (obj) {
        return this._getPropertyNames(obj, false, true, this._enumerable);
    },
    getPrototypeNonenumerables: function (obj) {
        return this._getPropertyNames(obj, false, true, this._notEnumerable);
    },
    getPrototypeEnumerablesAndNonenumerables: function (obj) {
        return this._getPropertyNames(obj, false, true, this._enumerableAndNotEnumerable);
    },
    getOwnAndPrototypeEnumerables: function (obj) {
        return this._getPropertyNames(obj, true, true, this._enumerable);
        // Or could use unfiltered for..in
    },
    getOwnAndPrototypeNonenumerables: function (obj) {
        return this._getPropertyNames(obj, true, true, this._notEnumerable);
    },
    getOwnAndPrototypeEnumerablesAndNonenumerables: function (obj) {
        return this._getPropertyNames(obj, true, true, this._enumerableAndNotEnumerable);
    },
    // Private static property checker callbacks
    _enumerable : function (obj, prop) {
        return obj.propertyIsEnumerable(prop);
    },
    _notEnumerable : function (obj, prop) {
        return !obj.propertyIsEnumerable(prop);
    },
    _enumerableAndNotEnumerable : function (obj, prop) {
        return true;
    },
    // Inspired by http://stackoverflow.com/a/8024294/271577
    _getPropertyNames : function getAllPropertyNames(obj, iterateSelfBool, iteratePrototypeBool, includePropCb) {
        var props = [];

        do {
            if (iterateSelfBool) {
                Object.getOwnPropertyNames(obj).forEach(function (prop) {
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

<table>
 <thead>
  <tr>
   <th scope="row"> </th>
   <th scope="col"><code>in</code></th>
   <th scope="col"><code>for..in</code></th>
   <th scope="col"><code>hasOwnProperty</code></th>
   <th scope="col"><code>propertyIsEnumerable</code></th>
   <th scope="col"><code>in Object.keys</code></th>
   <th scope="col"><code>in Object.getOwnPropertyNames</code></th>
   <th scope="col">in Object.getOwnPropertyDescriptors</th>
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
  </tr>
  <tr>
   <th scope="row">Inherited Enumerable</th>
   <td>true</td>
   <td>true</td>
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
  </tr>
  <tr>
   <th scope="row">Account for Symbols keys</th>
   <td>true</td>
   <td>false</td>
   <td>true</td>
   <td>true</td>
   <td>false</td>
   <td>false</td>
   <td>true</td>
  </tr>
 </tbody>
</table>

<h2 id="參見">參見</h2>

<ul>
 <li><code><a href="/en-US/docs/JavaScript/Reference/Operators/in">in</a></code></li>
 <li><code><a href="/en-US/docs/JavaScript/Reference/Statements/for...in">for..in</a></code></li>
 <li><code><a href="/en-US/docs/JavaScript/Reference/Global_Objects/Object/hasOwnProperty">hasOwnProperty</a></code></li>
 <li><code><a href="/en-US/docs/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable">propertyIsEnumerable</a></code></li>
 <li><code><a href="/en-US/docs/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames">getOwnPropertyNames</a></code></li>
 <li><code><a href="/en-US/docs/JavaScript/Reference/Global_Objects/Object/keys">Object.keys</a></code></li>
 <li><code><a href="/en-US/docs/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors">Object.getOwnPropertyDescriptors</a></code></li>
</ul>
