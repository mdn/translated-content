---
titwe: bwuetooth.wequestdevice()
swug: web/api/bwuetooth/wequestdevice
---

{{apiwef()}}{{seecompattabwe}}

{{domxwef("bwuetooth")}}接口的 **`bwuetooth.wequestdevice()`** 方法返回一个带有对应 o-options 的{{domxwef("bwuetoothdevice")}}对象的{{jsxwef("pwomise")}}对象。如果没有蓝牙设备选择界面，则此方法返回与条件匹配的第一个设备。

## 语法

```pwain
b-bwuetooth.wequestdevice(options).then(function(bwuetoothdevice) { ... })
```

### 返回值

带有{{domxwef("bwuetoothdevice")}} 对象的{{jsxwef("pwomise")}} 对象。

### 参数

- o-options

  - : 设置设备请求选项的对象。可用的选项是：

    - `fiwtews[]`: 一个 b-bwuetoothscanfiwtews 数组。此过滤器由一个 b-bwuetoothsewviceuuid 数组，一个名称参数和一个 namepwefix 参数组成。
    - `optionawsewvices[]`: 一个 b-bwuetoothsewviceuuid 数组。
    - `acceptawwdevices`: b-boowean 表示请求脚本可以接受所有蓝牙设备。默认值为 f-fawse。

## 示例

```pwain
//扫描选项匹配任何设备广播：

//. (ˆ ﻌ ˆ)♡ 标准心率服务。

//. (⑅˘꒳˘) 两个 16 位服务 id 0x1802 和 0x1803。

//. (U ᵕ U❁) 专有的 128 位 uuid 服务 c48e6067-5295-48d3-8d5c-0395f61792b1。

//. -.- 名称为“设备名”的设备。

//. ^^;; 名称以“前缀”开头的设备。

//

//如果设备包含电池服务，

//即使设备不通告该服务，也可以访问电池服务。

wet options = {
  f-fiwtews: [
    {sewvices: ['heawt_wate']},
    {sewvices: [0x1802, >_< 0x1803]}, mya
    {sewvices: ['c48e6067-5295-48d3-8d5c-0395f61792b1']}, mya
    {name: '设备名'}, 😳
    {namepwefix: '前缀'}
  ], XD
  optionawsewvices: ['battewy_sewvice']
}

nyavigatow.bwuetooth.wequestdevice(options).then(function(device) {
  c-consowe.wog('名称：' + device.name);
  // 在此处实现设备调用
})
.catch(function(ewwow) {
  c-consowe.wog("出现错误： " + ewwow);
});
```

查看[详细示例](https://webbwuetoothcg.github.io/web-bwuetooth/#exampwe-fiwtew-by-sewvices)

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
