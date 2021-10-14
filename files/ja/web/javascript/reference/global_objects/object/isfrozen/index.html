---
title: Object.isFrozen()
slug: Web/JavaScript/Reference/Global_Objects/Object/isFrozen
tags:
  - ECMAScript 5
  - JavaScript
  - Method
  - Object
translation_of: Web/JavaScript/Reference/Global_Objects/Object/isFrozen
---
<div>{{JSRef}}</div>

<p><strong><code>Object.isFrozen()</code></strong> はオブジェクトが{{jsxref("Object.freeze()", "凍結されている", "", 1)}}かどうかを判定します。</p>

<div>{{EmbedInteractiveExample("pages/js/object-isfrozen.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">Object.isFrozen(<var>obj</var>)</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>obj</var></code></dt>
 <dd>確認したいオブジェクトです。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>与えられたオブジェクトが凍結されているかどうかを示す {{jsxref("Boolean")}}。</p>

<h2 id="Description" name="Description">解説</h2>

<p>オブジェクトが{{jsxref("Object.isExtensible()", "拡張可能", "", 1)}}ではなく、すべてのプロパティは設定変更不可であり、そしてすべてのデータプロパティ (これはゲッターやセッターコンポーネントを持つアクセサプロパティではないものを指します) が書き込み不可である場合に、凍結されているとなります。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Object.isFrozen_の使用">Object.isFrozen の使用</h3>

<pre class="brush: js notranslate">// 新しいオブジェクトは拡張可能であるので、凍結されていません
Object.isFrozen({}); // === false

// 拡張可能ではない空のオブジェクトは、他に何もしなくても
// 凍結されています
var vacuouslyFrozen = Object.preventExtensions({});
Object.isFrozen(vacuouslyFrozen); // === true

// プロパティをひとつ持つ新しいオブジェクトも拡張可能であり、
// それゆえ凍結されていません
var oneProp = { p: 42 };
Object.isFrozen(oneProp); // === false

// オブジェクトを拡張不可にしても、それは凍結されません
// なぜなら、まだプロパティが設定変更可能
// (かつ書き込み可能) であるからです
Object.preventExtensions(oneProp);
Object.isFrozen(oneProp); // === false

// ...しかしプロパティを削除すると、そのオブジェクトは
// 他に何もしなくても凍結されます
delete oneProp.p;
Object.isFrozen(oneProp); // === true

// 書き込み不可であるが設定変更可能なプロパティを持つ、
// 拡張不可のオブジェクトは、凍結されていません
var nonWritable = { e: 'plep' };
Object.preventExtensions(nonWritable);
Object.defineProperty(nonWritable, 'e', {
  writable: false
}); // 書き込み不可にします
Object.isFrozen(nonWritable); // === false

// プロパティを設定変更不可にすると、
// オブジェクトは凍結されます
Object.defineProperty(nonWritable, 'e', {
  configurable: false
}); // 設定変更不可にします
Object.isFrozen(nonWritable); // === true

// 設定変更不可であるが書き込み可能なプロパティを持つ、
// 拡張不可のオブジェクトは、やはり凍結されていません
var nonConfigurable = { release: 'the kraken!' };
Object.preventExtensions(nonConfigurable);
Object.defineProperty(nonConfigurable, 'release', {
  configurable: false
});
Object.isFrozen(nonConfigurable); // === false

// プロパティを書き込み不可にすると、オブジェクトは
// 凍結されます
Object.defineProperty(nonConfigurable, 'release', {
  writable: false
});
Object.isFrozen(nonConfigurable); // === true

// 設定変更可能なアクセサープロパティを持つ拡張不可の
// オブジェクトは、凍結されていません
var accessor = { get food() { return 'yum'; } };
Object.preventExtensions(accessor);
Object.isFrozen(accessor); // === false

// ...しかしプロパティを設定変更不可にすると、
// オブジェクトは凍結されます
Object.defineProperty(accessor, 'food', {
  configurable: false
});
Object.isFrozen(accessor); // === true

// なお、オブジェクトを凍結するもっとも簡単な方法は、
// Object.freeze を呼び出すことです
var frozen = { 1: 81 };
Object.isFrozen(frozen); // === false
Object.freeze(frozen);
Object.isFrozen(frozen); // === true

// 定義によると、凍結されたオブジェクトは拡張不可です
Object.isExtensible(frozen); // === false

// また、凍結されたオブジェクトは封印されています
Object.isSealed(frozen); // === true
</pre>

<h3 id="Non-object_coercion" name="Non-object_coercion">オブジェクト以外の型強制</h3>

<p>ES5 では、このメソッドの引数がオブジェクトではない場合 (プリミティブの場合)、 {{jsxref("TypeError")}} が発生します。 ES2015 以降では、オブジェクトでない引数は、それが凍結された通常のオブジェクトであるかのように扱われ、単に <code>true</code> を返します。</p>

<pre class="brush: js notranslate">Object.isFrozen(1);
// TypeError: 1 is not an object (ES5 code)

Object.isFrozen(1);
// true                          (ES2015 code)
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
   <td>{{SpecName('ESDraft', '#sec-object.isfrozen', 'Object.isFrozen')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.Object.isFrozen")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Object.freeze()")}}</li>
 <li>{{jsxref("Object.preventExtensions()")}}</li>
 <li>{{jsxref("Object.isExtensible()")}}</li>
 <li>{{jsxref("Object.seal()")}}</li>
 <li>{{jsxref("Object.isSealed()")}}</li>
</ul>
