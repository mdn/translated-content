---
title: 控制畫面方向
slug: Web/API/CSS_Object_Model/Managing_screen_orientation
translation_of: Web/API/CSS_Object_Model/Managing_screen_orientation
---
<p>{{SeeCompatTable}}{{APIRef}}</p>

<h2 id="摘要">摘要</h2>

<p>畫面方向（Screen Orientation）與<a href="/zh-TW/docs/WebAPI/Detecting_device_orientation">裝置方向（Device Orientation）</a>略有不同。有時甚至裝置本身不具備方向偵測功能，但裝置的螢幕仍搭載方向功能。如果裝置可測知本身的方向又能控制畫面方向，就能隨時配合 Web Apps 而達到最佳效果。</p>

<p>現有 2 種方法可處理畫面的方向，但均需搭配 CSS 與 JavaScript。第一種方法就是方向的 <a href="/zh-TW/docs/CSS/Media_queries#orientation">Media Query</a>。根據瀏覽器視窗為橫放（寬度大於高度）或直放（高度大於寬度）狀態，而透過 CSS 調整網頁內容的配置。</p>

<p>第二種方法就是 JavaScript Screen Orientation API，可取得畫面目前的方向並進一步鎖定。</p>

<h2 id="根據方向而調整配置">根據方向而調整配置</h2>

<p>方向改變最常見的情形之一，就是根據裝置的方向而修正內容的配置方式。舉例來說，你可能想將按鈕列拉到與裝置螢幕等長。而透過 Media Query 即可輕鬆達到此效果。</p>

<p>來看看下列 HTML 程式碼範例：</p>

<pre class="brush: html">&lt;ul id="toolbar"&gt;
  &lt;li&gt;A&lt;/li&gt;
  &lt;li&gt;B&lt;/li&gt;
  &lt;li&gt;C&lt;/li&gt;
&lt;/ul&gt;

&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia nisi nec sem viverra vitae fringilla nulla ultricies. In ac est dolor, quis tincidunt leo. Cras commodo quam non tortor consectetur eget rutrum dolor ultricies. Ut interdum tristique dapibus. Nullam quis malesuada est.&lt;/p&gt;
</pre>

<p>CSS 將根據方向的 Media Query，處理畫面方向的特殊樣式：</p>

<pre class="brush: css">/* First let's define some common styles */

html, body {
  width : 100%;
  height: 100%;
}

body {
  border: 1px solid black;

  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

p {
  font   : 1em sans-serif;
  margin : 0;
  padding: .5em;
}

ul {
  list-style: none;

  font   : 1em monospace;
  margin : 0;
  padding: .5em;

  -moz-box-sizing: border-box;
  box-sizing: border-box;

  background: black;
}

li {
  display: inline-block;
  margin : 0;
  padding: 0.5em;
  background: white;
}
</pre>

<p>在設定某些通用的樣式之後，即可針對方向定義特殊條件：</p>

<pre class="brush: css">/* For portrait, we want the tool bar on top */

@media screen and (orientation: portrait) {
  #toolbar {
    width: 100%;
  }
}

/* For landscape, we want the tool bar stick on the left */

@media screen and (orientation: landscape) {
  #toolbar {
    position: fixed;
    width: 2.65em;
    height: 100%;
  }

  p {
    margin-left: 2em;
  }

  li + li {
    margin-top: .5em;
  }
}
</pre>

<p>結果如下所示（若無法顯示，可至本文右上角切換回英文原文觀看）：</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Portrait</th>
   <th scope="col">Landscape</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{ EmbedLiveSample('Adjusting_layout_based_on_the_orientation', 180, 350) }}</td>
   <td>{{ EmbedLiveSample('Adjusting_layout_based_on_the_orientation', 350, 180) }}</td>
  </tr>
 </tbody>
</table>

<div class="note">
<p><strong>注意：</strong>方向 Media Query 其實是以瀏覽器視窗 (或 iframe) 的方向為準，而非裝置本身的方向。</p>
</div>

<h2 id="鎖定畫面方向">鎖定畫面方向</h2>

<div class="warning">
<p><strong>警告：</strong>此 API 仍屬實驗性質，目前仍具備 <code>moz</code> 前綴而僅能用於 <a href="/zh-TW/docs/Mozilla/Firefox_OS">Firefox OS</a> 與 <a href="/zh-TW/docs/Mozilla/Firefox_for_Android">Firefox for Android</a>，而 Windows 8.1 以上版本的 Internet Explorer 則使用 <code>ms</code> 前綴。</p>
</div>

<p>某些裝置（主要為行動裝置）可根據本身方向而動態改變畫面的方向，讓使用者隨時閱讀畫面上的資訊。這種動作對文字類的內容影響不大，但某些內容就無法順利套用此功能。舉例來說，若遊戲需要裝置方向的相關資訊，就可能因為方向變化而發生混亂情形。</p>

<p>而 Screen Orientation API 即可用以避免或處理這類變化。</p>

<h3 id="監聽方向變化">監聽方向變化</h3>

<p>只要裝置改變了畫面方向與本身方向，就會觸發 {{event("orientationchange")}} 事件，再由 {{domxref("Screen.orientation")}} 屬性讀取之。</p>

<pre class="brush: js">screen.addEventListener("orientationchange", function () {
  console.log("The orientation of the screen is: " + screen.orientation);
});
</pre>

<h3 id="避免方向改變">避免方向改變</h3>

<p>任何 Web Apps 均可鎖定畫面以符合本身需求。{{domxref("Screen.lockOrientation()")}} 函式可鎖定畫面方向；{{domxref("Screen.unlockOrientation()")}} 函式可解鎖畫面方向。</p>

<p>{{domxref("Screen.lockOrientation()")}} 將接受一組字串或系列字串，以定義畫面鎖定的方向。有效字串為：「<code>portrait-primary</code>」、「<code>portrait-secondary</code>」、「<code>landscape-primary</code>」、「<code>landscape-secondary</code>」、「<code>portrait</code>」、「<code>landscape</code>」。另可參閱 {{domxref("Screen.lockOrientation")}} 進一步了解這些有效值。</p>

<pre class="brush: js">screen.lockOrientation('landscape');</pre>

<div class="note">
<p><strong>注意：</strong>畫面鎖定功能將依 Web Apps 而有所不同。如果 App A 鎖定為 <code>landscape</code>；App B 鎖定為 <code>portrait，則此兩款 Apps 均將維持自己的方向。所以不論如何切換</code> A 與 B，均不會觸發 {{event("orientationchange")}} 事件。</p>

<p>但若必須改變方向以滿足畫面鎖定的需求，則鎖定方向時就會觸發 {{event("orientationchange")}} 事件。</p>
</div>

<h2 id="Firefox_OS_and_Android_Orientation_lock_using_the_manifest">Firefox OS and Android: Orientation lock using the manifest</h2>

<p>For a Firefox OS and Firefox Android (soon to work on Firefox desktop too) specific way to lock orientation, you can set the <a href="/en-US/Apps/Build/Manifest#orientation">orientation</a> field in app's your manifest file, for example:</p>

<pre class="brush: json">"orientation": "portrait"</pre>

<h2 id="參見">參見</h2>

<ul>
 <li>{{domxref("Screen.orientation")}}</li>
 <li>{{domxref("Screen.lockOrientation()")}}</li>
 <li>{{domxref("Screen.unlockOrientation()")}}</li>
 <li>{{domxref("Screen.onorientationchange")}}</li>
 <li><a href="/zh-TW/docs/CSS/Media_queries#orientation">方向的 Media Query</a></li>
 <li><a href="http://hacks.mozilla.org/2009/06/media-queries/">Firefox 3.5 的 Media Queries 簡介</a></li>
</ul>
