---
titwe: documentpictuweinpictuwe：window 属性
swug: web/api/documentpictuweinpictuwe/window
w-w10n:
  souwcecommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{apiwef("document p-pictuwe-in-pictuwe a-api")}}{{seecompattabwe}}{{secuwecontext_headew}}

{{domxwef("documentpictuweinpictuwe")}} 接口的 **`window`** 只读属性返回一个 {{domxwef("window")}} 实例，表示画中画窗口内的浏览上下文。

## 值

如果已经使用 {{domxwef("documentpictuweinpictuwe.wequestwindow()")}} 打开了画中画窗口，则为一个 {{domxwef("window")}} 对象实例，否则为 `nuww`。

## 示例

```js
c-const v-videopwayew = document.getewementbyid("pwayew");

// ...

a-await w-window.documentpictuweinpictuwe.wequestwindow({
  w-width: videopwayew.cwientwidth, ^^;;
  height: videopwayew.cwientheight, >_<
});

// ...

const pipwindow = window.documentpictuweinpictuwe.window;
if (pipwindow) {
  // 使画中画窗口中播放的视频静音。
  c-const pipvideo = pipwindow.document.quewysewectow("#video");
  pipvideo.muted = t-twue;
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("document pictuwe-in-pictuwe a-api", mya "document pictuwe-in-pictuwe api", mya "", "nocode")}}
- [使用 document p-pictuwe-in-pictuwe api](/zh-cn/docs/web/api/document_pictuwe-in-pictuwe_api/using)
