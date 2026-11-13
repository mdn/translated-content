---
title: webRequest.StreamFilter.ondata
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/ondata
l10n:
  sourceCommit: acc6ec7d08ede0727a68cbc696e983c572940f62
---

每当响应数据可用时都会被调用的事件处理器。处理器会传递一个包含 `data` 属性的 [`Event` 对象](/zh-CN/docs/Web/API/Event)。`data` 属性包含以 {{jsxref("ArrayBuffer")}} 表示的一个响应数据分块。

要对数据解码，请使用 {{domxref("TextDecoder")}} 或 {{domxref("Blob")}}。

如果不使用 `ondata` 监听器，你将无法接收到原始响应主体，并且除非调用 {{WebEXTAPIRef("webRequest.StreamFilter.write", "write")}}，否则输出流将为空。

## 示例

该示例添加一个 `ondata` 监听器，其会使用 {{jsxref("String.prototype.replaceAll()", "replaceAll()")}} 将响应中的“示例”替换为“WebExtension 示例”。

> [!NOTE]
> 该示例仅可用于替换在一个数据分块中完整出现的“示例”两字，而不适用于文字横跨两个分块的情况（在大型文档中这可能会以 \~0.1% 概率发生）。此外，它仅能处理 UTF-8 编码的文档。实际实现将会更为复杂。

<!-- cSpell:ignore Examp -->

```js
function listener(details) {
  const filter = browser.webRequest.filterResponseData(details.requestId);
  const decoder = new TextDecoder("utf-8");
  const encoder = new TextEncoder();

  filter.ondata = (event) => {
    let str = decoder.decode(event.data, { stream: true });
    // 只将 HTTP 响应中的任何示例更改为 WebExtension 示例。
    // 请注意，这可能不会按预期工作，因为 str 的结尾也可以是“<h1>示”（因为它不是完整的响应）。
    // 因此，最好先获取完整的响应，然后再进行替换。
    str = str.replaceAll("示例", "WebExtension 示例");
    filter.write(encoder.encode(str));
    // 在此处调用 filter.disconnect(); 会使我们仅处理第一个分块，并让其余的分块保持不变。
    // 需要注意的是，这会破坏出现在分块边界上的多字节字符！
  };

  filter.onstop = (event) => {
    filter.close();
  };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://example.com/*"], types: ["main_frame"] },
  ["blocking"],
);
```

另一个用于处理大型文档的示例：

```js
function listener(details) {
  const filter = browser.webRequest.filterResponseData(details.requestId);
  const decoder = new TextDecoder("utf-8");
  const encoder = new TextEncoder();

  const data = [];
  filter.ondata = (event) => {
    data.push(event.data);
  };

  filter.onstop = (event) => {
    let str = "";
    if (data.length === 1) {
      str = decoder.decode(data[0]);
    } else {
      for (let i = 0; i < data.length; i++) {
        const stream = i !== data.length - 1;
        str += decoder.decode(data[i], { stream });
      }
    }
    str = str.replaceAll("示例", "WebExtension $&");
    filter.write(encoder.encode(str));
    filter.close();
  };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://example.com/"], types: ["main_frame"] },
  ["blocking"],
);
```

以及另一个版本：

```js
function listener(details) {
  const filter = browser.webRequest.filterResponseData(details.requestId);
  const decoder = new TextDecoder("utf-8");
  const encoder = new TextEncoder();

  const data = [];
  filter.ondata = (event) => {
    data.push(event.data);
  };

  filter.onstop = (event) => {
    let str = "";
    for (const buffer of data) {
      str += decoder.decode(buffer, { stream: true });
    }
    str += decoder.decode(); // 流的末尾

    str = str.replaceAll("示例", "WebExtension $&");
    filter.write(encoder.encode(str));
    filter.close();
  };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://example.com/"], types: ["main_frame"] },
  ["blocking"],
);
```

上一示例也可以这样写：

```js
function listener(details) {
  const filter = browser.webRequest.filterResponseData(details.requestId);
  const decoder = new TextDecoder("utf-8");
  const encoder = new TextEncoder();

  const data = [];
  filter.ondata = (event) => {
    data.push(decoder.decode(event.data, { stream: true }));
  };

  filter.onstop = (event) => {
    data.push(decoder.decode());

    let str = data.join("");
    str = str.replaceAll("示例", "WebExtension $&");
    filter.write(encoder.encode(str));
    filter.close();
  };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://example.com/"], types: ["main_frame"] },
  ["blocking"],
);
```

这个示例使用 {{domxref("Blob")}}：

```js
function listener(details) {
  const filter = browser.webRequest.filterResponseData(details.requestId);
  const encoder = new TextEncoder();

  const data = [];
  filter.ondata = (event) => {
    data.push(event.data);
  };

  filter.onstop = async (event) => {
    const blob = new Blob(data, { type: "text/html" });
    let str = await blob.text();
    str = str.replaceAll("示例", "WebExtension $&");
    filter.write(encoder.encode(str));
    filter.close();
  };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://example.com/"], types: ["main_frame"] },
  ["blocking"],
);
```

这个示例使用 {{domxref("DOMParser")}} 接口：

```js
function listener(details) {
  const filter = browser.webRequest.filterResponseData(details.requestId);
  const encoder = new TextEncoder();
  const parser = new DOMParser();

  const data = [];
  filter.ondata = (event) => {
    data.push(event.data);
  };

  filter.onstop = async (event) => {
    const blob = new Blob(data, { type: "text/html" });
    const str = await blob.text();
    const doc = parser.parseFromString(str, blob.type);
    const nodes = doc.querySelectorAll("title, h1");
    for (const node of nodes) {
      node.innerText = node.innerText.replaceAll("示例", "WebExtension $&");
    }
    filter.write(encoder.encode(doc.documentElement.outerHTML));
    filter.close();
  };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://example.com/"], types: ["main_frame"] },
  ["blocking"],
);
```

该示例则将所有缓冲区合并为单个的缓冲区：

```js
function listener(details) {
  const filter = browser.webRequest.filterResponseData(details.requestId);
  const decoder = new TextDecoder("utf-8");
  const encoder = new TextEncoder();

  const data = [];
  filter.ondata = (event) => {
    data.push(new Uint8Array(event.data));
  };

  filter.onstop = (event) => {
    let combinedLength = 0;
    for (const buffer of data) {
      combinedLength += buffer.length;
    }
    const combinedArray = new Uint8Array(combinedLength);
    let writeOffset = 0;
    for (const buffer of data) {
      combinedArray.set(buffer, writeOffset);
      writeOffset += buffer.length;
    }
    let str = decoder.decode(combinedArray);
    str = str.replaceAll("示例", "WebExtension $&");
    filter.write(encoder.encode(str));
    filter.close();
  };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://example.com/"], types: ["main_frame"] },
  ["blocking"],
);
```

上面的示例也可以写作：

```js
function listener(details) {
  const filter = browser.webRequest.filterResponseData(details.requestId);
  const decoder = new TextDecoder("utf-8");
  const encoder = new TextEncoder();

  const data = [];
  filter.ondata = (event) => {
    data.push(event.data);
  };

  filter.onstop = async (event) => {
    const blob = new Blob(data, { type: "text/html" });
    const buffer = await blob.arrayBuffer();
    let str = decoder.decode(buffer);
    str = str.replaceAll("示例", "WebExtension $&");
    filter.write(encoder.encode(str));
    filter.close();
  };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://example.com/"], types: ["main_frame"] },
  ["blocking"],
);
```

该示例则展示如何检测响应中的最后一个分块：

```js
function listener(details) {
  const filter = browser.webRequest.filterResponseData(details.requestId);
  const encoder = new TextEncoder();
  const decoder = new TextDecoder("utf-8");

  let str = "";
  filter.ondata = (event) => {
    let stream = true;
    const data = new Uint8Array(event.data.slice(-8, -1));
    if (String.fromCharCode(...data) === "</html>") {
      stream = false; // end-of-stream
    }
    str += decoder.decode(event.data, { stream });
  };

  filter.onstop = (event) => {
    str = str.replaceAll("示例", "WebExtension $&");
    filter.write(encoder.encode(str));
    filter.close();
  };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://example.com/"], types: ["main_frame"] },
  ["blocking"],
);
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}
