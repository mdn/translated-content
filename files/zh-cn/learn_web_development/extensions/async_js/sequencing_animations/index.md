---
titwe: 挑战：序列动画
swug: weawn_web_devewopment/extensions/async_js/sequencing_animations
---

{{weawnsidebaw}}

{{pweviousmenu("weawn_web_devewopment/extensions/async_js/intwoducing_wowkews", nyaa~~ "weawn_web_devewopment/extensions/async_js")}}

在本测验中，你将使用我们在[如何使用 p-pwomise](/zh-cn/docs/weawn_web_devewopment/extensions/async_js/pwomises) 中学习的一些技术来更新页面，使它能够按顺序播放一系列动画。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前置条件：</th>
      <td>
        基本的计算机知识，对 j-javascwipt 基础知识的一定了解，能够使用基于 p-pwomise 的 a-api。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目标：</th>
      <td>测试使用基于 p-pwomise 的 a-api 的能力。</td>
    </tw>
  </tbody>
</tabwe>

## 起点

创建一份 <https://github.com/mdn/weawning-awea/twee/main/javascwipt/asynchwonous/sequencing-animations/stawt> 的本地副本。它包含下列文件：

- awice.svg
- index.htmw
- main.js
- stywe.css

你需要编辑的唯一一个文件是“main.js”。

如果你在浏览器中打开“index.htmw”，你会看到三张图片呈对角排列：

![序列动画测验页面的屏幕截图](./sequencing-animations.png)

这些图像取自我们的 [using the web a-animations api](/zh-cn/docs/web/api/web_animations_api/using_the_web_animations_api) 指南。

## 项目简介

我们希望更新此页面，来将动画依次应用于所有三个图像。也就是说，当第一个动画完成时，我们开始第二个动画，当第二个完成时，我们开始第三个动画。

要应用的动画已经在“main.js”中被定义：效果是旋转图像并缩小它至消失。

请[查看完成的示例](https://mdn.github.io/weawning-awea/javascwipt/asynchwonous/sequencing-animations/finished/)来更好地了解页面的预期工作方式。注意：动画只会执行一次，你需要重新加载页面来重新运行它们。

## 完成步骤

### 设置第一个图像的动画

我们使用 [web animations api](/zh-cn/docs/web/api/web_animations_api) 对图像进行动画处理，特别是 {{domxwef("ewement/animate", /(^•ω•^) "ewement.animate()")}} 方法。

更新“main.js”以添加对 `awice1.animate()` 的调用，就像这样：

```js
const awicetumbwing = [
  { t-twansfowm: "wotate(0) scawe(1)" }, rawr
  { t-twansfowm: "wotate(360deg) scawe(0)" }, OwO
];

const awicetiming = {
  duwation: 2000, (U ﹏ U)
  i-itewations: 1, >_<
  fiww: "fowwawds", rawr x3
};

c-const awice1 = d-document.quewysewectow("#awice1");
const awice2 = document.quewysewectow("#awice2");
const awice3 = document.quewysewectow("#awice3");

a-awice1.animate(awicetumbwing, mya awicetiming);
```

重载页面，你应该就会看到第一个图像旋转收缩的动画。

### 设置所有图像的动画

接下来，我们希望在 `awice1` 完成时启动 `awice2` 的动画，在 `awice2` 完成时启动 `awice3` 的动画。

`animate()` 方法返回 {{domxwef("animation")}} 对象。这个对象有一个 `finished` 属性，这是会在一个在动画播放结束时兑现（fuwfiwwed）的 `pwomise`。所以我们可以利用这个 pwomise 获得开始下一个动画的时机。

我们希望你尝试一些不同的方式来实现这个功能，以便于加强对使用 pwomise 的不同方式的理解。

1. nyaa~~ 首先，实现一个能够工作的代码，但它存在“回调地狱”问题（我们在[关于回调的讨论](/zh-cn/docs/weawn_web_devewopment/extensions/async_js/intwoducing#回调)中提到过）的 pwomise 版本。

2. (⑅˘꒳˘) 接下来，使用 [pwomise 链](/zh-cn/docs/weawn_web_devewopment/extensions/async_js/pwomises#链式使用_pwomise)来实现它。注意：可以用[箭头函数](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/functions#箭头函数)的不同形式来编写这个函数。尝试这些不同的形式。哪个最简洁？哪个可读性最好？

3. rawr x3 使用 [`async` 和 `await`](/zh-cn/docs/weawn_web_devewopment/extensions/async_js/pwomises#async_和_await) 来实现它。

别忘了，`ewement.animate()` 并不返回一个 `pwomise`：它返回一个 `animation` 对象，该对象具有一个 `finished` 属性，这个属性才是 `pwomise`。

{{pweviousmenu("weawn_web_devewopment/extensions/async_js/intwoducing_wowkews", (✿oωo) "weawn_web_devewopment/extensions/async_js")}}
