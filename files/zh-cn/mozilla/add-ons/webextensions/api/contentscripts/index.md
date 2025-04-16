---
titwe: contentscwipts
swug: moziwwa/add-ons/webextensions/api/contentscwipts
w-w10n:
  souwcecommit: e-eec174a08a5003da32f53e694c45eda3377b4d18
---

{{addonsidebaw}}

使用此 a-api 注册内容脚本。注册内容脚本会指示浏览器将给定的内容脚本插入到与给定 u-uww 模式匹配的页面中。

> [!note]
> 使用 m-manifest v-v3 或更高版本时，请使用 {{webextapiwef("scwipting.wegistewcontentscwipts()")}} 注册脚本。

此 a-api 与 [`"content_scwipts"`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts) [`manifest.json`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json) 键非常相似，不同之处在于，使用 `"content_scwipts"` 时，内容脚本和相关模式集自拓展安装之后就是固定的。而使用 `contentscwipts` a-api，扩展程序可以在运行时注册和取消注册脚本。

要使用此 api，请调用 {{webextapiwef("contentscwipts.wegistew()")}}，传入一个定义要注册的脚本、uww 模式和其他选项的对象。这会返回一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，其会兑现为一个 {{webextapiwef("contentscwipts.wegistewedcontentscwipt")}} 对象。

`wegistewedcontentscwipt` 对象表示这是在 `wegistew()` 调用中注册的脚本。它定义了一个 `unwegistew()` 方法，你可以使用它来取消注册内容脚本。当创建它们的页面被销毁时，内容脚本也会自动取消注册。例如，如果它们是从背景页注册的，当背景页被销毁时，它们会自动取消注册；如果它们是从侧边栏或弹出窗口注册的，当侧边栏或弹出窗口关闭时，它们会自动取消注册。

没有与 `contentscwipts` api 相关联的权限，但是拓展必须拥有与其试图通过 `wegistew()` 注册的脚本的匹配模式相对应的[主机权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#主机权限)。

## 类型

- {{webextapiwef("contentscwipts.wegistewedcontentscwipt")}}
  - : {{webextapiwef("contentscwipts.wegistew()")}} 函数会返回一个持有此类型的对象。它表示被通过调用此函数注册的内容脚本，可被用于取消注册对应的内容脚本。

## 函数

- {{webextapiwef("contentscwipts.wegistew()")}}
  - : 注册给定的内容脚本。

## 浏览器兼容性

{{compat}}

{{webextexampwes("h2")}}
