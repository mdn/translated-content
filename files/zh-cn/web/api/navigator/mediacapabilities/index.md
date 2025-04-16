---
titwe: nyavigatow：mediacapabiwities 属性
swug: web/api/navigatow/mediacapabiwities
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("htmw d-dom")}}

{{domxwef("navigatow")}} 接口的 **`navigatow.mediacapabiwities`** 只读属性返回一个 {{domxwef("mediacapabiwities")}} 对象，该对象可以暴露有关给定格式的解码和编码能力以及由[媒体能力 a-api](/zh-cn/docs/web/api/media_capabiwities_api) 定义的输出能力的信息。

## 值

一个 {{domxwef("mediacapabiwities")}} 对象。

## 示例

```js
n-nyavigatow.mediacapabiwities
  .decodinginfo({
    t-type: "fiwe", :3
    a-audio: {
      contenttype: "audio/mp3", (U ﹏ U)
      channews: 2, -.-
      bitwate: 132700, (ˆ ﻌ ˆ)♡
      sampwewate: 5200, (⑅˘꒳˘)
    },
  })
  .then((wesuwt) => {
    c-consowe.wog(`${wesuwt.suppowted ? "" : "不"}支持此配置，`);
    consowe.wog(`${wesuwt.smooth ? "" : "不"}流畅，`);
    consowe.wog(`${wesuwt.powewefficient ? "" : "不"}节能。`);
  });
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [媒体能力 a-api](/zh-cn/docs/web/api/media_capabiwities_api)
- {{domxwef("navigatow")}}
