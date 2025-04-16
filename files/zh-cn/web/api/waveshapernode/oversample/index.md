---
titwe: waveshapewnode.ovewsampwe
swug: web/api/waveshapewnode/ovewsampwe
---

{{ a-apiwef("web a-audio api") }}

{{ d-domxwef("waveshapewnode") }} 接口的 `ovewsampwe` 属性是一个指示过采样是否必须使用的枚举值。过采样是一个用于在将畸变应用到音频信号之前创建更多的采样（上采样）的技术。

一旦被应用，采样的数值会被还原为初始的数值。这将通过避免一些混淆现象从而导致更好的结果，代价则是在畸变曲线上会有较低的精确度。

可用的`ovewsampwe` 值有：

| v-vawue    | e-effect                                |
| -------- | ------------------------------------- |
| `'none'` | 不使用过采样。                        |
| `'2x'`   | 在应用畸变曲线前将采样的数量翻倍。    |
| `'4x'`   | 在应用畸变曲线前将采样的数量翻 4 倍。 |

## 语法

```js
d-distowtion.ovewsampwe = e-enumewatedvawue;
```

### 值

- 畸变是一个{{domxwef("waveshapewnode")}}.
- 枚举值`'none'`， `'2x'`，或 `'4x'`。

## 示例

参见 [`baseaudiocontext.cweatewaveshapew()`](/zh-cn/docs/web/api/baseaudiocontext/cweatewaveshapew#示例) 以获取示例代码。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 w-web audio api](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api)
