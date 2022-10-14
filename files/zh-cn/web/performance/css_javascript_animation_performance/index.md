---
title: CSS and JavaScript animation performance
slug: Web/Performance/CSS_JavaScript_animation_performance
---

对众多应用程序而言，动画对提供友好的用户体验有着关键的作用，我们有很多方式生成 web 动画，比如 CSS {{cssxref("transition","transitions")}}/{{cssxref("animation","animations")}} 或者 JavaScript 动画 (使用 {{domxref("Window.requestAnimationFrame","requestAnimationFrame()")}}).

在这篇文章中，我们分析 CSS 动画和 JavaScript 动画的性能差异

## CSS 过渡和动画

CSS 中过渡和动画都可以用于编写动画，它们都有各自的使用场景：

- CSS {{cssxref("transition","transitions")}} 提供了一个简单的的方式去创造当前样式与结束状态样式之间的动画，比如一个 button 的普通状态和 hover 状态。尽管一个元素处于过渡状态中，新的过渡动画也会立即从当前样式开始，而不是直接跳转到 CSS 的最终状态。浏览 [Using CSS transitions](/zh-CN/docs/Web/Guide/CSS/Using_CSS_transitions) 以获取更多细节。
- 另一方面，CSS {{cssxref("animation","animations")}}, 允许开发者去通过一个初始状态属性值集合与最终状态属性值集合创造动画，而不是单单的初始和最终状态。CSS animations 由两部分组成：一个描述 CSS 动画的样式，以及一个指定动画初始状态，中间状态以及最终状态样式的关键帧集合。浏览 [Using CSS animations](/zh-CN/docs/Web/Guide/CSS/Using_CSS_animations) 以获取更多细节。

就性能方面来说，无论通过 CSS animations 还是 transitions 创造动画，都没有区别。在这篇文章中二者都归类为基于 CSS 的动画。

## requestAnimationFrame

{{domxref("Window.requestAnimationFrame","requestAnimationFrame()")}}提供了一种用 JavaScript 代码制作动画的高效方式。本方法的回调函数在绘制下一帧之前由浏览器调用。与需要一个延迟参数的{{domxref("WindowTimers.setTimeout","setTimeout()")}}/{{domxref("WindowTimers.setInterval","setInterval()")}}相比，requestAnimationFrame() 效率高得多。开发人员可以在 requestAnimationFrame 回调函数中通过简单地改变元素的样式 (或者更新画布绘制，等等) 来创建动画。

> **备注：** 像 CSS 转换和动画一样，当页面在后台运行时，requestAnimationFrame() 会暂停。

更多细节请阅读 [animating with JavaScript from setinterval to requestAnimationFrame](https://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/).

## 性能对比：<br>transitions vs. requestAnimationFrame

事实上，大多数场景下，基于 CSS 的 动画几乎是跟 JavaScript 动画表现一致 — 至少在 FireFox 上是如此。一些基于 Javascript 的动画库，像 [GSAP](http://greensock.com/gsap) and [Velocity.JS](http://velocityjs.org/), 甚至声称他们在性能上可以做得比 [native CSS transitions/animations](https://css-tricks.com/myth-busting-css-animations-vs-javascript/) （原生的 CSS transitions/animations）更好。这是可能的，因为在重绘事件发生之前，CSS transitions/animations 在主的 UI 线程仅仅是重新采集元素的样式，这跟通过 `requestAnimationFrame()` 回调，获取重新采集元素样式是一样的，也是在下一次重绘之前触发。假如二者都是在主 UI 线程创建的动画，那它们在性能方面没有差异。

在这一节，我们将会使用 FireFox 通过一个性能测试，去看看哪种动画方式更好

### 启用 FPS 工具

在进行示例之前，请启用 FPS 工具先查看当前帧速率：

1. 在地址栏中，输入 about:config;点击" I’ll be careful, I promise!"按钮，以输入配置屏幕。
    ![](pic1.png)
2. 在搜索栏中搜索 layers.acceleration.draw-fps 首选项
3. 双击该条目将值设置为 true。.现在您可以在 Firefox 窗口的左上角看到三个紫色的框。第一个框代表 FPS。
    ![](pic2.png)

### 运行性能测试

开始在下面的测试中，总共 1000 个{{htmlelement("div")}}元素通过 css 动画进行坐标转换。

{{JSFiddleEmbed("https://jsfiddle.net/zt94oew2/1/","","480")}}

动画可以通过点击"toggle"按钮切换到 `requestAnimationFrame()` 。

试着两个都运行一下，比较两者的 FPS 值（第一个紫色框），可以看到 CSS 动画和`requestAnimationFrame() 是非常接近的`。

### 脱离主线程的动画

即使是上面给出的测试结果，我们仍然认为 CSS 动画是更好的选择。为什么？关键是只要动画涉及的属性不引起 reflow（重新布局）（参考[CSS triggers](http://csstriggers.com/)获得更多信息），我们可以把采用操作移出主线程。最常见的属性是 CSS transform。如果一个元素被提升为一个[layer](https://wiki.mozilla.org/Gecko:Overview#Graphics)，transform 属性动画就可以在 GPU 中进行。这意味着更好地性能，特别实在移动设备上。在[OffMainThreadCompositing](https://wiki.mozilla.org/Platform/GFX/OffMainThreadCompositing)上寻找更多细节。

要在火狐中激活 OMTA (脱离主线程的动画) ，你需要前往*about:config 然后搜索* `layers.offmainthreadcomposition.async-animations` 。切换到 `true`.

![](pic3.png)

激活之后，再次运行上面的例子。可以看到 CSS 动画的帧速率现在高多了。

> **备注：** 在 Nightly/Developer 版本，你可能看到 OMTA 缺省就是激活的，所以你需要反过来测试。（先测试激活 OMTA 的情况，然后是没有激活的情况）

## 总结

浏览器可以优化渲染流程。总之，我们总是可以尽可能通过 CSS 过渡/动画创建动画。如果你的动画真的很复杂，你可能不得不依赖于 JavaScript 动画。
