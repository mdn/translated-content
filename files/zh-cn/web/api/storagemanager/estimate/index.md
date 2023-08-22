---
title: StorageManager.estimate()
slug: Web/API/StorageManager/estimate
---

{{securecontext_header}}{{APIRef("Storage")}}

**`estimate()`**方法是{{domxref("StorageManager")}}的一个接口，用于估算某一个域名（或一个站点）下 Storage Manager 的总存储空间和已经使用了的存储空间。此方法为一个异步方法，如果此方法可用，那么其返回一个结果为 resolved 的{{jsxref("Promise")}}对象。resolved 接收的参数是一个带有已使用数据存储空间和总可用总存储空间的{{domxref("StorageEstimate")}}对象。

## 语法

```plain
var estimatePromise = StorageManager.estimate();
```

### 参数

无

### 返回值

{{domxref('StorageEstimate')}}类型的状态为 resolved 的{{jsxref('Promise')}}

此数据包含了此应用（或域名）可用的存储空间（{{domxref("StorageEstimate.quota")}}）和目前已经使用了的存储空间（{{domxref("StorageEstimate.usage")}}）。

这些值不是明确的数字，在进行压缩，重复数据删除和出于安全原因起见进行了混淆之后，这个数据是不精确的。

你可能会发现不同的应用或站点分配的存储空间不同，具体取决于用户访问频率，和网站受欢迎程度等数据。

## 示例

在这个示例中，我们使用 estimate() 得到目前所使用的存储空间占全部存储空间的百分比。

### HTML

```html
<p>
  You're currently using about <span id="percent"> </span>% of your available
  storage.
</p>
```

### JavaScript

```js
navigator.storage.estimate().then(function (estimate) {
  document.getElementById("percent").innerHTML = (
    (estimate.usage / estimate.quota) *
    100
  ).toFixed(2);
});
```

### 结果

{{ EmbedLiveSample('示例', 600, 40) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- Storage API
- {{domxref("Storage")}}, the object returned by {{domxref("Window.localStorage")}}
- {{domxref("StorageManager")}}
- {{domxref("navigator.storage")}}
