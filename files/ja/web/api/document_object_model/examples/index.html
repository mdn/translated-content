---
title: 例
slug: Web/API/Document_Object_Model/Examples
tags:
  - DOM
  - DOM Reference
translation_of: Web/API/Document_Object_Model/Examples
---
<div>
 {{ApiRef}}</div>
<p>この章では、DOM を利用したウェブと XML 開発のより長い例をいくつか紹介します。可能な限りこれらの例ではドキュメントオブジェクトを操作する上でよく用いられる API や技法や JavaScript のパターンを利用しています。</p>
<h2 id="Example_1.3A_height_and_width" name="Example_1.3A_height_and_width">例 1: 高さと幅</h2>
<p>以下では、画像の大きさを変えるにあたって、<code>height</code> と <code>width</code> プロパティを使っている例を示します。</p>
<pre class="brush:html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;

&lt;head&gt;
&lt;title&gt;width/height example&lt;/title&gt;
&lt;script&gt;
function init() {
  var arrImages = new Array(3);

  arrImages[0] = document.getElementById("image1");
  arrImages[1] = document.getElementById("image2");
  arrImages[2] = document.getElementById("image3");

  var objOutput = document.getElementById("output");
  var strHtml = "&lt;ul&gt;";

  for (var i = 0; i &lt; arrImages.length; i++) {
    strHtml += "&lt;li&gt;image" + (i+1) +
               ": height=" + arrImages[i].height +
               ", width=" + arrImages[i].width +
               ", style.height=" + arrImages[i].style.height +
               ", style.width=" + arrImages[i].style.width +
               "&lt;\/li&gt;";
  }

  strHtml += "&lt;\/ul&gt;";
  objOutput.innerHTML = strHtml;
}
&lt;/script&gt;
&lt;/head&gt;
&lt;body onload="init();"&gt;

&lt;p&gt;Image 1: no height, width, or style
  &lt;img id="image1" src="http://www.mozilla.org/images/mozilla-banner.gif"&gt;
&lt;/p&gt;

&lt;p&gt;Image 2: height="50", width="500", but no style
  &lt;img id="image2" src="http://www.mozilla.org/images/mozilla-banner.gif"
   height="50" width="500"&gt;
&lt;/p&gt;

&lt;p&gt;Image 3: no height, width, but style="height: 50px; width: 500px;"
  &lt;img id="image3" src="http://www.mozilla.org/images/mozilla-banner.gif"
   style="height: 50px; width: 500px;"&gt;
&lt;/p&gt;

&lt;div id="output"&gt; &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>
<p><code>height</code> と <code>width</code> は <code>OBJECT</code> と <code>APPLET</code> 要素のプロパティでもあります。</p>
<h2 id="Example_2.3A_Image_Attributes" name="Example_2.3A_Image_Attributes">例 2: イメージの属性</h2>
<pre class="brush:html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;

&lt;head&gt;
&lt;title&gt;Modifying an image border&lt;/title&gt;
&lt;script&gt;
function setBorderWidth(width) {
  document.getElementById("img1").style.borderWidth = width + "px";
}
&lt;/script&gt;
&lt;/head&gt;

&lt;body&gt;
&lt;p&gt;
  &lt;img id="img1" src="image1.gif" style="border: 5px solid green;" width="100"
   height="100" alt="border test"&gt;
&lt;/p&gt;

&lt;form name="FormName"&gt;
  &lt;p&gt;&lt;input type="button" value="Make border 20px-wide"
   onclick="setBorderWidth(20);"&gt; &lt;input type="button" value="Make border 5px-wide"
   onclick="setBorderWidth(5);"&gt;&lt;/p&gt;
&lt;/form&gt;

&lt;/body&gt;
&lt;/html&gt;
</pre>
<h2 id="Example_3.3A_Manipulating_Styles" name="Example_3.3A_Manipulating_Styles">例 3: スタイルを操作する</h2>
<p>この簡単なサンプルでは、HTML のパラグラフ (p) 要素の基本的ないくつかのスタイルプロパティは、DOM から検索設定される要素のスタイルオブジェクトとそのオブジェクトの CSS スタイルプロパティを使って、アクセスされます。この場合は、個々のスタイルが直接操作されています。次の例 (例 4 を参照) では、スタイルシートとそのルールを使用して、全ドキュメントに対してスタイルを変更することができます。</p>
<pre class="brush:html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;

&lt;head&gt;
&lt;title&gt;Changing color and font-size example&lt;/title&gt;
&lt;script&gt;
function changeText() {
  var p = document.getElementById("pid");
  p.style.color = "blue"
  p.style.fontSize = "18pt"
}
&lt;/script&gt;
&lt;/head&gt;

&lt;body&gt;

&lt;p id="pid"
  onclick="window.location.href = 'http://www.cnn.com/';"&gt;linker&lt;/p&gt;
&lt;form&gt;

&lt;p&gt;&lt;input value="rec" type="button" onclick="changeText();"&gt;&lt;/p&gt;

&lt;/form&gt;

&lt;/body&gt;
&lt;/html&gt;
</pre>
<h2 id="Example_4.3A_Using_Stylesheets" name="Example_4.3A_Using_Stylesheets">例 4: スタイルシートを利用する</h2>
<p>document オブジェクト上の styleSheets プロパティは、その document に読み込まれたスタイルシートの一覧を返します。このページの例に示されているように、stylesheet、style、CSSRule オブジェクトを利用して、これらのスタイルシートとそのルールに個別にアクセスが可能です。そしてこの例では、すべてのスタイル・ルールのセレクタ (selector) がコンソールへ表示されます。</p>
<pre class="brush:js">var ss = document.styleSheets;

for(var i = 0; i &lt; ss.length; i++) {
  for(var j = 0; j &lt; ss[i].cssRules.length; j++) {
    dump( ss[i].cssRules[j].selectorText + "\n" );
  }
}</pre>
<p>以下の 3 つのルールが定義される単一のスタイルシートが附属されているドキュメント用に対して:</p>
<pre class="brush:css">body { background-color: darkblue; }
p { font-face: Arial; font-size: 10pt; margin-left: .125in; }
#lumpy { display: none; }
</pre>
<p>このスクリプトは以下の項目を表示します:</p>
<pre>BODY
P
#LUMPY
</pre>
<h2 id="Example_5.3A_Event_Propagation" name="Example_5.3A_Event_Propagation">例 5: イベント伝播 (propagation)</h2>
<p>この例は DOM でイベントが発生したときの対処方法を、ごく単純化して紹介します。下記の HTML 文書の BODY が読み込まれる時、イベントリスナーが TABLE の第 1 行を使って登録されます。イベントリスナーは関数 stopEvent を実行することでイベントを処理します。この関数は、table の一番下のセルの値を変更します。</p>
<p>しかし、stopEvent はまたイベントオブジェクトのメソッド {{domxref("event.stopPropagation")}} を呼出します。このメソッドはイベントが発生してこれ以上 DOM に入り込むのを防止します。テーブル自体は、クリックされた時、メッセージを表示する必要のある {{domxref("element.onclick","onclick")}} イベントハンドラを備えています。しかし stopEvent メソッドは伝播を停止していますので、テーブル内のデータが更新された後では、イベントは効率的に終了し、これを確認するための警告ダイアログが表示されます。</p>
<pre class="brush:html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;title&gt;Event Propagation&lt;/title&gt;

&lt;style&gt;
#t-daddy { border: 1px solid red }
#c1 { background-color: pink; }
&lt;/style&gt;

&lt;script&gt;
function stopEvent(ev) {
  c2 = document.getElementById("c2");
  c2.innerHTML = "hello";

  // this ought to keep t-daddy from getting the click.
  ev.stopPropagation();
  alert("event propagation halted.");
}

function load() {
  elem = document.getElementById("tbl1");
  elem.addEventListener("click", stopEvent, false);
}
&lt;/script&gt;
&lt;/head&gt;

&lt;body onload="load();"&gt;

&lt;table id="t-daddy" onclick="alert('hi');"&gt;
 &lt;tr id="tbl1"&gt;
  &lt;td id="c1"&gt;one&lt;/td&gt;
 &lt;/tr&gt;
 &lt;tr&gt;
  &lt;td id="c2"&gt;two&lt;/td&gt;
 &lt;/tr&gt;
&lt;/table&gt;

&lt;/body&gt;
&lt;/html&gt;
</pre>
<h2 id="Example_6.3A_getComputedStyle" name="Example_6.3A_getComputedStyle">例 6: getComputedStyle</h2>
<p>この例は、要素の <code>style</code> 属性あるいは JavaScript (例: <code>elt.style.backgroundColor="rgb(173, 216, 230)"</code>) で設定されていないスタイルを取得する {{domxref("window.getComputedStyle")}} メソッドの使用方法を示します。JavaScript で設定されていないケースは、もっと直接的な <a href="/ja/docs/Web/API/element.style">elt.style</a> プロパティを使って取得可能です。そのプロパティは <a href="/ja/docs/Web/API/CSS">DOM CSS プロパティリスト</a> に一覧となっています。</p>
<p><code>getComputedStyle()</code> は <code>ComputedCSSStyleDeclaration</code> オブジェクトを返し、下記のサンプルにあるように、このオブジェクトの　<code>getPropertyValue()</code> メソッドによって個々のスタイルプロパティを参照できます。</p>
<pre class="brush:html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;

&lt;head&gt;
&lt;title&gt;getComputedStyle example&lt;/title&gt;

&lt;script&gt;
function cStyles() {
  var RefDiv = document.getElementById("d1");

  var txtHeight = document.getElementById("t1");
  var h_style = document.defaultView.getComputedStyle(RefDiv, null).getPropertyValue("height");
  txtHeight.value = h_style;

  var txtWidth = document.getElementById("t2");
  var w_style = document.defaultView.getComputedStyle(RefDiv, null).getPropertyValue("width");

  txtWidth.value = w_style;

  var txtBackgroundColor = document.getElementById("t3");
  var b_style = document.defaultView.getComputedStyle(RefDiv, null).getPropertyValue("background-color");

  txtBackgroundColor.value = b_style;
}
&lt;/script&gt;

&lt;style&gt;
#d1 { margin-left: 10px; background-color: rgb(173, 216, 230);
height: 20px; max-width: 20px; }
&lt;/style&gt;

&lt;/head&gt;

&lt;body&gt;

&lt;div id="d1"&gt;&amp;nbsp;&lt;/div&gt;

&lt;form action=""&gt;
&lt;p&gt;&lt;button type="button" onclick="cStyles();"&gt;getComputedStyle&lt;/button&gt;
  height&lt;input id="t1" type="text" value="1"&gt;
  max-width&lt;input id="t2" type="text" value="2"&gt;
  bg-color&lt;input id="t3" type="text" value="3"&gt;&lt;/p&gt;
&lt;/form&gt;

&lt;/body&gt;
&lt;/html&gt;
</pre>
<h2 id="Example_7.3A_Displaying_Event_Object_Properties" name="Example_7.3A_Displaying_Event_Object_Properties">例 7: イベントオブジェクトのプロパティを表示する</h2>
<p>この例では、DOM メソッドを使って、 {{domxref("window.onload")}} <a href="/ja/docs/Web/API/event">event</a> オブジェクトのプロパティとそれらの値をすべて表として表示しています。また、オブジェクトのプロパティを反復し、それらの値を取得するために、for...in ループを使った役に立つテクニックをお見せします。</p>
<p>イベントオブジェクトのプロパティはブラウザによって大きく異なります。<a href="http://www.w3.org/TR/DOM-Level-2-Events/events.html">W3C DOM 2 Events 仕様書</a> に標準のプロパティが載っていますが、多くのブラウザはこれらを大幅に拡張しています。</p>
<p>以下のコードをテキストファイルとして保存し、様々なブラウザで読み込ませてみてください。プロパティの数や名称が異なることに驚かれることでしょう。ページにいくつか要素を追加して、異なるイベントハンドラからこの関数を呼び出してみるのも良いでしょう。</p>
<pre class="brush:html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;title&gt;Show Event properties&lt;/title&gt;

&lt;style&gt;
table {border-collapse: collapse;}
thead {font-weight: bold;}
td {padding: 2px 10px 2px 10px;}
.odd {background-color: #efdfef;}
.even {background-color: #ffffff;}
&lt;/style&gt;

&lt;script&gt;

function showEventProperties(e) {
  function addCell(row, text) {
    var cell = row.insertCell(-1);
    cell.appendChild(document.createTextNode(text));
  }

  var e = e || window.event;
  document.getElementById('eventType').innerHTML = e.type;

  var table = document.createElement('table');
  var thead = table.createTHead();
  var row = thead.insertRow(-1);
  var lableList = ['#', 'Property', 'Value'];
  var len = lableList.length;

  for (var i = 0; i &lt; len; i++) {
    addCell(row, lableList[i]);
  }

  var tbody = document.createElement('tbody');
  table.appendChild(tbody);

  for (var p in e) {
    row = tbody.insertRow(-1);
    row.className = (row.rowIndex % 2)? 'odd':'even';
    addCell(row, row.rowIndex);
    addCell(row, p);
    addCell(row, e[p]);
  }

  document.body.appendChild(table);
}

window.onload = function(event){
  showEventProperties(event);
}
&lt;/script&gt;

&lt;h1&gt;Properties of the DOM &lt;span id="eventType"&gt;&lt;/span&gt; Event Object&lt;/h1&gt;
</pre>
<h2 id="Example_8.3A_Using_the_DOM_Table_Interface" name="Example_8.3A_Using_the_DOM_Table_Interface">例 8: DOM のテーブルインタフェースを使用する</h2>
<p>DOM の HTMLTableElement インタフェースによって、テーブルを生成、操作するための便利なメソッドがいくつか提供されています。よく利用される 2 つのメソッドは <code><a href="/ja/docs/Web/API/table.insertRow">table.insertRow</a></code> と <code><a href="/ja/docs/Web/API/table/row.insertCell">row.insertCell</a></code> です。</p>
<p>以下の例では、既存のテーブルに行といくつかのセルを追加しています。</p>
<pre class="brush:html">&lt;table id="table0"&gt;
  &lt;tr&gt;
    &lt;td&gt;Row 0 Cell 0&lt;/td&gt;
    &lt;td&gt;Row 0 Cell 1&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;

&lt;script&gt;
var table = document.getElementById('table0');
var row = table.insertRow(-1);
var cell,
    text;

for (var i = 0; i &lt; 2; i++) {
  cell = row.insertCell(-1);
  text = 'Row ' + row.rowIndex + ' Cell ' + i;
  cell.appendChild(document.createTextNode(text));
}
&lt;/script&gt;
</pre>
<h3 id="Notes" name="Notes">注記</h3>
<ul>
 <li>テーブルの {{domxref("element.innerHTML","innerHTML")}} プロパティは、テーブル全体あるいはセルの内容を記述するために使うことはできますが、テーブルを操作するために使うべきではありません。</li>
 <li>DOM Core メソッドの {{domxref("document.createElement")}} と {{domxref("Node.appendChild")}} を使って行とセルを生成する場合、他のブラウザでは table 要素に直接追加できる (行は最後の tbody 要素に追加される) のに対して、IE ではそれらを tbody 要素に対して追加する必要があります。</li>
 <li><a href="/ja/docs/Web/API/HTMLTableElement#Methods">table interface</a> には、この他にも、テーブルを生成したり操作するのに利用できる多くの便利なメソッドがあります。</li>
</ul>
