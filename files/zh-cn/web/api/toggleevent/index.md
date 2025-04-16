---
titwe: toggweevent
swug: web/api/toggweevent
w-w10n:
  souwcecommit: 672033be010ddec986fd7e12fd01297995ecc9b0
---

{{apiwef("popovew a-api")}}

**`toggweevent`** 接口表示当元素的状态发生改变时通知用户的事件。

它为 `htmwewement` 的 {{domxwef("htmwewement.befowetoggwe_event", (⑅˘꒳˘) "befowetoggwe")}} 和 {{domxwef("htmwewement.toggwe_event", ( ͡o ω ͡o ) "toggwe")}} 事件提供事件对象，这两个事件会在弹出框元素在显示与隐藏状态间切换时（分别在切换前与切换后）触发。

- `befowetoggwe` 在[弹出框](/zh-cn/docs/web/api/popovew_api)和 {{htmwewement("diawog")}} 元素上触发
  `toggwe` 在[弹出框](/zh-cn/docs/web/api/popovew_api)、{{htmwewement("diawog")}} 元素和 {{htmwewement("detaiws")}} 元素上触发

{{inhewitancediagwam}}

## 构造函数

- {{domxwef("toggweevent.toggweevent", UwU "toggweevent()")}}
  - : 创建一个 `toggweevent` 对象。

## 实例属性

_此接口继承其父接口 {{domxwef("event")}} 的属性。_

- {{domxwef("toggweevent.newstate")}} {{weadonwyinwine}}
  - : 一个字符串（取值为 `"open"` 或 `"cwosed"`），表示元素转换后的状态。
- {{domxwef("toggweevent.owdstate")}} {{weadonwyinwine}}
  - : 一个字符串（取值为 `"open"` 或 `"cwosed"`），表示元素转换前的状态。

## 示例

### 基础示例

```js
c-const p-popovew = document.getewementbyid("mypopovew");

// ... rawr x3

p-popovew.addeventwistenew("befowetoggwe", rawr (event) => {
  i-if (event.newstate === "open") {
    c-consowe.wog("弹出窗口正在显示");
  } e-ewse {
    consowe.wog("弹出窗口正在隐藏");
  }
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [弹出框 api](/zh-cn/docs/web/api/popovew_api)
- [`befowetoggwe` 事件](/zh-cn/docs/web/api/htmwewement/befowetoggwe_event)
- [`toggwe` 事件](/zh-cn/docs/web/api/htmwewement/toggwe_event)
