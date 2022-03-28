---
title: Element.scrollHeight
slug: Web/API/Element/scrollHeight
tags:
  - API
translation_of: Web/API/Element/scrollHeight
---
<p>{{ APIRef("DOM") }}</p>

<p><strong><code>Element.scrollHeight</code></strong> 这个只读属性是一个元素内容高度的度量，包括由于溢出导致的视图中不可见内容。</p>

<p><code>scrollHeight </code>的值等于该元素在不使用滚动条的情况下为了适应视口中所用内容所需的最小高度。 没有垂直滚动条的情况下，scrollHeight值与元素视图填充所有内容所需要的最小值{{domxref("Element.clientHeight", "clientHeight")}}相同。包括元素的padding，但不包括元素的border和margin。scrollHeight也包括 {{cssxref("::before")}} 和 {{cssxref("::after")}}这样的伪元素。</p>

<div class="note">
<p>属性将会对值四舍五入取整。如果需要小数值，使用<span style="line-height: 1.5;">{{ domxref("Element.getBoundingClientRect()") }}.</span></p>
</div>

<h2 id="Syntax_and_values" name="Syntax_and_values">语法</h2>

<pre class="eval">var <em>intElemScrollHeight</em> = document.getElementById(<em>id_attribute_value</em>).scrollHeight;
</pre>

<p><em>intElemScrollHeight</em><span style="line-height: 1.5;"> 存储着与元素scrollHeight像素值对应的一个整数。scrollHeight是一个只读属性。</span></p>

<h2 id="Example" name="Example">示例</h2>

<div id="offsetContainer" style="margin: 26px 0px; border: 4px dashed black; left: 260px; color: black; position: absolute; background-color: rgb(255, 255, 204);">
<div id="idDiv" style="margin: 24px 29px; padding: 0px 28px; border: 24px solid black; width: 199px; height: 102px; overflow: auto; font-family: Arial, sans-serif; font-size: 13px !important; background-color: white;">
<p id="PaddingTopLabel" style="margin: 0px; text-align: center; font-family: Arial, sans-serif; font-size: 13px !important; font-style: italic; font-weight: bold;">padding-top</p>

<p>Gentle, individualistic and very loyal, Birman cats fall between Siamese and Persian in character. If you admire cats that are non aggressive, that enjoy being with humans and tend to be on the quiet side, you may well find that Birman cats are just the felines for you.</p>

<p><span style="float: right;"><img alt="Image:BirmanCat.jpg" class="internal" src="/@api/deki/files/44/=BirmanCat.jpg"></span>All Birmans have colorpointed features, dark coloration of the face, ears, legs and tail.</p>

<p>Cat image and text coming from <a class="external" href="http://www.best-cat-art.com/">www.best-cat-art.com</a></p>

<p id="PaddingBottomLabel" style="margin: 0px; text-align: center; font-family: Arial, sans-serif; font-size: 13px !important; font-style: italic; font-weight: bold;">padding-bottom</p>
</div>
<strong style="color: blue; font-family: Arial,sans-serif; font-size: 13px !important; font-weight: bold; left: -32px; position: absolute; top: 85px;">Left</strong><strong style="color: blue; font-family: Arial,sans-serif; font-size: 13px !important; font-weight: bold; left: 170px; position: absolute; top: -24px;">Top</strong><strong style="color: blue; font-family: Arial,sans-serif; font-size: 13px !important; font-weight: bold; left: 370px; position: absolute; top: 85px;">Right</strong><strong style="color: blue; font-family: Arial,sans-serif; font-size: 13px !important; font-weight: bold; left: 164px; position: absolute; top: 203px;">Bottom</strong><em>margin-top</em><em>margin-bottom</em><em>border-top</em><em>border-bottom</em><span class="comment">{{ mediawiki.external('if IE') }}&gt;&lt;span id="MrgLeft" style="position: _fckstyle="position: _fckstyle="position: absolute; left: 8px; top: 65px; font: bold 13px Arial, sans-serif !important; writing-mode: tb-rl;"&gt;margin-left&lt;/span&gt;&lt;span id="BrdLeft" style="position: absolute; left: 33px; top: 65px; color: white; font: bold 13px Arial, sans-serif !important; writing-mode: tb-rl;"&gt;border-left&lt;/span&gt;&lt;span id="PdgLeft" style="position: absolute; left: 55px; top: 65px; font: bold 13px Arial, sans-serif !important; writing-mode: tb-rl;"&gt;padding-left&lt;/span&gt;&lt;span id="PdgRight" style="position: absolute; left: 275px; top: 60px; color: black; font: bold 13px Arial, sans-serif !important; writing-mode: tb-rl; white-space: nowrap;"&gt;padding-right&lt;/span&gt;&lt;span id="BrdRight" style="position: absolute; left: 310px; top: 65px; color: white; font: bold 13px Arial, sans-serif !important; writing-mode: tb-rl;"&gt;border-right&lt;/span&gt;&lt;span id="MrgRight" style="position: absolute; left: 340px; top: 65px; font: bold 13px Arial, sans-serif !important; writing-mode: tb-rl;"&gt;margin-right&lt;/span&gt;&lt;!{{ mediawiki.external('endif') }}</span></div>

<p style="margin-top: 270px;"><img alt="Image:scrollHeight.png" class="internal" src="/@api/deki/files/840/=ScrollHeight.png"></p>

<h2 id="问题与解决方案">问题与解决方案</h2>

<h3 id="判定元素是否滚动到底">判定元素是否滚动到底</h3>

<p>如果元素滚动到底，下面等式返回true，没有则返回false.</p>

<pre class="syntaxbox">element.scrollHeight - element.scrollTop === element.clientHeight
</pre>

<p>当容器不滚动但有溢出的子容器时，这些检查可以确定容器能否滚动：</p>

<pre>window.getComputedStyle(element).overflowY === 'visible' window.getComputedStyle(element).overflowY !== 'hidden'
</pre>

<h2 id="scrollHeight_Demo" name="scrollHeight_Demo">scrollHeight 演示</h2>

<p>监听 <code><a href="/zh-CN/docs/Web/API/GlobalEventHandlers/onscroll">onscroll</a></code> 事件，这个等式可以用来判定用户是否阅读过文本。（参考<span style="line-height: 1.5;"> </span><code style="font-style: normal; line-height: 1.5;"><a href="/en-US/docs/DOM/element.scrollTop" title="en-US/docs/DOM/element.scrollTop">element.scrollTop</a></code><span style="line-height: 1.5;"> 和 </span><code style="font-style: normal; line-height: 1.5;"><a href="/en-US/docs/DOM/element.clientHeight" title="en-US/docs/DOM/element.clientHeight">element.clientHeight</a></code>属性）。例如： </p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;form name="registration"&gt;
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
    &lt;input type="checkbox" name="accept" id="agree" /&gt;
    &lt;label for="agree"&gt;I agree&lt;/label&gt;
    &lt;input type="submit" id="nextstep" value="Next" /&gt;
  &lt;/p&gt;
&lt;/form&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">#notice {
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

<pre class="brush: js">function checkReading () {
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

<p>{{ EmbedLiveSample('scrollHeight_Demo', '640', '400') }}</p>

<h2 id="Specification" name="Specification" style="line-height: 30px;">说明</h2>

<p><code>scrollHeight</code> MSIE's <abbr title="Dynamic HyperText Markup Language">DHTML</abbr> 对象模型的一部分. <code>scrollHeight</code> 是以下说明的一部分。: {{SpecName("CSSOM View")}}.</p>

<h2 id="Supported" name="Supported">浏览器兼容性</h2>

<p>{{Compat("api.Element.scrollHeight")}}</p>

<h2 id="See_Also" name="See_Also">参考资料</h2>

<ul>
 <li><a href="https://docs.microsoft.com/en-us/previous-versions//hh781509(v=vs.85)">MSDN: Measuring Element Dimension and Location with CSSOM in Windows Internet Explorer 9</a></li>
 <li>{{domxref("Element.clientHeight")}}</li>
 <li>{{domxref("Element.offsetHeight")}}</li>
 <li><a href="/en-US/docs/Determining_the_dimensions_of_elements" title="en/Determining_the_dimensions_of_elements">Determining the dimensions of elements</a></li>
</ul>
