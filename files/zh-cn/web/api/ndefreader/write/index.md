---
title: NDEFReader：write() 方法
slug: Web/API/NDEFReader/write
l10n:
  sourceCommit: f75b2c86ae4168e59416aed4c7121f222afc201d
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

{{DOMxRef("NDEFReader")}} 接口的 `write()` 方法尝试将 NDEF 消息写入标签，并返回一个 {{jsxref("Promise")}}，当消息成功写入标签时兑现，或者在遇到硬件或权限错误时拒绝。如果尚未授予“nfc”权限，此方法会触发权限提示。

## 语法

```js-nolint
write(message)
write(message, options)
```

### 参数

- `message`

  - : 要写入的消息，可以是字符串、{{jsxref("ArrayBuffer")}}、{{jsxref("TypedArray")}}、{{jsxref("DataView")}}，或者是记录数组。具有以下成员：

    - `data` {{optional_inline}}
      - : 包含要传输的数据；可以是字符串、{{jsxref("ArrayBuffer")}}、{{jsxref("TypedArray")}}、{{jsxref("DataView")}} 或嵌套记录数组之一。
    - `encoding` {{optional_inline}}
      - : 指定记录编码的字符串。
    - `id` {{optional_inline}}
      - : 开发人员为记录定义的标识符。
    - `lang` {{optional_inline}}
      - : 根据 {{RFC(5646, "用于标识语言的标记（又称 BCP 47）")}}规定的有效语言标签。
    - `mediaType` {{optional_inline}}
      - : 有效的 [MIME 类型](/zh-CN/docs/Web/HTTP/MIME_types)。
    - `recordType`

      - : 指示存储在 `data` 中的数据类型的字符串。必须是以下值之一：

        - `"absolute-url"`
          - : 指向数据的绝对 URL。
        - `"empty"`
          - : 一个空的 {{domxref("NDEFRecord")}}。
        - `"mime"`
          - : 有效的 [MIME 类型](/zh-CN/docs/Web/HTTP/MIME_types)。
        - `"smart-poster"`
          - : 一个由 [NDEF-SMARTPOSTER](https://w3c.github.io/web-nfc/#bib-ndef-smartposter) 规范定义的智能海报。
        - `"text"`
          - : 由 [NDEF-TEXT](https://w3c.github.io/web-nfc/#bib-ndef-text) 规范定义的文本。
        - `"unknown"`
          - : 记录类型未知。
        - `"URL"`
          - : 由 [NDEF-URI](https://w3c.github.io/web-nfc/#bib-ndef-uri) 规范定义的 URL。

- `options` {{optional_inline}}

  - : 一个包含以下属性的对象：

    - `overwrite`
      - : 一个布尔值，指定是否应覆盖（如果存在的话）现有记录。
    - `signal` {{optional_inline}}
      - : 一个 {{DOMxRef("AbortSignal")}}，允许取消当前的写入操作。

### 返回值

一个 {{JSxRef("Promise")}}，当消息成功写入标签时兑现，或者在遇到硬件或权限错误时拒绝。

### 异常

此方法不抛出异常；相反，它会拒绝返回的 promise，并传入一个 {{domxref("DOMException")}}，其 `name` 属性是以下值之一：

- `AbortError`
  - : 通过在 `options` 参数中传递的 {{DOMxRef("AbortSignal")}} 中止了扫描操作。
- `NotAllowedError`
  - : 此操作的权限已被拒绝，或者 `overwrite` 设置为 `false` 而标签上已有记录。
- `NotSupportedError`
  - : 没有与 Web NFC 兼容的 NFC 适配器，或者可用的 NFC 适配器不支持推送消息，或者无法建立连接。
- `NotReadableError`
  - : 由于用户偏好等原因，用户代理（UA）不允许访问底层 NFC 适配器。
- `NetworkError`
  - : 在已经开始传输后发生传输失败（例如，标签已从读卡器移除）。

## 示例

### 编写文本字符串

以下示例展示了如何将字符串写入 NFC 标签以及处理发生的任何错误。

```js
const ndef = new NDEFReader();
ndef
  .write("你好，世界")
  .then(() => {
    console.log("所写信息。");
  })
  .catch((error) => {
    console.log(`写入失败 :-( 再试一次：${error}。`);
  });
```

### 编写 URL

以下示例展示了如何将上述记录对象写入 NFC 标签以及处理可能发生的任何错误。

```js
const ndef = new NDEFReader();
try {
  await ndef.write({
    records: [{ recordType: "url", data: "http://example.com/" }],
  });
} catch {
  console.log("写入失败 :-( 请再试一次。");
}
```

### 设置写入超时

有时为写入操作设置时间限制是有用的。例如，你要求用户触摸标签，但如果在一定时间内未找到标签，则超时。

```js
const ndef = new NDEFReader();
ndef.onreading = (event) => console.log("我们读取了标签！");

function write(data, { timeout } = {}) {
  return new Promise((resolve, reject) => {
    const ctlr = new AbortController();
    ctlr.signal.onabort = () => reject("时间到，退出！");
    setTimeout(() => ctlr.abort(), timeout);

    ndef.addEventListener(
      "reading",
      (event) => {
        ndef.write(data, { signal: ctlr.signal }).then(resolve, reject);
      },
      { once: true },
    );
  });
}

await ndef.scan();
try {
  // 让我们只等待 5 秒钟。
  await write("你好，世界", { timeout: 5_000 });
} catch (err) {
  console.error("出了一些问题", err);
} finally {
  console.log("我们成功写入标签！");
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
