---
title: 使用编程方法测试媒体查询
slug: Web/CSS/Media_Queries/Testing_media_queries
tags:
  - CSS
  - DOM
  - Event
  - Media Queries
  - Web
translation_of: Web/CSS/Media_Queries/Testing_media_queries
original_slug: Web/Guide/CSS/Testing_media_queries
---
<div>{{cssref}}</div>

<p>{{Glossary("DOM")}} 提供了通过编程方法来获得<a href="/zh-CN/docs/Web/CSS/Media_Queries">媒体查询</a>结果的特性。这是通过 {{domxref("MediaQueryList")}} 接口和它的方法来实现的。创建了 <code>MediaQueryList</code> 对象之后，就可以通过它来检查查询结果，或者设置事件监听器，在查询结果发生变化时自动接收到通知。</p>

<h2 id="创建媒体查询列表">创建媒体查询列表</h2>

<p>在获取查询结果前，首先要创建查询列表，也就是 <code>MediaQueryList</code> 对象来存放媒体查询。为了实现这个目的，可以使用 {{domxref("window.matchMedia")}} 方法。</p>

<p>举个例子，设置一个用来判断设备的旋转方向（横屏还是竖屏）的查询列表：</p>

<pre class="brush: js">var mediaQueryList = window.matchMedia("(orientation: portrait)");
</pre>

<h2 id="检查查询结果">检查查询结果</h2>

<p>一旦创建了媒体查询列表，你就可以通过检查它的 <code>matches</code> 属性来获取相应的查询结果，上述属性会直接返回查询结果：</p>

<pre class="brush: js">if (mediaQueryList.matches) {
  /* 设备的旋转方向为纵向 portrait */
} else {
  /* 设备的旋转方向不是纵向，也就是横向 landscape */
}
</pre>

<h2 id="接收查询提醒">接收查询提醒</h2>

<p>如果你需要持续观察查询结果值的变化情况，那么，注册一个<a href="/zh-CN/docs/Web/API/EventTarget/addEventListener">监听器</a>比手动检查查询结果要高效很多。要注册监听器，只要在 {{domxref("MediaQueryList")}} 对象上使用 <code>addListener()</code> 方法，并使用一个回调函数作为其参数。这样，就通过实现 {{domxref("MediaQueryListListener")}} 接口指定了一个监听器。每当查询结果发生变化，比如从 <code>true</code> 变为 <code>false</code> 时，就会调用一遍传入的回调函数。</p>

<pre class="brush: js">// 创建查询列表
const mediaQueryList = window.matchMedia("(orientation: portrait)");

// 定义回调函数
function handleOrientationChange(mql) {
  // ...
}

// 先运行一次回调函数
handleOrientationChange(mediaQueryList);

// 为查询列表注册监听器，同时将回调函数传给监听器
mediaQueryList.addListener(handleOrientationChange);
</pre>

<p>上述代码创建了一个屏幕方向的测试查询列表 <code>mediaQueryList</code>，并且添加了事件监听器。需要注意的是，当我们添加监听后，我们其实直接调用了一次监听。这会让我们的监听器以目前设备的屏幕方向来初始化判定代码。换句话说，如果我们代码中设定设备处于竖屏模式，而实际上它在启动时处于横屏模式，那么我们在后面的判定就会出现矛盾。</p>

<p>然后，我们就能在 <code>handleOrientationChange()</code> 方法中检查查询结果，比如，可以设置屏幕方向变化后的逻辑处理代码：</p>

<pre class="brush: js">function handleOrientationChange(evt) {
  if (evt.matches) {
    /* The viewport is currently in portrait orientation */
  } else {
    /* The viewport is currently in landscape orientation */
  }
}
</pre>

<h2 id="终止查询通知">终止查询通知</h2>

<p>如果不再需要再接收媒体查询值变化的相关通知，那么，只要调用 <code>MediaQueryList</code> 的 <code>removeListener()</code> 方法，就可以方便地移除监听：</p>

<pre class="brush: js">mediaQueryList.removeListener(handleOrientationChange);
</pre>

<h2 id="浏览器兼容性">浏览器兼容性</h2>

<h3 id="MediaQueryList_接口"><code>MediaQueryList</code> 接口</h3>



<p>{{Compat("api.MediaQueryList")}}</p>

<h2 id="另见">另见</h2>

<ul>
 <li><a href="/zh-CN/docs/CSS/Media_queries">Media queries</a></li>
 <li>{{domxref("window.matchMedia()") }}</li>
 <li>{{domxref("MediaQueryList") }}</li>
 <li>{{domxref("MediaQueryListListener") }}</li>
</ul>
