---
title: 无障碍性：用户如何更安全地浏览网页
slug: Web/Accessibility/Accessibility:_What_users_can_to_to_browse_safely
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

这篇文章讨论了如何通过利用操作系统内置的个性化和辅助功能设置，使网络内容对于患有前庭障碍的人以及支持他们的人更加无障碍。充分利用个性化设置可以帮助防止接触可能引发癫痫或其他身体反应的内容。

## 个性化和辅助功能设置

从"**[了解成功标准2.3.1：三个闪烁或低于阈值](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html)**"这篇文章中：

> 闪烁可能是由显示器、计算机渲染图像或正在渲染的内容引起的。作者对前两者没有控制权。这可以通过显示和计算机的设计和速度来解决。

### 许多计算机的硬件和操作系统提供了开发者所不能享有的控制权

用户可以通过学习他的操作系统、其个性化和辅助功能设置来做很多事情来保护自己。那些必须适应特殊敏感性的公共部门的人，应该考虑至少设置一台工作站，并熟悉其个性化和辅助功能设置。了解个性化和辅助功能设置实际上可以是节省资金的努力。一台工作站可以被设置为同时适应低视力个体（需要高对比度）和适应具有光敏感性易感性的个体，通过调整个性化和辅助功能设置。

### 使用现代浏览器。学习个性化和辅助功能设置

现代浏览器支持 CSS 媒体功能 [prefers-reduced-motion](/zh-CN/docs/Web/CSS/@media/prefers-reduced-motion)。浏览器可以检测用户是否请求了减少动画的体验。用户可以通过辅助功能界面访问此功能，如下所示。

![显示如何在Windows 10中关闭动画的截图](android-remove-animations.png)

支持 CSS 过渡事件。例如：

- `transitionrun`
- `transitionstart`
- `transitionend`
- `transitioncancel`

### Safari 10.1及以上（桌面版）

不要启用自动播放（对 GIF 不起作用）

#### iOS Safari 10.3及以上（移动和平板电脑）

在苹果操作系统的辅助功能设置中选择“减少动画选项”（图片来源：来自 Thomas Steiner 文章 "Move Ya! Or maybe, don't, if the user prefers-reduced-motion!" 的开发者网站）。这对动画 GIF 不起作用；动画的来源嵌入在 GIF 中，并不受这些设置的影响。![显示如何在MAC OS上减少动画的屏幕截图](macos-reduce-motion.png)

#### 使用浏览器的阅读模式

- 启用内容拦截器；去除广告，减少或移除干扰
- 启用文本到语音功能
- 在某些浏览器中，可以选择启用字体
- 启用页面缩放功能

#### 关闭浏览器中的动画 GIF

浏览器为用户提供了很多权力；只需知道去哪里。以 Firefox 为例，它解释了通过将 **image.animation_mode** 的值从 "normal" 更改为 "none"，所有动画图像都将被阻止。要恢复原状，你需要将值改回 "normal"。

![在 Firefox 中选择 image.animation.mode 的屏幕截图](image_animation_mode.png)

#### 使用浏览器扩展

- [Gif Blocker](https://chrome.google.com/webstore/detail/gif-blocker/ahkidgegbmbnggcnmejhobepkaphkfhl?hl=en) 适用于 Chrome，Gif Blocker 是网上商店提供的一个扩展。
- [Gif Scrubber](https://chrome.google.com/webstore/detail/gif-scrubber/gbdacbnhlfdlllckelpdkgeklfjfgcmp?hl=en) Gif Scrubber 是一个 Chrome 扩展，允许你像视频播放器一样控制 GIF。它在 **<https://github.com/0ui/gif-scrubber>** 上有一个 GitHub 存储库。
- [Beeline Reader](https://www.beelinereader.com/) Beeline Reader 有一个浏览器扩展，可以设置为灰度和Dyslexi字体，等等。

![显示了 Beeline Reader 在浏览器中用户可以调整的模式的屏幕截图](beelinereader.png)

### 利用操作系统的辅助功能

大多数操作系统，如 Windows 10，都有令人惊讶的辅助选项。通常，通过在操作系统的搜索查找器中键入（或说出）单词 "Accessibility"，它们很容易找到。

#### 关闭操作系统中的动画

在 Windows 10 操作系统中，用户可以关闭动画。这对动画 GIF 不起作用；动画的来源嵌入在 GIF 中，并不受这些设置的影响。

![显示如何在Windows 10中关闭动画的屏幕截图](turnoffanimationsinwindows.png)

#### 灰度

那些遭受创伤性脑损伤（TBI）的人可能对颜色非常敏感；对他们来说，需要对颜色进行如此大量的 "认知能量投入"，以至于没有精力去做其他日常任务。启用内容的灰度呈现可降低认知工作负荷。这也可能有助于其他残疾人。在讨论 “[What is the "grayscale" setting for in accessibility options?](https://ask.metafilter.com/312049/What-is-the-grayscale-setting-for-in-accessibility-options)” 中，用户对使用灰度的好处进行了有趣的讨论。特别感兴趣的是一个患有光敏感性癫痫的用户，他在感觉到 "抽搐" 时使用灰度。

大多数操作系统都有一种让用户在工作站上进行调整的方法。在下面的截图中，你可以看到 Windows 10 辅助功能设置的示例，允许选择颜色滤镜。当颜色滤镜按钮切换为 "on" 时，灰度被启用。

![显示 Windows 10 辅助功能设置中的灰度的屏幕截图](colorfiltersgrayscaleinwindows.png)

## 参见

- [无障碍性](/zh-CN/docs/Web/Accessibility)
- [无障碍性学习路径](/zh-CN/docs/Learn/Accessibility)
- [用于癫痫和身体反应的网络无障碍性](/zh-CN/docs/Web/Accessibility/Seizure_disorders)
- [颜色视觉模拟](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/simulation/index.html)
- 讨论：“[What is the "grayscale" setting for in accessibility options?](https://ask.metafilter.com/312049/What-is-the-grayscale-setting-for-in-accessibility-options)”

### 贡献者

非常感谢来自 [Knowbility](https://knowbility.org/) 的 Eric Eggert 对这个话题的讨论和巨大帮助。
