---
title: DelegatedInkTrailPresenter：expectedImprovement 属性
short-title: expectedImprovement
slug: Web/API/DelegatedInkTrailPresenter/expectedImprovement
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{APIRef("Ink API")}}{{Deprecated_header}}{{Non-Standard_Header}}

{{domxref("DelegatedInkTrailPresenter")}} 接口的只读属性 **`expectedImprovement`** 返回一个以毫秒为单位的值，表示使用此演示器可以预期的延迟改进。

### 值

数值。

## 示例

```js
async function inkInit() {
  const ink = navigator.ink;
  const presenter = await ink.requestPresenter({ presentationArea: canvas });
  console.log(presenter.expectedImprovement);

  // …
}
```

## 规范

该特性已不再属于规范。

## 浏览器兼容性

{{Compat}}
