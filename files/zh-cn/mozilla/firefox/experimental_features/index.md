---
title: Firefox 中的实验性特性
slug: Mozilla/Firefox/Experimental_features
---

本页列出了 Firefox 的实验性和部分实现的特性，包括针对提议的或前沿的网络平台标准的特性，以及这些特性的版本信息、是否“默认”激活这些特性，以及可用于激活或停用这些特性的偏好设置。这样，就可以在特性发布前对其进行测试。

新特性首先出现在 [Firefox Nightly](https://www.mozilla.org/zh-CN/firefox/channel/desktop/) 版本中，通常默认启用。它们随后会引入到 [Firefox 浏览器开发者版](https://www.mozilla.org/zh-CN/firefox/developer/)，并最终引入到发布版本中。在发布版中默认启用某项特性后，该特性就不再被视为实验性特性，应从主题中删除。

可以使用 [Firefox 配置编辑器](https://support.mozilla.org/zh-CN/kb/about-config-editor-firefox)（在 Firefox 地址栏中输入 `about:config`）通过修改下面列出的相关首选项来启用或禁用实验特性。

> [!NOTE]
> 对编者的信息——当在这些表格添加特性时，请尝试使用 `[Firefox bug <number>](https://bugzil.la/<number>)` 包含指向相关 bug 的链接。

## HTML

### input type="search" 外观

输入类型 `type="search"` 的布局已更新。一旦有人开始输入，搜索字段就会有一个清晰的图标，以便与其他浏览器的实现相匹配。（详情请参见 [Firefox bug 558594](https://bugzil.la/558594)）。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>81</td>
      <td>否</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>81</td>
      <td>否</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>81</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>81</td>
      <td>否</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2"><code>layout.forms.input-type-search.enabled</code></td>
    </tr>
  </tbody>
</table>

### 切换密码显示

HTML 密码输入元素（[`<input type="password">`](/zh-CN/docs/Web/HTML/Reference/Elements/input/password)）包含一个“眼睛”图标，可通过切换来显示或遮盖密码文本（[Firefox bug 502258](https://bugzil.la/502258)）。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>96</td>
      <td>否</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>96</td>
      <td>否</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>96</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>96</td>
      <td>否</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2"><code>layout.forms.input-type-show-password-button.enabled</code></td>
    </tr>
  </tbody>
</table>

### ARIA 属性反射

为非 IDREF 属性启用了 [ARIA](/zh-CN/docs/Web/Accessibility/ARIA) 反射特性，允许作者通过 JavaScript API 直接获取和设置 DOM 元素上的 ARIA 属性，而不是使用 `setAttribute` 和 `getAttribute`（详情请参见 [Firefox bug 1824980](https://bugzil.la/1824980)）。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>114</td>
      <td>是</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>114</td>
      <td>否</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>114</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>114</td>
      <td>否</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2"><code>accessibility.ARIAReflection.enabled</code></td>
    </tr>
  </tbody>
</table>

## CSS

### 显示杂散控制字符的十六进制框

该特性会将除*制表符*（`U+0009`）、_换行符_（`U+000A`）、_换页符_（`U+000C`）和*回车符*（`U+000D`）以外的控制字符（Unicode 类别 Cc）渲染为十六进制框，而这些控制字符并非预期字符。（详见 [Firefox bug 1099557](https://bugzil.la/1099557)）。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>43</td>
      <td>是</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>43</td>
      <td>否</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>43</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>43</td>
      <td>否</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2">
        <code>layout.css.control-characters.enabled</code> 或 <code>layout.css.control-characters.visible</code>
      </td>
    </tr>
  </tbody>
</table>

### initial-letter 属性

{{cssxref("initial-letter")}} CSS 属性是 [CSS Inline Layout](https://drafts.csswg.org/css-inline/) 规范的一部分，允许指定如何显示下垂、凸起和下沉的首字母。（详情请参见 [Firefox bug 1223880](https://bugzil.la/1223880)）。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>50</td>
      <td>否</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>50</td>
      <td>否</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>50</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>50</td>
      <td>否</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2"><code>layout.css.initial-letter.enabled</code></td>
    </tr>
  </tbody>
</table>

### content-visibility: auto 值

如果内容[不与用户相关](/zh-CN/docs/Web/CSS/Guides/Containment#与用户相关)，[`content-visibility`](/zh-CN/docs/Web/CSS/Reference/Properties/content-visibility) CSS 属性值 `auto` 允许跳过渲染。（详见 [Firefox bug 1798485](https://bugzil.la/1798485)）。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>113</td>
      <td>是</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>109</td>
      <td>否</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>109</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>109</td>
      <td>否</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2"><code>layout.css.content-visibility.enabled</code></td>
    </tr>
  </tbody>
</table>

请注意，相关的 {{domxref("element/contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}} 事件和相关的 {{domxref("ContentVisibilityAutoStateChangeEvent")}} 接口是在版本 110 中添加的，并由相同的首选项控制。应用程序代码可使用这些特性监控可见性变化，并在用户代理[跳过元素内容](/zh-CN/docs/Web/CSS/Guides/Containment#跳过其中内容)时停止与渲染元素相关的进程。（详见 [Firefox bug 1791759](https://bugzil.la/1791759)。）

### 在媒体查询中将单个数字作为纵横比

在为[媒体查询](/zh-CN/docs/Web/CSS/Guides/Media_queries)指定宽高比时，支持将单个 {{cssxref("number")}} 用作 {{cssxref("ratio")}} 。（详见 [Firefox bug 1565562](https://bugzil.la/1565562)）。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>70</td>
      <td>否</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>70</td>
      <td>否</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>70</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>70</td>
      <td>否</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2"><code>layout.css.aspect-ratio-number.enabled</code></td>
    </tr>
  </tbody>
</table>

### backdrop-filter 属性

{{cssxref("backdrop-filter")}} 属性会对元素后面的区域应用过滤效果。（详情请参见 [Firefox bug 1178765](https://bugzil.la/1178765)）。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>70</td>
      <td>否</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>70</td>
      <td>否</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>70</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>70</td>
      <td>否</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2"><code>layout.css.backdrop-filter.enabled</code></td>
    </tr>
  </tbody>
</table>

### CSS 函数 ray()

CSS {{cssxref("ray")}} 函数是定义 {{cssxref("offset-path")}} 的一种方法。该函数将路径定义为从 {{cssxref("offset-position")}} 开始并向指定角度方向延伸的线段（[Firefox bug 1582554](https://bugzil.la/1582554)）。

在版本 112 中，该函数添加了 `<ray_size>` 可选参数。如果没有提供 `<ray_size>`参数，该函数将默认使用 `closest-side` 值（[Firefox bug 1820071](https://bugzil.la/1820071)）。

在版本 116 中，该函数增加了 `at <position>` 可选参数。如果省略，则使用元素的 `offset-position` 值。如果同时没有 `at <position>` 和 `offset-position` 值，则使用 `offset-position: auto` 作为射线的起始位置，将元素置于元素框的左上角。（[Firefox bug 1820070](https://bugzil.la/1820070)）

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>72</td>
      <td>是</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>72</td>
      <td>否</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>72</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>72</td>
      <td>否</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2"><code>layout.css.motion-path-ray.enabled</code></td>
    </tr>
  </tbody>
</table>

### Masonry grid 布局

新增对基于网格布局的 [masonry 风格布局](/zh-CN/docs/Web/CSS/Guides/Grid_layout/Masonry_layout)的支持，其中一个轴为 masonry 布局，另一个轴为普通网格布局。这样，开发人员就能像在 Pinterest 上一样轻松创建画廊风格的布局。更多详情，请参阅 [Firefox bug 1607954](https://bugzil.la/1607954)。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>77</td>
      <td>是</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>77</td>
      <td>否</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>77</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>77</td>
      <td>否</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2">
        <code>layout.css.grid-template-masonry-value.enabled</code>
      </td>
    </tr>
  </tbody>
</table>

### fit-content() 函数

{{cssxref("fit-content_function", "fit-content()")}} 函数适用于 {{cssxref("width")}} 和其他大小属性。CSS 网格布局轨迹大小已经支持该函数。（详情请参见 [Firefox bug 1312588](https://bugzil.la/1312588)）

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>91</td>
      <td>否</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>91</td>
      <td>否</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>91</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>91</td>
      <td>否</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2"><code>layout.css.fit-content-function.enabled</code></td>
    </tr>
  </tbody>
</table>

### 滚动驱动的动画

滚动驱动动画早先被称为“滚动链接动画”，它取决于滚动条的滚动位置，而不是时间或其他维度。通过 {{cssxref('scroll-timeline-name')}} 和 {{cssxref('scroll-timeline-axis')}} 属性（以及 {{cssxref('scroll-timeline')}} 速记属性），你可以指定特定命名容器中的特定滚动条作为滚动驱动动画的源。然后，通过将 {{cssxref('animation-timeline')}} 属性设置为使用 `scroll-timeline-name` 定义的名称值，可以将滚动时间轴与[动画](/zh-CN/docs/Web/CSS/Guides/Animations)关联。

使用 {{cssxref('scroll-timeline')}} 速记属性时，属性值的顺序必须是 {{cssxref('scroll-timeline-name')}} 后跟 {{cssxref('scroll-timeline-axis')}}。完整属性和速记属性均可在首选项后面使用。

也可以使用 [`scroll()`](/zh-CN/docs/Web/CSS/Reference/Properties/animation-timeline/scroll) 函数标记和 {{cssxref('animation-timeline')}} 来表示时间轴将使用祖先元素中的滚动条轴。

有关详细信息，请参阅 [Firefox bug 1807685](https://bugzil.la/1807685)、[Firefox bug 1804573](https://bugzil.la/1804573)、[Firefox bug 1809005](https://bugzil.la/1809005)、[Firefox bug 1676791](https://bugzil.la/1676791)、[Firefox bug 1754897](https://bugzil.la/1754897) 和 [Firefox bug 1737918](https://bugzil.la/1737918)。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>110</td>
      <td>否</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>110</td>
      <td>否</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>110</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>110</td>
      <td>否</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2"><code>layout.css.scroll-driven-animations.enabled</code></td>
    </tr>
  </tbody>
</table>

### :has() 伪类

[`:has()`](/zh-CN/docs/Web/CSS/Reference/Selectors/:has) 伪类会选择包含作为参数传递的选择器的元素。（详见 [Firefox bug 1771896](https://bugzil.la/1771896)）。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>103</td>
      <td>否</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>103</td>
      <td>否</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>103</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>103</td>
      <td>否</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2"><code>layout.css.has-selector.enabled</code></td>
    </tr>
  </tbody>
</table>

### @font-face src 特性检查

`@font-face` [`src` 描述符](/zh-CN/docs/Web/CSS/Reference/At-rules/@font-face/src)现在支持 `tech()` 函数，允许根据用户代理是否支持特定字体特性或技术来决定是否下载字体资源。详情请参见 [Firefox bug 1715546](https://bugzil.la/1715546)。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>105</td>
      <td>是</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>105</td>
      <td>否</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>105</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>105</td>
      <td>否</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2"><code>layout.css.font-tech.enabled</code></td>
    </tr>
  </tbody>
</table>

### round() 数学函数

CSS [`round()`](/zh-CN/docs/Web/CSS/Reference/Values/round) 函数是一个数学函数，可根据选定的舍入策略对数字（或表达式的结果）进行舍入。详情请参见 [Firefox bug 1764850](https://bugzil.la/1764850)。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>108</td>
      <td>是</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>108</td>
      <td>否</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>108</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>108</td>
      <td>否</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2"><code>layout.css.round.enabled</code></td>
    </tr>
  </tbody>
</table>

### font-variant-emoji

通过 CSS [`font-variant-emoji`](/zh-CN/docs/Web/CSS/Reference/Properties/font-variant-emoji) 属性，你可以设置显示表情符号的默认显示样式。详情请参见（[Firefox bug 1461589](https://bugzil.la/1461589)）。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>108</td>
      <td>是</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>108</td>
      <td>否</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>108</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>108</td>
      <td>否</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2"><code>layout.css.font-variant-emoji.enabled</code></td>
    </tr>
  </tbody>
</table>

### page-orientation

**`page-orientation`** [CSS](/zh-CN/docs/Web/CSS) {{cssxref("@page")}} at-rule 的描述符控制打印页面的旋转。当页面方向发生变化时，它将处理跨页面的内容流。该行为与 [`size`](/zh-CN/docs/Web/CSS/Reference/At-rules/@page/size) 描述符不同，用户可以定义页面的旋转方向。详情请参见（[Firefox bug 1673987](https://bugzil.la/1673987)）。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>111</td>
      <td>是</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>111</td>
      <td>否</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>111</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>111</td>
      <td>否</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2"><code>layout.css.page-orientation.enabled</code></td>
    </tr>
  </tbody>
</table>

### prefers-reduced-transparency 媒体特性

CSS [`prefers-reduced-transparency``](/zh-CN/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-transparency) 媒体特性可让你检测用户是否已启用设置，以尽量减少设备上的透明或半透明图层效果。
更多详情请参见（[Firefox bug 1736914](https://bugzil.la/1736914)）。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>113</td>
      <td>否</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>113</td>
      <td>否</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>113</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>113</td>
      <td>否</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2"><code>layout.css.prefers-reduced-transparency.enabled</code></td>
    </tr>
  </tbody>
</table>

### inverted-colors 媒体特性

通过 CSS [`inverted-colors`](/zh-CN/docs/Web/CSS/Reference/At-rules/@media/inverted-colors) 媒体特性，可以检测用户代理或底层操作系统是否正在反转颜色。详情请参阅（[Firefox bug 1794628](https://bugzil.la/1794628)）。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>114</td>
      <td>否</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>114</td>
      <td>否</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>114</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>114</td>
      <td>否</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2"><code>layout.css.inverted-colors.enabled</code></td>
    </tr>
  </tbody>
</table>

### 具名观看进度时间线属性

通过 CSS [`view-timeline-name`](/zh-CN/docs/Web/CSS/Reference/Properties/view-timeline-name) 属性，你可以为特定元素赋予一个名称，表明其祖先滚动元素是视图进度时间轴的来源。然后，可以将该名称分配给 `animation-timeline`，当相关元素在其祖先滚动器的可见区域内移动时，`animation-timeline` 就会为其制作动画。详情请参见（[Firefox bug 1737920](https://bugzil.la/1737920)）。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>114</td>
      <td>否</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>114</td>
      <td>否</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>114</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>114</td>
      <td>否</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2"><code>layout.css.scroll-driven-animations.enabled</code></td>
    </tr>
  </tbody>
</table>

### 匿名观看进度时间线属性

通过 CSS [`view()`](/zh-CN/docs/Web/CSS/Reference/Properties/animation-timeline/view) 函数，可以指定元素的 `animation-timeline` 为视图进度时间轴，当元素在其父元素滚动条的可见区域内移动时，该时间轴将为其制作动画。该函数定义了提供时间轴的父元素的轴，以及动画开始和开始的可见区域的嵌入区。详情请参见（[Firefox bug 1808410](https://bugzil.la/1808410)）。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>114</td>
      <td>否</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>114</td>
      <td>否</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>114</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>114</td>
      <td>否</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2"><code>layout.css.scroll-driven-animations.enabled</code></td>
    </tr>
  </tbody>
</table>

### offset-position 属性

CSS {{cssxref("offset-position")}} 属性定义了元素在路径上的初始位置。该属性的语法中新增了一个名为 `normal` 的关键字。使用该关键字时，元素在 {{cssxref("offset-path")}} 上的初始起始位置取决于用于指定 `offset-path` 属性值的 CSS 函数（{{cssxref("path")}} 或 {{cssxref("ray")}}）。更多信息，请参阅 {{cssxref("offset-position")}}。详情请参见（[Firefox bug 1559232](https://bugzil.la/1559232)）。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>116</td>
      <td>是</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>116</td>
      <td>否</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>116</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>116</td>
      <td>否</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2"><code>layout.css.motion-path-offset-position.enabled</code></td>
    </tr>
  </tbody>
</table>

### abs() 和 sign() 数学函数

CSS [`abs()`](/zh-CN/docs/Web/CSS/Reference/Values/abs) 和 [`sign()`](/zh-CN/docs/Web/CSS/Reference/Values/sign) 数学函数允许你分别获取参数的绝对值和符号。详情请参见 [Firefox bug 1814588](https://bugzil.la/1814588) 和 [Firefox bug 1814589](https://bugzil.la/1814589)。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>117</td>
      <td>是</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>117</td>
      <td>否</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>117</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>117</td>
      <td>否</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2">
      <code>layout.css.abs-sign.enabled</code>
    </td>
    </tr>
  </tbody>
</table>

### rect() 和 xywh() 基本图形函数

通过 CSS [`rect()`](/zh-CN/docs/Web/CSS/Reference/Values/basic-shape/rect) 和 [`xywh()`](/zh-CN/docs/Web/CSS/Reference/Values/basic-shape/xywh) 形状函数，你可以使用 [`<basic-shape>`](/zh-CN/docs/Web/CSS/Reference/Values/basic-shape) 数据类型定义矩形。在 CSS 属性（如 {{cssxref("offset-path")}}）中，这些函数用于定义元素移动路径的形状。使用 `rect()` 函数，可以指定矩形边缘与包含块的顶部边缘和左侧边缘的偏移量。使用 `xywh()` 函数，可以指定矩形边缘与包含块的左边缘和顶边缘的偏移量，以及矩形的宽度和高度。在这两个函数中，都可以选择对边角进行舍入。有关详细信息，请参阅 `rect()` 函数的 [Firefox bug 1786161](https://bugzil.la/1786161) 和 `xywh()` 函数的 [Firefox bug 1786160](https://bugzil.la/1786160)。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>117</td>
      <td>是</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>117</td>
      <td>否</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>117</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>117</td>
      <td>否</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2">
      <code>layout.css.motion-path-basic-shapes.enabled</code>、<code>layout.css.basic-shape-rect.enabled</code>、<code>layout.css.basic-shape-xywh.enabled</code>
    </td>
    </tr>
  </tbody>
</table>

## SVG

### SVGPathSeg API 接口

SVGPathSeg API 接口将不再包含，并被置于首选项之后。其中包括 `SVGPathSegList`、[SVGPathElement.getPathSegAtLength()](/zh-CN/docs/Web/API/SVGPathElement)、`SVGAnimatedPathData`。（详见 [Firefox bug 1388931](https://bugzil.la/1388931)）。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>97</td>
      <td>否</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>97</td>
      <td>否</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>97</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>97</td>
      <td>否</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2"><code>dom.svg.pathSeg.enabled</code></td>
    </tr>
  </tbody>
</table>

## JavaScript

### 数组（可迭代）分组方法

{{jsxref("Object.groupBy()")}} 和 {{jsxref("Map.groupBy()")}} 静态方法分别用于使用字符串或测试函数返回的值对可迭代元素进行分组。当字符串可用于表示元素组时，应使用第一个方法，而当元素与特定对象相关联时，可使用 `Map` 中的方法。（详见 [Firefox bug 1841518](https://bugzil.la/1841518)）。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>117</td>
      <td>否</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>NA</td>
      <td>否</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>NA</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>NA</td>
      <td>否</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2"><code>javascript.options.experimental.array_grouping</code></td>
    </tr>
  </tbody>
</table>

### 数组转移

{{jsxref("ArrayBuffer.prototype.transfer()")}} 和 {{jsxref("ArrayBuffer.prototype.transferToFixedLength()")}} 方法用于从一个{{jsxref("ArrayBuffer")}} 向另一个 {{jsxref("ArrayBuffer")}} [转移内存所有权](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer#转移_arraybuffers)。`transferToFixedLength()`方法总是创建固定长度的缓冲区，而 `transfer()` 方法可以创建可变长度的缓冲区，但前提是原始缓冲区的长度是可变的。传输后，原始缓冲区将从原始内存中分离，因此无法使用；可以使用 {{jsxref("ArrayBuffer.prototype.detached")}} 检查其状态。（详情请参见 [Firefox bug 1841113](https://bugzil.la/1841113)）。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>117</td>
      <td>否</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>NA</td>
      <td>否</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>NA</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>NA</td>
      <td>否</td>
    </tr>
    <tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2"><code>javascript.options.experimental.arraybuffer_transfer</code></td>
    </tr>
    </tr>
  </tbody>
</table>

### 字符串 isWellFormed() 和 toWellFormed() 方法

JavaScript 中的字符串由无符号 16 位整数序列表示，因此有可能出现有效字符串值不是格式良好的 Unicode 文本的情况。{{jsxref("String.prototype.isWellFormed()")}} 和 {{jsxref("String.prototype.toWellFormed()")}} 方法分别用于检查字符串是否为格式正确的 Unicode 文本，以及将字符串转换为格式正确的 Unicode 文本。详见 [tc39/proposal-is-usv-string](https://github.com/tc39/proposal-is-usv-string) 和 [Firefox bug 1825005](https://bugzil.la/1825005)。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>115</td>
      <td>否</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2"><code>javascript.options.experimental.well_formed_unicode_strings</code></td>
    </tr>
  </tbody>
</table>

## API

### 图形：Canvas、WebGL 和 WebGPU

#### 热点区域

鼠标坐标是否位于画布上的特定区域内是一个需要解决的常见问题。通过点击区域 API，可以定义画布的某个区域，并为将画布上的交互式内容展示给辅助工具提供了另一种可能性。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>30</td>
      <td>否</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>30</td>
      <td>否</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>30</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>30</td>
      <td>否</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2"><code>canvas.hitregions.enabled</code></td>
    </tr>
  </tbody>
</table>

#### WebGL：草稿扩展

启用此偏好设置后，当前处于“草稿”状态且正在测试的任何 WebGL 扩展都将启用。目前，Firefox 没有正在测试的 WebGL 扩展。

#### WebGPU API

[WebGPU API](/zh-CN/docs/Web/API/WebGPU_API) 为使用用户设备或计算机的[图形处理单元](https://zh.wikipedia.org/wiki/圖形處理器)（GPU）执行计算和图形渲染提供底层支持。请参见 [Firefox bug 1602129](https://bugzil.la/1602129)，了解我们在此 API 方面的进展。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>113</td>
      <td>是</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>73</td>
      <td>否</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>73</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>73</td>
      <td>否</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2"><code>dom.webgpu.enabled</code></td>
    </tr>
  </tbody>
</table>

### WebRTC 和媒体

以下试验性特性包括 [WebRTC API](/zh-CN/docs/Web/API/WebRTC_API)、[网络音频 API](/zh-CN/docs/Web/API/Web_Audio_API)、[媒体源扩展 API](/zh-CN/docs/Web/API/Media_Source_Extensions_API)、[加密媒体扩展 API](/zh-CN/docs/Web/API/Encrypted_Media_Extensions_API) 和 [Media 捕获和流 API](/zh-CN/docs/Web/API/Media_Capture_and_Streams_API)。

#### 异步 SourceBuffer 添加和移除

这将为 SourceBuffer 添加基于 promise 的 {{domxref("SourceBuffer.appendBufferAsync", "appendBufferAsync()")}} 和 {{domxref("SourceBuffer.removeAsync", "removeAsync()")}} 方法，用于添加和删除媒体源缓冲区。更多信息请参见 [Firefox bug 1280613](https://bugzil.la/1280613) 和 [Firefox bug 778617](https://bugzil.la/778617)。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>62</td>
      <td>否</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>62</td>
      <td>否</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>62</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>62</td>
      <td>否</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2"><code>media.mediasource.experimental.enabled</code></td>
    </tr>
  </tbody>
</table>

#### AVIF 严格合规性

`image.avif.compliance_strictness` 偏好设置可用于控制处理 [AVIF](/zh-CN/docs/Web/Media/Guides/Formats/Image_types#avif_图像) 图像时应用的*严格程度*。这允许 Firefox 用户显示在某些其他浏览器上呈现的图像，即使这些图像并不严格符合标准。

允许的值为：

- `0`: 接受建议（“应该”）和要求（“必须”）中违反规范的图像，前提是它们可以被安全或明确地解释。
- `1`（默认）：拒绝违反要求，但允许违反建议。
- `2`: 严格。拒绝任何违反要求或建议的行为。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>92</td>
      <td>1</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>92</td>
      <td>1</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>92</td>
      <td>1</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>92</td>
      <td>1</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2"><code>image.avif.compliance_strictness</code></td>
    </tr>
  </tbody>
</table>

#### JPEG XL 支持

如果启用此特性，Firefox 支持 [JPEG XL](https://jpeg.org/jpegxl/) 图像。详情请参见 [Firefox bug 1539075](https://bugzil.la/1539075)。

请注意，如下表所示，该特性只适用于 Nightly 构建版本（无论是否设置了偏好设置）。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>90</td>
      <td>否</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2"><code>image.jxl.enabled</code></td>
    </tr>
  </tbody>
</table>

#### OpenFont COLRv1 字体

该特性支持 [OpenFont COLRv1 字体规范](https://docs.microsoft.com/en-us/typography/opentype/spec/)。这样就可以使用 CSS [`@font-face`](/zh-CN/docs/Web/CSS/Reference/At-rules/@font-face) 规则或 [CSS 字体加载 API](/zh-CN/docs/Web/API/CSS_Font_Loading_API) 来加载带有渐变、合成和混合特性的压缩友好型彩色矢量字体。详情请参见 [Firefox bug 1740530](https://bugzil.la/1740530)。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>105</td>
      <td>否</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>105</td>
      <td>否</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>105</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>105</td>
      <td>否</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2"><code>gfx.font_rendering.colr_v1.enabled</code></td>
    </tr>
  </tbody>
</table>

#### CSS 属性和值 API

[CSS 属性和值 API](/zh-CN/docs/Web/API/CSS_Properties_and_Values_API) 允许开发人员通过 JavaScript 中的 [`registerProperty()`](/zh-CN/docs/Web/API/CSS/registerProperty_static)或 CSS 中的 [`@property`](/zh-CN/docs/Web/CSS/Reference/At-rules/@property) 规则注册自定义 CSS 属性。使用这两种方法注册属性时，可以进行类型检查、设置默认值，以及设置是否从父元素继承值。详情请参见 [Firefox bug 1840480](https://bugzil.la/1840480)。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>116</td>
      <td>是</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>116</td>
      <td>否</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>116</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>116</td>
      <td>否</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2"><code>layout.css.property-and-value-api.enabled</code></td>
    </tr>
  </tbody>
</table>

#### CSS 自定义高亮 API

[CSS 自定义高亮 API](/zh-CN/docs/Web/API/CSS_Custom_Highlight_API) 为文档中任意文本范围的样式化提供了一种机制（概括了其他高亮伪元素的行为，如 {{cssxref('::selection')}}、{{cssxref('::spelling-error')}}、{{cssxref('::grammar-error')}} 和 {{cssxref('::target-text')}}）。这些范围在 JavaScript 中使用 [`Range`](/zh-CN/docs/Web/API/Range) 实例进行定义，这些实例在 [`Highlight`](/zh-CN/docs/Web/API/Highlight) 中分组，然后使用 [`HighlightRegistry`](/zh-CN/docs/Web/API/HighlightRegistry) 注册名称。CSS [`::highlight`](/zh-CN/docs/Web/CSS/Reference/Selectors/::highlight) 伪元素用于为已注册的高亮应用样式。详情请参见 [Firefox bug 1703961](https://bugzil.la/1703961)。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>117</td>
      <td>是</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>117</td>
      <td>否</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>117</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>117</td>
      <td>否</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2"><code>dom.customHighlightAPI.enabled</code></td>
    </tr>
  </tbody>
</table>

### Service Worker

#### 在导航时预加载 service worker 资源

{{domxref("NavigationPreloadManager")}} 接口可用于在导航至页面时启用资源预加载。预加载与 Worker 启动同时进行，从而缩短了从开始导航到获取资源的总时间。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>99</td>
      <td>是</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>97</td>
      <td>否</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>97</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>97</td>
      <td>否</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2"><code>dom.serviceWorkers.navigationPreload.enabled</code></td>
    </tr>
  </tbody>
</table>

### WebVR API

#### WebVR API（已禁用）

已废弃的 [WebVR API](/zh-CN/docs/Web/API/WebVR_API) 即将被移除。在所有版本中默认禁用该 API。（[Firefox bug 1750902](https://bugzil.la/1750902)）

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>98</td>
      <td>否</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>98</td>
      <td>否</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>98</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>98</td>
      <td>否</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2"><code>dom.vr.enabled</code></td>
    </tr>
  </tbody>
</table>

### HTML DOM API

#### Popover API

Firefox 现在支持 [Popover API](/zh-CN/docs/Web/API/Popover_API)。

以下 Web API 现在已经得到实现：

- [`HTMLButtonElement.popoverTargetElement`](/zh-CN/docs/Web/API/HTMLButtonElement/popoverTargetElement) 和 [`HTMLButtonElement.popoverTargetAction`](/zh-CN/docs/Web/API/HTMLButtonElement/popoverTargetAction)。
- [`HTMLInputElement.popoverTargetElement`](/zh-CN/docs/Web/API/HTMLInputElement/popoverTargetElement) 和 [`HTMLInputElement.popoverTargetAction`](/zh-CN/docs/Web/API/HTMLInputElement/popoverTargetAction)。
- [`HTMLElement.popover`](/zh-CN/docs/Web/API/HTMLElement/popover)、[`HTMLElement.hidePopover()`](/zh-CN/docs/Web/API/HTMLElement/hidePopover)、[`HTMLElement. showPopover()`](/zh-CN/docs/Web/API/HTMLElement/showPopover) 和 [`HTMLElement.togglePopover()`](/zh-CN/docs/Web/API/HTMLElement/togglePopover)。
- `HTMLElement` [`beforetoggle` 事件](/zh-CN/docs/Web/API/HTMLElement/beforetoggle_event)、`HTMLElement` [`toggle_event` 事件](/zh-CN/docs/Web/API/HTMLElement/toggle_event) 和 [`ToggleEvent`](/zh-CN/docs/Web/API/ToggleEvent)。

CSS 更新包括：

- [`:popover-open`](/zh-CN/docs/Web/CSS/Reference/Selectors/:popover-open)
- [`::backdrop`](/zh-CN/docs/Web/CSS/Reference/Selectors/::backdrop) 已经得到扩展以支持 popover。

以下 HTML 全局属性得到了支持：

- [`popovertarget`](/zh-CN/docs/Web/HTML/Reference/Elements/button#popovertarget)
- [`popovertargetaction`](/zh-CN/docs/Web/HTML/Reference/Elements/button#popovertargetaction)

参见 [Firefox bug 1823757](https://bugzil.la/1823757) 以获取更多细节。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>114</td>
      <td>否</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>114</td>
      <td>否</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>114</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>114</td>
      <td>否</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2"><code>dom.element.popover.enabled</code></td>
    </tr>
  </tbody>
</table>

#### HTMLMediaElement 方法：setSinkId()

{{domxref("HTMLMediaElement.setSinkId()")}} 允许你在 {{domxref("HTMLMediaElement")}} 上设置音频输出设备的 sink ID，从而更改音频的输出位置。详情请参见 [Firefox bug 934425](https://bugzil.la/934425)。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>64</td>
      <td>否</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>64</td>
      <td>否</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>64</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>64</td>
      <td>否</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2"><code>media.setsinkid.enabled</code></td>
    </tr>
  </tbody>
</table>

#### HTMLMediaElement 属性：audioTracks 和 videoTracks

启用此特性可为所有 HTML 媒体元素添加 {{domxref("HTMLMediaElement.audioTracks")}} 和 {{domxref("HTMLMediaElement.videoTracks")}} 属性。不过，由于 Firefox 目前不支持多音频和视频音轨，这些属性的最常见用例不起作用，因此默认情况下它们都被禁用。详情请参见 [Firefox bug 1057233](https://bugzil.la/1057233)。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>33</td>
      <td>否</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>33</td>
      <td>否</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>33</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>33</td>
      <td>否</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2"><code>media.track.enabled</code></td>
    </tr>
  </tbody>
</table>

#### ClipboardItem

现在支持 {{domxref('Clipboard API')}} 的 {{domxref('ClipboardItem')}} 接口，{{domxref('Clipboard.write()')}} 接受{{domxref('ClipboardItem','剪贴板项')}}序列，而不是之前实现的{{domxref('DataTransfer','dataTransfer 对象')}}。它可在首选项前缀 `dom.events.asyncClipboard.clipboardItem`（即之前的 `dom.events.asyncClipboard.dataTransfer`）使用。详情请参见 [Firefox bug 1619947](https://bugzil.la/1619947)。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>87</td>
      <td>否</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>87</td>
      <td>否</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>87</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>87</td>
      <td>否</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2"><code>dom.events.asyncClipboard.clipboardItem</code></td>
    </tr>
  </tbody>
</table>

#### ClipboardRead

{{domxref('Clipboard')}}接口的 [Clipboard.read()](/zh-CN/docs/Web/API/Clipboard/read) 方法现在也可在 `dom.events.asyncClipboard.read` 首选项设置下使用，而以前则在 `dom.events.asyncClipboard.clipboardItem` 首选项设置下使用。（详情请参见 [Firefox bug 1701512](https://bugzil.la/1701512)）。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>90</td>
      <td>否</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>90</td>
      <td>否</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>90</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>90</td>
      <td>否</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2"><code>dom.events.asyncClipboard.read</code></td>
    </tr>
  </tbody>
</table>

#### GeometryUtils 方法：convertPointFromNode()、convertRectFromNode() 和 convertQuadFromNode()

`GeometryUtils` 方法 `convertPointFromNode()`、`convertRectFromNode()` 和 `convertQuadFromNode()` 将给定的点、矩形或四边形从调用它们的 {{domxref("Node")}} 映射到另一个节点。（详见 [Firefox bug 918189](https://bugzil.la/918189)）。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>31</td>
      <td>是</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>31</td>
      <td>否</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>31</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>31</td>
      <td>否</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2"><code>layout.css.convertFromNode.enable</code></td>
    </tr>
  </tbody>
</table>

#### GeometryUtils 方法：getBoxQuads()

`GeometryUtils` 方法 `getBoxQuads()` 返回 {{domxref("Node")}} 相对于任何其他节点或视口的 CSS 框。（详见 [Firefox bug 917755](https://bugzil.la/917755)）。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>31</td>
      <td>是</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>31</td>
      <td>否</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>31</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>31</td>
      <td>否</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2"><code>layout.css.getBoxQuads.enabled</code></td>
    </tr>
  </tbody>
</table>

#### ElementInternals：表单相关自定义元素方法和属性

新增 {{domxref("ElementInternals")}} 属性和方法，允许自定义元素与表单交互：

- {{domxref("ElementInternals.form", "form")}} 属性可获取与元素相关联的表单。
- {{domxref("ElementInternals.labels", "labels")}} 属性获取与元素关联的标签列表。
- {{domxref("ElementInternals.willValidate", "willValidate")}}属性检查自定义表单元素是否会被验证。
- 如果需要，{{domxref("ElementInternals.setFormValue()", "setFormValue()")}} 方法会设置净化值和用户输入的数据。

详见 [Firefox bug 1556362](https://bugzil.la/1556362)、[Firefox bug 1556373](https://bugzil.la/1556373)、[Firefox bug 1556365](https://bugzil.la/1556365)、[Firefox bug 1556449](https://bugzil.la/1556449)。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>95</td>
      <td>是</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>95</td>
      <td>否</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>95</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>95</td>
      <td>否</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2"><code>dom.webcomponents.formAssociatedCustomElement.enabled</code></td>
    </tr>
  </tbody>
</table>

### 付款请求 API

#### 首要付款处理

[支付请求应用程序接口](/zh-CN/docs/Web/API/Payment_Request_API)支持在网页内容或应用程序中处理基于网络的支付。由于在用户界面测试过程中出现了一个错误，我们决定推迟发布该 API，同时讨论对 API 可能进行的修改。相关工作正在进行中。（详见 [Firefox bug 1318984](https://bugzil.la/1318984)）。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>55</td>
      <td>否</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>55</td>
      <td>否</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>55</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>55</td>
      <td>否</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2">
        <code>dom.payments.request.enabled</code> and<br /><code
          >dom.payments.request.supportedRegions</code
        >
      </td>
    </tr>
  </tbody>
</table>

### WebShare API

[Web 分享 API](/zh-CN/docs/Web/API/Web_Share_API) 允许从网站共享文件、URL 和其他数据。该特性在安卓系统的所有版本中均已启用，但在桌面系统中则需要指定首选项设置（除非另有说明）。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>71</td>
      <td>否 (default). 是 (Windows from version 92)</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>71</td>
      <td>否</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>71</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>71</td>
      <td>否 (Desktop). 是 (Android).</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2"><code>dom.webshare.enabled</code></td>
    </tr>
  </tbody>
</table>

### 屏幕方向 API

#### ScreenOrientation.lock()

{{domxref("ScreenOrientation.lock()")}} 方法允许在设备支持和浏览器预锁定要求允许的情况下，将设备锁定为特定方向。通常只有在移动设备上全屏显示文档时才允许锁定方向。详见 [Firefox bug 1697647](https://bugzil.la/1697647)。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>111</td>
      <td>是</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>97</td>
      <td>否</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>97</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>97</td>
      <td>否</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2"><code>dom.screenorientation.allow-lock</code></td>
    </tr>
  </tbody>
</table>

### 优先级任务调度 API

[优先级任务调度 API](/zh-CN/docs/Web/API/Prioritized_Task_Scheduling_API) 提供了一种标准化的方法，可对属于应用程序的所有任务进行优先排序，无论这些任务是在网站开发人员的代码中定义的，还是在第三方库和框架中定义的。

Firefox Nightly（仅）从 Firefox 101 开始启用此特性。其他版本没有提供启用该特性的首选项。

### 通知 API

在 Windows 系统和 Nightly 版本中，通知的 [`requireInteraction`](/zh-CN/docs/Web/API/Notification/requireInteraction) 属性默认设置为 true（[Firefox bug 1794475](https://bugzil.la/1794475)）。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>117</td>
      <td>是</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>117</td>
      <td>否</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>117</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>117</td>
      <td>Windows only</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2"><code>dom.webnotifications.requireinteraction.enabled</code></td>
    </tr>
  </tbody>
</table>

## 安全与隐私

### 在加密页面上阻止纯文本请求

为了帮助减轻由加密页面上的 Flash 内容引起的中间人攻击（MitM），已添加了一个首选项，将 `OBJECT_SUBREQUEST` 视为活动内容。详见 [Firefox bug 1190623](https://bugzil.la/1190623)。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>59</td>
      <td>否</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>59</td>
      <td>否</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>59</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>59</td>
      <td>否</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2">
        <code>security.mixed_content.block_object_subrequest</code>
      </td>
    </tr>
  </tbody>
</table>

### “不安全页面”标签

当页面以不安全方式加载（即使用 {{Glossary("HTTP")}} 而不是 {{Glossary("HTTPS")}} 加载）时，这两个首选项会在地址栏中传统的锁图标旁添加“不安全”文本标签。详见 [Firefox bug 1335970](https://bugzil.la/1335970)。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>60</td>
      <td>否</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>60</td>
      <td>否</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>60</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>60</td>
      <td>否</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2">
        普通浏览模式下：<code>security.insecure_connection_text.enabled</code>，隐私浏览模式下：<code>security.insecure_connection_text.pbmode.enabled</code>
      </td>
    </tr>
  </tbody>
</table>

### 升级混合显示内容

启用此首选项设置后，Firefox 会在安全页面上自动将媒体内容请求从 HTTP 升级到 HTTPS。这样做的目的是防止出现混合内容的情况，即某些内容以安全方式加载，而其他内容则不安全。如果升级失败（因为媒体主机不支持 HTTPS），则不会加载媒体。（详见 [Firefox bug 1435733](https://bugzil.la/1435733)）。

这也会更改控制台警告；如果升级成功，消息会显示请求已升级，而不是显示警告。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>84</td>
      <td>是</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>60</td>
      <td>否</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>60</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>60</td>
      <td>否</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2">
        <code>security.mixed_content.upgrade_display_content</code>
      </td>
    </tr>
  </tbody>
</table>

### 权限策略 / 特性策略

[权限策略](/zh-CN/docs/Web/HTTP/Guides/Permissions_Policy) 允许网络开发人员有选择地启用、禁用和修改浏览器中某些特性和 API 的行为。它与 CSP 类似，但控制的是特性而不是安全行为。请注意，在 Firefox 中实现的是**特性策略**，这是该规范早期版本中使用的名称。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>65</td>
      <td>否</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>65</td>
      <td>否</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>65</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>65</td>
      <td>否</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2">
        <code>dom.security.featurePolicy.header.enabled</code>
      </td>
    </tr>
  </tbody>
</table>

### Clear-Site-Data“cache”指令

[`Clear-Site-Data`](/zh-CN/docs/Web/HTTP/Reference/Headers/Clear-Site-Data) HTTP 响应标头 `cache` 指令会清除请求网站的浏览器缓存。

> [!NOTE]
> 这原本在默认情况下是启用的，但在版本 94（[Firefox bug 1729291](https://bugzil.la/1729291)）中被置于首选项之后。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>63</td>
      <td>否</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>63</td>
      <td>否</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>63</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>63</td>
      <td>否</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2">
        <code>privacy.clearsitedata.cache.enabled</code>
      </td>
    </tr>
  </tbody>
</table>

## HTTP

### 默认 SameSite=Lax

[`SameSite` cookie](/zh-CN/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) 的默认值为 `Lax`。在此设置下，只有当用户导航到原始站点时才会发送 cookie，而不会发送跨站点子请求以将图像或框架加载到第三方站点等。详见 [Firefox bug 1617609](https://bugzil.la/1617609)。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>69</td>
      <td>否</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>69</td>
      <td>否</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>69</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>69</td>
      <td>否</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2"><code>network.cookie.sameSite.laxByDefault</code></td>
    </tr>
  </tbody>
</table>

### HTTP 状态码 103

服务器可能会发送 [`103 Early Hints`](/zh-CN/docs/Web/HTTP/Reference/Status/103) HTTP [信息响应](/zh-CN/docs/Web/HTTP/Reference/Status#信息响应)状态代码，以允许用户代理在服务器仍在准备完整响应时开始预加载资源。详见 [Firefox bug 1813035](https://bugzil.la/1813035)。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>111</td>
      <td>是</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>111</td>
      <td>是</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>111</td>
      <td>是</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>102</td>
      <td>否</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2"><code>network.early-hints.enabled</code> 和 <code>network.early-hints.preconnect.enabled</code></td>
    </tr>
  </tbody>
</table>

### Access-Control-Allow-Headers 通配符不包含 Authorization 标头

[`Access-Control-Allow-Headers`](/zh-CN/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Headers) 是 [CORS 预检请求](/zh-CN/docs/Glossary/Preflight_request)的响应标头，表示哪些请求标头可以包含在最终请求中。响应指令可包含通配符（`*`），表示最终请求可包含除 `Authorization` 标头以外的所有标头。

默认情况下，Firefox 在收到带有 `Access-Control-Allow-Headers: *` 的响应时会包含 `Authorization` 标头。将首选项设置为 `false` 可确保 Firefox 不包含 `Authorization` 标头。详见 [Firefox bug 1687364](https://bugzil.la/1687364)。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>115</td>
      <td>是</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>115</td>
      <td>是</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>115</td>
      <td>是</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>115</td>
      <td>是</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2"><code>network.cors_preflight.authorization_covered_by_wildcard</code></td>
    </tr>
  </tbody>
</table>

## 开发者工具

Mozilla 的开发者工具在不断发展。我们会尝试新的想法，添加新的特性，并在 Nightly 和开发者版本渠道上进行测试，然后再通过测试版发布。以下是目前开发者工具的实验特性。

### 执行上下文选择器

该特性可在控制台命令行上显示一个按钮，让你更改输入表达式的执行环境。（详见 [Firefox bug 1605154](https://bugzil.la/1605154) 和 [Firefox bug 1605153](https://bugzil.la/1605153)）。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>75</td>
      <td>否</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>75</td>
      <td>否</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>75</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>75</td>
      <td>否</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2"><code>devtools.webconsole.input.context</code></td>
    </tr>
  </tbody>
</table>

### 响应式设计模式中支持移动端手势

鼠标手势用于模拟移动手势，例如轻扫/滚动、双击和缩放，以及长按选择/打开上下文菜单。（详见 [Firefox bug 1621781](https://bugzil.la/1621781)、[Firefox bug 1245183](https://bugzil.la/1245183) 和 [Firefox bug 1401304](https://bugzil.la/1401304)）。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>76<sup>[1]</sup></td>
      <td>是</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>76<sup>[1]</sup></td>
      <td>是</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>76<sup>[1]</sup></td>
      <td>是</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>76<sup>[1]</sup></td>
      <td>否</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2">n/a</td>
    </tr>
  </tbody>
</table>

\[1] Firefox 76 添加了对使用双击手势缩放的支持。其他手势是为 Firefox 79 添加的。

### 网络监视器中显示服务器发送事件

网络监控器会显示[服务器发送](/zh-CN/docs/Web/API/Server-sent_events)事件的信息。（详见 [Firefox bug 1405706](https://bugzil.la/1405706)）。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>80</td>
      <td>是</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>80</td>
      <td>是</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>80</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>80</td>
      <td>否</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2">
        <code>devtools.netmonitor.features.serverSentEvents</code>
      </td>
    </tr>
  </tbody>
</table>

### CSS 浏览器兼容性工具提示栏

CSS 规则视图可以在存在已知问题的 CSS 属性旁边显示浏览器兼容性工具提示。详见[检查和编辑 HTML > 浏览器兼容性警告](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#browser-compat-warnings)。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>81</td>
      <td>否</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>81</td>
      <td>否</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>81</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>81</td>
      <td>否</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2">
        <code
          >devtools.inspector.ruleview.inline-compatibility-warning.enabled</code
        >
      </td>
    </tr>
  </tbody>
</table>

## 用户界面

### 桌面缩放

该特性可让你在桌面端实现流畅的捏合缩放，而无需像移动设备那样重新刷新布局。（详见 [Firefox bug 1245183](https://bugzil.la/1245183) 和 [Firefox bug 1620055](https://bugzil.la/1620055)）。

<table>
  <thead>
    <tr>
      <th>更新通道</th>
      <th>添加的版本</th>
      <th>默认启用？</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>42</td>
      <td>是</td>
    </tr>
    <tr>
      <th>开发者版</th>
      <td>42</td>
      <td>否</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>42</td>
      <td>否</td>
    </tr>
    <tr>
      <th>发行版</th>
      <td>42</td>
      <td>否</td>
    </tr>
    <tr>
      <th>首选项名称</th>
      <td colspan="2">
        <code>apz.allow_zooming</code>，Windows 中 <code>apz.windows.use_direct_manipulation</code>
      </td>
    </tr>
  </tbody>
</table>

## 参见

- [Firefox 开发者发行日志](/zh-CN/docs/Mozilla/Firefox/Releases)
- [Firefox Nightly](https://www.mozilla.org/zh-CN/firefox/channel/desktop/)
- [Firefox 开发者版本](https://www.mozilla.org/zh-CN/firefox/developer/)
