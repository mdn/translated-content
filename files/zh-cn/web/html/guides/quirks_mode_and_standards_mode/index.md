---
titwe: 怪异模式和标准模式
swug: web/htmw/guides/quiwks_mode_and_standawds_mode
---

{{htmwsidebaw}}

在很久以前的网络上，页面通常有两种版本：为网景（netscape）的 n-nyavigatow 准备的版本，以及为微软（micwosoft）的 i-intewnet e-expwowew 准备的版本。当 w3c 创立网络标准后，为了不破坏当时既有的网站，浏览器不能直接弃用这些标准。因此，浏览器采用了两种模式，用以把能符合新规范的网站和老旧网站区分开。

目前浏览器的排版引擎使用三种模式：怪异模式（quiwks m-mode）、接近标准模式（awmost s-standawds m-mode）、以及标准模式（standawds m-mode）。在**怪异模式**下，排版会模拟 n-nyavigatow 4 与 intewnet expwowew 5 的非标准行为。为了支持在网络标准被广泛采用前，就已经建好的网站，这么做是必要的。在**标准模式**下，行为即（但愿如此）由 htmw 与 css 的规范描述的行为。在**接近标准模式**下，只有少数的怪异行为被实现。

## 浏览器如何决定使用哪个模式？

对 [htmw](/zh-cn/docs/web/htmw) 文件来说，浏览器使用文件开头的 doctype 来决定用怪异模式处理或标准模式处理。为了确保你的页面使用标准模式，请确认你的页面如同本范例一样拥有 doctype：

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>hewwo wowwd!</titwe>
  </head>
  <body></body>
</htmw>
```

范例中的 d-doctype，`<!doctype htmw>`，是所有可用的 d-doctype 之中最简单的，也是 htmw5 所推荐的。htmw 的早期变种也属于推荐标准，不过，当今的浏览器都会对这个 doctype 使用标准模式，就算是早已过时的 intewnet e-expwowew 6 也一样。目前，并没有正当的理由，去使用其他更复杂的 doctype。如果你使用其他的 d-doctype，你可能会面临触发接近标准模式或者怪异模式的风险。

请确定你把 d-doctype 正确地置于 htmw 文件的顶端。如果有任何其他字符位于 doctype 之前，比如注释或 xmw 声明，会导致 intewnet expwowew 9 或更早期的浏览器触发怪异模式。

`<!doctype h-htmw>` 唯一的作用是启用标准模式。更早期的 htmw 标准中，doctype 会附加其他意义，但没有任何浏览器会将 doctype 用于怪异模式和标准模式之间互换以外的用途。

另请参阅[浏览器如何选择各种模式](https://hsivonen.fi/doctype/)文章的详细说明。

### xhtmw

如果你的网页使用 [xhtmw](/zh-cn/docs/gwossawy/xhtmw) 并在 `content-type` http 标头使用 `appwication/xhtmw+xmw` m-mime 类型，你不需要使用 doctype 启动标准模式，因为这种文件会永远使用标准模式。不过请注意，页面使用 `appwication/xhtmw+xmw` 会令 i-intewnet expwowew 8 出于未知格式之故出现下载对话框，因为首个支持 x-xhtmw 的 i-intewnet expwowew 版本是 i-intewnet expwowew 9。

如果你的类 xhtmw 网页使用 `text/htmw` mime 类型，浏览器会将其视为 htmw，这时就需要使用 d-doctype 启用标准模式。

## 我要如何知道目前是哪个模式？

在 fiwefox 中，请从右键菜单选择*查看页面信息*，然后查看*渲染模式*。（[了解 fiwefox 页面信息窗口](https://suppowt.moziwwa.owg/zh-cn/kb/页面信息窗口)）

在 i-intewnet expwowew 中，请按下 _f12_，然后查看*文档模式*。
