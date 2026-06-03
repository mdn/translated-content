---
title: userScripts.update()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/update
l10n:
  sourceCommit: 814f49dc14eb8c8a15c6c3bdc6c83d24ed865cdf
---

更新由扩展注册的用户脚本。

## 语法

```js-nolint
let updatingUserScript = browser.userScripts.update(
  scripts       // 对象数组
);
```

### 参数

- `scripts`
  - : {{WebExtAPIRef("userScripts.RegisteredUserScript")}} 的数组（`array`）。要更新的用户脚本的详细信息。

    属性为 `null` 或省略时将不更改这些属性。向 `matches`、`excludeMatches`、`globs` 和 `excludeGlobs` 属性传入空数组会清除这些属性。

### 返回值

一个 {{JSxRef("Promise")}}，如果所有请求的用户脚本都更新，则其将不带参数地兑现。如果任何用户脚本更新失败或请求因其他原因失败，则不会更新任何脚本，且 promise 会以错误消息拒绝。

## 示例

以下代码片段展示了更新两个用户脚本的示例。第一个更新因尝试创建无效的脚本注册而失败。第二个示例展示了成功的更新。

```js
// 有效的注册：
await browser.userScripts.register([
  {
    worldId: "myScriptId",
    js: [{ code: "console.log('你好，世界！');" }],
    matches: ["*://example.com/*"],
  },
]);

// 无效：这样更新会导致脚本没有 matches 或 includeGlobs 其中之一！
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
