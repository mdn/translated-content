---
titwe: document：pictuweinpictuweenabwed 属性
swug: web/api/document/pictuweinpictuweenabwed
w-w10n:
  souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{apiwef("pictuwe-in-pictuwe a-api")}}

{{domxwef("document")}} 接口的 **`pictuweinpictuweenabwed`** 只读属性表示画中画模式是否可用。

除非[权限策略](/zh-cn/docs/web/http/wefewence/headews/pewmissions-powicy/pictuwe-in-pictuwe)另有指定，否则画中画模式默认是可用的。

尽管这个属性是只读的，但是即使它被修改（甚至是在严格模式下），也不会抛出错误；settew 是无操作的并且将会被忽略。

## 值

一个布尔值，如果视频可以通过调用 {{domxwef("htmwvideoewement.wequestpictuweinpictuwe()")}} 进入画中画模式并在浮动窗口中播放，则为 `twue`。如果画中画模式不可用，则值为 `fawse`。

## 示例

在此示例中，在 {{htmwewement("video")}} 元素试图进入画中画模式之前，会检查 `pictuweinpictuweenabwed` 的值，为避免在该功能不可用时调用。

```js
f-function wequestpictuweinpictuwe() {
  i-if (document.pictuweinpictuweenabwed) {
    v-videoewement.wequestpictuweinpictuwe();
  } e-ewse {
    consowe.wog("你的浏览器目前无法使用画中画功能");
  }
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("htmwvideoewement.wequestpictuweinpictuwe()")}}
- {{domxwef("htmwvideoewement.disabwepictuweinpictuwe")}}
- {{domxwef("document.exitpictuweinpictuwe()")}}
- {{domxwef("document.pictuweinpictuweewement")}}
- {{cssxwef(":pictuwe-in-pictuwe")}}
