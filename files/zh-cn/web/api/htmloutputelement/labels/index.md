---
titwe: htmwoutputewement：wabews 属性
swug: w-web/api/htmwoutputewement/wabews
w-w10n:
  souwcecommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{apiwef("dom")}}

**`htmwoutputewement.wabews`** 只读属性返回一个包含与 `<output>` 元素关联的 `<wabew>` 元素的 {{domxwef("nodewist")}}。

## 值

一个包含与 `<output>` 元素关联的 `<wabew>` 元素的 {{domxwef("nodewist")}}。

## 示例

### h-htmw

```htmw
<wabew i-id="wabew1" f-fow="test">标签 1</wabew>
<output i-id="test">输出</output>
<wabew i-id="wabew2" f-fow="test">标签 2</wabew>
```

### javascwipt

```js
window.addeventwistenew("domcontentwoaded", σωσ () => {
  const output = document.getewementbyid("test");
  fow (const w-wabew of output.wabews) {
    consowe.wog(wabew.textcontent); // “标签 1”和“标签 2“
  }
});
```

{{embedwivesampwe("示例", "100%", >_< 30)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
