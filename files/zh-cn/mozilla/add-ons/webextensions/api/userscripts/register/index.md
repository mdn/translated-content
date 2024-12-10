---
title: userScripts.register()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/register
l10n:
  sourceCommit: d681d0262045649aefa02efb937ff5f22b6e3b2a
---

{{AddonSidebar}}

该方法允许从扩展的页面（例如后台页面）注册用户脚本。

该方法与 {{WebExtAPIRef("contentScripts.register","contentScripts.register()")}} API 方法非常相似（例如，它们都返回一个 Promise，且都会以一个具有 {{WebExtAPIRef("userScripts.RegisteredUserScript.unregister","unregister()")}} 方法（用于注销脚本）的 API 对象兑现）。但是，支持的选项有所区别。

这是一个异步方法，返回一个 {{JSxRef("Promise")}}。

## 语法

```js-nolint
const registeredUserScript = await browser.userScripts.register(
  userScriptOptions       // 对象
);
// …
await registeredUserScript.unregister();
```

### 参数

- `userScriptOptions`

  - : `object`，表示要注册的用户脚本。其语法与 {{WebExtAPIRef("contentScripts.register","contentScripts.register()")}} 支持的 contentScripts.register() 方法非常相似。

    `UserScriptOptions` 对象具有以下属性：

    - `scriptMetadata` {{Optional_Inline}}
      - : 包含与注册的用户脚本关联的任意元数据属性的 JSON 对象。虽然该对象是任意的，但对象必须是可序列化的，因此它与[结构化克隆算法](/zh-CN/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)兼容。此元数据用于从脚本传递详细信息到 [API 脚本](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts)。例如，提供需要由 [API 脚本](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts)注入的 API 子集的详细信息。本 API 并不会使用到该元数据。
    - `allFrames` {{Optional_Inline}}
      - : 与 [`content_scripts`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) 键中的 `all_frames` 相同。
    - `cookieStoreId` {{optional_inline}}
      - : 一个包含 cookie 存储 ID 字符串的数组或一个包含 cookie 存储 ID 的字符串。传入该参数将让本 API 在属于 cookie 存储 ID 的标签页中注册用户脚本。这使得可以为所有默认或非上下文标识标签、隐私浏览标签（如果[扩展在隐私浏览中启用](https://support.mozilla.org/zh-CN/kb/extensions-private-browsing)）、属于[上下文标识](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities)的标签或这些标签的组合注册脚本。
    - `excludeGlobs` {{Optional_Inline}}
      - : 与 [`content_scripts`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) 键一致。
    - `excludeMatches` {{Optional_Inline}}
      - : 与 [`content_scripts`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) 键一致。
    - `includeGlobs` {{Optional_Inline}}
      - : 与 [`content_scripts`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) 键一致。
    - `js`
      - : 一个对象数组。每个对象都有一个名为 `file` 且值为一个从扩展的 manifest.json 开始指向要注册的 JavaScript 文件的 URL 的属性，或者是一个名为 `code` 且包含要注册的一些 JavaScript 代码的属性。
    - `matchAboutBlank` {{Optional_Inline}}
      - : 与 [`content_scripts`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) 键一致。
    - `matches`
      - : 与 [`content_scripts`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) 键一致。`matches` 中提供的 URL 模式必须由清单中定义的主机权限启用，或者由用户从 [`optional_permissions`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) 列表中启用。例如，如果 matches 包括 `https://mozilla.org/a`，则仅当主机权限包括，例如 `https://mozilla.org/*` 时才会注册脚本。如果未启用 URL 模式，则注册调用将失败，并显示错误“Permission denied to register a user script for ORIGIN”。
    - `runAt` {{Optional_Inline}}
      - : 与 [`content_scripts`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) 键一致。

不像内容脚本选项那样，`userScriptOptions` 对象没有 CSS 属性。请使用 {{WebExtAPIRef("contentScripts.register","contentScripts.register()")}} 来动态注册和注销样式表。

### 返回值

{{JSxRef("Promise")}}，在用户脚本注册时兑现为一个 {{WebExtAPIRef("userScripts.RegisteredUserScript","RegisteredUserScript")}} 用于注销用户脚本的对象。

> [!NOTE]
> 用户脚本在相关的扩展页面（从中注册了用户脚本）卸载时会被自动注销，因此你应该从一个至少持续到你希望用户脚本保持注册的扩展页面中注册用户脚本。

## 浏览器兼容性

{{Compat}}

## 参见

- {{WebExtAPIRef("contentScripts.register","contentScripts.register()")}}
- {{WebExtAPIRef("userScripts.RegisteredUserScript.unregister","RegisteredUserScript.unregister()")}}
