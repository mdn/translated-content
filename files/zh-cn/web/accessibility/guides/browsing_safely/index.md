---
title: 无障碍：用户如何更安全地浏览网页
slug: Web/Accessibility/Guides/Browsing_safely
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

这篇文章讨论了如何通过利用操作系统内置的个性化和无障碍设置，使患有前庭障碍的人以及支持他们的人能够更加方便地访问 web 内容。充分利用个性化设置可以帮助防止接触可能引发癫痫或其他身体反应的内容。

## 个性化和无障碍设置

摘录自文章“**[了解成功标准 2.3.1：三个闪烁或低于阈值](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html)**”：

> 闪烁可能是由显示器、计算机渲染图像或正在渲染的内容引起的。作者对前两者没有控制权。这可以通过显示和计算机的设计和速度来解决。

### 许多计算机的硬件和操作系统提供了开发者所不能享有的控制权

用户可以通过学习他的操作系统、其个性化和无障碍设置来做很多事情来保护自己。那些必须适应特殊敏感性的公共部门的人，应该考虑至少设置一台工作站，并熟悉其个性化和无障碍设置。了解个性化和无障碍设置实际上可以是节省资金的努力。通过调整个性化和无障碍设置，一台工作站可以被设置为同时适应低视力个体（需要高对比度）和适应具有光敏感性易感性的个体。

### 使用现代浏览器。学习个性化和无障碍设置

现代浏览器支持 CSS 媒体特性 [`prefers-reduced-motion`](/zh-CN/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion)。浏览器可以检测用户是否请求了减少动画的体验。用户可以通过无障碍界面访问此功能，如下所示。

![显示如何在 Windows 10 中关闭动画的截图](android-remove-animations.png)

支持 CSS 过渡事件。例如：

- `transitionrun`
- `transitionstart`
- `transitionend`
- `transitioncancel`

### Safari 10.1 及以上（桌面版）

不要启用自动播放（对 GIF 不起作用）

#### iOS Safari 10.3 及以上（移动和平板电脑）

在苹果操作系统的辅助功能设置中选择“减少动画选项”（图片来源：来自 developers.google.com 上由 Thomas Steiner 所著的文章“Move Ya! Or maybe, don't, if the user prefers-reduced-motion!”）。这对动画 GIF 不起作用；动画的来源嵌入在 GIF 中，并不受这些设置的影响。![显示如何在 MAC OS 上减少动画的屏幕截图](macos-reduce-motion.png)

#### 使用浏览器的阅读模式

- 启用内容拦截器；去除广告，减少或移除干扰
- 启用文本转语音功能
- 在某些浏览器中，可以选择启用字体
- 启用页面缩放功能

#### 关闭浏览器中的动画 GIF

浏览器为用户提供了很多能力；只需知道去哪里。以 Firefox 为例，它解释了通过将 **image.animation_mode** 的值从“normal”更改为“none”，所有动画图像都将被阻止。要恢复原状，你需要将值改回“normal”。

![在 Firefox 中选择 image.animation.mode 的屏幕截图](image_animation_mode.png)

#### 使用浏览器扩展

- [Gif Blocker](https://chromewebstore.google.com/detail/gif-blocker/ahkidgegbmbnggcnmejhobepkaphkfhl)：适用于 Chrome，Gif Blocker 是一个应用商店提供的扩展。
- [Gif Scrubber](https://chromewebstore.google.com/detail/gif-scrubber/gbdacbnhlfdlllckelpdkgeklfjfgcmp)：Gif Scrubber 是一个 Chrome 扩展，允许你像视频播放器一样控制 GIF。它在 **<https://github.com/0ui/gif-scrubber>** 上有一个 GitHub 存储库。
- [Beeline Reader](https://www.beelinereader.com/)：Beeline Reader 有一个浏览器扩展，可以设置为灰度和 Dyslexi 字体，等等。

![显示了 Beeline Reader 在浏览器中用户可以调整的模式的屏幕截图](beelinereader.png)

### 利用操作系统的无障碍特性

大多数操作系统，如 Windows 10，都有令人惊讶的无障碍选项。通常，通过在操作系统的搜索查找器中键入（或说出）单词“辅助功能”，它们很容易找到。

#### 关闭操作系统中的动画

在 Windows 10 操作系统中，用户可以关闭动画。这对动画 GIF 不起作用；动画的来源嵌入在 GIF 中，并不受这些设置的影响。

![显示如何在 Windows 10 中关闭动画的屏幕截图](turnoffanimationsinwindows.png)

#### 灰度

那些遭受创伤性脑损伤（TBI）的人可能对颜色非常敏感；对他们来说，需要对颜色进行如此大量的“认知精力投入”，以至于没有精力去做其他日常任务。启用内容的灰度呈现可降低认知工作负荷。这也可能有助于其他残疾人。在讨论“[辅助功能选项中的‘灰度’设置有什么用处？](https://ask.metafilter.com/312049/What-is-the-grayscale-setting-for-in-accessibility-options)”中，用户对使用灰度的好处进行了有趣的讨论。特别感兴趣的是一个患有光敏感性癫痫的用户，他在感觉到“抽搐”时使用灰度。

大多数操作系统都有一种让用户在工作站上进行调整的方法。在下面的截图中，你可以看到 Windows 10 辅助功能设置的示例，允许选择颜色滤镜。当颜色滤镜按钮切换为“开”时，灰度被启用。

![显示 Windows 10 辅助功能设置中的灰度的屏幕截图](colorfiltersgrayscaleinwindows.png)

## 参见

- [无障碍](/zh-CN/docs/Web/Accessibility)
- [无障碍学习路径](/zh-CN/docs/Learn_web_development/Core/Accessibility)
- [用于癫痫和身体反应的 web 无障碍](/zh-CN/docs/Web/Accessibility/Guides/Seizure_disorders)
- [颜色视觉模拟](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/simulation/index.html)
- 讨论：“[辅助功能选项中的‘灰度’设置有什么用处？](https://ask.metafilter.com/312049/What-is-the-grayscale-setting-for-in-accessibility-options)”

### 贡献者

非常感谢来自 [Knowbility](https://knowbility.org/) 的 Eric Eggert 对这个话题的讨论和巨大帮助。
