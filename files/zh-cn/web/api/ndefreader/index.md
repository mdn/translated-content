---
title: NDEFReader
slug: Web/API/NDEFReader
l10n:
  sourceCommit: a492b9739e10e7751797804228b360285e006858
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

[Web NFC API](/zh-CN/docs/Web/API/Web_NFC_API) 的 **`NDEFReader`** 接口用于在兼容 NFC 设备（例如支持 NDEF 的 NFC 标签）位于读卡器磁感应场内时，从这些设备读取数据和向其写入数据。

{{InheritanceDiagram}}

## 构造函数

- {{DOMxRef("NDEFReader.NDEFReader", "NDEFReader()")}} {{Experimental_Inline}}
  - : 返回一个新的 `NDEFReader` 对象。

## 实例方法

_`NDEFReader` 接口继承了其父接口 {{domxref("EventTarget")}} 的方法。_

- {{DOMxRef("NDEFReader.scan", "NDEFReader.scan()")}} {{Experimental_Inline}}
  - : 激活读取设备并返回一个 {{jsxref("Promise")}}，在添加执行 NFC 标签读取操作的计划后兑现该 Promise，如果遇到硬件或权限错误则拒绝。如果尚未授予“nfc”权限，此方法将触发权限提示。
- {{DOMxRef("NDEFReader.write", "NDEFReader.write()")}} {{Experimental_Inline}}
  - : 尝试将 NDEF 消息写入标签并返回一个 {{jsxref("Promise")}}，当消息已写入标签时兑现该 Promise，或者在遇到硬件或权限错误时拒绝该 Promise。如果尚未授予“nfc”权限，则此方法会触发权限提示。

## 事件

_继承自其父接口 {{DOMxRef("EventTarget")}} 的事件。_

- {{DOMxRef("NDEFReader.reading_event", "reading")}} {{Experimental_Inline}}
  - : 当有来自兼容 NFC 设备的新读取结果可用时触发。
- {{DOMxRef("NDEFReader.readingerror_event", "readingerror")}} {{Experimental_Inline}}
  - : 当标签靠近读取设备但无法读取时触发。

## 示例

### 处理写入时的初始读取

下面的示例展示了如何协调通用读取处理器和用于单次写入的专用处理器。要写入数据，则需要找到并读取标签。这样你就可以检查它是否确实是你想要写入的标签。这就是为什么建议你在读取事件中调用 `write()` 的原因。

```js
const ndef = new NDEFReader();
let ignoreRead = false;

ndef.onreading = (event) => {
  if (ignoreRead) {
    return; // 待写入，忽略读取。
  }

  console.log("我们读取了一个标签，但在待写入期间没有读取！");
};

function write(data) {
  ignoreRead = true;
  return new Promise((resolve, reject) => {
    ndef.addEventListener(
      "reading",
      (event) => {
        // 检查是否要写入该标签，或拒绝写入。
        ndef
          .write(data)
          .then(resolve, reject)
          .finally(() => (ignoreRead = false));
      },
      { once: true },
    );
  });
}

await ndef.scan();
try {
  await write("你好，世界");
  console.log("我们已将数据写入标签！");
} catch (err) {
  console.error("出了一些问题", err);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
