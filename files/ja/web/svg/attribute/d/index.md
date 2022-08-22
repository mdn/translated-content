---
title: d
slug: Web/SVG/Attribute/d
tags:
  - SVG
  - SVG Attribute
translation_of: Web/SVG/Attribute/d
---
<div>{{SVGRef}}</div>

<p><strong><code>d</code></strong>属性は描かれるパスを定義します。</p>

<p>パスの定義は<a href="#Path_commands">パスコマンド</a>のリストで、各コマンドはコマンド文字とコマンドへのパラメータを示す数値から構成されます。コマンドの詳細は以下になります。</p>

<p>３つの要素がこの属性を有します： {{SVGElement("path")}}, {{SVGElement("glyph")}}, {{SVGElement("missing-glyph")}}</p>

<div id="Example">
<div class="hidden">
<pre class="brush: css">html,body,svg { height:100% }</pre>
</div>

<pre class="brush: html">&lt;svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"&gt;
  &lt;path fill="none" stroke="red"
    d="M 10,30
       A 20,20 0,0,1 50,30
       A 20,20 0,0,1 90,30
       Q 90,60 50,90
       Q 10,60 10,30 z" /&gt;
&lt;/svg&gt;</pre>

<p>{{EmbedLiveSample('Example', '100%', 200)}}</p>
</div>

<h2 id="path">path</h2>

<p>{{SVGElement('path')}}要素に対しては、<code>d</code>属性は、描かれるパスを定義するパスコマンドの並びを含む文字列です。</p>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="row">値</th>
   <td><strong><a href="/ja/docs/Web/SVG/Content_type#String">&lt;string&gt;</a></strong></td>
  </tr>
  <tr>
   <th scope="row">初期値</th>
   <td><em>none</em></td>
  </tr>
  <tr>
   <th scope="row">アニメーション可否</th>
   <td>Yes</td>
  </tr>
 </tbody>
</table>

<h2 id="glyph">glyph</h2>

<p class="warning"><strong>警告:</strong>SVG2において、{{SVGElement('glyph')}}は非推奨であり、用いるべきではありません。</p>

<p>{{SVGElement('glyph')}}要素に対しては、<code>d</code>属性はグリフのアウトライン形状を定義するパスコマンドの並びを含む文字列です。</p>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="row">値</th>
   <td><strong><a href="/ja/docs/Web/SVG/Content_type#String">&lt;string&gt;</a></strong></td>
  </tr>
  <tr>
   <th scope="row">初期値</th>
   <td><em>none</em></td>
  </tr>
  <tr>
   <th scope="row">アニメーション可否</th>
   <td>Yes</td>
  </tr>
 </tbody>
</table>

<p class="note"><strong>注意:</strong>原点(座標<code>0</code>,<code>0</code>)は通常、コンテキストの<em>左上の角</em>です。しかし、{{SVGElement("glyph")}}要素は、それ自身の原点を文字ボックスの<em>左下</em>に持ちます。</p>

<h2 id="missing-glyph">missing-glyph</h2>

<p class="warning"><strong>警告:</strong>SVG2において、{{SVGElement('missing-glyph')}}は非推奨であり、用いるべきではありません。</p>

<p>{{SVGElement('missing-glyph')}}要素に対しては、<code>d</code>属性は、グリフのアウトライン形状を定義するパスコマンドの並びを含んだ文字列です。</p>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="row">値</th>
   <td><strong><a href="/ja/docs/Web/SVG/Content_type#String">&lt;string&gt;</a></strong></td>
  </tr>
  <tr>
   <th scope="row">初期値</th>
   <td><em>none</em></td>
  </tr>
  <tr>
   <th scope="row">アニメーション可否</th>
   <td>Yes</td>
  </tr>
 </tbody>
</table>

<h2 id="Path_commands" name="Path_commands">パスコマンド</h2>

<p>パスコマンドは、描かれるパスの定義を指定します。各コマンドは、コマンド文字とコマンドパラメータを示す数値で構成されます。</p>

<p>SVGでは、6つのタイプのパスコマンドを定義しており、全部で20個のコマンドがあります:</p>

<ul>
 <li>MoveTo: <code>M</code>, <code>m</code></li>
 <li>LineTo: <code>L</code>, <code>l</code>, <code>H</code>, <code>h</code>, <code>V</code>, <code>v</code></li>
 <li>3次ベジエ曲線: <code>C</code>, <code>c</code>, <code>S</code>, <code>s</code></li>
 <li>2次ベジエ曲線: <code>Q</code>, <code>q</code>, <code>T</code>, <code>t</code></li>
 <li>楕円円弧曲線: <code>A</code>, <code>a</code></li>
 <li>ClosePath: <code>Z</code>, <code>z</code></li>
</ul>

<p class="note"><strong>ノート:</strong>コマンドは<em>ケースセンシティブ（大小文字の区別あり）</em>です. 大文字のコマンドは絶対座標を指定し、これに対して小文字のコマンドは現在位置からの相対座標を指定します。</p>

<p>コマンドへの引数として負値を指定することは常に可能です:</p>

<ul>
 <li>負の角度は反時計回りとなります;</li>
 <li><em>絶対値</em>での負の<em>x</em>と<em>y</em>の値は反転座標と解釈されます;</li>
 <li><em>相対値</em>での負の<em>x</em>の値は左へ移動,相対値での負の<em>y</em>の値は上方向へ移動します。</li>
</ul>

<h3 id="MoveTo_path_commands" name="MoveTo_path_commands">MoveToパスコマンド</h3>

<p><em>MoveTo</em>での指定は、筆記用具を持ち上げ他の位置で下ろす動作と考えられます―言い換えると、<em>現在位置</em> (P<sub>o</sub>; {x<sub>o</sub>, y<sub>o</sub>})の移動です。P<sub>o </sub>と新しい<em>現在位置</em> (P<sub>n</sub>; {x<sub>n</sub>, y<sub>n</sub>})との間には線は描かれません。</p>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">コマンド</th>
   <th scope="col">パラメータ</th>
   <th scope="col">説明</th>
  </tr>
  <tr>
   <th scope="row">M</th>
   <td>(<code>x</code>, <code>y</code>)+</td>
   <td>
    <p><em>現在位置</em>を座標<code>x</code>,<code>y</code>へ移動します。後続する任意個の座標の組は暗黙的に絶対座標でのLineTo(<code>L</code>)コマンドと解釈されます(<em>以下を参照</em>)。</p>

    <p><strong>形式:</strong> P<sub>n</sub> = {<code>x</code>, <code>y</code>}</p>
   </td>
  </tr>
  <tr>
   <th scope="row">m</th>
   <td>(<code>dx</code>, <code>dy</code>)+</td>
   <td>
    <p><em>現在位置</em>を最後に把握されたパス位置からの<code>dx</code>をx軸方向、<code>dy</code>をy軸に沿った並進として移動します。後続する任意個の座標の組は暗黙的に相対座標でのLineTo(<code>l</code>)コマンドとして解釈されます(<em>以下を参照</em>)。</p>

    <p><strong>形式:</strong> P<sub>n</sub> = {x<sub>o</sub> + <code>dx</code>, y<sub>o</sub> + <code>dy</code>}</p>
   </td>
  </tr>
 </tbody>
</table>

<h4 id="Examples" name="Examples">例</h4>

<div class="hidden">
<pre class="brush: css">html,body,svg { height:100% }</pre>
</div>

<pre class="brush: html">&lt;svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"&gt;
  &lt;path fill="none" stroke="red"
    d="M 10,10 h 10
       m  0,10 h 10
       m  0,10 h 10
       M 40,20 h 10
       m  0,10 h 10
       m  0,10 h 10
       m  0,10 h 10
       M 50,50 h 10
       m-20,10 h 10
       m-20,10 h 10
       m-20,10 h 10" /&gt;
&lt;/svg&gt;</pre>

<p>{{EmbedLiveSample('MoveTo_path_commands', '100%', 200)}}</p>

<h3 id="LineTo_path_commands" name="LineTo_path_commands">LineToパスコマンド</h3>

<p><em>LineTo</em>は、<em>現在位置</em> (P<sub>o</sub>; {x<sub>o</sub>, y<sub>o</sub>})から<em>終端位置</em> (P<sub>n</sub>; {x<sub>n</sub>, y<sub>n</sub>})への直線を指定されたパラメータに基づいて描きます。<em>終端位置</em>(P<sub>n</sub>)は、次のコマンドでの<em>現在位置</em> (P<sub>o</sub>′)となります。</p>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">コマンド</th>
   <th scope="col">パラメータ</th>
   <th scope="col">説明</th>
  </tr>
  <tr>
   <th scope="row">L</th>
   <td>(<code>x</code>, <code>y</code>)+</td>
   <td>
    <p><em>現在位置</em>から<code>x</code>,<code>y</code>で指定される<em>終端位置</em>へ直線を描きます。後続する任意個の座標の組は暗黙的に絶対座標でのLineTo (<code>L</code>) コマンドと解釈されます。</p>

    <p><strong>形式:</strong> P<sub>o</sub>′ = P<sub>n</sub> = {<code>x</code>, <code>y</code>}</p>
   </td>
  </tr>
  <tr>
   <th scope="row">l</th>
   <td>(<code>dx</code>, <code>dy</code>)+</td>
   <td>
    <p><em>現在位置</em>から、<em>現在位置</em>に対するx-軸方向に<code>dx</code>、y-軸方向に<code>dy</code>で表される<em>終端位置</em>への直線を描きます。後続する任意個の座標の組は、暗黙的に相対座標でのLineTo (<code>l</code>) コマンドと解釈されます(<em>以下を参照</em>)。</p>

    <p><strong>形式:</strong> P<sub>o</sub>′ = P<sub>n</sub> = {x<sub>o</sub> + <code>dx</code>, y<sub>o</sub> + <code>dy</code>}</p>
   </td>
  </tr>
  <tr>
   <th scope="row">H</th>
   <td><code>x</code>+</td>
   <td>
    <p><em>現在位置</em>から、パラメータ<code>x</code>と<em>現在位置の</em>y座標で指定される<em>終端座標</em>までの水平線を描きます。後続する任意個の値は、暗黙的に絶対座標での水平線用のLineTo (<code>H</code>)コマンドと解釈されます。</p>

    <p><strong>形式:</strong> P<sub>o</sub>′ = P<sub>n</sub> = {<code>x</code>, y<sub>o</sub>}</p>
   </td>
  </tr>
  <tr>
   <th scope="row">h</th>
   <td><code>dx</code>+</td>
   <td>
    <p><em>現在位置</em>から、<em>現在位置</em>からのx-軸方向への<code>dx</code>の並進と<em>現在位置の</em>y座標で指定される<em>終端位置</em>までの水平線を描きます。後続する任意個の値は、暗黙的に相対座標での水平線用のLineTo (<code>h</code>)コマンドと解釈されます。</p>

    <p><strong>形式:</strong> P<sub>o</sub>′ = P<sub>n</sub> = {x<sub>o</sub> + <code>dx</code>, y<sub>o</sub>}</p>
   </td>
  </tr>
  <tr>
   <th scope="row">V</th>
   <td><code>y</code>+</td>
   <td>
    <p><em>現在位置</em>から、パラメータ<code>y</code>と<em>現在位置の</em>x座標で指定される<em>終端座標</em>までの垂直線を描きます。後続する任意個の値は、暗黙的に絶対座標での垂直線用のLineTo (<code>V</code>)コマンドと解釈されます。</p>

    <p><strong>形式:</strong> P<sub>o</sub>′ = P<sub>n</sub> = {x<sub>o</sub>, <code>y</code>}</p>
   </td>
  </tr>
  <tr>
   <th scope="row">v</th>
   <td><code>dy</code>+</td>
   <td>
    <p><em>現在位置</em>から、<em>現在位置</em>からのy-軸方向への<code>dx</code>の並進と<em>現在位置の</em>x座標で指定される<em>終端位置</em>までの垂直線を描きます。後続する任意個の値は、暗黙的に相対座標での垂直線用のLineTo (<code>v</code>)コマンドと解釈されます。</p>

    <p><strong>形式:</strong> P<sub>o</sub>′ = P<sub>n</sub> = {x<sub>o, </sub>y<sub>o</sub> + <code>dy</code>}</p>
   </td>
  </tr>
 </tbody>
</table>

<h4 id="Examples_2" name="Examples_2">例</h4>

<div class="hidden">
<pre class="brush: css">html,body,svg { height:100% }</pre>
</div>

<pre class="brush: html">&lt;svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg"&gt;
  &lt;!-- 絶対座標でのLineToコマンド --&gt;
  &lt;path fill="none" stroke="red"
        d="M 10,10
           L 90,90
           V 10
           H 50" /&gt;

  &lt;!-- 相対座標でのLineToコマンド --&gt;
  &lt;path fill="none" stroke="red"
        d="M 110,10
           l 80,80
           v -80
           h -40" /&gt;
&lt;/svg&gt;</pre>

<p>{{EmbedLiveSample('LineTo_path_commands', '100%', 200)}}</p>

<h3 id="Cubic_Bezier_Curve" name="Cubic_Bezier_Curve">3次ベジエ曲線</h3>

<p><em>3次<a href="https://ja.wikipedia.org/wiki/%E3%83%99%E3%82%B8%E3%82%A7%E6%9B%B2%E7%B7%9A">ベジエ曲線</a></em>は4点で定義される滑らかな曲線です:</p>

<dl>
 <dt><em>開始位置 (現在位置)</em></dt>
 <dd>(P<sub>o</sub> = {x<sub>o</sub>, y<sub>o</sub>})</dd>
 <dt><em>終端位置</em></dt>
 <dd>(P<sub>n</sub> = {x<sub>n</sub>, y<sub>n</sub>})</dd>
 <dt><em>開始制御点</em></dt>
 <dd>(P<sub>cs</sub> = {x<sub>cs</sub>, y<sub>cs</sub>})<br>
 (曲線の開始点近くの曲率を制御します)</dd>
 <dt><em>終端制御点</em></dt>
 <dd>(P<sub>ce</sub> = {x<sub>ce</sub>, y<sub>ce</sub>})<br>
 (曲線の終端近くの曲率を制御します)</dd>
</dl>

<p>描画後に、<em>終端位置</em>(P<sub>n</sub>)は、次のコマンドに対する<em>現在位置</em> (P<sub>o</sub>′)となります。</p>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">コマンド</th>
   <th scope="col">パラメータ</th>
   <th scope="col">説明</th>
  </tr>
  <tr>
   <th scope="row">C</th>
   <td>(<code>x1</code>,<code>y1</code>, <code>x2</code>,<code>y2</code>, <code>x</code>,<code>y</code>)+</td>
   <td>
    <p><em>開始位置</em>から、<code>x</code>,<code>y</code>で指定される<em>終端位置</em>までの3次ベジエ曲線を描きます。<em>開始制御点</em>は<code>x1</code>,<code>y1</code>で指定され、<em>終端制御点</em>は<code>x2</code>,<code>y2</code>で指定されます。後続する任意個の3つ組の座標は、暗黙的な絶対座標での3次ベジエ曲線(<code>C</code>)コマンドへのパラメータと解釈されます。</p>

    <dl>
     <dt>形式:</dt>
     <dd>P<sub>o</sub>′ = P<sub>n</sub> = {<code>x</code>, <code>y</code>} ;<br>
     P<sub>cs</sub> = {<code>x1</code>, <code>y1</code>} ;<br>
     P<sub>ce</sub> = {<code>x2</code>, <code>y2</code>}</dd>
    </dl>
   </td>
  </tr>
  <tr>
   <th scope="row">c</th>
   <td>(<code>dx1</code>,<code>dy1</code>, <code>dx2</code>,<code>dy2</code>, <code>dx</code>,<code>dy</code>)+</td>
   <td>
    <p><em>開始位置</em>から、<em>開始位置</em>からのx-軸方向に<code>dx</code>,y-軸方向に<code>dy</code>とした並進となる<em>終端位置</em>までの3次ベジエ曲線を描きます。<em>開始制御点</em>は、<em>開始点</em> (曲線の開始位置)をx-軸方向に<code>dx1</code>,y-軸方向に<code>dy1</code>と並進した点です。<em>終端制御点</em>は<em>現在位置</em> (曲線の開始位置)を、x-軸方向に<code>dx2</code>,y-軸方向に<code>dy2</code>と並進した点です。後続する任意個の3つ組の座標は、暗黙的に相対座標での3次ベジエ曲線 (<code>c</code>) コマンドと解釈されます。</p>

    <dl>
     <dt>形式:</dt>
     <dd>P<sub>o</sub>′ = P<sub>n</sub> = {x<sub>o</sub> + <code>dx</code>, y<sub>o</sub> + <code>dy</code>} ;<br>
     P<sub>cs</sub> = {x<sub>o</sub> + <code>dx1</code>, y<sub>o</sub> + <code>dy1</code>} ;<br>
     P<sub>ce</sub> = {x<sub>o</sub> + <code>dx2</code>, y<sub>o</sub> + <code>dy2</code>}</dd>
    </dl>
   </td>
  </tr>
  <tr>
   <th scope="row">S</th>
   <td>(<code>x2</code>,<code>y2</code>, <code>x</code>,<code>y</code>)+</td>
   <td><em>開始位置</em>から、<code>x</code>,<code>y</code>で指定される<em>終端位置</em>までの滑らかな3次ベジエ曲線を描きます。<em>終端制御点</em>は、<code>x2</code>,<code>y2</code>で指定されます。<em>開始制御点</em>は、直前の曲線コマンドの<em>終端制御点</em>が鏡映されます。もし直前のコマンドが3次ベジエ曲線でない場合は、<em>開始制御点</em>は曲線の開始位置(<em>現在座標</em>)と同一となります。後続する任意個の座標の組は、暗黙的に絶対座標での滑らかな3次ベジエ曲線(<code>S</code>)コマンドへのパラメータと解釈されます。</td>
  </tr>
  <tr>
   <th scope="row">s</th>
   <td>(<code>dx2</code>,<code>dy2</code>, <code>dx</code>,<code>dy</code>)+</td>
   <td><em>開始位置</em>から、<em>現在位置</em>からのx-軸方向への<code>dx</code>,y-軸方向への<code>dy</code>への並進で表される<em>終端位置</em>までの滑らかな3次ベジエ曲線を描きます。<em>終端制御点</em>は、<em>現在位置</em>(曲線の開始点)をx-軸方向への<code>dx2</code>とy-軸方向への<code>dy2</code>だけ並進させた点です。<em>開始制御点</em>は、直前の曲線コマンドの<em>終端位置</em>が鏡映されます。もし直前のコマンドが3次ベジエ曲線でない場合は、<em>開始制御点</em>は曲線の開始位置(<em>現在座標</em>)と同一となります。後続する任意個の座標の組は、暗黙的に相対座標での滑らかな3次ベジエ曲線 (<code>s</code>) コマンドと解釈されます。</td>
  </tr>
 </tbody>
</table>

<h4 id="Examples_3" name="Examples_3">例</h4>

<div class="hidden">
<pre class="brush: css">html,body,svg { height:100% }</pre>
</div>

<pre class="brush: html">&lt;svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"&gt;

  &lt;!-- 絶対座標での3次ベジエ曲線 --&gt;
  &lt;path fill="none" stroke="red"
        d="M 10,90
           C 30,90 25,10 50,10
           S 70,90 90,90" /&gt;

  &lt;!-- 相対座標での3次ベジエ曲線 --&gt;
  &lt;path fill="none" stroke="red"
        d="M 110,90
           c 20,0 15,-80 40,-80
           s 20,80 40,80" /&gt;

  &lt;!-- 曲線の頂点と制御点の明示 --&gt;
  &lt;g id="ControlPoints"&gt;

    &lt;!-- 1つ目の3次コマンドへの制御点 --&gt;
    &lt;line x1="10" y1="90" x2="30" y2="90" stroke="lightgrey" /&gt;
    &lt;circle cx="30" cy="90" r="1.5"/&gt;

    &lt;line x1="50" y1="10" x2="25" y2="10" stroke="lightgrey" /&gt;
    &lt;circle cx="25" cy="10" r="1.5"/&gt;

    &lt;!-- 2つめの円滑化制御点 (1つ目は暗黙的) --&gt;
    &lt;line x1="50" y1="10" x2="75" y2="10" stroke="lightgrey" stroke-dasharray="2" /&gt;
    &lt;circle cx="75" cy="10" r="1.5" fill="lightgrey"/&gt;

    &lt;line x1="90" y1="90" x2="70" y2="90" stroke="lightgrey" /&gt;
    &lt;circle cx="70" cy="90" r="1.5" /&gt;

    &lt;!-- 曲線上の頂点 --&gt;
    &lt;circle cx="10" cy="90" r="1.5"/&gt;
    &lt;circle cx="50" cy="10" r="1.5"/&gt;
    &lt;circle cx="90" cy="90" r="1.5"/&gt;
  &lt;/g&gt;
  &lt;use xlink:href="#ControlPoints" x="100" /&gt;
&lt;/svg&gt;</pre>

<p>{{EmbedLiveSample('Cubic_Bezier_Curve', '100%', 200)}}</p>

<h3 id="Quadratic_Bezier_Curve" name="Quadratic_Bezier_Curve">2次ベジエ曲線</h3>

<p><em>2次<a href="https://ja.wikipedia.org/wiki/%E3%83%99%E3%82%B8%E3%82%A7%E6%9B%B2%E7%B7%9A">ベジエ曲線</a></em>は3点で定義される滑らかな曲線です:</p>

<dl>
 <dt><em>開始座標(現在位置)</em></dt>
 <dd>P<sub>o</sub> = {x<sub>o</sub>, y<sub>o</sub>}</dd>
 <dt><em>終端座標</em></dt>
 <dd>P<sub>n</sub> = {x<sub>n</sub>, y<sub>n</sub>}</dd>
 <dt><em>制御点</em></dt>
 <dd>P<sub>c</sub> = {x<sub>c</sub>, y<sub>c</sub>}<br>
 (曲率を制御します)</dd>
</dl>

<p>描画後に、<em>終端位置</em>(P<sub>n</sub>)は、次のコマンドに対する<em>現在位置</em>(P<sub>o</sub>′)となります。</p>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">コマンド</th>
   <th scope="col">パラメータ</th>
   <th scope="col">説明</th>
  </tr>
  <tr>
   <th scope="row">Q</th>
   <td>(<code>x1</code>,<code>y1</code>, <code>x</code>,<code>y</code>)+</td>
   <td>
    <p><em>開始位置</em>から<code>x</code>,<code>y</code>で指定される<em>終端位置</em>までの2次ベジエ曲線を描きます。<em>制御点</em>は<code>x1</code>,<code>y1</code>で指定されます。後続する任意個の座標の組は、暗黙的に絶対座標での4次ベジエ曲線 (<code>Q</code>) コマンドへのパラメータと解釈されます。</p>

    <dl>
     <dt><strong>形式:</strong></dt>
     <dd>P<sub>o</sub>′ = P<sub>n</sub> = {<code>x</code>, <code>y</code>} ;<br>
     P<sub>c</sub> = {<code>x1</code>, <code>y1</code>}</dd>
    </dl>
   </td>
  </tr>
  <tr>
   <th scope="row">q</th>
   <td>(<code>dx1</code>,<code>dy1</code>, <code>dx</code>,<code>dy</code>)+</td>
   <td>
    <p><em>開始位置</em>から、<em>開始位置</em>からのx-軸方向に<code>dx</code>,y-軸方向に<code>dy</code>とした並進となる<em>終端位置</em>までの2次ベジエ曲線を描きます。<em>制御点</em>は、<em>開始点</em> (曲線の開始位置)をx-軸方向に<code>dx1</code>,y-軸方向に<code>dy1</code>と並進した点です。後続する任意個の座標は、暗黙的に相対座標での2次ベジエ曲線 (<code>q</code>) コマンドへのパラメータと解釈されます。</p>

    <dl>
     <dt>形式:</dt>
     <dd>P<sub>o</sub>′ = P<sub>n</sub> = {x<sub>o</sub> + <code>dx</code>, y<sub>o</sub> + <code>dy</code>} ;<br>
     P<sub>c</sub> = {x<sub>o</sub> + <code>dx1</code>, y<sub>o</sub> + <code>dy1</code>}</dd>
    </dl>
   </td>
  </tr>
  <tr>
   <th scope="row">T</th>
   <td>(<code>x</code>,<code>y</code>)+</td>
   <td>
    <p><em>開始位置</em>から<code>x</code>,<code>y</code>で指定される<em>終端位置</em>までの滑らかな2次ベジエ曲線を描きます。<em>制御点</em>は、直前の曲線コマンドの<em>終端制御点</em>が反映されます。もし直前のコマンドが2次ベジエ曲線でない場合は、<em>制御点</em>は曲線の開始位置(<em>現在座標</em>)と同一となります。後続する任意個の座標の組は、暗黙的に絶対座標での滑らかな2次ベジエ曲線(<code>T</code>)コマンドへのパラメータと解釈されます。</p>

    <dl>
     <dt>形式:</dt>
     <dd>P<sub>o</sub>′ = P<sub>n</sub> = {<code>x</code>, <code>y</code>}</dd>
    </dl>
   </td>
  </tr>
  <tr>
   <th scope="row">t</th>
   <td>(<code>dx</code>,<code>dy</code>)+</td>
   <td>
    <p><em>開始位置</em>から、<em>現在位置</em>からのx-軸方向への<code>dx</code>,y-軸方向への<code>dy</code>への並進で表される<em>終端位置</em>までの滑らかな3次ベジエ曲線を描きます。<em>制御点</em>は、直前の曲線コマンドの<em>制御点</em>が反映されます。もし直前のコマンドが2次ベジエ曲線でない場合は、<em>制御点</em>は曲線の開始位置(<em>現在座標</em>)と同一となります。後続する任意個の座標の組は、暗黙的に相対座標での滑らかな2次ベジエ曲線 (<code>t</code>) コマンドへのパラメータと解釈されます。</p>

    <dl>
     <dt>形式:</dt>
     <dd>P<sub>o</sub>′ = P<sub>n</sub> = {x<sub>o</sub> + <code>dx</code>, y<sub>o</sub> + <code>dy</code>}</dd>
    </dl>
   </td>
  </tr>
 </tbody>
</table>

<h4 id="Examples_4" name="Examples_4">例</h4>

<div class="hidden">
<pre class="brush: css">html,body,svg { height:100% }</pre>
</div>

<pre class="brush: html">&lt;svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"&gt;

  &lt;!-- 暗黙的な繰り返しによる2次ベジエ曲線 --&gt;
  &lt;path fill="none" stroke="red"
        d="M 10,50
           Q 25,25 40,50
           t 30,0 30,0 30,0 30,0 30,0" /&gt;

  &lt;!-- 曲線の頂点と制御点の明示 --&gt;
  &lt;g&gt;
    &lt;polyline points="10,50 25,25 40,50" stroke="rgba(0,0,0,.2)" fill="none" /&gt;
    &lt;circle cx="25" cy="25" r="1.5" /&gt;

    &lt;!-- 曲線上の頂点 --&gt;
    &lt;circle cx="10" cy="50" r="1.5"/&gt;
    &lt;circle cx="40" cy="50" r="1.5"/&gt;

    &lt;g id="SmoothQuadraticDown"&gt;
      &lt;polyline points="40,50 55,75 70,50" stroke="rgba(0,0,0,.2)" stroke-dasharray="2" fill="none" /&gt;
      &lt;circle cx="55" cy="75" r="1.5" fill="lightgrey" /&gt;
      &lt;circle cx="70" cy="50" r="1.5" /&gt;
    &lt;/g&gt;

    &lt;g id="SmoothQuadraticUp"&gt;
      &lt;polyline points="70,50 85,25 100,50" stroke="rgba(0,0,0,.2)" stroke-dasharray="2" fill="none" /&gt;
      &lt;circle cx="85" cy="25" r="1.5" fill="lightgrey" /&gt;
      &lt;circle cx="100" cy="50" r="1.5" /&gt;
    &lt;/g&gt;

    &lt;use xlink:href="#SmoothQuadraticDown" x="60" /&gt;
    &lt;use xlink:href="#SmoothQuadraticUp"   x="60" /&gt;
    &lt;use xlink:href="#SmoothQuadraticDown" x="120" /&gt;
  &lt;/g&gt;
&lt;/svg&gt;</pre>

<p>{{EmbedLiveSample('Quadratic_Bezier_Curve', '100%', 200)}}</p>

<h3 id="Elliptical_Arc_Curve" name="Elliptical_Arc_Curve">楕円円弧曲線</h3>

<p><em>楕円円弧曲線</em>は楕円の一部として定義される曲線です。ベジエ曲線よりも楕円円弧曲線を用いるほうが、高度な正則曲線の描画が容易になることが多くあります。</p>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">コマンド</th>
   <th scope="col">パラメータ</th>
   <th scope="col">説明</th>
  </tr>
  <tr>
   <th scope="row">A</th>
   <td>(<code>rx</code> <code>ry</code> <code>角度</code> <code>大円弧フラグ</code> <code>掃引フラグ</code> <code>x</code> <code>y</code>)+</td>
   <td>
    <p>現在位置から<code>x</code>,<code>y</code>座標へ円弧を描きます。楕円の中心はコマンドへの他のパラメータに基づいて自動的に決定されます。:</p>

    <ul>
     <li><code>rx</code>と<code>ry</code>は楕円の半径です;</li>
     <li><code>角度</code>はx-軸に対する楕円の角度（度単位）です;</li>
     <li><code>大円弧フラグ</code>と<code>掃引フラグ</code>は、他のパラメータによって描画可能な4つの可能な円弧のうち、どの円弧を描くかを選択可能にします。
      <ul>
       <li><code>大円弧フラグ</code>では大きい円弧 (<strong>1</strong>) を描くか、小さい円弧 (<strong>0</strong>) を描くかを選択し,</li>
       <li><code>掃引フラグ</code>では時計回りの円弧 (<strong>1</strong>) を描くか、反時計周りの円弧 (<strong>0</strong>) を描くかを選択します。</li>
      </ul>
     </li>
    </ul>
    座標 <code>x</code>,<code>y</code> は、次のコマンドに対する新しい現在位置となります。すべての後続するパラメータの組は、暗黙的に絶対座標での円弧曲線 (<code>A</code>) コマンドに対するものと解釈されます。</td>
  </tr>
  <tr>
   <th scope="row">a</th>
   <td>(<code>rx</code> <code>ry</code> <code>角度</code> <code>大円弧フラグflag</code> <code>掃引フラグ</code> <code>dx</code> <code>dy</code>)+</td>
   <td>
    <p>現在位置から、現在位置からのx-軸方向への<code>dx</code>とy-軸方向への<code>dy</code>への並進で指定される点へ円弧を描きます。楕円の中心はコマンドへの他のパラメータに基づいて自動的に決定されます。:</p>

    <ul>
     <li><code>rx</code>と<code>ry</code>は楕円の半径です;</li>
     <li><code>角度</code>はx-軸に対する楕円の角度（度単位）です;</li>
     <li><code>大円弧フラグ</code>と<code>掃引フラグ</code>は、他のパラメータによって描画可能な4つの可能な円弧のうち、どの円弧を描くかを選択可能にします。
      <ul>
       <li><code>大円弧フラグ</code>では大きい円弧 (<strong>1</strong>) を描くか、小さい円弧 (<strong>0</strong>) を描くかを選択し,</li>
       <li><code>掃引フラグ</code>では時計回りの円弧 (<strong>1</strong>) を描くか、反時計周りの円弧 (<strong>0</strong>) を描くかを選択します。</li>
      </ul>
     </li>
    </ul>
    <code>dx</code>と<code>dy</code>で並進された座標<code>X</code>,<code>Y</code>は、次のコマンドに対する新しい現在位置となります。すべての後続するパラメータの組は、暗黙的に相対座標での円弧曲線 (<code>a</code>) コマンドに対するものと解釈されます。</td>
  </tr>
 </tbody>
</table>

<h4 id="Examples_5" name="Examples_5">例</h4>

<div class="hidden">
<pre class="brush: css">html,body,svg { height:100% }</pre>
</div>

<pre class="brush: html">&lt;svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"&gt;

  &lt;!-- 円弧への２つのフラグの効果により各円弧が描画される --&gt;
  &lt;path fill="none" stroke="red"
        d="M 6,10
           A 6 4 10 1 0 14,10" /&gt;

  &lt;path fill="none" stroke="lime"
        d="M 6,10
           A 6 4 10 1 1 14,10" /&gt;

  &lt;path fill="none" stroke="purple"
        d="M 6,10
           A 6 4 10 0 1 14,10" /&gt;

  &lt;path fill="none" stroke="pink"
        d="M 6,10
           A 6 4 10 0 0 14,10" /&gt;
&lt;/svg&gt;</pre>

<p>{{EmbedLiveSample('Elliptical_Arc_Curve', '100%', 200)}}</p>

<h3 id="ClosePath" name="ClosePath">ClosePath</h3>

<p><em>ClosePath</em>は、<em>現在位置</em>からパスの開始位置までの直線描画を指定します。</p>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">コマンド</th>
   <th scope="col">パラメータ</th>
   <th scope="col">説明</th>
  </tr>
  <tr>
   <th scope="row">Z, z</th>
   <td></td>
   <td>パスの最終位置とその初期位置とを接続することで、現在のサブパスを閉じます。もし、2つの点が異なる座標の場合は、2点間に直線が描かれます。</td>
  </tr>
 </tbody>
</table>

<p class="note"><strong>ノート:</strong><em>ClosePath</em>によって生じる形状は、他のコマンドを用いて初期位置へ線を描いて閉じた場合とは異なる場合があります。これは、描線の終端が互いに接続されるためです ({{SVGAttr('stroke-linejoin')}} 設定)を参照のこと。 単に同じ座標に配置されるわけではありません。</p>

<h4 id="Examples_6" name="Examples_6">例</h4>

<div class="hidden">
<pre class="brush: css">html,body,svg { height:100% }</pre>
</div>

<pre class="brush: html">&lt;svg viewBox="0 -1 30 11" xmlns="http://www.w3.org/2000/svg"&gt;

  &lt;!--
  初期位置と異なる終端位置による
  パスで描かれる開いた形状
  --&gt;
  &lt;path stroke="red"
        d="M 5,1
           l -4,8 8,0" /&gt;

  &lt;!--
  初期位置と一致する終端位置による
  パスで描かれる開いた形状
  --&gt;
  &lt;path stroke="red"
        d="M 15,1
           l -4,8 8,0 -4,-8" /&gt;

  &lt;!--
  初期位置と異なる終端位置による
  パスで描かれる閉じた形状
  --&gt;
  &lt;path stroke="red"
        d="M 25,1
           l -4,8 8,0
           z" /&gt;
&lt;/svg&gt;</pre>

<p>{{EmbedLiveSample('ClosePath', '100%', 200)}}</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("SVG2", "paths.html#DProperty", "d")}}</td>
   <td>{{Spec2("SVG2")}}</td>
   <td><code>&lt;path&gt;</code>の定義</td>
  </tr>
  <tr>
   <td>{{SpecName("SVG1.1", "fonts.html#GlyphElementDAttribute", "d")}}</td>
   <td>{{Spec2("SVG1.1")}}</td>
   <td><code>&lt;glyph&gt;</code>と<code>&lt;missing-glyph&gt;</code>の初期定義</td>
  </tr>
  <tr>
   <td>{{SpecName("SVG1.1", "paths.html#DAttribute", "d")}}</td>
   <td>{{Spec2("SVG1.1")}}</td>
   <td><code>&lt;path&gt;</code>の初期定義</td>
  </tr>
 </tbody>
</table>
