---
title: Array.prototype.reduce()
slug: Web/JavaScript/Reference/Global_Objects/Array/Reduce
tags:
  - Array
  - ECMAScript 5
  - JavaScript
  - Method
  - Prototype
  - Reduce
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Array/Reduce
---
<p>{{JSRef}}</p>

<p><code><strong>reduce()</strong></code> 方法对数组中的每个元素执行一个由您提供的<strong>reducer</strong>函数(升序执行)，将其结果汇总为单个返回值。</p>

<div>{{EmbedInteractiveExample("pages/js/array-reduce.html")}}</div>

<div>
<p><strong>reducer</strong> 函数接收4个参数:</p>

<ol>
 <li>Accumulator (acc) (累计器)</li>
 <li>Current Value (cur) (当前值)</li>
 <li>Current Index (idx) (当前索引)</li>
 <li>Source Array (src) (源数组)</li>
</ol>

<p>您的 <strong>reducer</strong> 函数的返回值分配给累计器，该返回值在数组的每个迭代中被记住，并最后成为最终的单个结果值。</p>
</div>

<h2 id="语法">语法</h2>

<pre><var>arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])</var></pre>

<h3 id="参数">参数</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd>执行数组中每个值 (如果没有提供 <code>initialValue则第一个值除外</code>)的函数，包含四个参数：
 <dl>
  <dt><strong><code>accumulator</code></strong></dt>
  <dd>
  <p>累计器累计回调的返回值; 它是上一次调用回调时返回的累积值，或<code>initialValue</code>（见于下方）。</p>
  </dd>
  <dt><code>currentValue</code></dt>
  <dd>数组中正在处理的元素。</dd>
  <dt><code>index</code> {{optional_inline}}</dt>
  <dd>数组中正在处理的当前元素的索引。 如果提供了<code>initialValue</code>，则起始索引号为0，否则从索引1起始。</dd>
  <dt><code>array</code>{{optional_inline}}</dt>
  <dd>调用<code>reduce()</code>的数组</dd>
 </dl>
 </dd>
 <dt><code>initialValue</code>{{optional_inline}}</dt>
 <dd>作为第一次调用 <code>callback</code>函数时的第一个参数的值。 如果没有提供初始值，则将使用数组中的第一个元素。 在没有初始值的空数组上调用 reduce 将报错。</dd>
</dl>

<h3 id="返回值">返回值</h3>

<p>函数累计处理的结果</p>

<h2 id="描述">描述</h2>

<p><code>reduce</code>为数组中的每一个元素依次执行<code>callback</code>函数，不包括数组中被删除或从未被赋值的元素，接受四个参数：</p>

<ul>
 <li><code>accumulator 累计器</code></li>
 <li><code>currentValue 当前值</code></li>
 <li><code>currentIndex 当前索引</code></li>
 <li><code>array 数组</code></li>
</ul>

<p>回调函数第一次执行时，<code>accumulator</code> 和<code>currentValue</code>的取值有两种情况：如果调用<code>reduce()</code>时提供了<code>initialValue</code>，<code>accumulator</code>取值为<code>initialValue</code>，<code>currentValue</code>取数组中的第一个值；如果没有提供 <code>initialValue</code>，那么<code>accumulator</code>取数组中的第一个值，<code>currentValue</code>取数组中的第二个值。</p>

<div class="note">
<p><strong>备注：</strong>如果没有提供<code>initialValue</code>，reduce 会从索引1的地方开始执行 callback 方法，跳过第一个索引。如果提供<code>initialValue</code>，从索引0开始。</p>
</div>

<p>如果数组为空且没有提供<code>initialValue</code>，会抛出{{jsxref("TypeError")}} 。如果数组仅有一个元素（无论位置如何）并且没有提供<code>initialValue</code>， 或者有提供<code>initialValue</code>但是数组为空，那么此唯一值将被返回并且<code>callback</code>不会被执行。</p>

<p>提供初始值通常更安全，正如下面的例子，如果没有提供<code>initialValue</code>，则可能有四种输出：</p>

<pre class="brush: js">var maxCallback = ( acc, cur ) =&gt; Math.max( acc.x, cur.x );
var maxCallback2 = ( max, cur ) =&gt; Math.max( max, cur );

// reduce() 没有初始值
[ { x: 2 }, { x: 22 }, { x: 42 } ].reduce( maxCallback ); // NaN
[ { x: 2 }, { x: 22 }            ].reduce( maxCallback ); // 22
[ { x: 2 }                       ].reduce( maxCallback ); // { x: 2 }
[                                ].reduce( maxCallback ); // TypeError

// map/reduce; 这是更好的方案，即使传入空数组或更大数组也可正常执行
[ { x: 22 }, { x: 42 } ].map( el =&gt; el.x )
                        .reduce( maxCallback2, -Infinity );
</pre>

<h3 id="reduce_如何运行">reduce() 如何运行</h3>

<p>假如运行下段<code>reduce()</code>代码：</p>

<pre class="brush:js">[0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array){
  return accumulator + currentValue;
});
</pre>

<p>callback 被调用四次，每次调用的参数和返回值如下表：</p>

<table>
 <thead>
  <tr>
   <th scope="col"><code>callback</code></th>
   <th scope="col"><code>accumulator</code></th>
   <th scope="col"><code>currentValue</code></th>
   <th scope="col"><code>currentIndex</code></th>
   <th scope="col"><code>array</code></th>
   <th scope="col">return value</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <th scope="row">first call</th>
   <td><code>0</code></td>
   <td><code>1</code></td>
   <td><code>1</code></td>
   <td><code>[0, 1, 2, 3, 4]</code></td>
   <td><code>1</code></td>
  </tr>
  <tr>
   <th scope="row">second call</th>
   <td><code>1</code></td>
   <td><code>2</code></td>
   <td><code>2</code></td>
   <td><code>[0, 1, 2, 3, 4]</code></td>
   <td><code>3</code></td>
  </tr>
  <tr>
   <th scope="row">third call</th>
   <td><code>3</code></td>
   <td><code>3</code></td>
   <td><code>3</code></td>
   <td><code>[0, 1, 2, 3, 4]</code></td>
   <td><code>6</code></td>
  </tr>
  <tr>
   <th scope="row">fourth call</th>
   <td><code>6</code></td>
   <td><code>4</code></td>
   <td><code>4</code></td>
   <td><code>[0, 1, 2, 3, 4]</code></td>
   <td><code>10</code></td>
  </tr>
 </tbody>
</table>

<p>由<code>reduce</code>返回的值将是最后一次回调返回值（10）。</p>

<p>你还可以使用{{jsxref("Functions/Arrow_functions", "箭头函数","",1)}}来代替完整的函数。 下面的代码将产生与上面的代码相同的输出：</p>

<pre class="brush: js">[0, 1, 2, 3, 4].reduce((prev, curr) =&gt; prev + curr );</pre>

<p>如果你打算提供一个初始值作为<code>reduce()</code>方法的第二个参数，以下是运行过程及结果：</p>

<pre class="brush: js">[0, 1, 2, 3, 4].reduce((accumulator, currentValue, currentIndex, array) =&gt; {
    return accumulator + currentValue
}, 10)
</pre>

<table>
 <thead>
  <tr>
   <th scope="col"><code>callback</code></th>
   <th scope="col"><code>accumulator</code></th>
   <th scope="col"><code>currentValue</code></th>
   <th scope="col"><code>currentIndex</code></th>
   <th scope="col"><code>array</code></th>
   <th scope="col">return value</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <th scope="row">first call</th>
   <td><code>10</code></td>
   <td><code>0</code></td>
   <td><code>0</code></td>
   <td><code>[0, 1, 2, 3, 4]</code></td>
   <td><code>10</code></td>
  </tr>
  <tr>
   <th scope="row">second call</th>
   <td><code>10</code></td>
   <td><code>1</code></td>
   <td><code>1</code></td>
   <td><code>[0, 1, 2, 3, 4]</code></td>
   <td><code>11</code></td>
  </tr>
  <tr>
   <th scope="row">third call</th>
   <td><code>11</code></td>
   <td><code>2</code></td>
   <td><code>2</code></td>
   <td><code>[0, 1, 2, 3, 4]</code></td>
   <td><code>13</code></td>
  </tr>
  <tr>
   <th scope="row">fourth call</th>
   <td><code>13</code></td>
   <td><code>3</code></td>
   <td><code>3</code></td>
   <td><code>[0, 1, 2, 3, 4]</code></td>
   <td><code>16</code></td>
  </tr>
  <tr>
   <th scope="row">fifth call</th>
   <td><code>16</code></td>
   <td><code>4</code></td>
   <td><code>4</code></td>
   <td><code>[0, 1, 2, 3, 4]</code></td>
   <td><code>20</code></td>
  </tr>
 </tbody>
</table>

<p>这种情况下<code>reduce()</code>返回的值是<code>20</code>。</p>

<h2 id="例子">例子</h2>



























































































<h3 id="数组里所有值的和">数组里所有值的和</h3>

<pre class="brush: js">var sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
// 和为 6</pre>

<p>你也可以写成箭头函数的形式：</p>

<pre class="brush: js">var total = [ 0, 1, 2, 3 ].reduce(
  ( acc, cur ) =&gt; acc + cur,
  0
);</pre>

<h3 id="累加对象数组里的值">累加对象数组里的值</h3>

<p>要累加对象数组中包含的值，必须提供初始值，以便各个item正确通过你的函数。</p>

<pre class="brush: js">var initialValue = 0;
var sum = [{x: 1}, {x:2}, {x:3}].reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.x;
},initialValue)

console.log(sum) // logs 6</pre>

<p>你也可以写成箭头函数的形式：</p>

<pre class="brush: js">var initialValue = 0;
var sum = [{x: 1}, {x:2}, {x:3}].reduce(
    (accumulator, currentValue) =&gt; accumulator + currentValue.x
    ,initialValue
);

console.log(sum) // logs 6
</pre>

<h3 id="将二维数组转化为一维">将二维数组转化为一维</h3>

<pre class="brush: js">var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  function(a, b) {
    return a.concat(b);
  },
  []
);
// flattened is [0, 1, 2, 3, 4, 5]
</pre>

<p>你也可以写成箭头函数的形式：</p>

<pre class="brush: js">var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
 ( acc, cur ) =&gt; acc.concat(cur),
 []
);

</pre>

<h3 id="计算数组中每个元素出现的次数">计算数组中每个元素出现的次数</h3>

<pre class="brush: js">var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

var countedNames = names.reduce(function (allNames, name) {
  if (name in allNames) {
    allNames[name]++;
  }
  else {
    allNames[name] = 1;
  }
  return allNames;
}, {});
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }</pre>

<h3 id="按属性对object分类">按属性对object分类</h3>

<pre class="brush: js">var people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 }
];

function groupBy(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    var key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

var groupedPeople = groupBy(people, 'age');
// groupedPeople is:
// {
//   20: [
//     { name: 'Max', age: 20 },
//     { name: 'Jane', age: 20 }
//   ],
//   21: [{ name: 'Alice', age: 21 }]
// }
</pre>

<h3 id="使用扩展运算符和initialValue绑定包含在对象数组中的数组">使用扩展运算符和initialValue绑定包含在对象数组中的数组</h3>

<pre class="brush: js">// friends - 对象数组
// where object field "books" - list of favorite books
var friends = [{
  name: 'Anna',
  books: ['Bible', 'Harry Potter'],
  age: 21
}, {
  name: 'Bob',
  books: ['War and peace', 'Romeo and Juliet'],
  age: 26
}, {
  name: 'Alice',
  books: ['The Lord of the Rings', 'The Shining'],
  age: 18
}];

// allbooks - list which will contain all friends' books +
// additional list contained in initialValue
var allbooks = friends.reduce(function(prev, curr) {
  return [...prev, ...curr.books];
}, ['Alphabet']);

// allbooks = [
//   'Alphabet', 'Bible', 'Harry Potter', 'War and peace',
//   'Romeo and Juliet', 'The Lord of the Rings',
//   'The Shining'
// ]
</pre>

<h3 id="数组去重">数组去重</h3>

<div class="note">
<p><strong>备注：</strong> 如果你正在使用一个可以兼容{{jsxref("Set")}} 和 {{jsxref("Array.from()")}} 的环境， 你可以使用<code>let orderedArray = Array.from(new Set(myArray));</code> 来获得一个相同元素被移除的数组。</p>
</div>

<pre class="brush: js">let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
let myOrderedArray = myArray.reduce(function (accumulator, currentValue) {
  if (accumulator.indexOf(currentValue) === -1) {
    accumulator.push(currentValue)
  }
  return accumulator
}, [])

console.log(myOrderedArray)</pre>

<pre class="brush: js">let arr = [1,2,1,2,3,5,4,5,3,4,4,4,4];
let result = arr.sort().reduce((init, current) =&gt; {
    if(init.length === 0 || init[init.length-1] !== current) {
        init.push(current);
    }
    return init;
}, []);
console.log(result); //[1,2,3,4,5]</pre>

<h3 id="按顺序运行Promise">按顺序运行Promise</h3>

<pre class="brush: js">/**
 * Runs promises from array of functions that can return promises
 * in chained manner
 *
 * @param {array} arr - promise arr
 * @return {Object} promise object
 */
function runPromiseInSequence(arr, input) {
  return arr.reduce(
    (promiseChain, currentFunction) =&gt; promiseChain.then(currentFunction),
    Promise.resolve(input)
  );
}

// promise function 1
function p1(a) {
  return new Promise((resolve, reject) =&gt; {
    resolve(a * 5);
  });
}

// promise function 2
function p2(a) {
  return new Promise((resolve, reject) =&gt; {
    resolve(a * 2);
  });
}

// function 3  - will be wrapped in a resolved promise by .then()
function f3(a) {
 return a * 3;
}

// promise function 4
function p4(a) {
  return new Promise((resolve, reject) =&gt; {
    resolve(a * 4);
  });
}

const promiseArr = [p1, p2, f3, p4];
runPromiseInSequence(promiseArr, 10)
  .then(console.log);   // 1200
</pre>

<h3 id="功能型函数管道">功能型函数管道</h3>

<pre class="brush: js">// Building-blocks to use for composition
const double = x =&gt; x + x;
const triple = x =&gt; 3 * x;
const quadruple = x =&gt; 4 * x;

// Function composition enabling pipe functionality
const pipe = (...functions) =&gt; input =&gt; functions.reduce(
    (acc, fn) =&gt; fn(acc),
    input
);

// Composed functions for multiplication of specific values
const multiply6 = pipe(double, triple);
const multiply9 = pipe(triple, triple);
const multiply16 = pipe(quadruple, quadruple);
const multiply24 = pipe(double, triple, quadruple);

// Usage
multiply6(6); // 36
multiply9(9); // 81
multiply16(16); // 256
multiply24(10); // 240
</pre>

<h3 id="使用_reduce实现map">使用 reduce实现map</h3>

<pre class="brush: js">if (!Array.prototype.mapUsingReduce) {
  Array.prototype.mapUsingReduce = function(callback, thisArg) {
    return this.reduce(function(mappedArray, currentValue, index, array) {
      mappedArray[index] = callback.call(thisArg, currentValue, index, array)
      return mappedArray
    }, [])
  }
}

[1, 2, , 3].mapUsingReduce(
  (currentValue, index, array) =&gt; currentValue + index + array.length
) // [5, 7, , 10]
</pre>

<h2 id="Polyfill">Polyfill</h2>

<pre class="brush: js">// Production steps of ECMA-262, Edition 5, 15.4.4.21
// Reference: http://es5.github.io/#x15.4.4.21
// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
if (!Array.prototype.reduce) {
  Object.defineProperty(Array.prototype, 'reduce', {
    value: function(callback /*, initialValue*/) {
      if (this === null) {
        throw new TypeError( 'Array.prototype.reduce ' +
          'called on null or undefined' );
      }
      if (typeof callback !== 'function') {
        throw new TypeError( callback +
          ' is not a function');
      }

      // 1. Let O be ? ToObject(this value).
      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length &gt;&gt;&gt; 0;

      // Steps 3, 4, 5, 6, 7
      var k = 0;
      var value;

      if (arguments.length &gt;= 2) {
        value = arguments[1];
      } else {
        while (k &lt; len &amp;&amp; !(k in o)) {
          k++;
        }

        // 3. If len is 0 and initialValue is not present,
        //    throw a TypeError exception.
        if (k &gt;= len) {
          throw new TypeError( 'Reduce of empty array ' +
            'with no initial value' );
        }
        value = o[k++];
      }

      // 8. Repeat, while k &lt; len
      while (k &lt; len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kPresent be ? HasProperty(O, Pk).
        // c. If kPresent is true, then
        //    i.  Let kValue be ? Get(O, Pk).
        //    ii. Let accumulator be ? Call(
        //          callbackfn, undefined,
        //          « accumulator, kValue, k, O »).
        if (k in o) {
          value = callback(value, o[k], k, o);
        }

        // d. Increase k by 1.
        k++;
      }

      // 9. Return accumulator.
      return value;
    }
  });
}
</pre>

<p>如果您需要兼容不支持<code><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty">Object.defineProperty</a></code>的JavaScript引擎，那么最好不要 polyfill <code>Array.prototype</code>方法，因为你无法使其成为<strong>不可枚举</strong>的。</p>

<h2 id="规范">规范</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.4.4.21', 'Array.prototype.reduce')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td>初始定语. 实施于 JavaScript 1.8.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-array.prototype.reduce', 'Array.prototype.reduce')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-array.prototype.reduce', 'Array.prototype.reduce')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="浏览器兼容性">浏览器兼容性</h2>

<div>


<p>{{Compat("javascript.builtins.Array.reduce")}}</p>
</div>

<h2 id="相关链接">相关链接</h2>

<ul>
 <li>{{jsxref("Array.prototype.reduceRight()")}}</li>
</ul>
