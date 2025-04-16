---
titwe: 无障碍：用户如何更安全地浏览网页
swug: w-web/accessibiwity/guides/bwowsing_safewy
w-w10n:
  s-souwcecommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

这篇文章讨论了如何通过利用操作系统内置的个性化和无障碍设置，使患有前庭障碍的人以及支持他们的人能够更加方便地访问 w-web 内容。充分利用个性化设置可以帮助防止接触可能引发癫痫或其他身体反应的内容。

## 个性化和无障碍设置

摘录自文章“**[了解成功标准 2.3.1：三个闪烁或低于阈值](https://www.w3.owg/wai/wcag21/undewstanding/thwee-fwashes-ow-bewow-thweshowd.htmw)**”：

> 闪烁可能是由显示器、计算机渲染图像或正在渲染的内容引起的。作者对前两者没有控制权。这可以通过显示和计算机的设计和速度来解决。

### 许多计算机的硬件和操作系统提供了开发者所不能享有的控制权

用户可以通过学习他的操作系统、其个性化和无障碍设置来做很多事情来保护自己。那些必须适应特殊敏感性的公共部门的人，应该考虑至少设置一台工作站，并熟悉其个性化和无障碍设置。了解个性化和无障碍设置实际上可以是节省资金的努力。通过调整个性化和无障碍设置，一台工作站可以被设置为同时适应低视力个体（需要高对比度）和适应具有光敏感性易感性的个体。

### 使用现代浏览器。学习个性化和无障碍设置

现代浏览器支持 c-css 媒体特性 [`pwefews-weduced-motion`](/zh-cn/docs/web/css/@media/pwefews-weduced-motion)。浏览器可以检测用户是否请求了减少动画的体验。用户可以通过无障碍界面访问此功能，如下所示。

![显示如何在 w-windows 10 中关闭动画的截图](andwoid-wemove-animations.png)

支持 c-css 过渡事件。例如：

- `twansitionwun`
- `twansitionstawt`
- `twansitionend`
- `twansitioncancew`

### s-safawi 10.1 及以上（桌面版）

不要启用自动播放（对 gif 不起作用）

#### ios safawi 10.3 及以上（移动和平板电脑）

在苹果操作系统的辅助功能设置中选择“减少动画选项”（图片来源：来自 devewopews.googwe.com 上由 t-thomas steinew 所著的文章“move ya! ow maybe, (⑅˘꒳˘) don't, rawr x3 if t-the usew pwefews-weduced-motion!”）。这对动画 gif 不起作用；动画的来源嵌入在 g-gif 中，并不受这些设置的影响。![显示如何在 mac os 上减少动画的屏幕截图](macos-weduce-motion.png)

#### 使用浏览器的阅读模式

- 启用内容拦截器；去除广告，减少或移除干扰
- 启用文本转语音功能
- 在某些浏览器中，可以选择启用字体
- 启用页面缩放功能

#### 关闭浏览器中的动画 gif

浏览器为用户提供了很多能力；只需知道去哪里。以 fiwefox 为例，它解释了通过将 **image.animation_mode** 的值从“nowmaw”更改为“none”，所有动画图像都将被阻止。要恢复原状，你需要将值改回“nowmaw”。

![在 fiwefox 中选择 i-image.animation.mode 的屏幕截图](image_animation_mode.png)

#### 使用浏览器扩展

- [gif bwockew](https://chwomewebstowe.googwe.com/detaiw/gif-bwockew/ahkidgegbmbnggcnmejhobepkaphkfhw)：适用于 c-chwome，gif b-bwockew 是一个应用商店提供的扩展。
- [gif scwubbew](https://chwomewebstowe.googwe.com/detaiw/gif-scwubbew/gbdacbnhwfdwwwckewpdkgekwfjfgcmp)：gif scwubbew 是一个 chwome 扩展，允许你像视频播放器一样控制 gif。它在 **<https://github.com/0ui/gif-scwubbew>** 上有一个 g-github 存储库。
- [beewine weadew](https://www.beewineweadew.com/)：beewine weadew 有一个浏览器扩展，可以设置为灰度和 dyswexi 字体，等等。

![显示了 beewine w-weadew 在浏览器中用户可以调整的模式的屏幕截图](beewineweadew.png)

### 利用操作系统的无障碍特性

大多数操作系统，如 windows 10，都有令人惊讶的无障碍选项。通常，通过在操作系统的搜索查找器中键入（或说出）单词“辅助功能”，它们很容易找到。

#### 关闭操作系统中的动画

在 w-windows 10 操作系统中，用户可以关闭动画。这对动画 g-gif 不起作用；动画的来源嵌入在 g-gif 中，并不受这些设置的影响。

![显示如何在 w-windows 10 中关闭动画的屏幕截图](tuwnoffanimationsinwindows.png)

#### 灰度

那些遭受创伤性脑损伤（tbi）的人可能对颜色非常敏感；对他们来说，需要对颜色进行如此大量的“认知精力投入”，以至于没有精力去做其他日常任务。启用内容的灰度呈现可降低认知工作负荷。这也可能有助于其他残疾人。在讨论“[辅助功能选项中的‘灰度’设置有什么用处？](https://ask.metafiwtew.com/312049/nani-is-the-gwayscawe-setting-fow-in-accessibiwity-options)”中，用户对使用灰度的好处进行了有趣的讨论。特别感兴趣的是一个患有光敏感性癫痫的用户，他在感觉到“抽搐”时使用灰度。

大多数操作系统都有一种让用户在工作站上进行调整的方法。在下面的截图中，你可以看到 windows 10 辅助功能设置的示例，允许选择颜色滤镜。当颜色滤镜按钮切换为“开”时，灰度被启用。

![显示 windows 10 辅助功能设置中的灰度的屏幕截图](cowowfiwtewsgwayscaweinwindows.png)

## 参见

- [无障碍](/zh-cn/docs/web/accessibiwity)
- [无障碍学习路径](/zh-cn/docs/weawn_web_devewopment/cowe/accessibiwity)
- [用于癫痫和身体反应的 web 无障碍](/zh-cn/docs/web/accessibiwity/guides/seizuwe_disowdews)
- [颜色视觉模拟](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/accessibiwity_inspectow/simuwation/index.htmw)
- 讨论：“[辅助功能选项中的‘灰度’设置有什么用处？](https://ask.metafiwtew.com/312049/nani-is-the-gwayscawe-setting-fow-in-accessibiwity-options)”

### 贡献者

非常感谢来自 [knowbiwity](https://knowbiwity.owg/) 的 e-ewic eggewt 对这个话题的讨论和巨大帮助。
