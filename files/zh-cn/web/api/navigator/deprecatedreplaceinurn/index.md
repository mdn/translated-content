---
title: Navigator：deprecatedReplaceInURN() 方法
slug: Web/API/Navigator/deprecatedReplaceInURN
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{APIRef("Fenced Frame API")}}{{seecompattable}}

{{domxref("Navigator")}} 接口的 **`deprecatedReplaceInURN()`** 方法用于替换给定不透明 URN 或 `FencedFrameConfig` 的内部 `url` 属性所对应的映射 URL 中的指定字符串。

`FencedFrameConfig` 或不透明 URN 是从诸如[受保护的受众 API](https://developers.google.cn/privacy-sandbox/private-advertising/protected-audience) 的 `runAdAuction()` 方法等来源返回的，然后设置为 {{domxref("HTMLFencedFrameElement.config")}} 的值。浏览器内部会将与 `FencedFrameConfig` 或不透明 URN 相关联的内容 URL 映射到它，并且无法通过 JavaScript 访问该 URL。

然而，你可能希望替换该内部 URL 的部分内容。这是一种常见的将运行时数据传递到广告创意中以用于渲染的方法。`deprecatedReplaceInURN()` 作为一项临时措施被提供，以便能够对围栏框架 URL 进行这种替换，从而帮助广告技术提供商将现有实现迁移到[隐私沙盒](https://developers.google.cn/privacy-sandbox) API。

## 语法

```js-nolint
deprecatedReplaceInURN(UrnOrConfig, replacements)
```

### 参数

- `UrnOrConfig`
  - : 一个 `FencedFrameConfig` 对象或一个想要替换其对应内部 URL 部分的不透明 URN。
- `replacements`
  - : 一个包含一个或多个属性的对象，这些属性表示希望在内部 URL 中进行的替换。每个属性键是希望替换的 URL 子部分，每个属性值是要替换成的字符串。请注意：
    - 要替换的 URL 子部分必须采用以下格式之一：
      - `${string}`
      - `%%string%%`
    - 如果一个 URL 子部分的格式正确，但在 URL 中未找到该子部分，则返回的 Promise 仍然会兑现，但不会进行任何替换。

### 返回值

兑现为 {{jsxref("undefined")}} 的 {{jsxref("Promise")}}。

### 异常

- `TypeError` {{domxref("DOMException")}}
  - : 抛出条件：
    - `UrnOrConfig` 不是一个有效的 `FencedFrameConfig` 对象或不透明 URN。
    - 任何指定的替换键不符合允许的格式。

## 示例

以下调用用于返回一个不透明 URN：

```js
const exampleURN = await navigator.runAdAuction({
  ...auctionConfig,
  resolveToConfig: false,
});
```

然后，可以使用类似以下的 `deprecatedReplaceInURN()` 调用来替换 URL 的子部分：

```js
await navigator.deprecatedReplaceInURN(exampleURN, {
  "${foo}": "1",
  "${bar}": "2",
  "%%baz%%": "3",
});
```

如果与 URN 关联的内部 URL 最初是：

```http
https://example.com/a=${foo}&b=${bar}&c=%%baz%%
```

替换后，它将变为：

```http
https://example.com/a=1&b=2&c=3
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [围栏框架 API](/zh-CN/docs/Web/API/Fenced_frame_API)
