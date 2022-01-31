---
title: 古いイテレータープロトコル
slug: >-
  Web/JavaScript/Reference/Deprecated_and_obsolete_features/The_legacy_Iterator_protocol
tags:
  - ES2015
  - Guide
  - JavaScript
  - Legacy Iterator
translation_of: >-
  Web/JavaScript/Reference/Deprecated_and_obsolete_features/The_legacy_Iterator_protocol
---
<div>{{jsSidebar("More")}}</div>

<div class="warning"><strong>標準外です。</strong> 古いイテレータープロトコルは SpiderMonkey 固有の機能で、 Firefox 58 で削除されました。将来に向けた使用では、 <a href="/ja/docs/Web/JavaScript/Reference/Statements/for...of">for..of</a> ループと <a href="/ja/docs/Web/JavaScript/Reference/Iteration_protocols">反復処理プロトコル</a> を使用することを検討してください。</div>

<h2 id="The_deprecated_Firefox-only_iterator_protocol">非推奨の Firefox 専用イテレータープロトコル</h2>

<p>Firefox version 26 以前は、標準の <a href="/ja/docs/Web/JavaScript/Reference/Iteration_protocols">ES2015 のイテレータープロトコル</a>に似た別のイテレータープロトコルを実装していました。</p>

<p>オブジェクトが次のセマンティックスをもつ <code>next()</code> メソッドを実装している場合、そのオブジェクトは古いイテレーターで、反復処理の最後に {{jsxref("Global_Objects/StopIteration", "StopIteration")}} をスローします。</p>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">プロパティ</th>
   <th scope="col">値</th>
  </tr>
  <tr>
   <td><code>next</code></td>
   <td>引数なしの関数で、値を返します。</td>
  </tr>
 </tbody>
</table>

<h3 id="Difference_between_legacy_and_ES2015_iterator_protocols">古いイテレータープロトコルと ES2015 イテレータープロトコルとの違い</h3>

<ul>
 <li>値はプレイスホルダーオブジェクトの <code>value</code> プロパティではなく、 <code>next</code> の呼び出しの返値として直接値が返されていました。</li>
 <li>反復処理の終了は {{jsxref("Global_Objects/StopIteration", "StopIteration")}} オブジェクトをスローすることで表現されていました。</li>
</ul>

<h3 id="Simple_example_with_the_old_protocol">古いプロトコルをもつ簡単な例</h3>

<pre class="brush: js">function makeIterator(array){
    var nextIndex = 0;

    return {
       next: function(){
           if(nextIndex &lt; array.length){
               return array[nextIndex++];
           else
               throw new StopIteration();
       }
    }
}

var it = makeIterator(['yo', 'ya']);

console.log(it.next()); // 'yo'
console.log(it.next()); // 'ya'
try{
    console.log(it.next());
}
catch(e){
    if(e instanceof StopIteration){
         // iteration over
    }
}
</pre>

<h2 id="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Guide/Iterators_and_Generators">イテレーターとジェネレーター</a></li>
 <li>More <a href="/ja/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features">非推奨の機能、廃止された機能</a></li>
</ul>
