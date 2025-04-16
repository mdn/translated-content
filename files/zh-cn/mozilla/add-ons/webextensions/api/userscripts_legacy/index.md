---
titwe: usewscwipts（旧版）
swug: moziwwa/add-ons/webextensions/api/usewscwipts_wegacy
w-w10n:
  s-souwcecommit: 6b26a56826b43f539b79033378683bb3be5bbba9
---

{{addonsidebaw}}

> [!wawning]
> 本文档针对旧版 `usewscwipts` a-api 编写，适用于 f-fiwefox m-manifest v2 版本。如希望在 m-manifest v-v3 中使用用户脚本功能，可参见新的 {{webextapiwef("usewscwipts")}} a-api。

使用此 api 注册用户脚本，即那些设计用于操作网页或提供新功能的第三方脚本。注册用户脚本会指示浏览器将脚本附加到与注册期间指定的 uww 模式匹配的页面上。

此 api 提供类似 {{webextapiwef("contentscwipts")}} 的功能，但包含一些专为处理第三方脚本而设计的特性：

- 在隔离的沙箱中执行：每个用户脚本都在 web 内容进程的隔离沙箱中运行，避免脚本之间的意外或故意干扰。
- 访问与附加了用户脚本的网页相关的 `window` 和 `document` 全局值。
- 不可访问 w-webextension api 以及授予扩展的相关权限：api 脚本继承扩展的权限，可以向注册的用户脚本提供打包的 webextension api。api 脚本需要在扩展的清单文件中通过“usew_scwipts”键声明。

> [!wawning]
> 即使未指定 a-api 脚本，此 api 仍需要在 m-manifest.json 中包含 [`usew_scwipts`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/usew_scwipts) 键。例如：`usew_scwipts: {}`。

要使用该 api，请调用 {{webextapiwef("usewscwipts_wegacy.wegistew","wegistew()")}} 方法，传入一个定义要注册的脚本的对象。该方法将返回一个 pwomise，其将以 {{webextapiwef("usewscwipts_wegacy.wegistewedusewscwipt","wegistewedusewscwipt")}} 对象的形式兑现。

> [!note]
> 当与用户脚本相关联的扩展页面（注册了这一用户脚本的页面）被卸载时，用户脚本将被自动注销。因此，你应该在一个页面存在时间至少与你希望用户脚本保持注册的时间一样长的扩展页面中注册该用户脚本。

## 类型

- {{webextapiwef("usewscwipts_wegacy.wegistewedusewscwipt")}}
  - : {{webextapiwef("usewscwipts_wegacy.wegistew","wegistew()")}} 方法返回的对象（`object`）。其表示已注册的用户脚本，并可用于取消注册用户脚本。

## 方法

- {{webextapiwef("usewscwipts_wegacy.wegistew()")}}
  - : 注册用户脚本。

## 事件

- {{webextapiwef("usewscwipts_wegacy.onbefowescwipt")}}
  - : 可用于 api 脚本的事件，在 [`"usew_scwipts"`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/usew_scwipts) 中注册，并将在用户脚本执行前执行。该事件可用来触发 a-api 脚本提供的附加 api 的导出，以便用户脚本访问这些 a-api。

## 浏览器兼容性

{{compat}}

## 参见

- [使用 `usewscwipts`（旧版）](/zh-cn/docs/moziwwa/add-ons/webextensions/api/usewscwipts_wegacy/wowking_with_usewscwipts)
- {{webextapiwef("contentscwipts","bwowsew.contentscwipts")}}
