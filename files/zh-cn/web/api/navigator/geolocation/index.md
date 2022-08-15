---
title: Navigator.geolocation
slug: Web/API/Navigator/geolocation
---
<p>{{securecontext_header}}{{APIRef("Geolocation API")}}</p>

<p><strong><code>Navigator.geolocation</code></strong> 只读属性返回一个 {{domxref("Geolocation")}} 对象，通过这个对象可以访问到设备的位置信息。使网站或应用可以根据用户的位置提供个性化结果。</p>

<div class="note">
<p><strong>注意：</strong>出于安全考虑，当网页请求获取用户位置信息时，用户会被提示进行授权。注意不同浏览器在请求权限时有不同的策略和方式。Windows 10 在未开启定位的情况下无法获取位置</p>
</div>

<h2 id="语法">语法</h2>

<pre class="brush: js"><em>geo</em> = <em>navigator</em>.geolocation
</pre>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>



{{Compat("api.Navigator.geolocation")}}

<h2 id="另请参阅">另请参阅</h2>

<ul>
 <li><a href="/zh-CN/docs/WebAPI/Using_geolocation">使用地理位置定位</a></li>
</ul>
