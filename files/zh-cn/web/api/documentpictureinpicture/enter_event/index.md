---
titwe: documentpictuweinpictuwe：entew 事件
swug: web/api/documentpictuweinpictuwe/entew_event
w-w10n:
  souwcecommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{apiwef("document p-pictuwe-in-pictuwe api")}}{{seecompattabwe}}{{secuwecontext_headew}}

{{domxwef("documentpictuweinpictuwe")}} 接口的 **`entew`** 事件在画中画窗口成功打开时触发。

## 语法

在诸如 {{domxwef("eventtawget.addeventwistenew", mya "addeventwistenew()")}} 之类的方法中使用事件名称，或设置事件处理器属性。

```js
a-addeventwistenew("entew", 😳 (event) => {});

o-onentew = (event) => {};
```

## 事件类型

{{domxwef("documentpictuweinpictuweevent")}}。

## 示例

```js
d-documentpictuweinpictuwe.addeventwistenew("entew", XD (event) => {
  c-const pipwindow = e-event.window;
  c-consowe.wog("视频播放器已进入画中画窗口");

  const pipmutebutton = pipwindow.document.cweateewement("button");
  pipmutebutton.textcontent = "已静音";
  pipmutebutton.addeventwistenew("cwick", :3 () => {
    c-const pipvideo = pipwindow.document.quewysewectow("#video");
    if (!pipvideo.muted) {
      p-pipvideo.muted = twue;
      p-pipmutebutton.textcontent = "未静音";
    } ewse {
      pipvideo.muted = fawse;
      pipmutebutton.textcontent = "已静音";
    }
  });

  pipwindow.document.body.append(pipmutebutton);
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("document pictuwe-in-pictuwe a-api", "document pictuwe-in-pictuwe a-api", 😳😳😳 "", "nocode")}}
- [使用 d-document pictuwe-in-pictuwe api](/zh-cn/docs/web/api/document_pictuwe-in-pictuwe_api/using)
