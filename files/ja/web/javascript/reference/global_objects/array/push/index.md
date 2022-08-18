---
title: Array.prototype.push()
slug: Web/JavaScript/Reference/Global_Objects/Array/push
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Array/push
---
<div>{{JSRef}}</div>

<p><code><strong>push()</strong></code> メソッドは、配列の末尾に 1 つ以上の要素を追加することができます。また戻り値として新しい配列の要素数を返します。</p>

<div>{{EmbedInteractiveExample("pages/js/array-push.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>arr</var>.push([<var>element1</var>[, ...[, <var>elementN</var>]]])</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code>element<em>N</em></code></dt>
 <dd>配列の末尾に追加する要素。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>メソッドが呼び出されたオブジェクトの新しい {{jsxref("Array.length", "length")}} プロパティ。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code>push</code> メソッドは配列の末尾に要素を追加します。</p>

<p><code>push</code> は意図的に汎用性を持たせています。つまり、このメソッドは配列に類似したオブジェクトに対して{{jsxref("Function.call", "呼び出し", "", 1)}}たり、{{jsxref("Function.apply", "適用し", "", 1)}}たりすることもできます。なお、<code>push</code> は配列の末尾から要素を挿入する必要性があるため、 <code>length</code> プロパティに依存しています。<code>length</code> が数値に変換できない場合、0 が用いられます。また、 <code>length</code> が存在しない場合は <code>length</code> も作成されることになります。</p>

<p>ネイティブのみで、配列のようなオブジェクトは {{jsxref("Global_Objects/String", "strings", "", 1)}} ですが、文字列は変化しないので、このメソッドの効果を受けるには相応しくありません。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Adding_elements_to_an_array" name="Adding_elements_to_an_array">配列に要素を追加する</h3>

<p>以下のコードは 2 つの要素を持つ配列 <code>sports</code> を生成し、それに 2 つの要素を追加します。コードの実行後、変数 <code>total</code> には 4 が入ります。</p>

<pre class="brush: js notranslate">let sports = ['soccer', 'baseball']
let total = sports.push('football', 'swimming')

console.log(sports)  // ['soccer', 'baseball', 'football', 'swimming']
console.log(total)   // 4
</pre>

<h3 id="Merging_two_arrays" name="Merging_two_arrays">２つの配列をマージする</h3>

<p>この例では {{jsxref("Function.apply", "apply()")}} を利用することで 2 つ目の配列の全ての要素を 1 つ目の要素にマージさせています。</p>

<p>2 番目の配列 (例では <code>moreVegs</code>) が非常に大きい場合はこのメソッドを<em>使用しない</em>でください。なぜなら、1 つの関数が取ることのできるパラメータの最大数は実際には制限されているからです。詳細は {{jsxref("Function.apply", "apply()")}} を参照してください。</p>

<pre class="brush: js notranslate">let vegetables = ['parsnip', 'potato']
let moreVegs = ['celery', 'beetroot']

// 1 つ目の配列に 2 つ目の配列をマージさせます
// vegetables.push('celery', 'beetroot'); と同じ結果になります
Array.prototype.push.apply(vegetables, moreVegs)

console.log(vegetables)  // ['parsnip', 'potato', 'celery', 'beetroot']
</pre>

<h3 id="Using_an_object_in_an_array-like_fashion" name="Using_an_object_in_an_array-like_fashion">オブジェクトを配列のように使用する</h3>

<p>上述したように、<code>push</code> は内部的には汎用的なので、その利点を活かすことができます。この例が示しているように、オブジェクト上で <code>Array.prototype.push</code> は正しく動作します。</p>

<p>オブジェクトのコレクションを保存するために、配列を生成していないことに注意してください。代わりに、コレクションをオブジェクト自体に保存して、配列を扱っているかのように見せかけるために <code>Array.prototype.push</code> 上で <code>call</code> を使用しています。そして、JavaScript は実行コンテキストの確立を許可しているおかげで、これは動作します。</p>

<pre class="brush: js notranslate">let obj = {
    length: 0,

    addElem: function addElem(elem) {
        // obj.length は、要素が追加されるたびに自動的に増分する。
        [].push.call(this, elem)
    }
}

// 例示のために空のオブジェクトを追加する。
obj.addElem({})
obj.addElem({})
console.log(obj.length)
// → 2
</pre>

<p><code>obj</code> は配列ではありませんが、本当の配列を扱っているかのように <code>push</code> メソッドは <code>obj</code> の <code>length</code> プロパティを増加させできていることに注意してください。</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-array.prototype.push', 'Array.prototype.push')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.Array.push")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Array.prototype.pop()")}}</li>
 <li>{{jsxref("Array.prototype.shift()")}}</li>
 <li>{{jsxref("Array.prototype.unshift()")}}</li>
 <li>{{jsxref("Array.prototype.concat()")}}</li>
</ul>
