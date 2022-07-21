---
title: 检测设备方向
slug: Web/Events/Detecting_device_orientation
translation_of: Web/Events/Detecting_device_orientation
tags:
  - API
  - Device Orientation
  - Intermediate
  - Mobile
  - Motion
  - Orientation
  - Reference
---
<p>{{SeeCompatTable}}</p>

<p>有越来越多的基于 web 的设备能够确定它们的方向; 也就是说，它们可以报告数据以指示基于重力方向的方向改变。特别地，手持设备如手机可以利用这些信息以自动旋转屏幕，保持内容直立，当设备旋转至横屏时（宽度大于高度），提供网页内容的横屏视图。</p>

<p>有两种 Javascript 事件负责处理设备方向信息。第一种是{{domxref("DeviceOrientationEvent")}}，它会在加速度传感器检测到设备在方向上产生变化时触发。通过处理该事件传来的数据信息，让交互式地响应用户移动设备旋转和仰角变化成为可能。</p>

<p>第二种是{{domxref("DeviceMotionEvent")}}，它会在加速度发生改变时触发。跟{{domxref("DeviceOrientationEvent")}}不同，{{domxref("DeviceMotionEvent")}}监听的是相应方向上加速度的变化。传感器通常都具有监听{{domxref("DeviceMotionEvent")}}的能力，包括笔记本中用于保护移动中的存储设备的传感器。{{domxref("DeviceOrientationEvent")}}事件更多见于移动设备中。</p>

<h2 id="处理方向（orientation）事件">处理方向（orientation）事件</h2>

<p>要接收设备方向变化信息，只需要监听{{ event("deviceorientation") }}事件：</p>

<div class="blockIndicator note">
<p><strong>备注：</strong> <a href="https://github.com/dorukeker/gyronorm.js">gyronorm.js</a> is a polyfill for normalizing the accelerometer and gyroscope data on mobile devices. This is useful for overcoming some of the differences in device support for device orientation.</p>
</div>

<pre class="brush: js">window.addEventListener("deviceorientation", handleOrientation, true);
</pre>

<p>注册完事件监听处理函数后（对应这个例子中的 handleOrientation），监听函数会定期地接收到最新的设备方向数据。</p>

<p>方向事件对象中包含四个值：</p>

<p>{{ domxref("DeviceOrientationEvent.absolute") }}</p>

<p>{{ domxref("DeviceOrientationEvent.alpha") }}</p>

<p>{{ domxref("DeviceOrientationEvent.beta") }}</p>

<p>{{ domxref("DeviceOrientationEvent.gamma") }}</p>

<p>下面是一个事件处理函数的例子：</p>

<pre class="brush: js">function handleOrientation(orientData) {
  var absolute = orientData.absolute;
  var alpha = orientData.alpha;
  var beta = orientData.beta;
  var gamma = orientData.gamma;

  // Do stuff with the new orientation data
}
</pre>

<h3 id="相关值解释">相关值解释</h3>

<p>关于每一个轴的记录值表示的是相对于标准的坐标系，设备在某一个给定轴上的旋转量。<a href="/en-US/DOM/Orientation_and_motion_data_explained">Orientation and motion data explained</a> 这篇文章有更详细的描述，下面是对这篇文章的总结。</p>

<ul>
 <li>{{ domxref("DeviceOrientationEvent.alpha") }} 表示设备沿 z 轴上的旋转角度，范围为 0~360。</li>
 <li>{{ domxref("DeviceOrientationEvent.beta") }} 表示设备在 x 轴上的旋转角度，范围为-180~180。它描述的是设备由前向后旋转的情况。</li>
 <li>{{ domxref("DeviceOrientationEvent.gamma") }} 表示设备在 y 轴上的旋转角度，范围为-90~90。它描述的是设备由左向右旋转的情况。</li>
</ul>

<h3 id="例子">例子</h3>

<p>这个例子会成功运行在支持检测自己方向的设备中的支持{{event("deviceorientation")}} 事件的浏览器中。</p>

<p>让我们想象一下有一个球在花园中：</p>

<pre class="brush: html">&lt;div class="garden"&gt;
  &lt;div class="ball"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;pre class="output"&gt;&lt;/pre&gt;</pre>

<p>花园只有 200px 宽（很小对吧），球在中央：</p>

<pre class="brush: css">.garden {
  position: relative;
  width : 200px;
  height: 200px;
  border: 5px solid #CCC;
  border-radius: 10px;
}

.ball {
  position: absolute;
  top   : 90px;
  left  : 90px;
  width : 20px;
  height: 20px;
  background: green;
  border-radius: 100%;
}</pre>

<p>现在，如果我们移动设备，球将随之移动：</p>

<pre class="brush: js">var ball   = document.querySelector('.ball');
var garden = document.querySelector('.garden');
var output = document.querySelector('.output');

var maxX = garden.clientWidth  - ball.clientWidth;
var maxY = garden.clientHeight - ball.clientHeight;

function handleOrientation(event) {
  var x = event.beta;  // In degree in the range [-180,180]
  var y = event.gamma; // In degree in the range [-90,90]

  output.innerHTML  = "beta : " + x + "\n";
  output.innerHTML += "gamma: " + y + "\n";

  // Because we don't want to have the device upside down
  // We constrain the x value to the range [-90,90]
  if (x &gt;  90) { x =  90};
  if (x &lt; -90) { x = -90};

  // To make computation easier we shift the range of
  // x and y to [0,180]
  x += 90;
  y += 90;

  // 10 is half the size of the ball
  // It center the positioning point to the center of the ball
  ball.style.top  = (maxX*x/180 - 10) + "px";
  ball.style.left = (maxY*y/180 - 10) + "px";
}

window.addEventListener('deviceorientation', handleOrientation);</pre>

<p>输出结果：</p>

<p>在{{LiveSampleLink("Orientation_example", "这里")}}以新窗口打开此示例；因为有些浏览器中的 {{event("deviceorientation")}} 事件不支持跨域。</p>

<div>{{EmbedLiveSample('Orientation_example', '230', '260')}}</div>

<div class="warning">
<p><strong>警告：</strong> Chrome 和 Firefox 处理角度的机制不同，所以某些轴上的方向是相反的。</p>
</div>

<h2 id="处理移动（motion）事件">处理移动（motion）事件</h2>

<p>移动事件的处理跟方向事件是一样的，除了他们有自己的事件名：{{ event("devicemotion") }}</p>

<pre class="brush: js">window.addEventListener("devicemotion", handleMotion, true);</pre>

<p>真正不同的是做为参数传递给<em>HandleMotion 函数的</em>{{ domxref("DeviceMotionEvent") }}对象所包含的信息。</p>

<p>这个对象包含四个属性：</p>

<ul>
 <li>{{ domxref("DeviceMotionEvent.acceleration") }}</li>
 <li>{{ domxref("DeviceMotionEvent.accelerationIncludingGravity") }}</li>
 <li>{{ domxref("DeviceMotionEvent.rotationRate") }}</li>
 <li>{{ domxref("DeviceMotionEvent.interval") }}</li>
</ul>

<h3 id="相关值解释_2">相关值解释</h3>

<p>{{ domxref("DeviceMotionEvent") }}对象提供给 web 开发者设备在位置和方向上的改变速度的相关信息。这些变化信息是通过三个轴来体现的。（<a href="/en-US/docs/Web/Guide/DOM/Events/Orientation_and_motion_data_explained">Orientation and motion data explained</a>有更详细的说明。）</p>

<p><a href="/en-US/docs/Web/API/DeviceMotionEvent.acceleration"><code>acceleration</code></a> 和 <a href="/en-US/docs/Web/API/DeviceMotionEvent.accelerationIncludingGravity"><code>accelerationIncludingGravity</code></a>，都包含下面三个轴：</p>

<ul>
 <li><code>x</code>: 西向东</li>
 <li><code>y</code>: 南向北</li>
 <li><code>z</code>: 垂直地面</li>
</ul>

<p>对于 <code><a href="/en-US/docs/Web/API/DeviceMotionEvent.rotationRate">rotationRate</a></code> ，情况有点不同；三个轴的信息对应着以下三种情况：</p>

<ul>
 <li><code>alpha</code>: 设备沿着垂直于屏幕（对于桌面设备则是垂直于键盘）的轴的旋转速率</li>
 <li><code>beta</code>: 设备沿着屏幕（对于桌面设备则是键盘）左至右方向的轴的旋转速率 (桌面设备相对于键盘)</li>
 <li><code>gamma</code>: 设备沿着屏幕（对于桌面设备则是键盘）下至上方向的轴的旋转速率</li>
</ul>

<p>最后，<a href="/en-US/docs/Web/API/DeviceMotionEvent.interval"><code>interval</code></a> 表示的是从设备获取数据的间隔时间，单位是毫秒。</p>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>

{{Compat}}

<h2 id="参见">参见</h2>

<ul>
 <li>{{domxref("DeviceOrientationEvent")}}</li>
 <li>{{domxref("DeviceMotionEvent")}}</li>
 <li>The legacy <code><a href="/en-US/DOM/MozOrientation">MozOrientation</a></code> event.</li>
 <li><a href="/en-US/docs/Web/Guide/DOM/Events/Orientation_and_motion_data_explained">Orientation and motion data explained</a></li>
 <li><a href="/en-US/docs/Web/Guide/DOM/Events/Using_device_orientation_with_3D_transforms">Using deviceorientation in 3D Transforms</a></li>
</ul>
