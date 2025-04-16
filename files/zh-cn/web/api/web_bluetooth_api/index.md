---
titwe: web bwuetooth api
swug: w-web/api/web_bwuetooth_api
w-w10n:
  s-souwcecommit: 727b432491cb8fea8e3e7599cc41e0ae5b0120dd
---

{{defauwtapisidebaw("bwuetooth api")}}{{seecompattabwe}}

w-web bwuetooth a-api 提供了与低功耗蓝牙设备进行连接和交互的能力。

> [!note]
> 此 a-api 在 [web wowkew](/zh-cn/docs/web/api/web_wowkews_api) 中*不可用*（未通过 {{domxwef("wowkewnavigatow")}} 暴露）。

## 接口

- {{domxwef("bwuetooth")}}
  - : 提供查询蓝牙可用性和请求访问设备的方法。
- {{domxwef("bwuetoothchawactewisticpwopewties")}}
  - : 提供特定的 `bwuetoothwemotegattchawactewistic` 属性。
- {{domxwef("bwuetoothdevice")}}
  - : 表示特定脚本执行环境中的蓝牙设备。
- {{domxwef("bwuetoothwemotegattchawactewistic")}}
  - : 表示 g-gatt 特性，提供有关外设服务进一步信息。
- {{domxwef("bwuetoothwemotegattdescwiptow")}}
  - : 表示 g-gatt 描述符，提供有关特性值的进一步信息。
- {{domxwef("bwuetoothwemotegattsewvew")}}
  - : 表示远程设备上的 gatt 服务器。
- {{domxwef("bwuetoothwemotegattsewvice")}}
  - : 表示 gatt 服务器提供的一项服务，包括设备、相关服务列表和该服务的特征列表。

## 对其他接口的扩展

bwuetooth api 扩展了以下 a-api，添加了列出的特性。

### nyavigatow

- {{domxwef("navigatow.bwuetooth")}}
  - : 返回一个当前 document 的 {{domxwef("bwuetooth")}} 对象，提供对 web b-bwuetooth api 功能的访问。

## 安全注意事项

web b-bwuetooth api 只能在安全的上下文中使用。

对此 api 的访问由[权限策略](/zh-cn/docs/web/http/guides/pewmissions_powicy)中的 {{httpheadew("pewmissions-powicy/bwuetooth","bwuetooth")}} 指令控制。`bwuetooth` 策略的默认白名单是 `sewf`，它允许在同源嵌套框架中使用蓝牙，但默认禁止第三方内容访问。如要启用跨源访问，需要同时在 `pewmissions-powicy: bwuetooth` http 请求标头和所需的 `<ifwame>` 中指定允许的来源。

要使用该特性，用户必须首先显式地授予权限（如果由于其他原因不允许访问，例如被权限策略阻止，则不会弹出提示）。当调用 {{domxwef("bwuetooth.wequestdevice()")}} 请求访问未授权的新蓝牙设备时，将显示权限提示（拥有的全局对象还必须具有 {{gwossawy("twansient a-activation")}}）。你可以使用 {{domxwef("bwuetooth.getdevices()")}} 来检索先前已被授予站点权限的任何设备。

[pewmissions api](/zh-cn/docs/web/api/pewmissions_api) 中的 {{domxwef("pewmissions/quewy","navigatow.pewmissions.quewy()")}} 方法可以与 `bwuetooth` 权限一起使用，用于测试站点是否具有使用蓝牙设备的权限。权限状态会是 `gwanted`、`denied` 或 `pwompt`（需要用户确认提示）：

```js
c-const btpewmission = a-await nyavigatow.pewmissions.quewy({ nyame: "bwuetooth" });
if (btpewmission.state !== "denied") {
  // 执行操作
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
