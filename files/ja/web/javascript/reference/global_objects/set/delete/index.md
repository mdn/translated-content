---
title: Set.prototype.delete()
slug: Web/JavaScript/Reference/Global_Objects/Set/delete
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - リファレンス
  - set
translation_of: Web/JavaScript/Reference/Global_Objects/Set/delete
---
{{JSRef}}

**`delete()`** メソッドは、`Set` オブジェクトから指定された要素を取り除きます。

{{EmbedInteractiveExample("pages/js/set-prototype-delete.html")}}

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>mySet</var>.delete(<var>value</var>);</pre>

<h3 id="Syntax" name="Syntax">引数</h3>

<dl>
 <dt>`<var>value</var>`</dt>
 <dd>`<var>mySet</var>` から取り除く要素の値です。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

`<var>mySet</var>` から `<var>value</var>` が正常に削除されたら `true` を返します。さもなければ、`false` を返します。

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_the_delete_method" name="Using_the_delete_method">delete() メソッドの使用</h3>

<pre class="brush: js notranslate">const mySet = new Set();
mySet.add('foo');

mySet.delete('bar'); // 削除するべき要素が見つからなければ false を返す
mySet.delete('foo'); // 正常に要素を削除出来れば true を返す

mySet.has('foo');    // 存在しない要素を確認すると false を返す
</pre>

Set から Objectを削除する方法を以下で確認してみましょう。

<pre class="brush: js notranslate">const setObj = new Set(); // 新しいセットを作成

setObj.add({x: 10, y: 20}); // セットにオブジェクトを追加

setObj.add({x: 20, y: 30}); // セットにオブジェクトを追加

// `x &gt; 10` のポイントを削除
setObj.forEach(function(point){
  if(point.x &gt; 10){
    setObj.delete(point)
  }
})
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
   <td>{{SpecName('ESDraft', '#sec-set.prototype.delete', 'Set.prototype.delete')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

{{Compat("javascript.builtins.Set.delete")}}

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Set")}}</li>
 <li>{{jsxref("Set.prototype.clear()")}}</li>
</ul>
