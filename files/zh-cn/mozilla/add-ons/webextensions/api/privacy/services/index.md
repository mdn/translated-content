---
title: privacy.services
slug: Mozilla/Add-ons/WebExtensions/API/privacy/services
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

`privacy.services` 属性包含了控制浏览器或第三方提供的服务的隐私相关设置。每个属性都是一个 {{WebExtAPIRef("types.BrowserSetting")}} 对象。

## 属性

- `passwordSavingEnabled`
  - : {{WebExtAPIRef("types.BrowserSetting")}} 对象，其底层值是布尔值。如果为 `true`，则浏览器的密码管理器在用户输入密码时会提供保存密码的选项。默认为 `true`。

## 浏览器兼容性

{{Compat}}

## 示例

如果可以，禁用密码管理器。

```js
function onSet(result) {
  if (result) {
    console.log("成功");
  } else {
    console.log("失败");
  }
}

let getting = browser.privacy.services.passwordSavingEnabled.get({});
getting.then((got) => {
  console.log(got.value);
  if (
    got.levelOfControl === "controlled_by_this_extension" ||
    got.levelOfControl === "controllable_by_this_extension"
  ) {
    let setting = browser.privacy.services.passwordSavingEnabled.set({
      value: false,
    });
    setting.then(onSet);
  } else {
    console.log("无法设置 passwordSavingEnabled");
  }
});
```

{{WebExtExamples}}

> [!NOTE]
> 该 API 基于 Chromium 的 [`chrome.privacy`](https://developer.chrome.google.cn/docs/extensions/reference/api/privacy) API。
