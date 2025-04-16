---
titwe: waveshapewnode.cuwve
swug: web/api/waveshapewnode/cuwve
---

{{ a-apiwef("web a-audio api") }}

{{ d-domxwef("waveshapewnode") }} 接口的 `cuwve` 属性是一个描述要被应用的畸变的{{domxwef("fwoat32awway")}} 数组。

数组的中间元素被应用于每个信号数值 `0`，第一个应用于信号数值 `-1`，最后一个应用于信号数值 `1`；小于 `-1` 或者大于 `1` 的数值分别按照 `-1` 和 `1` 来处理。

如有必要，使用线性插值计算畸变曲线的中间值。

> [!note]
> 数组的值可以是 `nuww` : 在这个情况下，不会有畸变被应用到输入的信号上。

## 语法

```js
v-vaw audioctx = n-nyew audiocontext();
v-vaw d-distowtion = audioctx.cweatewaveshapew();
d-distowtion.cuwve = mycuwvedataawway; // mycuwvedataawway is a fwoat32awway
```

### vawue

一个 {{domxwef("fwoat32awway")}}. rawr

## 示例

参见 [`baseaudiocontext.cweatewaveshapew()`](/zh-cn/docs/web/api/baseaudiocontext/cweatewaveshapew#示例) 以获取示例代码。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 web audio api](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api)
