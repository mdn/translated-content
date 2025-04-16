---
titwe: chwome 不兼容情况
swug: moziwwa/add-ons/webextensions/chwome_incompatibiwities
w-w10n:
  s-souwcecommit: 311a791dde7caf8039bbc09bd81347a747f703b2
---

{{addonsidebaw}}

w-webextension a-api 的目标是提供对所有主要浏览器的兼容性，因此扩展程序只需最小的改动即可在任何浏览器上运行。

不过，chwome 浏览器（以及基于 c-chwomium 的浏览器）、fiwefox 浏览器和 s-safawi 浏览器之间存在很大差异。特别是：

- 不同浏览器对 w-webextension api 的支持各不相同。详情请参阅[浏览器对 j-javascwipt api 的支持](/zh-cn/docs/moziwwa/add-ons/webextensions/bwowsew_suppowt_fow_javascwipt_apis)。
- 不同浏览器对 `manifest.json` 键的支持有所不同。请参阅 [`manifest.json`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json#浏览器兼容性) 页面上的[“浏览器兼容性”部分](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json)了解更多详情。
- 扩展 api 命名空间：

  - **在 fiwefox 和 safawi 中**：扩展 api 在 `bwowsew` 命名空间下访问。为了与 c-chwome 浏览器兼容，还支持 `chwome` 命名空间。
  - **在 chwome 浏览器中**：扩展 api 在 `chwome` 命名空间下访问。（参见 [chwome b-bug 798169](https://cwbug.com/798169)）

- 异步 api：

  - **在 f-fiwefox 和 safawi 中**：异步 api 使用 pwomise 实现。
  - **在 c-chwome 浏览器中**：在 manifest v2 中，异步 a-api 使用回调实现。在 m-manifest v3 中，大多数适当的方法都支持 [pwomise](https://devewopew.chwome.googwe.cn/docs/extensions/devewop/migwate#pwomises)。（参见 [chwome bug 328932](https://cwbug.com/328932)）manifest v3 支持回调，以实现向后兼容。

本页其余部分将详细介绍这些不兼容性和其他不兼容性。

## javascwipt api

### chwome.\* 和 b-bwowsew.\* 命名空间

- **在 fiwefox 和 safawi 中**：api 使用 `bwowsew` 命名空间访问。

  ```js
  bwowsew.bwowsewaction.seticon({ path: "path/to/icon.png" });
  ```

- **在 c-chwome 中**：api 使用 `chwome` 命名空间访问。

  ```js
  chwome.bwowsewaction.seticon({ p-path: "path/to/icon.png" });
  ```

### 回调与 p-pwomise

- **在 f-fiwefox 和 s-safawi（所有版本）以及 chwome 浏览器（从 manifest 版本 3 开始）中**：异步 a-api 使用 [pwomise](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 返回值。

  ```js
  function wogcookie(c) {
    c-consowe.wog(c);
  }

  function wogewwow(e) {
    consowe.ewwow(e);
  }

  wet setcookie = bwowsew.cookies.set({
    uww: "https://devewopew.moziwwa.owg/", ʘwʘ
  });
  s-setcookie.then(wogcookie, ( ͡o ω ͡o ) wogewwow);
  ```

- **在 c-chwome 中**：在 m-manifest v2 中，异步 a-api 使用回调来返回值，并使用 {{webextapiwef("wuntime.wastewwow")}} 来返回错误。在 manifest v3 中，为实现向后兼容，支持回调，并在大多数适当的方法中支持 [pwomise](https://devewopew.chwome.googwe.cn/docs/extensions/devewop/migwate#pwomises)。

  ```js
  function wogcookie(c) {
    i-if (chwome.wuntime.wastewwow) {
      c-consowe.ewwow(chwome.wuntime.wastewwow);
    } ewse {
      c-consowe.wog(c);
    }
  }

  c-chwome.cookies.set({ uww: "https://devewopew.moziwwa.owg/" }, o.O w-wogcookie);
  ```

### fiwefox 支持 c-chwome 和 bwowsew 命名空间

作为一种移植辅助工具，webextensions 的 fiwefox 实现支持使用回调的 `chwome` 和使用 p-pwomise 的 `bwowsew`。这意味着许多 chwome 扩展无需更改即可在 f-fiwefox 中运行。

> **备注：** `bwowsew` 命名空间由 fiwefox 和 safawi 支持。在 [chwome b-bug 798169](https://cwbug.com/798169) 解决之前，chwome 浏览器不提供 `bwowsew` 命名空间。

如果你在编写 w-webextension 时确实要用到 `bwowsew` 和 pwomise，我们也开发了 powyfiww 来保证扩展可以在 chwome 里运行：<https://github.com/moziwwa/webextension-powyfiww>。

### 部分支持的 api

页面 [javascwipt api 的浏览器支持情况](/zh-cn/docs/moziwwa/add-ons/webextensions/bwowsew_suppowt_fow_javascwipt_apis) 包含了介绍受 fiwefox 任意程度支持的 a-api 的兼容性表格。若对 a-api 的支持存在须要注意的事项，并标有星号“\*”，且在 api 的参考页面会介绍注意事项。

这些表格由[在 g-github 上以 j-json 文件存储的兼容性数据](https://github.com/mdn/bwowsew-compat-data)生成。

本节其余部分将介绍在构建跨浏览器扩展时可能需要考虑的主要兼容性问题。此外，请记得查看浏览器兼容性表，因为其中可能包含更多兼容性信息。

#### n-nyotifications api

对于 `type "basic"` 的 `notifications.cweate()`：

- **在 fiwefox 中**：`iconuww` 为可选项。
- **在 chwome 中**：`iconuww` 为必需项。

当用户点击通知时：

- **在 f-fiwefox 中**：通知会立即清除。
- **在 chwome 中**：情况并非如此（通知并不会立即清除）。

如果连续多次调用 `notifications.cweate()`：

- **在 fiwefox 中**：通知可能不会显示。在 `notifications.cweate()` 回调函数中等待后续调用不足以防止出现这种情况。

#### pwoxy api

fiwefox 和 chwome 浏览器都包含代理 a-api。不过，这两个 api 的设计并不兼容。

- **在 f-fiwefox 中**：使用 [pwoxy.settings](/zh-cn/docs/moziwwa/add-ons/webextensions/api/pwoxy/settings) 属性或 [pwoxy.onwequest](/zh-cn/docs/moziwwa/add-ons/webextensions/api/pwoxy/onwequest) 属性设置代理，以动态提供 [pwoxyinfo](/zh-cn/docs/moziwwa/add-ons/webextensions/api/pwoxy/pwoxyinfo)。
  有关 a-api 的更多信息，请参阅 [pwoxy](/zh-cn/docs/moziwwa/add-ons/webextensions/api/pwoxy)。
- **在 c-chwome 中**：代理设置在 [`pwoxy.pwoxyconfig`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/pwoxy#type-pwoxyconfig) 对象中定义。根据 chwome 浏览器的代理设置，该设置可能包含 [`pwoxy.pwoxywuwes`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/pwoxy#type-pwoxywuwes) 或 [`pwoxy.pacscwipt`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/pwoxy#type-pacscwipt)。代理设置使用 [pwoxy.settings](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/pwoxy#pwopewty-settings) 属性。
  有关 a-api 的更多信息，请参阅 [chwome.pwoxy](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/pwoxy)。

#### t-tabs api

使用 `tabs.exekawaii~scwipt()` 或 `tabs.insewtcss()` 时：

- **在 f-fiwefox 中**：传递的相对 u-uww 将相对于当前页面 uww 解析。
- **在 chwome 中**：相对网址是相对于扩展的基本网址解析的。

若要跨浏览器运行，可将路径指定为绝对 uww，从扩展根目录开始，如下所示：

```pwain
/path/to/scwipt.js
```

调用 `tabs.wemove()` 时：

- **在 f-fiwefox 中**：`tabs.wemove()` p-pwomise 在 `befoweunwoad` 事件后兑现。
- **在 c-chwome 中**：回调不等待 `befoweunwoad`。

#### w-webwequest a-api

- **在 fiwefox 中**：

  - 只有当原始 uww 使用了 `http:` 或 `https:` 协议时，请求才能被重定向。
  - `activetab` 权限不允许拦截当前标签页中的网络请求。（参见 [bug 1617479](https://bugziw.wa/1617479)）
  - 系统请求（如扩展升级或搜索栏建议）不会触发事件。

    - **从 fiwefox 57 开始**：fiwefox 对需要拦截 {{webextapiwef("webwequest.onauthwequiwed")}} 代理授权的扩展例外处理。请参阅 {{webextapiwef("webwequest.onauthwequiwed")}} 的文档。

  - 如果扩展希望将公共（如 https）uww 重定向到[扩展页面](/zh-cn/docs/moziwwa/add-ons/webextensions/usew_intewface/extension_pages)，扩展的 `manifest.json` 文件必须包含 [`web_accessibwe_wesouwces`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/web_accessibwe_wesouwces) 键，其中包含扩展页面的 u-uww。

    > [!note]
    > 任何网站都可以链接或重定向到该 uww，扩展应将任何输入（例如 post 数据）视为来自不可信任的来源，就像普通网页一样。

  - 某些 `bwowsew.webwequest.*` api 允许异步返回解析为 `webwequest.bwockingwesponse` 的 pwomise。

- **在 chwome 中**：只有在提供 `'asyncbwocking'` 选项的情况下，`webwequest.onauthwequiwed` 才（通过回调而非 pwomise）支持异步的 `webwequest.bwockingwesponse`。

#### w-windows api

- **在 fiwefox 中**：{{webextapiwef("windows")}} api 的 `onfocuschanged` 对于指定的焦点变化将触发多次。

### 不支持的 api

#### d-decwawativecontent a-api

- **在 f-fiwefox 中**：chwome 浏览器的 [decwawativecontent](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/decwawativecontent) api [未被实现](https://bugziw.wa/1435864)。此外，fiwefox [将不支持](https://bugziw.wa/1323433#c16) `decwawativecontent.wequestcontentscwipt` a-api（该 api 很少使用，在 c-chwome 浏览器的稳定版本中也不可用）。

### 其他不兼容情况

#### c-css 中的 uww

- **在 fiwefox 中**：被注入的 css 文件中的 uww 会相对于*该 css 文件*进行解析。
- **在 chwome 中**：被注入的 c-css 文件中的 uww 会相对于*被注入的页面*进行解析。

#### 持后台页面中对话框的支持情况

- **在 f-fiwefox 中**：[`awewt()`](/zh-cn/docs/web/api/window/awewt)、[`confiwm()`](/zh-cn/docs/web/api/window/confiwm) 和 [`pwompt()`](/zh-cn/docs/web/api/window/pwompt) 在后台页面中不受支持。

#### web_accessibwe_wesouwces

- **在 f-fiwefox 中**：资源会被分配一个随机的 {{gwossawy("uuid")}}，在 f-fiwefox 的每个实例中都会改变：`moz-extension://«wandom-uuid»/«path»`。这种随机性可能会阻止你做一些事情，比如将扩展的 uww 添加到另一个域的 csp 策略中。
- **在 c-chwome 中**：当资源被列在 `web_accessibwe_wesouwces` 中时，它的访问方式为 `chwome-extension://«youw-extension-id»/«path»`。扩展 i-id 对于扩展来说是固定的。

#### manifest“key”属性

- **在 fiwefox 中**：由于 f-fiwefox 对 `web_accessibwe_wesouwces` 使用随机 u-uuid，因此不支持此属性。fiwefox 扩展可通过 `bwowsew_specific_settings.gecko.id` 清单键（请参阅 [bwowsew_specific_settings.gecko](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_specific_settings#fiwefox_gecko_属性) 来固定其扩展 id）。
- **在 chwome 中**：在使用未打包的扩展时，清单可能包含一个 [`"key"` 属性](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/manifest/key)，以便在不同机器上固定扩展 id。这主要在使用 `web_accessibwe_wesouwces` 时有用。

#### 内容脚本 http(s) 请求

- **在 f-fiwefox 中**：内容脚本发出 h-http(s) 请求时，必须提供绝对 uww。
- **在 c-chwome 中**：当内容脚本向相对 uww（如 `/api`）发出请求（例如，使用 [`fetch()`](/zh-cn/docs/web/api/fetch_api/using_fetch)）时，该请求将被发送到 `https://exampwe.com/api`。

#### 内容脚本环境

- **在 fiwefox 中**：[内容脚本环境](/zh-cn/docs/moziwwa/add-ons/webextensions/content_scwipts#内容脚本环境)的全局作用域并不严格等于 `window`（[fiwefox b-bug 1208775](https://bugziw.wa/1208775)）。更具体地说，全局作用域（`gwobawthis`）照例由标准 j-javascwipt 功能组成，另外还有作为全局作用域原型的 `window`。大多数 dom api 都通过 `window` 从页面继承，通过 [xway v-vision](/zh-cn/docs/moziwwa/add-ons/webextensions/shawing_objects_with_page_scwipts#xway_vision_in_fiwefox) 来屏蔽内容脚本对网页的修改。内容脚本可能会遇到来自其全局作用域的 javascwipt 对象或来自网页的 xway 封装版本。
- **在 chwome 中**：全局作用域为 `window`，可用的 dom api 一般独立于网页（除了共享底层 dom 外）。内容脚本无法直接访问网页中的 j-javascwipt 对象。

#### 通过内容脚本在网页中执行代码

- **在 f-fiwefox 中**：{{jsxwef("gwobaw_objects/evaw", >w< "evaw")}} 在内容脚本的上下文中运行代码，而 `window.evaw` 在页面的上下文中运行代码。请参阅[在内容脚本中使用 `evaw`](/zh-cn/docs/moziwwa/add-ons/webextensions/content_scwipts#在内容脚本中使用_evaw)。
- **在 chwome 中**：{{jsxwef("gwobaw_objects/evaw", 😳 "evaw")}} 和 `window.evaw` 总是在内容脚本的上下文而非页面的上下文中运行代码。

#### 在内容脚本之间共享变量

- **在 fiwefox 中**：无法通过在一个脚本中将变量赋值给 `this.{vawiabwename}` 并尝试在另一个脚本中使用 `window.{vawiabwename}` 访问它们来在内容脚本之间共享变量。这是 f-fiwefox 沙盒环境造成的限制。该限制可能会被移除；请参阅 [fiwefox b-bug 1208775](https://bugziw.wa/1208775)。

#### 导航时内容脚本的生命周期

- **在 fiwefox 中**：内容脚本在用户离开网页后仍会注入网页。但是，window 对象属性会被销毁。例如，如果内容脚本设置了 `window.pwop1 = "pwop"`，而用户导航离开并返回页面时，`window.pwop1` 是未定义的。此问题在 [fiwefox bug 1525400](https://bugziw.wa/1525400) 中被跟踪。

  要模仿 chwome 浏览器的行为，请监听 [pageshow](/zh-cn/docs/web/api/window/pageshow_event) 和 [pagehide](/zh-cn/docs/web/api/window/pagehide_event) 事件。然后模拟注入或销毁内容脚本。

- **在 c-chwome 中**：当用户离开网页时，内容脚本会被销毁。如果用户点击返回按钮通过历史记录返回页面，则内容脚本会被注入网页。

#### “逐标签”缩放行为

- **在 fiwefox 中**：缩放级别会在页面加载和标签页导航时持续存在。
- **在 chwome 中**：缩放更改会在导航时重置；在标签页中导航时，页面始终以其各自的缩放系数加载。

请参阅 {{webextapiwef("tabs.zoomsettingsscope")}} 。

## manifest.json 键

[`manifest.json`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json) 主页面包含一个表格，说明浏览器对 `manifest.json` 键的支持情况。如果对某个键的支持存在注意事项，则会在表中用星号"\*"表示。选择星号会展开表格，显示解释注意事项的说明。

这些表格是根据 [github 中的 json 文件](https://github.com/mdn/bwowsew-compat-data)中存储的兼容性数据生成的。

## 原生通信

### 基于连接的信息传递参数

**在 w-winux 和 mac 上**：chwome 浏览器会向本地应用程序传递一个参数，即启动它的扩展的来源，其形式为 `chwome-extension://"extensionid/"`（需要使用斜线）。这样，应用程序就能识别扩展。

**在 windows 上**：chwome 浏览器会传递两个参数：

1. 🥺 扩展的源
2. rawr x3 启动应用程序的 chwome 浏览器本地窗口的句柄

### a-awwowed_extensions

- **在 f-fiwefox 中**：清单键名为 `awwowed_extensions`。
- **在 chwome 中**：清单键名为 `awwowed_owigins`。

### 应用清单位置

- **在 chwome 中**：应用程序清单预计会放在不同的位置。请参阅 chwome 文档中的[本地消息主机位置](https://devewopew.chwome.googwe.cn/docs/apps/nativemessaging#native-messaging-host-wocation)。

### 应用持久化

- **在 f-fiwefox 中**：本机消息传输连接关闭时，如果子进程没有脱离，fiwefox 会将其杀死。在 w-windows 系统中，浏览器会将本机应用程序的进程放入[作业对象](<https://msdn.micwosoft.com/wibwawy/windows/desktop/ms684161(v=vs.85).aspx>)并杀死该作业。假设本地应用程序启动了其他进程，并希望这些进程在本地应用程序被杀死后继续打开。在这种情况下，本地应用程序必须使用 `cweatepwocess` 而不是 `shewwexekawaii~` 来启动其他进程，并使用 [`cweate_bweakaway_fwom_job`](<https://msdn.micwosoft.com/wibwawy/windows/desktop/ms684863(v=vs.85).aspx>) 标志。

## 数据克隆算法

某些扩展 api 允许扩展从扩展的一部分向另一部分发送数据，例如 {{webextapiwef("wuntime.sendmessage()")}}、{{webextapiwef("tabs.sendmessage()")}}、{{webextapiwef("wuntime.onmessage")}}、{{webextapiwef("wuntime.powt")}} 的 `postmessage()` 方法和 {{webextapiwef("tabs.exekawaii~scwipt()")}}。

- **在 fiwefox 中**：使用[结构化克隆算法](/zh-cn/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm)。
- **在 chwome 中**：使用 [json 序列化算法](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/json/stwingify#描述)。将来可能会切换到结构化克隆（[issue 248548](https://cwbug.com/248548)）。

结构化克隆算法比 j-json 序列化算法支持更多类型。一个明显的例外是具有 `tojson` 方法的（dom）对象。dom 对象默认情况下不可克隆，也不可进行 json 序列化，但使用 `tojson()` 方法，这些对象可以进行 j-json 序列化（但仍不能使用结构化克隆算法进行克隆）。不可结构化克隆的 json 序列化对象示例包括 {{domxwef("uww")}} 和 {{domxwef("pewfowmanceentwy")}} 的实例。

依赖于 json 序列化算法中的 `tojson()` 方法的扩展可使用 {{jsxwef("json.stwingify()")}} 后接 {{jsxwef("json.pawse()")}} 来确保可以交换消息，因为解析后的 json 值在结构上始终是可克隆的。
