---
title: userScripts.onBeforeScript（旧版）
slug: Mozilla/Add-ons/WebExtensions/API/userScripts_legacy/onBeforeScript
l10n:
  sourceCommit: 6b26a56826b43f539b79033378683bb3be5bbba9
---

> [!WARNING]
> 本文档针对旧版 `userScripts` API 编写，适用于 Firefox Manifest V2 版本。如希望在 Manifest V3 中使用用户脚本功能，可参见新的 {{WebExtAPIRef("userScripts")}} API。

{{WebExtAPIRef("userScripts_legacy","browser.userScripts")}} 的 `onBeforeScript` 事件在执行用户脚本之前触发。它只能包含在 API 脚本中（即在 [`"user_scripts"`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts) 中注册的脚本中），用于检测自定义 API 方法是否应导出到用户脚本。

## 语法

```js-nolint
browser.userScripts.onBeforeScript.addListener(listener)
browser.userScripts.onBeforeScript.removeListener(listener)
browser.userScripts.onBeforeScript.hasListener(listener)
```

事件包含三个函数：

- `addListener(listener)`
  - : 为此事件添加监听器。
- `removeListener(listener)`
  - : 停止监听此事件。`listener` 参数是要移除的监听器。
- `hasListener(listener)`
  - : 检查是否已为此事件注册了 `listener`。如果正在监听，则返回 `true`，否则返回 `false`。

## addListener 语法

### 参数

- `listener`
  - : 当事件发生时要调用的函数。该函数接收以下参数：
    - `script`
      - : 一个表示与网页匹配的用户脚本的对象。其属性和方法如下：
        - `defineGlobals`
          - : 一个方法，用于导出一个包含全局属性和用户脚本沙盒中可用方法的对象。必须同步调用此方法，以确保用户脚本尚未执行。
        - `export`
          - : 一个方法，用于将值转换为用户脚本代码可以访问的值。此方法用于导出到用户脚本的 API 方法，以解析或解决非原始值。导出的对象还可以提供用户脚本代码可以访问和调用的方法。
        - `global`
          - : 一个提供对用户脚本沙盒的访问的对象。
        - `metadata`
          - : 使用 `userScripts.register` 注册用户脚本时设置的 `scriptMetadata` 属性。

## 示例

关于如何使用监听器的示例：

```js
browser.userScripts.onBeforeScript.addListener((script) => {
  script; // 这是表示将要执行的用户脚本的 API 对象

  script.metadata; // 访问用户脚本元数据（返回从调用 userScripts.register 的 scriptMetadata 属性的值）

  // 导出一些全局属性到用户脚本沙盒（该方法必须在监听器中同步调用，否则用户脚本可能已经执行）。
  script.defineGlobals({
    aGlobalPropertyAccessibleFromUserScriptCode: "属性值",

    myCustomAPIMethod(param1, param2) {
      // 从 API 脚本导出的方法可以使用内容脚本可用的 WebExtensions API。
      browser.runtime.sendMessage(/* … */);
      // …

      return 123; // 原始值可以直接被返回
      // …

      // 非原始值必须通过使用 script API 对象提供的 export 方法显式导出
      return script.export({
        objKey1: {
          nestedProp: "嵌套值",
        },
        // 显式地导出的对象也可以提供方法
        objMethod() {
          /* … */
        },
      });
    },

    async myAsyncMethod(param1, param2, param3) {
      // 导出的方法也可以声明为异步的
    },
  });
});
```

## 浏览器兼容性

{{Compat}}

## 参见

- {{WebExtAPIRef("contentScripts")}}
