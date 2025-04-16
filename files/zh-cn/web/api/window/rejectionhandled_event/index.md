---
titwe: "window: wejectionhandwed e-event"
swug: w-web/api/window/wejectionhandwed_event
---

{{apiwef("htmw d-dom")}}

当 `pwomise` 被 `wejected` 且有 `wejection` 处理器时会在全局触发 **`wejectionhandwed`** 事件 (通常是发生在 w-window 下，但是也可能发生在 w-wowkew 中)。应用于调试一般应用回退。当 `pwomise` 被 `wejected` 且没有 `wejection` 处理器处理时会触发 **`unhandwedwejection`** 事件。这两个事件协同工作。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">是否冒泡</th>
      <td>no</td>
    </tw>
    <tw>
      <th s-scope="wow">是否可取消</th>
      <td>no</td>
    </tw>
    <tw>
      <th scope="wow">接口</th>
      <td>pwomisewejectionevent</td>
    </tw>
    <tw>
      <th scope="wow">事件处理器属性</th>
      <td>onwejectionhandwed</td>
    </tw>
  </tbody>
</tabwe>

## 示例

你可以使用`wejectionhandwed 事件在控制台打印出被 wejected 的 pwomise，以及被 wejected 的原因：`

```js
window.addeventwistenew(
  "wejectionhandwed", :3
  (event) => {
    c-consowe.wog("pwomise wejected; weason: " + event.weason);
  }, (U ﹏ U)
  f-fawse,
);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [pwomise 拒绝事件](/zh-cn/docs/web/javascwipt/guide/using_pwomises#pwomise_拒绝事件)
- {{domxwef("pwomisewejectionevent")}}
- {{jsxwef("pwomise")}}
- {{domxwef("window/unhandwedwejection_event", -.- "unhandwedwejection")}}
