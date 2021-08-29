---
title: Patterns
slug: Web/SVG/Tutorial/Patterns
tags:
  - SVG
  - 'SVG:Tutorial'
translation_of: Web/SVG/Tutorial/Patterns
---
<p>{{ PreviousNext("SVG/Tutorial/Gradients", "SVG/Tutorial/Texts") }}</p>

<p>私見では、パターンは SVG で用いる中でわかりにくい塗りつぶし方のひとつです。とはいえとても強力であるので、パターンには説明および少なくとも基礎的な部分は把握するだけの価値があります。グラデーションと同様に、<a href="/ja/SVG/Element/pattern"><code>&lt;pattern&gt;</code></a> 要素は SVG ファイルの <code>&lt;defs&gt;</code> セクションに置かなければなりません。</p>

<p><img alt="" class="internal" src="/@api/deki/files/350/=SVG_Pattern_Example.png" style="float: right;"></p>

<pre>&lt;?xml version="1.0" standalone="no"?&gt;
&lt;svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" version="1.1"&gt;
  &lt;defs&gt;
    &lt;linearGradient id="Gradient1"&gt;
      &lt;stop offset="5%" stop-color="white"/&gt;
      &lt;stop offset="95%" stop-color="blue"/&gt;
    &lt;/linearGradient&gt;
    &lt;linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1"&gt;
      &lt;stop offset="5%" stop-color="red"/&gt;
      &lt;stop offset="95%" stop-color="orange"/&gt;
    &lt;/linearGradient&gt;

    &lt;pattern id="Pattern" x="0" y="0" width=".25" height=".25"&gt;
      &lt;rect x="0" y="0" width="50" height="50" fill="skyblue"/&gt;
      &lt;rect x="0" y="0" width="25" height="25" fill="url(#Gradient2)"/&gt;
      &lt;circle cx="25" cy="25" r="20" fill="url(#Gradient1)" fill-opacity="0.5"/&gt;
    &lt;/pattern&gt;
  &lt;/defs&gt;

  &lt;rect fill="url(#Pattern)" stroke="black" x="0" y="0" width="200" height="200"/&gt;
&lt;/svg&gt;
</pre>

<p>pattern 要素の内部には先に入れた他の基本図形を含めることができ、それらの図形は前に学習したスタイルを用いてグラデーションや不透明度などの装飾を設定することができます。ここではパターンの内部に 2 つの長方形 (これらは重なっており、片方はもう片方の 2 倍のサイズでパターン全体を埋めています) と 1 つの円を描画しています。</p>

<p>パターンについてわかりにくいことは、単位系の定義とパターンのサイズです。前出の例ではパターンを繰り返し始めるまでどれくらいの距離をおくべきかを示すために、pattern 要素で <code>width</code> および <code>height</code> 属性を定義しました。また、描画内のどこかへパターンの長方形の開始点をずらしたい場合は、 <code>x</code> および <code>y</code> 属性を利用できます。それら属性をここで用いた理由は、後ほど説明します。</p>

<p>以前 <code>gradientUnits</code> 属性を用いたように、パターンでも同様に <code>width</code> などの属性で用いる単位を指定する、<code>patternUnits</code> 属性があります。前出の例のように既定値は "objectBoundingBox" であり、1 という値はパターンを適用するオブジェクトの幅や高さに調整されます。今回の例ではパターンを水平および垂直方向に 4 回繰り返したいので、height および width は 0.25 に設定します。つまりパターンの幅および高さは、ボックス全体のサイズの 0.25 倍になります。</p>

<p>グラデーションとは異なり、パターンには第 2 の属性 <code>patternContentUnits</code> があり、これは pattern 要素内の基本図形自身が用いる単位系を示します。この属性の既定値は "userSpaceOnUse" であり、<code>patternUnits</code> 属性とは逆です。よって、これらの属性 (<code>patternContentUnits</code> および <code>patternUnits</code>) の片方あるいは両方を指定しないと、パターン内に描画する図形は pattern 要素で用いるのとは異なる座標系で描画されることになり、要素を手書きで記述する際に少々わかりにくくなるかもしれないことを意味します。前出の例でこの作業を行うにはボックスのサイズ (200 ピクセル) と、パターンを水平および垂直方向に 4 回繰り返したいという事実を考慮しなければなりませんでした。よって、パターンの 1 単位は 50x50 ピクセルの正方形でした。そしてパターン内にある 2 つの長方形と円は 50x50 ピクセルのボックスに収まるサイズでした。このボックスの外側に描画した図形等は、表示されません。また、パターンがボックスの左上隅から始まるように 10 ピクセルずらす必要がありましたので、pattern の x および y 属性を 10/200 = 0.05 に調整しました。</p>

<p>ここでの注意点は、オブジェクトのサイズが変わった場合にパターンそのものは見合うサイズに調整されますが、内部のオブジェクトは調整されないことです。従ってパターン内では 4 回ユニットを繰り返しますが、パターンを構成するオブジェクトは同じサイズのままになりますので、オブジェクトの間に何もない大きなエリアができあがってしまいます。<code>patternContentUnits</code> 属性を変更することで、すべての要素で同じ単位系を用いることができます:</p>

<pre class="eval"> &lt;pattern id="Pattern" width=".25" height=".25" patternContentUnits="objectBoundingBox"&gt;
   &lt;rect x="0" y="0" width=".25" height=".25" fill="skyblue"/&gt;
   &lt;rect x="0" y="0" width=".125" height=".125" fill="url(#Gradient2)"/&gt;
   &lt;circle cx=".125" cy=".125" r=".1" fill="url(#Gradient1)" fill-opacity="0.5"/&gt;
 &lt;/pattern&gt;
</pre>

<p>これでパターンとパターン内のコンテンツが同じ単位系になることから、パターンが正しい位置から始まるようにボックスをずらす必要がなくなり、またオブジェクトのサイズが大きくなった場合でもオブジェクト内に同じ数のパターンが入るようにパターンのサイズが自動的に調整されます。またその内部でも、同じことを行います。これは、"userSpaceOnUse" システムと対照的です。こちらはオブジェクトのサイズが変わってもパターンのサイズはそのままであり、ボックスを埋めるためにパターンをより多く繰り返します。</p>

<p>余談ですが、Gecko では円の半径が 0.075 より小さいときに描画の不具合が発生するようです (それより大きい半径になるよう拡大すべきであるにもかかわらず。これは pattern 要素のバグかもしれませんし、あるいはバグではないかもしれませんが、私にはよくわかりません)。これの回避法は、必要がなければ "objectBoundingBox" の単位を用いて描画することを避けるのが最善でしょう。</p>

<p>これまで見てきた 2 つの使い方はいずれも、パターンについて考えるときに通常は思いつかないでしょう。パターンは通常サイズが決まっており、またそれ自身をオブジェクトの形状に関係なく繰り返します。このようなパターンを作成するには、パターンとその内容物は現在の userSpace 内に描画しなければならず、そのためにオブジェクトの形状が変化してもパターンの形状は変わりません:</p>

<pre class="eval"> &lt;pattern id="Pattern" x="10" y="10" width="50" height="50" patternUnits="userSpaceOnUse"&gt;
   &lt;rect x="0" y="0" width="50" height="50" fill="skyblue"/&gt;
   &lt;rect x="0" y="0" width="25" height="25" fill="url(#Gradient2)"/&gt;
   &lt;circle cx="25" cy="25" r="20" fill="url(#Gradient1)" fill-opacity="0.5"/&gt;
 &lt;/pattern&gt;
</pre>

<p>もちろん、これは後からオブジェクトのサイズを変えてもパターンのサイズは調整されないことを意味します。前出の 3 種類の例について、長方形の高さを 300px に広げたものを以下に示しましたが、これはすべてを網羅した画像ではなく、また目的に応じて利用可能なオプションが他にもあることを注記したいと思います。</p>

<p><img alt="Image:SVG_Pattern_Comparison_of_Units.png" class="internal" src="/@api/deki/files/349/=SVG_Pattern_Comparison_of_Units.png">o</p>

<p>{{ PreviousNext("SVG/Tutorial/Gradients", "SVG/Tutorial/Texts") }}</p>

<p>{{ languages( { "en": "en/SVG/Tutorial/Patterns"} ) }}</p>
