---
title: userScripts.register()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/register
l10n:
  sourceCommit: 814f49dc14eb8c8a15c6c3bdc6c83d24ed865cdf
---

为扩展注册用户脚本。

## 语法

```js-nolint
let registeredUserScript = browser.userScripts.register(
  scripts       // 对象的数组
)
```

### 参数

- `scripts`
  - : {{WebExtAPIRef("userScripts.RegisteredUserScript")}} 的数组（`array`）。要注册的用户脚本的详细信息。

    每个 {{WebExtAPIRef("userScripts.RegisteredUserScript")}} 对象必须包含非空数组的 `js` 属性，以及非空数组的 `matches` 和 `includeGlobs` 其中之一。

### 返回值

一个 {{JSxRef("Promise")}}，如果所有请求的用户脚本都已注册，则将不带参数地兑现。如果任何用户脚本注册失败或请求因其他原因失败，则不会注册任何脚本，且 promise 将以错误消息拒绝。

## 示例

此代码片段将“你好世界”代码注册到 `"myScriptId"` 执行环境中以在所有匹配 `"*://example.com/*"` 的网站上执行。

```js
await browser.userScripts.register([
  {
    worldId: "myScriptId",
    js: [{ code: "console.log('你好，世界！');" }],
    matches: ["*://example.com/*"],
  },
]);
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}
