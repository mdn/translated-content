---
title: CSS.registerProperty()
slug: Web/API/CSS/RegisterProperty
tags:
  - CSS
  - Houdini
  - Reference
translation_of: Web/API/CSS/RegisterProperty
---
<div>{{SeeCompatTable}}</div>

<p><strong><code>CSS.registerProperty()</code></strong> メソッドは{{cssxref('--*', 'カスタムプロパティ')}}を登録し、プロパティ型のチェック、デフォルト値、およびそれらの値を継承するまたは継承しないプロパティを許可します。</p>

<p>カスタムプロパティを登録すると、カスタムプロパティの振る舞い（許される型は何か、カスタムプロパティがその値を継承するかどうか、カスタムプロパティのデフォルト値は何か）をブラウザーに指示できます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">CSS.registerProperty(<em>PropertyDefinition</em>);</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<p>次のメンバーを含むことができる <code>PropertyDefinition</code> ディクショナリオブジェクトです。</p>

<dl>
 <dt><code>name</code></dt>
 <dd>定義しているプロパティの名前を示す <code><a href="/ja/docs/Web/API/DOMString">DOMString</a></code>。</dd>
 <dt><code>syntax</code> {{optional_inline}}</dt>
 <dd>定義されたプロパティの期待される構文を表す <code><a href="/ja/docs/Web/API/DOMString">DOMString</a></code>。 デフォルトは <code>"*"</code> です。</dd>
 <dt><code>inherits</code></dt>
 <dd>定義されたプロパティを継承する必要があるか（<code>true</code>）、否か（<code>false</code>）を定義するブール値。 デフォルトは <code>false</code> です。</dd>
 <dt><code>initialValue</code> {{optional_inline}}</dt>
 <dd>定義されたプロパティの初期値を表す <code><a href="/ja/docs/Web/API/DOMString">DOMString</a></code>。</dd>
</dl>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p><code>undefined</code>。</p>

<dl>
</dl>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<dl>
 <dt><code>InvalidModificationError</code></dt>
 <dd>指定された <code>name</code> はすでに登録されています。</dd>
 <dt><code>SyntaxError</code></dt>
 <dd>指定された <code>name</code> は（<code>--foo</code> のように、2つのダッシュで始まる）有効なカスタムプロパティ名ではありません。</dd>
 <dt><code>TypeError</code></dt>
 <dd>必要なディクショナリメンバーの <code>name</code> または <code>inherits</code>、あるいはその両方が指定されていません。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<p>次の例では、<code>registerProperty()</code> を使用して{{cssxref('--*', 'カスタムプロパティ')}} <code>--my-color</code> を色として登録し、デフォルト値を指定して、その値を継承しません。</p>

<pre class="brush: js notranslate">window.CSS.registerProperty({
  name: '--my-color',
  syntax: '&lt;color&gt;',
  inherits: false,
  initialValue: '#c0ffee',
});
</pre>

<p>この例では、カスタムプロパティ <code>--my-color</code> が構文 <code>&lt;color&gt;</code> を使用して登録されています。 これで、このプロパティを使用して、ホバーまたはフォーカスでグラデーションを遷移（transition）できます。 登録されたプロパティでは遷移が機能しますが、未登録のプロパティでは機能しないことに注意してください！</p>

<pre class="brush: css notranslate">.registered {
  --my-color: #c0ffee;
  background-image: linear-gradient(to right, #fff, var(--my-color));
  transition: --my-color 1s ease-in-out;
}

.registered:hover,
.registered:focus {
  --my-color: #b4d455;
}

.unregistered {
  --unregistered: #c0ffee;
  background-image: linear-gradient(to right, #fff, var(--unregistered));
  transition: --unregistered 1s ease-in-out;
}

.unregistered:hover,
.unregistered:focus {
  --unregistered: #b4d455;
}
button {
  font-size: 3vw;
}</pre>

<p>これらのスタイルをいくつかのボタンに追加できます。</p>

<pre class="brush: html notranslate">&lt;button class="registered"&gt;Background Registered&lt;/button&gt;
&lt;button class="unregistered"&gt;Background Not Registered&lt;/button&gt;
</pre>

<p>{{EmbedLiveSample("Examples", 320, 320)}}</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('CSS Properties and Values API', '#the-registerproperty-function', 'The registerProperty() function')}}</td>
   <td>{{Spec2('CSS Properties and Values API')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.CSS.registerProperty", 1)}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/CSS_Properties_and_Values_API/guide">CSS properties and values API の使用</a></li>
 <li>{{DOMxRef("CSS")}}</li>
 <li>{{DOMxRef("CSS.supports()")}}</li>
 <li>{{DOMxRef("CSS.escape()")}}</li>
 <li>{{DOMxRef("CSS.factory_functions", 'CSS ファクトリー関数')}}</li>
</ul>

<dl>
</dl>
