---
title: Fence：getNestedConfigs() 方法
slug: Web/API/Fence/getNestedConfigs
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

{{domxref("Fence")}} 接口的 **`getNestedConfigs()`** 方法返回加载到当前 `<fencedframe>` 内部嵌入的 `<fencedframe>` 中的 {{domxref("FencedFrameConfig")}} 配置。

## 语法

```js-nolint
getNestedConfigs()
```

### 参数

无。

### 返回值

`getNestedConfigs()` 有两个可能的返回值：

- 如果当前 `<fencedframe>` 的配置是通过支持嵌套配置的 API（例如[受保护的受众](https://developers.google.cn/privacy-sandbox/private-advertising/protected-audience)）创建的，则为一个包含 20 个 {{domxref("FencedFrameConfig")}} 对象的数组。在这 20 个配置中，前 N 个配置是通过 API 注册的，其余的是将导航到 `about:blank` 的填充配置，以便隐藏配置的数量并防止任何信息泄露。
- 如果当前 `<fencedframe>` 的配置是通过不支持嵌套配置的 API（例如[共享存储](/zh-CN/docs/Web/API/Shared_Storage_API)）创建的，则为 `null`。

## 示例

```js
// 在 <fencedframe> 内部运行

// 获取嵌入围栏框架的配置
const configs = window.fence.getNestedConfigs();

// 将新的围栏框架配置设置为与检索到的某个配置相同
const frame = document.createElement("fencedframe");
frame.config = configs[0];
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- developers.google.cn 上的[围栏框架](https://developers.google.cn/privacy-sandbox/private-advertising/fenced-frame)
- developers.google.cn 上的[隐私沙盒](https://developers.google.cn/privacy-sandbox)
