---
title: CSS properties and values API の使用
slug: Web/API/CSS_Properties_and_Values_API/guide
tags:
  - API
  - CSS
  - CSS Properties and Values
  - Guide
  - Houdini
  - JavaScript
  - Learn
translation_of: Web/API/CSS_Properties_and_Values_API/guide
---
<p>{{SeeCompatTable}} <strong>CSS Properties and Values API</strong>（<a href="/ja/docs/Web/Houdini">CSS Houdini</a> API の傘の一部）は、<span class="seoSummary">{{cssxref('--*', 'CSS カスタムプロパティ')}}の登録を可能にし、プロパティ型のチェック、デフォルト値、および値を継承するまたは継承しないプロパティを許可します。</span></p>

<h2 id="Registering_a_custom_property" name="Registering_a_custom_property">カスタムプロパティの登録</h2>

<p>カスタムプロパティを登録すると、カスタムプロパティの振る舞い（許可される型、カスタムプロパティがその値を継承するかどうか、カスタムプロパティのデフォルト値は何か）をブラウザーに指示できます。 プロパティを登録するには、JavaScript と CSS の2つの方法があります。</p>

<div class="blockIndicator note">
<p><strong>注</strong>: JavaScript オプションには使える実装があります。 CSS オプションにはありません。</p>
</div>

<h3 id="CSS.registerProperty" name="CSS.registerProperty">CSS.registerProperty</h3>

<p>次の例では、{{domxref('CSS.registerProperty')}} を使用して、{{cssxref('--*', 'CSS カスタムプロパティ')}} <code>--my-prop</code> を色として登録し、デフォルト値を指定し、その値を継承しないようにします。</p>

<pre class="brush: js notranslate">window.CSS.registerProperty({
  name: '--my-prop',
  syntax: '&lt;color&gt;',
  inherits: false,
  initialValue: '#c0ffee',
});
</pre>

<h3 id="property" name="property">@property</h3>

<p>CSS で同じ登録を行うことができます。 次の例では、{{cssxref('@property')}} を使用して、{{cssxref('--*', 'CSS カスタムプロパティ')}} <code>--my-prop</code> を色として登録し、デフォルト値を指定し、その値を継承しないようにします。</p>

<pre class="brush: css notranslate">@property --my-prop {
  syntax: '&lt;color&gt;';
  inherits: false;
  initial-value: #c0ffee;
}</pre>

<h2 id="Using_registered_custom_properties" name="Using_registered_custom_properties">登録したカスタムプロパティの使用</h2>

<p>プロパティを登録することの利点の1つは、遷移（transition）などを通してカスタムプロパティを処理する方法をブラウザーが認識できるようになったことです！ プロパティが登録されていない場合、ブラウザーはその処理方法を知らず、任意の値を使用できるため、アニメーション化できないものと見なされます。 しかし、プロパティに構文（syntax）が登録されている場合、ブラウザーは、それをアニメーション化できるなど、その構文を中心に最適化できます！</p>

<p>この例では、カスタムプロパティ <code>--registered</code> を構文 <code>&lt;color&gt;</code> を使用して登録し、線形グラデーションで使用しています。 そのプロパティは、ホバーまたはフォーカスで別の色に遷移します。 登録されたプロパティでは遷移が機能しますが、未登録のプロパティでは機能しないことに注意してください！</p>

<pre class="brush: css notranslate">.registered {
  --registered: #c0ffee;
  background-image: linear-gradient(to right, #fff, var(--registered));
  transition: --registered 1s ease-in-out;
}

.registered:hover,
.registered:focus {
  --registered: #b4d455;
}

.unregistered {
  --unregistered: #c0ffee;
  background-image: linear-gradient(to right, #fff, var(--unregistered));
  transition: --unregistered 1s ease-in-out;
}

.unregistered:hover,
.unregistered:focus {
  --unregistered: #b4d455;
}</pre>

<div class="hidden" id="registered">
<pre class="brush: html notranslate">&lt;button class="registered"&gt;Background Registered&lt;/button&gt;
&lt;button class="unregistered"&gt;Background Not Registered&lt;/button&gt;
</pre>

<pre class="brush: css notranslate">.registered {
  --registered: #c0ffee;
  background-image: linear-gradient(to right, #fff, var(--registered));
  transition: --registered 1s ease-in-out;
}

.registered:hover,
.registered:focus {
  --registered: #b4d455;
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
  height: 40vh;
  display: block;
  width: 100%;
  font-size: 3vw;
}

</pre>

<pre class="brush: js notranslate">window.CSS.registerProperty({
  name: '--registered',
  syntax: '&lt;color&gt;',
  inherits: false,
  initialValue: 'red',
});</pre>
</div>

<p>{{EmbedLiveSample("registered", 320, 320)}}</p>

<p>機能的には正確ではありませんが、上記の例の未登録のプロパティと登録されたプロパティの違いを考える良い方法は、{{cssxref('height')}} をアニメーション化する際の {{cssxref('custom-ident')}} と数値の違いです。 ブラウザーは、計算されるまで <code>auto</code> の値がわからないため、<code>auto</code> から数値に遷移またはアニメーション化することはできません。 未登録のプロパティを使用すると、ブラウザーは計算されるまで値が<em>何であるか</em>を同様に認識しません。 そのため、ある値から別の値への遷移を設定できません。 ただし、登録すると、ブラウザーにどのような種類の値を期待するかを伝えており、それを知っているため、遷移を適切に設定できます。</p>

<h2 id="Gotchas" name="Gotchas">落とし穴</h2>

<p>プロパティの登録には2つの落とし穴があります。 1つ目は、プロパティを一度登録すると更新する方法がなく、JavaScript で再登録しようとすると、プロパティが既に定義されていることを示すエラーがスローされることです。</p>

<p>2つ目は、標準のプロパティとは異なり、登録されたプロパティは解析時に検証されません。 むしろ、計算時に検証されます。 つまり、要素のプロパティを検査するときに無効な値が無効として表示されないことと、有効なプロパティの後に無効なプロパティを含めることは、有効なプロパティにフォールバックしないことを意味します。 ただし、無効なプロパティは、登録されているデフォルトにフォールバックします。</p>
