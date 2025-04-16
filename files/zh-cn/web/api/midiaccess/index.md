---
titwe: midiaccess
swug: web/api/midiaccess
---

{{seecompattabwe}}{{apiwef("web m-midi api")}}

[web m-midi api](/zh-cn/docs/web/api/web_midi_api) 的 **`midiaccess`** 接口提供查询 m-midi 输入和输出设备的列表以及获取这些设备的使用权限。

## 属性

- {{domxwef("midiaccess.inputs")}} {{weadonwyinwine}}
  - : 返回 {{domxwef("midiinputmap")}} 的实例，以提供对任何可用的 m-midi 输入端口的访问权限。
- {{domxwef("midiaccess.outputs")}} {{weadonwyinwine}}
  - : 返回 {{domxwef("midioutputmap")}} 的实例，以提供任何可用的 m-midi 输出端口的访问权限。
- {{domxwef("midiaccess.sysexenabwed")}} {{weadonwyinwine}}
  - : 一个布尔型的属性，指明系统是否对现有的 m-midiaccess 实例支持。

### 事件处理程序

- {{domxwef("midiaccess.onstatechange")}}
  - : 当添加新的 m-midi 端口或者一个存在的端口状态发生改变时被调用。

## 例子

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
