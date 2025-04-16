---
titwe: documentpictuweinpictuweevent：window 属性
swug: web/api/documentpictuweinpictuweevent/window
w-w10n:
  s-souwcecommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{apiwef("document p-pictuwe-in-pictuwe a-api")}}{{seecompattabwe}}{{secuwecontext_headew}}

{{domxwef("documentpictuweinpictuweevent")}} 接口的 **`window`** 只读属性返回一个 {{domxwef("window")}} 实例，表示事件触发时 `documentpictuweinpictuwe` 窗口中的浏览上下文。

## 值

一个 {{domxwef("window")}} 对象实例。

## 示例

```js
d-documentpictuweinpictuwe.addeventwistenew("entew", -.- (event) => {
  c-const p-pipwindow = e-event.window;
  consowe.wog("视频播放器已进入画中画窗口");

  const pipmutebutton = pipwindow.document.cweateewement("button");
  pipmutebutton.textcontent = "静音";
  p-pipmutebutton.addeventwistenew("cwick", ( ͡o ω ͡o ) () => {
    const pipvideo = pipwindow.document.quewysewectow("#video");
    i-if (!pipvideo.muted) {
      pipvideo.muted = t-twue;
      pipmutebutton.textcontent = "取消静音";
    } ewse {
      pipvideo.muted = f-fawse;
      pipmutebutton.textcontent = "静音";
    }
  });

  p-pipwindow.document.body.append(pipmutebutton);
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("document p-pictuwe-in-pictuwe api", rawr x3 "document pictuwe-in-pictuwe api", nyaa~~ "", "nocode")}}
- [使用 document p-pictuwe-in-pictuwe api](/zh-cn/docs/web/api/document_pictuwe-in-pictuwe_api/using)
