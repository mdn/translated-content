---
title: Navigator：ink 属性
slug: Web/API/Navigator/ink
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{SeeCompatTable}}{{APIRef("Ink API")}}

{{domxref("Navigator")}} 接口的 **`ink`** 只读属性为当前文档返回一个 {{domxref("Ink")}} 对象，提供对 [Ink API](/zh-CN/docs/Web/API/Ink_API) 功能的访问。

## 值

一个 {{domxref('Ink')}} 对象。

## 示例

```js
async function inkInit() {
  const ink = navigator.ink;
  let presenter = await ink.requestPresenter({ presentationArea: canvas });

  //...
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [在 Web 上改进墨迹输入](https://blogs.windows.com/msedgedev/2021/08/18/enhancing-inking-on-the-web/)
