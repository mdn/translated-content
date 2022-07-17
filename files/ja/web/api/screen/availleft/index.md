---
title: Screen.availLeft
slug: Web/API/Screen/availLeft
tags:
  - API
  - 'API:Mozilla Extensions'
  - 'API:WebKit Extensions'
  - DOM
  - Non-standard
  - Property
  - プロパティ
translation_of: Web/API/Screen/availLeft
---
<div>{{APIRef("CSSOM")}}{{Non-standard_Header}}</div>

<p>画面の左端から利用できる最初の有効ピクセルを返します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">let <var>availLeft</var> = <var>window</var>.screen.availLeft;</pre>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js">let setX = window.screen.width - window.screen.availLeft;
let setY = window.screen.height - window.screen.availTop;
window.moveTo(setX, setY);
</pre>

<h2 id="Notes" name="Notes">メモ</h2>

<p>ほとんどの場合においてこのプロパティは、 0 を返します。</p>

<p>このプロパティを2画面で使用した場合、右側の画面については左側の画面の幅のピクセル数の値 (したがって、右側の画面の左端の X 座標を示す) として評価されます。</p>

<p>Windows では、このプロパティはどの画面が主画面として設定されているかによって異なり、主画面に対して左端の利用可能なピクセルのX座標を返します。つまり、主画面の左端は、左端の画面でなくても常に X 座標が 0 になります。副画面が主画面の左側にある場合は、補正するために負の X 座標になります。</p>

<p>[1] [2] - 左の画面では <em>availLeft</em> は <strong>0</strong> を返し、右の画面では左の画面の <strong>width</strong> を返す</p>

<p>[2] [1] - 左の画面では <em>availLeft</em> は右画面の <strong>-width</strong> を返し、右の画面では <strong>0</strong> を返す</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("api.Screen.availLeft")}}</p>
