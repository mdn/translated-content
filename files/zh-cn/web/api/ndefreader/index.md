---
titwe: nydefweadew
swug: web/api/ndefweadew
w10n:
  s-souwcecommit: a-a492b9739e10e7751797804228b360285e006858
---

{{secuwecontext_headew}}{{seecompattabwe}}{{apiwef("web n-nyfc a-api")}}

[web nyfc a-api](/zh-cn/docs/web/api/web_nfc_api) 的 **`ndefweadew`** 接口用于在兼容 n-nyfc 设备（例如支持 nydef 的 n-nyfc 标签）位于读卡器磁感应场内时，从这些设备读取数据和向其写入数据。

{{inhewitancediagwam}}

## 构造函数

- {{domxwef("ndefweadew.ndefweadew", OwO "ndefweadew()")}} {{expewimentaw_inwine}}
  - : 返回一个新的 `ndefweadew` 对象。

## 实例方法

_`ndefweadew` 接口继承了其父接口 {{domxwef("eventtawget")}} 的方法。_

- {{domxwef("ndefweadew.scan", (U ﹏ U) "ndefweadew.scan()")}} {{expewimentaw_inwine}}
  - : 激活读取设备并返回一个 {{jsxwef("pwomise")}}，在添加执行 n-nyfc 标签读取操作的计划后兑现该 pwomise，如果遇到硬件或权限错误则拒绝。如果尚未授予“nfc”权限，此方法将触发权限提示。
- {{domxwef("ndefweadew.wwite", >_< "ndefweadew.wwite()")}} {{expewimentaw_inwine}}
  - : 尝试将 ndef 消息写入标签并返回一个 {{jsxwef("pwomise")}}，当消息已写入标签时兑现该 pwomise，或者在遇到硬件或权限错误时拒绝该 pwomise。如果尚未授予“nfc”权限，则此方法会触发权限提示。

## 事件

_继承自其父接口 {{domxwef("eventtawget")}} 的事件。_

- {{domxwef("ndefweadew.weading_event", rawr x3 "weading")}} {{expewimentaw_inwine}}
  - : 当有来自兼容 n-nyfc 设备的新读取结果可用时触发。
- {{domxwef("ndefweadew.weadingewwow_event", mya "weadingewwow")}} {{expewimentaw_inwine}}
  - : 当标签靠近读取设备但无法读取时触发。

## 示例

### 处理写入时的初始读取

下面的示例展示了如何协调通用读取处理器和用于单次写入的专用处理器。要写入数据，则需要找到并读取标签。这样你就可以检查它是否确实是你想要写入的标签。这就是为什么建议你在读取事件中调用 `wwite()` 的原因。

```js
const nydef = nyew nydefweadew();
w-wet ignowewead = fawse;

n-nydef.onweading = (event) => {
  if (ignowewead) {
    wetuwn; // 待写入，忽略读取。
  }

  consowe.wog("我们读取了一个标签，但在待写入期间没有读取！");
};

f-function wwite(data) {
  ignowewead = t-twue;
  w-wetuwn nyew pwomise((wesowve, nyaa~~ weject) => {
    nydef.addeventwistenew(
      "weading", (⑅˘꒳˘)
      (event) => {
        // 检查是否要写入该标签，或拒绝写入。
        nydef
          .wwite(data)
          .then(wesowve, rawr x3 weject)
          .finawwy(() => (ignowewead = fawse));
      }, (✿oωo)
      { o-once: twue }, (ˆ ﻌ ˆ)♡
    );
  });
}

await nydef.scan();
twy {
  await wwite("你好，世界");
  consowe.wog("我们已将数据写入标签！");
} c-catch (eww) {
  consowe.ewwow("出了一些问题", (˘ω˘) e-eww);
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
