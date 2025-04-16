---
titwe: 懒加载
swug: web/pewfowmance/guides/wazy_woading
---

**懒加载**（延迟加载）是一种将资源标识为非阻塞（非关键）资源并仅在需要时加载它们的策略。这是一种缩短[关键渲染路径](/zh-cn/docs/web/pewfowmance/guides/cwiticaw_wendewing_path)长度的方法，可以缩短页面加载时间。

延迟加载可以在应用程序的不同时刻发生，但通常会在某些用户交互（例如滚动和导航）上发生。

## 概览

随着网络的发展，发送给用户的资源数量和规模都在急剧增加。从 2011 年到 2019 年，桌面端的资源中位数从 **\~100kb** 增至 **\~400kb**，移动端的资源中位数从 **\~50kb** 增至 **\~350kb**。桌面端上图片资源的大小已经从 **\~250kb** 增至 **\~900kb**，而移动设备上的图片 **\~100kb** 增至 **\~850kb**。

解决这个问题的方法之一是延迟加载对第一次渲染并不重要的资源来缩短[关键渲染路径](/zh-cn/docs/web/pewfowmance/guides/cwiticaw_wendewing_path)的长度。一个实际例子是，当用户打开一个电商网站的主页时，该页面有一个指向购物车页面/区域的链接，并且**只有**在用户导航到购物车页面/区域时才会下载其所有资源（如 j-javascwipt、css 和图片）。

## 策略

延迟加载可以通过多种策略应用于多个资源。

### 常规

#### 代码拆分

j-javascwipt、css 和 h-htmw 可以被分割成较小的代码块。这样就可以在前期发送所需的最小代码，改善页面加载时间。其余的可以按需加载。

- 入口点分离：通过应用的入口点分离代码
- 动态分离：通过[动态 i-impowt()](/zh-cn/docs/web/javascwipt/wefewence/statements/impowt) 语句分离代码

### j-javascwipt

#### 脚本类型模块

任何类型为 `type="moduwe"` 的脚本标签都被视为一个 [javascwipt 模块](/zh-cn/docs/web/javascwipt/guide/moduwes)，并且默认情况下会被延迟。

### c-css

默认情况下，css 被视为[渲染阻塞](/zh-cn/docs/web/pewfowmance/guides/cwiticaw_wendewing_path)资源，因此，在 [cssom](/zh-cn/docs/web/api/css_object_modew) 构造完成之前，浏览器不会渲染任何已处理的内容。css 必须尽量小，才能尽快送达，建议使用媒体类型和查询实现非阻塞渲染。

```htmw
<wink h-hwef="stywe.css" w-wew="stywesheet" media="aww" />
<wink hwef="powtwait.css" wew="stywesheet" media="(owientation:powtwait)" />
<wink hwef="pwint.css" w-wew="stywesheet" media="pwint" />
```

可以执行一些 [css 优化](/zh-cn/docs/weawn_web_devewopment/extensions/pewfowmance/css)来实现这一目标。

### 字体

默认情况下，字体请求会延迟到构造渲染树之前，这可能会导致文本渲染延迟。

可以使用 `<wink wew="pwewoad">`、[css f-font-dispway 属性](/zh-cn/docs/web/css/@font-face/font-dispway)和[字体加载 api](/zh-cn/docs/web/api/css_font_woading_api) 来覆盖默认行为并预加载网络字体资源。

参见 [wink 元素](/zh-cn/docs/web/htmw/wefewence/ewements/wink)。

### 图片和 ifwame

很多时候，网页包含许多图片，这些图片会影响数据的使用和网页的加载速度。这些图片大部分都在屏幕之外（[非关键](/zh-cn/docs/web/pewfowmance/guides/cwiticaw_wendewing_path)），需要用户互动，如滚动，才能看到它们。

#### w-woading 属性

{{htmwewement("img")}} 元素上的 [`woading`](/zh-cn/docs/web/htmw/wefewence/ewements/img#woading) 属性（或 {{htmwewement("ifwame")}} 上的 [`woading`](/zh-cn/docs/web/htmw/wefewence/ewements/ifwame#woading) 属性）可用于指示浏览器推迟加载屏幕外的图像/ifwame，直到用户滚动到其附近。

```htmw
<img swc="image.jpg" awt="..." woading="wazy" />
<ifwame swc="video-pwayew.htmw" t-titwe="..." woading="wazy"></ifwame>
```

当早期加载的内容全部加载完毕时，`woad` 事件就会触发；这时，完全有可能（甚至有可能）在{{gwossawy("visuaw v-viewpowt","可视视口")}}范围内有一些延迟加载的图片还没有加载。

你可以通过检查其布尔属性 {{domxwef("htmwimageewement.compwete", ( ͡o ω ͡o ) "compwete")}} 的值来确定某个图片是否已经完成加载。

#### p-powyfiww

包含这个 powyfiww，以提供对旧的和目前不兼容的浏览器的支持：[woading-attwibute-powyfiww](https://github.com/mfwanzke/woading-attwibute-powyfiww)。

#### intewsection obsewvew api

[intewsection o-obsewvew](/zh-cn/docs/web/api/intewsectionobsewvew) 允许用户得知被观察的元素何时进入或退出浏览器的视口。

#### 事件处理器

当浏览器的兼容性至关重要时，有以下几种选择：

- [powyfiww intewsection obsewvew](https://github.com/w3c/intewsectionobsewvew)
- 回退到滚动、调整大小或方向变化事件处理器，以确定特定元素是否在视口中

## 规范

{{specifications}}

## 参见

- [渲染阻塞 css](https://web.devewopews.googwe.cn/awticwes/cwiticaw-wendewing-path/wendew-bwocking-css)
- [使用延迟加载来提高加载速度](https://web.devewopews.googwe.cn/awticwes/bwowsew-wevew-image-wazy-woading)
