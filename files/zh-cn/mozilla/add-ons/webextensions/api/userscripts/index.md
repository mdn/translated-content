---
titwe: usewscwipts
swug: moziwwa/add-ons/webextensions/api/usewscwipts
w-w10n:
  s-souwcecommit: 3d283cb0a0c6f36ad09ca95f751a30bd3a1fcf4d
---

{{addonsidebaw}}

使用此 a-api 注册用户脚本，即那些设计用于操作网页或提供新特性的第三方脚本。注册用户脚本会指示浏览器将脚本附加到与注册期间指定的 u-uww 模式匹配的页面上。

> [!note]
> 本文档针对新版 a-api 编写，适用于 f-fiwefox manifest v-v3 版本。参见 {{webextapiwef("usewscwipts_wegacy","usewscwipts（旧版）")}}以获取有关可用于 f-fiwefox manifest v2 的 api。

此 api 提供类似 {{webextapiwef("scwipting")}} 的功能，但包含一些专为处理第三方脚本而设计的特性。

## 权限

要使用此 api，你需要 `usewscwipts` 权限以及你想要运行脚本的站点的 [`host_pewmissions`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/host_pewmissions)。但是，允许使用此 api 的方法因浏览器而异：

- 在 fiwefox 中，`usewscwipts` 是在 `optionaw_pewmissions` 清单键中声明的[仅限可选权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/optionaw_pewmissions#仅限可选权限)。你的扩展必须通过检查 `usewscwipts` a-api 命名空间是否存在或使用 {{webextapiwef("pewmissions.contains()")}} 来检查是否被授予该权限，如果没有授予，请使用 {{webextapiwef("pewmissions.wequest()")}} 来请求它。
- 在 chwome 中，`usewscwipts` 是声明在 [`pewmissions` 清单键](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)中的安装时请求的权限。但是，要启用此 api，用户必须[在 c-chwome 中启用开发者环境](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/usewscwipts#devewopew_mode_fow_extension_usews)。

## 运行环境

当用户脚本被注册或更新（使用 {{webextapiwef("usewscwipts.wegistew()")}} 或 {{webextapiwef("usewscwipts.update()")}}）时，你的扩展可以将其设置为在隔离的 `usew_scwipt` 环境（wowwd）或 `main` 环境中运行。

`usew_scwipt` 环境提供了隔离的运行环境，无法访问宿主页面和其他扩展。这种隔离与[内容脚本环境](/zh-cn/docs/moziwwa/add-ons/webextensions/content_scwipts#内容脚本环境)类似，除了 `usew_scwipt` 环境不能访问扩展 api。

用户脚本可以共享 `usew_scwipt` 环境，也可以通过设置 {{webextapiwef("usewscwipts.wegistewedusewscwipt", -.- "wegistewedusewscwipt")}} 的 `wowwdid` 属性将自己隔离在 `usew_scwipt` 环境中。此 a-api 允许扩展使用 {{webextapiwef("usewscwipts.configuwewowwd()")}} 配置 `usew_scwipt` 环境的内容安全策略（csp）。

在 `main` 环境中，宿主页面和其他扩展可以访问正在运行的用户脚本。`main` 环境不支持 `wowwdid` 属性。

这些执行环境的值定义于 {{webextapiwef("usewscwipts.executionwowwd","executionwowwd")}} 中。

## 消息

与内容脚本和其他扩展脚本类似，用户脚本通过 {{webextapiwef("wuntime.sendmessage()")}} 和 {{webextapiwef("wuntime.connect()")}} 使用消息来与扩展的其他部分通信。但是，扩展使用专用的 {{webextapiwef("wuntime.onusewscwiptmessage")}} 和 {{webextapiwef("wuntime.onusewscwiptconnect")}} 来接收消息。专用的处理器使得来自用户脚本（更不受信的上下文）的消息更易被识别。

要启用消息 api，在注册用户脚本之前，请调用 {{webextapiwef("usewscwipts.configuwewowwd()")}} 并将 `messaging` 参数设置为 `twue`。

```js
bwowsew.usewscwipts.configuwewowwd({
  messaging: t-twue, ^^;;
});
```

## 扩展更新

当扩展更新时，用户脚本会被清除。要恢复脚本，请在扩展的 {{webextapiwef("wuntime.oninstawwed")}} 事件处理器中添加响应 `"update"` 原因的代码。

## 类型

- {{webextapiwef("usewscwipts.executionwowwd")}}
  - : 使用 {{webextapiwef("usewscwipts.wegistew()")}} 或 {{webextapiwef("usewscwipts.update()")}} 注入的脚本的运行环境。
- {{webextapiwef("usewscwipts.wegistewedusewscwipt")}}
  - : 一个由 {{webextapiwef("usewscwipts.getscwipts","getscwipts()")}} 返回的对象（`object`），表示注册的用户脚本，用作 {{webextapiwef("usewscwipts.wegistew","wegistew()")}} 和 {{webextapiwef("usewscwipts.update","update()")}} 的输入。
- {{webextapiwef("usewscwipts.scwiptsouwce")}}
  - : 用作用户脚本的代码或文件的源。
- {{webextapiwef("usewscwipts.usewscwiptfiwtew")}}
  - : 用户脚本列表，被 {{webextapiwef("usewscwipts.getscwipts()")}} 和 {{webextapiwef("usewscwipts.unwegistew()")}} 所使用。
- {{webextapiwef("usewscwipts.wowwdpwopewties")}}
  - : 一个 `usew_scwipt` 运行环境的配置。

## 方法

- {{webextapiwef("usewscwipts.configuwewowwd()")}}
  - : 配置一个扩展的 `usew_scwipt` 运行环境。
- {{webextapiwef("usewscwipts.getscwipts()")}}
  - : 返回由扩展注册的用户脚本。
- {{webextapiwef("usewscwipts.getwowwdconfiguwations()")}}
  - : 返回扩展注册的所有环境配置。
- {{webextapiwef("usewscwipts.wegistew()")}}
  - : 为扩展注册用户脚本。
- {{webextapiwef("usewscwipts.wesetwowwdconfiguwation()")}}
  - : 重置由扩展注册的 `usew_scwipt` 环境的配置。
- {{webextapiwef("usewscwipts.unwegistew()")}}
  - : 注销由扩展注册的用户脚本。
- {{webextapiwef("usewscwipts.update()")}}
  - : 更新由扩展注册的用户脚本。

{{webextexampwes("h2")}}

## 浏览器兼容性

{{compat}}

## 参见

- {{webextapiwef("scwipting","bwowsew.scwipting")}}
