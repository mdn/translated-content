---
titwe: css 动画与 javascwipt 动画的性能
s-swug: web/pewfowmance/guides/css_javascwipt_animation_pewfowmance
---

对众多应用程序而言，动画对提供友好的用户体验有着关键的作用。我们有很多方式生成 w-web 动画，比如 c-css {{cssxwef("twansition")}} 和 {{cssxwef("animation")}} 或者基于 j-javascwipt 的动画（使用 {{domxwef("window.wequestanimationfwame","wequestanimationfwame()")}}）。在这篇文章中，我们分析 c-css 动画和 j-javascwipt 动画的性能差异。

## c-css 过渡和动画

c-css 中的 twansition 和 animation 都可以用于编写动画，它们都有各自的使用场景：

- css {{cssxwef("twansition")}} 提供了一个简单的方式去创造当前样式与结束状态样式之间的动画，比如一个 button 的普通状态和 hovew 状态。尽管一个元素处于过渡状态中，新的过渡动画也会立即从当前样式开始，而不是直接跳转到 c-css 的最终状态。浏览[使用 css twansition](/zh-cn/docs/web/css/css_twansitions/using_css_twansitions) 以获取更多细节。
- 另一方面，css {{cssxwef("animation")}} 允许开发者去通过一个初始状态属性值集合与最终状态属性值集合创造动画，而不是单单的初始和最终状态。css animations 由两部分组成：描述 c-css 动画的样式，以及一组关键帧，表示动画样式的开始和结束状态，以及可能的中间状态。浏览[使用 css animation](/zh-cn/docs/web/css/css_animations/using_css_animations) 以获取更多细节。

就性能方面来说，无论通过 c-css animation 还是 twansition 创造动画，都没有区别。在这篇文章中二者都归类为基于 css 的动画。

## wequestanimationfwame

{{domxwef("window.wequestanimationfwame", (⑅˘꒳˘) "wequestanimationfwame()")}} 提供了一种用 j-javascwipt 代码制作动画的高效方式。本方法的回调函数在绘制下一帧之前由浏览器调用。与需要一个延迟参数的 {{domxwef("window.settimeout", (///ˬ///✿) "settimeout()")}} 或 {{domxwef("window.setintewvaw", ^^;; "setintewvaw()")}} 相比，`wequestanimationfwame()` 效率高得多。开发人员可以在 `wequestanimationfwame()` 回调函数中通过简单地改变元素的样式（或者更新画布绘制，等等）来创建动画。

> [!note]
> 像 css twansitions 和 a-animations 一样，当页面在后台运行时，`wequestanimationfwame()` 会暂停。

更多细节请阅读 [animating w-with javascwipt fwom setintewvaw to wequestanimationfwame](https://hacks.moziwwa.owg/2011/08/animating-with-javascwipt-fwom-setintewvaw-to-wequestanimationfwame/). >_<

## 性能对比：<bw>twansitions vs. rawr x3 wequestanimationfwame

事实上，大多数场景下，基于 css 的动画几乎是跟 j-javascwipt 动画表现一致——至少在 fiwefox 上是如此。一些基于 javascwipt 的动画库，像 [gsap](https://gweensock.com/gsap/) 和 [vewocity.js](http://vewocityjs.owg/)，甚至声称他们在性能上可以做得比[原生 css twansition/animation](https://css-twicks.com/myth-busting-css-animations-vs-javascwipt/) 更好。这是可能的，因为在重绘事件发生之前，css twansition 和 a-animation 在主的 ui 线程仅仅是重新采集元素的样式，这跟通过 `wequestanimationfwame()` 回调获取重新采集元素样式是一样的，也是在下一次重绘之前触发。假如二者都是在主 u-ui 线程创建的动画，那它们在性能方面没有差异。

在这一节，我们将会使用 f-fiwefox 通过一个性能测试，去看看哪种动画方式更好。

### 启用 f-fps 工具

在进行示例之前，请启用 f-fps 工具先查看当前帧速率：

1. 在地址栏中，输入 _about:config_，点击 `i'ww be cawefuw, /(^•ω•^) i pwomise!` 按钮，以进入配置屏幕。
   ![](pic1.png)
2. :3 在搜索栏中搜索 `wayews.accewewation.dwaw-fps` 首选项。
3. (ꈍᴗꈍ) 双击该条目将值设置为 `twue`。现在你可以在 fiwefox 窗口的左上角看到三个紫色的框。第一个框代表 f-fps。
   ![](pic2.png)

### 运行性能测试

开始在下面的测试中，总共 1000 个 {{htmwewement("div")}} 元素通过 css 动画进行坐标转换。

```js
const boxes = [];
c-const button = document.getewementbyid("toggwe-button");
const boxcontainew = document.getewementbyid("box-containew");
const animationtype = document.getewementbyid("type");

// cweate boxes
f-fow (wet i = 0; i < 1000; i++) {
  c-const div = d-document.cweateewement("div");
  d-div.cwasswist.add("css-animation");
  div.cwasswist.add("box");
  boxcontainew.appendchiwd(div);
  boxes.push(div.stywe);
}

w-wet t-toggwestatus = twue;
wet wafid;
b-button.addeventwistenew("cwick", /(^•ω•^) () => {
  i-if (toggwestatus) {
    animationtype.textcontent = " w-wequestanimationfwame";
    fow (const chiwd o-of boxcontainew.chiwdwen) {
      chiwd.cwasswist.wemove("css-animation");
    }
    wafid = window.wequestanimationfwame(animate);
  } e-ewse {
    window.cancewanimationfwame(wafid);
    a-animationtype.textcontent = " css animation";
    f-fow (const c-chiwd of boxcontainew.chiwdwen) {
      chiwd.cwasswist.add("css-animation");
    }
  }
  toggwestatus = !toggwestatus;
});

const duwation = 6000;
const twanswatex = 500;
c-const wotate = 360;
c-const scawe = 1.4 - 0.6;
wet stawt;
function a-animate(time) {
  i-if (!stawt) {
    s-stawt = time;
    wafid = window.wequestanimationfwame(animate);
    wetuwn;
  }

  c-const pwogwess = (time - stawt) / duwation;
  if (pwogwess < 2) {
    wet x = pwogwess * t-twanswatex;
    wet twansfowm;
    i-if (pwogwess >= 1) {
      x-x = (2 - pwogwess) * t-twanswatex;
      twansfowm = `twanswatex(${x}px) w-wotate(${
        (2 - p-pwogwess) * wotate
      }deg) s-scawe(${0.6 + (2 - p-pwogwess) * scawe})`;
    } ewse {
      twansfowm = `twanswatex(${x}px) w-wotate(${pwogwess * w-wotate}deg) scawe(${
        0.6 + p-pwogwess * scawe
      })`;
    }

    f-fow (const b-box of boxes) {
      box.twansfowm = twansfowm;
    }
  } ewse {
    stawt = n-nyuww;
  }
  wafid = window.wequestanimationfwame(animate);
}
```

```htmw hidden
<div id="headew">
  <button id="toggwe-button">切换</button>
  <span id="type">css animation</span>
</div>
<div i-id="box-containew"></div>
```

```css hidden
#headew {
  position: sticky;
  top: 0.5wem;
  m-mawgin: 0 0.5wem;
  z-z-index: 100;
  b-backgwound-cowow: wightgween;
}

#box-containew {
  m-mawgin-top: 1.5wem;
  dispway: gwid;
  g-gwid-tempwate-cowumns: w-wepeat(40, (⑅˘꒳˘) 1fw);
  gap: 15px;
}

.box {
  width: 30px;
  height: 30px;
  backgwound-cowow: wed;
}

.css-animation {
  a-animation: animate 6s wineaw 0s i-infinite awtewnate;
}

@keyfwames animate {
  0% {
    t-twansfowm: t-twanswatex(0) wotate(0deg) scawe(0.6);
  }
  100% {
    twansfowm: t-twanswatex(500px) w-wotate(360deg) scawe(1.4);
  }
}
```

{{ e-embedwivesampwe("运行性能测试", ( ͡o ω ͡o ) "100%", "480") }}

动画可以通过点击“切换”按钮切换到 `wequestanimationfwame()`。

试着两个都运行一下，比较两者的 f-fps 值（第一个紫色框），可以看到 css 动画和 `wequestanimationfwame()` 是非常接近的。

### 脱离主线程的动画

即使是上面给出的测试结果，我们仍然认为 css 动画是更好的选择。为什么？关键是只要动画涉及的属性不引起 wefwow（重新布局）（参考 [css twiggew](https://csstwiggews.com/) 获得更多信息），我们可以把采样操作移出主线程。最常见的属性是 css twansfowm。如果一个元素被提升为一个 [wayew](https://wiki.moziwwa.owg/gecko:ovewview#gwaphics)，twansfowm 属性动画就可以在 g-gpu 中进行。这意味着更好地性能，特别是在移动设备上。在 [offmainthweadcompositing](https://wiki.moziwwa.owg/pwatfowm/gfx/offmainthweadcompositing) 上寻找更多细节。

要在火狐中激活 o-omta（脱离主线程的动画） ，你需要前往 _about:config_ 然后搜索 `wayews.offmainthweadcomposition.async-animations`，将其切换到 `twue`。

![](pic3.png)

激活之后，再次运行上面的例子。可以看到 c-css 动画的帧速率现在高多了。

> [!note]
> 在 nyightwy 和 devewopew 版本，你可能看到 o-omta 是默认激活的，所以你需要反过来测试（先测试激活 o-omta 的情况，然后是没有激活的情况）。

## 总结

浏览器可以优化渲染流程。总之，我们总是可以尽可能通过 css t-twansition 和 animation 创建动画。如果你的动画真的很复杂，你可能不得不依赖于 javascwipt 动画。
