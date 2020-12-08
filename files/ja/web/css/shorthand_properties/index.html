---
title: 一括指定プロパティ
slug: Web/CSS/Shorthand_properties
tags:
  - CSS
  - Guide
  - Layout
  - Reference
  - Shorthand Properties
  - properties
  - shorthand
translation_of: Web/CSS/Shorthand_properties
---
<div>{{cssref}}</div>

<p class="summary"><strong><dfn>一括指定プロパティ</dfn></strong> (shorthand property) は、他の幾つかの CSS プロパティを一度に設定できる CSS プロパティです。一括指定プロパティを用いると、もっと簡単に (そして普通はもっと読みやすく) スタイルシートが書け、時間や労力を節約することができます。</p>

<p>CSS 仕様書では、同じ主題に作用する共通のプロパティの定義をグループ化するために、一括指定プロパティを定義しています。例えば、 {{cssxref("background")}} プロパティは {{cssxref("background-color")}}、 {{cssxref("background-image")}}、 {{cssxref("background-repeat")}}、{{cssxref("background-position")}} の値を定義することができる一括指定プロパティです。同様に、フォントに関連したプロパティは一括指定の {{cssxref("font")}} を使用して定義することができ、ボックスの周囲のマージンは一括指定の {{cssxref("margin")}} を使用して定義することができます。</p>

<h2 id="Tricky_edge_cases" name="Tricky_edge_cases">注意するべき場合</h2>

<p>一括指定プロパティはとても便利なものですが、使用するにあたって注意しておかなければならない場合が若干あります。</p>

<ol>
 <li>その一括指定が対応する個別プロパティの内、省略したプロパティ全てに初期値が設定されます。それは当たり前に聞こえますが、以前設定した値を<strong>上書き</strong>することになります。つまり、

  <pre class="brush:css notranslate">background-color: red;
background: url(images/bg.gif) no-repeat left top;
</pre>
  とすると背景色を <code>red</code> に設定するのではなく、2番目のルールが優先されて {{cssxref("background-color")}} の既定値である <code>transparent</code> となります。</li>
 <li>継承 (inherit) は個別プロパティのみで行うことができます。一括指定では欠けている値が初期値に置き換えられるため、省略することで個別のプロパティを継承させることはできません。 <code>inherit</code> キーワードをプロパティに適用することはできますが、全体に対して適用できるのみで、1つ1つに対するキーワードではありません。つまり、いくつか特定の値のみを継承させたい場合は、個別指定 (longhand) プロパティで <code>inherit</code> キーワードを指定するしかありません。</li>
 <li>一括指定プロパティは、置き換えるプロパティの指定順序をなるべく強制しないようにしています。ただしこれは、順序が重要ではないとき、プロパティがそれぞれ異なる型の値を使用する場合はうまく機能しますが、いくつかのプロパティが同じ値を持つことができるときは簡単ではありません。このような場合の扱い方は、いくつかに分類されます。
  <ol>
   <li>ボックスの境界に関するプロパティを扱う一括指定 ({{cssxref("border-style")}}, {{cssxref("margin")}}, {{cssxref("padding")}}) は、それぞれの辺を表すために、一貫して1～4つの値の構文を使用します。
    <table>
     <tbody>
      <tr>
       <td style="width: 79px;"><img alt="border1.png" src="/files/3646/border1.png"></td>
       <td><em>値1つの構文</em>: <code>border-width: 1em</code> — 1つの値ですべての辺を表します</td>
      </tr>
      <tr>
       <td><img alt="border2.png" src="/files/3647/border2.png"></td>
       <td><em>値2つの構文</em>: <code>border-width: 1em 2em</code> — 最初の値は垂直、すなわち上下の辺を、2番目の値は水平、すなわち左右の辺を表します。</td>
      </tr>
      <tr>
       <td><img alt="border3.png" src="/files/3648/border3.png"></td>
       <td><em>値3つの構文</em>: <code>border-width: 1em 2em 3em</code> — 最初の値は上辺、 2番目の値は水平、すなわち左右の辺、3番目の値は下辺を表します。</td>
      </tr>
      <tr>
       <td><img alt="border4.png" src="/files/3649/border4.png"></td>
       <td>
        <p><em>値4つの構文</em>: <code>border-width: 1em 2em 3em 4em</code> — 4つの値がそれぞれ上、右、下、左の辺を表し、これは上を起点に時計回りの順です (頭文字が Top-Right-Bottom-Left で、これは <em>trouble</em> の子音 TRBL の順と一致します) (また、時計の上で針が回転する順番として覚えることもできます。 <code>1em</code> は12時の位置で始まり、3時の位置で <code>2em</code>、それから6時の位置で <code>3em</code>、そして9時の位置で <code>4em</code> です)。</p>
       </td>
      </tr>
     </tbody>
    </table>
   </li>
   <li>同様に、ボックスの角に関する一括指定プロパティ ({{cssxref("border-radius")}} など) は、それぞれの角を表すために一貫して1～4つの値を使用します。
    <table>
     <tbody>
      <tr>
       <td style="width: 69px;"><img alt="corner1.png" src="/files/3650/corner1.png"></td>
       <td><em>値1つの構文</em>: <code>border-radius: 1em</code> — 1つの値がすべての角を表現します</td>
      </tr>
      <tr>
       <td><img alt="corner2.png" src="/files/3651/corner2.png"></td>
       <td><em>値2つの構文</em>: <code>border-radius: 1em 2em</code> — 最初の値は左上と右下の角、2番目の値は右上と左下の角を表します。</td>
      </tr>
      <tr>
       <td><img alt="corner3.png" src="/files/3652/corner3.png"></td>
       <td><em>値3つの構文</em>: <code>border-radius: 1em 2em 3em</code> — 最初の値は左上、2番目の値は右上と左下、3番目の値は右下の角をそれぞれ表します。</td>
      </tr>
      <tr>
       <td><img alt="corner4.png" src="/files/3653/corner4.png"></td>
       <td>
        <p><em>値4つの構文</em>: <code>border-radius: 1em 2em 3em 4em</code> — 4つの値がそれぞれ左上、右上、右下、左下を表し、これは左上を起点に時計回りの順です。</p>
       </td>
      </tr>
     </tbody>
    </table>
   </li>
  </ol>
 </li>
</ol>

<h2 id="Background_Properties" name="Background_Properties">background プロパティ</h2>

<p>以下のプロパティによる背景の指定は...</p>

<pre class="brush:css notranslate">background-color: #000;
background-image: url(images/bg.gif);
background-repeat: no-repeat;
background-position: left top;</pre>

<p>...1つの宣言で一括指定することができます。</p>

<pre class="brush:css notranslate">background: #000 url(images/bg.gif) no-repeat left top;</pre>

<p>(一括指定の形式は、実際は上記の個別指定に加えて、 <code>background-attachment: scroll</code> や、 CSS3 ではいくつかの追加プロパティと等価になります。)</p>

<p>CSS3 のプロパティを含む詳しい情報は、 {{cssxref("background")}} をご覧ください。</p>

<h2 id="Font_Properties" name="Font_Properties">font プロパティ</h2>

<p>以下の宣言は ...</p>

<pre class="brush:css notranslate">font-style: italic;
font-weight: bold;
font-size: .8em;
line-height: 1.2;
font-family: Arial, sans-serif;</pre>

<p>... 以下のように一括指定することができます。</p>

<pre class="brush:css notranslate">font: italic bold .8em/1.2 Arial, sans-serif;</pre>

<p>この一括指定宣言は、実際には上記の個別指定宣言に加えて、 <code>font-variant: normal</code> と <code>font-size-adjust: none</code> (CSS2.0 / CSS3), <code>font-stretch: normal</code> (CSS3) と等価になります。</p>

<h2 id="Border_Properties" name="Border_Properties">border プロパティ</h2>

<p>境界線の幅、色、スタイルについては1つの宣言にまとめることができます。例えば、以下の CSS ...</p>

<pre class="brush:css notranslate">border-width: 1px;
border-style: solid;
border-color: #000;</pre>

<p>... は、以下のように簡略化できます。</p>

<pre class="brush:css notranslate">border: 1px solid #000;</pre>

<h2 id="Margin_and_Padding_Properties" name="Margin_and_Padding_Properties">margin プロパティと padding プロパティ</h2>

<p><code>margin</code> と <code>padding</code> の一括指定も同様に動作します。 <code>margin</code> プロパティでは、1 つ、2 つ、3 つ、または 4 つの値を使用して短縮値を指定することができます。以下の CSS 宣言は ...</p>

<pre class="brush:css notranslate">margin-top: 10px;
margin-right: 5px;
margin-bottom: 10px;
margin-left: 5px;</pre>

<p>... は以下の値4つの一括指定を使用した宣言と同じです。なお、値は上から始まって時計回りに、上、右、下、左の順になります (TRBL、 "trouble" の子音)。</p>

<pre class="brush:css notranslate">margin: 10px 5px 10px 5px;</pre>

<p>マージンの値1つ、2つ、3つ、4つの一括指定宣言は次の通りです。</p>

<ul>
 <li>値が<strong>1つ</strong>指定された場合、<strong>全四辺</strong>に同じマージンが適用される。</li>
 <li>値が<strong>2つ</strong>指定された場合、1つ目のマージンは<strong>上下</strong>、2つ目は<strong>左右</strong>の辺に適用される。</li>
 <li>値が<strong>3つ</strong>指定された場合、1つ目のマージンは<strong>上</strong>、2つ目は<strong>左右</strong>、3つ目は<strong>下</strong>の辺に適用される。</li>
 <li>値が<strong>4つ</strong>指定された場合、マージンはそれぞれ<strong>上</strong>、<strong>右</strong>、<strong>下</strong>、<strong>左</strong>の順 (時計回り) に適用される。</li>
</ul>

<h2 id="The_universal_shorthand_property" name="The_universal_shorthand_property">全体一括指定プロパティ</h2>

<p>CSS は全体の一括指定プロパティとして {{cssxref("all")}} を提供しており、値を文書中のすべてのプロパティに適用させます。これは、プロパティの継承モデルを以下のいずれかに変更するためのものです。</p>

<p>{{page("/ja/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance", "Controlling_inheritance")}}</p>

<p>CSS の継承がどのように動作するかについての詳細については、<a href="/ja/docs/Learn/CSS/Introduction_to_CSS/Cascade_and_inheritance">カスケードと継承</a>または <a href="/ja/docs/Web/CSS/Cascade">CSS カスケード入門</a>をご覧ください。</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{css_key_concepts}}</li>
 <li>一括指定プロパティ: {{cssxref("animation")}}, {{cssxref("background")}}, {{cssxref("border")}}, {{cssxref("border-bottom")}}, {{cssxref("border-color")}}, {{cssxref("border-left")}}, {{cssxref("border-radius")}}, {{cssxref("border-right")}}, {{cssxref("border-style")}}, {{cssxref("border-top")}}, {{cssxref("border-width")}}, {{cssxref("column-rule")}}, {{cssxref("columns")}}, {{cssxref("flex")}}, {{cssxref("flex-flow")}}, {{cssxref("font")}}, {{cssxref("grid")}}, {{cssxref("grid-area")}}, {{cssxref("grid-column")}}, {{cssxref("grid-row")}}, {{cssxref("grid-template")}}, {{cssxref("list-style")}}, {{cssxref("margin")}}, {{cssxref("offset")}}, {{cssxref("outline")}}, {{cssxref("overflow")}}, {{cssxref("padding")}}, {{cssxref("place-content")}}, {{cssxref("place-items")}}, {{cssxref("place-self")}}, {{cssxref("text-decoration")}}, {{cssxref("transition")}}</li>
</ul>
