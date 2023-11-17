---
title: 移动端无障碍
slug: Learn/Accessibility/Mobile
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Accessibility/Multimedia","Learn/Accessibility/Accessibility_troubleshooting", "Learn/Accessibility")}}

随着通过手机设备访问 web 愈加常见，iOS 和 Android 等流行的平台都拥有了完善的无障碍工具，在这些平台上考虑 web 的无障碍是一件很重要事情。本文将着重介绍移动端无障碍的注意事项。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        具备基本的计算机知识，对 HTML、CSS 和 JavaScript
        基本的了解，并理解<a href="/zh-CN/docs/Learn/Accessibility"
          >之前课程中的文章</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        了解移动设备上无障碍存在的问题，以及如何解决这些问题。
      </td>
    </tr>
  </tbody>
</table>

## 移动设备上的无障碍

现代移动设备对无障碍和大多数 web 标准有很好的支持。那个因为移动设备和桌面设备使用了完全不同的技术而强制要求开发者使用浏览器嗅探并为它们提供不同网站的时代已经结束了（虽然现在还有许多公司仍然在检测用户移动设备的使用，并为这些设备提供一个独立的移动端域名）。

如今，移动设备一般都可以处理特性齐全的网站了，同时，为了能够让盲人成功的使用网站，主流平台甚至还内置了屏幕阅读器。移动设备也倾向于对“[WAI-ARIA](/zh-CN/docs/Learn/Accessibility/WAI-ARIA_basics)”有很好的支持。

你只要需要遵守良好的 web 设计规范和最佳的无障碍实践，就可以让你的网站在手机上无障碍地使用。

移动设备需要特别考虑一些例外情况；主要是：

- 控件交互——确保类似于按钮的 UI 控件可以在移动端（主要是触摸屏）和台式机/笔记本电脑（主要是鼠标/键盘）无障碍地使用
- 用户输入——在移动端尽可能的减少用户输入的要求（例如在表单中，尽量少打字）。
- 响应式设计——确保移动端布局正常的情况下，节省需要下载的图片大小，并考虑为高分辨率的屏幕提供图片。

## Android 和 iOS 上的屏幕阅读器测试总结

最常见的移动端平台具有功能全面的屏幕阅读器。这些功能和桌面端屏幕阅读器大致相同，除了移动端屏幕阅读器大量的使用手势操作而不是按键组合操作。

让我们来看看最主要的两个：Android 上的 TalkBack 和 iOS 上的旁白（VoiceOver）。

### Android TalkBack

TalkBack 屏幕阅读器是内置于 Android 操作系统中的。

要启用它，请确定你的手机型号和 Android 版本，然后查找 TalkBack 菜单所在的位置。Android 版本之间，甚至不同的手机型号之间的差异通常很大。一些手机制造商（例如三星）在较新的手机中甚至没有 TalkBack，而是提供了自己的屏幕阅读器。

找到 TalkBack 菜单后，点击滑动开关启用 TalkBack。然后按照屏幕提示操作即可。

当启用 TalkBack 时，你的 Android 设备的基本操作将有所不同。举个例子：

1. 点击一个应用将会选择它，同时，你的设备将会告诉你这个应用程序是什么。
2. 在控制栏中左右滑动，将会在应用、按钮或控件之间切换。设备将会读出每一项。
3. 双击任何地方将会打开某个应用或者选择某个选项。
4. 你也可以“通过触摸来探索”——将手指按在屏幕上并拖拽，然后你的设备将会读出你移动经过的不同的应用或项目。

如果你想关闭 TalkBack：

1. 导航到 TalkBack 菜单屏幕（使用当前启用的不同手势）。
2. 导航到滑动开关，并激活它将其关闭。

> **备注：** 你可以通过向左上方滑动返回桌面，如果你有多个桌面，你可以通过两个手指在屏幕上左右滑动来切换桌面。

关于 TalkBack 手势的完整列表，查看[使用 TalkBack 手势](https://support.google.com/accessibility/android/answer/6151827)。

#### 解锁手机

当 TalkBack 处于启用状态时，解锁手机有一点点不同。

你可以通过双根手指从底部向上滑动去锁定手机。如果你设置了密码或者手势，你将会进入相关的入口页去输入密码或手势。

你可以通过触摸屏幕的中下部去找到*解锁*按钮，然后双击它解锁手机。

#### 全局菜单和本地菜单

TalkBack 允许你使用全局和本地菜单，无论你已经导航到哪个位置。前者提供和设备相关的全局选项，后者提供和当前你所在的应用或屏幕相关的选项。

要进入这些菜单：

1. 快速向下然后向右滑动唤起全局菜单。
2. 快速向上然后向右滑动唤起本地菜单。
3. 向左右滑动可以选择不同的菜单。
4. 一旦你选择了你想要的选项，双击它可以直接选择。

想要查看全局和本地上下文菜单的详细选项，请查看[使用全局和本地上下文菜单](https://support.google.com/accessibility/android/answer/6007066)。

#### 浏览网页

你可以在浏览器中使用本地上下文菜单来查看仅使用标题、表单控件、链接，或逐行浏览等方式浏览网页。

例如，当 TalkBack 处于启用状态时：

1. 打开浏览器。
2. 激活地址栏。
3. 进入一个大量标题的网页，如 bbc.co.uk 的首页。输入网址的文字：

   - 通过左右滑动来找到地址栏，然后双击它。
   - 手指按在虚拟键盘上，选择你想要的字符，松开手指输入它，重复上述操作输入完所有的字符。
   - 输入完之后，找到 Enter 键并按下

4. 向左右滑动，以在页面上不同的项目之间切换。
5. 向上然后向右滑动进入本地内容菜单。
6. 向右滑动直到你找到“标题和标识”选项。
7. 双击选择它。现在你就可以通过左右滑动在标题和 ARIA 标识之间切换。
8. 向右向上滑动之后，进入本地上下文菜单，选择“默认”，就可以返回默认模式。

> **备注：** 查看[开始在 Android 设备上使用 TalkBack](https://support.google.com/accessibility/android/answer/6283677?ref_topic=3529932) 以获取更完整的文档。

### iOS 旁白

iOS 操作系统内置了移动版旁白（VoiceOver）。

要打开它，请转到*设置*，然后选择*无障碍 > 旁白*。点按*旁白*的滑动开关去启用它（你还会在页面中看到很多和旁白相关的其他选项）。

> **备注：** 一些较老的 iOS 设备的旁白菜单在*设置* > _通用_ > _辅助功能_ > _旁白_。

一旦启用旁白，iOS 的基本操作手势将有所不同：

1. 单击将会导致项目被选中，你的设备将会告诉你，你点击的是什么应用。
2. 你也可以通过向左右滑动屏幕来移动屏幕上的项目，或者在屏幕上滑动手指以移动项目（当你找到你想要的项目的时候，把手指离开屏幕来选中它）。
3. 双击屏幕上的任意位置，可以激活选中的项目（例如，打开选中的 App）。
4. 通过三根手指滑动浏览页面。
5. 用两个手指点击来执行上下文相关的操作，例如在相机里拍摄照片。

要再次将其关闭，你必须使用上述手势导航到*设置 > 常规 > 无障碍 > 旁白*，然后将旁白切换回关闭状态。

#### 解锁手机

你需要正常的按下 HOME 键（或划过）就可以解锁手机了。如果你设置了密码，你可以通过滑动来选择每一个数字，然后在找到合适的数字后双击输入每一个数字。

#### 使用转子

当旁白打开时，你可以使用一种名为“转子”（Rotor）的导航功能，该功能可让你快速从多种常用选项中进行选择。要使用它：

1. 像转动拨号盘一样在屏幕上扭动两根手指。当你扭动更多的时候，每个选项都会被朗读。你可以来回循环浏览选项。
2. 一旦你找到你想要的选项：

   - 松开手指来选择它。
   - 如果你可以调整其至的大小（例如音量或语速），则可以通过上下滑动来控制所选项的值。

转子上的提供的选项是上下文相关的，它们会根据你所在的应用程序或者视图的不同而不同（参见下面的示例）。

#### 浏览网页

让我们尝试使用旁白浏览网页：

1. 打开你的浏览器。
2. 激活地址栏。
3. 进入一个有大量标题的网站，就像 bbc.co.uk 的首页。输入网址：

   - 通过向左右滑动来选择地址栏，找到之后双击选择它。
   - 对于每一个字符，手指在虚拟键盘上长按，直到找到你想要的字符，然后释放手指来选择它。双击即可输入。
   - 完成后，找到 Enter 键并按下。

4. 向左右滑动来在页面上切换不同的项目。你可以通过双击来选择它（例如，跟随链接）。
5. 默认情况下，被选中的转子选项应该是语速，你可以通过上下滑动来增加或减少语速。
6. 现在像拨号盘一样围绕屏幕转动两根手指，以显示转子并在其选项之间移动。以下是可用选项的一些示例：

   - _语速_：改变语速。
   - _容器_：在页面不同语义的容器间切换。
   - _标题_：在页面上的标题之间切换。
   - _链接_：在页面上的链接之间切换。
   - _表单控件_：在页面上的表单控件之间切换。
   - _语言_：在不同的翻译之间切换，如果这些翻译可用。

7. 选择*标题*，现在你可以通过上下滑动在页面的不同标题中切换。

> **备注：** 有关 iOS 上可用的旁白手势以及有关辅助功能的其他提示的更完整资料可以查看[在你的设备上用旁白测试辅助功能](https://developer.apple.com/library/archive/technotes/TestingAccessibilityOfiOSApps/TestAccessibilityonYourDevicewithVoiceOver/TestAccessibilityonYourDevicewithVoiceOver.html)。

## 控制机制

在我们的 CSS 和 JavaScript 无障碍文章中，我们研究了特定于某种控制机制的事件的概念（请参阅[特定于鼠标的事件](/zh-CN/docs/Learn/Accessibility/CSS_and_JavaScript#鼠标特定事件)）。回顾一下，因为其他控制机制不能激活相关的功能，将会导致辅助功能的问题。

举例来说，[点击](/zh-CN/docs/Web/API/Element/click_event)事件在无障碍方面是良好的——通过点击处理器设置的元素，选中它并按下回车或返回，或者在触摸屏设备上点击它，可以调用关联的事件处理程序。试试我们的 [simple-button-example.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/simple-button-example.html) 示例（[查看实时示例](https://mdn.github.io/learning-area/accessibility/mobile/simple-button-example.html)）以理解我们的意思。

另一方面，像 [mousedown](/zh-CN/docs/Web/API/Element/mousedown_event) 和 [mouseup](/zh-CN/docs/Web/API/Element/mouseup_event) 这些特定的鼠标事件会产生一些问题——无法使用鼠标以外的控制设备调用这些事件处理器。

如果你尝试通过键盘或触摸来控制我们的 [simple-box-drag.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/simple-box-drag.html) 示例（[查看实时示例](https://mdn.github.io/learning-area/accessibility/mobile/simple-box-drag.html)），你将发现问题。它发生的原因是我们用了下面的代码：

```js
div.onmousedown = function () {
  initialBoxX = div.offsetLeft;
  initialBoxY = div.offsetTop;
  movePanel();
};

document.onmouseup = stopMove;
```

要启用其他形式的控制，你需要使用其他等效的事件代替，比如在触屏设备上用 touch 事件：

```js
div.ontouchstart = function (e) {
  initialBoxX = div.offsetLeft;
  initialBoxY = div.offsetTop;
  positionHandler(e);
  movePanel();
};

panel.ontouchend = stopMove;
```

我们提供了一个简单的示例来展示如何使用鼠标和触摸事件——[multi-control-box-drag.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/multi-control-box-drag.html)（[查看实时示例](https://mdn.github.io/learning-area/accessibility/mobile/multi-control-box-drag.html)）。

> **备注：** 你可以看到一个功能完善的示例，展示如何在实现[游戏控制机制](/zh-CN/docs/Games/Techniques/Control_mechanisms)中实现不同的控制机制。

## 响应式设计

[响应式设计](/zh-CN/docs/Learn/CSS/CSS_layout/Responsive_Design)是根据屏幕大小和分辨率等因素动态更改你的应用程序的布局和其他功能的做法，因此对于不同设备类型的用户来说，它们是可用且无障碍的。

特别是，移动端设备需要解决的最常见的问题是：

- 移动端设备布局的适用性。例如，在窄屏上多列布局不能很好的工作，需要增加文字大小以提高可读性。这些问题可以通过[媒体查询](/zh-CN/docs/Web/CSS/CSS_media_queries)、[视口](/zh-CN/docs/Web/HTML/Viewport_meta_tag)、[弹性盒子](/zh-CN/docs/Learn/CSS/CSS_layout/Flexbox)来解决。
- 节省下载的图片大小。一般来说，小屏幕设备不需要与桌面设备一样大的图像，而且它们将更可能在慢速网络连接上。因此，适当地缩小屏幕设备以缩小图像是明智的。你可以使用[响应式图像技术](/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)处理此问题。
- 考虑高分辨率。许多移动设备具有高分辨率屏幕，因此需要更高分辨率的图像，使得显示器可以继续看起来清晰和锐利。再次，你可以使用响应式图像技术来适当地提供图像。此外，使用 SVG 矢量图像格式可以满足许多图像要求，这些格式在目前的浏览器中得到了很好的支持。SVG 文件较小，且不论以何种大小显示，它都会保持清晰（请参阅[向网页中添加矢量图形](/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web)以了解更多的细节）。

> **备注：** 我们不会在这里对响应式设计进行完整的讨论，因为它们在 MDN 其他地方都有涉及（参考上面的链接）。

### 具体的需要注意的点

这里有很多其他重要的需要考虑的点，它们可以让我们通过移动设备访问网站时更无障碍。我们在下面列出了一些，在我们想到更多内容时，我们将继续添加。

#### 不禁用缩放

使用[视口](/zh-CN/docs/Web/HTML/Viewport_meta_tag)可能会禁用缩放。要始终启用缩放，请在 {{htmlelement("head")}} 中将宽度设置为设备宽度：

```html
<meta name="viewport" content="width=device-width; user-scalable=yes" />
```

如果可以的话，你绝不应该设置 `user-scalable=no`。很多人都会依靠缩放来看你网站的内容，所以禁用缩放这个功能是一个很糟糕的主意。在某些情况下缩放会破坏 UI；这种情况下，你觉得你需要禁用缩放，你可以提供一些别的近似的方法。例如增加一个控制文字大小的控件。

#### 保持菜单无障碍

因为移动设备上的屏幕非常窄，所以使用媒体查询和其他技术使得导航菜单缩小到显示屏顶部的一个小图标，只有在需要的时候才展示菜单，这种方式在移动设备上很常见的。这通常由“三横线”图标表示，并且设计模式因此被称为“汉堡菜单”。

在实现这样的菜单时，需要确保显示控件的控件可以通过适当的控制机制（移动端通常为触摸）进行访问，如上面的[控制机制](#控制机制)中所讨论的那样，并且在访问菜单时页面的其他部分以某种方式移开或隐藏，以避免与导航混淆。

让我们来看一个很好的[“汉堡包菜单”的示例](https://fritz-weisshart.de/meg_men/)。

## 用户输入

在移动设备上，输入数据往往比在台式计算机上的同等体验更令用户恼火。使用桌面或笔记本电脑键盘输入文本到表单输入比触摸屏虚拟键盘或微小的移动物理键盘更方便。

出于这个原因，值得尽量减少所需的输入量。例如，与其让用户每次使用常规文本输入来填写他们的工作标题，而是可以提供一个 {{htmlelement("select")}} 菜单，其中包含最常见的选项（这也有助于数据输入的一致性），并提供一个“其他”选项，显示一个文本字段来输入任何异常值。你可以在 [common-job-types.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/common-job-types.html)中看到这个想法的一个简单示例（查看[常见任务实时示例](https://mdn.github.io/learning-area/accessibility/mobile/common-job-types.html)）。

也值得考虑在移动平台上使用 HTML 格式输入类型（如日期），因为它们可以得到很好的处理。例如，Android 和 iOS 都会显示可用于设备体验的可用控件。有关示例，请参阅 [html5-form-examples.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/html5-form-examples.html)（请查看 [HTML5 表单实时示例](https://mdn.github.io/learning-area/accessibility/mobile/html5-form-examples.html)）——尝试加载这些内容并在移动设备上对其进行操作。例如：

- 在输入数字（`number`）、电话（`tel`）和邮件（`email`）时，展示合适的虚拟键盘来输入数字。
- 在输入时间（`time`）和日期（`date`）时展示合适的选择器来选择时间和日期。

如果你想为桌面端提供不同的解决方案，则可以使用特性检测为你的移动设备始终提供不同的标记。有关检测不同输入类型的原始信息，请参阅[输入类型](https://diveinto.html5doctor.com/detect.html#input-types)，还可以查看我们的[特性检测文章](/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection)获取更多信息。

## 总结

在本文中，我们向你提供了有关常见移动设备无障碍问题的一些细节以及如何克服这些问题。我们还通过使用最常用的屏幕阅读器来帮助你进行无障碍测试。

## 参见

- [移动 Web 开发指南](https://www.smashingmagazine.com/2012/07/guidelines-for-mobile-web-development/)——“Smashing”杂志的文章列表，涵盖移动网页设计的不同技术。
- [使你的网站在触摸设备上工作](https://www.creativebloq.com/javascript/make-your-site-work-touch-devices-51411644)——有关使用触摸事件来获得在移动设备上进行交互的有用文章。

{{PreviousMenuNext("Learn/Accessibility/Multimedia","Learn/Accessibility/Accessibility_troubleshooting", "Learn/Accessibility")}}
