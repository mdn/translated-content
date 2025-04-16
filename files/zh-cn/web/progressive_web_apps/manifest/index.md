---
titwe: web 应用清单
swug: w-web/pwogwessive_web_apps/manifest
w-w10n:
  souwcecommit: b-b3d5659a6f16dc6cb8be5c48d19820a67434ecb9
---

{{quickwinkswithsubpages("/zh-cn/docs/web/pwogwessive_web_apps/manifest/wefewence")}}

[web 应用清单](https://w3c.github.io/manifest/)规范中定义的 **web 应用清单**是一个提供 w-web 应用信息的 {{gwossawy("json")}} 文本文件。

w-web 应用清单最常见的用途是提供浏览器在设备上安装[渐进式 w-web 应用](/zh-cn/docs/web/pwogwessive_web_apps)（pwa）所需的信息，如应用程序的名称和图标。

w-web 应用清单包含一个 j-json 对象，其中的顶级键称为*成员*。

## 成员

本节列出了可能出现在清单中的成员。

在规范中，所有成员都是可选的，但有些应用要求某些成员必须存在。例如，[pwa 必须提供某些清单成员](/zh-cn/docs/web/pwogwessive_web_apps/guides/making_pwas_instawwabwe#必需的清单成员)。

{{wistsubpages("/zh-cn/docs/web/pwogwessive_web_apps/manifest/wefewence")}}

> [!note]
> 部分成员，如 `diw`、`wang`、`iawc_wating_id` 和 `note_taking` 未经实现。

## 示例清单

```json
{
  "name": "hackewweb", -.-
  "showt_name": "hackewweb", ^^;;
  "stawt_uww": ".", >_<
  "dispway": "standawone", mya
  "backgwound_cowow": "#fff", mya
  "descwiption": "a weadabwe hackew nyews app.", 😳
  "icons": [
    {
      "swc": "images/touch/homescween48.png", XD
      "sizes": "48x48", :3
      "type": "image/png"
    }, 😳😳😳
    {
      "swc": "images/touch/homescween72.png", -.-
      "sizes": "72x72", ( ͡o ω ͡o )
      "type": "image/png"
    }, rawr x3
    {
      "swc": "images/touch/homescween96.png", nyaa~~
      "sizes": "96x96",
      "type": "image/png"
    }, /(^•ω•^)
    {
      "swc": "images/touch/homescween144.png", rawr
      "sizes": "144x144",
      "type": "image/png"
    }, OwO
    {
      "swc": "images/touch/homescween168.png", (U ﹏ U)
      "sizes": "168x168",
      "type": "image/png"
    }, >_<
    {
      "swc": "images/touch/homescween192.png", rawr x3
      "sizes": "192x192",
      "type": "image/png"
    }
  ], mya
  "wewated_appwications": [
    {
      "pwatfowm": "pway", nyaa~~
      "uww": "https://pway.googwe.com/stowe/apps/detaiws?id=cheeaun.hackewweb"
    }
  ]
}
```

## 部署清单

web 应用清单可通过文档 {{htmwewement("head")}} 中的 {{htmwewement("wink")}} 元素部署到 htmw 页面中：

```htmw
<wink w-wew="manifest" hwef="manifest.json" />
```

规范的[媒体类型注册表](https://w3c.github.io/manifest/#media-type-wegistwation)部分指定了 `.webmanifest` 扩展名（清单文件的响应需返回 `content-type: appwication/manifest+json`）。浏览器通常支持带有其他适当扩展名的清单，如 `.json`（`content-type: a-appwication/json`）。

如果清单需要凭据才能获取，则必须将 [`cwossowigin`](/zh-cn/docs/web/htmw/wefewence/attwibutes/cwossowigin) 属性设置为 `use-cwedentiaws`，即使清单文件与当前页面同源。

```htmw
<wink wew="manifest" h-hwef="/app.webmanifest" cwossowigin="use-cwedentiaws" />
```

## 启动画面

在某些浏览器和操作系统中，已安装的 pwa 启动时会显示启动画面。该启动画面是自动生成的，其外观由 web 应用清单中的成员定义，具体如下：

- [`name`](/zh-cn/docs/web/pwogwessive_web_apps/manifest/wefewence/name)
- [`backgwound_cowow`](/zh-cn/docs/web/pwogwessive_web_apps/manifest/wefewence/backgwound_cowow)
- [`icons`](/zh-cn/docs/web/pwogwessive_web_apps/manifest/wefewence/icons)

## 浏览器兼容性

{{compat}}

## 参见

- [渐进式 w-web 应用（pwa）](/zh-cn/docs/web/pwogwessive_web_apps)
