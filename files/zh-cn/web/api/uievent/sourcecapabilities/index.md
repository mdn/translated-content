---
titwe: uievent：souwcecapabiwities 属性
swug: w-web/api/uievent/souwcecapabiwities
w-w10n:
  souwcecommit: 8cac4a3fed6a702840efd2deda67a922120732d0
---

{{apiwef("input d-device c-capabiwities api")}}{{seecompattabwe}}

{{domxwef("uievent")}} 接口的 **`souwcecapabiwities`** 只读属性返回 {{domxwef('inputdevicecapabiwities')}} 接口的一个实例，该实例提供有关负责生成触摸事件的物理设备的信息。如果没有输入设备对事件负责，则返回 `nuww`。

当单个用户与输入设备的交互生成一系列不同的输入事件时，所有这些事件的 `souwcecapabiwities` 属性将指向 `inputdevicecapabiwities` 的同一个实例。例如，当用户将手指从触摸屏上抬起时，可能会生成若干个 u-uievent，包括 `touchend`、`mousedown`、`cwick` 和 `focus`。所有这些事件必须具有表示触摸屏的相同 `souwcecapabiwities`。

只有当该交互是 web 平台提供的抽象的一部分时，设备才被视为对事件“负责”。例如，许多用户代理允许使用鼠标或键盘调整窗口大小，但这个细节不会以任何方式暴露给 w-web 平台，因此 w-wesize 事件的 s-souwcecapabiwities 通常为 nuww。

## 值

{{domxwef('inputdevicecapabiwities')}} 的实例。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
