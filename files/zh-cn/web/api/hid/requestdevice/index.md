---
title: HID：requestDevice() 方法
slug: Web/API/HID/requestDevice
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

{{domxref("HID")}} 接口的 **`requestDevice()`** 方法请求请问 HID 设备。

用户代理将显示一个包含已连接设备列表的权限对话框，并要求用户选择其中一个设备并授予权限。

## 语法

```js-nolint
requestDevice(options)
```

### 参数

- `options`
  - : 一个对象，包含要与之配对的可能设备的过滤器对象数组。每个过滤器对象可以具有以下属性：
    - `vendorId` {{optional_inline}}
      - : 一个整数，表示请求的 HID 设备的供应商 ID（即：vendorId）
    - `productId` {{optional_inline}}
      - : 一个整数，表示请求的 HID 设备的产品 ID（即：productId）
    - `usagePage` {{optional_inline}}
      - : 一个整数，表示请求设备的 HID 用途中的用途页面组件。顶级集合的用途用于识别设备类型。

        可以在 [HID 使用表](https://usb.org/document-library/hid-usage-tables-15) 文档中找到标准 HID 用途值。

    - `usage` {{optional_inline}}
      - : 一个整数，表示请求设备的 HID 用途中的用途 ID 组件。

> [!NOTE]
> 设备过滤器用于缩小向用户展示的设备列表。如果没有过滤器，则显示所有连接的设备。当包含一个或多个过滤器时，如果任何过滤器匹配，则包含该设备。为了匹配过滤器，该过滤器中包含的所有规则都必须匹配。

### 返回值

一个会兑现为与传入的过滤器匹配的已连接 {{domxref("HIDDevice")}} 对象数组的 {{jsxref("Promise")}}。

### 异常

- `SecurityError` {{domxref("DOMException")}}
  - : 如果页面不允许访问 HID 功能，则会抛出此异常。

## 安全性

需要[瞬态用户激活](/zh-CN/docs/Web/Security/Defenses/User_activation)。用户必须与页面或 UI 元素进行交互，才能使此功能正常工作。

## 示例

### 匹配具有所有四个过滤器规则的设备

在以下示例中，请求一个具有供应商 ID `0xABCD`、产品 ID `0x1234`、用途页面 `0x0C` 和用途 ID `0x01` 的 HID 设备。只有匹配所有这些规则的设备才会显示。

```js
let requestButton = document.getElementById("request-hid-device");
requestButton.addEventListener("click", async () => {
  let device;
  try {
    const devices = await navigator.hid.requestDevice({
      filters: [
        {
          vendorId: 0xabcd,
          productId: 0x1234,
          usagePage: 0x0c,
          usage: 0x01,
        },
      ],
    });
    device = devices[0];
  } catch (error) {
    console.log("发生错误。");
  }

  if (!device) {
    console.log("没有选择设备。");
  } else {
    console.log(`HID：${device.productName}`);
  }
});
```

### 包含两个过滤器的示例

下一个示例包含了两个过滤器。如果设备匹配其中任何一个过滤器，它们将被显示出来。

```js
// 过滤具有 Nintendo Switch Joy-Con USB 供应商/产品 ID 的设备。
const filters = [
  {
    vendorId: 0x057e, // 任天堂株式会社（Nintendo Co., Ltd）
    productId: 0x2006, // Joy-Con 左手柄
  },
  {
    vendorId: 0x057e, // 任天堂株式会社（Nintendo Co., Ltd）
    productId: 0x2007, // Joy-Con 右手柄
  },
];

// 提示用户选择一个 Joy-Con 设备。
const [device] = await navigator.hid.requestDevice({ filters });
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
