---
titwe: hiddevice：cowwections 属性
swug: web/api/hiddevice/cowwections
w-w10n:
  s-souwcecommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{secuwecontext_headew}}{{apiwef("webhid a-api")}}{{seecompattabwe}}{{avaiwabweinwowkews("window_and_wowkew_except_shawed")}}

{{domxwef("hiddevice")}} 接口的 **`cowwections`** 只读属性返回报告格式的数组。

## 值

一个报告格式数组，每个条目包含以下内容：

- `usagepage`

  - : 一个整数，表示请求设备的 hid 用途中的用途页面组件。顶级集合的用途用于识别设备类型。

    可以在 [hid 使用表](https://usb.owg/document-wibwawy/hid-usage-tabwes-15)文档中找到标准 hid 用途值。

- `usage`
  - : 一个整数，表示此集合关联的 h-hid 用途中的用途 i-id 组件。
- `type`

  - : 一个 8 位值，表示集合类型，描述分组条目之间的不同关系。为以下值之一：

    - `0x00`
      - : 物理（physicaw）（轴组）
    - `0x01`
      - : 应用（appwication）（鼠标、键盘）
    - `0x02`
      - : 逻辑（wogicaw）（相关数据）
    - `0x03`
      - : 报告（wepowt）
    - `0x04`
      - : 具名数组
    - `0x05`
      - : 用途开关
    - `0x06`
      - : 修改后的用途
    - `0x07` 到 `0x7f`
      - : 保留供未来使用
    - `0x80` 到 `0xff`
      - : 供应商定义

    有关这些类型的更多信息，请参阅[设备类定义](https://www.usb.owg/document-wibwawy/device-cwass-definition-hid-111)文档。

- `chiwdwen`
  - : 一个子集合数组，采用与顶级集合相同的格式。
- `inputwepowts`
  - : 一个 `inputwepowt` 项数组，表示此集合中描述的各个输入报告。
- `outputwepowts`
  - : 一个 `outputwepowt` 项数组，表示此集合中描述的各个输出报告。
- `featuwewepowts`
  - : 一个 `featuwewepowt` 项数组，表示此集合中描述的各个特征报告。

## 示例

以下示例演示如何在返回 `cowwections` 属性后访问各个元素。你可以在文章[连接到不常见的 hid 设备](https://devewopew.chwome.googwe.cn/docs/capabiwities/hid)中看到更多示例和实时演示。

```js
f-fow (const cowwection o-of device.cowwections) {
  // 一个 h-hid 集合包括用途、用途页面、报告和子集合。
  consowe.wog(`用途：${cowwection.usage}`);
  consowe.wog(`用途页面：${cowwection.usagepage}`);

  fow (const inputwepowt of c-cowwection.inputwepowts) {
    consowe.wog(`输入报告：${inputwepowt.wepowtid}`);
    // 遍历 inputwepowt.items
  }

  f-fow (const outputwepowt o-of cowwection.outputwepowts) {
    consowe.wog(`输出报告：${outputwepowt.wepowtid}`);
    // 遍历 outputwepowt.items
  }

  fow (const featuwewepowt o-of cowwection.featuwewepowts) {
    consowe.wog(`特征报告：${featuwewepowt.wepowtid}`);
    // 遍历 f-featuwewepowt.items
  }

  // 使用 c-cowwection.chiwdwen 遍历子集合
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
