---
title: 使用 userScript（旧版）
slug: Mozilla/Add-ons/WebExtensions/API/userScripts_legacy/Working_with_userScripts
l10n:
  sourceCommit: 6b26a56826b43f539b79033378683bb3be5bbba9
---

> [!WARNING]
> 本文档针对旧版 `userScripts` API 编写，适用于 Firefox Manifest V2 版本。如希望在 Manifest V3 中使用用户脚本功能，可参见新的 {{WebExtAPIRef("userScripts")}} API。

通过实现 userScript，扩展开发者可以修改网站的外观和/或功能，以更好地满足用户需求。

使用以下步骤在扩展中实现 userScript：

1. 使用扩展的清单文件中的 `"user_scripts"` 键定义脚本。
2. 注册 userScript
3. 实现 userScript 函数

让我们通过一个小型 Web 扩展示例具体介绍这一过程，逐步了解它吧！该示例可在 GitHub 上的 [webextensions-examples](https://github.com/mdn/webextensions-examples) 获取到。

## userScript 清单

用户脚本是通过扩展的清单文件中的 [user_scripts](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts) 键来标识的。`user_scripts` 键的信息至少应该是：

```json
  "user_scripts": {
    "api_script": "customUserScriptAPIs.js"
  }
```

“api_script”属性指示包含 `userScript` 代码的 JavaScript 文件的路径。

## 加载示例扩展

一旦你下载了示例：

导航到 about:debugging，点击**临时加载附加组件…**，然后双击扩展的清单。

示例中包含的默认代码允许你加载一个 `userScript`，其会“吃掉”与 Hosts 条目匹配的页面的内容。在单击面板底部的**注册脚本**（Register script）按钮之前，可以对其进行任何更改。

在下图中，扩展将“吃掉”域名以 .org 结尾的页面的内容。这是该扩展的默认行为。

![用户脚本示例](userscriptexample.png)

在单击**注册脚本**按钮之前，不会发生任何事情。该按钮根据对话框上的设置实现用户脚本。这意味着你可以在不必自己实现扩展的情况下尝试脚本的行为。

## 注册 userScript

在执行 userScript 之前，必须使用 `userScripts.register()` 方法注册它。以下是注册示例扩展的代码：

```js
async function registerScript() {
  const params = {
    hosts: stringToArray(hostsInput.value),
    code: codeInput.value,
    excludeMatches: stringToArray(excludeMatchesInput.value),
    includeGlobs: stringToArray(includeGlobsInput.value),
    excludeGlobs: stringToArray(excludeGlobsInput.value),
    runAt: runAtInput.value,
    matchAboutBlank: stringToBool(matchAboutBlankInput.value),
    allFrames: stringToBool(allFramesInput.value),
    scriptMetadata: { name: scriptNameInput.value || null },
  };

  // 保存最后提交的值到扩展存储中（这样当下次打开弹出窗口时可以恢复这些值）。
  await browser.storage.local.set({
    lastSetValues: params,
  });

  try {
    // 清空上次 userScripts.register 的结果。
    lastResultEl.textContent = "";

    await browser.runtime.sendMessage(params);
    lastResultEl.textContent = "UserScript 被成功注册了";
    // 清空上次 userScripts.register 的错误。
    lastErrorEl.textContent = "";

    // 清空上次存储的错误。
    await browser.storage.local.remove("lastError");
  } catch (e) {
    // 注册 userScript 时出现错误，让我们在弹出窗口中显示错误消息并将上次错误存储到扩展存储中。

    const lastError = `${e}`;
    // 显示上次 userScripts.register 的错误。
    lastErrorEl.textContent = lastError;

    // 存储上次错误。
    await browser.storage.local.set({ lastError });
  }
}
```

上述的代码首先初始化 `params` 对象，以便将值传递给 [userScripts.register](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/userScripts_legacy/register) 方法。

## 实现 userScript 函数

一旦脚本被注册，导航到域名以 .org 结尾的页面，你将看到类似于下面的内容：

![以 .org 结尾的网站页面被“吃掉”时显示的状态消息：“This page has been eaten. {"OldStoredValue:" "website address", "NewStoredValue:" "website address"}”](user_script_in_action.png)

## 参见

- {{WebExtAPIRef("userScripts_legacy", "userScripts")}}
- {{WebExtAPIRef("userScripts_legacy.register()", "userScripts.register()")}}
- {{WebExtAPIRef("userScripts_legacy.onBeforeScript", "userScripts.onBeforeScript")}}
