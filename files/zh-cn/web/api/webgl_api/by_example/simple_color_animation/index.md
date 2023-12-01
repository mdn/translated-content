---
title: Simple color animation
slug: Web/API/WebGL_API/By_example/Simple_color_animation
---

{{PreviousNext("Learn/WebGL/By_example/Clearing_by_clicking","Learn/WebGL/By_example/Color_masking")}}

这是一个非常基础的{{Glossary("WebGL")}}色彩动画案例，通过定时器来逐秒填充不同的颜色来实现。

### 通过填充实现色彩动画

{{EmbedLiveSample("通过填充实现色彩动画",660,425)}}

本案例使用{{Glossary("WebGL")}}来实现简单的色彩动画和用户交互效果，用户可以通过按按钮来开始/暂停/重新开始动画。

我们把 {{Glossary("WebGL")}}函数放在一个定时循环器里 (`setInterval`)。通过监听点击事件来让用户开始/暂停动画。并通过定时器来循环执行绘制指令 (通常是逐帧动画，这次我们设置为逐秒动画)

```html
<p>一个色彩动画的简单 WebGl 程序</p>
<p>点击下面的按钮来开/关动画</p>
<canvas id="canvas-view">你的浏览器不支持 Html5 canvas</canvas>
<button id="animation-onoff">
  点我来
  <strong>[verb goes here]</strong>
  动画
</button>
```

```css
body {
  text-align: center;
}
canvas {
  display: block;
  width: 280px;
  height: 210px;
  margin: auto;
  padding: 0;
  border: none;
  background-color: black;
}
button {
  display: inline-block;
  font-size: inherit;
  margin: auto;
  padding: 0.6em;
}
```

```js
window.addEventListener(
  "load",
  function setupAnimation(evt) {
    "use strict";
    window.removeEventListener(evt.type, setupAnimation, false);

    // 定义一个变量来保存定时器，以播放动画
    var timer;

    // 点击事件处理器
    var button = document.querySelector("#animation-onoff");
    var verb = document.querySelector("strong");
    function startAnimation(evt) {
      button.removeEventListener(evt.type, startAnimation, false);
      button.addEventListener("click", stopAnimation, false);
      verb.innerHTML = "暂停";
      //设置一个循环来逐秒渲染动画
      timer = setInterval(drawAnimation, 1000);
      // 在用户点击完以后立即执行一次动画
      drawAnimation();
    }
    function stopAnimation(evt) {
      button.removeEventListener(evt.type, stopAnimation, false);
      button.addEventListener("click", startAnimation, false);
      verb.innerHTML = "开始";
      // 通过清除定时器来停止动画
      clearInterval(timer);
    }
    // 调用 stopAnimation() 来初始化按钮的事件处理器
    stopAnimation({ type: "click" });

    var gl;
    function drawAnimation() {
      if (!gl) {
        var canvas = document.getElementById("canvas-view");
        gl =
          canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        if (!gl) {
          clearInterval(timer);
          alert(
            "Failed to get WebGL context.\n" +
              "Your browser or device may not support WebGL.",
          );
          return;
        }
        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
      }

      // 使用辅助函数 得到随机颜色
      var color = getRandomColor();
      // 将随机颜色设置到 WebGL 渲染上下文的填充颜色上去
      gl.clearColor(color[0], color[1], color[2], 1.0);
      // 使用新设置的颜色来清除上下文
      gl.clear(gl.COLOR_BUFFER_BIT);
    }

    //获取随机颜色的辅助函数
    function getRandomColor() {
      return [Math.random(), Math.random(), Math.random()];
    }
  },
  false,
);
```

在 [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/simple-color-animation).上查看源码

{{PreviousNext("Learn/WebGL/By_example/Clearing_by_clicking","Learn/WebGL/By_example/Color_masking")}}
