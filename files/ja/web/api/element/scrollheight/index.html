---
title: Element.scrollHeight
slug: Web/API/Element/scrollHeight
tags:
  - API
  - CSSOM View
  - NeedsDHTMLRemovalInExample
  - Property
  - Reference
translation_of: Web/API/Element/scrollHeight
---
<div>{{APIRef("DOM")}}</div>

<p><strong><code>Element.scrollHeight</code></strong> は読み取り専用のプロパティで、あふれて画面上に表示されない部分を含めた、要素の中身の高さの寸法です。</p>

<p><code>scrollHeight</code> の値は、垂直スクロールバーを使用せずにすべてのコンテンツをビューポート内に収めるために要素に必要な最小の高さに等しくなります。高さは {{domxref("Element.clientHeight", "clientHeight")}} と同じ方法で測定されます。要素のパディングは含みますが、境界線、マージン、 (もしあれば) 水平スクロールバーは含みません。これには {{cssxref("::before")}} または {{cssxref("::after")}} のような擬似要素の高さを含むことがあります。要素の内容が垂直スクロールバーを表示することなく収まる場合、その <code>scrollHeight</code> は {{domxref("Element.clientHeight", "clientHeight")}} と等しくなります。</p>

<div class="note">
<p>このプロパティは値を整数値に丸めます。小数値が必要であれば、 {{ domxref("Element.getBoundingClientRect()") }} を使用してください。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>elemScrollHeight</var> = <var>element</var>.scrollHeight;</pre>

<h3 id="Value" name="Value">値</h3>

<p>整数値で、要素の scrollHeight ピクセル値に対応します。</p>

<h2 id="Example" name="Example">例</h2>

<div id="offsetContainer" style="margin: 40px 50px 50px; background-color: rgb(255, 255, 204); border: 4px dashed black; color: black; position: relative; display: inline-block;">
<div id="idDiv" style="margin: 24px 29px; border: 24px black solid; padding: 0px 28px; width: 199px; height: 102px; overflow: auto; background-color: white; font-size: 13px!important; font-family: Arial, sans-serif;">
<p id="PaddingTopLabel" style="text-align: center; font-style: italic; font-weight: bold; font-size: 13px!important; font-family: Arial, sans-serif; margin: 0px;">padding-top</p>

<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

<p id="PaddingBottomLabel" style="text-align: center; font-style: italic; font-weight: bold; font-size: 13px!important; font-family: Arial, sans-serif; margin: 0px;">padding-bottom</p>
</div>
<strong>Left</strong> <strong>Top</strong> <strong style="color: blue; font-family: arial,sans-serif; font-size: 13px!important; font-weight: bold; left: 370px; position: absolute; top: 85px;">Right</strong> <strong style="color: blue; font-family: arial,sans-serif; font-size: 13px!important; font-weight: bold; left: 164px; position: absolute; top: 225px;">Bottom</strong> <em>margin-top</em> <em>margin-bottom</em> <em>border-top</em> <em>border-bottom</em></div>

<p><img alt="Image:scrollHeight.png" class="internal" src="/@api/deki/files/840/=ScrollHeight.png"></p>

<h2 id="Problems_and_solutions" name="Problems_and_solutions">問題と解決方法</h2>

<h3 id="要素が完全にスクロールされたかどうかを判定する">要素が完全にスクロールされたかどうかを判定する</h3>

<p>次の等式は、要素がスクロールの終点にあると <code>true</code> になり、それ以外は <code>false</code> になります。</p>

<pre class="syntaxbox notranslate">element.scrollHeight - element.scrollTop === element.clientHeight
</pre>

<p>コンテナーは、スクロールしないがオーバーフローする子要素を持つ場合、次の条件式はコンテナーがスクロールできるかどうかを判定します。</p>

<pre class="syntaxbox notranslate">window.getComputedStyle(element).overflowY === 'visible'
window.getComputedStyle(element).overflowY !== 'hidden'
</pre>

<h2 id="scrollHeight_Demo" name="scrollHeight_Demo">scrollHeight のデモ</h2>

<p>{{domxref("GlobalEventHandlers/onscroll", "onscroll")}} イベントに関連付けることで、この等価性はユーザーがテキストを読んだかどうかを判断するのに役立ちます ({{domxref("element.scrollTop")}} および {{domxref("element.clientHeight")}} プロパティも参照してください）。例：</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;form name="registration"&gt;
  &lt;p&gt;
    &lt;textarea id="rules"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at laoreet magna.
Aliquam erat volutpat. Praesent molestie, dolor ut eleifend aliquam, mi ligula ultrices sapien, quis cursus
neque dui nec risus. Duis tincidunt lobortis purus eu aliquet. Quisque in dignissim magna. Aenean ac lorem at
velit ultrices consequat. Nulla luctus nisi ut libero cursus ultrices. Pellentesque nec dignissim enim. Phasellus
ut quam lacus, sed ultricies diam. Vestibulum convallis rutrum dolor, sit amet egestas velit scelerisque id.
Proin non dignissim nisl. Sed mi odio, ullamcorper eget mattis id, malesuada vitae libero. Integer dolor lorem,
mattis sed dapibus a, faucibus id metus. Duis iaculis dictum pulvinar. In nisi nibh, dapibus ac blandit at, porta
at arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent
dictum ipsum aliquet erat eleifend sit amet sollicitudin felis tempus. Aliquam congue cursus venenatis. Maecenas
luctus pellentesque placerat. Mauris nisl odio, condimentum sed fringilla a, consectetur id ligula. Praesent sem
sem, aliquet non faucibus vitae, iaculis nec elit. Nullam volutpat, lectus et blandit bibendum, nulla lorem congue
turpis, ac pretium tortor sem ut nibh. Donec vel mi in ligula hendrerit sagittis. Donec faucibus viverra fermentum.
Fusce in arcu arcu. Nullam at dignissim massa. Cras nibh est, pretium sit amet faucibus eget, sollicitudin in
ligula. Vivamus vitae urna mauris, eget euismod nunc. Aenean semper gravida enim non feugiat. In hac habitasse
platea dictumst. Cras eleifend nisl volutpat ante condimentum convallis. Donec varius dolor malesuada erat
consequat congue. Donec eu lacus ut sapien venenatis tincidunt. Quisque sit amet tellus et enim bibendum varius et
a orci. Donec aliquet volutpat scelerisque. Proin et tortor dolor. Ut aliquet, dolor a mattis sodales, odio diam
pulvinar sem, egestas pretium magna eros vitae felis. Nam vitae magna lectus, et ornare elit. Morbi feugiat, ipsum
ac mattis congue, quam neque mollis tortor, nec mollis nisl dolor a tortor. Maecenas varius est sit amet elit
interdum quis placerat metus posuere. Duis malesuada justo a diam vestibulum vel aliquam nisi ornare. Integer
laoreet nisi a odio ornare non congue turpis eleifend. Cum sociis natoque penatibus et magnis dis parturient montes,
nascetur ridiculus mus. Cras vulputate libero sed arcu iaculis nec lobortis orci fermentum.
    &lt;/textarea&gt;
  &lt;/p&gt;
  &lt;p&gt;
    &lt;input type="checkbox" id="agree" name="accept" /&gt;
    &lt;label for="agree"&gt;I agree&lt;/label&gt;
    &lt;input type="submit" id="nextstep" value="Next" /&gt;
  &lt;/p&gt;
&lt;/form&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css notranslate">#notice {
  display: inline-block;
  margin-bottom: 12px;
  border-radius: 5px;
  width: 600px;
  padding: 5px;
  border: 2px #7FDF55 solid;
}

#rules {
  width: 600px;
  height: 130px;
  padding: 5px;
  border: #2A9F00 solid 2px;
  border-radius: 5px;
}</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js notranslate">function checkReading () {
  if (checkReading.read) {
    return;
  }
  checkReading.read = this.scrollHeight - this.scrollTop === this.clientHeight;
  document.registration.accept.disabled = document.getElementById("nextstep").disabled = !checkReading.read;
  checkReading.noticeBox.innerHTML = checkReading.read ? "Thank you." : "Please, scroll and read the following text.";
}

onload = function () {
  var oToBeRead = document.getElementById("rules");
  checkReading.noticeBox = document.createElement("span");
  document.registration.accept.checked = false;
  checkReading.noticeBox.id = "notice";
  oToBeRead.parentNode.insertBefore(checkReading.noticeBox, oToBeRead);
  oToBeRead.parentNode.insertBefore(document.createElement("br"), oToBeRead);
  oToBeRead.onscroll = checkReading;
  checkReading.call(oToBeRead);
}</pre>

<p>{{EmbedLiveSample('scrollHeight_Demo', '640', '400')}}</p>

<h2 id="Specification" name="Specification">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("CSSOM View", "#dom-element-scrollheight", "Element.scrollHeight")}}</td>
   <td>{{Spec2("CSSOM View")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Element.scrollHeight")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="https://docs.microsoft.com/en-us/previous-versions//hh781509(v=vs.85)">MSDN: Measuring Element Dimension and Location with CSSOM in Windows Internet Explorer 9</a></li>
 <li>{{domxref("Element.clientHeight")}}</li>
 <li>{{domxref("HTMLElement.offsetHeight")}}</li>
 <li><a href="/ja/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements">要素の寸法の決定</a></li>
</ul>
