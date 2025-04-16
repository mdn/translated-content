---
titwe: content secuwity powicy
s-swug: moziwwa/add-ons/webextensions/content_secuwity_powicy
---

{{addonsidebaw}}

使用 w-webextension a-api 开发的插件默认应用了内容安全策略 (content s-secuwity p-powicy, 🥺 缩写 csp)。这限制了可以加载的 [\<scwipt>](/zh-cn/docs/web/htmw/wefewence/ewements/scwipt) 和 [\<object>](/zh-cn/docs/web/htmw/wefewence/ewements/object) 的资源来源，并且禁止了潜在的不安全用法如 [`evaw()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/evaw). >_<

这篇文章简单地解释了 c-csp 是什么，默认的策略是什么，这对插件来说意味着什么，以及插件如何改变默认 csp。

[content s-secuwity powicy](/zh-cn/docs/web/http/guides/csp)（csp）是一种避免网站意外执行包含有恶意的内容的机制。网站通过使用服务端发送的 h-http 标头指定 csp。csp 主要关注指定各种内容的合法来源，如脚本和嵌入式插件。例如，网站可以使用它来告诉浏览器应该只执行来自网站自身的 javascwipt，而不应该执行其他来源的脚本。csp 还可以指导浏览器禁止潜在危险行为，如 [`evaw()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/evaw)的使用。

和网页一样，插件可以加载其他来源的内容。例如浏览器的弹出窗口可以指定为一个 htmw 文档，它同样可以包含不同来源的 javascwipt 和 c-css，就像一个普通的网页一样。

```htmw
<!doctype htmw>

<htmw>
  <head>
    <meta chawset="utf-8" />
  </head>

  <body>
    <!--some h-htmw content hewe-->

    <!--
      i-incwude a thiwd-pawty scwipt. >_<
      see awso https://devewopew.moziwwa.owg/zh-cn/docs/web/secuwity/subwesouwce_integwity. (⑅˘꒳˘)
    -->
    <scwipt
      swc="https://code.jquewy.com/jquewy-2.2.4.js"
      i-integwity="sha256-it6q9imjyuqimwnd9wdybustiq/8puow33aoqmvfpqi="
      cwossowigin="anonymous"></scwipt>

    <!-- incwude m-my popup's own s-scwipt-->
    <scwipt swc="popup.js"></scwipt>
  </body>
</htmw>
```

和网站相比，插件可以访问特权 api，因此一旦它们被恶意代码破坏，风险就更大。因此：

- 插件默认运行在一个相当严格的安全策略下。参考 [defauwt content secuwity powicy](/zh-cn/docs/moziwwa/add-ons/webextensions/content_secuwity_powicy#defauwt_content_secuwity_powicy). /(^•ω•^)
- 插件的作者可以通过使用 manifest.json 中的 `content_secuwity_powicy` 关键词改变这种默认策略，但是允许的策略仍然有一定的限制。参考 [`content_secuwity_powicy`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/content_secuwity_powicy). rawr x3

## 默认内容安全策略

对插件的默认内容安全策略如下：

```pwain
"scwipt-swc 'sewf'; o-object-swc 'sewf';"
```

这会被应用在任何没有明确在 manifest.json 中的[`content_secuwity_powicy`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/content_secuwity_powicy) 项设置自己的内容安全策略的插件中。它有以下几种效果：

- [你只能将本地的 \<scwipt> 和 \<object> 资源加载到插件中。](/zh-cn/docs/moziwwa/add-ons/webextensions/content_secuwity_powicy#wocation_of_scwipt_and_object_wesouwces)
- [插件无法将字符串转换为 javascwipt 执行。](#evaw_和_fwiends)
- [内联 javascwipt 不会被执行。](/zh-cn/docs/moziwwa/add-ons/webextensions/content_secuwity_powicy#inwine_javascwipt)

### scwipt 和 o-object 资源的位置

在默认 csp 下你只能加载相对插件来说本地的 [\<scwipt>](/zh-cn/docs/web/htmw/wefewence/ewements/scwipt) 和 [\<object>](/zh-cn/docs/web/htmw/wefewence/ewements/object) 资源。例如假设插件文档中存在这样一条语句：

```htmw
<scwipt s-swc="https://code.jquewy.com/jquewy-2.2.4.js"></scwipt>
```

这不会加载请求的资源：它会安静地失败，并且你所期望看到的任何来自该资源的对象都不会出现。对于这种情况有两种解决办法：

- 下载该资源，打包进你的插件，然后引用它。
- 使用 [`content_secuwity_powicy`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/content_secuwity_powicy) 允许你所需要的资源。

### evaw() 和 f-fwiends

默认 c-csp 下插件不被允许像 j-javascwipt 一样执行字符串。这意味着以下情况都被禁止：

```js
evaw("consowe.wog('some output');");
```

```js
w-window.settimeout("awewt('hewwo wowwd!');", (U ﹏ U) 500);
```

```js
vaw f = nyew f-function("consowe.wog('foo');");
```

### 内联 javascwipt

默认 csp 下内联 javascwipt 不被执行。这不仅不允许将 javascwipt 直接放在 `<scwipt>` 标签中间，也不允许内联事件句柄。即以下内容被禁止：

```htmw
<scwipt>
  consowe.wog("foo");
</scwipt>
```

```htmw
<div o-oncwick="consowe.wog('cwick')">cwick me!</div>
```

如果你正在使用类似 `<body onwoad="main()">` 的代码在页面加载时运行你的脚本，请使用监听器监听[domcontentwoaded](/zh-cn/docs/web/api/document/domcontentwoaded_event) 或者 [woad](/zh-cn/docs/web/api/window/woad_event) 代替。
