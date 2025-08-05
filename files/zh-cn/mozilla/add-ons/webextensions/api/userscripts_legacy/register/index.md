---
title: userScripts.register()（旧版）
slug: Mozilla/Add-ons/WebExtensions/API/userScripts_legacy/register
l10n:
  sourceCommit: 6b26a56826b43f539b79033378683bb3be5bbba9
---

> [!WARNING]
> 本文档针对旧版 `userScripts` API 编写，适用于 Firefox Manifest V2 版本。如希望在 Manifest V3 中使用用户脚本功能，可参见新的 {{WebExtAPIRef("userScripts")}} API。

该方法允许在扩展的页面（例如后台页面）注册用户脚本。

该方法与 {{WebExtAPIRef("contentScripts.register","contentScripts.register()")}} API 方法非常相似（例如，它们都返回一个 Promise，且都会以一个具有 {{WebExtAPIRef("userScripts_legacy.RegisteredUserScript.unregister","unregister()")}} 方法（用于注销脚本）的 API 对象兑现）。但是，支持的选项有所区别。

这是一个返回 {{JSxRef("Promise")}} 的异步函数。

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
  - : `object`，表示要注册的用户脚本。其语法与 {{WebExtAPIRef("contentScripts.register","contentScripts.register()")}} 非常相似。

    `UserScriptOptions` 对象具有以下属性：
    - `scriptMetadata` {{Optional_Inline}}
      - : 包含与注册的用户脚本关联的任意元数据属性的 `JSON` 对象。虽然该对象是任意的，但其必须是可序列化的，因此它与[结构化克隆算法](/zh-CN/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)兼容。此元数据用于从脚本传递详细信息到 [API 脚本](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts)。例如，提供需要由 [API 脚本](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts)注入的 API 子集的详细信息。本 API 并不会使用到该元数据。
    - `allFrames` {{Optional_Inline}}
      - : 与 [`content_scripts`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) 键中的 `all_frames` 相同。
    - `cookieStoreId` {{optional_inline}}
      - : 一个包含 cookie 存储 ID 字符串的数组或一个包含 cookie 存储 ID 的字符串。在属于 cookie 存储 ID 的标签页中注册用户脚本。这使得可以为所有默认或不属于场景身份的标签页、隐私浏览标签页（如果[扩展在隐私浏览中启用](https://support.mozilla.org/zh-CN/kb/extensions-private-browsing)）、属于[场景身份](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities)的标签页，或这些标签页的组合注册脚本。
    - `excludeGlobs` {{Optional_Inline}}
      - : 与 [`content_scripts`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) 键中的 `exclude_globs` 一致。
    - `excludeMatches` {{Optional_Inline}}
      - : 与 [`content_scripts`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) 键中的 `exclude_matches` 一致。
    - `includeGlobs` {{Optional_Inline}}
      - : 与 [`content_scripts`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) 键中的 `include_globs` 一致。
    - `js`
      - : 一个对象数组。每个对象都有一个名为 `file` 且值为一个从扩展的 manifest.json 开始指向要注册的 JavaScript 文件的 URL 的属性，或者是一个名为 `code` 且包含要注册的一些 JavaScript 代码的属性。
    - `matchAboutBlank` {{Optional_Inline}}
      - : 与 [`content_scripts`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) 键中的 `match_about_blank` 一致。
    - `matches`
      - : 与 [`content_scripts`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) 键中的 `matches` 一致。`matches` 中提供的 URL 模式必须由清单中定义的主机权限启用，或者由用户从 [`optional_permissions`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) 列表中启用。例如，如果 matches 包括 `https://mozilla.org/a`，则仅当主机权限包括，例如 `https://mozilla.org/*` 时才会注册脚本。如果未启用 URL 模式，则注册调用将失败，并显示错误“Permission denied to register a user script for ORIGIN”。
    - `runAt` {{Optional_Inline}}
      - : 与 [`content_scripts`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) 键中的 `run_at` 一致。

不像内容脚本选项那样，`userScriptOptions` 对象没有 CSS 属性。请使用 {{WebExtAPIRef("contentScripts.register","contentScripts.register()")}} 来动态注册和注销样式表。

### 返回值

{{JSxRef("Promise")}}，会兑现为一个用于注销用户脚本的 {{WebExtAPIRef("userScripts_legacy.RegisteredUserScript","RegisteredUserScript")}} 对象。

> [!NOTE]
> 当与用户脚本相关联的扩展页面（注册了这一用户脚本的页面）被卸载时，用户脚本将被自动注销。因此，你应该在一个页面存在时间至少与你希望用户脚本保持注册的时间一样长的扩展页面中注册该用户脚本。

## 浏览器兼容性

{{Compat}}

## 参见

- {{WebExtAPIRef("contentScripts.register","contentScripts.register()")}}
- {{WebExtAPIRef("userScripts_legacy.RegisteredUserScript.unregister","RegisteredUserScript.unregister()")}}
