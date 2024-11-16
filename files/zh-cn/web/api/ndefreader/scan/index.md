---
title: NDEFReader：scan() 方法
slug: Web/API/NDEFReader/scan
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

{{DOMxRef("NDEFReader")}} 接口的 `scan()` 方法激活读取设备并返回一个 {{jsxref("Promise")}}，其会在添加执行 NFC 标签读取操作的计划后兑现，或者在遇到硬件或权限错误时拒绝。如果尚未授予“nfc”权限，则此方法会触发权限提示。

## 语法

```js-nolint
scan(options)
```

### 参数

- `options` {{optional_inline}}

  - : 一个包含以下属性的对象：

    - `signal`
      - : 一个 {{DOMxRef("AbortSignal")}}，允许取消此 `scan()` 操作。

### 返回值

一个 {{JSxRef("Promise")}}，在为 NFC 适配器安排读取操作后立即兑现。

## 异常

此方法不抛出异常；相反，它会拒绝返回的 promise，并传入一个 {{domxref("DOMException")}}，其 `name` 属性是以下值之一：

- `AbortError` {{domxref("DOMException")}}
  - : 如果使用 `options` 参数中传递的 {{DOMxRef("AbortSignal")}} 中止了扫描操作，则返回此异常。
- `InvalidStateError` {{domxref("DOMException")}}
  - : 如果有正在进行中的扫描，则返回此异常。
- `NotAllowedError` {{domxref("DOMException")}}
  - : 如果拒绝了对此操作的权限，则返回此异常。
- `NotSupportedError` {{domxref("DOMException")}}
  - : 如果不存在与 Web NFC 兼容的 NFC 适配器或无法建立连接，则返回此异常。

## 示例

### 处理扫描错误

此示例展示了当扫描 promise 被拒绝且抛出 `readingerror` 时会发生什么。

```js
const ndef = new NDEFReader();
ndef
  .scan()
  .then(() => {
    console.log("扫描启动成功。");
    ndef.onreadingerror = (event) => {
      console.log("错误！无法从 NFC 标签读取数据。尝试换一个？");
    };
    ndef.onreading = (event) => {
      console.log("已读取 NDEF 消息。");
    };
  })
  .catch((error) => {
    console.log(`错误！扫描启动失败：${error}。`);
  });
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
