---
title: window.window
slug: Web/API/Window/window
tags:
  - API
  - Gecko
  - HTML DOM
  - Property
  - Reference
  - Window
  - 要更新
translation_of: Web/API/Window/window
---
<div>{{ApiRef}}</div>

<h2 id="概要">概要</h2>

<p><code>window</code> オブジェクトの <code>window</code> プロパティは、その <code>window</code> オブジェクト自身を指します。故に、以下の表現は同じ <code>window</code> オブジェクトを返します。</p>

<pre class="syntaxbox">window.window
window.window.window
window.window.window.window
  ...
</pre>

<p>Web ページに於いては、<code>window</code> オブジェクトは<em>グローバルオブジェクト</em> でもあります。これは次の事を意味します。</p>

<ol>
 <li>スクリプト中の変数 "global" は、実際には <code>window</code> オブジェクトのプロパティです。

  <pre class="brush:js">var global = {data: 0};

alert(global === window.global); // "true" を表示します。
</pre>
 </li>
 <li>ブラウジングコンテキストに於いて <code>window</code> は最上位オブジェクトである為、 <code>window</code> オブジェクトのメンバへのアクセス時には "<code>window.</code>" 接頭辞を省略する事が可能となっています。
  <pre class="brush:js">// 次の 2 行は同じ動作となります。
window.setTimeout( "window.alert('Hi!')", 50 );
       setTimeout(        "alert('Hi!')", 50 );


// window プロパティが自身を参照しているか確認してみましょう。
alert( window === window.window === window.window.window.window ); // true
</pre>
 </li>
</ol>

<p>そのオブジェクト自身を参照する <code>window</code> プロパティが持っている理由は、おそらくグローバルオブジェクトの参照を容易にする為でしょう。もしこのようになっていない場合、 <code>var window = this;</code> という代入をスクリプトの一番最初に自分で書かなければならないでしょう。</p>

<p>別の理由としては、このプロパティ無しには、例えば、 "{{domxref("window.open", "window.open('http://google.com/')")}}" と書くことができないということが挙げられます。そうでなければ、単に、"open('http://google.com/')" と書かなければならないでしょう。</p>

<p>Yet another reason to use this property is for libraries which wish to offer OOP-versions and non-OOP versions (especially JavaScript modules). If, for example, we refer to "this.window.location.href", a <a href="/ja/docs/Mozilla/JavaScript_code_modules">JavaScript module</a> could define a property called "window" inside of a class it defined (since no global "window" variable exists for it by default) which, could be created, for example, after passing in a window object to the module class' constructor. Thus, "this.window" inside of its functions would refer to that window object. In the non-namespaced version, "this.window" would simply refer back to "window", and also be able to get the document location without trouble. Another advantage is that the objects of such a class (even if the class were defined outside of a module) could change their reference to the window at will, as they would not be able to do if they had hard-coded a reference to "window" (yet the default in the class could still be set as the current window object).</p>

<h2 id="仕様">仕様</h2>
<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', '#dom-window', 'Window.window')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>最新のスナップショット {{SpecName("HTML5.1")}} から変更なし</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5.1', 'browsers.html#dom-window', 'Window.window')}}</td>
   <td>{{Spec2('HTML5.1')}}</td>
   <td>{{SpecName("HTML5 W3C")}} から変更なし</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', 'browsers.html#dom-window', 'Window.window')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td><code>Window.window</code> の定義を含む最初のスナップショット</td>
  </tr>
 </tbody>
</table>
