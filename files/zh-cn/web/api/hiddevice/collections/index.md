---
title: HIDDevice：collections 属性
slug: Web/API/HIDDevice/collections
l10n:
  sourceCommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

{{domxref("HIDDevice")}} 接口的 **`collections`** 只读属性返回报告格式的数组。

## 值

一个报告格式数组，每个条目包含以下内容：

- `usagePage`

  - : 一个整数，表示请求设备的 HID 用途中的用途页面组件。顶级集合的用途用于识别设备类型。

    可以在 [HID 使用表](https://usb.org/document-library/hid-usage-tables-15)文档中找到标准 HID 用途值。

- `usage`
  - : 一个整数，表示此集合关联的 HID 用途中的用途 ID 组件。
- `type`

  - : 一个 8 位值，表示集合类型，描述分组条目之间的不同关系。为以下值之一：

    - `0x00`
      - : 物理（Physical）（轴组）
    - `0x01`
      - : 应用（Application）（鼠标、键盘）
    - `0x02`
      - : 逻辑（Logical）（相关数据）
    - `0x03`
      - : 报告（Report）
    - `0x04`
      - : 具名数组
    - `0x05`
      - : 用途开关
    - `0x06`
      - : 修改后的用途
    - `0x07` 到 `0x7F`
      - : 保留供未来使用
    - `0x80` 到 `0xFF`
      - : 供应商定义

    有关这些类型的更多信息，请参阅[设备类定义](https://www.usb.org/document-library/device-class-definition-hid-111)文档。

- `children`
  - : 一个子集合数组，采用与顶级集合相同的格式。
- `inputReports`
  - : 一个 `inputReport` 项数组，表示此集合中描述的各个输入报告。
- `outputReports`
  - : 一个 `outputReport` 项数组，表示此集合中描述的各个输出报告。
- `featureReports`
  - : 一个 `featureReport` 项数组，表示此集合中描述的各个特征报告。

## 示例

以下示例演示如何在返回 `collections` 属性后访问各个元素。你可以在文章[连接到不常见的 HID 设备](https://developer.chrome.google.cn/docs/capabilities/hid)中看到更多示例和实时演示。

```js
for (const collection of device.collections) {
  // 一个 HID 集合包括用途、用途页面、报告和子集合。
  console.log(`用途：${collection.usage}`);
  console.log(`用途页面：${collection.usagePage}`);

  for (const inputReport of collection.inputReports) {
    console.log(`输入报告：${inputReport.reportId}`);
    // 遍历 inputReport.items
  }

  for (const outputReport of collection.outputReports) {
    console.log(`输出报告：${outputReport.reportId}`);
    // 遍历 outputReport.items
  }

  for (const featureReport of collection.featureReports) {
    console.log(`特征报告：${featureReport.reportId}`);
    // 遍历 featureReport.items
  }

  // 使用 collection.children 遍历子集合
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
