---
title: WorkerNavigator：appVersion 属性
slug: Web/API/WorkerNavigator/appVersion
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef("HTML DOM")}} {{Deprecated_Header}}

返回“`4.0`”或一个代表浏览器版本信息的字符串。

> [!NOTE]
> 不要依赖此属性返回正确的浏览器版本。

## 值

“`4.0`”或一个代表浏览器版本信息的字符串。

## 示例

```js
alert(`你的浏览器版本为 ${navigator.appVersion}`);
```

## 备注

`navigator.userAgent` 属性也可能包含版本号（例如“`Mozilla/5.0 (Windows; U; Win98; en-US; rv:0.9.2) Gecko/20010725 Netscape 6/6.1`”）但是，你应该意识到更改用户代理字符串和“欺骗”其他浏览器、平台或用户代理非常容易，并且浏览器供应商自身对这些属性也非常随意。

`navigator.appVersion`、`navigator.appName` 和 `navigator.userAgent` 属性曾经被用于“浏览器嗅探”代码中：这些代码会尝试找出你使用的浏览器类型并据此调整页面。这就造成了目前的局面，浏览器不得不返回这些属性的虚假值，以免被某些网站锁定。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
