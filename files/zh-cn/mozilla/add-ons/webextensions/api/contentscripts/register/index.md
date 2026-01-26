---
title: contentScripts.register()
slug: Mozilla/Add-ons/WebExtensions/API/contentScripts/register
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

使用此函数注册一个或多个内容脚本。

它接受一个参数，该参数是一个对象，其属性类似于 [`content_scripts`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) 清单（manifest）键中给出的对象（但请注意，`content_scripts` 是对象数组，而传递给 `register()` 的参数是一个单独的对象）。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let registering = browser.contentScripts.register(
  contentScriptOptions       // 对象
)
```

### 参数

- `contentScriptOptions`
  - : `object`。表示要注册的内容脚本的 `RegisteredContentScriptOptions` 对象。它的语法与 [`content_scripts`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) 清单键数组中的对象类似。不同之处在于：
    - 属性名称使用{{Glossary("camel_case", "驼峰命名法")}}，而不是{{Glossary("snake_case", "蛇形命名法")}}——例如，使用 `excludeMatches` 而不是 `exclude_matches`。
    - `js` 和 `css` 属性允许你注册字符串和 URL，因此它们的语法必须区分这些类型。

    `RegisteredContentScriptOptions` 对象具有以下属性：
    - `allFrames` {{optional_inline}}
      - : 与 [`content_scripts`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) 键中的 `all_frames` 相同。
    - `cookieStoreId` {{optional_inline}}
      - : 一个字符串或字符串数组。在属于一个或多个 cookie 存储 ID 的标签页中注册内容脚本。这使得脚本可以为所有默认或非场景身份标签页、隐私浏览标签页（如果[扩展在隐私浏览中启用](https://support.mozilla.org/zh-CN/kb/extensions-private-browsing)）、[场景身份](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities)的标签页或这些的组合。有关详细信息，请参见[使用场景身份](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities)。
    - `css` {{optional_inline}}
      - : 对象数组。每个对象有一个名为 `file` 的属性，它是一个从扩展的 manifest.json 开始指向要注册的 CSS 文件的 URL，或一个名为 `code` 的属性，它是要注册的一些 CSS 代码。
    - `excludeGlobs` {{optional_inline}}
      - : 与 [`content_scripts`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) 键中的 `exclude_globs` 相同。
    - `excludeMatches` {{optional_inline}}
      - : 与 [`content_scripts`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) 键中的 `exclude_matches` 相同。
    - `includeGlobs` {{optional_inline}}
      - : 与 [`content_scripts`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) 键中的 `include_globs` 相同。
    - `js` {{optional_inline}}
      - : 对象数组。每个对象有一个名为 `file` 的属性，它是一个从扩展的 manifest.json 开始指向要注册的 JavaScript 文件的 URL，或一个名为 `code` 的属性，它是要注册的一些 JavaScript 代码。
    - `matchAboutBlank` {{optional_inline}}
      - : 与 [`content_scripts`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) 键中的 `match_about_blank` 相同。
    - `matches`
      - : 与 [`content_scripts`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) 键中的 `matches` 相同。
    - `runAt` {{optional_inline}}
      - : 与 [`content_scripts`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) 键中的 `run_at` 相同。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，其会兑现一个 {{WebExtAPIRef("contentScripts.RegisteredContentScript")}} 对象，该对象可以用来取消注册内容脚本。

当前，当相关的扩展页面（从中注册了内容脚本）被卸载时，内容脚本会自动取消注册。因此你应该在一个会在你希望让内容脚本保持注册状态的时间内持续存在扩展页面中注册内容脚本。

## 浏览器兼容性

{{Compat}}

## 示例

此示例为所有 `.org` URL 注册 `defaultCode` 内容脚本：

```js
const defaultHosts = "*://*.org/*";
const defaultCode = "document.body.innerHTML = '<h1>这个页面被吃掉了<h1>'";

async function register(hosts, code) {
  return await browser.contentScripts.register({
    matches: [hosts],
    js: [{ code }],
    runAt: "document_idle",
  });
}

let registered = register(defaultHosts, defaultCode);
```

此代码注册位于 content_scripts/example.js 的 JS 文件：

```js
const scriptObj = await browser.contentScripts.register({
  js: [{ file: "/content_scripts/example.js" }],
  matches: ["<all_urls>"],
  allFrames: true,
  runAt: "document_start",
});
```

{{WebExtExamples}}
