---
title: Element.setCapture()
slug: Web/API/Element/setCapture
translation_of: Web/API/Element/setCapture
---
<p>{{ APIRef("DOM") }}{{ gecko_minversion_header("2.0") }}</p>

<p>mousedownイベントの処理中にこのメソッドを呼び出すと、マウスボタンが離されるか、{{ domxref("document.releaseCapture()") }}が呼び出されるまで、すべてのマウスイベントをこの要素にリターゲットします。</p>

<div class="warning"><strong>Warning:</strong> このインターフェースにはブラウザ間のサポートはほとんどありませんでした。代わりに、Pointer Events APIから{{domxref("element.setPointerCapture")}}を探していました。</div>

<h2 id="シンタックス">シンタックス</h2>

<pre class="syntaxbox">element.setCapture(<em>retargetToElement</em>);
</pre>

<dl>
 <dt><code>retargetToElement</code></dt>
 <dd><code>true</code>の場合、すべてのイベントはこの要素を直接対象とします。<code>false</code>の場合、イベントはこの要素の子孫でも発生する可能性があります。</dd>
</dl>

<h2 id="例">例</h2>

<p>この例では、現在のマウスの座標が、要素をクリックして押した後にマウスを移動しながら描画されます。</p>

<pre class="brush: html">&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Mouse Capture Example&lt;/title&gt;
  &lt;style type="text/css"&gt;
    #myButton {
      border: solid black 1px;
      color: black;
      padding: 2px;
      box-shadow: black 2px 2px;
    }
  &lt;/style&gt;

  &lt;script type="text/javascript"&gt;
    function init() {
      var btn = document.getElementById("myButton");
      if (btn.setCapture) {
        btn.addEventListener("mousedown", mouseDown, false);
        btn.addEventListener("mouseup", mouseUp, false);
      } else {
        document.getElementById("output").innerHTML
          = "Sorry, there appears to be no setCapture support on this browser";
      }
    }

    function mouseDown(e) {
      e.target.setCapture();
      e.target.addEventListener("mousemove", mouseMoved, false);
    }

    function mouseUp(e) {
      e.target.removeEventListener("mousemove", mouseMoved, false);
    }

    function mouseMoved(e) {
      var output = document.getElementById("output");
      output.innerHTML = "Position: " + e.clientX + ", " + e.clientY;
    }
  &lt;/script&gt;
&lt;/head&gt;
&lt;body onload="init()"&gt;
  &lt;p&gt;This is an example of how to use mouse capture on elements in Gecko 2.0.&lt;/p&gt;
  &lt;p&gt;&lt;a id="myButton" href="#"&gt;Test Me&lt;/a&gt;&lt;/p&gt;
  &lt;div id="output"&gt;No events yet&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

<p><a href="/samples/domref/mousecapture.html">查看在线演示</a></p>

<h2 id="注意">注意</h2>

<p><span id="result_box" lang="ja"><span>要素は、他の要素のレイアウトに応じて、上または下に完全にスクロールすることはできません。</span></span></p>

<h2 id="指定">指定</h2>

<p>Internet Explorerの実装に基づいています。</p>

<h2 id="ブラウザの互換性">ブラウザの互換性</h2>

<p>{{Compat("api.Element.setCapture")}}</p>

<h2 id="関連資料">関連資料</h2>

<ul>
 <li>{{ domxref("document.releaseCapture()") }}</li>
 <li>{{domxref("element.setPointerCapture")}}</li>
</ul>
