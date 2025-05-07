---
title: userScripts.update()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/update
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

更新由扩展注册的用户脚本。

## 语法

```js-nolint
let updatingUserScript = browser.userScripts.update(
  scripts       // 对象的数组
);
```

### 参数

- `scripts`

  - : {{WebExtAPIRef("userScripts.RegisteredUserScript")}} 的 `array`。要更新的用户脚本的详细信息。

    属性为 `null` 或省略时不会更改。向 `matches`、`excludeMatches`、`globs` 和 `excludeGlobs` 传递空数组会清除这些属性。

### 返回值

一个 {{JSxRef("Promise")}}，如果所有请求的用户脚本都更新，则该 Promise 会被 fulfilled 且无参数。如果任何用户脚本更新失败或请求因其他原因失败，则不会更新任何脚本，Promise 会被 rejected 并带有错误消息。

## 示例

以下代码片段展示了两个用户脚本更新的示例。第一个更新因尝试创建无效的脚本注册而失败。第二个示例展示了成功的更新。

```js
// 有效的注册：
await browser.userScripts.register([
  {
    worldId: "myScriptId",
    js: [{ code: "console.log('Hello world!');" }],
    matches: ["*://example.com/*"],
  },
]);

// 无效！将导致脚本没有 matches 或 includeGlobs！
await browser.userScripts.update([{ matches: [] }]);

// 有效：用 includeGlobs 替换 matches。
await browser.userScripts.update([
  {
    matches: [],
    includeGlobs: ["*example*"],
  },
]);
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}
