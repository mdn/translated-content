---
title: 权限 - permissions
slug: Mozilla/Add-ons/WebExtensions/manifest.json/permissions
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row" style="width: 30%">值类型</th>
      <td><code>数组</code></td>
    </tr>
    <tr>
      <th scope="row">强制性</th>
      <td>不强制</td>
    </tr>
    <tr>
      <th scope="row">示例</th>
      <td>
        <pre class="brush: json notranslate">
"permissions": [
  "*://developer.mozilla.org/*",
  "webRequest"
]</pre
        >
      </td>
    </tr>
  </tbody>
</table>

使用 permissions 关键字为你的扩展请求特殊的权限。该关键字为一个字符串数列，每个字符串请求一项权限。

如果你使用该关键字请求权限，浏览器可能会在安装该扩展时通知用户该扩展需求某些权限，并询问他们是否愿意给予这些权限。在插件安装之后浏览器也可能允许用户检查扩展的权限。因为要求授予权限可能会影响用户安装你的扩展的意愿，所以请求权限需要特别小心的考虑。举个例子，你想要避免请求不必要的权限，而且可以在你的扩展描述中提供你为何需要某些权限的信息。更多关于这个话题的描述你可以参考这篇提供的文章 [请求正确的权限](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/)。

该关键字能够包含三种类型的权限：

- 主机权限
- API 权限
- 活动标签权限

## 主机权限

主机权限使用 [match patterns](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) 指定，扩展在每一个表达式指定的网址上请求额外权限。

额外权限包括：

- [XMLHttpRequest](/zh-CN/docs/Web/API/XMLHttpRequest) 和 [fetch](/zh-CN/docs/Web/API/Fetch_API) 用于访问无跨源限制的源文件（包括从 content scripts 发出的访问请求）
- 以编程方式（使用 [tabs.executeScript](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript)）将脚本注入到来自源服务器（origins）提供的页面的功能。
- 使用 [webRequest](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/webRequest) 在其主机上获取消息的能力。
- 使用 [cookies](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/cookies) API 访问主机 cookies 的能力，只要 cookies api 的权限也被请求。
- 使用无通配符（\*）的全域名会绕开跟踪保护机制，但不能与 `<all_urls>` 共用。

Firefox 浏览器，自 56 以后的版本，扩展都会自动获取其源的主机权限，如以下形式：

```url
moz-extension://60a20a9b-1ad4-af49-9b6c-c64c98c37920/
```

`60a20a9b-1ad4-af49-9b6c-c64c98c37920` 是扩展内部 ID。编程时可使用 [extension.getURL()](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/extension/getURL) 来返回此 URL 路径：

```js
browser.extension.getURL("");
// moz-extension://60a20a9b-1ad4-af49-9b6c-c64c98c37920/
```

## API 权限

API 权限有关键字指定，每个关键字标志着一类 WebExtension API 能够被使用。

如下关键字是当前可用的：

- `activeTab`
- `alarms`
- `bookmarks`
- `browsingData`
- `browserSettings`
- `contextMenus`
- `contextualIdentities`
- `cookies`
- `downloads`
- `downloads.open`
- `find`
- `geolocation`
- `history`
- `identity`
- `idle`
- `management`
- `menus`
- `nativeMessaging`
- `notifications`
- `pkcs11`
- `privacy`
- `proxy`
- `sessions`
- `storage`
- `tabs`
- `theme`
- `topSites`
- `webNavigation`
- `webRequest`
- `webRequestBlocking`

在大部分情况下这种权限仅仅允许你访问 API，除了以下情况：

- `tabs` 让你可以访问[一部分特权 API](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/tabs)：`Tab.url`、`Tab.title` 和 `Tab.faviconUrl`。在 Firefox 中你也需要 `tabs` 来将 queryInfo 中的 url 参数加入 [`tabs.query()`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query)。剩余的 `tabs` API 能在不要求任何权限的情况被使用
- `webRequestBlocking` 允许你是用“blocking”参数，所以你可以 [修改或取消 requests](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/WebRequest).
- `downloads.open` 让你使用 {{WebExtAPIRef("downloads.open()")}} API.

## 活动标签权限

该权限被指定为`“activeTab”`。如果一个扩展拥有`activeTab`权限，当用户跟该扩展交互时，扩展仅在活动标签被赋予额外权限。

“用户交互”包括：

- 用户点击扩展的浏览器按钮或者页面按钮
- 用户选择了扩展的上下文菜单
- 用户敲击了扩展定义的快捷键

额外特权包括：

- 插入 JavaScript 或者 CSS 的能力，使用 [`browser.tabs.executeScript`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript) 和 [`browser.tabs.insertCSS`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS)
- 为当前标签访问 tabs API 权限部分的能力，包括：Tab.url,Tab.title, 和 Tab .faviconUrl。

改权限的目的是为了在不给予扩展太多权限的情况下，使得扩展能够应付大部分情况。很多扩展需要在用户要求时，在当前页面做一些处理，比如，考虑一个扩展想要在用户点击一个浏览器按钮时在当前页面运行一个脚本，如果 activeTab 权限不存在，扩展将需要请求主机权限\<all_urls>，但是这给予了扩展超过其需要的权限：现在它可以在任何任何时间标签页执行脚本任何次，而不是仅仅在活动标签而且仅仅回应用户的行为。

## 剪贴板访问

有两种权限使得 WebExtentsion 可以跟剪贴板交互：

- `clipboardWrite`: 使用`document.execCommand("copy")` 或`document.execCommand("cut")` 向剪贴板写入
- `clipboardRead`: 使用 `document.execCommand("paste")` 从剪贴板读取

查看 [Interact with the clipboard](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard) 获取更多

## 无限制存储

`unlimitedStorage` 权限：

- 能使扩展突破 {{WebExtAPIRef("storage.local")}} API 设定的 quota 限制
- Firefox 浏览器中，无须提示用户授权，便可帮助扩展创建永久保存的 IndexedDB 数据库 ["persistent" IndexedDB database](/zh-CN/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)

## 示例

```json
 "permissions": ["*://developer.mozilla.org/*"]
```

请求 developer.mozilla.org 下的权限访问。

```json
  "permissions": ["tabs"]
```

请求 tabs API 的权限需要部分的访问。

```json
  "permissions": ["*://developer.mozilla.org/*", "tabs"]
```

请求以上两种访问。

## 浏览器兼容性

本页的兼容列表是从结构化数据生成的。如果你想参与修改此数据，请参考 <https://github.com/mdn/browser-compat-data> 并发送 pull 请求。

{{Compat}}
