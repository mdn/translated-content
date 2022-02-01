---
title: offset-path
slug: Web/CSS/offset-path
tags:
  - CSS
  - CSS Motion Path
  - CSS モーションパス
  - Experimental
  - Motion Path
  - Reference
  - motion-path
  - offset-path
  - 'recipe:css-property'
  - モーションパス
translation_of: Web/CSS/offset-path
---
<div>{{cssref}}</div>

<p><strong><code>offset-path</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> のプロパティで、要素がたどる移動経路と、親コンテナーまたは SVG 座標系の中での要素の配置を指定します。</p>

<div>{{EmbedInteractiveExample("pages/css/offset-path.html")}}</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush:css notranslate">/* 既定値 */
offset-path: none;

/* 関数値 */
offset-path: ray(45deg closest-side contain);

/* URL */
offset-path: url(#path);

/* 図形 */
offset-path: circle(50% at 25% 25%);
offset-path: inset(50% 50% 50% 50%);
offset-path: polygon(30% 0%, 70% 0%, 100% 50%, 30% 100%, 0% 70%, 0% 30%);
offset-path: path('M 0,200 Q 200,200 260,80 Q 290,20 400,0 Q 300,100 400,200');

/* 位置ボックス */
offset-path: margin-box;
offset-path: stroke-box;

/* グローバル値 */
offset-path: inherit;
offset-path: initial;
offset-path: unset;
</pre>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code>ray()</code></dt>
 <dd>最大3つの値を取り、ボックスの位置から始まり、指定された角度で定義された方向に進む線分であるパスを定義します。定義は角度で、 CSS のグラデーションの角度と同様に、 <code>0deg</code> を上にして正の角度を時計回り方向に増加させます。続く寸法の値は CSS の半径方向のグラデーションの寸法の値に似ており、 <code>closest-side</code> から <code>farthest-corner</code> まで、そしてキーワード <code>contain</code> です。</dd>
 <dt><code>url()</code></dt>
 <dd>SVG 図形の ID の参照です。 -- <code>circle</code>, <code>ellipse</code>, <code>line</code>, <code>path</code>, <code>polygon</code>, <code>polyline</code>, <code>rect</code> -- のいずれかで、図形の形状をパスとして使用します。</dd>
 <dt><code>&lt;basic-shape&gt;</code></dt>
 <dd><a href="/ja/docs/Web/CSS/CSS_Shapes/Basic_Shapes">CSS シェイプ</a>、たとえば <code>circle()</code>, <code>ellipse()</code>, <code>inset()</code>, <code>polygon()</code>, <code>path()</code> を指定します。</dd>
 <dd>
 <dl>
  <dt><code>path()</code></dt>
  <dd>SVG 座標の構文で定義されたパス文字列です。</dd>
 </dl>
 </dd>
 <dt><code>none</code></dt>
 <dd>モーションパスを全く定義しません。</dd>
</dl>

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

{{csssyntax}}

<h2 id="Description" name="Description">解説</h2>

<p>このプロパティは、移動する要素がたどることができる経路を定義します。オフセットの経路は1つまたは複数のサブ経路で指定された経路か、スタイル付けされていない基本図形の形状で指定します。オフセット経路上の要素の正確な位置は、 {{cssxref("offset-distance")}} プロパティで決定されます。それぞれの図形または経路は、初期位置を {{cssxref("offset-distance")}} の <code>0</code> の計算値で定義し、オブジェクトの回転方向を指定する初期方向を初期位置にします。</p>

<p><strong>注</strong>: 仕様書の初期の版では、このプロパティを <code>motion-path</code> と呼んでいました。It was changed to <code>offset-path</code> because the property describe static positions, not motion.</p>

<h2 id="Examples" name="Examples">例</h2>

<p>以下の例は <a href="http://codepen.io/ericwilligers/pen/bwVkNa">CodePen</a> の例から抜粋しています。対応ブラウザーではライブ編集が可能です。</p>

<p>CSS コードサンプルの <code>offset-path</code> プロパティは、 SVG の <code>&lt;path&gt;</code> 要素と同じモーションパスを定義しています。このパスは、 SVG コードのレンダリングを見てもわかるように、煙突のある家の線画になっています。</p>

<h3 id="CSS" name="CSS">CSS</h3>

<pre class="brush: css notranslate">.scissorHalf {
  offset-path: path('M900,190  L993,245 V201  A11,11 0 0,1 1004,190  H1075  A11,11 0 0,1 1086,201  V300  L1294,423 H1216  A11,11 0 0,0 1205,434  V789  A11,11 0 0,1 1194,800  H606  A11,11 0 0,1 595,789  V434  A11,11 0 0,0 584,423  H506 L900,190');
  animation: followpath 4s linear infinite;
}

@keyframes followpath {
   to {
     motion-offset: 100%;
     offset-distance: 100%;
   }
}</pre>

<h3 id="SVG" name="SVG">SVG</h3>

<p>ハサミの上半分と下半分は、 <code>offset-path</code> で定義されたモーションパスの始点に沿って配置されていなければ、キャンバスの左上に表示されます。</p>

<pre class="brush: html notranslate">&lt;svg xmlns="http://www.w3.org/2000/svg"
     width="700"
     height="450"
     viewBox="350 0 1400 900"&gt;
  &lt;title&gt;House and Scissors&lt;/title&gt;
  &lt;rect x="595"
        y="423"
        width="610"
        height="377"
        fill="blue" /&gt;
  &lt;polygon points="506,423 900,190 1294,423"
           fill="yellow" /&gt;
  &lt;polygon points="993,245 993,190 1086,190 1086,300"
           fill="red" /&gt;
  &lt;path id="house" d="M900,190 L993,245 V201 A11,11 0 0,1 1004,190 H1075 A11,11 0 0,1 1086,201 V300 L1294,423 H1216 A11,11 0 0,0 1205,434 V789 A11,11 0 0,1 1194,800 H606 A11,11 0 0,1 595,789 V434 A11,11 0 0,0 584,423 H506 L900,190"
        fill="none"
        stroke="black"
        stroke-width="13"
        stroke-linejoin="round"
        stroke-linecap="round" /&gt;
  &lt;path id="firstScissorHalf" class="scissorHalf"
        d="M30,0 H-10 A10,10 0 0,0 -20,10 A20,20 0 1,1 -40,-10 H20 A10,10 0 0,1 30,0 M-40,20 A10,10 1 0,0 -40,0 A10,10 1 0,0 -40,20 M0,0"
        transform="translate(0,0)"
        fill="green"
        stroke="black"
        stroke-width="5"
        stroke-linejoin="round"
        stroke-linecap="round"
        fill-rule="evenodd" /&gt;
  &lt;path id="secondScissorHalf" class="scissorHalf"
        d="M30,0 H-10 A10,10 0 0,1 -20,-10 A20,20 0 1,0 -40,10 H20 A10,10 0 0,0 30,0 M-40,-20 A10,10 1 0,0 -40,0 A10,10 1 0,0 -40,-20 M0,0"
        transform="translate(0,0)"
        fill="forestgreen"
        stroke="black"
        stroke-width="5"
        stroke-linejoin="round"
        stroke-linecap="round"
        fill-rule="evenodd" /&gt;
&lt;/svg&gt;</pre>

<h3 id="Live_Result" name="Live_Result">ライブ結果</h3>

<p>{{EmbedLiveSample('Examples', '100%', '450')}}</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th>仕様書</th>
   <th>状態</th>
   <th>備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('Motion Path Level 1', '#offset-path-property', 'offset-path')}}</td>
   <td>{{Spec2('Motion Path Level 1')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.properties.offset-path")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{cssxref("offset")}}</li>
 <li>{{cssxref("offset-distance")}}</li>
 <li>{{cssxref("offset-rotation")}}</li>
 <li><a href="/ja/docs/Web/SVG/Tutorial/Paths">SVG &lt;path&gt; </a></li>
</ul>

<p>その他のデモ:</p>

<ul>
 <li><a href="https://codepen.io/team/css-tricks/pen/WZdKMq">Examples of the various values</a></li>
 <li><a href="http://codepen.io/ericwilligers/pen/jrbJPp">Triangle</a></li>
 <li><a href="http://codepen.io/ericwilligers/pen/bwVkNa">Scissors</a></li>
 <li><a href="http://jsfiddle.net/ericwilligers/r1snqdan/">Eyes</a></li>
</ul>
