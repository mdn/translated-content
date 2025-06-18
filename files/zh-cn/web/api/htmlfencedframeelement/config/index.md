---
title: HTMLFencedFrameElement：config 属性
slug: Web/API/HTMLFencedFrameElement/config
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

{{domxref("HTMLFencedFrameElement")}} 的 **`config`** 属性包含一个 {{domxref("FencedFrameConfig")}} 对象，表示 {{htmlelement("fencedframe")}} 的导航，即其中将显示什么内容。`FencedFrameConfig` 是从诸如[受保护的受众 API](https://developers.google.cn/privacy-sandbox/private-advertising/protected-audience) 等来源返回的。

## 值

`config` 的初始值为 `null`。

当值设置为 {{domxref("FencedFrameConfig")}} 对象实例，`FencedFrameConfig` 的内部属性（例如 `mappedURL`）将决定所关联的 `<fencedframe>` 内部加载的内容。此外：

- 导航类型将是 `"replace"`（参见 {{domxref("NavigateEvent.navigationType")}}），这意味着当前历史记录条目将被新条目替换，而不是为其添加一个新的历史记录条目。
- 导航的 {{httpheader("Referrer-Policy")}} 被设置为 `"no-referrer"`。

## 示例

要设置将在 `<fencedframe>` 中显示的内容，使用 API（如[受保护的受众](https://developers.google.cn/privacy-sandbox/private-advertising/protected-audience)或[共享存储](https://developers.google.cn/privacy-sandbox/private-advertising/shared-storage)）生成一个 `FencedFrameConfig` 对象，然后将其设置为 `<fencedframe>` 的 `config` 属性值。

以下示例从受保护的受众 API 的广告拍卖中获取一个 `FencedFrameConfig`，然后使用它在 `<fencedframe>` 中显示获胜的广告：

```js
const frameConfig = await navigator.runAdAuction({
  // 拍卖配置
  resolveToConfig: true,
});

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

> [!NOTE]
> 在调用 `runAdAuction()` 时，必须传入 `resolveToConfig: true` 以获得 `FencedFrameConfig` 对象。如果没有设置，则所得的 {{jsxref("Promise")}} 将兑现为一个 URN，该 URN 只能在 {{htmlelement("iframe")}} 中使用。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- developers.google.cn 上的[围栏框架](https://developers.google.cn/privacy-sandbox/private-advertising/fenced-frame)
- developers.google.cn 上的[隐私沙盒](https://developers.google.cn/privacy-sandbox)
