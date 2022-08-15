---
title: GamepadButton
slug: Web/API/GamepadButton
---
<div>{{APIRef("Gamepad API")}}</div>

<p><strong><code>GamepadButton</code></strong> 接口定义了在一个手柄或其他控制器的唯一的一个按键，允许访问不同控制器设备可用类型的按钮的当前状态。</p>

<p><code>GamepadButton</code> 对象是由 {{domxref("Gamepad")}} 接口的 <code>buttons</code> 属性返回的可查询任意值的数组返回的。</p>

<div class="note">
<p><strong>注：</strong>上述情况是在 Firefox Gecko 28 及以上的；Chrome 和较早版本的 Firefox 访问此属性时仍然会返回一个双精浮点值的数组。</p>
</div>

<h2 id="属性">属性</h2>

<dl>
 <dt>{{domxref("GamepadButton.value")}} {{readonlyInline}}</dt>
 <dd>一个用来表示按钮当前状态的双精浮点值，比如说许多现代控制器都有的扳机键。其值被规范至范围 0.0 —1.0 之间，其中 0.0 表示按钮没有被按下，而 1.0 表示按钮被完全按下 (按到底)。</dd>
 <dt>{{domxref("GamepadButton.pressed")}} {{readonlyInline}}</dt>
 <dd>一个指示当前按钮是被按下 (<code>true</code>) 还是没有被按下 (<code>false</code>) 的布尔值。</dd>
</dl>

<h2 id="示例">示例</h2>

<p>接下来的代码来自于我 (文作者) 的 Gamepad API 按钮示例 (你可以<a href="http://chrisdavidmills.github.io/gamepad-buttons/">在线查看示例</a>，并在 Github 上<a href="https://github.com/chrisdavidmills/gamepad-buttons/tree/master">查找源代码</a>。) 注意代码分支——在 Chrome 中{{domxref("Navigator.getGamepads")}} 需要一个 <code>webkit</code> 前缀并且按钮值被存储为一个双精浮点值的数组，然而在 Firefox 中 {{domxref("Navigator.getGamepads")}} 不需要前缀，且按钮值被存储为 {{domxref("GamepadButton")}} 对象数组；其中有我们需要的  {{domxref("GamepadButton.value")}} 或 {{domxref("GamepadButton.pressed")}} 属性，这取决于他们是什么类型的按钮。在这个简单的示例中我只是允许了它们。</p>

<pre class="brush: js">function gameLoop() {
  if(navigator.webkitGetGamepads) {
    var gp = navigator.webkitGetGamepads()[0];

    if(gp.buttons[0] == 1) {
      b--;
    } else if(gp.buttons[1] == 1) {
      a++;
    } else if(gp.buttons[2] == 1) {
      b++;
    } else if(gp.buttons[3] == 1) {
      a--;
    }
  } else {
    var gp = navigator.getGamepads()[0];

    if(gp.buttons[0].value &gt; 0 || gp.buttons[0].pressed == true) {
      b--;
    } else if(gp.buttons[1].value &gt; 0 || gp.buttons[1].pressed == true) {
      a++;
    } else if(gp.buttons[2].value &gt; 0 || gp.buttons[2].pressed == true) {
      b++;
    } else if(gp.buttons[3].value &gt; 0 || gp.buttons[3].pressed == true) {
      a--;
    }
  }

  ball.style.left = a*2 + "px";
  ball.style.top = b*2 + "px";

  var start = rAF(gameLoop);
};</pre>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>

<p>{{Compat("api.GamepadButton")}}</p>

<h2 id="另请参阅">另请参阅</h2>

<p><a href="/en-US/docs/Web/Guide/API/Gamepad">使用 Gamepad API</a></p>
