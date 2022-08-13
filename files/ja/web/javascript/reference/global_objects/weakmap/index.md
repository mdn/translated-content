---
title: WeakMap
slug: Web/JavaScript/Reference/Global_Objects/WeakMap
tags:
  - Class
  - ECMAScript 2015
  - JavaScript
  - Reference
  - WeakMap
translation_of: Web/JavaScript/Reference/Global_Objects/WeakMap
---
<div>{{JSRef}}</div>

<p><span class="seoSummary"><strong><code>WeakMap</code></strong> オブジェクトは、キーが弱く参照されるキーと値の組のコレクションです。キーはオブジェクトでなければならず、値は任意の値を取ることができます。</span></p>

<p><code>WeakMap</code> については、 <a href="/ja/docs/Web/JavaScript/Guide/Keyed_collections">WeakMap オブジェクト</a>のガイド (<a href="/ja/docs/Web/JavaScript/Guide/Keyed_collections">キー付きコレクション</a>内) でより詳しく解説しています。</p>

<h2 id="Description" name="Description">解説</h2>

<p>WeakMap のキーは <code>Object</code> に限ります。{{Glossary("Primitive", "プリミティブ型")}} はキーとして使えません（例えば {{jsxref("Symbol")}} は <code>WeakMap</code> のキーとして使えません）。</p>

<h3 id="Why_WeakMap" name="Why_WeakMap">なぜ <em>Weak</em>Map なのか?</h3>

<p>map API は、4 つの API メソッドから共有される 2 つの配列 (1 つはキー用、もう 1 つは値用) を用いることで、JavaScript で実装<em>できます</em>。このマップに要素を設定すると、それぞれの配列の最後に同時にキーと値を追加することになります。その結果、両方の配列でキーと値のインデックスは対応がとれています。マップから値を取得するには、すべてのキーを操作して一致するものを見つけ、見つかったキーのインデックスを使用して値の配列から対応する値を取り出します。</p>

<p>そうした実装では、主に 2 つの不都合が生じることとなります。</p>

<ol>
 <li>第一に、設定や探索の計算量が <em>O(<var>n</var>)</em> となること (<var>n</var> はマップ中におけるキーの数) で、どちらの操作も一致する値を見つけるためにキーのリストを反復しなければならないからです。</li>
 <li>第二の不都合は、配列が各キーと各値への参照を無期限に維持することを保証しているため、メモリリークが発生することです。これらの参照は、オブジェクトへの他の参照がない場合でも、キーがガベージコレクションされるのを防ぎます。これにより、対応する値がガベージコレクションされるのを防ぐことにもなります。</li>
</ol>

<p>これに対して、ネイティブの <code>WeakMap</code> では、キーとなるオブジェクトに対しては"弱い"参照が保持されます。これにより、キーとなったオブジェクトへの参照が他に存在しない場合に、そのオブジェクトはガベージコレクションの対象に含まれるようになります。ネイティブの WeakMap はキーとそのキーに関する情報をマッピングする場合に、キーがガベージコレクションされていないときにだけ意味があるため特に有用な構造です。</p>

<p><strong>弱い参照を用いるため、<code>WeakMap</code> のキーは列挙できません。</strong> キーの一覧を取得するメソッドは存在しません。もし、可能であれば、キーの一覧はガベージコレクションに依存することになり、非決定性が生まれます。キーの一覧が必要な場合は、{{jsxref("Map")}}を使うことになります。</p>

<h2 id="Constructor" name="Constructor">コンストラクター</h2>

<dl>
 <dt>{{jsxref("WeakMap/WeakMap", "WeakMap()")}}</dt>
 <dd>新しい <code>WeakMap</code> オブジェクトを生成します。</dd>
</dl>

<h2 id="Instance_methods" name="Instance_methods">インスタンスメソッド</h2>

<dl>
 <dt>{{jsxref("WeakMap.delete", "WeakMap.prototype.delete(<var>key</var>)")}}</dt>
 <dd><code><var>key</var></code> に関連した値を削除します。その後 <code>WeakMap.prototype.has(<var>key</var>)</code> は <code>false</code> を返します。</dd>
 <dt>{{jsxref("WeakMap.get", "WeakMap.prototype.get(<var>key</var>)")}}</dt>
 <dd><code><var>key</var></code> に関連した値を返します。見つからない場合、<code>undefined</code> を返します。</dd>
 <dt>{{jsxref("WeakMap.has", "WeakMap.prototype.has(<var>key</var>)")}}</dt>
 <dd><code>WeakMap</code> オブジェクト内に <code><var>key</var></code> に関連した値があるかどうか示す Boolean を返します。</dd>
 <dt>{{jsxref("WeakMap.set", "WeakMap.prototype.set(<var>key</var>, <var>value</var>)")}}</dt>
 <dd><code>WeakMap</code> オブジェクト内に <code><var>key</var></code> に対する値を設定し、<code>WeakMap</code> オブジェクトを返します。</dd>
</dl>

<h2 id="Example" name="Example">例</h2>

<h3 id="Using_WeakMap" name="Using_WeakMap">WeakMap の使用</h3>

<pre class="brush: js notranslate">const wm1 = new WeakMap(),
      wm2 = new WeakMap(),
      wm3 = new WeakMap();
const o1 = {},
      o2 = function() {},
      o3 = window;

wm1.set(o1, 37);
wm1.set(o2, 'azerty');
wm2.set(o1, o2); // 値は（オブジェクトまたは関数を含む）何であってもかまいません
wm2.set(o3, undefined);
wm2.set(wm1, wm2); // キーも値もどんなオブジェクトでもかまいません。 WeakMap であってもよいのです！

wm1.get(o2); // "azerty"
wm2.get(o2); // wm2 には o2 に関連付けられた値が無い為、undefined が返ってきます
wm2.get(o3); // 値が undefined と関連付けられている為、undefined が返ってきます

wm1.has(o2); // true
wm2.has(o2); // false
wm2.has(o3); // true (値が関連付けられているならば、たとえ値が 'undefined' であっても true となります)

wm3.set(o1, 37);
wm3.get(o1); // 37

wm1.has(o1); // true
wm1.delete(o1);
wm1.has(o1); // false
</pre>

<h3 id="Implementing_a_WeakMap-like_class_with_a_.clear_method" name="Implementing_a_WeakMap-like_class_with_a_.clear_method">.clear() メソッドを持つ WeakMap 風のクラスの実装</h3>

<pre class="brush: js notranslate">class ClearableWeakMap {
  constructor(init) {
    this._wm = new WeakMap(init);
  }
  clear() {
    this._wm = new WeakMap();
  }
  delete(k) {
    return this._wm.delete(k);
  }
  get(k) {
    return this._wm.get(k);
  }
  has(k) {
    return this._wm.has(k);
  }
  set(k, v) {
    this._wm.set(k, v);
    return this;
  }
}
</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-weakmap-objects', 'WeakMap')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.WeakMap")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Guide/Keyed_collections#WeakMap_object">JavaScript ガイド内の <code>WeakMap</code></a></li>
 <li><a href="http://fitzgeraldnick.com/weblog/53/">Hiding Implementation Details with ECMAScript 6 WeakMaps</a></li>
 <li>{{jsxref("Map")}}</li>
 <li>{{jsxref("Set")}}</li>
 <li>{{jsxref("WeakSet")}}</li>
</ul>
