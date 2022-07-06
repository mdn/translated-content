---
title: WeakSet
slug: Web/JavaScript/Reference/Global_Objects/WeakSet
tags:
  - Class
  - ECMAScript 2015
  - JavaScript
  - WeakSet
translation_of: Web/JavaScript/Reference/Global_Objects/WeakSet
---
<div>{{JSRef}}</div>

<p><strong><code>WeakSet</code></strong> オブジェクトは、コレクションに弱く参照された<em>オブジェクト</em>を格納することができます。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code>WeakSet</code> オブジェクトはコレクションオブジェクトです。 {{jsxref("Set")}} と同様に、 <code>WeakSet</code> 内の各オブジェクトは一度だけ存在します。すなわち、 <code>WeakSet</code> コレクション内で固有になります。</p>

<p>{{jsxref("Set")}} オブジェクトとの主な違いは下記の通りです。</p>

<ul>
 <li><code>WeakSet</code> は<strong>オブジェクトのみ</strong>のコレクションです。 {{jsxref("Set")}} のように、任意の型の自由な値を入れることはできません。</li>
 <li><code>WeakSet</code> は<em>弱い参照</em>です。コレクション内のオブジェクトへの<em>弱い参照</em>で保持されます。 <code>WeakSet</code> 内に格納されているオブジェクトへの参照が他にない場合、ガベージコレクションにより削除されます。
  <div class="blockIndicator note">
  <p><strong>注:</strong> これは、このコレクションに格納されているオブジェクトの現在のリストが存在しないことを意味します。 <code>WeakSets</code> は列挙可能ではありません。</p>
  </div>
 </li>
</ul>

<h3 id="Use_case_Detecting_circular_references" name="Use_case_Detecting_circular_references">使用例: 循環参照の検出</h3>

<p>自分自身を再帰的に呼び出す関数は、どのオブジェクトが処理済みであるかを追跡することで、循環したデータ構造を防ぐ必要があります。</p>

<p><code>WeakSet</code> はこの目的に理想的です。</p>

<pre class="brush: js notranslate">// Execute a callback on everything stored inside an object
function execRecursively(fn, subject, _refs = null){
  if(!_refs)
    _refs = new WeakSet();

  // Avoid infinite recursion
  if(_refs.has(subject))
    return;

  fn(subject);
  if("object" === typeof subject){
    _refs.add(subject);
    for(let key in subject)
      execRecursively(fn, subject[key], _refs);
  }
}

const foo = {
  foo: "Foo",
  bar: {
    bar: "Bar"
  }
};

foo.bar.baz = foo; // Circular reference!
execRecursively(obj =&gt; console.log(obj), foo);
</pre>

<p>ここで、 <code>WeakSet</code> は最初の実行時に作成され、その後の関数呼び出しのたびに (内部の <code>_refs</code> 引数を使用して) 渡されます。</p>

<p>オブジェクトの数や探索順序は重要ではないので、オブジェクトの参照を追跡するには <code>WeakSet</code> のほうが {{jsxref("Set")}} よりも、特に巨大な数のオブジェクトを処理する場合にはよりふさわしい (そして性能もよい) ものです。</p>

<h2 id="Constructor" name="Constructor">コンストラクター</h2>

<dl>
 <dt>{{jsxref("WeakSet/WeakSet", "WeakSet()")}}</dt>
 <dd>新しい<code>WeakSet</code>オブジェクトを生成します。</dd>
</dl>

<h2 id="Instance_methods" name="Instance_methods">インスタンスメソッド</h2>

<dl>
 <dt>{{jsxref("WeakSet.add", "WeakSet.prototype.add(<var>value</var>)")}}</dt>
 <dd><code><var>value</var></code> を <code>WeakSet</code> オブジェクトに追加します。</dd>
 <dt>{{jsxref("WeakSet.delete", "WeakSet.prototype.delete(<var>value</var>)")}}</dt>
 <dd><code><var>value</var></code> を <code>WeakSet</code> オブジェクトから削除します。削除後、 <code>WeakSet.prototype.has(<var>value</var>)</code> は <code>false</code> を返します。</dd>
 <dt>{{jsxref("WeakSet.has", "WeakSet.prototype.has(<var>value</var>)")}}</dt>
 <dd><code><var>value</var></code> が <code>WeakSet</code> オブジェクト内の要素に含まれているかどうかを示す論理値を返します。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_the_WeakSet_object" name="Using_the_WeakSet_object">WeakSet オブジェクトの使用</h3>

<pre class="brush: js notranslate">const ws = new WeakSet();
const foo = {};
const bar = {};

ws.add(foo);
ws.add(bar);

ws.has(foo);    // true
ws.has(bar);    // true

ws.delete(foo); // foo を set から削除
ws.has(foo);    // false, foo は削除済み
ws.has(bar);    // true, bar は残っている</pre>

<p><code>foo !== bar</code> であることに注意してください。これらは似たオブジェクトですが、<em><strong>まったく同じオブジェクト</strong>ではありません</em>。したがって、両方のオブジェクトが set に追加されます。</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-weakset-objects', 'WeakSet')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.WeakSet")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Map")}}</li>
 <li>{{jsxref("Set")}}</li>
 <li>{{jsxref("WeakMap")}}</li>
</ul>
