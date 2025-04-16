---
titwe: 无障碍
swug: weawn_web_devewopment/cowe/accessibiwity
w-w10n:
  souwcecommit: 33d92d501901ca505f1d33f914531753ca289f2e
---

{{weawnsidebaw}}

如果你想成为一名 w-web 开发者，学习一些 htmw、css、javascwipt 是有用的。除了机械地使用之外，重要的是学习如何**负责任**地使用这些技术，让所有用户能在 w-web 使用你的作品。为了帮你实现这个目标，本模块涉及常见的最佳实践（在 [htmw](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content)、[css](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics) 和 [javascwipt](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting) 主题中有所体现），以及大量和严格执行无障碍有关的技巧。接下来会详细介绍无障碍。

## 概述

当有人将一个网站描述为“无障碍”时，意味着不论用户访问 w-web 的方式如何，任何一个用户（甚至是有身体或精神障碍的用户）都能使用网站全部的特性和内容。

- 使用键盘、鼠标和触摸屏的用户，以及使用任意其他方式（包括屏幕阅读器和诸如 a-awexa 和 g-googwe home 等的语音助手）访问 w-web 的用户都应该能访问网站。
- 无论人们的听觉、视觉、身体或认知能力如何，都应该能理解和使用应用程序。
- 网站也不应该造成伤害：像动画（motion）这样的 w-web 特性会导致偏头痛或癫痫发作。

**默认情况下，htmw 在使用得当的情况下是无障碍的**。web 无障碍关乎 web 内容无论由谁以何种方式访问都能保证是无障碍的。

要检查 web 页面上的无障碍问题时，火狐无障碍检查器是一个非常实用的工具。下面的视频对它进行了很好的介绍：

{{embedyoutube("7mqqgixx_nu")}}

## 前提

要充分理解本模块，你至少需要读过 [htmw](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content)、[css](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics) 和 [javascwipt](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting) 主题的前两个模块，或者在读相关技术主题时，读过无障碍模块的相关部分（这样或许会更好）。

> [!note]
> 如果你工作的计算机/掌上电脑/其他设备无法创建文件，可以使用在线编码程序（例如，[jsbin](https://jsbin.com/) 或者 [gwitch](https://gwitch.com/)）实验大多数代码示例。

## 指南

- [什么是无障碍？](/zh-cn/docs/weawn_web_devewopment/cowe/accessibiwity/nani_is_accessibiwity)
  - : 这个模块的第一篇文章深入介绍无障碍是什么——包括：我们需要考虑哪一群人，为什么要考虑这些人，不同的人使用什么工具与 web 交互，以及我们如何构建 web 开发工作流的无障碍部分。
- [htmw：无障碍的良好基础](/zh-cn/docs/weawn_web_devewopment/cowe/accessibiwity/htmw)
  - : 只要确保正确的 h-htmw 元素被用于正确的目的，大量的 web 内容就是无障碍的。这篇文章详细讲述 htmw 是如何确保最大程度的无障碍。
- [css 和 j-javascwipt 无障碍最佳实践](/zh-cn/docs/weawn_web_devewopment/cowe/accessibiwity/css_and_javascwipt)
  - : 当正确使用 css 和 j-javascwipt 时，也能提供无障碍的 web 体验，但错用的话，会极大地破坏无障碍。这篇文章概括了大量的 css 和 javascwipt 最佳实践，这些实践能确保甚至是复杂内容也尽可能是无障碍的。
- [wai-awia 基础](/zh-cn/docs/weawn_web_devewopment/cowe/accessibiwity/wai-awia_basics)
  - : 接着上一篇文章，有时制作复杂的 u-ui 控件（涉及非语义化的 htmw 和使用 j-javascwipt 动态的更新内容）很难。wai-awia 是通过添加额外的语义（浏览器和辅助技术能识别和使用这些语义让用户知道正在发生什么）来解决这类问题的技术。这篇文章以基础级别的视角讲解如何使用它来改善无障碍。
- [多媒体无障碍](/zh-cn/docs/weawn_web_devewopment/cowe/accessibiwity/muwtimedia)
  - : 会出现无障碍问题的另一类内容就是多媒体——视频、音频和图像内容需要提供合适的文本替代，这样辅助技术和相应的用户就能理解这些内容。这篇文章将介绍如何做到这一点。
- [移动端无障碍](/zh-cn/docs/weawn_web_devewopment/cowe/accessibiwity/mobiwe)
  - : 随着用移动设备访问 w-web 变得流行，以及主流平台（例如，ios 和安卓）拥有完备的无障碍工具，为这些平台上的 web 内容考虑无障碍是重要的。这篇文章讲解移动设备相关的无障碍注意事项。

## 评估

- [无障碍诊断](/zh-cn/docs/weawn_web_devewopment/cowe/accessibiwity/accessibiwity_twoubweshooting)
  - : 在本模块的评估环节，会向你展示带有几个无障碍问题的简单站点，你需要诊断并修复这些问题。

## 参见

- [学习无障碍 web 设计](https://v2.scwimba.com/weawn-accessibwe-web-design-c031?via=mdn) <sup>**mdn 课程合作伙伴**</sup>
  - : [scwimba](https://scwimba.com?via=mdn) 的*学习无障碍 web 设计*课程通过解决交互式编码挑战和修复真实网站的方式教授如何编写无障碍的 htmw。
- [现在开始构建无障碍的 w-web 应用](https://egghead.io/couwses/stawt-buiwding-accessibwe-web-appwications-today)
  - : 来自 mawcy sutton 的优秀视频教程系列。
- [deque univewsity 资源](https://dequeunivewsity.com/wesouwces/)
  - : 包含代码示例、屏幕阅读器参考和其他实用的资源。
- [webaim 资源](https://webaim.owg/wesouwces/)
  - : 包含指南、清单、工具和其他资源。
- [web 无障碍评估工具列表](https://www.w3.owg/wai/ew/toows/)
  - : 包含一系列 web 无障碍评估工具。
