---
title: <frame>
slug: Web/HTML/Element/frame
tags:
  - Deprecated
  - Element
  - HTML
  - Reference
  - Web
translation_of: Web/HTML/Element/frame
---
<div>{{HTMLRef}}{{Deprecated_header}}</div>

<p><code>&lt;frame&gt;</code> は、別の HTML 文書を表示できる個々の領域を定義する HTML 要素です。 frame 要素は {{HTMLElement("frameset")}} の内部で使用します。</p>

<p>パフォーマンスの問題やスクリーンリーダーを使用するユーザへのアクセシビリティの欠如といった欠点があるため、 <code>&lt;frame&gt;</code> 要素の使用は推奨されません。 <code>&lt;frame&gt;</code> 要素に代わり、 {{HTMLElement("iframe")}} を推奨します。</p>

<h2 id="Attributes" name="Attributes">属性</h2>

<p>他のすべての HTML 要素と同様に、この要素は<a href="/ja/docs/HTML/Global_attributes">グローバル属性</a>を持ちます。</p>

<dl>
 <dt>{{htmlattrdef("src")}}</dt>
 <dd>この属性は、フレームに表示する文書を指定します。</dd>
 <dt>{{htmlattrdef("name")}}</dt>
 <dd>この属性は、フレームに名前をつけます。名前がなければ、すべてのリンクは自身が存在するフレーム – 直近の親フレームで開きます。詳しくは {{htmlattrxref("target","a")}} 属性を参照してください。</dd>
 <dt>{{htmlattrdef("noresize")}}</dt>
 <dd>この属性は、ユーザによるフレームのリサイズを抑止します。</dd>
 <dt>{{htmlattrdef("scrolling")}}</dt>
 <dd>この属性は、スクロールバーの存在の有無を定義します。この属性を指定しない場合、ブラウザは必要なときにスクロールバーを表示します。設定できる値は二つです。 "yes" は不要なときでもスクロールバーを表示します。 "no" は必要なとき<em>でも</em>スクロールバーを表示しません。</dd>
 <dt>{{htmlattrdef("marginheight")}}</dt>
 <dd>この属性は、フレーム間のマージンの高さを定義します。</dd>
 <dt>{{htmlattrdef("marginwidth")}}</dt>
 <dd>この属性は、フレーム間のマージンの幅を定義します。</dd>
 <dt>{{htmlattrdef("frameborder")}}</dt>
 <dd>この属性で、フレームにボーダーを設定できます。</dd>
</dl>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: html">&lt;frameset cols="50%,50%"&gt;
  &lt;frame src="https://developer.mozilla.org/en/HTML/Element/iframe" /&gt;
  &lt;frame src="https://developer.mozilla.org/en/HTML/Element/frame" /&gt;
&lt;/frameset&gt;
</pre>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("html.elements.frame")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTMLElement("frameset")}}</li>
 <li>{{HTMLElement("iframe")}}</li>
</ul>
